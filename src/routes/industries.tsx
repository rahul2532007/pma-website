import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, CTASection } from "../components/site/primitives";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Pride Digital" },
      { name: "description", content: "Sector specialism in legal, healthcare, creators, e-commerce, and SaaS." },
      { property: "og:title", content: "Industries — Pride Digital" },
      { property: "og:description", content: "Where we go deep." },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/industries" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/industries" }],
  }),
  component: IndustriesPage,
});

const items = [
  { n: "01", title: "Legal", body: "Boutique and mid-market firms competing on positioning, not price." },
  { n: "02", title: "Healthcare", body: "Multi-clinic groups, specialists, and digital-health startups." },
  { n: "03", title: "Creators", body: "Directors, writers, and studios with a body of work to defend." },
  { n: "04", title: "E-commerce", body: "DTC and heritage brands past first traction." },
  { n: "05", title: "SaaS", body: "B2B teams whose homepage is the first sales call." },
];

function IndustriesPage() {
  return (
    <>
      <PageHeader marker="00" eyebrow="Industries" title={<>Where we go deep.</>} lede="We refuse work outside these sectors. It keeps the studio sharp and the references real." />
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
          {items.map(s => (
            <div key={s.n} className="bg-paper p-10 min-h-[220px]">
              <div className="section-marker">{s.n}</div>
              <h3 className="font-display text-3xl mt-4">{s.title}</h3>
              <p className="mt-3 text-warm-5 text-sm">{s.body}</p>
            </div>
          ))}
          <div className="bg-ink text-paper p-10 min-h-[220px] flex flex-col justify-between">
            <div className="section-marker !text-paper/60">06</div>
            <div>
              <h3 className="font-display text-3xl mt-4">Your sector?</h3>
              <p className="mt-3 text-paper/70 text-sm">If your work fits the same standard, we'd like to hear about it.</p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
