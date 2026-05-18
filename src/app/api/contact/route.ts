import "server-only";
import { NextResponse } from "next/server";
import dns from "node:dns/promises";
import type { MxRecord } from "node:dns";
import validator from "validator";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { getTransporter, MAIL_FROM, MAIL_TO } from "@/lib/mail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  companyName?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  areaSqm?: number | string | null;
  message?: string;
  consent?: boolean;
  website?: string; // honeypot — must remain empty
  utm?: { source?: string; medium?: string; campaign?: string };
};

const MAX_FIELD = 500;
const MAX_MESSAGE = 5000;

const trim = (s: unknown, max: number): string =>
  typeof s === "string" ? s.trim().slice(0, max) : "";

/** MX-record check with a hard timeout — graceful fallback if DNS hangs. */
async function hasMx(domain: string, timeoutMs = 3000): Promise<boolean> {
  try {
    const recs = await Promise.race<MxRecord[] | undefined>([
      dns.resolveMx(domain),
      new Promise<undefined>(resolve => setTimeout(() => resolve(undefined), timeoutMs)),
    ]);
    if (!recs) return true; // timed out — accept rather than reject
    return recs.length > 0;
  } catch {
    return true; // resolver error — accept
  }
}

export async function POST(req: Request) {
  // 1. Parse
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  // 2. Honeypot — silently succeed without sending, after a tiny delay
  if (body.website && body.website.trim() !== "") {
    await new Promise(r => setTimeout(r, 250));
    return NextResponse.json({ ok: true });
  }

  // 3. Rate-limit
  const ip = clientIp(req.headers);
  const rl = rateLimit(ip);
  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again in an hour." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSeconds) } },
    );
  }

  // 4. Sanitise
  const companyName = trim(body.companyName, MAX_FIELD);
  const fullName    = trim(body.fullName, MAX_FIELD);
  const email       = trim(body.email, MAX_FIELD).toLowerCase();
  const phoneRaw    = trim(body.phone, MAX_FIELD);
  const service     = trim(body.service, MAX_FIELD);
  const message     = trim(body.message, MAX_MESSAGE);
  const consent     = body.consent === true;
  const areaSqmRaw  = typeof body.areaSqm === "number" ? body.areaSqm
                    : typeof body.areaSqm === "string" ? Number(body.areaSqm)
                    : null;
  const areaSqm = areaSqmRaw != null && Number.isFinite(areaSqmRaw) && areaSqmRaw > 0
    ? Math.round(areaSqmRaw)
    : null;

  // 5. Validate required fields — at least one of (companyName, fullName)
  if (!companyName && !fullName) {
    return bad("Please enter your company name or your full name.");
  }
  if (!email || !validator.isEmail(email)) return bad("Please enter a valid email address.");
  if (!phoneRaw) return bad("Please enter your phone number.");
  if (!consent)  return bad("Please accept the privacy notice to continue.");

  // 6. Phone — normalise to E.164 with UAE as default region
  const country = (req.headers.get("cf-ipcountry") || req.headers.get("x-vercel-ip-country") || "AE").toUpperCase();
  const parsed = parsePhoneNumberFromString(phoneRaw, country as "AE");
  if (!parsed || !parsed.isValid()) {
    return bad("Please enter a valid phone number (with country code if outside the UAE).");
  }
  const phoneE164 = parsed.number;

  // 7. MX check (graceful)
  const domain = email.split("@")[1];
  if (domain && !(await hasMx(domain))) {
    return bad("That email domain doesn't appear to receive mail. Please double-check.");
  }

  // 8. Send
  try {
    const transporter = getTransporter();
    const subjectLabel = fullName || companyName;
    const subjectCompany = companyName ? ` — ${companyName}` : "";
    const subject = `New enquiry from ${subjectLabel}${subjectCompany}`;
    const text = [
      "New enquiry submitted from the Sixty Newton website.",
      "",
      `Company:     ${companyName || "(not provided)"}`,
      `Name:        ${fullName || "(not provided)"}`,
      `Email:       ${email}`,
      `Phone:       ${phoneE164}`,
      `Service:     ${service || "(not specified)"}`,
      `Area (sqm):  ${areaSqm != null ? areaSqm : "(not specified)"}`,
      "",
      "Message:",
      message || "(none)",
      "",
      "—",
      `IP:          ${ip}`,
      `User-Agent:  ${req.headers.get("user-agent") || "(unknown)"}`,
      body.utm?.source ? `UTM source:   ${body.utm.source}` : null,
      body.utm?.medium ? `UTM medium:   ${body.utm.medium}` : null,
      body.utm?.campaign ? `UTM campaign: ${body.utm.campaign}` : null,
    ].filter(Boolean).join("\n");

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] mail send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Mail service unavailable. Please WhatsApp us instead." },
      { status: 500 },
    );
  }
}

function bad(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}
