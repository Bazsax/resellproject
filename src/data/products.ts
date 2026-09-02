export interface ProductAddon {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: "digital" | "suppliers" | "sneakers" | "streetwear" | "watches" | "bags" | "glasses" | "jewelry" | "electronics" | "other";
  subCategory?: string;
  price: number;
  originalPrice?: number;
  isDigital?: boolean;
  isFeatured?: boolean;
  badge?: string;
  rating: number;
  reviewCount: number;
  sku: string;
  images: string[];
  tags: string[];
  sizes?: (string | number)[];
  defaultSize?: string | number;
  inStock: boolean;
  gumroadUrl?: string;
  /** Landing page for digital products */
  href?: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  sourcingTime?: string;
  materials?: string;
}

export const RECOMMENDED_ADDONS: ProductAddon[] = [
  {
    id: "sneaker-shield",
    name: "Sneaker Shield (Gyűrődésgátló)",
    price: 1500,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200&auto=format&fit=crop&q=80",
    description: "Megvédi a cipő orrát a gyűrődéstől, hosszú távon újszerű állapotban tartja."
  },
  {
    id: "sneaker-spray",
    name: "Sneaker Vízlepergető Spray (250ml)",
    price: 2500,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=200&auto=format&fit=crop&q=80",
    description: "Nanotechnológiás víz- és folttaszító védőréteg minden sneakerhez."
  },
  {
    id: "digital-starter-pack",
    name: "Resell Starter Kisokos (Digitális)",
    price: 4990,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80",
    description: "Kezdő lépések a cipő és streetwear viszonteladáshoz, beszállítói alapok."
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "supreme-dunk-feher-n450390",
    slug: "supreme-dunk-feher-n450390",
    name: "SUPREME DUNK FEHÉR - N450390",
    brand: "Nike",
    category: "sneakers",
    subCategory: "Dunk",
    price: 48000,
    originalPrice: 65000,
    isFeatured: true,
    badge: "1 / 1 Prémium",
    rating: 4.9,
    reviewCount: 42,
    sku: "N450390",
    tags: ["Nike", "Dunk", "1/1"],
    sizes: [36, 37, 38, 39, 40, 41, 41.5, 42, 42.5, 43, 44, 44.5, 45],
    defaultSize: 37,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "A legmagasabb szintű 1/1 prémium kidolgozású Supreme x Nike Dunk Low kiadás. Eredeti anyaghasználat, tökéletes varrások és doboz.",
    fullDescription: "Prémium minőségű beszerzési szolgáltatásunk keretében garantáljuk a piacvezető minőséget. A cipő prémium természetes bőrből, precíziós hímzéssel, Supreme jelzéssel, eredeti talpszerkezettel és gyári csomagolással érkezik.",
    features: [
      "1/1 Anyagminőség és valódi bőr borítás",
      "Gyári doboz és pótcipőfűző készlet",
      "Minőségellenőrzés a feladás előtt (QC fotók kérésre)",
      "Gyors és diszkrét házhozszállítás garanciával"
    ],
    sourcingTime: "5 - 9 munkanap",
    materials: "100% Prémium Bőr, Gumitalp, Párnázott nyelv"
  },
  {
    id: "resell-masterclass-2026-guide",
    slug: "reselling-starterpack",
    name: "AZ ELSŐ MILLIÓ – RESELLING STARTERPACK",
    brand: "Direct Supply",
    category: "digital",
    subCategory: "Útmutató",
    price: 1000,
    originalPrice: 10000,
    isDigital: true,
    isFeatured: true,
    badge: "Bestseller",
    rating: 5.0,
    reviewCount: 128,
    sku: "DIGI-STARTER-2026",
    tags: ["Digitális Fájl", "Beszállítók", "Starterpack", "Azonnali Letöltés"],
    gumroadUrl: "https://gumroad.com",
    href: "/utmutato",
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "A teljes, lépésről-lépésre bemutatott digitális kézikönyv a cipő-, ruha- és kiegészítő viszonteladásról. Ellenőrzött közvetlen gyári beszállítói kontaktok, vámolási kisokos és 500k+ Ft/hó profit stratégia.",
    fullDescription: "Megtanítjuk, hogyan építs fel egy profitábilis resell vállalkozást a nulláról. Tartalmazza a 100%-ban megbízható 1/1 gyári beszállítók közvetlen WeChat és WhatsApp elérhetőségeit, az árrés-maximalizálás módszereit, automatizált Vinted & Instagram eladási technikákat és jogi/vámolási alapokat.",
    features: [
      "25+ Ellenőrzött prémium közvetlen gyári beszállító (Sneaker, Streetwear, Órák, Táskák)",
      "Vámolási és adózási kisokos Magyarországra (0 Ft felesleges vámköltség)",
      "Vinted, Instagram és Marketplaces hirdetéskezelési kézikönyv",
      "Automata rendelés- és ügyfélkezelési Excel/Notion sablonok",
      "Azonnali hozzáférés e-mailben a sikeres Stripe fizetés után",
      "Örökös frissítések a dokumentációhoz"
    ],
    sourcingTime: "Azonnali hozzáférés e-mailben"
  },
  {
    id: "reselling-masterclass-100m",
    slug: "reselling-masterclass",
    name: "100 FILLÉRBŐL 100 MILLIÓ – RESELLING MASTERCLASS",
    brand: "Direct Supply",
    category: "digital",
    subCategory: "Masterclass",
    price: 49990,
    originalPrice: 199990,
    isDigital: true,
    isFeatured: true,
    badge: "Teljes birodalom",
    rating: 5.0,
    reviewCount: 47,
    sku: "DIGI-MASTER-2026",
    tags: ["Masterclass", "Beszállítói listák", "Teljes csomag", "Digitális"],
    href: "/masterclass",
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "A legteljesebb Direct Supply csomag: összes beszállítói lista, útmutatók, források és a birodalom-építő masterclass egyben – 100 fillértől a 100 millióig.",
    fullDescription: "A Reselling Masterclass nem egy útmutató – hanem a teljes rendszer. Tartalmazza a kategóriánkénti beszállítói listákat, az összes guide-ot, a tool- és forráslistákat, valamint a lépésről lépésre masterclass anyagot, amivel skálázható resell birodalmat építesz.",
    features: [
      "Összes beszállítói lista: ruhák, cipők, táskák, órák, kiegészítők, elektronikák",
      "Teljes útmutató-gyűjtemény + források és tool listák",
      "Birodalom-építő masterclass: skálázás, csapat, automatizálás",
      "Azonnali hozzáférés e-mailben a sikeres Stripe fizetés után",
      "Örökös frissítések az összes modulhoz"
    ],
    sourcingTime: "Azonnali hozzáférés e-mailben"
  },
  {
    id: "jordan-4-retro-military-black",
    slug: "jordan-4-retro-military-black",
    name: "AIR JORDAN 4 RETRO 'MILITARY BLACK'",
    brand: "Jordan",
    category: "sneakers",
    subCategory: "Jordan 4",
    price: 52000,
    originalPrice: 72000,
    isFeatured: true,
    badge: "1 / 1 Prémium",
    rating: 4.9,
    reviewCount: 36,
    sku: "DH6927-111",
    tags: ["Jordan", "Jordan 4", "1/1"],
    sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 45, 46],
    defaultSize: 42,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "A valaha volt egyik legnépszerűbb Jordan 4 színállás. Sima fehér prémium bőr felsőrész, szürke nubuk orr-rész és matt fekete részletek.",
    fullDescription: "Kifogástalan kivitelezésű 1/1 modell. Eredeti súlyarány, tökéletesen kattanó sarokpánt, Jumpman dombornyomás és kényelmes légpárnás talp.",
    features: [
      "Valódi prémium sima bőr és nubuk panelek",
      "Eredeti formavilág és pontos hálós oldalelemek",
      "Gyári doboz és címkék",
      "Méretgarancia: 14 napon belül díjmentes méretcsere"
    ],
    sourcingTime: "6 - 10 munkanap",
    materials: "Természetes bőr, Szintetikus háló, Air-Sole talp"
  },
  {
    id: "travis-scott-jordan-1-low-olive",
    slug: "travis-scott-jordan-1-low-olive",
    name: "TRAVIS SCOTT X AIR JORDAN 1 LOW 'OLIVE'",
    brand: "Jordan",
    category: "sneakers",
    subCategory: "Jordan 1",
    price: 54000,
    originalPrice: 78000,
    isFeatured: true,
    badge: "1 / 1 Prémium",
    rating: 5.0,
    reviewCount: 54,
    sku: "DZ4137-106",
    tags: ["Jordan", "Travis Scott", "1/1"],
    sizes: [36, 37, 38, 39, 40, 41, 42, 42.5, 43, 44, 45],
    defaultSize: 41,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Az ikonikus fordított olíva pipa, kaktusz Jack hímzés és prémium velúr-bőr kombináció.",
    fullDescription: "Az egyik legkeresettebb Travis Scott együttműködés. 3 pár extra cipőfűzővel (olíva, fekete, piros), gyári speciális dobozzal és valódi velúr anyaggal.",
    features: [
      "Élő velúr textúra és prémium fehér bőr",
      "Cactus Jack hímzések és rejtett zseb részlet",
      "3 pár extra színes fűző",
      "Eredeti csomagolás és papírok"
    ],
    sourcingTime: "6 - 10 munkanap"
  },
  {
    id: "trapstar-decrypted-puffer-dzseki",
    slug: "trapstar-decrypted-puffer-dzseki",
    name: "TRAPSTAR HYPERDRIVE IRONGATE PUFFER DZSEKI",
    brand: "Trapstar",
    category: "streetwear",
    subCategory: "Kabátok",
    price: 44000,
    originalPrice: 62000,
    isFeatured: true,
    badge: "Top Streetwear",
    rating: 4.8,
    reviewCount: 29,
    sku: "TS-PUFF-BLK",
    tags: ["Trapstar", "Streetwear", "Puffer"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Vízlepergető fényes fekete felület, vastag pehelytoll töltet, lepatentolható kapucni és hímzett Trapstar Irongate logó.",
    fullDescription: "London utcai divatjának megtestesítője. Kiemelkedő hőtartás a hideg téli napokon, masszív fém cipzárak, belső zsebek és eredeti márkajelzések.",
    features: [
      "Vízálló és szélálló poliészter külső réteg",
      "Valódi vastag prémium bélés",
      "Levehető kapucni arcvédő résszel",
      "Irongate T logó hímzés a háton"
    ],
    sourcingTime: "5 - 8 munkanap"
  },
  {
    id: "sp5der-555555-angel-hoodie",
    slug: "sp5der-555555-angel-hoodie",
    name: "SP5DER WORLDWIDE '555555' ANGEL HOODIE",
    brand: "Sp5der",
    category: "streetwear",
    subCategory: "Pulóverek",
    price: 28000,
    originalPrice: 38000,
    isFeatured: false,
    badge: "Népszerű",
    rating: 4.9,
    reviewCount: 19,
    sku: "SP5-ANG-PNK",
    tags: ["Sp5der", "Young Thug", "Pókháló"],
    sizes: ["S", "M", "L", "XL"],
    defaultSize: "L",
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Puff-print domború feliratok, vastag 450 GSM pamut anyag és ragyogó kristály/csillag mintázat.",
    fullDescription: "A Young Thug által alapított márka legikonikusabb darabja. A puff-print feliratok mosásállóak, a pulóver belső része rendkívül puha polár.",
    features: [
      "450 GSM nehéz francia pamut anyag",
      "3D domború puff-nyomatok",
      "Kényelmes, laza streetwear szabás",
      "Gyári címkék és csomagolás"
    ],
    sourcingTime: "5 - 8 munkanap"
  },
  {
    id: "rolex-submariner-date-black-clean",
    slug: "rolex-submariner-date-black-clean",
    name: "SUBMARINER DATE 41MM 'CLEAN FACTORY' EDITION",
    brand: "Rolex Style",
    category: "watches",
    subCategory: "Búvárórák",
    price: 89000,
    originalPrice: 120000,
    isFeatured: true,
    badge: "Super Clone",
    rating: 5.0,
    reviewCount: 31,
    sku: "RLX-SUB-41C",
    tags: ["Óra", "Automata", "Kerámia", "Super Clone"],
    sizes: ["41mm (Állítható szíj)"],
    defaultSize: "41mm (Állítható szíj)",
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "904L rozsdamentes orvosi acél, valódi karcálló zafírüveg küklopsz nagyítóval, kerámia lünetta és megbízható 3235 automata szerkezet.",
    fullDescription: "A piacvezető Clean Factory által gyártott 1/1 szuperklón. Vízállósági teszttel ellátott, járástartaléka ~48 óra, zöld SuperLuminova éjszakai lumineszcenciával és Glidelock finomállítós csattal.",
    features: [
      "904L prémium rozsdamentes acéltok és tömör szíj",
      "Valódi egyirányba forgatható kerámia lünetta",
      "Karcálló zafírkristály üveg tükröződésmentes réteggel",
      "Megbízható 28.800 féllengéses automata óraszerkezet",
      "Díszdoboz és garanciakártya mellékelve"
    ],
    sourcingTime: "7 - 12 munkanap"
  },
  {
    id: "goyard-saint-louis-pm-black-tan",
    slug: "goyard-saint-louis-pm-black-tan",
    name: "GOYARD SAINT LOUIS PM TOTE TÁSKA & PÉNZTÁRCA",
    brand: "Goyard Style",
    category: "bags",
    subCategory: "Táskák",
    price: 39000,
    originalPrice: 55000,
    isFeatured: true,
    badge: "1 / 1 Luxus",
    rating: 4.9,
    reviewCount: 22,
    sku: "GYD-STL-PM",
    tags: ["Táska", "Goyardine", "Bőr", "1/1"],
    sizes: ["PM (Közepes)", "GM (Nagy)"],
    defaultSize: "PM (Közepes)",
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Goyardine kézzel nyomott chevron mintás vászon, valódi borjúbőr fülek és kivehető belső pénztárca.",
    fullDescription: "Rendkívül strapabíró, könnyű és elegáns mindennapi táska. Az eredetivel megegyező súly, sorszámozás, bőr pántok és porzsák.",
    features: [
      "Prémium Goyardine bevonatos vízálló vászon",
      "Valódi borjúbőr fogantyúk és szegélyek",
      "Kivehető cipzáras kistáska a csomagban",
      "Sárga porzsák és márkatasak"
    ],
    sourcingTime: "6 - 9 munkanap"
  }
];

export const CATEGORIES = [
  { id: "all", name: "Összes", icon: "Sparkles" },
  { id: "digital", name: "Útmutatók", icon: "FileText", isHighlight: true },
  { id: "suppliers", name: "Beszállítók", icon: "Store" },
];

/** Products shown in the digital catalog (physical items kept for sourcing examples). */
export const CATALOG_PRODUCTS = PRODUCTS.filter(
  (p) => p.isDigital || p.category === "digital" || p.category === "suppliers"
);
