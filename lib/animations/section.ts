import type { Transition, Variants } from "framer-motion"

export const sectionViewport = {
  amount: 0.24,
  once: true,
} as const

export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.985,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
}

export const sectionTransition: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
}

export const reducedSectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}
