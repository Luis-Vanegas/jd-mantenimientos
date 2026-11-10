# Pendientes de la página web

Estado de la web después del rediseño del 2026-11-10 (basado en la imagen de referencia que aportó el cliente).
Todo el contenido se edita en `web/src/data/empresa.ts`; las fotos, en `web/src/assets/`.

## Fotos provisionales (reemplazar)

Todas las fotos actuales son **ilustrativas, generadas con IA** para el brochure (origen en `brochure/asset-sources.json`).
No son trabajos reales de JD. Hay que cambiarlas por fotos propias antes de publicar.

| Dónde se ve | Archivo actual | Qué foto conviene |
|---|---|---|
| Portada (hero) | `assets/fotos/hero-tecnico-jd.jpg` | Técnico de JD con uniforme, trabajando en una red real. Horizontal, mínimo 1600 px de ancho. |
| Servicio: limpieza | `assets/fotos/servicio-limpieza.jpg` | Equipo hidrojet en uso. |
| Servicio: cámara y localización | `assets/fotos/servicio-camara.jpg` | Monitor de la cámara mostrando una tubería real. |
| Servicio: fugas | `assets/fotos/servicio-fugas.jpg` | Geófono o cámara térmica en uso. |
| Servicio: planos | `assets/fotos/servicio-planos.jpg` | Plano 2D/3D hecho por JD (captura de pantalla sirve). |
| Servicio: obras y plomería | `assets/fotos/servicio-obras.jpg` | Antes/después de una obra o reforma. |
| Ferretería | `assets/fotos/servicio-materiales.jpg` | Foto del local o depósito real. |
| Categorías de ferretería | (solo iconos) | Opcional: una foto cuadrada por categoría, como en la referencia. |

**Cómo reemplazar:** guardar la foto nueva con el **mismo nombre** en `web/src/assets/fotos/`. Astro la optimiza sola (WebP y tamaños responsive) al compilar. Actualizar el texto alternativo (`imagenAlt`) en `empresa.ts` si cambia lo que muestra.

## Datos por confirmar con el cliente

- [ ] **Categorías de ferretería:** se tomaron de la referencia (PVC, pinturas, impermeabilizantes, eléctrico, LED, herramientas, bloques, material de playa, drywall). Confirmar el inventario real.
- [x] **Color de acento:** se mantiene el azul claro de la marca, no el amarillo de la referencia (decidido el 2026-11-10). Vive en `--accent` de `web/src/styles/global.css`.
- [ ] **Trato al cliente:** la web ahora usa "tú" (como la referencia). Los videos usan "usted". Confirmar cuál prefiere.
- [ ] **Redes sociales:** la referencia muestra Facebook, Instagram, TikTok y YouTube. Faltan los enlaces; cuando lleguen, se agregan en `PiePagina.astro`.
- [ ] **Horario de atención y NIT.**
- [ ] **Logos de clientes:** P&G, Corona y C.C. Sandiego aparecen en el video, pero no tienen autorización registrada; por eso no se muestran.
- [ ] **Dominio y hosting:** sin definir (ver ADR-002 en `docs/decisiones.md`).

## Mejoras técnicas sugeridas (no urgentes)

- [ ] Imagen para compartir en redes (`og:image`, 1200×630) cuando haya foto real de portada.
- [ ] `npx astro check` necesita instalar `@astrojs/check` y `typescript` como dependencias de desarrollo; no se instalaron para no agregar dependencias sin acuerdo.
- [ ] Borrar `tmp/web-anterior/` cuando se confirme que no se necesita nada del diseño anterior (secciones de prevención, misión/visión y brochure).
