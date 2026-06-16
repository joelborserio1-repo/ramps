/* ==========================================================================
 * SITE CONFIG — single source of truth for all client-supplied values.
 *
 * Everything wrapped in a [[ PLACEHOLDER ]] comment MUST be confirmed by the
 * client before launch. Do NOT invent reviews, statistics, ratings, licences
 * or compliance claims — these are advertising claims and must be verbatim
 * from the client.
 * ========================================================================== */

export const SITE = {
  name: 'Ramp Ability',
  // Primary domain = the Google Ads final URL. hunterramps.au redirects here
  // (see public/_redirects).
  domain: 'newcastleramps.au',
  url: 'https://newcastleramps.au',
  tagline: 'Residential · Aged Care · Commercial · NDIS',
  region: 'Newcastle & the Hunter',
};

/* --- Contact ------------------------------------------------------------- */
// Used for every click-to-call. `tel` is the raw value used in tel: links
// (no spaces); `display` is what the user sees.
export const CONTACT = {
  phone: {
    display: '0468 170 347',
    tel: '+61468170347',
  },
  // [[ EMAIL ]]
  email: '[[ EMAIL ]]', // e.g. 'hello@newcastleramps.au'
};

/* --- CRM / lead destination --------------------------------------------- */
// The native form POSTs the lead here. Plug in your Pipeline Partners /
// GoHighLevel webhook or form endpoint. While this is the placeholder value
// the form runs in DEMO mode (logs + shows the success state, no network call).
//
// [[ CRM_WEBHOOK_URL ]]
export const CRM_WEBHOOK_URL = '[[ CRM_WEBHOOK_URL ]]';

// ALTERNATIVE: if the client provides a GoHighLevel / CRM iframe embed, paste
// the full <iframe ...></iframe> string here. When set, the hero renders the
// embed inside the styled card instead of the native form.
//
// [[ CRM_IFRAME_EMBED ]]
// Active: GoHighLevel / LeadConnector "Newcastle Ramps" form. The companion
// resize script (link.msgsndr.com/js/form_embed.js) is loaded automatically by
// the LeadForm component when this embed is set.
export const CRM_IFRAME_EMBED = `<iframe
    src="https://api.leadconnectorhq.com/widget/form/C3N8VYiBVPV6JX93I6hJ"
    style="width:100%;height:794px;border:none;border-radius:8px"
    id="inline-C3N8VYiBVPV6JX93I6hJ"
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Newcastle Ramps"
    data-height="794"
    data-layout-iframe-id="inline-C3N8VYiBVPV6JX93I6hJ"
    data-form-id="C3N8VYiBVPV6JX93I6hJ"
    title="Newcastle Ramps">
</iframe>`;

/* --- Tracking ------------------------------------------------------------ */
// [[ GTM_CONTAINER_ID ]] — e.g. 'GTM-XXXXXXX'. Leave blank to disable GTM.
export const GTM_CONTAINER_ID = '';
// [[ META_PIXEL_ID ]] — e.g. '1234567890'. Leave blank to disable Meta Pixel.
export const META_PIXEL_ID = '';

/* --- Trust bar + stats --------------------------------------------------- */
// [[ STATS ]] — DO NOT fabricate. Confirm every figure with the client.
export const STATS = {
  googleRating: '5.0', // client-confirmed
  googleReviewCount: '[[ NN ]]', // e.g. '48'
  rampsInstalled: '10,000', // client-confirmed (shown as "10,000+")
  yearsInHunter: '9', // client-confirmed
  percentCompliant: '[[ 100 ]]', // e.g. '100'
};

// Animated count-up stats shown in the Stats section. `value` must be a bare
// number (no commas/symbols) — the count-up formats it. Add a 4th entry only
// once you have a real figure to back it.
export const COUNTERS = [
  { value: '10000', suffix: '+', label: 'Ramps installed across Newcastle & the Hunter' },
  { value: '9', suffix: '', label: 'Years serving the local community' },
  { value: '5.0', suffix: '★', label: 'Average Google rating' },
];

/* --- Ramp types (used on the homepage & rubber-ramps page) --------------- */
export const RAMP_TYPES = [
  { name: 'Threshold ramps', copy: 'Smooth out doorways and raised thresholds — no more trip hazard at the front door.' },
  { name: 'Step ramps', copy: 'Safe access over one or more steps, custom-built to your exact rise and run.' },
  { name: 'Wedge ramps', copy: 'Neat wedge profiles for low steps and level changes inside and out.' },
  { name: 'Kerb ramps', copy: 'Bridge kerbs and edges for wheelchairs, walkers and mobility scooters.' },
  { name: 'Wheelchair ramps', copy: 'Longer, compliant-gradient ramps for confident, independent wheelchair access.' },
];

/* --- Service area -------------------------------------------------------- */
// [[ SERVICE_AREA suburbs ]] — confirm coverage with the client.
export const SERVICE_AREA = [
  'Newcastle',
  'Lake Macquarie',
  'Maitland',
  'Cessnock',
  'Port Stephens',
  'Hunter Valley',
];

// Granular suburb list for the "Areas we service" section (local SEO — feeds
// long-tail relevance for Local / Near-Me ad groups). Trim to confirmed coverage.
export const SUBURBS = [
  'Newcastle', 'Hamilton', 'Mayfield', 'Wallsend', 'Charlestown', 'Kotara',
  'New Lambton', 'Adamstown', 'Merewether', 'Waratah', 'Cardiff', 'Belmont',
  'Warners Bay', 'Toronto', 'Morisset', 'Maitland', 'East Maitland', 'Rutherford',
  'Thornton', 'Cessnock', 'Kurri Kurri', 'Raymond Terrace', 'Medowie',
  'Nelson Bay', 'Singleton', 'Hunter Valley',
];

