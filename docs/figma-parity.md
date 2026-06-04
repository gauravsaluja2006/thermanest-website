# Figma ↔ Code Parity — ThermaNest Homepage

Generated from live Figma MCP session (2026-06-04). Last updated same session.
Homepage frame: **47:1123** · 1440×8935px · File: Designs page (0:1)

---

## Design Tokens (globals.css)

| Token | Figma Value | CSS Variable | Status |
|-------|-------------|-------------|--------|
| Primary | `#779D28` | `--color-primary` | ✅ |
| Secondary | `#01182F` | `--color-secondary` | ✅ |
| Primary Light | `#EEF9D7` | `--color-primary-light` | ✅ added |
| Secondary Light | `#152232` | `--color-secondary-light` | ✅ |
| Grey / Surface | `#F8F8F8` | `--color-surface` | ✅ |
| Hero overlay | `rgba(2,21,40,0.18)` | `--color-hero-overlay` | ✅ fixed (was 0.45) |
| Eyebrow bg | `rgba(248,248,248,0.06)` | `--color-eyebrow-bg` | ✅ fixed (was 0.1) |
| Font serif | DM Serif Text | `--font-serif` | ✅ |
| Font sans | Inter | `--font-sans` | ✅ |

---

## Section Map & Verification Status

| # | Section | Figma Node | Component | Status |
|---|---------|-----------|-----------|--------|
| 1 | InfoBar | `47:1147` | `InfoBar.tsx` | ✅ match (icons deferred) |
| 2 | Navbar | `47:1124` | `Navbar.tsx` | ✅ match |
| 3 | Hero | `47:1950` | `Hero.tsx` | ✅ fixed |
| 4 | Details Bar | `47:1165` | `DetailsBar.tsx` | ✅ match |
| 5 | Services | `96:430` | `ServicesGrid.tsx` | ✅ fixed |
| 6 | Comparison | `47:1219` | `ComparisonTable.tsx` | ✅ match |
| 7 | Projects | `47:1403` | `ProjectsGallery.tsx` | ✅ fixed |
| 8 | Process | `47:1717` | `Process.tsx` | ✅ match |
| 9 | Excellence | `47:1752` | `Excellence.tsx` | ✅ match |
| 10 | Testimonials | `47:1803` | `Testimonials.tsx` | ✅ match |
| 11 | FAQ | `47:1869` | `FAQ.tsx` | ✅ match |
| 12 | CTA Banner | `47:1892` | `CTABanner.tsx` | ✅ fixed |
| 13 | Footer | `47:1902` | `Footer.tsx` | ✅ fixed |

---

## Changes Made This Session

### globals.css
- Added `--color-primary-light: #eef9d7`
- Fixed hero overlay: `rgba(2,21,40,0.45)` → `rgba(2,21,40,0.18)`
- Fixed eyebrow badge bg: `0.1` opacity → `0.06`

### data/services.ts — 5 descriptions corrected
| Service | Was | Now |
|---------|-----|-----|
| Offices | "Premium modular offices…productivity" | "Modern workspaces designed for growing businesses and professional environments" |
| Resorts | "Premium modular resorts…memorable stay" | "Luxury resort units that deliver exceptional guest experiences and memorable stay" |
| Villas | "Luxury modular villas with premium interiors…" | "Luxury modular villas for spacious living and a sophisticated lifestyle experience" |
| Farmhouses | "Premium farmhouses designed for comfort…" | "Nature inspired retreats designed for privacy, comfort and peaceful living" |
| Relocatable | "Flexible portable modular spaces…" | "Modular structures that offer ready-to-use functionality wherever needed" |

### data/projects.ts — 6 cards now (was 4)
- Added **Project 5**: The Urban Modular Residence, Chandigarh — 2,400 sq ft, 3BHK+Rooftop Lounge, 20 days
- Added **Project 6**: The Haven Luxury Resort, Gurugram — 5,000 sq ft, 8 Guest Suites+Banquet, 28 days
- Fixed Vertex Business Hub: config `5 Offices` → `5 Offices + Meeting Room`, feature → `Custom Visitor Lounge & Meeting Suite`
- Fixed Serenity Green Farmhouse: feature → `Tailor-Made Garden & Courtyard Design`

### ProjectsGallery.tsx
- Grid changed: `lg:grid-cols-4` → `lg:grid-cols-3` (matches Figma ~3-card visible viewport)
- Image height: `h-[220px]` → `h-[308px]`
- "View Gallery" badge: dark navy `rgba(1,24,47,0.75)` → primary green `var(--color-primary)`
- Type tag: `10px` → `14px` (body-4)
- Content padding: `p-5` → `px-[30px] py-[40px]`
- Location/feature text: `14px` → `16px` (body-3)
- Card background: surface grey → white

### Hero.tsx
- Left padding: `md:px-[61px]` → `md:px-[50px]`

### CTABanner.tsx
- Subtitle opacity: `text-white/80` → `text-white`

### Footer.tsx
- All text: `text-white/70` and `text-white/60` → `text-white` throughout

---

## Open Items / Deferred

| Item | Decision |
|------|----------|
| InfoBar SVG icons | Deferred by user — Lucide equivalents kept |
| Projects carousel (Figma shows dot-nav carousel) | Implemented as 3-col grid; carousel is a future enhancement |
| Process step 3 Figma typo ("Our Once manufacturing…") | Kept code's correct version |
| Footer "Process" Figma layer duplication | Rendered once in code — correct |
