# Tasks: Senior Architect Personal Website

**Input**: Design documents from `/specs/001-architect-personal-site/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Include Playwright journey + axe checks in Polish (plan requires them);
story phases focus on implementation first.

**Organization**: Tasks grouped by user story for independent MVP increments.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: US1…US6 mapping to spec user stories
- Paths assume repository-root Astro app per plan.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize Astro project and Spec Kit–aligned repo layout

- [x] T001 Scaffold Astro 5 + TypeScript app at repository root with `package.json`, `astro.config.mjs`, `tsconfig.json`
- [x] T002 [P] Create directory tree `src/{components,content,layouts,pages,styles,lib}`, `public/{fonts,images,resume}`, `tests/{e2e,a11y}` per plan.md
- [x] T003 [P] Add `.gitignore`, `.nvmrc` (Node 22), and env example `.env.example` for `PUBLIC_FORM_ENDPOINT`
- [x] T004 Update `README.md` with Spec Kit workflow, setup, and scripts (`dev`, `build`, `typecheck`, `test:e2e`, `test:a11y`)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Design system, layout shell, content schemas—blocks all stories

**⚠️ CRITICAL**: No user story work until this phase completes

- [x] T005 Author design tokens and base styles in `src/styles/tokens.css`, `src/styles/reset.css`, `src/styles/typography.css`, `src/styles/layout.css`, `src/styles/motion.css`
- [x] T006 [P] Add expressive webfonts under `public/fonts/` and wire `@font-face` in `src/styles/typography.css`
- [x] T007 Implement `src/layouts/BaseLayout.astro` with SEO helpers from `src/lib/seo.ts`, skip link, and `#main` landmark
- [x] T008 [P] Implement `src/components/layout/SkipLink.astro`, `src/components/layout/SiteNav.astro`, `src/components/layout/SiteFooter.astro`
- [x] T009 Configure Astro content collections + Zod schemas in `src/content.config.ts` matching `contracts/content-frontmatter.md`
- [x] T010 [P] Seed `src/content/profile/site.yaml` with Kevin Turnbull profile defaults and placeholder social links
- [x] T011 [P] Add placeholder hero atmosphere image at `public/images/hero.jpg` (replaceable asset)
- [x] T012 Implement content accessors in `src/lib/content.ts` for profile, case studies, career, philosophy, writing
- [x] T013 Create designed `src/pages/404.astro` with recovery links to `/` and `/work`
- [x] T014 Wire global import of styles in `BaseLayout.astro` and verify `npm run dev` serves shell on all stub routes

**Checkpoint**: Foundation ready — user stories can proceed

---

## Phase 3: User Story 1 - First Impression & Brand Presence (Priority: P1) 🎯 MVP

**Goal**: Home first viewport communicates brand, positioning, and CTA with full-bleed visual

**Independent Test**: Open `/` on desktop/mobile; verify FR-001/FR-015 composition; primary CTA reaches contact path

### Implementation for User Story 1

- [x] T015 [P] [US1] Build `src/components/brand/Wordmark.astro` for hero-level name treatment
- [x] T016 [P] [US1] Build `src/components/home/Hero.astro` enforcing allowed-only first-viewport elements
- [x] T017 [P] [US1] Build `src/components/brand/CtaGroup.astro` (primary → contact, optional secondary)
- [x] T018 [US1] Implement `src/pages/index.astro` composing Hero only above the fold from profile content
- [x] T019 [US1] Add hero load motion (staggered fade-up) + reduced-motion branch in `src/styles/motion.css` / Hero
- [x] T020 [US1] Add subtle hero image motion (parallax or ken-burns) disabled under `prefers-reduced-motion`
- [x] T021 [US1] Stub `src/pages/contact.astro` minimal reachable target so home CTA is not a dead end

**Checkpoint**: US1 MVP demoable (brand home + CTA target)

---

## Phase 4: User Story 5 - Contact & Engagement (Priority: P1)

**Goal**: Clear contact path with expectations, form + fallback channel

**Independent Test**: Reach `/contact` from nav and home CTA; submit or use mailto; see success/error + expectations

### Implementation for User Story 5

- [x] T022 [P] [US5] Build `src/components/contact/ContactIntro.astro` with engagement notes + response expectation from profile
- [x] T023 [P] [US5] Build `src/components/contact/ContactForm.astro` posting to configured form endpoint with progressive enhancement
- [x] T024 [US5] Complete `src/pages/contact.astro` with form, mailto fallback, and success/error UI states
- [x] T025 [US5] Document form endpoint setup in `README.md` and `.env.example`

**Checkpoint**: Home → Contact conversion path complete

---

## Phase 5: User Story 2 - Proof of Architecture Craft (Priority: P1)

**Goal**: Curated work index + case study detail pages

**Independent Test**: Browse `/work`, open one case study, confirm structured sections and navigation

### Implementation for User Story 2

