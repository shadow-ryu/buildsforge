/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { $Enums } from "@/generated/prisma";

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
        trial: true,
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

    // Check and update user's best overall streak if the active product has a better one
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

      // Update the in-memory value so response is accurate
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

    (async () => {
      try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        const dayBeforeYesterday = new Date(today);
        dayBeforeYesterday.setDate(today.getDate() - 2);

        const [yesterdayStreak, twoDaysAgoStreak] = await Promise.all([
          prisma.dailyStreak.findFirst({
            where: {
              userId: user.id,
              productId: activeProject?.id,
              date: yesterday,
            },
          }),
          prisma.dailyStreak.findFirst({
            where: {
              userId: user.id,
              productId: activeProject?.id,
              date: dayBeforeYesterday,
            },
          }),
        ]);

        const product = await prisma.product.findUnique({
          where: { id: activeProject?.id, userId: user.id },
        });
        if (!product) {
          return;
        }

        // Missed 2 days in a row: reset
        if (!yesterdayStreak && !twoDaysAgoStreak) {
          const bestStreak = Math.max(
            product.currentStreak,
            product.AllTimeBestStreak
          );

          await prisma.product.update({
            where: { id: activeProject?.id },
            data: {
              currentStreak: 0,
              AllTimeBestStreak: bestStreak,
              losingStreak: false, // Reset state
            },
          });

          await prisma.dailyStreak.deleteMany({
            where: {
              userId: user.id,
              productId: activeProject?.id,
            },
          });

          return;
        }

        // Missed only yesterday: mark as losing streak
        if (!yesterdayStreak) {
          await prisma.product.update({
            where: { id: activeProject?.id },
            data: {
              losingStreak: true,
            },
          });
        }

        // Add today's streak if not exists
        const existingTodayStreak = await prisma.dailyStreak.findFirst({
          where: {
            userId: user.id,
            productId: activeProject?.id,
            date: today,
          },
        });

        if (!existingTodayStreak && activeProject?.id) {
          await prisma.dailyStreak.create({
            data: {
              userId: user.id,
              productId: activeProject?.id,
              date: today,
              hasBuildLog: false,
            },
          });

          // Streak continues
          if (yesterdayStreak) {
            await prisma.product.update({
              where: { id: product.id },
              data: {
                currentStreak: {
                  increment: 1,
                },
                losingStreak: false,
              },
            });
          } else {
            // New streak starts
            await prisma.product.update({
              where: { id: product.id },
              data: {
                currentStreak: 1,
                losingStreak: false,
              },
            });
          }
        }
      } catch (err) {
        console.error("Background streak update failed:", err);
      }
    })();

    return NextResponse.json({
      success: true,
      data: {
        user: limitedUserDetails,
        streak,
        trial: user.trial,
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

// Utility: progress = % of dayTasks with completedAt
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
