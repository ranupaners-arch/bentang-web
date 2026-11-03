# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# BENTANG — Interactive Stories of Indonesia

**Version:** 1.0  
**Date:** 3 November 2026  
**Status:** Ready for implementation (design and content specification)  
**Product type:** Immersive editorial publishing / visual exploration / interactive atlas  
**Primary language:** Bahasa Indonesia  
**Design direction:** *Indonesian Cinematic Editorial*, editorial broadsheet + gallery-first + selective immersive scenes  
**Not:** e-commerce, booking tours, travel agency, marketplace, or ticketing platform.

> This PRD is for a portfolio/demo concept. BENTANG is a fictional publication concept; its editorial narratives are original sample copy. No fabricated interviews, historical facts, partnerships, statistics or commercial services. Cultural information needs review by relevant experts before a real-world public release.

## 1. Executive summary

BENTANG adalah majalah digital interaktif untuk memperkenalkan bentang alam, ruang hidup, dan kebudayaan Indonesia melalui kisah visual mendalam. Pengalaman utama: melihat foto yang kuat, menjelajah tempat, membaca narasi kontekstual, membuka peta, dan mengusulkan topik. Kualitas visual harus setara portofolio creative studio, tetapi kegunaan tidak dikorbankan demi animasi.

**Primary value proposition:** “Setiap tempat punya cerita” — eksplorasi bukan hanya daftar destinasi, melainkan hubungan antara pemandangan, manusia, dan konteksnya.

**Intended audience:** 18–40, penikmat fotografi, pembaca kultur dan desain, pegiat edukasi kreatif, pencari inspirasi perjalanan yang tidak bermaksud bertransaksi. Bahasa copy bernada editorial, rendah hati, puitis tetapi tidak berlebihan.

**Outcome for v1:** 12 route yang benar-benar bisa diakses, desain sistematis, konten telah terisi, semua interaksi utama bekerja, sumber foto dan lisensi terdokumentasi, pengalaman mobile dan reduced-motion tidak rusak.

## 2. Design exploration — Refero Styles and final decision

### Styles examined

1. **Monocle** — https://styles.refero.design/style/9165ecb1-f068-4093-8783-1f3c98898b8a. Warm broadsheet/cream canvas; serif-led editorial hierarchy; thin separators; restrained layout; strong long-form reading. **PRIMARY (70%)**. We adapt the editorial principles, NOT reproduce proprietary fonts/layout one-to-one.
2. **Cosmos** — https://styles.refero.design/style/eb804e3a-1b75-446c-8374-114bbabaf0cd. Linen gallery, image-first discovery, photography-led compositions, minimal interface chrome. **SECONDARY (20%)** for visual discovery and masonry.
3. **Wayfinder** — https://styles.refero.design/style/d9fbc68b-0d42-4c09-829d-1207b781f46a. Dark immersive stage with quiet UI. **ACCENT (10%)** for chapter-breaks/immersive title moments only, not every page.

**Style decision:** use a custom BENTANG design system, *not* a literal Monocle clone. Monocle's original signal yellow is intentionally NOT inherited. BENTANG's nature palette and Indonesian landscape imagery are essential differentiation. Inspiration is based on verified public style descriptions, not a pixel-perfect audit of every referenced live page.

### Notion design guidance applied

- **Impeccable** (Notion reference): actively avoid “AI slop”: cards-in-cards, repetitive 3-feature grids, badge soup, needless gradients, generic hero and invented proof.
- **Anthropic frontend-design** (Notion reference): make deliberate subject-specific decisions; coherent typography, layout rhythm, custom art direction and meaningful motion.
- **Referensi Desain kukerjain** (Notion): original real photography; numbered editorial rows rather than repetitive icons; asymmetric composition, specific copy, restrained CTA, no fake testimonials.
- **Pedoman Desain: shadcn/ui** (Notion): component accessibility and consistency; use shadcn only when useful for form/dialog/accordion primitives; no dashboard-looking cards by default.
- **60fps.design** (Notion reference): use to benchmark purposeful micro-interactions, not to import mobile-app gimmicks wholesale.
- **Vibe Live Coding — Playbook** (Notion): inspect repo before editing, single `AGENTS.md` source of truth, feature branch, verify lint/tests, no deployment unless explicitly requested.
- **Agent Operating Guide** / **skillry Frontend Design Skills** (Notion references): supplementary coding process and visual critique. Only page metadata were available for some references; no claim that their full undocumented skill instructions were ingested.

