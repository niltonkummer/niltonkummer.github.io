# AI Coding Agent Instructions

## Project Overview
Personal portfolio website built with React + Vite + TypeScript + shadcn/ui. Single-page application with multi-language support (EN/PT), deployed to GitHub Pages.

## Architecture

### Component Structure
- **Page Components**: [src/pages/Index.tsx](src/pages/Index.tsx) - main portfolio page with section composition
- **Section Components**: [src/components/](src/components/) - `HeroSection`, `AboutSection`, `SkillsSection`, `ExperienceSection`, `ContactSection`, `Footer`
- **UI Components**: [src/components/ui/](src/components/ui/) - shadcn/ui components (Button, Card, etc.)
- **Shared Components**: `Header`, `NavLink` for navigation

### Key Patterns

**Internationalization (i18n)**
- Custom React Context in [src/lib/i18n.tsx](src/lib/i18n.tsx) with `useLanguage()` hook
- All text content uses `t.section.key` pattern (e.g., `t.hero.greeting`)
- Language toggle stored in localStorage, supports 'en' and 'pt'
- When adding UI text, always add translations to both languages in the `translations` object

**Styling & Components**
- Use `cn()` utility from [src/lib/utils.ts](src/lib/utils.ts) for conditional Tailwind classes
- shadcn/ui components use `class-variance-authority` for variant management
- All components import via `@/` alias (configured in [vite.config.ts](vite.config.ts))
- CSS variables in [src/index.css](src/index.css) define theme colors (HSL format with `--primary`, `--background`, etc.)

**Component Composition**
```tsx
// Standard pattern for new sections
export function NewSection() {
  const { t } = useLanguage(); // Always use for text
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* content */}
      </div>
    </section>
  );
}
```

## Development Workflow

### Commands
- `npm run dev` - Start dev server on port 8080
- `npm run build` - Production build for deployment
- `npm run build:dev` - Development build
- `npm test` - Run Vitest tests once
- `npm test:watch` - Watch mode for tests
- `npm run deploy` - Build and deploy to GitHub Pages

### Testing
- Vitest configured with jsdom environment ([vitest.config.ts](vitest.config.ts))
- Place tests in `src/**/*.{test,spec}.{ts,tsx}`
- Setup file: `src/test/setup.ts` (may need to create)

### Adding shadcn/ui Components
- Components are pre-installed in [src/components/ui/](src/components/ui/)
- Import directly: `import { Button } from '@/components/ui/button'`
- Configuration in [components.json](components.json) uses path aliases

## Important Conventions

1. **Route Management**: Add custom routes ABOVE the catch-all `*` route in [src/App.tsx](src/App.tsx) (see comment)

2. **Global Providers**: App wrapped with:
   - `QueryClientProvider` (@tanstack/react-query)
   - `LanguageProvider` (custom i18n)
   - `TooltipProvider` (shadcn/ui)
   - `BrowserRouter` (react-router-dom)

3. **Asset Imports**: Logos stored in [src/assets/logos/](src/assets/logos/), import using `@/assets/logos/...`

4. **Responsive Design**: Use Tailwind responsive prefixes (`md:`, `lg:`) - common pattern is mobile-first with `md:` breakpoint

5. **Animations**: Custom animations defined in Tailwind config (e.g., `animate-fade-in-up`) - see [tailwind.config.ts](tailwind.config.ts)

## Deployment
- GitHub Pages deployment configured via `homepage` field in [package.json](package.json)
- Uses `gh-pages` package - deployment artifacts in `dist/`
- Base path is `/` for the root deployment

## Critical Files
- [src/App.tsx](src/App.tsx) - App setup with providers and routing
- [src/lib/i18n.tsx](src/lib/i18n.tsx) - All UI translations
- [vite.config.ts](vite.config.ts) - Path aliases and dev server config
- [components.json](components.json) - shadcn/ui configuration
