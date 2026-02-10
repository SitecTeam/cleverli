import * as z from "zod";
import { escapeHtml } from "@/lib/escape-html";

export const getInTouchSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Minimum 2 characters required",
    })
    .transform(escapeHtml),
  email: z
    .string()
    .email({
      message: "Invalid email",
    })
    .transform(escapeHtml),
  message: z.string().optional().default("").transform(escapeHtml),
});

export const bookYourCallSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Min. 2 characters",
    })
    .transform(escapeHtml),
  email: z
    .string()
    .email({
      message: "Invalid email",
    })
    .transform(escapeHtml),
  // Handling date as string on server, or transform.
  // When sent via JSON, date will likely be ISO string.
  date: z
    .string()
    .or(z.date())
    .transform(val => new Date(val)),
  time: z
    .string()
    .min(1, {
      message: "Invalid time",
    })
    .transform(escapeHtml),
  message: z.string().optional().default("").transform(escapeHtml),
});
