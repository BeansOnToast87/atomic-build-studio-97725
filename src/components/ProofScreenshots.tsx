import React from "react";

export default function ProofScreenshots() {
  const fire = (artifact: "debugview" | "lighthouse") => {
    // @ts-ignore
    window.sfga?.fire?.("audit_click", {
      event_category: "micro",
      dest: "proof_view",
      artifact,
      page_location: window.location.href,
    });
  };
  const book = () => {
    // @ts-ignore
    window.sfga?.fire?.("audit_click", {
      event_category: "conversion",
      dest: "calendly",
      page_location: window.location.href,
    });
  };

  return (
    <section id="proof" aria-labelledby="proof-title" className="pls-proof section">
      <div className="container">
        <h2 id="proof-title">See the proof</h2>
        <p className="muted">Real screenshots from handover. Click to view full size.</p>

        <div className="proof-grid">
          {/* Card 1: GA4 DebugView */}
          <figure className="proof-card">
            <a
              href="/assets/proof/ga4-debugview-full.webp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GA4 DebugView screenshot"
              onClick={() => fire("debugview")}
            >
              <img
                src="/assets/proof/ga4-debugview-thumb.webp"
                alt="GA4 DebugView showing whatsapp_click and audit_click events"
                loading="lazy"
                decoding="async"
                width={640}
                height={404}
                style={{ aspectRatio: "16 / 10", objectFit: "cover" }}
              />
            </a>
            <figcaption>
              GA4 DebugView — events firing: <code>audit_click</code>, <code>whatsapp_click</code>.
            </figcaption>
          </figure>

          {/* Card 2: Lighthouse */}
          <figure className="proof-card">
            <a
              href="/assets/proof/lighthouse-report-full.webp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Lighthouse report screenshot"
              onClick={() => fire("lighthouse")}
            >
              <img
                src="/assets/proof/lighthouse-report-thumb.webp"
                alt="Lighthouse mobile report ≥85 performance and ≥90 SEO"
                loading="lazy"
                decoding="async"
                width={640}
                height={404}
                style={{ aspectRatio: "16 / 10", objectFit: "cover" }}
              />
            </a>
            <figcaption>Lighthouse (mobile) — ≥85 Performance, ≥90 SEO at handover.</figcaption>
          </figure>
        </div>

        <div className="proof-cta">
          <a
            className="btn"
            href="https://calendly.com/hello-prooflaunchstudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a 10-minute website audit"
            onClick={book}
          >
            Book 10-min audit
          </a>
        </div>
      </div>

      {/* Scoped, lightweight styles */}
      <style>{`
        .section { padding-block: 2.5rem; }
        .container { max-width: 1100px; margin-inline: auto; padding-inline: 1rem; }
        .muted { opacity: .8; font-size: .95rem; }
        .proof-grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
        .proof-card { background: var(--card, #fff); border: 1px solid #e5e7eb; border-radius: 16px; padding: 12px; }
        .proof-card img { width: 100%; height: auto; border-radius: 12px; }
        .proof-card figcaption { margin-top: .5rem; font-size: .925rem; }
        .proof-cta { margin-top: 1rem; display: flex; justify-content: center; }
        .btn { display:inline-flex; align-items:center; justify-content:center; min-height:44px; padding:.75rem 1rem; border-radius:12px; font-weight:600; background:#0B1220; color:#fff; text-decoration:none; }
        .btn:focus-visible { outline: 3px solid #2663FF; outline-offset: 2px; }
        @media (prefers-color-scheme: dark) {
          .proof-card { background: #111827; border-color:#374151; }
        }
      `}</style>
    </section>
  );
}
