/* =============================================================
   sections/projects.js — Renders the project grid from data.
   Featured projects are rendered first so the strongest work leads.
   ============================================================= */

import { projects } from "../data/projects.js";
import { projectCard } from "../components/projectCard.js";
import { mount } from "../utils/dom.js";

export function renderProjects() {
  // Stable sort: featured projects first, original order otherwise.
  const ordered = [...projects].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  const cards = ordered.map((p, i) => projectCard(p, i)).join("");

  mount(
    "projects",
    `
    <div class="container">
      <div class="section-head" data-reveal>
        <span class="section-eyebrow">Projects</span>
        <h2 class="section-title">Work that shows how I think.</h2>
        <p class="section-subtitle">Analytics studies, research, and applications — framed by the problem solved, not just the tools used.</p>
      </div>
      <div class="projects-grid">${cards}</div>
    </div>`
  );
}
