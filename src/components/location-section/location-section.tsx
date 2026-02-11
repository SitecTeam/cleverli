import FadeInWrapper from "../fade-in-wrapper";
import SectionTitleAnimation from "../section-title-animation";

const LocationSection = () => {
  return (
    <div className="relative mt-8 w-full lg:mt-14">
      <div className="pointer-events-none absolute inset-0 z-0 hidden items-start justify-center lg:flex">
        <SectionTitleAnimation
          text="Where Are We Located?"
          className="lg:-translate-y-6 [&_h2]:invisible"
        />
      </div>
      <FadeInWrapper className="mx-auto flex w-full max-w-336 flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:px-0">
        {/* Left Content */}
        <div className="relative z-10 flex flex-col gap-6 lg:w-full">
          {/* Mobile Title */}
          <h2 className="text-[36px] leading-tight font-semibold text-slate-800 md:hidden">
            Where Are We Located?
          </h2>

          <div className="relative flex w-[198px] flex-col justify-center overflow-visible rounded-2xl bg-white/10 p-4 shadow-lg backdrop-blur-xs md:w-[324px] md:p-6 lg:max-h-63.5 lg:w-full lg:max-w-156.5 lg:justify-start lg:pt-10.25 lg:pr-4 lg:pb-14.5 lg:pl-7.5">
            <h2 className="mb-4 hidden text-4xl font-semibold md:mb-8 md:block md:text-[32px] lg:text-[40px]">
              Where Are We Located?
            </h2>
            <div className="space-y-1 md:space-y-2">
              <p className="text-[14px] font-bold text-slate-700 md:text-[16px] lg:text-[20px]">
                Banja Luka, Bosnia and Herzegovina
              </p>
              <p className="text-[14px] text-slate-600 md:text-[16px] lg:text-[20px]">
                Mladena Stojanovića 4
              </p>
            </div>
          </div>
        </div>
      </FadeInWrapper>
    </div>
  );
};

export default LocationSection;
