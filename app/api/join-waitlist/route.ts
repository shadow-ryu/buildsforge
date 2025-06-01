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
      subject: "You're in — your BuildsForge beta access is ready!",
      html: `
          <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.6;">
            <p>Hey ${"there"},</p>
      
            <p>You're officially in the <strong>BuildsForge beta</strong> 🎉</p>
  
            <p>This early version lets you explore the core freemium features. Just a heads-up — we're still building:</p>
  
            <ul>
              <li>Manual task edits & roadmap updates — coming soon</li>
              <li>Build log deletion — on the way</li>
              <li>Integrations like GitHub, Notion, and more — tell us what you need!</li>
            </ul>
  
            <p>We’re here to make your dev workflow faster, not bloated. If you hit bugs, have feedback, or want to request features, our Discord is the place to be:</p>
  
            <p>
              👉 <a href="https://discord.gg/Fvn63fRfE7" target="_blank" style="color: #5865F2; font-weight: bold;">Join the BuildsForge Discord</a>
            </p>
  
            <p>
              👉 <a href="https://buildsforge.com/sign-up" target="_blank" style="color: #000; font-weight: bold;">Start Using BuildsForge</a>
            </p>
  
            <p>We're building this with you — fast, focused, and community-driven.</p>
  
            <p>Keep shipping,<br/>– The BuildsForge Team</p>
          </div>
        `,
      text: `Hey there,
  
  You're in the BuildsForge beta 🎉
  
  This early version lets you explore core features — but some (like roadmap editing and log deletion) are still in development.
  
  Join our Discord to send feedback or request integrations like GitHub or Notion:
  https://discord.gg/Fvn63fRfE7
  
  Get started now:
  https://buildsforge.com/sign-up
  
  We’re building fast, and your feedback matters.
  
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
