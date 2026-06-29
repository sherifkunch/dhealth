import { test, expect } from "@playwright/test";

test.describe("Procedures", () => {
  test("listing page shows all 12 procedures", async ({ page }) => {
    await page.goto("/protseduri");
    await expect(page.getByRole("heading", { name: "Нашите процедури" })).toBeVisible();
    const cards = page.locator("a[href^='/protseduri/']");
    await expect(cards).toHaveCount(12);
  });

  test("clicking a procedure card navigates to detail", async ({ page }) => {
    await page.goto("/protseduri");
    await page.getByText("Физиотерапия").first().click();
    await expect(page).toHaveURL("/protseduri/fizioterapia");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Физиотерапия");
  });

  test("detail page has breadcrumbs", async ({ page }) => {
    await page.goto("/protseduri/kineziterapia");
    await expect(page.getByLabel("Навигационна пътека")).toBeVisible();
    await expect(page.getByLabel("Навигационна пътека").getByText("Процедури")).toBeVisible();
  });

  test("detail page has benefits list", async ({ page }) => {
    await page.goto("/protseduri/kineziterapia");
    await expect(page.getByText("Ползи")).toBeVisible();
    await expect(page.getByText("Подобрен мускулен тонус")).toBeVisible();
  });

  test("detail page has booking CTA with procedure pre-selected", async ({ page }) => {
    await page.goto("/protseduri/kineziterapia");
    const bookingLink = page.getByRole("link", { name: "Запазете час" }).filter({ hasText: "Запазете час" });
    const links = await bookingLink.all();
    const hrefs = await Promise.all(links.map((l) => l.getAttribute("href")));
    expect(hrefs.some((h) => h === "/zapitvane?procedure=kineziterapia")).toBe(true);
  });

  test("detail page shows related procedures", async ({ page }) => {
    await page.goto("/protseduri/fizioterapia");
    await expect(page.getByText("Други процедури")).toBeVisible();
  });
});
