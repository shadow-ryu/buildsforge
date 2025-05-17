import { NextRequest } from "next/server";
import Stripe from "stripe";
import prisma from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature")!;
  const body = await req.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return new Response(`Webhook Error: ${err}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_email!;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return new Response(`User not found for email: ${email}`, {
        status: 404,
      });
    }

    // if (!session.subscription) {
    //   return new Response("Missing subscription ID in session", {
    //     status: 400,
    //   });
    // }

    // ✅ Fetch full subscription from Stripe
    const subscriptionRes = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    const subscription = subscriptionRes as Stripe.Subscription;

    const subscriptionData = {
      userId: user.id,
      stripeCustomerId: session.customer as string,
      stripeSubscriptionId: subscription.id,
      status: subscription.status,
      // @ts-expect-error plan is not available in the subscription object
      planName: subscription.plan.nickname ?? "PRO",
      // @ts-expect-error current_period_end is not available in the subscription object
      currentPeriodEnd: subscription.current_period_end
        ? // @ts-expect-error current_period_end is not available in the subscription object

          new Date(subscription.current_period_end * 1000)
        : new Date(),

      trialEndsAt: subscription.trial_end
        ? new Date(subscription.trial_end * 1000)
        : undefined,
    };

    console.log(subscriptionData, " subscription data");
    // const subscriptionData = {
    //   userId: user.id,
    //   stripeCustomerId: session.customer as string,
    //   stripeSubscriptionId: id,
    //   status,
    //   planName: items.data[0]?.price.nickname ?? "PRO",
    //   currentPeriodEnd: new Date(current_period_end * 1000),
    //   trialEndsAt: trial_end ? new Date(trial_end * 1000) : undefined,
    // };

    const existingSubscription = await prisma.subscription.findUnique({
      where: { userId: user.id },
    });

    if (existingSubscription) {
      await prisma.subscription.update({
        where: { userId: user.id },
        data: subscriptionData,
      });
    } else {
      await prisma.subscription.create({ data: subscriptionData });
    }
  }

  return new Response("Webhook received", { status: 200 });
}
