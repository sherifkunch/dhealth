import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { POST } from "./route";

const sendMock = vi.fn();

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: sendMock };
  },
}));

function makeRequest(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validBooking = {
  type: "booking",
  name: "Иван Иванов",
  phone: "0888123456",
  procedure: "fizioterapia",
};

describe("POST /api/contact", () => {
  const originalKey = process.env.RESEND_API_KEY;

  beforeEach(() => {
    sendMock.mockReset();
    process.env.RESEND_API_KEY = "test-key";
  });

  afterEach(() => {
    process.env.RESEND_API_KEY = originalKey;
  });

  it("returns 400 for an invalid payload", async () => {
    const response = await POST(makeRequest({ type: "booking" }));
    expect(response.status).toBe(400);
    const json = await response.json();
    expect(json.success).toBe(false);
  });

  it("returns success when Resend accepts the email", async () => {
    sendMock.mockResolvedValue({ data: { id: "email_1" }, error: null });

    const response = await POST(makeRequest(validBooking));
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.success).toBe(true);
    expect(sendMock).toHaveBeenCalledTimes(1);
  });

  it("returns a 502 and does not report success when Resend returns an error", async () => {
    sendMock.mockResolvedValue({
      data: null,
      error: { statusCode: 403, message: "The dhealth.bg domain is not verified.", name: "validation_error" },
    });

    const response = await POST(makeRequest(validBooking));
    const json = await response.json();

    expect(response.status).toBe(502);
    expect(json.success).toBe(false);
  });

  it("does not call Resend and still succeeds when no API key is configured", async () => {
    delete process.env.RESEND_API_KEY;

    const response = await POST(makeRequest(validBooking));
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.success).toBe(true);
    expect(sendMock).not.toHaveBeenCalled();
  });
});
