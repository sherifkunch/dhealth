import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BlogPostCard } from "../blog-post-card";
import type { BlogPost } from "@/types";

const mockPost: BlogPost = {
  id: "test-post",
  slug: "test-post",
  title: "Тест статия за здраве",
  excerpt: "Кратко описание на тест статията.",
  category: "Съвети",
  date: "2026-06-01",
  readingTime: 4,
  featured: true,
  content: [{ type: "paragraph", text: "Съдържание." }],
};

describe("BlogPostCard", () => {
  it("renders the post title", () => {
    render(<BlogPostCard post={mockPost} />);
    expect(screen.getAllByText("Тест статия за здраве").length).toBeGreaterThan(0);
  });

  it("renders the excerpt", () => {
    render(<BlogPostCard post={mockPost} />);
    expect(
      screen.getAllByText(/Кратко описание/).length
    ).toBeGreaterThan(0);
  });

  it("renders the category", () => {
    render(<BlogPostCard post={mockPost} />);
    expect(screen.getAllByText("Съвети").length).toBeGreaterThan(0);
  });

  it("renders reading time", () => {
    render(<BlogPostCard post={mockPost} />);
    expect(screen.getAllByText(/4 мин/).length).toBeGreaterThan(0);
  });

  it("renders a link to the post", () => {
    render(<BlogPostCard post={mockPost} />);
    const links = screen.getAllByRole("link", { name: /тест статия/i });
    expect(links.length).toBeGreaterThan(0);
    expect(links[0]).toHaveAttribute("href", "/blog/test-post");
  });

  it("renders read more text", () => {
    render(<BlogPostCard post={mockPost} />);
    expect(
      screen.getAllByText(/Прочетете повече/).length
    ).toBeGreaterThan(0);
  });
});
