import { cn } from "@/lib/utils";
import type { BlogSection } from "@/content/blog/types";

/**
 * Renders a single blog-post section. Matches the atelier brand —
 * Cormorant serif body, gold accents on callouts, hairline rules between
 * heading scopes.
 */
export function BlogSectionRenderer({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "paragraph":
      return (
        <p className="font-serif font-light text-fg text-lg md:text-xl leading-relaxed">
          {section.body}
        </p>
      );

    case "heading": {
      const level = section.level ?? 2;
      const Tag = level === 3 ? "h3" : "h2";
      return (
        <Tag
          className={cn(
            "font-serif font-extralight text-fg tracking-[-0.02em] leading-[1.04]",
            level === 3
              ? "text-2xl md:text-3xl mt-12"
              : "text-3xl md:text-4xl mt-16 pt-12 border-t border-border-hairline",
          )}
        >
          {section.body}
        </Tag>
      );
    }

    case "list":
      return (
        <ul className="space-y-3 font-serif text-fg text-lg leading-relaxed">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span aria-hidden className="mt-3 inline-block h-px w-4 bg-gold/70 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <aside className="rounded-md border border-gold/40 bg-gold-tint p-6 md:p-8">
          <p className="eyebrow text-gold">{section.eyebrow}</p>
          <p className="mt-4 font-serif text-fg text-lg md:text-xl leading-relaxed">
            {section.body}
          </p>
        </aside>
      );

    case "pullquote":
      return (
        <blockquote className="relative border-l-2 border-gold pl-6 md:pl-8 py-2">
          <p className="font-serif italic font-light text-fg text-2xl md:text-3xl leading-snug">
            &ldquo;{section.body}&rdquo;
          </p>
          {section.attribution && (
            <footer className="mt-4 eyebrow text-gold not-italic">
              — {section.attribution}
            </footer>
          )}
        </blockquote>
      );
  }
}
