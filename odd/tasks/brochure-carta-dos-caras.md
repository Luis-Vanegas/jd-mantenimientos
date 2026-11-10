# Corporate letter brochure — two-sided print edition
Objective: separate photographic assets, editable HTML and a verified two-page Letter PDF.
Route: inline; no build. Repository has no HEAD and existing files are untracked; no commits or staging of existing work. Engram mirror pending: runtime identity unavailable.

## Specs
### S1 — User request
Era hacer la foto de los trabajores y producto y crear el pdf , no darme la img completa asi.
Ya te paso como quiero las cosas, y que me crees algo tipo folletoo brosure de dos caras,
bien organizado y profesional, organiza bien el html y tamañaño para que el pdf salga bien:

### S2 — User-provided editorial and print brief
Actúa como un Director de Arte Senior especialista en Diseño Editorial Corporativo y Desarrollador Frontend experto en Print CSS (impresión a PDF de alta precisión).

Necesito crear un Brochure Corporativo de 2 caras (Frente y Reverso) en formato Carta vertical (215.9mm x 279.4mm) para la empresa "JD MANTENIMIENTOS - Planos y Diseños". El enfoque principal de la empresa (80% del peso visual) es la INGENIERÍA SANITARIA, INSPECCIÓN Y MANTENIMIENTO DE TUBERÍAS Y REDES HIDROSANITARIAS. El servicio de Depósito y Ferretería va como un bloque secundario bien presentado con una imagen representativa, sin opacar el negocio principal de tuberías.

### REGLAS DE EJECUCIÓN:
1. NO generes una sola imagen plana con todo el folleto adentro (el texto sale deforme y no sirve para imprenta).
2. Primero genera las fotografías individuales (assets) con tu generador de imágenes, y luego construye el documento HTML + CSS completo listo para exportar a PDF (`Ctrl + P`).
3. Usa estrictamente la paleta de colores oficial:
   - Azul Marino Corporativo (Principal): `#0A192F` / `#0D2342`
   - Amarillo Vial / Dorado (Acentos): `#FFB800`
   - Blanco Puro: `#FFFFFF` y Gris Claro: `#F4F6F9`

---

### PASO 1: IMÁGENES QUE DEBES GENERAR PRIMERO
Genera las siguientes fotografías realistas y profesionales (sin textos largos superpuestos):

1. **Foto Principal de Portada (`hero-tecnico-jd.jpg`):** Fotografía comercial hiperrealista de un técnico hispano agachado operando un equipo profesional de inspección de tuberías con pantalla de video (mostrando el interior de un tubo) y carrete industrial en exterior. **DETALLE OBLIGATORIO:** El técnico lleva casco blanco, chaleco reflectivo amarillo y camisa/uniforme azul marino que tiene estampado de forma visible en el pecho o brazo el logo **"JD" en letras blancas/plateadas**.
2. **6 Fotos de Referencia para los Servicios (para las filas del Reverso):**
   - `servicio-camara.jpg`: Monitor de cámara de inspección mostrando el interior de una tubería.
   - `servicio-limpieza.jpg`: Boquilla hidrojet disparando agua a alta presión limpiando una tubería.
   - `servicio-localizacion.jpg`: Técnico usando un localizador electrónico con pantalla rastreando el suelo.
   - `servicio-fugas.jpg`: Pared o piso revisado con equipo detector de fugas no invasivo.
   - `servicio-planos.jpg`: Planos hidrosanitarios e ingenieriles extendidos y enrollados sobre una mesa.
   - `servicio-obras.jpg`: Instalación profesional de tubería sanitaria de PVC en una adecuación de obra civil.
3. **1 Imagen Representativa de Ferretería (`ferreteria-general.jpg`):** Una fotografía comercial limpia y bien iluminada que agrupe en una sola toma representativa los productos de ferretería: tubos y accesorios de PVC, herramientas eléctricas (taladro), rollos de cable e iluminación LED, tarros de pintura y materiales de construcción.

