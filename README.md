# Dipto Karmakar — Portfolio

Personal portfolio for [diptokarmakar.me](https://diptokarmakar.me) — built with Next.js 16, TypeScript, Tailwind v4, and Supabase as the CMS.

## Performance

[PageSpeed Insights →](https://pagespeed.web.dev/report?url=https%3A%2F%2Fdiptokarmakar.me)

## Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind v4 — CSS-first config in `app/globals.css` |
| CMS / data | Supabase — read-only anon client, RLS public-select |
| UI primitives | shadcn |
| Fonts | Inter + JetBrains Mono via `next/font` |

## Local development

**Prerequisites:** Node.js ≥ 22 and pnpm

```bash
pnpm install
```

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

```bash
pnpm dev        # next dev --turbopack
pnpm build      # production build
pnpm start      # serve production build
pnpm typecheck  # tsc --noEmit
pnpm lint       # eslint
pnpm format     # prettier --write
```

## Project structure

```text
app/              # routes, layout, metadata, OG image, sitemap, robots
features/         # page sections — hero, impact, projects, experience, contact
components/       # layout/, motion/, shared/, ui/ (shadcn)
content/          # static site config (site.ts) — not for CMS-managed content
lib/supabase/     # anon client + query functions per table
types/            # shared TypeScript types
```

## Environment variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable (anon) key |

## CI

GitHub Actions runs **typecheck → lint → build** on every push and PR to `main`.
A **Lighthouse CI** job runs on PRs and enforces accessibility ≥ 90 and SEO ≥ 90.

Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` as repository secrets before the first CI run.

## Deploy

Deploys to Vercel. Add the two environment variables above in the Vercel project settings.
