import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  caption: string;
  /** Tailwind aspect-ratio classes, e.g. "aspect-[4/3] md:aspect-[16/10]" — reserves space to avoid layout shift. */
  ratioClass: string;
  /** object-position, useful when a crop should favour the top of a screenshot. */
  position?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  frameClassName?: string;
};

/**
 * Editorial figure: image on a hairline-ruled frame with a caption sitting on the rule.
 * Deliberately not a card — no shadow, no large radius.
 */
const LasChicasFigure = ({
  src,
  alt,
  caption,
  ratioClass,
  position = "50% 0%",
  sizes = "100vw",
  priority = false,
  className,
  frameClassName,
}: Props) => {
  return (
    <figure className={cn("group", className)}>
      <div
        className={cn(
          "overflow-hidden border border-border bg-paper-deep",
          ratioClass,
          frameClassName
        )}
      >
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.015]"
          style={{ objectPosition: position }}
        />
      </div>
      <figcaption className="mt-3 border-t border-border pt-2 text-sm leading-relaxed text-ink-soft">
        {caption}
      </figcaption>
    </figure>
  );
};

export default LasChicasFigure;
