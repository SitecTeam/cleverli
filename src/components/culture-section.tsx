import chevronUrl from "../svgs/about/chevron.svg?url";
import FadeInWrapper from "./fade-in-wrapper";

const items = [
  "Understanding & communication",
  "Reliability & partnership",
  "Adaptability & growth",
  "Dedication to quality and effectiveness",
];

export default function CultureSection() {
  return (
    <FadeInWrapper className="relative left-[calc(-50vw+50%)] w-screen bg-linear-to-b from-slate-50 to-white py-10 lg:flex lg:h-129.25 lg:items-center lg:py-0">
      <div className="relative mx-auto flex w-full max-w-360 flex-col gap-8 px-4 lg:gap-16 lg:px-0">
        {/* Mobile/Tablet Line */}
        <div className="absolute -top-10 -bottom-10 left-8.5 w-px -translate-x-1/2 bg-neutral-700 lg:hidden" />

        <h2 className="font-frutiger pl-17.5 text-left text-[24px] font-bold text-neutral-700 italic lg:pl-0 lg:text-center lg:text-[40px]">
          In every collaboration, we nurture a culture of:
        </h2>

        {/* Responsive View */}
        <div className="relative flex w-full flex-col gap-3.5 lg:flex lg:flex-row lg:justify-center lg:gap-8">
          {/* Desktop Line */}
          <div className="absolute top-8 left-[calc(50%-50vw)] hidden h-px w-screen bg-neutral-700 lg:block" />

          {items.map((item, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-row items-center gap-4.5 lg:w-67.25 lg:flex-col lg:gap-10"
            >
              {/* Icon Circle */}
              <div className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-700 bg-white shadow-lg lg:h-16 lg:w-16">
                <img
                  src={chevronUrl}
                  alt=""
                  className="scale-[0.6] rotate-270 lg:scale-90 lg:rotate-0"
                />
              </div>

              {/* Card */}
              <div className="flex min-h-14 w-full flex-1 items-center justify-center rounded-xl bg-white p-4 text-center shadow-md lg:h-25 lg:w-full lg:max-w-67.25 lg:p-6">
                <p className="font-hind text-[16px] leading-tight font-bold text-slate-800 lg:text-lg">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeInWrapper>
  );
}
