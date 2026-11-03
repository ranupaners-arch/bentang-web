# DESIGN.md — BENTANG

## Positioning and reference allocation
Visual direction: **Indonesian Cinematic Editorial**. Editorial language 70% Monocle (warm paper, serif headlines, fine rules), 20% Cosmos (photography-first gallery), 10% Wayfinder (cinematic scene breaks). Create original site styling; do not copy trade dress, proprietary illustrations or fonts.

References:
- https://styles.refero.design/style/9165ecb1-f068-4093-8783-1f3c98898b8a
- https://styles.refero.design/style/eb804e3a-1b75-446c-8374-114bbabaf0cd
- https://styles.refero.design/style/d9fbc68b-0d42-4c09-829d-1207b781f46a

## CSS tokens (initial values; adjust contrast after real rendering)
```css
:root {
  --color-paper: #F4F0E6;
  --color-paper-raised: #F9F7F1;
  --color-forest: #172D28;
  --color-ink: #202420;
  --color-earth: #A4573C;
  --color-sand: #C1A37C;
  --color-rule: rgba(32, 36, 32, .20);
  --color-muted: #686D65;
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'DM Sans', Arial, sans-serif;
  --content-width: 1380px;
  --nav-height: 80px;
  --gutter: clamp(20px, 4.4vw, 84px);
  --section-space: clamp(84px, 10vw, 180px);
  --radius-photo: 2px;
  --radius-control: 4px;
}
```
Typography: display fluid clamp(64px, 9vw, 160px); H1 clamp(58px, 7.6vw, 124px); H2 clamp(42px, 5.8vw, 84px); H3 clamp(29px, 3vw, 46px); body 17–19px / line 1.6–1.75; nav 12–14px uppercase with moderate letter spacing; captions 11–13px. Restrict paragraph measure to ~65–74 characters.

Layout: 12-column desktop, 6-column tablet, 4-column mobile. Strong editorial grid, unexpected but intentional image scale. Align text to a deliberate baseline. Use hairline rules to group content; avoid cards-in-cards, 3x identical feature grids, all-centered copy, neon gradient, over-rounded corners or glowing glass cards. Content width variable; not every section 100% viewport.

## Art direction
- Photographic subjects: landscape weather, coastal aerials, cultural architecture, people only with suitable permissions/context. Retain natural tones and textured lighting; not uniformly oversaturated teal-orange.
- Hero subject must have safe composition for headline placement; use object-position per asset.
- Captions in a fine editorial style: `FIG. 01 / ...`, photographer credit near images or in credits index.
- Distinguish article photos from destination cards; use 16:9 hero, 4:5 magazine portrait, 3:2 landscape, some 1:1 square with intent.
- Avoid stock silhouettes, fake map markers, arbitrary texture clutter.

## Component behavior
Nav: translucent only if contrast passes; solid cream on scroll; responsive menu with Escape/focus. Footer: 3-level structure (slogan, sitemap, photo credits/demo disclosure). Cards: photo + category eyebrow + title + 1–2 lines; generally no card background. Buttons: text link with arrow/underline; solid filled only for important action. Forms: clear labels, 44px touch targets, feedback next to fields. Atlas: separate list and optional map with visible controls.

## Page-to-page variation
Home cinematic, Explore art-directed grid, Bromo sticky essay, Stories dense editorial index, Story Detail readable magazine columns, Culture essay pairs, Tongkonan documentary layout, Gallery asymmetric masonry, Atlas utilitarian cartography with editorial styling, Field Notes simple notebook rows, About manifesto, Contact quiet accessible form. NEVER reuse exactly the same hero+3-cards+CTA structure on all twelve pages.

## Accessibility and implementation notes
Aim AA contrast and keyboard focus. Avoid decorative animation on every text span. Use font fallbacks, font-display swap, safe viewport units. For reduced motion, skip transforms. Review at 360/768/1024/1440 plus Safari. Use photo assets with rights/credit from ASSET_MANIFEST.
