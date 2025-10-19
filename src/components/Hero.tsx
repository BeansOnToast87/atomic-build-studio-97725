import { sfga } from '@/lib/analytics';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/proof-launch-logo.png';

const Hero = () => {
  return (
    <section className="w-full bg-background bg-[radial-gradient(ellipse_at_top,hsl(var(--muted)/0.3),transparent)] dark:bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-5 md:space-y-7">
            {/* Brand Lockup - md+ only */}
            <picture className="hidden md:block shrink-0">
              <img 
                src={logoImage}
                width="120"
                height="120"
                alt="Proof Launch Studio logo"
                decoding="async"
                fetchPriority="low"
                className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
              />
            </picture>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Get more enquiries in 7 days. High-trust local-service sites launched remotely.
            </h1>
            
            {/* Subhead */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Manchester-born, currently AU-based. We ship UK/US home-service sites fast—GA4-tracked, results or build fee = $0.
            </p>
            
            {/* CTA Group - All CTAs */}
            <div className="flex flex-col md:flex-row gap-4 pt-2 md:items-center">
              {/* Primary CTA */}
              <Button 
                size="lg"
                asChild
                className="min-h-[44px] min-w-[44px] w-full md:w-auto"
              >
                <a 
                  href="https://calendly.com/hello-prooflaunchstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a 10-minute website audit"
                  onClick={() => sfga.fire('audit_click', {
                    event_category: 'conversion',
                    dest: 'calendly',
                    page_location: window.location.href
                  })}
                >
                  Book 10-min audit
                </a>
              </Button>
              
              {/* Secondary CTA */}
              <Button 
                size="lg"
                variant="secondary"
                asChild
                className="min-h-[44px] min-w-[44px] w-full md:w-auto"
              >
                <a 
                  href="https://wa.me/61436275470"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp the agency"
                  onClick={() => sfga.fire('whatsapp_click', {
                    event_category: 'conversion',
                    phone_number: '+61436275470',
                    page_location: window.location.href
                  })}
                >
                  WhatsApp us
                </a>
              </Button>
              
              {/* Tertiary CTA - Inline on md+ */}
              <a 
                href="mailto:hello@prooflaunchstudio.com"
                className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring inline-flex items-center justify-center min-h-[44px] text-base font-medium w-full md:w-auto"
                aria-label="Email the agency"
                onClick={() => sfga.fire('email_click', {
                  event_category: 'conversion',
                  email: 'hello@prooflaunchstudio.com',
                  page_location: window.location.href
                })}
              >
                Email
              </a>
            </div>
            
            {/* Micro-trust strip */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M8 1l2 4 4.5.5-3.5 3 1 4.5L8 11l-4 2 1-4.5-3.5-3L6 5l2-4z" fill="currentColor"/>
                </svg>
                <span>Lighthouse ≥85 / SEO ≥90</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M6 8l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>GA4 events wired</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="2" y="4" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M5 8h6M5 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>7-day or $0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
