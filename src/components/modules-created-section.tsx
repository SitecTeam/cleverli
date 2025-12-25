import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

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
    <div ref={ref} className="flex items-center justify-center gap-28">
      <div className="flex items-center gap-4">
        <motion.pre
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 80 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.8 },
          }}
          className="w-[3ch] bg-linear-to-r from-[#3EF4A7] to-[#096EE0] bg-clip-text text-right text-3xl text-[200px] font-bold text-transparent tabular-nums"
        >
          {rounded}
        </motion.pre>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          viewport={VIEWPORT_OPTIONS}
          animate={{ opacity: showPlus ? 1 : 0, scale: showPlus ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          src="/src/svgs/plus.svg"
        />
      </div>
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={VIEWPORT_OPTIONS}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 1.2 },
        }}
      >
        <div className="max-w-150 text-5xl text-slate-800">
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
