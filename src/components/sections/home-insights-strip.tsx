import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { getAllPostSummaries } from "@/lib/blog";
import { cn } from "@/lib/utils";

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][m - 1];
  return `${d} ${month} ${y}`;
}

/**
 * Home-page Insights strip — surfaces the 2 latest blog posts inline,
 * editorial-style. Compact: one row of two cards.
 */
export async function HomeInsightsStrip() {
  const posts = (await getAllPostSummaries()).slice(0, 2);
  if (posts.length === 0) return null;

  return (
    <section
      aria-label="Latest insights"
      className="relative w-full bg-bg border-t border-border"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold flex items-center gap-3">
              <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
              <span>From the field</span>
            </p>
            <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] tracking-[-0.02em]">
              Insights from the applicators.
            </h2>
          </div>
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: "outlineFill", size: "md" }), "group self-start md:self-end")}
          >
            All insights
            <ArrowRight size={14} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className="grid gap-3 md:grid-cols-2 md:gap-4">
          {posts.map(p => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block h-full rounded-md border border-border bg-bg-elevated p-6 md:p-8 transition-colors duration-200 hover:border-gold/50"
              >
                <p className="eyebrow text-gold">{formatDate(p.publishedAt)} · {p.readTime}</p>
                <h3 className="font-serif font-light text-2xl md:text-3xl text-fg mt-4 leading-tight tracking-[-0.01em]">
                  {p.title}
                </h3>
                <p className="mt-4 font-serif font-light text-fg-muted text-base leading-relaxed">
                  {p.lede}
                </p>
                <p className="mt-6 inline-flex items-center gap-2 eyebrow text-gold group-hover:text-gold-hover transition-colors">
                  Read insight
                  <ArrowUpRight
                    size={12}
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
