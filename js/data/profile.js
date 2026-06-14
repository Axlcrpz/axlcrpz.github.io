/* =============================================================
   data/profile.js — Identity + About content.
   Edit these strings to update the hero, about section, footer.
   ============================================================= */

export const profile = {
  name: "Axcel Jhaze M. Corpuz",
  displayName: "Axcel Corpuz",        // used in the oversized hero type
  role: "Data Analyst & Web Developer",
  location: "Diffun, Quirino, Philippines",
  available: true,                    // shows the "Available" status pill

  // Hero copy — value-led, so visitors understand the offer in seconds.
  headline: "Turning data into decisions, and ideas into web applications.",
  tagline:
    "Business Analytics student blending data analytics, research, and full-stack web development to solve real-world problems.",

  // Short focus chips shown under the hero tagline (keep to 3–4, punchy).
  focus: ["Data Analytics", "Research & Modeling", "Web Development"],

  // Hero portrait. Drop your photo in assets/img/ and point to it here.
  // Set to null to show the animated gradient orb instead.
  photo: "./assets/img/profile.jpg",

  // About section
  about: {
    lead:
      "I'm a BS Computer Science student majoring in Business Analytics — focused on turning data into insight and building the web applications that put that insight to work.",
    paragraphs: [
      "My work sits where analytics meets engineering: I clean and explore data, design and test predictive models, and translate the findings into something people can actually act on. On the build side, I develop responsive, accessible web applications backed by solid database design.",
      "I learn fast, care about doing things properly, and I'm motivated by projects that create measurable, real-world impact.",
    ],
    // Quick-scan highlights for recruiters (value + evidence, not adjectives).
    highlights: [
      "Analytical problem-solver — I frame the question before reaching for a tool",
      "Hands-on with the full data workflow: collection, cleaning, analysis, and visualization",
      "Research experience in sentiment analysis and clinical predictive modeling",
      "Builds responsive, accessible web apps with clean front-end code",
      "Comfortable communicating findings to both technical and non-technical audiences",
    ],
    // Small stat grid — honest, verifiable figures only.
    stats: [
      { num: "5", label: "Projects built" },
      { num: "2", label: "Analytics & research studies" },
      { num: "10+", label: "Technologies used" },
      { num: "2026", label: "Graduating" },
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
