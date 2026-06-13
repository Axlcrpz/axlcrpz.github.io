/* =============================================================
   data/projects.js — Project showcase.

   Each project is framed around IMPACT, not just tech:
   - `category`      short label shown as a badge (scannability)
   - `featured`      true = highlighted, full-width card (lead with it)
   - `summary`       one-line "what it is"
   - `contributions` 2–3 bullets: what YOU did / the thinking involved
   - `outcome`       the value / result (kept honest, no invented metrics)
   - `stack`         tools used
   - `image`         optional screenshot path; null = gradient placeholder
   - `links.live` / `links.repo`  add a URL when available

   Featured projects render first and span the full row.
   ============================================================= */

export const projects = [
  {
    title: "Predicting Patient Disposition with Machine Learning",
    category: "Predictive Modeling",
    featured: true,
    summary:
      "A predictive study using clinical and demographic data to forecast patient disposition outcomes.",
    contributions: [
      "Framed the problem and assembled clinical + demographic features for modeling",
      "Built and evaluated a predictive model to forecast disposition outcomes",
      "Interpreted the results into guidance that supports clinical decision-making",
    ],
    outcome:
      "Showed how predictive analytics can give healthcare staff an evidence-based signal earlier in the process.",
    role: "Researcher · Data Analyst",
    stack: ["Python", "Predictive Modeling", "Research Methods", "Excel"],
    image: null,
    links: { live: null, repo: null },
  },
  {
    title: "Sentiment Analysis for College Students",
    category: "Data Analytics",
    summary:
      "An analysis of student opinions and feedback to help institutions act on what students actually feel.",
    contributions: [
      "Collected and cleaned unstructured student feedback for analysis",
      "Applied sentiment classification to categorize opinions and surface recurring concerns",
      "Translated the findings into trends institutions can use to improve student experience",
    ],
    outcome:
      "Turned scattered, unstructured feedback into clear, decision-ready themes.",
    role: "Researcher · Data Analyst",
    stack: ["Python", "Data Analytics", "Research Methodology"],
    image: null,
    links: { live: null, repo: null },
  },
  {
    title: "Educational Management System",
    category: "System Design",
    summary:
      "A unified platform concept streamlining academic processes for students, faculty, and administrators.",
    contributions: [
      "Mapped requirements across student, faculty, and admin roles into one system design",
      "Designed the UI/UX and information architecture across web, mobile, and desktop",
      "Built front-end views backed by a PHP / MySQL data layer",
    ],
    outcome:
      "A cohesive multi-platform concept that reduces friction in everyday academic workflows.",
    role: "System Analyst · UI/UX Designer · Developer",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: null,
    links: { live: null, repo: null },
  },
  {
    title: "Responsive Web Application",
    category: "Web Development",
    summary:
      "A web application engineered to deliver a consistent experience on any device.",
    contributions: [
      "Developed a mobile-first layout that adapts cleanly from phone to desktop",
      "Focused on usability, accessibility, and cross-browser compatibility",
    ],
    outcome: "A consistent, accessible experience across screen sizes.",
    role: "Frontend Developer · UI Designer",
    stack: ["HTML", "CSS", "JavaScript"],
    image: null,
    links: { live: null, repo: null },
  },
  {
    title: "Fitness Tracker Application",
    category: "Mobile",
    summary: "A mobile prototype for logging and monitoring fitness activity.",
    contributions: [
      "Prototyped a mobile app to log activities and track personal progress",
      "Designed simple, focused flows around the core tracking experience",
    ],
    outcome: "A working prototype that validated the core tracking idea.",
    role: "Mobile App Developer",
    stack: ["MIT App Inventor"],
    image: null,
    links: { live: null, repo: null },
  },
];
