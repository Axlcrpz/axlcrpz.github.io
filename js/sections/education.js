/* =============================================================
   sections/education.js — Education timeline + certifications.
   ============================================================= */

import { education, certifications } from "../data/education.js";
import { mount, esc } from "../utils/dom.js";

function timelineItem(item, i) {
  const subjects = (item.subjects || [])
    .map((s) => `<span class="tag">${esc(s)}</span>`)
    .join("");

  return `
    <div class="timeline-item" data-reveal style="--i:${i}">
      <span class="t-date">${esc(item.date)}</span>
      <h3>${esc(item.title)}</h3>
      <p class="t-org">${esc(item.org)}</p>
      ${item.detail ? `<p>${esc(item.detail)}</p>` : ""}
      ${subjects ? `<div class="subjects">${subjects}</div>` : ""}
    </div>`;
}

export function renderEducation() {
  const items = education.map(timelineItem).join("");

  const certs = certifications.length
    ? `<div data-reveal style="margin-top:var(--space-4)">
         <h3 class="certs-title">Certifications</h3>
         <div class="subjects">
           ${certifications
             .map(
               (c) =>
                 `<span class="tag">${esc(c.name)}${c.issuer ? " — " + esc(c.issuer) : ""}</span>`
             )
             .join("")}
         </div>
       </div>`
    : `<p class="form-note" data-reveal style="margin-top:var(--space-4)">
         <strong style="color:var(--text)">Certifications:</strong>
         actively pursuing credentials in data analytics &amp; business intelligence.
       </p>`;

  mount(
    "education",
    `
    <div class="container">
      <div class="section-head" data-reveal>
        <span class="section-eyebrow">Education</span>
        <h2 class="section-title">Academic background.</h2>
      </div>
      <div class="timeline">${items}</div>
      ${certs}
    </div>`
  );
}
