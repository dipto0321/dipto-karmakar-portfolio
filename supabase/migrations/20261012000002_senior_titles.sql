-- ============================================================
-- Senior title alignment (2026-10-12):
-- Resume header: "Senior Full-Stack Engineer"; Myze + ProptechCore:
-- "Senior Full-Stack Engineer (Frontend-focused)". Align hero + roles.
-- ============================================================

UPDATE "public"."hero_content" SET
  title = 'Senior Full-Stack Engineer'
WHERE id = 1;

UPDATE "public"."experiences" SET
  role = 'Senior Full-Stack Engineer (Frontend-focused)'
WHERE id = 'myze-senior-frontend-engineer';

UPDATE "public"."experiences" SET
  role = 'Senior Full-Stack Engineer (Frontend-focused)'
WHERE id = 'proptechcore-senior-frontend-engineer';
