import { duration, ease, staggerDelay } from './tokens.js';

export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: duration.fast, ease },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.base, ease },
  },
};

export const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease },
  },
};

export const staggerChildren = {
  hidden: {},
  visible: {
    transition: { staggerChildren: staggerDelay },
  },
};

export const menuOverlay = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.fast, ease },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration.fast, ease },
  },
};

export const menuList = {
  hidden: {},
  visible: {
    transition: { staggerChildren: staggerDelay, delayChildren: 0.08 },
  },
};

export const menuItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease },
  },
};
