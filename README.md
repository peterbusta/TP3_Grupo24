# StudyMatch · Dos sentencias, dos soluciones (TP3)

*Materia:* Desarrollo de Sistemas Web Front End — IFTS 29 (2026, 2do Cuatrimestre)  
*Equipo:* Grupo 24  
*Fecha de entrega:* 26/11/2026  

---

## Enlaces del proyecto
* *Repositorio:* https://github.com/Peterbusta/TP3_Grupo24
* *Landing publicada:* (Pendiente de publicación y verificación)

---

## Startup y bloque asignado
* *Startup:* StudyMatch. (proyecto creado por estudiantes del IFTS 16)
* *Área:* Educación y colaboración
* *Objetivo:* Red que conecta estudiantes por materias, intereses, necesidades y disponibilidad.
* *Bloque asignado:* S13-B · Invitación y consentimiento

### Sentencias originales
* *R3:* «Si hay un compañero compatible y el estudiante autoriza contactarlo, el sistema envía una invitación sin incorporarlo automáticamente a un grupo».
* *R4:* «Si ambas personas aceptan la invitación y mantienen una disponibilidad común, el sistema habilita el espacio para organizar el encuentro».

---

## Integrantes y aportes (Grupo 24)
* *Flavia Berzuini:* 
* *Pedro Matías Bustamante:* Creación y configuración inicial del repositorio grupal en GitHub (TP3_Grupo24).
* *Brian:*
* *Ludmila:*

### Revisión entre integrantes y mejora concreta
(Se documentará durante la Etapa 3 tras la revisión cruzada de la landing en desktop).

---

## Construcción 100% agéntica: herramientas y modelos de IA
Todo el código del proyecto fue generado y modificado exclusivamente mediante instrucciones a un agente de programación, sin edición manual de archivos.

* *Aplicación utilizada:* Antigravity
* *Modelo seleccionado:* Gemini 4 Neon High
* *Tecnologías generadas:* React + Vite (HTML, CSS y JavaScript puro, sin backend, bases de datos ni APIs externas).