---

### PASO 2: MAQUETACIÓN EN HTML + CSS PARA IMPRESIÓN (2 PÁGINAS TAMAÑO CARTA)
Estructura el código HTML y CSS con `@page { size: letter portrait; margin: 0; }` y `@media print` para que al exportar a PDF genere exactamente 2 páginas tamaño Carta:

#### PÁGINA 1: FRENTE (PORTADA DE ALTO IMPACTO)
- **Diseño Visual:** Inspirado en la referencia aprobada por la clienta. Fondo en Azul Marino profundo (`#0A192F`) con curvas dinámicas elegantes en Amarillo (`#FFB800`) y Blanco que enmarcan la fotografía del técnico.
- **Encabezado:** Espacio superior centrado para el logo 3D de tuberías plateadas (`logo-jd.png`) con el texto `"JD MANTENIMIENTOS - Planos y Diseños"`. Debajo, en letras amarillas entre guiones: `— INGENIERÍA SANITARIA —`.
- **Titular Principal:**
  - `"Su red hidrosanitaria,"` (en blanco, tipografía bold grande)
  - `"bajo control"` (en amarillo vibrante `#FFB800`, tamaño gigante)
- **Párrafo descriptivo:** `"Inspección, mantenimiento y planos de redes hidrosanitarias y alcantarillado, sin romper pisos."`
- **Imagen Central:** La fotografía `hero-tecnico-jd.jpg` (donde se ve al técnico con el logo JD en su uniforme operando la cámara de video) integrada con las ondas amarillas y blancas.
- **Barra Inferior de Servicios (6 íconos en fila):** En la parte baja sobre fondo azul marino, una fila de 6 columnas separadas por líneas sutiles con íconos blancos:
  1. `Inspección con cámara` | 2. `Limpieza de tuberías` | 3. `Planos hidrosanitarios` | 4. `Obras civiles` | 5. `Localización de tuberías` | 6. `Localización de fugas`.
- **Cierre de Portada:** Franja amarilla al pie con texto en Azul Marino: `"¡Prevenir es más barato que reparar! | WhatsApp: 324 662 6737"`.

#### PÁGINA 2: REVERSO (SERVICIOS DETALLADOS + BLOQUE FERRETERÍA + CLIENTES + CONTACTO)
- **1. Encabezado Superior:** Banda en Azul Marino con acento amarillo:
  - Título en blanco: `"SOLUCIONES ESPECIALIZADAS EN TUBERÍAS Y REDES"`
  - Subtítulo en amarillo: `"Diagnóstico con tecnología de punta y mantenimiento garantizado"`

- **2. Bloque Principal: Los 6 Servicios con Imagen de Referencia (55% de la altura):**
  Diseña 6 bandas horizontales limpias apiladas verticalmente. Cada banda debe llevar:
  - **Izquierda:** Cuadro azul marino con bordes redondeados y su ícono blanco correspondiente.
  - **Centro:** Título en Azul Marino en negrita y descripción exacta debajo:
    1. **Inspección con cámara de video:** Diagnóstico detallado que identifica daños, fisuras u obstrucciones.
    2. **Limpieza de tuberías:** Equipos de alta presión que eliminan incrustaciones y obstrucciones.
    3. **Localización de tuberías:** Localizadores electrónicos que rastrean el recorrido de la red.
    4. **Localización de fugas:** Tecnología no invasiva para encontrar fugas en redes ocultas.
    5. **Diseño y elaboración de planos:** Planos hidrosanitarios para proyectos o adecuaciones.
    6. **Obras civiles y adecuaciones:** Intervenciones que garantizan el correcto funcionamiento de la red.
  - **Derecha:** La fotografía de referencia de cada servicio (`servicio-*.jpg`) fusionada hacia la izquierda con un degradado suave blanco (`linear-gradient`) para que se integre al diseño.

