import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    const { name, role, discovery, username } = await req.json();
    const user = await currentUser();

    if (!name || !username || !user) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Check for existing user
    const existingUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });

    if (existingUser) {
      return NextResponse.json({ onboardingComplete: true }, { status: 200 });
    }

    const email = user.emailAddresses[0].emailAddress;

    // Generate slug and bio
    const slug = username.toLowerCase();
    const bio = `I’m @${username}, building something awesome on BuildsForge 🚀`;

    // Create new user with slug and bio
    const newUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        email,
        name,
        discovery,
        role,
        username,
        onboardingCompleted: true,
        settings: {
          create: {
            preferredAiModel: "gemini-2.5-flash",
            slug,
            bio,
          },
        },
        subscriptions: {
          create: {
            lemonSqueezyCustomerId: "free-" + user.id,
            lemonSqueezySubscriptionId: "free-plan" + user.id,
            lemonSqueezyProductId: "111111",
            planName: "Free",
            status: "active",
          },
        },
      },
      include: {
        settings: true,
      },
    });

    // First, check if the email exists in earlyAccess
    const earlyAccessEntry = await prisma.earlyAccess.findUnique({
      where: { email },
    });

    // Only update if the entry exists
    if (earlyAccessEntry) {
      await prisma.earlyAccess.update({
        where: { email },
        data: {
          claimed: true,
          claimedAt: new Date(),
        },
      });
    }
    return NextResponse.json(
      { onboardingComplete: true, user: newUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
