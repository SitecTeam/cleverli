import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FadeInWrapper from "@/components/fade-in-wrapper";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { carouselData } from "@/components/what-our-client-say-section/carousel-data";
import quoteUrl from "../../svgs/quote.svg?url";

const ClientCommentsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <FadeInWrapper>
      <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>
        <CarouselContent>
          {carouselData.map(item => (
            <CarouselItem key={item.id} className="basis-full">
              <div className="flex w-full flex-col items-center justify-center gap-7.5 text-center">
                <img
                  src={quoteUrl}
                  alt="Quotes"
                  className="h-5 w-6 shrink-0 lg:h-9 lg:w-12"
                />
                <p className="sm:px-10 lg:px-20 lg:text-3xl lg:text-balance">
                  {item.description}
                </p>
                <div className="font-semibold lg:text-xl">
                  <p>{item.author}</p>
                  {item.department && <p>{item.department}</p>}
                </div>
                <div className="flex min-h-19 justify-center lg:min-h-28">
                  <img
                    src={item.image}
                    alt="Company Logo"
                    loading="lazy"
                    className="h-19 lg:min-h-28"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="relative z-30 mt-6 flex items-center justify-center gap-3 lg:mt-14">
          <Button
            variant="primary"
            size="icon-lg"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous testimonial"
            className="min-w-17.5 lg:min-w-31.5"
          >
            <ArrowLeft className="h-4 w-6 shrink-0 lg:h-7.5 lg:w-10.5" />
          </Button>
          <Button
            variant="primary"
            size="icon-lg"
            onClick={() => api?.scrollNext()}
            aria-label="Next testimonial"
            className="min-w-17.5 lg:min-w-31.5"
          >
            <ArrowRight className="h-4 w-6 shrink-0 lg:h-7.5 lg:w-10.5" />
          </Button>
        </div>
      </Carousel>
    </FadeInWrapper>
  );
};

export default ClientCommentsCarousel;
