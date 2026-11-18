import type { Article } from "../resources";

const article: Article = {
  slug: "film-faced-plywood-for-eu-contractors-complete-buyer-s-guide",
  section: "import-procurement-guides",
  title: "Film Faced Plywood for EU Contractors: Complete Buyer's Guide",
  description:
    "Film faced plywood in Europe: EN 13986, EN 636 and EN 314-2 explained, the tests to ask for, EUDR and FSC paperwork, and how to compare imported grades.",
  date: "2026-11-18",
  readMinutes: 9,
  keyword: "film faced plywood europe",
  takeaways: [
    "In the EU, film faced plywood used as a construction product is assessed against **EN 13986**. The Declaration of Performance (DoP) and CE marking come from that standard.",
    "**EN 636** sets the service class (dry, humid or exterior). **EN 314-2** sets the bond class. They answer different questions, so ask for both.",
    "Read every value as either *declared* (manufacturer data sheet) or *tested* (lab report on a named sample). Kosmex publishes which is which.",
    "From 30 December 2026, plywood (HS 4412) is in EUDR scope for large and medium operators. Plan the traceability file with your supplier now.",
    "Compare grades on cost per pour, not price per sheet: film weight, core grade and glue drive the number of re-uses.",
  ],
  body: [
    {
      h: "Why the European market buys film faced plywood differently",
      p: [
        "Film faced plywood in Europe is used by contractors, formwork rental fleets and distributors who often run tight cycle plans and audited sites. That changes what a good purchase looks like. A panel that is cheap per sheet but swells at the edges after four pours, or arrives without the papers your main contractor asks for, costs more than it saved.",
        "European buyers therefore tend to specify three things together: **performance** (standards and test methods), **documentation** (DoP, test reports, emission class) and **sourcing** (EUDR due diligence and, where needed, FSC claims). This guide walks through each, using the published data for [Kosmex film faced plywood](/products/film-faced-plywood/) as a worked example.",
      ],
    },
    {
      h: "The standards map: which EN standard answers which question",
      p: [
        "Plywood standards are easier to use once you see that each one answers one question. A supplier's data sheet should cite the method behind each number. If it does not, ask.",
      ],
      table: {
        caption: "EN standards relevant to film faced plywood in the EU",
        head: ["Standard", "Question it answers", "What to ask the supplier"],
        rows: [
          ["EN 13986", "How is a wood-based panel assessed and declared as a construction product?", "DoP and CE marking, where your project or client requires them"],
          ["EN 636", "Which service environment is the plywood suited to: dry (-1), humid (-2) or exterior (-3)?", "The EN 636 class claimed, and the bond test behind it"],
          ["EN 314-1 / EN 314-2", "How strong is the glue bond after pre-treatment (soaking, boiling)? Classes 1, 2, 3", "Bond class and whether a lab report exists"],
          ["EN 310", "Bending strength and modulus of elasticity (stiffness)", "Values in both directions, and the panel thickness tested"],
          ["EN 315", "Dimensional tolerances: length, width, thickness, squareness", "Tolerance figures, e.g. ±1 mm L/W, ±0.5 mm thickness"],
          ["EN 322", "Moisture content", "Target at dispatch, e.g. below 12%"],
          ["EN 323", "Density", "Declared density by core species"],
          ["EN 717-1 / EN 13986 Annex B", "Formaldehyde emission class (E1 is the EU baseline)", "Emission class and the test report behind it"],
        ],
      },
      note: "EN 636-3 (exterior) normally implies a Class 3 bond under EN 314-2. A phenolic film on the face does not by itself make a panel exterior-grade: the glue line does.",
    },
    {
      h: "CE marking and the Declaration of Performance",
      p: [
        "Under the EU Construction Products Regulation, a wood-based panel placed on the market as a construction product is declared against the harmonised standard EN 13986. The manufacturer issues a **Declaration of Performance** listing the declared characteristics (bond quality, bending, emission class and so on), and the CE mark is linked to that DoP.",
        "For formwork, many buyers do not strictly require CE marking because the panel is temporary works equipment rather than part of the finished building. Main contractors and public projects often ask for it anyway. Check the tender documents before ordering.",
        "Kosmex states that **CE marking and a DoP for film faced plywood are available on request**. If your client needs them, say so at enquiry stage so the documents can be matched to the grade and thickness you order.",
      ],
    },
    {
      h: "Bond class and glue: the decision that sets panel life",
      p: [
        "The glue line decides how a panel behaves after repeated wetting, more than the film does. Two systems dominate imported formwork plywood:",
      ],
      list: [
        "**MUF (melamine-urea-formaldehyde)**: good moisture resistance at a lower cost. Common in economy and mid-range formwork panels.",
        "**PF (phenol-formaldehyde)**: the most durable system for repeated boiling and exterior exposure. Used where the highest number of re-uses is wanted.",
      ],
      after: [
        "Suppliers also use boil-test labels such as **BR-6h** or **BR-12h** (boil resistant for 6 or 12 hours). These are useful factory classifications, but they are not the same thing as an EN 314-2 class. Ask which method the label is based on.",
        "In the Kosmex range, the Economy grade is declared as MUF with BR-6h bonding, the Medium grade as WBP melamine (MUF) with BR-12h, and the [Premium grade](/products/film-faced-plywood/premium-grade/) as MUF or PF with EN 314-2 Class 2 & 3 bonding (all declared in the Kosmex TDS).",
      ],
    },
    {
      h: "Kosmex grades side by side",
      p: ["The table below uses Kosmex Technical Data Sheet values (declared) and states re-use cycles as Kosmex publishes them. Actual cycles depend on handling, release agent and the pour."],
      table: {
        caption: "Kosmex film faced plywood grades: declared construction",
        head: ["Grade", "Film", "Core", "Glue / bond", "Declared re-uses"],
        rows: [
          ["[Premium](/products/film-faced-plywood/premium-grade/)", "145 g/m²", "100% A grade, machine-jointed, machine-dried", "MUF / PF · EN 314-2 Class 2 & 3", "12–15 (MUF) · 20+ (PF)"],
          ["[Medium](/products/film-faced-plywood/medium-grade/)", "130 g/m²", "AB grade, hand-jointed, machine-dried", "WBP melamine (MUF) · BR-12h", "10–12"],
          ["[Economy](/products/film-faced-plywood/economy-grade/)", "120 g/m²", "AB grade, hand-jointed, sun-dried", "MUF · BR-6h", "6–8"],
          ["[Anti-Slip](/products/film-faced-plywood/anti-slip-plywood/)", "180–240 g/m², rice / hexagon pattern", "100% A grade, machine-dried", "MUF / PF · EN 314-2 Class 2 & 3", "Flooring line"],
        ],
      },
      after: [
        "Shared declared values across the formwork grades: sizes 1220 × 2440 or 1250 × 2500 mm (or customised), thickness 11–21 mm, EN 315 tolerances of ±1 mm on length and width and ±0.5 mm on thickness, moisture below 12% (EN 322), density 550 kg/m³ for acacia, 600 kg/m³ mixed and 650 kg/m³ eucalyptus cores (±3%, EN 323), and edges sealed with waterproof paint.",
      ],
      image: { name: "ffp-branded-panels", alt: "KOSMEX logo-printed film faced plywood panels stacked in the factory", caption: "KOSMEX film faced plywood with the logo printed into the film for on-site identification." },
    },
    {
      h: "Declared vs tested: what the Kosmex lab reports show",
      p: [
        "A data sheet tells you what a manufacturer promises. A laboratory report tells you what one named sample did under one named method. European buyers should ask for both and check that they agree.",
        "Kosmex publishes these independent reports relevant to film faced plywood (all downloadable from [Test Reports](/quality/test-reports/)):",
      ],
      list: [
        "[EN 310 bending test, 18 mm, 13-ply, MUF](/certificates/test-report-bending-film-faced-18mm/) (T&T Laboratory, 06/MCI.AHK/IV/25): bending strength **49 / 47.3 MPa** and MOE **6,470 / 5,670 MPa**. The Premium grade TDS declares 49 / 47 N/mm² and 6,400 / 5,600 N/mm², so the declared figures are consistent with the test.",
        "[DIN 51130 anti-slip ramp test](/certificates/test-report-anti-slip-din-51130/) (QUATEST 3, KT3-01466AXD5): acceptance angle **18.0°**, within the R10 band, on 18 mm anti-slip samples.",
        "[EN 438-2 abrasion test](/certificates/test-report-abrasion-en-438-2/) (T&T Laboratory, 11/MCI.AHV/IV/25): **680 revolutions** on the anti-slip surface.",
      ],
      note: "Each report covers the tested sample only. Values not listed above (for example bond class, emission class or re-use cycles) are Kosmex declarations unless a separate report is supplied. A batch QC report for your shipment is available on request.",
    },
    {
      h: "Formaldehyde: E1 is the floor in the EU",
      p: [
        "Formaldehyde-based glues are used in almost all film faced plywood. In the EU, wood-based panels must meet at least class **E1** (an emission of 0.1 ppm, about 0.124 mg/m³, in the EN 717-1 chamber test), and several countries set stricter national rules for panels used indoors. Formwork is mainly used outdoors, but panels are stored and cut indoors and re-sold, so the class still matters.",
        "Kosmex declares E0 / E1 / E2 for film faced plywood, on request. For an EU order, specify E1 or better in writing and ask for the supporting test. For reference, a Kosmex [EN 717-1 chamber test](/certificates/test-report-formaldehyde/) on a 9 mm UF-bonded hardwood plywood sample measured 0.022 mg/m³. That sample is not film faced plywood, so treat it as evidence of factory capability, not of your grade.",
      ],
    },
    {
      h: "Sourcing papers: EUDR and FSC",
      p: [
        "**EUDR.** Plywood under HS 4412 is in the scope of the EU Deforestation Regulation (Regulation (EU) 2023/1115). As amended in December 2025, it applies from **30 December 2026** for large and medium operators (and timber micro and small enterprises), with other micro and small operators following on 30 June 2027. The operator placing plywood on the EU market must collect geolocation of harvest plots, assess risk and submit a due diligence statement. Vietnam has been reported as low-risk in the Commission's 2025 country benchmarking, which allows simplified due diligence but does not remove the need for traceability data. Check the current rules with the European Commission before relying on these dates.",
        "**FSC.** Kosmex Company Limited holds [FSC Chain of Custody certificate BV-COC-220900](/certificates/fsc-chain-of-custody/) (Bureau Veritas, valid to 23 Sep 2030) for trading FSC 100% and FSC Mix products. A panel counts as FSC-certified only when the FSC claim appears on the invoice and delivery documents. FSC supports, but does not replace, your own EUDR due diligence.",
        "Kosmex prepares a [legal sourcing and traceability file](/certificates/traceability-legal-sourcing/) on request, covering species, origin and supplier documentation. Our [EUDR plywood documents guide](/resources/articles/eudr-ready-document-pack-vietnam-plywood/) lists what a complete pack should contain.",
      ],
    },
    {
      h: "A buyer's specification checklist",
      steps: [
        "State the use: wall, slab, column, visible concrete, fencing or flooring, and the number of pours you plan.",
        "Choose the grade: film weight, core grade and glue system. For 20+ cycles, specify PF glue.",
        "Set size and thickness, e.g. 1250 × 2500 × 18 mm, and the EN 315 tolerances.",
        "Specify bond class (EN 314-2) and the EN 636 service class you need, plus the test report you expect.",
        "Specify emission class E1 or better, with the supporting test.",
        "Ask for CE marking / DoP if the project or client requires it.",
        "Agree film colour, logo print, edge sealing and packing (carton sheets and steel straps).",
        "Request the EUDR traceability file and, if needed, an FSC claim on the invoice.",
        "Agree pre-shipment inspection: see our [inspection checklist](/resources/articles/film-faced-plywood-inspection-checklist-printable/).",
      ],
    },
    {
      h: "Comparing offers: cost per pour, not price per sheet",
      p: [
        "Two quotes per m³ can hide very different costs on site. Divide the delivered panel cost by the realistic number of pours, then add the cost of stripping, cleaning and replacing damaged panels. A Premium PF panel that survives 20+ pours often beats an Economy panel at 6–8 pours on repetitive building frames, while Economy may win on footings and one-off pours.",
        "For landed cost to Hamburg, Rotterdam or Antwerp, see our guide to [film faced plywood price per m³ delivered to EU ports](/resources/articles/film-faced-plywood-price-per-m-delivered-to-eu-ports/). For country-specific notes, see our market pages for [Germany](/eu/germany/), [Poland](/eu/poland/) and [Belgium](/eu/belgium/).",
      ],
    },
  ],
  faq: [
    { q: "Is film faced plywood CE marked?", a: "It can be. CE marking for wood-based panels follows EN 13986 and a Declaration of Performance. Kosmex supplies CE marking and a DoP for film faced plywood on request." },
    { q: "What is the difference between EN 636 and EN 314-2?", a: "EN 636 classifies plywood by service environment (dry, humid, exterior). EN 314-2 classifies the glue bond (Class 1, 2, 3) after set pre-treatments. An exterior EN 636-3 panel normally needs a Class 3 bond." },
    { q: "Which formaldehyde class is required in Europe?", a: "E1 is the baseline for wood-based panels in the EU, and some countries apply stricter rules. Specify the class and ask for the test report behind it." },
    { q: "Does EUDR apply to imported film faced plywood?", a: "Yes. Plywood (HS 4412) is in EUDR scope. Large and medium operators must comply from 30 December 2026, per the December 2025 amendment. Confirm current dates with the European Commission." },
    { q: "How many times can Kosmex film faced plywood be reused?", a: "Kosmex declares 6–8 pours (Economy), 10–12 (Medium), 12–15 with MUF and 20+ with PF glue (Premium). Real life depends on handling, release agent and edge care." },
    { q: "Black or brown film: does it change performance?", a: "No. Film colour is a market preference. Performance comes from film weight, core and glue. See [black or brown film](/resources/articles/black-or-brown-film-choosing-formwork-plywood-for-eu-sites/)." },
  ],
  sources: [
    { label: "[Kosmex film faced plywood TDS, 2026](/quality/technical-data-sheets/)", note: "declared values" },
    { label: "[T&T Laboratory 06/MCI.AHK/IV/25, EN 310](/certificates/test-report-bending-film-faced-18mm/)", note: "18 mm, 13-ply sample" },
    { label: "[QUATEST 3 KT3-01466AXD5, DIN 51130](/certificates/test-report-anti-slip-din-51130/)" },
    { label: "[FSC CoC BV-COC-220900](/certificates/fsc-chain-of-custody/)" },
    { label: "Regulation (EU) 2023/1115 (EUDR), as amended December 2025", note: "verify current dates with the European Commission" },
  ],
  relatedProducts: ["film-faced-plywood", "premium-grade", "medium-grade", "economy-grade"],
  cta: { title: "Specifying film faced plywood for an EU project?", text: "Send grade, thickness, size, quantity and destination port. We reply with a quotation and the matching TDS, test reports and sourcing documents." },
};

export default article;
