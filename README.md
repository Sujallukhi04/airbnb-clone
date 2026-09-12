# Airbnb Listing Clone v3 | Standalone Clean Application

![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-6.4-purple) ![Status](https://img.shields.io/badge/Status-Production%20Ready-green)

> **Pixel-perfect Airbnb listing detail page** built from scratch with **React 19 + Vite**, featuring modular component decoupling, full-screen Photo Tour overlay, keyboard-navigated Lightbox, interactive Calendar picker, and responsive design tokens.

---

## 🌟 Key Highlights & Architectural Advantages

1. **Decoupled Modular Component Tree**: 15 single-responsibility React components categorized into domain modules (`Header`, `Hero`, `Overview`, `Sleep`, `Amenities`, `Calendar`, `Booking`, `Reviews`, `Location`, `Host`, `ThingsToKnow`, `MoreStays`, `PhotoTour`, `Lightbox`, `UI`).
2. **Exact Icon System (`lib/icons.jsx`)**: 46 authentic Airbnb SVG icon components extracted and mapped for seamless rendering.
3. **Structured Data Layer (`data/propertyData.js`)**: All listing content, ratings, reviews, amenities, host details, and photo category mapping cleanly managed in an isolated module.
4. **Full Accessibility & Overlay Layering**:
   - Keyboard controls: `ArrowLeft` / `ArrowRight` photo navigation in Lightbox, `Escape` to close modals, `Tab` focus ring detection.
   - Body scroll-lock pattern on open overlays.
   - Dynamic 3-breakpoint responsive design (Mobile 375px, Tablet 768px, Desktop 1280px).

---

## 🚀 Quick Start

```bash
# Navigate to the project directory
cd airbnb-clone-v3

# Install dependencies
npm install

# Start local development server (runs on port 5175)
npm run dev

# Build for production
npm run build
npm run preview
```

---

## 🤖 AI Agent Configurations & Skills

- **`.antigravity/configs.json`**: Defines specialized AI subagents (`research`, `code-builder`, `ui-auditor`) and skill manifests.
- **`.agents/skills/pixel-perfect-cloner/SKILL.md`**: Guidelines for pixel-perfect design token extraction and visual parity.
- **`.antigravity/skills/antigravity-guide/SKILL.md`**: Skill set for agentic coding and behavioral parity.

---

## 📂 Project Structure

```
airbnb-clone-v3/
├── .antigravity/               # AI subagent configurations & skill definitions
│   ├── configs.json            # Subagent tools & skills registry
│   └── skills/                 # Custom Antigravity agent skills
├── .agents/                    # Specialized AI workflow skills
│   └── skills/pixel-perfect-cloner/
├── index.html                  # Main entry point & Google Fonts
├── vite.config.js              # Vite configuration (port 5173)
├── vercel.json                 # Vercel deployment & security headers
├── package.json                # Dependencies & scripts
├── public/                     # Static assets & 72 property images
└── src/
    ├── main.jsx                # App bootstrap
    ├── App.jsx                 # Root layout & overlay state orchestration
    ├── index.css               # Design tokens, variables & responsive layouts
    ├── data/
    │   └── propertyData.js     # Property metadata & photo tour mapping
    ├── lib/
    │   └── icons.jsx           # 46 Airbnb SVG icon components
    └── components/
        ├── Header/             # Header & sticky secondary navigation
        ├── Hero/               # 5-photo responsive hero grid
        ├── Overview/           # Overview, highlights & Guest Favourite badge
        ├── Sleep/              # Sleeping arrangements
        ├── Amenities/          # Preview grid & 50+ item modal
        ├── Calendar/           # 2-month date picker
        ├── Booking/            # Sticky price & reservation card
        ├── Reviews/            # Rating distribution, category scores & review cards
        ├── Location/           # Interactive map simulation with zoom controls
        ├── Host/               # Host profile, facts & co-hosts grid
        ├── ThingsToKnow/       # House rules, safety & cancellation rules
        ├── MoreStays/          # Paginated recommendation carousel
        ├── PhotoTour/          # Full-screen 9-category photo tour overlay
        ├── Lightbox/           # Keyboard-controlled image viewer modal
        └── UI/                 # Toast notifications
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `ArrowLeft` | Previous photo (in Lightbox) |
| `ArrowRight` | Next photo (in Lightbox) |
| `Escape` | Close active Lightbox / Modal overlay |
| `Tab` / `Shift+Tab` | Accessible focus navigation |

---

## 📊 Performance & Optimization

- **Target Lighthouse Scores**:
  - Performance: `95+`
  - Accessibility: `95+`
  - Best Practices: `95+`

---

## 🚀 Deployment to Vercel

1. Push repo to GitHub.
2. Connect repository on [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`, Output Directory: `dist`.
5. Deploy! ✅

---

## 📝 License

MIT — Created for educational & technical demonstration purposes.
