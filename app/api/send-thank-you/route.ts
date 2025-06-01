import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { to } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "BuildsForge <noreply@buildsforge.com>",
      to,
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

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
