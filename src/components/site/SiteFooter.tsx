import { Link } from "react-router-dom";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/contact";

const SiteFooter = () => {
  return (
    <div className="w-full border-t border-border bg-background">
      <div className="container mx-auto py-8 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
        <span className="font-display text-lg text-ink">Proof Launch Studio</span>
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2 text-sm text-ink-soft">
          <a href={CONTACT_MAILTO} className="link-editorial">
            {CONTACT_EMAIL}
          </a>
          <Link to="/privacy" className="hover:text-ink transition-colors">
            Privacy
          </Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default SiteFooter;
