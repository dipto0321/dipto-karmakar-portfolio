import { Section3DSlider } from "@/components/shared/section-3d-slider"
import { ExperienceSection } from "@/features/experience/experience-section"
import { HeroSection } from "@/features/hero/hero-section"
import { ImpactSection } from "@/features/impact/impact-section"
import { LeadershipSection } from "@/features/leadership/leadership-section"
import { ProjectsSection } from "@/features/projects/projects-section"
import { SkillsSection } from "@/features/skills/skills-section"

export default function Page() {
  return (
    <main className="min-h-svh">
      <Section3DSlider tilt="left" initialVisible={true}>
        <HeroSection />
      </Section3DSlider>
      <Section3DSlider tilt="right" delay={0.03}>
        <ImpactSection />
      </Section3DSlider>
      <Section3DSlider tilt="left" delay={0.03}>
        <ProjectsSection />
      </Section3DSlider>
      <Section3DSlider tilt="right" delay={0.03}>
        <SkillsSection />
      </Section3DSlider>
      <Section3DSlider tilt="left" delay={0.03}>
        <ExperienceSection />
      </Section3DSlider>
      <Section3DSlider tilt="right" delay={0.03}>
        <LeadershipSection />
      </Section3DSlider>
    </main>
  )
}
