import React from "react";
import { Ruler, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Mérettáblázat & Garancia | Direct Supply",
  description:
    "Cipő, hoodie, póló, nadrág, kabát és női ruházat mérettáblázat EU, US, UK és CM értékekkel.",
};

type Column = { key: string; label: string; accent?: boolean };

function SizeTable({
  columns,
  rows,
}: {
  columns: Column[];
  rows: Record<string, string>[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[#27272a] bg-[#121214]">
      <table className="w-full text-left text-xs">
        <thead className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 font-black uppercase tracking-wider">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`p-3.5 ${col.accent ? "text-[#ccff00]" : ""}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800/60 font-semibold text-zinc-200">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-zinc-800/40 transition">
              {columns.map((col, colIdx) => (
                <td
                  key={col.key}
                  className={`p-3.5 ${
                    colIdx === 0
                      ? "font-black text-white"
                      : col.accent
                        ? "text-[#ccff00]"
                        : ""
                  }`}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SizeGuidePage() {
  const shoeSizes = [
    { eu: "36", us: "4.0", uk: "3.5", cm: "23.0 cm" },
    { eu: "37", us: "5.0", uk: "4.5", cm: "23.5 cm" },
    { eu: "38", us: "5.5", uk: "5.0", cm: "24.0 cm" },
    { eu: "39", us: "6.5", uk: "6.0", cm: "24.5 cm" },
    { eu: "40", us: "7.0", uk: "6.0", cm: "25.0 cm" },
    { eu: "41", us: "8.0", uk: "7.0", cm: "26.0 cm" },
    { eu: "41.5", us: "8.5", uk: "7.5", cm: "26.5 cm" },
    { eu: "42", us: "8.5", uk: "7.5", cm: "26.5 cm" },
    { eu: "42.5", us: "9.0", uk: "8.0", cm: "27.0 cm" },
    { eu: "43", us: "9.5", uk: "8.5", cm: "27.5 cm" },
    { eu: "44", us: "10.0", uk: "9.0", cm: "28.0 cm" },
    { eu: "44.5", us: "10.5", uk: "9.5", cm: "28.5 cm" },
    { eu: "45", us: "11.0", uk: "10.0", cm: "29.0 cm" },
    { eu: "46", us: "12.0", uk: "11.0", cm: "30.0 cm" },
  ];

  const hoodieSizes = [
    { size: "XS", chest: "86 – 91 cm", length: "66 cm", sleeve: "62 cm" },
    { size: "S", chest: "92 – 97 cm", length: "68 cm", sleeve: "64 cm" },
    { size: "M", chest: "98 – 103 cm", length: "70 cm", sleeve: "66 cm" },
    { size: "L", chest: "104 – 109 cm", length: "73 cm", sleeve: "68 cm" },
    { size: "XL", chest: "110 – 116 cm", length: "76 cm", sleeve: "70 cm" },
    { size: "XXL", chest: "117 – 124 cm", length: "79 cm", sleeve: "72 cm" },
  ];

  const tshirtSizes = [
    { size: "XS", chest: "84 – 88 cm", length: "66 cm", shoulder: "42 cm" },
    { size: "S", chest: "90 – 94 cm", length: "69 cm", shoulder: "44 cm" },
    { size: "M", chest: "96 – 100 cm", length: "72 cm", shoulder: "46 cm" },
    { size: "L", chest: "102 – 106 cm", length: "74 cm", shoulder: "48 cm" },
    { size: "XL", chest: "108 – 114 cm", length: "76 cm", shoulder: "50 cm" },
    { size: "XXL", chest: "116 – 122 cm", length: "78 cm", shoulder: "52 cm" },
  ];

  const pantsSizes = [
    { size: "28 / XS", waist: "71 – 74 cm", hip: "88 – 92 cm", inseam: "76 cm" },
    { size: "30 / S", waist: "75 – 78 cm", hip: "93 – 97 cm", inseam: "78 cm" },
    { size: "32 / M", waist: "79 – 82 cm", hip: "98 – 102 cm", inseam: "80 cm" },
    { size: "34 / L", waist: "83 – 86 cm", hip: "103 – 107 cm", inseam: "81 cm" },
    { size: "36 / XL", waist: "87 – 91 cm", hip: "108 – 112 cm", inseam: "82 cm" },
    { size: "38 / XXL", waist: "92 – 96 cm", hip: "113 – 118 cm", inseam: "83 cm" },
  ];

  const shortsSizes = [
    { size: "S", waist: "74 – 78 cm", hip: "94 – 98 cm", length: "48 cm" },
    { size: "M", waist: "79 – 83 cm", hip: "99 – 103 cm", length: "50 cm" },
    { size: "L", waist: "84 – 88 cm", hip: "104 – 108 cm", length: "52 cm" },
    { size: "XL", waist: "89 – 94 cm", hip: "109 – 114 cm", length: "54 cm" },
    { size: "XXL", waist: "95 – 100 cm", hip: "115 – 120 cm", length: "56 cm" },
  ];

  const jacketSizes = [
    { size: "S", chest: "94 – 98 cm", length: "66 cm", sleeve: "63 cm" },
    { size: "M", chest: "100 – 104 cm", length: "68 cm", sleeve: "65 cm" },
    { size: "L", chest: "106 – 110 cm", length: "70 cm", sleeve: "67 cm" },
    { size: "XL", chest: "112 – 118 cm", length: "72 cm", sleeve: "69 cm" },
    { size: "XXL", chest: "120 – 126 cm", length: "74 cm", sleeve: "71 cm" },
  ];

  const womenSizes = [
    { size: "XS", bust: "80 – 84 cm", waist: "62 – 66 cm", hip: "86 – 90 cm" },
    { size: "S", bust: "85 – 89 cm", waist: "67 – 71 cm", hip: "91 – 95 cm" },
    { size: "M", bust: "90 – 94 cm", waist: "72 – 76 cm", hip: "96 – 100 cm" },
    { size: "L", bust: "95 – 100 cm", waist: "77 – 82 cm", hip: "101 – 106 cm" },
    { size: "XL", bust: "101 – 107 cm", waist: "83 – 89 cm", hip: "107 – 113 cm" },
  ];

  const kidsSizes = [
    { size: "116 / 5–6 év", height: "110 – 116 cm", chest: "58 – 60 cm", waist: "54 – 56 cm" },
    { size: "128 / 7–8 év", height: "122 – 128 cm", chest: "62 – 64 cm", waist: "56 – 58 cm" },
    { size: "140 / 9–10 év", height: "134 – 140 cm", chest: "66 – 70 cm", waist: "60 – 62 cm" },
    { size: "152 / 11–12 év", height: "146 – 152 cm", chest: "72 – 76 cm", waist: "64 – 66 cm" },
    { size: "164 / 13–14 év", height: "158 – 164 cm", chest: "78 – 82 cm", waist: "68 – 70 cm" },
  ];

  const sections = [
    {
      title: "Cipő mérettáblázat (EU / US / UK / CM)",
      note: "Nike, Jordan, Dunk és hasonló sneaker modellekhez – a belső talphossz a legbiztosabb támpont.",
      columns: [
        { key: "eu", label: "EUR méret", accent: true },
        { key: "us", label: "US férfi" },
        { key: "uk", label: "UK" },
        { key: "cm", label: "Belső talphossz", accent: true },
      ],
      rows: shoeSizes,
    },
    {
      title: "Hoodie / puffer / crewneck",
      note: "Streetwear felsők: Trapstar, Sp5der, Essentials stílusú oversize darabokhoz is igazítható.",
      columns: [
        { key: "size", label: "Méret", accent: true },
        { key: "chest", label: "Mellbőség" },
        { key: "length", label: "Hosszúság" },
        { key: "sleeve", label: "Ujjhossz", accent: true },
      ],
      rows: hoodieSizes,
    },
    {
      title: "Póló / t-shirt",
      note: "Klasszikus és regular fit pólókhoz. Oversize modellnél gyakran érdemes 1 mérettel feljebb menni.",
      columns: [
        { key: "size", label: "Méret", accent: true },
        { key: "chest", label: "Mellbőség" },
        { key: "length", label: "Hosszúság" },
        { key: "shoulder", label: "Vállszélesség", accent: true },
      ],
      rows: tshirtSizes,
    },
    {
      title: "Nadrág / jeans / cargo",
      note: "Derékméret inch és betűjel szerint. Slim fitnél a derék, baggynál a csípő a döntő.",
      columns: [
        { key: "size", label: "Méret", accent: true },
        { key: "waist", label: "Derék" },
        { key: "hip", label: "Csípő" },
        { key: "inseam", label: "Belső hossz", accent: true },
      ],
      rows: pantsSizes,
    },
    {
      title: "Rövidnadrág / shorts",
      note: "Sport és casual shortokhoz – a hossz a külső oldalon mért érték.",
      columns: [
        { key: "size", label: "Méret", accent: true },
        { key: "waist", label: "Derék" },
        { key: "hip", label: "Csípő" },
        { key: "length", label: "Hossz", accent: true },
      ],
      rows: shortsSizes,
    },
    {
      title: "Kabát / dzseki / windbreaker",
      note: "Könnyű és középvastag kabátokhoz. Vastag puffer alá rétegezésnél érdemes nagyobb méretet választani.",
      columns: [
        { key: "size", label: "Méret", accent: true },
        { key: "chest", label: "Mellbőség" },
        { key: "length", label: "Hosszúság" },
        { key: "sleeve", label: "Ujjhossz", accent: true },
      ],
      rows: jacketSizes,
    },
    {
      title: "Női ruházat (felső / dress / set)",
      note: "Általános női mérettábla mell-, derék- és csípőbőséggel.",
      columns: [
        { key: "size", label: "Méret", accent: true },
        { key: "bust", label: "Mellbőség" },
        { key: "waist", label: "Derék" },
        { key: "hip", label: "Csípő", accent: true },
      ],
      rows: womenSizes,
    },
    {
      title: "Gyerek ruházat",
      note: "Kor / magasság szerinti irányadó méretek. Mindig a magasságot vedd elsődlegesnek.",
      columns: [
        { key: "size", label: "Méret / kor", accent: true },
        { key: "height", label: "Magasság" },
        { key: "chest", label: "Mellbőség" },
        { key: "waist", label: "Derék", accent: true },
      ],
      rows: kidsSizes,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      <div className="bg-[#121214] border-b border-[#27272a] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-xs font-black uppercase tracking-wider text-[#ccff00]">
            <Ruler className="w-3.5 h-3.5" /> Méretválasztási Útmutató
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            MÉRETTÁBLÁZAT & GARANCIA
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-normal">
            Cipő, streetwear és további ruházati kategóriák méretei egy helyen. Ha mégsem stimmelne, 14 napos
            díjmentes méretcserét biztosítunk.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-12">
        {sections.map((section) => (
          <div key={section.title} className="space-y-3">
            <div className="space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-display tracking-tight">
                {section.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 font-normal">{section.note}</p>
            </div>
            <SizeTable columns={section.columns} rows={section.rows} />
          </div>
        ))}

        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
          <p className="text-xs font-black uppercase tracking-wider text-[#ccff00]">Tippek a méretválasztáshoz</p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-400 font-normal">
            <li>• Mérj laza ruhában, a mérőszalagot ne húzd túl szorosra.</li>
            <li>• Streetwear oversize daraboknál általában 1 mérettel nagyobb a kényelmes választás.</li>
            <li>• Cipőnél a belső talphossz (CM) pontosabb, mint a marketing méretszám.</li>
            <li>• Ha két méret között vagy, írj nekünk Instagramon – segítünk a választásban.</li>
          </ul>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-[#121214] border border-[#ccff00]/40 space-y-4">
          <h3 className="text-lg font-black uppercase text-white font-display">
            14 Napos Méretcsere Szabályzat
          </h3>
          <div className="space-y-2 text-xs sm:text-sm text-zinc-300 font-normal">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ccff00] flex-shrink-0 mt-0.5" />
              <span>
                A terméket az átvételtől számított 14 napon belül eredeti állapotában, dobozával és címkéivel együtt
                cseréljük.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ccff00] flex-shrink-0 mt-0.5" />
              <span>
                A cserefolyamat elindításához csak küldj egy üzenetet az Instagram ügyfélszolgálatunknak.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
