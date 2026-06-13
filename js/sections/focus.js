/* =============================================================
   sections/focus.js — "What I do" value-proposition strip.
   Three focus cards that tell visitors the value you bring before
   they dig into the detailed skills and projects below.
   ============================================================= */

import { focusAreas } from "../data/focus.js";
import { mount, esc } from "../utils/dom.js";
import { icon } from "../components/icons.js";

function focusCard(f, i) {
  const tags = (f.tags || [])
    .map((t) => `<span class="tag">${esc(t)}</span>`)
    .join("");

  return `
    <div class="card focus-card" data-reveal style="--i:${i}">
      <div class="focus-icon">${icon(f.icon, { size: 26 })}</div>
      <h3>${esc(f.title)}</h3>
      <p>${esc(f.description)}</p>
      <div class="focus-tags">${tags}</div>
    </div>`;
}

export function renderFocus() {
  const cards = focusAreas.map(focusCard).join("");

  mount(
    "focus",
    `
    <div class="container">
      <div class="section-head" data-reveal>
        <span class="section-eyebrow">What I do</span>
        <h2 class="section-title">Three ways I create value.</h2>
        <p class="section-subtitle">Analytics to understand the problem, research to test it, and engineering to ship the solution.</p>
      </div>
      <div class="focus-grid">${cards}</div>
    </div>`
  );
}
