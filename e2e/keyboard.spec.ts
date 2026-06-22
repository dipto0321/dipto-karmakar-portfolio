import { test, expect } from "@playwright/test"

test.describe("keyboard navigation", () => {
  test("skip link moves focus to main content", async ({ page }) => {
    await page.goto("/")
    await page.keyboard.press("Tab")
    const skipLink = page.getByRole("link", { name: /skip to main content/i })
    await expect(skipLink).toBeFocused()

    await page.keyboard.press("Enter")
    // <main id="top" tabIndex={-1}> is the anchor target. After activation
    // the browser moves focus there so the next Tab starts inside main, not
    // at the skip link. Evaluate directly to avoid stale handles.
    const isOnMain = await page.evaluate(() => {
      const main = document.querySelector("main")
      return document.activeElement === main
    })
    expect(isOnMain).toBe(true)
  })

  test("closed mobile menu links are not keyboard-reachable (inert)", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/")

    // Menu starts closed. Tab through the nav without opening the menu.
    // Collect the first 8 focused elements — none should be inside #mobile-menu.
    const focusedIds: string[] = []
    for (let i = 0; i < 8; i++) {
      await page.keyboard.press("Tab")
      const tag = await page.evaluate(
        () => document.activeElement?.getAttribute("data-testid") ?? document.activeElement?.id ?? document.activeElement?.tagName ?? ""
      )
      focusedIds.push(tag)

      // If focus ever lands inside #mobile-menu that's a failure
      const isInMenu = await page.evaluate(() => {
        const menu = document.getElementById("mobile-menu")
        return menu ? menu.contains(document.activeElement) : false
      })
      expect(isInMenu).toBe(false)
    }
  })

  test("opening mobile menu makes its links keyboard-accessible", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/")

    const toggle = page.getByRole("button", { name: /open menu/i })
    await toggle.click()
    await expect(page.getByRole("button", { name: /close menu/i })).toBeVisible()

    // Menu is now open — Tab should reach the links inside it
    let foundMenuLink = false
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press("Tab")
      const isInMenu = await page.evaluate(() => {
        const menu = document.getElementById("mobile-menu")
        return menu ? menu.contains(document.activeElement) : false
      })
      if (isInMenu) {
        foundMenuLink = true
        break
      }
    }
    expect(foundMenuLink).toBe(true)
  })

  test("closing mobile menu via button removes it from the tab order", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/")

    await page.getByRole("button", { name: /open menu/i }).click()
    await page.getByRole("button", { name: /close menu/i }).click()

    // After closing, tabbing through several elements should not enter #mobile-menu
    for (let i = 0; i < 8; i++) {
      await page.keyboard.press("Tab")
      const isInMenu = await page.evaluate(() => {
        const menu = document.getElementById("mobile-menu")
        return menu ? menu.contains(document.activeElement) : false
      })
      expect(isInMenu).toBe(false)
    }
  })
})
