import { Link } from "react-router-dom";
import logoImage from "@/assets/proof-launch-logo.png";
import { CONTACT_MAILTO } from "@/lib/contact";

const Masthead = () => {
  return (
    <header role="banner" className="w-full border-b border-border bg-background">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Proof Launch Studio — homepage"
          >
            <img
              src={logoImage}
              width="36"
              height="36"
              alt="Proof Launch Studio"
              decoding="async"
              loading="eager"
              className="h-9 w-9 shrink-0 object-contain"
            />
            <span className="font-display text-lg md:text-xl leading-none tracking-tight text-ink">
              Proof Launch Studio
            </span>
          </Link>

          <a
            href={CONTACT_MAILTO}
            className="eyebrow tap inline-flex items-center border-b border-accent pb-0.5 text-accent hover:text-ink hover:border-ink transition-colors"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </header>
  );
};

export default Masthead;
