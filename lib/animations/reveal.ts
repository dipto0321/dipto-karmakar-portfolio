import type { Transition, Variants } from "framer-motion"

export const revealStagger = 0.08

export const revealContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: revealStagger,
    },
  },
}

export const revealItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const revealItemTransition: Transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
}

export const reducedRevealItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
