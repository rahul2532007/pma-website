"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Instagram, Palette, Target, MapPin } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Design",
    description: "Professional websites designed to convert visitors into customers.",
    icon: Globe,
  },
  {
    number: "02",
    title: "Social Media Management",
    description: "Professional Instagram and Facebook management to grow your brand.",
    icon: Instagram,
  },
  {
    number: "03",
    title: "Brand Identity Design",
    description: "Logo design, brand colors, and visual identity for businesses.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Digital Marketing",
    description: "Online strategies that help businesses reach the right audience.",
    icon: Target,
  },
  {
    number: "05",
    title: "Local Business Marketing",
    description: "Helping coaching institutes, cafes, and local brands grow locally.",
    icon: MapPin,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 py-10 lg:py-14 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0 flex items-center gap-4">
          <span className="font-mono text-sm text-muted-foreground">{service.number}</span>
          <div className="w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
            <service.icon className="w-5 h-5" />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-500">
            {service.title}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Services
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            What We Do
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Comprehensive marketing solutions designed to help your business grow and stand out.
          </p>
        </div>

        {/* Services List */}
        <div>
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
