import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import LogoTransparent from "../svgs/header/logo-transparent.svg?react";

export type DarkPanelProps = {
  title: string;
  description: string;
  buttonText: string;
  buttionLink: string;
  className?: string;
};

const DarkPanel = ({
  title,
  description,
  buttonText,
  buttionLink,
  className,
}: DarkPanelProps) => {
  return (
    <section
      className={cn(
        "relative flex -mr-4 -ml-4 min-h-73 lg:mx-0 bg-linear-to-b from-[#2E3642] to-[#303844] lg:w-full lg:px-11 lg:py-12 sm:h-146.5 px-4 pt-4 pb-6",
        className
      )}
    >
      <div className="relative flex w-full flex-1 flex-col px-4 py-5 items-center text-center text-white sm:px-12 sm:py-14 border-2 rounded-xl overflow-hidden">
        {/* Watermark logo */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center sm:-top-28">
          <LogoTransparent
            className="w-[70%] max-w-130 h-54 sm:h-82 opacity-10"
            aria-hidden="true"
            focusable="false"
          />
        </div>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-between text-center w-full">
          <h2 className="text-2xl font-bold sm:text-6xl text-balance sm:mt-10">
            {title}
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-xl text-balance">
            {description}
          </p>

          <div className="flex w-full justify-center gap-4.5 sm:gap-7 flex-row items-center mt-4 sm:mt-10 flex-wrap">
            <Button
              asChild
              variant="primary"
              className="h-10 w-34.25 sm:w-50 text-base sm:text-xl sm:h-12.5 md:w-65"
            >
              <a href={buttionLink}>{buttonText}</a>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="h-10 w-34.25 sm:w-50 text-base sm:text-xl sm:h-12.5 md:w-65"
            >
              <a href="/services">Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkPanel;
