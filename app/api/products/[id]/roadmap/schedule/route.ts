import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { OpenAI } from "openai";
import { generateRoadmapPrompt } from "@/lib/ai_helpers/generateMvpPrompt";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { productId, startDate } = await req.json();
    console.log(startDate, "startDate");
    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: {
        features: {
          include: { tasks: true },
        },
      },
    });

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found" },
        { status: 404 }
      );
    }

    const flatTasks = product.features.flatMap((feature) =>
      feature.tasks.map((task) => ({
        title: task.title,
        description: feature.description,
        category: feature.name,
        taskId: task.id,
      }))
    );

    const prompt = generateRoadmapPrompt({
      tasks: flatTasks,
      startDate: startDate || new Date(),
      dailyHours: product.dailyCommitmentHrs,
      product: {
        name: product.name,
        description: product.description,
        deadline: product.deadline.toISOString(),
        techStack: product.techStack,
        uniqueValueProp: product.uniqueValueProp,
        inspirationApps: product.inspirationApps,
      },
    });

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
    });

    const raw = response.choices[0].message.content;
    const parsed = JSON.parse(raw!);
    // Delete existing DayTasks for all tasks of this product
    const taskIds = flatTasks.map((t) => t.taskId);
    await prisma.dayTask.deleteMany({
      where: {
        taskId: { in: taskIds },
      },
    });

    // Save day-wise task plan
    for (const dayPlan of parsed) {
      for (const t of dayPlan.tasks) {
        const match = flatTasks.find((ft) => ft.title === t.title);

        if (!match) continue;

        await prisma.dayTask.create({
          data: {
            taskId: match.taskId,
            dayIndex: dayPlan.day,
            dueDate: new Date(dayPlan.date),
            category: t.category,
            description: t.description,
            status: "backlog",
          },
        });

        await prisma.task.update({
          where: { id: match.taskId },
          data: { dayNumber: dayPlan.day },
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("GPT roadmap generation failed:", err);
    return NextResponse.json(
      { success: false, error: err?.toString() },
      { status: 500 }
    );
  }
}
