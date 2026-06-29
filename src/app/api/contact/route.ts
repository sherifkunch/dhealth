import { NextResponse } from "next/server";
import { z } from "zod";
import { contactFormSchema, bookingFormSchema, reviewFormSchema } from "@/lib/schemas";

const formSchema = z.discriminatedUnion("type", [
  contactFormSchema.extend({ type: z.literal("contact") }),
  bookingFormSchema.extend({ type: z.literal("booking") }),
  reviewFormSchema.extend({ type: z.literal("review") }),
]);

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

    // Email sending via Resend would go here when RESEND_API_KEY is configured.
    // For now, log the submission and return success.
    console.log(`[${data.type}] Form submission:`, JSON.stringify(data, null, 2));

    return NextResponse.json({
      success: true,
      message: "Съобщението е изпратено успешно.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Възникна грешка при обработката." },
      { status: 500 }
    );
  }
}
