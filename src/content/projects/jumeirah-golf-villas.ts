import type { ProjectPage } from "./types";

const jumeirah: ProjectPage = {
  slug: "jumeirah-golf-villas",

  meta: {
    title: "Jumeirah Golf Villas — Pool Decks + Podium Joints | Sixty Newton",
    description:
      "Sixty Newton case study — Jumeirah Golf Villas, Dubai. Pool-deck LFT pavers across a cluster villa community plus movement-joint sealing across the podium grid. Laticrete + Mapei systems for exterior tile + sealants.",
    keywords: [
      "Jumeirah Golf Villas contractor",
      "pool deck LFT pavers Dubai",
      "podium movement joint",
      "outdoor large format tiling UAE",
    ],
  },

  hero: {
    eyebrow: "Reference project · Cluster residential",
    h1: "Jumeirah Golf Villas",
    sub: "Pool-deck large-format porcelain pavers across the villa cluster plus podium movement-joint sealing — outdoor disciplines tuned for UAE thermal cycling.",
  },

  programme: {
    location: "Dubai",
    year: "2024",
    scope: "Pool-deck LFT + podium joint sealing",
    facts: [
      { label: "Disciplines",    value: "Large-format tiling · Sealants" },
      { label: "Brands",         value: "Laticrete · MAPEI" },
      { label: "Sector",         value: "Luxury cluster residential" },
      { label: "Climate factor", value: "Direct sun + standing irrigation" },
    ],
  },

  story: {
    challenge:
      "Outdoor pool decks across a cluster-villa community sit at the intersection of three nasty failure modes: direct UAE sun cycling the slab thermally, standing irrigation water, and constant chlorine splashback from the pools. The wrong adhesive turns the porcelain hollow inside 18 months. Separately, the shared podium grid had movement joints that needed re-sealing on a programme that respected the villa owners' use windows.",
    approach:
      "Pool decks: Laticrete 254 Platinum + flexible additive over Mapelastic-waterproofed substrate. Back-buttered every porcelain slab, levelling-clip grid across the field, expansion gaps every 4 m. Movement joints: Mapeflex PU45 with backer rod, hourglass-tooled. Programme split by villa cluster so owners had a clear window per phase.",
    outcome:
      "Pool decks survived the first full summer with zero hollow-spot complaints on the sound-test audit. Movement joints passed the consultant's post-summer re-inspection. The flexible-adhesive + waterproofed-substrate spec is now our default outdoor-LFT prescription on residential projects.",
  },

  systemsApplied: [
    { discipline: "Large Format Tiling",              disciplineSlug: "large-format-tiling", brand: "Laticrete", products: ["254 Platinum + flexible additive", "Hydro Ban (pool perimeter)"] },
    { discipline: "Waterproofing",                    disciplineSlug: "waterproofing",       brand: "MAPEI",     products: ["Mapelastic Smart (deck substrate)"] },
    { discipline: "Specialised Coatings & Sealants",  disciplineSlug: "specialised-coatings-and-sealants", brand: "MAPEI", products: ["Mapeflex PU45"] },
  ],

  relatedDisciplines: [
    { slug: "large-format-tiling",                title: "Large Format Tiling",              note: "Pool-deck pavers across the cluster were the headline scope." },
    { slug: "specialised-coatings-and-sealants",  title: "Specialised Coatings & Sealants",   note: "Podium movement-joint sealing was the parallel scope." },
    { slug: "waterproofing",                      title: "Waterproofing",                      note: "Membrane build-up under outdoor LFT is mandatory in UAE climate." },
  ],

  relatedProjects: [
    { slug: "dubai-hills-villas",        name: "Dubai Hills Villas",        location: "Dubai" },
    { slug: "address-boulevard-hotel",   name: "The Address Boulevard Hotel", location: "Downtown Dubai" },
  ],
};

export default jumeirah;
