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
import {
  TOTAL_STEPS,
  LOCK_THRESHOLD_TOP,
  LOCK_THRESHOLD_BOTTOM,
  STEP_DEBOUNCE_MS,
  EXIT_COOLDOWN_MS,
  SCROLL_THRESHOLD,
  clamp,
  computeSvgVars,
} from "./utils";

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
    overflowSetByThis: false, // Track if this component set overflow
  });

  const updateStep = (next: number) => {
    refs.current.step = next;
    setStep(next);
  };

  const lock = () => {
    if (refs.current.locked || refs.current.completed) return;
    refs.current.locked = true;
    refs.current.overflowSetByThis = true;
    document.body.style.overflow = "hidden";
  };

  const unlock = (dir: "up" | "down") => {
    if (!refs.current.locked) return;
    Object.assign(refs.current, {
      locked: false,
      entered: false,
      exitedAt: Date.now(),
      completed: dir === "down" && refs.current.step >= TOTAL_STEPS,
      overflowSetByThis: false,
    });
    document.body.style.overflow = "";
    if (dir === "up") updateStep(0);
  };

  // Scroll detection - lock section when scrolling down into view
  // Also handles resize to unlock on viewport changes
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const el = sectionRef.current;
      const r = refs.current;
      if (!el || r.locked || r.completed) return;

      const y = window.scrollY;
      const down = y > lastY;
      lastY = y;

      if (!down || Date.now() - r.exitedAt < EXIT_COOLDOWN_MS) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const offset = rect.top + rect.height / 2 - vh / 2;

      if (rect.top > vh) {
        r.entered = false;
        if (r.step > 0) updateStep(0);
        return;
      }

      if (
        !r.entered &&
        offset > -vh * LOCK_THRESHOLD_TOP &&
        offset < vh * LOCK_THRESHOLD_BOTTOM
      ) {
        r.entered = true;
        r.centering = true;
        r.overflowSetByThis = true;
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

    const onResize = () => {
      const r = refs.current;
      if (r.locked || r.centering) {
        // Clear scroll lock on resize to prevent stuck states
        r.centering = false;
        unlock("up");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      // Reset overflow if this component set it during centering
      if (refs.current.centering && refs.current.overflowSetByThis) {
        document.body.style.overflow = "";
        refs.current.overflowSetByThis = false;
      }
    };
  }, []);

  // Wheel/touch handling for stepping
  useEffect(() => {
    let delta = 0;
    let lastTime = 0;
    let touchY = 0;

    const advanceStep = (d: number) => {
      const r = refs.current;
      if (!r.locked || Date.now() - lastTime < STEP_DEBOUNCE_MS) return;

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
      if (Math.abs(delta) >= SCROLL_THRESHOLD) {
        advanceStep(delta);
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
      if (Math.abs(delta) >= SCROLL_THRESHOLD) {
        advanceStep(delta);
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
      // Only reset overflow if this component set it
      if (refs.current.overflowSetByThis) {
        document.body.style.overflow = "";
        refs.current.overflowSetByThis = false;
      }
    };
  }, []);

  // Keyboard handling for accessibility
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const r = refs.current;

      // Allow keyboard navigation when locked
      if (!r.locked && !r.centering) return;

      switch (e.key) {
        case "Tab":
          // Prevent Tab from moving focus outside the section while locked
          // This prevents the browser from scrolling to focused elements
          e.preventDefault();
          // Treat Tab as navigation through steps
          if (r.centering) return;
          if (e.shiftKey) {
            // Shift+Tab goes backward
            if (r.step === 0) {
              unlock("up");
            } else {
              updateStep(clamp(r.step - 1, 0, TOTAL_STEPS));
            }
          } else {
            // Tab goes forward
            if (r.step >= TOTAL_STEPS) {
              unlock("down");
            } else {
              updateStep(clamp(r.step + 1, 0, TOTAL_STEPS));
            }
          }
          break;
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          if (r.centering) return;
          if (r.step >= TOTAL_STEPS) {
            unlock("down");
          } else {
            updateStep(clamp(r.step + 1, 0, TOTAL_STEPS));
          }
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          if (r.centering) return;
          if (r.step === 0) {
            unlock("up");
          } else {
            updateStep(clamp(r.step - 1, 0, TOTAL_STEPS));
          }
          break;
        case "Escape":
          e.preventDefault();
          if (r.centering) {
            // Force exit during centering animation
            r.centering = false;
          }
          unlock("up");
          break;
        case "Home":
          e.preventDefault();
          if (r.centering) return;
          unlock("up");
          break;
        case "End":
          e.preventDefault();
          if (r.centering) return;
          updateStep(TOTAL_STEPS);
          unlock("down");
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
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
            className="mt-24 h-full w-full scale-85 2xl:mt-10"
            style={svgVars as unknown as CSSProperties}
            aria-label="Cleverli logo steps"
          />
        </div>
      </section>
    </FadeInWrapper>
  );
};

export default Logo;
