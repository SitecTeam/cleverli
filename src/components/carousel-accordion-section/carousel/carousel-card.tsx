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
    <Card className="flex h-93.5 w-69.5 flex-col py-2 transition duration-500 backface-hidden">
      <CardContent className="flex h-full flex-col p-0">
        {/* Image Section */}
        <div className="flex h-[50%] shrink-0 justify-center px-3">
          <div className="h-full w-full rounded-lg bg-linear-to-t from-[#B0BBC9] to-[#D5DBE2] p-4">
            <img
              src={src || "/placeholder.svg"}
              alt={title}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="my-2 flex min-h-0 flex-1 flex-col space-y-2 px-4 lg:px-5">
          <h3 className="text-2xl leading-tight font-bold">{title}</h3>
          <Separator className="bg-[#2E3642]" />
          <ScrollArea className="mt-1 min-h-0 flex-1">
            <p className="pr-3 text-xs leading-tight italic">{description}</p>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarouselCard;
