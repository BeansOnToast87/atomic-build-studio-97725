import { Link } from "react-router-dom";
import { sfga } from "@/lib/analytics";

const phone = "+61436275470";
const waPhone = "61436275470";
const schedulerUrl = "https://calendly.com/hello-prooflaunchstudio";

export default function ProofGifs() {
  const pageSlug = location.pathname.replace(/^\/+/, "").replace(/\/+/g, "-") || "home";
  const fireAudit = () =>
    sfga.fire("cta_book_audit_click", { 
      location: "proof", 
      page_slug: pageSlug, 
      cta_variant: "primary", 
      page_title: document.title, 
      page_location: location.href, 
      page_path: location.pathname 
    });
  const fireWA = () =>
    sfga.fire("cta_whatsapp_click", { 
      phone_number: phone, 
      page_slug: pageSlug, 
      location: "proof", 
      is_mobile: /Mobi/i.test(navigator.userAgent), 
      page_title: document.title, 
      page_location: location.href, 
      page_path: location.pathname 
    });

  return (
    <main className="container mx-auto px-4 py-12 space-y-8">
      <nav className="text-sm">
        <Link to="/#gallery" className="underline">← Back</Link>
      </nav>
      
      <h1 className="text-3xl font-bold">Proof GIFs</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <figure className="rounded-lg border bg-card p-3">
          <img src="/assets/proof/debugview_firing.gif" alt="DebugView firing" className="w-full rounded" />
          <figcaption className="mt-2 text-sm text-muted-foreground">
            Live tracking: WhatsApp + pricing clicks are counted.
          </figcaption>
        </figure>
        
        <figure className="rounded-lg border bg-card p-3">
          <img src="/assets/proof/lighthouse_mobile_90.gif" alt="Lighthouse 90+" className="w-full rounded" />
          <figcaption className="mt-2 text-sm text-muted-foreground">
            Mobile speed 90+ so more visitors stick.
          </figcaption>
        </figure>
        
        <figure className="rounded-lg border bg-card p-3">
          <img src="/assets/proof/whatsapp_ping.gif" alt="WhatsApp ping" className="w-full rounded" />
          <figcaption className="mt-2 text-sm text-muted-foreground">
            Leads go straight to your phone.
          </figcaption>
        </figure>
      </div>

      <div className="flex gap-3">
        <a 
          href={schedulerUrl} 
          onClick={fireAudit} 
          data-testid="cta-audit" 
          data-loc="proof" 
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-primary-foreground"
        >
          Book a 10-min audit
        </a>
        <a 
          href={`https://wa.me/${waPhone}?text=Hi%20from%20${pageSlug}%20—%20interested%20in%20the%207-Day%20Enquiry%20Engine.`}
          onClick={fireWA} 
          data-testid="cta-whatsapp" 
          data-loc="proof" 
          className="inline-flex items-center justify-center rounded-md border px-5 py-3" 
          rel="noopener"
        >
          WhatsApp us
        </a>
      </div>
    </main>
  );
}
