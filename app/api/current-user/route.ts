/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { checkAndResetStreaks } from "@/lib/streak-system/update-streaks";
import { $Enums } from "@prisma/client";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: {
        products: {
          include: {
            features: {
              include: {
                tasks: {
                  include: { dayTask: true },
                },
              },
            },
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const products = user.products || [];

    const todayTasks: any[] = [];
    const pendingTasks: any[] = [];
    const shippedProducts: any[] = [];
    const activeProjects: any[] = [];

    for (const product of products) {
      const isActive = product.active;
      const currentStreak = product.currentStreak || 0;

      if (isActive) {
        await checkAndResetStreaks(user.id, product.id);

        if (currentStreak > user.bestStreakOverall) {
          await prisma.user.update({
            where: { id: user.id },
            data: {
              bestStreakOverall: currentStreak,
            },
          });

          user.bestStreakOverall = currentStreak;
        }

        activeProjects.push({
          id: product.id,
          name: product.name,
          deadline: product.deadline,
          updatedAt: product.updatedAt,
          currentStreak: currentStreak,
          isMvpGenerated: product.isMvpGenerated,
          isRoadmapGenerated: product.isRoadmapGenerated,
          progress: calculateProgress(product),
        });
      }

      for (const feature of product.features) {
        for (const task of feature.tasks) {
          const dueDate = task.dayTask?.dueDate
            ? new Date(task.dayTask.dueDate)
            : null;
          const dueStr = dueDate?.toLocaleDateString() || "No due date";
          const isToday = dueDate?.toDateString() === today.toDateString();
          const isIncomplete = task.status === "backlog";

          const taskMeta = {
            id: task.id,
            title: task.title,
            status: task.status,
            due: dueStr,
            link: `/dashboard/products/${product.id}#task-${task.id}`,
          };

          if (isToday) todayTasks.push(taskMeta);
          if (isIncomplete && (!dueDate || dueDate < today)) {
            pendingTasks.push(taskMeta);
          }
        }
      }

      const allDayTasks = product.features.flatMap((f) =>
        f.tasks.map((t: any) => t.dayTask).filter(Boolean)
      ) as { completedAt: Date | null }[];

      const isShipped =
        allDayTasks.length > 0 &&
        allDayTasks.every((dt) => dt.completedAt != null);

      if (isShipped) {
        shippedProducts.push({
          id: product.id,
          name: product.name,
          status: "Shipped",
          shipped: new Date(product.updatedAt).toLocaleDateString(),
        });
      }
    }

    const limitedUserDetails = {
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      bestStreakOverall: user.bestStreakOverall,
      isNewUser: user.products.length === 0,
    };

    return NextResponse.json({
      success: true,
      data: {
        user: limitedUserDetails,
        activeProjects,
        todayTasks,
        pendingTasks,
        shippedProducts,
      },
    });
  } catch (err) {
    console.error("Error fetching dashboard data:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

function calculateProgress(product: {
  features: ({
    tasks: ({
      dayTask: {
        completedAt: Date | null;
      } | null;
    } & {
      id: string;
      title: string;
      estimatedHours: number | null;
      status: $Enums.TaskStatus;
      dayNumber: number | null;
      completed: boolean;
      featureId: string;
    })[];
  } & {
    name: string;
    id: string;
    description: string;
    productId: string;
    rank: number;
  })[];
}) {
  const allDayTasks = product.features.flatMap((f) =>
    f.tasks.map((t) => t.dayTask).filter(Boolean)
  ) as { completedAt: Date | null }[];

  if (allDayTasks.length === 0) return 0;

  const completed = allDayTasks.filter((dt) => dt.completedAt != null).length;
  return Math.round((completed / allDayTasks.length) * 100);
}
