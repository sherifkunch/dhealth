import { describe, it, expect } from "vitest";
import { contactFormSchema, bookingFormSchema, reviewFormSchema } from "./schemas";

describe("contactFormSchema", () => {
  it("accepts valid input", () => {
    const result = contactFormSchema.safeParse({
      name: "Иван Иванов",
      email: "ivan@example.com",
      phone: "+359897077098",
      message: "Искам да запазя час за консултация.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects short name", () => {
    const result = contactFormSchema.safeParse({
      name: "И",
      email: "ivan@example.com",
      phone: "+359897077098",
      message: "Искам да запазя час.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = contactFormSchema.safeParse({
      name: "Иван",
      email: "not-an-email",
      phone: "+359897077098",
      message: "Искам да запазя час.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects short message", () => {
    const result = contactFormSchema.safeParse({
      name: "Иван",
      email: "ivan@example.com",
      phone: "+359897077098",
      message: "Кратко",
    });
    expect(result.success).toBe(false);
  });
});

describe("bookingFormSchema", () => {
  it("accepts valid input", () => {
    const result = bookingFormSchema.safeParse({
      name: "Мария",
      phone: "+359897077098",
      procedure: "kineziterapia",
    });
    expect(result.success).toBe(true);
  });

  it("requires procedure", () => {
    const result = bookingFormSchema.safeParse({
      name: "Мария",
      phone: "+359897077098",
      procedure: "",
    });
    expect(result.success).toBe(false);
  });

  it("accepts optional email as empty string", () => {
    const result = bookingFormSchema.safeParse({
      name: "Мария",
      phone: "+359897077098",
      procedure: "kineziterapia",
      email: "",
    });
    expect(result.success).toBe(true);
  });
});

describe("reviewFormSchema", () => {
  it("accepts valid input", () => {
    const result = reviewFormSchema.safeParse({
      name: "Петър",
      rating: 5,
      text: "Страхотно обслужване и резултати!",
    });
    expect(result.success).toBe(true);
  });

  it("rejects rating out of range", () => {
    const result = reviewFormSchema.safeParse({
      name: "Петър",
      rating: 6,
      text: "Страхотно обслужване.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects short review text", () => {
    const result = reviewFormSchema.safeParse({
      name: "Петър",
      rating: 5,
      text: "Добре",
    });
    expect(result.success).toBe(false);
  });
});
