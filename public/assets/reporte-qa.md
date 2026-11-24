# Reporte QA Front End y Accesibilidad — TP3 Grupo 24
**Rama auditada:** `etapa-2-diagramas` · **Fecha:** 24/11/2026  
**Auditor:** Antigravity (modo solo lectura — sin modificaciones)

---

## Resumen ejecutivo

| Categoría | Cantidad |
|---|---|
| 🔴 Críticos | 4 |
| 🟡 Mejoras visuales / UX | 7 |
| ✅ Sin observaciones | Accordion ARIA, keyboard, lógica R3/R4 |

---

## 🔴 Hallazgos Críticos

### C1 — Sin favicon en `index.html`
**Archivo:** [`index.html`](file:///home/pedro/Repos/TP3_Grupo24/index.html#L3-L7)  
**Líneas:** 3–7

`index.html` no tiene ninguna etiqueta `<link rel="icon" …>`. Los navegadores hacen una petición automática a `favicon.ico` en la raíz del dominio y el ícono de pestaña queda en blanco. En producción sobre GitHub Pages u otro subdirectorio la petición 404 aparece visible en la consola y es criterio de evaluación básico de identidad visual.

```html
<!-- Falta esta línea en <head> -->
<link rel="icon" type="image/png" href="/assets/logo-studymatch.png" />
```

> [!CAUTION] Si el sitio se despliega en una **subruta** (ej. `https://usuario.github.io/TP3_Grupo24/`), la ruta absoluta `/assets/…` **también** falla. Se necesita `base` en `vite.config.js` **o** usar rutas relativas.

---

### C2 — Ruta del logo incompatible con despliegue en subruta (GitHub Pages)
**Archivo:** [`src/components/StudyMatchLogo.jsx`](file:///home/pedro/Repos/TP3_Grupo24/src/components/StudyMatchLogo.jsx#L9)  
**Línea:** 9

```jsx
src="/assets/logo-studymatch.png"
```

La ruta comienza con `/` (absoluta desde la raíz del dominio). En GitHub Pages el repositorio se sirve en `https://peterbusta.github.io/TP3_Grupo24/`, por lo que la URL resuelta es `https://peterbusta.github.io/assets/logo-studymatch.png` → **404 en producción**.

**Solución A (recomendada):** Agregar `base: '/TP3_Grupo24/'` en `vite.config.js` y usar `import logoUrl from '/public/assets/logo-studymatch.png'` procesado por Vite.  
**Solución B:** Dejar la imagen en `src/assets/` e importarla como módulo JS en el componente (`import logo from '../assets/logo-studymatch.png'`), que es la forma idiomática de Vite.

> [!IMPORTANT] Este hallazgo se confirma también para el favicon (C1). Ambos comparten la misma causa raíz.

---

### C3 — Textos provisorios visibles y renderizados en el sitio final
**Archivos y líneas:**

| Texto visible en el browser | Archivo | Línea |
|---|---|---|
| `"Aporte individual a completar por el equipo."` (×4) | [`src/data/content.js`](file:///home/pedro/Repos/TP3_Grupo24/src/data/content.js#L134-L149) | 134, 139, 144, 149 |
| `"Espacio destinado a registrar los aportes individuales de cada integrante en las próximas etapas del trabajo práctico."` | [`src/components/TeamSection.jsx`](file:///home/pedro/Repos/TP3_Grupo24/src/components/TeamSection.jsx#L11-L12) | 11–12 |

Los cuatro campos `contribution` de los integrantes muestran texto de relleno idéntico. La sección de equipo indica explícitamente que el contenido se registrará "en las próximas etapas", lo que evidencia trabajo incompleto al visitante. Esto compromete la consigna ("evidencia de revisión cruzada e ítems individuales").

> [!WARNING] Aunque la palabra "Etapa 1" fue correctamente eliminada del JSX en el commit de Etapa 2, estos textos provisorios permanecen y son **igualmente visibles** al usuario final.

---

## 🟡 Mejoras Visuales / UX

### M1 — `scroll-margin-top` de `.hero` (#inicio) podría ser insuficiente
**Archivo:** [`src/styles/global.css`](file:///home/pedro/Repos/TP3_Grupo24/src/styles/global.css#L204-L208)  
**Línea:** 204–208

El elemento con `id="inicio"` es la `<section class="hero">`. Esa clase **no tiene** `scroll-margin-top` definido. Cuando el usuario hace clic en "Inicio" del menú sticky, el navegador intenta anclar al borde superior del hero, pero como el header tiene `min-height: 82px` (l. 68) + `10px` de padding (l. 69), la altura real del header es **≈ 102 px**. El hero ocupa toda la vista así que el solapamiento no produce un efecto de "título tapado" aquí, pero es inconsistente con la política de las demás secciones y puede volverse visible si el hero se reduce.

**Las demás secciones están bien cubiertas:**  
- `.section` → `scroll-margin-top: 88px` (l. 161): ligeramente corto para un header de ~102 px; cubriría bien si el contenido del header se comprime, pero con padding de 10px + min-height 82px puede faltar ~14 px en los títulos de `#identidad`, `#equipo` y el contenedor de R3/R4.  
- `.rule-card` → `scroll-margin-top: 96px` (l. 397): más generoso, ~6px de margen.

**Recomendación:** Usar `scroll-margin-top: 108px` en `.section` y en `.hero` para garantizar que el header nunca tape el contenido en ningún viewport entre 1024px y 1920px.

---

### M2 — SVG del conector bifurcado con `viewBox` ancho fijo referenciado a 800 px
**Archivo:** [`src/components/FlowDiagram.jsx`](file:///home/pedro/Repos/TP3_Grupo24/src/components/FlowDiagram.jsx#L99-L153)  
**Líneas:** 99–153

```jsx
viewBox="0 0 800 76"
```

El SVG usa `width: 100%` y `height: auto` vía `.flow-split-svg` (l. 654–657 en `global.css`) con `width: 100%`, lo que **sí es responsive** — el `viewBox` se escala correctamente. Sin embargo, las coordenadas de las ramas (`L196 64`, `L604 64`) están codificadas en proporción a 800 px de viewBox. En pantallas muy anchas (1920px) el SVG se estira sin problema, pero los brazos de las ramas SÍ/NO apuntan a `x=196` y `x=604`, que son el 24.5 % y el 75.5 % del ancho — coinciden con el centro de cada columna del grid `flow-branches` de 2 columnas. Esto es correcto **mientras `.flow-canvas` tenga `max-width: 860px`** (l. 543–545).

**Riesgo real:** Si alguna vez se elimina o amplía ese `max-width`, el SVG se expande pero las columnas del grid también y las flechas apuntarán fuera de las cajas. No es un bug hoy, pero es frágil.

**Sin scroll horizontal detectado en desktop:** el `overflow-x: hidden` del `body` (l. 18) y el `max-width` del contenedor contienen correctamente.

---

### M3 — Accordion: `:focus-visible` global no es específico del trigger
**Archivo:** [`src/styles/global.css`](file:///home/pedro/Repos/TP3_Grupo24/src/styles/global.css#L41-L44)  
**Líneas:** 41–44

```css
:focus-visible {
  outline: 3px solid var(--color-sky-500);
  outline-offset: 2px;
}
```

El estilo de foco es global y funciona, pero se aplica con `outline` sobre el `<button class="accordion__trigger">`, cuyo borde exterior tiene `border-radius` heredado del contenedor `.accordion { overflow: hidden; border-radius: var(--radius-md) }`. El `overflow: hidden` del contenedor **recorta el outline**, volviéndolo invisible o parcialmente visible en la esquina superior cuando el trigger está en posición cerrada.

**Recomendación:** Agregar `accordion__trigger:focus-visible { outline-offset: -3px; }` o bien `box-shadow: inset 0 0 0 3px var(--color-sky-500)` como alternativa que respeta el recorte.

---

### M4 — Accordion: panel con montaje/desmontaje condicional (`isOpen && …`) en vez de `hidden`
**Archivo:** [`src/components/AccordionDetail.jsx`](file:///home/pedro/Repos/TP3_Grupo24/src/components/AccordionDetail.jsx#L24-L78)  
**Líneas:** 24–78

El panel se monta y desmonta del DOM según `isOpen`. Esto cumple ARIA (`aria-controls` referencia un ID que existe solo cuando abierto), pero los lectores de pantalla menos robustos pueden perder el foco al cerrarlo o no anunciar correctamente la asociación `aria-controls` cuando el elemento no existe. El patrón recomendado por APG (ARIA Authoring Practices) es mantener el elemento en el DOM con `hidden` o `aria-hidden="true"` y `display:none`.

```jsx
// Patrón más robusto:
<div id={panelId} role="region" aria-labelledby={buttonId}
  hidden={!isOpen} className="accordion__panel">
```

---

### M5 — Falta `lang` en `<html>` correcto pero sin `<meta name="description">`
**Archivo:** [`index.html`](file:///home/pedro/Repos/TP3_Grupo24/index.html#L2-L7)  
**Líneas:** 2–7

`lang="es"` está correctamente declarado. Sin embargo, falta:
- `<meta name="description" content="…">` — afecta SEO y accesibilidad para usuarios que leen metadatos.
- `<meta property="og:title" …>` — no imprescindible para un TP, pero útil si se comparte en redes.

Ambos son de impacto menor en el contexto académico, pero documentarlos en el README muestra conciencia de las buenas prácticas.

---

### M6 — Texto del icono del accordion mezcla estado semántico y decoración visual
**Archivo:** [`src/components/AccordionDetail.jsx`](file:///home/pedro/Repos/TP3_Grupo24/src/components/AccordionDetail.jsx#L19-L21)  
**Líneas:** 19–21

```jsx
<span className="accordion__icon" aria-hidden="true">
  {isOpen ? '▲ Ocultar detalle' : '▼ Desplegar detalle'}
</span>
```

El span tiene `aria-hidden="true"` (correcto para ocultar del lector de pantalla), pero visualmente el texto "Ocultar detalle" / "Desplegar detalle" cumple la función de label secundario. Dado que el `<button>` padre ya recibe `{label}` como texto accesible, no es un bug de accesibilidad, pero sí una inconsistencia: el texto visible para videntes no coincide con lo que anuncia el lector de pantalla. Recomendación: mantener solo el ícono (▲/▼) en el `aria-hidden` span, y agregar el texto a la parte visible del botón.

---

### M7 — Gestión de teclado en accordion: correcta pero sin `role="button"` explícito ni `tabindex`
**Archivo:** [`src/components/AccordionDetail.jsx`](file:///home/pedro/Repos/TP3_Grupo24/src/components/AccordionDetail.jsx#L10-L22)  
**Líneas:** 10–22

El elemento es un `<button type="button">` nativo — correcto. Enter y Space funcionan por defecto en botones HTML. No se requiere `onKeyDown` adicional. No hay observación de bug aquí; se documenta como **verificado y correcto** para el README.

---

## ✅ Verificaciones sin hallazgos

| Punto | Estado |
|---|---|
| `aria-expanded` en AccordionDetail | ✅ Implementado correctamente (l. 14) |
| `aria-controls` → `panelId` en panel abierto | ✅ Correcto |
| `role="region"` + `aria-labelledby` en panel | ✅ Correcto |
| `type="button"` en trigger | ✅ Correcto |
| Enter/Space en `<button>` nativo | ✅ Nativo, sin código extra necesario |
| Sentencia literal R3 en `blockquote` | ✅ Texto idéntico al S13-B |
| Sentencia literal R4 en `blockquote` | ✅ Texto idéntico al S13-B |
| Diferenciación visual Regla original / Diseño Grupo 24 | ✅ Colores, trazo sólido/discontinuo, badges y `flow-source--rule` / `flow-source--design` / `flow-source--human` |
| Intervención humana distinguida en ambos flujos | ✅ Badge explícito en rama NO de R3 y R4 |
| Ancla `#identidad` en NAV_ITEMS | ⚠️ Ausente en `content.js` (no se navega desde el menú) — sin hallazgo de consigna, pero inconsistencia menor |
| Texto "Etapa 1", "stage-banner", "stage-badge" en JSX renderizado | ✅ Eliminados en commit `60fbc09` |
| Scroll horizontal en desktop por SVG | ✅ Contenido por `overflow-x: hidden` + `max-width: 860px` |
| Texto dentro de nodos SVG desbordando | ✅ No hay `<text>` en nodos de flujo (usan HTML divs, no SVG text) |

---

## Recomendación de prioridad para Etapa 3

```
INMEDIATO (bloquea deploy correcto):
  C1 → Agregar favicon en index.html
  C2 → Configurar base en vite.config.js O mover logo a src/assets/ e importar como módulo
  C3 → Completar aportes individuales en content.js (l. 134–149) y el subtítulo de TeamSection

ANTES DE ENTREGA (documentar en README como hallazgo de revisión cruzada):
  M1 → scroll-margin-top: 108px en .section y .hero
  M3 → Corregir focus-visible recortado por overflow:hidden del accordion
  M4 → Reemplazar montaje condicional por hidden/aria-hidden en el panel
```
