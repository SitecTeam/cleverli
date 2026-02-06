import { useState, useRef, useEffect, useCallback } from "react";
import { animate } from "motion/react";
import { data } from "../data";
import { cn } from "@/lib/utils";
import CarouselCard from "./carousel-card";
import CarouselBackCard from "./carousel-back-card";
import FadeInWrapper from "../../fade-in-wrapper";

const THRESH_TOP = 0.3;
const THRESH_BOT = 0.4;
const WHEEL_PX = 30;
const STEP_PX = 200;
const COOLDOWN = 600;

/** Returns true if the wheel delta can be consumed by a scrollable card child */
const canCardScroll = (target: EventTarget | null, dy: number) => {
  let el = target instanceof HTMLElement ? target : null;
  while (el) {
    if (el.scrollHeight > el.clientHeight + 1) {
      const ov = getComputedStyle(el).overflowY;
      if (ov === "auto" || ov === "scroll") {
        if (dy > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1)
          return true;
        if (dy < 0 && el.scrollTop > 0) return true;
      }
    }
    el = el.parentElement;
  }
  return false;
};

const CardsCarousel = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const s = useRef({
    locked: false,
    entered: false,
    centering: false,
    exitedAt: 0,
    exitDir: null as "up" | "down" | null,
  });

  const unlock = useCallback((dir: "up" | "down") => {
    if (!s.current.locked) return;
    Object.assign(s.current, {
      locked: false,
      entered: false,
      exitedAt: Date.now(),
      exitDir: dir,
    });
    document.body.style.overflow = "";
  }, []);

  const centerAndLock = useCallback((fromBelow: boolean) => {
    const el = sectionRef.current;
    const st = s.current;
    if (!el || st.locked) return;

    // Snap horizontal scroll to the correct side before locking
    if (scrollRef.current) {
      const maxLeft =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: fromBelow ? maxLeft : 0,
        behavior: "instant",
      });
    }

    const rect = el.getBoundingClientRect();
    const offset = rect.top + rect.height / 2 - innerHeight / 2;
    const y = scrollY;

    Object.assign(st, { entered: true, centering: true });
    document.body.style.overflow = "hidden";

    animate(y, y + offset, {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      onUpdate: v => window.scrollTo(0, v),
      onComplete: () => {
        st.centering = false;
        st.locked = true;
        sectionRef.current?.focus({ preventScroll: true });
      },
    });
  }, []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      const el = scrollRef.current;
      if (!el) return;
      if (dir < 0 && el.scrollLeft <= 1) return unlock("up");
      if (dir > 0 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
        return unlock("down");
      el.scrollBy({ left: dir * STEP_PX, behavior: "smooth" });
    },
    [unlock]
  );

  /* ── Page scroll → detect entry (both directions) ───────── */
  useEffect(() => {
    let lastY = scrollY;
    const onScroll = () => {
      const el = sectionRef.current;
      const st = s.current;
      if (!el || st.locked) return;
      const y = scrollY;
      const down = y > lastY;
      lastY = y;
      if (Date.now() - st.exitedAt < COOLDOWN) return;

      const rect = el.getBoundingClientRect();
      // Reset when fully out of view
      if (rect.bottom < 0 || rect.top > innerHeight) {
        st.entered = false;
        st.exitDir = null;
        return;
      }
      // Don't re-lock in the same direction we just exited
      if ((st.exitDir === "down" && down) || (st.exitDir === "up" && !down))
        return;

      const offset = rect.top + rect.height / 2 - innerHeight / 2;
      if (
        !st.entered &&
        offset > -innerHeight * THRESH_TOP &&
        offset < innerHeight * THRESH_BOT
      )
        centerAndLock(!down);
    };
    const onResize = () => {
      const st = s.current;
      if (!st.locked && !st.centering) return;
      Object.assign(st, {
        centering: false,
        locked: false,
        entered: false,
        exitedAt: Date.now(),
      });
      document.body.style.overflow = "";
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onResize);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onResize);
    };
  }, [centerAndLock]);

  /* ── Wheel / touch / keyboard while locked ──────────────── */
  useEffect(() => {
    let delta = 0;
    let touchY = 0;
    const step = (d: number) => {
      delta = 0;
      navigate(d > 0 ? 1 : -1);
    };
    const onWheel = (e: WheelEvent) => {
      const st = s.current;
      if (st.centering) return e.preventDefault();
      if (!st.locked) return;
      if (canCardScroll(e.target, e.deltaY)) return; // let card content scroll
      e.preventDefault();
      delta += e.deltaY;
      if (Math.abs(delta) >= WHEEL_PX) step(delta);
    };
    const onTouchStart = (e: TouchEvent) => {
      if (s.current.locked && !s.current.centering) {
        touchY = e.touches[0]?.clientY ?? 0;
        delta = 0;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      const st = s.current;
      if (st.centering) return e.preventDefault();
      if (!st.locked) return;
      e.preventDefault();
      const y = e.touches[0]?.clientY ?? 0;
      delta += touchY - y;
      touchY = y;
      if (Math.abs(delta) >= WHEEL_PX) step(delta);
    };
    const onKey = (e: KeyboardEvent) => {
      const st = s.current;
      if (!st.locked && !st.centering) return;
      const dir: Record<string, 1 | -1> = {
        ArrowDown: 1,
        ArrowRight: 1,
        PageDown: 1,
        ArrowUp: -1,
        ArrowLeft: -1,
        PageUp: -1,
        Tab: e.shiftKey ? -1 : 1,
      };
      if (dir[e.key]) {
        e.preventDefault();
        if (!st.centering) navigate(dir[e.key]);
      } else if (e.key === "Escape") {
        e.preventDefault();
        st.centering = false;
        unlock("up");
      }
    };
    addEventListener("wheel", onWheel, { passive: false });
    addEventListener("touchstart", onTouchStart, { passive: true });
    addEventListener("touchmove", onTouchMove, { passive: false });
    addEventListener("keydown", onKey);
    return () => {
      removeEventListener("wheel", onWheel);
      removeEventListener("touchstart", onTouchStart);
      removeEventListener("touchmove", onTouchMove);
      removeEventListener("keydown", onKey);
    };
  }, [navigate, unlock]);

  const toggleFlip = (id: number) =>
    setFlippedCards(p => {
      const n = new Set(p);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });

  return (
    <FadeInWrapper margin="-200px" className="w-full">
      <section
        ref={sectionRef}
        tabIndex={0}
        aria-roledescription="carousel"
        aria-label="Our services cards – scroll to browse"
        className="relative flex w-full items-center justify-center outline-none"
      >
        <div
          ref={scrollRef}
          role="list"
          className="scrollbar-none w-full max-w-360 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            className="flex gap-16 pt-12 pb-13 2xl:py-16"
            style={{ paddingInline: "max(1.5rem, calc(50% - 160px))" }}
          >
            {data.map((card, idx) => (
              <div
                key={card.id}
                role="listitem"
                aria-label={`Service ${idx + 1} of ${data.length}: ${card.title}`}
                className="shrink-0 px-16"
              >
                <div
                  className={cn(
                    "group relative h-fit w-fit cursor-pointer rounded-xl transition-transform duration-700 transform-3d hover:scale-[1.2] hover:shadow-lg hover:2xl:scale-[1.25]",
                    flippedCards.has(card.id) && "transform-[rotateY(180deg)]"
                  )}
                  onClick={() => toggleFlip(card.id)}
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFlip(card.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={flippedCards.has(card.id)}
                  aria-label={`${card.title} – press to ${flippedCards.has(card.id) ? "show summary" : "show details"}`}
                >
                  <CarouselCard
                    title={card.title}
                    description={card.description}
                    src={card.src}
                  />
                  <CarouselBackCard
                    title={card.title}
                    description={card.description}
                    src={card.src}
                    details={card.details}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInWrapper>
  );
};

export default CardsCarousel;
