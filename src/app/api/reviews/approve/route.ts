import { NextRequest, NextResponse } from "next/server";
import { approveReview } from "@/lib/reviews-store";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") ?? "";
  const token = searchParams.get("token") ?? "";

  const review = await approveReview(id, token);

  const html = review
    ? `<!doctype html><html lang="bg"><head><meta charset="utf-8"><title>Отзив одобрен</title></head>
       <body style="font-family:system-ui,sans-serif;padding:60px 40px;text-align:center;max-width:480px;margin:0 auto">
         <div style="font-size:48px;margin-bottom:16px">✅</div>
         <h2 style="color:#16a34a;margin:0 0 12px">Отзивът е одобрен!</h2>
         <p style="font-size:15px;color:#374151"><strong>${review.name}</strong> — ${"★".repeat(review.rating)}</p>
         <p style="font-size:15px;color:#6b7280;font-style:italic">„${review.text}"</p>
         <p style="margin-top:32px;font-size:13px;color:#9ca3af">Отзивът вече е видим на страницата с отзиви.</p>
       </body></html>`
    : `<!doctype html><html lang="bg"><head><meta charset="utf-8"><title>Грешка</title></head>
       <body style="font-family:system-ui,sans-serif;padding:60px 40px;text-align:center;max-width:480px;margin:0 auto">
         <div style="font-size:48px;margin-bottom:16px">⚠️</div>
         <h2 style="color:#dc2626;margin:0 0 12px">Отзивът не е намерен</h2>
         <p style="color:#6b7280">Може би вече е одобрен или линкът е невалиден.</p>
       </body></html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
