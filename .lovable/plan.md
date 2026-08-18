# Proof Launch Studio — Homepage Evolution: Sprint Offer + Las Chicas Proof

The Operator's Edit design language is preserved exactly. This is a positioning and proof change, not a redesign.

# A. CURRENT STATE

The homepage (`src/pages/Index.tsx`) renders, in order: `Masthead`, `HeroEditorial`, `Situations`, `ScopeSpec`, `ExperienceSection`, `ConceptDemo` (North Street Kitchen), `ProcessSteps`, `PriceSection`, `FaqEditorial`, `ContactSection`, `SiteFooter`, `MobileContactBar`, `ConsentBar`.

The design system is in place and healthy: `src/index.css` defines paper/paper-deep/ink/ink-soft/accent/rule HSL tokens, `--radius: 0.125rem`, a `.eyebrow` label, `.rule` hairline, `.link-editorial`, `.tap` (44px), `.measure` (34rem) and a single `reveal` fade-and-rise keyframe gated by `prefers-reduced-motion`. `tailwind.config.ts` maps Instrument Serif (display) and Work Sans (sans). Layout convention throughout is a 12-column `lg` grid with a 4/5-column sticky editorial heading and a rule-divided 7/8-column content column.

Everything commercial in the current copy is the old model: one-page website, From £995, "one page is all a venue needs", and fictional North Street Kitchen occupying the only visual-proof position. There is no real proof, no case study, and no imagery anywhere on the page — which is the source of the "too dependent on paper, type and space" feeling.

Structurally the page maps cleanly onto the requested architecture: masthead, hero, experience, process, FAQ, contact and footer all survive with copy changes; the offer section needs rebuilding; a case study needs creating; the fictional demo stops rendering.

# B. RETAIN

| Component | Why it can remain | Content change |
|---|---|---|
| `src/components/site/Masthead.tsx` | Correct editorial header: logo, wordmark, single text CTA on a hairline rule. | None required. Optionally add a "The Las Chicas project" anchor link beside the CTA. |
| `src/components/site/ExperienceSection.tsx` | Deep-ink band with the 20 years / 15 years figures is exactly the requested treatment. | Copy only — reframe the supporting paragraphs from "the page" to guest journeys, functions, changing menus, rebrands and what happens after an enquiry lands. |
| `src/components/site/ContactSection.tsx` | Ink closing section, email-only, correct structure. | Copy only — new heading and supporting line. |
| `src/components/site/SiteFooter.tsx` | Minimal wordmark / email / privacy / copyright. | None. |
| `src/components/site/MobileContactBar.tsx` | Slim single-action mobile bar, `--sticky-cta-h` padding already wired. | None. |
| `src/index.css`, `tailwind.config.ts` | The design system is the thing being preserved. | Small readability tuning only (see Pass 4). |
| `src/lib/contact.ts` | Correct email and mailto. | Subject line updated to reference the Sprint. |
| `ConsentBar`, `Privacy`, `src/lib/analytics.ts` | Existing infrastructure, unaffected. | None. |

# C. MODIFY

**`src/components/site/HeroEditorial.tsx`**
- Current: eyebrow "Websites for independent hospitality", H1 "A proper online home for your venue.", "From £995" price marker, CTAs "Start a conversation" / "See a concept".
- Proposed: eyebrow HOSPITALITY WEBSITES & CUSTOMER JOURNEYS; H1 "A clearer path from interest to booking."; supporting line as supplied; a three-line ruled proof stack (20 years in hospitality / 15 years in management / Real hospitality web work including Las Chicas, Cronulla); primary CTA "See the Las Chicas project" (anchor to the case study), secondary "Start a conversation" (mailto).
- Scope: copy and the right-hand column contents. The £995 price marker is removed from the hero — price now lives only in the Sprint section. Existing asymmetric split, type scale and rules unchanged.
- Risk: LOW.

**`src/components/site/Situations.tsx` → "What I improve"**
- Current: six numbered "This is probably for you if…" rows about missing websites.
- Proposed: headline "The website usually isn't the problem. The journey is."; five editorial rows — Private hire & functions, Bookings, Relaunches & rebrands, Promoted experiences, Venue information — each describing the hospitality situation and what gets made clearer.
- Scope: data array and heading copy. The numbered ruled-row layout and sticky heading are reused unchanged, so no card grid appears.
- Risk: LOW.

