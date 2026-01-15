import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type CarouselCardProps = {
  src: string;
  title: string;
  description: string;
};

const CarouselCard = ({ src, title, description }: CarouselCardProps) => {
  return (
    <Card className="h-159.75 w-118.75 py-3.5 transition duration-500 backface-hidden">
      <CardContent className="flex h-full flex-col gap-6 p-0">
        {/* Image Section */}
        <div className="flex h-84.25 justify-center px-4">
          <div className="h-full w-full rounded-lg bg-linear-to-t from-[#B0BBC9] to-[#D5DBE2] p-4">
            <img
              src={src || "/placeholder.svg"}
              alt={title}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-4 px-4 2xl:px-9">
          <h3 className="text-2xl leading-tight font-bold 2xl:text-4xl">
            {title}
          </h3>
          <Separator className="bg-[#2E3642]" />
          <ScrollArea className="2xl:h-30">
            <p className="pr-3 text-lg leading-relaxed text-pretty italic">
              {description}
            </p>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarouselCard;
