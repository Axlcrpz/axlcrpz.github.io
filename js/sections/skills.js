/* =============================================================
   sections/skills.js — Renders skill category cards from data.
   ============================================================= */

import { skillGroups } from "../data/skills.js";
import { skillGroup } from "../components/skillGroup.js";
import { mount } from "../utils/dom.js";

export function renderSkills() {
  const cards = skillGroups.map((g, i) => skillGroup(g, i)).join("");

  mount(
    "skills",
    `
    <div class="container">
      <div class="section-head" data-reveal>
        <span class="section-eyebrow">Skills</span>
        <h2 class="section-title">A toolkit across data, code, and design.</h2>
        <p class="section-subtitle">From analytics and research to building responsive web apps.</p>
      </div>
      <div class="skills-grid">${cards}</div>
    </div>`
  );
}
