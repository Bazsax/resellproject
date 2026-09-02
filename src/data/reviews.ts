export type ReviewCategory = "digital" | "sourcing";

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  date: string;
  rating: number;
  productName: string;
  category: ReviewCategory;
  content: string;
}

export const REVIEWS: Review[] = [
  {
    id: "rev-d1",
    author: "Szabó Ádám",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    date: "2026. április 10.",
    rating: 5,
    productName: "Reselling Starterpack",
    category: "digital",
    content: "Az első héten visszahozta az árát. A beszállítói lista és a Vinted stratégia konkrét, nem elmélet – pontosan tudtam, mit csináljak.",
  },
  {
    id: "rev-d2",
    author: "Nagy Gábor",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    date: "2026. április 15.",
    rating: 5,
    productName: "Reselling Starterpack",
    category: "digital",
    content: "Stripe fizetés után percek alatt megkaptam az e-mailt. A dokumentáció friss, érthető, és a kontaktok tényleg működnek – nem kamu lista.",
  },
  {
    id: "rev-s1",
    author: "Kovács Bence",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
    date: "2026. május 2.",
    rating: 5,
    productName: "Air Jordan 4 Military Black",
    category: "sourcing",
    content: "A kommunikáció 10/10, Instán és e-mailben is azonnal válaszoltak. A cipő 7 nap alatt megérkezett dupla dobozban. A bőr illata és anyaga brutál minőség!",
  },
  {
    id: "rev-s2",
    author: "Tóth Márk",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=80",
    date: "2026. május 20.",
    rating: 5,
    productName: "Trapstar Hyperdrive Puffer Dzseki",
    category: "sourcing",
    content: "Féltem a mérettől, de a mérettáblázat és az ügyfélszolgálat segített M-esre váltani. Pontosan úgy áll mint a gyári 200 ezres darab. Nagyon ajánlom mindenkinek!",
  },
  {
    id: "rev-s3",
    author: "Horváth Dániel",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80",
    date: "2026. június 8.",
    rating: 5,
    productName: "Submariner Clean Factory Óra",
    category: "sourcing",
    content: "Az óra egyszerűen döbbenetes. A zafír üveg és a lünetta kattanása tűpontos. Barátaim azt hitték, hogy banki hitelre vettem az eredetit.",
  },
  {
    id: "rev-d3",
    author: "Varga Eszter",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
    date: "2026. június 22.",
    rating: 5,
    productName: "Reselling Starterpack",
    category: "digital",
    content: "Kezdőként féltem a vámolástól – a kisokos rész pontosan leírta, mit kell csinálni. Már a második héten volt eladásom.",
  },
];
