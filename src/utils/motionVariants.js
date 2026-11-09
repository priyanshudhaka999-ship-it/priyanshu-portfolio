/**
 * Reusable Framer Motion variants with built-in support for prefers-reduced-motion.
 */

export const createFadeUpVariant = (reduced = false, delay = 0) => ({
  hidden: {
    opacity: 0,
    y: reduced ? 0 : 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduced ? 0.15 : 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const createStaggerContainer = (reduced = false, stagger = 0.09) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reduced ? 0 : stagger,
      delayChildren: reduced ? 0 : 0.05,
    },
  },
});

export const createCardHover = (reduced = false) =>
  reduced
    ? {}
    : {
        y: -4,
        transition: { duration: 0.25, ease: 'easeOut' },
      };
