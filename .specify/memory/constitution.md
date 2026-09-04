<!--
Sync Impact Report
- Version change: (none) → 1.0.0
- Modified principles: N/A (initial ratification)
- Added sections: Core Principles (I–V), Design & Experience Standards, Development Workflow, Governance
- Removed sections: none
- Deferred TODOs: none
-->
# Kevin Turnbull Personal Site Constitution

## Core Principles

### I. Spec-First Delivery
Every user-visible capability MUST begin as a Spec Kit artifact (constitution →
spec → plan → tasks) before implementation. Implementation MUST map to tasks
with clear acceptance criteria. Specs are the source of truth; code follows
specs, not the reverse.

**Rationale**: Spec-driven development keeps UX intent, scope, and quality
gates explicit for an architect-grade personal brand site.

### II. Experience Is the Product
The site MUST communicate senior architecture judgment through interaction
quality, visual hierarchy, and clarity—not through dense jargon or dashboard
clutter. First-viewport brand presence is non-negotiable: the person's name
MUST read as the hero-level signal. Removing the nav MUST still leave an
unmistakably branded composition.

**Rationale**: Visitors decide credibility in seconds; UX/UI craft is proof of
the architect's taste and systems thinking.

### III. Composition Over Clutter
Each viewport/section MUST have one job, one headline, and usually one short
supporting sentence. Cards are forbidden in the hero and disallowed elsewhere
unless they are required for a concrete interaction. No stat strips, pill
clusters, floating badges, promo stickers, or multi-competing text blocks on
the first viewport. Landing hero imagery MUST be full-bleed (edge-to-edge),
not inset media cards.

**Rationale**: Restraint signals seniority; clutter signals commodity
portfolios.

### IV. Accessible Performance by Default
All primary journeys MUST meet WCAG 2.2 AA intent (keyboard, focus, contrast,
reduced-motion respect). Core content MUST be readable without JavaScript
where feasible. Largest Contentful Paint for the home hero SHOULD feel
immediate on a typical mid-range mobile connection; motion MUST be purposeful
(2–3 intentional motions), never decorative noise.

**Rationale**: Accessibility and performance are architectural qualities
visitors can feel; they reinforce trust.

### V. Content Integrity & Simplicity
Content MUST be truthful, specific, and editable without redeploying business
logic when possible. Prefer a simple static/content-driven architecture over
multi-service complexity. YAGNI applies: no CMS, auth, or backend until a
spec proves need. No dark-mode-by-default bias, purple-gradient clichés, or
generic system font stacks.

**Rationale**: A personal site should be maintainable by its owner and
distinctive without over-engineering.

## Design & Experience Standards

- **Brand first**: Name/identity dominates the first viewport; no secondary
  marketing content (stats, schedules, address blocks, promo rows) in that
  composition.
- **Typography**: Expressive, purposeful type pairing; avoid Inter/Roboto/
  Arial/system as primary display faces.
- **Atmosphere**: Prefer gradients, photography, or subtle patterns over flat
  single-color fields; imagery MUST show real context (work, place, craft)—
  abstract decoration alone is insufficient as the main visual idea.
- **Motion**: Ship at least 2–3 intentional motions that establish hierarchy
  and presence; respect `prefers-reduced-motion`.
- **Responsive**: Desktop and mobile MUST both feel designed, not merely
  stacked; touch targets and reading width MUST remain comfortable.
- **Visual direction**: Define CSS variables for a clear palette; avoid
  AI-default looks (purple-on-white, cream+terracotta serif kits,
  broadsheet hairline-dense layouts) unless explicitly chosen in a spec.

## Development Workflow

1. Amend constitution only when principles change.
2. Capture work with `/speckit-specify` → `/speckit-plan` → `/speckit-tasks`.
3. Optionally `/speckit-clarify`, `/speckit-analyze`, `/speckit-checklist`
   before `/speckit-implement`.
4. Prefer incremental, independently testable user stories (P1 MVP first).
5. Validate against constitution gates in every plan and PR review.
6. Keep Spec Kit skills/templates versioned with the repo; do not bypass
   them for "quick" UI experiments that ship publicly.

## Governance

This constitution supersedes informal preferences and ad-hoc implementation
shortcuts. Amendments require: documented rationale, version bump
(MAJOR/MINOR/PATCH), and `Last Amended` update. All plans and PRs MUST verify
compliance with Core Principles and Design & Experience Standards. Unjustified
complexity or clutter that violates Composition Over Clutter MUST be rejected
or recorded in Complexity Tracking with explicit rationale.

**Version**: 1.0.0 | **Ratified**: 2026-09-04 | **Last Amended**: 2026-09-04
