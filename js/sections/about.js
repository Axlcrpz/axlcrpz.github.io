/* =============================================================
   sections/about.js — About: lead statement, paragraphs,
   recruiter highlights, and a small stat grid.
   ============================================================= */

import { profile } from "../data/profile.js";
import { mount, esc } from "../utils/dom.js";

export function renderAbout() {
  const { about } = profile;

  const paragraphs = about.paragraphs
    .map((p) => `<p>${esc(p)}</p>`)
    .join("");

  const highlights = about.highlights
    .map((h) => `<li>${esc(h)}</li>`)
    .join("");

  const stats = about.stats
    .map(
      (s, i) => `
      <div class="card stat" data-reveal style="--i:${i}">
        <div class="stat-num text-gradient">${esc(s.num)}</div>
        <div class="stat-label">${esc(s.label)}</div>
      </div>`
    )
    .join("");

  mount(
    "about",
    `
    <div class="container">
      <div class="section-head" data-reveal>
        <span class="section-eyebrow">About</span>
        <h2 class="section-title">Turning data and code into real-world impact.</h2>
      </div>

      <div class="about-grid">
        <div data-reveal>
          <p class="about-lead">${esc(about.lead)}</p>
          ${paragraphs}
          <ul class="about-highlights">${highlights}</ul>
        </div>
        <div class="about-stats">${stats}</div>
      </div>
    </div>`
  );
}
