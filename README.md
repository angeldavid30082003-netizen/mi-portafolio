# Mi portafolio — escritorio interactivo

Abre `index.html` en un navegador moderno para ver el portafolio. No necesita instalación ni compilación.

## Personaliza tu perfil

- El avatar animado usa las poses `assets/avatar-*.png`. Saluda al cargar y cambia su pose y mensaje al abrir una sección; las poses que señalan contenido se voltean para apuntar hacia las ventanas, que aparecen a su izquierda. Al terminar queda pensativo. Cambia el mapa de poses y los mensajes en `app.js`, y los movimientos en `avatar.css`.
- En `styles.css`, cambia `--wallpaper-image:none` por `--wallpaper-image:url("assets/mi-fondo.jpg")` y copia tu imagen a `assets/mi-fondo.jpg`. Ajusta `--wallpaper-overlay` para cambiar el oscurecimiento sobre la imagen.
- En `app.js`, cambia `Tu Nombre`, el texto de presentación, habilidades, correo y enlaces.
- En la sección `contact` de `app.js`, reemplaza `57TU_NUMERO`, `tu-usuario` y `hola@tudominio.com` por tu número de WhatsApp con código de país, tu usuario de GitHub, tu perfil de LinkedIn y tu correo real.
- Sustituye las tarjetas de ejemplo de `projects` con tus proyectos reales. El botón **Probar demo** abre una zona de prueba; puedes insertar ahí un iframe o enlazar la demo publicada. Para sitios externos, algunos servidores bloquean la vista embebida; en ese caso usa un enlace de apertura.
- La ventana Videos muestra la miniatura `assets/videos/soporte-ia-telegram-thumbnail.jpeg` como enlace directo a YouTube. Si cambias el video, actualiza `supportYoutubeUrl` al inicio de `app.js`. No subas el MP4 de 326 MB al repositorio: GitHub bloquea archivos individuales de más de 100 MiB.
- Copia materiales de tus proyectos a `assets/projects` y enlázalos en la lista de `app.js`. La ventana Archivos es de solo lectura para visitantes; solo se publica contenido que incluyas al actualizar el código y los archivos del sitio.
- Para publicar gratis: sube los archivos del sitio (sin videos pesados) a un repositorio público en GitHub y activa **Settings → Pages → Deploy from a branch → main → /(root)**.

## Estructura

```text
mi-portafolio/
├── index.html
├── styles.css
├── menu.css
├── avatar.css
├── app.js
└── assets/
    ├── projects/               # archivos, imágenes y demos
    ├── videos/                 # demostraciones en video
    ├── avatar-saludo.png       # bienvenida
    ├── avatar-sobre-mi.png     # presentación personal
    ├── avatar-proyectos.png    # señalando proyectos
    ├── avatar-archivos.png     # presentando archivos
    ├── avatar-videos.png       # mostrando videos
    ├── avatar-contacto.png     # invitando a contactar
    └── avatar-pensativo.png    # pose de descanso
```

La página incluye ventanas que se pueden arrastrar, minimizar y cerrar, una barra de tareas translúcida y movible, iconos de aplicaciones arrastrables (sus posiciones se guardan solo en el navegador local) y diseño adaptable a móvil. Cambia textos y enlaces de ejemplo antes de publicar.
