import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProcedureDetail } from "./procedure-detail";
import type { Procedure } from "@/types";

const mockProcedure: Procedure = {
  id: "test",
  slug: "test-procedure",
  name: "Тест процедура",
  shortDescription: "Кратко описание.",
  fullDescription: "Пълно описание на тестовата процедура с много детайли.",
  benefits: ["Полза едно", "Полза две", "Полза три"],
  duration: "30-45 мин",
  image: "/images/procedures/test.jpg",
  featured: true,
};

const mockRelated: Procedure[] = [
  {
    id: "related-1",
    slug: "related-one",
    name: "Свързана процедура",
    shortDescription: "Описание.",
    fullDescription: "Пълно описание.",
    benefits: ["Полза"],
    image: "/images/procedures/related.jpg",
    featured: false,
  },
];

describe("ProcedureDetail", () => {
  it("renders the full description", () => {
    render(<ProcedureDetail procedure={mockProcedure} relatedProcedures={mockRelated} />);
    expect(screen.getAllByText(/Пълно описание на тестовата процедура/).length).toBeGreaterThan(0);
  });

  it("renders all benefits", () => {
    render(<ProcedureDetail procedure={mockProcedure} relatedProcedures={mockRelated} />);
    expect(screen.getAllByText("Полза едно").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Полза две").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Полза три").length).toBeGreaterThan(0);
  });

  it("renders the duration", () => {
    render(<ProcedureDetail procedure={mockProcedure} relatedProcedures={mockRelated} />);
    expect(screen.getAllByText(/30-45 мин/).length).toBeGreaterThan(0);
  });

  it("renders booking CTA with procedure name", () => {
    render(<ProcedureDetail procedure={mockProcedure} relatedProcedures={mockRelated} />);
    expect(screen.getAllByText(/Запазете час за Тест процедура/).length).toBeGreaterThan(0);
  });

  it("links booking CTA to zapitvane with procedure param", () => {
    const { container } = render(<ProcedureDetail procedure={mockProcedure} relatedProcedures={mockRelated} />);
    const el = container.querySelector('[href="/zapitvane?procedure=test-procedure"]');
    expect(el).not.toBeNull();
  });

  it("renders related procedures", () => {
    render(<ProcedureDetail procedure={mockProcedure} relatedProcedures={mockRelated} />);
    expect(screen.getAllByText("Свързана процедура").length).toBeGreaterThan(0);
  });
});
