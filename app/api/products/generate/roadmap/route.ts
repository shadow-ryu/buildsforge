// /app/api/generate-roadmap/route.ts
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { inngest } from "@/lib/inngest"; // Your Inngest client instance

export async function POST(req: NextRequest) {
  try {
    const loggedUser = await currentUser();
    if (!loggedUser) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const user = await prisma.user.findFirst({
      where: { clerkId: loggedUser.id },
    });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found", clerkId: loggedUser.id },
        { status: 404 }
      );
    }

    const {
      productId,
      deadline,
      dailyCommitmentHrs,
      startDate,
    } = await req.json();
    if (!productId || !deadline || !dailyCommitmentHrs || !startDate) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Update current product
    await prisma.product.update({
      where: { id: productId, userId: user.id },
      data: {
        deadline: new Date(deadline),
        dailyCommitmentHrs: parseFloat(dailyCommitmentHrs),
        startDate: new Date(startDate),
      },
    });

    // Send to Inngest
    await inngest.send({
      name: "generate/roadmap",
      data: {
        userId: user.id,
        productId,
      },
    });

    return NextResponse.json(
      { success: true, message: "Roadmap generation started" },
      { status: 202 }
    );
  } catch (err) {
    console.error("Roadmap trigger failed:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
