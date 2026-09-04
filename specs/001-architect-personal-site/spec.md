# Feature Specification: Senior Architect Personal Website

**Feature Branch**: `cursor/architect-personal-site-plan-7abf`

**Created**: 2026-09-04

**Status**: Draft

**Input**: User description: "Plan a website for top senior software architect that includes everything you expect to see as personal website with high ux and ui and design experience; install Spec Kit locally and completely to guide the automated process."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - First Impression & Brand Presence (Priority: P1)

A hiring leader, founder, or peer lands on the home page and immediately
understands who the architect is, what caliber of work they do, and how to
take a next step—without scrolling past clutter.

**Why this priority**: Credibility is won or lost in the first viewport; this
is the MVP proof of design authority.

**Independent Test**: Open the home page on desktop and mobile; without using
navigation, confirm brand name dominance, one clear headline, one supporting
line, one CTA group, and one dominant full-bleed visual; verify primary CTA
reaches contact/availability.

**Acceptance Scenarios**:

1. **Given** a first-time visitor on desktop, **When** the home page loads,
   **Then** the person's name is the strongest text signal above the fold,
   accompanied by one headline, one short supporting sentence, one CTA group,
   and one dominant edge-to-edge visual.
2. **Given** a first-time visitor on a phone, **When** the home page loads,
   **Then** the same composition remains clear, readable, and free of stacked
   secondary marketing blocks above the fold.
3. **Given** a visitor who wants to engage, **When** they activate the primary
   CTA, **Then** they reach a clear contact or availability path in one step.

---

### User Story 2 - Proof of Architecture Craft (Priority: P1)

A technical decision-maker evaluates selected work/case studies to judge
systems thinking, trade-offs, outcomes, and leadership—not a dump of every
job duty.

**Why this priority**: Case studies convert curiosity into trust; without them
the brand claim is unsupported.

**Independent Test**: From home, open Selected Work; read one case study end
to end and confirm problem, constraints, approach, architecture decisions,
outcome, and role clarity.

**Acceptance Scenarios**:

1. **Given** a visitor on Selected Work, **When** they browse featured
   engagements, **Then** they see a curated set (not an exhaustive dump) with
   concise titles and outcome-forward summaries.
2. **Given** a visitor opens a case study, **When** they read it, **Then**
   they can identify context, challenge, constraints, approach, key decisions,
   measurable or qualitative outcomes, and the architect's specific role.
3. **Given** a visitor finishes a case study, **When** they look for next
   actions, **Then** they can return to the index or move to contact without
   dead ends.

---

### User Story 3 - About, Philosophy & Credibility Spine (Priority: P2)

A visitor wants to understand background, working philosophy, and why to
trust this architect for complex systems work.

**Why this priority**: Deepens trust after the first impression; supports
long-form credibility without crowding the hero.

**Independent Test**: Navigate to About; confirm biography narrative,
philosophy highlights, career spine/timeline, and optional résumé download.

**Acceptance Scenarios**:

