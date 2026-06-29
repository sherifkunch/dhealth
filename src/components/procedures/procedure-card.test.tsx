import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProcedureCard } from "./procedure-card";
import type { Procedure } from "@/types";

const mockProcedure: Procedure = {
  id: "test",
  slug: "test-procedure",
  name: "Тест процедура",
  shortDescription: "Описание на тестова процедура.",
  fullDescription: "Пълно описание.",
  benefits: ["Полза 1", "Полза 2"],
  image: "/images/procedures/test.jpg",
  featured: true,
};

describe("ProcedureCard", () => {
  it("renders the procedure name", () => {
    render(<ProcedureCard procedure={mockProcedure} />);
    expect(screen.getAllByText("Тест процедура").length).toBeGreaterThan(0);
  });

  it("renders the short description", () => {
    render(<ProcedureCard procedure={mockProcedure} />);
    expect(screen.getAllByText("Описание на тестова процедура.").length).toBeGreaterThan(0);
  });

  it("links to the procedure detail page", () => {
    render(<ProcedureCard procedure={mockProcedure} />);
    const links = screen.getAllByRole("link");
    expect(links.some((l) => l.getAttribute("href") === "/protseduri/test-procedure")).toBe(true);
  });

  it("shows 'Научете повече' call to action", () => {
    render(<ProcedureCard procedure={mockProcedure} />);
    expect(screen.getAllByText("Научете повече").length).toBeGreaterThan(0);
  });
});