/* --- Legal --------------------------------------------------------------- */
// [[ ABN / LICENCE ]]
export const LEGAL = {
  abn: '[[ ABN ]]', // e.g. 'ABN 00 000 000 000'
  licence: '[[ LICENCE_NO ]]', // e.g. 'Builders Licence 000000C'
};

// [[ COMPLIANCE_CLAIMS ]] — e.g. AS 1428 access gradients, council approvals,
// NDIS / aged-care registration. Only show claims the client can substantiate.
export const COMPLIANCE_CLAIMS = [
  'Built to AS 1428 access standards', // [[ verify ]]
  'NDIS & aged-care friendly', // [[ verify registration status ]]
  'Fully insured', // [[ verify ]]
];

/* --- SEO (homepage defaults; per-page overrides set in each page) -------- */
export const SEO = {
  title: 'Access Ramps Newcastle & the Hunter | Ramp Ability',
  description:
    'Custom recycled-rubber access ramps, measured & installed by a qualified tradie across Newcastle & the Hunter. Free on-site measure & quote from a local, fully-insured team. NDIS & aged-care friendly.',
  ogImage: '/og-image.png', // [[ replace with a branded 1200x630 OG image ]]
  keywords:
    'access ramps Newcastle, wheelchair ramps Newcastle, ramp installer Newcastle, NDIS ramps Newcastle, aged care ramps Hunter, recycled rubber ramps, threshold ramps, mobility ramps Lake Macquarie',
};

/* --- FAQs (on-page SEO + objection handling => Quality Score + CVR) ------
 * Native <details> accordions render this content crawlable & accessible, and
 * each FAQ block also emits FAQPage structured data. Keep answers honest and
 * specific — they answer the cost/timing/funding questions that stop form
 * fills. No prices are invented; pricing routes to the free on-site quote.
 * ----------------------------------------------------------------------- */
export const FAQ_HOME = [
  {
    q: 'How much does an access ramp cost?',
    a: 'Every ramp is custom-built to your steps and space, so the price depends on the size and type. We give you a firm, itemised price at your free on-site measure — with no obligation to go ahead.',
  },
  {
    q: 'How quickly can you install a ramp?',
    a: 'Most ramps are installed within days, not weeks. Once you accept your quote we book in fast — because when access is a problem, waiting isn’t an option.',
  },
  {
    q: 'What areas do you service?',
    a: 'We cover Newcastle, Lake Macquarie, Maitland, Cessnock, Port Stephens and right across the Hunter — including Charlestown, Warners Bay, Belmont, Wallsend, Mayfield, East Maitland, Raymond Terrace and more.',
  },
  {
    q: 'Why recycled rubber?',
    a: 'Recycled-rubber ramps are non-slip in the wet and dry, hard-wearing and eco-friendly. They give confident footing for wheelchairs, walkers and feet — and they last.',
  },
  {
    q: 'Are your ramps safe and built properly?',
    a: 'Yes. Every ramp is measured and installed by a qualified tradesman to safe, comfortable gradients, and we’re fully insured. We stand behind our workmanship.',
  },
];

export const FAQ_NDIS = [
  {
    q: 'Can I use my NDIS funding for a ramp?',
    a: 'Access ramps are commonly funded as a home modification under the NDIS. We provide a clear, itemised quote you can submit, and we’re happy to talk through your situation.',
  },
  {
    q: 'Do you work with my OT and support coordinator?',
    a: 'Yes — we’re happy to liaise directly with your occupational therapist and support coordinator so the right ramp gets specified, quoted and installed.',
  },
  {
    q: 'I’m self-managed, plan-managed or NDIA-managed — can you help?',
    a: 'Whichever way your plan is managed, we can help. We supply itemised quotes and invoices for your records so the funded works are straightforward.',
  },
  {
    q: 'How long does an NDIS ramp take?',
    a: 'Once the ramp is approved and you accept the quote, most installs are completed within days. We’ll keep you and your coordinator updated.',
  },
];

export const FAQ_AGED = [
  {
    q: 'Will a ramp help prevent falls?',
    a: 'Steps and raised thresholds are where many falls happen. A non-slip, gentle-gradient ramp removes that hazard, making it safer to get in and out of the home every day.',
  },
  {
    q: 'Can I use aged-care or NDIS funding?',
    a: 'Many of our customers use NDIS or aged-care funding for access ramps. We’re happy to provide an itemised quote you can submit — just ask us about your situation.',
  },
  {
    q: 'How quickly can you install a ramp for an elderly parent?',
    a: 'Most ramps are installed within days. We come to you, measure on-site for free, and book the install in quickly so your loved one is safe sooner.',
  },
  {
    q: 'Will the ramp suit a walker or wheelchair?',
    a: 'Yes — every ramp is custom-built to a comfortable, compliant gradient to suit walkers, wheelchairs and mobility scooters.',
  },
];

export const FAQ_RUBBER = [
  {
    q: 'What types of ramps do you make?',
    a: 'Threshold, step, wedge, kerb and full wheelchair ramps — all custom-built from recycled rubber to fit your exact rise and run.',
  },
  {
    q: 'Are rubber ramps slippery when wet?',
    a: 'No — recycled-rubber surfaces are designed to be non-slip in the wet and dry, giving confident grip for wheels and feet year-round.',
  },
  {
    q: 'Can you custom-fit a ramp to my steps?',
    a: 'Absolutely. We measure your steps and doorways on-site for free and build the ramp to fit precisely — no awkward gaps or trip hazards.',
  },
  {
    q: 'How durable are recycled-rubber ramps?',
    a: 'Very. Recycled rubber is tough and weather-resistant, standing up to daily use and heavy mobility equipment for years.',
  },
];
