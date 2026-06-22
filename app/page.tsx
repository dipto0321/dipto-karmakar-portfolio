import { Suspense } from "react"

import { ContactSection } from "@/features/contact/contact-section"
import { ExperienceSection } from "@/features/experience/experience-section"
import { ExperienceSkeleton } from "@/features/experience/experience-skeleton"
import { HeroSection } from "@/features/hero/hero-section"
import { HeroSkeleton } from "@/features/hero/hero-skeleton"
import { ImpactSection } from "@/features/impact/impact-section"
import { ImpactSkeleton } from "@/features/impact/impact-skeleton"
import { ProjectsSection } from "@/features/projects/projects-section"
import { ProjectsSkeleton } from "@/features/projects/projects-skeleton"

export default function Page() {
  return (
    <main id="top" tabIndex={-1} className="min-h-svh bg-background outline-none">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<ImpactSkeleton />}>
        <ImpactSection />
      </Suspense>
      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<ExperienceSkeleton />}>
        <ExperienceSection />
      </Suspense>
      <ContactSection />
    </main>
  )
}
