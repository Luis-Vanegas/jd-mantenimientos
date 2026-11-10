// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages publica el sitio en una subruta (usuario.github.io/<repo>/).
// Por eso `base`: todas las rutas internas deben armarse con `ruta()` de src/lib/rutas.ts.
// Si más adelante se usa un dominio propio, basta con cambiar `site` y quitar `base`.
export default defineConfig({
  site: 'https://luis-vanegas.github.io',
  base: '/jd-mantenimientos',
});
