import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const ConsentBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent already given
    const consentAccepted = localStorage.getItem('consent_accepted');
    if (!consentAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('consent_accepted', '1');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg"
      style={{
        bottom: 'calc(env(safe-area-inset-bottom, 0px) + 64px)',
        zIndex: 60,
      }}
      data-testid="consent-bar"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-foreground flex-1 min-w-[200px]">
            We use cookies for tracking and speed. Accept to continue.
          </p>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleAccept}
              className="min-h-[36px]"
            >
              Accept
            </Button>
            <Button
              size="sm"
              variant="ghost"
              asChild
              className="min-h-[36px]"
            >
              <a href="/privacy">Learn more</a>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleAccept}
              className="min-h-[36px] w-[36px] p-0"
              aria-label="Close consent banner"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentBar;
