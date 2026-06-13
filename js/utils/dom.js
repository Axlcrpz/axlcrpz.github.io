/* =============================================================
   utils/dom.js — Tiny DOM helpers. Keeps render code readable and
   avoids repeating document.querySelector / createElement everywhere.
   ============================================================= */

/** querySelector shorthand */
export const qs = (sel, scope = document) => scope.querySelector(sel);

/** querySelectorAll -> real array */
export const qsa = (sel, scope = document) => [...scope.querySelectorAll(sel)];

/**
 * Mount HTML into an element by id.
 * @param {string} id   target element id
 * @param {string} html innerHTML string
 */
export const mount = (id, html) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
  return el;
};

/**
 * Escape user/content strings before injecting as HTML.
 * Content here is authored by you, but escaping keeps it safe & robust.
 */
export const esc = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
