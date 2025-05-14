import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    const { name, role, discovery, username } = await req.json();

    console.log(
      "Received data for MVP generation:",
      name,
      role,
      discovery,
      username
    );

    // Get current user via Clerk
    console.log("Current user:", await currentUser());
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

    // Check waitlist
    const email = user.emailAddresses[0].emailAddress;
    const waitListUser = await prisma.earlyAccess.findUnique({
      where: { email },
    });

    const newUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        email,
        name,
        discovery,
        role,
        username,
      },
    });

    if (waitListUser) {
      await prisma.earlyAccess.update({
        where: { email },
        data: {
          claimed: true,
          invited: true,
          claimedAt: new Date(),
          tier: "BETA",
        },
      });

      await prisma.trial.create({
        data: {
          userId: newUser.id,
          plan: "BETA",
          startDate: new Date(),
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days later
        },
      });
    }

    // Update Clerk public metadata
    // Update the current session's claims so the user is not redirected to onboarding again
    // Find the current session for this user

    return NextResponse.json({ onboardingComplete: true }, { status: 200 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
