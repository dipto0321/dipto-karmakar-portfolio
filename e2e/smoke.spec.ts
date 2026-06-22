import { test, expect } from "@playwright/test"

test.describe("smoke", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("page loads with correct structure and all landmark regions", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(/Dipto Karmakar/)

    // Top-level landmarks
    await expect(page.getByRole("banner")).toBeVisible()
    await expect(page.getByRole("main")).toBeVisible()
    await expect(page.getByRole("contentinfo")).toBeVisible()

    // Named sections — present regardless of CMS data (show content or error)
    await expect(
      page.getByRole("region", { name: /introduction/i })
    ).toBeVisible()
    await expect(
      page.getByRole("region", { name: /impact statistics/i })
    ).toBeVisible()
    await expect(
      page.getByRole("region", { name: /selected work/i })
    ).toBeVisible()
    await expect(
      page.getByRole("region", { name: /about and experience/i })
    ).toBeVisible()
    await expect(
      page.getByRole("region", { name: /^contact$/i })
    ).toBeVisible()
  })

  test("skip link is the first focusable element and becomes visible on keyboard focus", async ({
    page,
  }) => {
    await page.keyboard.press("Tab")
    const skipLink = page.getByRole("link", { name: /skip to main content/i })
    await expect(skipLink).toBeFocused()
    // After focus the sr-only class is removed — element should have real dimensions
    const box = await skipLink.boundingBox()
    expect(box?.width).toBeGreaterThan(10)
    expect(box?.height).toBeGreaterThan(10)
  })

  test("primary navigation links are visible and the mobile menu is keyboard-accessible", async ({
    page,
  }) => {
    const nav = page.getByRole("navigation", { name: /primary navigation/i })

    // Desktop nav links visible at default viewport
    await expect(nav.getByRole("link", { name: "Work" })).toBeVisible()
    await expect(nav.getByRole("link", { name: "About" })).toBeVisible()
    await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible()

    // Switch to mobile viewport before querying the hamburger button
    // (it's sm:hidden at desktop widths and therefore not in the a11y tree)
    await page.setViewportSize({ width: 375, height: 812 })
    const toggle = page.getByRole("button", { name: /open menu/i })
    await expect(toggle).toBeVisible()
    await toggle.click()
    await expect(
      page.getByRole("button", { name: /close menu/i })
    ).toBeVisible()
  })
})
