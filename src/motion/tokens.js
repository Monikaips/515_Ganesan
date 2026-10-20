/**
 * Motion tokens — the only animation timing/easing source.
 * Documentary pace: slow, restrained, no bounce.
 * GSAP is not installed. Use Framer Motion only.
 */
export const duration = {
  fast: 0.35,
  base: 0.7,
  slow: 1.1,
};

export const ease = [0.22, 1, 0.36, 1];

export const staggerDelay = 0.12;

export const viewport = {
  once: true,
  amount: 0.25,
};
