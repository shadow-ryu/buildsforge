import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateBuildLogPromptUpgraded } from "@/lib/ai_helpers/solo-prompt";
import { generateWithModel } from "@/lib/ai_helpers/model-selector";

export async function POST(req: NextRequest) {
  try {
    const {
      dayIndex,
      projectId,
      notes = "",
      selectedTaskIds = [],
    } = await req.json();

    if (!projectId || typeof dayIndex !== "number") {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findFirst({ where: { clerkId } });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const project = await prisma.product.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    const today = new Date();
    const logDate = new Date(today.toISOString().split("T")[0]);

    // Prevent duplicate logs
    const doesLogExist = await prisma.buildLog.count({
      where: {
        userId: user.id,
        productId: projectId,
        dayIndex: dayIndex,
      },
    });

    if (doesLogExist > 0) {
      return NextResponse.json(
        { success: false, error: "Log already exists" },
        { status: 400 }
      );
    }
    console.log({ selectedTaskIds }, "selectedTaskIds");
    // ✅ Also include explicitly selected dayTasks
    const additionalTasks = selectedTaskIds.length
      ? await prisma.dayTask.findMany({
          where: {
            id: { in: selectedTaskIds },
          },
          include: {
            task: true,
          },
        })
      : [];

    console.log(
      {
        tasks: additionalTasks,
        notes,
        day: dayIndex,
        product: {
          name: project.name,
          description: project.description || "",
          uniqueValueProp: project.uniqueValueProp || "",
          techStack: project.techStack || "",
          inspirationApps: project.inspirationApps || "",
        },
      },
      "input"
    );
    const formattedTasks = additionalTasks.map((t) => ({
      title: t.description ?? "Untitled Task",
      description: t.description,
      category: t.category,
      status: t.status,
    }));
    const prompt = generateBuildLogPromptUpgraded({
      // @ts-expect-error Type 'DayTask' is not assignable to type 'Task'
      tasks: formattedTasks,
      notes,
      day: dayIndex,
      product: {
        name: project.name,
        description: project.description || "",
        uniqueValueProp: project.uniqueValueProp || "",
        techStack: project.techStack || "",
        inspirationApps: project.inspirationApps || "",
      },
    });

    const result = await generateWithModel({
      prompt,
      userId: user.id,
      productId: projectId,
      type: "build_log",
    });

    await prisma.buildLog.create({
      data: {
        logDate,
        summary: result.markdown.trim(),
        tweet: result.tweet.trim(),
        generatedAt: new Date(),
        dayIndex,
        userId: user.id,
        productId: projectId,
      },
    });

    // ✅ Link only completed dayTasks
    // const buildLogEligibleTasks = additionalTasks.filter(
    //   (t) => t.status === "completed"
    // );
    // await prisma.dayTask.updateMany({
    //   where: {
    //     id: { in: buildLogEligibleTasks.map((t) => t.id) },
    //   },
    //   data: {
    //     buildLogId: buildLog.id,
    //   },
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error generating build log:", error);
    return NextResponse.json(
      { success: false, error: error?.toString() },
      { status: 500 }
    );
  }
}
