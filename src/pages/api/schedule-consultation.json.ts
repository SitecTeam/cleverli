import type { APIRoute } from "astro";
import { bookYourCallSchema } from "@/lib/schemas";
import { sendEmail } from "@/lib/resend";
import {
  getBookingHtmlStringToSitec,
  getBookingHtmlStringToUserWithAnswers,
} from "@/lib/email-templates";
import { isSpam } from "@/lib/is-spam";
import { isBot } from "@/lib/bot-protection";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Vercel bot detection (no-op on Cloudflare / local dev)
    if (await isBot(request)) {
      return new Response(JSON.stringify({ error: "Bot detected" }), {
        status: 403,
      });
    }

    const body = await request.json();

    const parsed = bookYourCallSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.format() }), {
        status: 400,
      });
    }
    const data = parsed.data;

    if (isSpam(data.message || "") || isSpam(data.name)) {
      return new Response(JSON.stringify({ error: "Spam detected" }), {
        status: 403,
      });
    }

    const dateStr = data.date.toDateString();

    const adminHtml = getBookingHtmlStringToSitec({
      name: data.name,
      email: data.email,
      date: dateStr,
      time: data.time,
      message: data.message || undefined,
    });

    const userHtml = getBookingHtmlStringToUserWithAnswers({
      name: data.name,
      email: data.email,
      date: dateStr,
      time: data.time,
      message: data.message || undefined,
    });

    // Send separately to avoid blocking one if the other fails (e.g. unverified domain)
    const recipients = ["sitecteam25@gmail.com", "info@cleverli.pro"];
    const sendResults = await Promise.all(
      recipients.map(to =>
        sendEmail({
          to,
          subject: `Consultation Request: ${data.name}`,
          html: adminHtml,
          replyTo: data.email,
        })
      )
    );

    const anySuccess = sendResults.some(r => r.success);

    if (!anySuccess) {
      console.error("Failed to send admin email:", sendResults[0].error);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
      });
    }

    await sendEmail({
      to: data.email,
      subject: "Consultation Request Received",
      html: userHtml,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
