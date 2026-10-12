-- ============================================================
-- Full-stack repositioning (2026-10-12), part 1 of 2:
-- hero, about, impact_stats, Independent, Myze.
-- Titles default to spec; contract wording still to confirm (TODOs).
-- ============================================================

-- hero_content#1: title + headline (tagline mirrors headline)
UPDATE "public"."hero_content" SET
  title = 'Full-Stack Engineer',
  headline = 'I build interfaces and the systems behind them — frontend depth in React and TypeScript, with backend delivery in FastAPI, Node.js and PostgreSQL.',
  tagline = 'I build interfaces and the systems behind them — frontend depth in React and TypeScript, with backend delivery in FastAPI, Node.js and PostgreSQL.'
WHERE id = 1;

-- about_content#1: body + reordered capabilities (Full-stack first)
-- TODO(VERIFY): MQTT scope unconfirmed — omitted from Real-time items
--   until confirmed. Do NOT render "MQTT" until TODO is resolved.
UPDATE "public"."about_content" SET
  body = '10+ years in software: desktop systems in C#/WPF and SQL Server, backend APIs in Django REST, FastAPI and Node.js, and, since 2021, senior-level React and TypeScript work for remote teams in Europe and the US. My depth is frontend architecture and API design; I''ve also built and shipped backends at Kiwibot and Anansi Skills, and I maintain backendctl, an open-source backend generator. Recent builds: Spendrift (TanStack Start + FastAPI + PostgreSQL, live on Vercel) and backendctl (published on PyPI).',
  capabilities = '[
    {"label": "Full-stack", "items": ["Node.js", "FastAPI", "Django REST", "PostgreSQL", "MongoDB", "GraphQL"]},
    {"label": "Frontend",   "items": ["React", "Next.js", "TypeScript", "Tailwind"]},
    {"label": "Real-time",  "items": ["WebSockets", "GraphQL"]},
    {"label": "Craft",      "items": ["Design systems", "Performance", "Accessibility", "Testing"]}
  ]'::jsonb
WHERE id = 1;

-- impact_stats: replace the "10+ years shipping" tile (sort_order=1)
-- with the APIs tile. Grid is 4-up (md:grid-cols-4), so 4 rows stay.
UPDATE "public"."impact_stats" SET
  value = 'APIs',
  label = 'backend delivery',
  detail = 'fastapi · node · postgres'
WHERE sort_order = 1;

-- Independent: Software Engineer title + bullets
-- Title reverted to "Independent Software Engineer" per resume/contract
-- (20261012000005). Site leads the resume on bullets — confirm.
UPDATE "public"."experiences" SET
  role = 'Independent Software Engineer',
  impact = array[
    'Built and maintain backendctl, an open-source CLI that scaffolds production-ready Python backends — published on PyPI — with JWT auth, Argon2 hashing, migrations, rate limiting and a pytest suite.',
    'Shipped Spendrift — a full-stack personal finance tracker with per-currency workspace isolation, built on TanStack Start, FastAPI, SQLModel, and PostgreSQL; live on Vercel.',
    'Developing nodeup, a Go CLI that detects the installed Node.js version manager and migrates global packages across versions.',
    'Developing a note-taking application using FastAPI to deepen backend architecture, authentication, and API design skills.',
    'Built a job-aggregation and automation toolkit to streamline sourcing of opportunities across multiple platforms.',
    'Following a structured AI engineering roadmap covering LLMs, agentic systems, and applied AI tooling.'
  ],
  technologies = array[
    'FastAPI', 'Python', 'PostgreSQL', 'TanStack Start', 'React', 'TypeScript',
    'SQLModel', 'Django', 'Node.js', 'Docker', 'Go'
  ]
WHERE id = 'independent-software-engineer';

-- Myze: Full-Stack Engineer (Frontend-focused), contract, Mar-Apr 2025
-- Wording "Collaborated with backend engineers to define API contracts"
-- follows the resume (collaborated, not sole-authored).
-- TODO(VERIFY): confirm title matches contract (resume adds "Senior" prefix).
UPDATE "public"."experiences" SET
  role = 'Full-Stack Engineer (Frontend-focused)',
  contract_type = 'contract',
  work_mode = 'remote',
  location = 'Emmerich, Germany',
  impact = array[
    'Built a real-time tablet checkout in React and TypeScript with multilingual support, feature flags and SumUp payments.',
    'Collaborated with backend engineers to define API contracts, keeping real-time state reliably synchronized in production.',
    'Implemented device pairing and live payment tracking on the client over WebSocket.',
    'Built a configurable store-connector module with full CRUD over GraphQL and React Query, reusable tabbed views and data tables.'
  ],
  technologies = array['React', 'TypeScript', 'GraphQL', 'WebSockets', 'React Query', 'SumUp']
WHERE id = 'myze-senior-frontend-engineer';

-- ============================================================
-- Full-stack repositioning (2026-10-12), part 2 of 2:
-- ProptechCore, Kiwibot, YouMeWho, Chosenmasters, Anansi, Unipolar.
-- ============================================================

