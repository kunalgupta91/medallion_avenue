# Medallion Avenue — Website

Premium marketing website for **Medallion Avenue**, an ultra-luxury residential
and commercial development on the Kalka-Shimla Highway, adjoining Chandimandir
Toll Plaza.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui,
Framer Motion, GSAP-ready animation primitives, and Lenis smooth scrolling.

## Status: Phase 1

This is the first build phase. Fully designed and content-complete:

- **Home** — hero, trust signals, highlights, why-invest, residential &
  commercial overviews, amenities teaser, master plan, gallery teaser,
  location, construction timeline, FAQ teaser, contact
- **About**, **Residential**, **Commercial** — full detail pages

Live and functional, lighter on bespoke content/animation, ready to deepen as
real assets (exact address, floor plan PDFs, pricing, RERA number) arrive:

- Amenities, Gallery, Floor Plans, Price List, Location,
  Construction Progress, FAQs, Contact

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If port 3000 is taken,
Next.js will pick the next free port automatically (check the terminal output).

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

## Project Structure

```
src/
  app/                  Next.js App Router routes (one folder per page)
  components/
    ui/                 shadcn/ui primitives (Button, Dialog, Sheet, etc.)
    sections/           Home-page section components
    animations/         Reveal, RevealGroup, Counter, SmoothScrollProvider
    icons/              Inline brand icons (WhatsApp/Facebook/Instagram —
                         lucide-react no longer ships these)
    *.tsx               Shared building blocks (Header, Footer, LeadForm,
                         LeadDialog, FeatureGroups, PageHero, etc.)
  content/              All page copy & structured data — see below
  lib/                  cn(), WhatsApp URL builder, zod validation schemas
public/
  images/site/          Real on-site photos
  videos/                Real site video (used in Gallery & Construction
                         Progress — see media note below)
  brochure/              Brochure PDF served for download
  floorplans/            Drop real per-unit floor plan PDFs here
```

## Content model — no hardcoded copy

Every page reads from typed files in `src/content/`:

| File | Powers |
|---|---|
| `site.ts` | Site-wide config: contact numbers, WhatsApp number, social links, RERA text, nav |
| `highlights.ts` | Project highlights, investment benefits, construction timeline |
| `residential.ts` | Apartment types, feature groups, lifestyle pillars |
| `commercial.ts` | Brand categories, feature groups, investment reasons, unit sizes |
| `amenities.ts` | Amenity list + categories |
| `location.ts` | Nearby landmarks, location advantages |
| `trust-signals.ts` | "Why buyers trust us" stats (replaces fabricated testimonials — see below) |
| `gallery.ts` | Gallery media items + filters |
| `faq.ts` | FAQ entries |
| `downloads.ts` | Floor plan cards, price list copy/links |

**To update copy, prices, or add new items — edit these files only.** No
component changes needed for content changes.

## Known placeholders — replace before going live

1. **Exact plot address** — `siteConfig.location.line2` currently reads
   "Kalka-Shimla Highway, Adjoining Chandimandir Toll Plaza". Replace with the
   precise address once available, and swap `mapsEmbedSrc` in `site.ts` for an
   embed pinned to the exact coordinates.
2. **RERA number** — `siteConfig.rera` shows "Registration Coming Soon" in the
   footer, as legally required for Indian real estate marketing until the
   number is issued. Update `site.ts` once registered.
3. **Contact email** — `sales@medallionavenue.in` is a placeholder.
4. **Facebook / Instagram URLs** — placeholders in `site.ts` (`social.facebook`,
   `social.instagram`).
5. **Floor plan PDFs** — the Floor Plans page currently routes to a WhatsApp
   request (no per-unit PDF exists yet). Drop real files into
   `public/floorplans/` and wire them up in `downloads.ts` once ready.
6. **Detailed price list** — the Price List page is "price on request" by
   design (source PDF pricing wasn't machine-readable on this build machine).
   Add real figures to `downloads.ts` / `residential.ts` once confirmed.
7. **Testimonials** — intentionally omitted. No fabricated quotes were added;
   the Home page uses a "Why Buyers Trust Medallion Avenue" trust-signal
   section instead (`content/trust-signals.ts`). Add a real testimonials
   section only once genuine buyer quotes exist.
8. **OG image** — `public/images/og-image.jpg` referenced in metadata does not
   exist yet. Add a real 1200×630 social preview image.

## Lead capture — WhatsApp, not a backend

All forms (`components/LeadForm.tsx`) build a `wa.me` deep link with the
visitor's details pre-filled and open it in a new tab — no server, database,
or third-party form service required. The destination number lives in
`content/site.ts` (`contact.whatsappNumber`). To switch to email/CRM later,
replace `lib/whatsapp.ts`'s `buildWhatsappLeadUrl` with an API call — the form
component itself doesn't need to change.

## Media notes

- `public/videos/site-progress.mp4` is a real marketing clip that has its own
  baked-in text overlay ("Something Iconic Is Coming"). Do **not** use it as a
  silent autoplaying background — it visually collides with page headlines
  (this was caught and fixed during QA). It's used deliberately as a
  controls-on video in the Gallery lightbox and the Construction Progress
  page, where its own message stands alone.
- The Home hero uses a real site photo with a slow Ken Burns zoom instead of
  video, for that reason.
- Only 3 real site photos exist today (`public/images/site/`). They're reused
  across Home/Residential/Commercial/Gallery. Add more as they become
  available — everything reads from `content/gallery.ts`.

## Image optimization

All images use `next/image` with `fill` + `sizes` for responsive, lazy-loaded
delivery. When adding new photos: drop them in the relevant `public/images/`
subfolder, reference them from the matching `content/*.ts` file, and Next.js
will automatically serve resized/optimized versions — no manual resizing
needed.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. If this project lives inside a monorepo, set the Vercel project's **Root
   Directory** to `website1`.
4. No environment variables are required for the current feature set (no
   external APIs are called — the map is a keyless `<iframe>` embed, and forms
   go to WhatsApp). Framework preset: Next.js. Build/output are auto-detected.
5. Deploy. Update `siteConfig.url` in `content/site.ts` to the final
   production domain before launch (used for canonical URLs, OG tags, and the
   sitemap).

## SEO

- Per-page metadata (title/description) via each route's `export const
  metadata`.
- Open Graph + Twitter Card tags, canonical URL, and a RealEstateListing
  JSON-LD schema in `app/layout.tsx`.
- `app/robots.ts` and `app/sitemap.ts` generate `/robots.txt` and
  `/sitemap.xml` automatically from `content/site.ts`'s `navLinks`.

## Suggested next steps

1. Confirm exact address → update the map embed + landmark distances in
   `content/location.ts` (currently placeholders).
2. Get the RERA number → update `content/site.ts`.
3. Commission proper drone/exterior photography and a clean (text-free) B-roll
   video for hero/background use.
4. Add real floor plan PDFs and wire up `downloads.ts`.
5. Confirm final pricing → replace "Price on Request" with real figures, or
   keep pricing WhatsApp-gated intentionally (common in Indian real estate
   marketing, to force a lead capture).
6. Add a real testimonials section once genuine buyer quotes are available.
7. Phase 2: deepen Amenities/Gallery/Floor Plans/Price List pages with more
   bespoke layout and animation once real assets land.
8. Add a real OG/social preview image.