- **3. Bloque Complementario: Servicio de Depósito y Ferretería (15% de la altura):**
  Un módulo horizontal destacado con marco amarillo y fondo azul marino/gris claro, dividido en dos columnas:
  - **Columna Izquierda (Texto):** Título `"DEPÓSITO Y FERRETERÍA: Materiales de calidad para tus proyectos"`. Descripción: `"Complementamos nuestros servicios técnicos con el suministro de todo lo necesario para tu obra: Tubería y accesorios de PVC, pinturas e impermeabilizantes, eléctricos y paneles LED, herramientas, drywall, bloques y material de playa."`
  - **Columna Derecha (Imagen):** La imagen representativa `ferreteria-general.jpg` mostrando el conjunto de materiales y herramientas.

- **4. Sección "Han confiado en nosotros" (Clientes Destacados - 10% de la altura):**
  - Título con ícono de apretón de manos amarillo: `"Han confiado en nosotros"`
  - Tres tarjetas blancas limpias con sombra suave en fila horizontal mostrando los logotipos oficiales/estilizados en SVG o imagen de:
    1. **Centro Comercial Premium Plaza** (Logo con corona dorada y tipografía institucional).
    2. **Comfama** (Logo institucional en color magenta/rojo característico).
    3. **Cueros Vélez** (Logo tipográfico elegante en negro/dorado `"Vélez"`).

- **5. Pie de Página y Contacto (20% de la altura):**
  - Bloque inferior en Azul Marino con corte diagonal amarillo.
  - Izquierda:
    - Título en amarillo: `"Agendamos su diagnóstico esta semana"`
    - Botón/Texto gigante con ícono de WhatsApp: `WhatsApp: +57 324 662 6737`
    - Ubicación con ícono de pin: `"Medellín y Antioquia (Cobertura de servicios)"`
  - Derecha:
    - Recuadro blanco para el **Código QR de WhatsApp** con el texto debajo: `"Escanee y escríbanos"`.
### S3 — Latest client catalog (overrides the previous service wording)
## NUESTROS SERVICIOS

Ofrecemos soluciones integrales en mantenimiento, diagnóstico y construcción de redes hidrosanitarias e infraestructura.

- Limpieza y desobstrucción de tuberías.
- Inspección con cámara de video y localización de redes.
- Detección de fugas con geófono y cámara térmica.
- Levantamiento y elaboración de planos arquitectónicos e hidrosanitarios en 2D y 3D.
- Obras civiles y servicios de plomería.
- Comercialización de materiales de construcción y ferretería.

*Nuestro compromiso:* brindar soluciones eficientes, innovadoras y de calidad, respaldadas por tecnología y responsabilidad en cada proyecto.

### S4 — Front catalog and closing commitment
The complete NUESTROS SERVICIOS heading, introduction and six exact service sentences must appear on the front. The exact commitment must be the final text on the reverse. Other approved content is preserved.

### S5 — Photo-led front, no repetition and confirmed contact
Front: keep the exact service catalog and introduction, using the former reverse service photographs as the main content; remove decorative icons. Reverse: complementary materials, three authorized clients, unique contact block and final commitment. Never repeat the service catalog, introduction, email, address or phone across the faces. Confirmed email: jdgerenciamantenimientos@gmail.com. Address: Cr 52 #5-99. No "sin romper pisos" in the brochure.

### S6 — HTML approval before PDF
Do not export or deliver an updated PDF until the user has reviewed and approved the revised HTML. This overrides the pending PDF export step for this revision.

### S7 — Compact combined front and two additional clients
Center the JD logo with its text, compact the front service list and recover the existing technician photograph. Add NOEL and Crepes & Waffles to the reverse client credits. Preserve all service wording, contact details, no-icons rule and final commitment. HTML-only review still applies. Use actual NOEL name if an official logo file is unavailable, never fabricate it.

