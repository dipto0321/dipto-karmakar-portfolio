-- Add Unipolar Automation Technologies and Microverse part-time role.
-- Bump sort_order on existing Microverse full-time row to make room.

UPDATE "public"."experiences"
  SET sort_order = 9
WHERE id = 'microverse-technical-support-engineer';

INSERT INTO "public"."experiences"
  ("id", "role", "company", "period", "location", "is_current", "contract_type", "work_mode", "impact", "technologies", "sort_order")
VALUES
(
  'microverse-technical-support-engineer-pt',
  'Technical Support Engineer',
  'Microverse',
  'Feb 2019 - May 2019',
  'San Francisco Bay Area, USA',
  false,
  'part-time',
  'remote',
  array[
    'Completed 100+ code reviews in HTML, CSS, Ruby, Databases, and Ruby on Rails for students at various stages.'
  ],
  array['Ruby', 'Rails', 'HTML', 'CSS', 'SQL'],
  8
),
(
  'unipolar-software-developer',
  'Software Developer',
  'Unipolar Automation Technologies',
  'Jan 2016 - Sep 2017',
  'Dhaka, Bangladesh',
  false,
  'full-time',
  'onsite',
  array[
    'Built a desktop application for real-time monitoring of 100 color packaging machines simultaneously.',
    'Developed a desktop application with millisecond-level real-time data plotting for gas turbine monitoring at a power plant, reducing maintenance costs by 40%.',
    'Built a product quantity slip generator that sent data directly to conveyor machines for automated counting during van loading, improving shipment throughput by 3x.'
  ],
  array['SQL', 'Desktop Development'],
  10
);
