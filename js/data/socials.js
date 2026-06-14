/* =============================================================
   data/socials.js — Contact + social links.
   `key` maps to an inline SVG icon in components/icons.js.
   Set `url` to null/"" to hide a link. Email powers the contact form.
   ============================================================= */

export const contact = {
  email: "axcelcorpuz95@gmail.com",
  // Optional friendly line shown in the contact section
  blurb:
    "Open to internships, junior developer / data analyst roles, and collaboration. Let's build something meaningful.",
};

/**
 * Build a Gmail "compose" URL so clicking email opens Gmail in the
 * browser instead of the OS default mail app (Outlook/Apple Mail).
 * Optionally pre-fills subject + body.
 */
export const gmailComposeUrl = (subject = "", body = "") =>
  "https://mail.google.com/mail/?view=cm&fs=1&to=" +
  encodeURIComponent(contact.email) +
  (subject ? "&su=" + encodeURIComponent(subject) : "") +
  (body ? "&body=" + encodeURIComponent(body) : "");

export const socials = [
  { key: "email", label: "Email", url: gmailComposeUrl() },
  { key: "github", label: "GitHub", url: "https://github.com/Axlcrpz" },
  { key: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/jhaze-manat-5329013b5" },
];
