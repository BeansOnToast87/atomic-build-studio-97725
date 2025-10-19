import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sfga } from '@/lib/analytics';

const packages = [
  {
    name: 'Starter',
    priceUSD: 690,
    priceGBP: 545,
    features: [
      '1-page MVP',
      'WhatsApp/Email CTAs',
      'GA4 events',
      'Lighthouse ≥85',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    priceUSD: 990,
    priceGBP: 780,
    features: [
      '+ FAQ or Gallery',
      '+ 1 extra edit',
      '+ Basic SEO schema',
      '+ Results review at 30 days',
    ],
    popular: true,
  },
  {
    name: 'Pro',
    priceUSD: 1490,
    priceGBP: 1175,
    features: [
      '+ Landing template',
      '+ Review request SMS template',
      '+ Call tracking install (pass-through)',
    ],
    popular: false,
  },
];

const Packages = () => {
  const [currency, setCurrency] = useState<'USD' | 'GBP'>('USD');
  
  const handleAuditClick = () => {
    sfga.fire('audit_click', {
      event_category: 'conversion',
      dest: 'calendly',
      page_location: window.location.href,
    });
  };

  return (
    <section className="w-full py-16 md:py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Simple Pricing
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-muted rounded-lg p-1 gap-1">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-6 py-2 rounded-md font-semibold transition-all min-h-[44px] ${
                currency === 'USD' 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="Show prices in US Dollars"
              aria-pressed={currency === 'USD'}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('GBP')}
              className={`px-6 py-2 rounded-md font-semibold transition-all min-h-[44px] ${
                currency === 'GBP' 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="Show prices in British Pounds"
              aria-pressed={currency === 'GBP'}
            >
              GBP (£)
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`bg-card rounded-lg p-6 md:p-8 flex flex-col ${
                pkg.popular
                  ? 'border-2 border-primary shadow-lg relative'
                  : 'border border-border'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    {currency === 'USD' 
                      ? `$${pkg.priceUSD.toLocaleString()}` 
                      : `£${pkg.priceGBP.toLocaleString()}`}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mb-8">
          100% upfront to reserve your 7-day slot. Fast-Track 3-day +{currency === 'USD' ? '$250' : '£197'}.
        </p>
        
        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleAuditClick}
            className="min-h-[44px] px-8"
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
        </div>
      </div>
    </section>
  );
};

export default Packages;
