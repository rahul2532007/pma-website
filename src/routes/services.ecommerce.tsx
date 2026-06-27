import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "../components/site/ServiceDetail";

export const Route = createFileRoute("/services/ecommerce")({
  head: () => ({
    meta: [
      { title: "E-commerce — Pride Digital" },
      { name: "description", content: "Storefronts tuned for AOV, repeat purchase, and margin." },
      { property: "og:title", content: "E-commerce — Pride Digital" },
      { property: "og:description", content: "Stores that compound." },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/services/ecommerce" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/services/ecommerce" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "E-commerce",
          provider: {
            "@type": "Organization",
            name: "Pride Digital",
            url: "https://pridemarketing.co.in/",
          },
          url: "https://pride-redesign-1.lovable.app/services/ecommerce",
        }),
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      marker="04"
      eyebrow="E-commerce"
      title={<>Stores that compound.</>}
      lede="From Shopify to headless — built for AOV, LTV, and the brand world that justifies the price."
      forWhom={[
        "DTC brands past $1M ARR",
        "Heritage brands going online",
        "Founders relaunching a store",
      ]}
      whatYouGet={[
        "Storefront design system",
        "PDP / PLP optimization",
        "Bundles, upsells, gifting",
        "Checkout tuning",
        "Klaviyo + reviews",
        "Subscription wiring",
        "Headless option (Hydrogen / Next)",
        "Analytics + cohorting",
      ]}
      outcomes={[
        { metric: "+31%", label: "AOV" },
        { metric: "+22%", label: "repeat rate" },
        { metric: "8 wks", label: "typical launch" },
      ]}
    />
  ),
});
