import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, CTASection } from "../components/site/primitives";

const CAL_URL = "https://calendar.app.google/FwaJG7BcNc4yoAK46";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Pride Digital" },
      {
        name: "description",
        content:
          "Book a 30-minute strategy call with Pride Digital. Pick a time that works — we'll come prepared.",
      },
      { property: "og:title", content: "Book a Consultation — Pride Digital" },
      { property: "og:description", content: "30 minutes. No obligation. Real strategy." },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/book" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/book" }],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <>
      <PageHeader
        marker="00"
        eyebrow="Book"
        title={
          <>
            Book a 30-minute
            <br />
            consultation.
          </>
        }
        lede="Pick a time that works for you. We'll come prepared with notes on your site, your market, and where the biggest leverage lives."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-4 space-y-10">
            <div>
              <div className="section-marker mb-4">What happens next</div>
              <ol className="space-y-5">
                {[
                  [
                    "01",
                    "You pick a slot",
                    "Choose any time on the calendar. You'll get a confirmation by email.",
                  ],
                  [
                    "02",
                    "We do our homework",
                    "Before the call we review your site, traffic, and competitors.",
                  ],
                  [
                    "03",
                    "30 minutes, on the record",
                    "Honest takes, concrete next steps. No pitch deck.",
                  ],
                ].map(([n, t, b]) => (
                  <li key={n} className="border-t border-rule pt-4">
                    <div className="section-marker">{n}</div>
                    <div className="font-display text-lg mt-1">{t}</div>
                    <p className="text-sm text-warm-5 mt-1">{b}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-rule pt-6">
              <div className="section-marker mb-3">Prefer to write?</div>
              <ul className="space-y-2 text-sm">
                <li>
                  Email:{" "}
                  <a
                    className="underline underline-offset-4"
                    href="mailto:contact@pridemarketing.co.in"
                  >
                    contact@pridemarketing.co.in
                  </a>
                </li>
                <li>
                  WhatsApp:{" "}
                  <a
                    className="underline underline-offset-4"
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Message us
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="border border-rule bg-paper">
              <div className="flex items-center justify-between px-5 py-3 border-b border-rule">
                <div className="section-marker">Live calendar</div>
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs underline underline-offset-4"
                >
                  Open in new tab ↗
                </a>
              </div>
              <iframe
                src={CAL_URL}
                title="Book a consultation with Pride Digital"
                className="w-full"
                style={{ height: "780px", border: "0" }}
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-xs text-warm-4">
              Trouble loading the calendar?{" "}
              <a
                href={CAL_URL}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                Open the booking page directly →
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a project brief already?"
        note="Send it over — we'll review before the call."
      />
    </>
  );
}
