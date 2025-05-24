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

    const activeProject = user.products.find((p: { active: any }) => p.active);
    const streak = activeProject?.currentStreak || 0;

    // ✅ Call streak reset logic
    if (activeProject) {
      await checkAndResetStreaks(user.id, activeProject.id);
    }

    const todayTasks =
      activeProject?.features.flatMap((feature: { tasks: any[] }) =>
        feature.tasks
          .filter(
            (task: { dayTask: { dueDate: string | number | Date } }) =>
              task.dayTask?.dueDate &&
              new Date(task.dayTask.dueDate).toDateString() ===
                today.toDateString()
          )
          .map((task: { id: any; title: any; status: any; dayTask: any }) => ({
            id: task.id,
            title: task.title,
            status: task.status,
            due: new Date(task.dayTask!.dueDate).toLocaleDateString(),
            link: `/dashboard/products/${activeProject.id}#task-${task.id}`,
          }))
      ) || [];

    const pendingTasks =
      activeProject?.features.flatMap((feature: { tasks: any[] }) =>
        feature.tasks
          .filter((task) => {
            const dueDate = task.dayTask?.dueDate
              ? new Date(task.dayTask.dueDate)
              : null;
            const isIncomplete = task.status !== "COMPLETED";
            return isIncomplete && (!dueDate || dueDate < today);
          })
          .map((task) => ({
            id: task.id,
            title: task.title,
            status: task.status,
            due: task.dayTask?.dueDate
              ? new Date(task.dayTask.dueDate).toLocaleDateString()
              : "No due date",
            link: `/dashboard/products/${activeProject.id}#task-${task.id}`,
          }))
      ) || [];

    if (
      activeProject?.currentStreak &&
      activeProject.currentStreak > user.bestStreakOverall
    ) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          bestStreakOverall: activeProject.currentStreak,
        },
      });

      user.bestStreakOverall = activeProject.currentStreak;
    }

    const shippedProducts = user.products
      .filter(
        // @ts-expect-error cdc
        (product: {
          features: {
            tasks: { dayTask: { completedAt: Date | null } }[];
          }[];
        }) => {
          const allDayTasks = product.features.flatMap((f) =>
            f.tasks
              .map((t: { dayTask: { completedAt: Date | null } }) => t.dayTask)
              .filter(Boolean)
          ) as { completedAt: Date | null }[];

          return (
            allDayTasks.length > 0 &&
            allDayTasks.every((dt) => dt.completedAt != null)
          );
        }
      )
      .map(
        (product: {
          id: string;
          name: string;
          updatedAt: string | number | Date;
        }) => ({
          id: product.id,
          name: product.name,
          status: "Shipped",
          shipped: new Date(product.updatedAt).toLocaleDateString(),
        })
      );

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
        streak,
        activeProject: activeProject
          ? {
              id: activeProject.id,
              name: activeProject.name,
              deadline: activeProject.deadline,
              updatedAt: activeProject.updatedAt,
              currentStreak: activeProject.currentStreak,
              isMvpGenerated: activeProject.isMvpGenerated,
              isRoadmapGenerated: activeProject.isRoadmapGenerated,
              progress: calculateProgress(activeProject),
            }
          : null,
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
