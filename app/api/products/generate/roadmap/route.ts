import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { generateRoadmapPromptUpgraded } from "@/lib/ai_helpers/solo-prompt";
import { generateWithModel } from "@/lib/ai_helpers/model-selector";

export async function POST(req: NextRequest) {
  try {
    const loggedUser = await currentUser();
    if (!loggedUser) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const user = await prisma.user.findFirst({
      where: { clerkId: loggedUser.id },
    });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found", clerkId: loggedUser.id },
        { status: 404 }
      );
    }

    const {
      productId,
      deadline,
      dailyCommitmentHrs,
      startDate,
    } = await req.json();
    if (!productId || !deadline || !dailyCommitmentHrs || !startDate) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    const existingProduct = await prisma.product.findFirst({
      where: {
        userId: user.id,
        active: true,
        isRoadmapGenerated: true,
        id: {
          not: productId,
        },
      },
    });

    if (existingProduct) {
      await prisma.product.update({
        where: { id: existingProduct.id },
        data: { active: false, reviseRoadmap: true },
      });
    }

    const product = await prisma.product.update({
      where: { id: productId, userId: user.id },
      data: {
        deadline: new Date(deadline),
        dailyCommitmentHrs: parseFloat(dailyCommitmentHrs),
        startDate: new Date(startDate),
      },
      include: {
        features: {
          orderBy: { rank: "asc" },
          include: { tasks: true },
        },
      },
    });

    // Delete all previous DayTasks for this product
    await prisma.dayTask.deleteMany({
      where: {
        task: {
          feature: {
            productId: product.id,
          },
        },
      },
    });

    const flatTasks = product.features.flatMap((feature) =>
      feature.tasks.map((task) => ({
        title: task.title,
        description: feature.description,
        category: feature.name,
        id: task.id,
      }))
    );

    const prompt = generateRoadmapPromptUpgraded({
      tasks: flatTasks,
      startDate,
      dailyHours: product.dailyCommitmentHrs,
      product: {
        name: product.name,
        description: product.description ?? "",
        deadline: product.deadline.toISOString(),
        techStack: product.techStack ?? "",
        uniqueValueProp: product.uniqueValueProp ?? "",
        inspirationApps: Array.isArray(product.inspirationApps)
          ? product.inspirationApps.join(", ")
          : product.inspirationApps ?? "",
      },
    });

    const roadmap = await generateWithModel({
      prompt,
      userId: user.id,
      productId: product.id,
      type: "roadmap",
    });

    const existingTasksMap = new Map(flatTasks.map((t) => [t.id, t]));
    const featureMap = new Map(
      product.features.map((f) => [f.name.toLowerCase(), f])
    );

    for (const day of roadmap) {
      const dueDate = new Date(day.date);

      for (const task of day.tasks) {
        let taskId = existingTasksMap.get(task.parent_task_id)?.id;

        if (!taskId) {
          const categoryKey = task.category.trim().toLowerCase();
          let feature = featureMap.get(categoryKey);

          if (!feature) {
            // @ts-expect-error readonly
            feature = await prisma.feature.create({
              data: {
                name: task.category,
                description: `${task.category} tasks`,
                rank: product.features.length + 1,
                productId: product.id,
              },
            });
            // @ts-expect-error readonly
            featureMap.set(categoryKey, feature);
          }

          if (!feature) {
            continue;
          }

          const newTask = await prisma.task.create({
            data: {
              title: task.title,
              completed: false,
              feature: { connect: { id: feature.id } },
            },
          });

          taskId = newTask.id;
        }

        // Check if DayTask already exists for this task
        const existingDayTask = await prisma.dayTask.findUnique({
          where: { taskId },
        });

        // Only create if it doesn't exist
        if (!existingDayTask) {
          await prisma.dayTask.create({
            data: {
              taskId,
              dayIndex: day.day,
              dueDate,
              category: task.category,
              description: task.description,
              status: "backlog",
            },
          });
        }
      }
    }

    await prisma.product.update({
      where: { id: productId },
      data: { isRoadmapGenerated: true, active: true },
    });

    return NextResponse.json({
      success: true,
      message: "Roadmap and DayTasks created",
    });
  } catch (err) {
    console.error("GPT roadmap generation failed:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
