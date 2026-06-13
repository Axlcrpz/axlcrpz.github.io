# Axcel Corpuz — Developer Portfolio

A scalable, **data-driven** personal portfolio built with plain **HTML, modern CSS, and vanilla JavaScript (ES Modules)** — no build step, no framework. Open it, edit it, ship it.

> Design direction: **bold & expressive** · light + dark theme · subtle, performance-friendly motion · optimized for tech recruiters.

---

## ✨ Why this is more than a template

- **Content is separated from UI.** All your text — bio, skills, projects, education, links — lives in `js/data/`. You almost never touch HTML to update the site.
- **Modular & reusable.** Each section renders from a small module; cards/icons/buttons are shared components. No copy-pasted markup.
- **Themeable by tokens.** Colors, type scale, spacing, and both themes are defined once in `css/tokens.css`.
- **Accessible & fast.** Semantic HTML, keyboard focus styles, skip link, `prefers-reduced-motion` support, lazy images, no heavy libraries.

---

## 🚀 Getting started

This project uses **ES Modules**, which browsers only load over `http://` (not `file://`). So run it through a tiny local server:

### Option A — VS Code Live Server (recommended)
1. Install the **Live Server** extension.
2. Right-click `index.html` → **Open with Live Server**.

### Option B — any static server
```bash
# Python 3
python -m http.server 5500

# or Node
npx serve .
```
Then open the printed URL (e.g. http://localhost:5500).

> Opening `index.html` directly by double-click will show a blank page — that's the module/CORS restriction, not a bug. Use a server.

---

## 🗂 Project structure

```
axcel-portfolio/
├─ index.html              # Entry point: section mount points only
├─ README.md
├─ .gitignore
├─ assets/
│  ├─ img/                 # Project screenshots, photos (see its README)
│  └─ resume/              # Your CV PDF (see its README)
├─ css/
│  ├─ main.css             # Imports the partials below (in cascade order)
│  ├─ tokens.css           # 🎨 Design tokens + light/dark themes
│  ├─ base.css             # Reset + base elements + typography
│  ├─ layout.css           # Container, navbar, footer, grids
│  ├─ components.css       # Buttons, cards, tags, theme toggle, headers
│  ├─ sections.css         # Per-section styling
│  └─ animations.css       # Keyframes + scroll reveal + reduced motion
└─ js/
   ├─ main.js              # App entry: renders all sections, boots behaviors
   ├─ data/                # 📝 YOUR CONTENT lives here
   │  ├─ profile.js        #   name, role, headline, focus chips, about, stats, docs
   │  ├─ focus.js          #   "What I do" value-proposition cards
   │  ├─ skills.js         #   skill groups
   │  ├─ projects.js       #   projects (category, featured, impact bullets)
   │  ├─ education.js      #   education timeline + certifications
   │  └─ socials.js        #   email + social links
   ├─ components/          # Reusable UI pieces (return HTML strings)
   │  ├─ icons.js          #   central inline-SVG icon registry
   │  ├─ navbar.js
   │  ├─ themeToggle.js
   │  ├─ projectCard.js
   │  └─ skillGroup.js
   ├─ sections/            # One renderer per page section
   │  ├─ hero.js
   │  ├─ about.js
   │  ├─ focus.js
   │  ├─ skills.js
   │  ├─ projects.js
   │  ├─ education.js
   │  └─ contact.js
   └─ utils/
      ├─ dom.js            # qs/qsa/mount/esc helpers
      ├─ reveal.js         # IntersectionObserver scroll reveal (with failsafe)
      └─ scroll.js         # scroll-progress bar + active-nav scroll-spy
```

---

## 🏛 Architecture at a glance

```
index.html  ──>  loads css/main.css  +  js/main.js (module)
                                            │
                main.js  imports  ──────────┤
                                            │
        data/*.js  ──(content)──>  sections/*.js ──(render)──> #mount points
                                            │
        components/*.js  (cards, icons, navbar)  reused by sections
        utils/*.js       (dom, reveal)           shared helpers
```

**Data flow is one-directional:** data → render function → DOM. UI never hard-codes content. To change what the site says, edit `data/`. To change how it looks, edit `css/`. To change behavior, edit `sections/` or `components/`.

---

## ✏️ Common edits

| I want to…                          | Edit this file                                  |
|-------------------------------------|-------------------------------------------------|
| Change name / headline / bio / focus| `js/data/profile.js`                            |
| Edit the "What I do" cards          | `js/data/focus.js`                              |
| Add / edit a project (+ feature it) | `js/data/projects.js` (`featured: true`)        |
| Add a project screenshot            | drop in `assets/img/`, set `image:` in projects |
| Add / reorder skills                | `js/data/skills.js`                             |
| Update education / certifications   | `js/data/education.js`                          |
| Update email / social links         | `js/data/socials.js`                            |
| Add / change downloadable docs      | `js/data/profile.js` (`documents` array)        |
| Change brand color / fonts          | `css/tokens.css`                                |
| Adjust a section's layout           | `css/sections.css`                              |

### Change the accent color
In `css/tokens.css`:
```css
--brand-1: #7c5cff;  /* primary */
--brand-2: #d946ef;  /* secondary (gradient end) */
--brand-3: #22d3ee;  /* support accent */
```

### Default theme
The page defaults to **dark** and remembers the visitor's choice. Change the
default in `index.html` (`<html data-theme="dark">`) and the inline guard script.

---

## ➕ Adding a new section (e.g. "Experience")

1. **Data:** create `js/data/experience.js` exporting your array.
2. **Renderer:** create `js/sections/experience.js` with a `renderExperience()` that builds HTML and calls `mount("experience", html)`.
3. **Mount point:** add `<section id="experience" class="section"></section>` in `index.html`.
4. **Wire it:** import and call `renderExperience()` inside `renderAll()` in `js/main.js`.

No other file needs to change.

---

## 📨 Contact form

The form is backend-free: on submit it opens the visitor's email client with a
pre-filled message (`mailto:`). To use a hosted form service later
(e.g. Formspree, Web3Forms), replace the submit handler in
`js/sections/contact.js` with a `fetch()` POST — the markup stays the same.

---

## 🧩 Planned integrations (inspiration files)

The design is intentionally built to absorb richer visuals later:
- The hero has a **visual panel slot** (`.hero-visual`) ready for an interactive
  3D / Spline / canvas scene.
- Scroll reveal, theme toggle, and a modular navbar are already in place.

When integrating external snippets, they'll be **refactored into this system's
tokens, components, and structure** — not pasted as-is.

---

## ✅ Quality conventions

- Vanilla ES Modules, no global scope pollution.
- One responsibility per file; shared logic extracted to `components/` & `utils/`.
- Content escaped before injection (`utils/dom.js → esc`).
- Comments explain the *why*, not the obvious.
- Fully responsive, mobile-first; tested down to ~360px.

---

© Axcel Jhaze M. Corpuz
