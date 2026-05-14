## Flags

| Flag | Type | Purpose |
|---|---|---|
| `enable-onboarding` | Boolean | Shows or hides the signup flow |
| `homepage-variant` | String | Toggles between two homepage designs |
| `some-new-feature` | Boolean | Visible only to beta users |

## Environment Setup

Each flag is configured independently per environment in the Vercel dashboard:

- **Development** — your local environment on `localhost`
- **Preview** — triggered by pushes to the `staging` branch on GitHub
- **Production** — your live deployment on `main`

## How to Test the Flags

1. Open your [Vercel dashboard](https://vercel.com/dashboard)
2. Navigate to your project → **Flags**
3. Toggle any flag in the **Development** environment
4. Refresh your local app and watch the change take effect — no redeployment needed

## Built With

- [Next.js](https://nextjs.org)
- [Vercel Flags SDK](https://vercel.com/docs/workflow-collaboration/feature-flags)
- [TypeScript](https://www.typescriptlang.org)

## Related Article

This project was built as part of the article **Feature Flags 101: The Definitive Guide for Beginners**.
Add your article link here once published.

## License

MIT