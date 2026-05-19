import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { DisciplineReel } from "@/components/sections/discipline-reel";
import { DISCIPLINES } from "@/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "Disciplines",
  description:
    "Specialist contracting disciplines — waterproofing, microtopping, epoxy, marble installation, large-format tiling, painting and maintenance. Delivered across the UAE.",
  path: "/disciplines",
});

export default function DisciplinesPage() {
  return (
    <>
      {/* PageHero — bottom border + bottom padding cut so the reel sits
          seamlessly under the subtitle on this route. */}
      <PageHero
        eyebrow="What we do"
        title="Disciplines"
        subtitle="Specialist services delivered under one contract — coordinated from substrate to finish."
        className="border-b-0 pb-6 md:pb-10"
      />

      {/* Auto-scrolling reel of discipline icons — seamless under the subtitle */}
      <DisciplineReel />

      <section className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
        <ul className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border-hairline">
          {DISCIPLINES.map(d => (
            <li key={d.slug} className="bg-bg p-8 md:p-10">
              <p className="eyebrow text-gold">{d.short}</p>
              <h2 className="font-serif font-light text-3xl text-fg mt-4 leading-tight tracking-[-0.01em]">
                {d.title}
              </h2>
              <p className="mt-4 text-fg-muted text-sm leading-relaxed">{d.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
