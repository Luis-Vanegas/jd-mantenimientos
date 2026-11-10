# Decisiones del proyecto

## ADR-001: el brochure se diseña en HTML/CSS y se exporta a PDF

- **Contexto:** el cliente necesita un tríptico imprimible antes que la web, y no hay licencias de software de diseño.
- **Decisión:** `brochure/index.html` con CSS de impresión (`@page`), exportado con Edge o Chrome en modo headless (`brochure/exportar-pdf.ps1`).
- **Consecuencias:** el PDF se regenera con un comando y comparte tokens con la web. Para imprenta falta agregar sangrado de 3 mm y marcas de corte.

## ADR-002: la web se construye con Astro y se publica como HTML estático

- **Contexto:** el hosting todavía no está definido; puede ser un hosting compartido sin Node. Es una web publicitaria que debe cargar rápido en el celular.
- **Decisión:** Astro con salida estática (`web/dist/`). Los datos de la empresa viven en un solo archivo (`web/src/data/empresa.ts`).
- **Consecuencias:** `dist/` se sube a cualquier hosting (cPanel, Netlify, Vercel). Casi no hay JavaScript en el navegador. Si más adelante se necesitan formularios con backend, se agrega un adaptador o un servicio externo.
- **Alternativa descartada:** Next.js con `output: 'export'`. Es más familiar, pero carga React para una página que casi no necesita interactividad.

## ADR-003: la propuesta se publica en GitHub Pages

- **Contexto:** hay que mostrarle la web al cliente con un enlace, sin usar Vercel y sin pagar hosting todavía.
- **Decisión:** repositorio público `jd-mantenimientos` con despliegue automático a GitHub Pages (`.github/workflows/deploy.yml`, acción oficial `withastro/action`). El sitio vive en la subruta `/jd-mantenimientos/`, por eso `astro.config.mjs` define `base` y las rutas a `public/` se arman con `ruta()` (`web/src/lib/rutas.ts`).
- **Consecuencias:** cada push a `main` publica una versión nueva. El código y los datos comerciales del cliente quedan visibles en GitHub. Al pasar a dominio propio solo cambian `site` y `base`.
- **Alternativa descartada:** repositorio privado. En el plan gratuito de GitHub, Pages no publica repos privados.
