# Netso.energy Runbook

## Overview
Netso.energy is a Next.js application powering clean, affordable solar energy for businesses.

## Infrastructure

### Hosting
- **Platform:** Vercel (Recommended)
- **Repo:** `https://github.com/tazwarmahtab/Netso.energy.git`
- **Build Command:** `pnpm build`
- **Install Command:** `pnpm install`

### CI/CD
- **GitHub Actions:** `.github/workflows/ci.yml`
- **Steps:** Lint -> Typecheck -> Test (Unit/Component) -> Test (e2e/Playwright) -> Build -> Deploy (main only)

### Secrets Management
The following secrets are required in GitHub/Vercel:
- `VERCEL_TOKEN`: Access token for Vercel CLI/API.
- `VERCEL_ORG_ID`: Vercel Organization ID.
- `VERCEL_PROJECT_ID`: Vercel Project ID.

## Standard Procedures

### Local Development
1. Install dependencies: `pnpm install`
2. Run dev server: `pnpm dev`
3. Run unit tests: `pnpm test`
4. Run e2e tests: `pnpm test:e2e`

### Deploying
Deployment happens automatically on merge to `main` via GitHub Actions.

### Persistence Note (CRITICAL)
The current waitlist implementation (`app/api/waitlist/route.ts`) uses a local `waitlist.json` file. This will **NOT** work in Vercel/Serverless environments as the filesystem is ephemeral and read-only in production.

**Recommendation:**
- Migrate to **Vercel Postgres** or **Railway PostgreSQL**.
- Use **Prisma** or **Drizzle** as an ORM.
- Alternatively, use **Vercel KV** for simple email storage.

### Rolling Back
1. Use the Vercel Dashboard to revert to a previous deployment.
2. Alternatively, revert the commit on the `main` branch.

## Monitoring & Alerts
- **Sentry:** (To be configured)
- **UptimeRobot:** (To be configured)

## Backup & Recovery
- (Database recovery procedures to be added once PostgreSQL is integrated)
