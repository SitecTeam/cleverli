import { useEffect, useState, useRef } from "react";
import { data } from "../data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import CarouselCard from "./carousel-card";
import CarouselBackCard from "./carousel-back-card";
import FadeInWrapper from "../../fade-in-wrapper";

const CardsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api || !isInView || isHovered) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api, isInView, isHovered]);

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => {
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
    <div
      ref={carouselRef}
      className="mx-auto h-full w-full items-center justify-center bg-linear-to-b flex"
    >
      <FadeInWrapper margin="-200px" className="w-full">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            startIndex: 1,
          }}
        >
          <CarouselContent className="-ml-20 2xl:-ml-64 pt-15 pb-20">
            {data.map((card) => {
              return (
                <CarouselItem
                  key={card.id}
                  className="pl-20 2xl:pl-42 basis-auto 2xl:basis-1/3"
                >
                  <div
                    className={cn(
                      "group relative h-fit w-fit cursor-pointer rounded-xl transition-transform duration-700 transform-3d hover:scale-118 hover:shadow-lg",
                      flippedCards.has(card.id)
                        ? "transform-[rotateY(180deg)]"
                        : ""
                    )}
                    onClick={() => toggleFlip(card.id)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
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
