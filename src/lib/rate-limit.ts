import "server-only";

/**
 * Simple in-memory rate limiter — IP → recent timestamps.
 *
 * Good enough for a low-volume marketing-site contact form. If we ever go
 * multi-region or serverless cold-start heavy, swap this for an Upstash KV
 * sliding-window implementation.
 */
type Bucket = { count: number; resetAt: number };

const store = new Map<string, Bucket>();
const MAX = 10;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

export type RateLimitResult =
  | { ok: true }
  | { ok: false; retryAfterSeconds: number };

export function rateLimit(key: string): RateLimitResult {
  const now = Date.now();
  const bucket = store.get(key);

  if (!bucket || bucket.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true };
  }

  if (bucket.count >= MAX) {
    return {
      ok: false,
      retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }

  bucket.count += 1;
  return { ok: true };
}

/** Read the client IP from common reverse-proxy headers (Vercel-friendly). */
export function clientIp(headers: Headers): string {
  return (
    headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    headers.get("x-real-ip") ||
    headers.get("cf-connecting-ip") ||
    "0.0.0.0"
  );
}
