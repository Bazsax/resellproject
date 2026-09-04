export type RadarCategoryId =
  | "all"
  | "bags"
  | "sneakers"
  | "streetwear"
  | "watches"
  | "electronics"
  | "accessories";

export type BuyCeilingFilter = "any" | "50k" | "100k" | "200k" | "400k";

export interface RadarSoldExample {
  id: string;
  title: string;
  image: string;
  price: number;
  marketplace: string;
}

export interface RadarMarketplaceExample {
  id: string;
  title: string;
  marketplace: string;
  image: string;
  price: number;
}

export interface RadarVendor {
  id: string;
  name: string;
  categories: string;
  href: string;
  askLabel?: string;
}

export interface RadarOpportunity {
  id: string;
  name: string;
  categoryId: RadarCategoryId;
  categoryLabel: string;
  score: number;
  signal: "Erős jel" | "Közepes jel" | "Figyelendő";
  recentMover?: boolean;
  soldCount: number;
  activeCount: number;
  medianSold: number;
  netResale: number;
  buyCeiling: number;
  soldExamples: RadarSoldExample[];
  marketplaceExamples: RadarMarketplaceExample[];
  vendors: RadarVendor[];
  supplierListHref: string;
}

export const RADAR_CATEGORIES: { id: RadarCategoryId; label: string }[] = [
  { id: "all", label: "Összes kategória" },
  { id: "bags", label: "Táskák" },
  { id: "sneakers", label: "Cipők" },
  { id: "streetwear", label: "Ruhák" },
  { id: "watches", label: "Órák" },
  { id: "electronics", label: "Elektronika" },
  { id: "accessories", label: "Kiegészítők" },
];

export const BUY_CEILING_FILTERS: { id: BuyCeilingFilter; label: string; max?: number }[] = [
  { id: "any", label: "Bármilyen érték" },
  { id: "50k", label: "Max. 50 000 Ft", max: 50000 },
  { id: "100k", label: "Max. 100 000 Ft", max: 100000 },
  { id: "200k", label: "Max. 200 000 Ft", max: 200000 },
  { id: "400k", label: "Max. 400 000 Ft", max: 400000 },
];

export const CATEGORY_MOMENTUM: { label: string; score: number }[] = [
  { label: "Elektronika", score: 94 },
  { label: "Táskák", score: 91 },
  { label: "Cipők", score: 88 },
  { label: "Ruhák", score: 84 },
  { label: "Órák", score: 81 },
];

