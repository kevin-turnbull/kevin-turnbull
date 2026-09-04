# Contract: Content Frontmatter Schemas

**Feature**: `001-architect-personal-site`  
**Type**: Content collection schema contract

## `src/content/case-studies/*.mdx`

```yaml
title: string # required
summary: string # required
organization: string # required
timeframe: string # required
role: string # required
domains: string[] # optional
featuredRank: number # optional; omit to hide from featured index
heroImage: string # optional path under public/images
draft: boolean # default false
```

Body sections SHOULD use headings: Problem, Constraints, Approach, Decisions,
Outcomes (or equivalent MDX components enforcing structure).

## `src/content/writing/*.mdx`

```yaml
title: string # required
type: essay | talk | note # required
date: YYYY-MM-DD # required
abstract: string # required
externalUrl: string # optional
draft: boolean # default false
```

## `src/content/career/*.yaml` (or single `career.yaml` list)

```yaml
organization: string
title: string
start: string # YYYY or YYYY-MM
end: string # YYYY, YYYY-MM, or present
focus: string
```

## `src/content/philosophy/*.yaml`

```yaml
title: string
body: string
order: number
```

## `src/content/profile/site.yaml`

```yaml
fullName: string
shortName: string
headline: string
supportingSentence: string
availability: open | selective | unavailable
locationLabel: string
timeZone: string
email: string
socialLinks:
  - label: string
    href: string
heroImage: string
portraitImage: string
resumePdf: string # optional
seoTitle: string
seoDescription: string
contact:
  responseExpectation: string
  engagementNotes: string
  formEndpoint: string # env-overridable in implementation
```

Invalid required fields MUST fail the content build (Astro schema validation).