**`src/components/site/PriceSection.tsx` → Conversion Experience Sprint**
- Current: "Focused One-Page Hospitality Website", From £995, included / not-included lists.
- Proposed: heading "Conversion Experience Sprint"; £1,500 set at the existing large display scale for visual authority; main line "One important guest journey, designed and built properly."; the supplied supporting explanation; a ruled scope specification covering one defined journey, normally one page, up to about six purposeful sections, one primary action, mobile-first design with a polished desktop version, hierarchy and light copy restructuring from client-approved facts, approved trust/proof architecture, implementation, connection to an existing booking/enquiry route where technically appropriate, one confirmation state if required, one primary-action measurement setup where access permits, one consolidated revision round, responsive and CTA/link/form QA, launch, and a seven-day post-launch bug-fix period for defects in my own implementation.
- Also: payment terms (£750 to book, £750 once the agreed experience is demonstrated working on staging before launch), target delivery 7–10 working days after access/content/approvals, and a ruled boundary note stating the technical-fit check happens before payment and that larger or full website projects are scoped separately.
- Scope: full rewrite of the component's content; single-offer two-column ruled layout retained, no tiers, no value stack, no pricing card.
- Risk: LOW–MEDIUM (volume of commercial copy in one section — needs careful typographic pacing so it does not read as a spec sheet).

**`src/components/site/ProcessSteps.tsx`**
- Current: six steps ending in domain handover for a one-page site.
- Proposed: three steps — Identify the journey (conversation plus technical-fit check), Design and build (fixed scope, content and access required), Review and launch (one consolidated revision, approval, launch, seven-day bug-fix window).
- Scope: data array reduced from six to three; grid changes from three columns to three wider ruled columns. No workflow diagram.
- Risk: LOW.

**`src/components/site/FaqEditorial.tsx`**
- Current: one-page-site questions (why one page, menu changes, photography).
- Proposed: the seven Sprint questions, ending with the explicit no-guarantee answer.
- Scope: data array only; ruled accordion layout untouched.
- Risk: LOW.

**`src/components/site/ScopeSpec.tsx`**
- Current: the one-page product specification — obsolete as a standalone section, since scope now lives inside the Sprint section.
- Proposed: stops rendering (see D). Its paper-deep ruled `dl` pattern is the template for the Sprint scope list.
- Risk: LOW.

**`index.html`**
- Title, description, OG and Twitter copy, and the Organization JSON-LD description all currently sell the £995 one-page site. Rewritten for hospitality websites and guest-journey work with the Sprint as the entry offer. Canonical and og:url reviewed. No new schema types, no ranking or results claims.
- Separate observation: the GA4 snippet is live with the placeholder ID `G-PASTE_ID_HERE`. Recommend either supplying a real ID or removing the snippet during Pass 4 — a placeholder ID makes two useless network requests on every load.
- Risk: LOW.

# D. REMOVE FROM RENDER

Removed from `src/pages/Index.tsx` only; no files deleted.

- `ConceptDemo` (North Street Kitchen) — fictional work must not compete with Las Chicas, and it currently holds the strongest visual slot. File and code stay on disk.
- `ScopeSpec` — its content is absorbed into the Sprint section.
- Already not rendered and staying that way: `Hero`, `Header`, `StickyCTA`, `ValueStack`, `PricingTierCards`, `CurrencySelector`, `BrandCodeChips`, `Gallery`, `ProofDashboardEmbed`, `RadicalTransparency`, `MiniFAQ`, `LeadMagnetModal`, `Offer`, `Packages`, `HeroOfferDropIn`, `TrustRow`, `ProofScreenshots`, `DemoGallery`, `src/lib/currency.ts`.
- The `#concept` anchor in the hero is retargeted to the case study, so no dead link remains.

# E. CREATE

