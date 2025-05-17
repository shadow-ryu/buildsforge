import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { $Enums } from "@/generated/prisma";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
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
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const activeProject = user.products.find((p) => p.active);
    const streak = activeProject?.currentStreak || 0;

    // Today's tasks (based on dayTask.dueDate === today)
    const todayTasks =
      activeProject?.features.flatMap((feature) =>
        feature.tasks
          .filter((task) =>
            task.dayTask?.dueDate &&
            new Date(task.dayTask.dueDate).toDateString() === today.toDateString()
          )
          .map((task) => ({
            id: task.id,
            title: task.title,
            status: task.status,
            due: new Date(task.dayTask!.dueDate).toLocaleDateString(),
            link: `/dashboard/products/${activeProject.id}#task-${task.id}`,
          }))
      ) || [];

    // Shipped products = products with 100% completed dayTasks
    const shippedProducts = user.products.filter((product) => {
      const allDayTasks = product.features.flatMap((f) =>
        f.tasks.map((t) => t.dayTask).filter(Boolean)
      ) as { completedAt: Date | null }[];

      return allDayTasks.length > 0 &&
        allDayTasks.every((dt) => dt.completedAt != null);
    }).map((product) => ({
      id: product.id,
      name: product.name,
      status: "Shipped",
      shipped: new Date(product.updatedAt).toLocaleDateString(),
    }));

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
        shippedProducts,
      },
    });
  } catch (err) {
    console.error("Error fetching dashboard data:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

// Utility: progress = % of dayTasks with completedAt
function calculateProgress(product: { features: ({ tasks: ({ dayTask: { id: string; description: string; dayIndex: number; status: string; taskId: string; dueDate: Date; completedAt: Date | null; category: string; milestoneGoal: string | null; shipCheck: string | null; buildLogId: string | null; } | null; } & { id: string; title: string; estimatedHours: number | null; status: $Enums.TaskStatus; dayNumber: number | null; completed: boolean; featureId: string; })[]; } & { name: string; id: string; description: string; productId: string; rank: number; })[]; } & { name: string; id: string; createdAt: Date; slug: string; description: string | null; problemStatement: string; targetAudience: string; userGoals: string; uniqueValueProp: string; isMvpGenerated: boolean; isRoadmapGenerated: boolean; currentStreak: number; AllTimeBestStreak: number; active: boolean; techStack: string | null; inspirationApps: string | null; initialFeatures: string | null; startDate: Date; deadline: Date; dailyCommitmentHrs: number; userId: string; mvpSummary: string | null; updatedAt: Date; }) {
  const allDayTasks = product.features.flatMap((f: { tasks: ({ dayTask: { completedAt: Date | null; } | null; } & { id: string; title: string; estimatedHours: number | null; status: $Enums.TaskStatus; dayNumber: number | null; completed: boolean; featureId: string; })[]; }) =>
    f.tasks.map((t: { dayTask: { completedAt: Date | null; } | null; }) => t.dayTask).filter(Boolean)
  ) as { completedAt: Date | null }[];

  if (allDayTasks.length === 0) return 0;

  const completed = allDayTasks.filter((dt) => dt.completedAt != null).length;
  return Math.round((completed / allDayTasks.length) * 100);
}
