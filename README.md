# Website

La landing de Brocket (`brocket.xyz`), las páginas legales y la del add-on de Google Sheets. Next.js 16 con deploy en
Vercel.

## Levantarlo

Hace falta Node 20.9 o más (lo pide Next.js 16) y npm.

```bash
npm ci            # instala lo del package-lock.json
npm run dev       # http://localhost:3000
npx tsc --noEmit  # chequeo de tipos (el build no frena por errores de TS)
```

El formulario de "Book a Demo" manda mails con Amazon SES y necesita `SES_ACCESS_KEY_ID` y `SES_SECRET_ACCESS_KEY`
(están en el dashboard de Vercel; no hay `.env` en el repo). Sin ellas el formulario devuelve error y el resto del
sitio anda igual.

Antes del primer commit, el chequeo de secretos: `pip install pre-commit && pre-commit install`.

## Deploy

Un PR a `main` arma un preview en Vercel; al mergear, Vercel publica en producción. Cómo trabajamos con git:
`team-product-engineering/rules/git.md` en brocket-root. El detalle del código y sus convenciones: `CLAUDE.md`.
