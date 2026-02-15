# PRD: North Wales Lawn Care — Single Page Website

## Introduction

A simple, single-page website for a small lawn care business based in North Wales. The site presents the business as professional and trustworthy, providing potential customers with information about services, social proof via testimonials, and clear ways to get in touch. Built with Next.js and Sass, all page content is driven by a static JSON file so it can be swapped for a headless CMS later with minimal code changes.

## Goals

- Present the business professionally with a clean, corporate feel
- Provide visitors with service information, social proof, and easy contact options
- Structure all content via a single JSON file for future CMS integration
- Build responsive, mobile-friendly layouts using Sass with BEM methodology
- Keep the codebase simple — one component per folder with co-located `.tsx` and `.scss` files

## User Stories

### US-001: Set up content data layer
**Description:** As a developer, I want all page content defined in a single JSON file so that content can be updated without touching component code.

**Acceptance Criteria:**
- [ ] Create `src/data/content.json` containing all text, headings, service items, testimonials, and contact details
- [ ] Components read from this JSON — no hardcoded strings in TSX files
- [ ] JSON structure is flat and intuitive (keyed by section name)
- [ ] Typecheck passes

### US-002: Global styles and responsive foundation
**Description:** As a developer, I want a global stylesheet and shared Sass variables so all components have consistent styling from the start.