- [x] T026 [P] [US2] Add 3 sample case studies under `src/content/case-studies/*.mdx` with required frontmatter + sections
- [x] T027 [P] [US2] Build `src/components/work/WorkList.astro` and `src/components/work/WorkListItem.astro` (index only; not hero cards-on-image)
- [x] T028 [US2] Implement `src/pages/work/index.astro` listing non-draft featured studies by `featuredRank`
- [x] T029 [US2] Implement `src/layouts/ProseLayout.astro` for long-form case study reading
- [x] T030 [US2] Implement `src/pages/work/[slug].astro` rendering Problem/Constraints/Approach/Decisions/Outcomes/Role
- [x] T031 [US2] Add typographic/media fallback when `heroImage` missing on a case study
- [x] T032 [US2] Add scroll reveal for work list items (motion #3) with reduced-motion disable

**Checkpoint**: Credibility proof path Home → Work → Detail → Contact works

---

## Phase 6: User Story 3 - About, Philosophy & Credibility Spine (Priority: P2)

**Goal**: About narrative, philosophy themes, career spine, résumé download

**Independent Test**: Visit `/about`; read bio/philosophy/spine; résumé control works or is hidden

### Implementation for User Story 3

- [x] T033 [P] [US3] Seed `src/content/philosophy/*.yaml` and `src/content/career/*.yaml` (or list files)
- [x] T034 [P] [US3] Build `src/components/about/AboutNarrative.astro`, `PhilosophyList.astro`, `CareerSpine.astro`
- [x] T035 [US3] Implement `src/pages/about.astro` composing narrative, philosophy, career, optional portrait
- [x] T036 [US3] Place résumé PDF at `public/resume/kevin-turnbull.pdf` (or hide control if absent) and link from About

**Checkpoint**: About credibility spine complete

---

## Phase 7: User Story 4 - Writing, Talks & Thought Leadership (Priority: P2)

**Goal**: Writing index + detail with empty state

**Independent Test**: `/writing` shows empty state or entries; detail pages readable

### Implementation for User Story 4

- [x] T037 [P] [US4] Build `src/components/writing/WritingList.astro` and empty state component
- [x] T038 [US4] Implement `src/pages/writing/index.astro` for non-draft pieces
- [x] T039 [US4] Implement `src/pages/writing/[slug].astro` using ProseLayout (support `externalUrl` talk pattern)
- [x] T040 [P] [US4] Optionally seed 1 sample essay in `src/content/writing/` for demo (keep empty-state path testable via draft flag)

**Checkpoint**: Thought leadership section ready

---

## Phase 8: User Story 6 - Global Navigation, Polish & Trust Signals (Priority: P3)

**Goal**: Consistent nav/footer, focus states, social links, motion polish

**Independent Test**: Keyboard nav sitewide; footer trust links; reduced-motion respected

### Implementation for User Story 6

- [x] T041 [US6] Finalize `SiteNav.astro` active states and mobile nav pattern without cluttering hero
- [x] T042 [US6] Finalize `SiteFooter.astro` with social links, secondary nav, copyright from profile
- [x] T043 [US6] Audit focus-visible styles across interactive elements in `src/styles/layout.css`
- [x] T044 [US6] Ensure all pages use BaseLayout SEO titles/descriptions per route contract

**Checkpoint**: Cross-cutting UX trust complete

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Quality gates, tests, content readiness for launch

- [x] T045 [P] Add Playwright config and journey `tests/e2e/home-work-contact.spec.ts`
- [x] T046 [P] Add axe accessibility smoke `tests/a11y/critical-pages.spec.ts` for `/`, `/work`, `/about`, `/contact`
- [x] T047 Run `npm run build` and fix content schema / type errors
- [x] T048 Execute `quickstart.md` manual scenarios V1–V5 and record results in PR notes
- [x] T049 [P] Replace placeholder imagery with final licensed/owned photography in `public/images/`
- [x] T050 Constitution compliance pass: verify no hero cards/stats/chips; document any exceptions in plan Complexity Tracking

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Start immediately
- **Foundational (Phase 2)**: Depends on Setup; BLOCKS all stories
- **US1 (Phase 3)**: After Foundational — MVP
- **US5 (Phase 4)**: After US1 stub contact (can deepen in parallel with US2 after T021)
- **US2 (Phase 5)**: After Foundational; integrates with nav from foundation
- **US3 / US4 (Phases 6–7)**: After Foundational; parallelizable with each other
- **US6 (Phase 8)**: After primary pages exist
- **Polish (Phase 9)**: After desired stories complete

### User Story Dependencies

- **US1 (P1)**: No story dependencies
- **US5 (P1)**: Needs US1 CTA target; otherwise independent
- **US2 (P1)**: Independent of About/Writing
- **US3 (P2)**: Independent
- **US4 (P2)**: Independent
- **US6 (P3)**: Touches shared chrome after pages exist

### Parallel Opportunities

- T002/T003; T006/T008/T010/T011; T015–T017; T022/T023; T026/T027; T033/T034; T045/T046/T049

---

## Parallel Example: User Story 1

```bash
Task: "Build src/components/brand/Wordmark.astro"
Task: "Build src/components/home/Hero.astro"
Task: "Build src/components/brand/CtaGroup.astro"
# Then sequentially: index.astro → motion → contact stub
```

---

## Implementation Strategy

### MVP First

1. Phase 1 Setup
2. Phase 2 Foundational
3. Phase 3 US1 (+ Phase 4 US5 for real CTA)
4. **STOP and VALIDATE** first-impression + contact path
5. Add US2 for credibility proof before broader polish

### Incremental Delivery

1. Setup + Foundational
2. US1 + US5 → demo brand + contact
3. US2 → demo architecture proof
4. US3 + US4 → depth
5. US6 + Polish → launch quality

### Suggested agent command after approval

```text
/speckit-implement
```

Or execute tasks T001→ sequentially on this branch.

---

## Notes

- Do not put cards, stats, or promo chips in the home hero (constitution).
- Prefer content edits in `src/content/**` over hardcoding copy in components.
- Commit after each task or logical group; keep Spec Kit artifacts in sync.
