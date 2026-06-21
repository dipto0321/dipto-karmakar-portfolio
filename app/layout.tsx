import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import { SiteHeader } from "@/components/layout/site-header"
import { siteConfig } from "@/content/site"
import { cn } from "@/lib/utils"
import "./globals.css"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#08090b",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("dark antialiased", fontSans.variable, fontMono.variable)}
    >
      <body className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              jobTitle: siteConfig.title,
              url: siteConfig.siteUrl,
              email: siteConfig.contact.email.replace("mailto:", ""),
              telephone: siteConfig.contact.phone,
              address: siteConfig.location,
              description: siteConfig.summary,
              sameAs: [siteConfig.contact.linkedin, siteConfig.contact.github],
              knowsAbout: siteConfig.keywords,
            }),
          }}
        />
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
