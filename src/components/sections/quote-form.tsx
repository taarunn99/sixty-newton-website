"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DISCIPLINES } from "@/constants/site";
import { cn } from "@/lib/utils";

type FieldName =
  | "companyName"
  | "fullName"
  | "email"
  | "phone"
  | "service"
  | "areaSqm"
  | "message"
  | "consent";

/**
 * Quote / contact enquiry form.
 *
 * Pattern mirrored from lapizblue.com — useState, no react-hook-form;
 * inline per-field errors after blur; submit button disabled until valid;
 * honeypot field `website` is hidden but rendered for bots; on success →
 * dataLayer push + toast + redirect to /thank-you after 1.5s.
 */
export function QuoteForm() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [areaSqm, setAreaSqm] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot
  const [touched, setTouched] = useState<Record<FieldName, boolean>>({} as Record<FieldName, boolean>);
  const [submitting, setSubmitting] = useState(false);

  const markTouched = (k: FieldName) => setTouched(t => ({ ...t, [k]: true }));

  const errors: Partial<Record<FieldName, string>> = {};
  if (!companyName.trim()) errors.companyName = "Please enter your company name.";
  if (!fullName.trim())    errors.fullName    = "Please enter your full name.";
  if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) errors.email = "Please enter a valid email.";
  if (!phone.trim())       errors.phone       = "Please enter your phone number.";
  if (message.trim().length < 20) errors.message = "Please give us a bit more detail (min 20 characters).";
  if (!consent)            errors.consent     = "Please accept the privacy notice.";

  const isValid = Object.keys(errors).length === 0;

  const showError = (field: FieldName) => touched[field] && errors[field];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid || submitting) {
      // touch everything so errors surface
      setTouched({
        companyName: true, fullName: true, email: true, phone: true,
        service: true, areaSqm: true, message: true, consent: true,
      });
      return;
    }
    setSubmitting(true);
    const toastId = toast.loading("Sending your enquiry…");
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
          areaSqm: areaSqm.trim() ? Number(areaSqm) : null,
          message: message.trim(),
          consent,
          website, // honeypot
        }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        toast.error(data?.error || "Could not send the enquiry. Please try again.", { id: toastId });
        return;
      }

      // Success
      toast.success("Thank you — your enquiry is with us.", { id: toastId });

      // GTM dataLayer event for conversion tracking
      if (typeof window !== "undefined") {
        const w = window as Window & { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "form_submission",
          form_name: "request_a_quote",
          form_id: "sixty-newton-quote",
        });
      }

      // Clear + bounce to /thank-you
      setCompanyName(""); setFullName(""); setEmail(""); setPhone("");
      setService(""); setAreaSqm(""); setMessage(""); setConsent(false);
      setTouched({} as Record<FieldName, boolean>);

      setTimeout(() => router.push("/thank-you"), 1500);
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again or WhatsApp us.", { id: toastId });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      id="sixty-newton-quote"
      onSubmit={onSubmit}
      noValidate
      className="grid gap-5"
    >
      {/* Company + Name row */}
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Company name"
          required
          value={companyName}
          onChange={setCompanyName}
          onBlur={() => markTouched("companyName")}
          error={showError("companyName") ? errors.companyName : undefined}
          autoComplete="organization"
        />
        <Field
          label="Full name"
          required
          value={fullName}
          onChange={setFullName}
          onBlur={() => markTouched("fullName")}
          error={showError("fullName") ? errors.fullName : undefined}
          autoComplete="name"
        />
      </div>

      {/* Email + Phone row */}
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

      {/* Service + Area row */}
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="block">
            <span className="eyebrow text-fg-subtle">Service of interest</span>
            <select
              value={service}
              onChange={e => setService(e.target.value)}
              onBlur={() => markTouched("service")}
              className="mt-2 w-full bg-transparent border-b border-border focus:border-gold text-fg py-2.5 px-0 outline-none transition-colors duration-200 font-light"
            >
              <option value="" className="bg-bg-elevated">— optional —</option>
              {DISCIPLINES.map(d => (
                <option key={d.slug} value={d.title} className="bg-bg-elevated">{d.title}</option>
              ))}
              <option value="Multiple / not sure" className="bg-bg-elevated">Multiple / not sure</option>
            </select>
          </label>
        </div>
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

      {/* Message */}
      <div>
        <label className="block">
          <span className="eyebrow text-fg-subtle">Project brief <span className="text-gold/70">*</span></span>
          <textarea
            rows={6}
            value={message}
            onChange={e => setMessage(e.target.value)}
            onBlur={() => markTouched("message")}
            className={cn(
              "mt-2 w-full bg-transparent border-b focus:border-gold text-fg py-2.5 px-0 outline-none transition-colors duration-200 font-light resize-none",
              showError("message") ? "border-red-400/70" : "border-border",
            )}
            placeholder="Scope, location, timeline, budget range…"
          />
        </label>
        {showError("message") && (
          <p className="mt-1 text-xs text-red-400/90">{errors.message}</p>
        )}
      </div>

      {/* Honeypot — bots fill this, real users never see it */}
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

      {/* Consent + Submit */}
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

        <div>
          <Button
            type="submit"
            size="lg"
            disabled={!isValid || submitting}
            className="w-full sm:w-auto"
          >
            {submitting ? "Sending…" : "Send enquiry"}
            <ArrowRight size={14} className="ml-1" />
          </Button>
        </div>
      </div>
    </form>
  );
}

// ─── Small input primitive ───
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
            "mt-2 w-full bg-transparent border-b focus:border-gold text-fg py-2.5 px-0 outline-none transition-colors duration-200 font-light placeholder:text-fg-subtle/60",
            error ? "border-red-400/70" : "border-border",
          )}
        />
      </label>
      {error && <p className="mt-1 text-xs text-red-400/90">{error}</p>}
    </div>
  );
}
