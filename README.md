# JD Mantenimientos: página web y material publicitario

Página web y brochure de **JD Mantenimientos Planos y Diseños SAS**:
mantenimiento de redes hidrosanitarias, plomería, obras civiles, planos 2D/3D y ferretería en Medellín y Antioquia.

**Sitio publicado:** https://luis-vanegas.github.io/jd-mantenimientos/

| Página | Enlace |
|---|---|
| Página de inicio | [/jd-mantenimientos/](https://luis-vanegas.github.io/jd-mantenimientos/) |
| Brochure digital | [/jd-mantenimientos/brochure/](https://luis-vanegas.github.io/jd-mantenimientos/brochure/) |
| Brochure en PDF | [/jd-mantenimientos/brochure-jd.pdf](https://luis-vanegas.github.io/jd-mantenimientos/brochure-jd.pdf) |

> Propuesta en revisión. Las fotografías son ilustrativas (generadas con IA) y se reemplazarán por fotos reales del cliente.
> Lo que falta está en [`docs/pendientes-web.md`](docs/pendientes-web.md).

## Estructura

| Carpeta | Qué contiene |
|---|---|
| `web/` | Página web en [Astro](https://astro.build), se compila a HTML estático |
| `brochure/` | Brochure en HTML/CSS y su exportación a PDF |
| `assets/brand/` | Logo e isotipo de la marca |
| `docs/` | Contenido del cliente, decisiones técnicas y pendientes |
| `DESIGN.md` | Identidad visual: colores, tipografía y reglas |
| `.github/workflows/` | Publicación automática en GitHub Pages |

Las tarjetas de presentación (`tarjetas/`) tienen datos personales de los asesores: se trabajan en local y no se suben al repositorio.

Dentro de la web:

| Ruta | Para qué |
|---|---|
| `web/src/data/empresa.ts` | **Todo el contenido**: teléfono, correo, servicios, categorías, clientes |
| `web/src/components/inicio/` | Una sección de la página por componente |
| `web/src/assets/fotos/` | Fotos (Astro las optimiza a WebP al compilar) |
| `web/src/styles/global.css` | Colores de marca y estilos compartidos |

## Trabajar en local

Requiere Node 22.12 o superior.

```bash
cd web
npm install
npm run dev       # http://localhost:4321/jd-mantenimientos/
npm run build     # genera web/dist/
npm run preview   # sirve la versión compilada
```

## Publicación

Cada `push` a `main` compila y publica la web en GitHub Pages (ver `.github/workflows/deploy.yml`).
El avance se ve en la pestaña **Actions** del repositorio.

Para usar un dominio propio más adelante: cambiar `site` y quitar `base` en `web/astro.config.mjs`.

## Brochure en PDF

```powershell
powershell -ExecutionPolicy Bypass -File brochure\exportar-pdf.ps1
```

---

Desarrollado por Luis Vanegas.
