import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, CTASection } from "../components/site/primitives";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — Pride Digital" },
      { name: "description", content: "Case studies across legal, healthcare, SaaS, and e-commerce." },
      { property: "og:title", content: "Selected Work — Pride Digital" },
      { property: "og:description", content: "Outcomes, not screenshots." },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/work" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/work" }],
  }),
  component: WorkIndex,
});

const cases = [
  { slug: "sterling-vale", client: "Sterling & Vale", sector: "Legal", metric: "+186% qualified leads", title: "A boutique firm becomes the obvious choice." },
  { slug: "northwind-health", client: "Northwind Health", sector: "Healthcare", metric: "−42% booking friction", title: "Patient intake, redesigned end-to-end." },
  { slug: "atelier-goods", client: "Atelier Goods", sector: "E-commerce", metric: "+31% AOV", title: "From DTC store to brand world." },
];

function WorkIndex() {
  return (
    <>
      <PageHeader marker="00" eyebrow="Selected work" title={<>Outcomes, not screenshots.</>} lede="A small selection from the last 18 months. The full deck is shared on consultation." />
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map(c => (
            <Link key={c.slug} to="/work/$slug" params={{ slug: c.slug }} className="group border border-rule p-6 hover:bg-warm-1 transition">
              <div className="aspect-[4/3] bg-warm-2 border border-rule" />
              <div className="mt-5 section-marker">{c.sector}</div>
              <h3 className="font-display text-xl mt-2">{c.title}</h3>
              <div className="mt-4 inline-flex items-center rounded-full border border-rule px-3 py-1 text-xs">{c.metric}</div>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
