import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { sfga } from '@/lib/analytics';
import { Calculator } from 'lucide-react';

const LeadMagnetModal = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    sfga.fire('lead_magnet_submit', {
      email,
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setIsSubmitted(false);
      setEmail('');
    }, 2000);
  };

  return (
    <div 
      className="fixed bottom-24 right-4 z-40" 
      data-testid="lead-magnet"
      id="lead-magnet"
    >
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="min-h-[56px] shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Get Free 10-min Enquiry Audit"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Free Audit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Free 10-min Enquiry Audit</DialogTitle>
            <DialogDescription>
              Get a short loom + checklist. We email the link.
            </DialogDescription>
          </DialogHeader>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@company.com"
                  className="mt-1"
                />
              </div>
              <Button type="submit" className="w-full min-h-[44px]">
                Send me the audit
              </Button>
            </form>
          ) : (
            <div className="py-8 text-center">
              <p className="text-lg font-semibold text-primary">
                Check your inbox — audit sent.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LeadMagnetModal;
