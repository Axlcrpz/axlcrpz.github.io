/* =============================================================
   components/themeToggle.js — Light/Dark theme switch.
   Persists choice in localStorage. The initial theme is set in
   index.html (inline script) to avoid a flash of wrong theme.
   ============================================================= */

import { icon } from "./icons.js";

/** Returns the button markup (mounted by the navbar). */
export function themeToggleMarkup() {
  return `
    <button class="theme-toggle" id="themeToggle" type="button"
            aria-label="Toggle color theme">
      <span class="icon-moon">${icon("moon")}</span>
      <span class="icon-sun">${icon("sun")}</span>
    </button>`;
}

/** Wires up the click handler. Call after the toggle is in the DOM. */
export function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* storage unavailable — theme still applies for this session */
    }
  });
}