Notion source URLs:
- https://app.notion.com/p/40c22bafe2c88135ae24f2e0878a8de2
- https://app.notion.com/p/40822bafe2c881b6b20ee2d90d84ae3b
- https://app.notion.com/p/40422bafe2c8816eb86ec170e789401b
- https://app.notion.com/p/40722bafe2c8814e8278c615608b2319
- https://app.notion.com/p/40522bafe2c881019d18cf84b43fadf9
- https://app.notion.com/p/40c22bafe2c88152a735f9e24fd08206

## 3. Goals and exclusions

### Product goals
G1. Publish a 12-page Indonesian digital editorial experience with unique copy on each page.  
G2. Enable effective visual browsing: destination category filters, search, story filters and gallery lightbox.  
G3. Demonstrate elegant sticky scroll storytelling on Bromo and Tongkonan detail pages, closely aligned with the user's recorded example: left visual stays pinned while right narrative scrolls, then both exit naturally at parent end.  
G4. Interactive atlas with meaningful markers grounded in verified coordinates, with an accessible list alternative.  
G5. Fast, responsive, SEO-aware, keyboard accessible, honest about demo-only contact submissions.

### Explicitly out of scope
Checkout/cart/product catalog; tourism bookings; login/accounts; user-generated publication without moderation; paid membership; payment integration; fabricated cultural interviews; auto-publishing unverified travel safety guidance; 3D globe/WebGL just for effect; heavy scrolljacking; custom CMS in v1; fictional operating team/contact address portrayed as real.

## 4. Core user journeys

**J1 — Curious visitor**: opens Home > sees immersive hero > selects Explore > filters “Gunung” > opens Bromo > reads sticky story > opens related article > returns via navigation.  
**J2 — Visual browser**: Home > Gallery > filters “Culture” > opens lightbox > next/previous by keyboard > sees photographer credit > opens Culture index.  
**J3 — Map explorer**: Atlas > chooses region/category > selects marker > sees place preview > opens available detail page or valid editorial index.  
**J4 — Research-minded reader**: Stories > opens “Di Balik Kabut Bromo” > reading progress/TOC > reads context > finds source/credit details.  
**J5 — Contributor**: Contact > submits valid form. In demo, user is told honestly there is no backend; never show fake “sent successfully”.

## 5. Information architecture / routes

| # | Route | Purpose | Primary functional CTA | Signature interaction |
|---|---|---|---|---|
| 1 | `/` | editorial opening | Mulai Menjelajah | cinematic hero, staged reveal |
| 2 | `/explore` | destination browse | Lihat Destinasi | functional search + filter |
| 3 | `/explore/bromo` | destination long-form | Baca Cerita | CSS sticky photo + narrative chapters |
| 4 | `/stories` | story directory | Baca Cerita | editorial index + category filter |
| 5 | `/stories/di-balik-kabut-bromo` | long-read story | Jelajahi Cerita Lain | reading progress + TOC |
| 6 | `/culture` | cultural topics | Baca Tongkonan | asymmetric image/essay sections |
| 7 | `/culture/tongkonan` | cultural feature | Eksplorasi Budaya | sticky architecture visual |
| 8 | `/gallery` | photo browse | Buka Foto | adaptive grid + accessible lightbox |
| 9 | `/atlas` | map browse | Jelajahi Lokasi | markers + list fallback |
| 10 | `/field-notes` | observations | Baca Catatan | notebook-style chronological list |
| 11 | `/about` | publication values | Bagikan Ide Cerita | editorial manifesto |
| 12 | `/contact` | ideas/contact | Kirim Usulan | validation and honest demo state |

**Navigation:** BENTANG (home), Explore, Stories, Culture, Gallery, Atlas, About; Contact is visible CTA. Field Notes accessible from footer and relevant contextual links. Mobile: a functional accessible menu, not hover-dependent.

## 6. Functional requirements and priorities

P0 = required for launch; P1 = enhanced polish; P2 = later.

