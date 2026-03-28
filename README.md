# Sesha Gudimella — Personal Portfolio Site

🌐 **Live site: [seshagudimella.github.io](https://seshagudimella.github.io)**

A personal thought leadership and portfolio website for **Sesha Gudimella**, Senior Manager of Cloud & Platform Engineering.

---

## What's in the site

| Section | Description |
|---|---|
| **Hero** | Positioning headline, key metrics, and cloud infrastructure topology diagram |
| **Impact** | Three narrative case studies with data visualizations |
| **Stack** | Tech stack grid by category + platform ownership map diagram |
| **Writing** | Links to published work on the Sonos Tech Blog and Datadog's case study library |
| **Principles** | Five core beliefs about platform engineering and cloud culture |
| **Projects** | Open work — scripts, dashboards, and tooling |
| **Connect** | LinkedIn link |

### Impact stories covered
1. **$100K/month AWS cost reduction** — rightsizing, Spot Fleet, Reserved Instances, Savings Plans
2. **~50% EKS CI cost reduction** — Datadog CI Pipeline Visibility, Jenkins, SLOs
3. **Observability consolidation** — AWS Cost Explorer → nOps → Datadog (single ecosystem)

---

## Project structure

```
portfolio-site/
├── index.html    ← HTML markup only (structure and content)
├── styles.css    ← All visual styling and responsive layout
├── script.js     ← All interactivity (animations, scroll behaviour, visitor counter)
└── README.md     ← This file
```

### File responsibilities

| File | Role | What to edit here |
|---|---|---|
| `index.html` | Structure & content | Text, sections, SVG diagrams, nav links |
| `styles.css` | Visual design | Colors, fonts, spacing, layout, responsive breakpoints |
| `script.js` | Behaviour | Counter animations, scroll effects, GoatCounter integration |

---

## How to open locally

Double-click `index.html` — it opens in any browser with no server needed. All three files must stay in the same folder for the styles and scripts to load correctly.

---

## How to publish

### GitHub Pages
1. Upload all three files (`index.html`, `styles.css`, `script.js`) to the root of the `seshagudimella.github.io` repo
2. Go to **Settings → Pages → Deploy from branch (main)**
3. Your site goes live at `https://seshagudimella.github.io`

### Custom domain
Once live on GitHub Pages, point `seshagudimella.com` to it.
Domains cost ~$10–15/year on [Namecheap](https://namecheap.com) or [Google Domains](https://domains.google).

---

## Customisation notes

- **To update text:** open `index.html` in any text editor and find the section you want to change
- **To update the bar chart:** search for `ic-visual-pane` inside Card 1 in `index.html` and edit the SVG rect values
- **To change colours or fonts:** open `styles.css` and edit the CSS variables inside `:root { ... }` at the top
- **To add a new section:** duplicate an existing `<section>` block in `index.html` and update the content
- **To add new behaviour:** add JavaScript to `script.js`

---

## Tech stack

Plain HTML + CSS + vanilla JavaScript. No frameworks, no build step, no node_modules.
External dependencies: Google Fonts (Inter) via CDN, GoatCounter analytics.

---

*Built with Claude — Cowork mode*
