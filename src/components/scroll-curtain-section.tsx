import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import ContactForm from "./contact-form/contac-form";

const ScrollCurtainSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, {
    stiffness: 220,
    damping: 30,
    mass: 1,
  });
  const curtainHeight = useTransform(smoothProgress, (v) => `${v * 100}%`);
  const contentOpacity = useTransform(smoothProgress, [0.99, 1], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.99, 1], [40, 0]);
  const contentScale = useTransform(smoothProgress, [0.99, 1], [0.95, 1]);

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const el = sectionRef.current;
        if (!el) return;

        const { top, height } = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const scrollable = Math.max(1, height - vh);
        const effective = Math.max(
          1,
          scrollable - Math.min(vh * 0.6, scrollable * 0.35)
        );

        const p = -top / effective;
        progress.set(p < 0 ? 0 : p > 1 ? 1 : p);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [progress]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen lg:min-h-[200vh] w-screen left-1/2 -ml-[50vw] -mr-[50vw] snap-start z-0 mt-10 lg:mt-0"
    >
      <div className="relative h-full lg:sticky lg:top-0 lg:h-screen lg:-mt-80">
        <motion.div
          className="relative lg:absolute z-20 inset-x-0 bottom-0 bg-linear-to-t from-[#2E3642] to-[#303844] max-[1024px]:h-full!"
          style={{ height: curtainHeight }}
        >
          <motion.div
            className="flex flex-col items-center justify-center h-full text-white max-w-360 mx-auto transition ease-in-out pt-11 pb-8.5 lg:py-0 max-[1024px]:opacity-100! max-[1024px]:transform-none!"
            style={{
              opacity: contentOpacity,
              y: contentY,
              scale: contentScale,
            }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-7 lg:mb-25 text-center text-balance">
              Ready to Transform Your Training?
            </h2>
            <div className="flex flex-col-reverse lg:px-10 2xl:px-25 lg:gap-10 2xl:gap-20 lg:flex-row">
              <div className="space-y-6 lg:space-y-9.5 flex-1">
                <p className="sm:text-4xl italic pl-5 pr-10 lg:px-0">
                  Let’s build smarter learning together. Contact us today to
                  schedule your free consultation.
                </p>
                <div className="space-y-3 sm:text-xl px-10.5 lg:px-0">
                  <div className="flex gap-5.5 sm:gap-8">
                    <div className="w-7.5 h-10.5 sm:h-auto sm:w-auto">
                      <img src="/src/svgs/form/email.svg" alt="Email" />
                    </div>
                    <div className="flex flex-col sm:gap-1.5">
                      <span className="text-[#8596AB] text-sm sm:text-base">
                        Email
                      </span>
                      <span className="font-medium text-sm sm:text-base">
                        info@cleverli.pro
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-5.5 sm:gap-8">
                    <div className="w-8 h-11 sm:h-auto sm:w-auto mt-3 sm:mt-0">
                      <img src="/src/svgs/form/phone.svg" alt="Phone" />
                    </div>
                    <div className="flex flex-col sm:gap-1.5">
                      <span className="text-[#8596AB] text-sm sm:text-base">
                        Phone
                      </span>
                      <div className="flex flex-col gap-0.2 font-medium text-sm sm:text-base">
                        <span>+381 65 323 77 46</span>
                        <span>+387 65 371 839</span>
                        <span>+387 65 746 939</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5.5 sm:gap-8">
                    <div className="w-9 h-12 sm:h-auto sm:w-auto">
                      <img src="/src/svgs/form/location.svg" alt="Location" />
                    </div>
                    <div className="flex flex-col sm:gap-1.5">
                      <span className="text-[#8596AB] text-sm sm:text-base">
                        Location
                      </span>
                      <span className="font-medium text-sm sm:text-base">
                        Banja Luka, Bosnia and Herzegovina
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  src="/src/svgs/form/linked-in.svg"
                  alt="LinkedIn"
                  className="px-5 lg:px-0"
                />
              </div>
              <div className="flex-1 px-5 lg:p-0 pb-8.5">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollCurtainSection;
