import type { Transition } from "framer-motion"

export const cardHover = {
  y: -6,
  scale: 1.02,
}

export const cardHoverTransition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
}
