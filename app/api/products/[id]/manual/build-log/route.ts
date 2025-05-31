import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


export async function POST(req: NextRequest) {
  try {
    const {
      dayIndex,
      projectId,
      content = "",
      selectedTasks = [],
    } = await req.json();

    if (!projectId || typeof dayIndex !== "number" || !content) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findFirst({ where: { clerkId } });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const project = await prisma.product.findUnique({
      where: { id: projectId, userId: user.id },
    });

    if (!project) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    const today = new Date();
    const logDate = new Date(today.toISOString().split("T")[0]);

    // Prevent duplicate logs
    const doesLogExist = await prisma.buildLog.count({
      where: {
        userId: user.id,
        productId: projectId,
        dayIndex: dayIndex,
      },
    });

    if (doesLogExist > 0) {
      return NextResponse.json(
        { success: false, error: "Log already exists" },
        { status: 400 }
      );
    }



    const buildLog = await prisma.buildLog.create({
      data: {
        logDate,
        summary: content.trim(),
        tweet: "",
        generatedAt: new Date(),
        dayIndex,
        userId: user.id,
        productId: projectId,
      },
    });

    console.log("Build log created:", buildLog);
    const tasks = await prisma.dayTask.findMany({
      where: {
        id: { in: selectedTasks },
      },
    });

    // ✅ Link only completed dayTasks
    const buildLogEligibleTasks = tasks.filter(
      (t) => t.status === "completed"
    );
    await prisma.dayTask.updateMany({
      where: {
        id: { in: buildLogEligibleTasks.map((t) => t.id) },
      },
      data: {
        buildLogId: buildLog.id,
      },
    });

    return NextResponse.json({ success: true, buildLog });
  } catch (error) {
    console.error("Error generating build log:", error);
    return NextResponse.json(
      { success: false, error: error?.toString() },
      { status: 500 }
    );
  }
}
