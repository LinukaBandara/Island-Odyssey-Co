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

**Do not run `npm audit fix --force`.** It may jump Next.js to a new major
version that requires a matching React version and can introduce unrelated
breaking changes. Review dependency advisories before upgrading.

## Brand

- **Logo:** `public/logo-mark.png` and `public/logo-mark-white.png` — transparent PNG variants used by `components/Mark.tsx`.
- **Colors:** defined in `tailwind.config.ts` for the Island Odyssey brand.

## Site structure

This is a real multi-page site, not a single scrolling page:

- `/` — home (hero + about)
- `/destinations` — interactive map of the five regions
- `/tours` — filterable tour packages
- `/reviews` — testimonials
- `/blog` and `/blog/[slug]` — journal listing + articles
- `/privacy`, `/terms` — legal pages
- custom 404 (`app/not-found.tsx`)

Navbar, Footer, the newsletter block, the WhatsApp button, and the itinerary modal live in `app/layout.tsx` so they appear on every page automatically.

## What's in each folder

- `app/` — routes, layout, global styles, sitemap.ts, robots.ts
- `components/` — all UI pieces
- `lib/data.ts` — destinations, tours, testimonials, blog posts, and alt text
- `lib/siteConfig.ts` — site name, URL, description, contact details, social links, and analytics configuration
- `public/images/` — destination photos served through `next/image`

## Production checklist

- **Security:** no application secrets are stored in the repository; `.env.example` documents public runtime configuration. `middleware.ts` forces HTTPS in production and `next.config.mjs` sets security headers.
- **Privacy:** Privacy Policy and Terms pages exist; analytics is gated by cookie consent.
- **SEO:** per-page metadata, Open Graph/Twitter cards, canonical URLs, `sitemap.ts`, and `robots.ts` are configured from `NEXT_PUBLIC_SITE_URL`.
- **Accessibility:** images include meaningful or decorative alt text and the interface uses checked text contrast.
- **Forms:** itinerary and newsletter forms include bot protection and visible validation.
- **Performance:** images are optimized with `next/image` and `sharp`, with below-the-fold content lazy-loaded where appropriate.

## Environment configuration

Copy `.env.example` to `.env.local` and set the real production values before deployment.

- `NEXT_PUBLIC_SITE_URL` — production site URL; defaults to `https://www.islandodysseyco.com`.
- `NEXT_PUBLIC_GA_ID` — optional Google Analytics measurement ID.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — optional WhatsApp number in international format.
- `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_PHONE`, `NEXT_PUBLIC_CONTACT_LOCATION` — optional public contact details.
- `NEXT_PUBLIC_FACEBOOK_URL`, `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_TIKTOK_URL` — optional social profile URLs. Empty values hide the corresponding buttons.

Forms are currently front-end only; connect their submit handlers to the chosen email/CRM provider when the business is ready for production leads.
