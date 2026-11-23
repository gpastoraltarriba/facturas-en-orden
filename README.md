# Facturas en orden

Página de aterrizaje, de una sola vista, para el servicio de ordenar facturas y tickets de negocios pequeños en St. Gallen. El idioma principal es español de España, con trato de tú. Hay una traducción al portugués de Portugal en `pt.html` (trato de você). Es HTML y un poco de JavaScript. El CSS de Tailwind va ya compilado: no hace falta el CDN ni un servidor para verla.

## Archivos

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Página principal en español: problema, cómo funciona, qué incluye, precio, sobre mí, preguntas y formulario. |
| `pt.html` | La misma página en portugués de Portugal. |
| `impressum.html` | Aviso legal (Impressum). |
| `datenschutz.html` | Política de privacidad (Datenschutzerklärung). |
| `assets/styles.css` | CSS ya compilado (Tailwind + estilos propios). Es el que cargan las páginas. |
| `src/input.css` | Fuente de esos estilos, antes de compilar. |
| `tailwind.config.js` | Configuración de Tailwind (colores, fuente, sombra). |
| `package.json` | Script para volver a generar el CSS. |
| `main.js` | Scroll suave, acordeón de las preguntas, aviso «Pronto en alemán» en las páginas legales y envío del formulario (textos en español o portugués según el idioma de la página). |
| `assets/fonts/` | Fuente Inter (400, 500 y 600) servida desde la propia web, con su licencia OFL. |
| `og-image.png` | Imagen provisional para Open Graph y Twitter. Las etiquetas `og:image` y `twitter:image` apuntan a este archivo. Sustitúyela antes de publicar si quieres otra. |

## Verla en local

Abre `index.html` en el navegador (doble clic, o arrástrala a una ventana). No hace falta instalar nada ni arrancar un servidor: `assets/styles.css` ya está en el repositorio.

No hace falta internet: la fuente Inter está en `assets/fonts/` (licencia OFL, en `assets/fonts/OFL.txt`). La web no carga nada de Google Fonts ni de otros servidores.

## Volver a generar el CSS

Si cambias clases en el HTML o `src/input.css`:

```bash
npm install
npm run build:css
```

Eso usa la CLI de Tailwind y escribe `assets/styles.css` minificado. Hay que volver a guardar ese archivo en git. No se usa el CDN de Tailwind.

## Publicar más adelante en GitHub Pages

No hay ningún alojamiento activado: ni GitHub Pages, ni Netlify, ni Vercel. Cuando el propietario lo apruebe:

1. Fusiona el pull request en la rama `main`.
2. En GitHub, abre el repositorio y entra en **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. En **Branch**, elige `main` y la carpeta **`/ (root)`**. Guarda.
5. Espera a que quede publicada en `https://gpastoraltarriba.github.io/facturas-en-orden/`.
6. `og:image` y `twitter:image` ya apuntan a la URL absoluta de GitHub Pages. Si cambia la dirección (dominio propio), actualízalas en `index.html` y `pt.html`.

## Contacto y qué queda provisional

- **Email.** `g.pastor.altarriba@gmail.com`, en el pie de las páginas y en los textos legales.
- **WhatsApp.** El botón abre `https://wa.me/41772020493`. En `index.html` el mensaje es «Hola Gerard, me interesa la revisión gratis de Facturas en orden». En `pt.html` es «Olá Gerard, tenho interesse na revisão gratuita do Facturas en orden». Cada enlace está una sola vez: el `href` de `#whatsapp` (comentario `WHATSAPP_URL`).
- **Idiomas.** En `index.html` y `pt.html`, la cabecera tiene el selector ES | PT. El idioma actual va marcado con `aria-current="page"`.
- **Imagen para redes.** `og-image.png` es un gráfico provisional (marino y ámbar), no una foto. La foto de «Sobre mí» también es un recuadro con la inicial.
- **Alemán.** En `impressum.html` y `datenschutz.html` el botón DE no cambia el idioma. Muestra «Pronto en alemán».

El formulario envía a Formspree: `https://formspree.io/f/xbgozlwo`. Con JavaScript se usa `fetch` (`Accept: application/json`) y el resultado se ve en la propia página. Sin JavaScript, el navegador hace un envío normal al mismo destino. Incluye el campo señuelo `_gotcha`.
