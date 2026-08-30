const BRAND = {
  bg: "#09090b",
  card: "#121214",
  border: "#27272a",
  neon: "#ccff00",
  neonHover: "#b3e600",
  text: "#f4f4f5",
  muted: "#a1a1aa",
  dim: "#71717a",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export type GuideAccessEmailProps = {
  guideUrl: string;
  sessionId: string;
  siteUrl?: string;
};

export function buildGuideAccessEmailHtml({
  guideUrl,
  sessionId,
  siteUrl,
}: GuideAccessEmailProps): string {
  const safeUrl = escapeHtml(guideUrl);
  const safeSession = escapeHtml(sessionId);
  const homeUrl = siteUrl ? escapeHtml(siteUrl.replace(/\/$/, "")) : "";

  return `<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Az útmutató hozzáférésed – EgyPerEgy</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    body { margin: 0; padding: 0; width: 100% !important; -webkit-text-size-adjust: 100%; }
    table { border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0; }
    img { border: 0; outline: none; text-decoration: none; }
    a { color: ${BRAND.neon}; }
    @media only screen and (max-width: 620px) {
      .wrapper { width: 100% !important; }
      .content-pad { padding-left: 20px !important; padding-right: 20px !important; }
      .hero-title { font-size: 22px !important; line-height: 1.2 !important; }
      .cta-btn { display: block !important; width: 100% !important; box-sizing: border-box !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    Köszönjük a vásárlást! Itt érheted el az Az Első Millió útmutatót.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.bg};">
    <tr>
      <td align="center" style="padding:24px 12px 40px;">

        <table role="presentation" class="wrapper" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background-color:${BRAND.card};border:1px solid ${BRAND.border};border-radius:16px;overflow:hidden;">

          <!-- Top accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,${BRAND.neon},${BRAND.neonHover});font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td class="content-pad" style="padding:28px 28px 8px;text-align:center;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND.neon};">
                EgyPerEgy
              </p>
              <p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.dim};">
                rep reselling &amp; sourcing
              </p>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td class="content-pad" style="padding:16px 28px 8px;text-align:center;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND.neon};">
                ✓ Sikeres vásárlás
              </p>
              <h1 class="hero-title" style="margin:0;font-size:26px;font-weight:900;line-height:1.15;text-transform:uppercase;color:${BRAND.text};letter-spacing:-0.02em;">
                Az útmutató<br />hozzáférésed
              </h1>
            </td>
          </tr>

          <!-- Body copy -->
          <tr>
            <td class="content-pad" style="padding:16px 28px 24px;">
              <p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:${BRAND.muted};">
                Köszönjük a vásárlást! Sikeresen megvásároltad az
                <strong style="color:${BRAND.text};">Az Első Millió – Replica Reselling Útmutató</strong>
                digitális anyagát.
              </p>
              <p style="margin:0;font-size:14px;line-height:1.6;color:${BRAND.muted};">
                Kattints az alábbi gombra a dokumentum megnyitásához. A link csak neked szól — mentsd el ezt az e-mailt.
              </p>
            </td>
          </tr>

          <!-- CTA button -->
          <tr>
            <td class="content-pad" style="padding:0 28px 12px;text-align:center;">
              <table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
                <tr>
                  <td align="center" style="border-radius:12px;background-color:${BRAND.neon};">
                    <a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="cta-btn" style="display:inline-block;padding:16px 32px;font-size:13px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;text-decoration:none;color:#000000;border-radius:12px;">
                      Útmutató megnyitása →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Fallback link -->
          <tr>
            <td class="content-pad" style="padding:8px 28px 28px;text-align:center;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:${BRAND.dim};">
                Ha a gomb nem működik, másold be ezt a linket:
              </p>
              <p style="margin:0;word-break:break-all;">
                <a href="${safeUrl}" target="_blank" rel="noopener noreferrer" style="font-size:12px;line-height:1.5;color:${BRAND.neon};text-decoration:underline;">
                  ${safeUrl}
                </a>
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 28px;">
              <div style="height:1px;background-color:${BRAND.border};"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="content-pad" style="padding:20px 28px 28px;text-align:center;">
              <p style="margin:0 0 8px;font-size:11px;line-height:1.5;color:${BRAND.dim};">
                Rendelési azonosító:<br />
                <span style="font-family:monospace;font-size:10px;color:${BRAND.muted};">${safeSession}</span>
              </p>
              ${
                homeUrl
                  ? `<p style="margin:12px 0 0;font-size:11px;">
                <a href="${homeUrl}" style="color:${BRAND.muted};text-decoration:underline;">egyperegy.hu</a>
              </p>`
                  : ""
              }
              <p style="margin:16px 0 0;font-size:10px;line-height:1.5;color:${BRAND.dim};">
                Ha nem te vásároltál, kérjük jelezd nekünk a Kapcsolat oldalon.
              </p>
            </td>
          </tr>

        </table>

        <p style="margin:20px 0 0;font-size:10px;color:${BRAND.dim};text-align:center;">
          © EgyPerEgy · Digitális útmutató
        </p>

      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildGuideAccessEmailText({
  guideUrl,
  sessionId,
}: GuideAccessEmailProps): string {
  return `Köszönjük a vásárlást – EgyPerEgy

Sikeresen megvásároltad az Az Első Millió – Replica Reselling Útmutató digitális anyagát.

Útmutató megnyitása:
${guideUrl}

Rendelési azonosító: ${sessionId}

Ha nem te vásároltál, jelezd nekünk.`;
}
