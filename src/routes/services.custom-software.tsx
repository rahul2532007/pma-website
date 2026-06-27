import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "../components/site/ServiceDetail";

export const Route = createFileRoute("/services/custom-software")({
  head: () => ({
    meta: [
      { title: "Custom Software — Pride Digital" },
      { name: "description", content: "Internal tools and platforms that compound your advantage." },
      { property: "og:title", content: "Custom Software — Pride Digital" },
      { property: "og:description", content: "Software where templates won't do." },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/services/custom-software" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/services/custom-software" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Custom Software",
        provider: { "@type": "Organization", name: "Pride Digital", url: "https://pridemarketing.co.in/" },
        url: "https://pride-redesign-1.lovable.app/services/custom-software",
      }),
    }],
  }),
  component: () => (
    <ServiceDetail
      marker="05" eyebrow="Custom Software"
      title={<>Software where templates won't do.</>}
      lede="Internal tools, portals, dashboards, and bespoke platforms — designed with the same care as the marketing site."
      forWhom={[
        "Ops teams drowning in spreadsheets",
        "Founders piloting a new product",
        "Firms productizing a service",
      ]}
      whatYouGet={[
        "Product discovery",
        "Type-safe TanStack stack",
        "Auth + roles",
        "Postgres data model",
        "Admin tooling",
        "Integrations (Stripe, etc.)",
        "Observability + analytics",
        "Documentation",
      ]}
      outcomes={[
        { metric: "10×", label: "ops throughput" },
        { metric: "Days", label: "to first deploy" },
        { metric: "0", label: "vendor lock-in" },
      ]}
    />
  ),
});
