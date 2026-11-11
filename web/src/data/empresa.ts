// Fuente única de los datos de la empresa y del contenido de la página de inicio.
// Si el cliente confirma o cambia algo, se edita aquí y no en los componentes.
// Textos tomados de docs/contenido-cliente.md (catálogo vigente del 2026-11-10).
// Lo que falta confirmar está listado en docs/pendientes-web.md.

import type { ImageMetadata } from 'astro';
import { ruta } from '../lib/rutas';

import fotoHero from '../assets/fotos/hero-tecnico-jd.jpg';
import fotoCamara from '../assets/fotos/servicio-camara.jpg';
import fotoFugas from '../assets/fotos/servicio-fugas.jpg';
import fotoLimpieza from '../assets/fotos/servicio-limpieza.jpg';
import fotoMateriales from '../assets/fotos/servicio-materiales.jpg';
import fotoObras from '../assets/fotos/servicio-obras.jpg';
import fotoPlanos from '../assets/fotos/servicio-planos.jpg';
import logoComfama from '../assets/clientes/cliente-comfama.svg';
import logoCrepes from '../assets/clientes/cliente-crepes-waffles.svg';
import logoNoel from '../assets/clientes/cliente-noel.png';
import logoPremium from '../assets/clientes/cliente-premium-plaza.png';
import logoVelez from '../assets/clientes/cliente-velez.png';

/** Nombre de un símbolo del sprite de `components/Iconos.astro` (sin el prefijo `i-`). */
export type Icono =
  | 'camera' | 'jet' | 'locate' | 'leak' | 'plan' | 'helmet' | 'store'
  | 'user' | 'gear' | 'chat' | 'calendar' | 'check-circle'
  | 'paint' | 'bulb' | 'drop' | 'bolt' | 'pipe' | 'tools' | 'brick' | 'sand' | 'layers';

// Celular sin indicativo: se reutiliza para tel:, WhatsApp y el texto visible.
const celular = '3014151888';

/** Arma un enlace de WhatsApp con un mensaje prellenado para saber desde dónde escribe el cliente. */
export const crearEnlaceWhatsApp = (mensaje: string) =>
  `https://wa.me/57${celular}?text=${encodeURIComponent(mensaje)}`;

export const empresa = {
  nombre: 'JD Mantenimientos',
  subtituloMarca: 'Planos y Diseños',
  razonSocial: 'JD Mantenimientos Planos y Diseños SAS',
  lema: 'Tu proyecto en buenas manos',
  descripcion:
    'Mantenimiento, diagnóstico y construcción de redes hidrosanitarias, planos 2D y 3D, obras civiles, plomería y venta de materiales de construcción en Medellín y Antioquia.',
  telefonoVisible: '301 415 18 88',
  telefonoHref: `tel:+57${celular}`,
  whatsappHref: crearEnlaceWhatsApp('Hola, quiero solicitar un servicio de JD Mantenimientos.'),
  whatsappMaterialesHref: crearEnlaceWhatsApp(
    'Hola, quiero cotizar materiales de construcción y ferretería.'
  ),
  correo: 'jdgerenciamantenimientos@gmail.com',
  direccion: 'Cr 52 #5-99',
  ciudad: 'Medellín',
  cobertura: 'Medellín y Antioquia',
  brochureUrl: ruta('brochure-jd.pdf'),
  brochureNombreDescarga: 'Brochure-JD-Mantenimientos.pdf',
} as const;

/** Enlaces del menú principal; el mismo arreglo alimenta el encabezado y el pie de página. */
export const navegacion = [
  { texto: 'Inicio', href: '#inicio' },
  { texto: 'Servicios', href: '#servicios' },
  { texto: 'Ferretería', href: '#ferreteria' },
  { texto: 'Cómo trabajamos', href: '#como-trabajamos' },
  { texto: 'Contacto', href: '#contacto' },
];

export const hero = {
  imagen: fotoHero,
  imagenAlt: 'Técnico de JD inspeccionando una red de alcantarillado con cámara de video.',
};

/** Tres ideas cortas bajo los botones del hero. */
export const pilaresHero: { icono: Icono; titulo: string; detalle: string }[] = [
  { icono: 'user', titulo: 'Atención', detalle: 'personalizada' },
  { icono: 'gear', titulo: 'Soluciones', detalle: 'integrales' },
  { icono: 'helmet', titulo: 'Materiales', detalle: 'para tu obra' },
];

