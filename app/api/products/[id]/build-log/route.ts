
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { OpenAI } from "openai";
import { generateBuildLogPrompt } from "@/lib/ai_helpers/generateMvpPrompt";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { dayIndex, projectId } = await req.json();
    if (!dayIndex || !projectId) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const today = new Date();
    const logDate = new Date(today.toISOString().split("T")[0]);
    const clerkId = "user_clerk_123456"; // Replace with real auth lookup

    const user = await prisma.user.findFirst({ where: { clerkId } });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const project = await prisma.product.findUnique({
      where: { id: projectId },
      include: {
        features: {
          include: {
            tasks: true,
          },
        },
      },
    });
    if (!project) throw new Error("Project not found");

    const completedTasks = await prisma.dayTask.findMany({
      where: {
        status: "completed",
        dayIndex,
      },
    });

    // const inCompletedTasks = await prisma.dayTask.findMany({
    //   where: {
    //     status: "ba",
    //     dayIndex,
    //   },
    // });

    const tasksForToday = completedTasks.filter((t) => {
      const date = new Date(t.dueDate);
      return date.toDateString() === logDate.toDateString();
    });

    const formattedTasks = tasksForToday.map((t) => ({
      title: t.taskId,
      category: t.category,
      description: t.description,
    }));

    const dayCount = await prisma.buildLog.count({
      where: { userId: user.id, projectId },
    });

    const prompt = generateBuildLogPrompt({
      tasks: formattedTasks,
      product: {
        name: project.name,
        description: project.description,
        uniqueValueProp: project.uniqueValueProp,
        techStack: project.techStack,
        inspirationApps: project.inspirationApps,
      },
      day: dayCount + 1,
    });

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5,
    });
    console.log(response, "gpt response");
    const output = response.choices[0]?.message?.content || "{}";
    const parsedOutput = JSON.parse(output);
    console.log(parsedOutput, "parsedOutput");
    //     const [markdown, tweet] = output.split(/\n\s*\n/); // split by double line break
    // console.log(markdown, "markdown");
    const buildLog = await prisma.buildLog.create({
      data: {
        userId: user.id,
        projectId,
        logDate,
        summary: parsedOutput.markdown.trim(),
        sourceTasks: formattedTasks,
        belongsToDay: dayIndex,
        tweet: parsedOutput.tweet.trim(),
        generatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, buildLog });
  } catch (error) {
    console.error("Error generating build log:", error);
    return NextResponse.json(
      { success: false, error: error?.toString() },
      { status: 500 }
    );
  }
}
