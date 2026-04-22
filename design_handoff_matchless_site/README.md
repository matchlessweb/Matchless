# Handoff: Matchless Web — Marketing Site

## Overview
A dark-themed marketing site for **Matchless Web**, a revenue-systems agency. The design targets operators who want client acquisition systems (website, SEO, funnels, automations) built for them. Positioning: serious, system-driven, editorial — not the usual SaaS landing page.

Currently two pages are designed:
1. **Home (`Dark Hero.html`)** — hero + all marketing sections (problem, guide, plan, services, stakes, testimonials, FAQ, final CTA, footer)
2. **Contact (`Contact.html`)** — inquiry form + contact info + "what happens next"

The design is extensible: more pages (Case Studies, Pricing, Process, About) should follow the same visual system documented below.

---

## About the Design Files
The files under `design_files/` are **design references created in HTML** — prototypes built in vanilla HTML/CSS + React via Babel in-browser. They are **not** production code to copy as-is.

Your task is to **recreate these designs in the target codebase's existing environment** (Next.js, Astro, Remix, plain React, etc.) using its established patterns, router, component primitives, and asset pipeline. If the project has no codebase yet, **Next.js 14+ with the App Router** is the recommended choice (matches the content-site model, supports server components for the mostly-static pages, handles fonts and OG images cleanly).

What to take from the HTML files:
- Exact **visual design**: colors, typography, spacing, layouts, components
- Exact **copy** (headlines, body text, form labels, etc.)
- **Interaction patterns** (form behavior, chip selects, tab switching, hover states)
- The **braid SVG background system** (see dedicated section below)

What to replace:
- Babel in-browser → proper JSX build
- Inline `<script type="text/babel">` → component files
- `window.__TWEAKS__` defaults → config file or CMS
- Global `window.Footer` etc. → proper imports

---

## Fidelity

**High-fidelity (hifi).** Colors, typography, spacing, and interactions are final. Recreate pixel-perfect using the codebase's primitives (Tailwind, CSS modules, styled-components — whichever the codebase already uses). All tokens are defined in `design_files/assets/colors_and_type.css`; port them to the project's theme system.

---

## Design System Reference

### Brand
- **Name**: Matchless Web
- **Brand mark**: Lightning bolt — stroked polygon, no fill. See `BrandMark` component in both HTML files.
  ```
  <polygon points="17 4 4 19 15 19 14 30 27 15 15 15 17 4"
           fill="none" stroke="#49BB94" stroke-width="1.9"
           stroke-linecap="round" stroke-linejoin="round"/>
  ```
- **Wordmark**: "MATCHLESS" in Syne (display font), tracked wide, weight 600

### Typography

Fonts (loaded as `@font-face` in `assets/colors_and_type.css` — use Google Fonts CDN or self-host in the real app):

| Role | Family | Use |
|---|---|---|
| Display | **Syne** (400–800) | Headlines, section titles, wordmark |
| Display italic | **Fraunces** (italic, weight 500) | Accent word in hero ("scale", "revenue") — a single italicized word inside Syne |
| Body | **Inter Tight** (100–900) | Body copy, buttons |
| Support | **Inter** (100–900) | UI labels where Inter Tight is too condensed |
| Mono | **JetBrains Mono** (100–800) | Eyebrows, field labels, small caps |

**Type scale (from `--text-*` tokens)** — use `clamp()` for responsive:
- Hero display: `clamp(52px, 8vw, var(--text-6xl))`, line-height 1.0, letter-spacing -0.035em
- Section headlines: `clamp(36px, 5vw, 64px)`, line-height 1.02, letter-spacing -0.03em
- H3 cards: 22px, weight 600, letter-spacing -0.02em
- Body: 15–17px, line-height 1.5
- Eyebrow (mono): 11px, weight 600, letter-spacing 0.14em, UPPERCASE
- Meta/field labels (mono): 11px, same as eyebrow

**Headline treatment**: Display headlines use `<em>` for the brand-italic emphasis word. CSS renders `<em>` inside `.mw-display` or hero title as Fraunces italic in brand green. Example:
```html
<h1>Systems that <em>scale</em> revenue.</h1>
```

### Colors

**Brand greens** (from `--mw-green-*`):
| Token | Hex | Use |
|---|---|---|
| `--mw-green-500` | `#49BB94` | Primary brand in light mode |
| `--mw-green-400` | `#6BCAA8` | Primary in dark mode (WCAG AA on ink) |
| `--mw-green-600` | `#34A57E` | Hover/pressed |
| `--mw-green-700` | `#218766` | Deep emerald |
| `--mw-green-200` | `#C7EBDC` | Tint — chips, highlights |
| `--mw-green-100` | `#E4F5EE` | Surface tint |

