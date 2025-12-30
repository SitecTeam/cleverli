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
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col lg:block w-full max-w-310.25 mx-auto lg:h-155.5">
      {/* Animation Section - Top on Mobile, Absolute Right on Desktop */}
      <div className="w-full lg:absolute lg:right-0 lg:bottom-0 lg:w-223.5 lg:h-146.75 flex items-center justify-center lg:justify-end mb-8 lg:mb-0">
        <RealAnimatedScene />
      </div>

      {/* Text Section - Bottom on Mobile, Left on Desktop */}
      <div className="relative z-10 flex flex-col justify-center lg:justify-between h-full py-8 lg:pt-12 lg:pb-0 lg:max-w-150 pointer-events-none items-center lg:items-start text-center lg:text-left">
        <FadeInWrapper className="flex flex-col justify-center lg:justify-between h-full pointer-events-auto items-center lg:items-start w-full">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-3">
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
            <p className="text-lg text-slate-600 max-w-md mb-8 lg:mb-0">
              We create full-service e-learning solutions tailored to your
              needs, from concept to launch.
            </p>
          </div>
          <div className="flex flex-col min-[360px]:flex-row justify-center lg:justify-start gap-4 w-full">
            <Button
              variant="primary"
              className=" w-full min-[360px]:w-auto min-[360px]:flex-1 sm:flex-none sm:w-65.75 h-12.5 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer px-2"
            >
              Free Consultation
            </Button>
            <Button
              variant="secondary"
              className="w-full min-[360px]:w-auto min-[360px]:flex-1 sm:flex-none sm:w-65.75 h-12.5 text-lg rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer px-2"
            >
              Explore Our Services
            </Button>
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
};

export default HeroSection;
