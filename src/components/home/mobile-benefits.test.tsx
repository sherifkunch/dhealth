import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MobileBenefits } from "./mobile-benefits";
import { homeBenefits } from "@/data/home-benefits";

describe("MobileBenefits", () => {
  it("renders a row for every benefit", () => {
    render(<MobileBenefits />);
    for (const benefit of homeBenefits) {
      expect(screen.getByText(benefit.title)).toBeInTheDocument();
      expect(screen.getByText(benefit.description)).toBeInTheDocument();
    }
  });
});
