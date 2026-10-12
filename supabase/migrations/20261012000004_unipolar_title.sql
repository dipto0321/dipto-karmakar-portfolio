-- ============================================================
-- Unipolar title alignment (2026-10-12):
-- Revert to "Software Developer" per resume/contract.
-- Keeps the Full-Stack reposition tags + bullets from 20261012000001.
-- ============================================================

UPDATE "public"."experiences" SET
  role = 'Software Developer'
WHERE id = 'unipolar-software-developer';
