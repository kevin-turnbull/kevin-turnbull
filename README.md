# kevin-turnbull

Personal website for a senior software architect — planned with
[GitHub Spec Kit](https://github.com/github/spec-kit) and implemented as an
Astro static site.

## Quick start

```bash
npm install
cp .env.example .env   # optional: wire the contact form
npm run dev
```

Open `http://localhost:4321`.

```bash
npm run build
npm run preview
npm run test:e2e
npm run test:a11y
```

### Contact form (`PUBLIC_FORM_ENDPOINT`)

1. Create a form at [Formspree](https://formspree.io) or Getform.
2. Copy `.env.example` → `.env`.
3. Set `PUBLIC_FORM_ENDPOINT` to the form URL, e.g. `https://formspree.io/f/abcdxyz`.
4. Restart `npm run dev` / rebuild.

If unset, the contact form falls back to `mailto:` using the address in
`src/content/profile/site.yaml`.

### Photography

Hero/portrait assets currently use Unsplash-licensed photography (see
`public/images/ATTRIBUTION.md`). Replace `public/images/hero.jpg` and
`public/images/portrait.jpg` with owned photos before a branded production
launch, then update paths in `src/content/profile/site.yaml` if needed.

## Spec-driven workflow

| Step | Skill |
|------|-------|
| 1 | `/speckit-constitution` |
| 2 | `/speckit-specify` |
| 3 | `/speckit-plan` |
| 4 | `/speckit-tasks` |
| 5 | `/speckit-checklist` → `/speckit-analyze` |
| 6 | `/speckit-implement` → `/speckit-converge` |

Feature artifacts: [`specs/001-architect-personal-site/`](./specs/001-architect-personal-site/)

## Stack

Astro 5 (static) + MDX content collections + hand-authored CSS tokens
(Fraunces + Figtree). No UI kit.
