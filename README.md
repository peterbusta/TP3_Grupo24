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
* *Etapa 3 — Pruebas en desktop e iteración:* (En curso — aquí se registrará la evidencia de iteración: instrucción inicial, problema detectado y pedido de mejora).
* *Etapa 4 — Documentación final y publicación:* (Pendiente).

---

## Cómo ejecutar el proyecto localmente
1. Clonar el repositorio e ingresar a la carpeta del proyecto:
   ```bash
   git clone [https://github.com/Peterbusta/TP3_Grupo24.git](https://github.com/Peterbusta/TP3_Grupo24.git)
   cd TP3_Grupo24