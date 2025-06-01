import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id: productId } = context.params;

    if (!productId) {
      return NextResponse.json(
        { success: false, error: "Missing productId" },
        { status: 400 }
      );
    }

    const features = await prisma.feature.findMany({
      where: { productId },
      select: {
        id: true,
        name: true,
        tasks: {
          select: {
            id: true,
            title: true,
            dayTask: true,
          },
        },
      },
    });

    const hasDayTasks = features.some((f) =>
      f.tasks.some((t) => t.dayTask !== null)
    );

    if (!hasDayTasks) {
      return NextResponse.json(
        {
          success: false,
          message: "Roadmap is still being generated.",
        },
        { status: 102 } // ✅ HTTP 102: Processing
      );
    }

    const dayTaskMap: Record<
      number,
      {
        id: string;
        taskId: string;
        title: string;
        completed: boolean;
        dayIdx: number;
        featureId: string;
        featureName: string;
        dueDate: Date;
        category: string;
        description: string;
        status: string;
      }[]
    > = {};

    features.forEach((feature) => {
      feature.tasks.forEach((task) => {
        const dayTask = task.dayTask;
        if (dayTask) {
          const dayIdx = dayTask.dayIndex;
          if (!dayTaskMap[dayIdx]) dayTaskMap[dayIdx] = [];
          dayTaskMap[dayIdx].push({
            id: dayTask.id,
            taskId: task.id,
            title: task.title,
            completed: dayTask.status === "completed",
            dayIdx,
            featureId: feature.id,
            featureName: feature.name,
            dueDate: dayTask.dueDate,
            category: dayTask.category,
            description: dayTask.description,
            status: dayTask.status,
          });
        }
      });
    });

    const days = Object.keys(dayTaskMap)
      .map((dayIdx) => {
        const idx = Number(dayIdx);
        return {
          dayIndex: idx,
          dueDate: dayTaskMap[idx]?.[0]?.dueDate,
          tasks: dayTaskMap[idx] ?? [],
        };
      })
      .sort((a, b) => a.dayIndex - b.dayIndex);

    return NextResponse.json(
      { success: true, days },
      { status: 200 } // ✅ Explicit status
    );
  } catch (error) {
    console.error("Error fetching daily tasks:", error);
    return NextResponse.json(
      { success: false, error: error?.toString() },
      { status: 500 }
    );
  }
}