1. **Given** a visitor on About, **When** they read the page, **Then** they
   find a coherent narrative (who / how they work / where they've operated)
   without dashboard-style widgets.
2. **Given** a visitor seeking credentials, **When** they scan the career
   spine, **Then** they see major roles/organizations with years and focus,
   not a full résumé paste.
3. **Given** a visitor who wants detail offline, **When** a résumé download
   is offered, **Then** they can obtain a current PDF résumé in one action.

---

### User Story 4 - Writing, Talks & Thought Leadership (Priority: P2)

A peer or recruiter explores essays, talks, or notes that demonstrate
communication skill and architectural judgment.

**Why this priority**: Differentiates a senior architect from a résumé-only
profile; optional for MVP but expected on a top-tier personal site.

**Independent Test**: Open Writing/Talks index; open one piece; confirm
readable typography, metadata (date/type), and navigation back.

**Acceptance Scenarios**:

1. **Given** a visitor on the Writing/Talks index, **When** they scan items,
   **Then** each entry shows title, type (essay/talk/note), date, and short
   abstract.
2. **Given** a visitor opens an entry, **When** they read it, **Then**
   content is comfortably readable on mobile and desktop with clear hierarchy.
3. **Given** no published pieces yet, **When** the section is visited,
   **Then** a purposeful empty state explains forthcoming content without
   looking broken.

---

### User Story 5 - Contact & Engagement (Priority: P1)

A visitor who is ready to talk can start a conversation with clear
expectations (response norms, engagement types, location/time zone if
relevant).

**Why this priority**: The site fails if admiration cannot convert to contact.

**Independent Test**: Reach Contact from nav and from home CTA; submit or
initiate contact; see confirmation and expectation-setting copy.

**Acceptance Scenarios**:

1. **Given** a visitor on Contact, **When** they review options, **Then**
   they understand preferred contact methods and what kinds of work are in
   scope (e.g., advisory, architecture reviews, full-time).
2. **Given** a visitor sends a message via the provided path, **When** the
   action completes, **Then** they receive clear success feedback and
   expected response timing.
3. **Given** a visitor prefers not to use a form, **When** alternate contact
   (email or professional network link) is appropriate, **Then** at least one
   reliable direct channel is visible.

---

### User Story 6 - Global Navigation, Polish & Trust Signals (Priority: P3)

A visitor moves between sections fluidly, finds social/professional links,
and experiences consistent motion, accessibility, and footer trust cues.

**Why this priority**: Cross-cutting quality; strengthens the whole site after
core pages exist.

**Independent Test**: Keyboard-navigate the site; toggle reduced-motion;
verify footer links, skip link, and consistent section rhythm.

**Acceptance Scenarios**:

1. **Given** a keyboard-only user, **When** they navigate, **Then** all
   interactive controls are reachable with visible focus states.
2. **Given** a user with reduced-motion preference, **When** pages animate,
   **Then** non-essential motion is minimized or disabled.
3. **Given** any page, **When** the visitor checks the footer, **Then** they
   find secondary links, professional profiles, and copyright without
   competing with primary content.

### Edge Cases

- What happens when case study imagery is missing? Use structured typographic
  fallback that preserves layout integrity—never broken image icons.
- How does the site handle very long case study titles on mobile? Titles wrap
  gracefully without truncating meaning mid-word awkwardly.
- What if contact delivery fails? Show a recoverable error and the fallback
  direct email channel.
- What if a deep-linked blog slug does not exist? Show a designed 404 with
  path back to home and selected work.
- How does the site behave with slow networks? Prioritize hero text and CTAs;
  defer non-critical imagery gracefully.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Site MUST present a personal brand home composition with name as
  hero-level signal, one headline, one supporting sentence, one CTA group, and
  one dominant full-bleed visual.
- **FR-002**: Site MUST provide primary navigation to Home, Work, About,
  Writing/Talks, and Contact (labels may vary; destinations MUST exist).
- **FR-003**: Site MUST include a curated Selected Work index with a limited
  set of featured engagements (target 3–6 for v1).
- **FR-004**: Site MUST provide individual case study pages covering context,
  challenge, constraints, approach, decisions, outcomes, and role.
- **FR-005**: Site MUST include an About experience with narrative bio,
  working philosophy, and career spine.
- **FR-006**: Site MUST offer a Contact path with clear engagement expectations
  and at least one reliable direct channel.
- **FR-007**: Site MUST support Writing/Talks listing and detail views, with a
  designed empty state if content is not yet published.
- **FR-008**: Site MUST be usable on modern mobile and desktop viewports with
  designed (not merely stacked) layouts.
- **FR-009**: Site MUST expose skip-to-content, keyboard focus visibility, and
  contrast adequate for body text and controls.
- **FR-010**: Site MUST respect reduced-motion preferences for non-essential
  animation.
- **FR-011**: Site MUST include a résumé download action when a current résumé
  file is available.
- **FR-012**: Site MUST include a designed 404 experience.
- **FR-013**: Site MUST keep content structured so biography, case studies,
  and posts can be updated without redesigning page templates.
- **FR-014**: Site MUST include professional profile links (e.g., LinkedIn,
  GitHub) in persistent secondary chrome such as the footer.
- **FR-015**: Home first viewport MUST NOT include stats strips, schedule
  blocks, address blocks, promo chips, floating badges, or card grids.

### Key Entities

- **Person Profile**: Name, headline, short positioning statement, location/
  time zone, availability stance, portrait/atmosphere imagery, social links.
- **Case Study**: Title, summary, organization/context (as disclosable),
  timeframe, role, problem, constraints, approach, decisions, outcomes, media,
  related skills/domains, featured rank.
- **Career Entry**: Organization, title, start/end, focus summary.
- **Philosophy Theme**: Short titled belief with 1–2 sentence explanation.
- **Content Piece**: Title, type (essay/talk/note), date, abstract, body,
  optional external URL (for talks).
- **Contact Channel**: Method (form/email/network), label, availability notes,
  response expectation.
- **Site Meta**: SEO title/description defaults, Open Graph image, analytics
  preference (off by default unless specified).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: In moderated first-impression tests (target ≥5 reviewers), ≥80%
  correctly identify the person's name and professional positioning within 5
  seconds of landing on home.
- **SC-002**: Reviewers can complete the path Home → one case study → Contact
  in under 2 minutes without assistance.
- **SC-003**: Mobile and desktop first viewports each contain only the brand
  composition elements defined in FR-001/FR-015 (verified by checklist audit).
- **SC-004**: Keyboard-only users can reach Contact from any primary page
  without a mouse.
- **SC-005**: With reduced-motion enabled, essential content remains fully
  usable and no required information is conveyed by motion alone.
- **SC-006**: ≥90% of checklist reviewers rate visual craft as “clearly above
  average personal site” on a simple 3-point scale after viewing Home + one
  case study.
- **SC-007**: Contact success or fallback path is understandable after a
  single attempt (no dead ends).

## Assumptions

- Subject identity defaults to **Kevin Turnbull** based on repository README
  unless later content overrides branding.
- v1 is a marketing/personal brand site, not a web app: no user accounts,
  no admin CMS UI required for launch (content may be file-based).
- Selected Work is curated (3–6 items); full employment history lives in
  résumé/About spine, not as competing home modules.
- Contact may start as email-forwarding or a lightweight form backend; exact
  vendor is an implementation concern for planning.
- Analytics are optional and off by default to preserve privacy posture.
- Blog/talks may launch with zero or few posts; empty state is acceptable.
- English is the primary language for v1.
- “Top senior software architect” positioning emphasizes systems design,
  leadership, and trade-off communication over tool logo walls.
