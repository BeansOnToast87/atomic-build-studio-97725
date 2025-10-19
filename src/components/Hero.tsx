import { sfga } from '@/lib/analytics';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-5 md:space-y-7">
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
                className="min-h-[44px] min-w-[44px]"
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
                className="min-h-[44px] min-w-[44px]"
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
                className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring inline-flex items-center min-h-[44px] text-base font-medium"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
