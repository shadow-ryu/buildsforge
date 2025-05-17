import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  generateMvpPrompt_MarcAndTheoStyle,
  generateMvpPrompt_MarcLouStyle,
} from "@/lib/ai_helpers/generate-prompts";
// import { generateWithGemini } from "@/lib/ai_helpers/geminiMvpGenerator";
import { generateMvpWithChatGPT } from "@/lib/ai_helpers/chatgptMvpGenerator";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findFirst({
      where: { clerkId: userId },
    });

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

    // Check if features already exist
    const existingFeatures = await prisma.feature.findMany({
      where: { productId },
    });

    if (existingFeatures.length > 0) {
      return NextResponse.json(
        { success: false, error: "MVP already generated for this product" },
        { status: 400 }
      );
    }

    // Generate prompt and call Gemini
    const prompt = generateMvpPrompt_MarcAndTheoStyle({
      app_name: product.name,
      problem_statement: product.problemStatement,
      target_audience: product.targetAudience,
      user_goals: product.userGoals,
      unique_value_proposition: product.uniqueValueProp,
      tech_stack: product.techStack || "",
      inspiration_apps: product.inspirationApps
        ? JSON.parse(product.inspirationApps)
        : [""],
      initial_features: product.initialFeatures
        ? JSON.parse(product.initialFeatures)
        : [],
    });

    const geminiResponse = await generateMvpWithChatGPT(prompt);

    if (!geminiResponse || !Array.isArray(geminiResponse.features)) {
      return NextResponse.json(
        { success: false, error: "Invalid response from Gemini" },
        { status: 500 }
      );
    }

    // Create features & tasks in transaction
    await prisma.$transaction(async (tx) => {
      for (const feature of geminiResponse.features) {
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

    await prisma.product.update({
      where: { id: product.id },
      data: {
        isMvpGenerated: true,
        mvpSummary: geminiResponse.mvp_summary,
        description: geminiResponse.one_liner,
      },
    });
    return NextResponse.json({
      success: true,
      productId: product.id,
      mvpSummary: geminiResponse.summary,
      description: geminiResponse.one_liner,
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