### S8 — Restore the earlier cover and reverse service list
Restore the supplied screenshot composition: navy cover, technician photo, summarized service rail and yellow closing band. Complete six-service list belongs on reverse, with current confirmed contact fields and all five client credits including NOEL and Crepes & Waffles. Screenshot supersedes the no-icons/front-list layout. Preserve the no-PDF-before-approval rule and omit the removed "sin romper pisos" claim.

### S9 — Remove icons and repeated cover text
No decorative icons on either face. Remove cover service summaries and service-description copy; keep the exact full catalog only on reverse. Replace the freed cover area with a larger technician photograph, preserving branding, unique headline, closing line and confirmed reverse details. HTML approval still precedes PDF export.

### S10 — Client breathing room and restored cover sentence
Remove the red-highlighted secondary hardware panel. Allocate its space to the five client credits with larger marks, cards and spacing. Restore the original cover sentence about inspection, maintenance and plans, but never the removed "sin romper pisos" claim. Keep complete catalog on reverse and HTML-only review.

## Tasks
- T1 / S1-S2 / inline / complete: generate eight individual photographic assets and record provenance.
- T2 / S1-S10 / inline / complete: make one standalone HTML source, served by Astro; exact Letter print styles and functional QR.
- T3 / S1-S6 / inline / awaiting HTML approval: export PDF, verify two 612 × 792 pt pages, selectable text, image loading, QR and rendered layout.

## Log
L1: Full user requirements are preserved above. The attached brief replaces the earlier product-led reverse. Letter dimensions override the earlier 3:4 request.
L2: Existing PDF and full-page generated proposals are preserved. No builds will run. Browser/print checks replace a deterministic RED test for this editorial-layout task.
L3: The new brief requests client marks; source content lists these clients, but permission to use their logos remains a print-release check. Do not invent or redraw official marks.

L4 — User correction (verbatim): agrealo esta vez lo que dije de los logos solo de esas empresas
L5: S2 client-mark exception now explicitly authorized for Premium Plaza, Comfama and Vélez only; T2 reopened for these three official assets. No other client marks authorized.

L6 — Updated user service copy (verbatim):
## NUESTROS SERVICIOS

Ofrecemos soluciones integrales en mantenimiento, diagnóstico y construcción de redes hidrosanitarias e infraestructura.

- Limpieza y desobstrucción de tuberías.
- Inspección con cámara de video y localización de redes.
- Detección de fugas con geófono y cámara térmica.
- Levantamiento y elaboración de planos arquitectónicos e hidrosanitarios en 2D y 3D.
- Obras civiles y servicios de plomería.
- Comercialización de materiales de construcción y ferretería.

*Nuestro compromiso:* brindar soluciones eficientes, innovadoras y de calidad, respaldadas por tecnología y responsabilidad en cada proyecto.

L7: S2 service rows replaced with L6 authoritative catalog; T2/T3 reopened. Separate image assets remain illustrative. Website service copy remains for the later web phase.

L8: Eight separate photos generated; current Letter HTML uses vector icons, supplied chrome JD mark, local Archivo font, three verified official client marks and deterministic QR. Source shared with Astro via raw HTML import. No build.
L9: Exactly two 612x792pt pages; latest six service sentences and commitment pass selectable-text checks. QR decoded independently from actual PDF to https://wa.me/573246626737. Desktop and 390px preview have no horizontal overflow. Existing PDF/HTML archived. Repository has no HEAD; no commits/staging performed.

L10: Independent final verdict PASS: S1-S3 resolved; exact six service sentences, commitment, three authorized marks and QR verified from current PDF. Premium Plaza mark has less visual weight because its official artwork is vertical, preserved without distortion. Physical duplex registration was not tested. No build, publish, commit or memory write.
L11: Final PDF synchronized to brochure/brochure-jd.pdf and web/public/brochure-jd.pdf; landing previews updated to portrait. HTML shown in browser at /brochure. Print edition is trim-size Letter with edge artwork; extra press bleed/CMYK is a separate printer requirement. Engram mirror remains pending because runtime session identity is unavailable.

