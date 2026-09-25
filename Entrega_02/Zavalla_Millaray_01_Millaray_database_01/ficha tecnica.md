# Ficha técnica

## Fuente de los datos: 

La nueva base de datos reúne información de las primeras dos bases creadas en la entrega anterior y en una base de datos nueva encontrada en GitHub del usuario Ismael Gómez (chile_games.csv), que contiene registros históricos de encuentros disputados por la Selección Chilena. Esta base incluye información como fecha, equipos participantes, resultado, competencia y ciudad donde se disputó el encuentro de 839 partidos de La Roja. 

## Metodología de la construcción de la base: 

Para construir las nuevas bases, se reorganizaron las bases originales, debido a que contenían diferentes unidades de análisis. La base de partidos utiliza como unidad de observación cada encuentro disputado por Chile.

En primer lugar, se tomó chile_games.csv como fuente principal para reconstruir la tabla de partidos. Se seleccionaron los encuentros disputados entre 1990 y 2026. Para cada encuentro se identificó el rival de Chile y se calcularon los goles anotados por Chile, los goles recibidos, la diferencia de goles y el resultado del encuentro. El resultado fue clasificado como victoria, empate o derrota.

Después, cada partido fue asignado a una generación según el año en que se disputó. Se utilizaron cuatro períodos:

* Generación 1990-1997: partidos disputados entre 1990 y 1997.

* Generación Francia '98: partidos disputados entre 1998 y 2006.

* Generación Dorada: partidos disputados entre 2007 y 2017.

* Post Generación Dorada: partidos disputados entre 2018 y 2026.

Además, los encuentros fueron clasificados entre oficial y amistoso. A partir de la tabla de partidos se calcularon nuevamente los indicadores agregados de cada generación: partidos disputados, victorias, empates, derrotas, porcentaje de victorias, goles a favor, goles en contra, diferencia de goles y promedios por partido.

## Alcance de los datos:

 Las bases comprenden 430 partidos de la selección chilena masculina disputados entre 1990 y 2026. El alcance temporal se divide en cuatro períodos generacionales, lo que permite realizar comparaciones longitudinales sobre el desempeño de la selección antes, durante y después de la denominada Generación Dorada.

La información permite analizar el rendimiento según resultados, goles, condición de local o visitante, rival, competencia y carácter oficial o amistoso del encuentro.

## Característica de los datos: 

La base combina goles anotados, goles recibidos, diferencia de goles, número de partidos, porcentaje de victorias y goles por partido.

Los datos permiten clasificar los encuentros según generación, rival, condición, tipo de partido, competencia y resultado.

Las bases son dos, ya que se estructuran como una completa y una como resumen. 

La división de las generaciones constituye una decisión de nosotros y no una clasificación oficial de la Selección Chilena. Los partidos fueron asignados a una generación exclusivamente según el año en que fueron disputados.

Esto implica que un mismo jugador puede haber participado en más de una de las generaciones definidas. Por lo tanto, las categorías deben interpretarse principalmente como períodos de rendimiento de la selección, y no necesariamente como grupos cerrados de jugadores.

Finalmente, debido a que las generaciones comprenden diferentes cantidades de años y partidos, para realizar comparaciones proporcionales, se incorporaron indicadores como porcentaje de victorias, goles por partido, goles recibidos por partido y diferencia de goles por partido.
