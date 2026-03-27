/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
import Authority from "./components/Authority";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import { CTA, Footer } from "./components/Sections";

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface selection:bg-primary selection:text-surface">
      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 grain-overlay z-[100]" />
      
      <Navbar />
      
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <CaseStudies />
        <Process />
        <Authority />
        <Team />
        <Testimonials />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}
