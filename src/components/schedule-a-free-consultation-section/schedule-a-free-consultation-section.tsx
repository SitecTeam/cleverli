import SectionTitleAnimation from "../section-title-animation";
import BookYourCallForm from "./book-your-call-form";
import FadeInWrapper from "../fade-in-wrapper";
import TransparentLogo from "../../svgs/contact/transparent-logo.svg?react";
import bookYourCallMobile from "../../svgs/contact/book-your-call-mobile.svg?url";
import bookYourCall from "../../svgs/contact/book-your-call.svg?url";

const ScheduleAFreeConsultationSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <SectionTitleAnimation
        text="Schedule a Free Consultation"
        direction="right"
      />
      <FadeInWrapper className="text-center italic lg:max-w-180 lg:text-xl">
        Speak directly with our e-learning experts to discuss your project needs
        and discover how Cleverli can help transform your training.
      </FadeInWrapper>
      <FadeInWrapper className="relative -mx-4 w-screen lg:mx-0 lg:mt-15 lg:w-full xl:px-36">
        <div
          className="h-112.5 bg-[image:var(--bg-mobile)] bg-cover bg-center bg-no-repeat sm:h-156 sm:bg-[image:var(--bg-desktop)] sm:bg-auto md:h-176 lg:h-189 lg:rounded-2xl"
          style={
            {
              "--bg-mobile": `url('${bookYourCallMobile}')`,
              "--bg-desktop": `url('${bookYourCall}')`,
            } as React.CSSProperties
          }
        >
          <TransparentLogo className="absolute top-34 left-[71%] hidden -translate-x-1/2 bg-transparent lg:block xl:left-[67%] 2xl:left-[64.5%]" />
          <BookYourCallForm />
        </div>
      </FadeInWrapper>
    </div>
  );
};

export default ScheduleAFreeConsultationSection;
