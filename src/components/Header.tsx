import { Link } from 'react-router-dom';
import logoImage from '@/assets/proof-launch-logo.png';

const Header = () => {
  return (
    <header 
      role="banner" 
      className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 min-h-[112px] sm:min-h-[128px] lg:min-h-[144px]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link 
            to="/"
            className="flex items-center gap-3 md:gap-4 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring rounded-sm"
            aria-label="Go to homepage"
          >
            <picture className="shrink-0">
              <source 
                type="image/webp" 
                srcSet={logoImage} 
                width="144"
                height="144"
              />
              <img 
                src={logoImage}
                width="144"
                height="144"
                alt="Proof Launch Studio logo"
                decoding="async"
                loading="eager"
                className="w-[112px] h-[112px] md:w-[144px] md:h-[144px] transition-transform group-hover:scale-105"
              />
            </picture>
            <span className="text-base md:text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Proof Launch Studio
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
