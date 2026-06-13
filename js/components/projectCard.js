/* =============================================================
   components/projectCard.js — Renders a single project card.
   Reused by sections/projects.js. Falls back to a gradient
   placeholder (project initials) when no image is provided.
   ============================================================= */

import { esc } from "../utils/dom.js";
import { icon } from "./icons.js";

/** Build initials like "EMS" from a project title for the placeholder. */
function initials(title) {
  return title
    .split(/\s+/)
    .filter((w) => /[A-Za-z0-9]/.test(w[0]))
    .slice(0, 3)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function linkMarkup(links = {}) {
  const out = [];
  if (links.live) {
    out.push(
      `<a href="${esc(links.live)}" target="_blank" rel="noopener">Live ${icon("external", { size: 16 })}</a>`
    );
  }
  if (links.repo) {
    out.push(
      `<a href="${esc(links.repo)}" target="_blank" rel="noopener">Code ${icon("github", { size: 16 })}</a>`
    );
  }
  if (!out.length) {
    // No links yet — show a non-clickable hint
    out.push(`<a data-disabled aria-disabled="true">Links coming soon</a>`);
  }
  return out.join("");
}

export function projectCard(p, index = 0) {
  const thumb = p.image
    ? `<img src="${esc(p.image)}" alt="${esc(p.title)} preview" loading="lazy" />`
    : `<span>${initials(p.title)}</span>`;

  const tags = p.stack
    .map((t) => `<span class="tag">${esc(t)}</span>`)
    .join("");

  return `
    <article class="card project-card" data-reveal style="--i:${index}">
      <div class="project-thumb">${thumb}</div>
      <h3>${esc(p.title)}</h3>
      <p class="project-role">${esc(p.role)}</p>
      <p class="project-desc">${esc(p.description || p.summary)}</p>
      <div class="project-tags">${tags}</div>
      <div class="project-links">${linkMarkup(p.links)}</div>
    </article>`;
}
