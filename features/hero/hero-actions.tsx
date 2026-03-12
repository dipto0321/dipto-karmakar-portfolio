import Link from "next/link"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/content/site"

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild size="lg" className="rounded-full px-6">
        <Link href="#projects">View Projects</Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="rounded-full px-6">
        <Link href={siteConfig.resumePath} target="_blank" rel="noreferrer">
          Download Resume
        </Link>
      </Button>
      <Button asChild size="lg" variant="ghost" className="rounded-full px-6">
        <Link href={siteConfig.contact.email}>Contact</Link>
      </Button>
    </div>
  )
}
