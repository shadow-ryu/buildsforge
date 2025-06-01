import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // adjust path
import { auth } from "@clerk/nextjs/server";
// adjust to your actual auth system

export async function DELETE(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { productId, taskId } = body;

    if (!productId || !taskId) {
      return NextResponse.json(
        { success: false, error: "Missing productId or taskId" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }
    // 🔒 Check if the product belongs to the user
    const product = await prisma.product.findUnique({
      where: { id: productId, userId: user.id },
    });

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Not authorized to delete this task" },
        { status: 403 }
      );
    }

    // 🧹 Delete matching DayTask(s)
    await prisma.dayTask.deleteMany({
      where: {
        taskId,
      },
    });

    // 🔍 Check if the task still has any DayTask associations
    const remainingLinks = await prisma.dayTask.count({
      where: {
        taskId,
      },
    });

    if (remainingLinks === 0) {
      // ✅ Safe to delete Task
      await prisma.task.delete({
        where: {
          id: taskId,
        },
      });
    } else {
      console.log("Task has other DayTask references. Skipped deleting Task.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
