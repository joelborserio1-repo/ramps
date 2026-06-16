/* ==========================================================================
 * GSAP + ScrollTrigger animation orchestration.
 * Transform/opacity only (60fps). Fully disabled under prefers-reduced-motion.
 * ========================================================================== */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initAnimations() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    // Make sure nothing is left hidden.
    document.querySelectorAll('.reveal').forEach((el) => el.classList.remove('reveal'));
    // Show final counter values immediately (no count-up animation).
    document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
      const n = parseFloat(el.dataset.counter || '0');
      if (Number.isNaN(n)) return;
      const decimals = (el.dataset.counter || '').includes('.') ? 1 : 0;
      el.textContent = n.toLocaleString('en-AU', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* --- Hero entrance: staggered fade/slide-up ---------------------------- */
  const heroItems = gsap.utils.toArray<HTMLElement>('[data-hero-stagger] > *');
  if (heroItems.length) {
    gsap.set(heroItems, { opacity: 0, y: 24 });
    gsap.to(heroItems, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.12,
      delay: 0.15,
    });
  }

  /* --- Ramp motif "draws" in --------------------------------------------- */
  const slope = document.querySelector<SVGPathElement>('.ramp-slope');
  const traveller = document.querySelector<SVGCircleElement>('.ramp-traveller');
  const steps = gsap.utils.toArray<HTMLElement>('.ramp-step');
  if (steps.length) {
    gsap.from(steps, {
      scaleY: 0,
      transformOrigin: 'bottom',
      duration: 0.5,
      ease: 'back.out(1.6)',
      stagger: 0.08,
      delay: 0.4,
    });
  }
  if (slope) {
    const len = slope.getTotalLength();
    gsap.set(slope, { strokeDasharray: len, strokeDashoffset: len });
    const tl = gsap.timeline({ delay: 0.7 });
    tl.to(slope, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' });
    if (traveller) {
      tl.fromTo(
        traveller,
        { x: 0, y: 0 },
        { x: 190, y: -124, duration: 1.1, ease: 'power2.inOut' },
        '<',
      );
    }
  }

  /* --- Scroll-triggered section reveals ---------------------------------- */
  gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });

  /* --- Staggered groups (cards) ------------------------------------------ */
  gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
    const kids = gsap.utils.toArray<HTMLElement>(':scope > *', group);
    gsap.set(kids, { opacity: 0, y: 24 });
    gsap.to(kids, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: { trigger: group, start: 'top 80%', once: true },
    });
  });

  /* --- Animated count-up stats (thousands-separated) --------------------- */
  gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((el) => {
    const raw = el.dataset.counter || '0';
    const target = parseFloat(raw);
    if (Number.isNaN(target)) return;
    const decimals = raw.includes('.') ? 1 : 0;
    const fmt = (n: number) =>
      n.toLocaleString('en-AU', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    const obj = { val: 0 };
    // Reset to 0 at setup so the count-up runs clean (no reverse-flash from the
    // server-rendered final value, which remains the no-JS fallback).
    el.textContent = fmt(0);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = fmt(obj.val);
          },
        });
      },
    });
  });
}
