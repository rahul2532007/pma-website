import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({
  number,
  eyebrow,
  title,
  lede,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <div className="grid lg:grid-cols-12 gap-8 mb-14">
      <div className="lg:col-span-4">
        <div className="section-marker">
          {number} — {eyebrow}
        </div>
      </div>
      <div className="lg:col-span-8">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">{title}</h2>
        {lede && <p className="mt-5 text-base md:text-lg text-warm-5 max-w-2xl">{lede}</p>}
      </div>
    </div>
  );
}

export function RuleDivider() {
  return <div className="border-t border-rule" />;
}

export function CTASection({
  heading = "Ready to build something that works?",
  note = "30-minute consultation. No obligation. Real strategy.",
}: {
  heading?: string;
  note?: string;
}) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <div className="section-marker text-warm-3">Next step</div>
          <h2 className="font-display mt-4 text-4xl md:text-6xl lg:text-7xl leading-[1.02]">
            {heading}
          </h2>
          <p className="mt-5 text-warm-3 max-w-xl">{note}</p>
        </div>
        <div className="lg:col-span-4 flex lg:justify-end">
          <Link
            to="/book"
            className="inline-flex items-center rounded-full bg-paper text-ink px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Book a Consultation →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PageHeader({
  marker,
  eyebrow,
  title,
  lede,
}: {
  marker: string;
  eyebrow: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-16 lg:pt-32 lg:pb-24 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <div className="section-marker">
            {marker} — {eyebrow}
          </div>
        </div>
        <div className="lg:col-span-8">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]">{title}</h1>
          {lede && <p className="mt-6 text-lg text-warm-5 max-w-2xl">{lede}</p>}
        </div>
      </div>
    </header>
  );
}
