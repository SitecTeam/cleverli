import Leaf from "../svgs/commitment/leaf.svg?url";
import Recycle from "../svgs/commitment/recycle.svg?url";
import Car from "../svgs/commitment/car.svg?url";
import Energy from "../svgs/commitment/energy.svg?url";
import Plant from "../svgs/commitment/plant.svg?react";
import FadeInWrapper from "./fade-in-wrapper";

const CommitmentSection = () => {
  return (
    <FadeInWrapper className="relative lg:px-12">
      {/* Mobile header */}
      <div className="relative z-20 mb-10 flex justify-center">
        <h2 className="font-frutiger text-4xl leading-tight font-bold text-slate-800 lg:hidden">
          Our Sustainability Commitment
        </h2>
      </div>
      <div className="pointer-events-none absolute -right-20 -left-20 -translate-y-[30%] select-none lg:-left-51 lg:-translate-y-[23%]">
        <Plant className="h-full w-full lg:h-auto lg:w-auto" />
      </div>
      <div className="relative w-full rounded-lg border border-white/60 bg-white/70 px-4.5 py-2.5 shadow-card backdrop-blur-lg sm:rounded-4xl sm:px-10 sm:py-8 lg:py-12 lg:backdrop-blur-xs xl:px-12.5">
        {/* Desktop header */}
        <h2 className="font-frutiger hidden leading-tight font-bold text-slate-800 lg:block lg:text-6xl">
          Our Sustainability Commitment
        </h2>
        <div className="grid gap-2 sm:gap-10 lg:mt-26 lg:grid-cols-2 lg:gap-14">
          {/* Left copy */}
          <div className="flex flex-col gap-12">
            <p className="font-hind font-medium sm:text-xl sm:leading-relaxed lg:max-w-125 lg:text-2xl lg:text-balance">
              At Cleverli, sustainability is part of our DNA. By going digital,
              our clients eliminate unnecessary printing, reduce travel costs,
              minimize logistics, and support environmentally responsible
              learning solutions.
            </p>
            {/* Desktop text */}
            <p className="font-frutiger hidden max-w-125 text-4xl text-slate-700 italic lg:block">
              Digital learning isn't just smarter. It's greener.
            </p>
          </div>

          {/* Right benefits list */}
          <div className="grid grid-cols-1 gap-1 pl-4 sm:grid-cols-2 sm:gap-5 sm:pl-0 lg:flex lg:flex-col lg:pt-7 lg:pl-20 xl:pl-40">
            <div className="font-hind flex gap-4 sm:items-end">
              <img
                src={Leaf}
                alt="Paperless Training Icon"
                className="h-15 w-10.5 shrink-0 sm:h-auto sm:w-auto"
              />
              <div className="flex flex-col gap-1">
                <p className="text-base font-bold text-slate-800 sm:text-xl">
                  Paperless Training
                </p>
                <p className="text-base font-medium text-slate-700 sm:text-xl">
                  Eliminate printing needs
                </p>
              </div>
            </div>

            <div className="font-hind flex gap-4 sm:items-end">
              <img
                src={Recycle}
                alt="Reusable Content Icon"
                className="h-15 w-10.5 shrink-0 sm:h-auto sm:w-auto"
              />
              <div className="flex flex-col gap-1">
                <p className="text-base font-bold text-slate-800 sm:text-xl">
                  Reusable Content
                </p>
                <p className="text-base font-medium text-slate-700 sm:text-xl">
                  Sustainable resource use
                </p>
              </div>
            </div>

            <div className="font-hind flex gap-4 sm:items-end">
              <img
                src={Car}
                alt="Reduced Travel Icon"
                className="h-15 w-10.5 shrink-0 sm:h-auto sm:w-auto"
              />
              <div className="flex flex-col gap-1">
                <p className="text-base font-bold text-slate-800 sm:text-xl">
                  Reduced Travel
                </p>
                <p className="text-base font-medium text-slate-700 sm:text-xl">
                  Lower carbon footprint
                </p>
              </div>
            </div>

            <div className="font-hind flex gap-4 sm:items-end">
              <img
                src={Energy}
                alt="Energy Efficient Icon"
                className="h-15 w-10.5 shrink-0 sm:h-auto sm:w-auto"
              />
              <div className="flex flex-col gap-1">
                <p className="text-base font-bold text-slate-800 sm:text-xl">
                  Energy Efficient
                </p>
                <p className="text-base font-medium text-slate-700 sm:text-xl">
                  Optimized digital delivery
                </p>
              </div>
            </div>
          </div>
          {/* Mobile text */}
          <p className="font-frutiger mx-1.5 border-t-2 border-slate-700 pt-3 text-xl text-slate-700 italic sm:mx-0 sm:text-3xl lg:hidden">
            Digital learning isn't just smarter. It's greener.
          </p>
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default CommitmentSection;
