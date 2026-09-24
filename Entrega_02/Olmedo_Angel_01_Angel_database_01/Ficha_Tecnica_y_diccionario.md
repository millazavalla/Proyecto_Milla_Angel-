# Ficha Técnica y Diccionario de Datos

* **Fuente de los datos:** Recopilación propia basada en registros estadísticos históricos de partidos de la selección chilena de fútbol.
* **Metodología de construcción:** Se estructuró una matriz seleccionando partidos representativos de distintas generaciones, categorizando variables de rendimiento (goles, resultados) y contexto (tipo de partido, torneo).
* **Alcance de los datos:** Muestra histórica que abarca desde la generación de 1990 hasta la era de la Generación Dorada.
* **Característica de los datos:** Estructura tabular de 37 registros y 11 variables (mixtas: cualitativas y cuantitativas).

### Diccionario de Datos

| Nombre Variable | Descripción | Tipo de Dato | Valores Posibles / Observaciones |
| :--- | :--- | :--- | :--- |
| `PARTIDO` | Identificador único del partido | Numérico | 1, 2, 3... |
| `FECHA` | Fecha exacta del encuentro | Fecha/Texto | AAAA-MM-DD |
| `GENERACION` | Período histórico del equipo | Texto | Ej: Generación Dorada, Generación 1990-1997 |
| `RIVAL` | País oponente de Chile | Texto | Brasil, Argentina, etc. |
| `CONDICION` | Dónde se jugó el partido | Texto | Local, Visita, Neutral |
| `TIPO` | Clasificación de importancia del encuentro | Texto | Oficial, Amistoso |
| `COMPETENCIA` | Torneo específico en disputa | Texto | Copa América, Clasificatorias, Amistoso, etc. |
| `GOLES CHILE` | Goles anotados por La Roja | Numérico | 0, 1, 2, 3... |
| `GOLES RIVAL` | Goles anotados por el oponente | Numérico | 0, 1, 2, 3... |
| `DIFERENCIA GOLES` | Diferencia (Goles Chile - Goles Rival) | Numérico | Valores positivos (victoria) o negativos (derrota) |
| `RESULTADO` | Desenlace del partido para Chile | Texto | Victoria, Empate, Derrota |