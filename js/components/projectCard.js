/* =============================================================
   components/projectCard.js — Renders a single project card.

   Emphasizes impact over a tech list: category badge, what was done
   (contributions), and the outcome. Featured projects get a wider,
   side-by-side layout. Links only appear when a URL actually exists
   (no "coming soon" placeholders — they read as unfinished).
   ============================================================= */

import { esc } from "../utils/dom.js";
import { icon } from "./icons.js";

/** Build initials like "PD" from a project title for the placeholder. */
function initials(title) {
  return title
    .split(/\s+/)
    .filter((w) => /[A-Za-z0-9]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function linkMarkup(links = {}) {
  const out = [];
  if (links.live)
    out.push(
      `<a href="${esc(links.live)}" target="_blank" rel="noopener">Live demo ${icon("external", { size: 16 })}</a>`
    );
  if (links.repo)
    out.push(
      `<a href="${esc(links.repo)}" target="_blank" rel="noopener">Source ${icon("github", { size: 16 })}</a>`
    );
  return out.length ? `<div class="project-links">${out.join("")}</div>` : "";
}

export function projectCard(p, index = 0) {
  const thumbInner = p.image
    ? `<img src="${esc(p.image)}" alt="${esc(p.title)} preview" loading="lazy" />`
    : `<span class="project-initials">${initials(p.title)}</span>`;

  const tags = p.stack.map((t) => `<span class="tag">${esc(t)}</span>`).join("");

  const points = (p.contributions || [])
    .map((c) => `<li>${esc(c)}</li>`)
    .join("");

  const outcome = p.outcome
    ? `<p class="project-outcome"><span>Impact</span> ${esc(p.outcome)}</p>`
    : "";

  const flag = p.featured ? `<span class="project-flag">Featured</span>` : "";

  return `
    <article class="card project-card${p.featured ? " project-card--featured" : ""}"
             data-reveal style="--i:${index}">
      <div class="project-thumb">
        <span class="project-cat">${esc(p.category || "Project")}</span>
        ${thumbInner}
      </div>
      <div class="project-body">
        ${flag}
        <h3>${esc(p.title)}</h3>
        <p class="project-role">${esc(p.role)}</p>
        <p class="project-summary">${esc(p.summary)}</p>
        ${points ? `<ul class="project-points">${points}</ul>` : ""}
        ${outcome}
        <div class="project-tags">${tags}</div>
        ${linkMarkup(p.links)}
      </div>
    </article>`;
}
