import {
  type CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { animate } from "motion/react";
import LogoSvg from "../../svgs/logo.svg?react";
import FadeInWrapper from "../fade-in-wrapper";
import { TOTAL_STEPS, clamp, computeSvgVars } from "./utils";

const Logo = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [step, setStep] = useState(0);
  const refs = useRef({
    step: 0,
    locked: false,
    entered: false,
    completed: false,
    exitedAt: 0,
    centering: false, // True while centering animation is running
  });

  const updateStep = (next: number) => {
    refs.current.step = next;
    setStep(next);
  };

  const lock = () => {
    if (refs.current.locked || refs.current.completed) return;
    refs.current.locked = true;
    document.body.style.overflow = "hidden";
  };

  const unlock = (dir: "up" | "down") => {
    if (!refs.current.locked) return;
    Object.assign(refs.current, {
      locked: false,
      entered: false,
      exitedAt: Date.now(),
      completed: dir === "down" && refs.current.step >= TOTAL_STEPS,
    });
    document.body.style.overflow = "";
    if (dir === "up") updateStep(0);
  };

  // Scroll detection - lock section when scrolling down into view
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const el = sectionRef.current;
      const r = refs.current;
      if (!el || r.locked || r.completed) return;

      const y = window.scrollY;
      const down = y > lastY;
      lastY = y;

      if (!down || Date.now() - r.exitedAt < 600) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const offset = rect.top + rect.height / 2 - vh / 2;

      if (rect.top > vh) {
        r.entered = false;
        if (r.step > 0) updateStep(0);
        return;
      }

      if (!r.entered && offset > -vh * 0.3 && offset < vh * 0.4) {
        r.entered = true;
        r.centering = true;
        // Lock scroll immediately to prevent interference during centering
        document.body.style.overflow = "hidden";

        const target = y + offset;
        animate(y, target, {
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
          onUpdate: v => window.scrollTo(0, v),
          onComplete: () => {
            r.centering = false;
            lock();
          },
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Wheel/touch handling for stepping
  useEffect(() => {
    let delta = 0;
    let lastTime = 0;
    let touchY = 0;

    const step = (d: number) => {
      const r = refs.current;
      if (!r.locked || Date.now() - lastTime < 250) return;

      if (r.step === 0 && d < 0) return ((delta = 0), unlock("up"));
      if (r.step >= TOTAL_STEPS && d > 0) return ((delta = 0), unlock("down"));

      lastTime = Date.now();
      updateStep(clamp(r.step + (d > 0 ? 1 : -1), 0, TOTAL_STEPS));
    };

    const onWheel = (e: WheelEvent) => {
      // Block all wheel input during centering animation
      if (refs.current.centering) {
        e.preventDefault();
        return;
      }
      if (!refs.current.locked) return;
      e.preventDefault();
      delta += e.deltaY;
      if (Math.abs(delta) >= 30) {
        step(delta);
        delta = 0;
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (refs.current.centering || !refs.current.locked) return;
      touchY = e.touches[0]?.clientY ?? 0;
      delta = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      // Block all touch input during centering animation
      if (refs.current.centering) {
        e.preventDefault();
        return;
      }
      if (!refs.current.locked) return;
      e.preventDefault();
      const y = e.touches[0]?.clientY ?? 0;
      delta += touchY - y;
      touchY = y;
      if (Math.abs(delta) >= 30) {
        step(delta);
        delta = 0;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      document.body.style.overflow = "";
    };
  }, []);

  const svgVars = useMemo(() => computeSvgVars(step), [step]);

  return (
    <FadeInWrapper>
      <section
        ref={sectionRef}
        className="relative hidden min-h-screen w-full items-center justify-center lg:flex"
      >
        <div className="relative h-screen w-full">
          <LogoSvg
            className="mt-24 h-full w-full scale-85 xl:mt-28 2xl:mt-10"
            style={svgVars as unknown as CSSProperties}
            aria-label="Cleverli logo steps"
          />
        </div>
      </section>
    </FadeInWrapper>
  );
};

export default Logo;
