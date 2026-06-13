/* =============================================================
   sections/hero.js — Hero: oversized name, tagline, CTAs, and a
   reserved visual panel (slot for a future interactive 3D scene).
   ============================================================= */

import { profile } from "../data/profile.js";
import { mount, esc } from "../utils/dom.js";

export function renderHero() {
  const available = profile.available
    ? `<span class="hero-available"><span class="pulse"></span> Available for opportunities</span>`
    : "";

  // One ghost button per downloadable document (Resume, CV, ...).
  const docs = (profile.documents || [])
    .filter((d) => d.url)
    .map(
      (d) =>
        `<a class="btn btn--ghost" href="${esc(d.url)}" target="_blank" rel="noopener" download>${esc(d.label)}</a>`
    )
    .join("");

  // Show the portrait if provided; if the image fails to load, fall
  // back to the animated orb so the panel is never empty/broken.
  const visual = profile.photo
    ? `<img class="hero-photo" src="${esc(profile.photo)}"
            alt="Portrait of ${esc(profile.name)}" loading="eager"
            onerror="this.closest('.hero-visual').classList.add('no-photo'); this.remove();" />`
    : `<div class="visual-orb"></div>`;

  mount(
    "hero",
    `
    <div class="hero-grid container">
      <div class="hero-copy">
        ${available}
        <h1 class="hero-name animate-in">
          <span class="text-gradient">${esc(profile.displayName)}</span>
        </h1>
        <p class="hero-tagline animate-in" style="animation-delay:.1s">
          <span class="hero-role">${esc(profile.role)}</span> —
          ${esc(profile.tagline)}
        </p>
        <div class="hero-cta animate-in" style="animation-delay:.2s">
          <a class="btn btn--primary" href="#projects">View my work</a>
          <a class="btn btn--ghost" href="#contact">Contact me</a>
          ${docs}
        </div>
      </div>

      <!-- Visual slot: swap .visual-orb for a Spline/canvas scene later -->
      <div class="hero-visual animate-in" style="animation-delay:.15s">
        ${visual}
        <span class="visual-label">${esc(profile.location)}</span>
      </div>
    </div>`
  );
}
