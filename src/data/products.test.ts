import { describe, it, expect } from "vitest";
import { products } from "./products";

describe("products data", () => {
  it("contains exactly 2 products", () => {
    expect(products).toHaveLength(2);
  });

  it("all products have required fields", () => {
    for (const product of products) {
      expect(product.id).toBeTruthy();
      expect(product.name).toBeTruthy();
      expect(product.description).toBeTruthy();
      expect(product.priceEUR).toBeGreaterThan(0);
      expect(product.image).toBeTruthy();
      expect(product.category).toBeTruthy();
    }
  });

  it("all IDs are unique", () => {
    const ids = products.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all IDs are ASCII-only", () => {
    for (const product of products) {
      expect(product.id).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("all images and gallery photos point to /images/products/", () => {
    for (const product of products) {
      expect(product.image).toMatch(/^\/images\/products\//);
      for (const photo of product.gallery ?? []) {
        expect(photo).toMatch(/^\/images\/products\//);
      }
    }
  });
});
