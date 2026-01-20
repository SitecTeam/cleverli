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
  const state = useRef({
    step: 0,
    locked: false,
    entered: false,
    completed: false,
    exitedAt: 0,
    centering: false,
  });

  const updateStep = (n: number) => {
    state.current.step = n;
    setStep(n);
  };

  const lock = () => {
    if (state.current.locked || state.current.completed) return;
    state.current.locked = true;
    document.body.style.overflow = "hidden";
    sectionRef.current?.focus({ preventScroll: true });
  };

  const unlock = (dir: "up" | "down") => {
    if (!state.current.locked) return;
    Object.assign(state.current, {
      locked: false,
      entered: false,
      exitedAt: Date.now(),
      completed: dir === "down" && state.current.step >= TOTAL_STEPS,
    });
    document.body.style.overflow = "";
    if (dir === "up") updateStep(0);
  };

  const centerAndLock = () => {
    const el = sectionRef.current,
      s = state.current;
    if (!el || s.locked || s.completed) return;
    const rect = el.getBoundingClientRect(),
      vh = window.innerHeight;
    const offset = rect.top + rect.height / 2 - vh / 2,
      y = window.scrollY;
    Object.assign(s, { entered: true, centering: true });
    document.body.style.overflow = "hidden";
    animate(y, y + offset, {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      onUpdate: v => window.scrollTo(0, v),
      onComplete: () => {
        s.centering = false;
        lock();
      },
    });
  };

  const navigate = (dir: 1 | -1) => {
    const s = state.current;
    if (s.step === 0 && dir < 0) return unlock("up");
    if (s.step >= TOTAL_STEPS && dir > 0) return unlock("down");
    updateStep(clamp(s.step + dir, 0, TOTAL_STEPS));
  };

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const el = sectionRef.current,
        s = state.current;
      if (!el || s.locked || s.completed) return;
      const y = window.scrollY,
        down = y > lastY;
      lastY = y;
      if (!down || Date.now() - s.exitedAt < EXIT_COOLDOWN_MS) return;
      const rect = el.getBoundingClientRect(),
        vh = window.innerHeight;
      const offset = rect.top + rect.height / 2 - vh / 2;
      if (rect.top > vh) {
        s.entered = false;
        if (s.step > 0) updateStep(0);
        return;
      }
      if (
        !s.entered &&
        offset > -vh * LOCK_THRESHOLD_TOP &&
        offset < vh * LOCK_THRESHOLD_BOTTOM
      )
        centerAndLock();
    };
    const onResize = () => {
      if (state.current.locked || state.current.centering) {
        state.current.centering = false;
        // Unlock without resetting step to preserve progress
        if (state.current.locked) {
          state.current.locked = false;
          state.current.entered = false;
          state.current.exitedAt = Date.now();
          document.body.style.overflow = "";
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    let delta = 0,
      lastTime = 0,
      touchY = 0;
    const tryNavigate = (d: number) => {
      const s = state.current;
      if (!s.locked || Date.now() - lastTime < STEP_DEBOUNCE_MS) return;
      lastTime = Date.now();
      delta = 0;
      navigate(d > 0 ? 1 : -1);
    };
    const onWheel = (e: WheelEvent) => {
      const s = state.current;
      if (s.centering) {
        e.preventDefault();
        return;
      }
      if (!s.locked) return;
      e.preventDefault();
      delta += e.deltaY;
      if (Math.abs(delta) >= SCROLL_THRESHOLD) tryNavigate(delta);
    };
    const onTouchStart = (e: TouchEvent) => {
      if (!state.current.centering && state.current.locked) {
        touchY = e.touches[0]?.clientY ?? 0;
        delta = 0;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (state.current.centering) {
        e.preventDefault();
        return;
      }
      if (!state.current.locked) return;
      e.preventDefault();
      const y = e.touches[0]?.clientY ?? 0;
      delta += touchY - y;
      touchY = y;
      if (Math.abs(delta) >= SCROLL_THRESHOLD) tryNavigate(delta);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const s = state.current;
      if (!s.locked && !s.centering) return;
      const nav = {
        ArrowDown: 1,
        PageDown: 1,
        Tab: e.shiftKey ? -1 : 1,
        ArrowUp: -1,
        PageUp: -1,
      } as Record<string, 1 | -1>;
      if (nav[e.key]) {
        e.preventDefault();
        if (!s.centering) navigate(nav[e.key]);
      } else if (e.key === "Escape") {
        e.preventDefault();
        s.centering = false;
        unlock("up");
      } else if (e.key === "Home") {
        e.preventDefault();
        if (!s.centering) unlock("up");
      } else if (e.key === "End") {
        e.preventDefault();
        if (!s.centering) {
          updateStep(TOTAL_STEPS);
          unlock("down");
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <FadeInWrapper>
      <section
        ref={sectionRef}
        tabIndex={0}
        onFocus={centerAndLock}
        className="relative hidden min-h-screen w-full items-center justify-center outline-none lg:flex"
      >
        <div className="relative h-screen w-full">
          <LogoSvg
            className="mt-24 h-full w-full scale-85 2xl:mt-10"
            style={computeSvgVars(step) as unknown as CSSProperties}
            aria-label="Cleverli logo steps"
          />
        </div>
      </section>
    </FadeInWrapper>
  );
};

export default Logo;
