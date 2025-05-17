import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Not authenticated" },
        { status: 401 }
      );
    }

    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: {
        settings: true,
        products: { select: { id: true } },
        aiLogs: { select: { id: true } },
        tokenUsages: {
          where: { createdAt: { gte: startOfMonth } },
          select: { tokens: true },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // Aggregate tokens
    const totalTokens = user.tokenUsages?.reduce(
      (sum, t) => sum + (t.tokens || 0),
      0
    );

    return NextResponse.json({
      success: true,
      data: {
        name: user.name,
        email: user.email,
        settings: user  .settings || {
          dailyHours: 2,
          deadlineDays: 14,
          aiModel: "gpt-4",
          emailNudges: true,
          isPublic: false,
          slug: "",
          bio: "",
          twitter: "@buildsforge",
        },
        usage: {
          tokens: totalTokens,
          products: user.products.length,
          aiGenerations: user.aiLogs.length,
        },
      },
    });
  } catch (err) {
    console.error("GET /api/settings error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
