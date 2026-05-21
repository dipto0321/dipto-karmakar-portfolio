export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  architectureHighlights: string[]
  links: ProjectLink[]
  featured: boolean
  aiAssisted?: boolean
}
