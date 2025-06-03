// Updated POST handler to support user model updates (username, bio) and settings
// File: /app/api/settings/route.ts

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import plans from "@/lib/plans";
import { Prisma } from "@prisma/client";

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
          where: { status: "active" }, // Ensure only active subscriptions are fetched
          orderBy: { createdAt: 'desc' }, // Optional: if user can have multiple, pick the latest
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

    let activeSubscriptionPlan = null;
    let currentPlanName = "Free"; // Default plan

    if (user.subscriptions && user.subscriptions.length > 0) {
      const activeSub = user.subscriptions[0]; // Assuming the first is the relevant active one
      const foundPlan = plans.find(plan => plan.productId === activeSub.lemonSqueezyProductId);
      if (foundPlan) {
        activeSubscriptionPlan = foundPlan;
        currentPlanName = foundPlan.name;
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        name: user.name,
        email: user.email,
        username: user.username,
        settings: user.settings
          ? {
              dailyHours: user.settings.dailyHours,
              deadlineDays: user.settings.deadlineDays,
              preferredAiModel: user.settings.preferredAiModel,
              emailNudges: user.settings.emailNudges,
              isPublic: user.settings.isPublic,
              slug: user.settings.slug || user.username, // Fallback to username if slug is empty/null
              bio: user.settings.bio || "",
              twitter: user.settings.twitter || "",
            }
          : { // Default settings if user.settings is null
              dailyHours: 2,
              deadlineDays: 14,
              preferredAiModel: "gemini-1.5-flash",
              emailNudges: true,
              isPublic: false,
              slug: user.username, // Default slug to username
              bio: "",
              twitter: "",
            },
        activeSubscriptionPlan: activeSubscriptionPlan,
        planName: currentPlanName,
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

    // Separate fields for User model and Settings model
    const { 
      name, 
      username, 
      // All other fields are assumed to be for the Settings model
      ...settingsDataFromPayload 
    } = body;
    console.log(settingsDataFromPayload);

    // Prepare and update User model fields if they are provided
    const userUpdateData: { name?: string; username?: string } = {};
    if (name !== undefined) userUpdateData.name = name;
    if (username !== undefined) userUpdateData.username = username;

    if (Object.keys(userUpdateData).length > 0) {
      await prisma.user.update({
        where: { id: user.id },
        data: userUpdateData,
      });
    }

    // Prepare and upsert Settings model fields if they are provided
    if (Object.keys(settingsDataFromPayload).length > 0) {
      await prisma.settings.upsert({
        where: { userId: user.id },
        update: settingsDataFromPayload,
        create: {
          userId: user.id,
          // Provide sensible defaults for settings fields not in payload, 
          // which will be overridden by ...settingsDataFromPayload if present.
          dailyHours: 2,
          deadlineDays: 14,
          preferredAiModel: "gemini-1.5-flash",
          emailNudges: true,
          isPublic: false,
          bio: "",
          twitter: "",
          slug: settingsDataFromPayload.slug || username || user.username, // Default slug logic
          ...settingsDataFromPayload, // Spread payload fields, overriding defaults
        },
      });
    }

    // Fetch the updated user record with their settings to return in the response
    const updatedUserWithSettings = await prisma.user.findUnique({
      where: { clerkId: userId }, 
      include: { 
        settings: true 
        // You might want to include other relations here if the client expects them after an update
      }
    });

    return NextResponse.json({ success: true, data: updatedUserWithSettings });
  } catch (err) {
    console.error("POST /api/settings error:", err);
    // Check for specific Prisma errors if needed, e.g., unique constraint violation for username/slug
    if (err instanceof Error && 'code' in err && (err as Prisma.PrismaClientKnownRequestError).code === 'P2002') {
        return NextResponse.json(
            { success: false, error: "Username or slug might already be taken." }, 
            { status: 409 } // Conflict
        );
    }
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
