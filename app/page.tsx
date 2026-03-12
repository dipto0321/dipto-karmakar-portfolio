import { HeroSection } from "@/features/hero/hero-section"
import { ImpactSection } from "@/features/impact/impact-section"
import { ProjectsSection } from "@/features/projects/projects-section"

export default function Page() {
  return (
    <main className="min-h-svh">
      <HeroSection />
      <ImpactSection />
      <ProjectsSection />
    </main>
  )
}
