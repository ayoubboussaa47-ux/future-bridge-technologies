# Future Bridge Technologies — Website

A modern, responsive website for **Future Bridge Technologies** — an AI-native technology company that builds intelligent operating systems for businesses.

## Project Hierarchy

```
Future Bridge Technologies
    → Albatross AI   (our AI operating system)
    → Albatrix Funded (first pilot environment)
```

## Technology Stack

- **React 19** with TypeScript
- **Vite** (dev server & build)
- **CSS Modules / plain CSS** (custom stylesheet, no CSS framework)
- **React Router** (client-side routing)
- **Lucide React** (icons)
- No external APIs or third-party keys required

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `http://localhost:5173` |
| `npm run build` | Produce production build in `dist/` |
| `npm test` | Run the Node.js server tests (existing) |

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, what we build, how it works, packages, CTA |
| About | `/about` | Company story, vision & mission, hierarchy |
| Services | `/services` | Detailed service line expansions |
| Work | `/work` | Work gallery with filterable demonstrations |
| Contact | `/contact` | Contact info + inquiry form |

## Design Direction

- **Primary**: `#5B67D8` (primary brand color)
- **Background**: Dark navy / near-black theme
- **Accent**: Electric blue / cyan highlights
- **Typography**: Tajawal (Arabic), system fonts for English
- **Aesthetic**: Premium technology, clean, minimal animations
- **No**: Generic SaaS templates, excessive gradients, fake statistics

## Key Features

- ✅ RTL support for Arabic (with English toggle)
- ✅ Sticky header with scroll-state change
- ✅ Mobile hamburger menu with ARIA labels
- ✅ Focus-visible states for keyboard navigation
- ✅ `prefers-reduced-motion` respect
- ✅ Lazy-loading images with `loading="lazy"`
- ✅ Filterable work gallery (no page reload)
- ✅ Form validation with Arabic error messages
- ✅ Placeholder images/graphics (no unsplash/unsplash dependencies)
- ✅ Configurable social links (no fake URLs)
- ✅ No `Lorem ipsum` in final output
- ✅ All data in separate `.ts` files (easily editable)

## Data Structure

All editable data lives in `src/data/`:

- `site.ts` — site metadata, hierarchy, languages, socials
- `services.ts` — the 5 core service lines
- `projects.ts` — the 3 work demonstrations
- `team.ts` — team member placeholders
- `testimonials.ts` — intentionally empty (no fake testimonials)

## Design Principles (from the brief)

1. Never invent customers, revenue, investors, or production AI agents
2. Label prototype/pilot functionality appropriately
3. Maintain the parent → technology → pilot hierarchy
4. Avoid generic SaaS templates — this is an AI-native OS company
5. Dark navy theme with electric cyan accents
6. Clean typography (Tajawal for Arabic), minimal borders
7. Subtle grid patterns, blue glow effects, professional feel

## Notes

- The site works entirely offline — no API keys, no external services required
- All form submissions are simulated (frontend only)
- Work gallery images are placeholders — replace with real screenshots before launch
- Social links are configurable in `src/data/site.ts`
- The existing Node.js server (`server.js`) and tests (`tests/server.test.js`) remain untouched