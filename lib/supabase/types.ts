/**
 * Database row types for the portfolio Supabase schema.
 * Auto-update this file after running `supabase gen types typescript`.
 *
 * Table: projects
 * ─────────────────────────────────────────────────────────────────
 * id                     text  PK
 * title                  text
 * description            text
 * tech_stack             text[]
 * architecture_highlights text[]
 * links                  jsonb   -- [{ label: string; url: string }]
 * featured               boolean
 * sort_order             integer
 * created_at             timestamptz
 *
 * Table: impact_stats
 * ─────────────────────────────────────────────────────────────────
 * id         serial PK
 * value      text
 * label      text
 * detail     text  (nullable)
 * sort_order integer
 *
 * Table: experiences
 * ─────────────────────────────────────────────────────────────────
 * id           text PK
 * role         text
 * company      text
 * period       text
 * location     text  (nullable)
 * is_current   boolean
 * impact       text[]
 * technologies text[]
 * sort_order   integer
 *
 * Table: about_content  (single row, id = 1)
 * ─────────────────────────────────────────────────────────────────
 * id           integer PK default 1
 * heading      text
 * body         text
 * capabilities jsonb   -- [{ label: string; items: string[] }]
 *
 * Table: hero_content  (single row, id = 1)
 * ─────────────────────────────────────────────────────────────────
 * id           integer PK default 1
 * title        text
 * headline     text
 * tagline      text
 * availability text
 */

export interface DbProjectLink {
  label: string
  url: string
}

export interface DbProject {
  id: string
  title: string
  description: string
  tech_stack: string[]
  architecture_highlights: string[]
  links: DbProjectLink[]
  featured: boolean
  sort_order: number
  created_at: string
}

export interface DbImpactStat {
  id: number
  value: string
  label: string
  detail: string | null
  sort_order: number
}

export interface DbExperience {
  id: string
  role: string
  company: string
  period: string
  location: string | null
  is_current: boolean
  contract_type: string | null
  work_mode: string | null
  impact: string[]
  technologies: string[]
  sort_order: number
}

export interface DbCapability {
  label: string
  items: string[]
}

export interface DbAboutContent {
  id: number
  heading: string
  body: string
  capabilities: DbCapability[]
}

export interface DbHeroContent {
  id: number
  title: string
  headline: string
  tagline: string
  availability: string
}