### Registro del proceso por etapas
* *Etapa 1 — Estructura base (Completada):* Se entregó al agente el encargo inicial con la consigna del TP3, la identidad de StudyMatch (reconociendo su origen en el IFTS 16), el bloque S13-B y las sentencias literales R3 y R4. El agente creó el proyecto en React + Vite, organizó los componentes (Header, HeroSection, IdentitySection, RuleCard, AccordionDetail accesible con clic y teclado, TeamSection, Footer), reservó los espacios provisorios para el logo y los diagramas, y validó la compilación inicial sin errores.
* *Etapa 2 — Logo real, diagramas definitivos y desplegables (Completada):* Se solicitó al agente eliminar los textos de prueba y placeholders (LogoPlaceholder.jsx y DiagramPlaceholder.jsx) e integrar el logo original de StudyMatch (/assets/logo-studymatch.png mediante StudyMatchLogo.jsx) completo y sin recortes en encabezado y portada. Además, construyó FlowDiagram.jsx con dos diagramas gráficos independientes para R3 y R4 (flechas SVG, bifurcaciones rotuladas SÍ / NO y diferenciación visual entre regla original con trazo sólido y decisiones de diseño/casos límite del Grupo 24 con trazo discontinuo e intervención humana). Completó los desplegables accesibles en AccordionDetail.jsx con los 5 bloques requeridos (datos de entrada, herramienta conceptual del agente, condición, acción/resultado y contraste entre regla original y supuestos del grupo) y verificó npm run build sin errores.
* *Etapa 3 — Pruebas en desktop e iteración (En curso):*
  * **Herramienta y modelo de auditoría QA:** Gemini (`Gemini 4 Hydrogen`), utilizado para generar un checklist sistemático de verificación en navegador tomando como contexto el repositorio, sus archivos y la consigna del TP3.
  * **Instrucción (prompt) enviada:** «Quisiera que generaras un checklist de revisiones para verificar en el navegador que lo realizado hasta el momento en este trabajo no presente problemas de funcionamiento y visualización.»
  * **Checklist obtenido y aplicado en Brave (1366×768 / 1920×1080):**
    > 1. **Consola y Red (DevTools `F12` → pestañas *Console* y *Network*):**
    >    * Recargar con `Ctrl + Shift + R` (caché limpia).
    >    * En *Console*: 0 errores en rojo.
    >    * En *Network*: filtrar por `Img` y verificar que el logo de StudyMatch y el favicon carguen con estado `200` (y no `404` por rutas rotas tras el `build`).
    > 2. **Integridad del Logo y Desbordes Horizontales:**
    >    * Mirar el logo en el Header y en el Hero: verificar que no esté cortado ni deformado (especialmente los bordes del texto "StudyMatch." y el isotipo).
    >    * Probar hacer scroll horizontal con la rueda/trackpad o mirar la barra inferior del navegador: no debe aparecer scroll horizontal ni en `1920px` ni al achicar la ventana a `1024px` (notebooks chicas).
    > 3. **Legibilidad y Lógica de los Diagramas (R3 y R4):**
    >    * Hacer zoom al `100%` y leer cada caja de ambos diagramas como si no se conociera el proyecto:
    >      * ¿Se entiende dónde empieza y dónde termina cada recorrido?
    >      * ¿Las flechas apuntan exactamente al nodo correcto sin cruzarse sobre el texto?
    >      * ¿Están rotuladas las salidas `SÍ` y `NO` en ambas decisiones?
    > 4. **Navegación Exclusiva por Teclado (Sin tocar el mouse):**
    >    * Hacer clic en la barra de direcciones del navegador y apretar `Tab` repetidamente:
    >      * ¿Se ve claramente dónde está el foco (`outline` o borde resaltado) en cada enlace y botón?
    >      * Al llegar a los botones de los desplegables de R3 y R4, apretar `Enter` y después `Espacio`: deben abrir y cerrar sin scrollear brusco ni perder el foco.
    >      * Probar los enlaces ancla del menú superior (`Inicio`, `Sentencia R3`, etc.): al hacer clic, ¿el encabezado fijo tapa el título de la sección a la que salta? (Fallo clásico si falta `scroll-margin-top`).
    > 5. **Residuos de Etapas Anteriores y Coherencia Textual:**
    >    * Apretar `Ctrl + F` en la página y buscar las palabras: `Etapa`, `prueba`, `pendiente`, `placeholder`, `lorem`, `TODO`. Si aparece alguna en el cuerpo de la landing, hay que limpiarla.
    >    * Leer en voz alta las dos sentencias literales (R3 y R4) y compararlas palabra por palabra contra el PDF de la cátedra (tildes, signos de puntuación y conectores `"y"` / `"sin incorporarlo"`).
  * **Resultado de la verificación humana:**
    1. **Consola y Red:** No se presentan errores en la consola del navegador. En *Network* aún no figura el favicon porque todavía no fue incorporado, pero el logo carga correctamente una primera vez con estado `200` y luego con `304` (reutilización desde caché).
    2. **Integridad del Logo y Desbordes Horizontales:** Se verifica en pantallas *Mobile S* (`320px`), *Mobile M* (`375px`), *Mobile L* (`425px`), *Tablet* (`768px`), *Laptop S* (`1024px`) y *Laptop L* (`1440px`) que el logotipo en el Header y en el Hero no presenta desbordes, cortes ni deformaciones. Asimismo, se verifica ausencia total de scroll horizontal en *Laptop S* (`1024px`), *Laptop L* (`1440px`) y *Laptop XL* (`1920px`).
    3. **Legibilidad y Lógica de los Diagramas (R3 y R4):**
       * En *Mobile S* (`320px`) se detecta un desborde lateral hacia la derecha del texto `"Desplegar / Ocultar detalles"`, quedando recortado por el borde de la pantalla (solucionable apilando las palabras una sobre otra en esa resolución). En el resto de las resoluciones no hay desbordes de texto.
       * En vistas móviles (menores a `720px`), la bifurcación hacia la rama `NO` resulta poco intuitiva visualmente; se propone como mejora que la flecha hacia el `NO` recorra el costado lateral del bloque `SÍ` hacia abajo para evidenciar las dos salidas, o bien evaluar una vista simplificada donde al hacer clic en cada nodo se despliegue el texto completo.
    4. **Navegación Exclusiva por Teclado:** Funciona correctamente en todos los flujos utilizando `Tab`, `Enter` y `Space`; el foco recorre los botones, redirige a las anclas esperadas y abre/cierra los desplegables sin saltos bruscos ni superposiciones con el encabezado.
    5. **Residuos de Etapas Anteriores:** Persisten algunas etiquetas provisorias en el contenido, por lo que su limpieza queda registrada para la siguiente iteración junto con la carga definitiva de los aportes del equipo.
  * **Revisión agéntica con Antigravity:**
    * Con la extensión de Antigravity para Visual Studio Code, utilizando el modelo `Claude Sonnet 4.6 (Thinking)` sobre el repositorio local del proyecto, se ejecutó una auditoría técnica mediante un prompt elaborado con apoyo de `Gemini 4 Hydrogen`.
    * **Prompt enviado:**
      > «Actuá como un auditor de QA Front End y Accesibilidad. **No modifiques ningún archivo todavía.** Revisá todo el código fuente de la rama actual (`src/`, `public/` e `index.html`) y generá un reporte técnico breve con los problemas reales o riesgos que encuentres en estos 6 puntos:
      > 1. **Rutas de assets y producción:** Verificá que todas las imágenes (logo de StudyMatch y favicon en `index.html`) usen rutas compatibles con `vite build` y no fallen al desplegar en subrutas o en producción.
      > 2. **Desbordes y SVG en desktop (`1024px` a `1920px`):** Revisá `FlowDiagram.jsx` y los archivos CSS para detectar anchos fijos (`width`), `viewBox` mal proporcionados, textos dentro de nodos SVG que puedan salirse de su caja o generar scroll horizontal en pantallas desktop.
      > 3. **Anclas y header fijo:** Comprobá si las secciones destino (`#inicio`, `#regla-r3`, `#regla-r4`, `#equipo`) tienen `scroll-margin-top` suficiente para que el header fijo no tape los títulos al navegar desde el menú.
      > 4. **Accesibilidad real en desplegables (`AccordionDetail.jsx`):** Verificá atributos ARIA (`aria-expanded`, `aria-controls`, `role="region"`), manejo correcto de teclado (`Enter` / `Space`) y estilos visibles de `:focus-visible`.
      > 5. **Fidelidad lógica respecto a la consigna:** Contrastá los textos de R3 y R4 contra las sentencias literales del bloque S13-B y verificá que en ambos flujos se distinga claramente la regla original de los supuestos de diseño del Grupo 24 y la intervención humana.
      > 6. **Textos residuales:** Buscá cualquier mención provisoria ("Etapa 1", "Etapa 2", "pendiente", "prueba") que haya quedado en el código renderizado.
      >
      > Listá únicamente los hallazgos concretos indicando archivo y línea, clasificados en **Críticos** (rompen consigna o visualización) y **Mejoras visuales/UX** (ideales para documentar nuestra revisión grupal en el README).»
    * **Resultado de la auditoría (reporte devuelto por `Claude Sonnet 4.6 (Thinking)`):**
      > ### Reporte QA Front End y Accesibilidad — TP3 Grupo 24
      > **Rama auditada:** `etapa-2-diagramas` · **Fecha:** 24/11/2026  
      > **Auditor:** Antigravity (modo solo lectura — sin modificaciones)
      >
      > #### Resumen ejecutivo
      > | Categoría | Cantidad |
      > |---|---|
      > | 🔴 Críticos | 4 |
      > | 🟡 Mejoras visuales / UX | 7 |
      > | ✅ Sin observaciones | Accordion ARIA, keyboard, lógica R3/R4 |
      >
      > #### 🔴 Hallazgos Críticos
      > * **C1 — Sin favicon en `index.html` (Líneas 3–7):** `index.html` no tiene ninguna etiqueta `<link rel="icon" …>`. Los navegadores hacen una petición automática a `favicon.ico` en la raíz del dominio y el ícono de pestaña queda en blanco. Si el sitio se despliega en una subruta (ej. GitHub Pages), la ruta absoluta `/assets/…` también falla; se necesita `base` en `vite.config.js` o usar rutas relativas.
      > * **C2 — Ruta del logo incompatible con despliegue en subruta (`src/components/StudyMatchLogo.jsx`, Línea 9):** `src="/assets/logo-studymatch.png"` comienza con `/` (absoluta desde la raíz del dominio), lo que genera un error 404 en subrutas como GitHub Pages. **Solución A:** Agregar `base: '/TP3_Grupo24/'` en `vite.config.js` y usar la ruta procesada por Vite. **Solución B:** Dejar la imagen en `src/assets/` e importarla como módulo JS (`import logo from '../assets/logo-studymatch.png'`).
      > * **C3 — Textos provisorios visibles y renderizados en el sitio final:**
      >   * `"Aporte individual a completar por el equipo."` (×4) en `src/data/content.js` (Líneas 134, 139, 144, 149).
      >   * `"Espacio destinado a registrar los aportes individuales de cada integrante en las próximas etapas del trabajo práctico."` en `src/components/TeamSection.jsx` (Líneas 11–12).
      >
      > #### 🟡 Mejoras Visuales / UX
      > * **M1 — `scroll-margin-top` de `.hero` (`#inicio`) insuficiente (`src/styles/global.css`, Líneas 204–208):** El header fijo mide ≈ 102 px y `.hero` no tiene `scroll-margin-top` (`.section` tiene `88px`). Recomendación: usar `scroll-margin-top: 108px` en `.section` y `.hero`.
      > * **M2 — SVG del conector bifurcado con `viewBox` referenciado a `800px` (`src/components/FlowDiagram.jsx`, Líneas 99–153):** Funciona correctamente mientras `.flow-canvas` mantenga `max-width: 860px` y `overflow-x: hidden` en `body`, pero sus coordenadas (`x=196` y `x=604`) dependen de ese ancho máximo.
      > * **M3 — Accordion: `:focus-visible` global recortado por `overflow: hidden` (`src/styles/global.css`, Líneas 41–44):** El `overflow: hidden` del contenedor `.accordion` recorta el `outline` superior cuando el trigger está cerrado. Recomendación: `accordion__trigger:focus-visible { outline-offset: -3px; }` o `box-shadow: inset 0 0 0 3px var(--color-sky-500)`.
      > * **M4 — Accordion: montaje/desmontaje condicional (`isOpen && …`) en lugar de `hidden` (`src/components/AccordionDetail.jsx`, Líneas 24–78):** Mantener el panel en el DOM con el atributo `hidden={!isOpen}` sigue el patrón recomendado por ARIA Authoring Practices.
      > * **M5 — Metadatos en `index.html` (Líneas 2–7):** `lang="es"` está correcto, pero falta `<meta name="description" content="…">`.
      > * **M6 — Texto del ícono del accordion (`src/components/AccordionDetail.jsx`, Líneas 19–21):** El `<span aria-hidden="true">` incluye texto visible (`Ocultar detalle` / `Desplegar detalle`) que no coincide exactamente con el label del lector de pantalla. Recomendación: dejar solo el glifo (`▲`/`▼`) en el span `aria-hidden` e integrar el texto en el botón.
      > * **M7 — Gestión de teclado en accordion (`src/components/AccordionDetail.jsx`, Líneas 10–22):** Usa `<button type="button">` nativo con soporte correcto para `Enter` y `Space` (verificado sin errores).
      >
      > #### ✅ Verificaciones sin hallazgos
      > * `aria-expanded`, `aria-controls`, `role="region"` y `aria-labelledby` correctamente implementados en `AccordionDetail.jsx`.
      > * Sentencias literales R3 y R4 idénticas al bloque S13-B en `blockquote`.
      > * Diferenciación visual clara entre regla original, decisiones de diseño del Grupo 24 e intervención humana en ambos flujos.
      > * Eliminación completa de `"Etapa 1"` y `"stage-banner"` en el JSX renderizado, sin scroll horizontal en desktop.
      >
      > #### Prioridad recomendada para el cierre
      > * **Inmediato:** `C1` (favicon en `index.html`), `C2` (`base` en `vite.config.js` o importación del logo desde `src/assets/`), `C3` (aportes reales del equipo en `content.js` y subtítulo de `TeamSection.jsx`), `C4` (limpieza de reglas CSS huérfanas).
      > * **Mejoras de revisión cruzada:** `M1` (`scroll-margin-top: 108px`), `M3` (`focus-visible` interno en accordion), `M4` (`hidden={!isOpen}` en panel).
    * **Pedido de mejora al agente e iteración final:** *(Pendiente de ejecutar en Antigravity para aplicar las correcciones).*
* *Etapa 4 — Documentación final y publicación:* (Pendiente).

---

## Cómo ejecutar el proyecto localmente
1. Clonar el repositorio e ingresar a la carpeta del proyecto:
   ```bash
   git clone [https://github.com/Peterbusta/TP3_Grupo24.git](https://github.com/Peterbusta/TP3_Grupo24.git)
   cd TP3_Grupo24