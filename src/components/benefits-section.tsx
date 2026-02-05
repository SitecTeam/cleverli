import SectionTitleAnimation from "./section-title-animation";
import consistencyUrl from "@/svgs/benefits-section/consistency.svg?url";
import costUrl from "@/svgs/benefits-section/cost.svg?url";
import effortlessUrl from "@/svgs/benefits-section/effortless.svg?url";
import performanceUrl from "@/svgs/benefits-section/performance.svg?url";
import scalabilityUrl from "@/svgs/benefits-section/scalability.svg?url";
import sustainabilityUrl from "@/svgs/benefits-section/sustainability.svg?url";
import timeUrl from "@/svgs/benefits-section/time.svg?url";
import FadeInWrapper from "./fade-in-wrapper";
import { cn } from "@/lib/utils";

type BenefitItem = {
  title: string;
  description: React.ReactNode;
  icon: string;
};

const benefits: BenefitItem[] = [
  {
    title: "Cost Efficiency",
    icon: costUrl,
    description: (
      <>
        <strong>Reduce training costs</strong> and recurring expenses by
        eliminating travel, venue and print materials with{" "}
        <strong>reusable courses</strong>, while reaching{" "}
        <strong>more learners</strong>.
      </>
    ),
  },
  {
    title: "Time Flexibility",
    icon: timeUrl,
    description: (
      <>
        Allow learners to access training materials at their{" "}
        <strong>own pace</strong> and convenience,{" "}
        <strong>improving completion rates</strong>.
      </>
    ),
  },
  {
    title: "Performance Tracking",
    icon: performanceUrl,
    description: (
      <>
        Provide insights into <strong>learner progress</strong> and{" "}
        <strong>content effectiveness</strong> through detailed analytics.
      </>
    ),
  },
  {
    title: "Consistency",
    icon: consistencyUrl,
    description: (
      <>
        Deliver <strong>consistent training</strong> worldwide so every learner
        receives the same <strong>high standard</strong> of content.
      </>
    ),
  },
  {
    title: "Scalability",
    icon: scalabilityUrl,
    description: (
      <>
        <strong>Expand your training programs easily</strong> as your
        organization grows, without proportional cost increases.
      </>
    ),
  },
  {
    title: "Sustainability",
    icon: sustainabilityUrl,
    description: (
      <>
        Reduce your environmental footprint by{" "}
        <strong>eliminating paper waste</strong> and{" "}
        <strong>travel-related emissions</strong>.
      </>
    ),
  },
  {
    title: "Effortless Editing",
    icon: effortlessUrl,
    description: (
      <>
        Modify your training materials easily to{" "}
        <strong>stay aligned with changing demands</strong>.
      </>
    ),
  },
];

const BenefitsSection = () => {
  return (
    <FadeInWrapper className="flex w-full flex-col items-center gap-10 py-10 lg:gap-20">
      <SectionTitleAnimation
        text="Benefits of Our Services"
        direction="right"
      />

      <div className="grid max-w-305 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-center xl:gap-11">
        {/* Column 1 */}
        <div className="contents lg:flex lg:flex-col lg:gap-6 xl:gap-11">
          <BenefitCard item={benefits[0]} className="lg:p-2" />
          <BenefitCard item={benefits[3]} />
        </div>

        {/* Column 2 */}
        <div className="contents lg:flex lg:flex-col lg:gap-6 xl:gap-11">
          <BenefitCard item={benefits[1]} />
          <BenefitCard item={benefits[4]} />
          <BenefitCard item={benefits[6]} />
        </div>

        {/* Column 3 */}
        <div className="contents lg:flex lg:flex-col lg:gap-6 xl:gap-11">
          <BenefitCard item={benefits[2]} className="text-pretty" />
          <BenefitCard item={benefits[5]} className="text-pretty" />
        </div>
      </div>
    </FadeInWrapper>
  );
};

const BenefitCard = ({
  item,
  className,
}: {
  item: BenefitItem;
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
        <p className="text-sm leading-relaxed font-medium text-slate-600 xl:text-base">
          {item.description}
        </p>
      </div>
    </article>
  );
};

export default BenefitsSection;
