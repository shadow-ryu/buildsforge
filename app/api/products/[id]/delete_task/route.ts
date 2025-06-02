import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // adjust path
import { auth } from "@clerk/nextjs/server";
// adjust to your actual auth system

export async function PATCH(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log("Received request to delete task");
    const { data } = await req.json();
    console.log(data, "body");
    const { productId, taskId } = data;

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
    // const product = await prisma.product.findUnique({
    //   where: { id: productId, userId: user.id },
    // });

    // if (!product) {
    //   return NextResponse.json(
    //     { success: false, error: "Not authorized to delete this task" },
    //     { status: 403 }
    //   );
    // }
    const dayTask = await prisma.dayTask.findFirst({
      where: {
        id: taskId,
      },
      include: {
        task: true,
      },
    });
    if (!dayTask) {
      return NextResponse.json(
        { success: false, error: "task not found" },
        { status: 404 }
      );
    }

    // 🧹 Delete matching DayTask(s)
    await prisma.dayTask.deleteMany({
      where: {
        id: taskId,
      },
    });

    // 🔍 Check if the task still has any DayTask associations
    const parentTaskId = dayTask.taskId;
    const remainingLinks = await prisma.dayTask.count({
      where: {
        taskId: parentTaskId,
      },
    });
    if (remainingLinks === 0) {
      // ✅ Safe to delete Task
      await prisma.task.delete({
        where: {
          id: parentTaskId!,
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
