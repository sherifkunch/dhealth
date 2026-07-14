import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ServicesFeaturesStrip } from "./services-features-strip";

describe("ServicesFeaturesStrip", () => {
  it("renders all four feature titles", () => {
    render(<ServicesFeaturesStrip />);
    expect(screen.getByText("Доказани методи")).toBeInTheDocument();
    expect(screen.getByText("Индивидуален подход")).toBeInTheDocument();
    expect(screen.getByText("Професионален екип")).toBeInTheDocument();
    expect(screen.getByText("Лесно записване")).toBeInTheDocument();
  });
});
