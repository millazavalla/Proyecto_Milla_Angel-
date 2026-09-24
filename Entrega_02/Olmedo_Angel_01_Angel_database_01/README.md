# Documentación de Decisiones y Limpieza de Datos

### 1. Proceso de limpieza de datos
El proceso de limpieza se realizó utilizando Microsoft Excel para adaptar la base original a nuestros requerimientos analíticos:
* Se eliminó la columna correspondiente al año, dado que dicha información ya está explícita dentro de la columna `FECHA`, evitando así la redundancia de datos.
* Se estandarizaron todas las cabeceras de las columnas cambiándolas a letras mayúsculas para unificar el formato visual de la tabla.
* Se verificó la consistencia estructural, asegurando que no existieran filas con datos nulos.
* Finalmente, se exportó la base a un archivo delimitado por comas (`.csv`) llamado `Olmedo_Angel_basededatoslimpia.csv` para asegurar su portabilidad y lectura en Python.

### 2. Fuentes de datos
Los datos fueron construidos como una base propia a partir de registros deportivos históricos. Se eligió consolidar esta muestra específica porque permite aislar las variables fundamentales que sostienen nuestra hipótesis grupal: la `GENERACION`, el `TIPO` de partido (para separar amistosos de oficiales) y el `RESULTADO` estadístico duro.

### 3. Preguntas que se pueden responder con esta base
Al cargar esta base en una tabla dinámica o en un DataFrame, podemos responder rápidamente:
1. ¿Cuál es la suma de `GOLES CHILE` agrupado por cada `GENERACION`, filtrando únicamente donde `TIPO` sea igual a "Oficial"?
2. ¿Qué porcentaje del total de partidos de la "Generación Dorada" terminaron con el valor "Victoria" en la columna `RESULTADO`?
3. ¿Cuál es el promedio de `DIFERENCIA GOLES` de la selección cuando la `CONDICION` es "Visita" versus cuando es "Local"?