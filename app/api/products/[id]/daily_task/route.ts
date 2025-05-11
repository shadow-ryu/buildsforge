import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: productId } = await context.params;
    if (!productId) {
      return NextResponse.json(
        { success: false, error: "Missing productId" },
        { status: 400 }
      );
    }
    // Get all DayTasks for all features of this product
    const features = await prisma.feature.findMany({
      where: { productId },
      select: {
        id: true,
        name: true,
        tasks: {
          select: {
            id: true,
            title: true,
            completed: true,
            dayTask: {
              select: {
                id: true,
                dayIndex: true,
                dueDate: true,
                category: true,
                description: true,
                status: true,
              },
            },
          },
        },
      },
    });
    console.log(features, "features task");
    // Flatten all DayTasks and group by dayIndex
    const dayTaskMap: Record<
      number,
      {
        id: string;
        taskId: string;
        title: string;
        completed: boolean;
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
        if (task.dayTask) {
          const dayIdx = task.dayTask.dayIndex;
          if (!dayTaskMap[dayIdx]) dayTaskMap[dayIdx] = [];
          dayTaskMap[dayIdx].push({
            id: task.dayTask.id,
            taskId: task.id,
            title: task.title,
            completed: task.completed,
            featureId: feature.id,
            featureName: feature.name,
            dueDate: task.dayTask.dueDate,
            category: task.dayTask.category,
            description: task.dayTask.description,
            status: task.dayTask.status,
          });
        }
      });
    });
    // Build response array
    const days = Object.keys(dayTaskMap)
      .map((dayIdx : string) => ({
        dayIndex: Number(dayIdx),
        // @ts-expect-error  type error
        dueDate: dayTaskMap[dayIdx][0]?.dueDate,
        // @ts-expect-error  type error
        tasks: dayTaskMap[dayIdx],
      }))
      .sort((a, b) => a.dayIndex - b.dayIndex);
    return NextResponse.json({ success: true, days });
  } catch (error) {
    console.error("Error fetching daily tasks:", error);
    return NextResponse.json(
      { success: false, error: error?.toString() },
      { status: 500 }
    );
  }
}
