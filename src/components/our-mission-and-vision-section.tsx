import SectionTitleAnimation from "./section-title-animation";
import { Card, CardContent } from "./ui/card";
import OurMission from "../svgs/about/our-mission.svg?url";
import OurVision from "../svgs/about/our-vision.svg?url";
import Logo from "../svgs/logo/transparent-logo.svg?react";
import FadeInWrapper from "./fade-in-wrapper";

const OurMissionAndVisionSection = () => {
  return (
    <div className="space-y-10 lg:space-y-36">
      <SectionTitleAnimation text="Our Mission & Vision" />
      <FadeInWrapper>
        <Card
          className="relative flex items-stretch overflow-visible border-none bg-white/20 lg:min-h-52.5 lg:bg-white 2xl:mx-12"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="absolute top-30 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block xl:top-1/2">
            <Logo className="shrink-0" />
          </div>
          <CardContent className="flex h-full w-full flex-col items-center gap-2 px-0 sm:px-6 lg:flex-row lg:items-start lg:gap-10">
            <div className="relative flex flex-1 flex-col gap-2 sm:pr-8 lg:gap-0 lg:pr-24 xl:pr-30">
              <div className="mr-16 flex items-center justify-center gap-2 sm:gap-5 lg:mr-0 lg:justify-start">
                <div className="w-23.5 lg:ml-5 lg:w-37.5 xl:ml-18">
                  <img
                    src={OurMission}
                    alt="Our mission icon"
                    className="absolute -top-14 h-28 w-23.5 shrink-0 lg:-top-30 lg:left-5 lg:h-auto lg:w-auto xl:left-18"
                  />
                </div>
                <p className="mb-8 text-xl font-bold">Our Mission</p>
              </div>
              <p className="px-4 text-center sm:px-0 md:max-w-150 lg:mr-5 lg:max-w-125 lg:text-lg 2xl:text-xl">
                To help organizations deliver smarter learning that's effective,
                engaging, and accessible while reducing costs and maximizing
                user comfort, flexibility, and impact.
              </p>
            </div>
            <Logo className="ml-4 h-19.5 w-18 shrink-0 lg:hidden" />
            <div className="relative flex flex-1 flex-col gap-2 sm:pr-8 lg:gap-0 lg:pl-20">
              <div className="mr-16 flex flex-row-reverse items-center justify-center gap-2 sm:gap-5 lg:mr-0 lg:ml-10 lg:flex-row xl:ml-0">
                <p className="mb-8 text-xl font-bold">Our Vision</p>
                <div className="relative w-23.5 lg:w-35.75 2xl:mr-7">
                  <img
                    src={OurVision}
                    alt="Our vision icon"
                    className="absolute -top-24 right-0 h-31.5 w-23.5 shrink-0 lg:-top-43 lg:h-auto lg:w-auto"
                  />
                </div>
              </div>
              <p className="px-4 text-center sm:px-0 md:max-w-150 lg:ml-10 lg:max-w-107.5 lg:text-lg 2xl:text-xl">
                To be a trusted, long-term partner in creating digital learning
                that inspires growth for learners, for organizations, and for
                the world.
              </p>
            </div>
          </CardContent>
        </Card>
      </FadeInWrapper>
    </div>
  );
};

export default OurMissionAndVisionSection;