**Acceptance Criteria:**
- [ ] `src/lib.scss` contains well-named, easily configurable colour variables — changing these variables should re-theme the entire site:
  - Core: `$white` (#FFFFFF), `$black` (#093412)
  - Primary: `$primary` (#007A2F), `$primary-dark` (#093412), `$primary-light` (#3D8F44)
  - Accent: `$accent` (#FF7F11)
  - Semantic: `$text` (#093412), `$text-light` (#3D8F44), `$bg` (#FFFFFF), `$bg-alt` (#E0E2DB)
- [ ] `src/lib.scss` contains font-family variables: `$font-heading` and `$font-body` (placeholders for now — easy to swap for Google Fonts later)
- [ ] `src/lib.scss` contains responsive typography mixins (font-size scales up at `$md` and `$lg` breakpoints):
  - `@include h1`: heading font, bold — mobile `2rem`, tablet `2.5rem`, desktop `3rem`
  - `@include h2`: heading font, bold — mobile `1.75rem`, tablet `2rem`, desktop `2.5rem`
  - `@include h3`: heading font, bold — mobile `1.5rem`, tablet `1.75rem`, desktop `2rem`
  - `@include h4`: heading font, semi-bold — mobile `1.25rem`, tablet `1.375rem`, desktop `1.5rem`
  - `@include p-large`: body font — mobile `1.125rem`, tablet `1.25rem`, desktop `1.375rem`
  - `@include p`: body font — mobile `1rem`, tablet `1rem`, desktop `1.125rem`
  - `@include caption`: body font — mobile `0.75rem`, tablet `0.8125rem`, desktop `0.875rem`
- [ ] `src/lib.scss` contains spacing scale (`$spacing-xs` through `$spacing-3xl`) and two breakpoint variables: `$md` (720px), `$lg` (1020px)
- [ ] `src/lib.scss` contains reusable mixins:
  - `@include container`: max-width `1240px`, centered with `margin: 0 auto`, responsive side padding: `0.5rem` on mobile, `1rem` on tablet (`>= $md`), `2rem` on desktop (`>= $lg`)
  - `@include grid`: CSS grid, 8 columns on mobile, 12 columns on desktop (`>= $lg`), gap `0.5rem` on mobile, `1rem` on desktop (`>= $lg`)
- [ ] `src/app/globals.scss` sets base resets, body font, box-sizing, and global styles
- [ ] Default palette is professional/corporate: navy or charcoal text, muted green accents, light grey alternating backgrounds
- [ ] Site looks reasonable on mobile (<720px), tablet (720px+), and desktop (1020px+)
- [ ] Typecheck passes

### US-003: Build Icon component
**Description:** As a developer, I want a reusable Icon component that renders SVG icons by name so they can be used consistently across the site (e.g. in buttons, cards, nav).

**Acceptance Criteria:**
- [ ] Component: `src/components/Icon/Icon.tsx` + `Icon.scss`
- [ ] Props: `type` (string — denotes which icon to render), `fill` (optional string — SVG fill colour, defaults to `currentColor`), `size` (optional, defaults to `1em`)
- [ ] SVG markup stored within the component (inline SVGs, not external files)
- [ ] Renders an inline SVG using the provided `fill` colour
- [ ] Always hidden from screen readers: `aria-hidden="true"` on the SVG element
- [ ] Specific SVG paths to be provided later
- [ ] BEM class names: `.icon`, `.icon--{type}`
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-004: Build Button component
**Description:** As a developer, I want a reusable Button component so all CTAs and form actions are visually consistent.

**Acceptance Criteria:**
- [ ] Component: `src/components/Button/Button.tsx` + `Button.scss`
- [ ] Props: `label` (string), `variant` (`"primary"` | `"accent"`), `icon` (optional string — Icon `type` to render to the right of the label), and **either** `href` (string — renders as `<a>`) **or** `onClick` (function — renders as `<button>`)
- [ ] When `href` is provided, renders as an anchor tag (for scroll links / URLs)
- [ ] When `onClick` is provided, renders as a button element (for form submits / actions)
- [ ] Primary variant: `$primary` background, `$white` text for clear contrast
- [ ] Accent variant: `$accent` background, `$white` text for clear contrast
- [ ] Padding: `0.5rem`
- [ ] Border radius: `0.25rem` for subtle rounding
- [ ] Hover state: slightly darkened background for both variants
- [ ] Focus state: visible outline/ring for keyboard and screen reader navigation (must not be removed)
- [ ] If `icon` is provided, it renders to the right of the label with appropriate spacing
- [ ] BEM class names: `.button`, `.button--primary`, `.button--accent`, `.button__icon`
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-005: Build Header component
**Description:** As a visitor, I want a sticky header with the business name and section links so I can quickly navigate the page.

**Acceptance Criteria:**
- [ ] Component: `src/components/Header/Header.tsx` + `Header.scss`
- [ ] `$primary-dark` background with all text in `$white`
- [ ] Header stays fixed at the top of the viewport on scroll
- [ ] Content sits within the page container (max-width)
- [ ] "North Wales Lawn Care" displayed on the left
- [ ] Navigation links on the right: Services, About, Testimonials, Contact — white text
- [ ] Clicking a link smooth-scrolls to the corresponding section
- [ ] Responsive — collapses to a hamburger menu on mobile (`< $md`)
- [ ] BEM class names: `.header`, `.header__logo`, `.header__nav`, `.header__nav-link`, `.header__hamburger`, etc.
- [ ] Content sourced from `content.json`
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-006: Build Hero component
**Description:** As a visitor, I want to immediately understand what the business does and how to get in touch when I land on the page.

**Acceptance Criteria:**
- [ ] Component: `src/components/Hero/Hero.tsx` + `Hero.scss`
- [ ] Full-width section, roughly 60-70vh tall
- [ ] Background image covering the full section (`object-fit: cover`), with different image sources per breakpoint (`<picture>` element or srcset) — placeholder image: `https://pixabay.com/images/download/petim-golf-244041_1920.jpg`
- [ ] Dark gradient overlay on top of the image (e.g. `$primary-dark` at ~60-70% opacity) to ensure `$white` text remains readable against the light/green lawn image
- [ ] Text and buttons positioned in the lower 50% of the section, centered horizontally
- [ ] Headline uses `h1` mixin
- [ ] Subheadline below the headline uses `p` mixin
- [ ] Two CTA Buttons side by side below the subheadline: primary variant (e.g. "Our Services" — scrolls to services) and accent variant (e.g. "Get a Free Quote" — scrolls to contact)
- [ ] Buttons stack vertically on mobile
- [ ] Responsive — text and buttons resize across breakpoints
- [ ] BEM class names: `.hero`, `.hero__title`, `.hero__subtitle`, `.hero__actions`
- [ ] Content sourced from `content.json`
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-007: Build RichText component
**Description:** As a developer, I want a reusable component for rendering a heading and body text block so it can be used for the About section and any future text sections.

**Acceptance Criteria:**
- [ ] Component: `src/components/RichText/RichText.tsx` + `RichText.scss`
- [ ] Props: `heading` (string), `headingLevel` (`"h2"` | `"h3"` | `"h4"`, defaults to `"h2"`), `body` (string or string array for multiple paragraphs), `id` (optional string for scroll target), `variant` (optional `"default"` | `"alt"`)
- [ ] Renders a section with heading and paragraph(s) inside a container, using the grid
- [ ] All text centered
- [ ] Desktop: content spans 8 of 12 grid columns, centered. Mobile: full width (all 8 columns)
- [ ] Heading renders at the correct level and uses the matching typography mixin (`h2`, `h3`, or `h4`)
- [ ] Paragraphs use `p` mixin
- [ ] Links within body text styled in `$accent` with underline, hover state darkens
- [ ] Supports alternating background via `variant` prop (`"default"` maps to `$bg`, `"alt"` maps to `$bg-alt`)
- [ ] BEM class names: `.rich-text`, `.rich-text__heading`, `.rich-text__body`, `.rich-text__link`, `.rich-text--alt`
- [ ] Content sourced from `content.json`
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-008: Build Card component
**Description:** As a developer, I want a reusable Card component for displaying service items and testimonials.

**Acceptance Criteria:**
- [ ] Component: `src/components/Card/Card.tsx` + `Card.scss`
- [ ] Props: `title` (optional string), `body` (string), `attribution` (optional string — for testimonial author/location), `icon` (optional string — Icon `type`), `image` (optional string — image URL), `align` (optional `"left"` | `"center"`, defaults to `"left"`)
- [ ] `$bg-alt` background, no border or shadow, with `0.25rem` border-radius and padding
- [ ] If `icon` or `image` is provided, it renders at the top of the card, centered and large
- [ ] If `title` is provided, renders as a card heading using `h4` mixin
- [ ] Body text uses `p` mixin
- [ ] If `attribution` is provided, renders below the body using `caption` mixin
- [ ] `align: "center"` centers all text (use for testimonials), `align: "left"` left-aligns (use for services)
- [ ] BEM class names: `.card`, `.card__icon`, `.card__image`, `.card__title`, `.card__body`, `.card__attribution`, `.card--center`
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-009: Build CardSection component
**Description:** As a developer, I want a section wrapper that displays a heading and a responsive grid of Card components, reusable for Services and Testimonials.

**Acceptance Criteria:**
- [ ] Component: `src/components/CardSection/CardSection.tsx` + `CardSection.scss`
- [ ] Props: `heading` (string), `cards` (array of Card props), `id` (optional string for scroll target), `variant` (optional `"default"` | `"alt"` for background)
- [ ] Section heading uses `h2` mixin, left-aligned
- [ ] Responsive grid of Card components: max 4 columns on desktop (`>= $lg`), 2 on tablet (`>= $md`), 1 on mobile
- [ ] Uses the grid mixin within a container
- [ ] BEM class names: `.card-section`, `.card-section__heading`, `.card-section__grid`, `.card-section--alt`
- [ ] Content sourced from `content.json`
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-010: Build Form component
**Description:** As a visitor, I want to easily get in touch via a contact form so I can request a quote or ask questions.

**Acceptance Criteria:**
- [ ] Component: `src/components/Form/Form.tsx` + `Form.scss`
- [ ] `$primary` background for the entire form section, `$white` text for labels and headings
- [ ] Form fields (inputs and textarea) have `$white` background for contrast against the green
- [ ] Form fields: Name (required), Email (required), Phone (optional), Message (required)
- [ ] Basic client-side validation: required fields, email format check
- [ ] Submit is a no-op/placeholder for now — shows a success message on submit
- [ ] Uses Button component for the submit button (accent variant)
- [ ] Responsive — fields stack on mobile
- [ ] BEM class names: `.form`, `.form__field`, `.form__label`, `.form__input`, `.form__textarea`, `.form__success`
- [ ] Content sourced from `content.json`
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-011: Build Footer component
**Description:** As a visitor, I want to see a footer with basic business info and copyright.

**Acceptance Criteria:**
- [ ] Component: `src/components/Footer/Footer.tsx` + `Footer.scss`
- [ ] `$primary-dark` background with `$white` text
- [ ] Displays business name and copyright year
- [ ] BEM class names: `.footer`, `.footer__text`
- [ ] Content sourced from `content.json`
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-012: Assemble page
**Description:** As a developer, I want to wire all components together in `page.tsx` so the full single-page site renders top to bottom.

**Acceptance Criteria:**
- [ ] `src/app/page.tsx` imports and renders all components in order: Header, Hero, CardSection (Services), RichText (About), CardSection (Testimonials), Form (Contact), Footer
- [ ] Each section has an `id` attribute for smooth-scroll navigation
- [ ] All content passed from `content.json`
- [ ] Page renders correctly with no console errors
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

## Functional Requirements

- FR-1: All page content must be sourced from `src/data/content.json` — no hardcoded display strings in components
- FR-2: The header must remain fixed at the top of the viewport during scroll
- FR-3: Navigation links must smooth-scroll to the target section
- FR-4: The contact form must validate required fields (name, email, message) and email format on the client side
- FR-5: The contact form submit must show a success message without requiring a backend
- FR-6: Each component must have its own folder under `src/components/` with a `.tsx` and `.scss` file
- FR-7: All class names must follow BEM naming convention
- FR-8: The layout must be responsive across two breakpoints: `$md` (720px) and `$lg` (1020px)

## Non-Goals

- No backend or API integration (form does not submit anywhere)
- No CMS integration in this phase — JSON file only
- No animations or transitions beyond basic hover states
- No multi-page routing — single page only
- No image assets or gallery section
- No SEO optimisation, meta tags, or structured data beyond defaults
- No dark mode

## Design Considerations

- **Palette:** Professional greens with orange accent. Primary green (#007A2F) for brand identity, dark green (#093412) for text and dark backgrounds, medium green (#3D8F44) for lighter touches, orange (#FF7F11) for CTAs and highlights, off-white (#E0E2DB) for alternating section backgrounds.
- **Typography:** Clean sans-serif. System font stack or a single Google Font (e.g. Inter, Open Sans).
- **Layout:** Alternating white and light-grey section backgrounds to create visual separation. Max-width container for content. Generous spacing.
- **Mobile:** Hamburger menu for nav. Single-column stacked layout for all sections.

## Technical Considerations

- Next.js App Router (already scaffolded)
- Sass installed and configured (`.scss` files)
- `src/lib.scss` for shared variables and mixins
- `src/data/content.json` as the single content source
- Component structure: `src/components/ComponentName/ComponentName.tsx` + `ComponentName.scss`
- No external UI library — hand-built components with BEM classes

## Success Metrics

- All sections render correctly from JSON content
- Page is navigable via sticky header links
- Responsive layout works across mobile, tablet, and desktop
- Changing text in `content.json` updates the site without code changes
- Codebase is clean enough for a junior developer to extend

## Open Questions

- What specific services should be listed? (Can use placeholder content for MVP)
- Does the business have a logo or should we use text only?
- Should the hamburger menu be a simple dropdown or a full-screen overlay on mobile?
- What phone number, email, and address should be used? (Placeholders for now)
