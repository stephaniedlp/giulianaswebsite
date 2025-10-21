# 🎨 Portfolio & Blog - Proyecto Completo

Portfolio moderno con efectos parallax y blog con glass effect, inspirado en portfolios profesionales de la industria creativa.

## 📁 Estructura del Proyecto

```
portfolio-project/
├── index.html          # Página principal del portafolio
├── blog.html           # Página del blog (lista de posts)
├── post.html           # Página del post individual
├── css/
│   └── style.css       # Todos los estilos (portafolio + blog + post)
├── js/
│   └── script.js       # JavaScript con efectos parallax
├── images/             # Carpeta para tus imágenes
└── README.md           # Este archivo
```

## ✨ Características

### Portafolio
- ✅ Hero section con animaciones
- ✅ Sección About con grid responsive
- ✅ Galería de trabajos
- ✅ Sección de contacto
- ✅ Efectos parallax en scroll
- ✅ Navegación fija con animaciones
- ✅ Scroll reveal animations

### Blog
- ✅ Grid de posts con glass effect
- ✅ Post featured destacado
- ✅ Cards con hover effects
- ✅ Diseño responsive
- ✅ Botón "Load More"

### Post Individual
- ✅ Layout de lectura optimizado
- ✅ Sección de autor
- ✅ Posts relacionados
- ✅ Tipografía legible
- ✅ Glass effect cards

## 🚀 Cómo Usar

### 1. Personalización Básica

Edita estos elementos en los archivos HTML:

**index.html:**
- Cambia "TU NOMBRE" por tu nombre
- Actualiza el contenido de About
- Agrega tus proyectos en la sección Work
- Cambia el email de contacto

**blog.html y post.html:**
- Actualiza los posts con tu contenido
- Cambia fechas y títulos
- Agrega tus imágenes

### 2. Colores y Estilos

En `css/style.css` busca la sección `:root` y modifica las variables:

```css
:root {
    --color-primary: #1a1a1a;     /* Color principal */
    --color-accent: #0066ff;       /* Color de acento */
    --color-bg: #f5f5f5;           /* Color de fondo */
}
```

### 3. Fuentes

Para usar las fuentes Goldman y Encode Sans Expanded:

1. Descarga las fuentes (ya las tienes del proyecto anterior)
2. Crea una carpeta `fonts/` en la raíz
3. Agrega al inicio de `style.css`:

```css
@font-face {
    font-family: 'Goldman';
    src: url('../fonts/Goldman/Goldman-Bold.ttf') format('truetype');
    font-weight: 700;
}

@font-face {
    font-family: 'Encode Sans Expanded';
    src: url('../fonts/Encode_Sans_Expanded/EncodeSansExpanded-Regular.ttf') format('truetype');
    font-weight: 400;
}
```

### 4. Imágenes

Reemplaza los placeholders con tus imágenes:

```html
<!-- Antes -->
<div class="image-placeholder">Tu Foto</div>

<!-- Después -->
<img src="images/tu-foto.jpg" alt="Tu Nombre">
```

### 5. Efectos Parallax

Los efectos ya están configurados. Para agregar parallax a un elemento:

```html
<div class="parallax-card" data-speed="0.8">
    <!-- Tu contenido -->
</div>
```

El valor `data-speed` controla la velocidad (0.1 = lento, 1.0 = rápido)

## 🎯 Optimización

### Performance
- Comprime tus imágenes antes de subirlas
- Usa formatos modernos (WebP, AVIF)
- Considera lazy loading para imágenes

### SEO
- Agrega meta tags en el `<head>`:

```html
<meta name="description" content="Tu descripción">
<meta property="og:title" content="Tu Nombre - Portfolio">
<meta property="og:image" content="ruta/a/tu/imagen.jpg">
```

## 📱 Responsive

El sitio es completamente responsive. Breakpoints:
- Desktop: > 968px
- Tablet: 640px - 968px
- Mobile: < 640px

## 🌐 Deployment

### GitHub Pages
1. Sube el proyecto a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama `main`
4. Tu sitio estará en: `tu-usuario.github.io/nombre-repo`

### Netlify/Vercel
1. Arrastra la carpeta del proyecto
2. Deploy automático
3. Listo!

## 🎨 Personalización Avanzada

### Agregar Nuevas Secciones
Sigue este patrón:

```html
<section id="nueva-seccion" class="parallax-section">
    <div class="parallax-bg" data-speed="0.5"></div>
    <div class="container">
        <!-- Tu contenido -->
    </div>
</section>
```

### Modificar Animaciones
En `js/script.js` encontrarás todas las funciones de animación.
Puedes ajustar velocidades, delays y efectos.

## 📝 Checklist Pre-Launch

- [ ] Reemplazar "TU NOMBRE" en todos los archivos
- [ ] Agregar tu contenido real
- [ ] Subir tus imágenes
- [ ] Configurar fuentes personalizadas
- [ ] Actualizar meta tags
- [ ] Probar en diferentes dispositivos
- [ ] Verificar links de redes sociales
- [ ] Optimizar imágenes
- [ ] Probar formularios de contacto

## 🆘 Soporte

Si tienes problemas:
1. Verifica la consola del navegador (F12)
2. Asegúrate de que las rutas de archivos sean correctas
3. Comprueba que todos los archivos estén en su lugar

## 📄 Licencia

Libre para uso personal y comercial.

---

**¡Buena suerte con tu portfolio!** 🚀
