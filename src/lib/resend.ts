import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

interface SendEmailProps {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
}

export const sendEmail = async ({
  to,
  subject,
  html,
  from,
  replyTo,
}: SendEmailProps) => {
  if (!import.meta.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY is not set");
    // In development without key, maybe log it?
    // But we should try to send.
  }

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
