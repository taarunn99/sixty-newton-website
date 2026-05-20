import type { Area } from "./types";

/**
 * Tier-1 geographic targets for local-SEO sub-pages.
 *
 * Each Area drives one URL per published discipline at
 * /disciplines/{slug}/{area} — 14 disciplines × 13 areas = 182 pages.
 *
 * Order within each Emirate roughly tracks commercial-intent search
 * volume for "{discipline} contractor {area}" queries.
 */
export const AREAS = [
  // ── DUBAI ─────────────────────────────────────────────────────
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    searchName: "Dubai Marina",
    emirate: "Dubai",
    landmarks: ["JBR Walk", "Marina Walk", "Cayan Tower", "Princess Tower", "The Address Dubai Marina"],
    vibe: "the densest residential-tower district in the UAE",
    context:
      "Dubai Marina is the densest residential-tower district in the UAE and one of the most demanding finish-trade environments in Dubai. Podium decks above JBR-level retail, pool surrounds at every tower, and back-of-house wet-area cores across the high-rise stack all sit at the intersection of UAE thermal cycling and 24/7 residential occupancy. We've delivered systems on programmes that respected residents' use windows, building security and gated-podium access protocols.",
  },
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    searchName: "Downtown Dubai",
    emirate: "Dubai",
    landmarks: ["Burj Khalifa", "Dubai Mall", "Souk Al Bahar", "The Address Downtown", "Vida Downtown"],
    vibe: "Dubai's tier-1 hospitality and luxury-residential heart, anchored around the Burj Khalifa",
    context:
      "Downtown Dubai is the tier-1 hospitality and luxury-residential heart of the city — anchored by the Burj Khalifa, Dubai Mall and a cluster of premium hotels and serviced residences. Finish trades here meet hotel-operator standards on residential briefs and consultant-pack discipline on commercial fit-outs. We've worked under The Address group's downtown developments and across multiple mixed-use towers in the Burj-precinct envelope.",
  },
  {
    slug: "jumeirah",
    name: "Jumeirah",
    searchName: "Jumeirah",
    emirate: "Dubai",
    landmarks: ["Jumeirah Beach Road", "La Mer", "Mercato Mall", "Madinat Jumeirah"],
    vibe: "Dubai's beachfront villa belt with established boutique-hospitality pockets",
    context:
      "Jumeirah is Dubai's beachfront villa belt — single-family residential, boutique hospitality and established neighbourhoods running parallel to Jumeirah Beach Road. Salt air, sun exposure and premium finish standards define the work here. Our Jumeirah portfolio leans heavily on villa marble, microcement and waterproofing scopes for owners who specify the finish as carefully as the architects do.",
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    searchName: "Business Bay",
    emirate: "Dubai",
    landmarks: ["Dubai Water Canal", "Bay Square", "JW Marriott Marquis", "The Opus", "Damac Towers"],
    vibe: "Dubai's central business and canal-side mixed-use district",
    context:
      "Business Bay is Dubai's central business and canal-side mixed-use district — a dense cluster of commercial towers, hospitality and serviced apartments along the Dubai Water Canal. Fast-track fit-out programmes and consultant-driven specifications are the norm. We've delivered waterproofing, epoxy and tile-and-stone scopes across multiple Business Bay tower podiums, back-of-house F&B kitchens and amenity-deck surfaces.",
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    searchName: "Palm Jumeirah",
    emirate: "Dubai",
    landmarks: ["Atlantis The Royal", "Atlantis The Palm", "Five Palm Jumeirah", "Anantara The Palm", "The Pointe"],
    vibe: "the UAE's iconic luxury-island address",
    context:
      "Palm Jumeirah is the UAE's iconic luxury-island address — home to Atlantis The Royal, Five Palm and a dense cluster of ultra-luxury hospitality and villa residences on the fronds and crescent. Salt-water exposure, sun cycling and hotel-grade finish standards converge here. Our Palm portfolio includes the Atlantis The Royal back-of-house waterproofing programme and finish-trade scopes across multiple villa addresses.",
  },
  {
    slug: "jumeirah-lake-towers",
    name: "Jumeirah Lake Towers",
    searchName: "Jumeirah Lake Towers (JLT)",
    emirate: "Dubai",
    landmarks: ["Almas Tower", "Cluster F", "DMCC Free Zone", "Cluster T", "JLT Park"],
    vibe: "a dense 80-tower commercial and residential cluster",
    context:
      "Jumeirah Lake Towers (JLT) is a dense cluster of more than 80 commercial and residential towers ringing a series of artificial lakes. Mixed-use podiums, shared retail concourses and multi-occupancy commercial floors define the finish-trade scope. We've worked across JLT cluster podiums, tower lobbies and back-of-house service areas on waterproofing and large-format-tile programmes.",
  },
  {
    slug: "jumeirah-village-circle",
    name: "Jumeirah Village Circle",
    searchName: "Jumeirah Village Circle (JVC)",
    emirate: "Dubai",
    landmarks: ["Circle Mall", "JVC Central Park", "Belgravia developments", "the JVC ring road"],
    vibe: "a mid-rise community of villas, townhouses and apartment buildings",
    context:
      "Jumeirah Village Circle (JVC) is a mid-rise community of villas, townhouses and low-rise apartment buildings in the heart of New Dubai. Family-residential briefs, villa-finish refurbs and small-to-mid-rise developer projects make up the JVC pipeline. We deliver on programmes that respect family-residential use windows and developer handover dates across the JVC ring.",
  },

  // ── ABU DHABI ─────────────────────────────────────────────────
  {
    slug: "abu-dhabi-corniche",
    name: "Abu Dhabi Corniche",
    searchName: "Abu Dhabi Corniche",
    emirate: "Abu Dhabi",
    landmarks: ["The Corniche promenade", "Etihad Towers", "Emirates Palace", "ADNOC HQ", "Conrad Abu Dhabi"],
    vibe: "Abu Dhabi's civic and hospitality waterfront",
    context:
      "The Abu Dhabi Corniche is the capital's civic, hospitality and government waterfront — anchored by Etihad Towers, Emirates Palace and a cluster of tier-1 hotels and government headquarters. Civic-grade specifications, government-clearance protocols and hospitality-operator standards run through every project here. Our Abu Dhabi work consistently meets both Department of Municipalities approval requirements and brand-applicator warranty thresholds.",
  },
  {
    slug: "reem-island",
    name: "Reem Island",
    searchName: "Reem Island",
    emirate: "Abu Dhabi",
    landmarks: ["Sun Tower", "Sky Tower", "Reem Mall", "Boutik Reem", "Gate Towers"],
    vibe: "Abu Dhabi's newest mid-rise residential and commercial island",
    context:
      "Reem Island is Abu Dhabi's newest large-scale mixed-use island development — mid-rise residential towers, podium decks, retail concourses and growing commercial floor space. Developer-driven programmes and the typical podium-deck waterproofing-plus-LFT brief make up the Reem pipeline. We've worked across multiple tower podiums and back-of-house service areas on the island.",
  },
  {
    slug: "yas-island",
    name: "Yas Island",
    searchName: "Yas Island",
    emirate: "Abu Dhabi",
    landmarks: ["Yas Marina Circuit", "Ferrari World", "Yas Mall", "Yas Waterworld", "W Abu Dhabi"],
    vibe: "Abu Dhabi's hospitality and leisure island",
    context:
      "Yas Island is Abu Dhabi's hospitality and leisure island — anchored by Yas Marina Circuit, Ferrari World, multiple tier-1 hotels and Yas Mall. Finish trades here meet hospitality-operator standards and consultant-pack discipline on a leisure-destination operating tempo. Our Yas work spans hotel back-of-house, F&B kitchen build-outs and large-format-tile installations across the resort estate.",
  },
  {
    slug: "saadiyat-island",
    name: "Saadiyat Island",
    searchName: "Saadiyat Island",
    emirate: "Abu Dhabi",
    landmarks: ["Louvre Abu Dhabi", "Saadiyat Beach Club", "Park Hyatt Abu Dhabi", "Saadiyat Cultural District"],
    vibe: "Abu Dhabi's cultural and ultra-luxury hospitality island",
    context:
      "Saadiyat Island is Abu Dhabi's cultural and ultra-luxury hospitality island — home to the Louvre Abu Dhabi, a cluster of tier-1 beach hotels and the Saadiyat Cultural District. Museum-grade installation standards, salt-air corrosion factors and ultra-luxury hospitality finish standards converge. Our Saadiyat scopes focus on hotel back-of-house, hospitality-finish trades and the institutional-grade specifications the cultural district demands.",
  },

  // ── SHARJAH ───────────────────────────────────────────────────
  {
    slug: "sharjah-al-majaz",
    name: "Al Majaz",
    searchName: "Al Majaz, Sharjah",
    emirate: "Sharjah",
    landmarks: ["Al Majaz Waterfront", "Al Majaz Park", "Sharjah Aquarium", "Khor Khalid"],
    vibe: "Sharjah's waterfront cultural and leisure district",
    context:
      "Al Majaz is Sharjah's waterfront cultural and leisure district — anchored by Al Majaz Waterfront, the Sharjah Aquarium and the Al Majaz amphitheatre. Mid-rise hospitality, cultural-institution finish standards and waterfront-exposure factors define the scope here. Our Sharjah work in Al Majaz spans hospitality back-of-house, cultural-institution flooring and waterfront-exposure waterproofing programmes.",
  },
  {
    slug: "sharjah-al-nahda",
    name: "Al Nahda",
    searchName: "Al Nahda, Sharjah",
    emirate: "Sharjah",
    landmarks: ["Al Nahda Park", "Sahara Centre", "Al Nahda Mall"],
    vibe: "an established residential and commercial neighbourhood straddling the Dubai-Sharjah border",
    context:
      "Al Nahda is one of Sharjah's most established residential and commercial neighbourhoods — straddling the Dubai-Sharjah border with a mix of mid-rise residential towers, commercial offices and family villas. Refurbishment programmes, façade repair and full-stack residential-finish trades dominate the local pipeline. Our Al Nahda portfolio includes the Masha'Allah Building diagnosis-first façade repair and Dulux Stucco repaint package.",
  },
] as const satisfies readonly Area[];

export type AreaSlug = (typeof AREAS)[number]["slug"];
