-- ============================================================
-- CMS tables: impact_stats, experiences, about_content, hero_content
-- ============================================================

-- --------------------------------------------------------
-- impact_stats
-- --------------------------------------------------------
create table if not exists "public"."impact_stats" (
  "id"         serial primary key,
  "value"      text not null,
  "label"      text not null,
  "detail"     text,
  "sort_order" integer not null default 0
);

alter table "public"."impact_stats" enable row level security;

create policy "public select" on "public"."impact_stats"
  for select using (true);

grant all on table "public"."impact_stats" to "anon";
grant all on table "public"."impact_stats" to "authenticated";
grant all on table "public"."impact_stats" to "service_role";
grant usage, select on sequence "public"."impact_stats_id_seq" to "anon";
grant usage, select on sequence "public"."impact_stats_id_seq" to "authenticated";
grant usage, select on sequence "public"."impact_stats_id_seq" to "service_role";

-- --------------------------------------------------------
-- experiences
-- --------------------------------------------------------
create table if not exists "public"."experiences" (
  "id"           text primary key,
  "role"         text not null,
  "company"      text not null,
  "period"       text not null,
  "location"     text,
  "is_current"   boolean not null default false,
  "impact"       text[] not null default '{}',
  "technologies" text[] not null default '{}',
  "sort_order"   integer not null default 0
);

alter table "public"."experiences" enable row level security;

create policy "public select" on "public"."experiences"
  for select using (true);

grant all on table "public"."experiences" to "anon";
grant all on table "public"."experiences" to "authenticated";
grant all on table "public"."experiences" to "service_role";

-- --------------------------------------------------------
-- about_content  (single row, id = 1)
-- --------------------------------------------------------
create table if not exists "public"."about_content" (
  "id"           integer primary key default 1,
  "heading"      text not null,
  "body"         text not null,
  "capabilities" jsonb not null default '[]'
);

alter table "public"."about_content" enable row level security;

create policy "public select" on "public"."about_content"
  for select using (true);

grant all on table "public"."about_content" to "anon";
grant all on table "public"."about_content" to "authenticated";
grant all on table "public"."about_content" to "service_role";

-- --------------------------------------------------------
-- hero_content  (single row, id = 1)
-- --------------------------------------------------------
create table if not exists "public"."hero_content" (
  "id"           integer primary key default 1,
  "title"        text not null,
  "headline"     text not null,
  "tagline"      text not null,
  "availability" text not null
);

alter table "public"."hero_content" enable row level security;

create policy "public select" on "public"."hero_content"
  for select using (true);

grant all on table "public"."hero_content" to "anon";
grant all on table "public"."hero_content" to "authenticated";
grant all on table "public"."hero_content" to "service_role";

-- ============================================================
-- Seed data
-- ============================================================

-- impact_stats
insert into "public"."impact_stats" ("value", "label", "detail", "sort_order") values
  ('10+',       'years shipping',          'react · typescript · next.js',     1),
  ('real-time', 'payment & data systems',  'websockets · low-latency UIs',     2),
  ('design',    'systems at scale',        'figma → tokens · a11y · docs',     3),
  ('OSS',       'backendctl',              'open-source backend cli',           4);

-- experiences
insert into "public"."experiences" ("id", "role", "company", "period", "location", "is_current", "impact", "technologies", "sort_order") values
(
  'independent-software-engineer',
  'Independent Software Engineer',
  'Self-Employed',
  'May 2025 - Present',
  'Dhaka, Bangladesh (Remote)',
  true,
  array[
    'Built and maintain backendctl, an open-source backend project starter.',
    'Building a full-stack personal finance app (FastAPI, PostgreSQL, React).',
    'Following a structured learning roadmap — backend architecture, API design, and system engineering.',
    'Deepening backend architecture, authentication, and API design.'
  ],
  array['FastAPI', 'Python', 'PostgreSQL', 'Next.js', 'React'],
  0
),
(
  'myze-senior-frontend-engineer',
  'Senior Frontend Engineer',
  'Myze',
  'Mar 2025 - Apr 2025',
  'Emmerich, Germany (Remote)',
  false,
  array[
    'Led a real-time tablet checkout interface in React and TypeScript with SumUp payments.',
    'Engineered WebSocket device pairing and live payment tracking, reducing wait times.',
    'Built reusable UI components and GraphQL-powered data tables.'
  ],
  array['React', 'TypeScript', 'GraphQL', 'WebSockets'],
  1
),
(
  'proptechcore-senior-frontend-engineer',
  'Senior Frontend Engineer',
  'ProptechCore',
  'Oct 2022 - Feb 2025',
  'Stockholm, Sweden (Remote)',
  false,
  array[
    'Transformed Figma design systems into production-grade React component libraries.',
    'Owned end-to-end onboarding and invitation flows across complex B2B SaaS UIs.',
    'Built real-time office energy dashboards on WebSocket data pipelines.'
  ],
  array['React', 'TypeScript', 'Next.js', 'Design Systems'],
  2
),
(
  'kiwibot-senior-frontend-engineer',
  'Senior Frontend Engineer',
  'Kiwibot',
  'Aug 2021 - May 2022',
  'Medellín, Colombia (Remote)',
  false,
  array[
    'Led refactor of a legacy console into a scalable Nx micro-frontend architecture.',
    'Implemented a real-time WebSocket task-notification system for supervisors.',
    'Applied a full brand and UI theme without dedicated design support.'
  ],
  array['React', 'Nx', 'Micro-frontends', 'WebSockets'],
  3
),
(
  'microverse-technical-support-engineer',
  'Technical Support Engineer',
  'Microverse',
  'Jun 2019 - Aug 2019',
  'San Francisco Bay Area, USA (Remote)',
  false,
  array[
    'Led 400+ code reviews in Ruby, Rails, JavaScript, and React for 50+ students.',
    'Mentored 20+ students to graduation and managed 10+ part-time reviewers.'
  ],
  array['Ruby', 'Rails', 'React', 'JavaScript'],
  4
);

-- about_content
insert into "public"."about_content" ("id", "heading", "body", "capabilities") values
(
  1,
  'A systems thinker who likes to ship real things.',
  'Ten-plus years building interfaces for products people use every day — real-time checkout flows, B2B dashboards, and design systems adopted across teams. I care about the parts that are easy to ignore: latency, accessibility, type safety, and the developer experience that keeps a team fast. Lately I''m pushing deeper into full-stack engineering, treating every layer of the stack as a system to design around.',
  '[
    {"label": "Frontend",       "items": ["React", "Next.js", "TypeScript", "Tailwind"]},
    {"label": "Full-stack",     "items": ["Node.js", "FastAPI", "Django", "PostgreSQL"]},
    {"label": "Real-time",      "items": ["WebSockets", "GraphQL", "Low-latency UIs"]},
    {"label": "Craft",          "items": ["Design systems", "Performance", "Accessibility", "Testing"]}
  ]'::jsonb
);

-- hero_content
insert into "public"."hero_content" ("id", "title", "headline", "tagline", "availability") values
(
  1,
  'Senior Software Engineer',
  'I architect interfaces and systems that hold up under real traffic — 10+ years across React, TypeScript, and Next.js, now building deeper into full-stack and system engineering.',
  'Building scalable React, TypeScript, and real-time web applications.',
  'available for senior / lead roles'
);
