/* =============================================================
   data/projects.js — Project showcase.
   For each project:
   - `featured` (optional) can be used later to highlight one card.
   - `image` is optional; drop a screenshot in assets/img/ and set the
     path (e.g. "./assets/img/edu-system.png"). If null, a gradient
     placeholder with the project's initials is shown.
   - `links.live` / `links.repo`: set to a URL or leave null/"".
   ============================================================= */

export const projects = [
  {
    title: "Educational Management System Portfolio",
    summary:
      "A comprehensive educational management platform designed to streamline academic processes and improve user experience.",
    description:
      "Developed a conceptual educational system portfolio that integrates web, mobile, and desktop platforms to provide a unified educational experience for students, faculty, and administrators.",
    role: "System Analyst · UI/UX Designer · Developer",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: null,
    links: { live: null, repo: null },
  },
  {
    title: "Sentiment Analysis for College Students",
    summary:
      "A sentiment analysis project focused on understanding student opinions and feedback.",
    description:
      "Designed a system that analyzes and categorizes student sentiments to help institutions identify trends, concerns, and areas for improvement among college students.",
    role: "Researcher · Data Analyst",
    stack: ["Python", "Data Analytics", "Research Methodology"],
    image: null,
    links: { live: null, repo: null },
  },
  {
    title: "Predicting Patient Disposition Using Machine Learning",
    summary:
      "A predictive analytics study using clinical and demographic data to forecast patient disposition outcomes.",
    description:
      "Developed a predictive model that examines patient clinical records and demographic information to identify patterns associated with disposition outcomes — assisting healthcare professionals in making data-driven decisions.",
    role: "Researcher · Data Analyst",
    stack: ["Research Methods", "Data Analysis", "Microsoft Excel"],
    image: null,
    links: { live: null, repo: null },
  },
  {
    title: "Responsive Web Application",
    summary:
      "A responsive website designed to deliver a consistent experience across devices.",
    description:
      "Designed and developed a responsive web application emphasizing usability, accessibility, and compatibility across desktop, tablet, and mobile platforms.",
    role: "Frontend Developer · UI Designer",
    stack: ["HTML", "CSS", "JavaScript"],
    image: null,
    links: { live: null, repo: null },
  },
  {
    title: "Fitness Tracker Application",
    summary: "A simple mobile fitness tracking application.",
    description:
      "Developed a mobile application prototype that helps users monitor fitness-related activities and personal progress.",
    role: "Mobile App Developer",
    stack: ["MIT App Inventor"],
    image: null,
    links: { live: null, repo: null },
  },
];
