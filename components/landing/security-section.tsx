"use client";

import { useEffect, useState, useRef } from "react";
import { Sparkles, DollarSign, Palette, HeartHandshake } from "lucide-react";

const whyPmaCards = [
  {
    icon: Sparkles,
    title: "Fresh & Modern Strategies",
    description: "We bring the latest marketing strategies and trends for modern businesses.",
  },
  {
    icon: DollarSign,
    title: "Affordable Solutions",
    description: "Professional marketing at prices that make sense for small businesses.",
  },
  {
    icon: Palette,
    title: "Creative Expertise",
    description: "Creative branding and design expertise that makes your business stand out.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Dedicated support for every client — we grow when you grow.",
  },
];

export function SecuritySection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Why PMA
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            Why Choose PMA
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {whyPmaCards.map((card, index) => (
            <div
              key={card.title}
              className={`group p-8 lg:p-10 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <card.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-display mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
