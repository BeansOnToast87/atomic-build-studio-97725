import { sfga } from '@/lib/analytics';

const Footer = () => {
  const handleEmailClick = () => {
    sfga.fire('email_click', {
      event_category: 'conversion',
      email: 'hello@prooflaunchstudio.com',
      page_location: window.location.href,
    });
  };

  return (
    <div className="w-full py-8 md:py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              7-day launch or build fee = $0.
            </p>
            <p className="text-sm text-muted-foreground">
              ~45–60 minutes of your time; we handle the rest.
            </p>
          </div>
          
          <div className="pt-4">
            <p className="text-sm text-muted-foreground">
              © Proof Launch Studio •{' '}
              <a
                href="mailto:hello@prooflaunchstudio.com"
                onClick={handleEmailClick}
                className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                aria-label="Email the agency"
              >
                hello@prooflaunchstudio.com
              </a>
            </p>
          </div>
          
          <div>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
