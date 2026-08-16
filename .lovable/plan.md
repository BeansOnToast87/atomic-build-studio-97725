# Proof Launch Studio — Homepage Redesign: The Operator's Edit

Chosen art direction: **The Operator's Edit** — an editorial hospitality briefing, not a software landing page. Warm paper, deep ink, one restrained warm accent, fine rules, asymmetric grid, deliberate section rhythm, very limited rounded-card UI, and the concept demo as a major visual moment.

## 1. Design system

Typography (loaded via Google Fonts in `index.html`, wired into `tailwind.config.ts`):
- Display: **Instrument Serif** — large, tight leading, sentence case, used for H1/H2 and pull statements.
- Body/interface: **Work Sans** — generous measure; eyebrows and labels in small uppercase with wide letterspacing.

Colour — starting tokens in `src/index.css`, tuned during build for contrast (target AA at minimum) and for compatibility with the existing logo:
- Paper (background) `#F5F1E8` region
- Ink (foreground, inverted sections) deep navy-black `#111A26` region
- Warm accent (links, CTA, small rule accents) terracotta `#C4654A` region, darkened if needed for text contrast on paper
- Rule/hairline: ink at low opacity; muted text: ink at ~60%

All values expressed as HSL semantic tokens (`--paper`, `--ink`, `--accent`, `--rule`) mapped onto the existing shadcn token names so components stay themable. No gradients, no glassmorphism, no glows, no pill badges.

Structural rules: hairline rules replace card borders; radius reduced to near-zero for editorial surfaces; the global `min-height:44px` on every `a`/`button` in `index.css` is scoped to real buttons only so inline editorial links behave properly (tap targets kept ≥44px on actual controls).

## 2. Imagery policy

Photography is supporting, never load-bearing — the page must read as designed with images removed. Favour restrained editorial hospitality details: signage, menu typography, bar and counter materials, glassware, table details, tiles and material texture, façade lettering, interior architecture. No generic business stock, no chef/plating as a dominant motif, nothing that could imply previous client work. Warm-toned, tightly cropped, at most a few per page. The hero image is optional and will only be included if it strengthens the composition; the hero must be distinctive without it.

## 3. Homepage structure (new)

1. **Masthead** — compact editorial header: small logo mark + wordmark on a hairline rule, single "Start a conversation" text link. Replaces the current 112–144px logo band.
2. **Hero** — asymmetric split, uncrowded.
   - Eyebrow: WEBSITES FOR INDEPENDENT HOSPITALITY
   - H1: A proper online home for your venue.
   - Subhead: Focused websites that bring your menu, opening hours, location and booking or order routes together clearly.
   - Commercial marker: From £995
   - Primary CTA: Start a conversation → `mailto:hello@prooflaunchstudio.com?subject=Hospitality%20website%20enquiry`
   - Secondary CTA: See a concept → anchor to the concept section
   - No delivery conditions, no founder credentials, no guarantee badges here.
3. **Situations** — "This is probably for you if…" set as a ruled editorial list (opening, relaunching or rebranding, moving into permanent premises, running mostly on social, information fragmented across platforms, no useful first-party site). Not cards.
4. **What you get** — the focused one-page scope as a two-column ruled specification: what the venue is, menu or menu link, opening hours, location, booking/order routes, contact. Existing booking, delivery and ordering platforms are connected clearly rather than replaced.
5. **Hospitality experience** — its own ink-on-paper inverted section: 20 years in hospitality, 15 years in management, written as practical understanding of how venues run and what guests need to find. No results or revenue implications.
6. **Concept demo — North Street Kitchen** (see §4).
7. **Process** — numbered editorial steps in a horizontal ruled sequence rather than icon cards; describes how the focused scope is agreed and delivered, with no timing guarantee language.
8. **Scope & price** — single offer stated typographically: Focused One-Page Hospitality Website, From £995, GBP only, what is and is not included. No tiers, no currency switcher, no "value stack".
9. **FAQ** — plain ruled accordion, editorial type, no boxes.
10. **Contact** — closing ink section, large statement, email link only.
11. **Footer** — minimal: wordmark, email, Privacy link, copyright.

Mobile-only slim bottom bar with a single "Start a conversation" email link (replacing the current dual-CTA sticky bar); `--sticky-cta-h` body padding retained.

## 4. Concept demo — North Street Kitchen

