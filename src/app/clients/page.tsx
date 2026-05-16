import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, StubBody } from "@/components/sections/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Clients",
  description:
    "Consultants, developers, hospitality groups and residential clients who have trusted Sixty Newton.",
  path: "/clients",
});

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="In good company"
        title="Clients"
        subtitle="The consultants, developers and operators we build with."
      />
      <StubBody>Client roster and testimonials coming online.</StubBody>
    </>
  );
}
