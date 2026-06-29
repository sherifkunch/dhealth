import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders hero with main heading", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Кинезитерапия");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Физиотерапия");
  });

  test("renders practitioner info", async ({ page }) => {
    await expect(page.locator("#main-content").getByText("Диана Димова")).toBeVisible();
  });

  test("hero has booking and procedures CTAs", async ({ page }) => {
    await expect(page.getByRole("link", { name: "Запазете час" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Нашите процедури" })).toBeVisible();
  });

  test("renders stats section", async ({ page }) => {
    await expect(page.getByText("12+")).toBeVisible();
    await expect(page.getByText("500+")).toBeVisible();
  });

  test("renders featured procedures section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Какво предлагаме?" })).toBeVisible();
    const procedureCards = page.locator("a[href^='/protseduri/']");
    await expect(procedureCards.first()).toBeVisible();
  });

  test("renders testimonials section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Какво казват нашите клиенти" })).toBeVisible();
  });

  test("renders contact preview section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Как да ни намерите" })).toBeVisible();
  });
});
