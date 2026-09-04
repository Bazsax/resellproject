import { NextResponse } from "next/server";
import { Resend } from "resend";

const CATEGORY_LABELS: Record<string, string> = {
  sneakers: "Sneaker",
  streetwear: "Ruha / Streetwear",
  watches: "Óra",
  bags: "Táska / Kiegészítő",
  glasses: "Szemüveg",
  jewelry: "Ékszer",
  electronics: "Elektronikai",
  other: "Egyéb",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      category,
      itemName,
      brand,
      size,
      targetBudget,
      itemLink,
      fullName,
      instagram,
      email,
      notes,
      imageUrls = [],
    } = body;

    if (!category || !itemName || !brand || !size || !fullName || !instagram || !email) {
      return NextResponse.json({ error: "Hiányzó kötelező mezők." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.SOURCING_NOTIFICATION_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      console.error("Missing Resend configuration");
      return NextResponse.json(
        { error: "Az e-mail szolgáltatás nincs konfigurálva." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const categoryLabel = CATEGORY_LABELS[category] ?? category;
    const imageSection =
      imageUrls.length > 0
        ? `<h3>Feltöltött képek</h3><ul>${imageUrls.map((url: string) => `<li><a href="${url}">${url}</a></li>`).join("")}</ul>`
        : "<p><em>Nincs feltöltött kép.</em></p>";

    const html = `
      <h2>Új egyedi beszerzési igény – Direct Supply</h2>
      <h3>Termék adatok</h3>
      <ul>
        <li><strong>Kategória:</strong> ${categoryLabel}</li>
        <li><strong>Terméknév:</strong> ${itemName}</li>
        <li><strong>Márka / szín:</strong> ${brand}</li>
        <li><strong>Méret:</strong> ${size}</li>
        <li><strong>Költségkeret:</strong> ${targetBudget || "—"}</li>
        <li><strong>Link:</strong> ${itemLink ? `<a href="${itemLink}">${itemLink}</a>` : "—"}</li>
      </ul>
      ${imageSection}
      <h3>Elérhetőségek</h3>
      <ul>
        <li><strong>Név:</strong> ${fullName}</li>
        <li><strong>Instagram:</strong> ${instagram}</li>
        <li><strong>E-mail:</strong> ${email}</li>
      </ul>
      <h3>Megjegyzés</h3>
      <p>${notes || "—"}</p>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[Direct Supply] Beszerzési igény: ${itemName}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Az e-mail küldése sikertelen." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Sourcing API error:", err);
    return NextResponse.json({ error: "Váratlan hiba történt." }, { status: 500 });
  }
}
