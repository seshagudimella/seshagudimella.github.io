# Sesha Gudimella — Personal Portfolio Site

🌐 **Live site: [seshagudimella.github.io](https://seshagudimella.github.io)**

A personal thought leadership and portfolio website for **Sesha Gudimella**, Senior Manager of Cloud & Platform Engineering.

---

## What's in the site

| Section | Description |
|---|---|
| **Hero** | Positioning headline, key metrics, and cloud infrastructure topology diagram |
| **Impact** | Four narrative case studies with data visualizations |
| **Stack** | Tech stack grid by category (incl. Data & Analytics) + platform ownership map diagram |
| **Writing** | Links to published work on the Sonos Tech Blog and Datadog's case study library |
| **Principles** | Five core beliefs about platform engineering and cloud culture |
| **Projects** | Open work — scripts, dashboards, and tooling |
| **Connect** | LinkedIn link |

### Impact stories covered
1. **$100K/month AWS cost reduction** — rightsizing, Spot Fleet, Reserved Instances, Savings Plans
2. **~50% EKS CI cost reduction** — Datadog CI Pipeline Visibility, Jenkins, SLOs
3. **Observability consolidation** — AWS Cost Explorer → nOps → Datadog (single ecosystem)
4. **Incident & Postmortem Framework** — 35% fewer repeat incidents, 25% MTTR improvement (Datadog, Snowflake, Tableau)

---

## Project structure

```
/
├── index.html                  ← App entry point (root div + GoatCounter)
├── package.json                ← Dependencies: React, Vite
├── vite.config.js              ← Vite build configuration
├── .github/workflows/
│   └── deploy.yml              ← Auto-deploys to GitHub Pages on every push
└── src/
    ├── main.jsx                ← Mounts the React app, imports global styles
    ├── App.jsx                 ← Root component, assembles all sections
    ├── styles.css              ← All visual styling and responsive layout
    ├── diagrams.js             ← All SVG diagrams as ES module export
    └── components/
        ├── Nav.jsx             ← Fixed nav with scroll-based active link
        ├── Hero.jsx            ← Hero section with animated counters
        ├── Impact.jsx          ← Four impact case study cards
        ├── Writing.jsx         ← Published work and recognition
        ├── Principles.jsx      ← Five engineering principles
        ├── Stack.jsx           ← Tech stack grid + platform ownership map
        ├── Projects.jsx        ← Open work and side projects
        ├── Connect.jsx         ← LinkedIn call to action
        └── Footer.jsx          ← Footer with live visitor count
```

---

## How to run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## How it deploys

Every `git push` to `main` automatically triggers the GitHub Action (`.github/workflows/deploy.yml`) which:
1. Installs dependencies (`npm install`)
2. Builds the project (`npm run build`) → outputs to `dist/`
3. Pushes the built files to the `gh-pages` branch
4. GitHub Pages serves the site at `https://seshagudimella.github.io`

No manual steps needed after the initial setup.

---

## Customisation notes

- **To update text or content:** edit the relevant component in `src/components/`
- **To update a diagram:** open `src/diagrams.js` and find the relevant entry (e.g. `costChart`, `incidentFramework`, `platformMap`) and edit the SVG values
- **To change colours or fonts:** open `src/styles.css` and edit the CSS variables inside `:root { ... }` at the top
- **To add a new section:** create a new component in `src/components/`, import it in `src/App.jsx`, and add it to the render output

---

## Tech stack

React 18 + Vite. No UI library, no CSS-in-JS — just React components and a single global CSS file.
External dependencies: Google Fonts (Inter) via CDN, GoatCounter analytics.

---

*Built with Claude — Cowork mode*
