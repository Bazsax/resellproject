export interface GuideProofImage {
  id: string;
  src: string;
  caption: string;
  platform?: string;
}

/** Replace src URLs with your Cloudinary proof screenshots */
export const GUIDE_PROOF_IMAGES: GuideProofImage[] = [
  {
    id: "proof-1",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80",
    caption: "Vinted eladás – 42 000 Ft profit",
    platform: "Vinted",
  },
  {
    id: "proof-2",
    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=80",
    caption: "Rendelés megerősítve",
    platform: "Depop",
  },
  {
    id: "proof-3",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    caption: "Havi bevétel – 380 000+ Ft",
    platform: "Összesítő",
  },
  {
    id: "proof-4",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    caption: "5 csillagos értékelés",
    platform: "Vinted",
  },
];

export interface GuideReview {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
  highlight?: string;
}

export const GUIDE_REVIEWS: GuideReview[] = [
  {
    id: "gr-1",
    author: "Szabó Ádám",
    date: "2026. május 12.",
    rating: 5,
    highlight: "Első héten visszahozta az árát",
    content:
      "Az első eladásom napok alatt megérkezett, és a profit már fedezte az útmutató árát. Pontosan azt kaptam, amit ígértek.",
  },
  {
    id: "gr-2",
    author: "Varga Lili",
    date: "2026. június 3.",
    rating: 5,
    highlight: "Kezdőknek is érthető",
    content:
      "Semmi felesleges hype – követhető lépések. Másnap már elindultam, és az első termékem gyorsan elment.",
  },
  {
    id: "gr-3",
    author: "Kiss Tamás",
    date: "2026. június 18.",
    rating: 5,
    highlight: "Tényleg működik",
    content:
      "Korábban sokat buktam rossz döntéseken. Itt végre egy rendszer van, ami kiszámíthatóan hoz eredményt.",
  },
  {
    id: "gr-4",
    author: "Németh Petra",
    date: "2026. július 2.",
    rating: 5,
    highlight: "Már van visszatérő vevőm",
    content:
      "Nem csak egyszeri szerencse volt. Már több sikeres eladásom van, és visszatérő vásárlóim is.",
  },
];

export const GUIDE_STEPS = [
  {
    number: "01",
    title: "Megérted, miért működik",
    summary:
      "Olcsón beszerzel, felteszed, eladod, ismétled. Egyszerű modell – de csak akkor profitábilis, ha tudod, mit csinálsz. Az útmutató ezt a rendszert adja meg neked kész formában.",
  },
  {
    number: "02",
    title: "Kihagyod a bukó próbálkozásokat",
    summary:
      "A legtöbb kezdő hónapokat vesztegeti rossz beszállítókkal és selejtes termékekkel. Te ellenőrzött kontaktokkal indulhatsz – anélkül, hogy saját pénzedből tanulnál.",
  },
  {
    number: "03",
    title: "Eladni tudsz, nem csak beszerezni",
    summary:
      "A beszerzés önmagában nem elég. Megtanulod, hogyan tűnj megbízhatónak a vevők számára, és hogyan keljen el a terméked – a részletek az útmutatóban vannak.",
  },
  {
    number: "04",
    title: "Felépíted, ami marad",
    summary:
      "Az első eladás csak a kezdet. Megtanulod visszaforgatni a profitot, visszatérő vevőket szerezni, és egy stabil alapot építeni – amire már nem kell minden alkalommal elölről kezdened.",
  },
  {
    number: "05",
    title: "Skálázás a csillagokig",
    summary:
      "Ha az alap működik, jön a növekedés: több termék, több platform, nagyobb volumen. Innen indul az út az első millió felé – és az útmutató végigkísér ezen a szakaszon is.",
  },
];

export const GUIDE_FAQ = [
  {
    q: "Kezdőként is működik?",
    a: "Igen. Nincs szükség előzetes tapasztalatra – az útmutató végigvezet az egész folyamaton.",
  },
  {
    q: "Mennyi kezdőtőkére van szükség?",
    a: "Kis összeggel is el lehet indulni. A pontos részletek és számítások az útmutatóban találhatók.",
  },
  {
    q: "Milyen formátumban kapom meg?",
    a: "Azonnali Gumroad letöltés: PDF dokumentáció + frissülő hozzáférés a beszállítói anyagokhoz.",
  },
  {
    q: "Frissül az útmutató?",
    a: "Igen – örökös ingyenes frissítés. Új beszállítók és friss tippek rendszeresen kerülnek be.",
  },
  {
    q: "Működik Magyarországról?",
    a: "Teljes mértékben. Magyarországra szabott szállítási és vámolási útmutató is benne van.",
  },
];
