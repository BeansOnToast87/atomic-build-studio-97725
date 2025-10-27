import { Link } from "react-router-dom";
import { sfga } from "@/lib/analytics";

type DemoPageProps = {
  title: string;
  subtitle?: string;
  mediaType: "img" | "video";
  src: string;
  caption?: string;
  backHref?: string;
};

const phone = "+61436275470";
const waPhone = "61436275470";
const schedulerUrl = "https://calendly.com/hello-prooflaunchstudio";

export default function DemoPage({ title, subtitle, mediaType, src, caption, backHref = "/" }: DemoPageProps) {
  const pageSlug = location.pathname === "/" ? "home" : location.pathname.replace(/^\/+/, "").replace(/\/+/g, "-");

  const onAudit = () =>
    sfga.fire("cta_book_audit_click", {
      location: "demo",
      page_slug: pageSlug,
      cta_variant: "primary",
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });

  const onWA = () =>
    sfga.fire("cta_whatsapp_click", {
      phone_number: phone,
      page_slug: pageSlug,
      location: "demo",
      is_mobile: /Mobi/i.test(navigator.userAgent),
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });

  return (
    <main className="container mx-auto px-4 py-12 space-y-8">
      <nav className="text-sm">
        <Link to={backHref} className="underline">← Back</Link>
      </nav>

      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </header>

      <section className="rounded-lg border bg-card p-4">
        {mediaType === "img" ? (
          <figure className="space-y-2">
            <img src={src} alt={title} className="w-full rounded-md" />
            {caption && <figcaption className="text-sm text-muted-foreground">{caption}</figcaption>}
          </figure>
        ) : (
          <video
            className="w-full rounded-md"
            controls
            preload="metadata"
            src={src}
          />
        )}
      </section>

      <div className="flex gap-3">
        <a
          href={schedulerUrl}
          onClick={onAudit}
          data-testid="cta-audit"
          data-loc="demo"
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-primary-foreground"
        >
          Book a 10-min audit
        </a>
        <a
          href={`https://wa.me/${waPhone}?text=Hi%20from%20${pageSlug}%20—%20interested%20in%20the%207-Day%20Enquiry%20Engine.`}
          onClick={onWA}
          data-testid="cta-whatsapp"
          data-loc="demo"
          className="inline-flex items-center justify-center rounded-md border px-5 py-3"
          rel="noopener"
        >
          WhatsApp us
        </a>
      </div>
    </main>
  );
}
