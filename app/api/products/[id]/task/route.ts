import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    const { projectId, completedTask, notes } = await req.json();
    if (!projectId || !completedTask) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const loggedUser = await currentUser();
    if (!loggedUser) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const user = await prisma.user.findFirst({
      where: { clerkId: loggedUser.id },
    });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found", clerkId: loggedUser.id },
        { status: 404 }
      );
    }

    const today = new Date();
    const logDate = new Date(today.toISOString().split("T")[0]); // zero time component
    // Mark tasks as completed
    console.log(completedTask, "completedTasks");

    const currentTask = await prisma.dayTask.findFirst({
      where: { id: completedTask },
    });

    await prisma.dayTask.update({
      where: { id: completedTask },
      data: { status: "completed" },
    });

    const completedTasks = await prisma.dayTask.findMany({
      where: {
        dayIndex: currentTask?.dayIndex,
        status: "completed",
      },
    });
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
