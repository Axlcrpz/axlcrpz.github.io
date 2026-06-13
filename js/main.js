/* =============================================================
   main.js — Application entry point.
   Imports data + section renderers, builds the page on load, then
   activates global behaviors (scroll reveal, footer year, etc.).

   To add a new section:
   1. Add its data in js/data/
   2. Create js/sections/<name>.js exporting a render function
   3. Add a mount <section id="..."> in index.html
   4. Import + call it in renderAll() below
   ============================================================= */

import { profile } from "./data/profile.js";
import { socials, contact } from "./data/socials.js";
import { mount, esc } from "./utils/dom.js";
import { icon } from "./components/icons.js";
import { initScrollReveal } from "./utils/reveal.js";
import { initScrollProgress } from "./utils/scroll.js";

import { renderNavbar } from "./components/navbar.js";
import { renderHero } from "./sections/hero.js";
import { renderAbout } from "./sections/about.js";
import { renderFocus } from "./sections/focus.js";
import { renderSkills } from "./sections/skills.js";
import { renderProjects } from "./sections/projects.js";
import { renderEducation } from "./sections/education.js";
import { renderContact } from "./sections/contact.js";

/** Footer is small enough to render inline here. */
function renderFooter() {
  const links = socials
    .filter((s) => s.url)
    .map(
      (s) =>
        `<a class="icon-btn" href="${esc(s.url)}" aria-label="${esc(s.label)}"
            ${s.url.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener"'}>
           ${icon(s.key, { size: 16 })}
         </a>`
    )
    .join("");

  mount(
    "footer",
    `
    <div class="footer-inner container">
      <p>© ${new Date().getFullYear()} ${esc(profile.name)}. Built with care.</p>
      <div class="footer-socials">${links}</div>
    </div>`
  );
}

/** Render every part of the page in document order. */
function renderAll() {
  renderNavbar();
  renderHero();
  renderAbout();
  renderFocus();
  renderSkills();
  renderProjects();
  renderEducation();
  renderContact();
  renderFooter();
}

/** Boot once the DOM is parsed. */
function init() {
  renderAll();
  initScrollReveal();   // animate elements as they enter the viewport
  initScrollProgress(); // top read-progress bar
  document.title = `${profile.name} — ${profile.role}`;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
