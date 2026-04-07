# Netso.energy: 3D Storytelling Website Plan
*Created: 2026-04-07*

---

## Executive Summary

Netso.energy is an AI-powered home energy management & optimization platform that solves a growing pain point: homeowners are adopting solar, batteries, and smart appliances but lack a single source of truth to manage their energy ecosystem. Rising grid costs and grid uncertainty make energy independence a top priority.

**Website Goal:** Build a world-class 3D storytelling website that transforms complex home energy data into an immersive, emotional brand experience — making visitors understand the "Invisible Energy Avalanche" and feel Netso is the only smart way to take control.

---

## Market Analysis

### The Problem (Pain Points)
1. **The Invisible Avalanche:** Rising costs, complex regulations, and grid uncertainty.
2. **Data Chaos:** Homeowners manage energy specs across disconnected inverter apps, battery monitors, and smart home systems.
3. **Savings Blindness:** No clear view of ROI on solar/battery investments.
4. **Energy Independence:** Growing desire to be less reliant on the aging grid.

### Target Audience
- **Primary:** Solar owners and battery adopters (Homeowners).
- **Secondary:** Tech-savvy homeowners planning to transition to renewable energy.

### Competitive Landscape
| Competitor | Position | Netso's Edge |
|---|---|---|
| Tesla Powerwall | Integrated ecosystem | Hardware-agnostic, multi-inverter support |
| Sense | Appliance tracking | Software-first, no extra hardware install |
| Default Inverter Apps | Basic monitoring | Advanced AI optimization, beautiful UI |

---

## Website Experience: The 3D Journey

### Concept: "The Journey to Energy Independence" 
The entire website is a single-scroll 3D narrative following energy's flow through a home — from production (solar) to storage (battery) to consumption (appliances) — revealing the hidden costs and inefficiencies at each stage.

### Page Architecture

#### 0. Preloader (2-3 seconds)
- A stylized home materializes in 3D.
- Text: "Own Your Energy. Own Your Future."
- Subtle energy flow animation.

#### 1. Hero Section — "The Invisible Problem"
- **3D Scene:** A stylized home energy ecosystem floating in void.
- **Headline:** "Your Home Has an Energy Problem You Can't See"
- **Subheadline:** "Netso makes invisible energy flows visible, costs predictable, and energy decisions effortless."
- **CTA:** "Explore the Journey →" (scroll trigger) or "Join the Waitlist"

#### 2. The Problem — "The Energy Avalanche"
- **3D Scene:** Visual representation of rising costs and grid complexity.
- **Narrative:** "Rising costs, complex regulations, and grid uncertainty. You're producing energy, but are you really in control?"

#### 3. The Solution — "Meet Netso"
- **3D Scene:** The chaotic energy flow smoothly organizes. Data streams flow into a clean, luminous Netso interface.
- **Key Message:** "Hardware-agnostic energy intelligence that puts homeowners in control."

#### 4. The Platform — Feature Showcase
- **3D Scene:** Netso platform rotates in 3D space.
- **Features:**
  1. **Energy Monitoring:** Real-time production and consumption tracking.
  2. **Smart Optimization:** AI-driven storage and usage management.
  3. **Multi-Device Support:** Support for the top 3 solar inverters out of the box.

#### 5. Social Proof / Waitlist
- **Scene:** "Join 500+ homeowners already on the waitlist."
- **CTA:** Join the Waitlist form.

#### 6. Footer
- Clean, minimal links.

---

## Technical Architecture

### Framework: Next.js 14 + React Three Fiber + Three.js
| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSR, SEO, edge rendering |
| 3D Engine | Three.js + React Three Fiber | Declarative 3D in React |
| Animation | GSAP + ScrollTrigger + Framer Motion | Scroll-driven narratives |

### Performance Strategy
- Three.js models: Draco compression.
- Lazy load 3D sections on scroll.
- Fallback: static images for mobile/low-power devices.

---

## Development Phases

### Phase 1: Foundation
- [x] Next.js setup with Tailwind
- [x] Core page structure (all sections)
- [x] Typography, color system (from docs/BRAND-IDENTITY.md)
- [x] Marketing copy (from docs/MARKETING-COPY.md)

### Phase 2: 3D Assets
- [ ] Create/Source 3D models: Stylized home, solar panels, battery, appliances.
- [ ] Load into React Three Fiber scenes.

### Phase 3: Scroll Narrative
- [ ] GSAP ScrollTrigger integration.
- [ ] Camera path animations.

### Phase 4: Polish & Launch
- [ ] Performance optimization.
- [ ] Deployment to Vercel.
