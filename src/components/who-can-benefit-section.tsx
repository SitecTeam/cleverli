import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  memo,
} from "react";
import { motion, useInView, type Transition } from "motion/react";
import FadeInWrapper from "./fade-in-wrapper";
import HospitalSvg from "@/svgs/partners/hospital.svg?react";
import SafeSvg from "@/svgs/partners/safe.svg?react";
import CorpoSvg from "@/svgs/partners/corpo.svg?react";
import TempleSvg from "@/svgs/partners/temple.svg?react";
import VrSvg from "@/svgs/partners/vr.svg?react";
import WeightSvg from "@/svgs/partners/weight.svg?react";
import AcademiaSvg from "@/svgs/partners/academia.svg?react";
import WindmillSvg from "@/svgs/partners/windmill.svg?react";
import PlatformSvg from "@/svgs/partners/platform.svg?react";

// =============================================================================
// Types
// =============================================================================

type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface Partner {
  title: string;
  Icon: SvgComponent;
}

interface PartnerItemProps {
  partner: Partner;
  index: number;
  isInView: boolean;
  transition: Transition;
  onRefMount: (index: number, node: HTMLDivElement | null) => void;
}

interface WhoCanBenefitSectionProps {
  /** Positive moves hub down; negative moves it up. */
  hubOffsetPx?: number;
}

interface Point {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}

// =============================================================================
// Constants
// =============================================================================

// Layout & Animation
const ANIMATION_DURATION = 1.2;
const ANIMATION_EASE = [0.16, 1, 0.3, 1] as const;
const ANIMATION_SETTLE_BUFFER = 0.35; // Extra time after animation for measurements

// Line drawing configuration
const HUB_BASE_Y = 10;
const LINE_START_T = 0.08; // Start lines slightly away from hub center
const LINE_END_T = 0.75; // End lines before reaching platforms
const START_SPREAD_GAP = 12; // Horizontal gap between line origins at hub

// Special case for Energy sector (index 7) - needs longer line
const ENERGY_INDEX = 7;
const ENERGY_LINE_END_T = 0.92;

// Y-offset adjustments for line endpoints
const ENERGY_Y_OFFSET = -70;
const BOTTOM_ROW_Y_OFFSET = -20;
const TOP_ROW_Y_MULTIPLIER = 0.62;

// Animation initial offset
const INITIAL_Y_OFFSET = 60;

// =============================================================================
// Partner Data
// =============================================================================

const TOP_ROW_PARTNERS: Partner[] = [
  { title: "Healthcare &\nPharmaceutical", Icon: HospitalSvg },
  { title: "Corporate &\nEnterprise", Icon: CorpoSvg },
  { title: "IT & Digital\nServices", Icon: VrSvg },
  { title: "Education &\nAcademia", Icon: AcademiaSvg },
];

const BOTTOM_ROW_PARTNERS: Partner[] = [
  { title: "Finance, Banking &\nInsurance", Icon: SafeSvg },
  { title: "Government &\nPublic Sector", Icon: TempleSvg },
  { title: "Legal &\nRegulatory", Icon: WeightSvg },
  { title: "Energy & Industrial\nOperations", Icon: WindmillSvg },
];

const ALL_PARTNERS: Partner[] = [...TOP_ROW_PARTNERS, ...BOTTOM_ROW_PARTNERS];

// Mobile layout uses a different order/titles to match design
const MOBILE_PARTNERS: Partner[] = [
  { title: "Healthcare &\nPharmaceutical", Icon: HospitalSvg },
  { title: "Finance, Banking &\nInsurance", Icon: SafeSvg },
  { title: "Legal, Compliance &\nRegulatory", Icon: WeightSvg },
  { title: "Educational Institutions &\nUniversities", Icon: AcademiaSvg },
  { title: "Government &\nPublic Sector", Icon: TempleSvg },
  { title: "IT & Digital\nServices", Icon: VrSvg },
  { title: "Legal &\nRegulatory", Icon: WeightSvg },
  { title: "Energy & Industrial\nOperations", Icon: WindmillSvg },
];

// =============================================================================
// Utility Functions
// =============================================================================

const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

const clamp = (value: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, value));

// =============================================================================
// Memoized Partner Item Component
// =============================================================================

const PartnerItem = memo<PartnerItemProps>(
  ({ partner, index, isInView, transition, onRefMount }) => {
    const { Icon, title } = partner;

    const setRef = useCallback(
      (node: HTMLDivElement | null) => {
        onRefMount(index, node);
      },
      [index, onRefMount]
    );

    return (
      <motion.div
        ref={setRef}
        initial={{ opacity: 0, y: INITIAL_Y_OFFSET }}
        animate={
          isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: INITIAL_Y_OFFSET }
        }
        transition={transition}
        className="group flex flex-col items-center gap-3"
      >
        <div className="relative flex h-36 w-36 items-center justify-center">
          <div className="absolute inset-0" data-line-target />
          <div className="absolute inset-0 flex translate-y-4 scale-125 items-center justify-center">
            <PlatformSvg className="h-full w-full opacity-90 drop-shadow-xl" />
          </div>
          <motion.div
            className="relative z-10 mb-4 h-20 w-20"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <Icon className="h-full w-full" />
          </motion.div>
        </div>
        <p className="text-center text-sm font-medium whitespace-pre-line text-slate-700">
          {title}
        </p>
      </motion.div>
    );
  }
);

