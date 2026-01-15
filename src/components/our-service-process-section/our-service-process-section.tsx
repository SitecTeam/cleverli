import FadeInWrapper from "../fade-in-wrapper";
import SectionTitleAnimation from "../section-title-animation";
import ServiceProcessCard from "./service-process-card";
import { serviceProcessData } from "./service-process-data";

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
