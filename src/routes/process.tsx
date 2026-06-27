import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, CTASection } from "../components/site/primitives";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Pride Digital" },
      { name: "description", content: "A six-phase method that ships in weeks, not quarters." },
      { property: "og:title", content: "Process — Pride Digital" },
      { property: "og:description", content: "Six phases. No surprises." },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/process" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/process" }],
  }),
  component: ProcessPage,
});

const phases = [
  { n: "01", title: "Discover", body: "We audit your business, your buyer, and the funnel as it exists today. No assumptions." },
  { n: "02", title: "Strategy", body: "Positioning, narrative, and information architecture — the load-bearing decisions." },
  { n: "03", title: "Design", body: "Editorial systems with named decisions, not Figma mood boards." },
  { n: "04", title: "Build", body: "Hand-coded, accessible by default, with a performance budget enforced from day one." },
  { n: "05", title: "Launch", body: "Analytics, SEO, redirects, and QA wired before the cutover. No surprises." },
  { n: "06", title: "Iterate", body: "Measurement-led changes for the first 90 days. Then a roadmap you control." },
];

function ProcessPage() {
  return (
    <>
      <PageHeader marker="00" eyebrow="Process" title={<>Six phases. No surprises.</>} lede="The same method whether the deliverable is a landing page or a platform — scoped to the stakes." />
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <ol className="border-t border-rule">
          {phases.map(p => (
            <li key={p.n} className="grid lg:grid-cols-12 gap-8 border-b border-rule py-12">
              <div className="lg:col-span-3 section-marker">{p.n}</div>
              <h3 className="lg:col-span-3 font-display text-3xl">{p.title}</h3>
              <p className="lg:col-span-6 text-warm-5 text-lg">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <CTASection />
    </>
  );
}
