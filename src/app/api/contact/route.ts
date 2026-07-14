import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { contactFormSchema, bookingFormSchema, reviewFormSchema } from "@/lib/schemas";
import { siteConfig } from "@/data/site-config";
import { savePendingReview } from "@/lib/reviews-store";

const formSchema = z.discriminatedUnion("type", [
  contactFormSchema.extend({ type: z.literal("contact") }),
  bookingFormSchema.extend({ type: z.literal("booking") }),
  reviewFormSchema.extend({ type: z.literal("review") }),
]);

type FormData = z.infer<typeof formSchema>;

function buildSubject(data: FormData): string {
  switch (data.type) {
    case "contact":
      return `Ново запитване от ${data.name}`;
    case "booking":
      return `Нова заявка за час от ${data.name} — ${data.procedure}`;
    case "review":
      return `Нов отзив от ${data.name} — ${data.rating} звезди`;
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

function buildReviewHtml(data: Extract<FormData, { type: "review" }>, approvalUrl: string): string {
  const stars = "★".repeat(data.rating) + "☆".repeat(5 - data.rating);
  return `
    <div style="font-family:system-ui,sans-serif;max-width:520px">
      <h2 style="color:#1e3a5f">Нов отзив чака одобрение</h2>
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
      <a href="${approvalUrl}"
         style="display:inline-block;background:#16a34a;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px">
        ✅ Одобри отзива
      </a>
      <p style="margin-top:20px;color:#9ca3af;font-size:12px">
        Кликни бутона за да публикуваш отзива на сайта. Линкът е еднократен.
      </p>
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
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dhealth.bg";

    if (data.type === "review") {
      const pending = await savePendingReview({ name: data.name, rating: data.rating, text: data.text });
      const approvalUrl = `${siteUrl}/api/reviews/approve?id=${pending.id}&token=${pending.token}`;
      const html = buildReviewHtml(data, approvalUrl);

      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "DHealth <onboarding@resend.dev>",
          to: siteConfig.adminEmail,
          subject,
          html,
        });
      } else {
        console.log(`[review] ${subject}\nApproval link: ${approvalUrl}`);
      }
    } else {
      const html = buildContactHtml(data);

      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "DHealth <onboarding@resend.dev>",
          to: siteConfig.email,
          subject,
          html,
        });
      } else {
        console.log(`[${data.type}] ${subject}:`, JSON.stringify(data, null, 2));
      }
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
