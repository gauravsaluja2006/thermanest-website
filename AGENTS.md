<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# ThermaNest — Project Brief for AI Agents

Read this entire file before writing any code.

---

## Mandatory Build Protocol

Every section MUST go through these four steps in order. Do not skip any step, do not move to the next section until all four are done.

### Step 1 — Design extraction (before writing code)
Call `mcp__figma-desktop__get_design_context` on the section's Figma node ID. Extract exact colors, font sizes, spacing, and layout. Never guess or approximate design values.

### Step 2 — Build with `/frontend-design`
Invoke the `/frontend-design` skill when writing the section component. This produces higher-quality, non-generic UI. Do not just write the component directly — invoke the skill.

### Step 3 — Run and verify with `/run` then `/verify`
After the component is written:
1. Invoke `/run` to start the dev server and see the section rendered live.
2. Invoke `/verify` to visually compare the rendered output against the Figma screenshot. Fix any mismatches before continuing.

### Step 4 — Code review with `/code-review`
Invoke `/code-review` before committing the section. Fix all findings rated medium or higher before moving on.

### Checklist per section
Before marking any section complete, confirm all of the following:
- [ ] Figma design context was extracted for this section
- [ ] `/frontend-design` was used to write the component
- [ ] Section renders correctly at 375px, 768px, 1024px, and 1440px
- [ ] `/verify` confirmed visual match to Figma
- [ ] Keyboard navigation works (Tab through all interactive elements)
- [ ] All images use `next/image` with `alt` text
- [ ] `/code-review` was run and findings addressed
- [ ] No hardcoded colors, fonts, or pixel values outside `globals.css`
- [ ] Content data is in `src/data/` not hardcoded in JSX (if applicable)

---

## What This Project Is

ThermaNest is a premium modular prefab construction company based in North India. This repository is their marketing website — a Next.js app that converts visitors into consultation leads.

**Business context:**
- Target customers: homeowners, resort/hotel owners, businesses in Delhi NCR, Punjab, Haryana, Himachal Pradesh
- Key selling points: 20–40 day delivery, Dubai-engineered quality, 7-star luxury interiors, relocatable structures, no construction permissions required
- Primary CTA: phone consultation (+9215666885) and an inquiry form
- Contact email: sorabhsaluja@gmail.com

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | framer-motion |
| Icons | lucide-react |
| Images | next/image (always — never `<img>`) |
| Deployment | Vercel |

Install missing packages before using them. Do not introduce other dependencies without user approval.

---

## Design System

All values come from the Figma design. Encode them as CSS variables in `app/globals.css` and reference only those variables in components — never hardcode hex values or raw pixel sizes.

### Color palette (extract exact values from Figma before coding)
- Primary background: white / near-white
- Dark sections: deep charcoal/near-black (hero, process, footer)
- Accent: olive/army green (used in ThermaNest column of comparison table, CTAs)
- Text primary: near-black
- Text secondary: medium grey
- Border: light grey

### Typography
- Headings: bold, large — extract exact font family and weights from Figma
- Body: regular weight, comfortable line-height
- Use `clamp()` for fluid type scaling between mobile and desktop

### Spacing
- Section vertical padding: generous (80–120px desktop, 48–64px mobile)
- Max content width: 1440px, centered
- Inner content max-width: ~1200px with horizontal padding

---

## Homepage Sections (build in this order)

The design is one long homepage. Build sections top-to-bottom so the page is always shippable.

### 1. InfoBar
Top announcement strip. Three items separated by dividers:
- Custom Modular Solutions
- 20–40 Day Delivery
- North India Delivery (Delhi, Punjab, Haryana, Himachal)

### 2. Navbar
- Left: ThermaNest logo
- Center: Home · Services · Projects · About
- Right: Phone icon + "+9215666885" / "Call for Consultation"
- Behavior: sticky on scroll, mobile hamburger menu (slide-in drawer)

### 3. Hero
- Eyebrow: "20+ Years of Excellence"
- H1: "Build Your Dream Space in 20-40 Days"
- Full-width background image (building exterior, dark overlay)
- Primary CTA button: "Explore Projects"
- Secondary CTA: "Call for Consultation"

### 4. Details Bar
Four icon + heading + subtext highlights below the hero. Extract exact copy from Figma.

### 5. Services Grid
- Section heading: "Luxury Modular Spaces We Create"
- Subheading: "From luxury homes to commercial spaces, we deliver"
- Grid of space type cards with images (homes, offices, resorts, farmhouses, etc.)

### 6. Comparison Table
- Heading: "Built Different From Conventional Construction"
- Three-column table: Feature | Traditional Construction | THERMANEST Prefab
- ThermaNest column uses the accent color
- Rows: Delivery Timeline, Furnishing & Utilities, Interior Quality, Cost Efficiency, Energy Consumption, Climate Control, Structural Safety, Relocation, Permissions, Customization, Site Disruption

### 7. Projects Gallery
- Heading: "Spaces We've Brought To Life"
- "View All Projects" link
- Grid of project cards. Each card shows: image, project name, location, type tag, Size / Configuration / Timeline details
- Known projects: The Urban Modular Residence (Model Town Rohtak, 3200 sq ft, 4BHK, 45 days), Karma Kove Suites (Gurugram, 640 sq ft, 2BHK, 28 days), Vertex Business Hub (3500 sq ft, 5 Offices, 25 days), Serenity Green Farmhouse (Karnal, 4000 sq ft, 4BHK+Pool, 35 days), two more projects

