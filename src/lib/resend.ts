import { Resend } from "resend";

interface SendEmailProps {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
  apiKey: string;
}

export const sendEmail = async ({
  to,
  subject,
  html,
  from,
  replyTo,
  apiKey,
}: SendEmailProps) => {
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return { success: false, error: "RESEND_API_KEY is not configured" };
  }

  const resend = new Resend(apiKey);

  // Default sender MUST be from a verified domain in Resend.
  // Using onboarding@resend.dev (Resend's test domain) for now.
  // For production: verify your own domain in Resend dashboard and update this.
  const sender = from || "Cleverli <onboarding@resend.dev>";

  try {
    const data = await resend.emails.send({
      from: sender,
      to,
      subject,
      html,
      replyTo: replyTo,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error };
  }
};
