import React from "react";
import SectionTitleAnimation from "../section-title-animation";
import DifferentCards from "./different-cards";
import FadeInWrapper from "../fade-in-wrapper";

const WhatMakesUsDifferent = () => {
  return (
    <div className="space-y-7 lg:space-y-20">
      <SectionTitleAnimation
        direction="right"
        text="What Makes Us Different?"
      />
      <FadeInWrapper className="mx-auto text-center text-balance sm:text-xl lg:max-w-150">
        We are not just a vendor. We are your partner, your extended team,
        working with you to build trust, quality, and long-term success.
      </FadeInWrapper>
      <DifferentCards />
    </div>
  );
};

export default WhatMakesUsDifferent;
