import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur border-b border-rule">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          Pride<span className="text-amber">.</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-warm-5 hover:text-ink transition"
              activeProps={{ className: "text-ink" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/book"
            className="hidden sm:inline-flex items-center rounded-full bg-ink text-paper px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Book a Consultation
          </Link>
          <button className="lg:hidden p-2" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-rule bg-paper">
          <div className="px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm py-1" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink text-paper px-4 py-2 text-sm font-medium"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
