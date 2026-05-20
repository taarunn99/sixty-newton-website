"use client";
import { useEffect, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DISCIPLINES, SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

type SubmitStatus = "idle" | "sending" | "sent" | "error";

type FieldName =
  | "companyName"
  | "fullName"
  | "identity"   // composite: at least one of (companyName, fullName) required
  | "email"
  | "phone"
  | "service"
  | "emirate"
  | "timeline"
  | "areaSqm"
  | "message"
  | "consent";

const TIMELINES = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "3+ months",
  "Not sure yet",
] as const;

/**
 * Quote / contact enquiry form.
 *
 * Pattern mirrored from lapizblue.com — useState, no react-hook-form;
 * inline per-field errors after blur; submit button disabled until valid;
 * honeypot field `website` is hidden but rendered for bots; on success →
 * dataLayer push + toast + redirect to /thank-you after 1.5s.
 *
 * Pre-fills `service` from the `?service=<title>` URL query parameter
 * (set by DualCTA when the user lands here from a service page).
 */
export function QuoteForm() {
  const router = useRouter();
  const search = useSearchParams();

  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [emirate, setEmirate] = useState("");
  const [timeline, setTimeline] = useState("");
  const [areaSqm, setAreaSqm] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Pre-fill service from URL on mount (lands here from a service-page CTA)
  useEffect(() => {
    const qService = search.get("service");
    if (!qService) return;
    const match = DISCIPLINES.find(
      d => d.title.toLowerCase() === qService.toLowerCase() ||
           d.slug === qService.toLowerCase(),
    );
    setService(match ? match.title : qService);
  }, [search]);

  const markTouched = (k: FieldName) => setTouched(t => ({ ...t, [k]: true }));

  const errors: Partial<Record<FieldName, string>> = {};
  if (!companyName.trim() && !fullName.trim()) {
    errors.identity = "Please enter your company name or your full name.";
  }
  if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) errors.email = "Please enter a valid email.";
  if (!phone.trim())   errors.phone   = "Please enter your phone number.";
  if (!consent)        errors.consent = "Please accept the privacy notice.";

  const isValid = Object.keys(errors).length === 0;

  const showError = (field: FieldName) => touched[field] && errors[field];

  const showIdentityError =
    (touched.companyName || touched.fullName) && errors.identity;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid || submitting) {
      setTouched({
        companyName: true, fullName: true, identity: true,
        email: true, phone: true, service: true, emirate: true,
        timeline: true, areaSqm: true, message: true, consent: true,
      });
      return;
    }
    setSubmitting(true);
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: companyName.trim(),
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          service: service.trim(),
          emirate: emirate.trim(),
          timeline: timeline.trim(),
          areaSqm: areaSqm.trim() ? Number(areaSqm) : null,
          message: message.trim(),
          consent,
          website, // honeypot
        }),
      });

      let data: { ok?: boolean; error?: string } = {};
      try {
        data = await res.json();
      } catch {
        // Non-JSON response — treat as server error
      }

      if (!res.ok || !data.ok) {
        const errMsg = data?.error || "Could not send the enquiry. Please try again or WhatsApp us.";
        setStatus("error");
        setErrorMessage(errMsg);
        toast.error(errMsg);
        return;
      }

      // Success — analytics + cleanup + redirect to /thank-you
      setStatus("sent");

      if (typeof window !== "undefined") {
        const w = window as Window & { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "form_submission",
          form_name: "request_a_quote",
          form_id: "sixty-newton-quote",
        });
      }

      setCompanyName(""); setFullName(""); setEmail(""); setPhone("");
      setService(""); setEmirate(""); setTimeline(""); setAreaSqm("");
      setMessage(""); setConsent(false);
      setTouched({});

      // Pause briefly so the user sees "Sent" before navigating
      setTimeout(() => router.push("/thank-you"), 1400);
    } catch (err) {
      console.error("[contact] submit failed:", err);
      const errMsg = "Network error. Please try again or WhatsApp us.";
      setStatus("error");
      setErrorMessage(errMsg);
      toast.error(errMsg);
    } finally {
      setSubmitting(false);
    }
  }

  const isLocked = status === "sending" || status === "sent";

  return (
    <form
      id="sixty-newton-quote"
      onSubmit={onSubmit}
      noValidate
      className={cn(
        "grid gap-5 transition-opacity duration-200",
        isLocked && "opacity-90 pointer-events-none",
      )}
      aria-busy={isLocked}
    >
      {/* Company OR Name row */}
      <div>
        <p className="eyebrow text-fg-subtle mb-3">
          Who&rsquo;s asking? <span className="text-gold/70">*</span>{" "}
          <span className="normal-case tracking-normal text-[10px] text-fg-subtle">
            (company name or full name — either is fine)
          </span>
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Company name"
            value={companyName}
            onChange={setCompanyName}
            onBlur={() => markTouched("companyName")}
            autoComplete="organization"
          />
          <Field
            label="Full name"
            value={fullName}
            onChange={setFullName}
            onBlur={() => markTouched("fullName")}
            autoComplete="name"
          />
        </div>
        {showIdentityError && (
          <p className="mt-2 text-xs text-red-400/90">{errors.identity}</p>
        )}
      </div>

      {/* Email + Phone */}
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          type="email"
          label="Email"
          required
          value={email}
          onChange={setEmail}
          onBlur={() => markTouched("email")}
          error={showError("email") ? errors.email : undefined}
          autoComplete="email"
        />
        <Field
          type="tel"
          label="Phone"
          required
          value={phone}
          onChange={setPhone}
          onBlur={() => markTouched("phone")}
          error={showError("phone") ? errors.phone : undefined}
          autoComplete="tel"
          placeholder="+971 50 …"
        />
      </div>

      {/* Service + Area */}
      <div className="grid gap-5 md:grid-cols-2">
        <SelectField
          label="Discipline of interest"
          value={service}
          onChange={setService}
          onBlur={() => markTouched("service")}
        >
          <option value="" className="bg-bg-elevated text-white">— optional —</option>
          {DISCIPLINES.map(d => (
            <option key={d.slug} value={d.title} className="bg-bg-elevated text-white">{d.title}</option>
          ))}
          <option value="Multiple / not sure" className="bg-bg-elevated text-white">Multiple / not sure</option>
        </SelectField>
        <Field
          type="number"
          label="Area (sqm)"
          value={areaSqm}
          onChange={setAreaSqm}
          onBlur={() => markTouched("areaSqm")}
          placeholder="optional"
          inputMode="numeric"
          min={0}
        />
      </div>

      {/* Emirate + Timeline */}
      <div className="grid gap-5 md:grid-cols-2">
        <SelectField
          label="Project Emirate"
          value={emirate}
          onChange={setEmirate}
          onBlur={() => markTouched("emirate")}
        >
          <option value="" className="bg-bg-elevated text-white">— optional —</option>
          {SITE.serviceAreas.map(em => (
            <option key={em} value={em} className="bg-bg-elevated text-white">{em}</option>
          ))}
          <option value="Outside UAE" className="bg-bg-elevated text-white">Outside UAE</option>
        </SelectField>
        <SelectField
          label="Programme"
          value={timeline}
          onChange={setTimeline}
          onBlur={() => markTouched("timeline")}
        >
          <option value="" className="bg-bg-elevated text-white">— optional —</option>
          {TIMELINES.map(t => (
            <option key={t} value={t} className="bg-bg-elevated text-white">{t}</option>
          ))}
        </SelectField>
      </div>

      {/* Message */}
      <div>
        <label className="block">
          <span className="eyebrow text-fg-subtle">Project brief</span>
          <textarea
            rows={6}
            value={message}
            onChange={e => setMessage(e.target.value)}
            onBlur={() => markTouched("message")}
            className="mt-2 w-full bg-transparent border-b border-border focus:border-gold text-white py-2.5 px-0 outline-none transition-colors duration-200 font-normal resize-none"
            placeholder="Optional — scope, location, drawings available, budget range… Email drawings / BOQ to salim@60newton.com if helpful."
          />
        </label>
      </div>

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label>
          Don&rsquo;t fill this out
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={e => setWebsite(e.target.value)}
          />
        </label>
      </div>

      {/* Consent + Submit + Status indicator */}
      <div className="mt-2 flex flex-col gap-5">
        <label className="flex items-start gap-3 text-sm text-fg-muted">
          <input
            type="checkbox"
            checked={consent}
            onChange={e => setConsent(e.target.checked)}
            onBlur={() => markTouched("consent")}
            className="mt-1 h-4 w-4 accent-gold"
          />
          <span>
            I agree to be contacted about my enquiry. I&rsquo;ve read the{" "}
            <a href="/legal/privacy" className="text-gold hover:text-gold-hover transition-colors underline underline-offset-2">privacy policy</a>.
          </span>
        </label>

        {/* Inline status — visible above the submit button */}
        {status !== "idle" && (
          <div
            role={status === "error" ? "alert" : "status"}
            aria-live="polite"
            className={cn(
              "flex items-center gap-3 rounded-md border px-4 py-3 text-sm",
              status === "sending" && "border-gold/40 bg-gold/5 text-fg",
              status === "sent" && "border-gold/60 bg-gold/10 text-fg",
              status === "error" && "border-red-400/50 bg-red-500/5 text-red-200",
            )}
          >
            {status === "sending" && (
              <>
                <Loader2 size={16} aria-hidden className="text-gold animate-spin shrink-0" />
                <span>Sending your enquiry…</span>
              </>
            )}
            {status === "sent" && (
              <>
                <CheckCircle2 size={16} aria-hidden className="text-gold shrink-0" />
                <span>
                  Enquiry sent — redirecting you to the confirmation page…
                </span>
              </>
            )}
            {status === "error" && (
              <>
                <AlertCircle size={16} aria-hidden className="text-red-300 shrink-0" />
                <span>{errorMessage}</span>
              </>
            )}
          </div>
        )}

        <div>
          <Button
            type="submit"
            size="lg"
            disabled={!isValid || submitting || status === "sent"}
            className="w-full sm:w-auto"
          >
            {status === "sending" && (
              <Loader2 size={14} aria-hidden className="mr-1 animate-spin" />
            )}
            {status === "sent" && (
              <CheckCircle2 size={14} aria-hidden className="mr-1" />
            )}
            {status === "sending"
              ? "Sending…"
              : status === "sent"
                ? "Sent"
                : "Send enquiry"}
            {status === "idle" && <ArrowRight size={14} className="ml-1" />}
          </Button>
        </div>
      </div>
    </form>
  );
}

