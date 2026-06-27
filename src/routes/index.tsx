import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader, CTASection, RuleDivider } from "../components/site/primitives";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pride Digital — Engineered for revenue." },
      {
        name: "description",
        content:
          "A global studio engineering custom websites, landing pages, e-commerce, and software that turn traffic into revenue.",
      },
      { property: "og:title", content: "Pride Digital — Engineered for revenue." },
      {
        property: "og:description",
        content:
          "Custom websites and software for ambitious teams in legal, healthcare, e-commerce, SaaS, and the creator economy.",
      },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/" }],
  }),
  component: Home,
});

const services = [
  {
    n: "01",
    title: "Custom Websites",
    body: "Brand-defining sites built to convert, not just to look good.",
    to: "/services/custom-websites",
  },
  {
    n: "02",
    title: "Portfolio Websites",
    body: "Editorial showcases for creators, studios, and operators.",
    to: "/services/portfolio-websites",
  },
  {
    n: "03",
    title: "Landing Pages",
    body: "Single-purpose pages engineered around one decision.",
    to: "/services/landing-pages",
  },
  {
    n: "04",
    title: "E-commerce",
    body: "Storefronts tuned for AOV, repeat purchase, and margin.",
    to: "/services/ecommerce",
  },
  {
    n: "05",
    title: "Custom Software",
    body: "Internal tools and platforms that compound your advantage.",
    to: "/services/custom-software",
  },
];

const work = [
  {
    client: "Sterling & Vale",
    sector: "Legal",
    metric: "+186% qualified leads",
    title: "A boutique firm becomes the obvious choice.",
  },
  {
    client: "Northwind Health",
    sector: "Healthcare",
    metric: "−42% booking friction",
    title: "Patient intake, redesigned end-to-end.",
  },
  {
    client: "Atelier Goods",
    sector: "E-commerce",
    metric: "+31% AOV",
    title: "From DTC store to brand world.",
  },
];

