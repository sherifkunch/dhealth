import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "./product-card";
import type { Product } from "@/types";

const mockProduct: Product = {
  id: "test-product",
  name: "Тестов продукт",
  description: "Описание на тестовия продукт.",
  priceEUR: 15,
  image: "/images/products/test.jpg",
  category: "Ластици",
};

describe("ProductCard", () => {
  it("renders the product name", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Тестов продукт")).toBeInTheDocument();
  });

  it("renders the price in euro", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("€15")).toBeInTheDocument();
  });

  it("renders the category", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Ластици")).toBeInTheDocument();
  });

  it("links the buy button to the purchase form with the product id", () => {
    render(<ProductCard product={mockProduct} />);
    const link = screen.getByRole("button", { name: /купи/i });
    expect(link).toHaveAttribute("href", "/produkti?product=test-product#poracha");
  });
});