**Ink / neutrals**:
| Token | Hex | Use |
|---|---|---|
| `--mw-ink` | `#0F1A16` | Page bg (dark mode) |
| `--bg-2` (dark) | `#18231E` | Cards / elevated |
| `--bg-3` (dark) | `#1F2A25` | Sunken / chips |
| `--bg-ink` (dark) | `#0A0F0D` | Deepest surface |
| `--fg-1` (dark) | `#F0ECE4` | Primary text (warm off-white) |
| `--fg-2` (dark) | `#B8B5AC` | Secondary text |
| `--fg-3` (dark) | `#8A867C` | Tertiary/meta |
| `--fg-4` (dark) | `#5C5A53` | Placeholder |
| `--mw-sunlit` | `#F6E9C1` | Warm highlight — rare, editorial accent |
| `--mw-coral` | `#E8684A` | Alert / secondary accent (rare) |

**Borders** (dark mode):
- `--border-1: rgba(255,255,255,0.08)` — default hairlines
- `--border-2: rgba(255,255,255,0.14)` — emphasized
- Focus ring: `rgba(107, 202, 168, 0.12)` at 4px offset

**Theme system**: Full light and dark themes exist. The current site uses `data-theme="dark"` globally. Semantic tokens (`--fg-1`, `--bg-2`, etc.) switch automatically — authoring components against semantic tokens lets you flip themes in one attribute.

### Spacing / Radius / Shadows

- **Page gutter**: 24px (desktop), tightens to 12px mobile
- **Max content width**: 1320px (center-constrained)
- **Section card padding**: `96px 72px` desktop, `48px 22px` mobile
- **Card radius**: 28px (section cards), 20px (info/inline cards), 18px (small cards), 10px (inputs/buttons small), 999px (chips/pills)
- **Focus ring**: `box-shadow: 0 0 0 4px rgba(107,202,168,0.12); border-color: #6BCAA8`

---

## The Braid Background (signature element)

The dark pages share a custom SVG background: five curved bezier paths weaving vertically down the page, rendered in brand-green gradient strokes, with a soft Gaussian-blurred halo behind each. Cards on top have mostly-transparent edges that fade into opaque centers so ribbons visibly bleed into each card.

