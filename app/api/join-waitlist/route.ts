import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const input = await req.json();
    console.log("Received data for MVP generation:", input);

    // Sanitize and validate email
    const rawEmail = typeof input.email === "string" ? input.email : "";
    const sanitizedEmail = rawEmail.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const existingUser = await prisma.earlyAccess.findFirst({
      where: {
        email: sanitizedEmail,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: true, message: " you has joined waiting list already " },
        { status: 201 }
      );
    }
    await prisma.earlyAccess.create({
      data: {
        email: sanitizedEmail,
      },
    });

    return NextResponse.json({
      success: true,
      message: "you have joined waiting list",
    });
  } catch (error) {
    console.error("Error in /api/products/create:", error);
    return NextResponse.json(
      { success: false, error: error?.toString() },
      { status: 500 }
    );
  }
}
