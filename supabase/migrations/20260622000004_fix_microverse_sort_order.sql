-- Swap Microverse sort_orders: full-time (Jun-Aug 2019) is more recent
-- and must appear before part-time (Feb-May 2019).
UPDATE "public"."experiences" SET sort_order = 8  WHERE id = 'microverse-technical-support-engineer';
UPDATE "public"."experiences" SET sort_order = 9  WHERE id = 'microverse-technical-support-engineer-pt';
