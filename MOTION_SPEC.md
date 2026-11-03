# MOTION_SPEC.md — BENTANG

Design philosophy: motion directs attention across an editorial journey. No scroll hijack, scroll locking on narrative content, continuous background loops or entrance animation that blocks reading.

| Interaction | Trigger | Duration/easing | Desktop | Mobile/reduced motion |
|---|---|---|---|---|
| Hero photo arrival | First paint | 1200ms ease-out; scale 1.07→1 | image in fixed aspect wrapper | short fade or static |
| Hero title reveal | In view after image | 700ms cubic-bezier(.22,1,.36,1), 100ms line stagger | clip mask y: 110%→0 | fade only / static |
| Heading reveal | First enter viewport 20% | 520ms ease-out, translateY 20px | once, not on scroll up repeatedly | simple fade / none |
| Editorial picture wipe | First intersection | 700ms ease-out, clip inset 8%→0 | 1 image per section | static |
| Image hover | Hover | 450ms ease-out, scale 1→1.035 | mouse only | no hover assumptions |
| Text link arrow | Hover/focus | 180ms ease-out, x 0→4px | mouse/keyboard | same if motion allowed |
| Gallery lightbox | Click/key | 200ms ease-in-out opacity | modal with focus trap | same short/instant |
| Scene chapter crossfade | Active chapter intersects | 300ms opacity | fixed size sticky visual | image stacked/static |
| Article progress | scroll passive listener | direct progress update | fixed top 2–3px | functional without animation |
| Page transition | route change | optional 200–350ms | only if stable | instant |

## StickyStory precise specification
1. Parent = one natural document section; display grid with left media and right text; do not apply `overflow: hidden` to sticky ancestors. Header top offset = CSS `--nav-height` + 24px. Photo box height = `min(70svh, 730px)`; maintain dimensions on crossfade.
2. Right chapters top/bottom padding so each occupies roughly `min-height: 72svh`, desktop. In Bromo 4 chapters, Tongkonan 3; chapter content remains fully present in DOM.
3. Use IntersectionObserver thresholds/center line to mark active chapter; avoid per-pixel React state re-render on scroll. If GSAP is not needed, use native CSS sticky and observer.
4. At the end of its parent section, sticky releases naturally. Subsequent content must not overlap. On reverse scroll, chapter state updates predictably.
5. `<900px`: collapse to one column. Insert relevant chapter media inline before/after paragraph; no sticky position. Screen reader reading order follows narrative order.
6. `prefers-reduced-motion`: no parallax, no crossfade required; all text/visuals accessible.

## Gallery Lightbox
Focusable dialog, aria-label describing current photo and count. PageUp optional; ArrowLeft/ArrowRight required. Escape closes; backdrop click optional and must not accidentally close on image click. Return focus to originating thumbnail after close. Lock body scroll only while the dialog is open. Captions + photo credit visible.

## Scroll narrative QA
- Scroll slow/fast on desktop and reverse direction; no jumps.
- Wheel, touchpad and keyboard PageDown all navigate naturally.
- Sticky never obscures footer.
- Safari sticky ancestors checked for transforms and overflow.
- JS disabled: static document still readable.
- Low-end CPU: no full-page continuous paint effects.
