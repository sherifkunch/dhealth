import { describe, it, expect } from "vitest";
import { pricing } from "./pricing";

describe("pricing data", () => {
  it("contains 4 categories", () => {
    expect(pricing).toHaveLength(4);
  });

  it("all categories have a name and items", () => {
    for (const cat of pricing) {
      expect(cat.category).toBeTruthy();
      expect(cat.items.length).toBeGreaterThan(0);
    }
  });

  it("all items have valid prices", () => {
    for (const cat of pricing) {
      for (const item of cat.items) {
        expect(item.name).toBeTruthy();
        expect(item.priceBGN).toBeGreaterThan(0);
        expect(item.priceEUR).toBeGreaterThan(0);
      }
    }
  });

  it("EUR prices are less than BGN prices", () => {
    for (const cat of pricing) {
      for (const item of cat.items) {
        expect(item.priceEUR).toBeLessThan(item.priceBGN);
      }
    }
  });

  it("has 20 total items", () => {
    const total = pricing.reduce((sum, cat) => sum + cat.items.length, 0);
    expect(total).toBe(20);
  });
});
