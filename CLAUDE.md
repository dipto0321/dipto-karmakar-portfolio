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
- **next-themes** (dark-first) · **Supabase** (`@supabase/ssr`) — the **CMS / single source
  of truth** for managed content (projects, and likely more). Static `content/*.ts` is for
  fixed site copy/config only, not for Supabase-managed data (no dual source of truth).

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
- **Supabase access:** content is managed **directly in the Supabase dashboard/SQL** (no
  in-app admin UI). The site is therefore **read-only + anon**: reads go through a single
  stateless anon client (publishable/anon key) against tables with **RLS public-select**
  policies. No auth, no cookies, no session refresh.
- **Middleware:** `proxy.ts` (Next 16's renamed middleware) only existed for Supabase auth
  session refresh — **remove it**; there is no auth.

## Design system

- Tokens in `app/globals.css`: dark-first "Carbon Signal" palette (obsidian base, electric
  cyan signal accent, indigo→violet gradient accents), glass-card surfaces, animated
  gradient borders, fluid radii.
- Fonts: Inter (sans) + JetBrains Mono (mono labels/code/data), via `next/font`.
- Motion primitives in `components/motion/` and `lib/animations/`. **Always honor
  `prefers-reduced-motion`.** Keep motion purposeful and quiet — substance over decoration.

## Working norms

- Git workflow: **GitHub Flow** — see "Git & GitHub Workflow Rules" below. No `dev` branch; branch off `main`.
- Don't commit/push unless asked. End commit messages with the Co-Authored-By trailer.
- Internal planning/working docs live in `docs/planning/` and are gitignored — keep internal
  strategy/TODO/review content out of the public repo.
- Managed content (projects, etc.) lives in Supabase, edited in the dashboard; static
  `content/*.ts` is for fixed site copy/config only.

## Git & GitHub Workflow Rules

This project uses **GitHub Flow**. There is no `dev` branch. `main` is always deployable.

### Branching

- Cut every branch directly from `main`
- Branch naming: `feat/<short-description>`, `fix/<short-description>`, `chore/<short-description>`, `refactor/<short-description>`, `docs/<short-description>`
- Keep branches short-lived — merge within days, not weeks
- Delete the branch immediately after merging

### Pull Requests

- Open a PR to merge into `main` — never push directly to `main` for features
- PR title should follow conventional commit format: `feat(expenses): add pagination`
- PR will be reviewed by at least one other person (Dipto or a trusted collaborator) before merging
- PR description should explain the "why" and "what" of the change, especially if it spans multiple files or has important context
- If the PR includes changes to project files (e.g. `package.json`), commit those changes together with the related code changes in the same PR

### Commits

- Use Conventional Commits: `type(scope): summary`
- Keep the subject short, imperative, and lowercase unless the proper noun needs capitals
- Use a body with bullet points when the change spans multiple files or has important context
- Commit reproducible project files together when they belong to the same change (e.g. `package.json` and `pnpm-lock.yaml`)
- Do not commit local-only editor or environment files unless the change is intentionally shared
- Prefer focused commits — one logical change per commit