| ID | Priority | Requirement | Acceptance criterion |
|---|---|---|---|
| F-01 | P0 | All 12 routes | direct URL and refresh return valid content, navigation links work |
| F-02 | P0 | Editorial content | all pages have authored headings, body text, realistic metadata and photos; no lorem ipsum |
| F-03 | P0 | Explore search/filter | query and category combine; correct result count and empty/reset state |
| F-04 | P0 | Stories filters | category filters actual stories; no dead detail-link |
| F-05 | P0 | Bromo sticky story | left image remains sticky until parent end; right text scrolls naturally |
| F-06 | P0 | Tongkonan sticky story | same mechanism; content is culture-specific and respectful |
| F-07 | P0 | Gallery lightbox | open/close, Escape, prev/next, focus trap/restore, captions and credits |
| F-08 | P0 | Atlas | grounded markers + valid clickable previews; list fallback if map fails |
| F-09 | P0 | Contact | required fields, email validation, clear no-backend demo mode |
| F-10 | P0 | Responsive | no overflow, hero/menu/chapters adapt at 360/768/1024/1440 |
| F-11 | P0 | Reduced motion | animations bypassed or reduced when OS setting requests it |
| F-12 | P0 | Asset ledger | local optimized images + original URLs + photographer/licenses |
| F-13 | P0 | Semantics & SEO | page-level metadata, canonical routes, sitemap, OG, accessible headings/alt |
| F-14 | P1 | Reading progress and TOC | works without affecting article scroll, supports anchors |
| F-15 | P1 | Photo chapter crossfade | chapter-linked crossfade without flash and with stable layout |
| F-16 | P1 | Share / local save | uses native share or copy; saved state explicitly local only |
| F-17 | P1 | Nice transition | page transitions enhance, not block back navigation |
| F-18 | P2 | CMS/editor | introduce only after v1 requirements settle |

## 7. Content requirements — source of truth

**SEE `CONTENT_BLUEPRINT_12_HALAMAN.md`**. That file contains *exact* headings, complete introductory paragraphs, named stories, featured destinations, categories, CTA labels, chapters, article sections, and source-photo suggestions for all twelve pages. The implementation must follow those editorial contents rather than filling with generic placeholders.

### Destination dataset (eight items)
Bromo — Jawa Timur / Gunung; Raja Ampat — Papua Barat Daya / Pulau & Laut; Tegallalang — Bali / Lanskap Hijau; Borobudur — Jawa Tengah / Warisan Budaya; Kawah Ijen — Jawa Timur / Gunung; Sumba — Nusa Tenggara Timur / Lanskap & Budaya; Kepulauan Komodo — Nusa Tenggara Timur / Pulau & Laut; Toraja — Sulawesi Selatan / Warisan Budaya. Distinguish place type from administrative region; text must be fact-checked before publication.

### Production data shape
```ts
type MediaAsset = {
  id: string; src: string; alt: string; credit: string;
  originalUrl: string; license: string; focalPoint?: string;
};
type Destination = {
  slug: string; title: string; region: string; category: string;
  excerpt: string; heroAssetId: string; detailsHref?: string;
  coordinates?: [number, number]; // latitude, longitude after independent verification
};
type Story = {
  slug: string; title: string; category: string; region: string;
  intro: string; chapters: { id: string; heading: string; body: string[]; assetId?: string }[];
  coverAssetId: string; readingMinutes?: number;
};
```

Store arrays in typed modules or MDX without hardcoding repeated content inside JSX. Have a validated `href` for each CTA; where no detail page exists, link to a relevant working index/anchor, not a fake detail page. Do not fabricate author identities, dates, interviews, contributors, sponsors or quantifiable claims.

## 8. Detailed animation behavior

Animations must support—not replace—navigation, information hierarchy and reading. `MOTION_SPEC.md` defines concrete parameters. Signature details:

**A. Cinematic Home (initial visit)**
- Hero photograph occupies ~90–100svh; navigation overlays with readable contrast; avoid covered heading.
- Image from scale 1.06–1.08 to 1.00 over 1.1–1.5s on entry only; overlay opacity lifts moderately.
- Heading appears as 2–3 purposeful lines with masked y reveal; stagger 80–140ms; subcopy arrives after headline.
- Keep functional CTA accessible immediately; on `prefers-reduced-motion` show text statically.

