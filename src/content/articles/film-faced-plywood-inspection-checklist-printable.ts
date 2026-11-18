import type { Article } from "../resources";

const R = "☐ Pass ☐ Fail";

const article: Article = {
  slug: "film-faced-plywood-inspection-checklist-printable",
  section: "import-procurement-guides",
  title: "Film Faced Plywood Inspection Checklist (Printable)",
  description:
    "A printable film faced plywood inspection checklist: documents, packing, EN 315 dimensions, moisture, film, edges, core, bond tests and container loading.",
  date: "2026-11-18",
  readMinutes: 9,
  keyword: "film faced plywood inspection",
  takeaways: [
    "Agree the acceptance criteria in writing before production. An inspection can only check what the purchase order defines.",
    "Inspect in order: documents, packing and marking, dimensions, moisture, film surface, edges, core, bond, then container loading.",
    "Typical criteria from a Kosmex TDS: ±1 mm length/width and ±0.5 mm thickness (EN 315), moisture below 12% (EN 322), bond class by grade.",
    "Print this page from your browser (Ctrl/Cmd + P) and tick the Pass / Fail column on site.",
  ],
  body: [
    {
      h: "How to use this checklist",
      p: [
        "A film faced plywood inspection is only as good as the specification behind it. Before anyone opens a pallet, the buyer and the supplier should agree in writing on grade, thickness, size, film weight and colour, glue system, bond class, moisture limit, edge sealing, packing and marking. The checklist below turns those agreements into checks you can tick off at the factory or at the loading point.",
        "Each table lists the check, how to perform it, an example acceptance criterion and a result column. The example criteria come from the Kosmex [film faced plywood](/products/film-faced-plywood/) Technical Data Sheet (2026). Replace them with the values in your own purchase order where they differ.",
        "To print, use your browser's print function (Ctrl + P on Windows, Cmd + P on Mac) and choose \"Save as PDF\" or a printer. For the broader picture of what to agree before inspection, see our [plywood pre-shipment inspection checklist](/resources/articles/plywood-pre-shipment-inspection-checklist/).",
      ],
      note: "Example criteria are Kosmex declared values unless marked as tested. Laboratory results refer to the tested sample only. See the [test reports page](/quality/test-reports/) for what is independently verified.",
    },
    {
      h: "1. Documents",
      p: ["Check the paperwork before the panels. A mismatch here usually means the wrong goods, or the right goods with the wrong claim."],
      table: {
        caption: "Document checks for film faced plywood inspection",
        head: ["Check", "Method", "Example acceptance criterion", "Result"],
        rows: [
          ["Purchase order & specification", "Compare PO with order specification sheet", "Grade, thickness, size, film, glue, quantity all match", R],
          ["Technical Data Sheet", "Confirm grade name and revision", "Current TDS for the ordered grade (e.g. Kosmex TDS 2026)", R],
          ["Batch QC report", "Review factory record for this batch", "Dimensions, moisture, surface and bond checks recorded", R],
          ["Test reports", "Match report to claimed property", "e.g. [EN 310 bending, 18 mm](/certificates/test-report-bending-film-faced-18mm/) where bending values are claimed", R],
          ["Sourcing claims", "Check certificate scope and invoice claim", "FSC claim on invoice if ordered; certificate [BV-COC-220900](/certificates/fsc-chain-of-custody/) valid", R],
          ["CE / DoP (if required)", "Request DoP for the product", "DoP supplied when CE marking is in the order", R],
        ],
      },
    },
    {
      h: "2. Packing and marking",
      table: {
        caption: "Packing and marking checks",
        head: ["Check", "Method", "Example acceptance criterion", "Result"],
        rows: [
          ["Pallet count & quantity", "Count pallets; count sheets on sampled pallets", "Matches packing list", R],
          ["Packing materials", "Visual", "Carton sheets and steel straps intact; no broken corners", R],
          ["Pallet labels", "Read label on each pallet", "Grade, thickness, size, quantity and batch match PO", R],
          ["Panel print / logo", "Visual on sampled sheets", "Logo print (e.g. KOSMEX) legible, as ordered", R],
          ["Packaging compliance", "Request evidence", "Heavy-metal test reports for packaging, e.g. [plywood skids](/certificates/ppwr-test-plywood-skids/)", R],
        ],
      },
    },
    {
      h: "3. Dimensions and tolerances (EN 315)",
      p: [
        "Measure length and width at both ends and in the middle, and thickness at several points along the edges, at least 25 mm in from the edge. Use a calibrated tape and caliper or micrometer. Record actual values, not just pass or fail.",
      ],
      table: {
        caption: "Dimensional checks for film faced plywood",
        head: ["Check", "Method", "Example acceptance criterion", "Result"],
        rows: [
          ["Length", "Steel tape, 2 positions", "Nominal ±1 mm (e.g. 2500 mm)", R],
          ["Width", "Steel tape, 3 positions", "Nominal ±1 mm (e.g. 1250 mm)", R],
          ["Thickness", "Caliper, 4–8 points per sheet", "Nominal ±0.5 mm (e.g. 18 mm)", R],
          ["Squareness", "Compare diagonals", "Diagonal difference within agreed limit", R],
          ["Edge straightness", "Straight edge or string line", "Within agreed limit", R],
          ["Flatness", "Sheet laid flat; measure bow", "No visible warping beyond agreed limit", R],
        ],
      },
      image: { name: "qc-thickness-caliper", alt: "Inspector measuring plywood thickness with a caliper", caption: "Thickness is measured at several points per sampled sheet." },
    },
    {
      h: "4. Moisture content (EN 322)",
      p: [
        "A pin or capacitive moisture meter gives a fast reading on site. EN 322 is an oven-dry method, so meter readings are an indication; ask for oven-dry results in the QC report if moisture is disputed. Take readings on several sheets from different pallets, including the bottom of the stack.",
      ],
      table: {
        caption: "Moisture checks",
        head: ["Check", "Method", "Example acceptance criterion", "Result"],
        rows: [
          ["Moisture content", "Meter, set for species; 3 points per sheet", "< 12% (Kosmex TDS, EN 322)", R],
          ["Moisture spread", "Compare top and bottom of stack", "No sheet markedly wetter than the rest", R],
          ["Storage condition", "Visual", "Stored under cover, off the ground", R],
        ],
      },
      image: { name: "qc-moisture-meter", alt: "Moisture meter reading on a plywood panel", caption: "Meter readings are an indication; EN 322 is the reference method." },
    },
    {
      h: "5. Film surface",
      table: {
        caption: "Film surface checks",
        head: ["Check", "Method", "Example acceptance criterion", "Result"],
        rows: [
          ["Film colour & weight", "Visual; compare with order", "As ordered: brown or black, e.g. 145 g/m² for Premium", R],
          ["Coverage", "Visual, both faces", "Film covers full face, no bare spots", R],
          ["Bubbles / blisters", "Visual and touch, raking light", "None on casting face", R],
          ["Scratches & dents", "Visual", "Within agreed limits per sheet", R],
          ["Telegraphing", "Raking light across face", "No core gaps or overlaps showing through film", R],
          ["Anti-slip pattern (flooring)", "Visual", "Rice or hexagon pattern as ordered", R],
        ],
      },
    },
    {
      h: "6. Edges",
      p: ["Edges are where water enters a formwork panel. Check every sampled sheet on all four edges."],
      table: {
        caption: "Edge checks",
        head: ["Check", "Method", "Example acceptance criterion", "Result"],
        rows: [
          ["Edge sealing", "Visual, 4 edges", "Waterproof paint continuous, no bare wood", R],
          ["Edge splits", "Visual", "No open splits or chipped plies", R],
          ["Trimming quality", "Visual", "Clean cut, no burn marks or tear-out", R],
        ],
      },
    },
    {
      h: "7. Core and delamination",
      p: [
        "Visible edges tell you a lot about the core, but the best check is a cut sample. Agree beforehand that one or more sheets may be cut across, and who pays for them.",
      ],
      table: {
        caption: "Core and delamination checks",
        head: ["Check", "Method", "Example acceptance criterion", "Result"],
        rows: [
          ["Ply count", "Count plies at edge", "As specified (e.g. 13 plies at 18 mm)", R],
          ["Core gaps & overlaps", "Edge view and cut sample", "Within grade limits; none open at edges", R],
          ["Delamination", "Edge view; knife test at edge", "No separated plies", R],
          ["Core species", "Visual", "As ordered: acacia, eucalyptus or mix", R],
        ],
      },
      image: { name: "core-layers-edge", alt: "Edge view of plywood showing core veneer layers", caption: "Check edges for gaps, overlaps and separated plies." },
    },
    {
      h: "8. Bond quality (EN 314 / boil test)",
      p: [
        "Bond quality is what decides how many pours a panel survives. The test must match the grade's declared bond class, so check the TDS first. In the Kosmex range, the Economy (Common) grade is declared BR-6h, the Medium grade BR-12h and the Premium grade EN 314-2 Class 2 & 3.",
        "A simple site test is to boil cut specimens for the declared time and then check whether the plies can be separated by hand or with a chisel. A full EN 314-1 shear test needs a laboratory. Agree in advance which test applies and who performs it.",
      ],
      table: {
        caption: "Bond checks by grade",
        head: ["Check", "Method", "Example acceptance criterion", "Result"],
        rows: [
          ["Economy (Common)", "Boil test 6 h, then inspect plies", "No delamination (BR-6h, declared)", R],
          ["Medium", "Boil test 12 h, then inspect plies", "No delamination (BR-12h, declared)", R],
          ["Premium", "EN 314-1 pre-treatment and shear test", "EN 314-2 Class 2 or 3 as ordered", R],
          ["Bending (optional)", "Laboratory, EN 310", "Per TDS; Premium declared 49 / 47 N/mm²", R],
        ],
      },
    },
    {
      h: "9. Sampling: how many sheets to check",
      p: [
        "Nobody measures every sheet in a container. Inspectors usually draw a random sample from different pallets and positions using an acceptance sampling plan, often ISO 2859-1 (AQL), with a general inspection level and separate AQL values for critical, major and minor defects.",
      ],
      list: [
        "Agree the sampling plan, inspection level and AQL values in the purchase order",
        "Define each defect class: e.g. delamination = critical, out-of-tolerance thickness = major, small surface scratch = minor",
        "Draw sheets from top, middle and bottom of several pallets, not only the most accessible one",
        "Record the number of sheets inspected and the number of defects found per class",
        "Agree beforehand what happens on a fail: re-sort, re-inspection or replacement",
      ],
    },
    {
      h: "10. Container loading",
      table: {
        caption: "Container loading checks",
        head: ["Check", "Method", "Example acceptance criterion", "Result"],
        rows: [
          ["Container condition", "Visual inside, door seals", "Clean, dry, no holes or odour", R],
          ["Loading pattern", "Visual during loading", "Pallets tight, no gaps that allow shifting", R],
          ["Moisture protection", "Visual", "Desiccant or cover as agreed", R],
          ["Seal number", "Record", "Matches documents", R],
          ["Photos", "Take sequence photos", "Empty, half-loaded, full, sealed", R],
        ],
      },
      image: { name: "container-loading", alt: "Plywood pallets loaded into a shipping container", caption: "Photograph each stage of loading." },
    },
    {
      h: "Sign-off",
      list: [
        "Inspector name, company and date",
        "Order / PO number and batch",
        "Total sheets inspected and defects found per class",
        "Overall result: ☐ Accepted ☐ Accepted with remarks ☐ Rejected",
        "Supplier representative signature",
      ],
      after: [
        "Kosmex runs its own six-stage checks before every shipment, described on the [QC process](/quality/qc-process/) page, and supplies a batch QC report on request. Combine that record with your own or a third-party inspection. When you [request a quote](/request-a-quote/), include your acceptance criteria and we will confirm them in the order specification.",
      ],
    },
  ],
  faq: [
    { q: "What tolerances apply to film faced plywood?", a: "EN 315 is the usual reference. The Kosmex TDS declares ±1 mm on length and width and ±0.5 mm on thickness. Use the values written in your purchase order." },
    { q: "What moisture content is acceptable?", a: "Kosmex declares moisture below 12% (EN 322) for film faced plywood. Meter readings on site are an indication; EN 322 is an oven-dry method." },
    { q: "How do I check the glue bond on site?", a: "A boil test on cut specimens, matched to the grade's bond class (e.g. 6 h for BR-6h, 12 h for BR-12h), followed by trying to separate the plies. A full EN 314-1 shear test needs a laboratory." },
    { q: "How many sheets should be inspected?", a: "Agree a sampling plan, often based on ISO 2859-1 (AQL), and draw sheets from several pallets and stack positions. Record defects by critical, major and minor class." },
    { q: "Is there a PDF version of this checklist?", a: "Print this page from your browser and choose \"Save as PDF\". The tables print with the Pass / Fail column for use on site." },
    { q: "Does Kosmex provide a QC report for each shipment?", a: "A batch QC inspection report is available on request. It records dimensional, moisture, surface and bond checks against the agreed criteria. Independent laboratory reports are listed on the [test reports page](/quality/test-reports/)." },
  ],
  sources: [
    { label: "[Technical Data Sheet — Film Faced Plywood](/quality/technical-data-sheets/)", note: "Kosmex TDS 2026, declared tolerances, moisture and bond class" },
    { label: "[Test reports](/quality/test-reports/)", note: "independent laboratory results, tested samples only" },
    { label: "[Kosmex QC process](/quality/qc-process/)", note: "factory inspection stages" },
  ],
  relatedProducts: ["film-faced-plywood", "premium-grade", "medium-grade", "economy-grade"],
  cta: { title: "Agree your inspection criteria up front", text: "Send your specification and acceptance criteria with your enquiry. We confirm them in the order specification before production." },
};

export default article;
