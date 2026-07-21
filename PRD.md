# Medallion Avenue — Product Requirements Document

**Project**: Marketing website for Medallion Avenue, an ultra-luxury residential
and commercial development on the Kalka-Shimla Highway, adjoining Chandimandir
Toll Plaza.
**Document owner**: Kunal Gupta
**Status**: Phase 1 shipped — see [Phase Status](#phase-status) below.

---

## 1. Vision

Medallion Avenue is positioned as *the only high-end residential and
commercial address between Zirakpur and Shimla* — a mixed-use development
combining Stilt+14 residential towers (3+1 & 4+1 BHK) with a Ground+4
high-street commercial precinct, built with MIVAN construction across 30%
built form and 70% landscaped green area.

The website's job is to make a visitor feel **luxury, trust, and exclusivity**
within seconds, and convert that impression into a qualified lead — a WhatsApp
enquiry, a site-visit booking, or a brochure download — without requiring any
backend infrastructure to operate.

## 2. Goals

1. **Credibility first.** A ₹500cr-class project reads as premium and
   trustworthy even before pricing, floor plans, or RERA numbers exist —
   through real site photography, construction-technology proof points
   (MIVAN), and category-first positioning, not fabricated claims.
2. **Lead generation, not just presentation.** Every page has a path to a
   WhatsApp enquiry — the developer's actual sales channel — with zero
   third-party form service or custom backend to maintain.
3. **Two audiences, one site.** Residential buyers and commercial
   investors/lessees have different decision criteria (lifestyle vs. ROI) and
   need dedicated, fully-designed pages — not a shared generic "amenities"
   list.
4. **Honest about what's real.** No fabricated testimonials, no invented
   pricing, no address guessing. Placeholders are explicit and documented,
   never disguised as real data.
5. **Update without a developer.** All copy, stats, and structured content
   live in typed files under `src/content/`, editable without touching
   component code.

## 3. Non-goals (explicitly deferred)

- **No backend / CRM / database.** Lead capture is WhatsApp deep-links only
  (see [§7](#7-lead-generation)). Revisit only if the client adopts a CRM.
- **No Three.js in Phase 1.** GSAP/Framer Motion/Lenis deliver the "premium
  animation" bar at far lower engineering risk; a deliberate 3D moment is a
  Phase 2+ candidate, not a Phase 1 requirement.
- **No fabricated testimonials.** Replaced with a real, verifiable
  "trust signals" section (MIVAN, 70% green area, corridor positioning, gated
  security) until genuine buyer quotes exist.
- **No CMS.** Content is file-based TypeScript, not a headless CMS. Revisit
  only if non-technical stakeholders need to edit copy directly.

## 4. Target audience

| Segment | What they need to see |
|---|---|
| Residential buyer (family, HNI) | Space, greenery, security, construction quality, floor plans, lifestyle |
| Commercial investor / lessee | ROI logic, catchment/footfall story, unit sizes, tenant-mix credibility |
| Site-visit prospect (any segment) | Fast path to WhatsApp/call, clear location, real photos, no dead ends |

## 5. Brand & design system

| Element | Decision |
|---|---|
| Palette | Ivory (`#FBFAF7`) + charcoal (`#0F0F10`) base, gold (`#A9812E → #D9B45C`) for premium/CTA moments, emerald (`#1F3D2C → #3C6E4F`) for nature/amenity content — chosen specifically to differentiate from the generic dark+gold luxury-real-estate look, and to reflect the hill-station greenery that's a genuine site USP |
| Typography | Playfair Display (headlines) + Manrope (body/UI) |
| Logo | Real brand mark (maroon mountain/diamond "M" + gold accents), background-removed and cropped for header/favicon use — see `public/images/logo/` |
| Motion | Framer Motion scroll-reveals, Lenis smooth scroll, animated counters; no Three.js yet |
| Components | shadcn/ui (base-ui primitives) restyled to the brand palette |

## 6. Tech stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
shadcn/ui · Framer Motion · GSAP (installed, available for Phase 2 scroll
choreography) · Lenis · Lucide icons · react-hook-form + zod.

No environment variables or external API keys are required — the map is a
keyless `<iframe>` embed and forms resolve to WhatsApp deep links.

## 7. Lead generation

All forms (`components/LeadForm.tsx`) build a `wa.me` URL with the visitor's
name/phone/interest pre-filled and open it in a new tab. No server, database,
or third-party form SaaS. Entry points:

- Hero: Book Site Visit, Download Brochure, Call Now
- Floating bar (every page): WhatsApp, Facebook, Instagram
- Residential / Commercial pages: dedicated enquiry forms with
  section-specific `defaultInterest`
- Floor Plans / Price List: "request on WhatsApp" in place of gated PDFs that
  don't exist yet
- Contact page: full enquiry form + direct WhatsApp/call/email links + map

## 8. Information architecture

12 routes, all under `src/app/`:

Home · About · Residential · Commercial · Amenities · Gallery · Floor Plans ·
Price List · Location · Construction Progress · FAQs · Contact

Full nav + route list is defined once in `content/site.ts` (`navLinks`) and
drives the header, mobile sheet, footer columns, and `sitemap.ts` — adding a
page means adding one entry there.

## 9. Content model

Every page reads from typed files in `src/content/` — see the table in
`README.md` for the full file-by-file breakdown. No page has hardcoded copy;
updating a stat, FAQ, or feature list never requires touching a component.

## 10. Compliance

- **RERA**: footer shows "RERA Registration: Coming Soon" — the standard,
  legally-safe placeholder for Indian real estate marketing pre-registration.
  Must be replaced with the real number once issued (`content/site.ts`).
- **Disclaimer**: footer includes the standard "not an offer, invitation to
  offer" / indicative-specifications language.

---

## Phase status

### Phase 1 — shipped (this build)

- Home, About, Residential, Commercial: full design treatment, all sections
  from the brief (hero, highlights, why-invest, overviews, amenities teaser,
  master plan, gallery teaser, location, construction timeline, FAQ, contact)
- Amenities, Gallery, Floor Plans, Price List, Location, Construction
  Progress, FAQs, Contact: functional, content-complete, lighter bespoke
  animation/layout than the four flagship pages
- Real assets integrated: 3 site photos, 1 site video, brochure PDF (7.9MB,
  down from a 77MB source), real logo (background removed, mark cropped for
  header/favicon)
- WhatsApp-based lead capture across every CTA
- SEO: per-page metadata, OG/Twitter tags, RealEstateListing JSON-LD,
  `robots.txt` + `sitemap.xml`
- QA: full `next build` + lint pass on all 13 routes; browser-verified via
  Playwright screenshots (caught and fixed a real bug — the hero background
  video had its own baked-in "Something Iconic Is Coming" text overlay that
  collided with the page headline; hero now uses a photo with a Ken Burns
  zoom instead, video moved to Gallery/Construction Progress where it stands
  alone)

### Phase 2 — planned, not yet started

Ordered roughly by dependency (data availability) and impact:

1. **Exact plot address.** Once available: replace the placeholder map embed
   in `content/site.ts` with one pinned to precise coordinates; replace the
   `[Distance TBC]` / `[Drive time TBC]` placeholders in
   `content/location.ts` with real distances/times to schools, hospitals,
   Kalka station, Chandigarh airport, and tricity retail hubs.
2. **RERA number.** Replace the "Coming Soon" disclaimer in `content/site.ts`
   the moment registration completes — a legal requirement, not optional
   polish.
3. **Real floor plan PDFs.** Add per-unit-type layouts to `public/floorplans/`
   and wire them into `content/downloads.ts`, replacing the current
   "request on WhatsApp" fallback on the Floor Plans page with direct
   downloads (still lead-gated via the existing form if desired).
4. **Confirmed pricing.** Replace "Price on Request" on the Price List page
   with real figures once finalized — or make the WhatsApp-gate a deliberate
   choice (common, effective pattern in Indian real estate marketing to force
   a lead capture before revealing price).
5. **Deepen the eight "lighter" pages** (Amenities, Gallery, Floor Plans,
   Price List, Location, Construction Progress, FAQs, Contact) to the same
   bespoke-animation bar as Home/Residential/Commercial/About, once real
   assets reduce the risk of over-investing in layout around placeholder
   content.
6. **Expanded gallery media.** Only 3 real photos and 1 video exist today.
   Commission proper drone/exterior photography and additional construction-
   progress footage; `content/gallery.ts` is already structured for
   image/video + category filtering, so new media is a data change, not a
   rebuild.
7. **Clean B-roll video.** Commission (or re-cut) a text-free video clip
   suitable for silent autoplay backgrounds — the current site video's
   baked-in marketing text makes it unsuitable for that use (see Phase 1 QA
   note above); this unlocks video in more hero-style placements.
8. **One deliberate Three.js moment.** E.g. a subtle 3D tower/parallax
   element in the Home hero or the Master Plan section, once the core site
   is proven and there's a specific payoff worth the added engineering risk
   — not Three.js "everywhere," as originally scoped down in Phase 1.
9. **Real testimonials.** Add a genuine buyer/investor quotes section only
   once such quotes exist; do not fabricate in the interim (current
   trust-signals section stays as the Home page's credibility mechanism
   either way).
10. **Social proof URLs.** Replace placeholder Facebook/Instagram links in
    `content/site.ts` with real profile URLs once pages are live.
11. **OG/social preview image.** Add a real 1200×630 image at
    `public/images/og-image.jpg` (referenced in metadata but not yet created).
12. **Analytics & conversion tracking.** No analytics are wired up yet
    (intentionally out of Phase 1 scope). Add a privacy-respecting analytics
    tool (e.g. Plausible, or GA4 if required) plus WhatsApp click tracking
    once the client decides on a provider.
13. **Consider a lightweight CMS or admin view** only if non-technical staff
    need to edit `content/*.ts` directly without a code deploy — not needed
    while updates flow through this repo.

---

## Appendix: known placeholders (as of Phase 1 ship)

See `README.md` → "Known placeholders — replace before going live" for the
authoritative, up-to-date list (exact address, RERA number, contact email,
social URLs, floor plan PDFs, detailed pricing, OG image). This PRD's Phase 2
plan and that list should be kept in sync — when a placeholder is resolved,
update both.
