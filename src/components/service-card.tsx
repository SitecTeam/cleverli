import { cn } from "@/lib/utils";
import detailsIconUrl from "@/svgs/carousel/details-icon.svg?url";
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
  const altText = (imageAlt || title).replace(/\s*\n\s*/g, " ");

  return (
    <article
      className={cn(
        "relative flex w-full flex-col rounded-2xl p-2 shadow-box lg:h-111.5 lg:p-6",
        "bg-[linear-gradient(135deg,rgba(255,255,255,0.8),rgba(255,255,255,0.4))]",
        "mx-auto lg:max-w-104 lg:p-2.5",
        className
      )}
    >
      {/* Mobile header: image + title in a row */}
      <div className="relative flex min-h-17.5 items-center gap-x-4 pl-26 lg:hidden">
        <div className="absolute -top-2 -left-2 shrink-0">
          <div className="flex h-17.5 w-21 items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,#B0BBC9,#D5DBE2)] shadow-box">
            <img
              src={imageSrc}
              alt={altText}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <h3
          className={cn(
            "min-h-12 max-w-50 text-[20px] leading-tight font-semibold text-slate-800",
            title.includes("Full-Service") &&
              title.includes("E-Learning Outsourcing")
              ? "whitespace-pre-line"
              : ""
          )}
        >
          {title.includes("Full-Service") &&
          title.includes("E-Learning Outsourcing")
            ? title
            : title.replace(/\s*\n\s*/g, " ")}
        </h3>
      </div>

      {/* Desktop header: image + title in a row */}
      <div className="hidden min-h-30 items-center gap-3 lg:flex">
        <div className="shrink-0">
          <div className="flex h-25.75 w-30.5 items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,#B0BBC9,#D5DBE2)] p-3 shadow-box lg:rounded-[3.54px]">
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

      <div className="mt-1 flex flex-col lg:min-h-0 lg:flex-1">
        <div className="mb-6 h-0.5 w-full bg-slate-900" />
        <ul className="my-2 mt-1 mb-2 flex h-full flex-col justify-between space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <img
                src={detailsCubeUrl}
                className="h-3 w-3 shrink-0 sm:hidden"
                alt="detail-cube"
              />
              <img
                src={detailsIconUrl}
                className="hidden h-4 w-4 shrink-0 sm:block sm:h-5 sm:w-10"
                alt="detail-icon"
              />
              <span className="text-[14px] font-medium text-slate-800 lg:text-[16px]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
