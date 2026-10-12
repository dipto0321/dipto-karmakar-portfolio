-- ============================================================
-- Independent title alignment (2026-10-12):
-- Revert to "Independent Software Engineer" per resume/contract.
-- Keeps the Full-Stack reposition bullets/tags from 20261012000001.
-- ============================================================

UPDATE "public"."experiences" SET
  role = 'Independent Software Engineer'
WHERE id = 'independent-software-engineer';
