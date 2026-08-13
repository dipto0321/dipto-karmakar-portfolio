-- ============================================================
-- Add "nodeup" to the portfolio projects table.
-- nodeup: Automated Node.js version upgrade + global package
-- migration CLI (https://github.com/dipto0321/nodeup).
--
-- id is auto-generated (uuid default gen_random_uuid()).
-- sort_order = 4 (after Spendrift, backendctl, diptokarmakar.me).
-- ============================================================
insert into "public"."projects" (title, description, tech_stack, architecture_highlights, links, featured, sort_order) values
(
  'nodeup',
  'Automated Node.js version upgrade and global package migration CLI. Cross-platform, multi-manager, zero manual steps — detects your version manager, fetches the latest LTS/Current releases, snapshots and migrates your global packages across versions, and optionally cleans up old installs.',
  ARRAY['Go', 'Node.js', 'CLI', 'YAML', 'GoReleaser', 'Homebrew', 'Scoop'],
  ARRAY[
    'Auto-detects the installed Node.js version manager (fnm, nvm, Volta, asdf, mise, n, nodenv, nvm-windows) and locks onto one',
    'Fetches the latest LTS and Current releases from nodejs.org with a TTL cache plus HTTP retry, backoff, and timeout',
    'Snapshots global packages per version and migrates them across upgrades, resumable after an interrupted run',
    'Exposes an idempotent npx wrapper (nodeupx) published to npm via OIDC trusted publishing',
    'Distributes via Homebrew, Scoop, npm, and prebuilt Go binaries through GoReleaser'
  ],
  '[{"label": "Source Code", "url": "https://github.com/dipto0321/nodeup"}]',
  true,
  4
);
