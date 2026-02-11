import CardsCarousel from "./carousel/cards-carousel";
import FadeInWrapper from "../fade-in-wrapper";
import SectionTitleAnimation from "../section-title-animation";
import type { ServiceData } from "@/lib/types";

const WhatWeCanDoSection = ({ data }: { data: ServiceData[] }) => {
  return (
    <div className="hidden flex-col items-center lg:flex lg:gap-y-8 2xl:gap-y-10">
      <SectionTitleAnimation text="What We Can Do For You?" direction="right" />
      <FadeInWrapper className="flex w-full items-center justify-center">
        <h3 className="max-w-2xl text-center text-3xl italic lg:mt-3">
          From the first idea to global roll-out, these are the levers we use to
          turn learning into results.
        </h3>
      </FadeInWrapper>
      <CardsCarousel data={data} />
    </div>
  );
};

export default WhatWeCanDoSection;
