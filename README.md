# Hej Home Delivery PII Demo Template

This is a clean template repository for the first webinar demo: **PII review with a custom Copilot agent**.

It intentionally stops before the later supply-chain, CodeQL, Dependabot, and plugin-governance demos. Use it when you want a fresh copy that can produce the first PII PR without carrying the rest of the webinar demo state.

## What is included

- A minimal TypeScript/Express service with `/health`.
- Pinned GitHub Actions for CI.
- Dependency review workflow, ready for later demos if needed.
- Repository-level Copilot instructions for public-safe demo data.
- A local `.github/agents/pii-review.agent.md` custom agent.
- Prepared branches:
  - `main`: clean baseline before the PII feature.
  - `demo/01-pii-fixtures`: feature branch containing realistic-looking fixture data for review.
  - `demo/01-pii-safe-fixtures`: fallback branch showing the safer generated fixture pattern.

## Local validation

```bash
npm exec --yes pnpm@11.5.3 -- install --frozen-lockfile
npm exec --yes pnpm@11.5.3 -- lint
rm -rf dist
npm exec --yes pnpm@11.5.3 -- test
rm -rf dist
npm exec --yes pnpm@11.5.3 -- build
rm -rf dist
```

## Public-safety rule

All data in this repository must remain synthetic. Do not add real Ingka, IKEA, employee, customer, incident, repository, or internal policy data.
