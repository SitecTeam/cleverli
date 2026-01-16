import { Card, CardContent } from "../ui/card";
import DetailsIcon from "../../svgs/carousel/details-icon.svg?react";
import CubeIcon from "../../svgs/accordion/details-cube.svg?react";
import { Separator } from "../ui/separator";
import Corporation from "../../svgs/sector/corporation.svg?react";

type SectorCardProps = {
  title: string;
  description: string;
  icon: string;
  bgIcon: string;
  details: string[];
};

const SectorCard = ({
  title,
  description,
  icon,
  bgIcon,
  details,
}: SectorCardProps) => {
  return (
    <Card
      className="relative min-h-92.5 border-none bg-linear-to-t from-[#F8F7F8] via-[#D5DBE2] to-[#B0BBC9] pt-2 pb-2.5 lg:h-75"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <img
        src={bgIcon}
        alt={`${title} background`}
        className="absolute bottom-0 left-1/2 z-0 h-auto max-h-57.5 w-full -translate-x-1/2 px-7 blur-[2px]"
      />
      <CardContent className="z-10 flex h-full flex-col gap-4 px-3 lg:flex-row lg:gap-2 lg:pl-15">
        <div className="flex h-full flex-col gap-4">
          <div className="mx-auto flex items-center gap-5">
            <img
              src={icon}
              alt={title}
              className="h-20 w-17.5 lg:h-28 lg:w-auto"
            />
            <h3 className="max-w-47 text-center text-xl font-bold lg:text-6xl">
              {title}
            </h3>
          </div>
          <p className="font-frutiger text-center text-sm italic lg:text-xl">
            {description}
          </p>
        </div>
        <div className="h-px w-full shrink-0 bg-slate-800 px-3 lg:h-58.5 lg:w-px lg:px-0" />
        <div className="flex flex-col justify-center gap-1.5 px-1 lg:gap-6">
          {details.map((detail, index) => (
            <div className="flex items-start gap-2.5 lg:gap-6.5" key={index}>
              <DetailsIcon className="hidden lg:block" aria-hidden="true" />
              <CubeIcon className="mt-1 block lg:hidden" aria-hidden="true" />
              <p key={index} className="text-sm font-medium lg:text-xl">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SectorCard;