L12 — User correction (verbatim): la parte fronta quiero que este el texto: ## NUESTROS SERVICIOS

Ofrecemos soluciones integrales en mantenimiento, diagnóstico y construcción de redes hidrosanitarias e infraestructura.

- Limpieza y desobstrucción de tuberías.
- Inspección con cámara de video y localización de redes.
- Detección de fugas con geófono y cámara térmica.
- Levantamiento y elaboración de planos arquitectónicos e hidrosanitarios en 2D y 3D.
- Obras civiles y servicios de plomería.
- Comercialización de materiales de construcción y ferretería.

 y esto de ultimo a terminar en la otra pagina:
*Nuestro compromiso:* brindar soluciones eficientes, innovadoras y de calidad, respaldadas por tecnología y responsabilidad en cada proyecto.
L13: RED observed against previous HTML; GREEN source assertions verify six complete front items and commitment after reverse contact. Front image reduced to prioritize the complete catalog. An initial global-footer match inserted the commitment on the wrong face; source assertions caught it and insertion is now explicitly bound to the last paper.

L14: Final S4 checks pass on actual PDF: all six complete service sentences are on page 1; commitment is the geometrically last text on page 2. PDF paint order differs from visual reading order, so closing position is asserted against PyMuPDF sorted text. Two exact Letter pages and independent QR decode remain valid. Desktop/mobile overflow checks pass; both pages visually inspected. PDF copies and landing preview images refreshed; no build or physical print test. Risk: none.

L15 — User changes (verbatim): sin romper pisos. quitar esa parte: 
agregar el correo de ellos
dirección
y quitar los iconos y poner img mas representativas a lo que que representa de verdad, que son las de la segunda parte el cliente la quiere como principal, como podemos hacer ahi ?
L16 — User correction (verbatim): Tambien no repetir informacion: 
y esta e sla dirrecion: Cr 52 #5-99
L17 — User confirmation (verbatim): Si ese es el correo
L18: RED source check observed missing contact fields and remaining decorative icons. Preserve all supplied service wording on front only; complement rather than duplicate on reverse. Distinct hardware-service photograph avoids reusing the same image on both faces.

L19 — User instruction (verbatim): antes de darme el pdf primero muestrame el html antes para modificar primero
L20: This revision is HTML-only. The existing PDF remains the previously approved/exported snapshot; no new PDF will be generated or delivered before HTML approval. Front is photo-led with no icons; contact fields and service text are unique across faces.

L21: HTML visible and checked in browser. Six photo-led services appear only on front; no decorative SVG icons; unique phone, confirmed email and address on reverse. No repeated image source across faces. Commitment is the final visible text. Static assertions passed. Current PDF remains unchanged pending explicit HTML approval; no build. Risk: none.

L22 — User request (verbatim): Hay forma de hacerlo mas pequeño el inicio la lista , centra el logo con el texto y poder poner al señor, la cosa era combinar las dos cositas si me entiendes funciona ? 
en la segunda seria agregar otro cliente, NOEL, Crew y blaffes,.
L23 — Parent clarification: Crepes & Waffles, además de NOEL. User confirmation (verbatim): Sii, me la agregas organiza el html con estos ajustes
L24: Official Crepes wordmark retrieved from its published brand SVG. NOEL official sources return 403; bounded read-only asset explorer confirmed no usable official file. Added neutral typographic client-name credit, not a fabricated logo. PDF export remains blocked pending HTML approval.

L25: HTML rendered in browser and visually checked: centered JD lockup, compact six-service rows and full technician photo on front; five client credits on reverse including official Crepes wordmark and plain NOEL name. Static checks pass for unique text/contact/photos, no decorative icons, available image assets and final commitment. Letter geometry unchanged. No PDF export or build; physical printing remains pending approval. Risk: none.

