export type Localized = { nl: string; en: string };

export type ServiceItem = {
  name: Localized;
  duration?: string;
  price: number;
  description?: Localized;
  note?: Localized;
};

export type ServiceCategory = {
  id: string;
  name: Localized;
  items: ServiceItem[];
};

const facialAnalysisDescription: Localized = {
  nl: "Tijdens deze behandeling beginnen we altijd met een huidanalyse. De huid wordt gescand en op basis daarvan bekijken we het huidtype en eventuele huidproblemen. Denk hierbij aan pigmentvlekken, extreme droogte, een zeer vette huid of huidveroudering (anti-aging). Aan de hand van deze resultaten stemmen we de behandeling volledig af op wat jouw huid nodig heeft, zodat je het beste en meest effectieve resultaat krijgt.",
  en: "During this treatment we always begin with a skin analysis. The skin is scanned and based on that we assess skin type and any skin concerns. These may include pigmentation, extreme dryness, very oily skin or skin ageing (anti-aging). Based on these results we fully tailor the treatment to what your skin needs, so you achieve the best and most effective result.",
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "facials",
    name: { nl: "Facials", en: "Facials" },
    items: [
      { name: { nl: "Intake Facials – Acne", en: "Intake Facials – Acne" }, duration: "30 min", price: 0 },
      {
        name: { nl: "Gezichtsbehandeling – Facial Relax", en: "Facial Relax" },
        duration: "50 min",
        price: 85,
        description: facialAnalysisDescription,
      },
      {
        name: { nl: "Gezichtsbehandeling – Facial Relax Luxe", en: "Facial Relax Luxe" },
        duration: "1 uur 10 min",
        price: 95,
        description: facialAnalysisDescription,
      },
      {
        name: { nl: "Gezichtsbehandeling – Facial Relax Pro", en: "Facial Relax Pro" },
        duration: "1 uur 30 min",
        price: 110,
        description: facialAnalysisDescription,
      },
      {
        name: { nl: "Gezichtsbehandeling – Facial Relax Young", en: "Facial Relax Young" },
        duration: "45 min",
        price: 65,
        description: {
          nl: "Deze behandeling is speciaal bedoeld voor jongeren tot en met 16 jaar. Tijdens de puberteit kan de huid extra verzorging nodig hebben. Daarom bestaat deze behandeling uit een eenvoudige en basic facial, afgestemd op de jonge huid, om de huid op een milde en veilige manier te ondersteunen.",
          en: "This treatment is specially designed for young people up to and including 16 years old. During puberty the skin may need extra care. That is why this treatment consists of a simple, basic facial tailored to young skin, to support the skin in a mild and safe way.",
        },
      },
      { name: { nl: "Aquaglo – Hydrafacial Basic", en: "Aquaglo – Hydrafacial Basic" }, duration: "1 uur", price: 115 },
      { name: { nl: "Aquaglo – Hydrafacial Luxe", en: "Aquaglo – Hydrafacial Luxe" }, duration: "1 uur 30 min", price: 135 },
      { name: { nl: "Acne Behandeling", en: "Acne Treatment" }, duration: "1 uur", price: 80 },
      { name: { nl: "Acne Behandeling – Plus", en: "Acne Treatment – Plus" }, duration: "1 uur 15 min", price: 100 },
      { name: { nl: "Acne Behandeling – Full", en: "Acne Treatment – Full" }, duration: "1 uur 30 min", price: 125 },
    ],
  },
  {
    id: "peeling",
    name: { nl: "Peeling", en: "Peeling" },
    items: [
      { name: { nl: "Intake Peeling Behandeling", en: "Peeling Intake" }, duration: "30 min", price: 0 },
      { name: { nl: "Meso Peelings Gezicht (1x kuur)", en: "Meso Peelings Face (single)" }, duration: "1 uur", price: 125 },
      {
        name: { nl: "Mesopeel – Eyecon Peeling (oogpeeling)", en: "Mesopeel – Eyecon Peeling" },
        duration: "30 min",
        price: 75,
        description: {
          nl: "Special peeling rondom de ogen. Helpt bij fijne lijntjes en donkere tinten.",
          en: "Special peel around the eyes. Helps with fine lines and dark tones.",
        },
      },
      { name: { nl: "Mesopeeling kuur (5 behandelingen)", en: "Mesopeeling course (5 treatments)" }, duration: "1 uur", price: 550 },
      {
        name: { nl: "Glow Peel Jalupro", en: "Glow Peel Jalupro" },
        duration: "1 uur 30 min",
        price: 250,
        description: {
          nl: "Glow Peel van het merk Jalupro is een zeer effectieve behandeling die, zonder injecties, een vergelijkbaar effect kan geven als skinboosters die normaal onder de huid worden geïnjecteerd. Deze behandeling is ideaal voor mensen die bang zijn voor injecties, maar wel behoefte hebben aan meer helderheid, glow en een frisse, gezonde uitstraling van de huid. Met de Glow Peel krijgt de huid een mooie boost en wordt de huid zichtbaar versterkt en opgefrist.",
          en: "Glow Peel by Jalupro is a highly effective treatment that, without injections, can deliver a comparable effect to skin boosters normally injected under the skin. This treatment is ideal for people who are afraid of injections but still want more brightness, glow and a fresh, healthy complexion. With the Glow Peel the skin receives a beautiful boost and is visibly strengthened and refreshed.",
        },
      },
      { name: { nl: "Meso Peeling Gezicht kuur 5x", en: "Meso Peeling Face course 5x" }, duration: "1 uur 30 min", price: 550 },
      {
        name: { nl: "BioRePeelCl3 FND Peeling", en: "BioRePeelCl3 FND Peeling" },
        duration: "1 uur 15 min",
        price: 185,
        description: {
          nl: "Met BioRePeelCl3 FND krijgt u een verkwikkende scrub en tegelijkertijd ondersteuning van de huid met een bio-stimulerend effect. BioRePeelCl3 FND is speciaal ontwikkeld voor de behandeling van gezicht, hals en decolleté en is ideaal voor wie een innovatieve exfoliatie wil die de huid niet belast, maar wel revitaliseert. Het verwijdert efficiënt dode huidcellen en laat uw teint fris en jeugdig ogen. Daarnaast helpt het innovatieve, revitaliserende formule van BioRePeelCl3 FND bij het bestrijden van acne en anti-aging.",
          en: "With BioRePeelCl3 FND you get an invigorating scrub and at the same time support the skin with a bio-stimulating effect. Specially designed for the treatment of the face, neck and décolleté, BioRePeelCl3 FND is ideal for those who want an innovative exfoliation that does not weigh down the skin while revitalizing it. It efficiently removes dead skin cells and leaves your complexion looking fresh and youthful. In addition, BioRePeelCl3 FND's innovative revitalizing formula helps fight acne and anti-aging.",
        },
      },
      { name: { nl: "Extra oogpeeling bij gezichtsbehandeling", en: "Extra eye peel add-on" }, duration: "10 min", price: 25 },
      { name: { nl: "Extra gezichtspeeling bij behandeling", en: "Extra face peel add-on" }, duration: "15 min", price: 35 },
      { name: { nl: "Extra Microneedling bij peeling", en: "Extra microneedling with peel" }, duration: "30 min", price: 60 },
      { name: { nl: "Mesoéclat – Anti Aging", en: "Mesoéclat – Anti Aging" }, duration: "1 uur 15 min", price: 135 },
    ],
  },
  {
    id: "huidanalyse",
    name: { nl: "Huidanalyse", en: "Skin Analysis" },
    items: [
      {
        name: { nl: "Eve-M Huidanalyse", en: "Eve-M Skin Analysis" },
        duration: "30 min",
        price: 45,
        note: {
          nl: "Bij aanschaf van 3 Producten of een behandeling vervalt de kosten van de scan.",
          en: "When purchasing 3 products or a treatment, the cost of the scan is waived.",
        },
      },
      { name: { nl: "Eve-M Huidanalyse + behandeling op advies", en: "Eve-M Analysis + advised treatment" }, duration: "1 uur", price: 85 },
    ],
  },
  {
    id: "microneedling",
    name: { nl: "Microneedling", en: "Microneedling" },
    items: [
      { name: { nl: "Intake Microneedling", en: "Microneedling Intake" }, duration: "30 min", price: 0 },
      { name: { nl: "Microneedling M-Pen Gelaat", en: "Microneedling M-Pen Face" }, duration: "1 uur", price: 120 },
      { name: { nl: "Microneedling M-Pen Gelaat & Hals", en: "Microneedling M-Pen Face & Neck" }, duration: "1 uur 30 min", price: 140 },
      { name: { nl: "Microneedling M-Pen Décolleté", en: "Microneedling M-Pen Décolleté" }, duration: "1 uur", price: 120 },
      { name: { nl: "Mesoéclat – Anti Aging Microneedling", en: "Mesoéclat – Anti Aging Microneedling" }, duration: "1 uur 30 min", price: 185 },
      {
        name: { nl: "AO Anti-Oxidant + Microneedling", en: "AO Anti-Oxidant + Microneedling" },
        duration: "1 uur",
        price: 185,
        description: {
          nl: "ARES® AO ANTI-OXIDANT | VAN DE OPNICHTERS VAN BIOREPEELCL3. ARES® AO Anti-Oxidant van CMed Aesthetics wordt gebruikt bij photo-aging en chronische huidveroudering zonder uitstraling, en herstelt de natuurlijke balans van de huid. De antioxidant formule is een mix van krachtige actieve ingrediënten die vrije radicalen neutraliseren, ontsteking verminderen en de oppervlakkige circulatie stimuleren. CURCUMINE verbetert collageenafzetting en verhoogt de dichtheid van fibroblasten en bloedvaten. FERULIC ACID remt de enzymen die katalyseren.",
          en: "ARES® AO ANTI-OXIDANT | FROM THE FOUNDERS OF BIOREPEELCL3. ARES® AO Anti-Oxidant by CMed Aesthetics is used for photoaging and chronic skin aging that lacks radiance, restoring the skin's natural balance. The antioxidant formulation is a blend of powerful active ingredients that scavenge free radicals, reduce inflammation and stimulate superficial circulation. CURCUMIN improves collagen deposition and increases fibroblast and vascular density. FERULIC ACID inhibits the enzymes that catalyze.",
        },
      },
      { name: { nl: "Zalm DNA behandeling", en: "Salmon DNA Treatment" }, duration: "1 uur", price: 150 },
    ],
  },
  {
    id: "skin-boosters",
    name: { nl: "Skin Boosters – Injecties", en: "Skin Boosters – Injectables" },
    items: [
      {
        name: { nl: "Profhilo", en: "Profhilo" },
        duration: "15 min",
        price: 300,
        description: {
          nl: "Profhilo H+L revitaliseert vermoeide en verslapte huid en biedt intensieve hydratatie. Het hyaluronzuur blijft ongeveer vier weken in het weefsel en kan uw huid van daaruit enorm en langdurig vocht geven. Het resultaat is een gladde, soepele huid. Door de geavanceerde ontwikkeling van Profhilo H+L zijn hoogmoleculair hyaluronzuur en laagmoleculair hyaluronzuur gecombineerd tot een hybride complex. Het resultaat is een uniek, sterk gezuiverd hyaluronzuur met een incred",
          en: "Profhilo H+L revives tired and sagging skin and provides intensive moisture. The hyaluronic acid remains in the tissue for about four weeks and can provide your skin with moisture enormously and in the long term from there. The result is smooth, supple skin. Through the advanced development of Profhilo H+L, high molecular weight hyaluronic acid and low molecular weight hyaluronic acid have been combined into a hybrid complex. The result is a unique, highly purified hyaluronic acid with an incred",
        },
      },
      {
        name: { nl: "Jalupro", en: "Jalupro" },
        duration: "15 min",
        price: 300,
        description: {
          nl: "Super Hydro V-Lift by Jalupro bevat 80 mg Hybrid HA (hyaluronzuur met twee verschillende molecuulgroottes). Deze structuur heeft een significant lifting effect en hydrateert de huid tegelijkertijd. Met zijn rijke combinatie van aminozuren ondersteunt het de synthese van collageen en elastine in de structuren van het gezicht.",
          en: "Super Hydro V-Lift by Jalupro contains 80 mg of Hybrid HA (hyaluronic acid with two different molecule sizes). This structure has a significant lifting effect and moisturizes the skin at the same time. With its rich combination of amino acids, it supports and strengthens the synthesis of collagen and elastin in the structures of the face.",
        },
      },
      { name: { nl: "Jalupro – Young Eye", en: "Jalupro – Young Eye" }, duration: "30 min", price: 250 },
      {
        name: { nl: "Lumi Eyes", en: "Lumi Eyes" },
        duration: "30 min",
        price: 200,
        description: {
          nl: "Lumi Eyes is een innovatieve verzorgingsoplossing voor het ooggebied, met een unieke formule op basis van polynucleotiden en deoxyribonucleic acid (DNA). Deze speciale ingrediënten richten zich specifiek op donkere kringen, fijne lijntjes en een vermoeide teint. Lumi Eyes biedt intense hydratatie aan de huid en versterkt tegelijkertijd de natuurlijke barrière. Na slechts één toepassing oogt de huid gladder en steviger, waardoor het ooggebied een frisse en jeugdigere uitstraling krijgt.",
          en: "Lumi Eyes is an innovative care solution for the eye area, featuring a unique formulation with polynucleotides and deoxyribonucleic acid (DNA). These special ingredients specifically target dark circles, fine lines, and a tired complexion. Lumi Eyes provides intense hydration to the skin while strengthening its natural barrier. After just one application, the skin appears smoother and firmer, giving the eye area a fresh and more youthful appearance.",
        },
      },
      {
        name: { nl: "HydroMax – Stylage", en: "HydroMax – Stylage" },
        duration: "30 min",
        price: 250,
        description: {
          nl: "STYLAGE® Hydro Max is een innovatieve injecteerbare hyaluronzuurgel speciaal ontwikkeld om de huidkwaliteit te verbeteren. Dankzij het unieke Skin³ Complex levert het directe en langdurige resultaten met minimale downtime. Het complex combineert cross-linked en vrij hyaluronzuur met een sorbitol-gebaseerde buffer om de huid optimaal te hydrateren, de elasticiteit te verbeteren en natuurlijke regeneratie te ondersteunen. Door de productie van collageen en elastine te stimuleren, bevordert STYLAGE® Hydro Max celvernieuwing van binnenuit.",
          en: "STYLAGE® Hydro Max is an innovative injectable hyaluronic acid gel specifically designed to improve skin quality. Thanks to its unique Skin³ Complex, it delivers immediate and long-lasting results with minimal downtime. The complex combines cross-linked and free hyaluronic acid with a sorbitol-based buffer to optimally moisturize the skin, enhance its elasticity, and support natural regeneration. By stimulating collagen and elastin production, STYLAGE® Hydro Max promotes cell renewal from the inside.",
        },
      },
    ],
  },
  {
    id: "pmu",
    name: { nl: "PMU", en: "PMU" },
    items: [
      { name: { nl: "Powderbrows", en: "Powder Brows" }, duration: "2 uur 30 min", price: 400 },
      { name: { nl: "Nabehandeling", en: "Aftercare Session" }, duration: "2 uur", price: 50 },
      { name: { nl: "Extra bijwerken (binnen 3 maanden)", en: "Touch-up (within 3 months)" }, duration: "1 uur 30 min", price: 55 },
      { name: { nl: "Touch-up (binnen 12 maanden)", en: "Touch-up (within 12 months)" }, duration: "2 uur 30 min", price: 150 },
      { name: { nl: "Intake PMU", en: "PMU Intake" }, duration: "30 min", price: 0 },
      { name: { nl: "Touch-up (binnen 24 maanden)", en: "Touch-up (within 24 months)" }, duration: "2 uur 30 min", price: 250 },
      { name: { nl: "Microblading & Shading", en: "Microblading & Shading" }, duration: "2 uur 30 min", price: 420 },
      { name: { nl: "Brows Colorado Correction incl. touch-up", en: "Brows Colorado Correction incl. touch-up" }, duration: "2 uur", price: 280 },
      { name: { nl: "Lipblush", en: "Lip Blush" }, duration: "3 uur", price: 420 },
      { name: { nl: "Brows / Lip / Eyeliner tattoo removal", en: "Brows / Lip / Eyeliner tattoo removal" }, duration: "1 uur 30 min", price: 95 },
    ],
  },
  {
    id: "brows-lashes",
    name: { nl: "Brows / Lashes", en: "Brows / Lashes" },
    items: [
      { name: { nl: "Browlift & Lashlift zonder verven", en: "Brow Lift & Lash Lift without tint" }, duration: "45 min", price: 96 },
      { name: { nl: "Browlift & Lashlift met verven", en: "Brow Lift & Lash Lift with tint" }, duration: "1 uur", price: 120 },
      { name: { nl: "Brows shaping", en: "Brows Shaping" }, duration: "30 min", price: 25 },
      { name: { nl: "Brows shaping met verven", en: "Brows Shaping with tint" }, duration: "1 uur", price: 48 },
      { name: { nl: "Lash lift", en: "Lash Lift" }, duration: "45 min", price: 48 },
      { name: { nl: "Lashlift + verven", en: "Lash Lift + tint" }, duration: "1 uur", price: 68 },
      { name: { nl: "Brows lifting", en: "Brows Lifting" }, duration: "50 min", price: 48 },
      { name: { nl: "Brows lifting + verven", en: "Brows Lifting + tint" }, duration: "1 uur", price: 65 },
    ],
  },
  {
    id: "botox",
    name: { nl: "Botox", en: "Botox" },
    items: [
      { name: { nl: "Botox 1 zone Dysport", en: "Botox 1 zone Dysport" }, duration: "15 min", price: 150 },
      { name: { nl: "Botox 2 zones Dysport", en: "Botox 2 zones Dysport" }, duration: "20 min", price: 300 },
      { name: { nl: "Botox 3 zones Dysport", en: "Botox 3 zones Dysport" }, duration: "30 min", price: 440 },
      { name: { nl: "Botox Bunny lines / Gummy smile / Sinaasappelkin", en: "Botox Bunny lines / Gummy smile / Orange chin" }, duration: "30 min", price: 150 },
      { name: { nl: "Botox Knarstanden / Migraine / Overmatig zweten", en: "Botox Grinding / Migraine / Excessive sweating" }, duration: "30 min", price: 300 },
      { name: { nl: "Korean Botox Lifting", en: "Korean Botox Lifting" }, duration: "15 min", price: 610 },
    ],
  },
  {
    id: "fillers",
    name: { nl: "Fillers", en: "Fillers" },
    items: [
      {
        name: { nl: "Filler 0,5 ml Stylage S/M/L", en: "Filler 0.5 ml Stylage S/M/L" },
        duration: "30 min",
        price: 180,
        note: { nl: "Lippen / Neuslippenplooi / Oorlel", en: "Lips / Nasolabial fold / Earlobe" },
      },
      {
        name: { nl: "Filler 1 ml Stylage S/M/L", en: "Filler 1 ml Stylage S/M/L" },
        duration: "20 min",
        price: 330,
        note: { nl: "Lippen / Neuslippenplooi / Oorlel", en: "Lips / Nasolabial fold / Earlobe" },
      },
      {
        name: { nl: "Filler 2 ml Stylage S/M/L", en: "Filler 2 ml Stylage S/M/L" },
        duration: "30 min",
        price: 600,
        note: { nl: "Lippen / Neuslippenplooi / Oorlel", en: "Lips / Nasolabial fold / Earlobe" },
      },
      {
        name: { nl: "Filler 1 ml Stylage XL", en: "Filler 1 ml Stylage XL" },
        duration: "20 min",
        price: 350,
        note: { nl: "Temporaal / Kin / Wangen / Kaaklijn", en: "Temple / Chin / Cheeks / Jawline" },
      },
      {
        name: { nl: "Filler 2 ml Stylage XL", en: "Filler 2 ml Stylage XL" },
        duration: "40 min",
        price: 650,
        note: { nl: "Temporaal / Kin / Wangen / Kaaklijn", en: "Temple / Chin / Cheeks / Jawline" },
      },
      {
        name: { nl: "Neusfiller (incl. touch-up binnen 3 maanden)", en: "Nose filler (incl. touch-up within 3 months)" },
        duration: "30 min",
        price: 350,
      },
      { name: { nl: "Fillers verwijderen per sessie", en: "Filler removal per session" }, duration: "15 min", price: 150 },
      { name: { nl: "Traangoot filler", en: "Tear trough filler" }, duration: "20 min", price: 350 },
    ],
  },
  {
    id: "consultatie",
    name: { nl: "Consultatie Plastische Chirurgie", en: "Plastic Surgery Consultation" },
    items: [
      {
        name: { nl: "Consultatie plastische chirurgie", en: "Plastic surgery consultation" },
        duration: "30 min",
        price: 50,
        description: {
          nl: "Persoonlijk consult over plastisch chirurgische mogelijkheden, inclusief begeleiding in NL en Turkije.",
          en: "Personal consultation on plastic surgery options, including guidance in the Netherlands and Turkey.",
        },
      },
    ],
  },
];

export function formatPrice(price: number, lang: "nl" | "en"): string {
  if (price === 0) return lang === "nl" ? "Gratis" : "Free";
  return new Intl.NumberFormat(lang === "nl" ? "nl-NL" : "en-GB", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(price);
}
