# MVP Scope: Netso.energy Marketing Website

## Goal
Launch a high-impact, 3D storytelling marketing website for Netso.energy to gather interest and build a waitlist of at least 500 potential users.

## Core User Journey
1. **Landing:** User arrives and sees a cinematic preloader that sets the stage for "energy independence."
2. **Discovery:** User scrolls through a narrative that reveals the "invisible" complexity and costs of current energy systems.
3. **Value Prop:** User sees how Netso simplifies energy management and optimization.
4. **Action:** User joins the waitlist via a simple email collection form.

## Key Features (MVP)
1. **3D Hero Narrative:** A scroll-driven 3D experience featuring a stylized home energy ecosystem (solar panels, battery, appliances).
2. **Interactive Problem/Solution Sections:**
   - **The Energy Avalanche:** Visual representation of rising costs and grid complexity.
   - **The Netso Dashboard:** A simplified 3D view of the Netso platform bringing clarity to the chaos.
3. **Waitlist Collection:** Integration with a backend service (e.g., simple API or database) to store email addresses.

## In-Scope
- Single-page scroll-driven 3D narrative (Next.js + R3F).
- Responsive design (2D fallback for mobile if 3D is too heavy).
- Basic analytics and tracking.
- Waitlist form with validation.
- SEO optimization for core keywords.

## Out-of-Scope (Non-Goals)
- Full multi-page site (no blog, no individual feature pages yet).
- User accounts or dashboard login.
- Real-time data integration with actual solar inverters (will use simulated/static data for the marketing site).
- Complex 3D interactions beyond scroll-based camera moves.
- Multi-language support.

## Success Metrics for MVP
- Lighthouse score 90+.
- LCP < 4s.
- 500+ waitlist signups.
- Zero critical bugs on Chrome, Safari, and Firefox.
