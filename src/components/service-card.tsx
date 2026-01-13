import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  items: string[];
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

export function ServiceCard({
  title,
  items,
  imageSrc,
  imageAlt = "",
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "flex w-full flex-col gap-y-6 rounded-2xl bg-[#EDF0F5] p-6 shadow-box",
        // Desktop: flex-row layout; odd cards have image left, even cards have image right
        "lg:flex-row lg:items-center lg:gap-x-16 lg:gap-y-0 lg:p-8",
        // NOTE: Astro injects <link rel="preload" as="image"> nodes between cards in the DOM.
        // Tailwind's `even:` uses :nth-child(2n) and would treat every <article> as even (because it's always preceded by a <link>).
        // Using :nth-of-type(even) counts only <article> elements, preserving the intended alternation.
        "lg:nth-of-type-[even]:flex-row-reverse",
        className
      )}
    >
      {/* Image wrapper - first child for odd/even to work */}
      <div className="lg:w-1/2">
        <div className="h-16 w-16 overflow-hidden rounded-xl bg-white p-2 shadow-box lg:h-auto lg:w-full lg:rounded-2xl lg:p-6">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Content wrapper - second child for odd/even to work */}
      <div className="lg:w-1/2">
        {/* Title */}
        <h3 className="mb-4 text-xl font-semibold text-[#1B6B93] lg:text-2xl xl:text-3xl">
          {title}
        </h3>

        {/* Divider - visible on mobile */}
        <div className="mb-4 h-px w-full bg-linear-to-r from-[#1B6B93]/30 to-transparent lg:hidden" />

        {/* List items */}
        <ul className="space-y-2 lg:space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1.5 flex h-2 w-2 shrink-0">
                <span className="h-2 w-2 rotate-45 bg-[#F5A623]" />
              </span>
              <span className="text-sm text-gray-700 lg:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
