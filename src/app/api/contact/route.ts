import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// TODO: Once you have a custom domain verified in Resend, change this to:
// "Mandalyne <contact@mandalyne.com>" (or whatever domain you pick)
const FROM = "Mandalyne <onboarding@resend.dev>";
const TO_DEEPAK = "d9572712747@gmail.com";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    // 1. Notify Deepak — reply-to is the visitor so hitting Reply in Gmail goes to them
    await resend.emails.send({
      from: FROM,
      to: TO_DEEPAK,
      replyTo: email,
      subject: `New message from ${name}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    // 2. Auto-acknowledge the visitor
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "We received your message — Mandalyne",
      text: [
        `Hi ${name},`,
        ``,
        `Thank you for reaching out. We've received your message and will get back to you by email shortly.`,
        ``,
        `— Mandalyne`,
        `https://mandalyne-website.vercel.app`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
