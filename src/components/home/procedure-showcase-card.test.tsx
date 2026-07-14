import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProcedureShowcaseCard } from "./procedure-showcase-card";
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

describe("ProcedureShowcaseCard", () => {
  it("renders the procedure name", () => {
    render(<ProcedureShowcaseCard procedure={mockProcedure} />);
    expect(screen.getByText("Тест процедура")).toBeInTheDocument();
  });

  it("renders the short description", () => {
    render(<ProcedureShowcaseCard procedure={mockProcedure} />);
    expect(screen.getByText("Описание на тестова процедура.")).toBeInTheDocument();
  });

  it("links to the procedure detail page with an accessible label", () => {
    render(<ProcedureShowcaseCard procedure={mockProcedure} />);
    const link = screen.getByRole("link", { name: "Научете повече за Тест процедура" });
    expect(link).toHaveAttribute("href", "/protseduri/test-procedure");
  });

  it("renders exactly one focusable link per card", () => {
    render(<ProcedureShowcaseCard procedure={mockProcedure} />);
    expect(screen.getAllByRole("link")).toHaveLength(1);
  });
});
