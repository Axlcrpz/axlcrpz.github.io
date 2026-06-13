/* =============================================================
   components/navbar.js — Sticky navbar: logo, anchor links,
   theme toggle, and a mobile burger menu.
   ============================================================= */

import { profile } from "../data/profile.js";
import { mount, qs, qsa } from "../utils/dom.js";
import { themeToggleMarkup, initThemeToggle } from "./themeToggle.js";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function renderNavbar() {
  const links = NAV_ITEMS.map(
    (i) => `<a href="${i.href}">${i.label}</a>`
  ).join("");

  mount(
    "navbar",
    `
    <nav class="nav-inner container" aria-label="Primary">
      <a class="nav-logo" href="#hero">${profile.displayName.split(" ")[0]}<span class="dot">.</span></a>

      <ul class="nav-links" id="navLinks">
        ${NAV_ITEMS.map((i) => `<li><a href="${i.href}">${i.label}</a></li>`).join("")}
      </ul>

      <div class="nav-actions">
        ${themeToggleMarkup()}
        <a class="btn btn--primary nav-cta" href="#contact">Get in touch</a>
        <button class="nav-burger" id="navBurger" type="button"
                aria-label="Toggle menu" aria-expanded="false"><span></span></button>
      </div>
    </nav>`
  );

  initThemeToggle();
  initNavBehavior();
}

/** Scroll shadow + mobile menu open/close + close-on-link-click. */
function initNavBehavior() {
  const navbar = document.getElementById("navbar");
  const burger = document.getElementById("navBurger");

  // Add a subtle border once the page is scrolled
  const onScroll = () =>
    navbar.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  burger?.addEventListener("click", () => {
    const open = navbar.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });

  // Close mobile menu when a link is tapped
  qsa("#navLinks a", navbar).forEach((a) =>
    a.addEventListener("click", () => {
      navbar.classList.remove("is-open");
      burger?.setAttribute("aria-expanded", "false");
    })
  );
}
