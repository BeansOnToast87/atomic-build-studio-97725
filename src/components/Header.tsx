import { Link } from 'react-router-dom';
import logoImage from '@/assets/proof-launch-logo.png';

const Header = () => {
  return (
    <header 
      role="banner" 
      className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <Link 
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring rounded-sm"
            aria-label="Go to homepage"
          >
            <img 
              src={logoImage}
              width="40"
              height="40"
              alt="Proof Launch Studio logo"
              decoding="async"
              fetchPriority="low"
              className="transition-transform group-hover:scale-105"
            />
            <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              Proof Launch Studio
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
