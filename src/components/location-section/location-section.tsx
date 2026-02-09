import FadeInWrapper from "../fade-in-wrapper";
import SectionTitleAnimation from "../section-title-animation";

const LocationSection = () => {
  return (
    <div className="relative mt-8 w-full lg:mt-14">
      <div className="pointer-events-none absolute inset-0 z-0 hidden items-start justify-center lg:flex">
        <SectionTitleAnimation
          text="Where Are We Located?"
          className="[&_h2]:invisible"
        />
      </div>
      <FadeInWrapper className="mx-auto flex w-full max-w-360 flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:px-0">
        {/* Left Content */}
        <div className="relative z-10 flex flex-col gap-6 pl-4 lg:w-full lg:pl-13.5">
          <div className="relative w-full max-w-195.5 overflow-visible rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-xs lg:pt-10.25 lg:pr-4 lg:pb-14.5 lg:pl-7.5">
            <h2 className="mb-6 text-4xl font-semibold lg:text-5xl">
              Where Are We Located?
            </h2>
            <div className="space-y-2">
              <p className="text-lg font-bold text-slate-700 lg:text-xl">
                Banja Luka, Bosnia and Herzegovina
              </p>
              <p className="text-base text-slate-600 lg:text-xl">
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
