# kevin-turnbull

Personal website for a senior software architect — planned with
[GitHub Spec Kit](https://github.com/github/spec-kit) and implemented as an
Astro static site.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

```bash
npm run build
npm run preview
npm run test:e2e
npm run test:a11y
```

Contact form: set `PUBLIC_FORM_ENDPOINT` in `.env` (see `.env.example`) to a
Formspree/Getform endpoint. Without it, the form falls back to `mailto:`.

## Spec-driven workflow

| Step | Skill |
|------|-------|
| 1 | `/speckit-constitution` |
| 2 | `/speckit-specify` |
| 3 | `/speckit-plan` |
| 4 | `/speckit-tasks` |
| 5 | `/speckit-checklist` → `/speckit-analyze` |
| 6 | `/speckit-implement` |

Feature artifacts: [`specs/001-architect-personal-site/`](./specs/001-architect-personal-site/)

## Stack

Astro 5 (static) + MDX content collections + hand-authored CSS tokens
(Fraunces + Figtree). No UI kit.
