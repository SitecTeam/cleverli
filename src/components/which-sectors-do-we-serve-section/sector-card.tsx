import { Card, CardContent } from "../ui/card";
import DetailsIcon from "../../svgs/carousel/details-icon.svg?react";
import CubeIcon from "../../svgs/accordion/details-cube.svg?react";
import PlatformIcon from "../../svgs/sector/platform.svg?react";
import { ScrollArea } from "../ui/scroll-area";

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
      className="relative min-h-92.5 border-none bg-linear-to-t from-[#F8F7F8] via-[#D5DBE2] to-[#B0BBC9] pt-2 pb-2.5 lg:max-h-[41.5dvh] lg:min-h-59 lg:max-w-250 lg:justify-self-center lg:bg-linear-to-l lg:py-3 2xl:py-5"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <img
        src={bgIcon}
        alt={`${title} background`}
        className="absolute bottom-0 left-1/2 z-0 h-auto max-h-57.5 w-full -translate-x-1/2 px-7 blur-[2px] lg:right-0 lg:left-auto lg:h-full lg:max-h-full lg:w-auto lg:translate-x-0 lg:px-1 lg:py-2"
      />
      <CardContent className="z-10 flex h-full flex-col gap-4 px-3 lg:flex-row lg:gap-7 lg:pr-0 lg:pl-7.5">
        <div className="font-frutiger flex h-full flex-1 flex-col gap-4 lg:flex-11">
          <div className="mx-auto flex items-center gap-5 lg:mx-0">
            <div className="relative shrink-0">
              <img
                src={icon}
                alt={title}
                className="h-20 w-17.5 lg:h-25 lg:w-25"
              />
              <PlatformIcon
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-75"
                aria-hidden="true"
              />
            </div>
            <h3 className="max-w-47 text-center text-xl font-bold lg:max-w-none lg:text-start lg:text-3xl xl:text-[40px]">
              {title}
            </h3>
          </div>
          <p className="font-frutiger text-center text-sm italic lg:text-start lg:text-base lg:text-balance">
            {description}
          </p>
        </div>
        <div className="h-px w-full shrink-0 bg-slate-800 px-3 lg:h-[85%] lg:w-px lg:self-center lg:px-0" />
        <div className="flex flex-1 flex-col justify-center gap-1.5 px-1 lg:flex-9 lg:justify-evenly lg:gap-1 lg:py-1 lg:pr-2">
          {details.map((detail, index) => (
            <div className="flex items-start gap-2.5 lg:gap-6" key={index}>
              <DetailsIcon
                className="mt-1 hidden shrink-0 lg:block"
                aria-hidden="true"
              />
              <CubeIcon className="mt-1 block lg:hidden" aria-hidden="true" />
              <p key={index} className="text-sm font-medium lg:text-base">
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
