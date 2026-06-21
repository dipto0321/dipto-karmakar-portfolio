import { ContactSection } from "@/features/contact/contact-section"
import { ExperienceSection } from "@/features/experience/experience-section"
import { HeroSection } from "@/features/hero/hero-section"
import { ImpactSection } from "@/features/impact/impact-section"
import { ProjectsSection } from "@/features/projects/projects-section"

export default function Page() {
  return (
    <main id="top" className="min-h-svh bg-background">
      <HeroSection />
      <ImpactSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
