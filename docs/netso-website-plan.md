# Netso: 3D Storytelling Website Plan for Neta AI
*Created: 2026-04-07*

---

## Executive Summary

Neta AI is an AI-powered packaging compliance & optimization platform (ERA-backed, NetaCarbon Inc.) that solves a massive, urgent pain point: 7 US states enacted EPR (Extended Producer Responsibility) packaging laws, 12 more introduced legislation in 2025, and consumer companies are drowning in compliance complexity, cost tracking, and sustainability reporting. 

**Website Goal:** Build a world-class 3D storytelling website (peachweb style) that transforms boring compliance software into an immersive, emotional brand experience — making visitors understand the scale of the packaging waste crisis and feel Neta is the only smart way to solve it.

---

## Market Analysis

### The Problem (Pain Points)
1. **Regulatory Explosion:** 7 states with EPR laws, 12+ new bills annually, patchwork of compliance requirements (Maine, Oregon, California, Colorado, Minnesota, Maryland, Washington)
2. **Data Chaos:** Consumer companies manage packaging specs across spreadsheets, BOMs, and disconnected systems
3. **Cost Blindness:** Hidden costs in packaging fees, EPR compliance fees, waste surcharges — no single source of truth
4. **Sustainability Pressure:** Investors, consumers, and boards demanding ESG commitments with measurable results
5. **Material Complexity:** PFAS bans, material swaps, recyclable vs compostable, regional differences

### Target Audience
- **Primary:** Sustainability directors & packaging managers at CPG (Consumer Packaged Goods) companies
- **Secondary:** Compliance officers, operations directors at mid-market product companies
- **Tertiary:** Investors & partners evaluating climate tech (credibility play)

### Competitive Landscape
| Competitor | Position | Neta's Edge |
|---|---|---|
| PCX Markets | EPR compliance platform (EU-heavy) | US-specific, AI-first |
| Compliance & Risks (c-r) | Regulatory tracking | Active AI optimization, not just tracking |
| EcoEnclose | Sustainable packaging materials | Software platform, data-driven |
| Spreadsheets & chaos | Default status quo | Everything |

### Total Addressable Market
- **7 states enacted + 12+ pending legislation** = inevitable nationwide EPR adoption within 3-5 years
- CPG companies = millions in compliance fees, thousands of SKUs each
- Climate tech narrative = premium valuation multiple, investor interest
- Positioning: "The AI compliance layer for the packaging economy"

---

## Website Experience: The 3D Journey

### Concept: "The Lifecycle of a Package" 
The entire website is a single-scroll 3D narrative following a package's journey — from design to disposal — revealing the hidden costs, regulations, and complexity at each stage. Visitors literally experience the problem Neta solves.

### Page Architecture

#### 0. Preloader (2-3 seconds)
- A package materializes in 3D — a beautiful e-commerce box
- Text: "This innocent package has 847 regulations hiding inside it"
- Subtle crack animation → reveals regulatory text fragments inside the package walls

#### 1. Hero Section — "The Invisible Problem"
- **3D Scene:** A shipping container floating in void, slowly opening. Inside: thousands of packages with tiny compliance labels (PFAS, EPR, recyclable codes)
- **Headline:** "Your Packaging Has a Compliance Problem You Can't See"
- **Subheadline:** "Neta AI makes invisible regulations visible, costs predictable, and packaging decisions effortless."
- **CTA:** "Explore the Journey →" (scroll trigger) or "Get Early Access"
- **Stats counter animating in:** "7 states | 12+ new bills | $___ in compliance fees"

#### 2. The Problem — "The Regulatory Avalanche"
- **3D Scene:** US map made of packages. States with EPR laws LIGHT UP in red/amber. A wave of legislation sweeps across the timeline (2022→2030)
- **Narrative:** "By 2028, over half of all US states will have EPR packaging laws. Each with different requirements, different deadlines, different fees."
- **Interactive:** Hover any state → see its regulation status & deadline
- **Emotional punch:** "That's 50+ rulebooks your packaging team needs to track"

#### 3. The Hidden Cost — "What's Inside Your Package?"
- **3D Scene:** Package explodes into a cutaway view showing layers: Material → Compliance → Fees → Waste → Carbon
- Each layer pulls apart on scroll → reveals data
  - "Material: $2.47/unit" → "Add EPR fee: $0.18" → "Add PFAS risk: +$40K recall" → "Add waste penalty: —"
  - Total cost revelation at the bottom
- **Key Message:** "The true cost of packaging is hidden in plain sight"

#### 4. The Solution — "Meet Neta"
- **Transition:** The chaotic exploded view smoothly organizes. All scattered data points flow into a clean, luminous Neta AI interface
- **3D Scene:** Data streams flowing into a sleek platform dashboard
- **Key Features revealed:**
  1. "AI that reads regulations so you don't have to"
  2. "Real-time compliance risk scoring for every SKU"
  3. "Scenario simulator: swap materials, see cost & compliance instantly"
  4. "Your AI packaging assistant — always on"
- **Visual:** Before/After split — chaos → clarity

