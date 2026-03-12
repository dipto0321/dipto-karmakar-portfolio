export interface SiteConfig {
  name: string
  title: string
  tagline: string
  summary: string
  location: string
  description: string
  siteUrl: string
  keywords: string[]
  overview: string[]
  specializations: string[]
  resumePath: string
  avatarPath: string
  contact: {
    email: string
    phone: string
    linkedin: string
    github: string
  }
}
