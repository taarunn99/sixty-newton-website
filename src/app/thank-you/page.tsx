import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Thank you",
  description: "Your enquiry has reached the Sixty Newton team.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <section className="grid min-h-[80dvh] place-items-center bg-bg px-6 text-center">
      <div className="max-w-xl">
        <p className="eyebrow text-gold">Received</p>
        <h1 className="font-serif font-extralight tracking-[-0.02em] text-fg mt-6 text-5xl md:text-6xl leading-tight">
          Thank you.
        </h1>
        <p className="mt-6 text-fg-muted text-lg leading-relaxed">
          Your enquiry is with us. A member of the Sixty Newton team will be back
          to you within one business day — usually sooner.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Button asChild>
            <Link href="/">Back home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/portfolio">See the work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
