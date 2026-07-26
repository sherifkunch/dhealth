import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
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

const mockProductWithGallery: Product = {
  ...mockProduct,
  gallery: ["/images/products/test-2.jpg"],
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

  it("opens the lightbox when the main photo is clicked", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.queryByRole("dialog")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /Увеличи снимката/ }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("opens the lightbox on the clicked thumbnail", () => {
    render(<ProductCard product={mockProductWithGallery} />);
    const thumbnails = screen.getAllByRole("button", { name: /Снимка/ });
    fireEvent.click(thumbnails[1]);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(thumbnails[1]).toHaveAttribute("aria-pressed", "true");
  });

  it("closes the lightbox via the close button", () => {
    render(<ProductCard product={mockProduct} />);
    fireEvent.click(screen.getByRole("button", { name: /Увеличи снимката/ }));
    fireEvent.click(screen.getByRole("button", { name: /Затвори/ }));
    expect(screen.queryByRole("dialog")).toBeNull();
  });
});
