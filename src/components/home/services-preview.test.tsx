import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ServicesPreview } from "./services-preview";
import { getFeaturedProcedures } from "@/data/procedures";

describe("ServicesPreview", () => {
  it("renders the section heading", () => {
    render(<ServicesPreview />);
    expect(screen.getByRole("heading", { name: "Какво предлагаме?" })).toBeInTheDocument();
  });

  it("renders a card link for every featured procedure", () => {
    render(<ServicesPreview />);
    const featured = getFeaturedProcedures();
    const procedureLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href")?.startsWith("/protseduri/"));
    expect(procedureLinks).toHaveLength(featured.length);
  });

  it("renders the link to the full procedures list", () => {
    render(<ServicesPreview />);
    expect(screen.getByRole("button", { name: /Виж всички процедури/ })).toHaveAttribute(
      "href",
      "/protseduri"
    );
  });
});
