# Project Overview

Simple one-page website for North Wales Lawn Care built with Next.js, React, and Sass.

## Tech Stack

- Next.js
- React
- Sass (SCSS)

## Styling Guidelines

- Use Sass (`.scss` files) for all component styling
- Import SCSS files directly: `import "./Component.scss";`
- Use plain string class names (no CSS modules)
- Follow BEM methodology for class naming:
  - Block: `.hero`
  - Element: `.hero__title`, `.hero__contact`
  - Modifier: `.hero--large`, `.hero__title--highlighted`
- Import variables and mixins from `src/lib.scss` using `@use "../../lib" as *;`

## Project Structure

```
src/
├── app/              # Next.js app router
├── components/       # React components
│   └── ComponentName/
│       ├── ComponentName.tsx
│       └── ComponentName.scss
└── lib.scss          # Global variables, mixins, breakpoints
```

## Available Variables (lib.scss)

- Colors: `$primary`, `$primary-dark`, `$primary-light`, `$secondary`, `$white`, `$black`, `$accent`
- Typography: `$font-primary`, `$font-heading`, `$font-size-*`, `$font-weight-*`
- Spacing: `$spacing-xs` through `$spacing-3xl`
- Breakpoints: `$md` (768px), `$lg` (1024px)
- Mixins: `@include container`, `@include grid`
