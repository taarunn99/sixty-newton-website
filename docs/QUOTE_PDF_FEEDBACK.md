# Sixty Newton — Sample Quote PDF Feedback

**File reviewed:** `QT-000241-2.pdf` (provided by Tarun, 20 May 2026)
**Output system:** Looks Zoho Books or similar — standard tabular invoice/quote layout

---

## What I extracted from the document

The PDF gave me 4 useful pieces of operational data + a sense of the
current visual standard. Here's what landed in the codebase:

### Company data (now wired into SITE constants)

| Field | Value from quote | Where it lives now |
|---|---|---|
| Legal name | SIXTYNEWTON TECHNICAL SERVICES L L C | `SITE.legalName` (unchanged — already correct) |
| Address | Al Quoz Industrial Area 4, Street 14, Warehouse No 11 | ⚠ Discrepancy — see below |
| Postal code | 914005 | `SITE.address.postalCode` (newly added) |
| Phone | +971 50 619 4737 | `SITE.phone` (unchanged) |
| TRN | 104670113000003 | `SITE.trn` (newly added) — surfaces on footer + JSON-LD |

### ⚠ Address discrepancy

- **You said (verbally):** Shop 12, 14 Street, Al Quoz Industrial Area 4
- **PDF quote says:** Warehouse No 11, Street 14, Al Quoz Industrial Area 4

Same street, same area, different unit number. **Possibilities:**
1. The PDF quote was generated before you moved units (Warehouse 11 →
   Shop 12)
2. You operate both — Shop 12 is the customer-facing showroom, Warehouse
   11 is the trading/operations unit
3. The PDF has stale data in the Zoho template

**What I did:** kept your verbally-given address ("Shop 12, 14 Street,
Al Quoz Industrial Area 4") in `SITE.address.streetAddress`, with a
code comment noting the PDF discrepancy. If correspondence requires
the legal unit number, verify with finance and update the constant.

### Scope of work language (useful for content)

The quote's line items list 8 service types:

1. Fixing of large-format tile on 12 mm cement board (in sqmt)
2. Making 45-degree corner and polishing (in running mt)
3. Installation of blind revit system with 12 mm cement board (in sqmt)
4. Apply and supply of Kerakoll microtopping (in sqmt)
5. Application of waterproofing with Laticrete product in fountain area
6. Mosaic installation in swimming pool
7. Apply and supply of vinyl flooring
8. Apply and supply of screed, crack repair and bituminous waterproofing

**Observations:**
- "Kerakoll microtopping" — Kerakoll isn't in our brand-applicator list
  (Mapei, Laticrete, AkzoNobel, X-Calibur). Either it's a one-off
  supplier engagement, or we should consider adding Kerakoll to the
  approved-applicator catalogue. Worth a conversation.
- "Blind revit system" — likely a niche assembly; worth knowing in case
  it becomes a discipline.
- The use of "supply and apply" implies you handle both material + labour,
  reinforcing the message we already carry on the site.

### Payment terms (useful for the contact / quote page)

The PDF lists:
- 50% advance
- 40% on completing half the work
- (Implied: 10% on handover)

**Considered:** surfacing these on `/request-a-quote` as a "How we work
financially" box. **Decided against:** publishing payment terms on the
public site reduces negotiating flexibility per tender. Better to keep
them in the quote document only, where they're tailored per project.

---

## Visual / aesthetic feedback on the PDF itself

The current Zoho-style quote does its job — it's clean, readable, and
unambiguous. A few notes if you're considering refining it:

### What works
- Clean tabular layout — no clutter
- TRN, address, phone all visible at the top
- Standard payment-terms block

### What could be sharper (purely cosmetic — not required)
1. **Top-of-page branding** — currently the company name is plain text. A
   small Sixty Newton logo + the gold accent we use on the website would
   instantly read as more premium. Just add the logo SVG to the Zoho
   template header.
2. **Typography** — Zoho's default sans-serif is generic. If you can swap
   the template font to a serif (Garamond, Caslon) it'd feel closer to
   the website's atelier aesthetic.
3. **Item-description column** — the current line items use all-caps
   which reads as shouty. Sentence-case would feel more designed.
4. **Sub-total / total row** — could be visually distinguished with a
   gold underline or border, like the site's accents.
5. **Notes / T&C block** — currently bare text. Could be in a faint
   bordered card with a subtle gold left-bar.

### What I'm NOT proposing
- Don't bring price visibility into the website. The page-level
  positioning ("AED 75–140 / m²" indicative ranges on disciplines) is
  enough public price transparency. Per-project specifics stay in the
  quote PDF.
- Don't auto-generate quotes from the website. The form captures intent
  (Emirate, project type, scope, programme); Salim or the team
  generates a tailored Zoho quote afterwards. Two-step funnel is fine.

---

## My recommendation

**Keep the quote PDF in Zoho.** Two small upgrades I'd suggest:

1. Add the Sixty Newton logo (SVG, the same one used in the navbar) to
   the Zoho template's page header
2. Add a 2-line footer block:
   > **Sixty Newton Technical Services L.L.C.**
   > Trade Licence 1369014 · TRN 104670113000003 · sixtynewton.com

That's the level where the website and the quote document feel like
they belong to the same brand without requiring a custom-built PDF
generator on the website.

If you ever want to issue quotes directly from the site (with the
website's branding), that's a 2-day build: typed form input → server-
side `@react-pdf/renderer` or `puppeteer` → branded quote download.
Skip until you actually need it.

---

## Suggestion (separate idea)

Consider adding a small **"Recent quote"** badge on the website
mentioning that an enquiry typically results in a written, line-itemised
quote inside 48 working hours. Reassures consultants and developers that
the engagement won't be a free-for-all. I haven't built this yet — let
me know if you want it added.

---

**Net:** the PDF is operationally sound. The address discrepancy is the
only thing that warrants a quick check. The visual upgrades are nice-to-
have, not required. The TRN and postal code from this document have
been wired into the website's structured data.
