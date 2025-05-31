// File: /app/api/subscription/invoices/route.ts
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: { subscriptions: true },
    });

    const activeSub = user?.subscriptions.find((s) => s.status === "active");
    if (!activeSub) return NextResponse.json({ invoices: [] });

    const response = await fetch(
      `https://api.lemonsqueezy.com/v1/subscription-invoices?filter[subscription_id]=${activeSub.lemonSqueezySubscriptionId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
          Accept: "application/json",
          "Content-Type": "application/vnd.api+json",
        },
      }
    );

    const lemonData = await response.json();
    return NextResponse.json({ invoices: lemonData.data || [] });
  } catch (err) {
    console.error("Invoice fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch invoices" },
      { status: 500 }
    );
  }
}
