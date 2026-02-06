import SectionTitleAnimation from "./section-title-animation";
import FadeInWrapper from "./fade-in-wrapper";
import partnershipUrl from "../svgs/about/partnership.svg?url";
import innovationUrl from "../svgs/about/innovation.svg?url";
import excellenceUrl from "../svgs/about/excellence.svg?url";
import sustainabilityUrl from "../svgs/about/sustainability.svg?url";
import inclusivityUrl from "../svgs/about/inclusivity.svg?url";
import adaptabilityUrl from "../svgs/about/adaptability.svg?url";

const values = [
  {
    title: "Partnership",
    description:
      "We build lasting relationships with our clients, working collaboratively to achieve shared goals.",
    icon: partnershipUrl,
  },
  {
    title: "Innovation",
    description:
      "We continually explore new technologies and methodologies to deliver cutting-edge learning experiences.",
    icon: innovationUrl,
  },
  {
    title: "Excellence",
    description:
      "We strive for the highest quality in every project, paying meticulous attention to detail.",
    icon: excellenceUrl,
  },
  {
    title: "Sustainability",
    description:
      "We are committed to environmentally responsible practices through paperless, digital solutions.",
    icon: sustainabilityUrl,
  },
  {
    title: "Inclusivity",
    description:
      "We design learning experiences that are accessible to diverse audiences worldwide.",
    icon: inclusivityUrl,
  },
  {
    title: "Adaptability",
    description:
      "We embrace change by continuously learning and evolving to meet our clients' changing needs.",
    icon: adaptabilityUrl,
  },
];

export default function WhatWeValueSection() {
  return (
    <section className="-mx-4 pb-16 lg:mx-0 lg:py-0">
      <FadeInWrapper className="container mx-auto px-4.75 lg:px-4">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-6 text-center lg:mb-32 lg:gap-10">
          <SectionTitleAnimation text="What We Value?" />
          <p className="mx-auto max-w-3xl text-lg text-slate-600 italic lg:text-xl">
            These principles guide everything we do at Cleverli, from how we
            work with clients to how we develop our solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => (
            <div
              key={index}
              className="z-20 flex flex-col items-center justify-between gap-2.5 rounded-2xl bg-white p-4 shadow-card transition-shadow hover:shadow-card-hover xl:h-50.5 xl:justify-between xl:gap-0 xl:px-6 xl:pt-4 xl:pb-0"
            >
              {/* Header: Icon + Title */}
              <div className="relative flex h-20 w-full items-center justify-center gap-4 xl:h-28 xl:gap-0">
                <div className="shrink-0 xl:absolute xl:top-1/2 xl:left-0 xl:-translate-y-1/2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-20 w-20 object-contain xl:h-28 xl:w-28"
                  />
                </div>
                <h3 className="z-10 text-center text-[20px] font-bold text-slate-800 xl:-mt-6 xl:w-full">
                  {item.title}
                </h3>
              </div>
              {/* Description */}
              <p className="text-center text-[16px] leading-relaxed text-slate-600 xl:pb-8.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </FadeInWrapper>
    </section>
  );
}
