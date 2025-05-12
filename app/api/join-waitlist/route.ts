import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Resend } from "resend";

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

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "BuildsForge <noreply@buildsforge.com>",
      to: sanitizedEmail,
      subject: "Thanks for waiting!",
      html: `
          <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
            <p>Hi ${"there"},</p>
            <p>Thank you for waiting. We truly appreciate your patience and support as we build great things at <strong>BuildsForge</strong>.</p>
            <p>🚀 Keep building,<br/>The BuildsForge Team</p>
            <hr style="margin-top: 30px;"/>
            <small>This email was sent by BuildsForge. If you have questions, contact us at support@buildsforge.com.</small>
          </div>
        `,
      text: `Hi ${"there"},\n\nThank you for waiting. We appreciate your patience.\n\n- The BuildsForge Team`,
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
