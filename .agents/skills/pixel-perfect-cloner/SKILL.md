---
name: pixel-perfect-cloner
description: Automated guidelines for AI agents to clone complex web application interfaces with full fidelity.
---

# Pixel-Perfect Cloner Skill

## Sub-agent Workflow
1. **Phase 1 — Analysis & Extraction**: Inspect reference markup, assets, and design tokens using `grep_search` and `view_file`.
2. **Phase 2 — Modular Implementation**: Create domain components under `src/components/`.
3. **Phase 3 — Interactive Micro-animations**: Ensure transitions, carousels, and overlay modals have smooth cubic-bezier motion.
4. **Phase 4 — Verification**: Execute build checks (`npm run build`) and test local dev server.
