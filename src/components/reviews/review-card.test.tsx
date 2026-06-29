import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ReviewCard } from "./review-card";
import type { Review } from "@/types";

const mockReview: Review = {
  id: "1",
  name: "Тест Клиент",
  text: "Страхотно обслужване и резултати.",
  rating: 4,
  date: "2024-06-15",
};

describe("ReviewCard", () => {
  it("renders the reviewer name", () => {
    render(<ReviewCard review={mockReview} />);
    expect(screen.getAllByText("Тест Клиент").length).toBeGreaterThan(0);
  });

  it("renders the review text", () => {
    render(<ReviewCard review={mockReview} />);
    expect(
      screen.getAllByText(/Страхотно обслужване/).length
    ).toBeGreaterThan(0);
  });

  it("renders 5 star icons per instance", () => {
    const { container } = render(<ReviewCard review={mockReview} />);
    const stars = container.querySelectorAll("svg.lucide-star");
    expect(stars.length).toBeGreaterThanOrEqual(5);
  });

  it("renders the date", () => {
    render(<ReviewCard review={mockReview} />);
    expect(screen.getAllByText(/2024/).length).toBeGreaterThan(0);
  });
});
