# Hej Home Delivery Demo Template

This is the clean starting repository for the webinar demos. It contains only the base app skeleton: a small TypeScript/Express service, a health endpoint, tests, pnpm configuration, and pinned CI.
 

## What is included

- `src/app.ts` and `src/server.ts`: the minimal API service.
- `test/app.test.ts`: the baseline health-check test.
- `.github/workflows/ci.yml`: pinned CI for lint, test, and build.
- `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and `tsconfig.json`: the prepared TypeScript/pnpm project skeleton.

## Local validation

```bash
npm exec --yes pnpm@11.5.3 -- install --frozen-lockfile
npm exec --yes pnpm@11.5.3 -- lint
npm exec --yes pnpm@11.5.3 -- test
npm exec --yes pnpm@11.5.3 -- build
```

## Public-safety rule

All demo data must remain synthetic. Do not add real employee, customer, incident, repository, or internal policy data.
