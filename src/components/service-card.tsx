import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import detailsIconUrl from "@/svgs/accordion/details-cube.svg?url";

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
  const altText = (imageAlt || title).replace(/\s*\n\s*/g, " ");

  return (
    <article
      className={cn(
        "relative flex h-[446px] w-full flex-col rounded-2xl p-2 shadow-box lg:p-6",
        "bg-[linear-gradient(135deg,rgba(255,255,255,0.8),rgba(255,255,255,0.4))]",
        "mx-auto lg:max-w-[416px] lg:p-2.5",
        className
      )}
    >
      {/* Mobile header: image + title in a row */}
      <div className="relative flex min-h-[70px] items-center gap-x-4 pl-[104px] lg:hidden">
        <div className="absolute -top-2 -left-2 shrink-0">
          <div className="flex h-[70px] w-[84px] items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,#B0BBC9,#D5DBE2)] shadow-box">
            <img
              src={imageSrc}
              alt={altText}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <h3 className="line-clamp-2 min-h-[48px] max-w-[200px] text-[20px] leading-tight font-semibold text-balance text-slate-800">
          {title.replace(/\s*\n\s*/g, " ")}
        </h3>
      </div>

      {/* Desktop header: image + title in a row */}
      <div className="hidden min-h-[120px] items-center gap-3 lg:flex">
        <div className="shrink-0">
          <div className="flex h-[103px] w-[122px] items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,#B0BBC9,#D5DBE2)] p-3 shadow-box">
            <img
              src={imageSrc}
              alt={altText}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <h3 className="text-[32px] leading-tight font-bold whitespace-pre-line text-slate-800">
          {title}
        </h3>
      </div>

      <div className="mt-1 flex min-h-0 flex-1 flex-col">
        <div className="mb-6 h-px w-full bg-slate-800/30" />
        <ScrollArea className="min-h-0 flex-1 pr-1">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <img
                  src={detailsIconUrl}
                  className="mt-1 h-3 w-3 shrink-0 lg:h-4 lg:w-4"
                  alt="detail-icon"
                />
                <span className="text-[14px] font-medium text-slate-800 lg:text-[16px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </article>
  );
}
