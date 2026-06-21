"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Cursor-reactive grid glow for the hero.
 * - A faint cyan light follows the cursor over a brighter dot grid,
 *   revealed only within a soft radial mask around the pointer.
 * - Desktop / fine-pointer only (skipped on touch).
 * - Fully disabled when the user prefers reduced motion.
 * - Only animates on interaction → zero idle cost.
 */
export function InteractiveGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const frame = useRef<number | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const finePointer = window.matchMedia("(pointer: fine)").matches
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (!finePointer || reducedMotion) return

    const section = el.parentElement
    if (!section) return

    const onMove = (e: MouseEvent) => {
      if (frame.current !== null) return
      frame.current = requestAnimationFrame(() => {
        frame.current = null
        const rect = section.getBoundingClientRect()
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
        el.style.setProperty("--my", `${e.clientY - rect.top}px`)
      })
    }
    const onEnter = () => setActive(true)
    const onLeave = () => setActive(false)

    section.addEventListener("mousemove", onMove)
    section.addEventListener("mouseenter", onEnter)
    section.addEventListener("mouseleave", onLeave)

    return () => {
      section.removeEventListener("mousemove", onMove)
      section.removeEventListener("mouseenter", onEnter)
      section.removeEventListener("mouseleave", onLeave)
      if (frame.current !== null) cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 transition-opacity duration-500"
      style={{
        opacity: active ? 1 : 0,
        backgroundImage:
          "radial-gradient(oklch(0.84 0.13 200 / 55%) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        WebkitMaskImage:
          "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), black, transparent 70%)",
        maskImage:
          "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), black, transparent 70%)",
      }}
    />
  )
}
