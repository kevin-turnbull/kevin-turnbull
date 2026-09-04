# kevin-turnbull

Personal website for a senior software architect — planned and governed with
[GitHub Spec Kit](https://github.com/github/spec-kit).

## Spec-driven workflow

This repo is initialized with Spec Kit (`specify-cli` **v1.0.4**) and the
**cursor-agent** integration (skills under `.cursor/skills/`).

| Step | Skill | Purpose |
|------|-------|---------|
| 1 | `/speckit-constitution` | Project principles |
| 2 | `/speckit-specify` | Feature specification |
| 3 | `/speckit-plan` | Technical plan + design artifacts |
| 4 | `/speckit-tasks` | Actionable task breakdown |
| 5 | `/speckit-implement` | Execute tasks |

Optional: `/speckit-clarify`, `/speckit-analyze`, `/speckit-checklist`,
`/speckit-converge`.

### Active feature

See [`specs/001-architect-personal-site/`](./specs/001-architect-personal-site/)
for the full plan:

- `spec.md` — what & why
- `plan.md` — Astro static site approach
- `research.md` — decisions
- `data-model.md` / `contracts/` — content & IA
- `tasks.md` — implementation backlog (T001–T050)
- `quickstart.md` — validation scenarios

### Local Spec Kit CLI

```bash
# uv (if needed)
curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH="$HOME/.local/bin:$PATH"

# persistent install (pinned)
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@v1.0.4

specify version
specify check
```

Project already contains `.specify/` and Cursor skills from:

```bash
specify init --here --force --integration cursor-agent --script sh --ignore-agent-tools
specify extension add git
```

## Site (planned)

High-UX personal brand site: hero brand presence, selected case studies,
about/philosophy, writing/talks, and contact — content-driven Astro static
site. Implementation starts from `tasks.md` via `/speckit-implement`.
