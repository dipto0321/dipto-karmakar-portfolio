import { test, expect } from "@playwright/test"

test.describe("cms content", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("no section shows the CMS error fallback", async ({ page }) => {
    // If any section fails to load, SectionError renders "Unable to load content"
    await expect(page.getByText("Unable to load content")).not.toBeVisible()
  })

  test("hero renders correct name and title from CMS", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Dipto Karmakar" })
    ).toBeVisible()
    await expect(
      page.getByRole("region", { name: /introduction/i }).getByText(
        /Senior Frontend Engineer/i
      )
    ).toBeVisible()
  })

  test("impact stats section renders all four stat items", async ({ page }) => {
    const statsSection = page.getByRole("region", { name: /impact statistics/i })
    // Each stat is a <dt> (label) inside a <dl>
    const labels = statsSection.locator("dt")
    await expect(labels).toHaveCount(4)
  })

  test("projects section has at least one project card from CMS", async ({
    page,
  }) => {
    const workSection = page.getByRole("region", { name: /selected work/i })
    // Each project has an h3 title
    await expect(
      workSection.getByRole("heading", { level: 3 }).first()
    ).toBeVisible()
  })

  test("experience timeline has at least one role from CMS", async ({ page }) => {
    const aboutSection = page.getByRole("region", { name: /about and experience/i })
    // Each role entry has an h3 heading
    await expect(
      aboutSection.getByRole("heading", { level: 3 }).first()
    ).toBeVisible()
  })

  test("footer shows current year and name", async ({ page }) => {
    const footer = page.getByRole("contentinfo")
    await expect(footer).toContainText(String(new Date().getFullYear()))
    await expect(footer).toContainText("Dipto Karmakar")
  })
})
