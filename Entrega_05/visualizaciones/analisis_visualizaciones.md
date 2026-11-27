# Visualizaciones

## Material recuperado de entregas anteriores
- `codigo/altair_millaray.ipynb`: gráfico de goles por generación y tipo de partido, 430 registros declarados.
- `codigo/altair_angel.ipynb`: gráfico de muestra de 37 registros; no es la misma muestra.
- `codigo/tarea3_original.html`: ranking histórico y galería.
- `base_datos/`: CSV originales y copia UTF-8 de la base de partidos; CSV de ranking transcrito del código original.
- `imagenes/`: imágenes referenciales.

## Implementación web
La especificación existente de Millaray se integra con controles de tipo de partido y los cuatro indicadores definidos por el equipo. La versión beta incorpora el gráfico anual mediante código desarrollado con asistencia de IA.

| Recurso | Implementación / datos |
|---|---|
| Comparador | `../../docs/script.js`, `../../docs/datos/altair-equipo.js` y `../../docs/datos/partidos_utf8.csv` |
| Cancha de rendimiento | Cuatro indicadores de la base de partidos; lógica en `../../docs/script.js` |
| Evolución anual | `../../docs/script.js` y base de partidos, período 1998–2026 |
| Ranking y galería | Módulo recuperado de Tarea 3; archivos `goleadores.html`, `goleadores.js` y `goleadores.css` en `../../docs/` |

## Ficha técnica preliminar de la base de partidos
- Fuente principal indicada por el equipo: [Partidos de La Roja](https://www.partidosdelaroja.com/).
- Base de trabajo: 430 registros, 245 etiquetados como oficiales y 185 como amistosos.
- Cobertura del comparador: 1990–2026; cuatro períodos asignados según el año del partido.
- Cobertura de la visualización anual: 1998–2026; 358 registros, 206 etiquetados como oficiales.
- Unidad de observación: encuentro de fútbol.
- Indicadores: porcentaje de victorias, goles a favor por partido, goles en contra por partido y diferencia de goles por partido.
- Archivo publicado: `../../docs/datos/partidos_utf8.csv`.
- Pendientes de cotejo: fuente exacta del archivo inicial, completitud, clasificación de torneos, penales, duplicados y fecha de corte de la muestra.

La ficha de la base de goleadores debe completarse por separado, con fuente exacta, fecha de corte, universo de jugadores y comprobación de sus cifras.

## Justificación de las visualizaciones

- **Comparador de generaciones:** Decidimos utilizar gráficos de barras para poner a los cuatro períodos frente a frente bajo los mismos indicadores, haciendo visible de inmediato cómo se compara el rendimiento entre etapas, sin perder rigor ni claridad.

- **Cancha interactiva:** Llevamos las estadísticas a la cancha porque es un espacio familiar y concreto para cualquier hincha, lo que ayuda a interpretar los datos desde el juego y no solo desde una planilla.

- **Evolución anual:** Con el gráfico de líneas buscamos seguir el rendimiento año a año para identificar los mejores momentos de La Roja y observar con claridad el descenso posterior, uno de los aspectos que nos interesaba investigar desde un comienzo.

- **Ranking de goleadores:** Esta visualización nos permite dimensionar el aporte individual de cada jugador y distinguir los goles anotados en encuentros oficiales de aquellos convertidos en partidos amistosos.

- **Podio fotográfico:** Decidimos incorporar el podio visual como contrapunto humano a los números, conectando la estadística con la memoria colectiva y los momentos que quedaron grabados en los hinchas. Ver los rostros de los jugadores genera mayor cercanía que observar únicamente una cifra o un texto. Además, estamos hablando de tres cracks de La Roja.

## Pendientes de validación

- Verificar las cifras y las fuentes originales.
- Incorporar imágenes actualizadas de las visualizaciones.
- Comprobar las rutas de los archivos de código y las bases de datos.


## Pruebas
Angel comprobó los filtros del comparador, su tabla alternativa, el cambio de categoría del ranking y los filtros, tooltip y eje horizontal del gráfico anual en Chrome. La validación estadística frente a la fuente original sigue pendiente.
