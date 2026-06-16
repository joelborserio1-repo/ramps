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
  domain: 'hunterramps.au',
  url: 'https://hunterramps.au',
  tagline: 'Residential · Commercial · Aged Care',
  region: 'Hunter Region, NSW',
};

/* --- Contact ------------------------------------------------------------- */
// [[ PHONE_NUMBER ]] — used for every click-to-call. `tel` is the raw value
// used in tel: links (no spaces); `display` is what the user sees.
export const CONTACT = {
  phone: {
    display: '[[ PHONE_NUMBER ]]', // e.g. '02 4000 0000'
    tel: '[[ PHONE_NUMBER ]]', // e.g. '+61240000000'
  },
  // [[ EMAIL ]]
  email: '[[ EMAIL ]]', // e.g. 'hello@hunterramps.au'
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
export const CRM_IFRAME_EMBED = '';

/* --- Tracking ------------------------------------------------------------ */
// [[ GTM_CONTAINER_ID ]] — e.g. 'GTM-XXXXXXX'. Leave blank to disable GTM.
export const GTM_CONTAINER_ID = '';
// [[ META_PIXEL_ID ]] — e.g. '1234567890'. Leave blank to disable Meta Pixel.
export const META_PIXEL_ID = '';

/* --- Trust bar + stats --------------------------------------------------- */
// [[ STATS ]] — DO NOT fabricate. Confirm every figure with the client.
export const STATS = {
  googleRating: '[[ 4.x ]]', // e.g. '4.9'
  googleReviewCount: '[[ NN ]]', // e.g. '48'
  rampsInstalled: '[[ NNN ]]', // e.g. '500'
  yearsInHunter: '[[ NN ]]', // e.g. '12'
  percentCompliant: '[[ 100 ]]', // e.g. '100'
};

// Animated count-up stats shown in the Stats section.
// `value` is numeric for the counter; `suffix`/`label` describe it.
export const COUNTERS = [
  { value: '[[ NNN ]]', suffix: '+', label: 'Ramps installed across the Hunter' },
  { value: '[[ NN ]]', suffix: '', label: 'Years serving the Hunter Region' },
  { value: '[[ 4.x ]]', suffix: '★', label: 'Average Google rating' },
  { value: '[[ 100 ]]', suffix: '%', label: 'Built to access standards' },
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

/* --- SEO ----------------------------------------------------------------- */
export const SEO = {
  title: 'Access Ramps Hunter Region | Ramp Ability — Newcastle & Lake Macquarie',
  description:
    'Safe, compliant access ramps installed fast across the Hunter Region. Free on-site measure & quote from a local, fully-insured team. Residential, commercial & aged-care ramps. NDIS & aged-care friendly.',
  ogImage: '/og-image.png', // [[ replace with a branded 1200x630 OG image ]]
  keywords:
    'access ramps Hunter, disability ramps Newcastle, wheelchair ramps Lake Macquarie, aged care ramps, NDIS ramps Hunter, mobility ramps Maitland',
};
