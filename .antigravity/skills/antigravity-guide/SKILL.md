---
name: antigravity-guide
description: Visual parity evaluation and agentic coding workflow for pixel-perfect UI cloning.
---

# Antigravity UI Parity & Development Skill

## Overview
This skill guides AI subagents during the development of `airbnb-clone-v3`. It enforces visual fidelity, behavioral parity, component decoupling, and production build standards.

## Core Principles
1. **Pixel-Perfect Fidelity**: Extract design tokens (colors, fonts, radii, spacing) directly from the reference DOM.
2. **Behavioral Parity**: Implement interactive states (hovers, active states, smooth scroll, keyboard navigation).
3. **Decoupled Component Architecture**: Build single-responsibility, reusable JSX components in `src/components/`.
4. **Accessibility**: Include ARIA labels, semantic HTML, keyboard focus states (`.kbd`), and dark/light contrast parity.
