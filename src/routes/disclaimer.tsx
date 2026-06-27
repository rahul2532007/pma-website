import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, ContactBlock } from "../components/site/LegalPage";

const UPDATED = "27 June 2026";
const URL = "https://pride-redesign-1.lovable.app/disclaimer";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Pride Digital" },
      {
        name: "description",
        content:
          "Disclaimers covering performance, marketing outcomes, SEO, third-party services, and external links for Pride Digital.",
      },
      { property: "og:title", content: "Disclaimer — Pride Digital" },
      { property: "og:description", content: "What our services do and don't guarantee." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Disclaimer — Pride Digital" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <LegalPage
      marker="00"
      eyebrow="Legal"
      title="Disclaimer"
      lede="What our services can reasonably be expected to deliver — and what is outside our control."
      updated={UPDATED}
      sections={[
        {
          id: "general",
          title: "General Information",
          body: (
            <p>
              The information on this website and in materials produced by Pride Digital is provided
              in good faith and for general informational purposes only. While we take care to keep
              content accurate and up-to-date, we make no representations or warranties of any kind,
              express or implied, regarding completeness, accuracy, reliability, or suitability for
              any particular purpose.
            </p>
          ),
        },
        {
          id: "no-guarantees",
          title: "No Guarantees",
          body: (
            <p>
              Engagement of Pride Digital does not constitute a guarantee of specific business,
              commercial, or technical outcomes. Outcomes depend on many factors beyond our control,
              including market conditions, your team's execution, and the behaviour of third
              parties.
            </p>
          ),
        },
        {
          id: "marketing",
          title: "Marketing Results Disclaimer",
          body: (
            <p>
              Marketing, growth, and conversion outcomes vary based on industry, audience, offer,
              pricing, brand maturity, ad spend, seasonality, and competitive dynamics. Any
              projections, case studies, or examples shown represent specific past results and are
              not a promise of comparable results for any future engagement.
            </p>
          ),
        },
        {
          id: "seo",
          title: "SEO Disclaimer",
          body: (
            <p>
              Search engine rankings depend on algorithms operated by third parties (Google, Bing,
              and others) that change frequently and without notice. Pride Digital does not and
              cannot guarantee specific keyword rankings, search traffic volumes, or featured
              placements. We follow current best practices and document the changes we make.
            </p>
          ),
        },
        {
          id: "performance",
          title: "Website Performance Disclaimer",
          body: (
            <p>
              Website performance metrics such as load time, uptime, and Core Web Vitals depend on
              the chosen hosting provider, the visitor's device and network, browser version,
              third-party scripts, content uploaded after launch, and ongoing maintenance.
              Benchmarks measured at delivery may shift over time as these factors change.
            </p>
          ),
        },
        {
          id: "third-party",
          title: "Third-party Services",
          body: (
            <p>
              We integrate reputable third-party platforms and services as part of our work (for
              example payment gateways, CMS platforms, analytics, email providers, AI services).
              Pride Digital is not responsible for outages, deprecations, breaking changes, pricing
              changes, or policy changes made by these providers.
            </p>
          ),
        },
        {
          id: "external-links",
          title: "External Links",
          body: (
            <p>
              Our website may contain links to external websites operated by third parties. We
              provide these links for convenience and do not endorse or assume responsibility for
              the content, privacy practices, or operation of those websites.
            </p>
          ),
        },
        {
          id: "technology",
          title: "Technology Limitations",
          body: (
            <p>
              All software has limitations, edge cases, and known issues. While we engineer with
              care, deliverables may behave differently across browsers, operating systems, devices,
              screen readers, and network conditions. We address material defects under the support
              terms of the relevant engagement.
            </p>
          ),
        },
        {
          id: "no-legal",
          title: "No Legal Advice",
          body: (
            <p>
              Content produced or shared by Pride Digital, including this website, does not
              constitute legal advice. For matters affecting your legal rights or obligations,
              please consult a qualified lawyer in your jurisdiction.
            </p>
          ),
        },
        {
          id: "no-financial",
          title: "No Financial Advice",
          body: (
            <p>
              Nothing on this website should be construed as financial, investment, accounting, or
              tax advice. Consult an appropriately qualified professional before making financial
              decisions.
            </p>
          ),
        },
        {
          id: "client-responsibility",
          title: "Client Responsibility",
          body: (
            <p>
              Clients are responsible for the lawfulness, accuracy, and licensing of content they
              supply; for maintaining backups and credentials after delivery; and for the ongoing
              operation of any third-party services they choose to subscribe to.
            </p>
          ),
        },
        {
          id: "errors",
          title: "Errors & Omissions",
          body: (
            <p>
              Despite our best efforts, this website may contain typographical errors or
              inaccuracies and may not be complete or current. We reserve the right to correct any
              errors or omissions and to change or update information at any time without prior
              notice.
            </p>
          ),
        },
        {
          id: "updates",
          title: "Updates",
          body: (
            <p>
              This Disclaimer may be updated periodically to reflect changes in our services,
              technology, or applicable law. The current version is identified by the "Last updated"
              date at the top of this page.
            </p>
          ),
        },
        {
          id: "contact",
          title: "Contact Information",
          body: (
            <>
              <p>For questions about this Disclaimer, contact:</p>
              <ContactBlock />
            </>
          ),
        },
      ]}
    />
  );
}
