// Updated POST handler to support user model updates (username, bio) and settings
// File: /app/api/settings/route.ts

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import plans from "@/lib/plans";

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
        subscriptions: {
          where: { status: "active" },
          select: {
            lemonSqueezyProductId: true,
            lemonSqueezySubscriptionId: true,
          },
        },
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

    const totalTokens = user.tokenUsages?.reduce(
      (sum, t) => sum + (t.tokens || 0),
      0
    );


    console.log(plans.find(
      (plan) =>
        plan.productId === user.subscriptions[0].lemonSqueezyProductId
    ),"plans");
    return NextResponse.json({
      success: true,
      data: {
        name: user.name,
        email: user.email,
        username: user.username,
        settings: user.settings || {
          dailyHours: 2,
          deadlineDays: 14,
          preferredAiModel: "gemini-2.5-flash",
          emailNudges: true,
          isPublic: false,
          slug: "",
          bio: "",
          twitter: "@buildsforge",
        },
        subscriptions: plans.find(
          (plan) =>
            plan.productId === user.subscriptions[0].lemonSqueezyProductId
        ),
        planName: user.subscriptions,
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

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
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

    const body = await req.json();

    // Split settings and user fields
    const { username, bio, name, ...settingsPayload } = body;

    // Update Settings
    const settings = await prisma.settings.upsert({
      where: { userId: user.id },
      update: settingsPayload,
      create: {
        userId: user.id,
        ...settingsPayload,
      },
    });

    // Update User
    await prisma.user.update({
      where: { id: user.id },
      data: { username, bio, name },
    });

    return NextResponse.json({ success: true, settings });
  } catch (err) {
    console.error("POST /api/settings error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
