# CLAUDE.md

Guidance for Claude Code working in this repository.

## Project

Personal portfolio for **Dipto Karmakar** — Senior Frontend Engineer (10+ yrs), evolving
toward full-stack + AI engineering, targeting senior/lead remote roles (EU/US). The site
must read as **modern, techy, and professional**, expressing a systems-thinking,
idea-driven engineer. Live target: `https://diptokarmakar.me`.

> An active redesign (full visual rebuild) is planned. See `docs/planning/` (gitignored,
> local only) — `REDESIGN-PLAN.md`, `TODOS.md`, `CODE-REVIEW.md` — for direction and tasks.

## Stack

- **Next.js 16** (App Router, Turbopack dev) · **React 19** · **TypeScript** (strict)
- **Tailwind v4** — CSS-first config in `app/globals.css` (no `tailwind.config.js`); design
  tokens are CSS variables exposed via `@theme inline`
- **shadcn** primitives + **framer-motion 12** for motion
- **next-themes** (dark-first) · **Supabase** (`@supabase/ssr`) as an optional projects CMS
  — under review; may be replaced by static content (see code review)

## Commands (pnpm)

```bash
pnpm dev        # next dev --turbopack
pnpm build      # next build
pnpm start      # next start
pnpm lint       # eslint
pnpm typecheck  # tsc --noEmit
pnpm format     # prettier --write "**/*.{ts,tsx}"
```

Always run `pnpm typecheck` and `pnpm lint` before considering a change done.

## Architecture & conventions

- **Feature-folder layout:**
  - `app/` — routes, layout, metadata, OG image route, `globals.css`
  - `features/<name>/` — page sections (hero, impact, projects, skills, experience, leadership)
  - `components/` — `layout/`, `motion/`, `shared/`, `ui/` (shadcn)
  - `content/*.ts` — **all copy/data lives here**, typed against `types/*.ts`. Edit content here, not in components.
  - `lib/` — `utils.ts`, `animations/`, `supabase/`
  - `hooks/`, `types/`
- **Imports:** use the `@/` path alias.
- **Style:** Prettier, **no semicolons**, double quotes (match existing files). Run `pnpm format`.
- **Data/content separation:** components render; `content/*.ts` holds the data. Keep it that way.
- **Path alias `@/`** maps to repo root (see `tsconfig.json`).
- **Middleware:** `proxy.ts` at root is Next 16's renamed middleware (only present to serve
  Supabase auth — slated for removal if Supabase is dropped).

## Design system

- Tokens in `app/globals.css`: dark-first "Carbon Signal" palette (obsidian base, electric
  cyan signal accent, indigo→violet gradient accents), glass-card surfaces, animated
  gradient borders, fluid radii.
- Fonts: Inter (sans) + JetBrains Mono (mono labels/code/data), via `next/font`.
- Motion primitives in `components/motion/` and `lib/animations/`. **Always honor
  `prefers-reduced-motion`.** Keep motion purposeful and quiet — substance over decoration.

## Working norms

- Branch work off `dev`; `main` is the deployable branch.
- Don't commit/push unless asked. End commit messages with the Co-Authored-By trailer.
- Internal planning/working docs live in `docs/planning/` and are gitignored — keep internal
  strategy/TODO/review content out of the public repo.
- Prefer static, typed content and zero-infra solutions for single-author portfolio data.
