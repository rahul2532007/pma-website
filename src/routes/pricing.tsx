import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, CTASection } from "../components/site/primitives";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Pride Digital" },
      { name: "description", content: "Custom-scoped pricing. Honest ranges. No hidden line items." },
      { property: "og:title", content: "Pricing — Pride Digital" },
      { property: "og:description", content: "Custom-scoped, never templated." },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/pricing" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "Landing Page", range: "$600", time: "10 days", body: "One page, one decision. Built for paid traffic." },
  { name: "Custom Website", range: "$1,200", time: "6 weeks", body: "Brand site, hand-coded, fully owned." },
  { name: "E-commerce", range: "$2,400", time: "8 weeks", body: "Shopify or headless, tuned for AOV and LTV." },
  { name: "Custom Software", range: "$4,800", time: "8–16 weeks", body: "Internal tools, portals, bespoke platforms." },
];

function PricingPage() {
  return (
    <>
      <PageHeader marker="00" eyebrow="Pricing" title={<>Honest ranges. No hidden line items.</>} lede="Every engagement is scoped to your goals. These are realistic starting points — not catalog prices." />
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule">
          {tiers.map(t => (
            <div key={t.name} className="bg-paper p-8 flex flex-col gap-4 min-h-[260px]">
              <div className="section-marker">{t.name}</div>
              <div className="font-display text-4xl">{t.range}</div>
              <div className="text-xs text-warm-4 uppercase tracking-widest">{t.time}</div>
              <p className="text-sm text-warm-5 mt-auto">{t.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-warm-5 max-w-2xl">
          Anything outside these brackets — retainers, ongoing growth, multi-region rollouts — gets a custom proposal after our consultation.
        </p>
      </section>
      <CTASection heading="Get a real number." note="Book a call and we'll scope it on the spot." />
    </>
  );
}