PartnerItem.displayName = "PartnerItem";

// =============================================================================
// Mobile Partner Item (simplified, no animation tracking needed)
// =============================================================================

const MobilePartnerItem = memo<{ partner: Partner; index: number }>(
  ({ partner, index }) => {
    const { Icon, title } = partner;

    return (
      <div className="group flex items-center justify-between gap-4 py-2">
        {/* Text on the left */}
        <p className="text-left text-base leading-tight font-semibold whitespace-pre-line text-slate-700">
          {title}
        </p>

        {/* Icon with platform on the right */}
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
          <div className="absolute inset-0 flex translate-y-2 scale-110 items-center justify-center">
            <PlatformSvg className="h-full w-full opacity-90 drop-shadow-xl" />
          </div>
          <motion.div
            className="relative z-10 mb-2 h-12 w-12"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <Icon className="h-full w-full" />
          </motion.div>
        </div>
      </div>
    );
  }
);

MobilePartnerItem.displayName = "MobilePartnerItem";

// =============================================================================
// Tablet Partner Item (2-column grid layout)
// =============================================================================

const TabletPartnerItem = memo<{ partner: Partner; index: number }>(
  ({ partner, index }) => {
    const { Icon, title } = partner;

    return (
      <div className="group flex flex-col items-center gap-3">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <div className="absolute inset-0 flex translate-y-3 scale-115 items-center justify-center">
            <PlatformSvg className="h-full w-full opacity-90 drop-shadow-xl" />
          </div>
          <motion.div
            className="relative z-10 mb-3 h-16 w-16"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <Icon className="h-full w-full" />
          </motion.div>
        </div>
        <p className="text-center text-sm font-medium whitespace-pre-line text-slate-700">
          {title}
        </p>
      </div>
    );
  }
);

TabletPartnerItem.displayName = "TabletPartnerItem";

// =============================================================================
// Main Component
// =============================================================================

