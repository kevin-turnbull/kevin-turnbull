# Quickstart: Validate the Architect Personal Site

**Feature**: `001-architect-personal-site` | **Date**: 2026-09-04

## Prerequisites

- Node.js 22+
- `npm` or `pnpm`
- Spec Kit CLI available (`specify version` → 1.0.4+) for governance commands
- Modern browser + optional Playwright browsers for e2e

## Setup (after implementation exists)

```bash
npm install
npm run dev
```

Open `http://localhost:4321` (Astro default; confirm in README if changed).

## Manual validation scenarios

### V1 — First impression (SC-001 / FR-001 / FR-015)

1. Load `/` on a desktop viewport ≥1280px.
2. Confirm name is the strongest text signal; only allowed hero elements appear.
3. Repeat at 390px width; composition remains clear.

### V2 — Work proof path (SC-002)

1. From home, go to Work.
2. Open one case study; verify Problem → Constraints → Approach → Decisions →
   Outcomes → Role are present.
3. Navigate to Contact in under 2 minutes total.

### V3 — Contact (SC-007)

1. Submit the form with valid data (or trigger mailto fallback).
2. Confirm success feedback **or** visible recoverable error plus email fallback.

### V4 — Accessibility (SC-004 / SC-005)

1. Keyboard-only: Tab from skip link through nav to Contact.
2. Enable OS reduced-motion; reload home; confirm no required info is motion-only.

### V5 — Empty writing state

1. Ensure zero published writing entries.
2. Visit `/writing`; designed empty state appears (not a blank error).

## Automated checks (when wired)

```bash
npm run typecheck
npm run build
npm run test:e2e
npm run test:a11y
```

Expected: production build succeeds; Playwright journeys for home→work→contact
pass; axe violations on critical pages = 0 serious/critical.

## Spec Kit loop reminder

```text
/speckit-constitution → /speckit-specify → /speckit-plan → /speckit-tasks → /speckit-implement
```

Optional quality gates: `/speckit-clarify`, `/speckit-analyze`, `/speckit-checklist`.
