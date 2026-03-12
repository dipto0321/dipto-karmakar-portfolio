export interface SiteConfig {
  name: string
  title: string
  description: string
  siteUrl: string
  keywords: string[]
  overview: string[]
  specializations: string[]
  resumePath: string
  avatarPath: string
  contact: {
    email: string
    linkedin: string
    github: string
  }
}
