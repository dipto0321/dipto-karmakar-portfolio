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
        background:
          "linear-gradient(135deg, #0a0f1e 0%, #0d1424 50%, #0a1628 100%)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(96,165,250,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16,185,129,0.06) 0%, transparent 50%)",
        }}
      />

      {/* Avatar placeholder */}
      <div
        style={{
          position: "absolute",
          top: "64px",
          right: "64px",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(96,165,250,0.15)",
          border: "1px solid rgba(96,165,250,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(96,165,250,0.9)",
          fontSize: "24px",
          fontWeight: 700,
        }}
      >
        DK
      </div>

      {/* Eyebrow */}
      <p
        style={{
          margin: 0,
          marginBottom: "16px",
          fontSize: "14px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "rgba(96,165,250,0.8)",
        }}
      >
        Portfolio
      </p>

      {/* Name */}
      <h1
        style={{
          margin: 0,
          marginBottom: "12px",
          fontSize: "72px",
          fontWeight: 700,
          color: "#f1f5f9",
          lineHeight: 1.1,
        }}
      >
        {siteConfig.name}
      </h1>

      {/* Title */}
      <p
        style={{
          margin: 0,
          marginBottom: "32px",
          fontSize: "28px",
          color: "rgba(148,163,184,0.9)",
          fontWeight: 400,
        }}
      >
        {siteConfig.title}
      </p>

      {/* Tagline */}
      <p
        style={{
          margin: 0,
          fontSize: "18px",
          color: "rgba(100,116,139,0.9)",
          maxWidth: "700px",
          lineHeight: 1.6,
        }}
      >
        React · TypeScript · Next.js · Node.js · Real-time systems
      </p>
    </div>,
    { ...size }
  )
}
