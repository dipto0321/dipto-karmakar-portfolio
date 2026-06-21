"use client"

import { useEffect, useRef, useState } from "react"

type Line = {
  /** Plain text used for the typewriter measurement. */
  text: string
  /** Rendered output once the line is fully typed. */
  render: React.ReactNode
  prompt?: boolean
}

const lines: Line[] = [
  {
    text: "whoami",
    prompt: true,
    render: <span>whoami</span>,
  },
  {
    text: "Dipto Karmakar — senior software engineer",
    render: (
      <span className="text-foreground/90">
        Dipto Karmakar — senior software engineer
      </span>
    ),
  },
  {
    text: "cat status.json",
    prompt: true,
    render: <span>cat status.json</span>,
  },
  {
    text: '{ focus: "frontend + full-stack", open: true }',
    render: (
      <span className="text-foreground/90">
        {"{ "}
        <span className="text-muted-foreground">focus:</span>{" "}
        {'"frontend + full-stack"'},{" "}
        <span className="text-muted-foreground">open:</span>{" "}
        <span className="text-accent-cyan">true</span>
        {" }"}
      </span>
    ),
  },
]

export function TerminalStatus() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [done, setDone] = useState(false)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true

    let mounted = true
    let li = 0
    let ci = 0

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReduced) {
      // Reveal everything on the next tick — keep all state updates async so
      // we never call setState synchronously inside the effect body.
      const revealTimer = setTimeout(() => {
        if (!mounted) return
        setLineIndex(lines.length)
        setDone(true)
      }, 0)
      return () => {
        mounted = false
        clearTimeout(revealTimer)
      }
    }

    const tick = () => {
      if (!mounted) return
      if (li >= lines.length) {
        setDone(true)
        return
      }
      const current = lines[li]
      if (ci < current.text.length) {
        ci += 1
        setCharCount(ci)
        setTimeout(tick, 28)
      } else {
        li += 1
        ci = 0
        setLineIndex(li)
        setCharCount(0)
        setTimeout(tick, li >= lines.length ? 0 : 320)
      }
    }

    const startTimer = setTimeout(tick, 500)
    return () => {
      mounted = false
      clearTimeout(startTimer)
    }
  }, [])

  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border border-border bg-card/60 font-mono text-xs backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-2 text-muted-foreground">~/dipto — zsh</span>
      </div>
      <div className="min-h-[104px] space-y-1.5 px-4 py-3.5 leading-relaxed">
        {lines.map((line, i) => {
          if (i > lineIndex) return null
          const isActive = i === lineIndex && !done
          const visibleText = isActive
            ? line.text.slice(0, charCount)
            : line.text
          const showCursor = isActive || (done && i === lines.length - 1)
          return (
            <p key={i} className="text-muted-foreground">
              {line.prompt && <span className="text-accent-cyan">$ </span>}
              {isActive ? (
                <span className={line.prompt ? "" : "text-foreground/90"}>
                  {visibleText}
                </span>
              ) : (
                line.render
              )}
              {showCursor && (
                <span className="animate-pulse-soft ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-accent-cyan" />
              )}
            </p>
          )
        })}
      </div>
    </div>
  )
}
