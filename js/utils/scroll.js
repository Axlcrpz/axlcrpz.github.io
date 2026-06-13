/* =============================================================
   utils/scroll.js — Page-level scroll UX:
   1. initScrollProgress — a thin top bar showing read progress.
   2. initActiveNav — highlights the nav link for the section in view
      (scroll-spy) and sets aria-current for assistive tech.
   Both are passive / observer-based and respect reduced motion.
   ============================================================= */

/** Top progress bar. Expects an element with id="scrollProgress". */
export function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;

  let ticking = false;
  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    bar.style.transform = `scaleX(${pct / 100})`;
    ticking = false;
  };

  update();
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
}

/**
 * Scroll-spy: marks the nav link whose section is currently in view.
 * @param {string} linkSelector selector for nav anchor links
 */
export function initActiveNav(linkSelector = "#navLinks a") {
  const links = [...document.querySelectorAll(linkSelector)];
  if (!links.length || !("IntersectionObserver" in window)) return;

  // Map each section id -> its nav link.
  const byId = new Map();
  links.forEach((a) => {
    const id = a.getAttribute("href")?.replace("#", "");
    const section = id && document.getElementById(id);
    if (section) byId.set(section, a);
  });

  const setActive = (link) => {
    links.forEach((a) => {
      const on = a === link;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      // Pick the most visible intersecting section.
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(byId.get(visible.target));
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
  );

  byId.forEach((_link, section) => observer.observe(section));
}
