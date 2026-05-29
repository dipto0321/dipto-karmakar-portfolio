insert into projects (title, description, tech_stack, architecture_highlights, links, featured, sort_order) values
(
  'Personal Finance Tracker',
  'A full-stack personal finance application with real-time expense tracking, budget management, and interactive dashboards. Built with modern web technologies for a seamless user experience.',
  ARRAY['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Chart.js'],
  ARRAY['Server-side rendering with Next.js App Router', 'Row-level security for multi-user data isolation', 'Real-time updates via Supabase subscriptions'],
  '[{"label": "Live Demo", "url": "#"}, {"label": "Source Code", "url": "#"}]',
  true,
  1
),
(
  'Team Diary',
  'A collaborative team journaling platform that helps distributed teams share daily updates, track progress, and maintain transparency across remote work environments.',
  ARRAY['SvelteKit', 'TypeScript', 'SQLite'],
  ARRAY['Lightweight embedded database for simplicity', 'Svelte reactive stores for real-time UI'],
  '[{"label": "Source Code", "url": "#"}]',
  false,
  2
),
(
  'FastAPI Auth Scaffolder',
  'A developer tool that generates production-ready authentication scaffolding for FastAPI projects, including JWT handling, role-based access control, and OAuth integration.',
  ARRAY['Python', 'FastAPI', 'SQLModel'],
  ARRAY['Automatic API documentation with OpenAPI', 'Modular auth middleware architecture'],
  '[{"label": "Source Code", "url": "#"}]',
  false,
  3
);
