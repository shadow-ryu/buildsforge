import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }


    const { featureId } = await req.json();

    if (!featureId) {
      return NextResponse.json(
        { success: false, error: "Missing featureId in request body" },
        { status: 400 }
      );
    }

    const feature = await prisma.feature.findUnique({
      where: { id: featureId },
      include: {
        product: {
          include: {
            user: true,
          },
        },
        tasks: {
          include: { dayTask: true },
        },
      },
    });

    if (!feature || feature.product.user.clerkId !== userId) {
      return NextResponse.json(
        { success: false, error: "Feature not found or access denied" },
        { status: 404 }
      );
    }

    await prisma.$transaction(async (tx) => {
      const taskIds = feature.tasks.map((t) => t.id);

      // Delete dayTasks linked to tasks
      await tx.dayTask.deleteMany({
        where: { taskId: { in: taskIds } },
      });

      // Delete tasks
      await tx.task.deleteMany({
        where: { featureId },
      });

      // Delete the feature
      await tx.feature.delete({
        where: { id: featureId },
      });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting feature:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: error?.toString(),
      },
      { status: 500 }
    );
  }
}
