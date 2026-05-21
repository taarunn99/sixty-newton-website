import type { ProjectPage } from "./types";

const omaxe: ProjectPage = {
  slug: "omaxe-mall",

  meta: {
    title: "Omaxe Mall, Delhi — Decorative Concrete + LFT Atriums | Sixty Newton",
    description:
      "Sixty Newton case study — Omaxe Mall, Delhi. Polished decorative concrete across the public concourse plus large-format porcelain atrium floors. Retail-grade finish programme delivered on a mall handover schedule.",
    keywords: [
      "Omaxe Mall contractor",
      "retail polished concrete India",
      "mall atrium LFT",
      "decorative concrete commercial",
    ],
  },

  hero: {
    eyebrow: "Reference project · Retail",
    h1: "Omaxe Mall",
    sub: "Polished decorative concrete across the public concourse and large-format porcelain atrium floors — retail-grade finish programme delivered to a mall handover schedule.",
  },

  programme: {
    location: "Delhi, India",
    year: "2022",
    scope: "Polished concrete concourse + LFT atriums",
    facts: [
      { label: "Disciplines",     value: "Design concrete · LFT" },
      { label: "Brands",          value: "MAPEI · Laticrete" },
      { label: "Sector",          value: "Retail / public concourse" },
      { label: "Footfall design", value: "Heavy commercial traffic" },
    ],
  },

  story: {
    challenge:
      "Mall floors take heavy commercial traffic from day one. The Omaxe brief called for industrial-luxe polished concrete across the public concourse — a finish that doesn't tile and can't be patched once worn — plus large-format porcelain atrium floors with feature inlays under skylight zones. Both finishes had to be installed inside a mall-handover programme that left zero margin for re-work.",
    approach:
      "Polished concrete: Mapei Ultratop SL self-levelling topping, cured under fleece, ground 50→3000 grit with diamond pads, lithium-silicate densifier, two coats of UV-stable PU sealer. LFT atriums: Laticrete 254 Platinum + flexible additive over SR1 substrate, vacuum-cup placement on the larger slabs, levelling clips through cure, sound-tested per panel.",
    outcome:
      "Concourse handed over to mall operations at full gloss, scratch-resistant under retail furniture move-in. LFT atriums passed the operator's hollow-spot audit on first pass. Omaxe is now the reference we use on any retail / mall tender requiring 'polished concrete done right'.",
  },

  systemsApplied: [
    { discipline: "Design Concrete & Screeding", disciplineSlug: "design-concrete",      brand: "MAPEI",    products: ["Ultratop SL", "Lithium-silicate densifier", "UV-stable PU sealer"] },
    { discipline: "Large Format Tiling",          disciplineSlug: "large-format-tiling",   brand: "Laticrete", products: ["254 Platinum + flexible additive"] },
    { discipline: "Polishing — Marble & Floors",  disciplineSlug: "polishing",              brand: "—",         products: ["Diamond-pad progression 50 → 3000 grit"] },
  ],

  relatedDisciplines: [
    { slug: "design-concrete",      title: "Design Concrete & Screeding", note: "Polished concrete concourse was the project signature." },
    { slug: "large-format-tiling",  title: "Large Format Tiling",          note: "Atrium feature floors in large-format porcelain." },
    { slug: "polishing",             title: "Polishing — Marble & Floors",  note: "Diamond-pad grit progression on the polished concrete." },
  ],

  relatedProjects: [
    { slug: "delhi-metro",          name: "Delhi Metro",          location: "Delhi, India" },
    { slug: "ahlatci-gold-refinery", name: "Ahlatci Gold Refinery", location: "Industrial" },
  ],
};

export default omaxe;
