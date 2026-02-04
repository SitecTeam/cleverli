import FadeInWrapper from "../fade-in-wrapper";

const LocationSection = () => {
  return (
    <div className="relative w-full">
      <FadeInWrapper className="mx-auto flex w-full max-w-360 flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:px-0">
        {/* Left Content */}
        <div className="relative z-10 flex flex-col gap-6 pl-4 lg:w-full lg:pl-13.5">
          <div className="relative w-full max-w-195.5 rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-xs lg:pt-10.25 lg:pr-4 lg:pb-14.5 lg:pl-7.5">
            <h2 className="font-frutiger mb-6 text-3xl font-semibold text-slate-800 lg:text-[64px]">
              Where Are We Located?
            </h2>
            <div className="space-y-2">
              <p className="font-frutiger text-lg font-bold text-slate-700 lg:text-xl">
                Banja Luka, Bosnia and Herzegovina
              </p>
              <p className="font-frutiger text-base text-slate-600 lg:text-xl">
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
