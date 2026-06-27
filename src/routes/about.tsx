import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, CTASection, Section, RuleDivider } from "../components/site/primitives";
import rahulImg from "../assets/rahul.jpg.asset.json";
import atharvImg from "../assets/atharv.jpg.asset.json";
import christyImg from "../assets/christy.jpg.asset.json";
import umarImg from "../assets/umar.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pride Digital" },
      {
        name: "description",
        content:
          "A small senior studio of designers and engineers building websites and software that compound.",
      },
      { property: "og:title", content: "About — Pride Digital" },
      { property: "og:description", content: "Meet the team behind Pride Digital." },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/about" }],
  }),
  component: AboutPage,
});

const team = [
  { name: "Rahul", role: "Founder & CEO", photo: rahulImg.url },
  { name: "Atharv", role: "Founder & COO", photo: atharvImg.url },
  { name: "Christy", role: "Social Media Manager", photo: christyImg.url },
  { name: "Umar", role: "Content Producer", photo: umarImg.url },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        marker="00"
        eyebrow="About"
        title={<>A small studio for ambitious operators.</>}
        lede="We started Pride Digital because the agency model is broken. Big teams, small thinking, generic output. We do the opposite."
      />

      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="section-marker">01 — Story</div>
          </div>
          <div className="lg:col-span-8 space-y-5 text-warm-5 text-lg">
            <p className="font-display text-3xl text-ink leading-snug">
              Four people. Seven countries. One standard.
            </p>
            <p>
              Pride Digital is a distributed studio with senior practitioners in India, the US, the
              UK, the UAE, Canada, France, and Singapore. We staff projects with the people who'll
              actually do the work — no handoffs, no juniors learning on your budget.
            </p>
            <p>
              Our clients are founders, marketing leaders, and partners at firms where the website
              is a primary acquisition channel. We're the team they call when the stakes are real.
            </p>
          </div>
        </div>
      </Section>

      <RuleDivider />

      <Section>
        <div className="section-marker">02 — Team</div>
        <h2 className="font-display text-4xl md:text-5xl mt-4">The people on your project.</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((p) => (
            <div key={p.name} className="border border-rule p-6">
              <div className="aspect-square bg-warm-2 border border-rule overflow-hidden">
                <img
                  src={p.photo}
                  alt={`Portrait of ${p.name}, ${p.role} at Pride Digital`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-5 font-display text-xl">{p.name}</div>
              <div className="text-sm text-warm-4">{p.role}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
