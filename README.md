# Facturas en orden

Página de aterrizaje, de una sola vista, para el servicio de ordenar facturas y tickets de negocios pequeños en St. Gallen. El idioma es español de España, con trato de tú. Es HTML, Tailwind por CDN y un poco de JavaScript: no hay framework ni paso de compilación.

## Archivos

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Página principal: problema, cómo funciona, qué incluye, precio, sobre mí, preguntas y formulario. |
| `impressum.html` | Aviso legal. El texto aún no está: se lee «Texto pendiente». |
| `datenschutz.html` | Protección de datos. El texto aún no está: se lee «Texto pendiente». |
| `styles.css` | Color, foco visible, botones, tooltip del idioma y el acordeón. |
| `main.js` | Scroll suave, acordeón de las preguntas, aviso «Pronto en alemán» y envío del formulario. |
| `og-image.png` | Imagen provisional para Open Graph y Twitter. Las etiquetas `og:image` y `twitter:image` apuntan a este archivo. Sustitúyela antes de publicar si quieres otra. |

## Verla en local

Abre `index.html` en el navegador (doble clic, o arrástrala a una ventana). No hace falta instalar nada ni arrancar un servidor.

Hace falta internet para la fuente Inter (Google Fonts) y para Tailwind, que se carga desde su CDN. Sin conexión la página se puede leer, pero con menos estilo.

## Publicar más adelante en GitHub Pages

No hay ningún alojamiento activado: ni GitHub Pages, ni Netlify, ni Vercel. Cuando el propietario lo apruebe, y después de revisar los textos legales y los datos de contacto:

1. Fusiona el pull request en la rama `main`.
2. En GitHub, abre el repositorio y entra en **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. En **Branch**, elige `main` y la carpeta **`/ (root)`**. Guarda.
5. Espera a que quede publicada en `https://gpastoraltarriba.github.io/facturas-en-orden/`.
6. Cuando tenga una dirección definitiva, conviene cambiar `og:image` y `twitter:image` a la URL absoluta de `og-image.png`.

## Placeholders, antes de publicar

- **WhatsApp.** En `index.html`, el botón está marcado como `PLACEHOLDER`. Es el único sitio del número y ahora apunta a `https://wa.me/41000000000`. Cámbialo solo ahí.
- **Email.** En el pie de `index.html`, `impressum.html` y `datenschutz.html`, marcado como placeholder: `hola@ejemplo.ch`.
- **Textos legales.** `impressum.html` y `datenschutz.html` dicen «Texto pendiente».
- **Imagen para redes.** `og-image.png` es un gráfico provisional (marino y ámbar), no una foto.
- **Alemán.** El botón DE no cambia el idioma. Muestra «Pronto en alemán».

El formulario envía a Formspree: `https://formspree.io/f/xbgozlwo`. Con JavaScript se usa `fetch` (`Accept: application/json`) y el resultado se ve en la propia página. Sin JavaScript, el navegador hace un envío normal al mismo destino. Incluye el campo señuelo `_gotcha`.
