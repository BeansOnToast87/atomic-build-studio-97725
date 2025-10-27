import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sfga } from '@/lib/analytics';
const PricingTierCards = () => {
  const [proofGuardPlan, setProofGuardPlan] = useState<'monthly' | 'annual'>('monthly');
  const schedulerUrl = "https://calendly.com/hello-prooflaunchstudio";
  const tiers = [{
    id: "tier-proto",
    name: "Proto Sprint",
    price: 990,
    deposit: 200,
    balanceOnDay1: 790,
    mostPopular: false,
    features: ["Live in 7 days; Lighthouse 90+", "1 landing page + WhatsApp CTA", "Google tracking so clicks are counted (3 events)", "First enquiry in 7 days (scripts provided)"]
  }, {
    id: "tier-growth",
    name: "Growth Bundle",
    price: 1490,
    deposit: 300,
    balanceOnDay1: 1190,
    mostPopular: true,
    features: ["Everything in Proto", "A/B hero, booking button", "Simple follow-up template (SMS)", "KPI: 10+ tracked actions; 3+ enquiries in 14 days (you bring traffic)"]
  }, {
    id: "tier-pro",
    name: "Pro Launch",
    price: 2400,
    deposit: 500,
    balanceOnDay1: 1900,
    mostPopular: false,
    features: ["Everything in Growth", "Second page, retarget pixel", "Weekly check-ins for 30 days (loom)", "KPI: 20+ tracked actions; weekly report + fixes"]
  }];
  const rushFeePercent = 30;
  const handlePricingSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const pageSlug = location.pathname === '/' ? 'home' : location.pathname.replace(/^\/+/, '').replace(/\/+/g, '-');
    
    sfga.fire('pricing_select', {
      tier: btn.dataset.tier || '',
      currency: 'USD',
      price: Number(btn.dataset.price) || 0,
      deposit: Number(btn.dataset.deposit) || 0,
      rush: btn.dataset.rush === 'true',
      page_slug: pageSlug,
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  };
  return <section className="w-full py-16 md:py-20 px-4 bg-muted/20" data-testid="pricing" id="pricing" data-currency="USD">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-500">
          Simple Pricing
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-sm">
          Prices exclude VAT unless stated. VAT handling appears on invoice.
        </p>

        {/* Proof Guard Toggle */}
        <div className="max-w-md mx-auto mb-12 bg-card border border-border rounded-lg p-6">
          <h3 className="font-bold mb-3">Proof Guard — Ongoing Support</h3>
          <div className="flex gap-2 mb-4">
            <button onClick={() => setProofGuardPlan('monthly')} className={`flex-1 px-4 py-2 rounded-md font-semibold transition-all min-h-[44px] ${proofGuardPlan === 'monthly' ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-muted text-muted-foreground hover:text-foreground'}`} aria-pressed={proofGuardPlan === 'monthly'}>
              $99/mo
            </button>
            <button onClick={() => setProofGuardPlan('annual')} className={`flex-1 px-4 py-2 rounded-md font-semibold transition-all min-h-[44px] ${proofGuardPlan === 'annual' ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-muted text-muted-foreground hover:text-foreground'}`} aria-pressed={proofGuardPlan === 'annual'}>
              $990/yr <span className="text-xs">(save 2 months)</span>
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            Checks monthly, small fixes, 1 minor edit/mo, GA4 snapshot, WhatsApp priority.
          </p>
        </div>

        {/* Slots Cap Notice */}
        <div className="max-w-md mx-auto mb-8 text-center">
          <p className="text-sm text-muted-foreground">
            Only 5 slots each month.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {tiers.map(tier => <article key={tier.id} id={tier.id} className={`bg-card rounded-lg p-6 md:p-8 flex flex-col ${tier.mostPopular ? 'border-2 border-primary shadow-lg relative' : 'border border-border'}`}>
              {tier.mostPopular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold" style={{
                fontVariantNumeric: 'tabular-nums',
                minWidth: '120px'
              }}>
                    ${tier.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground" style={{
              fontVariantNumeric: 'tabular-nums'
            }}>
                  Deposit <strong>${tier.deposit}</strong> today; <strong>${tier.balanceOnDay1}</strong> due Day-1
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Rush fee: +{rushFeePercent}% for 48-hour build window
                </p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map(feature => <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm">{feature}</span>
                  </li>)}
              </ul>

              <Button 
                size="lg" 
                onClick={handlePricingSelect}
                className="min-h-[44px] w-full" 
                data-cta="primary"
                data-testid="pricing-select"
                data-tier={tier.name.toLowerCase().replace(' ', '-')}
                data-price={tier.price}
                data-deposit={tier.deposit}
                data-rush="false"
                asChild
              >
                <a href={schedulerUrl} target="_blank" rel="noopener noreferrer" aria-label={`Book audit for ${tier.name}`}>
                  Book a 10-min audit
                </a>
              </Button>

              {/* Guarantee Note */}
              <p className="text-xs text-muted-foreground text-center mt-3">
                Miss Day-7? Refund + we keep working.
              </p>
            </article>)}
        </div>
      </div>
    </section>;
};
export default PricingTierCards;