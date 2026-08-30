export interface Review {
  id: string;
  author: string;
  avatar?: string;
  date: string;
  rating: number;
  productName: string;
  verifiedPurchase: boolean;
  content: string;
  source: "google" | "direct" | "trustpilot";
}

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Nagy Gábor",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    date: "2026. április 15.",
    rating: 5,
    productName: "Supreme Dunk Fehér + Resell Útmutató",
    verifiedPurchase: true,
    content: "Több replikám is van sok helyről, de az innen vásárolt cipőim gyakorlatilag megkülönböztethetetlenek az eredetitől! A resell útmutató pedig már az első héten visszahozta az árát, a beszállítók korrektek.",
    source: "google"
  },
  {
    id: "rev-2",
    author: "Kovács Bence",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
    date: "2026. május 2.",
    rating: 5,
    productName: "Air Jordan 4 Military Black",
    verifiedPurchase: true,
    content: "A kommunikáció 10/10, Instán és e-mailben is azonnal válaszoltak. A cipő 7 nap alatt megérkezett dupla dobozban. A bőr illata és anyaga brutál minőség!",
    source: "google"
  },
  {
    id: "rev-3",
    author: "Tóth Márk",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=80",
    date: "2026. május 20.",
    rating: 5,
    productName: "Trapstar Hyperdrive Puffer Dzseki",
    verifiedPurchase: true,
    content: "Féltem a mérettől, de a mérettáblázat és az ügyfélszolgálat segített M-esre váltani. Pontosan úgy áll mint a gyári 200 ezres darab. Nagyon ajánlom mindenkinek!",
    source: "google"
  },
  {
    id: "rev-4",
    author: "Horváth Dániel",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80",
    date: "2026. június 8.",
    rating: 5,
    productName: "Submariner Clean Factory Óra",
    verifiedPurchase: true,
    content: "Az óra egyszerűen döbbenetes. A zafír üveg és a lünetta kattanása tűpontos. Barátaim azt hitték, hogy banki hitelre vettem az eredetit.",
    source: "google"
  }
];
