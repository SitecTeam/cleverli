import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import FadeInWrapper from "./fade-in-wrapper";
import cubesLeftUrl from "../svgs/cubes/cubes-left.svg?url";
import cubesRightUrl from "../svgs/cubes/cubes-right.svg?url";

type CubeSectionProps = {
  text: string;
  direction?: "left" | "right";
  className?: string;
};

const SectionTitleAnimation = ({
  text,
  direction = "left",
  className,
}: CubeSectionProps) => {
  const cubesSrc = direction === "right" ? cubesRightUrl : cubesLeftUrl;

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center lg:min-h-32 lg:overflow-hidden",
        className
      )}
    >
      <motion.img
        initial={{ x: direction === "left" ? -300 : 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-175px" }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        src={cubesSrc}
        className={cn(
          "absolute top-0 hidden h-full w-auto lg:block",
          direction === "left" ? "left-0" : "right-0"
        )}
        alt="Decorative cubes"
      />
      <FadeInWrapper className="z-10 flex h-full items-center justify-center">
        <h2 className="text-center text-4xl font-semibold lg:text-5xl">
          {text}
        </h2>
      </FadeInWrapper>
    </div>
  );
};

export default SectionTitleAnimation;
