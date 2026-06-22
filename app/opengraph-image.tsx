import { ImageResponse } from "next/og"

import { siteConfig } from "@/content/site"

export const runtime = "edge"
export const alt = `${siteConfig.name} — ${siteConfig.title}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "64px",
        background: "#101318",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Cyan glow top-right */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "rgba(34,212,232,0.07)",
          filter: "blur(80px)",
        }}
      />

      {/* Monogram badge */}
      <div
        style={{
          position: "absolute",
          top: 56,
          right: 64,
          width: 72,
          height: 72,
          borderRadius: 12,
          background: "rgba(34,212,232,0.1)",
          border: "1px solid rgba(34,212,232,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#22d4e8",
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "0.05em",
        }}
      >
        DK
      </div>

      {/* Eyebrow */}
      <p
        style={{
          margin: 0,
          marginBottom: 20,
          fontSize: 13,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#22d4e8",
          fontWeight: 500,
        }}
      >
        {"// portfolio"}
      </p>

      {/* Name */}
      <h1
        style={{
          margin: 0,
          marginBottom: 14,
          fontSize: 76,
          fontWeight: 700,
          color: "#f4f5f7",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        {siteConfig.name}
      </h1>

      {/* Title */}
      <p
        style={{
          margin: 0,
          marginBottom: 36,
          fontSize: 26,
          color: "rgba(244,245,247,0.55)",
          fontWeight: 400,
          letterSpacing: "0.01em",
        }}
      >
        {siteConfig.title}
      </p>

      {/* Divider */}
      <div
        style={{
          width: 48,
          height: 1,
          background: "rgba(34,212,232,0.4)",
          marginBottom: 28,
        }}
      />

      {/* Stack line */}
      <p
        style={{
          margin: 0,
          fontSize: 16,
          color: "#64748b",
          letterSpacing: "0.04em",
          fontWeight: 400,
        }}
      >
        React · TypeScript · Next.js · Node.js · Real-time systems
      </p>
    </div>,
    { ...size }
  )
}
