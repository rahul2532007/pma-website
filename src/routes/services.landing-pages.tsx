import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "../components/site/ServiceDetail";

export const Route = createFileRoute("/services/landing-pages")({
  head: () => ({
    meta: [
      { title: "Landing Pages — Pride Digital" },
      { name: "description", content: "Single-purpose pages engineered around one decision." },
      { property: "og:title", content: "Landing Pages — Pride Digital" },
      { property: "og:description", content: "Built around one decision." },
      {
        property: "og:url",
        content: "https://pride-redesign-1.lovable.app/services/landing-pages",
      },
    ],
    links: [
      { rel: "canonical", href: "https://pride-redesign-1.lovable.app/services/landing-pages" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Landing Pages",
          provider: {
            "@type": "Organization",
            name: "Pride Digital",
            url: "https://pridemarketing.co.in/",
          },
          url: "https://pride-redesign-1.lovable.app/services/landing-pages",
        }),
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      marker="03"
      eyebrow="Landing Pages"
      title={<>One page. One decision.</>}
      lede="Performance-marketing pages built around a single conversion — no global navigation, no distractions, no filler."
      forWhom={[
        "Performance teams running paid traffic",
        "Product launches and campaigns",
        "Webinars, downloads, and waitlists",
      ]}
      whatYouGet={[
        "Conversion strategy",
        "Copywriting (or copy editing)",
        "A/B-test ready build",
        "Forms + CRM integration",
        "Pixel + event tracking",
        "Speed optimization",
        "Mobile-first layout",
        "Variants for ad sets",
      ]}
      outcomes={[
        { metric: "+62%", label: "conversion rate, avg." },
        { metric: "−35%", label: "CAC" },
        { metric: "10 days", label: "typical launch" },
      ]}
    />
  ),
});
