import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("all main nav links work", async ({ page }) => {
    await page.goto("/");

    const navLinks = [
      { text: "Процедури", href: "/protseduri" },
      { text: "Продукти", href: "/produkti" },
      { text: "Цени", href: "/tseni" },
      { text: "За нас", href: "/za-nas" },
      { text: "Отзиви", href: "/otzivi" },
      { text: "Контакти", href: "/kontakti" },
    ];

    for (const { text, href } of navLinks) {
      const link = page.getByRole("navigation", { name: "Основна навигация" }).getByRole("link", { name: text });
      await expect(link).toHaveAttribute("href", href);
    }
  });

  test("logo links to home", async ({ page }) => {
    await page.goto("/protseduri");
    await page.getByRole("link", { name: "DHealth" }).first().click();
    await expect(page).toHaveURL("/");
  });

  test("booking CTA in header links to zapitvane", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByRole("navigation", { name: "Основна навигация" }).locator("..").getByRole("link", { name: "Запазете час" }).first();
    await expect(cta).toHaveAttribute("href", "/zapitvane");
  });

  test("404 page shows for unknown routes", async ({ page }) => {
    await page.goto("/non-existent-page");
    await expect(page.getByText("404")).toBeVisible();
    await expect(page.getByText("Страницата не е намерена")).toBeVisible();
  });

  test("footer contains contact info", async ({ page }) => {
    await page.goto("/");
    const footer = page.getByRole("contentinfo");
    await expect(footer.getByText("0897 077 098")).toBeVisible();
    await expect(footer.getByText("dhealth.bg@gmail.com")).toBeVisible();
  });
});
