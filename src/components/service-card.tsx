import { cn } from "@/lib/utils";
import detailsCubeUrl from "@/svgs/accordion/details-cube.svg?url";

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
        "flex w-full flex-col rounded-2xl p-6 shadow-box",
        "bg-[linear-gradient(135deg,rgba(255,255,255,0.8),rgba(255,255,255,0.4))]",
        "lg:min-h-125.5 lg:flex-row lg:items-stretch lg:gap-x-16 lg:gap-y-0 lg:p-8",
        "lg:nth-of-type-[even]:flex-row-reverse",
        className
      )}
    >
      {/* Mobile header: image + title in a row */}
      <div className="flex items-center gap-x-4 lg:hidden">
        <div className="-mt-6 -ml-6 shrink-0">
          <div className="flex h-17.5 w-21 items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,#B0BBC9,#D5DBE2)] p-2 shadow-box">
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <h3 className="font-frutiger -mt-4 text-[20px] leading-tight font-bold text-slate-800">
          {title}
        </h3>
      </div>

      {/* Desktop image column */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#B0BBC9,#D5DBE2)] p-6 shadow-box">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="mt-6 lg:mt-0 lg:w-1/2">
        {/* Desktop title */}
        <h3 className="font-frutiger mb-4 hidden text-[36px] font-bold text-slate-800 lg:block">
          {title}
        </h3>

        <div className="mb-6 h-px w-full bg-slate-800/30" />
        <ul className="space-y-2 lg:space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <img
                src={detailsCubeUrl}
                className="mt-1 h-3 w-3 shrink-0"
                alt="detail-icon"
              />
              <span className="font-hind text-[14px] font-medium text-slate-800 lg:text-[20px]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
