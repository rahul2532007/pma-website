import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";

const suggestions = [
  { to: "/services", label: "Services", desc: "Custom websites, landing pages, e-commerce, software." },
  { to: "/work", label: "Selected work", desc: "Case studies from recent engagements." },
  { to: "/pricing", label: "Pricing", desc: "Indicative ranges for every engagement type." },
  { to: "/contact", label: "Contact", desc: "Get in touch with the studio." },
] as const;

function NotFoundComponent() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-20 lg:pt-32 lg:pb-28 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-5">
        <div className="section-marker">404 — Not found</div>
        <h1 className="font-display mt-5 text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
          This page isn't here.
        </h1>
        <p className="mt-6 text-warm-5 max-w-md">
          The link may be broken, the page may have moved, or the URL was
          mistyped. Try one of the routes on the right, or head back to the
          homepage.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="inline-flex items-center rounded-full bg-ink text-paper px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
            Go home
          </Link>
          <Link to="/book" className="inline-flex items-center rounded-full border border-rule px-5 py-2.5 text-sm font-medium hover:bg-ink hover:text-paper transition">
            Book a Consultation
          </Link>
        </div>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <div className="section-marker mb-4">Try one of these</div>
        <ul className="border-t border-rule">
          {suggestions.map((s) => (
            <li key={s.to} className="border-b border-rule">
              <Link to={s.to} className="group flex items-start justify-between gap-6 py-5 hover:opacity-90 transition">
                <div>
                  <div className="font-display text-xl">{s.label}</div>
                  <div className="mt-1 text-sm text-warm-5">{s.desc}</div>
                </div>
                <span aria-hidden className="mt-2 text-warm-4 group-hover:translate-x-1 transition">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:opacity-90"
          >Try again</button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-rule bg-paper px-4 py-2 text-sm font-medium text-ink">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pride Digital — Engineered for revenue." },
      { name: "description", content: "Pride Digital is a global studio building custom websites, landing pages, e-commerce stores, and software for ambitious teams." },
      { name: "author", content: "Pride Digital" },
      { property: "og:site_name", content: "Pride Digital" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/d002e09e-b5a0-4f45-9829-a5c5f46624c4" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/d002e09e-b5a0-4f45-9829-a5c5f46624c4" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif&display=swap" },
      { rel: "stylesheet", href: "https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Pride Digital",
        url: "https://pridemarketing.co.in/",
        email: "contact@pridemarketing.co.in",
        sameAs: [],
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-paper text-ink">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
