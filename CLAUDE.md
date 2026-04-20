# Website

Landing page / sitio de marketing de Brocket.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Runtime**: React 19
- **Styling**: TailwindCSS v4 + CSS modules (`styled-jsx`) + CSS puro en `globals.css`
- **Components**: shadcn/ui (componentes base en `components/ui/`)
- **Animations**: CSS puro + IntersectionObserver (sin Framer Motion)
- **Deploy**: Vercel (preview automático por PR, prod por push a `main`)

## Source of truth visual

**La identidad de marca y el sistema de diseño NO viven acá** — viven en el repo de la plataforma:

📘 `../web-client/BRAND.md`

Cuando hagas cambios visuales en esta landing (colores, tipografía, spacing, patterns, copy voice), **leé primero ese doc** y mantené consistencia. Si inventás algo nuevo que valga la pena reutilizar, agregalo a `BRAND.md` antes de commitear.

## Estructura

```
website/
├── app/
│   ├── page.tsx         → Landing principal (orquesta todas las sections)
│   ├── layout.tsx       → Root layout + Inter font + Vercel Analytics
│   ├── globals.css      → Design tokens + section styles (hero, problem, finalcta)
│   └── api/contact/     → Endpoint de Book-a-Demo (Resend)
├── components/
│   ├── ui/              → shadcn/ui primitives
│   ├── navbar.tsx       → Sticky nav con backdrop-blur + mobile drawer
│   ├── hero.tsx         → Hero con gradient mesh + eyebrow + CTA
│   ├── problem.tsx      → 4 cards con íconos lucide
│   ├── solution.tsx     → Diagrama de flujo (data sources → AI → outputs)
│   ├── features.tsx     → Tabla "Scaling up" con magnitude bars + counter
│   ├── how-it-works.tsx → 3 steps con connector line animado
│   ├── pricing.tsx      → 3 cards (starter/scale-up/enterprise) con ribbon
│   ├── integrations.tsx → 3 categorías con íconos de marca
│   ├── trust.tsx        → 5 items de seguridad con íconos
│   ├── final-cta.tsx    → Bookend con blobs + CTA
│   ├── reveal.tsx       → Scroll-reveal reutilizable (IntersectionObserver)
│   └── book-demo-modal.tsx → Modal de contacto
├── hooks/
├── lib/
└── styles/
```

## Componentes clave

### `Reveal` (`components/reveal.tsx`)

Wrapper que aplica fade-in + slide-up cuando el elemento entra en viewport. Re-anima al re-entrar (no es "once").

```tsx
<Reveal delay={100} as="h2" className="...">
  Contenido
</Reveal>
```

Props:
- `delay?: number` — stagger en ms
- `as?: ElementType` — default `div`
- `className`, `style`, `children`

### `BookDemoProvider` (`components/book-demo-modal.tsx`)

Context que expone `useBookDemo()` en todo el arbol. Modal controlado globalmente para que cualquier CTA pueda abrirlo.

```tsx
const { open: openBookDemo } = useBookDemo()
<button onClick={openBookDemo}>Book a Demo</button>
```

## Patrones establecidos

### Animaciones

- **Nunca Framer Motion** — CSS + IntersectionObserver es suficiente y ligero.
- **Todas las animaciones respetan `prefers-reduced-motion`** — ver `globals.css` y cada `<style jsx>`.
- **Reveal re-anima al re-entrar en viewport** (el observer NO hace `disconnect()` después del primer trigger).

### Estilos

Tres capas coexisten, usadas por conveniencia:
1. **CSS globals** (`app/globals.css`) — tokens, section styles compartidos (hero, problem, finalcta)
2. **`<style jsx>` por componente** — estilos específicos que no se reutilizan
3. **Tailwind classes** — utilities puntuales (flex, gap, etc.)

No es inconsistencia por sí sola, pero tendería a ir migrando todo a CSS vars + styled-jsx si aparece necesidad.

### Íconos

Todos de **lucide-react**. Nunca SVG inline salvo el logo y casos muy específicos (flow arrow en solution).

## Comandos

```bash
npm run dev       # http://localhost:3000
npm run build     # next build (valida TS + genera static)
npm run lint      # eslint (puede no estar instalado)
npx tsc --noEmit  # type-check standalone
```

## Deploy

- **Branch `main`** → deploy a producción (`brocket.xyz`)
- **Feature branches** → preview deploy automático con URL única (aparece en el PR como comentario de Vercel)

### Flujo de cambios

1. Branch nueva desde `main`: `git checkout -b feature/<nombre>`
2. Commits (formato convencional: `feat:`, `fix:`, `docs:`)
3. Push + PR a `main`
4. Review del preview de Vercel
5. Merge

**NUNCA** pushear directo a `main` salvo emergencia (tira deploy a producción).

## Notas

- Este repo es un **repo separado** (no parte del monorepo del producto).
- La plataforma principal vive en `../web-client/`.
- Mensajes de commit: NO agregar Co-Authored-By de Claude.
