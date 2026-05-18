import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { REFERENCE_PROJECTS, SITE } from "@/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description: `Landmark UAE projects delivered by ${SITE.name} — Atlantis The Royal, Al Wathba Desert Resort & Spa, St. Regis developments, Address Boulevard, Jumeirah Golf Villas and more.`,
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Portfolio"
        subtitle="The hotels, resorts, residences and infrastructure works we&rsquo;ve helped build."
      />
      <section className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-16 md:py-24">
        <ul className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border-hairline">
          {REFERENCE_PROJECTS.map(p => (
            <li key={p.name} className="bg-bg p-8 md:p-10">
              <p className="eyebrow text-gold">Reference project</p>
              <h2 className="font-serif text-2xl md:text-3xl text-fg mt-4 leading-tight font-light">
                {p.name}
              </h2>
              <p className="mt-3 text-sm text-fg-muted">{p.location}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
