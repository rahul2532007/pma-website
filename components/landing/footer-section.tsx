"use client";

import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "Website Design", href: "#services" },
    { name: "Social Media", href: "#services" },
    { name: "Brand Identity", href: "#services" },
    { name: "Digital Marketing", href: "#services" },
    { name: "Local Marketing", href: "#services" },
  ],
  Company: [
    { name: "About PMA", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/pride.pma" },
  { name: "WhatsApp", href: "https://wa.me/918349021100" },
  { name: "Email", href: "mailto:contact@pridemarketing.co.in" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-block mb-6">
                <Image 
                  src="/logo.png" 
                  alt="PMA Logo" 
                  width={80} 
                  height={40} 
                />
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Helping businesses grow with modern marketing strategies. A new agency 
                bringing fresh marketing ideas for modern businesses.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Pride Marketing Agency. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Designed with</span>
            <Heart className="w-4 h-4 text-foreground fill-foreground" />
            <span>by PMA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
