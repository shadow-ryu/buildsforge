import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("productId" in body) ||
    !("updatedDays" in body)
  ) {
    return NextResponse.json(
      { success: false, error: "Missing `productId` or `updatedDays`" },
      { status: 400 }
    );
  }

  const { productId, updatedDays } = body as {
    productId: string;
    updatedDays: Array<{
      id: string;
      taskId: string;
      dayIndex: number;
      dueDate: string;
    }>;
  };

  if (!productId || !Array.isArray(updatedDays)) {
    return NextResponse.json(
      { success: false, error: "Invalid productId or updatedDays format" },
      { status: 400 }
    );
  }

  try {
    // Step 1: Group tasks by original dayIndex to preserve task/day groupings
    const grouped: Record<number, typeof updatedDays> = {};
    for (const task of updatedDays) {
      if (!grouped[task.dayIndex]) grouped[task.dayIndex] = [];
      grouped[task.dayIndex].push(task);
    }

    // Step 2: Reassign compacted dayIndex (0, 1, 2, ...)
    const sortedDayIndices = Object.keys(grouped)
      .map(Number)
      .sort((a, b) => a - b);

    const compactedTasks: typeof updatedDays = [];

    sortedDayIndices.forEach((originalDayIdx, newDayIdx) => {
      const tasks = grouped[originalDayIdx];
      tasks.forEach((task) => {
        compactedTasks.push({
          ...task,
          dayIndex: newDayIdx, // reassign compacted index
        });
      });
    });

    // Step 3: Update in DB
    const updateOperations = compactedTasks.map((task) =>
      prisma.dayTask.update({
        where: { id: task.id },
        data: {
          dayIndex: task.dayIndex,
          dueDate: new Date(task.dueDate),
        },
      })
    );

    await Promise.all(updateOperations);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[/api/products/update_tasks] Error updating tasks:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
