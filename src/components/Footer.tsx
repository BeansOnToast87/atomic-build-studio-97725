import { sfga } from '@/lib/analytics';

const Footer = () => {
  const phone = "+61436275470";
  const waPhone = "61436275470"; // digits-only for wa.me
  const email = "hello@prooflaunchstudio.com";
  const pageSlug = window.location.pathname === '/' ? 'home' : window.location.pathname.replace(/^\//, '').replace(/\/+/g, '-');

  const handleEmailClick = () => {
    sfga.fire('email_click', {
      event_category: 'conversion',
      email,
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  };

  const handleWhatsAppClick = () => {
    sfga.fire('cta_whatsapp_click', {
      phone_number: phone,
      page_slug: pageSlug,
      location: 'footer',
      is_mobile: /Mobi/i.test(navigator.userAgent),
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  };

  return (
    <div 
      className="w-full py-8 md:py-12 px-4 bg-muted/30" 
      data-testid="footer"
      id="footer"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              AU/UK remote
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 items-center">
            <a
              href={`mailto:${email}`}
              onClick={handleEmailClick}
              className="text-sm hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded px-2 py-1"
              aria-label="Email the agency"
            >
              {email}
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href={`https://wa.me/${waPhone}?text=Hi%20from%20${pageSlug}%20%E2%80%94%20interested%20in%20the%207-Day%20Enquiry%20Engine.`}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded px-2 py-1"
              aria-label="WhatsApp the agency"
              data-cta="whatsapp"
              data-testid="cta-whatsapp"
              data-loc="footer"
            >
              WhatsApp: {phone}
            </a>
          </div>
          
          <div className="pt-4 space-y-2 text-xs text-muted-foreground">
            <p>
              Cookie + tracking notice shown on first visit; GA4 used for basic events.
            </p>
            <p>
              UK/EU: VAT/GST may apply; prices shown exclude VAT unless stated.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              Privacy Policy
            </a>
          </div>

          <div className="pt-2">
            <p className="text-xs text-muted-foreground">
              © Proof Launch Studio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
