# Implementation Plan: Senior Architect Personal Website

**Branch**: `cursor/architect-personal-site-plan-7abf` | **Date**: 2026-09-04 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-architect-personal-site/spec.md`

## Summary

Build a high-craft personal website for a top senior software architect (branded
Kevin Turnbull by default) covering brand home, selected case studies, about/
philosophy, writing/talks, and contact—governed by Spec Kit and the project
constitution. Deliver as a content-driven static site with expressive design,
full-bleed hero composition, accessible motion, and file-based content so
implementation can proceed automatically from tasks.

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 22 LTS

**Primary Dependencies**: Astro 5 (static output), MDX for long-form content,
vanilla CSS with design tokens (no UI kit), lightweight motion via CSS + small
View Transitions / intersection-driven reveals (respect reduced-motion)

**Storage**: Git-managed content collections (Markdown/MDX + JSON/YAML for
profile metadata); static assets in repo; optional contact via form endpoint
(Formspree/Getform/Resend) configured by env

**Testing**: Playwright for critical journeys; axe-core accessibility checks
on key pages; Astro/TS typecheck; checklist audits mapped to constitution

**Target Platform**: Modern evergreen browsers; static hosting (Cloudflare
Pages, Netlify, or GitHub Pages)

**Project Type**: Content-driven marketing website (static)

**Performance Goals**: LCP under ~2.5s on mid-range mobile / 4G; CLS near 0
for hero; JS payload kept minimal (islands only where needed)

**Constraints**: Constitution composition rules (no hero cards/clutter);
WCAG 2.2 AA intent; mobile + desktop designed layouts; no auth/CMS in v1

**Scale/Scope**: ~5–7 routes, 3–6 case studies, 0–N posts, 1 résumé PDF,
global nav/footer, 404

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Status | Notes |
|------|--------|-------|
| I. Spec-First Delivery | PASS | Spec + plan + tasks before app code |
| II. Experience Is the Product | PASS | Brand-first hero, craft-forward case studies |
| III. Composition Over Clutter | PASS | FR-015 encoded; section-one-job IA |
| IV. Accessible Performance | PASS | Static Astro, a11y tests, reduced-motion |
| V. Content Integrity & Simplicity | PASS | File-based content; no CMS/auth |
| Design & Experience Standards | PASS | Tokens, expressive fonts, full-bleed hero, 2–3 motions |

Post-design re-check: PASS — structure remains a single Astro app with content
collections; no unjustified complexity.

## Project Structure

### Documentation (this feature)

```text
specs/001-architect-personal-site/
├── plan.md              # This file
├── research.md          # Phase 0
├── data-model.md        # Phase 1
├── quickstart.md        # Phase 1
├── contracts/           # Phase 1
│   ├── information-architecture.md
│   └── content-frontmatter.md
├── checklists/
│   └── requirements.md
└── tasks.md             # Phase 2 (/speckit-tasks)
```

### Source Code (repository root)

```text
/
├── .cursor/skills/speckit-*/     # Spec Kit Cursor skills
├── .specify/                     # Spec Kit memory, templates, scripts
├── specs/001-architect-personal-site/
├── public/
│   ├── fonts/
│   ├── images/
│   └── resume/
├── src/
│   ├── components/
│   │   ├── brand/          # Logo/wordmark, CTA group
│   │   ├── layout/         # Shell, Nav, Footer, SkipLink
│   │   ├── home/           # Hero composition only
│   │   ├── work/           # Case study cards/list (index only; not hero)
│   │   ├── about/
│   │   ├── writing/
│   │   └── contact/
│   ├── content/
│   │   ├── profile/        # person profile data
│   │   ├── case-studies/
│   │   ├── career/
│   │   ├── philosophy/
│   │   └── writing/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ProseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── work/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── about.astro
│   │   ├── writing/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── reset.css
│   │   ├── typography.css
│   │   ├── layout.css
│   │   └── motion.css
│   └── lib/
│       ├── content.ts
│       └── seo.ts
├── tests/
│   ├── e2e/
│   └── a11y/
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

**Structure Decision**: Single Astro static site at repository root. Content
collections own all narrative data. Components are organized by domain, not
by generic “UI kit.” No separate backend app for v1.

## Complexity Tracking

> No constitution violations requiring justification.
