/* =============================================================
   data/profile.js — Identity + About content.
   Edit these strings to update the hero, about section, footer.
   ============================================================= */

export const profile = {
  name: "Axcel Jhaze M. Corpuz",
  displayName: "Axcel Corpuz",        // used in the oversized hero type
  role: "Web Developer & Data Analyst",
  location: "Quirino Province, Philippines",
  available: true,                    // shows the "Available" status pill
  tagline: "Creating technology-driven solutions through data and analytics.",

  // About section
  about: {
    lead:
      "I'm a Bachelor of Science in Computer Science (Business Analytics) student passionate about data, technology, and problem-solving.",
    paragraphs: [
      "I enjoy developing systems, analyzing information, and creating solutions that address real-world challenges. My interests span business intelligence, data analytics, web development, and system design.",
      "I'm continuously learning new technologies to strengthen my analytical and technical skills while building projects that create meaningful impact.",
    ],
    // Quick-scan highlights for recruiters
    highlights: [
      "Strong analytical and problem-solving mindset",
      "Experience in academic research and system development projects",
      "Familiar with business analytics, data management, and web technologies",
      "Fast learner who adapts quickly to new tools and technologies",
      "Committed to continuous learning and professional growth",
    ],
    // Small stat grid (purely presentational — edit freely)
    stats: [
      { num: "5+", label: "Projects built" },
      { num: "10+", label: "Technologies used" },
      { num: "2026", label: "Expected graduation" },
      { num: "∞", label: "Curiosity" },
    ],
  },

  // Path to a resume/CV PDF. Drop the file in assets/resume/ and update.
  // Leave as null to hide the "Download CV" button.
  resumeUrl: null, // e.g. "./assets/resume/Axcel-Corpuz-CV.pdf"
};