export const MARKET_RADAR_OPPORTUNITIES: RadarOpportunity[] = [
  {
    id: "chanel-flap-bag",
    name: "Chanel flap bag",
    categoryId: "bags",
    categoryLabel: "Válltáskák",
    score: 95,
    signal: "Erős jel",
    recentMover: true,
    soldCount: 5,
    activeCount: 5,
    medianSold: 920000,
    netResale: 740000,
    buyCeiling: 445000,
    soldExamples: [
      {
        id: "s1",
        title: "Chanel Jumbo Flap Bag",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80",
        price: 980000,
        marketplace: "Vinted",
      },
      {
        id: "s2",
        title: "Chanel Classic Flap",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a67478a?w=400&auto=format&fit=crop&q=80",
        price: 890000,
        marketplace: "Instagram",
      },
      {
        id: "s3",
        title: "Chanel Medium Flap",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&auto=format&fit=crop&q=80",
        price: 910000,
        marketplace: "Facebook Marketplace",
      },
    ],
    marketplaceExamples: [
      {
        id: "m1",
        title: "Chanel Black Quilted Flap Bag",
        marketplace: "Vinted",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80",
        price: 720000,
      },
      {
        id: "m2",
        title: "Chanel Classic Caviar Flap",
        marketplace: "Jófogás",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a67478a?w=400&auto=format&fit=crop&q=80",
        price: 680000,
      },
      {
        id: "m3",
        title: "Chanel Lambskin Flap",
        marketplace: "Instagram",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&auto=format&fit=crop&q=80",
        price: 750000,
      },
    ],
    vendors: [
      {
        id: "v1",
        name: "Táskák – Direct Supply List",
        categories: "Táskák, kiegészítők",
        href: "/katalogus?kat=suppliers",
      },
      {
        id: "v2",
        name: "Hidden Gems – Direct Supply List",
        categories: "Prémium táskák, limitált modellek",
        href: "/katalogus?kat=suppliers",
      },
    ],
    supplierListHref: "/katalogus?kat=suppliers",
  },
  {
    id: "apple-airpods-max",
    name: "Apple AirPods Max",
    categoryId: "electronics",
    categoryLabel: "Elektronika",
    score: 94,
    signal: "Erős jel",
    recentMover: true,
    soldCount: 12,
    activeCount: 8,
    medianSold: 185000,
    netResale: 148000,
    buyCeiling: 89000,
    soldExamples: [
      {
        id: "s1",
        title: "AirPods Max Space Gray",
        image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&auto=format&fit=crop&q=80",
        price: 179000,
        marketplace: "Vinted",
      },
      {
        id: "s2",
        title: "AirPods Max Silver",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&auto=format&fit=crop&q=80",
        price: 192000,
        marketplace: "Jófogás",
      },
    ],
    marketplaceExamples: [
      {
        id: "m1",
        title: "AirPods Max – új bontatlan",
        marketplace: "Facebook Marketplace",
        image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&auto=format&fit=crop&q=80",
        price: 165000,
      },
      {
        id: "m2",
        title: "AirPods Max Pink",
        marketplace: "Vinted",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&auto=format&fit=crop&q=80",
        price: 158000,
      },
    ],
    vendors: [
      {
        id: "v1",
        name: "Elektronikák – Direct Supply List",
        categories: "Audio, phone, gadgets",
        href: "/katalogus?kat=suppliers",
      },
    ],
    supplierListHref: "/katalogus?kat=suppliers",
  },
  {
    id: "moncler-maya",
    name: "Moncler Maya jacket",
    categoryId: "streetwear",
    categoryLabel: "Kabátok",
    score: 91,
    signal: "Erős jel",
    recentMover: true,
    soldCount: 4,
    activeCount: 6,
    medianSold: 420000,
    netResale: 336000,
    buyCeiling: 198000,
    soldExamples: [
      {
        id: "s1",
        title: "Moncler Maya Black",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop&q=80",
        price: 450000,
        marketplace: "Vinted",
      },
      {
        id: "s2",
        title: "Moncler Maya Navy",
        image: "https://images.unsplash.com/photo-1544923246-77307dd65dbc?w=400&auto=format&fit=crop&q=80",
        price: 405000,
        marketplace: "Instagram",
      },
    ],
    marketplaceExamples: [
      {
        id: "m1",
        title: "Moncler Maya – M méret",
        marketplace: "Vinted",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop&q=80",
        price: 389000,
      },
    ],
    vendors: [
      {
        id: "v1",
        name: "Ruhák – Direct Supply List",
        categories: "Streetwear, kabátok, pulcsik",
        href: "/katalogus?kat=suppliers",
      },
    ],
    supplierListHref: "/katalogus?kat=suppliers",
  },
  {
    id: "jordan-4-military",
    name: "Jordan 4 Military Black",
    categoryId: "sneakers",
    categoryLabel: "Sneakerek",
    score: 89,
    signal: "Erős jel",
    soldCount: 9,
    activeCount: 11,
    medianSold: 78000,
    netResale: 62000,
    buyCeiling: 38000,
    soldExamples: [
      {
        id: "s1",
        title: "AJ4 Military Black 42",
        image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400&auto=format&fit=crop&q=80",
        price: 82000,
        marketplace: "Vinted",
      },
      {
        id: "s2",
        title: "AJ4 Military Black 43",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&auto=format&fit=crop&q=80",
        price: 75000,
        marketplace: "Instagram",
      },
    ],
    marketplaceExamples: [
      {
        id: "m1",
        title: "Jordan 4 Military – aktív hirdetés",
        marketplace: "Facebook Marketplace",
        image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400&auto=format&fit=crop&q=80",
        price: 72000,
      },
    ],
    vendors: [
      {
        id: "v1",
        name: "Cipők – Direct Supply List",
        categories: "Jordan, Dunk, Yeezy",
        href: "/katalogus?kat=suppliers",
      },
    ],
    supplierListHref: "/katalogus?kat=suppliers",
  },
  {
    id: "rolex-submariner",
    name: "Rolex Submariner Date",
    categoryId: "watches",
    categoryLabel: "Órák",
    score: 87,
    signal: "Közepes jel",
    soldCount: 3,
    activeCount: 4,
    medianSold: 3200000,
    netResale: 2560000,
    buyCeiling: 1480000,
    soldExamples: [
      {
        id: "s1",
        title: "Submariner Date 126610LN",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&auto=format&fit=crop&q=80",
        price: 3350000,
        marketplace: "Chrono24",
      },
    ],
    marketplaceExamples: [
      {
        id: "m1",
        title: "Rolex Sub – helyi eladó",
        marketplace: "Instagram",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&auto=format&fit=crop&q=80",
        price: 2980000,
      },
    ],
    vendors: [
      {
        id: "v1",
        name: "Órák – Direct Supply List",
        categories: "Luxury, sport, quartz",
        href: "/katalogus?kat=suppliers",
      },
    ],
    supplierListHref: "/katalogus?kat=suppliers",
  },
  {
    id: "lv-keepall",
    name: "Louis Vuitton Keepall 55",
    categoryId: "bags",
    categoryLabel: "Utazótáskák",
    score: 86,
    signal: "Közepes jel",
    recentMover: true,
    soldCount: 4,
    activeCount: 3,
    medianSold: 510000,
    netResale: 408000,
    buyCeiling: 245000,
    soldExamples: [
      {
        id: "s1",
        title: "LV Keepall Bandoulière 55",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop&q=80",
        price: 540000,
        marketplace: "Vinted",
      },
    ],
    marketplaceExamples: [
      {
        id: "m1",
        title: "LV Keepall 55 – Monogram",
        marketplace: "Jófogás",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop&q=80",
        price: 475000,
      },
    ],
    vendors: [
      {
        id: "v1",
        name: "Táskák – Direct Supply List",
        categories: "LV, Gucci, Chanel",
        href: "/katalogus?kat=suppliers",
      },
    ],
    supplierListHref: "/katalogus?kat=suppliers",
  },
  {
    id: "travis-olive",
    name: "Travis Scott Jordan 1 Low Olive",
    categoryId: "sneakers",
    categoryLabel: "Sneakerek",
    score: 85,
    signal: "Erős jel",
    soldCount: 7,
    activeCount: 9,
    medianSold: 95000,
    netResale: 76000,
    buyCeiling: 46000,
    soldExamples: [
      {
        id: "s1",
        title: "Travis Olive Low 41",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&auto=format&fit=crop&q=80",
        price: 98000,
        marketplace: "Vinted",
      },
    ],
    marketplaceExamples: [
      {
        id: "m1",
        title: "Travis Olive – aktív",
        marketplace: "Instagram",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&auto=format&fit=crop&q=80",
        price: 89000,
      },
    ],
    vendors: [
      {
        id: "v1",
        name: "Cipők – Direct Supply List",
        categories: "Travis, Jordan collabok",
        href: "/katalogus?kat=suppliers",
      },
    ],
    supplierListHref: "/katalogus?kat=suppliers",
  },
  {
    id: "dior-saddle",
    name: "Dior Saddle Bag",
    categoryId: "bags",
    categoryLabel: "Válltáskák",
    score: 83,
    signal: "Közepes jel",
    soldCount: 3,
    activeCount: 5,
    medianSold: 380000,
    netResale: 304000,
    buyCeiling: 178000,
    soldExamples: [
      {
        id: "s1",
        title: "Dior Saddle Oblique",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&auto=format&fit=crop&q=80",
        price: 395000,
        marketplace: "Vinted",
      },
    ],
    marketplaceExamples: [
      {
        id: "m1",
        title: "Dior Saddle – blue oblique",
        marketplace: "Facebook Marketplace",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&auto=format&fit=crop&q=80",
        price: 349000,
      },
    ],
    vendors: [
      {
        id: "v1",
        name: "Táskák – Direct Supply List",
        categories: "Designer táskák",
        href: "/katalogus?kat=suppliers",
      },
    ],
    supplierListHref: "/katalogus?kat=suppliers",
  },
  {
    id: "cartier-love",
    name: "Cartier Love Bracelet",
    categoryId: "accessories",
    categoryLabel: "Ékszerek",
    score: 82,
    signal: "Figyelendő",
    soldCount: 2,
    activeCount: 3,
    medianSold: 890000,
    netResale: 712000,
    buyCeiling: 420000,
    soldExamples: [
      {
        id: "s1",
        title: "Cartier Love – yellow gold",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&auto=format&fit=crop&q=80",
        price: 920000,
        marketplace: "Instagram",
      },
    ],
    marketplaceExamples: [
      {
        id: "m1",
        title: "Cartier Love Bracelet 17",
        marketplace: "Vinted",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&auto=format&fit=crop&q=80",
        price: 850000,
      },
    ],
    vendors: [
      {
        id: "v1",
        name: "Kiegészítők – Direct Supply List",
        categories: "Ékszerek, órák, beltéri",
        href: "/katalogus?kat=suppliers",
      },
    ],
    supplierListHref: "/katalogus?kat=suppliers",
  },
  {
    id: "ps5-slim",
    name: "PlayStation 5 Slim",
    categoryId: "electronics",
    categoryLabel: "Konzolok",
    score: 80,
    signal: "Erős jel",
    recentMover: true,
    soldCount: 15,
    activeCount: 10,
    medianSold: 165000,
    netResale: 132000,
    buyCeiling: 78000,
    soldExamples: [
      {
        id: "s1",
        title: "PS5 Slim + DualSense",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&auto=format&fit=crop&q=80",
        price: 172000,
        marketplace: "Jófogás",
      },
    ],
    marketplaceExamples: [
      {
        id: "m1",
        title: "PS5 Slim Disc – aktív",
        marketplace: "Facebook Marketplace",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&auto=format&fit=crop&q=80",
        price: 149000,
      },
    ],
    vendors: [
      {
        id: "v1",
        name: "Elektronikák – Direct Supply List",
        categories: "Konzolok, perifériák",
        href: "/katalogus?kat=suppliers",
      },
    ],
    supplierListHref: "/katalogus?kat=suppliers",
  },
];

export function formatHuf(value: number): string {
  return `${value.toLocaleString("hu-HU")} Ft`;
}

export function filterOpportunities(
  category: RadarCategoryId,
  ceiling: BuyCeilingFilter
): RadarOpportunity[] {
  const max = BUY_CEILING_FILTERS.find((f) => f.id === ceiling)?.max;
  return MARKET_RADAR_OPPORTUNITIES.filter((op) => {
    if (category !== "all" && op.categoryId !== category) return false;
    if (max != null && op.buyCeiling > max) return false;
    return true;
  }).sort((a, b) => b.score - a.score);
}
