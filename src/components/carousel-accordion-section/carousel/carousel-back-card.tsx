import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import detailsIconUrl from "../../../svgs/carousel/details-icon.svg?url";

type CarouselCardsBackProps = {
  title: string;
  description: string;
  src: string;
  details: string[] | undefined;
};

const CarouselBackCard = ({
  title,
  description,
  src,
  details,
}: CarouselCardsBackProps) => {
  return (
    <Card className="absolute inset-0 h-159.75 w-118.75 transform-[rotateY(180deg)] overflow-hidden rounded-xl border-none pt-0 pb-6 backface-hidden">
      <div className="flex h-full flex-col">
        {/* Header Section */}
        <div className="relative shrink-0 px-4">
          <div className="bg-linear-to-t from-[#B0BBC9] to-[#D5DBE2] rounded-lg blur-xs">
            <img
              src={src || "/placeholder.svg"}
              alt=""
              className="h-84.25 w-full object-cover"
            />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-x-0 top-0 h-full bg-linear-to-b from-[#2E3642] via-[#2E3642]/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-b from-transparent via-[#2E3642]/80 to-white blur-2xl" />

          {/* Content */}
          <div className="absolute inset-0 z-30 flex flex-col space-y-4 px-9 pt-12">
            <h3 className="leading-tight font-bold lg:text-2xl 2xl:text-4xl text-white">
              {title}
            </h3>
            <Separator className="bg-white" />
            <p className="mt-5 leading-relaxed text-white italic text-base">
              {description}
            </p>
          </div>
        </div>

        {/* Scrollable Details Section */}
        <ScrollArea className="mt-5 overflow-y-auto lg:px-4 2xl:pl-9 2xl:px-7 mr-2">
          <div className="space-y-4">
            {details &&
              details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <img
                    src={detailsIconUrl}
                    className="h-6 w-12 shrink-0"
                    alt="detail-icon"
                  />
                  <span className="text-lg">{detail}</span>
                </div>
              ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
};

export default CarouselBackCard;
