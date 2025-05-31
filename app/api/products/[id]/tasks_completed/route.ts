import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const user = await prisma.user.findFirst({ where: { clerkId: userId } });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // ✅ Reverse-join DayTask → Task → Feature → Product
    const completedTasks = await prisma.dayTask.findMany({
      where: {
        status: "completed",
        completedAt: {
          gte: today,
        },
        task: {
          feature: {
            product: {
              id,
              userId: user.id,
            },
          },
        },
      },
      orderBy: {
        completedAt: "desc",
      },
      select: {
        id: true,
        taskId: true,
        dayIndex: true,
        completedAt: true,
        category: true,
        description: true,
        task: {
          select: {
            title: true,
          },
        },
      },
    });

    return NextResponse.json({ success: true, tasks: completedTasks });
  } catch (error) {
    console.error("Error fetching completed tasks:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch completed tasks" },
      { status: 500 }
    );
  }
}
