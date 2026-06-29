import { describe, it, expect } from "vitest";
import { reviews, getRecentReviews } from "./reviews";

describe("reviews data", () => {
  it("contains 8 reviews", () => {
    expect(reviews).toHaveLength(8);
  });

  it("all reviews have required fields", () => {
    for (const r of reviews) {
      expect(r.id).toBeTruthy();
      expect(r.name).toBeTruthy();
      expect(r.text).toBeTruthy();
      expect(r.rating).toBeGreaterThanOrEqual(1);
      expect(r.rating).toBeLessThanOrEqual(5);
      expect(r.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("all IDs are unique", () => {
    const ids = reviews.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all dates are valid", () => {
    for (const r of reviews) {
      const date = new Date(r.date);
      expect(date.toString()).not.toBe("Invalid Date");
    }
  });
});

describe("getRecentReviews", () => {
  it("returns requested count", () => {
    expect(getRecentReviews(3)).toHaveLength(3);
  });

  it("returns reviews sorted by date descending", () => {
    const recent = getRecentReviews(8);
    for (let i = 1; i < recent.length; i++) {
      expect(new Date(recent[i - 1].date).getTime()).toBeGreaterThanOrEqual(
        new Date(recent[i].date).getTime()
      );
    }
  });

  it("returns most recent review first", () => {
    const recent = getRecentReviews(1);
    expect(recent[0].name).toBe("Марияна Николаева");
  });
});
