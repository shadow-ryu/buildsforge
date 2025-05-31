// File: /app/api/webhooks/lemonsqueezy/route.ts
import { NextRequest } from "next/server";
import crypto from "node:crypto";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET!;
  const rawBody = await req.text();
  const signatureHeader = req.headers.get("X-Signature") || "";

  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "hex");
  const signature = Buffer.from(signatureHeader, "hex");

  if (
    digest.length !== signature.length ||
    !crypto.timingSafeEqual(digest, signature)
  ) {
    console.error("Invalid signature");
    return new Response("Unauthorized", { status: 401 });
  }

  const payload = JSON.parse(rawBody);
  const event = payload.meta.event_name;
  const data = payload.data;
  const attributes = data.attributes;
  const subscriptionId = data.id.toString();
  const email = attributes.user_email;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return new Response(`User not found for email: ${email}`, { status: 404 });
  }

  const subData = {
    userId: user.id,
    lemonSqueezyCustomerId: attributes.customer_id.toString(),
    lemonSqueezySubscriptionId: subscriptionId,
    lemonSqueezyProductId: attributes.product_id.toString(),
    planName: attributes.variant_name,
    status: attributes.status,
    currentPeriodEnd: new Date(attributes.renews_at),
  };

  if (event === "subscription_created") {
    await prisma.subscription.updateMany({
      where: { userId: user.id },
      data: { status: "expired" },
    });

    const created = await prisma.subscription.create({ data: subData });
    console.log("Created subscription:", created);
  }

  if (event === "subscription_updated") {
    const existing = await prisma.subscription.findFirst({
      where: {
        userId: user.id,
        lemonSqueezySubscriptionId: subscriptionId,
      },
    });

    if (attributes.cancelled || attributes.pause) {
      // Mark all as expired
      await prisma.subscription.updateMany({
        where: { userId: user.id },
        data: { status: "expired" },
      });

      // Create fallback Free plan
      await prisma.subscription.create({
        data: {
          userId: user.id,
          lemonSqueezyCustomerId: "free",
          lemonSqueezySubscriptionId: "free-plan",
          lemonSqueezyProductId: "111111",
          planName: "Free",
          status: "active",
        },
      });

      console.log("Switched user to Free plan after:", attributes.status);
    } else if (attributes.status === "active" && !existing) {
      // Renewed — mark all as expired then create new
      await prisma.subscription.updateMany({
        where: { userId: user.id },
        data: { status: "expired" },
      });

      const created = await prisma.subscription.create({ data: subData });
      console.log("Renewed subscription created:", created);
    } else if (existing) {
      const updated = await prisma.subscription.update({
        where: { id: existing.id },
        data: subData,
      });
      console.log("Updated subscription:", updated);
    }
  }

  return new Response("Webhook processed", {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
