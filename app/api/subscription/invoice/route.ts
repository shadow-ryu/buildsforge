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
    if (!activeSub)
      return NextResponse.json(
        { error: "No subscription found" },
        { status: 404 }
      );

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

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch invoices" },
        { status: 500 }
      );
    }

    const lemonData = await response.json();
    const invoice = lemonData.data?.[0];
    if (!invoice)
      return NextResponse.json({ error: "No invoice found" }, { status: 404 });
    console.log(invoice, "invoice");
    return NextResponse.redirect(invoice.attributes.urls.invoice_url);
  } catch (err) {
    console.error("/api/subscription/invoice error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
