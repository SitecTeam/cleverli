import FadeInWrapper from "../fade-in-wrapper";
import MapSvg from "../../svgs/location/map.svg?react";
import GlassPinSvg from "../../svgs/location/glass-pin.svg?react";
import cubesUrl from "../../svgs/cubes/cubes-left.svg?url";
import { cn } from "@/lib/utils";

const LocationSection = () => {
  return (
    <div className="relative w-full">
      <FadeInWrapper className="mx-auto flex w-full max-w-360 flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:px-0">
        {/* Left Content */}
        <div className="relative z-10 flex flex-col gap-6 pl-4 lg:w-1/2 lg:pl-0">
          <img
            src={cubesUrl}
            alt=""
            className="absolute -top-20 -left-20 -z-10 h-64 w-64 opacity-60"
          />

          <div className="relative rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-xs lg:p-12 lg:pr-20">
            <h2 className="font-frutiger mb-6 text-3xl font-bold text-slate-800 lg:text-5xl">
              Where Are We Located?
            </h2>
            <div className="space-y-2">
              <p className="font-frutiger text-lg font-bold text-slate-700 lg:text-xl">
                Banja Luka, Bosnia and Herzegovina
              </p>
              <p className="font-frutiger text-base text-slate-600 lg:text-lg">
                Mladena Stojanovića 4
              </p>
            </div>
            {/* Decorative Background for text box ? The image shows a white card with shadow. */}
          </div>
        </div>

        {/* Right Content - Map */}
        {/* <div className="relative flex justify-center">
          <div className="animate-bounce-slow flex">
            <GlassPinSvg className="absolute h-full w-full" />
            <MapSvg className="size-[80%]" />
          </div>
        </div> */}
      </FadeInWrapper>
    </div>
  );
};

export default LocationSection;
