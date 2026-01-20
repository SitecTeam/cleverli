export const TOTAL_STEPS = 13;

// Cards reveal order (book/serpentine pattern)
const CARD_REVEAL_ORDER = [2, 1, 5, 3, 4, 6, 7, 13, 11, 9, 8, 10, 12];

// Maps logo-card-N -> logo-line-M
const CARD_TO_LINE = [0, 9, 4, 2, 13, 1, 5, 10, 8, 6, 11, 12, 7, 3];

export const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

// Pre-compute reveal steps for cards and lines
const computeRevealMap = (order: number[], mapping?: number[]) => {
  const revealAt = new Array(TOTAL_STEPS + 1).fill(0);
  for (let step = 1; step <= TOTAL_STEPS; step++) {
    const id = mapping
      ? mapping[order[step - 1] ?? step]
      : (order[step - 1] ?? step);
    if (id >= 1 && id <= TOTAL_STEPS) revealAt[id] = step;
  }
  return revealAt;
};

const cardRevealAt = computeRevealMap(CARD_REVEAL_ORDER);
const lineRevealAt = computeRevealMap(CARD_REVEAL_ORDER, CARD_TO_LINE);

export const computeSvgVars = (step: number): Record<string, number> => {
  const style: Record<string, number> = { "--logo-base-opacity": 1 };

  for (let i = 1; i <= TOTAL_STEPS; i++) {
    style[`--logo-seg-${i}`] = step >= i ? 1 : 0;
    style[`--card-${i}`] = step >= cardRevealAt[i] ? 1 : 0;
    style[`--line-${i}`] = step >= lineRevealAt[i] ? 1 : 0;
  }

  return style;
};