**`src/components/site/LasChicasCaseStudy.tsx`** — the main new work and the page's strongest visual moment.
- Purpose: real proof. Editorial composition, not a portfolio card: one dominant desktop screenshot set large and slightly off-grid, a deliberate mobile crop overlapping the rule beside it, and two supporting detail crops (Functions, What's On) at smaller scale with hairline-ruled captions. Asymmetric scale, no repeating grid.
- Structure: THE SITUATION (the Cony's → Las Chicas transition left legacy branding, information and customer routes) / THE WORK (site and navigation restructured; homepage, Menu, What's On, Functions, About, Gallery and Contact rebuilt; content rewritten; booking CTAs connected to OpenTable; a clearer functions and group-enquiry journey; obsolete contact details and legacy Cony's remnants removed; metadata, canonical, structured data and sitemap work; deployed on the venue's own domain and maintained since) / THE CURRENT STATE (one coherent live digital home covering venue information, booking, functions and promotional journeys), plus a link to barlaschicas.com.
- Evidence boundary, set as a ruled caption, not hidden fine print: "No booking, revenue or conversion uplift is claimed because these outcomes were not formally measured."
- Testimonial: a reserved visual slot built and styled but rendered behind a single flag in the component, labelled in code as DRAFT — OWNER APPROVAL PENDING and **not rendered** until approval is confirmed. The section composition must read as complete without it.
- Inputs: real owned screenshots (see F). Styling reuses paper/paper-deep surfaces, hairline rules, `.eyebrow`, `.measure` and the display scale — no new primitives.

**`src/components/site/LasChicasFigure.tsx`** (small, optional) — a shared figure wrapper handling image + hairline-ruled caption + `srcset`/`loading="lazy"`/`decoding="async"` and the correct aspect-ratio crop per breakpoint, so the case study's four images stay consistent.

Nothing else needs creating. No new fonts, tokens, dependencies or routes.

# F. ASSETS / INPUTS NEEDED FROM YOU

1. **Las Chicas desktop screenshots** — homepage full-width, plus Functions and What's On. Ideally 2× width (≥2400px) so they stay crisp when set large.
2. **Las Chicas mobile screenshots** — homepage and the Functions/enquiry journey, taken at a real phone width.
3. **One optional venue or navigation detail crop** — e.g. the nav with the booking CTA, or a functions header — for the smaller supporting figure.
4. **Testimonial approval** — written confirmation from the owner before the quote is rendered, plus the attribution you want (name, role, venue).
5. **Confirmation on GA4** — a real measurement ID, or approval to remove the placeholder snippet.
6. **Confirmation of the canonical domain** — `prooflaunchstudio.com` is currently in the metadata while the project previews on a lovable.app URL; confirm it is live before Pass 4.

Not needed: logo, email, experience figures, Las Chicas work history — all already in the project or this brief.

# G. LEGACY / CONFLICT CHECK

- **Obsolete positioning on the rendered page:** "From £995" in `HeroEditorial` and `PriceSection`; "Focused One-Page Hospitality Website"; "Why only one page?" in the FAQ; the one-page product framing in `ScopeSpec`; six "who this is for" situations aimed at venues with no website at all.
- **Metadata conflicts:** title, description, OG and Twitter copy and the JSON-LD description all state the £995 one-page offer. This is the most externally visible conflict.
- **Fictional-proof conflict:** North Street Kitchen currently occupies the primary proof slot. Removed from render; code retained.
- **Legacy components that could reappear:** everything listed in D exists on disk. Risk is only accidental re-import; no file imports them once `Index.tsx` is updated. `/demos/*` and `/proof/*` routes still exist in `App.tsx` with old service-business demos and Lighthouse/GA4 "proof" assets — not linked from the homepage, but they remain publicly reachable and contradict the new positioning. Recommend a separate decision (noindex or removal) rather than folding it into this work.
- **CTA behaviour:** "See a concept" pointing at `#concept` must be retargeted; `src/lib/contact.ts` subject line still says "Hospitality website enquiry".
- **`public/sitemap.xml` and `public/robots.txt`** should be checked in Pass 4 for stale demo/proof URLs.

# H. BUILD PASSES

### PASS 1 — COMMERCIAL STRUCTURE — risk LOW
- Files: `src/pages/Index.tsx`, `HeroEditorial.tsx`, `Situations.tsx`, `src/lib/contact.ts`, optionally `Masthead.tsx`.
- Goals: new section order (Masthead, Hero, case-study placeholder slot, What I improve, Experience, Sprint, Process, FAQ, Contact, Footer); new hero copy, proof stack and CTAs with £995 gone; Situations becomes "What I improve"; `ConceptDemo` and `ScopeSpec` stop rendering.
- Untouched: design tokens, Tailwind config, Experience, Price, Process, FAQ, Contact, Footer, mobile bar, all routing.
- Dependencies: none.
- Verify before Pass 2: hero reads confidently at mobile and desktop with no price and no fictional demo; the ruled proof stack sits well; "What I improve" still reads as editorial rows, not cards; no broken anchors; the page still flows despite the empty case-study position.

### PASS 2 — LAS CHICAS CASE STUDY — risk MEDIUM
- Files: new `LasChicasCaseStudy.tsx` and `LasChicasFigure.tsx`, `src/pages/Index.tsx`, supplied images added under `src/assets/las-chicas/`.
- Goals: build the editorial composition, Situation / Work / Current State copy, evidence boundary, and the unrendered testimonial slot; a dedicated mobile composition using selective crops rather than shrunken full screenshots.
- Untouched: every other section, tokens, metadata.
- Dependencies: **blocked on assets 1–3 in F.** If images are delayed, the composition can be built against neutral ruled placeholder blocks at the correct aspect ratios and images dropped in after — no fabricated screenshots will be generated.
- Verify before Pass 3: images legible and correctly cropped at 375px, 768px and 1280px; hierarchy clearly asymmetric with no repeating grid; the section reads as real client work; captions readable; the evidence boundary visible; page weight still reasonable.

### PASS 3 — OFFER / EXPERIENCE / PROCESS — risk LOW–MEDIUM
- Files: `PriceSection.tsx`, `ExperienceSection.tsx`, `ProcessSteps.tsx`, `FaqEditorial.tsx`, `ContactSection.tsx`.
- Goals: the full Sprint section (£1,500 with visual authority, scope, payment terms, delivery target, technical-fit boundary, larger projects scoped separately); Experience copy reframed to journeys; three-step process; seven Sprint FAQs ending in the explicit no-guarantee answer; new contact heading and supporting copy.
- Untouched: case study, hero, masthead, footer, tokens.
- Dependencies: Pass 1 copy direction settled.
- Verify before Pass 4: £1,500 carries the weight the offer needs; the scope list reads as reassuring rather than as a contract; nothing implies guaranteed bookings or revenue; process feels short; FAQ answers match the Sprint you actually sell.

### PASS 4 — POLISH / MOBILE / MOTION / METADATA / QA — risk LOW
- Files: `src/index.css`, `tailwind.config.ts` if needed, `index.html`, minor touch-ups across sections, `public/sitemap.xml` / `robots.txt` check.
- Goals: typography and readability review (body copy sizes, caption opacity — several are `paper/50` and `ink-soft` at `text-xs` and likely too faint, uppercase tracking above `0.18em` reviewed, `.measure` line lengths, mobile type comfort); section rhythm and spacing after the new balance of type and imagery; restrained motion only — section entry fade-and-rise via the existing `reveal`, hairline rule reveals, a small hover crop/scale on case-study images, all `prefers-reduced-motion` safe and never required to understand content; metadata and JSON-LD rewrite; GA4 placeholder decision; accessibility pass (single H1, heading order, AA contrast on both paper and ink, visible focus states, alt text on every Las Chicas image); final responsive QA at 375 / 768 / 1024 / 1440.
- Untouched: content decisions from Passes 1–3.
- Dependencies: Passes 1–3 complete; F items 5–6.
- Verify: page complete and readable with motion disabled; nothing microscopic or faint; share preview copy correct; no £995 or North Street Kitchen reference anywhere in source or metadata.

Testimonial rendering is deliberately outside all four passes — a small separate change once approval arrives.

# I. FINAL RISKS

1. **Asset dependency.** The case study is the centre of the new page and cannot be finished without real screenshots. Nothing will be fabricated; the layout gets placeholder blocks until assets arrive.
2. **Truth boundary drift.** Describing the Las Chicas work persuasively without implying commercial outcomes needs care in every sentence — "clearer functions journey" is fine, "better performing" is not.
3. **Commercial-copy density in the Sprint section.** Scope, payment terms, delivery window and technical-fit boundary in one section can turn the page's strongest commercial moment into a spec sheet. Mitigated by ruled hierarchy and holding the £1,500 as the visual anchor.
4. **Visual balance overshooting.** Adding real imagery to a page built on paper and type could tip it toward a portfolio. Four images total, deliberately scaled, keeps it near the 60/40 intent.
5. **Legacy `/demos/*` and `/proof/*` routes remain publicly reachable** with off-positioning content. Not blocking, but worth resolving separately.

# J. APPROVAL CHECKLIST

- The Operator's Edit system — Instrument Serif, Work Sans, paper/ink/terracotta tokens, hairline rules, asymmetric grid — is preserved, not redesigned.
- £995 and the one-page-website offer disappear from the rendered page and from metadata.
- North Street Kitchen stops rendering; its code stays on disk.
- The £1,500 Conversion Experience Sprint is the single offer, with no tiers and no pricing card.
- Las Chicas becomes the strongest visual moment, built only from real supplied assets.
- The testimonial is built but not rendered until owner approval.
- No booking, revenue, conversion or ranking claims anywhere; the evidence boundary is visible.
- Contact stays email-only — no Calendly, WhatsApp, forms or lead magnets.
- Motion stays restrained and reduced-motion safe; the page is complete without it.
- Four passes, each independently verifiable, with the asset-dependent pass isolated.
