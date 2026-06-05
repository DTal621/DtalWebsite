/**
 * motion.ts — shared animation utilities
 *
 * All three exported functions check prefers-reduced-motion FIRST.
 * If reduced motion is requested, the function returns immediately and
 * elements remain in their fully-rendered final state — no hidden or
 * partially-animated content ever shown to those users.
 *
 * Initial hidden states (opacity: 0, width: 0) are applied by JS, not CSS,
 * so they only exist when JS runs AND motion is permitted.
 */

const reduced = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ─── Count-up ────────────────────────────────────────────────────────────────

/** Parse a stat string like "$600M+" into { prefix, num, suffix } */
function parseValue(raw: string): { prefix: string; num: number; suffix: string } {
  const m = raw.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { prefix: '', num: 0, suffix: raw };
  return { prefix: m[1], num: parseFloat(m[2]), suffix: m[3] };
}

/**
 * Animate all [data-count-up] elements from 0 to their target value.
 * Triggered by IntersectionObserver (fires when the element scrolls into view).
 * Duration: 1000ms, cubic ease-out.
 * Ends on the exact original string to guarantee format is preserved.
 */
export function initCountUp(): void {
  if (reduced()) return;

  const els = document.querySelectorAll<HTMLElement>('[data-count-up]');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const raw = el.dataset.countUp ?? '';
        const { prefix, num, suffix } = parseValue(raw);
        const duration = 1000;
        const start = performance.now();

        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Cubic ease-out: starts fast, decelerates
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * num);

          el.textContent = progress < 1
            ? `${prefix}${current}${suffix}`
            : raw; // exact original string at completion

          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    },
    { threshold: 0.2 },
  );

  els.forEach((el) => observer.observe(el));
}

// ─── Bar fill ────────────────────────────────────────────────────────────────

/**
 * Animate all [data-bar-fill] elements from width 0 to their target %.
 * Duration: 600ms, snappy cubic ease-out.
 * Initial width=0 is set here in JS (not in HTML) so reduced-motion users
 * always see the filled bar immediately.
 */
export function initBarFill(): void {
  if (reduced()) return;

  const els = document.querySelectorAll<HTMLElement>('[data-bar-fill]');
  if (!els.length) return;

  // Set initial state: start at 0, define transition
  els.forEach((el) => {
    el.style.width = '0%';
    el.style.transition = 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const target = el.dataset.barFill ?? '0';
        // Defer one frame so the transition fires (transition needs a starting value first)
        requestAnimationFrame(() => {
          el.style.width = `${target}%`;
        });
        observer.unobserve(el);
      });
    },
    { threshold: 0.2 },
  );

  els.forEach((el) => observer.observe(el));
}

// ─── Fade-and-rise ───────────────────────────────────────────────────────────

/**
 * Fade all [data-fade] elements from (opacity:0, translateY:12px) to visible.
 * Duration: 400ms ease-out. Supports data-delay (ms) for stagger.
 * Initial hidden state is applied here in JS so it's absent for reduced-motion users.
 */
export function initFadeIn(): void {
  if (reduced()) return;

  const els = document.querySelectorAll<HTMLElement>('[data-fade]');
  if (!els.length) return;

  // Apply initial hidden state
  els.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    const delay = el.dataset.delay ?? '0';
    el.style.transition = `opacity 0.4s ease-out ${delay}ms, transform 0.4s ease-out ${delay}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        observer.unobserve(el);
      });
    },
    { threshold: 0.1 },
  );

  els.forEach((el) => observer.observe(el));
}
