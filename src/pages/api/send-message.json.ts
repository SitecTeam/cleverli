import type { APIRoute } from "astro";
import { getInTouchSchema } from "@/lib/schemas";
import { sendEmail } from "@/lib/resend";
import {
  getContactHtmlStringToSitec,
  getContactHtmlStringToUserWithAnswers,
} from "@/lib/email-templates";
import { isSpam } from "./is-spam";
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

    // 1. Validation
    const parsed = getInTouchSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.format() }), {
        status: 400,
      });
    }
    const data = parsed.data;

    // 2. Spam Check
    if (isSpam(data.message || "") || isSpam(data.name)) {
      return new Response(JSON.stringify({ error: "Spam detected" }), {
        status: 403,
      });
    }

    // 3. Send Emails
    const adminHtml = getContactHtmlStringToSitec({
      name: data.name,
      email: data.email,
      message: data.message || undefined,
    });

    const userHtml = getContactHtmlStringToUserWithAnswers({
      name: data.name,
      email: data.email,
      message: data.message || undefined,
    });

    // Send to Admin (Site Owner) - Send separately to handle potential unverified emails gracefully
    const recipients = ["sitecteam25@gmail.com", "info@cleverli.pro"];
    const sendResults = await Promise.all(
      recipients.map((to) =>
        sendEmail({
          to,
          subject: `New Contact from ${data.name}`,
          html: adminHtml,
          replyTo: data.email,
        })
      )
    );

    const anySuccess = sendResults.some((r) => r.success);

    if (!anySuccess) {
      console.error("Failed to send admin email:", sendResults[0].error);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
      });
    }

    // Send to User (Confirmation)
    await sendEmail({
      to: data.email,
      subject: "We received your message",
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
