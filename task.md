# Tareas de mejora del Portfolio

Flujo de trabajo: por cada tarea se crea una rama desde `develop`, se arregla, se commitea y se mergea en `develop`. Después se sigue con la siguiente.

## 🐛 Bugs

- [x] **1. `fix/hero-translations`**: el Hero ignora `t.description` y tiene el texto hardcodeado (con un `split('specialized in')` para detectar idioma). Usar la traducción y resaltar palabras clave desde `translations.js`.
- [ ] **2. `fix/techstack-light-mode`**: las tarjetas (`bg-[#0a0a0a]/50`) y los botones del carrusel (`bg-black/60`) quedan negros en modo claro. Usar los tokens del tema.
- [ ] **3. `fix/dark-class-on-html`**: la clase `dark` se aplica a un `<div>` y no a `<html>`, así que `body` y la scrollbar no cambian de tema.
- [ ] **4. `fix/portfolio-project-link`**: el proyecto "Portfolio" apunta a `github.com/lucasludu/Portfolio` (no existe). El repo real es `Porfolio`.

## ⚡ Performance

- [ ] **5. `perf/remove-loader`**: borrar el loader artificial de 1,2 s.
- [ ] **6. `perf/optimize-images`**: `favicon.png` (464 KB) y `carpentry.png` (700 KB) → WebP/redimensionadas. Agregar `loading="lazy"` a las imágenes de proyectos.

## 🧹 Código

- [ ] **7. `refactor/project-data`**: los datos de proyectos y experiencia se unen por índice entre el componente y `translations.js`. Unificar en un solo archivo de datos con `id`.
- [ ] **8. `chore/remove-dead-code`**: borrar `isExpanded`/`initialCount`/`ChevronUp` en Timeline, `ChevronDown`/`ChevronUp` en ProjectGrid, iconos sin usar en TechStack, `.timeline-line` en CSS y las dependencias `clsx` y `tailwind-merge`.
- [ ] **9. `a11y/skill-tags`**: los skills son `motion.button` sin acción. Cambiar por elementos no interactivos.
- [ ] **10. `chore/deploy-setup`**: sacar `dist/` del repo, agregarlo a `.gitignore` y sumar `gh-pages` + script `deploy`.

## 🌐 SEO y accesibilidad

- [ ] **11. `seo/meta-tags`**: agregar `description` y Open Graph / Twitter Card en `index.html`.
- [ ] **12. `a11y/html-lang`**: actualizar `<html lang>` al cambiar idioma.
- [ ] **13. `a11y/reduced-motion`**: respetar `prefers-reduced-motion` (`MotionConfig reducedMotion="user"`).
- [ ] **14. `feat/system-theme`**: usar `prefers-color-scheme` como tema inicial si no hay uno guardado.
- [ ] **15. `fix/section-ids`**: `#educación` → `#educacion`.
- [ ] **16. `chore/eslint`**: agregar ESLint con reglas de React.

## 💡 Extras (requieren decisión / material del autor)

- [ ] **17.** Reemplazar las fotos de Unsplash por capturas reales de cada proyecto (hay una foto repetida en dos proyectos de agentes).
- [ ] **18.** Formulario de contacto (Formspree o similar) o botón "copiar mail".
- [ ] **19.** Destacar 2-3 proyectos principales con formato problema → solución → resultado.
