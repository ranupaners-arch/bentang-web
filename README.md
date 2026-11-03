# BENTANG — Interactive Stories of Indonesia

**Author:** Ranupane · **Brand:** KukerjainAja

BENTANG is an Indonesian editorial exploration of places, architecture, and stories. It is a portfolio concept, not a travel booking or commerce service.

**Run locally:** install dependencies with `npm install`, then start the development server with `npm run dev`.

| File | Role |
|---|---|
| `PRD_BENTANG.md` | Goals, functional requirements, 12 routes, acceptance tests, architecture and roadmap |
| `DESIGN.md` | Refero choice, visual tokens, typescale, art direction and per-page variation |
| `MOTION_SPEC.md` | Scroll, sticky, reveal and gallery timing with accessibility fallbacks |
| `CONTENT_BLUEPRINT_12_HALAMAN.md` | **Actual Indonesian copy** for each page, sections, chapter texts, CTAs and galleries |
| `ASSET_MANIFEST.csv` | 19 curated source photo URLs with license verification worklist |
| `ASSET_POLICY.md` | Licensing, attribution and local media workflow |

Assets are **source references**, not pre-downloaded pictures. Verify their status/rights before commercial publication.

## BENTANG application

The Next.js App Router implementation lives in `src/`. It contains all twelve briefed routes, shared editorial navigation and footer, responsive styles, and client interactions for place/story filters, the photo lightbox, the atlas, reading progress, local save state, field notes, and the demo contact form.

Code is licensed under MIT; see `LICENSE`. Photographs are not covered by MIT. Their creator credits, source pages and applicable Unsplash license are listed in `CREDITS.md` and `ASSET_MANIFEST.csv`. Images currently load from Unsplash URLs because the build environment could not resolve Unsplash's image host to download local copies.
