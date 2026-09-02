import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Hiányzó kötelező mezők." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL ||
      process.env.SOURCING_NOTIFICATION_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      console.error("Missing Resend configuration");
      return NextResponse.json(
        { error: "Az e-mail szolgáltatás nincs konfigurálva." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const html = `
      <h2>Új kapcsolatfelvétel – Direct Supply</h2>
      <ul>
        <li><strong>Név:</strong> ${name}</li>
        <li><strong>E-mail:</strong> ${email}</li>
        <li><strong>Tárgy:</strong> ${subject}</li>
      </ul>
      <h3>Üzenet</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[Direct Supply] Kapcsolat: ${subject}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Az e-mail küldése sikertelen." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Váratlan hiba történt." }, { status: 500 });
  }
}
