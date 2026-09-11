# Island Odyssey Co.

A Sri Lanka trip-planning site — Next.js 14 (App Router), TypeScript, Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build:

```bash
npm run build
npm start
```

**Important:** this project depends on `sharp` for local image optimization
(it's in `package.json`, so a plain `npm install` is enough). Without it,
Next.js falls back to a WASM image processor that can fail on locally
hosted photos with a `400` error. If you ever see broken images after a
fresh install, run `npm install sharp` and rebuild.

**Do not run `npm audit fix --force`.** It will jump Next.js to a new
major version (15/16) that requires React 19 and breaks this project,
to fix vulnerabilities in build-time tooling that carry no real risk for
a site you build and deploy yourself.

## Brand

- **Logo:** `public/logo-mark.png` (dark green, for light backgrounds) and
  `public/logo-mark-white.png` (white, for dark backgrounds) — both real
  transparent PNGs extracted from your icon artwork. `components/Mark.tsx`
  picks between them via its `light` prop. Favicon (`app/icon.png`) and
  the social preview image (`public/og-image.jpg`) were generated from
  the same mark.
- **Colors** (`tailwind.config.ts`): `primary` (#1E3A2B, Tea Canopy Green
  — nav, footer, buttons), `green1` (#3B604D, Misty Emerald — accent
  text/CTAs), `gold` (#D4A359, Earthy Ochre — kickers/accents on dark
  backgrounds), `cream` (#F7F5EE, Parchment White — light section
  backgrounds), `ink` (#1A1A1A, Charcoal Slate — body text color, not a
  background), `muted` (#5a564c — secondary/muted body text). All text
  color pairings were checked against WCAG AA contrast.

## Site structure

This is a real multi-page site, not a single scrolling page:

- `/` — home (hero + about)
- `/destinations` — interactive map of the five regions
- `/tours` — filterable tour packages
- `/reviews` — testimonials
- `/blog` and `/blog/[slug]` — journal listing + 3 real articles
- `/privacy`, `/terms` — legal pages
- custom 404 (`app/not-found.tsx`)

Navbar, Footer, the newsletter block, the WhatsApp button, and the
itinerary modal live in `app/layout.tsx` so they appear on every page
automatically. `components/PageBanner.tsx` and `components/PageHeader.tsx`
exist purely to give light-background pages enough clearance under the
fixed nav — they're not part of the nav itself.

## What's in each folder

- `app/` — routes, layout, global styles, sitemap.ts, robots.ts
- `components/` — all UI pieces (see comments in each file)
- `lib/data.ts` — all site copy: destinations, tours, testimonials, blog
  posts (with full article bodies), alt text. Edit this file to change
  wording, prices, or add destinations without touching components.
- `lib/siteConfig.ts` — site name/URL/description and the analytics ID,
  all read from environment variables (see `.env.example`)
- `public/images/` — your real destination photos, pre-compressed
  (full + thumbnail variants); Next/Image + `sharp` further optimize and
  responsive-size them at request time

## Production checklist covered here

- **Security:** no secrets in the codebase; `.env.example` documents the
  only configurable values; `middleware.ts` forces HTTPS in production;
  `next.config.mjs` sets HSTS, `X-Frame-Options`, `X-Content-Type-Options`,
  and a restrictive `Permissions-Policy`
- **Privacy:** real Privacy Policy and Terms pages; a cookie-consent
  banner (`components/CookieConsent.tsx`) gates analytics until accepted
- **SEO:** per-page titles/descriptions, Open Graph + Twitter card images,
  canonical URLs, `sitemap.ts`, `robots.ts`, a real favicon + apple icon
- **Accessibility:** every image has real (or deliberately empty,
  decorative) alt text; text colors were checked against WCAG AA contrast
  ratios and fixed where they failed (see `muted` and `green1` usage
  instead of low-opacity black or gold on light backgrounds)
- **Forms:** both forms (`ItineraryModal`, `Newsletter`) have a honeypot
  field plus a time-trap against bots, and real validation with visible
  error messages
- **404 handling:** custom not-found page with links back into the site
- **Performance:** photos are pre-resized/compressed, then re-optimized
  and responsively served by `next/image`; below-the-fold content is
  lazy-loaded

## Still needs you

- **Analytics:** set `NEXT_PUBLIC_GA_ID` in your hosting provider's
  environment variables to turn on Google Analytics. Leave it blank to
  keep analytics off entirely.
- **Forms:** `ItineraryModal` and `Newsletter` are front-end only — wire
  their `handleSubmit` functions to your email/CRM provider.
- **WhatsApp number, phone, email, address:** update the placeholders in
  `components/WhatsAppButton.tsx` and `components/Footer.tsx`.
- **Social links:** the footer's social icons still point to `#` —
  add your real profile URLs there.
- **Site URL:** set `NEXT_PUBLIC_SITE_URL` to your real production domain
  once you have one (used by the sitemap and canonical/OG tags).
