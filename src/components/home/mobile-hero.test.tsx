import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MobileHero } from "./mobile-hero";

describe("MobileHero", () => {
  it("renders the heading", () => {
    render(<MobileHero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Грижа, движение, по-добър живот."
    );
  });

  it("renders the description", () => {
    render(<MobileHero />);
    expect(
      screen.getByText(/Индивидуален подход и съвременни методи/)
    ).toBeInTheDocument();
  });

  it("renders a single CTA linking to the about page", () => {
    render(<MobileHero />);
    const link = screen.getByRole("link", { name: /Научете повече/ });
    expect(link).toHaveAttribute("href", "/za-nas");
  });

  it("renders the hero image with descriptive alt text", () => {
    render(<MobileHero />);
    expect(
      screen.getByAltText("Екипът на D. Health в студиото по кинезитерапия")
    ).toBeInTheDocument();
  });
});
