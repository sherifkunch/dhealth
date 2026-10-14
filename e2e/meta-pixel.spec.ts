import { test, expect, type Page, type Request } from "@playwright/test";

const PIXEL_ID = "1672925677749861";

// Meta's bot filter drops events from "HeadlessChrome", so present a regular Chrome UA.
test.use({
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36",
});

// Events are sent either as query params (GET) or multipart form fields (POST beacon).
function readField(request: Request, name: string) {
  const fromQuery = new URL(request.url()).searchParams.get(name);
  if (fromQuery) return fromQuery;
  const body = request.postData() ?? "";
  const match = body.match(new RegExp(`name="${name}"\\r?\\n\\r?\\n([^\\r\\n]*)`));
  return match?.[1] ?? null;
}

// Intercept pixel hits so test runs never reach the client's real Meta data.
async function capturePixelEvents(page: Page) {
  const events: string[] = [];
  await page.route("https://www.facebook.com/tr**", (route) => {
    const request = route.request();
    if (readField(request, "id") === PIXEL_ID) {
      events.push(readField(request, "ev") ?? "");
    }
    return route.abort();
  });
  return events;
}

test.describe("Meta Pixel", () => {
  test("fires PageView on initial load", async ({ page }) => {
    const events = await capturePixelEvents(page);
    await page.goto("/");
    await expect.poll(() => events).toContain("PageView");
  });

  test("fires PageView on client-side navigation", async ({ page }) => {
    const events = await capturePixelEvents(page);
    await page.goto("/");
    await expect.poll(() => events.length).toBe(1);
    await page
      .getByRole("navigation", { name: "Основна навигация" })
      .getByRole("link", { name: "Цени" })
      .click();
    await expect(page).toHaveURL(/\/tseni/);
    await expect.poll(() => events.filter((e) => e === "PageView").length).toBe(2);
  });

  test("includes noscript fallback pixel", async ({ page }) => {
    await page.route("https://www.facebook.com/tr**", (route) => route.abort());
    await page.goto("/kontakti");
    const html = await page.content();
    expect(html).toContain(`facebook.com/tr?id=${PIXEL_ID}&amp;ev=PageView&amp;noscript=1`);
  });
});
