-- ============================================================
-- Fix Independent role: Spendrift is shipped and live, not "in development".
-- Update the stale bullet and add TanStack Start / SQLModel to tech stack.
-- ============================================================

UPDATE "public"."experiences"
SET
  impact = array[
    'Built and maintain backendctl, an open-source CLI that scaffolds production-ready Python backends — published on PyPI.',
    'Shipped Spendrift — a full-stack personal finance tracker with per-currency workspace isolation, built on TanStack Start, FastAPI, SQLModel, and PostgreSQL; live on Vercel.',
    'Developing a note-taking application using FastAPI to deepen backend architecture, authentication, and API design skills.',
    'Built a job-aggregation and automation toolkit to streamline sourcing of opportunities across multiple platforms.',
    'Strengthened full-stack capabilities through applied learning in Django, FastAPI, Next.js, and GSAP.',
    'Following a structured AI engineering roadmap covering LLMs, agentic systems, and applied AI tooling.'
  ],
  technologies = array[
    'FastAPI', 'Python', 'PostgreSQL', 'TanStack Start', 'React', 'TypeScript',
    'SQLModel', 'Django', 'Node.js', 'Docker'
  ]
WHERE id = 'independent-software-engineer';