-- ProptechCore: Full-Stack Engineer (Frontend-focused), full-time
-- Scoped MQTT bullet follows the resume ("dashboard side of an
-- MQTT-based IoT prototype").
-- TODO(VERIFY): confirm title matches contract (resume adds "Senior" prefix).
UPDATE "public"."experiences" SET
  role = 'Full-Stack Engineer (Frontend-focused)',
  contract_type = 'full-time',
  work_mode = 'remote',
  location = 'Stockholm, Sweden',
  impact = array[
    'Owned frontend architecture decisions, estimates and cross-team technical feedback in a remote-first team.',
    'Built the office energy monitoring interface on consumption APIs, flagging high-usage devices; clients cut energy costs by up to 15%.',
    'Turned Figma design systems into a Storybook-documented React component library, cutting development time by 30%.',
    'Owned user onboarding and property-manager invitation flows from design through delivery.',
    'Built the dashboard side of an MQTT-based IoT prototype.'
  ],
  technologies = array['React', 'TypeScript', 'Next.js', 'Storybook', 'Design Systems', 'MQTT', 'GraphQL']
WHERE id = 'proptechcore-senior-frontend-engineer';

-- Kiwibot: Full-Stack Developer ( Mid level -2 ), backend bullet FIRST
-- Title aligned verbatim with resume/contract (20261012000003).
UPDATE "public"."experiences" SET
  role = 'Full-Stack Developer ( Mid level -2 )',
  contract_type = 'full-time',
  work_mode = 'remote',
  location = 'Medellín, Colombia',
  impact = array[
    'Built a FastAPI backend over PostgreSQL with advanced filtering, giving data engineers self-service access to operational data.',
    'Led the refactor of the robot operations console into Nx micro-frontends, improving maintainability and enabling team growth.',
    'Implemented real-time WebSocket order notifications, helping supervisors complete tasks 2x faster.',
    'Evaluated Amazon Kinesis for robot video streaming and documented the processing delays that ruled it out.'
  ],
  technologies = array['React', 'TypeScript', 'Nx', 'Micro-frontends', 'WebSockets', 'FastAPI', 'PostgreSQL']
WHERE id = 'kiwibot-senior-frontend-engineer';

-- YouMeWho: keep, extend tags + local-cache line
UPDATE "public"."experiences" SET
  impact = array[
    'Built a Chrome extension to auto-scrape and import merchandise, improving client inventory management speed; cached data locally to cut server requests.',
    'Researched and proposed Facebook API integrations for real-time social media marketing features.'
  ],
  technologies = array['JavaScript', 'React', 'Redux Toolkit', 'Chrome Extensions', 'REST APIs', 'Facebook API']
WHERE id = 'youmewho-full-stack-developer';

-- Chosenmasters: replaced bullets per spec
-- TODO(VERIFY): Proxify profile calls this engagement TurnOnSound.
--   Company kept as Chosenmasters until the rename is confirmed —
--   do NOT render TurnOnSound until this TODO is resolved.
-- TODO(VERIFY): replacement bullets (auth, payments, print-on-demand,
--   S3 cost cut) are not in the current resume — confirm before
--   removing this TODO.
UPDATE "public"."experiences" SET
  impact = array[
    'Built social and email auth in React, Redux and Node.js.',
    'Integrated a payment gateway and print-on-demand API.',
    'Built track upload, streaming and subscription features with the CTO and founder.',
    'Cut AWS S3 and server costs by removing duplicate files and redundant requests.'
  ],
  technologies = array['React', 'Redux', 'Node.js', 'PostgreSQL', 'REST APIs', 'AWS S3']
WHERE id = 'chosenmasters-full-stack-developer';

-- Anansi Skills: keep + DRF role-based auth, DigitalOcean hosting
UPDATE "public"."experiences" SET
  impact = array[
    'Designed a social-auth enabled, role-based REST API in Django REST Framework with full Swagger documentation, hosted on DigitalOcean.',
    'Integrated and deployed a Keras-based machine learning model on GCP for educational analytics.'
  ],
  technologies = array['Python', 'Django', 'Django REST Framework', 'REST APIs', 'PostgreSQL', 'DigitalOcean', 'GCP', 'Keras']
WHERE id = 'anansi-skills-back-end-developer';

-- Unipolar: Software Developer, tags + 40% turbine line (per spec)
-- NOTE: migration 20260623000001 removed the 40%/3x claims as
--   unverifiable; the 40% line below is re-added per the Oct 2026 spec
--   — substantiate against contract/review if challenged.
-- Title reverted to "Software Developer" per resume/contract (20261012000004).
UPDATE "public"."experiences" SET
  role = 'Software Developer',
  impact = array[
    'Built a desktop application for real-time monitoring of 100 color packaging machines simultaneously.',
    'Developed a desktop application with millisecond-level real-time data plotting for gas turbine monitoring at a power plant, cut plant maintenance costs by 40%.',
    'Built a product quantity slip generator that sent data directly to conveyor machines for automated counting during van loading, streamlining shipment throughput.'
  ],
  technologies = array['C#', 'WPF', 'MS SQL Server', 'Desktop Development']
WHERE id = 'unipolar-software-developer';
