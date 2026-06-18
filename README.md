# Ramp Ability — Lead-Gen Landing Pages

A fast, animated, WCAG-AA set of landing pages for **Ramp Ability**, Newcastle &
the Hunter's recycled-rubber access-ramp specialists (residential · aged care ·
commercial · NDIS). Every page has one job: get the visitor to **request a free
quote** — via the form or a phone call.

Live domain: **[newcastleramps.au](https://newcastleramps.au)** (all Google Ads
land here; `hunterramps.au` redirects to it).

> **Current site = `public/index.html`.** The live landing page is a single,
> self-contained static HTML file (orange / ink / paper theme) served verbatim
> from `public/`. It includes the GoHighLevel form embed, real testimonials,
> and `LocalBusiness` + `FAQPage` structured data in the head. `npm run build`
> (Astro) simply copies `public/` to `dist/` and emits the branded `404`.
>
> The `src/` Astro components below (Hero, FAQ, etc., teal theme) are the
> earlier multi-page version, kept for reference. They are **not** part of the
> current build — only `public/index.html` and `src/pages/404.astro` are.

### Coverage
Newcastle · the Hunter · Central Coast · Greater Sydney. Click-to-call is
**0468 170 347**; enquiries route to the GoHighLevel "Ramp Enquiries" form.

<details>
<summary>Earlier multi-page (Astro) version — reference only</summary>

The repo previously built four message-matched Astro pages (home, `/ndis`,
`/aged-care`, `/rubber-ramps`) for Google Ads ad groups. Those page files were
removed when the single-page design replaced them; the components remain in
`src/components` if you ever want to rebuild that structure.
</details>

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

Each page (`src/pages/*.astro`) composes shared components (`src/components/`).
The `Hero` is props-driven so every page is message-matched; `ClientBoot`
wires up the scripts once per page.

- `Header` — sticky, transparent over hero, solidifies on scroll, click-to-call + quote button.
- `Hero` — message-matched eyebrow / headline (named slot) / subhead / ticks + the **lead form**.
- `TrustBar` — rating, ramps installed, insured, local team.
- `Services` — Residential · Aged Care · NDIS, cross-linking to the dedicated pages.
- `RampTypes` — threshold · step · wedge · kerb · wheelchair (recycled rubber).
- `WhyChoose` — value props (`bg` prop for alternating section colour).
- `SplitContent` — reusable narrative + checklist (NDIS / aged-care / rubber pages).
- `HowItWorks` — 3 steps connected by the ramp line.
- `Stats` — animated count-up.
- `Reviews` — auto-sliding, swipeable, accessible carousel.
- `FinalCTA` — teal band, repeated offer.
- `Footer` — service area, contact, ABN/licence, internal links.
- `MobileActionBar` — fixed bottom **Call Now / Free Quote** bar (mobile only).

Client logic: `src/scripts/` — `animations.ts`, `form.ts`, `reviews.ts`, `tracking.ts`.

---

## Lead form & conversion tracking

The live form is the **GoHighLevel "Newcastle Ramps" embed** (set in
`CRM_IFRAME_EMBED`), used on all four pages as the single conversion source of
truth. A fully-styled native fallback form lives in `LeadForm.astro` for if you
ever switch off the embed (validation, AU phone check, honeypot, success state).

Per the Google Ads launch plan:

- **gclid / UTMs:** with auto-tagging on, ad clicks land with `?gclid=…` on the
  URL. GHL's `form_embed.js` forwards the parent page's query params into the
  iframe, so the form captures gclid/UTMs for attribution automatically — no
  code change needed.
- **Call-tap conversion:** every `tel:` tap fires a `click_to_call` event to the
  GTM `dataLayer` (and Meta Pixel `Contact`). In GTM, turn that into a Google
  Ads conversion; count calls ≥ 45–60s. Each link carries a `data-call-source`
  (header / hero / final-cta / footer / mobile-bar) for reporting.
- **Form-submit conversion:** because the form submits *inside* the GHL iframe,
  fire the lead conversion from **GHL's** side (its Google Ads / GTM integration
  or a thank-you event) and import it into Google Ads as a **Primary**
  conversion. Enable **Enhanced Conversions for Leads** (GHL passes hashed
  email/phone). The page can't read the cross-origin submit.
- Set `GTM_CONTAINER_ID` / `META_PIXEL_ID` in `src/config.ts` to inject the tags.

---

## SEO & Quality Score (lowering CPC / CPL)

The pages are built to lift Google Ads **Quality Score** (→ lower CPC) and
**conversion rate** (→ lower CPL):

- **Message match:** one dedicated page per ad group (see table above) so the
  ad keyword, headline and landing-page H1/copy line up — the biggest lever on
  *Landing Page Experience* and *Ad Relevance*.
- **On-page FAQs** (`src/components/FAQ.astro`, content in `config.ts` →
  `FAQ_*`): native `<details>` accordions (crawlable, accessible, zero-JS) that
  answer the cost / timing / funding objections that stop form fills, and add
  keyword-rich, relevant content. Each emits `FAQPage` structured data.
