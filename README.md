# Dipto Karmakar — Portfolio

Personal portfolio built with Next.js, TypeScript, Tailwind CSS and shadcn/ui.

**Quick overview**
- **Framework**: Next.js 16 (App Router)
- **UI**: shadcn/ui + Tailwind CSS
- **Auth / data**: Supabase (client + server helpers in `lib/supabase`)
- **Language**: TypeScript

**Prerequisites**
- Node.js 18+ and `pnpm` installed

**Local development**
1. Install dependencies:

```bash
pnpm install
```

2. Set environment variables (create a `.env.local`):

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

3. Run the dev server:

```bash
pnpm dev
```

**Build & production**

```bash
pnpm build
pnpm start
```

**Useful scripts**
- `pnpm dev` : start dev server
- `pnpm build` : build for production
- `pnpm start` : run production server
- `pnpm lint` : run ESLint
- `pnpm format` : run Prettier
- `pnpm typecheck` : run TypeScript type-check

**Environment variables**
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` — Supabase publishable (anon) key

**Project structure (high level)**
- `app/` — Next.js App Router pages and layout
- `components/` — shared UI components
- `features/` — feature sections used on the site
- `lib/supabase` — Supabase client/server helpers and queries
- `content/` — typed content (projects, skills, experience)

**Deploy**
This app can be deployed to Vercel, Netlify, or any platform that supports Next.js. Make sure to add the environment variables in the hosting provider.

**Notes**
- Supabase helpers expect the `NEXT_PUBLIC_SUPABASE_*` variables (see `lib/supabase/client.ts`).

If you want this README expanded (demo screenshots, CI, deploy config, or contributor guide), tell me what to include and I will add it.
