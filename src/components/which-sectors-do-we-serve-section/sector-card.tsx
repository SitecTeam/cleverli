import { Card, CardContent } from "../ui/card";
import DetailsIcon from "../../svgs/carousel/details-icon.svg?react";
import CubeIcon from "../../svgs/accordion/details-cube.svg?react";
import PlatformIcon from "../../svgs/sector/platform.svg?react";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "../../lib/utils";

type SectorCardProps = {
  title: string;
  description: string;
  icon: string;
  bgIcon: string;
  details: string[];
  isReversed?: boolean;
};

const SectorCard = ({
  title,
  description,
  icon,
  bgIcon,
  details,
  isReversed = false,
}: SectorCardProps) => {
  return (
    <Card
      className={cn(
        "relative min-h-92.5 border-none bg-linear-to-t from-[#F8F7F8] via-[#D5DBE2] to-[#B0BBC9] pt-2 pb-2.5 lg:max-h-[41.5dvh] lg:min-h-59 lg:max-w-250 lg:justify-self-center lg:py-3 2xl:py-5",
        isReversed ? "lg:bg-linear-to-r" : "lg:bg-linear-to-l"
      )}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <img
        src={bgIcon}
        alt={`${title} background`}
        className={cn(
          "absolute bottom-0 left-1/2 z-0 h-auto max-h-57.5 w-full -translate-x-1/2 px-7 blur-[1px] lg:h-full lg:max-h-full lg:w-auto lg:translate-x-0 lg:px-1 lg:py-2",
          isReversed
            ? "-scale-x-100 lg:right-auto lg:left-0"
            : "lg:right-0 lg:left-auto"
        )}
      />
      <CardContent
        className={cn(
          "z-10 flex h-full flex-col gap-4 px-3 lg:gap-0 lg:pr-0",
          isReversed
            ? "lg:flex-row-reverse lg:pr-4 lg:pl-7.5"
            : "lg:flex-row lg:pl-7.5"
        )}
      >
        <div
          className={cn(
            "flex h-full flex-1 flex-col gap-2 lg:flex-[54%]",
            isReversed ? "lg:ml-7" : "lg:mr-7"
          )}
        >
          <div
            className={cn(
              "mx-auto flex items-center gap-5 lg:mx-0",
              isReversed && "lg:flex-row-reverse lg:justify-end"
            )}
          >
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
            <h3
              className={cn(
                "max-w-47 text-center text-xl font-bold lg:max-w-none lg:text-3xl xl:text-[40px]",
                isReversed ? "text-balance lg:text-end" : "lg:text-start"
              )}
            >
              {title}
            </h3>
          </div>
          <p
            className={cn(
              "text-center text-sm italic lg:text-base lg:leading-5.5 lg:text-balance",
              isReversed ? "pl-2" : "lg:text-start"
            )}
          >
            {description}
          </p>
        </div>
        <div className="h-px w-full shrink-0 bg-slate-800 px-3 lg:h-[90%] lg:w-px lg:min-w-px lg:self-center lg:px-0" />
        <div
          className={cn(
            "flex flex-1 flex-col justify-center gap-1.5 px-1 lg:flex-[50%] lg:justify-evenly lg:gap-1",
            isReversed ? "lg:mr-3" : "lg:ml-7"
          )}
        >
          {details.map((detail, index) => (
            <div
              className="flex items-start gap-2.5 lg:items-center lg:gap-6"
              key={index}
            >
              <DetailsIcon
                className="hidden shrink-0 lg:block"
                aria-hidden="true"
              />
              <CubeIcon className="mt-1 block lg:hidden" aria-hidden="true" />
              <p className="text-sm font-medium lg:text-base lg:leading-4.5">
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
