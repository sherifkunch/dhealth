import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { MetaPixel } from "./meta-pixel";
import { siteConfig } from "@/data/site-config";

describe("MetaPixel", () => {
  it("renders the noscript fallback with the configured pixel id", () => {
    const html = renderToStaticMarkup(<MetaPixel />);
    expect(html).toContain("<noscript>");
    expect(html).toContain(
      `https://www.facebook.com/tr?id=${siteConfig.metaPixelId}&amp;ev=PageView&amp;noscript=1`
    );
  });

  it("uses a numeric pixel id", () => {
    expect(siteConfig.metaPixelId).toMatch(/^\d+$/);
  });
});
