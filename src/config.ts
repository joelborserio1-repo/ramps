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
  yearsInHunter: '[[ NN ]]', // e.g. '12'
  percentCompliant: '[[ 100 ]]', // e.g. '100'
};

// Animated count-up stats shown in the Stats section.
// `value` is numeric for the counter; `suffix`/`label` describe it.
export const COUNTERS = [
  { value: '10000', suffix: '+', label: 'Ramps installed across Newcastle & the Hunter' },
  { value: '[[ NN ]]', suffix: '', label: 'Years serving the local community' },
  { value: '5.0', suffix: '★', label: 'Average Google rating' },
  { value: '[[ NN ]]', suffix: '%', label: 'Recycled-rubber, non-slip ramps' },
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
