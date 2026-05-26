"use client";

import { useEffect, useState, useRef } from "react";

const services = [
  "Branding",
  "Web Design",
  "Social Media",
  "Digital Marketing",
  "Content Creation",
  "Brand Strategy",
  "Local SEO",
];

export function IntegrationsSection() {
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
    <section ref={sectionRef} className="relative py-12 lg:py-16 overflow-hidden border-y border-foreground/10">
      {/* Full-width marquees */}
      <div className="w-full">
        <div className="flex gap-8 marquee">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-8 shrink-0 items-center">
              {services.map((service) => (
                <div
                  key={`${service}-${setIndex}`}
                  className="shrink-0 flex items-center gap-8"
                >
                  <span className="text-2xl lg:text-3xl font-display text-foreground/70 whitespace-nowrap">
                    {service}
                  </span>
                  <span className="text-foreground/30">·</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
