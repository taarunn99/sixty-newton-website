import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { FAQAccordion } from "@/components/services/faq-accordion";
import { DualCTA } from "@/components/services/dual-cta";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — Specialist Applicator Questions Consultants Ask",
  description:
    "Sixty Newton FAQ — applicator vs contractor, brand-certified status, warranties, mobilisation, pricing, what's in the handover pack. Twelve answers UAE consultants and developers ask before award.",
  path: "/faq",
  keywords: [
    "Sixty Newton FAQ",
    "applicator vs contractor UAE",
    "joint manufacturer warranty UAE",
    "Mapei applicator FAQ",
    "Laticrete applicator UAE",
    "Weber Saint-Gobain applicator UAE",
    "Kerakoll applicator Dubai",
    "Saveto Vetonit applicator UAE",
  ],
});

const FAQ_ITEMS = [
  {
    q: "Are you a contractor or just an applicator?",
    a: "Both. Sixty Newton holds an active UAE trade licence and operates as a specialist contractor — but the work we deliver is brand-certified applicator scope: Mapei, Laticrete, AkzoNobel, X-Calibur, Weber Saint-Gobain, Kerakoll and Saveto Vetonit systems applied to manufacturer protocols and TDS. We're the trade you call when the brief explicitly requires brand-applicator status.",
  },
  {
    q: "What does 'approved applicator' actually mean?",
    a: "Each manufacturer has trained our crews on their specific systems and audited our work. Our installations qualify for joint manufacturer-applicator warranties where the system supports them. Generic contractors don't hold this status — their warranties are workmanship-only, and the manufacturer won't co-sign.",
  },
  {
    q: "Do you supply the materials too, or just install?",
    a: "Both. Sixty Newton is part of the Lapiz Blue Group — sister to Lapiz Blue General Trading, Montolite, Global Classic and Al Sama Metal Coating. Material supply, technical support and stock security come from the same network that backs our applicator work.",
  },
  {
    q: "Which Emirates do you cover?",
    a: "All seven — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain. Office is in Al Quoz Industrial Area 4, Dubai. Standard mobilisation across the UAE is 5–7 working days from award; fast-track 48–72 hours when stock is available.",
  },
  {
    q: "Can you work on a live, occupied site?",
    a: "Yes. Hospitality refurb (Le Méridien guestroom LVT was wing-by-wing on an occupied hotel), villa repaints with residents in place, retail fit-out around tenants. We sequence to keep parts of the space operational, work night programmes where the brief calls for it, and brief on access and noise windows before mobilisation.",
  },
  {
    q: "How quickly can you mobilise?",
    a: "Standard: 5–7 working days from award (procurement, crew allocation, method statement, prior approval submission). Fast-track: 48–72 hours where stock is on hand and the consultant pack is ready. Emergency response (live leak, structural concern): same-day or next-day in Dubai, Sharjah and Abu Dhabi.",
  },
  {
    q: "What workmanship warranties do you offer?",
    a: "5 years on cementitious waterproofing and microtopping systems. 10 years on liquid-PU waterproofing and bituminous membranes. Up to 20 years on GRP. 10–15 years on epoxy floors (longer on PU-cement). Joint manufacturer-applicator warranties available on Mapei and X-Calibur systems where the site is inspected by the manufacturer at handover — registered before mobilisation.",
  },
  {
    q: "What do you hand over with the work?",
    a: "Material approval pack (TDS / SDS per system), method statement, prior approval request (PAR), full photo log of every lap and milestone, IR sign-offs zone by zone, cure-schedule release for the following trade, joint manufacturer-applicator warranty (where registered), and a care + maintenance guide for the operator team. The handover pack is part of our scope, not an extra.",
  },
  {
    q: "How is your pricing structured?",
    a: "Every job is quoted after a free site survey. Indicative UAE ranges by discipline are published on each service page (e.g. cementitious waterproofing AED 45–75 / m², microtopping AED 320–420 / m², epoxy SL AED 160–260 / m²). Mock-ups, custom colour matching, night programmes and difficult access add 15–25% on top of base rates. Written quotation back within 48 working hours of the survey.",
  },
  {
    q: "Will the consultant approve your method statement?",
    a: "Yes. We prepare the full prior-approval submission — drawings cross-referenced, TDS / SDS pack, application schedule, IR milestones — and submit it before mobilisation. Our consultant approval rate on tier-1 hospitality projects sits at 100% on first or second submission.",
  },
  {
    q: "Can you do flood testing?",
    a: "Yes — and we recommend it on every horizontal waterproofing application. 24–48 hr flood, 50 mm head, perimeter monitored, fully photo-documented in the handover pack. Costs almost nothing now, saves a six-figure rip-up later.",
  },
  {
    q: "What if the consultant changes the spec mid-job?",
    a: "We re-price and re-submit. We don't apply a system that isn't in writing. The audit trail (TDS / IR / photo log) is what makes our work warrantable — varying it mid-stream without consultant sign-off would void the warranty for both us and the manufacturer.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Common questions"
        title="Frequently asked"
        subtitle="Twelve questions consultants, developers and clients ask before they award a specialist applicator scope. Read top to bottom or jump to whichever opens first."
      />

      <section className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-16 md:py-24">
        <FAQAccordion items={FAQ_ITEMS} />
      </section>

      <section className="relative w-full bg-bg-inset border-t border-border">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28 text-center">
          <h2 className="font-serif font-extralight text-fg text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
            Got a question we haven&rsquo;t answered?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed">
            Send us the drawing, the spec, or the question. Free site survey across the UAE, written quotation back within 48 working hours.
          </p>
          <DualCTA className="mt-10" align="center" />
        </div>
      </section>
    </>
  );
}
