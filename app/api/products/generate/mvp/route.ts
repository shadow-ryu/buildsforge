/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  generateMvpPrompt_RealWorld,
  generateMvpPrompt_RealWorld_With_Existing_Features,
} from "@/lib/ai_helpers/solo-prompt";
import { generateWithChatGPT } from "@/lib/ai_helpers/chatgptMvpGenerator";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId)
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );

    const user = await prisma.user.findFirst({ where: { clerkId: userId } });
    if (!user)
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );

    const { productId } = await req.json();
    const product = await prisma.product.findFirst({
      where: { id: productId, userId: user.id },
    });
    if (!product)
      return NextResponse.json(
        { success: false, error: "Product not found or access denied" },
        { status: 404 }
      );

    const existingFeatures = await prisma.feature.findMany({
      where: { productId },
      include: { tasks: true },
    });

    const existingFeaturesDetailed = existingFeatures.map((f) => ({
      feature: f.name,
      tasks: f.tasks.map((t) => t.title),
    }));

    let prompt;

    if (existingFeaturesDetailed.length > 0) {
      prompt = generateMvpPrompt_RealWorld_With_Existing_Features(
        {
          app_name: product.name,
          problem_statement: product.problemStatement,
          target_audience: product.targetAudience || "",
          user_goals: product.userGoals || "",
          unique_value_proposition: product.uniqueValueProp || "",
          tech_stack: product.techStack || "",
          inspiration_apps: product.inspirationApps
            ? JSON.parse(product.inspirationApps)
            : [],
          initial_features: product.initialFeatures
            ? JSON.parse(product.initialFeatures)
            : [],
        },
        // @ts-expect-error Type '{ feature: string; tasks: string[]; }[]' is not assignable to type '{ name: string; description: string; tasks: string[]; }[]'.
        existingFeaturesDetailed
      );
    } else {
      prompt = generateMvpPrompt_RealWorld({
        app_name: product.name,
        problem_statement: product.problemStatement,
        target_audience: product.targetAudience || "",
        user_goals: product.userGoals || "",
        unique_value_proposition: product.uniqueValueProp || "",
        tech_stack: product.techStack || "",
        inspiration_apps: product.inspirationApps
          ? JSON.parse(product.inspirationApps)
          : [],
        initial_features: product.initialFeatures
          ? JSON.parse(product.initialFeatures)
          : [],
      });
    }

    const aiRes = await generateWithChatGPT({
      prompt,
      userId: user.id,
      productId,
      type: "mvp_generation",
    });

    if (!aiRes || !Array.isArray(aiRes.features)) {
      return NextResponse.json(
        { success: false, error: "Invalid AI response" },
        { status: 500 }
      );
    }

    console.log("AI Response:", aiRes);
    await prisma.$transaction(async (tx) => {
      if (!aiRes.features.length) {
        return;
      }
      for (const feature of aiRes.features) {
        const createdFeature = await tx.feature.create({
          data: {
            name: feature.feature,
            description: feature.description,
            rank: feature.rank,
            productId: product.id,
          },
        });

        const tasks = feature.tasks.map((taskTitle: string) => ({
          title: taskTitle,
          completed: false,
          featureId: createdFeature.id,
        }));

        if (tasks.length > 0) {
          await tx.task.createMany({ data: tasks });
        }
      }
    });
    // Update product metadata if missing
    const updates: Record<string, any> = {};
    if (!product.targetAudience && aiRes.target_audience)
      updates.targetAudience = aiRes.target_audience;
    if (!product.userGoals && aiRes.user_goals)
      updates.userGoals = aiRes.user_goals;
    if (!product.uniqueValueProp && aiRes.unique_value_proposition)
      updates.uniqueValueProp = aiRes.unique_value_proposition;
    if (!product.techStack && aiRes.stack?.frontend)
      updates.techStack = Object.values(aiRes.stack).filter(Boolean).join(", ");

    await prisma.product.update({
      where: { id: productId },
      data: {
        ...updates,
        isMvpGenerated: true,
        mvpSummary: aiRes.mvp_summary,
        description: aiRes.one_liner,
      },
    });

    return NextResponse.json({
      success: true,
      productId: product.id,
      mvpSummary: aiRes.mvp_summary,
      description: aiRes.one_liner,
      slug: product.slug,
    });
  } catch (error) {
    console.error("Error in MVP generation:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: error?.toString(),
      },
      { status: 500 }
    );
  }
}
