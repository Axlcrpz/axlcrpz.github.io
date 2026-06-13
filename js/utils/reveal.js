/* =============================================================
   utils/reveal.js — Subtle scroll-reveal via IntersectionObserver.
   Any element with [data-reveal] fades/slides in once on scroll.
   Performance-friendly (no scroll listeners) and respects
   prefers-reduced-motion (handled in CSS).

   Robustness: content starts at opacity:0, so we guarantee it can
   never get "stuck" invisible. If IntersectionObserver is missing,
   or hasn't revealed an element after a short safety window, we
   force everything visible. A real page never ends up blank.
   ============================================================= */

const SAFETY_MS = 1500; // failsafe: reveal anything still hidden after this

function revealAll(items) {
  items.forEach((el) => el.classList.add("is-visible"));
}

export function initScrollReveal() {
  const items = [...document.querySelectorAll("[data-reveal]")];
  if (!items.length) return;

  // No IO support → just show everything immediately.
  if (!("IntersectionObserver" in window)) {
    revealAll(items);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // reveal once
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((el) => observer.observe(el));

  // Failsafe: if the observer never fires (edge browsers, embedded
  // webviews, offscreen renderers), don't leave content hidden.
  window.setTimeout(() => {
    const stuck = items.filter((el) => !el.classList.contains("is-visible"));
    // Only force-reveal items that are at/above the current viewport;
    // genuinely below-fold items will still animate on scroll.
    stuck.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight) el.classList.add("is-visible");
    });
  }, SAFETY_MS);

  // Absolute last resort: on full load, after a beat, reveal anything
  // still hidden in the viewport (covers very slow first paint).
  window.addEventListener("load", () => {
    window.setTimeout(() => {
      items.forEach((el) => {
        if (
          !el.classList.contains("is-visible") &&
          el.getBoundingClientRect().top < window.innerHeight
        ) {
          el.classList.add("is-visible");
        }
      });
    }, 200);
  });
}
