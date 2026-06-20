/* ==========================================================================
 * Lead form logic: validation, AU phone check, honeypot, submit + states.
 * Reads the CRM endpoint from a data attribute so config stays in config.ts.
 * ========================================================================== */
import { trackLead } from './tracking';

const PLACEHOLDER = '[[ CRM_WEBHOOK_URL ]]';

// Accepts common AU mobile/landline formats, with or without +61, spaces or
// dashes. e.g. 0400 000 000 / 02 4000 0000 / +61 400 000 000
const AU_PHONE = /^(?:\+?61|0)[2-478](?:[ -]?\d){8}$/;

function setError(field: HTMLElement, msgEl: HTMLElement | null, message: string) {
  field.setAttribute('aria-invalid', 'true');
  if (msgEl) {
    msgEl.textContent = message;
    msgEl.classList.remove('hidden');
  }
}

function clearError(field: HTMLElement, msgEl: HTMLElement | null) {
  field.removeAttribute('aria-invalid');
  if (msgEl) {
    msgEl.textContent = '';
    msgEl.classList.add('hidden');
  }
}

export function initLeadForm() {
  const form = document.querySelector<HTMLFormElement>('#lead-form');
  if (!form) return;

  const endpoint = form.dataset.endpoint || '';
  const demoMode = !endpoint || endpoint === PLACEHOLDER;

  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const btnLabel = submitBtn?.querySelector<HTMLElement>('.btn-label');
  const spinner = submitBtn?.querySelector<HTMLElement>('.btn-spinner');
  const successEl = document.querySelector<HTMLElement>('#form-success');
  const errorBanner = form.querySelector<HTMLElement>('#form-error-banner');

  const validators: Array<() => boolean> = [];

  function register(name: string, validate: (value: string) => string | null) {
    const field = form!.querySelector<HTMLInputElement | HTMLSelectElement>(`[name="${name}"]`);
    const msgEl = form!.querySelector<HTMLElement>(`#err-${name}`);
    if (!field) return;
    const run = () => {
      const message = validate(field.value.trim());
      if (message) {
        setError(field, msgEl, message);
        return false;
      }
      clearError(field, msgEl);
      return true;
    };
    field.addEventListener('blur', run);
    field.addEventListener('input', () => clearError(field, msgEl));
    validators.push(run);
  }

  register('name', (v) => (v.length < 2 ? 'Please enter your full name.' : null));
  register('phone', (v) =>
    !v ? 'Please enter your phone number.' : !AU_PHONE.test(v) ? 'Please enter a valid Australian phone number.' : null,
  );
  register('suburb', (v) => (v.length < 2 ? 'Please enter your suburb or postcode.' : null));
  register('service', (v) => (!v ? 'Please choose a service type.' : null));

  function setLoading(loading: boolean) {
    if (!submitBtn) return;
    submitBtn.disabled = loading;
    submitBtn.setAttribute('aria-busy', String(loading));
    btnLabel?.classList.toggle('opacity-0', loading);
    spinner?.classList.toggle('hidden', !loading);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorBanner?.classList.add('hidden');

    // Honeypot: bots fill hidden fields. Silently "succeed" without sending.
    const honeypot = form.querySelector<HTMLInputElement>('[name="company_website"]');
    if (honeypot && honeypot.value) {
      successEl?.classList.remove('hidden');
      form.classList.add('hidden');
      return;
    }

    const allValid = validators.map((v) => v()).every(Boolean);
    if (!allValid) {
      form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    delete data.company_website;
    data.source = 'newcastleramps.com.au';
    data.submitted_at = new Date().toISOString();

    setLoading(true);
    try {
      if (demoMode) {
        // No CRM endpoint configured yet — simulate success for QA.
        console.info('[lead-form] DEMO MODE — would POST to CRM:', data);
        await new Promise((r) => setTimeout(r, 700));
      } else {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`CRM responded ${res.status}`);
      }

      trackLead({ service_type: data.service });
      form.classList.add('hidden');
      successEl?.classList.remove('hidden');
      successEl?.setAttribute('tabindex', '-1');
      successEl?.focus();
    } catch (err) {
      console.error('[lead-form] submit failed:', err);
      if (errorBanner) errorBanner.classList.remove('hidden');
    } finally {
      setLoading(false);
    }
  });
}
