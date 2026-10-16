# Ask the Source

**Ask the Source** is an Arc XP product that lets readers ask natural-language questions about your newsroom's content. It queries your Arc XP news corpus and returns AI-generated answers with cited articles, streamed in real time.

This repository hosts documentation and a runnable demo app for two npm packages that integrate Ask the Source into your application:

| Package | What it is |
| --- | --- |
| [`@arcxp/ask-the-source-sdk`](docs/sdk/README.md) | TypeScript SDK — direct API access (queries, SSE streaming, feedback, settings). Use this if you are building a custom UI or working outside of React. |
| [`@arcxp/ask-the-source-components`](docs/components/README.md) | React component library built on the SDK — drop-in `<AskChat/>` plus composable views and hooks. Use this if you want a working UI with minimal setup. |

---

## Which package do I need?

- **Building a React app and want a ready-made UI?** Install `@arcxp/ask-the-source-components`. It bundles the SDK and gives you a full chat experience in a few lines of JSX. [Get started with components.](docs/components/README.md)
- **Building a custom UI, using a non-React framework, or need raw API access?** Install `@arcxp/ask-the-source-sdk`. It handles auth, request/response typing, and SSE streaming. [Get started with the SDK.](docs/sdk/README.md)

---

## Installing the packages

The packages are published to the public npm registry under the `@arcxp` scope — no token or `.npmrc` setup needed:

```bash
npm install @arcxp/ask-the-source-components   # React UI (includes the SDK)
# or
npm install @arcxp/ask-the-source-sdk          # SDK only
```

> **Migrating from `@arcxp/ask-the-news-*`?** The `@arcxp/ask-the-news-sdk` and `@arcxp/ask-the-news-components` packages on GitHub Packages are deprecated. Install the `@arcxp/ask-the-source-*` packages above instead, and remove any `@arcxp:registry=https://npm.pkg.github.com` line from your `.npmrc` — otherwise npm keeps resolving `@arcxp` packages from GitHub Packages. The SDK factory is now `createAskTheSourceClient` (formerly `createAskTheNewsClient`).

Both packages require **Node >= 22**.

---

## Documentation

- [SDK docs](docs/sdk/README.md) — API reference, query methods, SSE streaming, error handling
- [SDK changelog](docs/sdk/CHANGELOG.md)
- [Components docs](docs/components/README.md) — `<AskProvider>`, `<AskChat/>`, composable views, hooks, theming
- [Components changelog](docs/components/CHANGELOG.md)

---

## Running the demo app

[`apps/demo`](apps/demo) is a minimal demo app showing how the packages are wired together: a single page rendering `<AskProvider>` + `<AskChat/>`. It is dev-only and runs off the Vite dev server.

**Prerequisites:** Node >= 22.

```bash
npm install       # installs the demo and the published @arcxp packages
npm run dev       # starts the demo on http://localhost:3000
```

Point the demo at your Ask the Source deployment with these environment variables (e.g. via `apps/demo/.env.local` or real environment variables):

| Variable | Description | Example |
| --- | --- | --- |
| `VITE_ARC_ASK_BASE_URL` | API base URL | `https://myorg-config-sandbox.api.arc-cdn.net/ask` |
| `VITE_ARC_ASK_WEBSITE` | Site identifier | `my-site` |
| `VITE_ARC_ASK_API_KEY` | Site-scoped API key (sent as the `X-Api-Key` header) | (your site's API key) |

---

## License
[ISC](LICENSE).

