import SectionTitleAnimation from "../section-title-animation";
import ClientCommentsCarousel from "./client-comments-carousel";

const WhatOurClientSaySection = () => {
  return (
    <div className="space-y-10 lg:space-y-10">
      <SectionTitleAnimation text="What Our Clients Say" direction="right" />
      <ClientCommentsCarousel />
    </div>
  );
};

export default WhatOurClientSaySection;
