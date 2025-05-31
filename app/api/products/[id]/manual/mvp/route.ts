// app/api/mvp/manual/create/route.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { productId, mvp_summary, features } = body;

  if (!productId || !features || !Array.isArray(features)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  try {
    // Validate product ownership
    const product = await prisma.product.findFirst({
      where: { id: productId, user: { clerkId: userId } },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Product not found or not yours" },
        { status: 403 }
      );
    }

    // Save MVP summary if provided
    if (mvp_summary) {
      await prisma.product.update({
        where: { id: productId },
        data: { mvpSummary: mvp_summary },
      });
    }

    // Get current rank baseline
    const lastFeature = await prisma.feature.findFirst({
      where: { productId },
      orderBy: { rank: "desc" },
    });
    let currentRank = lastFeature?.rank || 0;
    

    for (const f of features) {
      currentRank++;
      const newFeature = await prisma.feature.create({
        data: {
          name: f.name,
          description: f.description,
          rank: currentRank,
          productId,
        },
      });

      const taskData = (f.tasks || []).map((title: string) => ({
        title,
        featureId: newFeature.id,
      }));

      if (taskData.length > 0) {
        await prisma.task.createMany({ data: taskData });
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Manual MVP creation failed:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
