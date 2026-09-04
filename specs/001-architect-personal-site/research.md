# Research: Senior Architect Personal Website

**Feature**: `001-architect-personal-site` | **Date**: 2026-09-04

## Decision 1: Site generator

- **Decision**: Astro 5 with static output + content collections + MDX
- **Rationale**: Best fit for content-heavy personal sites; ships minimal JS
  by default; excellent LCP characteristics; first-class Markdown/MDX for case
  studies and essays; aligns with constitution simplicity gate.
- **Alternatives considered**:
  - Next.js App Router: stronger for apps; heavier default JS for a brochure/
    content site.
  - Remix/Vite SPA: weaker content workflows and SEO defaults for static
    marketing pages.
  - Plain HTML: maximum control but poor maintainability for multi-page
    content at this scope.

## Decision 2: Styling approach

- **Decision**: Hand-authored CSS with design tokens (`tokens.css`); no
  component library (no shadcn/MUI/Bootstrap)
- **Rationale**: Distinctive senior-level craft requires intentional type,
  spacing, and atmosphere; kits push toward card grids and generic aesthetics
  that violate the constitution.
- **Alternatives considered**: Tailwind-only utility soup (fast but tends toward
  sameness); CSS-in-JS (unnecessary runtime for static pages).

## Decision 3: Visual direction

- **Decision**: “Architectural night-studio” alternative avoided per
  anti-default rules. Chosen direction: **cool stone + deep ink + signal
  copper accent** with photographic full-bleed hero (workspace/city/structure
  context), display serif or distinctive grotesque for name, humanist sans for
  UI. Explicitly avoid purple gradients, cream+terracotta cliché, and
  broadsheet denseness.
- **Rationale**: Feels precise, calm, and senior without AI-default palettes;
  photography supplies the real visual anchor.
- **Alternatives considered**: Pure dark OLED tech look (overused); brutalist
  mono-only (can undermine warmth/trust for advisory work).

## Decision 4: Motion

- **Decision**: Exactly three intentional motions in v1:
  1. Hero wordmark/headline staggered fade-up on load
  2. Subtle parallax or ken-burns on hero atmosphere image (disabled under
     reduced-motion)
  3. Section reveal on scroll for work index items
- **Rationale**: Constitution requires 2–3 purposeful motions, not ambient
  noise.
- **Alternatives considered**: Lottie/heavy libraries (costly); scroll-jacking
  (hurts UX).

## Decision 5: Contact delivery

- **Decision**: Progressive enhancement contact form posting to a hosted form
  endpoint (Formspree or equivalent) plus visible mailto fallback
- **Rationale**: Avoids owning a backend while meeting FR-006; failure path
  remains clear.
- **Alternatives considered**: Serverless function + email API (more moving
  parts for v1); mailto-only (weaker UX on mobile).

## Decision 6: Hosting

- **Decision**: Static host with preview deploys (Cloudflare Pages preferred;
  Netlify/GitHub Pages acceptable)
- **Rationale**: Matches Astro static output; global CDN; simple CI.
- **Alternatives considered**: Container/VPS (unnecessary).

## Decision 7: Spec Kit automation posture

- **Decision**: Keep Spec Kit (specify-cli v1.0.4) as project governance;
  Cursor integration skills under `.cursor/skills`; git extension installed;
  implement strictly from `tasks.md`
- **Rationale**: User requested complete local Spec Kit to guide automated
  process; prevents vibe-coding regressions in UX quality.
- **Alternatives considered**: Ad-hoc markdown planning only (weaker agent
  loop).

## Decision 8: Information architecture

- **Decision**: Primary nav: Work · About · Writing · Contact; logo/name home
  link; Writing may be labeled “Notes” later without IA change
- **Rationale**: Matches expected senior personal site sections without
  overcrowding.
- **Alternatives considered**: Single long scrolling page (harder deep links
  for case studies); separate “Services” commercial page (defer until needed).
