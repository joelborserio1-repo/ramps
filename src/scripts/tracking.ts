/* ==========================================================================
 * Conversion tracking helpers.
 * Pushes to the GTM dataLayer (and optionally Meta Pixel) on the two events
 * that matter: lead form submission and click-to-call.
 * ========================================================================== */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

function pushDataLayer(event: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

/** Fire on a successful lead form submission. */
export function trackLead(detail: Record<string, unknown> = {}) {
  pushDataLayer({ event: 'generate_lead', ...detail });
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', detail);
  }
}

/** Fire when a user taps a click-to-call link. */
export function trackCall(source: string) {
  pushDataLayer({ event: 'click_to_call', call_source: source });
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { source });
  }
}

/** Wire up every tel: link on the page to fire a call conversion. */
export function initCallTracking() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach((link) => {
    link.addEventListener('click', () => {
      trackCall(link.dataset.callSource || 'unknown');
    });
  });
}
