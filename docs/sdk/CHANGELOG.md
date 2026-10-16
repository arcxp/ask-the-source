# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.1.0] - 2026-09-29

### Changed
- **Breaking — the package is renamed from `@arcxp/ask-the-news-sdk` to `@arcxp/ask-the-source-sdk`**, to match the product's new name, Ask the Source. The exports carrying the old name are renamed with it — `createAskTheNewsClient` → `createAskTheSourceClient`, `AskTheNewsClient` → `AskTheSourceClient`, `AskTheNewsClientOptions` → `AskTheSourceClientOptions` — and the rest of the API is unchanged. No compatibility aliases are shipped: the package has no consumers yet. `@arcxp/ask-the-news-sdk` receives no further releases.
- **Published to the public npm registry** instead of GitHub Packages. Installing no longer needs a GitHub token or an `@arcxp` entry in `.npmrc` — remove both.
- **Licensed under ISC** (previously MIT). The package now ships its `LICENSE` file.

## [1.0.0] - 2026-07-14

First public release.