// ─── Small primitives ───

type FieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  required?: boolean;
  error?: string;
  type?: "text" | "email" | "tel" | "number";
  autoComplete?: string;
  placeholder?: string;
  inputMode?: "text" | "email" | "tel" | "numeric";
  min?: number;
};

function Field(props: FieldProps) {
  const { label, value, onChange, onBlur, required, error, type = "text",
          autoComplete, placeholder, inputMode, min } = props;
  return (
    <div>
      <label className="block">
        <span className="eyebrow text-fg-subtle">
          {label}{required && <span className="text-gold/70"> *</span>}
        </span>
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          onBlur={onBlur}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          inputMode={inputMode}
          min={min}
          aria-invalid={!!error}
          className={cn(
            "mt-2 w-full bg-transparent border-b focus:border-gold text-white py-2.5 px-0 outline-none transition-colors duration-200 font-normal placeholder:text-fg-muted/80",
            error ? "border-red-400/70" : "border-border",
          )}
        />
      </label>
      {error && <p className="mt-1 text-xs text-red-400/90">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  onBlur,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block">
        <span className="eyebrow text-fg-subtle">{label}</span>
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          onBlur={onBlur}
          className="mt-2 w-full bg-transparent border-b border-border focus:border-gold text-white py-2.5 px-0 outline-none transition-colors duration-200 font-normal"
        >
          {children}
        </select>
      </label>
    </div>
  );
}
