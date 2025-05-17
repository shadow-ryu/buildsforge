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
        tier: "BASE",
        invited: true,
      },
    });

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "BuildsForge <noreply@buildsforge.com>",
      to: sanitizedEmail,
      subject: "You're in — welcome to BuildsForge!",
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.6;">
          <p>Hey ${"there"},</p>
    
          <p>You're officially on the waitlist for <strong>BuildsForge</strong> — the AI-powered build partner for solo founders 🚀</p>
    
          <p>While you're waiting, come join our <strong>Discord community</strong> where early builders like you are sharing feedback, ideas, and momentum:</p>
    
          <p>
            👉 <a href="https://discord.gg/Fvn63fRfE7" target="_blank" style="color: #5865F2; font-weight: bold;">Join the BuildsForge Discord</a>
          </p>
    
          <p>Thanks again for believing in the mission. We’ll reach out as soon as your beta access is ready.</p>
    
          <p>Keep building,<br/>– The BuildsForge Team</p>
    
          <hr style="margin-top: 30px;"/>
          <small style="color: #777;">This email was sent by BuildsForge. Questions? Reach us at <a href="mailto:support@buildsforge.com">support@buildsforge.com</a></small>
        </div>
      `,
      text: `Hey there,
    
    You're on the wait list for BuildsForge — thanks for joining us!
    
    Join the community on Discord: https://discord.gg/Fvn63fRfE7
    
    We’ll contact you when your beta access is ready.
    
    – The BuildsForge Team`,
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
