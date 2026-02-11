import SectionTitleAnimation from "./section-title-animation";
import FadeInWrapper from "./fade-in-wrapper";
import { cn } from "@/lib/utils";
import type { BenefitData } from "@/lib/types";

const BenefitsSection = ({ data }: { data: BenefitData[] }) => {
  return (
    <FadeInWrapper className="flex w-full flex-col items-center gap-10 lg:gap-20">
      <SectionTitleAnimation
        text="Benefits of Our Services"
        direction="right"
      />

      <div className="grid max-w-305 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-center xl:gap-11">
        {/* Column 1 */}
        <div className="contents lg:flex lg:flex-col lg:gap-6 xl:gap-11">
          <BenefitCard item={data[0]} className="lg:p-2" />
          <BenefitCard item={data[3]} />
        </div>

        {/* Column 2 */}
        <div className="contents lg:flex lg:flex-col lg:gap-6 xl:gap-11">
          <BenefitCard item={data[1]} />
          <BenefitCard item={data[4]} />
          <BenefitCard item={data[6]} />
        </div>

        {/* Column 3 */}
        <div className="contents lg:flex lg:flex-col lg:gap-6 xl:gap-11">
          <BenefitCard item={data[2]} className="text-pretty" />
          <BenefitCard item={data[5]} className="text-pretty" />
        </div>
      </div>
    </FadeInWrapper>
  );
};

const BenefitCard = ({
  item,
  className,
}: {
  item: BenefitData;
  className?: string;
}) => {
  return (
    <article
      className={cn(
        "flex min-h-28.25 w-full flex-row items-center gap-3 rounded-xl bg-white p-3 shadow-box lg:min-h-45.25 lg:gap-3 lg:rounded-2xl lg:p-4 xl:gap-6",
        className
      )}
    >
      {/* Mobile: Icon + Title Col (Left Side) */}
      <div className="flex w-28 shrink-0 flex-col items-center justify-center lg:hidden">
        <img
          src={item.icon}
          alt={`${item.title} icon`}
          className="size-14 object-contain"
        />
        <h3 className="mt-1 w-full text-center text-sm leading-tight font-bold text-slate-800">
          {item.title}
        </h3>
      </div>

      {/* Desktop: Icon only (Left Side) */}
      <div className="hidden shrink-0 lg:block">
        <img
          src={item.icon}
          alt={`${item.title} icon`}
          className="size-24 object-contain"
        />
      </div>

      {/* Right Side Content */}
      <div className="flex h-full w-full flex-col gap-3">
        {/* Desktop Title */}
        <h3 className="hidden text-lg font-bold text-slate-800 lg:block">
          {item.title}
        </h3>
        {/* Description */}
        <p
          className="text-sm leading-relaxed font-medium text-slate-600 xl:text-base"
          dangerouslySetInnerHTML={{ __html: item.descriptionHtml }}
        />
      </div>
    </article>
  );
};

export default BenefitsSection;
