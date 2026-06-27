import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, CTASection } from "../components/site/primitives";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Pride Digital" },
      { name: "description", content: "Custom websites, portfolio sites, landing pages, e-commerce, and custom software." },
      { property: "og:title", content: "Services — Pride Digital" },
      { property: "og:description", content: "Five practices. One studio." },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/services" }],
  }),
  component: ServicesIndex,
});

const services = [
  { n: "01", title: "Custom Websites", body: "Brand-defining sites built to convert.", to: "/services/custom-websites" as const },
  { n: "02", title: "Portfolio Websites", body: "Editorial showcases for creators and studios.", to: "/services/portfolio-websites" as const },
  { n: "03", title: "Landing Pages", body: "Single-purpose pages engineered around one decision.", to: "/services/landing-pages" as const },
  { n: "04", title: "E-commerce", body: "Stores tuned for AOV, repeat purchase, and margin.", to: "/services/ecommerce" as const },
  { n: "05", title: "Custom Software", body: "Internal tools and platforms that compound advantage.", to: "/services/custom-software" as const },
];

function ServicesIndex() {
  return (
    <>
      <PageHeader marker="00" eyebrow="Services" title={<>Five practices. One studio.</>} lede="Held to the same editorial standard, whether the deliverable is a homepage or a platform." />
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule">
          {services.map(s => (
            <Link key={s.n} to={s.to} className="group bg-paper p-10 hover:bg-warm-1 transition min-h-[260px] flex flex-col justify-between">
              <div className="section-marker">{s.n}</div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-3 text-warm-5">{s.body}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm group-hover:text-amber transition">Explore <ArrowUpRight size={14} /></div>
              </div>
            </Link>
          ))}
          <Link to="/book" className="group bg-ink text-paper p-10 hover:opacity-95 transition min-h-[260px] flex flex-col justify-between">
            <div className="section-marker !text-paper/60">06</div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl">Not sure which fits?</h3>
              <p className="mt-3 text-paper/70">Tell us the goal — we'll point you at the right practice.</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm text-amber">Book a Consultation <ArrowUpRight size={14} /></div>
            </div>
          </Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
