import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { REFERENCE_PROJECTS } from "@/constants/site";
import { cn } from "@/lib/utils";

const FEATURED_PROJECT_SLUGS = [
  "atlantis-the-royal",
  "al-wathba-desert-resort",
  "st-regis-developments",
];

const PROJECT_BLURBS: Record<
  string,
  { eyebrow: string; scope: string; year: string; image: string; imageAlt: string }
> = {
  "atlantis-the-royal": {
    eyebrow: "Tier-1 hospitality · 2023",
    scope: "Back-of-house waterproofing across 6,400 m² of the resort. Mapei Mapelastic Smart + Mapenet 150 to spec.",
    year: "2023",
    image: "/images/projects/atlantis-the-royal/hero.webp",
    imageAlt: "Atlantis The Royal, Palm Jumeirah — Sixty Newton reference project",
  },
  "al-wathba-desert-resort": {
    eyebrow: "Luxury wellness · 2022",
    scope: "Spa wet-room cementitious waterproofing + podium liquid-PU build-up. Two-system split.",
    year: "2022",
    image: "/images/projects/al-wathba-desert-resort/hero.webp",
    imageAlt: "Al Wathba Desert Resort & Spa, Abu Dhabi — Sixty Newton reference project",
  },
  "st-regis-developments": {
    eyebrow: "Hospitality portfolio · 2024",
    scope: "Cementitious + PU combination across the back-of-house. MEP-coordinated, photo-documented.",
    year: "2024",
    image: "/images/projects/st-regis-developments/hero.webp",
    imageAlt: "St. Regis developments, UAE — Sixty Newton reference project",
  },
};

export function HomeFeaturedCaseStudies() {
  const featured = FEATURED_PROJECT_SLUGS
    .map(slug => REFERENCE_PROJECTS.find(p => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p) && Boolean(p?.published));

  return (
    <section
      aria-label="Featured case studies"
      className="relative w-full bg-bg-inset border-t border-border"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>Selected work</span>
          </p>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] tracking-[-0.02em]">
            Three tier-1 projects.{" "}
            <span className="italic text-gold">Three different briefs.</span>
          </h2>
          <p className="mt-5 font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed max-w-2xl">
            Read how we delivered on the UAE&rsquo;s most demanding hospitality projects — system stack, programme, handover discipline, zero callbacks.
          </p>
        </div>

        <ul className="mt-14 grid gap-3 md:grid-cols-3 md:gap-4">
          {featured.map(p => {
            const blurb = PROJECT_BLURBS[p.slug];
            return (
              <li key={p.slug}>
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="group block h-full rounded-md border border-border bg-bg overflow-hidden transition-colors duration-200 hover:border-gold/50"
                >
                  {/* Real hero shot from public/images/projects/{slug}/hero.webp */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-inset">
                    {blurb?.image ? (
                      <Image
                        src={blurb.image}
                        alt={blurb.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 440px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center border-b border-dashed border-border-dashed">
                        <p className="eyebrow text-fg-subtle">Photo to follow</p>
                      </div>
                    )}
                  </div>

                  <div className="p-6 md:p-7">
                    <p className="eyebrow text-gold">{blurb?.eyebrow || "Reference project"}</p>
                    <h3 className="font-serif font-light text-2xl md:text-3xl text-fg mt-4 leading-tight tracking-[-0.01em]">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-fg-subtle text-xs">{p.location}</p>
                    <p className="mt-5 text-fg-muted text-sm leading-relaxed">
                      {blurb?.scope}
                    </p>
                    <p className="mt-6 inline-flex items-center gap-2 eyebrow text-gold group-hover:text-gold-hover transition-colors">
                      Read case study
                      <ArrowUpRight
                        size={12}
                        aria-hidden
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex justify-end">
          <Link
            href="/portfolio"
            className={cn(buttonVariants({ variant: "outlineFill", size: "md" }), "group")}
          >
            View all reference projects
            <ArrowRight size={14} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
