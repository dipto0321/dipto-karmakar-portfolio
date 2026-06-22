-- ============================================================
-- Add contract_type and work_mode to experiences.
-- Clean location (strip embedded "(Remote)").
-- Update all impact bullets to match résumé.
-- Insert 3 previously-missing experiences.
-- ============================================================

ALTER TABLE "public"."experiences"
  ADD COLUMN IF NOT EXISTS "contract_type" text,
  ADD COLUMN IF NOT EXISTS "work_mode"     text;

-- --------------------------------------------------------
-- Update existing rows
-- --------------------------------------------------------

UPDATE "public"."experiences" SET
  contract_type = 'independent',
  work_mode     = 'remote',
  location      = 'Dhaka, Bangladesh',
  impact = array[
    'Built and maintain backendctl, an open source backend project starter — github.com/dipto0321/backendctl',
    'Building a full-stack personal finance tracking application (FastAPI, PostgreSQL, React), with open source release planned',
    'Developing a note-taking application using FastAPI to deepen backend architecture, authentication, and API design skills',
    'Built a job-aggregation and automation toolkit to streamline sourcing of opportunities across multiple platforms',
    'Strengthened full-stack capabilities through applied learning in Django, FastAPI, Next.js, and GSAP',
    'Following a structured AI engineering roadmap covering LLMs, agentic systems, and applied AI tooling'
  ],
  technologies = array['FastAPI', 'Python', 'PostgreSQL', 'Next.js', 'React', 'Django', 'Node.js']
WHERE id = 'independent-software-engineer';

UPDATE "public"."experiences" SET
  contract_type = 'contract',
  work_mode     = 'remote',
  location      = 'Emmerich, Germany',
  impact = array[
    'Led development of a real-time tablet checkout interface in React and TypeScript with multilingual support and integrated SumUp payments.',
    'Engineered WebSocket-based systems for device pairing and live payment tracking, improving transparency and reducing customer wait times.',
    'Built reusable, scalable UI components — tabbed product views, color picker inputs, and GraphQL-powered data tables.',
    'Collaborated with backend engineers to define API contracts, ensuring reliable real-time state synchronization in production.'
  ],
  technologies = array['React', 'TypeScript', 'GraphQL', 'WebSockets', 'SumUp']
WHERE id = 'myze-senior-frontend-engineer';

UPDATE "public"."experiences" SET
  contract_type = 'full-time',
  work_mode     = 'remote',
  location      = 'Stockholm, Sweden',
  impact = array[
    'Spearheaded transformation of Figma design systems into production-grade React component libraries, streamlining UI development across teams.',
    'Delivered pixel-perfect, accessible B2B SaaS interfaces across complex user flows with full design fidelity and performance.',
    'Designed and maintained a centralized component library enabling consistent UI and faster iteration across teams.',
    'Owned end-to-end user onboarding and invitation flows, from design through delivery.',
    'Built real-time office energy monitoring dashboards with WebSocket data pipelines, balancing UX clarity with data accuracy.',
    'Provided frontend architecture decisions, estimations, and cross-team technical feedback autonomously in a remote-first environment.'
  ],
  technologies = array['React', 'TypeScript', 'Next.js', 'WebSockets', 'Design Systems', 'GraphQL']
WHERE id = 'proptechcore-senior-frontend-engineer';

UPDATE "public"."experiences" SET
  contract_type = 'full-time',
  work_mode     = 'remote',
  location      = 'Medellín, Colombia',
  impact = array[
    'Led refactor of a legacy console application into a scalable micro-frontend architecture using Nx, improving maintainability and enabling team growth.',
    'Applied a complete brand and UI theme across the application without dedicated design support, ensuring visual consistency.',
    'Implemented a real-time task notification system using WebSockets, improving supervisor visibility and response time.'
  ],
  technologies = array['React', 'TypeScript', 'Nx', 'WebSockets', 'Micro-frontends']
WHERE id = 'kiwibot-senior-frontend-engineer';

UPDATE "public"."experiences" SET
  contract_type = 'full-time',
  work_mode     = 'remote',
  location      = 'San Francisco Bay Area, USA',
  sort_order    = 7,
  impact = array[
    'Led 400+ code reviews in Ruby, Rails, JavaScript, and React for 50+ students, accelerating learning through tailored 1:1 guidance.',
    'Mentored 20+ students to graduation, improving retention and technical confidence.',
    'Managed 10+ part-time code reviewers, maintaining high standards and consistency across the review process.'
  ]
WHERE id = 'microverse-technical-support-engineer';

-- --------------------------------------------------------
-- Insert missing experiences (sort_order 4–6)
-- --------------------------------------------------------

INSERT INTO "public"."experiences"
  ("id", "role", "company", "period", "location", "is_current", "contract_type", "work_mode", "impact", "technologies", "sort_order")
VALUES
(
  'youmewho-full-stack-developer',
  'Full Stack Developer',
  'YouMeWho',
  'Feb 2021 - May 2021',
  'Palo Alto, California, USA',
  false,
  'contract',
  'remote',
  array[
    'Built a Chrome extension to auto-scrape and import merchandise, improving client inventory management speed.',
    'Researched and proposed Facebook API integrations for real-time social media marketing features.'
  ],
  array['JavaScript', 'Chrome Extensions', 'REST APIs', 'Facebook API'],
  4
),
(
  'chosenmasters-full-stack-developer',
  'Full Stack Developer',
  'Chosenmasters',
  'Sep 2020 - Dec 2020',
  'Vancouver, Canada',
  false,
  'contract',
  'remote',
  array[
    'Developed a music streaming platform supporting track uploads, merchandise sales, and social features (favorites, follows).',
    'Delivered e-commerce and audio streaming functionality enabling artist monetization and user growth.'
  ],
  array['React', 'Node.js', 'PostgreSQL', 'REST APIs'],
  5
),
(
  'anansi-skills-back-end-developer',
  'Back End Developer',
  'Anansi Skills',
  'Dec 2019 - Jan 2020',
  'Chapel Hill, NC, USA',
  false,
  'contract',
  'remote',
  array[
    'Designed a social-auth enabled, role-based REST API with full Swagger documentation.',
    'Deployed a Keras-based deep learning model on GCP for educational analytics.'
  ],
  array['Python', 'Django', 'REST APIs', 'GCP', 'Keras'],
  6
);
