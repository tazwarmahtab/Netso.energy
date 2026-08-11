# Netso Energy — Framer Website Audit & Production Rebuild Plan

**Date:** 2026-08-11  
**Reference:** `https://many-orca-477841.framer.app`  
**Target repository:** `tazwarmahtab/Netso.energy`  
**Branch:** `audit/framer-site-2026-08-11`

## Executive decision

Use the Framer site as the **visual source of truth**, but do not treat the current GitHub implementation as a production-ready copy. Rebuild the experience in the Next.js repository as a clean, componentized, responsive marketing site while preserving the strongest visual ideas from Framer and correcting the current positioning, conversion, accessibility, performance, and technical issues.

The production target should feel like the same website, not a generic redesign. Improvements should be evolutionary: preserve the visual identity, hierarchy, interaction language, and storytelling concept, then make the implementation materially stronger.

## Important inspection limitation

The supplied Framer URL could not be visually fetched from the current environment. The published URL redirected the fetcher to Framer authentication, so this report does **not** claim pixel-level observations of the current Framer canvas.

Therefore:

- Framer-specific visual details are marked as **to validate**.
- Repository-specific findings below are directly grounded in the current GitHub code.
- A screenshot set or accessible public Framer preview is required before declaring pixel parity.

This is intentional. We should not invent visual details we could not inspect.

## Current GitHub baseline

The repository already contains a useful foundation:

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS 4
- Framer Motion
- GSAP
- Three.js
- React Three Fiber
- React Three Drei
- React Three Postprocessing
- Vitest
- Playwright

The current home page contains:

1. 3D hero scene
2. Netso.energy headline
3. OPEX value proposition
4. Three value cards
5. Solar savings calculator
6. Waitlist form
7. Footer

The existing implementation is therefore a reasonable technical starting point, but its copy and information architecture are still closer to an MVP landing page than a high-conviction commercial energy company website.

## Critical issues found in the current implementation

### P0 — Positioning mismatch

The current metadata says:

> "Empowering homeowners to achieve complete energy independence..."

while the home page says:

> "Powering businesses with clean, affordable solar energy through flexible OPEX contracts."

This is strategically inconsistent. Netso's current commercial thesis is B2B distributed energy infrastructure, particularly commercial and industrial customers. The production website must not imply a homeowner-first business unless that is explicitly the chosen GTM.

**Action:** make B2B/C&I the primary positioning and move residential into a secondary/future segment if needed.

### P0 — Conversion path is too weak

The page currently has generic `Get Started`, `Learn More`, and waitlist actions. A commercial energy customer needs a much more concrete conversion path.

Recommended primary CTA:

**Request a Site Assessment**

Recommended secondary CTA:

**Calculate Your Savings**

The CTA should lead to a short qualification flow collecting:

- company/site name
- location
- monthly electricity bill or annual consumption
- roof/available area
- contact person
- phone/WhatsApp
- email

### P0 — Claims require validation discipline

Energy websites create legal and commercial risk when they present savings, generation, tariff, financing, IRR, or emissions claims without assumptions.

Any numeric claim should have a visible or linked assumptions layer. Avoid hard-coded claims that can silently become stale.

**Action:** centralize commercial assumptions in a typed configuration object and label estimates clearly.

### P1 — Current page is too short for enterprise trust

The existing page jumps from hero → benefits → calculator → waitlist. That is insufficient for a serious industrial buyer or financing partner.

Recommended information architecture:

1. Hero
2. Trust / proof strip
3. Problem
4. Netso solution
5. How the OPEX/PPA model works
6. Product/system visualization
7. Customer economics / savings calculator
8. Deployment process
9. Proof / pilot / LOIs where disclosure is permitted
10. FAQ / commercial objections
11. Strong final CTA
12. Footer with company/legal/contact details

### P1 — No strong explanation of the business model

The website needs to explain the commercial mechanism in plain language:

**Netso finances, installs, owns, operates, and maintains the solar system. The customer pays for the energy produced through a long-term PPA/OPEX structure, avoiding upfront CAPEX.**

This should be visually explained rather than buried in copy.

### P1 — Calculator needs to become a lead-generation asset

The calculator should not only return a number. It should produce a concise commercial output:

- estimated system size
- estimated annual generation
- estimated annual grid bill offset
- estimated savings
- estimated CO2 reduction
- indicative PPA economics
- CTA to request a site assessment

The result should also explicitly state that it is an estimate and depends on site-specific engineering, tariff, load profile, and financing assumptions.

### P1 — Accessibility and interaction robustness

Current buttons are plain buttons without visible business logic. Forms need labels, validation, loading/error/success states, keyboard behavior, and accessible focus states.

Interactive motion must respect `prefers-reduced-motion`.

### P1 — Performance risk from 3D

Three.js/R3F is appropriate for the hero if it materially improves the story, but it should not become a performance tax.

Requirements:

- lazy-load the 3D scene where possible
- avoid unnecessary postprocessing on mobile
- cap DPR
- pause or reduce rendering when off-screen
- provide a lightweight mobile fallback
- ensure content remains useful if WebGL fails

### P2 — SEO metadata is incomplete / strategically wrong

The title is usable, but the description is residential-oriented and does not describe the current commercial proposition.

Add:

- canonical URL
- Open Graph metadata
- Twitter/X metadata where relevant
- structured Organization data
- structured WebSite data
- strong page-level semantic headings
- sitemap/robots verification
- descriptive image alt text

