import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, StubBody } from "@/components/sections/page-hero";
import { DISCIPLINES } from "@/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "Disciplines",
  description:
    "Eleven disciplines, delivered under one contract: MEP, swimming pools, fit-out, epoxy and vinyl flooring, screed, waterproofing, tiling, microcement, paint and maintenance.",
  path: "/disciplines",
});

export default function DisciplinesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Disciplines"
        subtitle="Eleven disciplines, one contract. Coordinated from drawing to handover."
      />
      <section className="mx-auto max-w-[1200px] px-5 md:px-10 py-20 md:py-28">
        <ul className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
          {DISCIPLINES.map(d => (
            <li key={d.slug} className="bg-bg p-8 md:p-10">
              <p className="eyebrow text-gold">{d.short}</p>
              <h2 className="font-serif text-3xl text-fg mt-4 leading-tight">{d.title}</h2>
              <p className="mt-4 text-fg-muted text-sm leading-relaxed">{d.description}</p>
            </li>
          ))}
        </ul>
        <StubBody>Per-discipline pages, photography and case studies coming online next.</StubBody>
      </section>
    </>
  );
}
