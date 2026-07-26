import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { contactFormSchema, bookingFormSchema, reviewFormSchema, purchaseFormSchema } from "@/lib/schemas";
import { siteConfig } from "@/data/site-config";
import { reviews } from "@/data/reviews";

const formSchema = z.discriminatedUnion("type", [
  contactFormSchema.extend({ type: z.literal("contact") }),
  bookingFormSchema.extend({ type: z.literal("booking") }),
  reviewFormSchema.extend({ type: z.literal("review") }),
  purchaseFormSchema.extend({ type: z.literal("purchase") }),
]);

type FormData = z.infer<typeof formSchema>;

const notificationRecipients = [siteConfig.email, siteConfig.adminEmail];

function buildSubject(data: FormData): string {
  switch (data.type) {
    case "contact":
      return `Ново запитване от ${data.name}`;
    case "booking":
      return `Нова заявка за час от ${data.name} — ${data.procedure}`;
    case "review":
      return `Нов отзив от ${data.name} — ${data.rating} звезди`;
    case "purchase":
      return `Нова поръчка от ${data.name} — ${data.productName} (x${data.quantity})`;
  }
}

function buildContactHtml(data: FormData): string {
  const rows = Object.entries(data)
    .filter(([key]) => key !== "type")
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px;font-weight:bold;vertical-align:top">${key}</td><td style="padding:8px">${value ?? "—"}</td></tr>`
    )
    .join("");

  return `
    <h2>${buildSubject(data)}</h2>
    <table style="border-collapse:collapse;width:100%">${rows}</table>
    <p style="margin-top:16px;color:#666;font-size:12px">Изпратено от dhealth.bg</p>
  `;
}

function buildReviewHtml(data: Extract<FormData, { type: "review" }>): string {
  const stars = "★".repeat(data.rating) + "☆".repeat(5 - data.rating);
  const nextId = String(reviews.length + 1);
  const date = new Date().toISOString().split("T")[0];
  const snippet = [
    "  {",
    `    id: "${nextId}",`,
    `    name: "${data.name.replace(/"/g, '\\"')}",`,
    `    text: "${data.text.replace(/"/g, '\\"')}",`,
    `    rating: ${data.rating},`,
    `    date: "${date}",`,
    "  },",
  ].join("\n");

  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px">
      <h2 style="color:#1e3a5f">Нов отзив за одобрение</h2>
      <table style="border-collapse:collapse;width:100%;margin-bottom:24px">
        <tr>
          <td style="padding:8px;font-weight:bold;color:#374151">Автор</td>
          <td style="padding:8px">${data.name}</td>
        </tr>
        <tr style="background:#f9fafb">
          <td style="padding:8px;font-weight:bold;color:#374151">Оценка</td>
          <td style="padding:8px;color:#f59e0b;font-size:18px">${stars}</td>
        </tr>
        <tr>
          <td style="padding:8px;font-weight:bold;color:#374151">Отзив</td>
          <td style="padding:8px;font-style:italic">„${data.text}"</td>
        </tr>
      </table>
      <p style="color:#374151;font-size:14px">
        За да публикувате отзива, добавете този запис в <code>src/data/reviews.ts</code> и качете промяната:
      </p>
      <pre style="background:#f3f4f6;padding:16px;border-radius:8px;font-size:13px;overflow-x:auto;white-space:pre-wrap">${snippet}</pre>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = formSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;
    const subject = buildSubject(data);
    const html = data.type === "review" ? buildReviewHtml(data) : buildContactHtml(data);

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: "DHealth <bookings@dhealth.bg>",
        to: notificationRecipients,
        subject,
        html,
      });

      if (error) {
        console.error(`Resend send failed (${data.type}):`, error);
        return NextResponse.json(
          { success: false, message: "Възникна грешка при изпращането на имейла." },
          { status: 502 }
        );
      }
    } else {
      console.log(`[${data.type}] ${subject}:`, JSON.stringify(data, null, 2));
    }

    return NextResponse.json({
      success: true,
      message: "Съобщението е изпратено успешно.",
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Възникна грешка при обработката." },
      { status: 500 }
    );
  }
}
