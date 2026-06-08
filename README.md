# Archivo de Lore — tu mundo de Warhammer

Web estática (sin servidor, sin base de datos, sin dependencias) para ir
recopilando el trasfondo de tu mundo: facciones, personajes, planetas,
conflictos, reliquias, bestiario, una cronología y un buscador.

Estética gótico-imperial inspirada en Warhammer 40.000.

---

## 1. Cómo verla en tu ordenador

**Opción rápida:** doble clic en `index.html` (se abre en el navegador).

**Opción recomendada** (para que todo funcione igual que en internet) —
levantar un mini-servidor local desde esta carpeta:

```powershell
python -m http.server 4321
```

Y abrir <http://localhost:4321> en el navegador.

---

## 2. Cómo publicarla GRATIS en internet

Las tres son gratuitas y válidas. De más fácil a más técnica:

### A) Netlify Drop  ← la más sencilla, sin saber nada técnico
1. Entra en <https://app.netlify.com/drop>
2. Arrastra **toda la carpeta `code`** a la zona indicada.
3. Te da una URL pública al instante (p. ej. `tu-mundo.netlify.app`).
4. Para que sea permanente y poder cambiarle el nombre, crea una cuenta
   gratuita cuando te lo pida.

> Para actualizar el contenido más adelante, vuelves a arrastrar la carpeta.

### B) GitHub Pages  ← gratis y permanente, ideal si lo iremos actualizando
1. Crea una cuenta en <https://github.com> (gratis).
2. Crea un repositorio y sube estos archivos.
3. En *Settings → Pages*, elige la rama `main` y carpeta `/root`.
4. Tu web quedará en `https://TU-USUARIO.github.io/NOMBRE-REPO/`.

### C) Cloudflare Pages
Similar a las anteriores, en <https://pages.cloudflare.com>.

> ¿No quieres pelearte con esto? Dímelo y te guío paso a paso, o lo
> preparamos juntos cuando tengas el contenido listo.

---

## 3. Cómo añadir o cambiar el lore

**Todo el contenido vive en un solo archivo:** [`js/data.js`](js/data.js).
No hay que tocar nada más; al recargar la web se actualiza sola.

La forma más cómoda (la que acordamos): **me pasas el texto por el chat** y
yo lo coloco en su sitio con el formato correcto. Por ejemplo:

> "Añade una facción llamada *Los Centinelas de Hierro*, son guardianes
>  leales, su lema es '…', y su historia es: …"

Si algún día quieres editarlo tú, en `js/data.js` está todo explicado y
verás que cada ficha es muy fácil de copiar y rellenar. En los textos largos
puedes usar formato sencillo:

```
## Subtítulo          ### Sub-subtítulo
**negrita**   *cursiva*
- punto de lista
> Cita destacada
---  (línea separadora)
```

### Imágenes
Pon tus imágenes en la carpeta `assets/` y referencia el archivo en la ficha
con `image: "assets/mi-imagen.jpg"`. Si una ficha no tiene imagen, se muestra
un emblema temático automáticamente.

---

## Estructura del proyecto

```
code/
├─ index.html        ← página principal (no hace falta tocarla)
├─ css/styles.css    ← estética imperial (colores, tipografías)
├─ js/
│  ├─ data.js        ← ⭐ TODO EL LORE va aquí
│  └─ app.js         ← motor de la web (no hace falta tocarlo)
├─ assets/           ← tus imágenes
└─ README.md         ← este archivo
```

*Que ningún nombre se pierda en la ceniza.*