Fictional throughout. Permanently and prominently labelled `CONCEPT DEMO — ILLUSTRATIVE ONLY. NOT CLIENT WORK.` — set as a fixed label within the section, visible at all breakpoints, not dismissible.

Presented as the strongest art-directed moment: a full-bleed ink band in which fragments of the fictional venue's one-page site are composed asymmetrically at large scale — a menu-typography fragment, an hours/location block, a booking-route row — annotated with hairline rules and small captions explaining what each element does for the operator. Not a rounded browser mock-up.

No real address, no city unless required, no phone number, no social accounts, no live booking destination, no reviews, no performance claims. Buttons such as "Book a table" or "View menu" appear as visual demonstrations only and perform no action (non-interactive, `aria-disabled`, with a note that actions are illustrative).

## 5. Mobile design (intentional, not a collapse)

Mobile is designed as its own editorial layout:
- H1 stays large; display type is not shrunk to body scale.
- Rules and section indices carry hierarchy where columns disappear.
- Situations and scope become ruled rows with hanging labels, never stacked cards.
- Any image switches to a deliberate 4:5 or 3:4 crop, edge-to-edge, with a caption on the rule beneath.
- Section rhythm preserved: dense ruled passages alternate with a single spacious statement, and the ink inversions stay.
- Generous horizontal margin with type set to a comfortable measure; tap targets ≥44px on real controls.

## 6. Legacy cleanup (this phase = rendered homepage only)

Removed from the rendered homepage: BrandCodeChips, ValueStack, CurrencySelector, PricingTierCards, Gallery, ProofDashboardEmbed, RadicalTransparency, MiniFAQ, LeadMagnetModal, the current Hero, Header and StickyCTA, plus every link into `/demos/*` and `/proof/*`. All of this positioning disappears for visitors: "Proof or We Pay", "7-Day or $0", refund and performance guarantees, Lighthouse/GA4 sales-proof claims, USD pricing and FX conversion, audit-first and 10-minute-audit messaging, the Calendly scheduler, local-services language, and dashed "coming soon" placeholders.

Not deleted in this phase, kept in the codebase for a later technical-cleanup review: `/demos/*` and `/proof/*` routes and pages, their assets under `public/assets/`, `src/lib/analytics.ts` and the existing GA4 snippet, `ConsentBar`, and the Privacy page. Unused legacy components (`Offer`, `Packages`, `HeroOfferDropIn`, `TrustRow`, `ProofScreenshots`, `DemoGallery`, `src/lib/currency.ts`) also stay on disk but are no longer referenced by the homepage.

Analytics: infrastructure preserved untouched. No GA4 measurement ID needed now, and the new homepage makes no claim that tracking or analytics is operational.

## 7. Metadata

`index.html` head rewritten for the new positioning: title and description about focused one-page websites for independent UK hospitality, matching OG and Twitter tags, and Organization JSON-LD reduced to name, URL, description, email `hello@prooflaunchstudio.com` and logo — removing the AU phone number, the Calendly `sameAs`, the audit-first description and the "$0" claims. No results, guarantee or ranking language anywhere in metadata.

## 8. Compliance guardrails

No claim, stated or implied, that the website guarantees bookings, revenue, footfall, rankings or commercial results. No testimonials, client logos, case studies, metrics or dashboards. Founder experience is framed as operational understanding only. All concept content is labelled fictional.

## 9. Technical notes

- Files changed: `index.html` (fonts + metadata), `src/index.css` (tokens, radius, rule/link scoping), `tailwind.config.ts` (font families, paper/ink/accent/rule colours), `src/pages/Index.tsx` (new section composition), new components under `src/components/` for masthead, hero, situations, scope, experience, concept demo, process, price, FAQ, contact, footer and the slim mobile bar.
- Untouched: `src/App.tsx` routing, analytics lib, ConsentBar, Privacy, NotFound, demo/proof routes and assets.
- Accessibility: single H1, semantic sections with labelled headings, AA contrast verified against the final tokens, visible focus states on the paper and ink surfaces, reduced-motion respected.
- Motion: near-none — a short fade-and-rise on section entry and hairline rules drawing in; no parallax, no glow, no looping animation.

## 10. Open items (not blocking)

- Whether to include the optional hero image will be decided during composition; the layout will be built to hold without it.
- Imagery will be illustrative editorial detail shots generated for this purpose unless you supply owned or licensed images.