L26 — User report (verbatim): Se ve me mal puedes organizarlo
L27: Annotated screenshot identifies the list/photo seam. Root cause: contain scales a 3:2 asset into a much wider fixed-height panel, leaving ~37 mm navy side gutters at Letter size, plus top-only padding and no list-bottom inset. Minimal CSS fix: cover with top anchoring, clean yellow divider, bottom breathing space for service list. Existing source crop retains the face and camera screen. Other content unchanged. HTML-only; no PDF or build.

L28: Browser reload and screenshot confirm full-width technician image with no navy side gutters, clean separator below the complete sixth service and no list/photo overlap. Six service rows, reverse contact, clients and Letter rules are preserved by static checks. HTML only; PDF unchanged. Risk: none.

L29 — User request (verbatim): Hay forma de volver al pasado ? 
con la lista en el segundo y que en la segudna parte salga los dos clientes que te mencione ?
L30: Restored cover composition from earlier local source components, not a destructive repository reset. Kept current six-service wording, confirmed email/address, five client credits and final commitment. NOEL remains a name credit pending an official asset. HTML-only revision; no PDF export or build.

L31: Browser render confirms restored cover and complete reverse catalog with five client credits. Static assertions verify six reverse rows, six cover summaries, preserved email/address, final commitment and existing assets. NOEL remains text-only. No PDF export or build. Risk: none.

L32 — User request (verbatim): No usa los iconos en el inicio, y el texto no repetirlo ya que saldria en el segundo.
no usar los iconos ya que no representan, se ve feo. puede cambiar por otra cosa ?
L33: Removed icon symbol definitions, cover summary rail, repeated cover service sentence and reverse icon boxes. Enlarged cover technician photograph into the freed area; reverse photos now take the place of icons. RED/GREEN source assertions passed. No new image generation, PDF export or build.

L34: Browser screenshot confirms clean cover with larger technician photo and no service-summary rail. Reverse retains exact six-service catalog, photographic references, five client credits and confirmed contact. Decorative icon markup and unused CSS removed. Static no-repetition and asset checks passed. No PDF export or build. Risk: none.

L35 — User request (verbatim): esto quitalo dale aire a los clientes para que se vea bien, segundo en el inicio deja el exto que estaba no? ,la frese que habia ?
L36: Screenshot identifies the secondary hardware panel for removal. Removed it, reassigned its 10% page height to clients, increased logo and card padding/gaps; restored the previously used cover descriptor without "sin romper pisos". RED/GREEN source assertions passed. No PDF export or build.

L37: Browser screenshot confirms removed hardware module, five larger client credits with generous spacing, restored cover descriptor clear above the photograph, and no clipping. Six service rows, contact fields and final commitment remain. HTML-only; no PDF export or build. Risk: none.

L38 — User request (verbatim): al inicio sale algo que dice imagn lustrativa que esa cosita no salga
L39: Removed only the visible cover photo caption and its unused CSS. Preserved photo alt text and existing reverse photo disclosure. Source assertions pass; HTML-only, no PDF export or build. Risk: none.

L40 — User request (verbatim): es psoible colocar el logo de noel ?
L41: User supplied the NOEL PNG directly. Replaced the plain-name credit with this exact image, copied byte-for-byte to brochure and public assets; removed unused name-credit CSS and updated provenance. Source checks preserve the six reverse services. HTML-only, no PDF export or build. Risk: none.

L42 — User request (verbatim): No se ve bien podria agragdelo un poco, y a la derec poner el texto ?  de eque e s noel
L43: Enlarged supplied NOEL image within its existing card and placed a right-hand label "NOEL / Compañía de galletas". Other clients and confirmed contact unchanged. Original asset unchanged; HTML-only, no PDF export or build. Risk: none.
