/** @type {import('@lhci/cli').LighthouseConfig} */
module.exports = {
  ci: {
    collect: {
      startServerCommand: "pnpm start",
      startServerReadyPattern: "Ready in",
      url: ["http://localhost:3000"],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        // Performance can vary in headless CI — warn rather than fail the build
        "categories:performance": ["warn", { minScore: 0.9 }],
        // Accessibility and SEO are non-negotiable — error breaks the build
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],
      },
    },
    upload: {
      // Posts a public link to results in the PR — no server or token required.
      // Install the Lighthouse CI GitHub App and add LHCI_GITHUB_APP_TOKEN as a
      // repo secret to also get inline status checks on the PR.
      target: "temporary-public-storage",
    },
  },
}
