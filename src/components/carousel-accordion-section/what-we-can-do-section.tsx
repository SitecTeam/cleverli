import CardsCarousel from "./carousel/cards-carousel";
import FadeInWrapper from "../fade-in-wrapper";
import SectionTitleAnimation from "../section-title-animation";

const WhatWeCanDoSection = () => {
  return (
    <div className="hidden max-h-[calc(100dvh-90px)] min-h-0 flex-col items-center gap-y-[clamp(8px,5dvh,50px)] lg:flex">
      <SectionTitleAnimation text="What We Can Do For You?" direction="right" />
      <FadeInWrapper className="flex w-full items-center justify-center">
        <h3 className="max-w-2xl text-center text-3xl italic">
          From the first idea to global roll-out, these are the levers we use to
          turn learning into results.
        </h3>
      </FadeInWrapper>
      <div className="flex min-h-0 w-full flex-1 2xl:contents">
        <CardsCarousel />
      </div>
    </div>
  );
};

export default WhatWeCanDoSection;
