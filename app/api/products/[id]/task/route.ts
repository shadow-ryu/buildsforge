import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { projectId, completedTasks, notes } = await req.json();
    if (!projectId || !Array.isArray(completedTasks)) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const clerkId = "user_clerk_123456";
    const user = await prisma.user.findFirst({
      where: { clerkId },
    });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const today = new Date();
    const logDate = new Date(today.toISOString().split("T")[0]); // zero time component
    // Mark tasks as completed
    console.log(completedTasks, "completedTasks");
    for (const taskId of completedTasks) {
      console.log(taskId, "taskId");

      await prisma.dayTask.update({
        where: { id:taskId },
        data: { status: "completed" },
      });
    }

    // Create daily log entry
    const log = await prisma.dailyLog.create({
      data: {
        userId: user.id,
        projectId,
        date: logDate,
        completedTasks: completedTasks,
        notes: notes || null,
      },
    });

    return NextResponse.json({ success: true, log });
  } catch (error) {
    console.error("Error completing tasks and logging:", error);
    return NextResponse.json(
      { success: false, error: error?.toString() },
      { status: 500 }
    );
  }
}
