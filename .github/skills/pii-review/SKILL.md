# PII review skill

Use this skill when reviewing pull requests, fixtures, tests, seed data, documentation examples, or logs for likely personal data exposure in a public-safe demo repository.

## Checklist

1. Identify static records that look like people, homes, phone numbers, addresses, or national identifiers.
2. Explain why realistic-looking data is risky even when intended to be synthetic.
3. Suggest a generated-data helper or obviously invalid replacement values.
4. Avoid asserting that any value is real unless there is direct evidence.

## Good recommendation

Replace realistic fixture records with generated examples such as:

```ts
makeSyntheticCustomer("customer-001")
```

The helper should use reserved domains, impossible identifiers, and address strings such as `Synthetic Street 1`.
