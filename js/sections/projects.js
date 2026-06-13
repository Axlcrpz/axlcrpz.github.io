/* =============================================================
   sections/projects.js — Renders the project grid from data.
   ============================================================= */

import { projects } from "../data/projects.js";
import { projectCard } from "../components/projectCard.js";
import { mount } from "../utils/dom.js";

export function renderProjects() {
  const cards = projects.map((p, i) => projectCard(p, i)).join("");

  mount(
    "projects",
    `
    <div class="container">
      <div class="section-head" data-reveal>
        <span class="section-eyebrow">Projects</span>
        <h2 class="section-title">Selected work & research.</h2>
        <p class="section-subtitle">Systems, analytics studies, and applications I've designed and built.</p>
      </div>
      <div class="projects-grid">${cards}</div>
    </div>`
  );
}
