import { describe, it, expect } from "vitest";
import { posts, getAllPostSlugs, getPostBySlug, getFeaturedPosts } from "../posts";

describe("posts data", () => {
  it("has at least one post", () => {
    expect(posts.length).toBeGreaterThan(0);
  });

  it("every post has required fields", () => {
    for (const post of posts) {
      expect(post.id).toBeTruthy();
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(post.category).toBeTruthy();
      expect(post.date).toBeTruthy();
      expect(post.readingTime).toBeGreaterThan(0);
      expect(Array.isArray(post.content)).toBe(true);
      expect(post.content.length).toBeGreaterThan(0);
    }
  });

  it("every post has a valid ISO date", () => {
    for (const post of posts) {
      const d = new Date(post.date);
      expect(isNaN(d.getTime())).toBe(false);
    }
  });

  it("every post slug matches its id", () => {
    for (const post of posts) {
      expect(post.slug).toBe(post.id);
    }
  });

  it("no duplicate slugs", () => {
    const slugs = posts.map((p) => p.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });

  it("content sections have valid types", () => {
    const validTypes = ["paragraph", "heading", "list"];
    for (const post of posts) {
      for (const section of post.content) {
        expect(validTypes).toContain(section.type);
        if (section.type === "list") {
          expect(Array.isArray(section.items)).toBe(true);
          expect(section.items!.length).toBeGreaterThan(0);
        } else {
          expect(typeof section.text).toBe("string");
        }
      }
    }
  });
});

describe("getAllPostSlugs", () => {
  it("returns an array of strings", () => {
    const slugs = getAllPostSlugs();
    expect(Array.isArray(slugs)).toBe(true);
    slugs.forEach((s) => expect(typeof s).toBe("string"));
  });

  it("returns same count as posts array", () => {
    expect(getAllPostSlugs().length).toBe(posts.length);
  });
});

describe("getPostBySlug", () => {
  it("returns the correct post for a valid slug", () => {
    const slug = posts[0].slug;
    const post = getPostBySlug(slug);
    expect(post).toBeDefined();
    expect(post!.slug).toBe(slug);
  });

  it("returns undefined for an unknown slug", () => {
    expect(getPostBySlug("non-existent-slug")).toBeUndefined();
  });
});

describe("getFeaturedPosts", () => {
  it("returns only featured posts", () => {
    const featured = getFeaturedPosts();
    featured.forEach((p) => expect(p.featured).toBe(true));
  });
});
