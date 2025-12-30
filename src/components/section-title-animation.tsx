import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import FadeInWrapper from "./fade-in-wrapper";

type CubeSectionProps = {
  text: string;
  direction?: "left" | "right";
};

const SectionTitleAnimation = ({
  text,
  direction = "left",
}: CubeSectionProps) => {
  const cubesSrc =
    direction === "right"
      ? "/src/svgs/cubes/cubes-right.svg"
      : "/src/svgs/cubes/cubes-left.svg";

  return (
    <div className="relative flex lg:min-h-32 items-center justify-center w-full">
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
          "absolute top-0 h-full w-auto hidden lg:block",
          direction === "left" ? "left-0" : "right-0"
        )}
        alt="Decorative cubes"
      />
      <FadeInWrapper className="z-10 flex h-full items-center justify-center">
        <h2 className="text-center text-4xl lg:text-6xl font-bold">{text}</h2>
      </FadeInWrapper>
    </div>
  );
};

export default SectionTitleAnimation;