const WhoCanBenefitSection: React.FC<WhoCanBenefitSectionProps> = ({
  hubOffsetPx = 0,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationTriggerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scheduleMeasureRef = useRef<(() => void) | null>(null);

  // Single trigger for all animations
  const isInView = useInView(animationTriggerRef, {
    once: true,
    margin: "-100px",
  });

  const [svgSize, setSvgSize] = useState<Size>({ width: 0, height: 0 });
  const [endpoints, setEndpoints] = useState<Point[]>([]);

  // Stable transition object to prevent unnecessary re-renders
  const transition = useMemo<Transition>(
    () => ({
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASE,
    }),
    []
  );

  // Callback for ref mounting - stable reference
  const handleRefMount = useCallback(
    (index: number, node: HTMLDivElement | null) => {
      itemRefs.current[index] = node;
    },
    []
  );

  // Sorting logic to map endpoints to sorted left-to-right order
  const rankByIndex = useMemo(() => {
    if (endpoints.length === 0) return [];

    const indices = endpoints.map((_, i) => i);
    indices.sort((a, b) => endpoints[a].x - endpoints[b].x);

    const ranks = new Array<number>(endpoints.length).fill(0);
    indices.forEach((originalIndex, sortedRank) => {
      ranks[originalIndex] = sortedRank;
    });

    return ranks;
  }, [endpoints]);

  const startPoint = useMemo<Point>(
    () => ({
      x: svgSize.width / 2,
      y: HUB_BASE_Y + hubOffsetPx,
    }),
    [hubOffsetPx, svgSize.width]
  );

  // Measurement function - memoized with useCallback
  const measure = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const containerRect = el.getBoundingClientRect();
    const width = Math.max(0, Math.round(containerRect.width));
    const height = Math.max(0, Math.round(containerRect.height));

    const points: Point[] = ALL_PARTNERS.map((_, i) => {
      const item = itemRefs.current[i];
      const target = item?.querySelector<HTMLElement>("[data-line-target]");

      if (!item || !target) {
        return { x: width / 2, y: 0 };
      }

      const r = target.getBoundingClientRect();
      const x = r.left + r.width / 2 - containerRect.left;

      // Calculate Y offset based on row position
      const isBottomRow = i >= TOP_ROW_PARTNERS.length;
      const yOffset =
        i === ENERGY_INDEX
          ? ENERGY_Y_OFFSET
          : isBottomRow
            ? BOTTOM_ROW_Y_OFFSET
            : r.height * TOP_ROW_Y_MULTIPLIER;

      const y = r.top + yOffset - containerRect.top;

      return {
        x: clamp(x, 0, width),
        y: clamp(y, 0, height),
      };
    });

    setSvgSize(prev =>
      prev.width === width && prev.height === height ? prev : { width, height }
    );
    setEndpoints(points);
  }, []);

  // Setup ResizeObserver and window resize listener
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId = 0;

    const schedule = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(measure);
    };

    scheduleMeasureRef.current = schedule;
    schedule();

    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(el);
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", schedule);

      if (scheduleMeasureRef.current === schedule) {
        scheduleMeasureRef.current = null;
      }
    };
  }, [measure]);

  // Continuous measurement during animation for accurate line positioning
  useEffect(() => {
    if (!isInView) return;

    let rafId = 0;
    const startedAt = performance.now();
    const durationMs = (ANIMATION_DURATION + ANIMATION_SETTLE_BUFFER) * 1000;

    const tick = () => {
      scheduleMeasureRef.current?.();

      if (performance.now() - startedAt < durationMs) {
        rafId = requestAnimationFrame(tick);
      }
    };

    // Initial measurements
    scheduleMeasureRef.current?.();
    // Deferred measurement for layout stability
    queueMicrotask(() => scheduleMeasureRef.current?.());
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isInView]);

  // Compute line data for SVG rendering
  const lineData = useMemo(() => {
    return endpoints.map((p, index) => {
      const rank = rankByIndex[index] ?? 0;
      const centeredRank = rank - (endpoints.length - 1) / 2;
      const originX = startPoint.x + centeredRank * START_SPREAD_GAP;
      const originY = startPoint.y;

      const lineEndT = index === ENERGY_INDEX ? ENERGY_LINE_END_T : LINE_END_T;

      return {
        x1: lerp(originX, p.x, LINE_START_T),
        y1: lerp(originY, p.y, LINE_START_T),
        x2: lerp(originX, p.x, lineEndT),
        y2: lerp(originY, p.y, lineEndT),
      };
    });
  }, [endpoints, rankByIndex, startPoint]);

  return (
    <section className="flex w-full flex-col items-center gap-8 pb-12 lg:gap-12 lg:pb-24">
      <FadeInWrapper className="space-y-4 text-center">
        <h2 className="text-4xl font-bold text-slate-800 lg:text-6xl">
          Who Can Benefit From Our Services?
        </h2>
        <p className="text-xl text-slate-600 italic lg:text-2xl">
          We proudly partner with organizations across different sectors:
        </p>
      </FadeInWrapper>

      <div
        ref={node => {
          containerRef.current = node;
          animationTriggerRef.current = node;
        }}
        className="relative mx-auto w-full max-w-350 px-4"
      >
        {/* Desktop Lines - Absolute SVG */}
        <svg
          className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
          viewBox={`0 0 ${svgSize.width || 1} ${svgSize.height || 1}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#475569" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {lineData.map((line, index) => (
            <motion.line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isInView
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={transition}
            />
          ))}
        </svg>

        {/* Desktop Layout */}
        <div className="relative z-10 pt-6 lg:pt-28">
          {/* Top row - 4 items */}
          <div className="pointer-events-none absolute grid h-0 w-0 -translate-x-[6.25%] grid-cols-4 justify-items-center overflow-hidden opacity-0 lg:pointer-events-auto lg:static lg:mx-auto lg:h-auto lg:w-[88%] lg:overflow-visible lg:opacity-100">
            {TOP_ROW_PARTNERS.map((partner, index) => (
              <PartnerItem
                key={partner.title}
                partner={partner}
                index={index}
                isInView={isInView}
                transition={transition}
                onRefMount={handleRefMount}
              />
            ))}
          </div>

          {/* Bottom row - 4 items offset */}
          <div className="pointer-events-none absolute -mt-16 grid h-0 w-0 translate-x-[6.25%] grid-cols-4 justify-items-center overflow-hidden opacity-0 lg:pointer-events-auto lg:static lg:mx-auto lg:h-auto lg:w-[88%] lg:overflow-visible lg:opacity-100">
            {BOTTOM_ROW_PARTNERS.map((partner, index) => (
              <PartnerItem
                key={partner.title}
                partner={partner}
                index={index + TOP_ROW_PARTNERS.length}
                isInView={isInView}
                transition={transition}
                onRefMount={handleRefMount}
              />
            ))}
          </div>

          {/* Tablet 2-column grid layout */}
          <div className="hidden justify-items-center gap-8 md:grid md:grid-cols-2 lg:hidden">
            {ALL_PARTNERS.map((partner, index) => (
              <TabletPartnerItem
                key={`${partner.title}-${index}`}
                partner={partner}
                index={index}
              />
            ))}
          </div>

          {/* Mobile single-column layout - text left, icon right */}
          <div className="flex flex-col gap-4 px-2 md:hidden">
            {MOBILE_PARTNERS.map((partner, index) => (
              <MobilePartnerItem
                key={`${partner.title}-${index}`}
                partner={partner}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanBenefitSection;
