// File: /app/api/buildlog/[buildlogId]/route.ts

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    const { id } = await params;
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Not authenticated" },
        { status: 401 }
      );
    }
    const user = await prisma.user.findUnique({ where: { clerkId: userId } });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }
    console.log("params found:", id);

    const buildLog = await prisma.buildLog.findUnique({
      where: { id: id },
      include: {
        DayTask: true,
      },
    });

    if (!buildLog || buildLog.userId !== user.id) {
      return NextResponse.json(
        { success: false, error: "Build log not found or unauthorized" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, buildLog });
  } catch (err) {
    console.error("Failed to load build log:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
