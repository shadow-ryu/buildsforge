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
      dayIndex: number;
      dueDate: string;
      tasks: Array<{
        id: string; // this is DayTask.id
      }>;
    }>;
  };

  if (!productId || !Array.isArray(updatedDays)) {
    return NextResponse.json(
      { success: false, error: "Invalid productId or updatedDays format" },
      { status: 400 }
    );
  }

  console.log("[api/products/update_tasks] Received request:", {
    productId,
    updatedDays,
  });
  try {
    const updateOperations = updatedDays.map((task) =>
      prisma.dayTask.update({
        // @ts-expect-error id is DayTask.id
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
