"use client";

import { useEffect, useState, useRef } from "react";
import { Target, Rocket } from "lucide-react";

const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Making professional marketing accessible to every business, regardless of size or budget.",
  },
  {
    icon: Rocket,
    title: "Our Vision",
    description: "To become the go-to marketing partner for small and local businesses across India.",
  },
];

export function MetricsSection() {
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
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 border-y border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            About Us
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            About Pride
            <br />
            <span className="text-muted-foreground">Marketing Agency</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: About Text */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                PMA (Pride Marketing Agency) is a marketing startup founded by Rahul Nishad and 
                Atharv Pandey with a mission to help small businesses grow through modern marketing 
                strategies, strong branding, and digital presence.
              </p>
              <p>
                We combine technology, design, and marketing thinking to help businesses attract 
                more customers and build strong brands. A new agency bringing fresh marketing ideas 
                for modern businesses.
              </p>
              <p className="text-foreground font-medium">
                Our goal is to make professional marketing accessible to businesses of all sizes.
              </p>
            </div>
          </div>

          {/* Right: Mission & Vision Cards */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {missionVision.map((item, index) => (
              <div
                key={item.title}
                className={`p-8 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
