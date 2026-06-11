# PII demo presenter notes

## Demo intent

Show that realistic-looking fixture data is still a review problem even when it is labelled as synthetic. The custom agent should explain the privacy and provenance risk without claiming the values are real.

## Files to know

| File | Why it matters |
| --- | --- |
| `.github/copilot/instructions.md` | Repository rules for public-safe data and dependency-aware Copilot output. |
| `.github/agents/pii-review.agent.md` | The custom PII review agent used in the demo. |
| `src/fixtures/customers.fixture.json` on `demo/01-pii-fixtures` | The intentionally risky-looking fixture records. |
| `src/fixtures/customers.synthetic.ts` on `demo/01-pii-safe-fixtures` | The safer generated-data fallback. |
| `.github/workflows/ci.yml` | Pinned, minimal CI; should stay green for this demo. |

## Expected PR

Create a PR from `demo/01-pii-fixtures` into `main`.

Expected state:

- CI passes.
- Dependency review passes.
- CodeQL default setup should pass.
- The PII concern is raised by the custom agent or prepared review comment, not by a failing check.

## Key presenter line

> The agent is not proving this data is real. It is explaining why realistic static data is risky in a shared repository and how to replace it with obviously synthetic generated data.
