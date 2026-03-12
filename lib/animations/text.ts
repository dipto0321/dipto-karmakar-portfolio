import type { Transition, Variants } from "framer-motion"

export const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const wordTransition: Transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
}

export const wordDelayStep = 0.04

export function splitHeadingWords(text: string): string[] {
  return text.trim().split(/\s+/)
}
