# Vitor Eduardo Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the static Next.js site for Vitor Eduardo - Filmmaker e Marcas at vitoreduardo.com.br, exported to HTML and deployed on GitHub Pages, optimized for SEO and GEO.

**Architecture:** Next.js App Router with `output: 'export'`, so every page is pre-rendered HTML. Content lives in typed TypeScript data files. Motion (`motion/react`) animates only `opacity` and `transform` on client components, so text stays in the static HTML. Schema, sitemap, robots and llms.txt are generated from the same site config.

**Tech Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS, motion (`motion/react`), GitHub Actions, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-11-02-portfolio-design.md`

## Global Constraints

- Language: pt-BR. `<html lang="pt-BR">`.
- Canonical origin: `https://vitoreduardo.com.br` (no `www`, no trailing slash in canonical URLs except the home is `/`).
- Studio name: "Vitor Eduardo - Filmmaker e Marcas". Person name: "Vitor Eduardo".
- WhatsApp: `77 99822-0929`, link `https://wa.me/5577998220929`.
- Instagram: `@vitxreduardo`, URL `https://www.instagram.com/vitxreduardo/`.
- Cities: Luís Eduardo Magalhães, Barreiras, Taguatinga, Roda Velha, São Desidério.
- Next config: `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`.
- No runtime JS needed for text content. No `display: none` or DOM removal for animation.
- Pending content (identity visual, cases, copy, FAQ answers, address) ships as visible placeholders marked `PENDENTE` in data files. Never invent clients, testimonials or numbers.

## Review Focus

- Trailing slash in URLs: `/marca` and `/marca/` must both resolve on GitHub Pages. Test: `verify-seo` checks every sitemap URL ends with `/` and has a built `index.html`.
- Missing `og:image` file: every page metadata points to an existing file in `public/`. Test: `verify-seo` checks each referenced image exists in `out/`.
- Reduced motion users: content visible with motion disabled. Test: `Reveal` renders children with no `style` opacity 0 when `MotionConfig reducedMotion="user"` (checked in task 9 manual step).
- JSON-LD validity: every `<script type="application/ld+json">` parses as JSON. Test: `verify-seo` parses each block.
- Empty cases list: portfolio page still renders with the pending placeholder. Test: `verify-seo` checks `/portfolio/` contains "PENDENTE".

---

### Task 1: Scaffold Next.js static project

