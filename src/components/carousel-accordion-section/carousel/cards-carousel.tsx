import { useState, useRef } from "react";
import { data } from "../data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import CarouselCard from "./carousel-card";
import CarouselBackCard from "./carousel-back-card";
import FadeInWrapper from "../../fade-in-wrapper";

const CardsCarousel = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const carouselRef = useRef<HTMLDivElement>(null);

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div ref={carouselRef} className="flex w-full items-center justify-center">
      <FadeInWrapper margin="-200px" className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: false,
            startIndex: 0,
          }}
        >
          <CarouselContent className="ml-0 gap-16 pt-12 pb-13 pl-[max(1.5rem,calc(50%-139px))] 2xl:py-16">
            {data.map(card => {
              return (
                <CarouselItem key={card.id} className="basis-auto pl-0">
                  <div
                    className={cn(
                      "group relative h-fit w-fit cursor-pointer rounded-xl transition-transform duration-700 transform-3d hover:scale-[1.2] hover:shadow-lg hover:2xl:scale-[1.25]",
                      flippedCards.has(card.id)
                        ? "transform-[rotateY(180deg)]"
                        : ""
                    )}
                    onClick={() => toggleFlip(card.id)}
                  >
                    <CarouselCard
                      title={card.title}
                      description={card.description}
                      src={card.src}
                    />
                    <CarouselBackCard
                      title={card.title}
                      description={card.description}
                      src={card.src}
                      details={card.details}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </FadeInWrapper>
    </div>
  );
};

export default CardsCarousel;
