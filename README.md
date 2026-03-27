# Sesha Gudimella — Personal Portfolio Site

🌐 **Live site: [seshagudimella.github.io](https://seshagudimella.github.io)**

A personal thought leadership and portfolio website for **Sesha Gudimella**, Senior Manager of Cloud & Platform Engineering.

---

## What's in the site

| Section | Description |
|---|---|
| **Hero** | Positioning headline, key metrics, and cloud infrastructure topology diagram |
| **Impact** | Three narrative case studies with data visualizations |
| **Writing** | Links to published work on the Sonos Tech Blog and Datadog's case study library |
| **Principles** | Five core beliefs about platform engineering and cloud culture |
| **Connect** | LinkedIn link |

### Impact stories covered
1. **$100K/month AWS cost reduction** — rightsizing, Spot Fleet, Reserved Instances, Savings Plans
2. **~50% CI cost reduction** — Datadog CI Pipeline Visibility, Jenkins, GKE, SLOs
3. **Observability consolidation** — AWS Cost Explorer → nOps → Datadog (single ecosystem)

---

## How to open locally

Just double-click `index.html` — it opens in any browser, no server needed.

---

## How to publish (get a shareable link)

### Option A — Netlify Drop (quickest, free)
1. Go to **[netlify.com/drop](https://netlify.com/drop)**
2. Drag and drop `index.html` onto the page
3. You'll get a live URL instantly (e.g. `random-name.netlify.app`)
4. Create a free account to keep the URL permanent and rename it

### Option B — GitHub Pages (best for long-term)
1. Create a GitHub repo named `seshagudimella.github.io`
2. Upload `index.html` to the root of the repo
3. Go to **Settings → Pages → Deploy from branch (main)**
4. Your site goes live at `https://seshagudimella.github.io`

### Option C — Custom domain
Once live on GitHub Pages or Netlify, point `seshagudimella.com` to it.
Domains cost ~$10–15/year on [Namecheap](https://namecheap.com) or [Google Domains](https://domains.google).

---

## Customisation notes

All content is in a single `index.html` file — no build tools, no dependencies, no node_modules.

- **To update text:** open `index.html` in any text editor and search for the section you want to change
- **To update the bar chart data:** search for `ic-visual-pane` inside Card 1 and edit the SVG rect coordinates
- **To change colours:** edit the CSS variables at the top of the file inside `:root { ... }`
- **To add a new section:** duplicate an existing `<section>` block and update the content

---

## Tech stack

Plain HTML + CSS + vanilla JavaScript. No frameworks, no build step.
External dependency: Google Fonts (Inter) — loads from CDN.

---

*Built with Claude — Cowork mode*
