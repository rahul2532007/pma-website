"use client";

import { useState, useEffect, useRef } from "react";

const teamMembers = [
  {
    name: "Rahul Nishad",
    role: "Co-Founder & CEO",
    description: "Technology enthusiast focused on building scalable digital systems.",
    initial: "RN",
  },
  {
    name: "Atharv Pandey",
    role: "Co-Founder & COO",
    description: "Graphic designer and marketing strategist focused on brand growth.",
    initial: "AP",
  },
];

export function DevelopersSection() {
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
    <section id="team" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Our Team
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground">
            The people behind PMA working to help brands grow.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Avatar */}
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center border border-foreground/10 rounded-full group-hover:border-foreground/30 group-hover:bg-foreground/[0.02] transition-all duration-300">
                <span className="font-display text-4xl text-foreground/70 group-hover:text-foreground transition-colors">
                  {member.initial}
                </span>
              </div>
              
              {/* Info */}
              <h3 className="text-2xl font-display mb-2 group-hover:translate-y-[-2px] transition-transform duration-300">
                {member.name}
              </h3>
              <p className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                {member.role}
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
