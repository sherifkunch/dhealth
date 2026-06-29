import { test, expect } from "@playwright/test";

test.describe("SEO", () => {
  test("home page has correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/DHealth/);
  });

  test("home page has meta description", async ({ page }) => {
    await page.goto("/");
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute("content", /Персонализирани програми/);
  });

  test("html lang is bg", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("lang", "bg");
  });

  test("home page has JSON-LD structured data", async ({ page }) => {
    await page.goto("/");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd.first()).toBeAttached();
    const content = await jsonLd.first().textContent();
    const data = JSON.parse(content!);
    expect(data["@type"]).toBe("MedicalBusiness");
    expect(data.name).toBe("DHealth");
  });

  test("procedure detail page has per-page title", async ({ page }) => {
    await page.goto("/protseduri/kineziterapia");
    await expect(page).toHaveTitle(/Кинезитерапия/);
  });

  test("procedure detail page has MedicalProcedure JSON-LD", async ({ page }) => {
    await page.goto("/protseduri/fizioterapia");
    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    let found = false;
    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent();
      const data = JSON.parse(content!);
      if (data["@type"] === "MedicalProcedure") {
        found = true;
        expect(data.name).toBe("Физиотерапия");
      }
    }
    expect(found).toBe(true);
  });

  test("reviews page has AggregateRating JSON-LD", async ({ page }) => {
    await page.goto("/otzivi");
    await page.waitForLoadState("domcontentloaded");
    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    let found = false;
    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent();
      if (!content) continue;
      const data = JSON.parse(content);
      if (data.aggregateRating) {
        found = true;
        expect(data.aggregateRating["@type"]).toBe("AggregateRating");
      }
    }
    expect(found).toBe(true);
  });

  test("sitemap.xml is accessible", async ({ page }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.status()).toBe(200);
  });

  test("each page has unique title", async ({ page }) => {
    const pages = [
      { url: "/", expected: /DHealth/ },
      { url: "/protseduri", expected: /Процедури/ },
      { url: "/tseni", expected: /Цени/ },
      { url: "/kontakti", expected: /Контакти/ },
      { url: "/otzivi", expected: /Отзиви/ },
      { url: "/za-nas", expected: /За нас/ },
      { url: "/zapitvane", expected: /Запазете час/ },
      { url: "/produkti", expected: /Продукти/ },
    ];

    for (const { url, expected } of pages) {
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await expect(page).toHaveTitle(expected, { timeout: 10000 });
    }
  });
});
