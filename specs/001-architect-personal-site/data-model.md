# Data Model: Senior Architect Personal Website

**Feature**: `001-architect-personal-site` | **Date**: 2026-09-04

Content is file-based. Collections map 1:1 to Spec entities.

## PersonProfile

| Field | Type | Rules |
|-------|------|-------|
| fullName | string | Required; hero-level brand |
| shortName | string | Optional nav wordmark |
| headline | string | One line; not longer than ~90 chars preferred |
| supportingSentence | string | One short sentence under headline |
| availability | enum: `open` \| `selective` \| `unavailable` | Drives CTA copy |
| locationLabel | string | Optional city/region |
| timeZone | string | Optional IANA tz |
| email | string (email) | Required for fallback contact |
| socialLinks[] | {label, href, me?} | LinkedIn/GitHub minimum |
| heroImage | asset path | Full-bleed atmosphere image |
| portraitImage | asset path | Optional about media |
| resumePdf | asset path | Optional; hides download if absent |
| seoTitle | string | Default document title |
| seoDescription | string | ~150–160 chars |

## CaseStudy

| Field | Type | Rules |
|-------|------|-------|
| slug | string | URL id; unique |
| title | string | Required |
| summary | string | 1–2 sentences; outcome-forward |
| organization | string | Disclosable name or anonymized label |
| timeframe | string | e.g. 2023–2024 |
| role | string | Architect’s specific role |
| domains[] | string | e.g. platform, data, security |
| problem | markdown | Required |
| constraints | markdown | Required |
| approach | markdown | Required |
| decisions | markdown | Key trade-offs |
| outcomes | markdown | Qualitative/quantitative |
| heroImage | asset? | Optional; typographic fallback if missing |
| featuredRank | number | Lower = higher on index; featured only if set |
| draft | boolean | Default false |

**Relationships**: Listed on Work index by `featuredRank`; detail at
`/work/[slug]`.

## CareerEntry

| Field | Type | Rules |
|-------|------|-------|
| organization | string | Required |
| title | string | Required |
| start | year/month | Required |
| end | year/month \| `present` | Required |
| focus | string | Short summary |

Ordered descending by end/start for About spine.

## PhilosophyTheme

| Field | Type | Rules |
|-------|------|-------|
| title | string | Short belief name |
| body | string | 1–2 sentences |
| order | number | Display order |

## ContentPiece (Writing/Talks)

| Field | Type | Rules |
|-------|------|-------|
| slug | string | Unique |
| title | string | Required |
| type | enum: `essay` \| `talk` \| `note` | Required |
| date | date | Required |
| abstract | string | Required for index |
| body | markdown/MDX | Required unless `externalUrl` |
| externalUrl | url? | For talks hosted elsewhere |
| draft | boolean | Default false |

## ContactChannel

| Field | Type | Rules |
|-------|------|-------|
| id | string | `form` \| `email` \| `network` |
| label | string | Button/link label |
| hrefOrAction | string | mailto, URL, or form action |
| notes | string | Engagement expectations |
| responseExpectation | string | e.g. “Usually within 2 business days” |

## Validation rules (cross-cutting)

- Home may feature at most one primary CTA and one secondary CTA.
- Work index shows only non-draft case studies with `featuredRank`.
- Writing index shows only non-draft pieces; empty collection → empty state.
- Missing `resumePdf` hides résumé control rather than linking to 404.
