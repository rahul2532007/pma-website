import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeader, CTASection, Section, RuleDivider } from "../components/site/primitives";

type CaseStudy = {
  client: string; sector: string; metric: string; title: string; lede: string;
  problem: string; approach: string[]; outcome: { metric: string; label: string }[];
};

const CASES: Record<string, CaseStudy> = {
  "sterling-vale": {
    client: "Sterling & Vale", sector: "Legal", metric: "+186% qualified leads",
    title: "A boutique firm becomes the obvious choice.",
    lede: "Repositioned a 14-partner boutique against the magic-circle, and rebuilt the site around the way clients actually shortlist firms.",
    problem: "A respected practice with a website that read like a brochure — slow, generic, and invisible in search.",
    approach: [
      "Discovery with named partners and former clients",
      "Practice-led IA mapped to buyer intent",
      "Editorial visual system, hand-coded build",
      "Schema, Core Web Vitals, and content ops set up",
    ],
    outcome: [
      { metric: "+186%", label: "qualified leads" },
      { metric: "3.4×", label: "search visibility" },
      { metric: "6 wks", label: "to launch" },
    ],
  },
  "northwind-health": {
    client: "Northwind Health", sector: "Healthcare", metric: "−42% booking friction",
    title: "Patient intake, redesigned end-to-end.",
    lede: "A multi-clinic group reduced booking friction by reworking the intake flow and the website behind it.",
    problem: "Patients were dropping out of the booking flow at every step. Staff were re-keying data.",
    approach: [
      "Mapped the full intake journey across web and clinic",
      "Designed a single, accessible booking primitive",
      "Connected to EHR and routing",
      "Rebuilt the site around the new flow",
    ],
    outcome: [
      { metric: "−42%", label: "booking friction" },
      { metric: "+28%", label: "completed intakes" },
      { metric: "9 wks", label: "to launch" },
    ],
  },
  "atelier-goods": {
    client: "Atelier Goods", sector: "E-commerce", metric: "+31% AOV",
    title: "From DTC store to brand world.",
    lede: "Re-platformed and re-storied a category-leading DTC brand. Same products, twice the brand equity.",
    problem: "A product-led brand that looked like every other Shopify store, with AOV plateauing.",
    approach: [
      "Brand-world art direction and PDP system",
      "Bundles, gifting, and a curated home",
      "Headless on Hydrogen for speed",
      "Klaviyo wired to behavior, not blasts",
    ],
    outcome: [
      { metric: "+31%", label: "AOV" },
      { metric: "+22%", label: "repeat rate" },
      { metric: "8 wks", label: "to launch" },
    ],
  },
};

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const c = CASES[params.slug];
    if (!c) throw notFound();
    return { case: c };
  },
  head: ({ params, loaderData }) => ({
    meta: [
      { title: `${loaderData?.case.client ?? "Case Study"} — Pride Digital` },
      { name: "description", content: loaderData?.case.lede ?? "Case study" },
      { property: "og:title", content: `${loaderData?.case.client ?? ""} — Pride Digital` },
      { property: "og:description", content: loaderData?.case.lede ?? "" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `https://pride-redesign-1.lovable.app/work/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `https://pride-redesign-1.lovable.app/work/${params.slug}` }],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <div className="section-marker">404</div>
      <h1 className="font-display text-5xl mt-4">Case study not found.</h1>
    </div>
  ),
  errorComponent: ({ error }) => {
    console.error("[work.$slug] loader error", error);
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl">Couldn't load this case study.</h1>
        <p className="text-warm-5 mt-2 text-sm">An unexpected error occurred. Please try again.</p>
      </div>
    );
  },
  component: CasePage,
});

function CasePage() {
  const { case: c } = Route.useLoaderData() as { case: CaseStudy };
  return (
    <>
      <PageHeader marker={c.sector} eyebrow={c.client} title={c.title} lede={c.lede} />
      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4"><div className="section-marker">01 — Problem</div></div>
          <p className="lg:col-span-8 text-lg text-warm-5">{c.problem}</p>
        </div>
      </Section>
      <RuleDivider />
      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4"><div className="section-marker">02 — Approach</div></div>
          <ul className="lg:col-span-8 space-y-3">
            {c.approach.map(a => <li key={a} className="border-t border-rule pt-3 text-warm-5">{a}</li>)}
          </ul>
        </div>
      </Section>
      <RuleDivider />
      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4"><div className="section-marker">03 — Outcome</div></div>
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
            {c.outcome.map(o => (
              <div key={o.label} className="border border-rule p-6">
                <div className="font-display text-4xl text-amber">{o.metric}</div>
                <div className="mt-2 text-sm text-warm-5">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
