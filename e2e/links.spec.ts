import { test, expect } from "@playwright/test"

test.describe("links", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("resume button points to the PDF, opens in a new tab, and the file returns 200", async ({
    page,
  }) => {
    const link = page.getByRole("link", { name: /view resume/i })
    await expect(link).toHaveAttribute("href", "/dipto-karmakar-resume.pdf")
    await expect(link).toHaveAttribute("target", "_blank")

    const response = await page.request.get("/dipto-karmakar-resume.pdf")
    expect(response.status()).toBe(200)
  })

  test("hero email link uses mailto: and targets the correct address", async ({
    page,
  }) => {
    const hero = page.getByRole("region", { name: /introduction/i })
    // The link has visible text "Email" (icon + label)
    const emailLink = hero.getByRole("link", { name: /^Email$/i })
    const href = await emailLink.getAttribute("href")
    expect(href).toMatch(/^mailto:/)
    expect(href).toContain("diptokmk47@gmail.com")
  })

  test("hero GitHub link points to the correct profile and opens in a new tab", async ({
    page,
  }) => {
    const link = page.getByRole("link", { name: /github profile/i })
    await expect(link).toHaveAttribute("href", "https://github.com/dipto0321")
    await expect(link).toHaveAttribute("target", "_blank")
  })

  test("contact section links are not placeholder hashes", async ({ page }) => {
    const contact = page.getByRole("region", { name: /^contact$/i })
    const links = contact.getByRole("link")
    const count = await links.count()

    expect(count).toBeGreaterThan(0)
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute("href")
      expect(href).not.toBeNull()
      expect(href).not.toBe("#")
    }
  })

  test("contact section has a mailto: email link and https: social links", async ({
    page,
  }) => {
    const contact = page.getByRole("region", { name: /^contact$/i })
    const links = contact.getByRole("link")
    const hrefs: string[] = []

    const count = await links.count()
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute("href")
      if (href) hrefs.push(href)
    }

    expect(hrefs.some((h) => h.startsWith("mailto:"))).toBe(true)
    expect(hrefs.some((h) => h.includes("github.com"))).toBe(true)
    expect(hrefs.some((h) => h.includes("linkedin.com"))).toBe(true)
  })

  test("desktop nav anchor links point to the correct section IDs", async ({
    page,
  }) => {
    const nav = page.getByRole("navigation", { name: /primary navigation/i })

    await expect(nav.getByRole("link", { name: "Work" })).toHaveAttribute(
      "href",
      "#work"
    )
    await expect(nav.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "#about"
    )
    await expect(nav.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "#contact"
    )
  })

  test("project cards link out in a new tab with real URLs", async ({ page }) => {
    const workSection = page.getByRole("region", { name: /selected work/i })
    // Wait for at least one project to render (Suspense + streaming may delay content)
    await expect(
      workSection.getByRole("heading", { level: 3 }).first()
    ).toBeVisible()

    const projectLinks = workSection.getByRole("link")
    const count = await projectLinks.count()
    expect(count).toBeGreaterThan(0)

    for (let i = 0; i < count; i++) {
      const href = await projectLinks.nth(i).getAttribute("href")
      const target = await projectLinks.nth(i).getAttribute("target")
      expect(href).not.toBe("#")
      expect(target).toBe("_blank")
    }
  })
})
