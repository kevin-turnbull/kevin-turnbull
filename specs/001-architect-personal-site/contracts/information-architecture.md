# Contract: Information Architecture & Routes

**Feature**: `001-architect-personal-site`  
**Type**: UI / navigation contract (static site)

## Primary navigation

| Label | Route | Notes |
|-------|-------|-------|
| (Brand/Name) | `/` | Home; brand is link target |
| Work | `/work` | Selected case studies |
| About | `/about` | Bio, philosophy, career spine |
| Writing | `/writing` | Essays/talks/notes |
| Contact | `/contact` | Engagement |

## Routes

| Method | Path | Purpose | Primary content |
|--------|------|---------|-----------------|
| GET | `/` | Brand home | Hero composition only above fold |
| GET | `/work` | Work index | Featured case studies list |
| GET | `/work/:slug` | Case study detail | Structured case study sections |
| GET | `/about` | About | Narrative + philosophy + career |
| GET | `/writing` | Writing index | Content pieces or empty state |
| GET | `/writing/:slug` | Writing detail | Prose body or redirect note for external |
| GET | `/contact` | Contact | Channels + form + expectations |
| GET | `/404` | Not found | Designed recovery paths |
| GET | `/resume.pdf` or static asset | Résumé | Only if file present |

## Home first-viewport contract (non-negotiable)

Allowed elements:

1. Brand name (dominant)
2. One headline
3. One supporting sentence
4. One CTA group (primary + optional secondary)
5. One dominant full-bleed visual plane

Disallowed above the fold: cards, stats, schedules, address blocks, promo
chips, floating badges, multi-column marketing modules.

## Interaction contracts

- Primary CTA on home → `/contact` (or contact anchor)
- Case study CTAs → detail slug
- Keyboard: skip link → `#main`; visible `:focus-visible` on controls
- `prefers-reduced-motion: reduce` disables parallax/ken-burns and staggered
  reveals (instant opacity)

## SEO / social

Every route provides unique `<title>`, meta description, and OG tags derived
from content frontmatter or profile defaults.
