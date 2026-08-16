# Proof Launch Studio — Redesign Design Direction (no code changes yet)

## A. Current-site design audit

Structure (`src/pages/Index.tsx`): Header → Hero → BrandCodeChips → ValueStack → CurrencySelector → PricingTierCards → Gallery → ProofDashboardEmbed → RadicalTransparency → MiniFAQ → LeadMagnetModal → StickyCTA → ConsentBar → Footer. Fourteen stacked full-width bands, almost all centre-aligned with a centred H2 + bordered card.

- Typography: no custom fonts loaded anywhere (no font in `index.html`, `index.css`, or `tailwind.config.ts`). The whole site renders in the Tailwind default UI stack. Every heading is `text-3xl md:text-4xl font-bold text-center`, several hardcoded to `text-slate-500`, which mutes headings and bypasses tokens.
- Colour: tokens in `src/index.css` are near-default shadcn — navy `210 50% 12%` primary, blue `207 65% 60%` secondary, mint accent `150 50% 55%`, grey neutrals. No warmth, no paper surface, no editorial ink. Interest is carried by `bg-muted/30` alternation only.
- Logo: `src/assets/proof-launch-logo.png` at 112–144px square beside a plain wordmark; oversized in the header, forcing a 112–144px min-height band.
- Imagery: three local-services demo JPGs (`public/assets/demos/*`), GA4/Lighthouse PNGs + GIFs (`public/assets/proof/*`). No hospitality imagery exists. Several sections use dashed-border "coming soon" placeholders.
- Mobile: functional but visually flat — everything collapses to one centred column; a 64px sticky CTA bar reserves body padding via `--sticky-cta-h`; a global rule forces `min-height:44px` on every `a` and `button`, which will fight inline editorial text links in any new design.
- Verdict: it reads as a generic conversion template — pill chips, rounded cards, centred stacks, icon+check lists, dashed placeholders — i.e. exactly the aesthetic the brief rejects.

## B. Legacy content / component inventory (what actually exists)

Confirmed present and conflicting with the new strategy:
- Audit-first / 10-minute audit: Hero, Offer, Packages, PricingTierCards, MiniFAQ, StickyCTA all point at `calendly.com/hello-prooflaunchstudio` with "Book a 10-min audit".
- Local-services positioning: BrandCodeChips ("More jobs this week", "Fewer no-shows"), demo routes for pressure washing / mobile detailing / trades.
- USD pricing + live FX conversion: `src/lib/currency.ts`, CurrencySelector, ValueStack ($1,950 "total value"), Packages ($690/$990/$1,490).
- Proto Sprint / Growth Bundle / Pro Launch tiers and a Proof Guard monthly/annual toggle in PricingTierCards.
- Guarantee claims: "Proof or We Pay", "7-Day or $0", "refund the build and keep working free", Lighthouse ≥90 / GA4 badges (Hero, Offer, RadicalTransparency).
- Proof/demo apparatus: Gallery, ProofDashboardEmbed, `/proof/*` routes and pages, GIF/PNG proof assets, dashed "client results coming soon" placeholders.
- Outdated metadata: `index.html` title/description/OG/JSON-LD still say "7-Day Local-Service Websites… Audit-First Agency… build fee = $0", with an AU phone number and a `G-PASTE_ID_HERE` GA4 placeholder.
- Unused-on-homepage legacy components: `Hero`'s sibling set `Offer.tsx`, `Packages.tsx`, `HeroOfferDropIn.tsx`, `TrustRow.tsx`, `ProofScreenshots.tsx`, `DemoGallery.tsx`.

## C. Keep / replace / remove

Keep: Vite/React/Tailwind/shadcn setup, `App.tsx` routing + PageViewTracker, `src/lib/analytics.ts` (retarget event names), `src/lib/utils.ts`, ConsentBar, Privacy page, NotFound, `robots.txt`/`sitemap.xml`, logo asset (re-treated much smaller).

Replace: Header (compact editorial masthead), Hero, and every homepage section with new hospitality sections — Situations, What you get, Hospitality experience (20/15 years), Concept demo, Process, Scope & price (single £995 offer), FAQ, Contact. Footer rewritten to UK contact only. StickyCTA becomes a restrained mobile-only contact bar.

Remove: BrandCodeChips, ValueStack, PricingTierCards, Gallery, ProofDashboardEmbed, RadicalTransparency, MiniFAQ, LeadMagnetModal, CurrencySelector + `lib/currency.ts`, Offer, Packages, HeroOfferDropIn, TrustRow, ProofScreenshots, DemoGallery, `/demos/*` and `/proof/*` routes/pages and their assets, all guarantee/refund/results language, USD pricing, and the global 44px min-height rule on links. Metadata and JSON-LD rewritten for UK hospitality; GA4 ID either supplied or the snippet removed.

## D. Three visual directions

