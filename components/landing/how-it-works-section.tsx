"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your business, goals, and target audience to build the right foundation.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description: "Creating a marketing plan tailored specifically for your business growth.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Execution",
    description: "Designing, building, and launching campaigns that deliver real results.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Growth",
    description: "Optimizing and scaling what works to maximize your return on investment.",
    icon: TrendingUp,
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            Our Process
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            How We Work
          </h2>
          <p
            className={`text-xl text-background/60 max-w-2xl transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A proven 4-step process to deliver results for your business.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`text-left p-8 border transition-all duration-500 group ${
                activeStep === index 
                  ? "border-background bg-background/10" 
                  : "border-background/10 hover:border-background/30"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-sm text-background/40">{step.number}</span>
                <div className={`w-10 h-10 flex items-center justify-center border transition-colors duration-300 ${
                  activeStep === index 
                    ? "border-background bg-background text-foreground" 
                    : "border-background/20 group-hover:border-background/40"
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-display mb-3 group-hover:translate-x-1 transition-transform duration-300">
                {step.title}
              </h3>
              <p className="text-background/60 leading-relaxed">
                {step.description}
              </p>
              
              {/* Progress indicator */}
              {activeStep === index && (
                <div className="mt-6 h-px bg-background/20 overflow-hidden">
                  <div 
                    className="h-full bg-background w-0"
                    style={{
                      animation: 'progress 4s linear forwards'
                    }}
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
