// Antepone la base del sitio (ver astro.config.mjs) a una ruta de `public/`.
// Sin esto, un enlace como "/favicon.png" apuntaría a la raíz del dominio y no a la subruta del repo.
export const ruta = (archivo: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${archivo.replace(/^\//, '')}`;
