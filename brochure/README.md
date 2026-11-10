> Revisión actual: solo HTML para aprobación. El PDF guardado corresponde a la versión anterior y no se actualizará hasta que el cliente apruebe esta maquetación.

# Brochure de JD Mantenimientos — dos caras carta

## Fuente editable

- `index.html`: documento completo con textos, iconos vectoriales y estilos de impresión.
- `assets/`: fotografías independientes, logo JD original, tipografía local y QR vectorial.
- `assets/originals/`: originales PNG de las ocho fotografías generadas.
- `assets/client-logo-sources.json`: procedencia de los tres logos oficiales autorizados por el usuario.
- `archive/`: tríptico anterior conservado como historial.

La ruta web `/brochure` utiliza este mismo HTML. Las copias públicas de los recursos están en `web/public/brochure-assets/`. Al cambiar un recurso, actualizar su copia pública.

## Exportación

Abrir `index.html` y elegir **Imprimir / guardar PDF**. Configuración: carta vertical, escala 100%, sin márgenes ni encabezados/pies del navegador, gráficos de fondo activados. Son exactamente dos páginas, correspondientes al frente y al reverso de una sola hoja. Para imprimir a doble cara, voltear por el borde largo.

También puede ejecutar el exportador existente:

```powershell
powershell -ExecutionPolicy Bypass -File brochure\exportar-pdf.ps1
```

El exportador actualiza `brochure/brochure-jd.pdf` y la copia de la web. La entrega verificada está en `output/pdf/JD-Mantenimientos-Brochure-Carta.pdf`.

## Contenido y límites

El catálogo vigente y el compromiso fueron aportados por el cliente y están registrados en `docs/contenido-cliente.md`. Ingeniería sanitaria, inspección y mantenimiento siguen siendo el foco; ferretería es un complemento. Se incluyen Premium Plaza, Comfama, Vélez, NOEL y Crepes & Waffles, por autorización expresa del usuario. El logo de NOEL fue suministrado por el usuario y se utiliza sin modificaciones.

Las fotografías son ilustrativas, generadas con IA; no documentan trabajos reales de JD. El logo JD no fue regenerado. Los logos de clientes provienen de sus sitios oficiales o, en el caso de NOEL, del archivo suministrado por el usuario; se conservan sin recolorear. La tipografía Archivo se distribuye con su licencia SIL OFL en los recursos.

El QR fue codificado para `https://wa.me/573246626737` y decodificado independientemente desde el PDF renderizado. No se dibujó con IA.

La página tiene arte hasta el borde y tamaño final carta. La impresión doméstica necesita una impresora sin bordes o puede dejar margen físico. No incluye 3 mm adicionales de sangrado, marcas de corte ni conversión CMYK: si la imprenta los exige, preparar una variante a partir de esta fuente, sin usar los PNG de vista previa como arte final.

## Comprobaciones de esta entrega

- Dos páginas de 612 × 792 pt.
- Texto seleccionable; seis servicios y compromiso coinciden con la última versión del cliente.
- Fotos y tipografía cargadas, sin errores JavaScript ni desbordamiento horizontal a 390 px.
- QR decodificado correctamente desde el PDF real.
- No se ejecutó ningún build.

## Distribución actual

La portada muestra la marca, el titular y una fotografía amplia del técnico, sin íconos ni resúmenes repetidos. La lista completa NUESTROS SERVICIOS está en el reverso, seguida de materiales, cinco clientes, contacto y compromiso de cierre.

## Clientes añadidos en la revisión HTML

Crepes & Waffles se añadió con el SVG de su sitio oficial, sin recolorear. NOEL utiliza el PNG entregado por el usuario, sin recrearlo ni modificarlo. La sección conserva Premium Plaza, Comfama y Vélez. Esta revisión combina la lista compacta del frente con la fotografía existente del técnico y sigue pendiente de aprobación antes de actualizar el PDF.

La restauración visual se realizó sobre el HTML sin revertir el correo, la dirección ni las incorporaciones de NOEL y Crepes & Waffles. El PDF sigue pendiente de aprobación.

En la revisión vigente no se usan íconos decorativos en ninguna cara; la lista de servicios aparece únicamente en el reverso, acompañada por fotografías.

Revisión de espacios: se retiró el módulo secundario de depósito/ferretería; el sexto servicio de comercialización permanece. Ese espacio se asignó a cinco clientes con logos más grandes. Se recuperó la frase descriptiva de portada sin la expresión retirada sobre romper pisos.