**Files:**
- Create: `package.json`, `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `.gitignore`
- Test: `scripts/verify-seo.mjs` (created in Task 2)

**Interfaces:**
- Consumes: nothing
- Produces: `npm run build` writes static HTML to `out/`.

- [ ] **Step 1: Create config files**

`next.config.mjs` must set `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`.

- [ ] **Step 2: Create minimal `app/layout.tsx` and `app/page.tsx`**

Layout sets `<html lang="pt-BR">` and imports `globals.css`. Page renders an `h1` with the studio name.

- [ ] **Step 3: Install and build**

Run: `npm install && npm run build`
Expected: build succeeds, `out/index.html` exists.

- [ ] **Step 4: Commit**

```bash
git add . && git commit -m "chore: scaffold next static export"
```

### Task 2: Site config, schema helpers and SEO verifier

**Files:**
- Create: `lib/site.ts`, `lib/jsonld.ts`, `scripts/verify-seo.mjs`

**Interfaces:**
- Consumes: Task 1
- Produces: `site` object (name, url, phone, whatsappUrl, instagramUrl, cities, personName) from `lib/site.ts`; `professionalServiceJsonLd()` and `serviceJsonLd(service)` from `lib/jsonld.ts`, both returning plain objects with `@context`.

- [ ] **Step 1: Write `scripts/verify-seo.mjs` first (failing)**

It reads `out/`, and for each HTML file checks: `lang="pt-BR"`, exactly one `<h1`, a `<title>`, a `<link rel="canonical"`, and that every `application/ld+json` block parses. It also checks `out/sitemap.xml`, `out/robots.txt` and `out/llms.txt` exist. Exit code 1 on any failure.

- [ ] **Step 2: Run it, expect FAIL**

Run: `npm run build && node scripts/verify-seo.mjs`
Expected: FAIL, sitemap/robots/llms missing.

- [ ] **Step 3: Implement `lib/site.ts` and `lib/jsonld.ts`**

Values come from the Global Constraints section. `serviceJsonLd` sets `@type: "Service"`, `areaServed` from `site.cities`, `provider` pointing to the studio.

- [ ] **Step 4: Commit**

```bash
git add lib scripts && git commit -m "feat: site config and json-ld helpers"
```

### Task 3: Metadata, layout shell and CTA

**Files:**
- Modify: `app/layout.tsx`
- Create: `components/Header.tsx`, `components/Footer.tsx`, `components/WhatsAppCta.tsx`

**Interfaces:**
- Consumes: `site` from Task 2
- Produces: `WhatsAppCta({ service?: string })` renders an `<a>` to `site.whatsappUrl` with `?text=` set to the service name when given.

- [ ] **Step 1: Write layout metadata**

Default `metadataBase` = `site.url`. Default title, description, Open Graph (`og:image` points to `/og-default.jpg`), Twitter card.

- [ ] **Step 2: Header and footer**

Header: nav links to `/marca/`, `/estrategia/`, `/conteudo/`, `/campanhas/`, `/portfolio/`, `/sobre/`, `/atendimento/`. Footer: Instagram link, WhatsApp link, cities.

- [ ] **Step 3: Run build and verifier**

Run: `npm run build && node scripts/verify-seo.mjs`
Expected: still FAIL only on sitemap/robots/llms (fixed in Task 8).

- [ ] **Step 4: Commit**

```bash
git add app components && git commit -m "feat: layout shell, metadata and whatsapp cta"
```

### Task 4: Motion primitives with reduced motion

**Files:**
- Create: `components/Reveal.tsx`, `components/MotionProvider.tsx`
- Modify: `app/layout.tsx` (wrap children in `MotionProvider`)

**Interfaces:**
- Consumes: nothing
- Produces: `Reveal({ children, delay? })` client component. Animates `opacity` and `y` only. Initial state is the same DOM node with `opacity: 0`, never removed.

- [ ] **Step 1: Implement `MotionProvider`**

Client component wrapping `MotionConfig reducedMotion="user"`.

- [ ] **Step 2: Implement `Reveal`**

`motion.div` with `initial={{ opacity: 0, y: 24 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`.

- [ ] **Step 3: Manual check**

Run `npm run dev`, open a page with Reveal in browser with reduced motion on. Expected: text visible without animation.

- [ ] **Step 4: Commit**

```bash
git add components app && git commit -m "feat: reveal motion with reduced motion support"
```

### Task 5: Home page

**Files:**
- Modify: `app/page.tsx`
- Create: `components/Hero.tsx`, `components/ServicesGrid.tsx`, `components/RegionBlock.tsx`
- Create: `content/services.ts` (4 pillars with slug, title, description, services list, FAQ placeholder)

**Interfaces:**
- Consumes: `site` (Task 2), `Reveal` (Task 4), `WhatsAppCta` (Task 3)
- Produces: `services` array typed as `Pillar[]` with `slug`, `title`, `summary`, `items: string[]`, `faq: { question: string; answer: string }[]`.

- [ ] **Step 1: Write `content/services.ts`**

Four pillars: Marca (`marca`), Estratégia (`estrategia`), Conteúdo (`conteudo`), Campanhas (`campanhas`). Items as in the spec. FAQ answers are `PENDENTE: resposta a definir pelo Vitor`.

- [ ] **Step 2: Hero, pillars grid, region block**

Hero: `h1` "Vitor Eduardo - Filmmaker e Marcas", subheading naming the services and region, primary `WhatsAppCta`.

- [ ] **Step 3: Build and verify**

Run: `npm run build && node scripts/verify-seo.mjs`
Expected: home passes checks.

- [ ] **Step 4: Commit**

```bash
git add app content components && git commit -m "feat: home page with pillars and region"
```

### Task 6: Pillar pages

**Files:**
- Create: `app/[pillar]/page.tsx`
- Test: `scripts/verify-seo.mjs` checks `out/marca/index.html` etc.

**Interfaces:**
- Consumes: `services` from Task 5, `serviceJsonLd` from Task 2
- Produces: `generateStaticParams` returns the four slugs. Each page: one `h1`, a `<script type="application/ld+json">` with `serviceJsonLd` and a FAQ JSON-LD (`@type: "FAQPage"`) built from `faq`.

- [ ] **Step 1: Implement dynamic route**

Use `generateStaticParams` with `services`. Set metadata title and description from the pillar. `notFound()` for unknown slug.

- [ ] **Step 2: Build and verify**

Run: `npm run build && node scripts/verify-seo.mjs`
Expected: four pillar pages pass checks.

- [ ] **Step 3: Commit**

```bash
git add app && git commit -m "feat: pillar pages with service and faq schema"
```

### Task 7: Portfolio, case pages, about and region pages

**Files:**
- Create: `content/cases.ts`, `app/portfolio/page.tsx`, `app/portfolio/[slug]/page.tsx`, `app/sobre/page.tsx`, `app/atendimento/page.tsx`

**Interfaces:**
- Consumes: `site`, `serviceJsonLd`
- Produces: `cases` array typed `Case[]` (`slug`, `client`, `challenge`, `delivery`, `media: { src: string; alt: string }[]`). Starts with one entry marked `PENDENTE`.

- [ ] **Step 1: Write `content/cases.ts`**

One placeholder case: `slug: "pendente"`, `client: "PENDENTE"`. Do not add real client names.

- [ ] **Step 2: Portfolio list and case pages**

`/portfolio/` lists cases. `/portfolio/[slug]/` uses `generateStaticParams` over `cases`. Images use `alt` from data.

- [ ] **Step 3: About page**

`/sobre/` has `Person` JSON-LD (name "Vitor Eduardo", `sameAs` Instagram, `jobTitle` "Filmmaker e Marcas"). Bio text is `PENDENTE`.

- [ ] **Step 4: Region page**

`/atendimento/` lists the five cities in an `h2` section, with text answering "onde a Vitor Eduardo atende". Uses `site.cities`.

- [ ] **Step 5: Build and verify**

Run: `npm run build && node scripts/verify-seo.mjs`
Expected: pass.

- [ ] **Step 6: Commit**

```bash
git add app content && git commit -m "feat: portfolio, about and region pages"
```

### Task 8: sitemap, robots and llms.txt

**Files:**
- Create: `app/sitemap.ts`, `app/robots.ts`, `public/llms.txt`

**Interfaces:**
- Consumes: `site`, `services`, `cases`
- Produces: `out/sitemap.xml`, `out/robots.txt`, `out/llms.txt`.

- [ ] **Step 1: Sitemap**

Lists every route with trailing slash, from `services` and `cases`. `lastModified` set to build date.

- [ ] **Step 2: robots.txt**

Allow all user agents. Sitemap line points to `https://vitoreduardo.com.br/sitemap.xml`. Decision recorded in spec: AI bots allowed.

- [ ] **Step 3: llms.txt**

Static `public/llms.txt` with name, services, cities, WhatsApp, Instagram and links to the four pillars and portfolio.

- [ ] **Step 4: Build and verify**

Run: `npm run build && node scripts/verify-seo.mjs`
Expected: full pass.

- [ ] **Step 5: Commit**

```bash
git add app public && git commit -m "feat: sitemap, robots and llms.txt"
```

### Task 9: Deploy to GitHub Pages

**Files:**
- Create: `.github/workflows/deploy.yml`, `public/CNAME`

**Interfaces:**
- Consumes: `out/` from build
- Produces: site served at `https://vitoreduardo.com.br`.

- [ ] **Step 1: CNAME**

`public/CNAME` contains `vitoreduardo.com.br`.

- [ ] **Step 2: Workflow**

On push to `main`: checkout, setup Node, `npm ci`, `npm run build`, `node scripts/verify-seo.mjs`, upload `out/` with `actions/upload-pages-artifact` and deploy with `actions/deploy-pages`.

- [ ] **Step 3: Manual DNS and Pages step (user)**

Vitor configures: GitHub repo Settings > Pages > Source: GitHub Actions, custom domain `vitoreduardo.com.br`, DNS A records to GitHub Pages IPs and `www` CNAME. Wait for HTTPS certificate.

- [ ] **Step 4: Commit**

```bash
git add .github public && git commit -m "ci: deploy to github pages"
```

---

## Self-review

- Spec coverage: pages, SEO, GEO, performance, contact, deploy all map to tasks 1 to 9. Pending items (identity visual, cases, copy, FAQ, address) appear as `PENDENTE` placeholders in Tasks 5, 7.
- Types: `Pillar` (Task 5) used by Task 6; `Case` (Task 7) used by Task 8; `site` (Task 2) used everywhere.
- Gap: identity visual not defined, so colors and fonts are placeholders in `globals.css` (Task 1) and need replacing when the identity arrives.
