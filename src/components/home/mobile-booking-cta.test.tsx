import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MobileBookingCta } from "./mobile-booking-cta";
import { MobileNavProvider } from "@/components/layout/mobile-nav-context";
import { useMobileNav } from "@/components/layout/mobile-nav-context";

function NavToggle() {
  const { setOpen, open } = useMobileNav();
  return (
    <button onClick={() => setOpen(!open)}>toggle</button>
  );
}

describe("MobileBookingCta", () => {
  it("renders a link to the booking page when nav is closed", () => {
    render(
      <MobileNavProvider>
        <MobileBookingCta />
      </MobileNavProvider>
    );
    expect(screen.getByRole("link", { name: "Запазете час" })).toHaveAttribute(
      "href",
      "/zapitvane"
    );
  });

  it("hides when the mobile nav is open", () => {
    render(
      <MobileNavProvider>
        <NavToggle />
        <MobileBookingCta />
      </MobileNavProvider>
    );
    expect(screen.getByRole("link", { name: "Запазете час" })).toBeInTheDocument();
    fireEvent.click(screen.getByText("toggle"));
    expect(screen.queryByRole("link", { name: "Запазете час" })).not.toBeInTheDocument();
  });
});