**B. Sticky two-column storytelling (Bromo and Tongkonan)**
- Parent section: 12-column responsive grid; left ~7 columns picture, right ~5 narrative; left sticky at `top: calc(var(--nav-height) + 24px)` and within its own section bounds.
- Right content comprises 4 chapters Bromo / 3 chapters Tongkonan; each spaced ~65–90vh for narrative rhythm, with meaningful text, chapter number, small heading.
- All page scroll belongs to BODY; NO nested scroll container or wheel interception.
- As chapter becomes active, optionally crossfade fixed-size image within sticky frame (250–450ms); image container must not change height or cause CLS.
- On parent bottom, sticky releases and moves away with document, revealing next section smoothly. Upward scroll mirrors state.
- Tablet/mobile below ~900px: disable sticky and stack image/text in reading order. Reduced motion: static image per chapter / crossfade disabled.
- Failure condition: picture sticks to entire page, overlaps footer, jumps after scroll reversal, or traps scrolling.

**C. Gallery and article**
- Gallery item reveal uses opacity 0→1 and translateY 16→0 only once, stagger ≤80ms; image zoom on hover ≤1.035, no CSS filter changes causing GPU overload.
- Lightbox enters with 180–240ms opacity; no flashing image; body scroll lock and focus trap.
- Story progress bar width tracks reading scroll; content remains accessible without JavaScript where possible.

**D. Controls / micro-motion**
- Buttons: arrow translateX(0→4px), underline 180–220ms, native focus-visible always obvious.
- Do not use a custom trailing cursor, random text scramble, perpetual floating graphics or splash screen delaying page access.

## 9. Nonfunctional requirements

- **Accessibility:** aim WCAG 2.2 AA; semantic landmarks, heading order, keyboard navigation, focus indication, dialog focus management, reduced motion, readable contrast and text scaling, alt that describes what image actually shows.
- **Core Web Vitals targets (real-user aspirational):** LCP <= 2.5s, CLS <= 0.1, INP <= 200ms on representative mid-tier device/network. These are targets, not measured results; test after build.
- **Bundle:** prefer CSS sticky and IntersectionObserver; use GSAP ScrollTrigger only if needed to achieve reliably synchronized chapter imagery; code-split nonessential gallery/map.
- **SEO:** unique meta title/description, `lang="id"`, OpenGraph image, sitemap, robots. Articles may use `Article` structured data *only with truthful metadata*. No fake publisher identity.
- **Stability:** no broken media, missing image credit, overflow at 320–360px, hydration mismatches, console errors in production build, or dangling links.
- **Analytics/privacy:** no analytics by default. If future analytics added, document cookie/privacy requirements; no tracking pixels for a demo.

## 10. Technical architecture

**Preferred greenfield stack:** Next.js App Router (TypeScript), Tailwind CSS v4, CSS modules/custom properties when needed, built-in `next/image`, Motion for minimal UI animation (optional), GSAP + ScrollTrigger only if required, MapLibre GL or Leaflet (loaded only on Atlas page). Use shadcn/ui selectively for accessibility primitives, not to impose SaaS appearance.

**Proposed tree:**
```text
src/
  app/
    layout.tsx  page.tsx  explore/page.tsx  explore/bromo/page.tsx
    stories/page.tsx  stories/di-balik-kabut-bromo/page.tsx
    culture/page.tsx  culture/tongkonan/page.tsx
    gallery/page.tsx  atlas/page.tsx  field-notes/page.tsx
    about/page.tsx  contact/page.tsx  sitemap.ts  robots.ts
  components/
    layout/{SiteNav,MobileMenu,SiteFooter}.tsx
    editorial/{EditorialHero,ChapterHeading,StickyStory,ArticleBody,ReadingProgress}.tsx
    media/{AssetImage,GalleryGrid,Lightbox}.tsx
    discovery/{DestinationFilter,StoryFilter,AtlasMap,AtlasList}.tsx
    forms/{ContactForm}.tsx
  data/{destinations,stories,culture,fieldNotes,assets}.ts
  lib/{navigation,utils,schemas}.ts
  styles/{tokens,motion}.css
public/assets/{landscapes,culture,stories}/
```
If integrating into an existing repo, adapt to current conventions instead of destroying previous structure. Do not overwrite other projects, credentials or deployment workflows.