### 8. Process
- Heading: "A Process Designed Around You"
- Three steps: Consultation & Planning → Design & Manufacturing → Transport & Installation
- Each step has an icon, heading, and short description
- CTA button: "Start Your Project"

### 9. Excellence
- Heading: "Excellence in Every Structure Built"
- Left: photo
- Right: four pillars — Modern Innovation (future-ready modular design), Client-Centric Approach (built around your vision), Professional Team (6 sites · 16 experts each), Quality Craftsmanship (precision in every detail)
- CTA: "Explore More About Us"

### 10. Testimonials
- Heading: "Hear From Our Valued Clients"
- Three reviews with star ratings:
  - Rajesh Malhotra — Luxury Villa, Gurugram
  - Vikas Sharma — Portable Office, Rohtak
  - Rahul Kumar — Luxury Resort, Gurugram
- Extract full quote text from Figma

### 11. FAQ
- Heading: "Frequently Asked Questions"
- Animated accordion, at least 4 questions:
  - How long does a modular construction project typically take?
  - Does THERMANEST handle electrical, plumbing and sewage integration?
  - Can THERMANEST spaces be fully customized to our requirements?
  - Are modular prefab structures durable and suitable for long-term use?

### 12. CTA Banner
- Dark background
- Heading: "Ready To Build Your Dream Space?"
- CTA: "Call Us"

### 13. Footer
- Logo + tagline: "Dubai-engineered luxury modular construction. 20+..."
- Quick Links: About Us · Process · Contact
- Address: Delhi NCR, India
- Copyright: © 2026 THERMANEST. PREFAB All rights reserved.
- Privacy Policy · Terms of Service links

---

## Coding Standards — Non-Negotiable

### Mobile-first
- Write styles for 375px first, then add `md:` (768px), `lg:` (1024px), `xl:` (1440px) overrides
- Every section must look correct at all four breakpoints before moving to the next
- Test the mobile hamburger menu before marking Navbar done

### Accessibility (WCAG 2.1 AA minimum)
- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h3>` in correct order
- Every image needs a descriptive `alt` attribute
- All interactive elements (buttons, links, accordion triggers) must be keyboard-navigable and have visible focus rings
- Color contrast: 4.5:1 minimum for body text, 3:1 for large text
- Accordion: use `aria-expanded`, `aria-controls`, `role="region"` on panels
- Navigation: `aria-label="Main navigation"` on `<nav>`

### Performance
- Use `next/image` for every image — never a bare `<img>` tag
- Pass explicit `width` and `height` (or `fill` with a sized container) to every `next/image`
- Add `priority` prop only to the Hero image (above the fold)
- Use `blur` placeholder for project photos
- Lazy-load sections below the fold with `loading="lazy"` on images

### Animations
- Use `framer-motion` for scroll-triggered reveals (fade up, stagger children)
- Wrap all animations in a `useReducedMotion` check — if the user prefers reduced motion, skip the animation entirely (just show the element)
- Keep durations under 400ms for UI interactions, under 800ms for scroll reveals

### Code style
- No inline styles — all values via CSS variables or Tailwind classes
- No hardcoded hex colors or pixel values outside `globals.css`
- Extract repeated patterns into components; three nearly identical JSX blocks is the threshold
- Content that will change (project data, testimonials, FAQ items) goes in `src/data/` as typed TypeScript arrays, not hardcoded in JSX
- One component per file; filename matches the exported component name

### File structure
```
app/
  globals.css          # CSS variables + base styles
  layout.tsx           # Root layout (InfoBar + Navbar + Footer)
  page.tsx             # Homepage (assembles all sections)
  (pages)/
    services/page.tsx
    projects/page.tsx
    about/page.tsx
    contact/page.tsx

components/
  layout/
    InfoBar.tsx
    Navbar.tsx
    Footer.tsx
  sections/
    Hero.tsx
    DetailsBar.tsx
    ServicesGrid.tsx
    ComparisonTable.tsx
    ProjectsGallery.tsx
    Process.tsx
    Excellence.tsx
    Testimonials.tsx
    FAQ.tsx
    CTABanner.tsx
  ui/
    Button.tsx
    SectionWrapper.tsx
    Badge.tsx
    ProjectCard.tsx

data/
  projects.ts          # Project data array
  testimonials.ts
  faq.ts
  services.ts

public/
  images/
    hero/
    projects/
    team/
```

---

## Figma Design Reference

The Figma file is open in Figma Desktop. Use the `mcp__figma-desktop__get_design_context` tool with a specific node ID to extract exact colors, spacing, typography, and layout for any section before coding it. Always extract exact values from Figma rather than guessing.

Use `mcp__figma-desktop__get_screenshot` to get a visual of a section or the full page.

**Homepage frame ID:** `47:1123`

Key section frame IDs (get from Figma metadata if needed):
- Header: `47:1124`
- Header info bar: `47:1147`
- Details bar: `47:1165`

For any other section, call `get_metadata` on the homepage frame to find its ID, then call `get_design_context` on that ID.

---

## Future Pages (after homepage is complete)

- `/services` — detailed breakdown of each space type
- `/projects` — full filterable project gallery
- `/about` — company story, team, Dubai engineering partnership
- `/contact` — inquiry form (sends lead to sorabhsaluja@gmail.com via Resend API)

---

## Planned Integrations (not yet implemented)

- **Resend** — transactional email for inquiry form submissions
- **Vercel Analytics** — zero-config traffic analytics
- **Google Analytics 4** — conversion tracking
- **Sanity or Contentful** — headless CMS for projects/testimonials/FAQs (evaluate after homepage ships)
