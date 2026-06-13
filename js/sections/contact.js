/* =============================================================
   sections/contact.js — Contact section.
   The form has NO backend: on submit it builds a mailto: link and
   opens the user's email client (works offline / on any host).
   To use a real backend later (e.g. Formspree), swap handleSubmit.
   ============================================================= */

import { contact, socials } from "../data/socials.js";
import { mount, qs, esc } from "../utils/dom.js";
import { icon } from "../components/icons.js";

function socialButtons() {
  return socials
    .filter((s) => s.url)
    .map(
      (s) =>
        `<a class="icon-btn" href="${esc(s.url)}" aria-label="${esc(s.label)}"
            ${s.url.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener"'}>
           ${icon(s.key, { size: 18 })}
         </a>`
    )
    .join("");
}

export function renderContact() {
  mount(
    "contact",
    `
    <div class="container">
      <div class="contact-grid">
        <div data-reveal>
          <span class="section-eyebrow">Contact</span>
          <h2 class="contact-cta-title">Let's work <span class="text-gradient">together</span>.</h2>
          <p>${esc(contact.blurb)}</p>
          <p style="margin-top:var(--space-2)">
            <a href="mailto:${esc(contact.email)}" class="hero-role">${esc(contact.email)}</a>
          </p>
          <div class="contact-socials">${socialButtons()}</div>
        </div>

        <form class="contact-form card" id="contactForm" data-reveal novalidate>
          <div class="field">
            <label for="cf-name">Name</label>
            <input id="cf-name" name="name" type="text" required placeholder="Your name" />
          </div>
          <div class="field">
            <label for="cf-email">Email</label>
            <input id="cf-email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div class="field">
            <label for="cf-message">Message</label>
            <textarea id="cf-message" name="message" required placeholder="Tell me about your project or role..."></textarea>
          </div>
          <button class="btn btn--primary" type="submit">Send message ${icon("arrow", { size: 16 })}</button>
          <p class="form-note">This opens your email app with the message pre-filled.</p>
        </form>
      </div>
    </div>`
  );

  initContactForm();
}

function initContactForm() {
  const form = qs("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  });
}
