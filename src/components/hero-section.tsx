import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import RealAnimatedScene from "./real-animated-scene";
import FadeInWrapper from "./fade-in-wrapper";
import { motion, AnimatePresence } from "motion/react";

const HeroSection = () => {
  const words = ["Elevate", "Transform", "Grow", "Empower"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-310.25 flex-col lg:block lg:h-[calc(100vh-140px)] lg:max-h-155.5 lg:min-h-123">
      {/* Animation Section - Top on Mobile, Absolute Right on Desktop */}
      <div className="mb-8 flex w-full items-center justify-center lg:absolute lg:right-0 lg:bottom-0 lg:mb-0 lg:aspect-[1.5] lg:h-[94%] lg:w-auto lg:justify-end">
        <RealAnimatedScene />
      </div>

      {/* Text Section - Bottom on Mobile, Left on Desktop */}
      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center py-8 text-center lg:max-w-full lg:items-start lg:justify-between lg:pt-12 lg:pb-0 lg:text-left">
        <FadeInWrapper className="pointer-events-auto flex h-full w-full flex-col items-center justify-center lg:items-start lg:justify-between">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="flex flex-col items-center gap-2 text-4xl font-semibold text-slate-800 lg:flex-row lg:items-start lg:gap-3 lg:text-[64px]">
              <span>Train. Achieve.</span>
              <span className="relative inline-block min-w-50 text-center lg:text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="block"
                  >
                    {words[index]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <p className="mt-7 mb-8 max-w-70 font-medium text-slate-800 lg:mb-0 lg:max-w-97.75 lg:text-[24px]">
              We create full-service e-learning solutions tailored to your
              needs, from concept to launch.
            </p>
          </div>
          <div className="flex w-full flex-col justify-center gap-4 min-[360px]:flex-row lg:justify-start">
            <Button
              asChild
              variant="primary"
              className="h-12.5 w-full cursor-pointer rounded-xl px-2 text-lg min-[360px]:w-auto min-[360px]:flex-1 sm:w-65.75 sm:flex-none"
            >
              <a href="/contact">Free Consultation</a>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="h-12.5 w-full cursor-pointer rounded-xl px-2 text-lg min-[360px]:w-auto min-[360px]:flex-1 sm:w-65.75 sm:flex-none"
            >
              <a href="/services">Explore Our Services</a>
            </Button>
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
};
export default HeroSection;
