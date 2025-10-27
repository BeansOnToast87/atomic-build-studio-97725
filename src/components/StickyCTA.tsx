import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { sfga } from '@/lib/analytics';

const StickyCTA = () => {
  const phone = "+61436275470";
  const schedulerUrl = "https://calendly.com/hello-prooflaunchstudio";
  const pageSlug = window.location.pathname.replace(/\//g, '') || 'home';

  const handleAuditClick = () => {
    sfga.fire('cta_book_audit_click', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  };

  const handleWhatsAppClick = () => {
    sfga.fire('cta_whatsapp_click', {
      phone_number: phone,
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_slug: pageSlug
    });
  };

  return (
    <div 
      className="sticky-cta fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-50" 
      data-testid="sticky-cta"
      id="sticky-cta"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Button
            size="lg"
            onClick={handleAuditClick}
            className="min-h-[44px]"
            data-cta="primary"
            asChild
          >
            <a
              href={schedulerUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a 10-minute website audit"
            >
              Book a 10-min audit
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleWhatsAppClick}
            className="min-h-[44px]"
            data-cta="whatsapp"
            asChild
          >
            <a
              href={`https://wa.me/${phone}?text=Hi%20from%20${pageSlug}%20%E2%80%94%20interested%20in%20the%207-Day%20Enquiry%20Engine.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp the agency"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
