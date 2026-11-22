# Facturas en orden

Página de aterrizaje, de una sola vista, para el servicio de ordenar facturas y tickets de negocios pequeños en St. Gallen. El idioma es español de España, con trato de tú. Es HTML, Tailwind por CDN y un poco de JavaScript: no hay framework ni paso de compilación.

## Archivos

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Página principal: problema, cómo funciona, qué incluye, precio, sobre mí, preguntas y formulario. |
| `impressum.html` | Aviso legal (Impressum). |
| `datenschutz.html` | Política de privacidad (Datenschutzerklärung). |
| `styles.css` | Color, foco visible, botones, tooltip del idioma y el acordeón. |
| `main.js` | Scroll suave, acordeón de las preguntas, aviso «Pronto en alemán» y envío del formulario. |
| `og-image.png` | Imagen provisional para Open Graph y Twitter. Las etiquetas `og:image` y `twitter:image` apuntan a este archivo. Sustitúyela antes de publicar si quieres otra. |

## Verla en local

Abre `index.html` en el navegador (doble clic, o arrástrala a una ventana). No hace falta instalar nada ni arrancar un servidor.

Hace falta internet para la fuente Inter (Google Fonts) y para Tailwind, que se carga desde su CDN. Sin conexión la página se puede leer, pero con menos estilo.

## Publicar más adelante en GitHub Pages

No hay ningún alojamiento activado: ni GitHub Pages, ni Netlify, ni Vercel. Cuando el propietario lo apruebe:

1. Fusiona el pull request en la rama `main`.
2. En GitHub, abre el repositorio y entra en **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. En **Branch**, elige `main` y la carpeta **`/ (root)`**. Guarda.
5. Espera a que quede publicada en `https://gpastoraltarriba.github.io/facturas-en-orden/`.
6. Cuando tenga una dirección definitiva, conviene cambiar `og:image` y `twitter:image` a la URL absoluta de `og-image.png`.

## Contacto y qué queda provisional

- **Email.** `gerard@glowishly.shop`, en el pie de las tres páginas y en los textos legales.
- **WhatsApp.** El botón abre `https://wa.me/41772020493` con el mensaje «Hola Gerard, me interesa la revisión gratis de Facturas en orden». El enlace está una sola vez: el `href` de `#whatsapp` en `index.html` (comentario `WHATSAPP_URL`).
- **Imagen para redes.** `og-image.png` es un gráfico provisional (marino y ámbar), no una foto. La foto de «Sobre mí» también es un recuadro con la inicial.
- **Alemán.** El botón DE no cambia el idioma. Muestra «Pronto en alemán».

El formulario envía a Formspree: `https://formspree.io/f/xbgozlwo`. Con JavaScript se usa `fetch` (`Accept: application/json`) y el resultado se ve en la propia página. Sin JavaScript, el navegador hace un envío normal al mismo destino. Incluye el campo señuelo `_gotcha`.
