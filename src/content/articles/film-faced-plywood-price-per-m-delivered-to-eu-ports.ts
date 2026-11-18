import type { Article } from "../resources";

const article: Article = {
  slug: "film-faced-plywood-price-per-m-delivered-to-eu-ports",
  section: "import-procurement-guides",
  title: "Film Faced Plywood Price per m³ Delivered to EU Ports",
  description:
    "Film faced plywood price in Europe, built up from FOB Vietnam to Hamburg or Rotterdam: freight, duty, VAT, port costs, EUDR and cost per pour.",
  date: "2026-11-18",
  readMinutes: 9,
  keyword: "film faced plywood price europe",
  takeaways: [
    "A delivered price is a stack: **FOB + freight + insurance + duty + port and clearance + inland haulage**. Ask every supplier to quote on the same Incoterm.",
    "Vietnamese plywood can qualify for EVFTA tariff preference with valid proof of origin. Check the exact HS 4412 rate in TARIC before you price.",
    "Import VAT is normally recoverable for VAT-registered buyers, so it affects cash flow more than cost.",
    "Convert per-sheet offers to m³ carefully: one 1220 × 2440 × 18 mm sheet is about 0.0536 m³, so roughly 18.7 sheets per m³.",
    "The number that matters on site is **cost per pour**. A higher-grade panel with more re-uses often costs less per pour.",
  ],
  body: [
    {
      h: "Why there is no single \"Europe price\"",
      p: [
        "Buyers searching for a film faced plywood price in Europe usually find one of two things: a retail price per sheet from a local merchant, or an FOB price per m³ from an Asian factory. Neither is the number you need. What a contractor or distributor pays is the **delivered cost per m³ at their port or yard**, and that depends on grade, thickness, Incoterm, freight market, duty status, exchange rate and how much paperwork the shipment needs.",
        "This guide shows how to build that number yourself, line by line, so you can compare offers from Vietnam, other origins and EU stockists on equal terms. It uses example inputs, not quotes. For a current price on [Kosmex film faced plywood](/products/film-faced-plywood/), [request a quote](/request-a-quote/).",
      ],
    },
    {
      h: "Step 1: Fix the Incoterm",
      p: ["Most Vietnamese plywood is quoted from Haiphong port (northern Vietnam, close to Kosmex production). Make sure every offer uses the same term, or adjust them before comparing."],
      table: {
        caption: "Common Incoterms for plywood shipments to the EU",
        head: ["Incoterm", "Seller pays", "Buyer still pays"],
        rows: [
          ["FOB Haiphong", "Goods, export clearance, loading on vessel", "Ocean freight, insurance, everything at destination"],
          ["CFR Hamburg / Rotterdam", "As FOB + ocean freight", "Insurance, destination port charges, duty, VAT, haulage"],
          ["CIF Hamburg / Rotterdam", "As CFR + minimum marine insurance", "Destination port charges, duty, VAT, haulage"],
          ["DAP buyer's yard", "Delivery to named place, not unloaded", "Import duty, VAT, customs clearance, unloading"],
        ],
      },
      note: "CIF insurance is minimum cover (Institute Cargo Clauses C) unless agreed otherwise. Many importers buy CFR and arrange their own all-risks cover.",
    },
    {
      h: "Step 2: Convert sheets to m³ and containers",
      p: ["Plywood is priced per m³ but used per sheet. Check every conversion. Indicative values:"],
      table: {
        caption: "Indicative sheet volume and sheets per m³",
        head: ["Size × thickness", "m³ per sheet", "Sheets per m³ (approx.)"],
        rows: [
          ["1220 × 2440 × 12 mm", "0.0357", "28.0"],
          ["1220 × 2440 × 15 mm", "0.0447", "22.4"],
          ["1220 × 2440 × 18 mm", "0.0536", "18.7"],
          ["1250 × 2500 × 18 mm", "0.0563", "17.8"],
          ["1250 × 2500 × 21 mm", "0.0656", "15.2"],
        ],
      },
      after: [
        "A 40' high-cube container of film faced plywood typically carries roughly **20–24 m³**, depending on thickness, density and the payload limit. Treat this as indicative: dense eucalyptus cores (declared 650 kg/m³ by Kosmex) reach the weight limit sooner than acacia cores (550 kg/m³). Ask your supplier for the exact pallet count and gross weight per container before you divide freight by volume.",
      ],
      image: { name: "container-loading", alt: "Pallets of plywood being loaded into a shipping container at the Kosmex factory", caption: "Container loading: pallet count and gross weight decide freight cost per m³." },
    },
    {
      h: "Step 3: Build the landed cost",
      p: ["Use the template below. Letters are placeholders: put in your own quotes. All per-container costs are divided by the m³ loaded (V)."],
      table: {
        caption: "Landed cost template for film faced plywood, per m³",
        head: ["Line", "How to calculate", "Notes"],
        rows: [
          ["A. FOB price", "Supplier quote per m³", "Set by grade, thickness, film, glue, core"],
          ["B. Ocean freight", "Freight per 40HC ÷ V", "Haiphong to North Europe; volatile, check monthly"],
          ["C. Insurance", "≈ (A + B) × 110% × rate", "Rate from your insurer"],
          ["D. Customs value", "A + B + C", "CIF value at EU border"],
          ["E. Import duty", "D × duty rate", "EVFTA preference with valid proof of origin; check TARIC"],
          ["F. Destination THC and port fees", "Per container ÷ V", "Terminal handling, documentation"],
          ["G. Customs brokerage", "Per declaration ÷ V", "Plus any inspection fees"],
          ["H. Inland haulage", "Port to yard ÷ V", "Truck or barge"],
          ["I. Compliance cost", "EUDR due diligence, document handling ÷ V", "Internal time or service fee"],
          ["**Landed cost per m³**", "**D + E + F + G + H + I**", "Excludes recoverable import VAT"],
        ],
      },
      after: [
        "Import VAT is charged on the customs value plus duty (and some delivery costs) at the rate of the member state of import. For a VAT-registered business it is normally recovered, so leave it out of cost but keep it in your cash-flow plan.",
      ],
    },
    {
      h: "Worked example (example inputs, not a quote)",
      p: [
        "To show the mechanics only, assume: FOB price **P** per m³, freight per 40HC **F**, loaded volume **22 m³**, insurance rate **0.2%**, duty rate **d** from TARIC, destination costs (THC, brokerage, haulage) **K** per container, and compliance cost **c** per m³.",
      ],
      steps: [
        "Freight per m³ = F ÷ 22.",
        "Insurance per m³ ≈ (P + F ÷ 22) × 1.1 × 0.002.",
        "Customs value D = P + F ÷ 22 + insurance.",
        "Duty = D × d. With EVFTA preference and valid proof of origin, d may be zero for many HS 4412 lines; confirm the line for your product.",
        "Destination costs per m³ = K ÷ 22.",
        "Landed cost per m³ = D + duty + K ÷ 22 + c.",
      ],
      note: "Swap 22 m³ for the real loaded volume from the supplier's packing list. A container loaded with 20 m³ instead of 24 m³ raises every per-container line by 20%.",
    },
    {
      h: "Duties, trade defence and origin",
      p: [
        "**EVFTA.** Under the EU–Vietnam Free Trade Agreement, Vietnamese-origin plywood can enter at a preferential rate, often zero, if the goods meet the rules of origin and you hold valid proof of origin (a statement on origin by a registered exporter or the form required at the time). Without it, the standard third-country rate applies. Check the exact rate for your CN code in the EU TARIC database before pricing.",
        "**Anti-dumping.** The EU applies anti-dumping duties to certain plywood from China. At the time of writing we found no EU anti-dumping or anti-circumvention measure on Vietnamese-origin plywood, but trade-defence cases change. Verify in TARIC and the Official Journal, and make sure the origin of veneer and core is documented: transhipped or re-labelled panels are exactly what customs investigates.",
        "Kosmex peels, dries, lays up and presses in its own production in northern Vietnam, as described in our [factory process guide](/resources/articles/inside-a-vietnam-formwork-plywood-line-process-and-qc-points/), which supports origin documentation.",
      ],
    },
    {
      h: "EUDR: a new cost line from 30 December 2026",
      p: [
        "Plywood (HS 4412) is in scope of the EU Deforestation Regulation. Following the December 2025 amendment, large and medium operators must comply from **30 December 2026**, with other micro and small operators from 30 June 2027 (confirm current dates with the European Commission). The first operator placing plywood on the EU market must collect harvest geolocation data, assess risk and file a due diligence statement.",
        "Budget this as internal time or a service fee per shipment. A supplier that delivers a complete traceability pack lowers the cost. Kosmex provides a [legal sourcing and traceability file](/certificates/traceability-legal-sourcing/) on request and holds [FSC Chain of Custody certification](/certificates/fsc-chain-of-custody/) for FSC-claimed orders. See the [EUDR document pack guide](/resources/articles/eudr-ready-document-pack-vietnam-plywood/) for what to ask for.",
      ],
    },
    {
      h: "What moves the FOB price",
      list: [
        "**Grade**: film weight (120, 130 or 145 g/m² in the Kosmex range), core grade and jointing, and drying method.",
        "**Glue**: PF costs more than MUF but gives the most re-uses (Kosmex declares 20+ for Premium PF).",
        "**Thickness and size**: thinner panels need more plies per m³ of output, and non-standard sizes add trim waste.",
        "**Core species**: acacia, eucalyptus or mixed hardwood, which also changes weight per container.",
        "**Options**: logo print in the film, special film colour, edge sealing, CE/DoP and FSC claim.",
        "**Exchange rate**: most offers are in USD. Hedge or price in EUR for longer contracts.",
      ],
    },
    {
      h: "From price per m³ to cost per pour",
      p: [
        "The cheapest m³ is not the cheapest formwork. Divide the landed cost per sheet by the realistic number of pours. Using Kosmex declared re-use cycles:",
      ],
      table: {
        caption: "Re-use cycles declared by Kosmex, by grade",
        head: ["Grade", "Declared re-uses", "Cost per pour"],
        rows: [
          ["[Economy](/products/film-faced-plywood/economy-grade/)", "6–8", "Landed cost per sheet ÷ 6–8"],
          ["[Medium](/products/film-faced-plywood/medium-grade/)", "10–12", "Landed cost per sheet ÷ 10–12"],
          ["[Premium](/products/film-faced-plywood/premium-grade/) (MUF)", "12–15", "Landed cost per sheet ÷ 12–15"],
          ["[Premium](/products/film-faced-plywood/premium-grade/) (PF)", "20+", "Landed cost per sheet ÷ 20+"],
        ],
      },
      after: [
        "Freight, duty and port costs per m³ are almost the same for every grade, so they weigh more heavily on the cheaper panel. On repetitive frames that is often where the Premium grade wins. Re-use figures are Kosmex declarations; site handling, release agent and edge care decide the real number. Compare the grades in detail in [best plywood for concrete forms](/resources/articles/best-plywood-for-concrete-forms-film-faced-grades-tested/).",
      ],
    },
    {
      h: "How to request a comparable quote",
      steps: [
        "Grade, glue and film colour (and logo print if wanted).",
        "Thickness, size and tolerances.",
        "Quantity in m³ or containers, and delivery schedule.",
        "Incoterm and destination port: e.g. CIF Hamburg, CFR Rotterdam, FOB Haiphong.",
        "Documents: TDS, test reports, CE/DoP, FSC claim, EUDR traceability file.",
      ],
      after: ["Send these through our [Request a Quote](/request-a-quote/) form and we will return an FOB or CIF offer with the matching documents."],
    },
  ],
  faq: [
    { q: "What is the price of film faced plywood in Europe?", a: "It depends on grade, thickness, Incoterm, freight and duty status. Build it from the FOB price plus freight, insurance, duty, port, clearance and haulage, or [request a current quote](/request-a-quote/)." },
    { q: "Is there import duty on Vietnamese plywood in the EU?", a: "Vietnamese-origin plywood can qualify for EVFTA preference, often at zero, with valid proof of origin. Check the exact HS 4412 line in TARIC." },
    { q: "Is there EU anti-dumping duty on plywood from Vietnam?", a: "At the time of writing we found none for Vietnamese-origin plywood; EU measures apply to certain Chinese plywood. Verify in TARIC before ordering." },
    { q: "How many m³ fit in a 40' container?", a: "Indicatively 20–24 m³ of film faced plywood, limited by thickness, density and payload. Ask for the exact packing list." },
    { q: "Should I buy FOB or CIF?", a: "FOB gives you control of freight and insurance. CIF is simpler but includes only minimum insurance cover. Compare offers on the same term." },
    { q: "Does EUDR add cost?", a: "Yes, in time or service fees for due diligence from 30 December 2026. A supplier providing a complete traceability file reduces it." },
  ],
  sources: [
    { label: "[Kosmex film faced plywood TDS, 2026](/quality/technical-data-sheets/)", note: "density, film weight, re-uses (declared)" },
    { label: "EU TARIC database", note: "check the duty rate for your CN code" },
    { label: "EU–Vietnam Free Trade Agreement (EVFTA), in force since 2020" },
    { label: "Regulation (EU) 2023/1115 (EUDR), as amended December 2025", note: "verify current dates" },
  ],
  relatedProducts: ["film-faced-plywood", "premium-grade", "medium-grade", "economy-grade"],
  cta: { title: "Need an FOB or CIF price for film faced plywood?", text: "Tell us grade, thickness, quantity and destination port. We send a quotation with packing list and documents." },
};

export default article;
