# AI-Assisted Development — Prompt Sequence (v3 Build)

**Project:** Airbnb Listing Clone v3 — Modern Standalone App  
**AI Assistant:** Antigravity (Google DeepMind)  
**Live Production URL:** [https://airbnb-clone-two-pearl-84.vercel.app/](https://airbnb-clone-two-pearl-84.vercel.app/)  
**Date:** September 2026  
**Status:** Production-Ready

---

## 💡 Methodology & Architectural Strategy

1. **Systematic Reverse-Engineering**: Extracted listing schema, 72 high-resolution property images, and 46 authentic Airbnb SVG icons.
2. **Clean Component Scaffolding**: Decoupled monolithic layout into 15 domain-scoped subdirectories (`Header`, `Hero`, `Overview`, `Sleep`, `Amenities`, `Calendar`, `Booking`, `Reviews`, `Location`, `Host`, `ThingsToKnow`, `MoreStays`, `PhotoTour`, `Lightbox`, `UI`).
3. **Isolated Data Store (`propertyData.js`)**: Encapsulated property details, photo category rows, host information, reviews, and 50+ amenity groupings.
4. **CSS Token & Layout System (`index.css`)**: Pure CSS variables (`--ink`, `--rausch`, `--reserve`), custom font fallbacks, responsive grid primitives (`35fr 17fr 17fr` hero grid, 2-column detail grid, full-bleed overlays).
5. **Interactive Layering & Accessibility**: Implemented scroll-locking, focus outline detection (`kbd`), and keyboard event handlers (`ArrowLeft`, `ArrowRight`, `Escape`).

---

## 📜 Development Prompt Sequence

### **Phase 1: Discovery & Architecture Planning**
- **Prompt 1**: Analyze the target Airbnb listing page and reverse-engineer content structure, SVG icon paths, photo tour categories, and CSS design tokens.
- **Action**: Parsed reference layout, defined domain schema in `src/data/propertyData.js`, and initialized `src/lib/icons.jsx` with 46 exact Airbnb SVG icon components.

---

### **Phase 2: Core Component Construction**
- **Prompt 2 (Header)**: Build sticky navigation header with logo, search bar, and secondary scroll-aware subnav with quick section links and floating reserve trigger.
- **Prompt 3 (HeroGrid)**: Construct 5-image hero grid using `35fr 17fr 17fr` layout ratio, with "Show all photos" overlay trigger and favorite save state.
- **Prompt 4 (OverviewSection)**: Build listing title, specs, Guest Favourite badge with laurel SVGs, host quick preview, highlights, and expandable description text.
- **Prompt 5 (SleepSection & AmenitiesSection)**: Build sleep card grid and amenities preview with link to full 50+ item grouped modal.
- **Prompt 6 (CalendarPicker & BookingCard)**: Implement 2-month date picker calendar and sticky booking sidebar card with discount badge, price breakdown, and date/guest selectors.
- **Prompt 7 (ReviewsSection)**: Build reviews section featuring overall score display with laurels, 5-star rating breakdown bars, 6 category rating columns, topic chips, and expandable review cards.
- **Prompt 8 (LocationMap & HostSection)**: Build map simulation with zoom controls and host profile details including superhost badge, facts, and co-hosts grid.
- **Prompt 9 (ThingsToKnow & MoreStays)**: Implement collapsible house rules, safety policies, and paginated horizontal recommendation carousel.

---

### **Phase 3: Overlays & Accessibility**
- **Prompt 10 (PhotoTourOverlay)**: Build full-screen photo tour overlay featuring 9 sticky category thumbnail tabs, scroll-to-category navigation, and custom row image grids.
- **Prompt 11 (LightboxModal)**: Build nested lightbox viewer with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), photo count tracking, boundary button states, and image fade animation.
- **Prompt 12 (State Orchestration)**: Wire scroll-lock behavior in `App.jsx` for modal/overlay states and keyboard focus outline detection.

---

### **Phase 4: Optimization & Documentation**
- **Prompt 13 (Build Optimization & Vercel Config)**: Optimize Vite bundle, setup `vercel.json` with cache-control and security headers (`X-Content-Type-Options`, `X-Frame-Options`), and generate senior-level architecture documentation.

---

## 📊 Summary of Achieved Metrics

| Metric | Target | Result |
|--------|--------|--------|
| Modular Components | Single Responsibility | 15 Domain Components |
| Keyboard Accessibility | Full Support | ArrowLeft / ArrowRight / Escape / Tab |
| Icons | Exact Match | 46 Airbnb SVGs |
