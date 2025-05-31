import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id: productId } = context.params;
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findFirst({ where: { clerkId: userId } });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query")?.toLowerCase() || "";

    // Optional: only show not-yet-completed?
    // const showIncompleteOnly = searchParams.get("incomplete") === "true";
    const justtaskd = await prisma.dayTask.findMany({
      where: {
        OR: [
          { task: { title: { contains: query, mode: "insensitive" } } },
          { description: { contains: query, mode: "insensitive" } },
        ],
      },
    });
    console.log(justtaskd, "justtaskd");
    const dayTasks = await prisma.dayTask.findMany({
      where: {
        task: {
          feature: {
            product: {
              id: productId,
              userId: user.id,
            },
          },
        },
        OR: [
          { description: { contains: query, mode: "insensitive" } },
          { category: { contains: query, mode: "insensitive" } },
          { task: { title: { contains: query, mode: "insensitive" } } },
        ],
      },
      orderBy: {
        dueDate: "asc",
      },
      take: 20,
      select: {
        id: true,
        dayIndex: true,
        dueDate: true,
        category: true,
        status: true,
        completedAt: true,
        description: true,
        taskId: true,
        task: {
          select: {
            title: true,
          },
        },
      },
    });

    return NextResponse.json({ success: true, dayTasks, query });
  } catch (error) {
    console.error("DayTask search failed:", error);
    return NextResponse.json(
      { success: false, error: "DayTask search failed" },
      { status: 500 }
    );
  }
}
