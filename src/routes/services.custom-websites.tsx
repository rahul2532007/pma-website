import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "../components/site/ServiceDetail";

export const Route = createFileRoute("/services/custom-websites")({
  head: () => ({
    meta: [
      { title: "Custom Websites — Pride Digital" },
      { name: "description", content: "Brand-defining websites engineered for conversion." },
      { property: "og:title", content: "Custom Websites — Pride Digital" },
      { property: "og:description", content: "Hand-built sites that move metrics, not just look good." },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/services/custom-websites" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/services/custom-websites" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Custom Websites",
        provider: { "@type": "Organization", name: "Pride Digital", url: "https://pridemarketing.co.in/" },
        url: "https://pride-redesign-1.lovable.app/services/custom-websites",
      }),
    }],
  }),
  component: () => (
    <ServiceDetail
      marker="01" eyebrow="Custom Websites"
      title={<>Brand sites that earn the click.</>}
      lede="Editorial design, hand-coded performance, and an information architecture that mirrors how your buyers actually decide."
      forWhom={[
        "Founders relaunching after product-market fit",
        "Marketing leaders fixing a leaky funnel",
        "Firms whose website hasn't kept up with the practice",
      ]}
      whatYouGet={[
        "Strategy & messaging workshop",
        "Information architecture",
        "Editorial visual system",
        "Hand-coded build (no page builders)",
        "Accessibility AA baseline",
        "Analytics + SEO foundations",
        "CMS your team can actually use",
        "Performance budget enforced",
      ]}
      outcomes={[
        { metric: "+120%", label: "qualified leads, avg." },
        { metric: "<1.2s", label: "LCP on mobile" },
        { metric: "6 wks", label: "typical launch" },
      ]}
    />
  ),
});
