import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { to } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "BuildsForge <noreply@buildsforge.com>",
      to,
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

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
