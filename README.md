# Ramp Ability — Lead-Gen Landing Page

A fast, animated, WCAG-AA single landing page for **Ramp Ability**, the Hunter
Region's access-ramp specialists (residential · commercial · aged care). The
page has one job: get the visitor to **request a free quote** — via the form or
a phone call.

Live domain: **[hunterramps.au](https://hunterramps.au)**

---

## Stack

- **[Astro](https://astro.build)** — islands architecture, ships minimal JS, static output.
- **[Tailwind CSS](https://tailwindcss.com)** (v3) — brand tokens configured in `tailwind.config.mjs`.
- **[GSAP](https://gsap.com) + ScrollTrigger** — hero entrance, scroll reveals, count-ups, ramp-motif draw-in.
- **Vanilla TypeScript** — lead-form validation/submit, reviews carousel, conversion tracking.
- Self-hosted variable fonts (**Sora** for display, **Inter** for body) via `@fontsource-variable`.

## Run & build

```bash
npm install        # install dependencies
npm run dev        # local dev server  → http://localhost:4321
npm run build      # production build   → ./dist
npm run preview    # preview the built ./dist locally
```

The build is fully static (`./dist`) — deployable to any static host.

---

## ⚙️ Configuration — where to set everything

**Almost all client-supplied values live in one file: [`src/config.ts`](src/config.ts).**
Anything marked `[[ PLACEHOLDER ]]` must be confirmed by the client before launch.

| What | Where | Notes |
|---|---|---|
| **Phone number** (click-to-call) | `src/config.ts` → `CONTACT.phone` | `display` is shown; `tel` is the raw `tel:` value (e.g. `+61240000000`). |
| **Email** | `src/config.ts` → `CONTACT.email` | |
| **CRM webhook** (lead destination) | `src/config.ts` → `CRM_WEBHOOK_URL` | Pipeline Partners / GoHighLevel webhook or form endpoint. While left as the placeholder, the form runs in **demo mode** (validates + shows success, no network call). |
| **CRM iframe embed** (alternative) | `src/config.ts` → `CRM_IFRAME_EMBED` | Paste a full GHL `<iframe>…</iframe>`. When set, the hero card renders the embed instead of the native form. |
| **GTM container** | `src/config.ts` → `GTM_CONTAINER_ID` | e.g. `GTM-XXXXXXX`. Blank = GTM disabled. |
| **Meta Pixel** | `src/config.ts` → `META_PIXEL_ID` | Blank = Pixel disabled. |
| **Stats / counters** | `src/config.ts` → `STATS`, `COUNTERS` | ⚠️ Real figures only — these are advertising claims. |
| **Service-area suburbs** | `src/config.ts` → `SERVICE_AREA` | Used in copy, footer & LocalBusiness schema. |
| **ABN / licence** | `src/config.ts` → `LEGAL` | |
| **Compliance claims** | `src/config.ts` → `COMPLIANCE_CLAIMS` | ⚠️ Only claims the client can substantiate (AS 1428, NDIS/aged-care registration, etc.). |
| **SEO title/description/keywords** | `src/config.ts` → `SEO` | |
| **Google reviews** | `src/data/reviews.json` | ⚠️ Replace placeholders with **verbatim** Google reviews, or wire to the Google Places / Business Profile API. Never fabricate. |
| **Production domain** | `astro.config.mjs` → `site` | Drives canonical URLs & Open Graph. |
| **Logo** | `public/ramp-ability-logo.svg` | Placeholder built from the ramp motif. Swap for the supplied `ramp-ability-logo.png`. |
| **OG share image** | `public/og-image.png` | 1200×630. See `public/og-image.README.txt`. |
| **Favicon** | `public/favicon.svg` | Derived from the ramp motif. |

> **Do not fabricate** review text, statistics, ratings, licences, or
> compliance/registration claims. These must come from the client verbatim.

---

## Page structure

`src/pages/index.astro` composes these components (`src/components/`):

1. `Header` — sticky, transparent over hero, solidifies on scroll, click-to-call + quote button.
2. `Hero` — benefit-led headline, trust ticks, animated ramp motif + the **lead form**.
3. `TrustBar` — rating, ramps installed, licensed/insured, local team.
4. `Services` — Residential · Commercial · Aged Care.
5. `WhyChoose` — value props.
6. `HowItWorks` — 3 steps connected by the ramp line.
7. `Stats` — animated count-up.
8. `Reviews` — auto-sliding, swipeable, accessible carousel.
9. `FinalCTA` — teal band, repeated offer.
10. `Footer` — service area, contact, ABN/licence.
11. `MobileActionBar` — fixed bottom **Call Now / Free Quote** bar (mobile only).

Client logic: `src/scripts/` — `animations.ts`, `form.ts`, `reviews.ts`, `tracking.ts`.

---

## Lead form & tracking

- Native, on-brand form: name, phone (AU-validated), suburb/postcode, service
  type, optional message. Honeypot anti-spam, client-side validation, loading
  & success states, graceful error handling.
- On submit it POSTs JSON to `CRM_WEBHOOK_URL`. On success it shows an inline
  success state (no redirect).
- Conversion events fire on **successful submit** (`generate_lead`) and on
  **click-to-call** (`click_to_call`) → pushed to the GTM `dataLayer` and Meta
  Pixel (when IDs are configured). See `src/scripts/tracking.ts`.

---

## Accessibility & performance

- WCAG 2.1 AA target: semantic landmarks, labelled form fields, visible focus
  states, keyboard-reachable & announced carousel, alt text, ≥44px tap targets.
- `prefers-reduced-motion` fully respected (animations disabled).
- Transform/opacity-only animations (60fps). Self-hosted fonts, minimal JS,
  compressed/inlined CSS. Aim for Lighthouse ≥95.

---

## Deployment

Static build → host the `./dist` folder anywhere. The `public/_redirects` and
`public/_headers` files configure Netlify/Cloudflare Pages.

### Cloudflare Pages
1. Connect the repo. **Build command:** `npm run build`. **Output dir:** `dist`.
2. Add custom domain **hunterramps.au** in *Pages → Custom domains* (Cloudflare
   manages DNS automatically if the zone is on Cloudflare).

### Netlify
1. New site from Git. **Build:** `npm run build`. **Publish:** `dist`.
2. *Domain settings* → add **hunterramps.au** → point DNS (A/ALIAS or Netlify DNS).
3. `_redirects` / `_headers` are picked up automatically from `public/`.

### Vercel
1. Import the repo (Astro auto-detected). **Output:** `dist`.
2. *Settings → Domains* → add **hunterramps.au** and follow the DNS steps.
3. Headers/redirects: add a `vercel.json` if you need the `_headers`/`_redirects`
   rules on Vercel (it doesn't read those files natively).

### Post-deploy checklist
- [ ] Confirm `site` in `astro.config.mjs` = `https://hunterramps.au`.
- [ ] Swap in the real logo, OG image, phone, email, ABN/licence.
- [ ] Set `CRM_WEBHOOK_URL` (or `CRM_IFRAME_EMBED`) and test a real lead.
- [ ] Add real Google reviews and confirmed stats/compliance claims.
- [ ] Set `GTM_CONTAINER_ID` / `META_PIXEL_ID` and verify events fire.
- [ ] Run Lighthouse; confirm assets resolve from the custom domain.
