"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Delay in ms before the reveal transition starts. */
  delay?: number
  /** Element tag to render. Defaults to a div. */
  as?: "div" | "li" | "section" | "span"
}

/**
 * Scroll-triggered reveal. Quiet rise + fade once the element enters the
 * viewport. Respects prefers-reduced-motion (shows immediately, no transition).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReduced) {
      // Show immediately on the next tick (async keeps setState out of the
      // effect body, which would otherwise trigger a cascading render).
      const t = setTimeout(() => setVisible(true), 0)
      return () => clearTimeout(t)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Tag = as as React.ElementType

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className
      )}
    >
      {children}
    </Tag>
  )
}
