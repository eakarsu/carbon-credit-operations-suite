# Carbon Credit Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AICarbonCreditOperationsAssistant`
- `AICarbonCreditOperationsOperations`
- `AICarbonCreditOperationsAnalytics`
- `AICarbonCreditOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/carbon-credit-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5640`

Seeded users:
- `admin@carbon-credit-operations.local / admin123`
- `manager@carbon-credit-operations.local / manager123`
- `analyst@carbon-credit-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/carbon-credit-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5640 npm run smoke
```
