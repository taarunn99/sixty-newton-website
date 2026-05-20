import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

let cached: Transporter | null = null;

/**
 * Singleton SMTP transport. Lazily constructed so we don't fail at module-load
 * when env vars aren't set (e.g. local dev without SMTP creds).
 *
 * Required env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD.
 * Optional: SMTP_SECURE ("true"/"false"), MAIL_FROM, MAIL_TO.
 */
export function getTransporter(): Transporter {
  if (cached) return cached;
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  if (!host || !user || !pass) {
    throw new Error("SMTP not configured: set SMTP_HOST, SMTP_USER, SMTP_PASSWORD");
  }
  cached = nodemailer.createTransport({
    host,
    port,
    secure: (process.env.SMTP_SECURE ?? "true") === "true",
    auth: { user, pass },
  });
  return cached;
}

export const MAIL_FROM = process.env.MAIL_FROM ?? '"Sixty Newton Website" <noreply@60newton.com>';

/**
 * Recipients for form submissions.
 *
 * MAIL_TO accepts a comma-separated list of addresses — every address
 * receives a copy. Defaults to a 2-recipient setup so enquiries hit
 * info@60newton.com (general inbox) AND tarun.s@lapizblue.com (group
 * oversight) by default.
 *
 * Override per environment in Vercel by setting MAIL_TO to a comma-
 * separated list, e.g.
 *   MAIL_TO="info@60newton.com,salim@60newton.com,tarun.s@lapizblue.com"
 */
const RAW_MAIL_TO = process.env.MAIL_TO ?? "info@60newton.com,tarun.s@lapizblue.com";
export const MAIL_TO = RAW_MAIL_TO.split(",").map(s => s.trim()).filter(Boolean);
