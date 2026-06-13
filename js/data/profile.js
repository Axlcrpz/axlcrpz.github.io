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

  // Hero portrait. Drop your photo in assets/img/ and point to it here.
  // Set to null to show the animated gradient orb instead.
  photo: "./assets/img/profile.jpg",

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

  // Downloadable documents shown as buttons in the hero.
  // Add/remove entries freely; each becomes a button. Empty array = none.
  // NOTE: anything here is PUBLICLY downloadable on the live site.
  documents: [
    { label: "Resume", url: "./assets/resume/Axcel-Corpuz-Resume.pdf" },
    { label: "CV", url: "./assets/resume/Axcel-Corpuz-CV.pdf" },
  ],
};
