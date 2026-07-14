import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FloatingWhatsApp, WhatsAppViberButtons } from "./whatsapp-button";

describe("FloatingWhatsApp", () => {
  it("links to the WhatsApp chat", () => {
    render(<FloatingWhatsApp />);
    expect(screen.getByLabelText("Пишете ни в WhatsApp")).toHaveAttribute(
      "href",
      expect.stringContaining("wa.me")
    );
  });
});

describe("WhatsAppViberButtons", () => {
  it("renders WhatsApp and Viber links", () => {
    render(<WhatsAppViberButtons />);
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
    expect(screen.getByText("Viber")).toBeInTheDocument();
  });
});
