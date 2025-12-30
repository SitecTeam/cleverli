import FadeInWrapper from "../fade-in-wrapper";
import SectionTitleAnimation from "../section-title-animation";
import ServicesAccordion from "./services-accordion";

const ServicesOverviewSection = () => {
  return (
    <div className="space-y-8 lg:hidden">
      <SectionTitleAnimation text="Services Overview" />
      <FadeInWrapper className="flex w-full items-center justify-center">
        <h3 className="max-w-72 text-center text-base italic">
          Comprehensive e-learning solutions to transform your training and
          development programs.
        </h3>
      </FadeInWrapper>
      <ServicesAccordion />
    </div>
  );
};

export default ServicesOverviewSection;
