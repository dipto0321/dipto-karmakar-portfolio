export interface SiteConfig {
  name: string
  title: string
  description: string
  overview: string[]
  specializations: string[]
  resumePath: string
  contact: {
    email: string
    linkedin: string
    github: string
  }
}
