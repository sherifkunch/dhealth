import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { contactFormSchema, bookingFormSchema, reviewFormSchema } from "@/lib/schemas";
import { siteConfig } from "@/data/site-config";

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

function buildHtml(data: FormData): string {
  const rows = Object.entries(data)
    .filter(([key]) => key !== "type")
    .map(([key, value]) => `<tr><td style="padding:8px;font-weight:bold;vertical-align:top">${key}</td><td style="padding:8px">${value ?? "—"}</td></tr>`)
    .join("");

  return `
    <h2>${buildSubject(data)}</h2>
    <table style="border-collapse:collapse;width:100%">
      ${rows}
    </table>
    <p style="margin-top:16px;color:#666;font-size:12px">Изпратено от dhealth.bg</p>
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

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "DHealth <onboarding@resend.dev>",
        to: siteConfig.email,
        subject,
        html: buildHtml(data),
      });
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
