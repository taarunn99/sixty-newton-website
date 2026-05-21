import type { ProjectPage } from "./types";

const leMeridien: ProjectPage = {
  slug: "le-meridien-hotels",

  meta: {
    title: "Le Méridien Hotels — Roof Reroofing + Guestroom Refurb | Sixty Newton",
    description:
      "Sixty Newton case study — Le Méridien Hotels in Dubai. APP two-layer bitumen reroofing across the hotel deck plus 5,800 m² of LVT guestroom refurb. Two-discipline programme delivered on an occupied-hotel timetable.",
    keywords: [
      "Le Méridien Hotels contractor",
      "hotel reroofing Dubai",
      "APP bitumen reroofing",
      "guestroom LVT refurb",
    ],
  },

  hero: {
    eyebrow: "Reference project · Hospitality refurb",
    h1: "Le Méridien Hotels",
    sub: "APP two-layer torch-applied bitumen roof renewal plus 5,800 m² of guestroom-floor LVT refurbishment — both delivered on an occupied-hotel programme.",
  },

  programme: {
    location: "Dubai",
    year: "2022",
    scope: "Roof reroofing + guestroom LVT refurb",
    facts: [
      { label: "Roof scope",     value: "Two-layer APP bitumen" },
      { label: "LVT scope",       value: "5,800 m²" },
      { label: "Disciplines",     value: "Bitumen WP · Vinyl · Self-levelling" },
      { label: "Sector",          value: "Live-occupied hotel" },
      { label: "Programme",       value: "Phased to keep wings operational" },
    ],
  },

  story: {
    challenge:
      "Reroofing an occupied hotel means no torch flame near guest balconies during the day, no smell of bitumen drift through the AHU intake, and no scaffolding visible from the executive-lounge windows. The guestroom LVT refurb had to happen wing-by-wing on a hotel-occupancy schedule that left only 3–4 days per floor between guest turnovers.",
    approach:
      "Roof: APP two-layer build-up — primed substrate, first-layer bitumen torched and lap-photographed, second layer offset 50% and pressed. Night torching during the lowest-occupancy windows; AHU shutdown coordination per shift. LVT: Mapei Ultraplan self-levelling skim to SR1, vapour barrier where the slab moisture demanded one, click LVT in herringbone with feature borders. Wing-by-wing rotation, hotel housekeeping team braced for furniture moves.",
    outcome:
      "Roof handed over with zero flood-test failures and a photo-documented lap record per zone. LVT delivered to programme without missing a single guest-turnover window. Le Méridien is now the case study we lead with on occupied-hospitality refurb tenders.",
  },

  systemsApplied: [
    { discipline: "Bitumen Waterproofing", disciplineSlug: "bitumen-waterproofing", brand: "MAPEI",   products: ["Polyplan APP modified bitumen (two-layer)", "Bituminous primer"] },
    { discipline: "Vinyl Flooring",         disciplineSlug: "vinyl-flooring",         brand: "MAPEI",   products: ["Ultrabond Eco MS 4 LVT adhesive"] },
    { discipline: "Self-Levelling & Screed", disciplineSlug: "self-levelling",        brand: "MAPEI",   products: ["Ultraplan (SR1 substrate prep)"] },
  ],

  images: {
    hero: "/images/projects/le-meridien-hotels/hero.webp",
    heroAlt: "Le Méridien Hotels, Dubai — Sixty Newton reroofing + guestroom refurb",
    gallery: [
      "/images/projects/le-meridien-hotels/gallery-1.webp",
      "/images/projects/le-meridien-hotels/gallery-2.webp",
    ],
  },

  relatedDisciplines: [
    { slug: "bitumen-waterproofing",  title: "Bitumen Waterproofing", note: "APP two-layer roof renewal was the headline scope." },
    { slug: "vinyl-flooring",          title: "Vinyl Flooring",         note: "5,800 m² of guestroom LVT was the parallel scope." },
    { slug: "self-levelling",          title: "Self-Levelling & Screed", note: "SR1 substrate prep that made the LVT possible." },
  ],

  relatedProjects: [
    { slug: "atlantis-the-royal",     name: "Atlantis The Royal",      location: "Palm Jumeirah, Dubai" },
    { slug: "al-wathba-desert-resort", name: "Al Wathba Desert Resort & Spa", location: "Abu Dhabi" },
  ],
};

export default leMeridien;
