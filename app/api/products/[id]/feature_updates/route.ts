import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Task } from "@prisma/client";

// POST /api/products/[id]/feature_updates
export async function POST(
  req: NextRequest,
) {
  try {
    // Optionally, check user auth here
    const user = await prisma.user.findFirst({
      where: { clerkId: "user_clerk_123456" },
    });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const input = await req.json();
    // input: { features: [{ id?, name, description, tasks: [{ id?, title }] }] }

    const { features, productId } = input;
    if (!productId) {
      return NextResponse.json(
        { success: false, error: "Product ID required" },
        { status: 400 }
      );
    }
    if (!Array.isArray(features)) {
      return NextResponse.json(
        { success: false, error: "Features array required" },
        { status: 400 }
      );
    }
    console.log(features, "features");
    // Upsert features and tasks
    const updatedFeatures = [];
    for (const feature of features) {
      let featureRecord;
      if (feature.id) {
        // Update feature
        // Update feature fields
        featureRecord = await prisma.feature.update({
          where: { id: feature.id },
          data: {
            name: feature.name,
            description: feature.description,
            productId,
            rank: feature.rank,
          },
        });
        // Upsert tasks
        if (Array.isArray(feature.tasks)) {
          // Get existing tasks from DB
          const existingTasks = await prisma.task.findMany({
            where: { featureId: feature.id },
          });
          const incomingTaskIds = feature.tasks
            .filter((t: { id: string }) => t.id)
            .map((t: { id: string }) => t.id);
          // Delete removed tasks
          for (const oldTask of existingTasks) {
            if (!incomingTaskIds.includes(oldTask.id)) {
              await prisma.task.delete({ where: { id: oldTask.id } });
            }
          }
          // Upsert incoming tasks
          for (const task of feature.tasks) {
            if (task.id) {
              await prisma.task.update({
                where: { id: task.id },
                data: { title: task.title },
              });
            } else {
              await prisma.task.create({
                data: {
                  title: task.title,
                  featureId: feature.id,
                  completed: false,
                },
              });
            }
          }
        }
      } else {
        // Create feature
        featureRecord = await prisma.feature.create({
          data: {
            name: feature.title,
            description: feature.description,
            productId,
            rank: feature.rank,
            tasks: {
              create: feature.tasks.map((task: Task) => ({
                title: task.title,
                dayNumber: null,
                completed: false,
              })),
            },
          },
          include: { tasks: true },
        });
      }
      // Fetch updated feature with tasks
      const fullFeature = await prisma.feature.findUnique({
        where: { id: featureRecord.id },
        include: { tasks: true },
      });
      updatedFeatures.push(fullFeature);
    }

    return NextResponse.json({ success: true, features: updatedFeatures });
  } catch (error) {
    console.error("Error updating product features:", error);
    return NextResponse.json(
      { success: false, error: error?.toString() },
      { status: 500 }
    );
  }
}
