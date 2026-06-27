import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "../components/site/ServiceDetail";

export const Route = createFileRoute("/services/portfolio-websites")({
  head: () => ({
    meta: [
      { title: "Portfolio Websites — Pride Digital" },
      { name: "description", content: "Editorial portfolio sites for creators, studios, and operators." },
      { property: "og:title", content: "Portfolio Websites — Pride Digital" },
      { property: "og:description", content: "A showcase that does the talking." },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/services/portfolio-websites" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/services/portfolio-websites" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Portfolio Websites",
        provider: { "@type": "Organization", name: "Pride Digital", url: "https://pridemarketing.co.in/" },
        url: "https://pride-redesign-1.lovable.app/services/portfolio-websites",
      }),
    }],
  }),
  component: () => (
    <ServiceDetail
      marker="02" eyebrow="Portfolio Websites"
      title={<>A showcase that does the talking.</>}
      lede="For directors, designers, architects, and studios who need their work to land — without explanation."
      forWhom={[
        "Independent creators raising rates",
        "Studios moving upmarket",
        "Operators building a personal brand",
      ]}
      whatYouGet={[
        "Curated case-study system",
        "Editorial typography",
        "Image-led layouts",
        "Lightning-fast media pipeline",
        "Case-study CMS",
        "On-page SEO",
        "Press / contact funnels",
        "Domain + hosting setup",
      ]}
      outcomes={[
        { metric: "+2.4×", label: "inbound inquiries" },
        { metric: "+38%", label: "rate accepted" },
        { metric: "3 wks", label: "typical launch" },
      ]}
    />
  ),
});
