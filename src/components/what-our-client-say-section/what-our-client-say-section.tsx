import SectionTitleAnimation from "../section-title-animation";
import ClientCommentsCarousel from "./client-comments-carousel";
import type { TestimonialData } from "@/lib/types";

const WhatOurClientSaySection = ({ data }: { data: TestimonialData[] }) => {
  return (
    <div className="space-y-10 lg:space-y-10">
      <SectionTitleAnimation text="What Our Clients Say" direction="right" />
      <ClientCommentsCarousel data={data} />
    </div>
  );
};

export default WhatOurClientSaySection;
