import React from "react";
import { useCurrency, convertPrice, formatPrice, hasRate } from "@/lib/currency";

export default function HeroOfferDropIn() {
  const { currency, rates, isLoading } = useCurrency();
  const fire = (name: string, params: Record<string, any>) => {
    // guard for global helper
    // @ts-ignore
    if (typeof window !== "undefined" && window.sfga?.fire) {
      // @ts-ignore
      window.sfga.fire(name, params);
    }
  };

  return (
    <>
      {/* =========================
        HERO — Proof Launch Studio
        (AA contrast, ≥44px, GA4 wired)
      ========================== */}
      <section id="hero" role="region" aria-labelledby="hero-title" className="pls-hero">
        <div className="wrap">
          <header className="brandline">
            <a
              href="https://prooflaunchstudio.com"
              className="brand"
              aria-label="Proof Launch Studio — home"
            >
              <strong>Proof Launch Studio</strong>
            </a>
          </header>

          <h1 id="hero-title" className="h1">
            Launch a GA4-tracked, WhatsApp-ready site in 7 days—so your next 10 enquiries aren't
            lost.
          </h1>

          <p className="sub">
            Home-service specialists. You give us ~45–60 minutes; we ship the rest. Miss Day-7 and
            the build fee = $0.
          </p>

          {/* Chips: risk, effort, capacity */}
          <ul className="chips" aria-label="Key highlights">
            <li className="chip">7-Day or $0</li>
            <li className="chip">Effort: ~45–60 mins</li>
            <li className="chip">Capacity: 2 build slots/week</li>
          </ul>

          {/* CTAs */}
          <div className="cta-row">
            {/* Primary: Audit (Calendly) */}
            <a
              className="btn btn-primary"
              href="https://calendly.com/hello-prooflaunchstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get a 10-minute website audit and plan"
              onClick={() =>
                fire("audit_click", {
                  event_category: "conversion",
                  dest: "calendly",
                  page_location: window.location.href,
                })
              }
            >
              Get 10-min audit &amp; plan
            </a>

            {/* Secondary: WhatsApp */}
            <a
              className="btn btn-ghost"
              href="https://wa.me/61436275470"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp the agency"
              onClick={() =>
                fire("whatsapp_click", {
                  event_category: "conversion",
                  phone_number: "+61436275470",
                  page_location: window.location.href,
                })
              }
            >
              WhatsApp us
            </a>

            {/* Tertiary: Email */}
            <a
              className="link-email"
              href="mailto:hello@prooflaunchstudio.com"
              aria-label="Email the agency"
              onClick={() =>
                fire("email_click", {
                  event_category: "conversion",
                  email: "hello@prooflaunchstudio.com",
                  page_location: window.location.href,
                })
              }
            >
              Email
            </a>
          </div>

          <p className="cta-note">Takes 10 minutes. No pushy sales.</p>
        </div>
      </section>

      {/* =========================
        OFFER / WHY-US + 7-Day Timeline
      ========================== */}
      <section id="offer" role="region" aria-labelledby="offer-title" className="pls-offer">
        <div className="wrap grid">
          <div className="col">
            <h2 id="offer-title" className="h2">
              Why Proof Launch Studio?
            </h2>
            <ul className="ticks">
              <li>
                <strong>7-Day or $0</strong> — if we miss Day-7, you don't pay the build fee.
              </li>
              <li>
                <strong>Tracked clicks &amp; calls</strong> — GA4 events wired, verified in
                DebugView.
              </li>
              <li>
                <strong>Lighthouse ≥85 / SEO ≥90</strong> at handover (screenshots included).
              </li>
              <li>
                <strong>Low effort</strong> — you invest ~45–60 minutes; we handle the rest.
              </li>
            </ul>

            <div className="cta-stack">
              <a
                className="btn btn-primary"
                href="https://calendly.com/hello-prooflaunchstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a 10-minute website audit"
                onClick={() =>
                  fire("audit_click", {
                    event_category: "conversion",
                    dest: "calendly",
                    page_location: window.location.href,
                  })
                }
              >
                Book 10-min audit
              </a>
              <p className="cta-note">
                Reserve a 7-day build slot (100% upfront). Fast-Track 3-day +{hasRate(currency, rates) && !isLoading ? formatPrice(convertPrice(250, currency, rates), currency) : '$250'}.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="guarantee">
              <h3 className="h3">Plain-English Guarantee</h3>
              <p>
                <strong>7-Day or $0.</strong> If we ship late, you don't pay the build fee. We'll
                also add a complimentary <em>Launch+</em> edit credit.
              </p>
            </div>

            <div className="timeline" aria-label="How the 7 days work">
              <h3 className="h3">How the 7 days work</h3>
              <ol className="days">
                <li>
                  <strong>Day 0:</strong> 10-min audit → intake
                </li>
                <li>
                  <strong>Day 1–2:</strong> wireframe + copy draft
                </li>
                <li>
                  <strong>Day 3–4:</strong> build + GA4 events
                </li>
                <li>
                  <strong>Day 5:</strong> edit round (≤15 lines)
                </li>
                <li>
                  <strong>Day 6:</strong> mobile polish + LH ≥85 / SEO ≥90
                </li>
                <li>
                  <strong>Day 7:</strong> launch + DebugView handoff
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Scoped styles (safe, lightweight) ========== */}
      <style>{`
        :root{
          --ink:#0B1220; --ink-2:#1B2332; --muted:#405069; --brand:#2663FF;
          --accent:#00C389; --bg:#FFFFFF; --chip:#EEF2F6; --radius:14px;
          --shadow:0 1px 2px rgba(0,0,0,.05);
        }
        .wrap{max-width:1120px;margin-inline:auto;padding:32px 20px;}
        .h1{font-size:clamp(1.9rem,2.6vw,2.6rem);line-height:1.15;color:var(--ink);margin:8px 0 12px;max-width:24ch}
        .sub{color:var(--muted);font-size:1.05rem;margin:0 0 14px;max-width:56ch}
        .chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px;padding:0;list-style:none}
        .chip{background:var(--chip);border-radius:999px;padding:8px 12px;font-size:.9rem;color:var(--ink)}
        .cta-row{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:0 0 6px}
        .btn{display:inline-flex;align-items:center;justify-content:center;border-radius:12px;padding:12px 16px;
             min-height:44px;line-height:1;text-decoration:none;border:1px solid transparent;box-shadow:var(--shadow)}
        .btn:focus-visible{outline:3px solid var(--brand);outline-offset:2px}
        .btn-primary{background:var(--brand);color:#fff}
        .btn-primary:hover{filter:brightness(0.96)}
        .btn-ghost{background:#fff;border-color:#D7DEE7;color:var(--ink)}
        .btn-ghost:hover{background:#F6F8FF}
        .link-email{min-height:44px;display:inline-flex;align-items:center;color:var(--muted);text-decoration:underline}
        .cta-note{margin:4px 0 0;color:var(--muted);font-size:.95rem}
        .brandline{margin-bottom:8px}
        .brand{color:var(--muted);text-decoration:none}
        .brand:hover{text-decoration:underline}
        .pls-hero{background:var(--bg)}
        .pls-offer{background:#FAFBFD;border-top:1px solid #EEF2F6;border-bottom:1px solid #EEF2F6}
        .grid{display:grid;grid-template-columns:1fr;gap:22px}
        @media(min-width:900px){.grid{grid-template-columns:1.1fr .9fr}}
        .ticks{margin:10px 0 16px;padding-left:20px;color:var(--ink-2)}
        .ticks li{margin:8px 0}
        .guarantee{background:#fff;border:1px solid #E6ECF2;border-radius:var(--radius);padding:16px}
        .h2{font-size:clamp(1.4rem,1.8vw,1.9rem);line-height:1.2;margin:0 0 8px;color:var(--ink)}
        .h3{font-size:1.05rem;margin:8px 0;color:var(--ink-2)}
        .timeline{margin-top:10px;background:#fff;border:1px solid #E6ECF2;border-radius:var(--radius);padding:16px}
        .days{margin:6px 0 0;padding-left:18px;color:var(--ink-2)}
        .days li{margin:6px 0}
        .cta-stack{margin-top:16px}
      `}</style>
    </>
  );
}
