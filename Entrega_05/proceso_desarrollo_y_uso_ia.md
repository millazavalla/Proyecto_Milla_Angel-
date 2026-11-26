# Proceso de desarrollo y uso de IA

## Implementación técnica
Sitio estático en `docs/`, HTML, CSS y JS separados. Integra el código Altair previo mediante Vega-Embed; conserva el ranking y galería de la Tarea 3 en un módulo estático.

## Registro de apoyo IA
- ChatGPT: orientación para usar GitHub Desktop y VS Code; prompt para Google AI Studio; adaptación técnica de archivos exportados, conexión de filtros a la especificación y datos existentes, corrección de codificación, organización de archivos y reutilización de extractos previos.
- Google AI Studio: generación de la interfaz inicial con los elementos y paleta definidos por el equipo.
- **Pendiente del equipo:** añadir prompts exactos, usos anteriores de IA, cambios propios, comprobación del código y justificación de decisiones. No atribuir a los autores trabajo no realizado.

## Problemas técnicos
- La exportación incluyó scaffolding Vite/React: la versión estática usa solo HTML/CSS/JS independientes.
- CSV de Millaray en Mac Roman: se conserva original y se prepara copia UTF-8. La especificación Altair se extrajo del HTML original y se repararon cadenas mal codificadas.
- Las librerías Vega requieren conexión a CDN; si no cargan, hay tabla y referencia gráfica original.

## Pruebas del equipo (completar después de ejecutar)
| Prueba | Resultado real | Responsable |
|---|---|---|
| Abrir sitio local y publicado | Pendiente | |
| Alternar tipo de partido e indicador | Pendiente | |
| Comparar tabla con Altair y datos | Pendiente | |
| Navegación, teclado, celular | Pendiente | |
| Verificar fotos, créditos, fuentes y datos | Pendiente | |

## Relación entre entregas y web
Completar por el equipo: hipótesis → criterios → gráficos → crónica → wireframe → implementación; registrar cambios respecto del diseño inicial.

## Comprobaciones técnicas del asistente (no sustituyen las pruebas del equipo)
- Se cotejaron los 430 registros de la especificación existente contra el CSV: identificador, goles Chile/rival, generación, tipo y resultado coinciden fila a fila. Esto no verifica la exactitud frente a la fuente original.
- Se revisaron rutas de recursos locales y enlaces internos: solo faltan las fotografías históricas planificadas; no hay IDs duplicados en las dos páginas.
- Se comprobó la sintaxis de JavaScript con Node. La ejecución completa en navegador no pudo comprobarse por restricciones del entorno, ni la carga real de CDN. Ejecutar pruebas locales con Internet y luego en GitHub Pages.