## Target production design direction

### Preserve

- The Framer site's visual language
- Strong hero composition
- Premium energy-tech feel
- Dark/solar visual contrast if that is part of the Framer design
- 3D storytelling where it supports the product
- High-quality motion and transitions
- Calculator as a central interactive element

### Refine

- Typography hierarchy
- spacing consistency
- CTA hierarchy
- section rhythm
- trust signals
- commercial clarity
- responsive behavior
- accessibility
- performance
- mobile navigation
- form UX
- SEO

### Avoid

- generic SaaS cards everywhere
- excessive gradients
- decorative 3D that does not communicate the product
- unsupported savings claims
- vague "green future" copy
- residential-first messaging if C&I remains the GTM
- excessive animation that slows the sales path

## Recommended component architecture

```text
app/
  layout.tsx
  page.tsx
  globals.css
  components/
    navigation/
      Navbar.tsx
      MobileMenu.tsx
    hero/
      Hero.tsx
      HeroScene.tsx
    trust/
      TrustStrip.tsx
    problem/
      ProblemSection.tsx
    solution/
      SolutionSection.tsx
      SystemDiagram.tsx
    business-model/
      PPAExplainer.tsx
    calculator/
      SolarCalculator.tsx
      CalculatorResults.tsx
    process/
      DeploymentProcess.tsx
    proof/
      ProofSection.tsx
    faq/
      FAQ.tsx
    lead-form/
      SiteAssessmentForm.tsx
    footer/
      Footer.tsx
lib/
  energy/
    assumptions.ts
    calculator.ts
    validation.ts
config/
  site.ts
public/
  images/
  models/
```

## Design system requirements

Create a small tokenized system rather than scattering values throughout components.

Tokens should cover:

- background surfaces
- primary text
- secondary text
- accent color
- border opacity
- container widths
- spacing scale
- radius scale
- typography scale
- motion durations
- easing curves
- breakpoints

The goal is to make future brand iteration cheap.

## Responsive strategy

### Desktop

Use a wide editorial layout with strong visual hierarchy and generous negative space.

### Tablet

Collapse multi-column sections early rather than allowing cramped cards.

### Mobile

Mobile should be treated as a first-class sales surface, not a compressed desktop.

Required:

- sticky/accessible CTA behavior where appropriate
- readable hero without relying on 3D
- calculator controls optimized for touch
- forms with large tap targets
- no horizontal overflow
- reduced animation
- fast initial render

## Commercial copy direction

The core narrative should answer five questions quickly:

1. **What is Netso?**
2. **Who is it for?**
3. **What does the customer get?**
4. **Why is the economics better?**
5. **What should the customer do next?**

Suggested positioning direction:

> **Industrial solar without the upfront capital.**
>
> Netso builds, owns, and operates distributed solar infrastructure for businesses. You pay for the clean energy your site uses through a long-term OPEX/PPA structure instead of funding the system yourself.

This wording is a direction, not a final approved claim.

## Evidence hierarchy

The final site should prioritize proof in this order:

1. Executed commercial projects
2. Measured production data
3. Customer savings data
4. Signed contracts / disclosed LOIs where permitted
5. Pilot data
6. Engineering specifications
7. Financial model outputs
8. Generic sustainability claims

Do not let generic sustainability language outrank commercial evidence.

## Implementation sequence

### Phase 1 — Visual parity

Reproduce the Framer page structure, typography, color system, assets, hero treatment, section ordering, and interactions as closely as technically practical.

### Phase 2 — Commercial refinement

Replace weak or inconsistent messaging with validated Netso positioning, customer economics, PPA explanation, proof, and stronger CTAs.

### Phase 3 — Engineering hardening

Add responsive behavior, accessibility, error states, analytics events, SEO, performance optimization, and automated tests.

### Phase 4 — Conversion optimization

Instrument:

- hero CTA clicks
- calculator starts
- calculator completions
- assessment-form starts
- assessment submissions
- WhatsApp/contact clicks
- section engagement

Then optimize based on actual funnel data.

## Definition of done

The rebuild is complete only when:

- Framer and production are visually comparable at desktop/tablet/mobile breakpoints.
- All primary CTAs work.
- Calculator calculations are tested against approved assumptions.
- Forms have validation and success/error states.
- Lighthouse/Core Web Vitals are acceptable.
- Keyboard navigation works.
- Reduced-motion mode works.
- No horizontal overflow exists on supported mobile widths.
- SEO metadata is correct.
- No unsupported commercial claim is presented as a guaranteed outcome.
- Production deployment is reproducible from GitHub.

## Next required input for true pixel parity

Because the supplied Framer URL could not be visually inspected from this environment, the next implementation step requires one of:

1. a public Framer URL that does not require authentication from the fetch environment, or
2. full-page desktop + tablet + mobile screenshots of the Framer version, ideally at the exact viewport sizes, or
3. the Framer project/design exported through a supported workflow.

Once supplied, use those visuals as the source of truth and implement the production version in this repository rather than redesigning from memory.

## Technical note on Framer

Framer currently supports custom code and React-based Code Components, but its hosting/export model should be treated separately from this GitHub Next.js production codebase. The intended workflow here is **visual reference → production implementation**, not an assumption that the published Framer page can simply be downloaded as a clean Next.js codebase.
