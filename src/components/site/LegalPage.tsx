import type { ReactNode } from "react";
import { PageHeader } from "./primitives";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

export function LegalPage({
  marker,
  eyebrow,
  title,
  lede,
  updated,
  sections,
}: {
  marker: string;
  eyebrow: string;
  title: string;
  lede?: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader marker={marker} eyebrow={eyebrow} title={title} lede={lede} />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <div className="section-marker mb-3">Last updated</div>
            <div className="text-sm text-warm-5 mb-8">{updated}</div>
            <div className="section-marker mb-4">On this page</div>
            <nav aria-label="Table of contents">
              <ol className="space-y-2 text-sm">
                {sections.map((s, i) => (
                  <li key={s.id} className="flex gap-3">
                    <span className="text-warm-4 tabular-nums w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a href={`#${s.id}`} className="text-warm-5 hover:text-ink transition">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </aside>
        <main className="lg:col-span-8 max-w-2xl">
          <div className="space-y-16">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <div className="section-marker mb-3">
                  {String(i + 1).padStart(2, "0")} — Section
                </div>
                <h2 className="font-display text-3xl md:text-4xl leading-tight mb-5">{s.title}</h2>
                <div className="prose-legal text-warm-5 leading-relaxed space-y-4 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-ink [&_h3]:font-display [&_h3]:text-ink [&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-ink">
                  {s.body}
                </div>
                {i < sections.length - 1 && <div className="mt-16 border-t border-rule" />}
              </section>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export function ContactBlock() {
  return (
    <address className="not-italic text-warm-5">
      <strong className="text-ink">Pride Digital</strong>
      <br />
      New Police Colony, Civil Lines Rd,
      <br />
      South Civil Lines, Jabalpur,
      <br />
      Madhya Pradesh, India
      <br />
      <br />
      Phone: <a href="tel:+918349021100">+91 8349021100</a>
      <br />
      Email: <a href="mailto:contact@pridemarketing.co.in">contact@pridemarketing.co.in</a>
      <br />
      Web: <a href="https://pridemarketing.co.in">pridemarketing.co.in</a>
    </address>
  );
}
