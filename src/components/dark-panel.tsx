import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import LogoTransparent from "../svgs/header/logo-transparent.svg?react";
import FadeInWrapper from "./fade-in-wrapper";

export type DarkPanelProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
};

const DarkPanel = ({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText = "Services",
  secondaryButtonLink = "/services",
  className,
}: DarkPanelProps) => {
  return (
    <div className="relative right-1/2 left-1/2 mx-[-50vw] w-screen">
      <FadeInWrapper
        className={cn(
          "relative flex min-h-73 justify-center bg-linear-to-b from-[#2E3642] to-[#303844] px-4 pt-4 pb-6 sm:h-146.5 lg:px-11 lg:py-12",
          className
        )}
      >
        <div className="relative mx-auto flex w-full max-w-336 flex-1 flex-col items-center overflow-hidden rounded-xl border-2 px-4 py-5 text-center text-white sm:px-12 sm:py-14">
          {/* Watermark logo */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center sm:-top-28">
            <LogoTransparent
              className="h-54 w-[70%] max-w-130 opacity-10 sm:h-82"
              aria-hidden="true"
              focusable="false"
            />
          </div>

          <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-between text-center">
            <h2 className="text-2xl font-bold text-balance sm:mt-10 sm:text-6xl">
              {title}
            </h2>
            <p className="mt-4 text-base text-white sm:text-xl lg:max-w-195">
              {description}
            </p>

            <div className="mt-4 flex w-full flex-row flex-wrap items-center justify-center gap-4.5 sm:mt-10 sm:gap-7">
              <Button
                asChild
                variant="primary"
                className="h-10 w-34.25 text-base sm:h-12.5 sm:w-50 sm:text-xl md:w-65"
              >
                <a href={buttonLink}>{buttonText}</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="h-10 w-34.25 text-base sm:h-12.5 sm:w-50 sm:text-xl md:w-65"
              >
                <a href="/services">Services</a>
              </Button>
            </div>
          </div>
        </div>
      </FadeInWrapper>
    </div>
  );
};

export default DarkPanel;
