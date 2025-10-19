import React from "react";

export default function MiniFAQ() {
  const book = () => {
    // @ts-ignore
    window.sfga?.fire?.("audit_click", { event_category:"conversion", dest:"calendly", page_location: window.location.href });
  };
  const wa = () => {
    // @ts-ignore
    window.sfga?.fire?.("whatsapp_click", { event_category:"conversion", phone_number:"+61436275470", page_location: window.location.href });
  };

  return (
    <section id="faq" aria-labelledby="faq-title" className="section">
      <div className="container">
        <h2 id="faq-title">FAQ — quick answers</h2>

        <div className="faq-grid">
          <details>
            <summary>What if you miss the 7-day launch?</summary>
            <div>
              If we miss Day 7, you don't pay the build fee. Simple. We'll still finish and hand over,
              but the build fee becomes $0 (you'll only ever cover any optional pass-through costs).
            </div>
          </details>

          <details>
            <summary>What do you need from me?</summary>
            <div>
              ~45–60 minutes total: a short intake, your logo/brand colors (optional),
              and 3–5 service photos. We write/structure the page, wire GA4, and ship.
            </div>
          </details>

          <details>
            <summary>How soon can you start?</summary>
            <div>
              We hold <strong>2 build slots per week</strong>. Need it faster?
              Add <em>Fast-Track (3-day)</em> for +$250, subject to current slot availability.
            </div>
          </details>
        </div>

        <div className="faq-cta">
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
          <a
            className="btn btn-light"
            href="https://wa.me/61436275470"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp the agency"
            onClick={wa}
          >
            WhatsApp us
          </a>
        </div>
      </div>

      <style>{`
        .section { padding-block: 2.5rem; }
        .container { max-width: 1100px; margin-inline: auto; padding-inline: 1rem; }
        .faq-grid { display:grid; gap: .75rem; grid-template-columns: 1fr; }
        details { border:1px solid #e5e7eb; border-radius:12px; padding:.75rem 1rem; background:#fff; }
        summary { cursor:pointer; font-weight:600; list-style:none; }
        summary::-webkit-details-marker { display:none; }
        details[open] { background:#f6f8ff; border-color:#dbe2ff; }
        .faq-cta { margin-top: 1rem; display:flex; gap:.5rem; flex-wrap:wrap; }
        .btn { display:inline-flex; align-items:center; justify-content:center; min-height:44px; padding:.75rem 1rem; border-radius:12px; font-weight:600; background:#0B1220; color:#fff; text-decoration:none; }
        .btn:focus-visible { outline:3px solid #2663FF; outline-offset:2px; }
        .btn-light { background:#F6F8FF; color:#0B1220; border:1px solid #d1d5db; }
        .btn-light:focus-visible { outline:3px solid #2663FF; outline-offset:2px; }
        @media (prefers-color-scheme: dark){
          details { background:#111827; border-color:#374151; }
          details[open]{ background:#0b1220; border-color:#1f2937; }
          .btn-light { background:#162033; color:#F6F8FF; border-color:#243043; }
        }
      `}</style>
    </section>
  );
}