**Package scripts:** `dev`, `build`, `lint`, `typecheck`, `test` (as actually configured); Playwright optional e2e. Implement with local static content first; avoid backend/database unless essential.

## 11. Implementation phases

- **Phase 0 — inspect & scaffold:** analyze repo, git status, project rules; prepare `AGENTS.md`, scaffold Next.js if new, install minimal dependencies, create routes with shared layout.
- **Phase 1 — design system:** tokens, typography, nav, footer, content widths, editorial image treatments, mobile menu. Verify at 360/768/1440 before going further.
- **Phase 2 — content + asset ingestion:** create typed content, acquire/verify/optimize images, write manifest/credits. No placeholder image URLs in final.
- **Phase 3 — core page build:** Home, Explore, Bromo, Stories, Story Detail, Culture, Tongkonan, Gallery, Atlas, Field Notes, About, Contact; all populated.
- **Phase 4 — interaction/motion:** functional filters, gallery/lightbox, Atlas list/map, sticky chapter scenes, reading progress, form validation and honest demo submission.
- **Phase 5 — QA:** keyboard, mobile, reduced-motion, performance, SEO, image licenses, build/typecheck/test; fix issues, no silent scope cuts.

### Build order priority
`layout → home → explore → Bromo sticky → stories → story detail → culture → Tongkonan sticky → gallery → atlas → field-notes → about → contact → QA`.

## 12. Acceptance tests — explicit

- A1: Visit every route directly and refresh; each renders meaningful page-specific content.
- A2: Explore query “Bromo” returns Bromo only; clear returns eight entries. Category filter intersects with text search.
- A3: Filter to no results shows designed empty state with reset, not blank.
- A4: On desktop 1440×900 scroll Bromo chapters; left photo holds until final chapter; after parent end releases; scroll up returns to chapter and image state.
- A5: On 390×844, Bromo and Tongkonan stack with no sticky overlap or horizontal scrolling.
- A6: Gallery item opens modal; Escape closes; right/left keys navigate; focus returns to opener.
- A7: Atlas list remains usable if map tiles unavailable; pins correspond to geolocations validated from authoritative references.
- A8: Invalid contact email/empty message blocks submission; demo UI does not claim delivery.
- A9: With reduced-motion enabled, no parallax or animated long-scroll effects; all content remains available.
- A10: Browser back, tab keyboard and direct links function; no inert CTA.
- A11: Every published image has usable alt or correctly empty decorative alt and documented origin/credit.
- A12: build, typecheck and lint pass; check at minimum 360, 768, 1024, 1440 wide; no horizontal scroll, clipping or route error.

## 13. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Visual polish overwhelms reading | content-first wireframe review + max animation budget |
| Assets broken/rights unclear | download local files with photographer/license ledger |
| Cultural oversimplification | neutral sample copy, no unverified cultural claims, editorial review before production |
| Sticky bugs on Safari/mobile | CSS layout proof, parent-bound sticky, responsive disable and Playwright scroll tests |
| Atlas map external network failure | accessible region/location list always visible |
| Too many JS motion libraries | CSS first, only add library where justified |
| Fake interaction or email delivery | honest demo labels, no simulated successful send |
| Agent modifies unrelated project | root AGENTS.md, feature branch, minimal scope and diff review |

## 14. Definition of Done (DoD)

12 authentic content-filled pages; coherent bespoke Monocle-led visual direction; responsive layouts; assets stored locally with credit; functional filters/search/lightbox/map/list; sticky stories like reference recording; honest form state; reduced motion; semantic/SEO foundations; no broken routes; build+lint+typecheck passing. Agent should provide final changed-file list, commands/test outcomes, and any known limitations. No checkout, no shopping cart, no booking.

## 15. Sources and deliverables

**Visual reference:** Monocle / Cosmos / Wayfinder Refero Styles links above, with original design systems used for inspiration only.  
**Internal source:** Notion references listed in §2.  
**Content:** `CONTENT_BLUEPRINT_12_HALAMAN.md`.  
**Motion:** `MOTION_SPEC.md`.  
**Design tokens and treatment:** `DESIGN.md`.  
**Asset sources:** `ASSET_MANIFEST.csv` and `ASSET_POLICY.md`.  
**Agent rules:** `AGENTS.md`.  