**Structure** (see both HTML files — identical markup in `<RibbonBG>` component):
1. Fixed-position `.ribbons` div, `position: absolute; inset: 0; z-index: 0; pointer-events: none`
2. Single inline `<svg viewBox="0 0 1440 3000" preserveAspectRatio="none">` stretched full page
3. 5 linear gradients (`#rb-1` through `#rb-5`) mixing green tints (#8EDDBD, #49BB94, #34A57E, #218766, #6BCAA8)
4. One Gaussian blur filter (`#rb-halo`, stdDeviation="3")
5. Two passes of 5 paths each:
   - **Halo pass**: paths at stroke-width 7–16 with `filter="url(#rb-halo)"` and opacity 0.42 — creates the soft glow
   - **Line pass**: same paths, stroke-width 1.4–2.6, full opacity — the crisp ribbon edge
6. A `.ribbons-veil` div on top adds a radial vignette darkening edges

**Card bleed technique**: Don't give cards a full solid background. Instead use a radial-gradient background that's opaque at the center and fades to transparent at the edges:
```css
background:
  radial-gradient(ellipse 120% 80% at 50% 30%,
    rgba(24, 35, 30, 0.96) 0%,
    rgba(24, 35, 30, 0.92) 60%,
    rgba(24, 35, 30, 0) 100%),
  rgba(15, 22, 19, 0.3);
```
This is what makes ribbons visibly pass *into* card edges before fading out — the signature look of the site.

**Porting to production**: Extract the ribbon SVG into its own React component (`<BraidBackground />`) and render it once at the layout level. The path `d` strings are long bezier curves — keep them verbatim. Animate optionally with `prefers-reduced-motion` guards; currently static.

---

## Screens

### 1. Home — `Dark Hero.html`

Structure (top to bottom):

#### 1a. Nav (`<Nav>`)
- Fixed-top bar, full-width inner max 1320px, 24px gutter
- Left: lightning `BrandMark` (32px) + "MATCHLESS" wordmark (Syne 600, tracked)
- Center: text links — Solutions, Process, Pricing, Case Studies (Inter Tight, 14px, `var(--fg-2)`)
- Right: "Client Login" text link + "Book a Call" button (→ `Contact.html`), variant `.btn-ink .btn-sm`
- On scroll past hero, nav gets subtle backdrop-blur (see `.nav` styles in `hero.css`)

#### 1b. Hero (`<Hero>`, `<Panel>`)
- Two-column: left = display headline + eyebrow + actions; right = interactive "Panel" card
- **Eyebrow**: green dot + "Client Acquisition Systems" + thin divider + link "Read our case studies"
- **Headline**: three-line composition, built from `window.__TWEAKS__`:
  - Line 1: "Systems"
  - Line 2: "that `<em>scale</em>`" ← italicized green Fraunces accent
  - Line 3: "revenue."
- **Subhead paragraph** below
- **Actions**: Primary button "Start the protocol" (mint fill, black text, arrow icon) + ghost link "Explore Solutions"
- **Panel** (right side): chat-style card with 3 user avatars, tab switcher (STRATEGY / BUILD / DEPLOY), contextual prompt question, 2 suggestion chips, then a row of 4 service badges (WEB / CMS / SEO / CRM)

#### 1c. Problem section (`<Problem>` in `Sections.jsx`)
The "you have a problem" block — 2-column grid of pain-point cards.

#### 1d. Guide section (`<Guide>`)
"Meet your guide" — establishes Matchless as the authority.

#### 1e. Plan section (`<Plan>`)
3-step process with a connecting line. `.plan-steps` grid has `::before` pseudo drawing the dotted connector on desktop only.

#### 1f. Services section (`<Services>`)
Services grid. Uses `.services-grid` — 3 columns desktop, 1 mobile.

#### 1g. Stakes section (`<Stakes>`)
"Cost of not acting" — high-contrast dark section.

#### 1h. Testimonials (`<Testimonials>`)

#### 1i. FAQ (`<FAQ>`)
Accordion-style expand/collapse.

#### 1j. Final CTA (`<FinalCTA>`)
Big "Start the protocol" push.

#### 1k. Footer (`<Footer>`)
4-column: brand/tagline, Solutions links, Company links (includes "Contact" → `Contact.html`), Resources links. Bottom bar: copyright + "Built with intent."

---

### 2. Contact — `Contact.html`

Same nav + braid bg + footer. Main content:

#### 2a. Contact hero (`ContactHero`)
- Compact version of the home hero
- Eyebrow: "Start your system • We respond within 1 business day"
- Headline: "Let's build the system that scales your `<em>revenue</em>`." — same italic-green accent treatment
- Subhead: single paragraph, 640px max-width

#### 2b. Contact body (`ContactBody`) — two-column grid
- **Left (1.65fr)**: Form card
  - Header: eyebrow "Project inquiry" + h2 "Tell us about your project" + sub "All fields optional except email…"
  - Fields (all dark-filled inputs with green focus ring):
    - Row: Name / Company
    - Row: Email (required) / Phone (optional)
    - "What do you need help with?" — 5 chip-select options, single-select
    - Row: Budget (5 chips) / Timeline (4 chips) — smaller chips `.cf-chip-sm`
    - "Tell us more" — textarea
  - Footer: shield icon + fine-print reassurance + primary submit button "Send inquiry"
  - **Success state**: on submit, replace form with centered check-circle icon + "Thanks — we got it." + reply-time copy
- **Right (1fr, sticky)**: 4 info cards (stack vertically desktop, wrap 2-col on tablet)
  - Email → mailto:hello@matchlessweb.com
  - Book a 30-min strategy call → calendar link
  - Response time → "< 1 business day"
  - Based in → "Austin, TX"
  - Each card: 40×40 mint-tinted icon tile (rounded 10px) + label (mono eyebrow) + value (Syne 18px) + caption (Inter 13px)

#### 2c. Next steps (`NextSteps`)
3-column grid inside a `.section` container. Each step: mono number label ("01", "02", "03") in brand green + h3 title + body copy. Titles: "You send a note" / "We reply with a plan" / "We map the system".

---

## Component Inventory

Port these to the target stack:

| Component | Source | Props / notes |
|---|---|---|
| `BrandMark` | both HTML files | `size`, `color` — lightning SVG |
| `Nav` | both HTML files | Static for now; could become sticky-on-scroll |
| `Footer` | `Sections.jsx` (exported globally) | Links are hash anchors now — convert to Next `Link` |
| `Button` | `.btn` styles in `hero.css` | Variants: `btn-primary`, `btn-ink`, `btn-ghost`; sizes `btn-sm`, `btn-lg`; optional `.btn-arrow` span |
| `RibbonBG` | both HTML files | Render once in root layout; static SVG |
| `EyebrowLabel` | `.hero-eyebrow`, `.sec-eyebrow` | Small-caps mono with dot or dash prefix |
| `SectionCard` | `.section` / `.section-wrap` | The signature "card with grid overlay + edge bleed" container |
| `InfoCard` | `.contact-info-card` | Icon tile + label + value + caption |
| `ChipSelect` | `.cf-chip` | Single-select group; hooks up to form state |
| `Input`, `Textarea` | `.cf-field` | Dark-filled with green focus ring |
| `Panel` | `Dark Hero.html` | Tabbed chat-style card for hero |
| `Problem`, `Guide`, `Plan`, `Services`, `Stakes`, `Testimonials`, `FAQ`, `FinalCTA` | `Sections.jsx` | Each is a full-width `SectionCard` — port 1:1 |

---

## Interactions & Behavior

- **Nav "Book a Call"** → navigates to `/contact`
- **Hero panel tabs** (`STRATEGY` / `BUILD` / `DEPLOY`) → client-side state swap; updates question text + suggestion chip labels
- **FAQ items** → click to expand/collapse (single-open or multi-open — currently multi)
- **Contact form chips** → single-select per group; clicking the active one keeps it active (no deselect currently — easy change if needed)
- **Contact form submit** → swaps form markup for success state (no backend call in the prototype; wire to API route / form service in prod)
- **All buttons with `.btn-arrow`** → arrow nudges right on hover via `transform: translateX(2px)`
- **Hover on `.contact-info-card`** → border turns green-tinted, card lifts `translateY(-1px)`
- **Hover on `.cf-chip`** → green-tinted border + subtle background tint
- **All transitions**: 150–200ms, ease

---

## State Management

Minimal. The only client state needed per page:

- **Home**: `activeTab` (hero panel), `tweaksOpen` (dev panel — remove in prod), any FAQ open/closed flags
- **Contact**: form field values (`name`, `company`, `email`, `phone`, `help`, `budget`, `timeline`, `message`) + `submitted` boolean

Form submission should POST to an API route and send to your email provider (Resend, Loops, Postmark) or form backend (Formspree, Basin). Include honeypot + rate limiting on the API route.

---

## Responsive Behavior

Breakpoints used:
- `1080px` — contact grid collapses to single column; sidebar becomes horizontal wrap
- `980px` — section padding reduces, multi-column grids collapse to 1 column, nav link hides
- `780px` — form rows stack, form footer stacks, contact hero padding reduces
- `560px` — smallest mobile, all gutters tighten, section padding minimized

---

## Assets

Shipped in `design_files/assets/`:
- `colors_and_type.css` — **complete token file**, port to your theme system
- Any fonts referenced by `@font-face` — currently expect system-available or Google Fonts. In prod, use `next/font/google` (Next.js) or equivalent:
  - Syne, Fraunces, Inter Tight, Inter, JetBrains Mono

Icons are **inline SVG** (Lucide-style, drawn by hand for control). See the `Icon` object at the top of each HTML file — port to `lucide-react` for brevity or keep inline for exact fidelity.

No raster images in the design yet — placeholders implied wherever imagery lives (avatars in hero Panel are simple gradient-filled `<svg>` components `AvatarA`, `AvatarB`, `AvatarC`).

---

## Files in This Bundle

```
design_handoff_matchless_site/
├── README.md                         ← this file
└── design_files/
    ├── Dark Hero.html                ← Home page prototype
    ├── Contact.html                  ← Contact page prototype
    ├── Sections.jsx                  ← Shared section components (imported by Dark Hero.html)
    ├── hero.css                      ← Hero + nav + global button/utility styles
    ├── sections.css                  ← Section card system + per-section styles
    ├── contact.css                   ← Contact-page-specific styles
    └── assets/
        └── colors_and_type.css       ← ALL design tokens + font face declarations
```

**Start here**: Read `assets/colors_and_type.css` first (the design system), then `hero.css` (the core component + layout vocabulary), then the two HTML files to see usage.

---

## Implementation Checklist

1. Port `colors_and_type.css` tokens into the target stack's theme system (CSS vars, Tailwind config, or theme object)
2. Set up fonts — Syne, Fraunces, Inter Tight, Inter, JetBrains Mono
3. Build the `<BraidBackground />` component, render in root layout
4. Build shared chrome: `<Nav />`, `<Footer />`, `<SectionCard />`, `<Button />`, `<EyebrowLabel />`
5. Build home page sections (Hero, Panel, Problem, Guide, Plan, Services, Stakes, Testimonials, FAQ, FinalCTA)
6. Build contact page (ContactHero, ContactBody form, InfoCard sidebar, NextSteps)
7. Wire contact form to API route → email provider
8. Add real OG images, favicons, metadata
9. Audit accessibility: form labels, focus states, keyboard nav, reduced-motion for ribbons if any motion is added
