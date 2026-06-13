/* =============================================================
   components/skillGroup.js — Renders one skill category card.
   Reused by sections/skills.js.
   ============================================================= */

import { esc } from "../utils/dom.js";
import { icon } from "./icons.js";

export function skillGroup(group, index = 0) {
  const chips = group.skills
    .map((s) => `<span class="tag">${esc(s)}</span>`)
    .join("");

  return `
    <div class="card skill-group" data-reveal style="--i:${index}">
      <div class="skill-icon">${icon(group.icon, { size: 28 })}</div>
      <h3>${esc(group.title)}</h3>
      <div class="skill-list">${chips}</div>
    </div>`;
}
