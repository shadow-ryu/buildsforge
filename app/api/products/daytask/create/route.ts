import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
// Update path to your actual auth util

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
console.log(userId,"userId");
    if (!userId) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const {
      productId,
      taskId,
      dayIndex,
      dueDate,
      description,
      category,
      milestoneGoal,
      shipCheck,
      newFeature, // { name, description }
      newTask, // { title }
    } = await req.json();
console.log(productId, dayIndex, dueDate, taskId, newTask,"newTask");
    if (!productId || !dayIndex || !dueDate ) {
      return NextResponse.json({ 
        success: false, 
        error: "Missing required fields",
        details: {
          productId: !productId, 
          dayIndex: !dayIndex, 
          dueDate: !dueDate, 
          taskId: !taskId, 
          newTask: !newTask 
        }
      }, { status: 400 });
    }
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });
    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }

    // 🔐 Ensure product belongs to user
    const product = await prisma.product.findUnique({
      where: { id: productId, userId: user.id },
    });

    if (!product) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    let finalTaskId = taskId;

    // 🧱 If taskId not passed, create task (and feature if needed)
    if (!finalTaskId) {
      let featureId: string | null = null;

      // Check or create feature
      if (newFeature?.name) {
        const existingFeature = await prisma.feature.findFirst({
          where: {
            name: newFeature.name,
            productId,
          },
        });

        if (existingFeature) {
          featureId = existingFeature.id;
        } else {
          const createdFeature = await prisma.feature.create({
            data: {
              name: newFeature.name,
              description: newFeature.description || "",
              rank: 0,
              productId,
            },
          });
          featureId = createdFeature.id;
        }
      }

      if (!featureId) {
        return NextResponse.json({ success: false, error: "Missing or invalid feature for task creation" }, { status: 400 });
      }

      // Create new Task under the Feature
      const createdTask = await prisma.task.create({
        data: {
          title: newTask.title,
          status: "backlog",
          featureId,
        },
      });

      finalTaskId = createdTask.id;
    }

    // Check if DayTask already exists for this task
    const existingDayTask = await prisma.dayTask.findUnique({
      where: { taskId: finalTaskId }
    });

    if (existingDayTask) {
      return NextResponse.json({
        success: false,
        error: "A day task already exists for this task",
        existingDayTaskId: existingDayTask.id
      }, { status: 400 });
    }

    // 💾 Create the DayTask
    const created = await prisma.dayTask.create({
      data: {
        taskId: finalTaskId,
        dayIndex,
        dueDate: new Date(dueDate),
        description,
        category,
        milestoneGoal,
        shipCheck,
      },
    });

    return NextResponse.json({ success: true, dayTask: created });
  } catch (err) {
    console.error("Failed to create DayTask", err);
    return NextResponse.json({ success: false, error: "Failed to create DayTask" }, { status: 500 });
  }
}
