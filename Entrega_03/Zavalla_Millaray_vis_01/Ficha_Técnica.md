# Ficha Técnica: Repositorio Estadístico de La Roja

* **Naturaleza de los datos:** Matriz estructurada de partidos oficiales y amistosos disputados por la Selección Chilena de Fútbol.
* **Cobertura muestral:** Registros históricos segmentados en tres grandes bloques temporales (1990-1997, 1998-2007 y Generación Dorada).

## Diccionario de Variables
| Variable | Descripción analítica |
|---|---|
| `num_partido` | Identificador correlativo único del encuentro. |
| `año` | Año cronológico en que se disputó el partido. |
| `Generación` | Bloque histórico asignado al equipo. |
| `Rival` | Selección contrincante. |
| `Condición` | Ubicación geográfica del partido (Local, Visita, Neutral). |
| `Tipo` | Carácter reglamentario de la competencia (Oficial o Amistoso). |
| `Competencia` | Torneo, eliminatoria o partido de exhibición. |
| `Goles Chile` | Anotaciones convertidas por el combinado nacional. |
| `Goles Rival` | Anotaciones recibidas por la portería chilena. |
| `Dif. Goles` | Balance neto (Goles Chile - Goles Rival). |
| `Resultado` | Condición final del encuentro (Victoria, Empate, Derrota). |
| `Ciudad` | Sede del partido. |

* **Procesamiento:** Los datos fueron depurados y consolidados en formato CSV con codificación UTF-8 para garantizar una integración fluida con herramientas de visualización web e interfaces de desarrollo en Python.
