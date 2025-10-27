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
    <section id="faq" aria-labelledby="faq-title" className="section" data-testid="faq">
      <div className="container">
        <h2 id="faq-title">FAQ — quick answers</h2>

        <div className="faq-grid">
          <details>
            <summary>
              What if we miss the 7-day launch?
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </summary>
            <div>
              We refund the build and keep working free until GA4 + WhatsApp track as promised.
            </div>
          </details>

          <details>
            <summary>
              Do I need to write copy?
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </summary>
            <div>
              No. We draft it; you approve. You just share 3 services and prices.
            </div>
          </details>

          <details>
            <summary>
              What do you need from me?
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </summary>
            <div>
              Logo (or we mock), 3 photos, services/prices, WhatsApp number, domain access.
            </div>
          </details>

          <details>
            <summary>
              How soon can I start?
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </summary>
            <div>
              Pick a slot, pay the deposit, 48-hour rush available (+30%).
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
        h2 { 
          color: #0B1220; 
          font-size: 1.75rem; 
          font-weight: 700; 
          margin-bottom: 1.5rem; 
        }
        .faq-grid { display:grid; gap: .875rem; grid-template-columns: 1fr; }
        details { 
          border: 2px solid #d1d5db; 
          border-radius: 12px; 
          padding: .875rem 1.25rem; 
          background: #f9fafb;
          box-shadow: 0 1px 3px rgba(0,0,0,.08);
          transition: all 0.2s ease;
        }
        summary { 
          cursor: pointer; 
          font-weight: 600; 
          font-size: 1.05rem;
          color: #111827;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: .25rem 0;
          border-radius: 8px;
        }
        summary::-webkit-details-marker { display: none; }
        summary:hover { background: #f3f4f6; padding-inline: .5rem; }
        summary svg { 
          flex-shrink: 0;
          transition: transform 0.2s ease;
          opacity: 0.6;
        }
        details[open] summary svg { transform: rotate(180deg); }
        details[open] { 
          background: #f6f8ff; 
          border-color: #93b4ff;
          box-shadow: 0 2px 4px rgba(38,99,255,.12);
        }
        details div { 
          margin-top: .75rem; 
          padding-top: .75rem; 
          border-top: 1px solid #e5e7eb;
          line-height: 1.6;
          color: #1B2332;
          font-size: 0.975rem;
        }
        .faq-cta { margin-top: 1.5rem; display:flex; gap:.5rem; flex-wrap:wrap; }
        .btn { display:inline-flex; align-items:center; justify-content:center; min-height:44px; padding:.75rem 1rem; border-radius:12px; font-weight:600; background:#0B1220; color:#fff; text-decoration:none; }
        .btn:focus-visible { outline:3px solid #2663FF; outline-offset:2px; }
        .btn-light { background:#F6F8FF; color:#0B1220; border:1px solid #d1d5db; }
        .btn-light:focus-visible { outline:3px solid #2663FF; outline-offset:2px; }
        @media (prefers-color-scheme: dark){
          h2 { color: #F9FAFB; }
          details { background:#1f2937; border-color:#4b5563; }
          details[open]{ background:#0b1220; border-color:#3b82f6; }
          details div { border-top-color: #374151; color: #E5E7EB; }
          summary { color: #f9fafb; }
          summary:hover { background: #374151; }
          .btn-light { background:#162033; color:#F6F8FF; border-color:#243043; }
        }
      `}</style>
    </section>
  );
}