const processSteps = [
  { n: "01", title: "Discover", body: "Audit the business, the buyer, the funnel." },
  { n: "02", title: "Strategy", body: "Positioning, narrative, information architecture." },
  { n: "03", title: "Design", body: "Editorial systems, not template skins." },
  { n: "04", title: "Build", body: "Hand-coded performance, accessible by default." },
  { n: "05", title: "Launch", body: "Analytics, SEO, and QA wired before go-live." },
  { n: "06", title: "Iterate", body: "Measure, refine, compound." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="section-marker">Pride Digital — Est. studio, global</div>
          <h1 className="font-display mt-6 text-5xl md:text-7xl lg:text-[88px] leading-[1.0] max-w-5xl">
            Your website should be your{" "}
            <span className="italic font-serif-display text-amber">best salesperson</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-warm-5">
            We design and engineer websites and software for ambitious teams — built around the
            decisions your buyers actually make.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Book a Consultation <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium hover:bg-warm-1 transition"
            >
              View Our Work
            </Link>
          </div>
        </div>
        <div className="border-t border-rule geo-marquee-mask">
          <div className="py-5">
            <div className="geo-marquee text-xs uppercase tracking-[0.18em] text-warm-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center gap-x-10 pr-10"
                  aria-hidden={i === 1}
                >
                  {[
                    "India",
                    "United States",
                    "United Kingdom",
                    "UAE",
                    "Canada",
                    "France",
                    "Singapore",
                  ].flatMap((c, idx, arr) => [
                    <span key={`${c}-t`}>{c}</span>,
                    idx < arr.length - 1 ? (
                      <span key={`${c}-d`}>·</span>
                    ) : (
                      <span key={`${c}-d`}>·</span>
                    ),
                  ])}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <Section className="!py-20">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-rule">
          {[
            { k: "Precision", v: "Every pixel and every line of copy earns its place." },
            { k: "Speed", v: "Six-week launches without cutting corners." },
            { k: "Ownership", v: "You own the code, the design, the analytics. Everything." },
          ].map((item) => (
            <div key={item.k} className="px-0 md:px-10 py-8 md:py-2 first:pl-0 last:pr-0">
              <div className="section-marker">{item.k}</div>
              <p className="font-display mt-3 text-2xl md:text-3xl leading-snug">{item.v}</p>
            </div>
          ))}
        </div>
      </Section>

      <RuleDivider />

      {/* Services */}
      <Section>
        <SectionHeader
          number="01"
          eyebrow="Services"
          title={
            <>
              Five practices.
              <br />
              One studio.
            </>
          }
          lede="We work in the medium of the modern internet — websites, stores, landing pages, and software — held to the same editorial standard."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
          {services.map((s) => (
            <Link
              key={s.n}
              to={s.to}
              className="group bg-paper p-8 lg:p-10 hover:bg-warm-1 transition flex flex-col justify-between min-h-[260px]"
            >
              <div className="section-marker">{s.n}</div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl mt-10">{s.title}</h3>
                <p className="mt-3 text-warm-5 text-sm">{s.body}</p>
                <div className="mt-6 text-sm inline-flex items-center gap-1 group-hover:text-amber transition">
                  Explore <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>
          ))}
          <Link
            to="/book"
            className="group bg-ink text-paper p-8 lg:p-10 hover:opacity-95 transition flex flex-col justify-between min-h-[260px]"
          >
            <div className="section-marker !text-paper/60">→</div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl mt-10">Not sure where to start?</h3>
              <p className="mt-3 text-paper/70 text-sm">
                Book a 30-minute consultation. We'll map the shortest path to your next launch.
              </p>
              <div className="mt-6 text-sm inline-flex items-center gap-1 text-amber">
                Book a Consultation <ArrowUpRight size={14} />
              </div>
            </div>
          </Link>
        </div>
      </Section>

      <RuleDivider />

      {/* Selected work */}
      <Section>
        <SectionHeader
          number="02"
          eyebrow="Selected work"
          title={
            <>
              Outcomes, not
              <br />
              screenshots.
            </>
          }
        />
        <div className="grid md:grid-cols-3 gap-6">
          {work.map((w) => (
            <article
              key={w.client}
              className="border border-rule p-8 flex flex-col gap-6 hover:bg-warm-1 transition"
            >
              <div className="aspect-[4/3] bg-warm-2 border border-rule" />
              <div>
                <div className="section-marker">{w.sector}</div>
                <h3 className="font-display text-xl mt-3">{w.title}</h3>
                <div className="mt-5 inline-flex items-center rounded-full border border-rule px-3 py-1 text-xs">
                  {w.metric}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <RuleDivider />

      {/* Process */}
      <Section>
        <SectionHeader
          number="03"
          eyebrow="Process"
          title={<>Six phases. No surprises.</>}
          lede="A working method refined across hundreds of launches in legal, healthcare, SaaS, e-commerce, and the creator economy."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
          {processSteps.map((s) => (
            <div key={s.n} className="bg-paper p-8 lg:p-10 min-h-[180px]">
              <div className="section-marker">{s.n}</div>
              <h3 className="font-display text-2xl mt-4">{s.title}</h3>
              <p className="mt-2 text-sm text-warm-5">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <RuleDivider />

      {/* Why Pride */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="section-marker">04 — Why Pride</div>
          </div>
          <div className="lg:col-span-8 space-y-6 text-lg text-warm-5">
            <p className="font-display text-3xl md:text-4xl text-ink leading-snug">
              Agencies sell deliverables. We sell outcomes — and back them with a small senior team
              that actually does the work.
            </p>
            <p>
              No layered account managers. No off-shored design. No template marketplaces with our
              logo on them. The person you brief is the person who builds.
            </p>
            <p>
              We work with founders, marketing leaders, and operators who treat their website as
              critical infrastructure — because it is.
            </p>
          </div>
        </div>
      </Section>

      <RuleDivider />

      {/* Testimonial */}
      <Section>
        <figure className="max-w-4xl">
          <div className="section-marker">05 — In their words</div>
          <blockquote className="font-serif-display mt-6 text-3xl md:text-5xl leading-[1.15]">
            "They rebuilt our site in six weeks and tripled qualified consultations in the first
            quarter. The closest thing to hiring a senior partner without the salary."
          </blockquote>
          <figcaption className="mt-8 text-sm text-warm-4">
            Managing Partner, Sterling &amp; Vale
          </figcaption>
        </figure>
      </Section>

      <CTASection />
    </>
  );
}
