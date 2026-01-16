# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install          # Install dependencies
bun dev              # Start dev server at localhost:4321
bun build            # Build production site to ./dist/
bun preview          # Preview production build locally
```

## Architecture

This is an Astro 5 website with React components, built for Cleverli (an e-learning solutions company).

### Tech Stack

- **Framework**: Astro 5 with React integration
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives
- **Animations**: motion (Framer Motion)
- **Forms**: react-hook-form + zod
- **Icons**: lucide-react
- **SVGs**: vite-plugin-svgr (import SVGs as React components with `?react` suffix)

### Project Structure

```
src/
├── pages/           # Astro pages (file-based routing)
├── components/      # React components
│   ├── ui/          # shadcn/ui primitives (button, card, form, etc.)
│   └── ...          # Feature components (sections, carousel, forms)
├── lib/utils.ts     # cn() helper for className merging
├── styles/global.css # Tailwind config + CSS variables (shadcn theme)
└── svgs/            # SVG assets organized by feature
```

### Key Patterns

**Component Hydration**: All React components use `client:load` directive in Astro pages for immediate hydration.

**SVG Imports**: Import SVGs as React components:

```tsx
import Logo from "../svgs/header/logo.svg?react";
```

**Styling**: Use `cn()` from `@/lib/utils` for conditional classes:

```tsx
import { cn } from "@/lib/utils";
<div
  className={cn("base-classes", conditional && "conditional-class", className)}
/>;
```

**Path Aliases**: `@/*` maps to `./src/*`

### CSS Theme

Design tokens defined in `src/styles/global.css` using CSS variables with oklch colors. Custom shadows: `shadow-button` and `shadow-box`.

### Formatting

Prettier configured with:

- Double quotes, semicolons, 2-space tabs
- `prettier-plugin-astro` and `prettier-plugin-tailwindcss`
- Tailwind class sorting enabled for `cn()` and `clsx()`

## Deployment (Cloudflare Pages)

**Build**: Uses `@astrojs/cloudflare` adapter with `output: "server"` mode. Static pages use `export const prerender = true`.

**Deploy via CLI**:

```bash
bun run build
bunx wrangler pages deploy dist
```

**Deploy via Git**: Connect repo to Cloudflare Pages dashboard with:

- Build command: `bun run build`
- Build output: `dist`

**Local preview**: `bunx wrangler pages dev dist`

**Server-side routes**: Create API endpoints in `src/pages/api/` without `prerender = true` for SSR.
