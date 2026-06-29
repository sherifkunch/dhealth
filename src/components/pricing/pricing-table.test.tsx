import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PricingTable } from "./pricing-table";
import type { PricingCategory } from "@/types";

const mockCategories: PricingCategory[] = [
  {
    category: "Тест категория",
    items: [
      { name: "Услуга 1", priceBGN: 100, priceEUR: 51.13 },
      { name: "Пакет услуга", sessions: "8 процедури", priceBGN: 700, priceEUR: 357.9 },
    ],
  },
];

describe("PricingTable", () => {
  it("renders the category name", () => {
    render(<PricingTable categories={mockCategories} />);
    expect(screen.getAllByText("Тест категория").length).toBeGreaterThan(0);
  });

  it("renders all item names", () => {
    render(<PricingTable categories={mockCategories} />);
    expect(screen.getAllByText("Услуга 1").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Пакет услуга").length).toBeGreaterThan(0);
  });

  it("renders BGN prices", () => {
    render(<PricingTable categories={mockCategories} />);
    expect(screen.getAllByText(/100/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/700/).length).toBeGreaterThan(0);
  });

  it("renders session info for package items", () => {
    render(<PricingTable categories={mockCategories} />);
    expect(screen.getAllByText("8 процедури").length).toBeGreaterThan(0);
  });
});
