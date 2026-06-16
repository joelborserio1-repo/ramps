/* ==========================================================================
 * Reviews carousel: auto-advance, pause on hover/focus, swipe, dots + arrows.
 * Infinite-looping, accessible (aria-live + reachable controls).
 * Respects prefers-reduced-motion (no auto-advance).
 * ========================================================================== */

const AUTO_MS = 5000;

export function initReviewsCarousel() {
  const root = document.querySelector<HTMLElement>('#reviews-carousel');
  if (!root) return;

  const track = root.querySelector<HTMLElement>('[data-track]');
  const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-slide]'));
  const dotsWrap = root.querySelector<HTMLElement>('[data-dots]');
  const prevBtn = root.querySelector<HTMLButtonElement>('[data-prev]');
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-next]');
  if (!track || slides.length === 0) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = 0;
  let timer: number | undefined;

  // Build dots
  const dots: HTMLButtonElement[] = [];
  if (dotsWrap) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className =
        'h-2.5 w-2.5 rounded-full bg-white/25 transition-all duration-300 hover:bg-white/50';
      dot.setAttribute('aria-label', `Go to review ${i + 1}`);
      dot.addEventListener('click', () => go(i, true));
      dotsWrap.appendChild(dot);
      dots.push(dot);
    });
  }

  function render() {
    track!.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((s, i) => {
      const active = i === index;
      s.setAttribute('aria-hidden', String(!active));
      s.querySelectorAll<HTMLElement>('a,button').forEach((el) =>
        el.setAttribute('tabindex', active ? '0' : '-1'),
      );
    });
    dots.forEach((d, i) => {
      const active = i === index;
      d.classList.toggle('bg-brand-orange', active);
      d.classList.toggle('w-6', active);
      d.setAttribute('aria-current', String(active));
    });
  }

  function go(i: number, userInitiated = false) {
    index = (i + slides.length) % slides.length;
    render();
    if (userInitiated) restart();
  }

  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  function start() {
    if (reduceMotion) return;
    timer = window.setInterval(next, AUTO_MS);
  }
  function stop() {
    if (timer) window.clearInterval(timer);
  }
  function restart() {
    stop();
    start();
  }

  nextBtn?.addEventListener('click', () => go(index + 1, true));
  prevBtn?.addEventListener('click', () => go(index - 1, true));

  // Pause on hover / focus
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);

  // Touch swipe
  let startX = 0;
  track.addEventListener(
    'touchstart',
    (e) => {
      startX = e.touches[0].clientX;
      stop();
    },
    { passive: true },
  );
  track.addEventListener(
    'touchend',
    (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
      start();
    },
    { passive: true },
  );

  // Keyboard
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') go(index + 1, true);
    if (e.key === 'ArrowLeft') go(index - 1, true);
  });

  render();
  start();
}
