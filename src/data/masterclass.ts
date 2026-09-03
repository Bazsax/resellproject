/** Limited cohort size — update TAKEN as seats fill. */
export const MASTERCLASS_SLOTS = {
  taken: 47,
  total: 50,
} as const;

export const MASTERCLASS_STEPS = [
  {
    number: "01",
    title: "Megépítjük az alapot",
    summary:
      "Segítünk a nulladik lépésben is. Végig vezetünk az alapokon, egészen a platform regisztrációktól, az első eladásokig.",
  },
  {
    number: "02",
    title: "Minden lehetőség a kezedben",
    summary:
      "Nem egy 1-1 nyerő terméket kapsz, hanem a teljes Direct Supply hálózatot. Mindenféle kategóriában, mindenféle termékből.",
  },
  {
    number: "03",
    title: "Megtanulod a skálázást",
    summary:
      "Kitűzöl egy havi célt, majd segítünk, hogy mennyi folyamatos termék volumen kell, egy stabil és skálázható eladási cél érdekében.",
  },
  {
    number: "04",
    title: "Brand erősítés és visszatérő cashflow",
    summary:
      "Egyszeri eladás helyett visszatérő vevők, hírnév, stabil workflow. Innen már nem „szerencsés hónap” van – hanem tervezhető, növekvő bevétel.",
  },
  {
    number: "05",
    title: "100 milliós pálya",
    summary:
      "A határ nincs megszabva. A Masterclass minden tudást és eszközt megad neked, hogy az első fillérektől a visszatérő milliókig építs.",
  },
];

export const MASTERCLASS_FAQ = [
  {
    q: "Mi a különbség a Starterpack és a Masterclass között?",
    a: "A Starterpack az induláshoz kell: módszer, alapok, első eladások. A Masterclass a teljes csomag – összes beszállítói lista, összes útmutató és forrás, plusz a birodalom-építő masterclass anyag. Ha hosszú távon akarsz nagyot, ez a választás.",
  },
  {
    q: "Miért 199 990 Ft az eredeti ár?",
    a: "Azért, mert a Masterclassban benne van mindaz, amit külön-külön is értékesítünk: kategóriánkénti beszállítói listák, útmutatók, forrás- és tool listák. Egyenként összeadva ez a csomagérték – most egyben, kedvezménnyel kapod.",
  },
  {
    q: "Kezdőként is érdemes a Masterclass?",
    a: "Igen – ha komolyan gondolod. A Starterpack gyorsabb, olcsóbb belépő. A Masterclass akkor a legjobb döntés, ha nem csak kipróbálni, hanem felépíteni akarod a rendszert a nulláról a skálázásig.",
  },
  {
    q: "Azonnal megkapom a hozzáférést?",
    a: "Igen. Sikeres Stripe fizetés után e-mailben érkezik az azonnali hozzáférés – és örökös frissítést kapsz az összes modulhoz.",
  },
  {
    q: "Frissülnek a beszállítói listák és az anyagok?",
    a: "Igen. A Masterclass örökös frissítést tartalmaz: új beszállítók, friss tippek és bővülő modulok – nem kell újra megvenned.",
  },
  {
    q: "Miért limitált a helyek száma?",
    a: "A Masterclass kohorsz limitált (50 fő), hogy a minőség és a támogatás tartható maradjon. Ha betelik, új helyek csak később nyílnak – ezért érdemes most lépni, amíg van szabad slot.",
  },
];

export const MASTERCLASS_BUNDLE_ITEMS = [
  {
    group: "Beszállítói listák",
    items: [
      { name: "Ruhák – Direct Supply List", value: "29 990 Ft" },
      { name: "Cipők – Direct Supply List", value: "29 990 Ft" },
      { name: "Táskák – Direct Supply List", value: "19 990 Ft" },
      { name: "Órák – Direct Supply List", value: "24 990 Ft" },
      { name: "Kiegészítők – Direct Supply List", value: "14 990 Ft" },
      { name: "Elektronikák – Direct Supply List", value: "19 990 Ft" },
      { name: "Hidden Gems – Direct Supply List", value: "44 990 Ft" },
    ],
  },
  {
    group: "Útmutatók",
    items: [
      { name: "Birodalom-építés Masterclass modul", value: "199 990 Ft" },
      { name: "Az Első Millió – Reselling Starterpack", value: "9 990 Ft" },
      { name: "Platform trükkök – Reselling Tips & Tricks", value: "19 990 Ft" },
    ],
  },
  {
    group: "Eszközök & források",
    categories: [
      {
        name: "In-house eszközök",
        items: [
          { name: "Piac radar", value: "9 990 Ft" },
          { name: "Volumen kalkulátor", value: "9 990 Ft" },
        ],
      },
      {
        name: "Külső eszközök",
        items: [
          { name: "QC finders & tools", value: "4 990 Ft" },
          { name: "Analízis appok", value: "4 990 Ft" },
        ],
      },
    ],
  },
];
