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
    <Card className="absolute inset-0 h-[373px] w-69.5 transform-[rotateY(180deg)] overflow-hidden rounded-xl border-none pt-0 pb-4 backface-hidden">
      <div className="flex h-full flex-col gap-2 pt-2">
        {/* Header Section */}
        <div className="relative flex h-[50%] shrink-0 justify-center px-3">
          <div className="h-full w-full rounded-lg bg-linear-to-t from-[#B0BBC9] to-[#D5DBE2] p-3 blur-xs">
            <img
              src={src || "/placeholder.svg"}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-x-0 -top-2 h-full bg-linear-to-b from-[#2E3642] via-[#2E3642]/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-b from-transparent via-[#2E3642]/80 to-white blur-2xl" />

          {/* Content */}
          <div className="absolute inset-0 z-30 mr-2 flex flex-col space-y-2 pt-2 pl-4">
            <h3 className="text-lg leading-tight font-bold text-white">
              {title}
            </h3>
            <Separator className="bg-white" />
            <ScrollArea className="mt-1 min-h-0 flex-1">
              <p className="pr-3 text-xs leading-relaxed text-white italic">
                {description}
              </p>
            </ScrollArea>
          </div>
        </div>

        {/* Scrollable Details Section */}
        <ScrollArea className="mt-2 mr-2 overflow-y-auto pl-4">
          <div className="space-y-3">
            {details &&
              details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <img
                    src={detailsIconUrl}
                    className="h-4 w-8 shrink-0"
                    alt="detail-icon"
                  />
                  <span className="text-xs">{detail}</span>
                </div>
              ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
};

export default CarouselBackCard;
