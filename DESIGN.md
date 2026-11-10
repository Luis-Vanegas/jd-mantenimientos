# DESIGN.md — JD Mantenimientos

## Overview

Material publicitario (brochure impreso y, después, página web) de una empresa de ingeniería sanitaria en Medellín: inspección con cámara, limpieza, localización de tuberías y fugas, planos hidrosanitarios y obras civiles.
El público principal son los administradores de copropiedades y empresas. Lo leen una sola vez y deciden si llaman.
El material tiene que sentirse técnico, confiable y preventivo, nunca como el aviso de un "maestro de obra".

**Dirección:** Técnico industrial.
**Por qué:** la marca vende criterio de ingeniero ("prevenir es más barato que reparar"). Por eso los visuales explican, con diagramas de tuberías en corte, iconos de equipos y comparativas, en vez de decorar.

## Restricciones

- Marca: logo metálico (plata sobre azul). Va siempre completo, nunca recoloreado.
- Impresión: tríptico carta horizontal (279.4 × 215.9 mm), plegado en rodillo; el panel que pliega hacia adentro mide 2 mm menos.
- Accesibilidad: contraste AA mínimo en todo texto impreso.
- No negociable: teléfono y WhatsApp siempre visibles en el panel de contacto.

## Color

| Token | Valor | Uso |
|---|---|---|
| `--navy` | `#06152D` | Portada y fondos oscuros |
| `--blue` | `#0E3B8C` | Azul de marca (tomado del fondo del logo) |
| `--blue-soft` | `#E8EEF8` | Superficies claras de apoyo |
| `--paper` | `#FFFFFF` | Paneles interiores |
| `--ink-1` | `rgb(10 22 40 / 100%)` | Texto principal sobre claro |
| `--ink-2` | `rgb(10 22 40 / 70%)` | Texto de apoyo sobre claro |
| `--blue-light` | `#93C5FD` | Resaltados y estados secundarios sobre azul marino |
| `--danger` | `#D64545` | Solo para fallas/colapso en diagramas |
| `--sediment` | `#8A6A3B` | Grasa y sedimento en diagramas |

Reglas:
- La paleta pública es azul rey, azul marino, azul claro, plata y blanco. No usar amarillo ni otros colores decorativos.
- El rojo y el sedimento son semánticos dentro de los diagramas: significan problema.

## Tipografía

- Familia única: `Archivo` (Google Fonts, eje de ancho 62–125 y pesos 400–800).
- Títulos en Archivo condensado (`font-stretch: 75%`, peso 700–800), con voz industrial y técnica.
- Cuerpo en Archivo normal 400–500.

| Rol | Tamaño (impreso) | Peso | Interlineado |
|---|---|---|---|
| Display portada | 30pt | 800 cond. | 1.0 |
| Título de panel | 17pt | 800 cond. | 1.05 |
| Subtítulo | 10.5pt | 700 | 1.2 |
| Cuerpo | 8.5pt | 400 | 1.4 |
| Meta / pie | 7pt | 500 | 1.3 |

## Espaciado y forma

- Margen interno de panel: 9 mm (zona segura para corte y pliegue).
- Ritmo base: 2 mm.
- Radios: 2 mm en tarjetas y 1 mm en etiquetas.
- Sin sombras: es impreso, y la jerarquía la dan el color y el tamaño.

## Guardarraíles

- No usar fotos de stock genéricas como relleno: cada imagen debe explicar algo (equipo, proceso o resultado).
- No mostrar logos de clientes sin su autorización escrita.
- Las imágenes generadas deben identificarse como ilustrativas; no deben presentarse como fotografías de trabajos reales de JD.
- No inventar cifras (costos, porcentajes, años de experiencia) que el cliente no haya dado.
- La web reutiliza estos mismos tokens y textos (`docs/contenido-cliente.md`).
