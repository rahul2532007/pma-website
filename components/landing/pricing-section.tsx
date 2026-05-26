"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const checklist = [
  "A plan made exclusively for you",
  "Pricing that makes sense for your goals",
  "Scalable solutions that grow with your business",
];

export function PricingSection() {
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
    <section id="pricing" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`max-w-3xl mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Investment
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Built for Your
            <br />
            <span className="text-muted-foreground">Project</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe every business is unique. We charge on a project basis to keep 
            pricing relevant, fair, and perfectly tailored to your specific goals.
          </p>
        </div>

        {/* Pricing Card */}
        <div
          className={`max-w-2xl transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="border border-foreground/10 p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-display mb-4">
              Get the Best Rate for Your Vision
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Tell us about your project, and we&apos;ll craft a tailored strategy with 
              pricing perfectly matched to your needs.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 mb-10">
              {checklist.map((item, index) => (
                <li
                  key={item}
                  className={`flex items-center gap-4 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="w-6 h-6 flex items-center justify-center border border-foreground/20 bg-foreground text-background">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full"
              asChild
            >
              <Link href="/booking">Book a Strategy Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
