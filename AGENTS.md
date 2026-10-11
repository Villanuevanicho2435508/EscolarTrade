<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project context

EscolarTrade is a verified peer-to-peer campus marketplace for Centro Escolar
University Malolos. The current repository is a frontend prototype: landing
content, sample listings, and authentication screens. There is no database,
authentication provider, API route, server action, or email delivery integration.
Do not treat form controls, sample listings, or marketing claims as implemented
backend features. Do not add integrations or unrelated features to UI tasks.

## Stack and configuration

- Next.js 16.3.6 App Router, React/React DOM 19.3.0, strict TypeScript 5.
- Tailwind CSS 4 through `@tailwindcss/postcss`; styles and theme tokens live in
  `app/globals.css`. It imports Tailwind, `tw-animate-css`, and shadcn styles.
- shadcn/ui uses the `base-nova` preset, `mist` base color, CSS variables, and
  Lucide icons. Interactive primitives use `@base-ui/react`, not Radix.
- `components.json` defines the preset and aliases. `@/*` resolves to the repo
  root through `tsconfig.json`; there is no `src` directory.
- `lib/utils.ts` re-exports `cn` from the `cn` package. Variants use
  `class-variance-authority`. Follow the existing component APIs rather than
  assuming older shadcn APIs such as `asChild`; Base UI uses `render` composition.
- `next.config.ts` currently has no custom configuration. ESLint 9 uses Next's
  core web vitals and TypeScript flat configurations.

## Routes and components

- `app/layout.tsx`: global metadata, Inter body font, Space Grotesk heading font,
  Geist Mono, global styles, and the theme provider.
- `app/page.tsx`: landing page composed from `components/Landing/` sections:
  navbar, hero, categories, campus protocols, sample marketplace, CTA, and footer.
- `app/auth/page.tsx`: login/signup tabs, CEU email/password fields, degree
  program/year selectors, and terms checkbox. Signup is the default tab.
- `app/auth/forgot-password/page.tsx`: password reset UI at
  `/auth/forgot-password`; return navigation goes to `/auth`.
- `components/Logo.tsx`: shared brand link to `/` with a GraduationCap icon.
- `components/ui/`: installed shadcn primitives and additional UI utilities.
  Reuse these components; do not replace their presets or duplicate them.
  `password-input.tsx` is the existing password control.
- `components/theme-provider.tsx`: next-themes with system theme, class-based
  dark mode, and the `d` hotkey outside editable controls.
- `hooks/use-mobile.ts`: client media-query hook with a 768px breakpoint.
- `types/school.types.ts`: readonly `PROGRAMS`/`YEAR_LEVELS` and inferred types.
- `types/market.types.ts`: Category, Condition, and Listing types. Sample listing
  data lives in `components/Landing/MarketplaceSnippet.tsx`, with remote images.
  Several landing links are placeholders; do not infer missing routes exist.
- `README.md` is template documentation; `CLAUDE.md` points to this file.

## UI and implementation conventions

Use small composed React components and named exports for shared components;
route pages use default exports. Keep pages as Server Components unless state,
event handlers, or browser APIs require a client boundary. Follow the installed
Next.js docs before implementing routing, rendering, or framework features.

Auth screens use a centered responsive column, shared Logo, and a width-limited
Card. Compose CardHeader, CardTitle, CardDescription, and CardContent, with
FieldSet/FieldGroup/Field/FieldLabel/FieldDescription/FieldError for forms.
Use existing Button, Input/InputGroup, Badge, Alert, and Lucide icons where
appropriate. Connect labels and descriptions to inputs and use semantic types.
CEU Malolos email examples use `surnameXXXXXXX@mls.ceu.edu.ph`; preserve this
domain rather than borrowing a different domain from a reference image.

Use semantic theme utilities (`bg-background`, `bg-muted`, `text-foreground`,
`text-muted-foreground`, `text-primary`, etc.) so light/dark themes work. The
current primary is green and the base radius is 0.875rem. Keep preset control
styling; add layout classes only as needed. Reference images inspire hierarchy
and content, not pixel-perfect overrides. Do not add extra sections or features.
Password reset controls currently have no delivery handler; never show a
successful dispatch claim unless an actual delivery integration confirms it.

## Commands and validation

- `npm run dev`: Next development server.
- `npm run build` / `npm start`: production build/server.
- `npm run lint`: repository ESLint checks.
- `npm run typecheck`: TypeScript with no emit.
- `npm run format`: formats every TS/TSX file; prefer targeted formatting for
  scoped changes to avoid unrelated churn.

There is no automated test script or test framework configured. For UI changes,
run typecheck and appropriate lint checks, and inspect responsive/theme behavior
when a browser is available. Report pre-existing failures separately. Preserve
user changes and the generated Next.js instruction block above.
