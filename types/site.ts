export interface SiteConfig {
  name: string
  title: string
  tagline: string
  summary: string
  /** One sharp positioning sentence used in the hero. */
  headline: string
  /** Availability line shown in the status chip and contact section. */
  availability: string
  location: string
  /** Short location used in compact UI (e.g. "Dhaka, Bangladesh"). */
  locationShort: string
  /** Timezone label, e.g. "GMT+6". */
  timezone: string
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
