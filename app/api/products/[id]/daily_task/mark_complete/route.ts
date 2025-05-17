import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

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

    const { dayTaskId, productId } = await req.json();
    if (!dayTaskId) {
      return NextResponse.json(
        { success: false, error: "Missing dayTaskId" },
        { status: 400 }
      );
    }

    // Validate task belongs to product and user
    const task = await prisma.dayTask.findFirst({
      where: {
        id: dayTaskId,
        task: {
          feature: {
            product: {
              id: productId,
              userId: user.id,
            },
          },
        },
      },
    });

    if (!task) {
      return NextResponse.json(
        { success: false, error: "Task not found or access denied" },
        { status: 404 }
      );
    }
    console.log(task, "task");

    const updatedTask = await prisma.dayTask.update({
      where: { id: dayTaskId },
      data: {
        status: "completed",
        completedAt: new Date(),
      },
    });

    // Kick off background streak update without blocking response
    (async () => {
      try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const existingStreak = await prisma.dailyStreak.findFirst({
          where: {
            userId: user.id,
            productId: productId,
            date: today,
          },
        });

        if (!existingStreak) {
          await prisma.dailyStreak.create({
            data: {
              userId: user.id,
              productId: productId,
              date: today,

              hasBuildLog: false,
            },
          });
          await prisma.product.update({
            where: { id: productId },
            data: {
              currentStreak: {
                increment: 1,
              },
            },
          });
        }
      } catch (err) {
        console.error("Background streak update failed:", err);
      }
    })();

    return NextResponse.json({ success: true, task: updatedTask });
  } catch (err) {
    console.error("Failed to complete day task:", err);
    return NextResponse.json(
      { success: false, error: "Failed to mark task complete" },
      { status: 500 }
    );
  }
}
