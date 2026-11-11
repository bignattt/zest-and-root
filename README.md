# Zest & Root: concept landing page and design system

**This is a fictional brand made for a design portfolio.** There are no real products, clients, reviews or results. Testimonials are clearly labelled placeholders, and prices are placeholders too.

Zest & Root is a cold-pressed ginger and citrus juice brand. The project has two deliverables:

- `index.html`: a responsive landing page
- `design-system.html`: a one-page design system (color, type, buttons, cards, icons, spacing, radius, motion)

Both are plain HTML, CSS and a little JavaScript. There are no frameworks and no build tools.

## How to open it

1. Download or clone this repository.
2. Double-click `index.html` or `design-system.html`. They open in any modern browser.
3. You need an internet connection for the Google Fonts (Fraunces and DM Sans). Offline, the page falls back to Georgia and your system font.

To take screenshots at the three design widths, open Chrome DevTools, switch to the device toolbar and set the width to **375**, **768** or **1280** px. Scroll to the bottom of the page once before a full-page capture, because sections fade in as they appear on screen. To skip the animations, turn on "Emulate CSS prefers-reduced-motion" in DevTools (Rendering tab), and everything shows immediately.

## The concept

**Brand personality:** zesty, grounded, honest.
The look is bright and energetic like citrus, and earthy and plain-spoken like a root. Copy is short and avoids health claims. Benefits talk about how the juice is made, not what it does for the body.

**Concept products (all fictional):** Root Fire (ginger, lemon, cayenne), Sunrise Zest (orange, carrot, ginger), Green Citrus (lime, cucumber, mint, ginger).

## Design decisions

| Area | Decision | Why |
|---|---|---|
| Color | Root Green `#1F4D3A` (primary), Zest Orange `#F59E2A` (secondary), Lemon Zest `#F4D35E` (accent), warm neutrals from Ink `#1B2A22` to Cream `#FBF6EA` | Deep green is the grounded "root"; orange and lemon bring the citrus energy. Warm neutrals keep it from feeling clinical. |
| Contrast | Light text only on Root Green. Orange and Lemon always carry dark Ink text. Stone (`#B9B09C`) is for borders, never text. | Every text pairing used meets WCAG AA. Ratios are listed on the design system page. |
| Type | Fraunces (headings), DM Sans (body) | A soft serif gives a handcrafted feel. A clean sans keeps small text readable. |
| Type scale | 12 / 14 / 16 / 20 / 24 / 32 / 48 / 64 px, large sizes fluid with `clamp()` | One scale shared by every page. |
| Spacing | 8-point grid (4, 8, 16, 24, 32, 48, 64, 96, 128), 4px as the only half-step | Predictable rhythm and easy handoff. |
| Radius | 8 / 16 / 24 / pill | Round shapes echo fruit. |
| Naming | camelCase everywhere: `--colorPrimary`, `--space3`, `.btnPrimary`, `.cardFeature` | One style, no mixing. |
| Imagery | CSS shapes and SVG bottle illustrations, no photos | No copyright issues, and every placeholder looks like the same family. |
| Accessibility | Skip link, visible focus ring (switches color on dark backgrounds), 44px tap targets, native `<details>` FAQ, labelled landmarks, reduced-motion support | Usable by keyboard and screen readers. |
| Motion | 150 / 250 / 600 ms, one easing curve, scroll reveal once per element, one slow float on the hero | Subtle polish. Off when the visitor prefers reduced motion. |

## Project structure

```
index.html            landing page
design-system.html    design system documentation
css/
  tokens.css          all CSS variables (colors, type, spacing, radius, motion)
  base.css            reset, type styles, focus ring, layout helpers
  components.css      buttons, cards, badges, icons, image placeholders
  landing.css         landing page layout (mobile-first: 375, 768, 1024, 1280)
  motion.css          hover and scroll animations
  designSystem.css    styles for the documentation page only
js/
  main.js             mobile menu, scroll reveal, demo email form
assets/
  logo.svg            concept logo
```

## Notes

- The icon sprite is inlined in each HTML file, because external SVG sprites do not load when a page is opened straight from disk.
- The email form is a demo. It sends nothing and stores nothing.
- The desktop nav appears from 1024px. Below that, a menu button is used.

## Credits

Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) and [DM Sans](https://fonts.google.com/specimen/DM+Sans) from Google Fonts. Icons and illustrations were drawn for this project.
