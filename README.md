# Portafolio de desarrollador

Sitio personal creado con React y Vite. El despliegue a GitHub Pages se realiza automáticamente con GitHub Actions.

## Ejecutar localmente

Necesitas Node.js 22 y npm instalados.

```bash
npm install
npm run dev
```

## Personalizar

- En `src/main.jsx`, cambia `Tu Nombre`, correo, habilidades, proyectos y enlaces.
- En `index.html`, actualiza el título y la descripción para buscadores.
- En `src/style.css`, puedes ajustar colores, tipografía y distribución.

## Publicar en GitHub Pages

1. Sube este repositorio a GitHub.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **GitHub Actions** como origen.
4. Haz push a `main` o `master`. El workflow construye el sitio y lo publica.

La URL aparecerá en **Settings → Pages** y en el resultado del workflow de GitHub Actions.
