# Dossier online para el profesorado

Versión web del correo que San Blas Reserva Ambiental envía a los centros educativos para proponer la visita escolar del curso 2026–2027. Pensada para publicarse en:

**https://sanblasreservaambiental.org/dossier/**

## Archivos

| Ruta | Qué es |
|---|---|
| `index.html`, `estilo.css`, `dossier.js` | La página del dossier. Sin dependencias ni compilación: HTML, CSS y un poco de JavaScript (comparador de fotos y formulario que prepara el correo de reserva). |
| `img/` | Fotos de la Reserva (del dossier impreso y de los correos anteriores), logo y dos imágenes de la galería «Cien años después» (FEDAC). |
| `correo/correo-profesorado-2026-27.html` | El correo en HTML para pegar en la herramienta de envío. Maquetado con tablas y estilos en línea; arriba lleva el enlace «¿No ven bien este correo? Ábranlo en el navegador» hacia esta página. |
| `correo/correo-profesorado-2026-27.eml` | El mismo correo como borrador `.eml` (HTML + texto plano). Lleva la cabecera `X-Unsent: 1`, así que Outlook lo abre como un mensaje nuevo listo para añadir destinatarios y enviar. Desde Outlook se puede guardar como `.msg` si hace falta. |
| `correo/correo-profesorado-2026-27.txt` | Versión en texto plano. |

Las imágenes del correo apuntan a `https://sanblasreservaambiental.org/dossier/img/…`, así que **se verán cuando esta web esté publicada**.

## Publicación

Activar GitHub Pages en *Settings → Pages* con la rama `main` y la carpeta raíz. Como la organización ya sirve `sanblasreservaambiental.org`, el dossier quedará en `/dossier/`. No hace falta `CNAME` en este repositorio.

## Enlaces a materiales

Todos los recursos (cuadernos, guías, concurso y galería) se enlazan a sus URL publicadas en `https://sanblasreservaambiental.org/materiales/`, sin copiar archivos de ese repositorio.

## Lengua

Todo el texto está en español de Canarias: *ustedes* en lugar de *vosotros* y léxico de las islas (*guagua*, *destiladera*…).