#### 5. The Platform — Feature Showcase
- **3D Scene:** Platform rotates in 3D space, each side reveals a feature
- Smooth camera transitions between:
  - **Compliance Tracker:** "EPR, PFAS, material bans — tracked automatically"
  - **Risk Scoring:** "Every SKU scored. Every risk flagged. No surprises."
  - **Scenario Simulator:** "What if you switched to recycled cardboard? Neta tells you"
  - **AI Assistant:** "Ask anything. Get answers backed by proprietary databases"
- Each feature has a mini interactive demo

#### 6. Social Proof — "Backed by ERA"
- **Scene:** Clean, editorial section (3D fades into 2D for trust)
- ERA logo + quote: "NYC's largest accelerator program"
- Team section (Grace & Mar)
- Testimonial cards with hover depth effect

#### 7. The Vision — "The Future of Packaging Intelligence"
- **3D Scene:** A globe with light trails connecting companies, materials, regulations, and sustainability metrics
- "We're building the operating system for intelligent packaging"
- CTA: "Join us" → "Request Demo" / "Get in Touch"

#### 8. Footer
- Clean, minimal
- Newsletter signup
- Links: About, Contact, Glossary, Insights
- Copyright: "2026 NetaCarbon, Inc."

---

## Technical Architecture

### Framework: Next.js 14 + React Three Fiber + Three.js
| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR, SEO, edge rendering |
| 3D Engine | Three.js + React Three Fiber @react-three/fiber | Declarative 3D in React |
| Animation | GSAP + ScrollTrigger + Framer Motion | Scroll-driven narratives |
| 3D Models | glTF/GLB (Blender exported) | Optimized, compressed format |
| Post-processing | @react-three/postprocessing | Bloom, depth of field, vignette |
| State | Zustand | Lightweight, performant |
| Styling | Tailwind CSS + custom components | Rapid development |
| Typography | Geist + Inter | Clean, modern, performant |

### Design System — DESIGN.md (for AI coding agents)
- **Palette:** Deep navy (#0A1628) background, luminous teal (#00D4FF) primary, warm amber (#FF8C42) accent, white text
- **Lighting:** Cinematic — ambient fill + rim light on 3D objects
- **Motion:** Slow, deliberate, camera-driven (not flashy). Scroll = camera path through 3D scene
- **Typography scale:** Hero 72px → H2 48px → Body 16px → Small 14px
- **Breakpoints:** Mobile-first 3D degrades to 2D illustrations below 768px

### Performance Strategy
- Three.js models: Draco compression → <3MB per model
- Lazy load 3D sections on scroll (IntersectionObserver)
- Fallback: static images for mobile/low-power devices
- SSR critical sections, hydrate rest
- Target: <4s LCP, <2s FID, 90+ Lighthouse score

---

## Development Phases

### Phase 1: Foundation (Week 1)
- [ ] Next.js setup with Tailwind
- [ ] Core page structure (all 8 sections)
- [ ] Typography, color system, basic animations
- [ ] 2D content and text content writing
- [ ] Basic responsive layout

### Phase 2: 3D Assets (Week 2)
- [ ] Create 3D models in Blender:
  - Package/exploded view
  - US map (simplified, stylized)
  - Data flow visualization
  - Platform mockup
  - Globe visualization
- [ ] Export glTF with Draco compression
- [ ] Load into React Three Fiber scenes
- [ ] Lighting, materials, post-processing

### Phase 3: Scroll Narrative (Week 3)
- [ ] GSAP ScrollTrigger integration
- [ ] Camera path animations for each section
- [ ] Section transitions (seamless 3D-to-3D)
- [ ] Interactive elements (state hover, feature demos)
- [ ] Mobile fallback system

### Phase 4: Polish & Launch (Week 4)
- [ ] Performance optimization (compression, code splitting)
- [ ] SEO optimization (meta tags, structured data, sitemap)
- [ ] Analytics setup
- [ ] Cross-browser testing (Safari, Chrome, Firefox)
- [] Deployment (Vercel/Cloudflare)
- **Launch 🚀**

---

## Anti-Gravity Expert Integration

Applying the **B.L.A.S.T. framework** to this project:

**B**lueprint → This plan (data-first, user journey mapped, pain points identified)
**L**ink → Every section ties back to Neta's core value prop: make invisible compliance visible
**A**rchitect → Scroll-driven 3D narrative with 7 acts, each revealing a layer of the problem/solution
**S**tylize → Cinematic lighting, deep navy + teal + amber palette, editorial typography, slow deliberate camera
**T**rigger → "Explore the Journey" scroll → "Request Demo" CTA at peak emotional moment

Using **DESIGN.md** from awesome-design-md for reference patterns:
- Stripe (gradient precision) + Linear (minimalism) + Supabase (dark elegance)
- Component patterns from Linear's ultra-precise design system
- Color psychology: trust (navy) + innovation (teal) + urgency (amber)

---

## Next Steps

1. **Confirm this direction** → Iterate on narrative & copy
2. **Set up NVM Paperclip account** → Use NPM CLI to onboard and manage agents
3. **Initialize the website project** → Next.js + R3F scaffold
4. **Hire AI development team** → Set up org chart in Paperclip
