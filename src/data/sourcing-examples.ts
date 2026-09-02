export interface SourcingExample {
  id: string;
  title: string;
  category: string;
  clientPrice: number;
  retailCompare?: number;
  qualityLabel: string;
  qualityScore: number;
  deliveryDays: string;
  image: string;
  note?: string;
  description?: string;
  highlights?: string[];
}

export const SOURCING_EXAMPLES: SourcingExample[] = [
  {
    id: "ex-dunk",
    title: "Supreme Dunk Fehér",
    category: "Cipő",
    clientPrice: 48000,
    retailCompare: 185000,
    qualityLabel: "1/1 prémium",
    qualityScore: 5,
    deliveryDays: "7 nap",
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&auto=format&fit=crop&q=80",
    note: "QC fotók, dupla doboz, gyári minőségű bőr",
    description:
      "Ügyfelünk egy limitált Supreme x Nike Dunk Low fehér párost rendelt. A beszállítón keresztül 1/1 prémium minőséget kértünk – teljes bőr felsőrész, pontos színezés és eredeti doboz.",
    highlights: [
      "Részletes QC fotók a szállítás előtt",
      "Dupla dobozos csomagolás",
      "Gyári minőségű bőr és varrás",
      "7 munkanapon belül kiszállítva",
    ],
  },
  {
    id: "ex-j4",
    title: "Air Jordan 4 Military Black",
    category: "Cipő",
    clientPrice: 52000,
    retailCompare: 210000,
    qualityLabel: "1/1 prémium",
    qualityScore: 5,
    deliveryDays: "8 nap",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=80",
    description:
      "Klasszikus Jordan 4 Military Black rendelés – a legkeresettebb színváltozatok egyike. Az ügyfél EU 42-es méretet kért, QC-n ellenőriztük a talp mintázatot és a bőr textúrát.",
    highlights: [
      "Pontos talp és középtalp forma",
      "Eredeti doboz + extra címkék",
      "8 napos szállítási idő",
      "Méretcsere garancia 14 napig",
    ],
  },
  {
    id: "ex-trapstar",
    title: "Trapstar Hyperdrive Puffer",
    category: "Ruha",
    clientPrice: 38500,
    retailCompare: 120000,
    qualityLabel: "Top tier",
    qualityScore: 5,
    deliveryDays: "9 nap",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
    description:
      "Trapstar Hyperdrive puffer dzseki egyedi beszerzés – M méret, fekete szín. A töltet sűrűsége, a cipzár minősége és a logó hímzés mind megfelelt a top tier elvárásoknak.",
    highlights: [
      "Pontos logó elhelyezés és hímzés",
      "Prémium töltet – nem lapos",
      "Eredeti címkék és tasak",
      "Méretváltás segítve az ügyfélszolgálaton",
    ],
  },
  {
    id: "ex-sub",
    title: "Submariner Clean Factory",
    category: "Óra",
    clientPrice: 89000,
    retailCompare: 3200000,
    qualityLabel: "Super clone",
    qualityScore: 5,
    deliveryDays: "10 nap",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop&q=80",
    description:
      "Clean Factory Submariner rendelés – zafír üveg, pontos lünetta kattanás és 904L acél tok. Az ügyfél a legmagasabb super clone minőséget kérte.",
    highlights: [
      "Zafír üveg – karcolásálló",
      "Tűpontos lünetta és korona",
      "904L acél tok és szíj",
      "Eredeti doboz és papírok",
    ],
  },
];

export function getSourcingExampleById(id: string): SourcingExample | undefined {
  return SOURCING_EXAMPLES.find((ex) => ex.id === id);
}
