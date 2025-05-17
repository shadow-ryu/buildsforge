import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { to } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "BuildsForge <noreply@buildsforge.com>",
      to,
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
    
        </div>
      `,
      text: `Hey there,
    
    You're on the wait list for BuildsForge — thanks for joining us!
    
    Join the community on Discord: https://discord.gg/Fvn63fRfE7
    
    We’ll contact you when your beta access is ready.
    
    – The BuildsForge Team`,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
