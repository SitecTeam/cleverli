import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import FadeInWrapper from "./fade-in-wrapper";
import plusUrl from "../svgs/plus.svg?url";

const VIEWPORT_OPTIONS = { once: true, margin: "-200px" } as const;

const ModulesCreatedSection = () => {
  const [showPlus, setShowPlus] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-220px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 200, {
        duration: 1.5,
        delay: 0.3,
        onComplete: () => setShowPlus(true),
      });
      return () => controls.stop();
    }
  }, [isInView, count]);

  return (
    <div
      ref={ref}
      className="flex flex-col-reverse items-center overflow-x-clip lg:flex-row lg:justify-center lg:gap-14 xl:gap-28"
    >
      <div className="relative flex w-fit items-center gap-4 pl-20 lg:w-auto">
        <motion.pre
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 80 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.8 },
          }}
          className="h-auto w-[3ch] bg-linear-to-r from-[#3EF4A7] to-[#096EE0] bg-clip-text text-right text-[100px] leading-none font-bold text-transparent tabular-nums lg:text-3xl lg:text-[150px] xl:text-[200px]"
        >
          {rounded}
        </motion.pre>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          viewport={VIEWPORT_OPTIONS}
          animate={{ opacity: showPlus ? 1 : 0, scale: showPlus ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          src={plusUrl}
          className="size-11 lg:size-auto lg:scale-80 xl:scale-100"
        />
        <FadeInWrapper className="absolute top-9.5 left-0 rounded-md bg-white/60 px-4 py-0.5 text-base shadow-md backdrop-blur-2xl lg:top-14.5 lg:left-0 lg:px-6 lg:text-2xl xl:top-19.5 xl:px-12 xl:py-2">
          Modules created
        </FadeInWrapper>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={VIEWPORT_OPTIONS}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 1.2 },
        }}
      >
        <div className="font-frutiger text-center text-xl leading-tight lg:text-start lg:text-3xl 2xl:text-[40px]">
          <span className="block">We specialize in creating training</span>
          <span className="block">
            that{" "}
            <span className="inline-block bg-linear-to-r from-[#3EF4A7] to-[#096EE0] bg-clip-text px-1 font-bold text-transparent italic">
              changes behavior
            </span>{" "}
            and
          </span>
          <span className="block">
            <span className="inline-block bg-linear-to-r from-[#3EF4A7] to-[#096EE0] bg-clip-text font-bold text-transparent italic">
              boosts performance.
            </span>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default ModulesCreatedSection;
