import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { sfga } from '@/lib/analytics';

const StickyCTA = () => {
  const handleAuditClick = () => {
    sfga.fire('audit_click', {
      event_category: 'conversion',
      dest: 'calendly',
      page_location: window.location.href,
    });
  };

  const handleWhatsAppClick = () => {
    sfga.fire('whatsapp_click', {
      event_category: 'conversion',
      phone_number: '+61436275470',
      page_location: window.location.href,
    });
  };

  return (
    <div className="sticky-cta fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Button
            size="lg"
            onClick={handleAuditClick}
            className="min-h-[44px]"
            asChild
          >
            <a
              href="https://calendly.com/hello-prooflaunchstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a 10-minute website audit"
            >
              Book 10-min audit
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleWhatsAppClick}
            className="min-h-[44px]"
            asChild
          >
            <a
              href="https://wa.me/61436275470"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp the agency"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
