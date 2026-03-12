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
