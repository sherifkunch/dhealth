import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WorkingHours } from "./working-hours";

describe("WorkingHours", () => {
  it("renders working days", () => {
    render(<WorkingHours />);
    expect(screen.getAllByText(/Понеделник/).length).toBeGreaterThan(0);
  });

  it("renders working hours", () => {
    render(<WorkingHours />);
    expect(screen.getAllByText(/08:00/).length).toBeGreaterThan(0);
  });

  it("renders closed day", () => {
    render(<WorkingHours />);
    expect(screen.getAllByText(/Неделя/).length).toBeGreaterThan(0);
  });

  it("renders compact variant", () => {
    render(<WorkingHours compact />);
    expect(screen.getAllByText(/Понеделник/).length).toBeGreaterThan(0);
  });
});
