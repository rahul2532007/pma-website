import { PageHeader, CTASection, RuleDivider, Section } from "./primitives";

export interface ServiceDetailProps {
  marker: string;
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  forWhom: string[];
  whatYouGet: string[];
  outcomes: { metric: string; label: string }[];
}

export function ServiceDetail(p: ServiceDetailProps) {
  return (
    <>
      <PageHeader marker={p.marker} eyebrow={p.eyebrow} title={p.title} lede={p.lede} />
      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="section-marker">01 — Built for</h2>
          </div>
          <ul className="lg:col-span-8 space-y-3 text-lg">
            {p.forWhom.map((x) => (
              <li key={x} className="border-t border-rule pt-3 text-warm-5">
                {x}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <RuleDivider />
      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="section-marker">02 — What you get</h2>
          </div>
          <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-rule border border-rule">
            {p.whatYouGet.map((x) => (
              <li key={x} className="bg-paper p-6 text-sm">
                {x}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <RuleDivider />
      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="section-marker">03 — Typical outcomes</h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
            {p.outcomes.map((o) => (
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
