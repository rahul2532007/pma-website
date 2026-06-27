import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="font-display text-2xl">Pride<span className="text-amber">.</span></div>
            <p className="mt-3 text-sm text-warm-4 max-w-sm">
              A global studio building websites and software that move the metric that matters.
            </p>
            <Link to="/book" className="mt-5 inline-flex items-center rounded-full bg-ink text-paper px-4 py-2 text-sm font-medium hover:opacity-90 transition">
              Book a Consultation
            </Link>
          </div>
          <div>
            <div className="section-marker mb-3">Services</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/custom-websites">Custom Websites</Link></li>
              <li><Link to="/services/portfolio-websites">Portfolio</Link></li>
              <li><Link to="/services/landing-pages">Landing Pages</Link></li>
              <li><Link to="/services/ecommerce">E-commerce</Link></li>
              <li><Link to="/services/custom-software">Custom Software</Link></li>
            </ul>
          </div>
          <div>
            <div className="section-marker mb-3">Studio</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/process">Process</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <div className="section-marker mb-3">Contact</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact">Get in touch</Link></li>
              <li><Link to="/book">Book a call</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li className="pt-2 text-warm-4">contact@pridemarketing.co.in</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-rule flex flex-col gap-4 text-xs text-warm-4">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy-policy" activeProps={{ className: "text-ink" }} className="hover:text-ink transition">Privacy Policy</Link>
            <Link to="/terms-and-conditions" activeProps={{ className: "text-ink" }} className="hover:text-ink transition">Terms & Conditions</Link>
            <Link to="/refund-policy" activeProps={{ className: "text-ink" }} className="hover:text-ink transition">Refund Policy</Link>
            <Link to="/disclaimer" activeProps={{ className: "text-ink" }} className="hover:text-ink transition">Disclaimer</Link>
          </nav>
          <div className="flex flex-col md:flex-row justify-between gap-2">
            <div>© {new Date().getFullYear()} Pride Digital. All rights reserved.</div>
            <div>India · United States · United Kingdom · UAE · Canada · France · Singapore</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
