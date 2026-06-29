import { describe, it, expect } from "vitest";
import { procedures, getProcedureBySlug, getFeaturedProcedures, getAllProcedureSlugs } from "./procedures";

describe("procedures data", () => {
  it("contains exactly 12 procedures", () => {
    expect(procedures).toHaveLength(12);
  });

  it("all procedures have required fields", () => {
    for (const p of procedures) {
      expect(p.id).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.shortDescription).toBeTruthy();
      expect(p.fullDescription).toBeTruthy();
      expect(p.benefits.length).toBeGreaterThan(0);
      expect(p.image).toBeTruthy();
      expect(typeof p.featured).toBe("boolean");
    }
  });

  it("all slugs are unique", () => {
    const slugs = procedures.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("all IDs are unique", () => {
    const ids = procedures.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all slugs are ASCII-only", () => {
    for (const p of procedures) {
      expect(p.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("all images point to /images/procedures/", () => {
    for (const p of procedures) {
      expect(p.image).toMatch(/^\/images\/procedures\//);
    }
  });

  it("has exactly 6 featured procedures", () => {
    expect(getFeaturedProcedures()).toHaveLength(6);
  });
});

describe("getProcedureBySlug", () => {
  it("returns the correct procedure", () => {
    const result = getProcedureBySlug("kineziterapia");
    expect(result).toBeDefined();
    expect(result!.name).toBe("Кинезитерапия");
  });

  it("returns undefined for non-existent slug", () => {
    expect(getProcedureBySlug("non-existent")).toBeUndefined();
  });
});

describe("getAllProcedureSlugs", () => {
  it("returns 12 slugs", () => {
    expect(getAllProcedureSlugs()).toHaveLength(12);
  });
});
