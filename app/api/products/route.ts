import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Not authenticated" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findFirst({ where: { clerkId: userId } });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User record not found" },
        { status: 404 }
      );
    }

    const products = await prisma.product.findMany({
      where: { userId: user.id },
      include: {
        features: {
          include: {
            tasks: {
              include: {
                dayTask: true, // ✅ needed to assess completion
              },
            },
          },
        },
      },
    });

    const productSummaries = products.map((product) => {
      const allDayTasks = product.features.flatMap((f) =>
        f.tasks.flatMap((t) => (t.dayTask ? [t.dayTask] : []))
      );

      const total = allDayTasks.length;
      const completed = allDayTasks.filter((dt) => dt.completedAt).length;
      const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

      return {
        id: product.id,
        name: product.name,
        description: product.description ?? null,
        progress,
        startDate: product.startDate,
        deadline: product.deadline,
        currentStreak: product.currentStreak,
        bestStreak: product.AllTimeBestStreak,
        isMvpGenerated: product.isMvpGenerated,
        isRoadmapGenerated: product.isRoadmapGenerated,
        active: product.active,
      };
    });

    return NextResponse.json({ success: true, products: productSummaries });
  } catch (err) {
    console.error("Error in /api/products:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
