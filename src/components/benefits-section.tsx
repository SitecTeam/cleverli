import SectionTitleAnimation from "./section-title-animation";
import consistencyUrl from "@/svgs/benefits-section/consistency.svg?url";
import costUrl from "@/svgs/benefits-section/cost.svg?url";
import effortlessUrl from "@/svgs/benefits-section/effortless.svg?url";
import performanceUrl from "@/svgs/benefits-section/performance.svg?url";
import scalabilityUrl from "@/svgs/benefits-section/scalability.svg?url";
import sustainabilityUrl from "@/svgs/benefits-section/sustainability.svg?url";
import timeUrl from "@/svgs/benefits-section/time.svg?url";
import FadeInWrapper from "./fade-in-wrapper";

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
    <FadeInWrapper className="flex w-full flex-col gap-10 py-10 lg:gap-20">
      <SectionTitleAnimation
        text="Benefits of Our Services"
        direction="right"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-center lg:gap-12">
        {/* Column 1 */}
        <div className="contents lg:flex lg:flex-col lg:gap-8">
          <BenefitCard item={benefits[0]} />
          <BenefitCard item={benefits[3]} />
        </div>

        {/* Column 2 */}
        <div className="contents lg:flex lg:flex-col lg:gap-8">
          <BenefitCard item={benefits[1]} />
          <BenefitCard item={benefits[4]} />
          <BenefitCard item={benefits[6]} />
        </div>

        {/* Column 3 */}
        <div className="contents lg:flex lg:flex-col lg:gap-8">
          <BenefitCard item={benefits[2]} />
          <BenefitCard item={benefits[5]} />
        </div>
      </div>
    </FadeInWrapper>
  );
};

const BenefitCard = ({ item }: { item: BenefitItem }) => {
  return (
    <article className="flex min-h-28.25 w-full flex-row items-center gap-3 rounded-xl bg-white px-3 shadow-box lg:min-h-45.25 lg:gap-6 lg:rounded-2xl lg:p-6">
      {/* Mobile: Icon + Title Col (Left Side) */}
      <div className="flex w-28 shrink-0 flex-col items-center justify-center lg:hidden">
        <img
          src={item.icon}
          alt={`${item.title} icon`}
          className="size-14 object-contain"
        />
        <h3 className="font-frutiger mt-1 w-full text-center text-sm leading-tight font-bold text-slate-800">
          {item.title}
        </h3>
      </div>

      {/* Desktop: Icon only (Left Side) */}
      <div className="hidden shrink-0 lg:block">
        <img
          src={item.icon}
          alt={`${item.title} icon`}
          className="h-24 w-24 object-contain"
        />
      </div>

      {/* Right Side Content */}
      <div className="flex w-full flex-col gap-3">
        {/* Desktop Title */}
        <h3 className="font-frutiger hidden text-lg font-bold text-slate-800 lg:block">
          {item.title}
        </h3>
        {/* Description */}
        <p className="font-hind text-sm leading-relaxed font-medium text-slate-600 lg:text-base">
          {item.description}
        </p>
      </div>
    </article>
  );
};

export default BenefitsSection;
