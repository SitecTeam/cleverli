import FadeInWrapper from "../fade-in-wrapper";
import SectionTitleAnimation from "../section-title-animation";
import ServiceProcessCard from "./service-process-card";
import clock from "../../svgs/process/clock.svg?url";
import paint from "../../svgs/process/paint.svg?url";
import magnifyingGlass from "../../svgs/process/magnifying-glass.svg?url";
import tools from "../../svgs/process/tools.svg?url";

const serviceProcessData = [
  {
    title: "Discovery & Analysis",
    description: (
      <>
        We start by understanding your <strong>goals, audience,</strong> and{" "}
        <strong>content requirements</strong> to create a{" "}
        <strong>tailored solution.</strong>
      </>
    ),
    icon: clock,
  },
  {
    title: "Design & Development",
    description: (
      <>
        We create <strong>storyboards, scripts,</strong> and{" "}
        <strong>prototypes</strong> before building the full learning solution.
      </>
    ),
    icon: paint,
  },
  {
    title: "Testing & Refinement",
    description: (
      <>
        We <strong>thoroughly test</strong> all elements and{" "}
        <strong>gather feedback</strong> to ensure quality and effectiveness.
      </>
    ),
    icon: magnifyingGlass,
  },
  {
    title: "Deployment & Support",
    description: (
      <>
        We handle the <strong>launch </strong> and provide{" "}
        <strong>ongoing support</strong> to ensure your e-learning success.
      </>
    ),
    icon: tools,
  },
];

const OurServiceProcessSection = () => {
  return (
    <div className="flex flex-col gap-13">
      <SectionTitleAnimation text="Our Service Process" />
      <FadeInWrapper className="mx-auto max-w-140 text-center text-balance lg:text-xl">
        We follow a structured approach to deliver high-quality e-learning
        solutions that meet your specific needs.
      </FadeInWrapper>
      <FadeInWrapper className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 2xl:px-17.5">
        {serviceProcessData.map((item, index) => (
          <ServiceProcessCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            index={index + 1}
          />
        ))}
      </FadeInWrapper>
    </div>
  );
};

export default OurServiceProcessSection;
