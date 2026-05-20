"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface LeaderQuote {
  text: string;
  accent?: "gold" | "muted";
}

interface Leader {
  name: string;
  role: string;
  imageHint: string;   // alt text + future image path
  imagePath?: string;  // optional real image src; falls back to atelier placeholder
  quotes: LeaderQuote[];
  context?: string;    // one-paragraph third-person bio
}

const LEADERS: Leader[] = [
  {
    name: "Mrs. Ashrat Razi",
    role: "Managing Director",
    imageHint: "Portrait of Mrs. Ashrat Razi, Managing Director of Sixty Newton",
    imagePath: "/images/team/ashrat-razi.webp",
    quotes: [
      {
        text: "When I look at Sixty Newton, I see more than a contracting company — I see a family that grows together. Every person here, from our applicators to our project engineers, carries the same purpose: deliver to spec, deliver on time, deliver with discipline.",
        accent: "gold",
      },
      {
        text: "Trust isn't built overnight. It's built through every signed-off IR, every on-time handover, every honest conversation about what a project actually needs. That's the legacy we're creating — one project at a time.",
        accent: "muted",
      },
    ],
    context:
      "Ashrat anchors Sixty Newton's strategic direction and group oversight. She brings the Lapiz Group's three-decade construction-materials network into every Sixty Newton engagement — from procurement assurance to manufacturer relationships.",
  },
  {
    name: "Mr. Shariful Haque",
    role: "Group General Manager",
    imageHint: "Portrait of Mr. Shariful Haque, Group General Manager",
    imagePath: "/images/team/shariful-haque.webp",
    quotes: [
      {
        text: "In construction, there are no shortcuts. Every system we apply has been tested and proven on projects far more demanding than the next brief. We don't compromise — because the buildings you trust us with shouldn't either.",
        accent: "gold",
      },
      {
        text: "I built our applicator practice on one principle: give consultants and developers access to the same brand-certified discipline that shaped iconic structures across the UAE. When you partner with us, you're not just buying a finish — you're buying an audit trail.",
        accent: "muted",
      },
    ],
    context:
      "Shariful runs day-to-day operations across the group, including Sixty Newton's project pipeline, mobilisation cadence and quality programmes. His direct involvement on tier-1 hospitality projects shapes how we sequence work on every brief that follows.",
  },
  {
    name: "Mr. Salim Zafar",
    role: "Chief Contractor",
    imageHint: "Portrait of Mr. Salim Zafar, Chief Contractor at Sixty Newton",
    quotes: [
      {
        text: "Every site has its own brief. Atlantis, Al Wathba, St. Regis — none of them taught us the same lesson twice. What carries across is the discipline: read the TDS, prep the substrate, photograph every lap, sign off zone by zone.",
        accent: "gold",
      },
      {
        text: "I tell every new applicator on our crews — we are not in the business of patching back. We are in the business of getting it right the first time, signing it off the first time, and handing over a documentation pack the consultant can defend to the client.",
        accent: "muted",
      },
    ],
    context:
      "Salim leads applicator operations on the ground. He's the primary client-side point of contact on Sixty Newton tenders, runs the brand-certified applicator training programmes for each crew, and personally walks tier-1 handovers. Reach him directly at salim@60newton.com.",
  },
];

function LeaderCard({ leader, index }: { leader: Leader; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const reverse = index % 2 === 1;

  return (
    <article
      ref={ref}
      className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center"
    >
      {/* Portrait — real photo when available, atelier placeholder otherwise */}
      <motion.div
        className={cn(
          "relative w-full h-[480px] sm:h-[560px] lg:h-[680px] rounded-2xl overflow-hidden",
          leader.imagePath
            ? "bg-bg-elevated p-4 sm:p-5 lg:p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]"
            : "border border-gold/30 bg-gradient-to-br from-bg-elevated via-bg-inset to-bg",
          reverse ? "lg:order-2" : "lg:order-1",
        )}
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 50 : -50 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {leader.imagePath ? (
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src={leader.imagePath}
              alt={leader.imageHint}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
              quality={90}
            />
            {/* Subtle dark-vignette gradient bottom edge so name floats over the
                lower portion of the image where the portrait fades to neutral */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg/40 to-transparent"
            />
          </div>
        ) : (
          <>
            {/* Dashed atelier frame inside */}
            <div className="absolute inset-4 border border-dashed border-[var(--border-dashed)] rounded-xl" />
            {/* Placeholder mark */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center px-6">
                <p className="eyebrow text-fg-subtle">Portrait to follow</p>
                <div aria-hidden className="my-4 mx-auto h-px w-12 bg-gold/60" />
                <p className="font-serif font-extralight text-fg text-2xl md:text-3xl tracking-[-0.01em] leading-tight">
                  {leader.name}
                </p>
                <p className="mt-2 eyebrow text-gold">{leader.role}</p>
              </div>
            </div>
            {/* Soft gold halo */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(184,146,79,0.06),transparent_60%)]"
            />
          </>
        )}
      </motion.div>

      {/* Content */}
      <div
        className={cn(
          "flex flex-col justify-center space-y-7",
          reverse ? "lg:order-1" : "lg:order-2",
        )}
      >
        <motion.p
          className="eyebrow text-gold flex items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
          <span>{leader.role}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h3 className="font-serif font-extralight text-fg text-[clamp(2rem,5vw,3rem)] leading-[1.04] tracking-[-0.02em]">
            {leader.name}
          </h3>
        </motion.div>

        {leader.quotes.map((q, qIdx) => (
          <motion.blockquote
            key={qIdx}
            className={cn(
              "relative pl-6 border-l-2",
              q.accent === "gold" ? "border-gold" : "border-gold-soft",
            )}
            initial={{ opacity: 0, x: reverse ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -20 : 20 }}
            transition={{ duration: 0.7, delay: 0.35 + qIdx * 0.2 }}
          >
            <p className="font-serif italic font-light text-fg text-lg md:text-xl leading-relaxed">
              &ldquo;{q.text}&rdquo;
            </p>
          </motion.blockquote>
        ))}

        {leader.context && (
          <motion.p
            className="text-fg-muted text-sm leading-relaxed border-t border-border-hairline pt-6"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {leader.context}
          </motion.p>
        )}
      </div>
    </article>
  );
}

export function LeadershipTeam() {
  return (
    <section
      aria-label="Leadership team"
      className="relative w-full bg-bg border-t border-border"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>Leadership</span>
          </p>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] tracking-[-0.02em]">
            The people who sign off every project.
          </h2>
          <p className="mt-5 font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed max-w-2xl">
            From group strategy to on-site applicator discipline — three names that own the work and stand behind it.
          </p>
        </div>

        <div className="mt-16 space-y-24 md:space-y-32">
          {LEADERS.map((l, i) => (
            <LeaderCard key={l.name} leader={l} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
