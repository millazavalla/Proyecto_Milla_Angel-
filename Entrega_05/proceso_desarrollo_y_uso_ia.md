# Proceso de desarrollo y uso de IA

## Implementación técnica
Sitio estático en `docs/`, con HTML, CSS y JavaScript separados. Integra código Altair previo mediante Vega-Embed y conserva el ranking y la galería de la Tarea 3. Incluye navegación por secciones, cronología por períodos, filtros, tablas alternativas, cuatro indicadores de rendimiento y gráfico de evolución anual.

## Registro de apoyo de IA
Durante el desarrollo de nuestra webstory utilizamos ChatGPT y Google AI Studio como herramientas de apoyo para trasladar a una página web funcional los materiales, las ideas y las propuestas desarrolladas durante el semestre, incorporando también las correcciones realizadas por el profesor.

A partir de la información obtenida, las bases de datos, los recursos gráficos y nuestras instrucciones, estas herramientas nos ayudaron a generar, adaptar y corregir código HTML, CSS y JavaScript, implementar recursos interactivos y solucionar problemas técnicos que dificultaron el desarrollo en algunas ocasiones.

ChatGPT también nos asistió en la preparación y revisión de borradores de textos históricos y conclusiones, a partir de la información e ideas aportadas por Angel, quien revisó los contenidos, realizó observaciones, solicitó modificaciones y aportó propuestas editoriales.

Como parte del trabajo del equipo, Angel seleccionó las nuevas fotografías, proporcionó sus fuentes, incorporó archivos y realizó pruebas locales. Millaray configuró GitHub Pages y confirmó la publicación inicial.

### Principales encargos (resumen, no transcripción literal)
- Google AI Studio: generación de la interfaz inicial a partir de los elementos y la paleta proporcionados.
- ChatGPT: orientación para GitHub Desktop, VS Code y Live Preview; adaptación del código exportado; integración de filtros, especificaciones Altair y datos existentes.
- ChatGPT: corrección de codificación, organización de archivos, implementación del gráfico anual y de los indicadores de la cancha; ajuste de etiquetas del eje horizontal.
- ChatGPT: asistencia en borradores históricos y conclusiones, además de sugerencias de redacción y organización de fuentes.

La pauta permite IA para implementación técnica. La asistencia editorial descrita excede ese alcance; los autores deben reformular personalmente los pasajes afectados antes de entregar y conservar un registro transparente del proceso.

## Cambios y aportes del equipo
- Angel incorporó cinco nuevas fotografías y actualizó sus créditos con las fuentes que recopiló.
- Angel editó campos de los períodos históricos, solicitó incorporar la denominación Sa-Za y propuso cerrar con una interrogante sobre una futura Generación Dorada.
- Angel reemplazó los archivos de las actualizaciones técnicas y conservó un respaldo de los originales fuera del repositorio.
- Millaray habilitó la publicación desde la rama `main`, carpeta `/docs`.

## Problemas técnicos
- La exportación inicial incluyó scaffolding Vite/React; la versión estática usa HTML/CSS/JS independientes.
- CSV de Millaray en Mac Roman: se conserva original y se prepara copia UTF-8. La especificación Altair se extrajo del HTML y se repararon cadenas mal codificadas.
- Windows no reconocía el comando `py`: se utilizó Live Preview de VS Code.
- El gráfico anual inicialmente no mostraba los años: se corrigió el eje horizontal en la actualización 03.
- Las librerías Vega dependen de una CDN. No se ha probado la operación sin conexión.

## Pruebas del equipo
| Prueba | Resultado observado | Responsable |
|---|---|---|
| Abrir sitio local | Portada visible | Angel |
| Cambiar períodos históricos | Cambian fotografía, crédito, texto e hitos | Angel |
| Alternar tipo de partido e indicador del comparador | Se actualizan los resultados | Angel |
| Alternar gráfico y tabla del comparador | Tabla visible | Angel |
| Cambiar categoría del ranking | Ranking actualizado | Angel |
| Seleccionar fotografías del podio | Cambia ficha informativa | Angel |
| Gráfico anual: filtros y tooltip | Funcionan en las pruebas mostradas | Angel |
| Eje horizontal del gráfico anual | Años visibles tras actualización 03 | Angel |
| Sitio público inicial | Portada visible; publicación confirmada | Angel y Millaray |
| Última versión publicada, teclado, móvil y enlaces | Pendiente de comprobación | Por asignar |
| Contraste de cifras con fuente original | Pendiente | Equipo |

## Relación entre entregas y web
**Por completar por los autores:** explicar la relación entre hipótesis, criterios, gráficos, crónica, wireframe e implementación, así como la justificación de las decisiones editoriales.

## Comprobaciones técnicas del asistente
En la revisión anterior se informó del cotejo de 430 registros entre la especificación y el CSV, revisión de identificadores y sintaxis JavaScript. No equivale a verificar la exactitud frente a la fuente original. La prueba de navegador se efectuó posteriormente por Angel mediante Live Preview.

## Pendientes
Completar el registro de prompts exactos que el equipo conserve, confirmar las atribuciones, verificar cobertura y clasificación de torneos, revisar tratamiento de penales, fecha de corte y créditos pendientes. Realizar pruebas de teclado, móvil y publicación actualizada.
