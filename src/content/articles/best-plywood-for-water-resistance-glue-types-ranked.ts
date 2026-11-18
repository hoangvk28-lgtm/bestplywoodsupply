import type { Article } from "../resources";

const article: Article = {
  slug: "best-plywood-for-water-resistance-glue-types-ranked",
  section: "product-comparisons",
  title: "Best Plywood for Water Resistance: Glue Types Ranked",
  description:
    "The best plywood for water resistance starts with the glue. UF, MUF and PF ranked against EN 314-2, EN 636 and boil tests, with what to ask suppliers.",
  date: "2026-11-18",
  readMinutes: 11,
  keyword: "best plywood for water resistance",
  takeaways: [
    "Water resistance in plywood is set mainly by the **glue line**, then by surface overlay and edge sealing. Wood species comes after.",
    "Ranked from least to most water resistant: **UF (MR) → MUF (melamine-fortified) → PF (phenolic, WBP)**.",
    "Check the **test behind the claim**: EN 314-2 bond class (1, 2 or 3), EN 636 use class, or a named boil test such as BR-6h or BR-12h.",
    "“Waterproof” is a marketing word. No plywood is waterproof at a cut, unsealed edge.",
    "For kitchens, interior moisture-resistant panels are usually enough; the real risk is unsealed edges near sinks and dishwashers.",
  ],
  body: [
    {
      h: "Why glue matters more than the wood",
      p: [
        "Plywood is layers of veneer held together by adhesive. When water reaches a panel, the wood swells and shrinks, and the glue line has to keep the veneers bonded through that movement. If the adhesive softens or hydrolyses, the veneers separate: this is delamination, and once it starts the panel is finished.",
        "That is why the best plywood for water resistance is defined first by its glue system. A dense hardwood core bonded with an interior glue will still delaminate outdoors. A lighter core bonded with phenolic resin can survive repeated wetting. Face overlay (such as phenolic film) and edge sealing then decide how much water reaches the glue line in the first place.",
      ],
    },
    {
      h: "The four glue types, ranked",
      p: [
        "Below, the common plywood adhesives from least to most water resistant. Names vary by market and by supplier, so always check the chemistry and the test, not the label.",
      ],
      table: {
        caption: "Plywood glue types ranked by water resistance (general industry characteristics)",
        head: ["Rank", "Glue", "Typical market names", "Water resistance", "Typical use"],
        rows: [
          ["4 (lowest)", "UF — urea-formaldehyde", "MR, interior", "Dry interior use; tolerates occasional humidity, not wetting", "Furniture, interior panels, upholstery frames"],
          ["3", "MUF — melamine-urea-formaldehyde", "Melamine, WBP melamine", "Good resistance to humidity and short wetting; passes boil tests depending on formula", "Formwork (short to medium cycles), humid interiors, packaging"],
          ["2", "MUF high-melamine", "Often sold as WBP", "Better hot-water resistance; depends heavily on melamine content", "General formwork, flooring"],
          ["1 (highest)", "PF — phenol-formaldehyde", "WBP, phenolic, exterior", "Highest resistance to boiling and cyclic wetting", "High-cycle formwork, exterior, transport floors"],
        ],
      },
      after: [
        "The ranking is general. A well-made MUF panel can outperform a poorly made PF panel, because glue spread, pressing temperature, time and veneer moisture all affect the final bond. That is why tests matter more than names.",
      ],
    },
    {
      h: "UF / MR: interior only",
      p: [
        "Urea-formaldehyde is cheap, light in colour and easy to process, and it gives low formaldehyde emission when well formulated. It is the standard glue for interior furniture plywood. Its weakness is water: the UF bond breaks down in hot or prolonged wetting.",
        "MR (moisture resistant) usually means a UF-based glue meant for dry interior conditions with some humidity. It corresponds broadly to EN 314-2 bonding Class 1 or EN 636-1 (dry conditions). Kosmex furniture and upholstery panels use MR or melamine glue by default, which is the right choice for indoor products. For example, an independent EN 717-1 chamber test of a 9 mm, 5-ply UF-bonded Kosmex sample measured 0.022 mg/m³ formaldehyde emission ([report 005/MC/II/26](/certificates/test-report-formaldehyde/), tested sample only).",
      ],
    },
    {
      h: "MUF / melamine: the formwork workhorse",
      p: [
        "Adding melamine to urea resin improves the bond's resistance to humidity and hot water. MUF is the most common glue in Asian formwork plywood because it balances cost and performance. How water resistant it is depends on the melamine share, so two “melamine” panels can behave very differently.",
        "This is where boil tests help. Kosmex declares a **BR-6h** (boil resistant, 6 hours) bond for the [Economy grade](/products/film-faced-plywood/economy-grade/) and **BR-12h** for the [Medium grade](/products/film-faced-plywood/medium-grade/), both MUF-bonded. A longer boil without delamination indicates a more durable glue line. The [Premium grade](/products/film-faced-plywood/premium-grade/) with MUF glue is declared to EN 314-2 Class 2 & 3.",
      ],
    },
    {
      h: "PF / WBP: the most water resistant",
      p: [
        "Phenol-formaldehyde resin cures to a dark, rigid, highly water-resistant bond. It resists boiling water, weathering and repeated wetting better than any other common plywood glue. It is the standard for exterior plywood, high-cycle formwork and transport flooring.",
        "WBP originally meant “weather and boil proof”. Today it is used loosely, and some suppliers call MUF panels “WBP”. If you need the highest durability, ask specifically for phenolic glue and the test behind it. Kosmex offers PF glue on the Premium grade, with a declared 20+ re-uses for formwork compared with 12–15 for Premium with MUF glue.",
      ],
      image: { name: "core-layers-edge", alt: "Edge view of plywood showing core veneer layers and glue lines", caption: "The glue lines between veneers decide how a panel behaves when wet." },
    },
    {
      h: "Reading the standards: EN 314-2 and EN 636",
      p: [
        "Two European standards are used to describe water resistance. They answer different questions.",
      ],
      table: {
        caption: "EN 314-2 bonding classes and EN 636 use classes",
        head: ["Standard", "Class", "Intended conditions"],
        rows: [
          ["EN 314-2 (bond quality)", "Class 1", "Dry interior conditions"],
          ["EN 314-2", "Class 2", "Humid conditions; protected exterior; short-term exposure to weather"],
          ["EN 314-2", "Class 3", "Exterior conditions, exposed to weather"],
          ["EN 636 (plywood specification)", "EN 636-1", "Dry environment"],
          ["EN 636", "EN 636-2", "Humid environment"],
          ["EN 636", "EN 636-3", "Exterior environment"],
        ],
      },
      after: [
        "EN 314-1 sets the test methods: shear specimens are pre-treated (soaking, boiling or cyclic boil-dry-boil) and then tested for shear strength and wood failure. The pre-treatment required depends on the class. EN 636 then combines bond class with other requirements to define plywood for each environment.",
        "BR and BWP are older, mostly British or Asian terms for boil-resistant and boil-and-weather-proof bonds. When a supplier uses them, ask how long the boil was and what pass criterion was used, as Kosmex states for its 6 h and 12 h tests.",
      ],
      note: "A bond class on a datasheet is a declaration. Ask whether a laboratory report supports it and which sample it covers. See [QC report vs. test report vs. certificate](/resources/articles/qc-report-vs-test-report/).",
    },
    {
      h: "Beyond glue: overlay and edges",
      p: ["Glue is the foundation, but three other features decide how much water reaches it:"],
      list: [
        "**Face overlay.** Phenolic film seals the faces and gives a water-resistant casting surface. Heavier film (for example 145 g/m² on Kosmex Premium vs 120 g/m² on Economy) lasts longer before wearing through.",
        "**Edge sealing.** Cut edges absorb water fastest. Kosmex film faced panels have edges sealed with waterproof paint; reseal after every site cut.",
        "**Core quality.** Gaps and overlaps in the core let water travel inside the panel. Machine-jointed A-grade cores have fewer voids than hand-jointed cores.",
        "**Moisture content at delivery.** Panels pressed and delivered at controlled moisture (Kosmex declares below 12% for film faced plywood, per EN 322) start with less internal stress.",
      ],
      after: [
        "For a broader look at outdoor use, read [Best Plywood for Exterior Use: Glue, Face and Edge Sealing](/resources/articles/best-plywood-for-exterior-use-glue-face-and-edge-sealing/).",
      ],
    },
    {
      h: "Best waterproof plywood for kitchens: an honest answer",
      p: [
        "Many people search for the best waterproof plywood for kitchen cabinets. In most kitchens, cabinet carcasses are not wetted; they face humidity, steam and the occasional spill. A good interior or melamine-bonded panel with a sealed or laminated surface is normally enough. Phenolic exterior plywood is rarely needed and its darker glue line may not suit visible edges.",
        "The real risk is water at unsealed edges and cut-outs: around the sink, under the dishwasher and at worktop joints. Seal every cut edge and hole, use edge banding, and choose a moisture-resistant glue for sink base units. Also check formaldehyde emission: for interior furniture, Kosmex declares E0.5 for its [furniture plywood](/products/furniture-plywood/) range.",
      ],
      note: "Best Plywood Supply sells plywood to furniture manufacturers and distributors in container volumes, not to individual homeowners.",
    },
    {
      h: "Which Kosmex panel for which wet condition",
      table: {
        caption: "Matching Kosmex products to moisture exposure (declared values)",
        head: ["Exposure", "Suggested product", "Glue / bond (declared)"],
        rows: [
          ["Dry interior furniture", "[Furniture plywood](/products/furniture-plywood/), [EV plywood](/products/furniture-plywood/ev-plywood/)", "MR (EN 636 Class 1) · WBP (EN 636 Class 2) on EV"],
          ["Humid interior, packaging in transit", "[Packing plywood](/products/packing-plywood/) with melamine glue", "MR / Melamine / Phenolic"],
          ["Short-cycle formwork", "[Economy grade](/products/film-faced-plywood/economy-grade/)", "MUF · BR-6h"],
          ["General formwork", "[Medium grade](/products/film-faced-plywood/medium-grade/)", "MUF · BR-12h"],
          ["High-cycle formwork, exterior", "[Premium grade](/products/film-faced-plywood/premium-grade/) with PF glue", "PF · EN 314-2 Class 2 & 3"],
          ["Trailer and container floors", "[Anti-Slip Plywood](/products/film-faced-plywood/anti-slip-plywood/)", "MUF / PF · EN 314-2 Class 2 & 3"],
        ],
      },
    },
    {
      h: "Questions to ask a supplier",
      steps: [
        "What is the glue chemistry: UF, MUF (and how much melamine) or PF?",
        "Which bond class or boil test is declared, and is there a laboratory report?",
        "Which sample does the report cover, and when was it tested?",
        "How are edges sealed, and what is the moisture content at delivery?",
        "Can you add a bond test to the batch QC report for my shipment?",
      ],
      after: [
        "Kosmex runs random bond testing to EN 314-2 in production as part of its [QC process](/quality/qc-process/). Independent reports already published are listed on [Test Reports](/quality/test-reports/).",
      ],
    },
    {
      h: "Buying water-resistant plywood in volume",
      p: [
        "Best Plywood Supply is the export channel of Kosmex Group, a plywood manufacturer in northern Vietnam. We supply film faced, furniture, upholstery and packing plywood to EU importers and manufacturers by the container. Tell us the exposure, the required bond class and the quantity, and we will recommend a glue system and send the TDS and available test reports with our quotation. [Request a quote](/request-a-quote/).",
      ],
    },
  ],
  faq: [
    { q: "What is the best plywood for water resistance?", a: "Plywood bonded with phenol-formaldehyde (PF) glue, with a sealed face such as phenolic film and sealed edges. Check for EN 314-2 Class 3 or EN 636-3 and ask for the test report." },
    { q: "Is WBP plywood always phenolic?", a: "No. WBP is often used loosely, including for melamine (MUF) panels. Ask for the glue chemistry and the bond test." },
    { q: "What do BR-6h and BR-12h mean?", a: "Boil resistant after 6 or 12 hours of boiling. Kosmex declares BR-6h for its Economy grade and BR-12h for its Medium grade, both MUF-bonded." },
    { q: "Is MR plywood waterproof?", a: "No. MR (moisture resistant) plywood is for dry interior use with some humidity. It should not be wetted repeatedly." },
    { q: "What is the best waterproof plywood for a kitchen?", a: "Usually a moisture-resistant interior panel with laminated or sealed faces and fully sealed edges. Exterior phenolic plywood is rarely needed for cabinet carcasses." },
    { q: "Does film faced plywood make any glue waterproof?", a: "No. Film protects the faces, but water still reaches the glue at edges, cuts and damage. The glue system sets the long-term limit." },
  ],
  sources: [
    { label: "EN 314-1 / EN 314-2 (bond quality) and EN 636 (plywood specifications)", note: "European standards; consult current editions" },
    { label: "[Kosmex Technical Data Sheets](/quality/technical-data-sheets/)", note: "declared glue, bond class and boil test per grade" },
    { label: "[EN 717-1 formaldehyde test, 9 mm sample](/certificates/test-report-formaldehyde/)", note: "T&T Laboratory 005/MC/II/26, tested sample only" },
  ],
  relatedProducts: ["film-faced-plywood", "premium-grade", "medium-grade", "furniture-plywood"],
  cta: { title: "Need a specific bond class?", text: "Tell us the exposure and quantity. We'll recommend the glue system and send the TDS and test reports with your quotation." },
};

export default article;
