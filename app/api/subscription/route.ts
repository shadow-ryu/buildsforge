// File: /app/api/subscription/cancel/route.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: { subscriptions: true },
    });

    const subscription = user?.subscriptions.find((s) => s.status === "active");
    if (!subscription) return NextResponse.json({ subscription: null });

    // Fetch latest status from LemonSqueezy
    const lemonResponse = await fetch(
      `https://api.lemonsqueezy.com/v1/subscriptions/${subscription.lemonSqueezySubscriptionId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
          Accept: "application/json",
          "Content-Type": "application/vnd.api+json",
        },
      }
    );

    const lemonData = await lemonResponse.json();

    return NextResponse.json({ subscription, lemon: lemonData });
  } catch (err) {
    console.error("/api/subscription error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const { userId } = await auth();
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: { subscriptions: true },
    });

    const subscription = user?.subscriptions.find((s) => s.status === "active");

    if (!subscription) {
      return NextResponse.json(
        { error: "No active subscription found" },
        { status: 404 }
      );
    }

    const lemonResponse = await fetch(
      `https://api.lemonsqueezy.com/v1/subscriptions/${subscription.lemonSqueezySubscriptionId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
          Accept: "application/json",
          "Content-Type": "application/vnd.api+json",
        },
        body: JSON.stringify({
          data: {
            type: "subscriptions",
            id: subscription.lemonSqueezySubscriptionId,
            attributes: {
              canceled: true,
            },
          },
        }),
      }
    );

    if (!lemonResponse.ok) {
      console.error("LemonSqueezy API error", await lemonResponse.text());
      return NextResponse.json(
        { error: "Failed to cancel subscription on LemonSqueezy" },
        { status: 500 }
      );
    }

    await prisma.subscription.update({
      where: { id: subscription.id },
      data: {
        status: "cancelled",
      },
    });
    await prisma.subscription.update({
      where: { userId: subscription.userId, lemonSqueezyProductId: "111111" },
      data: {
        status: "active",
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("/api/subscription/cancel error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
