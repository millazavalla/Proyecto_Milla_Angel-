# Documentación de Decisiones y Limpieza de Datos

### 1. Proceso de limpieza de datos
El proceso de limpieza se realizó utilizando Microsoft Excel y consistió en la estandarización del formato para su posterior uso en herramientas de programación. 
* Se renombraron las cabeceras de las columnas para eliminar espacios en blanco, tildes y caracteres especiales (por ejemplo, "N° Partido" pasó a `n_partido` y "Dif. Goles" a `dif_goles`). 
* Se verificó la consistencia estructural, asegurando que no existieran filas con datos nulos o celdas vacías.
* Finalmente, se exportó la base de formato `.xlsx` a `.csv` delimitado por comas para asegurar su compatibilidad universal.

### 2. Fuentes de datos
Los datos fueron construidos como una base propia a partir de registros deportivos históricos. Se eligió consolidar esta muestra específica porque permite aislar las tres variables fundamentales que sostienen nuestra hipótesis grupal: la `generacion`, el `tipo` de partido (para separar amistosos de oficiales) y el `resultado` estadístico duro.

### 3. Preguntas que se pueden responder con esta base
Al cargar esta base en una tabla dinámica (Pivot Table) o en un DataFrame, podemos responder rápidamente:
1. ¿Cuál es la suma de `goles_chile` agrupado por cada `generacion`, filtrando únicamente donde `tipo` sea igual a "Oficial"?
2. ¿Qué porcentaje del total de partidos de la "Generación Dorada" terminaron con el valor "Victoria" en la columna `resultado`?
3. ¿Cuál es el promedio de `dif_goles` de la selección cuando la `condicion` es "Visita" versus cuando es "Local"?
