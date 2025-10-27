import { SupportedCurrency } from '@/lib/currency';

interface CurrencySelectorProps {
  value: SupportedCurrency;
  onChange: (currency: SupportedCurrency) => void;
  disabled?: boolean;
}

const CurrencySelector = ({ value, onChange, disabled }: CurrencySelectorProps) => {
  const currencies: SupportedCurrency[] = [
    'USD', 'GBP', 'EUR', 'CAD', 'AUD', 'NZD', 'INR', 'SGD', 'ZAR'
  ];

  return (
    <div className="max-w-md mx-auto mb-6">
      <label htmlFor="currencySelect" className="sr-only">
        Select Currency
      </label>
      <select
        id="currencySelect"
        value={value}
        onChange={(e) => onChange(e.target.value as SupportedCurrency)}
        disabled={disabled}
        className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground min-h-[44px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        data-testid="currency-selector"
      >
        {currencies.map(cur => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