### 1. The Operator's Edit — editorial hospitality briefing
Core idea: a printed trade briefing. Warm paper, deep ink, hairline rules, one warm action colour; the page is set, not assembled. Suits PLS because it reads as an operator who writes clearly, not an agency selling software.
Hero: asymmetric 7/5 split — huge left-set H1 on paper, small right column holding eyebrow, subhead, "From £995" and CTAs; a full-bleed cropped hospitality detail sits under a hairline rule below.
Display type: Instrument Serif (or DM Serif Display) large, tight leading, sentence case. Body/UI: Work Sans, generous measure, small-caps eyebrows with letterspacing.
Colour: paper `#F5F1E8` base, ink navy `#111A26` text/sections, one warm terracotta `#C4654A` for links/CTA/rules-accent; nothing else.
Imagery: tight monochrome-warm crops — hands plating, a pass, chalk board edge, glassware — never full room shots.
Grid: 12-col asymmetric, text hanging to a 2-col indent; rules instead of boxes.
Rhythm: alternating dense (tight two-column text + rules) and spacious (single large statement) bands, ink-on-paper inversion for the experience and contact sections.
CTA: underlined terracotta text link plus one solid ink button; no pills.
Concept demo: full-bleed ink band presenting the fictional venue site as a large cropped page-fragment composition with a permanent stamped label `CONCEPT DEMO — ILLUSTRATIVE ONLY. NOT CLIENT WORK.`
Mobile: single column, display type stays large, rules carry hierarchy, image crops go 4:5.
Motion: near-none — short fade/rise on section entry, rules drawing in.
Risk: can read as a magazine template if the type scale isn't extreme enough or if imagery is generic.

### 2. Service Notes — utilitarian operations document
Core idea: the aesthetic of a kitchen prep sheet / service notes: monospaced labels, numbered rows, visible grid lines, ruthless clarity, high contrast. Suits PLS because "focused, information-first, operationally credible" becomes the look itself.
Hero: full-width top rule, H1 set as a left-aligned two-line statement in tight grotesk; underneath a 3-column ledger row (Offer / From £995 / Lead time) with vertical rules; no image in the hero, image enters as the next full-bleed band.
Display type: Archivo Black or Bebas Neue for large condensed statements. Body/UI: JetBrains Mono for labels, numbers, section indices; Work Sans for prose.
Colour: near-white `#FAFAF8`, near-black `#0A0A0A`, one signal amber `#D48A2A`; grey `#8A8A85` rules.
Imagery: black-and-white high-grain hospitality details, printed on the grid with visible captions and index numbers, occasionally duotone amber.
Grid: exposed grid — thin vertical column rules running full height, content snapping to them.
Rhythm: numbered sections (01–08), each opening with a mono index line; density constant, relief from full-bleed image plates.
CTA: rectangular, square-cornered, black fill, mono label; secondary as a bracketed mono link.
Concept demo: presented as a spec sheet — the fictional venue site shown in three cropped device fragments with mono annotations pointing to menu / hours / booking, permanent label as a black bar across the top.
Mobile: grid rules reduce to one; index numbers stay; condensed display type shines at small widths.
Motion: mechanical — instant snaps, numeric counters, no easing flourishes.
Risk: can tip cold/brutalist and lose the "human, hospitality" warmth if imagery isn't well chosen.

### 3. Evening Service — dark, image-led, warm low light
Core idea: the mood of a venue at service — deep warm dark surfaces, large photography as the primary compositional element, type sitting inside images. Suits PLS because it feels hospitality-native and premium while the copy stays plain and honest.
Hero: full-height image-first composition — a warm cropped low-light interior detail with the H1 overlaid bottom-left in a large humanist sans, eyebrow above a hairline, "From £995" as a small right-aligned marker on the same baseline.
Display type: Urbanist (or Sora) at very large sizes, tight tracking, mixed weights. Body/UI: Manrope.
Colour: espresso `#12100E` base, warm charcoal `#1E1B17` panels, cream `#EDE6DA` text, brass `#B5893F` accent.
Imagery: the star — large warm-toned photography, dark edges, generous bleed, occasional two-image diptychs with unequal widths.
Grid: full-bleed image bands alternating with narrow 6-col text columns offset left or right, never centred.
Rhythm: image → intimate text → image; a single cream-on-dark inversion for the price section for contrast relief.
CTA: cream text on a thin brass-ruled frame; primary as a wide brass underline that fills on hover.
Concept demo: the strongest moment — a dark room in which the fictional venue site appears as a large scrolling long-shot with the label set in brass caps, fixed and always visible.
Mobile: images go portrait full-bleed, text sits on solid dark below rather than over the image for legibility.
Motion: slow — image parallax on scroll, gentle brightness lift on hover.
Risk: dark image-led design depends entirely on photography quality, and long dark reading passages hurt accessibility if contrast isn't controlled.

## E. Recommendation

**The Operator's Edit.** It carries founder credibility through voice and craft rather than photography, so it does not depend on assets you may not have; its paper/ink/terracotta system is the furthest from SaaS and from a restaurant site itself; and its asymmetric rules-based layout gives the concept demo a genuinely strong moment without cards. Service Notes is the strong second if you want more edge; Evening Service is only right if you can supply or licence excellent warm hospitality photography.

## F. What I need from you before building

1. Photography: any owned/licensed hospitality detail images, or approval to generate illustrative imagery.
2. Contact route: real UK phone/WhatsApp and email — the current AU number and Calendly link both need replacing or removing.
3. Whether "Start a conversation" goes to a form, email, or a scheduler.
4. GA4 measurement ID, or confirmation to strip the analytics snippet.
5. The fictional concept venue's name, cuisine and city so the concept demo can be written properly.
6. Confirmation that pricing is GBP-only, single "From £995" offer, and that all guarantee/refund/results claims are removed entirely.
7. Confirmation to delete the `/demos/*` and `/proof/*` routes and their assets.
