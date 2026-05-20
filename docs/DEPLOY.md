# Sixty Newton — Deployment & DNS Handover

This is the runbook for taking the site from `localhost:3000` to a live
`https://sixtynewton.com` on Vercel. Order matters. Skip nothing.

> **Location:** `docs/DEPLOY.md`
> **Last reviewed:** Phase 4 launch prep

---

## 1 · Push the latest code

Confirm the GitHub `main` branch has the latest commit and a clean
production build:

```bash
git status                  # working tree clean
npm run typecheck           # no errors
npm run build               # all 230+ routes prerender
git push origin main
```

---

## 2 · Connect the repo to Vercel

1. Sign in at [vercel.com](https://vercel.com) (use the Lapiz / Sixty Newton account, not a personal one).
2. **Add New → Project** → pick the GitHub org → `taarunn99/sixty-newton-website`.
3. Vercel will auto-detect Next.js. Keep the defaults:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
   - **Node version:** 20.x (Vercel default)
4. **Production branch:** `main`. **Preview branches:** all other branches.
5. Don't click Deploy yet — env vars first.

---

## 3 · Add environment variables

In the Vercel project Settings → Environment Variables, add the following.
Mark each one for Production + Preview (Preview gets blocked from indexing
by our `robots.ts`, so it's safe to use the same values).

### Required for form submissions

```
SMTP_HOST=                # e.g. smtp.gmail.com / smtp.zoho.com
SMTP_PORT=465             # 587 for STARTTLS, 465 for implicit SSL
SMTP_SECURE=true          # "true" for port 465, "false" for 587
SMTP_USER=                # the SMTP login
SMTP_PASSWORD=            # the SMTP password (or app password)
MAIL_FROM="Sixty Newton Website <noreply@60newton.com>"
MAIL_TO=salim@60newton.com   # OR info@60newton.com — your choice
```

> If using Gmail or Google Workspace, you'll need to create an **App
> Password** (Settings → Security → 2-step verification → App passwords).
> Don't paste your personal password.
> For Zoho Mail, use `smtp.zoho.com` port 465 with the user's full
> address as username.

### Required for the canonical URL

```
NEXT_PUBLIC_SITE_URL=https://sixtynewton.com
```

### Optional — analytics (can be empty for first launch)

```
NEXT_PUBLIC_GTM_ID=         # Google Tag Manager container ID
NEXT_PUBLIC_GA4_ID=         # Google Analytics 4 measurement ID
NEXT_PUBLIC_META_PIXEL_ID=  # Meta / Facebook pixel ID
```

### Optional — Meta Conversion API (server-side)

```
META_CAPI_TOKEN=
META_CAPI_PIXEL_ID=
```

### Optional — Cloudflare Turnstile (CAPTCHA — currently not wired into the form)

```
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

Hit **Save** — Vercel will require a redeploy for the env vars to take
effect.

---

## 4 · First deploy

Click **Deploy** on the project page. Build takes 2–4 minutes (230+ routes
to prerender).

You should see:
- Build succeeded
- Deployment URL like `sixty-newton-website-xxxxx.vercel.app`
- Open the URL and click around — the home, /disciplines, /portfolio,
  /about and /approach should all render. Sample area page:
  `/disciplines/waterproofing/dubai-marina`.

If the build fails, check the Build Logs in Vercel. Most likely cause is a
missing env var that the code reads at build time — fix and redeploy.

---

## 5 · Attach the production domain

1. In Vercel project → **Settings → Domains**.
2. Click **Add** → enter `sixtynewton.com`.
3. Vercel will show you the DNS records to add. Two patterns depending on
   where your domain currently lives:

### Option A — Domain is at a registrar with DNS (recommended)

Add these records at your registrar (GoDaddy, Namecheap, Google Domains,
Cloudflare, etc.):

```
Type: A
Name: @ (apex)
Value: 76.76.21.21              # Vercel's apex IP

Type: CNAME
Name: www
Value: cname.vercel-dns.com.
```

Then in Vercel, also add the `www.sixtynewton.com` domain → it'll prompt
you to set a redirect from `www` → apex (or apex → www, your choice).
Either is fine; the apex is more common for clean URLs.

### Option B — Move DNS to Vercel

In Vercel domain settings, you can transfer DNS to Vercel's nameservers.
This is faster but you lose the ability to manage DNS at your registrar.
Not generally recommended unless you have no email / no other DNS records
to manage.

### DNS propagation

After updating DNS, Vercel will probe the records. Status moves from
**Pending → Valid Configuration → Production**. Can take 5 minutes to 48
hours depending on your TTL settings.

Once status is green, Vercel auto-provisions an SSL certificate via
Let's Encrypt. No action needed — HTTPS is automatic.

---

## 6 · Post-launch verification (the day-0 checklist)

In order:

1. **Visit `https://sixtynewton.com`** → home page renders.
2. **Test the contact form** — submit a real enquiry, confirm the email
   arrives at `MAIL_TO`. If it doesn't, re-check SMTP env vars and review
   Vercel Function Logs for the `/api/contact` route.
3. **Test mobile** — open on an iPhone and an Android. Confirm the
   StickyCTAMobile bar appears past 55% scroll, the navbar transitions on
   scroll, and the floating WhatsApp button is tappable above the safe-area
   inset.
4. **Test the WhatsApp link** — click the floating button + the home-page
   enquiry rail. Confirm WhatsApp opens with the pre-filled message.
5. **Test a few area pages** — `/disciplines/waterproofing/dubai-marina`,
   `/disciplines/microtopping/palm-jumeirah`. Confirm unique title + meta
   description (View Source).
6. **Test a case study** — `/portfolio/atlantis-the-royal`. Confirm
   breadcrumb + cross-links resolve.
7. **Submit to Google Search Console:**
   - Open [search.google.com/search-console](https://search.google.com/search-console)
   - Add property `https://sixtynewton.com`
   - Verify via DNS TXT record (Vercel can host the record) or HTML file
   - Once verified, submit `https://sixtynewton.com/sitemap.xml`
8. **Submit to Bing Webmaster Tools** — same process at
   [bing.com/webmasters](https://www.bing.com/webmasters).
9. **Set up Google Business Profile** — claim the Sixty Newton listing
   (Al Quoz, Dubai), add all 14 disciplines, link to `sixtynewton.com`,
   add the landline + WhatsApp. This drives local-pack visibility.
10. **Test JSON-LD** — paste a few URLs into Google's
    [Rich Results Test](https://search.google.com/test/rich-results) —
    confirm Service, Organization, BreadcrumbList and FAQPage schemas
    validate.

---

## 7 · Ongoing care

- **Every push to `main`** auto-deploys to production. Every push to any
  other branch produces a preview URL.
- **Preview deploys are noindex** by default (`robots.ts` blocks crawl).
- **Logs:** Vercel project → Logs tab. The `/api/contact` route lives at
  the bottom — useful for debugging form failures.
- **Analytics:** if you've set GTM / GA4 IDs, real-time traffic appears
  in those dashboards immediately.

---

## 8 · Rollback (in case something breaks)

In Vercel → Deployments tab, find the previous successful deployment →
click the `⋯` menu → **Promote to Production**. Live in <60 seconds.
Zero code changes required.

---

## 9 · Things that need finishing post-launch

Photos remain placeholders per the user's direction. Once real photography
is shot:

1. Drop the source JPGs into a folder
2. Run the existing scripts (`image:visit`, `image:debg`, `images:seed`)
   or extend with a batch script per the convention in
   `docs/IMAGES_CHECKLIST.md`
3. Commit + push — Vercel redeploys automatically

That's the whole pipeline.
