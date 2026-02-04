import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import ContactForm from "./contact-form";
import emailIconUrl from "../svgs/form/email.svg?url";
import phoneIconUrl from "../svgs/form/phone.svg?url";
import locationIconUrl from "../svgs/form/location.svg?url";
import linkedInIconUrl from "../svgs/form/linked-in.svg?url";

const ScrollCurtainSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, {
    stiffness: 220,
    damping: 30,
    mass: 1,
  });
  const curtainHeight = useTransform(smoothProgress, v => `${v * 100}%`);
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
          scrollable - Math.min(vh * 1, scrollable * 10)
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
      className="pointer-events-none relative left-1/2 z-0 mt-10 -mr-[50vw] -ml-[50vw] min-h-screen w-screen snap-start lg:mt-0 lg:min-h-[200vh]"
    >
      <div className="relative h-full lg:sticky lg:top-0 lg:-mt-80 lg:h-screen">
        <motion.div
          className="relative inset-x-0 bottom-0 z-20 bg-linear-to-t from-[#2E3642] to-[#303844] max-[1024px]:h-full! lg:absolute"
          style={{ height: curtainHeight }}
        >
          {/* When form returns set items-start to items-center */}
          <motion.div
            className="mx-auto flex h-full max-w-360 flex-col items-start justify-center pt-11 pb-8.5 text-white transition ease-in-out max-[1024px]:transform-none! max-[1024px]:opacity-100! lg:py-2"
            style={{
              opacity: contentOpacity,
              y: contentY,
              scale: contentScale,
            }}
          >
            <h2 className="mb-7 self-center text-center text-3xl font-bold text-balance sm:text-4xl lg:mb-12 lg:text-6xl 2xl:mb-25">
              Ready to Transform Your Training?
            </h2>
            <div className="flex flex-col-reverse lg:flex-row lg:gap-10 lg:px-10 2xl:gap-20 2xl:px-25">
              <div className="flex-1 space-y-6 2xl:space-y-9.5">
                <p className="pr-10 pl-5 italic sm:text-4xl lg:px-0">
                  Let’s build smarter learning together. <br />
                  Contact us today to schedule your <br />
                  free consultation.
                </p>
                <div className="space-y-3 px-10.5 sm:text-xl lg:px-0">
                  <div className="flex gap-5.5 sm:gap-8">
                    <div className="h-10.5 w-7.5 sm:h-auto sm:w-auto">
                      <img src={emailIconUrl} alt="Email" />
                    </div>
                    <div className="flex flex-col sm:gap-1.5">
                      <span className="text-sm text-[#8596AB] sm:text-base">
                        Email
                      </span>
                      <span className="text-sm font-medium sm:text-base">
                        info@cleverli.pro
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-5.5 sm:gap-8">
                    <div className="mt-3 h-11 w-8 sm:mt-0 sm:h-auto sm:w-auto">
                      <img src={phoneIconUrl} alt="Phone" />
                    </div>
                    <div className="flex flex-col sm:gap-1.5">
                      <span className="text-sm text-[#8596AB] sm:text-base">
                        Phone
                      </span>
                      <div className="gap-0.2 flex flex-col text-sm font-medium sm:text-base">
                        <span>+381 65 323 77 46</span>
                        <span>+387 65 371 839</span>
                        <span>+387 65 746 939</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5.5 sm:gap-8">
                    <div className="h-12 w-9 sm:h-auto sm:w-auto">
                      <img src={locationIconUrl} alt="Location" />
                    </div>
                    <div className="flex flex-col sm:gap-1.5">
                      <span className="text-sm text-[#8596AB] sm:text-base">
                        Location
                      </span>
                      <span className="text-sm font-medium sm:text-base">
                        Banja Luka, Bosnia and Herzegovina
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-fit">
                  <a
                    href="https://www.linkedin.com/company/cleverlearninginterface/"
                    target="_blank"
                  >
                    <img
                      src={linkedInIconUrl}
                      alt="LinkedIn"
                      className="px-5 lg:px-0"
                    />
                  </a>
                </div>
              </div>
              {/* <div className="flex-1 px-5 pb-8.5 lg:p-0">
                <ContactForm />
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollCurtainSection;
