
## Pride Digital — Website Build Plan

Modern editorial minimalist marketing site matching the brand: confident, precise, restrained. Built in TanStack Start with separate routes per section (SEO + shareability), shared header/footer, and a coherent design system in tokens.

### Visual direction (locked from brief)
- **Palette:** Near-black `#0A0A0B` ink, off-white `#FAFAF8` paper, deep amber/ochre accent (~`#B8651A`), 5-step warm gray scale. No gradients.
- **Type:** General Sans (display) + Inter (body), loaded via `<link>` in `__root.tsx`. Strong size contrast, tight tracking on display.
- **Layout:** 12-col grid, generous whitespace (120–160px section padding), thin 1px rule lines, numbered section markers (01/02/03), small radius (6–10px), no decorative shadows.
- **Motion:** Subtle fade-up on scroll, restrained hover states only.

### Routes (each with unique `head()` meta)
```
/                  Home
/about             Story + named team (Rahul, Atharv, Christy, Umar) + values
/services          Overview grid → detail pages
/services/custom-websites
/services/portfolio-websites
/services/landing-pages
/services/ecommerce
/services/custom-software
/work              Portfolio grid (placeholder case studies)
/work/$slug        Case study template
/industries        Legal, Healthcare, Creators, E-commerce, SaaS
/process           Numbered phases
/pricing           Custom-pricing explainer (no fixed tiers)
/contact           Form + WhatsApp + response-time commitment
/book              Book a consultation — Google Calendar embed
/faq               Common objections per audience
```

### Primary CTA — "Book a Consultation"
- Replaces the generic "Get a Quote" as the lead primary CTA across the site (header, hero, closing CTA band, footer, every service/case-study page bottom).
- Links to `/book`.
- Secondary CTAs ("View Our Work", "Chat on WhatsApp") remain.

### `/book` page
- Editorial header: numbered marker, eyebrow "Book", display headline "Book a 30-minute consultation.", short lede explaining what to expect (agenda, who joins from the team, what to bring).
- Trust strip underneath: response time commitment, "no obligation", timezone-friendly.
- Google Calendar embed using the provided scheduling URL `https://calendar.app.google/FwaJG7BcNc4yoAK46`:
  - Render in an `<iframe>` with `src="https://calendar.app.google/FwaJG7BcNc4yoAK46"`, full-width, min-height ~720px, thin rule border, no shadow.
  - Wrap with a fallback link ("Trouble loading? Open the booking page →") in case the provider blocks iframe embedding for the visitor.
- Sidebar/aside: "What happens next" (3 numbered steps), plus alternative contact (email + WhatsApp).
- Unique `head()` meta + OG.

### Shared components
- `SiteHeader` — wordmark left, nav center-right, "Book a Consultation" CTA right; thin bottom rule. Mobile sheet menu.
- `SiteFooter` — multi-column: nav, services, contact, geographies (IN/US/UK/UAE/CA/FR/SG), socials, fine print, secondary "Book a Consultation" CTA.
- `SectionHeader`, `RuleDivider`, `GeoMarquee`, `StatBlock`, `QuoteBlock`, `CaseStudyCard`, `ServiceCard`, `TeamCard`, `ProcessStep`, `FAQItem`, `CTASection` (closing band → /book).

### Home page composition
1. Hero — left-aligned display headline "Your website should be your best salesperson.", lede, **primary: "Book a Consultation" → /book**, secondary: "View Our Work" → /work. Thin rule + geo marquee underneath.
2. Positioning strip — Precision / Speed / Ownership, separated by rules.
3. Services preview — 5 sharp cards.
4. Selected work — 3 case study tiles with metric chips.
5. Process teaser — 6 numbered steps.
6. Why Pride — editorial two-column.
7. Testimonial — single large pull-quote (only serif accent).
8. Closing CTA band — full-bleed dark, single "Book a Consultation" CTA.

### Design tokens & infra
- Update `src/styles.css` with brand palette in oklch, `--font-display` / `--font-body`, accent tokens (`--accent-amber`, `--rule`, `--ink`, `--paper`).
- Add Fontshare (General Sans) + Google Fonts (Inter) `<link>` tags in `__root.tsx` head.
- Update root meta to Pride Digital title/description/OG.
- Replace `src/routes/index.tsx` placeholder with the real home page.

### Content
Copy adapted from the three brief docs. Portfolio uses 3 plausible placeholder case studies (Legal, SaaS, E-commerce) clearly labeled "Selected work."

### Images
3 desaturated editorial images generated via `imagegen` (standard) stored as Lovable Assets. No handshake stock. Team avatars as monogram tiles.

### Out of scope (this pass)
- Blog/Insights (sitemap stub only).
- Lovable Cloud backend; contact form posts to `/api/public/contact` stub that just logs.
- Auth, dashboards, payments.

### Technical
TanStack Start file-based routes under `src/routes/`. Layout for `/services/*` via `services.tsx` (`<Outlet />`) + `services.index.tsx`; same for `/work`. Every route exports `Route = createFileRoute(...)` with `head()`. The calendar iframe is plain HTML — no SDK, no connector needed.
