import { Check } from 'lucide-react';

const ValueStack = () => {
  const items = [
    { label: "7-Day Enquiry Engine build", valueUSD: 1200 },
    { label: "Live DebugView handover", valueUSD: 250 },
    { label: "10 WhatsApp reply scripts", valueUSD: 150 },
    { label: "Lead log + zap install", valueUSD: 200 },
    { label: "30-day micro-edits (two 15-min tweaks)", valueUSD: 150 }
  ];

  const total = items.reduce((sum, item) => sum + item.valueUSD, 0);

  return (
    <section 
      className="w-full py-16 md:py-20 bg-background" 
      data-testid="value-stack"
      id="value-stack"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What You Get
        </h2>
        
        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <ul className="space-y-4 mb-6">
            {items.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div className="flex-1 flex justify-between items-baseline gap-4">
                  <span className="text-base">{item.label}</span>
                  <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap font-variant-numeric-tabular">
                    ${item.valueUSD.toLocaleString()} value
                  </span>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="border-t border-border pt-4 mt-4">
            <p className="text-lg md:text-xl font-bold text-center">
              Total value ${total.toLocaleString()} — Today from $990
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;
