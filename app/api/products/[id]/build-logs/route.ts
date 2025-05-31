import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Auth check
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Not authenticated" },
        { status: 401 }
      );
    }

    // Find associated user
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    console.log("User found:", params.id);
    // Fetch logs
    const logs = await prisma.buildLog.findMany({
      where: {
        productId: params.id,
        userId: user.id,
      },
      orderBy: {
        logDate: "desc",
      },
      select: {
        id: true,
        dayIndex: true,
        logDate: true,
        summary: true,
        tweet: true,
        generatedAt: true,
      },
    });

    return NextResponse.json({ success: true, logs });
  } catch (err) {
    console.error("Error fetching build logs:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
