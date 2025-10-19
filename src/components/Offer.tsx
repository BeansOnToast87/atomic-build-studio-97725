import { sfga } from '@/lib/analytics';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShieldCheck, Clock, DollarSign } from 'lucide-react';

const Offer = () => {
  return (
    <section className="w-full bg-muted/30 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Why Proof Launch Studio?
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Value Bullets */}
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground leading-relaxed">
                Launch in 7 days or build fee = $0.
              </p>
            </div>
            
            <div className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground leading-relaxed">
                GA4 events + Lighthouse ≥85 / SEO ≥90 at handover.
              </p>
            </div>
            
            <div className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground leading-relaxed">
                You invest ~45–60 minutes; we handle the rest.
              </p>
            </div>
          </div>

          {/* Right Column - Guarantee Tiles */}
          <div className="space-y-4">
            {/* Tile 1: 7-Day or $0 */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    7-Day or $0
                  </h3>
                  <p className="text-muted-foreground">
                    If we miss, you don't pay the build fee.
                  </p>
                </div>
              </div>
            </div>

            {/* Tile 2: 90-Day Results Check */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    90-Day Results Check
                  </h3>
                  <p className="text-muted-foreground">
                    We review clicks & enquiries together.
                  </p>
                </div>
              </div>
            </div>

            {/* Tile 3: No-surprise Pricing */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No-surprise Pricing
                  </h3>
                  <p className="text-muted-foreground">
                    Scope and price locked before we start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-12 md:mt-16 text-center">
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
        </div>
      </div>
    </section>
  );
};

export default Offer;
