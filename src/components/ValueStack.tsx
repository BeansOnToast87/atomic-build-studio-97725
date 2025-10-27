import { Check } from 'lucide-react';
import { useCurrency, convertPrice, formatPrice, hasRate } from "@/lib/currency";

const ValueStack = () => {
  const { currency, rates, isLoading } = useCurrency();
  
  // Helper functions for concise formatting
  const fmtUSD = (n: number) => `$${n.toLocaleString()}`;
  const fmtLocal = (usd: number) => 
    formatPrice(convertPrice(usd, currency, rates), currency);
  const canConvert = hasRate(currency, rates) && !isLoading;
  
  // USD baseline values
  const V1 = 1200;  // Enquiry Engine build
  const V2 = 250;   // Live handover
  const V3 = 150;   // WhatsApp replies
  const V4 = 200;   // Lead log
  const V5 = 150;   // Micro-edits
  const TOTAL = V1 + V2 + V3 + V4 + V5; // 1950
  const START_FROM = 990;
  
  const items = [{
    label: "7-Day Enquiry Engine build",
    valueUSD: 1200
  }, {
    label: "Live \"tracking is firing\" handover",
    valueUSD: 250
  }, {
    label: "10 WhatsApp replies you can paste",
    valueUSD: 150
  }, {
    label: "Lead log + simple automation",
    valueUSD: 200
  }, {
    label: "30-day micro-edits (2×15 min)",
    valueUSD: 150
  }];
  const total = items.reduce((sum, item) => sum + item.valueUSD, 0);
  return <section className="w-full py-16 md:py-20 bg-background" data-testid="value-stack" id="value-stack">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-500">
          What You Get
        </h2>
        
        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <ul className="space-y-4 mb-6">
            {items.map(item => <li key={item.label} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div className="flex-1 flex justify-between items-baseline gap-4">
                  <span className="text-base">{item.label}</span>
                  <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap font-variant-numeric-tabular">
                    {canConvert ? fmtLocal(item.valueUSD) : fmtUSD(item.valueUSD)} value
                  </span>
                </div>
              </li>)}
          </ul>
          
          <div className="border-t border-border pt-4 mt-4">
            <p className="text-lg md:text-xl font-bold text-center">
              Total value {canConvert ? fmtLocal(TOTAL) : fmtUSD(TOTAL)} — Today from {canConvert ? fmtLocal(START_FROM) : fmtUSD(START_FROM)}
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ValueStack;