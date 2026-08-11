# Netso Energy Website — Master Build Specification

Status: v0.1 — foundation
Date: 2026-08-11

## Objective

Create a clean production website codebase for Netso Energy. The existing Framer site is the visual reference, but the production implementation must improve conversion, commercial credibility, accessibility, performance, SEO, responsive behavior, and maintainability without blindly copying weak decisions.

## Positioning

Netso Energy should be presented as a technology-driven commercial and industrial energy infrastructure company, not a generic residential solar installer.

Core proposition:
- Businesses can deploy solar infrastructure without the traditional upfront capital burden.
- Netso designs, finances, deploys, operates, and maintains qualifying solar assets under long-term commercial agreements.
- The website must make the economic model understandable within seconds.

## Primary conversion

Primary CTA: Request a Site Assessment
Secondary CTA: Calculate Your Savings

Avoid generic "Join the waitlist" language unless a specific launch campaign requires it.

## Target audiences

1. RMG and industrial facilities
2. Schools and institutional buildings
3. Commercial property owners/operators
4. Strategic/institutional partners
5. Financing partners

## Proposed information architecture

1. Home
2. Solutions
3. How It Works
4. Projects / Case Studies
5. Technology
6. About
7. Contact / Site Assessment

## Homepage narrative

1. Navigation
2. Hero: clear commercial energy proposition + primary CTA + visual system
3. Trust/proof strip
4. Problem: electricity cost + capital constraint
5. Netso model: solar without traditional upfront CAPEX
6. Economic value / calculator
7. Product/infrastructure visual storytelling
8. Deployment process
9. Project proof / metrics
10. Technology / monitoring / optimization
11. FAQ addressing commercial objections
12. Strong final CTA
13. Footer

## Design direction

Use the strongest visual language of the Framer reference as the baseline. Refine rather than replace. The finished site should feel premium, technical, calm, credible, and infrastructure-grade.

Avoid:
- generic green solar clichés
- excessive gradients
- meaningless motion
- stock imagery that reduces credibility
- excessive 3D that harms performance
- vague sustainability copy

## Calculator

The calculator should become a qualified lead funnel rather than a novelty widget.

Inputs should be validated and assumptions disclosed. Outputs should distinguish estimates from contractual economics. Recommended outputs:
- estimated system size
- estimated annual generation
- estimated annual energy cost offset
- indicative savings
- indicative emissions reduction
- recommended next step

Never present model outputs as guaranteed project returns or guaranteed savings.

## Technical architecture

Next.js + TypeScript + Tailwind CSS. Use Framer Motion/GSAP selectively. Use Three.js only for high-value visual scenes. Components should be modular and accessible. Forms require validation, loading, success, and error states.

## Performance

Targets:
- mobile-first responsive implementation
- avoid blocking 3D on initial render
- lazy-load heavy scenes/assets
- optimized images and video
- minimize client-side JavaScript
- preserve Core Web Vitals

## SEO

Implement:
- unique title/description
- canonical URLs
- Open Graph/Twitter metadata
- sitemap
- robots
- Organization and WebSite structured data
- page-specific metadata
- meaningful semantic headings

## Accessibility

Target WCAG 2.2 AA practices:
- keyboard navigation
- visible focus states
- semantic landmarks
- form labels/errors
- sufficient contrast
- reduced-motion support
- descriptive links/buttons
- accessible calculator outputs

## Analytics

Track at minimum:
- CTA clicks
- calculator started/completed
- site-assessment form started/submitted
- contact clicks
- project/case-study views
- outbound WhatsApp/email clicks where used

## Content integrity

All numeric claims, project metrics, tariffs, savings, generation estimates, financing claims, certifications, and customer references must be sourced or explicitly labeled as estimates/illustrative assumptions before publication.

## Build sequence

Phase 0: capture and audit Framer reference.
Phase 1: lock information architecture, positioning, design tokens, and content model.
Phase 2: implement shell, navigation, hero, CTA system.
Phase 3: implement commercial narrative, calculator, proof, technology, FAQs.
Phase 4: responsive and accessibility hardening.
Phase 5: SEO, analytics, performance, testing.
Phase 6: visual QA against Framer reference and production deployment.

## Definition of done

The website is not complete until:
- all intended routes work
- all CTAs have real destinations/actions
- forms have production states
- calculator math passes tests
- mobile and desktop layouts are reviewed
- no critical accessibility issues remain
- SEO metadata is complete
- performance is acceptable on mobile
- all published claims are validated
- Playwright smoke tests pass
- production build passes
