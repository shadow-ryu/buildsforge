import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  generateMvpPrompt_RealWorld,
  generateMvpPrompt_RealWorld_With_Existing_Features,
} from "@/lib/ai_helpers/solo-prompt";
import { generateWithChatGPT } from "@/lib/ai_helpers/chatgptMvpGenerator";

interface FeatureDetail {
  feature: string;
  description: string;
  rank: number;
  tasks: string[];
}

interface AIResponse {
  features: FeatureDetail[];
  target_audience?: string;
  user_goals?: string;
  unique_value_proposition?: string;
  stack?: {
    frontend?: string;
    backend?: string;
    database?: string;
  };
  mvp_summary?: string;
  one_liner?: string;
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findFirst({ where: { clerkId: userId } });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const { productId } = await req.json();
    const product = await prisma.product.findFirst({
      where: { id: productId, userId: user.id },
    });

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found or access denied" },
        { status: 404 }
      );
    }

    const existingFeatures = await prisma.feature.findMany({
      where: { productId },
      include: { tasks: true },
    });

    const existingFeaturesDetailed = existingFeatures.map((f) => ({
      name: f.name,
      description: f.description ?? "",
      tasks: f.tasks.map((t) => t.title),
    }));

    const basePromptData = {
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
    };

    const prompt =
      existingFeaturesDetailed.length > 0
        ? generateMvpPrompt_RealWorld_With_Existing_Features(
            basePromptData,
            existingFeaturesDetailed
          )
        : generateMvpPrompt_RealWorld(basePromptData);

    const aiRes: string = await generateWithChatGPT({
      prompt,
      userId: user.id,
      productId,
      type: "mvp_generation",
    });

    const data: AIResponse = JSON.parse(aiRes);
    console.log(typeof data, "data");
    if (!data || !Array.isArray(data.features)) {
      return NextResponse.json(
        { success: false, error: "Invalid AI response" },
        { status: 500 }
      );
    }

    await prisma.$transaction(async (tx) => {
      for (const feature of data.features) {
        const createdFeature = await tx.feature.create({
          data: {
            name: feature.feature,
            description: feature.description,
            rank: feature.rank,
            productId: product.id,
          },
        });

        if (feature.tasks.length > 0) {
          await tx.task.createMany({
            data: feature.tasks.map((title) => ({
              title,
              completed: false,
              featureId: createdFeature.id,
            })),
          });
        }
      }
    });

    const updates: Record<string, string> = {};
    if (!product.targetAudience && data.target_audience)
      updates.targetAudience = data.target_audience;
    if (!product.userGoals && data.user_goals)
      updates.userGoals = data.user_goals;
    if (!product.uniqueValueProp && data.unique_value_proposition)
      updates.uniqueValueProp = data.unique_value_proposition;
    if (!product.techStack && data.stack) {
      updates.techStack = Object.values(data.stack).filter(Boolean).join(", ");
    }

    await prisma.product.update({
      where: { id: productId },
      data: {
        ...updates,
        isMvpGenerated: true,
        mvpSummary: data.mvp_summary,
        description: data.one_liner,
      },
    });

    return NextResponse.json({
      success: true,
      productId: product.id,
      mvpSummary: data.mvp_summary,
      description: data.one_liner,
      slug: product.slug,
    });
  } catch (error) {
    console.error("Error in MVP generation:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
