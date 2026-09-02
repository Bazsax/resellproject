export interface SuccessStoryImage {
  src: string;
  caption: string;
  /** Visual hint for placeholder until real screenshots are uploaded */
  kind: "sale" | "chat" | "product" | "stats";
}

export interface SuccessStory {
  id: string;
  name: string;
  role: string;
  timeline: string;
  startCapital: string;
  resultLabel: string;
  resultValue: string;
  product: string;
  quote: string;
  story: string[];
  highlights: string[];
  /** At least 2 proof images (sales screenshots, Discord chats, etc.) */
  images: SuccessStoryImage[];
}

/** In-depth success stories from guide buyers – shared on home + útmutató */
export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-adam",
    name: "Szabó Ádám",
    role: "Egyetemista · Budapest",
    timeline: "3 hét",
    startCapital: "18 000 Ft",
    resultLabel: "Első hónap profit",
    resultValue: "142 000 Ft",
    product: "Reselling Starterpack",
    quote:
      "Az első eladásom napok alatt megérkezett – a profit már az első héten fedezte az útmutató árát.",
    story: [
      "Ádám egyetem mellett keresett mellékbevételt, de nem akart milliós tőkével kísérletezni. A Starterpack után először egy sneaker-párost szerzett be ellenőrzött beszállítótól, QC fotókkal.",
      "Vintedre feltette a módszer szerinti árazással és szöveggel. 4 nap alatt eladták, 24 000 Ft tiszta árréssel. A profitot azonnal visszaforgatta – a harmadik hét végén már négy sikeres eladásnál tartott.",
    ],
    highlights: ["4 nap az első eladásig", "Vinted stratégia", "Visszaforgatott profit"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
        caption: "Vinted – első eladás megerősítve",
        kind: "sale",
      },
      {
        src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
        caption: "Discord – beszállítói QC megbeszélés",
        kind: "chat",
      },
    ],
  },
  {
    id: "story-lili",
    name: "Varga Lili",
    role: "Irodai munka mellett · Debrecen",
    timeline: "6 hét",
    startCapital: "35 000 Ft",
    resultLabel: "Havi bevétel",
    resultValue: "280 000+ Ft",
    product: "Reselling Starterpack",
    quote:
      "Semmi felesleges hype – követhető lépések. Másnap elindultam, és az első termékem gyorsan elment.",
    story: [
      "Lili full-time munka mellett akart skálázható mellékprojektet. A beszállítói listákkal streetwear darabokra fókuszált – puffer és hoodiek –, ahol a nagyobb árrés gyorsabban jött vissza.",
      "Az útmutató eladási sablonjai és a Vinted/Instagram tippek után 6 hét alatt stabil heti ritmust épített: beszerzés → QC → feltöltés → eladás. Ma már visszatérő vevői is vannak.",
    ],
    highlights: ["Streetwear fókusz", "Visszatérő vevők", "Heti ismételhető ritmus"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
        caption: "Puffer haul – QC előtt",
        kind: "product",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        caption: "Havi bevétel összesítő",
        kind: "stats",
      },
    ],
  },
  {
    id: "story-tamas",
    name: "Kiss Tamás",
    role: "Korábban veszteséges próbálkozó · Szeged",
    timeline: "2 hónap",
    startCapital: "50 000 Ft",
    resultLabel: "Havi nettó",
    resultValue: "410 000 Ft",
    product: "Reselling Starterpack",
    quote:
      "Korábban sokat buktam rossz döntéseken. Itt végre egy rendszer van, ami kiszámíthatóan hoz eredményt.",
    story: [
      "Tamás korábban random kínai eladóktól rendelt, selejtes minőséggel és visszaküldésekkel – több tízezret bukott. A Starterpack után először a „mit NE csinálj” részt követte: csak ellenőrzött forrás, mindig QC.",
      "Két hónap alatt átállt sneaker + óra mixre, ahol a módszer szerinti árazás 3–5× árrést ad. A veszteségek helyett most tervezhető havi bevétellel számol.",
    ],
    highlights: ["Bukó döntések elkerülése", "QC kötelező", "3–5× árrés"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=80",
        caption: "Jordan 4 – eladás előtt",
        kind: "product",
      },
      {
        src: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop&q=80",
        caption: "Discord – vevő visszajelzés",
        kind: "chat",
      },
    ],
  },
  {
    id: "story-petra",
    name: "Németh Petra",
    role: "Kezdő · Pécs",
    timeline: "8 hét",
    startCapital: "22 000 Ft",
    resultLabel: "Összesített profit",
    resultValue: "310 000 Ft",
    product: "Reselling Starterpack",
    quote:
      "Nem csak egyszeri szerencse volt. Már több sikeres eladásom van, és visszatérő vásárlóim is.",
    story: [
      "Petra nulláról indult – soha nem adózott resellt, nem ismert beszállítót. Az útmutató vámolási és platform-része segített biztonságosan elindulni Magyarországon.",
      "Nyolc hét alatt 11 eladást zárt, főleg sneaker kategóriában. A visszatérő vevők miatt már nem kell minden alkalommal új közönséget építenie – ez a skálázás első lépése, amit a Starterpack hangsúlyoz.",
    ],
    highlights: ["Nulláról indult", "11 eladás 8 hét alatt", "Magyar vámolási útmutató"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80",
        caption: "Platform – eladás visszaigazolás",
        kind: "sale",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        caption: "8 hetes eredmény dashboard",
        kind: "stats",
      },
    ],
  },
];
