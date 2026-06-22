-- ============================================================
-- Content honesty fixes:
--   - Unipolar: remove unverifiable % / x metrics
--   - ProptechCore: spearheaded → led, pixel-perfect → high-fidelity
--   - Anansi Skills: soften ML deployment claim
--   - about_content: "products people use every day" → "real-world products"
-- ============================================================

-- Unipolar: drop the 40% / 3x claims, keep qualitative descriptions
UPDATE "public"."experiences"
SET impact = array[
  'Built a desktop application for real-time monitoring of 100 color packaging machines simultaneously.',
  'Developed a desktop application with millisecond-level real-time data plotting for gas turbine monitoring at a power plant, enabling proactive maintenance.',
  'Built a product quantity slip generator that sent data directly to conveyor machines for automated counting during van loading, streamlining shipment throughput.'
]
WHERE id = 'unipolar-software-developer';

-- ProptechCore: tone down lead claim and pixel-perfect
UPDATE "public"."experiences"
SET impact = array[
  'Led transformation of Figma design systems into production-grade React component libraries, streamlining UI development across teams.',
  'Delivered high-fidelity, accessible B2B SaaS interfaces across complex user flows with strong design consistency and performance.',
  'Designed and maintained a centralized component library enabling consistent UI and faster iteration across teams.',
  'Owned end-to-end user onboarding and invitation flows, from design through delivery.',
  'Built real-time office energy monitoring dashboards with WebSocket data pipelines, balancing UX clarity with data accuracy.',
  'Provided frontend architecture decisions, estimations, and cross-team technical feedback autonomously in a remote-first environment.'
]
WHERE id = 'proptechcore-senior-frontend-engineer';

-- Anansi Skills: "integrated and deployed" instead of implying model authorship
UPDATE "public"."experiences"
SET impact = array[
  'Designed a social-auth enabled, role-based REST API with full Swagger documentation.',
  'Integrated and deployed a Keras-based machine learning model on GCP for educational analytics.'
]
WHERE id = 'anansi-skills-back-end-developer';

-- about_content: B2B work is not "products people use every day"
UPDATE "public"."about_content"
SET body = 'Ten-plus years building interfaces for real-world products — real-time checkout flows, B2B dashboards, and design systems adopted across teams. I care about the parts that are easy to ignore: latency, accessibility, type safety, and the developer experience that keeps a team fast. Lately I''m pushing deeper into full-stack engineering, treating every layer of the stack as a system to design around.'
WHERE id = 1;
