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
      className="relative min-h-[200vh] w-screen left-1/2 -ml-[50vw] -mr-[50vw] snap-start z-0"
    >
      <div className="sticky top-0 h-screen -mt-80">
        <motion.div
          className="absolute z-20 inset-x-0 bottom-0 bg-linear-to-t from-[#2E3642] to-[#303844]"
          style={{ height: curtainHeight }}
        >
          <motion.div
            className="flex flex-col items-center justify-center h-full text-white max-w-360 mx-auto transition ease-in-out"
            style={{
              opacity: contentOpacity,
              y: contentY,
              scale: contentScale,
            }}
          >
            <h2 className="text-6xl font-bold mb-25">
              Ready to Transform Your Training?
            </h2>
            <div className="flex lg:px-10 2xl:px-25 lg:gap-10 2xl:gap-20">
              <div className="space-y-9.5 flex-1">
                <p className="lg:text-4xl italic">
                  Let’s build smarter learning together. Contact us today to
                  schedule your free consultation.
                </p>
                <div className="space-y-3 lg:text-xl">
                  <div className="flex gap-8">
                    <img src="/src/svgs/form/email.svg" alt="Email" />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[#8596AB] ">Email</span>
                      <span className="font-medium">info@cleverli.pro</span>
                    </div>
                  </div>
                  <div className="flex gap-8 mt-3.5">
                    <img src="/src/svgs/form/phone.svg" alt="Phone" />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[#8596AB]">Phone</span>
                      <div className="flex flex-col gap-0.2 font-medium">
                        <span>+381 65 323 77 46</span>
                        <span>+387 65 371 839</span>
                        <span>+387 65 746 939</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <img src="/src/svgs/form/location.svg" alt="Location" />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[#8596AB]">Location</span>
                      <span className="font-medium">
                        Banja Luka, Bosnia and Herzegovina
                      </span>
                    </div>
                  </div>
                </div>
                <img src="/src/svgs/form/linked-in.svg" alt="LinkedIn" />
              </div>
              <div className="flex-1">
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
