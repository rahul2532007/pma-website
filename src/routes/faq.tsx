import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, CTASection } from "../components/site/primitives";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Landing pages in ~10 days, custom websites in ~6 weeks, e-commerce in ~8 weeks, software in 8–16 weeks. We commit to a date in week one.",
  },
  {
    q: "Do we own the work?",
    a: "Yes — code, design, content, accounts. We hand over the keys and stay on retainer only if you want us to.",
  },
  {
    q: "Where is the team based?",
    a: "Distributed across India, the US, the UK, the UAE, Canada, France, and Singapore. We staff to your time zone where it matters.",
  },
  {
    q: "Do you do retainers?",
    a: "Yes. After launch we offer growth retainers for analytics-led iteration, content ops, and ongoing engineering.",
  },
  {
    q: "Will you work with our brand guidelines?",
    a: "Always, when they exist. When they're thin, we extend them — and document what we add.",
  },
  {
    q: "Why don't you publish fixed prices?",
    a: "Because identical scopes rarely have identical stakes. We publish honest ranges on the pricing page and quote the real number after a call.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Pride Digital" },
      {
        name: "description",
        content: "Common questions about timelines, pricing, ownership, and process.",
      },
      { property: "og:title", content: "FAQ — Pride Digital" },
      { property: "og:description", content: "Common questions." },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/faq" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHeader
        marker="00"
        eyebrow="FAQ"
        title={<>Questions, answered.</>}
        lede="If the answer you need isn't here, ask us on the consultation."
      />
      <section className="mx-auto max-w-4xl px-6 lg:px-10 py-16">
        <ul className="border-t border-rule">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-rule">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl md:text-2xl">{f.q}</span>
                  <span className="mt-2 text-warm-4 shrink-0">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {isOpen && <p className="pb-6 text-warm-5 max-w-2xl">{f.a}</p>}
              </li>
            );
          })}
        </ul>
      </section>
      <CTASection />
    </>
  );
}
