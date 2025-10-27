import { sfga } from '@/lib/analytics';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const phone = "+61436275470";
  const waPhone = "61436275470"; // digits-only for wa.me
  const schedulerUrl = "https://calendly.com/hello-prooflaunchstudio";
  const pageSlug = window.location.pathname === '/' ? 'home' : window.location.pathname.replace(/^\//, '').replace(/\/+/g, '-');

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
    <section className="w-full bg-background" data-testid="hero" id="hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Guarantee Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold mb-2">
            Proof or We Pay — refund build + keep working free until GA4 + WhatsApp track.
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            Get a lead-ready site in 7 days.
          </h1>
          
          {/* Subhead */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We wire WhatsApp + tracking for you. If tracking and messages are not live by Day 7, we refund the build and keep working free.
          </p>

          {/* Badges Row */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-card border border-border text-sm font-medium">
              Lighthouse ≥90
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-card border border-border text-sm font-medium">
              GA4 tracking
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-card border border-border text-sm font-medium">
              7-Day Sprint
            </span>
          </div>
          
          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center">
            {/* Primary CTA */}
            <Button 
              size="lg"
              onClick={handleAuditClick}
              asChild
              className="min-h-[44px] min-w-[44px]"
              data-cta="primary"
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
            
            {/* Secondary CTA */}
            <Button 
              size="lg"
              variant="secondary"
              onClick={handleWhatsAppClick}
              asChild
              className="min-h-[44px] min-w-[44px]"
              data-cta="whatsapp"
            >
              <a 
                href={`https://wa.me/${waPhone}?text=Hi%20from%20${pageSlug}%20%E2%80%94%20interested%20in%20the%207-Day%20Enquiry%20Engine.`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp the agency"
              >
                WhatsApp us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