export interface Servicio {
  icono: Icono;
  titulo: string;
  texto: string;
  imagen: ImageMetadata;
  imagenAlt: string;
}

// Orden y nombres del catálogo vigente del cliente. La ferretería tiene su propia sección.
export const servicios: Servicio[] = [
  {
    icono: 'jet',
    titulo: 'Limpieza y desobstrucción de tuberías',
    texto: 'Eliminamos grasa, raíces y sedimentos con equipos de alta presión para recuperar el flujo.',
    imagen: fotoLimpieza,
    imagenAlt: 'Equipo de limpieza a alta presión conectado a una tubería.',
  },
  {
    icono: 'camera',
    titulo: 'Inspección con cámara y localización de redes',
    texto: 'Vemos el interior de la tubería y rastreamos su recorrido sin romper pisos.',
    imagen: fotoCamara,
    imagenAlt: 'Monitor de una cámara de inspección mostrando el interior de un tubo.',
  },
  {
    icono: 'leak',
    titulo: 'Detección de fugas',
    texto: 'Ubicamos fugas ocultas con geófono y cámara térmica, sin demoler muros ni losas.',
    imagen: fotoFugas,
    imagenAlt: 'Técnico usando un geófono para detectar fugas en el piso.',
  },
  {
    icono: 'plan',
    titulo: 'Planos arquitectónicos e hidrosanitarios',
    texto: 'Levantamos y elaboramos planos en 2D y 3D para mantenimiento, trámites o ampliaciones.',
    imagen: fotoPlanos,
    imagenAlt: 'Planos técnicos impresos sobre una mesa de trabajo.',
  },
  {
    icono: 'helmet',
    titulo: 'Obras civiles y plomería',
    texto: 'Reformas, instalaciones y reparaciones hidráulicas con acabados de calidad.',
    imagen: fotoObras,
    imagenAlt: 'Obra civil en ejecución sobre una red sanitaria.',
  },
];

export const ferreteria = {
  imagen: fotoMateriales,
  imagenAlt: 'Estantería con tubería PVC, pinturas, bloques y herramientas.',
  // ponytail: categorías tomadas del diseño de referencia; pendiente que el cliente confirme su inventario real.
  categorias: [
    { icono: 'pipe', nombre: 'Tubería y accesorios PVC' },
    { icono: 'paint', nombre: 'Pinturas' },
    { icono: 'drop', nombre: 'Impermeabilizantes' },
    { icono: 'bolt', nombre: 'Material eléctrico' },
    { icono: 'bulb', nombre: 'Iluminación LED' },
    { icono: 'tools', nombre: 'Herramientas' },
    { icono: 'brick', nombre: 'Bloques' },
    { icono: 'sand', nombre: 'Material de playa' },
    { icono: 'layers', nombre: 'Drywall' },
  ] satisfies { icono: Icono; nombre: string }[],
};

/** Proceso de atención en cuatro pasos (sección "Cómo trabajamos"). */
export const pasos: { icono: Icono; titulo: string; texto: string }[] = [
  { icono: 'chat', titulo: 'Contáctanos', texto: 'Cuéntanos qué necesitas y te asesoramos.' },
  { icono: 'calendar', titulo: 'Agendamos', texto: 'Coordinamos la visita técnica o la entrega de materiales.' },
  { icono: 'gear', titulo: 'Ejecutamos', texto: 'Realizamos el trabajo con equipos especializados.' },
  { icono: 'check-circle', titulo: 'Proyecto listo', texto: 'Verificamos contigo que todo quede funcionando.' },
];

// Solo clientes con autorización para mostrar su marca (ver docs/contenido-cliente.md).
// `fondoOscuro`: el logo original es claro y solo se lee sobre azul marino (no se recolorea).
export const clientes: { nombre: string; logo: ImageMetadata; fondoOscuro?: boolean }[] = [
  { nombre: 'Premium Plaza', logo: logoPremium },
  { nombre: 'Comfama', logo: logoComfama },
  { nombre: 'Vélez', logo: logoVelez },
  { nombre: 'Noel', logo: logoNoel },
  { nombre: 'Crepes & Waffles', logo: logoCrepes, fondoOscuro: true },
];
