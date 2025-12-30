import CardsCarousel from "./carousel/cards-carousel";
import FadeInWrapper from "../fade-in-wrapper";
import SectionTitleAnimation from "../section-title-animation";

const WhatWeCanDoSection = () => {
  return (
    <div className="space-y-24 hidden lg:block">
      <SectionTitleAnimation text="What We Can Do For You?" direction="right" />
      <FadeInWrapper className="flex w-full items-center justify-center">
        <h3 className="max-w-2xl text-center text-3xl italic">
          From the first idea to global roll-out, these are the levers we use to
          turn learning into results.
        </h3>
      </FadeInWrapper>
      <CardsCarousel />
    </div>
  );
};

export default WhatWeCanDoSection;
