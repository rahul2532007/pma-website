"use client";

import { useEffect, useState, useRef } from "react";
import { Lightbulb, Palette, DollarSign } from "lucide-react";

const whyUsCards = [
  {
    icon: Lightbulb,
    title: "Strategy Driven Marketing",
    description: "Every campaign is backed by data and market research to ensure maximum results.",
  },
  {
    icon: Palette,
    title: "Creative Brand Design",
    description: "Stand out from competitors with unique visual identity and memorable branding.",
  },
  {
    icon: DollarSign,
    title: "Affordable Solutions",
    description: "Professional marketing services at prices that make sense for growing businesses.",
  },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Why Us
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            Focused on Results,
            <br />
            <span className="text-muted-foreground">Creativity, and Growth</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {whyUsCards.map((card, index) => (
            <div
              key={card.title}
              className={`group p-8 lg:p-10 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 flex items-center justify-center border border-foreground/10 mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl lg:text-2xl font-display mb-4 group-hover:translate-x-1 transition-transform duration-300">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
