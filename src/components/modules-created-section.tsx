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
      className="flex-col-reverse items-center flex lg:flex-row lg:justify-center lg:gap-20 xl:gap-28 overflow-x-clip"
    >
      <div className="relative flex items-center gap-4 w-fit lg:w-auto pl-20">
        <motion.pre
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 80 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.8 },
          }}
          className="w-[3ch] h-auto leading-none bg-linear-to-r from-[#3EF4A7] to-[#096EE0] bg-clip-text text-right text-[100px] lg:text-3xl lg:text-[150px] xl:text-[200px] font-bold text-transparent tabular-nums"
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
        <FadeInWrapper className="absolute top-9.5 lg:top-14.5 xl:top-19.5 left-0 text-base lg:text-2xl px-4 py-0.5 xl:py-2 lg:left-0 lg:px-6 xl:px-12 rounded-md backdrop-blur-2xl shadow-md">
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
        <div className="max-w-80 text-xl text-center lg:text-start lg:max-w-100 xl:max-w-150 lg:text-3xl xl:text-5xl ">
          We specialize in creating training that
          <i className="font-bold"> changes behavior </i>
          and
          <i className="font-bold"> boosts performance.</i>
        </div>
      </motion.div>
    </div>
  );
};

export default ModulesCreatedSection;
