import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma"; // adjust path as needed
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }
    const user = await prisma.user.findFirst({
      where: {
        clerkId: userId,
      },
    });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }
    const input = await req.json();
    console.log("Received data for MVP generation:", input);

    // Generate slug from product name
    let slug = input.app_name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    // Check if product with same slug exists
    const existingProduct = await prisma.product.findFirst({
      where: { slug },
    });
    if (existingProduct) {
      slug = `${slug}-${Date.now()}`;
    }
    // Create Product
    const product = await prisma.product.create({
      data: {
        name: input.app_name,
        slug,
        description: "",
        problemStatement: input.problem_statement,
        targetAudience: input.target_audience,
        userGoals: input.user_goals,
        uniqueValueProp: input.unique_value_proposition,
        techStack: input.tech_stack,
        inspirationApps: JSON.stringify(input.inspiration_apps),
        initialFeatures: JSON.stringify(input.initial_features),
        userId: user.id,
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        dailyCommitmentHrs: 2.0,
      },
    });

    return NextResponse.json({ success: true, productId: product.id });
  } catch (error) {
    console.error("Error in /api/products/create:", error);
    return NextResponse.json(
      { success: false, error: error?.toString() },
      { status: 500 }
    );
  }
}