- **Local relevance:** `ServiceAreas` section lists real Hunter suburbs
  (`SUBURBS`) for Local / Near-Me intent; `geo.*` meta + `LocalBusiness`
  `areaServed`.
- **Structured data:** `LocalBusiness` (with `makesOffer`, conditional
  `aggregateRating`) + `FAQPage` per page; Open Graph/Twitter with image alt.
- **Page speed = LPE:** `preconnect`/`dns-prefetch` to the GoHighLevel form
  domains, self-hosted fonts, minimal JS, compressed/inlined CSS, transform/
  opacity-only animation.
- **Hygiene:** canonical per page, `sitemap.xml`, `robots.txt`, branded
  no-indexed `404`, `max-image-preview:large` snippet directives.

To edit FAQ copy or suburbs, change `src/config.ts` (`FAQ_HOME`, `FAQ_NDIS`,
`FAQ_AGED`, `FAQ_RUBBER`, `SUBURBS`) — no component edits needed.

## Accessibility & performance

- WCAG 2.1 AA target: semantic landmarks, labelled form fields, visible focus
  states, keyboard-reachable & announced carousel, alt text, ≥44px tap targets.
- `prefers-reduced-motion` fully respected (animations disabled).
- Transform/opacity-only animations (60fps). Self-hosted fonts, minimal JS,
  compressed/inlined CSS. Aim for Lighthouse ≥95.

---

## Deployment

Static build → host the `./dist` folder anywhere.

### Cloudflare Workers (recommended — configured in `wrangler.jsonc`)

The project ships a `wrangler.jsonc` that serves `./dist` as Workers static
assets. Two ways to go live:

**A) One-command CLI deploy**
```bash
npx wrangler login          # one-time browser auth, OR set CLOUDFLARE_API_TOKEN
npm run deploy              # builds ./dist, then `wrangler deploy`
```
For CI / non-interactive deploys, set `CLOUDFLARE_API_TOKEN` (a token with the
*Workers Scripts: Edit* permission) and `CLOUDFLARE_ACCOUNT_ID` instead of
logging in. Validate config any time with `npx wrangler deploy --dry-run`.

**B) Auto-deploy from GitHub** (Cloudflare dashboard → *Workers & Pages* →
*Create* → *Import a repository*): pick this repo, **build command**
`npm run build`, **deploy command** `npx wrangler deploy`, then every push to
the branch redeploys.

**Custom domain:** *Workers & Pages → your worker → Settings → Domains & Routes*
→ add **newcastleramps.au** (Cloudflare manages DNS automatically if the zone is
on Cloudflare). `site` in `astro.config.mjs` is already set to it.

**Redirect hunterramps.au → newcastleramps.au:** Workers static assets read
`public/_redirects` but only allow **relative (same-origin)** targets — a
cross-domain absolute URL there fails the deploy (`Only relative URLs are
allowed`). Because the two domains are separate zones, set the redirect on the
**hunterramps.au** zone in the Cloudflare dashboard instead:
*hunterramps.au → Rules → Redirect Rules → Create* → when *Hostname equals
`hunterramps.au`*, *Static/Dynamic redirect* to
`https://newcastleramps.au${http.request.uri.path}`, status **301**, preserve
query string.

### Cloudflare Pages (alternative)
1. Connect the repo. **Build command:** `npm run build`. **Output dir:** `dist`.
2. Add custom domain **newcastleramps.au** in *Pages → Custom domains*. The
   `public/_redirects` (incl. the hunterramps.au→newcastleramps.au rule) and
   `public/_headers` files are applied automatically.

### Netlify
1. New site from Git. **Build:** `npm run build`. **Publish:** `dist`.
2. *Domain settings* → add **newcastleramps.au** → point DNS (A/ALIAS or Netlify DNS).
3. `_redirects` / `_headers` are picked up automatically from `public/`.

### Vercel
1. Import the repo (Astro auto-detected). **Output:** `dist`.
2. *Settings → Domains* → add **newcastleramps.au** and follow the DNS steps.
3. Headers/redirects: add a `vercel.json` if you need the `_headers`/`_redirects`
   rules on Vercel (it doesn't read those files natively).

### Post-deploy checklist
- [ ] `site` in `astro.config.mjs` = `https://newcastleramps.au` (already set).
- [ ] Point **newcastleramps.au** at the deploy; redirect **hunterramps.au** to it.
- [ ] Swap in the real logo, OG image, email, ABN/licence. (Phone 0468 170 347 is set.)
- [ ] Confirm the GHL form on every page; test a real lead end-to-end.
- [ ] Add real Google reviews and confirmed stats/compliance claims.
- [ ] Set `GTM_CONTAINER_ID` / `META_PIXEL_ID`; verify call-tap + (GHL-side) form conversions.
- [ ] Point each ad group's final URL at its matched page (see ad-group table).
- [ ] Run Lighthouse on all four pages.
