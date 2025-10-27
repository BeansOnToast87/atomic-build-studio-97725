import { useState, useEffect } from 'react';

export type SupportedCurrency = 'USD' | 'GBP' | 'EUR' | 'CAD' | 'AUD' | 'NZD' | 'INR' | 'SGD' | 'ZAR' | 'MYR';

const CACHE_KEY_RATES = 'fx_rates_USD';
const CACHE_KEY_OVERRIDE = 'currency_override';
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

interface CachedRates {
  ts: number;
  rates: Record<string, number>;
}

export async function detectUserCurrency(): Promise<SupportedCurrency> {
  // Check for manual override first
  try {
    const override = localStorage.getItem(CACHE_KEY_OVERRIDE);
    if (override) return override as SupportedCurrency;
  } catch (e) {
    // localStorage not available
  }

  // Try IP-based detection
  try {
    const response = await fetch('https://ipwho.is/');
    const data = await response.json();
    if (data?.success && data?.currency?.code) {
      const code = String(data.currency.code).toUpperCase();
      if (isSupportedCurrency(code)) return code as SupportedCurrency;
    }
  } catch (e) {
    // API failed, continue to fallback
  }

  // Fallback to language
  const lang = (navigator.language || 'en-US').toUpperCase();
  if (lang.endsWith('-GB')) return 'GBP';
  if (lang.endsWith('-AU')) return 'AUD';
  if (lang.endsWith('-CA')) return 'CAD';
  if (lang.endsWith('-NZ')) return 'NZD';
  if (lang.endsWith('-IN')) return 'INR';
  if (lang.endsWith('-SG')) return 'SGD';
  if (lang.endsWith('-ZA')) return 'ZAR';
  if (lang.endsWith('-MY')) return 'MYR';
  
  return 'USD';
}

export async function fetchExchangeRates(): Promise<Record<string, number>> {
  try {
    // Check cache first
    const cached = localStorage.getItem(CACHE_KEY_RATES);
    if (cached) {
      const data: CachedRates = JSON.parse(cached);
      if (Date.now() - data.ts < CACHE_TTL) {
        return data.rates;
      }
    }
  } catch (e) {
    // Cache read failed
  }

  // Fetch fresh rates
  try {
    const response = await fetch('https://api.exchangerate.host/latest?base=USD');
    const data = await response.json();
    const rates = data?.rates || {};
    
    // Cache the rates
    try {
      localStorage.setItem(CACHE_KEY_RATES, JSON.stringify({
        ts: Date.now(),
        rates
      }));
    } catch (e) {
      // Cache write failed
    }
    
    return rates;
  } catch (e) {
    // API failed, return empty rates (will fallback to USD)
    return {};
  }
}

export function convertPrice(
  usdAmount: number,
  targetCurrency: SupportedCurrency,
  rates: Record<string, number>
): number {
  if (targetCurrency === 'USD') return usdAmount;
  
  const rate = rates[targetCurrency];
  if (!rate || !Number.isFinite(rate)) return usdAmount;
  
  return usdAmount * rate;
}

export function formatPrice(amount: number, currency: SupportedCurrency): string {
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency,
      maximumFractionDigits: 0
    }).format(amount);
  } catch (e) {
    return `${Math.round(amount)} ${currency}`;
  }
}

function isSupportedCurrency(code: string): boolean {
  return ['USD', 'GBP', 'EUR', 'CAD', 'AUD', 'NZD', 'INR', 'SGD', 'ZAR', 'MYR'].includes(code);
}

export function useCurrency() {
  const [currency, setCurrency] = useState<SupportedCurrency>('USD');
  const [rates, setRates] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function init() {
      const [detectedCurrency, fetchedRates] = await Promise.all([
        detectUserCurrency(),
        fetchExchangeRates()
      ]);

      if (mounted) {
        setCurrency(detectedCurrency);
        setRates(fetchedRates);
        setIsLoading(false);
      }
    }

    init();

    const onStorage = (e: StorageEvent) => {
      if (e.key === CACHE_KEY_OVERRIDE && e.newValue && isSupportedCurrency(e.newValue.toUpperCase())) {
        setCurrency(e.newValue.toUpperCase() as SupportedCurrency);
      }
    };

    const onCustom = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (typeof detail === 'string' && isSupportedCurrency(detail.toUpperCase())) {
        setCurrency(detail.toUpperCase() as SupportedCurrency);
      }
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener('currency_override_changed', onCustom as EventListener);

    return () => {
      mounted = false;
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('currency_override_changed', onCustom as EventListener);
    };
  }, []);

  const updateCurrency = (newCurrency: SupportedCurrency) => {
    try {
      localStorage.setItem(CACHE_KEY_OVERRIDE, newCurrency);
    } catch (e) {
      // localStorage not available
    }
    setCurrency(newCurrency);
    try {
      window.dispatchEvent(new CustomEvent('currency_override_changed', { detail: newCurrency }));
    } catch (e) {
      // Custom event not supported
    }
  };

  return { currency, rates, isLoading, updateCurrency };
}
