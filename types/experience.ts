export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location: string
  impact: readonly string[]
  technologies: string[]
  current?: boolean
  contractType?: string
  workMode?: string
}
