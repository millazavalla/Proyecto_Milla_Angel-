/* ==========================================================================
   LA ROJA BAJO LA LUPA — Lógica interactiva en JavaScript puro
   Curso: Narración Gráfica de No Ficción · Pontificia Universidad Católica de Chile
   Autores: Angel Olmedo González y Millaray Zavalla Velozo

   GUÍA RÁPIDA PARA LOS AUTORES:
   1. En `CONFIG_VISUALIZACIONES` pueden enlazar los archivos JSON exportados
      desde Altair (por ejemplo: "./datos/comparador.json").
   2. En `DATOS_AUTORES` pueden reemplazar los textos entre corchetes `[...]`
      por sus textos, hitos, cifras validadas y fichas de protagonistas.
   3. Ningún dato ni estadística está inventado en este archivo.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     1. CONFIGURACIÓN DE GRÁFICOS DE ALTAIR (VEGA-LITE / VEGA-EMBED)
     Reemplazar `null` por la ruta relativa al JSON de Altair o por el objeto
     de especificación Vega-Lite cuando los gráficos estén listos.
     ------------------------------------------------------------------------ */
  const CONFIG_VISUALIZACIONES = {
    comparador: null, // Ejemplo futuro: "./datos/comparador_generaciones.json"
    rendimientoAnual: null, // Ejemplo futuro: "./datos/rendimiento_anual.json"
    goleadores: null, // Ejemplo futuro: "./datos/ranking_goleadores.json"
  };

  /* ------------------------------------------------------------------------
     2. ESPACIOS ESTRUCTURADOS PARA CONTENIDO VALIDADO POR LOS AUTORES
     ------------------------------------------------------------------------ */
  const DATOS_AUTORES = {
    /* Datos de los 4 períodos de la línea de tiempo */
    periodos: {
      "1990-1997": {
        rango: "Período 1990–1997",
        titulo: "Generación 1990-1997",
        imagen: "./assets/img/epoca-1990-1997.jpg",
        alt: "Formación de la selección chilena durante las Clasificatorias de 1997",
        reservaTitulo: "Fotografía histórica · 1990–1997",
        reservaRuta: "./assets/img/epoca-1990-1997.jpg",
        pieFoto: "Selección chilena durante las Clasificatorias rumbo a Francia 1998",
        creditoFoto: "Pepe Alvújar / Partidos de La Roja",
        texto:
  "Los años 90 estuvieron marcados por la reconstrucción de La Roja. Tras la sanción de la FIFA que le impidió disputar las Clasificatorias rumbo a Estados Unidos 1994, Chile comenzó a recuperar protagonismo en el fútbol sudamericano. Con la dupla Sa-Za como principal referente ofensivo, la Selección Chilena consiguió en 1997 su clasificación al Mundial de Francia 1998, poniendo fin a 16 años de ausencia en la máxima cita del fútbol mundial.",
hitos: [
  "1991: Tercer lugar en la Copa América.",
  "1994: Ausencia del Mundial de Estados Unidos por sanción de la FIFA.",
  "1997: Clasificación al Mundial de Francia 1998.",
],
      },
      "1998-2006": {
        rango: "Período 1998–2006",
        titulo: "Generación Francia 98",
        imagen: "./assets/img/epoca-1998-2006.jpg",
        alt: "Dos futbolistas de la selección chilena celebran en el Mundial de Francia 1998",
        reservaTitulo: "Fotografía histórica · 1998–2006",
        reservaRuta: "./assets/img/epoca-1998-2006.jpg",
        pieFoto: "La Roja en la Copa del Mundo de Francia 1998",
        creditoFoto: "LaRoja.cl",
        texto:
  "De la mano de la recordada dupla Sa-Za, Chile volvió a disputar una Copa del Mundo en Francia 1998, instancia en la que alcanzó los octavos de final. Sin embargo, la ilusión que dejó aquella participación mundialista no logró mantenerse en los años siguientes. La Roja quedó fuera de los mundiales de 2002 y 2006, en un período marcado por la irregularidad y las dificultades para consolidar un nuevo proceso futbolístico.",
hitos: [
  "1998: Octavos de final en el Mundial de Francia.",
  "1999: Cuarto lugar en la Copa América.",
  "2002: Ausencia del Mundial de Corea-Japón.",
  "2006: Ausencia del Mundial de Alemania.",
],
      },
      "2007-2017": {
        rango: "Período 2007–2017",
        titulo: "Generación Dorada",
        imagen: "./assets/img/epoca-2007-2017.jpg",
        alt: "Futbolistas de La Roja celebran con el trofeo de la Copa América 2015",
        reservaTitulo: "Fotografía histórica · 2007–2017",
        reservaRuta: "./assets/img/epoca-2007-2017.jpg",
        pieFoto: "Chile celebra su primer título de Copa América en 2015",
        creditoFoto: "CONMEBOL",
        texto:
  "La llegada de Marcelo Bielsa en 2007 marcó un antes y un después en el fútbol chileno. Con una propuesta ofensiva y una generación de jugadores que comenzaba a destacar a nivel internacional, La Roja volvió a competir de igual a igual con las grandes selecciones del mundo. Los procesos de Jorge Sampaoli y Juan Antonio Pizzi consolidaron una etapa histórica, coronada con el bicampeonato de América. Pero más allá de los títulos, ¿fue también la generación con el mejor rendimiento estadístico?",
hitos: [
  "2010: Octavos de final en el Mundial de Sudáfrica.",
  "2014: Octavos de final en el Mundial de Brasil.",
  "2015: Primer título de Copa América.",
  "2016: Campeón de la Copa América Centenario.",
  "2017: Subcampeón de la Copa Confederaciones.",
  "2017: Eliminación de las Clasificatorias a Rusia 2018.",
],
      },
      "2018-2026": {
        rango: "Período 2018–2026",
        titulo: "Post Generación Dorada",
        imagen: "./assets/img/epoca-2018-2026.jpg",
        alt: "Formación de la selección chilena antes de un partido de las Clasificatorias al Mundial 2026",
        reservaTitulo: "Fotografía histórica · 2018–2026",
        reservaRuta: "./assets/img/epoca-2018-2026.jpg",
        pieFoto: "La Roja durante las Clasificatorias rumbo al Mundial 2026",
        creditoFoto: "Carlos Parra / ANFP",
        texto:
  "Después de vivir los años más exitosos de su historia, La Roja comenzó a enfrentar uno de sus mayores desafíos: el recambio generacional. La continuidad de varios referentes del bicampeonato, los constantes cambios de entrenador y las dificultades para encontrar nuevos protagonistas marcaron este período. La comparación con la Generación Dorada nos permite observar cuánto terreno perdió Chile en términos de rendimiento y competitividad internacional.",
hitos: [
  "2018: Ausencia del Mundial de Rusia.",
  "2019: Cuarto lugar en la Copa América.",
  "2022: Ausencia del Mundial de Catar.",
  "2024: Eliminación en la fase de grupos de la Copa América.",
],
      },
    },

    /* Etiquetas y metadatos del comparador interactivo (sin cifras inventadas) */
    comparador: {
      etiquetasTipo: {
        todos: "Todos los partidos",
        oficiales: "Solo oficiales",
        amistosos: "Solo amistosos",
      },
      indicadores: {
        victorias: {
          nombre: "Porcentaje de victorias",
          unidad: "Porcentaje de victorias (%)",
        },
        goles_favor: {
          nombre: "Goles a favor por partido",
          unidad: "Goles a favor por partido",
        },
        goles_contra: {
          nombre: "Goles en contra por partido",
          unidad: "Goles en contra por partido",
        },
        diferencia_goles: {
          nombre: "Diferencia de goles por partido",
          unidad: "Diferencia neta de goles por partido",
        },
      },
      /* Espacio listo para conectar la base validada por tipo de partido e indicador */
      fuentesPorTipo: {
        todos: "[Fuente por definir por los autores]",
        oficiales: "[Fuente por definir para partidos oficiales]",
        amistosos: "[Fuente por definir para partidos amistosos]",
      },
      partidosPorTipo: {
        todos: "[Cantidad de partidos por incorporar]",
        oficiales: "[Cantidad de oficiales por incorporar]",
        amistosos: "[Cantidad de amistosos por incorporar]",
      },
      /* Filas de la tabla accesible; cuando tengan los números, reemplacen `valor` y `partidos` */
      generacionesBase: [
        {
          nombre: "Generación 1990-1997",
          periodo: "1990–1997",
          partidos: "[Por incorporar]",
          valor: "[Dato por incorporar]",
          nota: "[Nota metodológica opcional]",
        },
        {
          nombre: "Generación Francia 98",
          periodo: "1998–2006",
          partidos: "[Por incorporar]",
          valor: "[Dato por incorporar]",
          nota: "[Nota metodológica opcional]",
        },
        {
          nombre: "Generación Dorada",
          periodo: "2007–2017",
          partidos: "[Por incorporar]",
          valor: "[Dato por incorporar]",
          nota: "[Nota metodológica opcional]",
        },
        {
          nombre: "Post Generación Dorada",
          periodo: "2018–2026",
          partidos: "[Por incorporar]",
          valor: "[Dato por incorporar]",
          nota: "[Nota metodológica opcional]",
        },
      ],
    },

    /* Textos reservados para las 4 zonas tácticas de la cancha */
    zonasCancha: {
      victorias: {
        etiqueta: "Dimensión seleccionada: Victorias",
        texto:
          "Indicador seleccionado en el comparador. Puedes volver a la sección anterior para consultar gráfico y tabla.",
      },
      ataque: {
        etiqueta: "Dimensión seleccionada: Ataque",
        texto:
          "Indicador seleccionado en el comparador. Puedes volver a la sección anterior para consultar gráfico y tabla.",
      },
      defensa: {
        etiqueta: "Dimensión seleccionada: Defensa",
        texto:
          "Indicador seleccionado en el comparador. Puedes volver a la sección anterior para consultar gráfico y tabla.",
      },
      diferencia: {
        etiqueta: "Dimensión seleccionada: Diferencia de goles",
        texto:
          "Indicador seleccionado en el comparador. Puedes volver a la sección anterior para consultar gráfico y tabla.",
      },
    },

    /* Fichas informativas de la galería seleccionable de protagonistas */
    protagonistas: {
      1: {
        etiqueta: "Ficha informativa · 01",
        nombre: "[Nombre del protagonista 01]",
        generacion: "[Generación asociada · Posición en cancha]",
        periodo: "[Años por incorporar]",
        partidos: "[Dato por incorporar]",
        goles: "[Dato por incorporar]",
        resena:
          "[Espacio reservado para la reseña biográfica y aporte estadístico del protagonista 01 redactado por los autores.]",
      },
      2: {
        etiqueta: "Ficha informativa · 02",
        nombre: "[Nombre del protagonista 02]",
        generacion: "[Generación asociada · Posición en cancha]",
        periodo: "[Años por incorporar]",
        partidos: "[Dato por incorporar]",
        goles: "[Dato por incorporar]",
        resena:
          "[Espacio reservado para la reseña biográfica y aporte estadístico del protagonista 02 redactado por los autores.]",
      },
      3: {
        etiqueta: "Ficha informativa · 03",
        nombre: "[Nombre del protagonista 03]",
        generacion: "[Generación asociada · Posición en cancha]",
        periodo: "[Años por incorporar]",
        partidos: "[Dato por incorporar]",
        goles: "[Dato por incorporar]",
        resena:
          "[Espacio reservado para la reseña biográfica y aporte estadístico del protagonista 03 redactado por los autores.]",
      },
      4: {
        etiqueta: "Ficha informativa · 04",
        nombre: "[Nombre del protagonista 04]",
        generacion: "[Generación asociada · Posición en cancha]",
        periodo: "[Años por incorporar]",
        partidos: "[Dato por incorporar]",
        goles: "[Dato por incorporar]",
        resena:
          "[Espacio reservado para la reseña biográfica y aporte estadístico del protagonista 04 redactado por los autores.]",
      },
    },
  };

  /* ------------------------------------------------------------------------
     3. UTILIDADES DE IMÁGENES LOCALES (EVITA ÍCONOS ROTOS ANTES DE SUBIR FOTOS)
     Si el archivo local aún no existe en `./assets/img/`, oculta el <img> y
     muestra el marco editorial con el nombre del archivo esperado.
     ------------------------------------------------------------------------ */
  function inicializarRespaldoImagenes() {
    const imagenes = document.querySelectorAll("img[data-fallback]");

    imagenes.forEach(function (img) {
      const idReserva = img.getAttribute("data-fallback");
      const contenedorReserva = idReserva ? document.getElementById(idReserva) : null;

      function mostrarReserva() {
        img.classList.add("imagen-oculta");
        if (contenedorReserva) {
          contenedorReserva.classList.add("visible");
        }
      }

      function mostrarImagenReal() {
        img.classList.remove("imagen-oculta");
        if (contenedorReserva) {
          contenedorReserva.classList.remove("visible");
        }
      }

      img.addEventListener("error", mostrarReserva);
      img.addEventListener("load", mostrarImagenReal);

      // Verifica si la imagen ya falló antes de registrar el evento
      if (img.complete && img.naturalWidth === 0) {
        mostrarReserva();
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. INTEGRACIÓN CON VEGA-EMBED PARA GRÁFICOS EXPORTADOS DESDE ALTAIR
     ------------------------------------------------------------------------ */
  function cargarVisualizacionAltair(selector, especificacion) {
    const contenedor = document.querySelector(selector);
    if (!contenedor || !especificacion) {
      return Promise.resolve(null);
    }

    if (typeof window.vegaEmbed !== "function") {
      console.warn(
        "Vega-Embed aún no está disponible. Verifica la carga de los scripts en index.html."
      );
      return Promise.resolve(null);
    }

    const opcionesEmbed = {
      actions: {
        export: true,
        source: false,
        compiled: false,
        editor: false,
      },
      renderer: "svg",
    };

    return window.vegaEmbed(selector, especificacion, opcionesEmbed).catch(function (error) {
      console.error("Error al renderizar visualización Altair en " + selector + ":", error);
    });
  }

  function inicializarVisualizacionesAltair() {
    // El comparador se conecta desde inicializarComparador.
    cargarVisualizacionAltair("#vis-rendimiento-anual", CONFIG_VISUALIZACIONES.rendimientoAnual);
    cargarVisualizacionAltair("#vis-goleadores", CONFIG_VISUALIZACIONES.goleadores);
  }

  /* ------------------------------------------------------------------------
     5. INDICADOR DE PROGRESO DE LECTURA Y NAVEGACIÓN ACTIVA
     ------------------------------------------------------------------------ */
  function inicializarProgresoLectura() {
    const pista = document.getElementById("barra-progreso-contenedor");
    const relleno = document.getElementById("barra-progreso-relleno");
    const enlacesNav = document.querySelectorAll(".enlace-nav");
    const secciones = document.querySelectorAll("main section[id]");

    if (!pista || !relleno) {
      return;
    }

    let animacionPendiente = false;

    function actualizarProgreso() {
      animacionPendiente = false;
      const scrollActual = window.scrollY || document.documentElement.scrollTop;
      const alturaTotal =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      const fraccion = alturaTotal > 0 ? Math.min(1, Math.max(0, scrollActual / alturaTotal)) : 0;
      const porcentaje = Math.round(fraccion * 100);

      relleno.style.transform = "scaleX(" + fraccion + ")";
      pista.setAttribute("aria-valuenow", String(porcentaje));

      // Resalta el enlace de sección correspondiente en la barra superior
      let seccionActivaId = "";
      const desplazamientoReferencia = scrollActual + 140;

      secciones.forEach(function (sec) {
        if (sec.offsetTop <= desplazamientoReferencia) {
          seccionActivaId = sec.id;
        }
      });

      enlacesNav.forEach(function (enlace) {
        const destino = enlace.getAttribute("href");
        if (destino === "#" + seccionActivaId) {
          enlace.classList.add("activo");
        } else {
          enlace.classList.remove("activo");
        }
      });
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!animacionPendiente) {
          animacionPendiente = true;
          window.requestAnimationFrame(actualizarProgreso);
        }
      },
      { passive: true }
    );

    actualizarProgreso();
  }

  /* ------------------------------------------------------------------------
     6. MENÚ MÓVIL ACCESIBLE Y BOTÓN VOLVER AL INICIO
     ------------------------------------------------------------------------ */
  function inicializarNavegacion() {
    const botonMenu = document.getElementById("btn-menu-movil");
    const menuMovil = document.getElementById("menu-movil");
    const enlacesMoviles = document.querySelectorAll(".enlace-movil");
    const botonVolverInicio = document.getElementById("btn-volver-inicio");

    if (botonMenu && menuMovil) {
      function alternarMenu(abrir) {
        const estadoNuevo = typeof abrir === "boolean" ? abrir : menuMovil.hasAttribute("hidden");
        if (estadoNuevo) {
          menuMovil.removeAttribute("hidden");
          botonMenu.setAttribute("aria-expanded", "true");
          botonMenu.setAttribute("aria-label", "Cerrar menú de secciones");
        } else {
          menuMovil.setAttribute("hidden", "");
          botonMenu.setAttribute("aria-expanded", "false");
          botonMenu.setAttribute("aria-label", "Abrir menú de secciones");
        }
      }

      botonMenu.addEventListener("click", function () {
        alternarMenu();
      });

      enlacesMoviles.forEach(function (enlace) {
        enlace.addEventListener("click", function () {
          alternarMenu(false);
        });
      });

      // Permite cerrar el menú móvil con la tecla Escape
      document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && !menuMovil.hasAttribute("hidden")) {
          alternarMenu(false);
          botonMenu.focus();
        }
      });
    }

    if (botonVolverInicio) {
      botonVolverInicio.addEventListener("click", function () {
        const prefiereSinMovimiento = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        window.scrollTo({
          top: 0,
          behavior: prefiereSinMovimiento ? "auto" : "smooth",
        });

        const tituloPortada = document.getElementById("titulo-investigacion");
        if (tituloPortada) {
          tituloPortada.setAttribute("tabindex", "-1");
          tituloPortada.focus({ preventScroll: true });
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     7. SECCIÓN CONTEXTO HISTÓRICO: LÍNEA DE TIEMPO DE 4 PERÍODOS
     Incluye soporte de flechas de teclado (ArrowLeft / ArrowRight)
     ------------------------------------------------------------------------ */
  function inicializarLineaTiempo() {
    const pestanas = Array.from(document.querySelectorAll(".boton-periodo"));
    const panel = document.getElementById("panel-contexto");
    const imgElemento = document.getElementById("contexto-imagen");
    const reservaTitulo = document.getElementById("contexto-reserva-titulo");
    const reservaRuta = document.getElementById("contexto-reserva-ruta");
    const pieFoto = document.getElementById("contexto-pie-foto");
    const creditoFoto = document.getElementById("contexto-credito-foto");
    const rango = document.getElementById("contexto-rango");
    const titulo = document.getElementById("contexto-titulo");
    const texto = document.getElementById("contexto-texto");
    const hitos = document.getElementById("contexto-hitos");
    const btnAnterior = document.getElementById("btn-periodo-anterior");
    const btnSiguiente = document.getElementById("btn-periodo-siguiente");

    if (!pestanas.length || !panel) {
      return;
    }

    let indiceActivo = 0;

    function seleccionarPeriodo(nuevoIndice, moverFocoAPestana) {
      if (nuevoIndice < 0 || nuevoIndice >= pestanas.length) {
        return;
      }

      indiceActivo = nuevoIndice;
      const pestanaActiva = pestanas[indiceActivo];
      const clavePeriodo = pestanaActiva.getAttribute("data-periodo");
      const info = DATOS_AUTORES.periodos[clavePeriodo];

      pestanas.forEach(function (tab, idx) {
        const esActual = idx === indiceActivo;
        tab.classList.toggle("activo", esActual);
        tab.setAttribute("aria-selected", esActual ? "true" : "false");
        tab.setAttribute("tabindex", esActual ? "0" : "-1");
      });

      panel.setAttribute("aria-labelledby", pestanaActiva.id);

      if (info) {
        if (rango) rango.textContent = info.rango;
        if (titulo) titulo.textContent = info.titulo;
        if (pieFoto) pieFoto.textContent = info.pieFoto;
        if (creditoFoto) creditoFoto.textContent = info.creditoFoto;
        if (reservaTitulo) reservaTitulo.textContent = info.reservaTitulo;
        if (reservaRuta) {
          reservaRuta.textContent = "Fotografía pendiente de selección.";
        }
        if (texto) {
          texto.innerHTML = "";
          const parrafo = document.createElement("p");
          parrafo.textContent = info.texto;
          texto.appendChild(parrafo);
        }
        if (hitos) {
          hitos.innerHTML = "";
          info.hitos.forEach(function (itemTexto) {
            const li = document.createElement("li");
            li.textContent = itemTexto;
            hitos.appendChild(li);
          });
        }
        if (imgElemento) {
          const fallbackEl = document.getElementById("fallback-contexto");
          if (fallbackEl) fallbackEl.classList.remove("visible");
          imgElemento.classList.remove("imagen-oculta");
          imgElemento.alt = info.alt;
          imgElemento.src = info.imagen;
        }
      }

      if (btnAnterior) btnAnterior.disabled = indiceActivo === 0;
      if (btnSiguiente) btnSiguiente.disabled = indiceActivo === pestanas.length - 1;

      if (moverFocoAPestana) {
        pestanaActiva.focus();
      }
    }

    pestanas.forEach(function (tab, idx) {
      tab.addEventListener("click", function () {
        seleccionarPeriodo(idx, false);
      });

      tab.addEventListener("keydown", function (evento) {
        if (evento.key === "ArrowRight") {
          evento.preventDefault();
          seleccionarPeriodo((idx + 1) % pestanas.length, true);
        } else if (evento.key === "ArrowLeft") {
          evento.preventDefault();
          seleccionarPeriodo((idx - 1 + pestanas.length) % pestanas.length, true);
        }
      });
    });

    if (btnAnterior) {
      btnAnterior.addEventListener("click", function () {
        seleccionarPeriodo(indiceActivo - 1, false);
      });
    }

    if (btnSiguiente) {
      btnSiguiente.addEventListener("click", function () {
        seleccionarPeriodo(indiceActivo + 1, false);
      });
    }
  }

  /* ------------------------------------------------------------------------
     8. COMPARADOR INTERACTIVO (Filtros · Selector · Gráfico / Tabla accesible)
     ------------------------------------------------------------------------ */
  // Adaptación técnica de la visualización existente de Altair y de los cuatro indicadores definidos por el equipo.
  function inicializarComparador() {
    const original = window.ALTAIR_EQUIPO;
    if (!original || !original.datasets) return;
    const datos = Object.values(original.datasets)[0];
    const nombres = original.encoding.x.sort;
    const $ = id => document.getElementById(id);
    const botones = [...document.querySelectorAll('.boton-filtro')];
    const campos = {victorias:'victoria',goles_favor:'Goles_Chile',goles_contra:'Goles_Rival',diferencia_goles:'Dif_Goles'};
    let tipo='todos', indicador='goles_favor', vista='grafico', version=0, ultimo=null;
    const fmt = new Intl.NumberFormat('es-CL',{maximumFractionDigits:2,minimumFractionDigits:2});
    // Los mismos campos alimentan gráfico y tabla. No hay valores escritos a mano.
    function render(){
      const token=++version;
      const etiqueta=DATOS_AUTORES.comparador.indicadores[indicador];
      const campo=campos[indicador];
      const lista=datos.filter(r=>tipo==='todos'||r.Tipo===(tipo==='oficiales'?'Oficial':'Amistoso')).map(r=>({...r,victoria:r.Resultado==='Victoria'?100:0}));
      $('meta-fuente').textContent='Partidos de La Roja · elaboración propia (base preliminar)';
      $('meta-unidad').textContent=etiqueta.unidad;
      $('meta-partidos').textContent=lista.length;
      $('tabla-col-indicador').textContent=etiqueta.nombre;
      $('tabla-comparador-caption').textContent=etiqueta.nombre+' · '+DATOS_AUTORES.comparador.etiquetasTipo[tipo];
      $('tabla-comparador-cuerpo').replaceChildren();
      nombres.forEach((nombre,i)=>{
        const grupo=lista.filter(r=>r.Generacion===nombre);const valor=grupo.length?grupo.reduce((s,r)=>s+Number(r[campo]),0)/grupo.length:null;
        const tr=document.createElement('tr');[nombre,['1990–1997','1998–2006','2007–2017','2018–2026'][i],grupo.length,valor===null?'Sin registros':fmt.format(valor)+(indicador==='victorias'?' %':''),'Base preliminar'].forEach((v,j)=>{const td=document.createElement(j===0?'th':'td');if(j===0)td.scope='row';td.textContent=v;tr.append(td)});$('tabla-comparador-cuerpo').append(tr);
      });
      $('comparador-estado-vivo').textContent=etiqueta.nombre+', '+lista.length+' partidos.';
      if(vista==='tabla')return;
      const host=$('grafico-vivo'), respaldo=$('grafico-respaldo');
      if(typeof window.vegaEmbed!=='function'){host.hidden=true;respaldo.hidden=false;return;}
      respaldo.hidden=true;host.hidden=false;
      // Se conserva la marca de barras de Altair. Los controles modifican solo los campos y filtros solicitados por los autores.
      const spec=JSON.parse(JSON.stringify(original));delete spec.datasets;spec.data={values:lista};delete spec.encoding.column;
      spec.encoding.x={field:'Generacion',type:'nominal',sort:nombres,title:null,axis:{labelAngle:0,labelLimit:155}};
      spec.encoding.y={field:campo,type:'quantitative',aggregate:'mean',title:etiqueta.unidad,scale:indicador==='victorias'?{domain:[0,100]}:{zero:true}};
      spec.encoding.color={condition:{test:"datum.Generacion === 'Generación Dorada'",value:'#CF243D'},value:'#2674A6'};
      spec.encoding.tooltip=[{field:'Generacion',type:'nominal',title:'Generación'},{field:campo,type:'quantitative',aggregate:'mean',format:'.2f',title:etiqueta.nombre},{aggregate:'count',type:'quantitative',title:'Partidos'}];
      // Barras horizontales para que las etiquetas se lean en celular, sin alterar el indicador.
      [spec.encoding.x,spec.encoding.y]=[spec.encoding.y,spec.encoding.x];
      spec.width='container';spec.height=220;spec.title=etiqueta.nombre+' · '+DATOS_AUTORES.comparador.etiquetasTipo[tipo];spec.autosize={type:'fit',contains:'padding'};
      spec.config={...spec.config,font:'Lato',view:{stroke:null}};
      if(ultimo){ultimo.view.finalize();ultimo=null;}
      host.replaceChildren();const montaje=document.createElement('div');montaje.style.width='100%';host.append(montaje);
      window.vegaEmbed(montaje,spec,{actions:false,renderer:'svg'}).then(result=>{if(token!==version){result.view.finalize();return;}ultimo=result;}).catch(()=>{if(token===version){host.hidden=true;respaldo.hidden=false;}});
    }
    botones.forEach(b=>b.addEventListener('click',()=>{tipo=b.dataset.tipoPartido;botones.forEach(x=>{x.classList.toggle('activo',x===b);x.setAttribute('aria-pressed',String(x===b));});render();}));
    $('selector-indicador').value=indicador;$('selector-indicador').addEventListener('change',e=>{indicador=e.target.value;render();});
    function cambiar(v){vista=v;$('vista-grafico').hidden=v==='tabla';$('vista-tabla').hidden=v==='grafico';['grafico','tabla'].forEach(k=>{const b=$('btn-vista-'+k);b.classList.toggle('activo',k===v);b.setAttribute('aria-pressed',String(k===v));});render();}
    $('btn-vista-grafico').addEventListener('click',()=>cambiar('grafico'));$('btn-vista-tabla').addEventListener('click',()=>cambiar('tabla'));
    document.querySelectorAll('.zona-tactica').forEach(b=>b.addEventListener('click',()=>{const mapa={victorias:'victorias',ataque:'goles_favor',defensa:'goles_contra',diferencia:'diferencia_goles'};indicador=mapa[b.dataset.zona];$('selector-indicador').value=indicador;tipo='oficiales';botones.forEach(x=>{const activo=x.dataset.tipoPartido===tipo;x.classList.toggle('activo',activo);x.setAttribute('aria-pressed',String(activo));});render();}));
    render();
  }
  /* ------------------------------------------------------------------------
     9. ANÁLISIS DEL RENDIMIENTO: INTERACCIÓN SOBRE LOS 4 ESPACIOS DE LA CANCHA
     ------------------------------------------------------------------------ */
  function inicializarModuloCancha() {
    const zonas = document.querySelectorAll(".zona-tactica");
    const etiqueta = document.getElementById("cancha-detalle-etiqueta");
    const texto = document.getElementById("cancha-detalle-texto");

    if (!zonas.length) {
      return;
    }

    const original = window.ALTAIR_EQUIPO;
    if (original && original.datasets) {
      const oficiales = Object.values(original.datasets)[0].filter(r => r.Tipo === "Oficial");
      const grupos = original.encoding.x.sort.map(nombre => ({nombre, filas: oficiales.filter(r => r.Generacion === nombre)})).filter(g=>g.filas.length);
      const config = {
        victorias: {campo:"victoria", sufijo:" %", unidad:"de victorias", menor:false},
        ataque: {campo:"Goles_Chile", sufijo:"", unidad:"goles a favor por partido", menor:false},
        defensa: {campo:"Goles_Rival", sufijo:"", unidad:"goles recibidos por partido", menor:true},
        diferencia: {campo:"Dif_Goles", sufijo:"", unidad:"de diferencia de goles por partido", menor:false}
      };
      const fmt = new Intl.NumberFormat("es-CL", {minimumFractionDigits:2,maximumFractionDigits:2});
      Object.entries(config).forEach(([clave, conf])=>{
        const ranking=grupos.map(g=>({nombre:g.nombre, n:g.filas.length, valor:g.filas.reduce((s,r)=>s+(conf.campo==="victoria"?(r.Resultado==="Victoria"?100:0):Number(r[conf.campo])),0)/g.filas.length})).sort((a,b)=>conf.menor?a.valor-b.valor:b.valor-a.valor);
        if(!ranking.length)return;
        const lider=ranking[0], segundo=ranking[1];
        const valor=v=>(clave==="diferencia"&&v>0?"+":"")+fmt.format(v)+conf.sufijo;
        const nodo=document.getElementById("cancha-valor-"+clave);
        if(nodo)nodo.textContent=valor(lider.valor)+" · "+lider.nombre;
        DATOS_AUTORES.zonasCancha[clave].texto=lider.nombre+" registra "+valor(lider.valor)+" "+conf.unidad+" ("+lider.n+" partidos)."+(segundo?" Le sigue "+segundo.nombre+", con "+valor(segundo.valor)+".":"")+" Cifras preliminares de los encuentros etiquetados como oficiales.";
      });
      if(texto)texto.textContent=DATOS_AUTORES.zonasCancha.victorias.texto;
    }
    zonas.forEach(function (zona) {
      zona.addEventListener("click", function () {
        const clave = zona.getAttribute("data-zona");
        const info = DATOS_AUTORES.zonasCancha[clave];

        zonas.forEach(function (z) {
          const activa = z === zona;
          z.classList.toggle("activa", activa);
          z.setAttribute("aria-pressed", activa ? "true" : "false");
        });

        if (info) {
          if (etiqueta) etiqueta.textContent = info.etiqueta;
          if (texto) texto.textContent = info.texto;
        }
      });
    });
  }

  /* Evolución anual: misma base que el comparador. Sin interpolar años vacíos. */
  function inicializarSerieAnual() {
    const $ = id => document.getElementById(id);
    const host = $("vis-rendimiento-anual");
    const tipo = $("anual-tipo"), indicador = $("anual-indicador");
    const original = window.ALTAIR_EQUIPO;
    if (!host || !tipo || !indicador || !original || !original.datasets) return;
    const datos = Object.values(original.datasets)[0];
    const campos = {victorias:"victoria", goles_favor:"Goles_Chile", goles_contra:"Goles_Rival", diferencia_goles:"Dif_Goles"};
    const fmt = new Intl.NumberFormat("es-CL", {minimumFractionDigits:2,maximumFractionDigits:2});
    let actual=null, version=0;
    function render() {
      const token=++version, campo=campos[indicador.value], etiqueta=DATOS_AUTORES.comparador.indicadores[indicador.value];
      const lista=datos.filter(r=>Number(r.ano)>=1998 && Number(r.ano)<=2026 && (tipo.value==="todos" || r.Tipo===(tipo.value==="oficiales"?"Oficial":"Amistoso")));
      let tramo=0;
      const anios=Array.from({length:29},(_,i)=>{
        const ano=1998+i, filas=lista.filter(r=>Number(r.ano)===ano), n=filas.length;
        const valor=n?filas.reduce((s,r)=>s+(campo==="victoria"?(r.Resultado==="Victoria"?100:0):Number(r[campo])),0)/n:null;
        if(!n)tramo++;
        return {ano, partidos:n, valor, tramo, etiqueta:valor===null?"Sin registros":fmt.format(valor)+(campo==="victoria"?" %":"")};
      });
      $("anual-resumen").textContent=etiqueta.unidad+" · "+lista.length+" partidos considerados";
      $("anual-caption").textContent=etiqueta.nombre+" · "+DATOS_AUTORES.comparador.etiquetasTipo[tipo.value];
      $("anual-col-indicador").textContent=etiqueta.unidad;
      const cuerpo=$("anual-cuerpo"); cuerpo.replaceChildren();
      anios.forEach(r=>{const tr=document.createElement("tr"); [r.ano,r.partidos,r.etiqueta].forEach((v,i)=>{const td=document.createElement(i===0?"th":"td");if(i===0)td.scope="row";td.textContent=v;tr.append(td);});cuerpo.append(tr);});
      if(actual){actual.view.finalize();actual=null;}
      host.replaceChildren();
      function fallo(){if(token!==version)return;host.textContent="No fue posible cargar el gráfico. Los datos siguen disponibles en la tabla accesible.";$("anual-tabla").open=true;}
      if(typeof window.vegaEmbed!=="function"){fallo();return;}
      const ejeX={field:"ano",type:"quantitative",scale:{domain:[1998,2026],nice:false,zero:false},axis:{title:"Año",format:"d",values:[1998,2002,2006,2010,2014,2018,2022,2026],labelAngle:0,labelOverlap:true}};
      const ejeY={field:"valor",type:"quantitative",scale:campo==="victoria"?{domain:[0,100],nice:false}:{zero:true},axis:{title:etiqueta.unidad}};
      const spec={"$schema":"https://vega.github.io/schema/vega-lite/v5.json",width:"container",height:285,autosize:{type:"fit",contains:"padding"},background:"transparent",data:{values:anios},config:{font:"Lato",view:{stroke:null},axis:{labelColor:"#d5dde7",titleColor:"#ffffff",gridColor:"#ffffff20",domainColor:"#d5dde7",tickColor:"#d5dde7",labelFontSize:12,titleFontSize:13}},layer:[
        {data:{values:[{inicio:2007,fin:2017}]},mark:{type:"rect",color:"#cf243d",opacity:0.15},encoding:{x:{field:"inicio",type:"quantitative",scale:ejeX.scale,axis:ejeX.axis},x2:{field:"fin"}}},
        {transform:[{filter:"isValid(datum.valor)"}],mark:{type:"line",color:"#8cc8ed",strokeWidth:2},encoding:{x:ejeX,y:ejeY,detail:{field:"tramo",type:"nominal"},order:{field:"ano",type:"quantitative"}}},
        {transform:[{filter:"isValid(datum.valor)"}],mark:{type:"point",filled:true,size:72,opacity:1},encoding:{x:ejeX,y:ejeY,color:{condition:{test:"datum.ano >= 2007 && datum.ano <= 2017",value:"#ff7e91"},value:"#8cc8ed"},tooltip:[{field:"ano",type:"quantitative",title:"Año",format:"d"},{field:"partidos",type:"quantitative",title:"Partidos"},{field:"etiqueta",type:"nominal",title:etiqueta.nombre}]}}
      ]};
      const montaje=document.createElement("div"); montaje.style.width="100%";host.append(montaje);
      window.vegaEmbed(montaje,spec,{actions:false,renderer:"svg"}).then(r=>{if(token!==version){r.view.finalize();return;}actual=r;}).catch(fallo);
    }
    tipo.addEventListener("change",render);indicador.addEventListener("change",render);render();
  }

  /* ------------------------------------------------------------------------
     10. LOS PROTAGONISTAS: GALERÍA FOTOGRÁFICA SELECCIONABLE
     ------------------------------------------------------------------------ */
  function inicializarGaleriaProtagonistas() {
    const opciones = Array.from(document.querySelectorAll(".tarjeta-galeria"));
    const fichaEtiqueta = document.getElementById("ficha-etiqueta");
    const fichaNombre = document.getElementById("ficha-nombre");
    const fichaGeneracion = document.getElementById("ficha-generacion");
    const fichaPeriodo = document.getElementById("ficha-periodo");
    const fichaPartidos = document.getElementById("ficha-partidos");
    const fichaGoles = document.getElementById("ficha-goles");
    const fichaResena = document.getElementById("ficha-resena");

    if (!opciones.length) {
      return;
    }

    function seleccionarProtagonista(indice) {
      const opcionActiva = opciones[indice];
      if (!opcionActiva) return;

      const id = opcionActiva.getAttribute("data-protagonista");
      const info = DATOS_AUTORES.protagonistas[id];

      opciones.forEach(function (op, idx) {
        const seleccionada = idx === indice;
        op.classList.toggle("activa", seleccionada);
        op.setAttribute("aria-selected", seleccionada ? "true" : "false");
      });

      if (info) {
        if (fichaEtiqueta) fichaEtiqueta.textContent = info.etiqueta;
        if (fichaNombre) fichaNombre.textContent = info.nombre;
        if (fichaGeneracion) fichaGeneracion.textContent = info.generacion;
        if (fichaPeriodo) fichaPeriodo.textContent = info.periodo;
        if (fichaPartidos) fichaPartidos.textContent = info.partidos;
        if (fichaGoles) fichaGoles.textContent = info.goles;
        if (fichaResena) fichaResena.textContent = info.resena;
      }
    }

    opciones.forEach(function (opcion, idx) {
      opcion.addEventListener("click", function () {
        seleccionarProtagonista(idx);
      });

      opcion.addEventListener("keydown", function (evento) {
        if (evento.key === "ArrowRight" || evento.key === "ArrowDown") {
          evento.preventDefault();
          const siguiente = (idx + 1) % opciones.length;
          seleccionarProtagonista(siguiente);
          opciones[siguiente].focus();
        } else if (evento.key === "ArrowLeft" || evento.key === "ArrowUp") {
          evento.preventDefault();
          const anterior = (idx - 1 + opciones.length) % opciones.length;
          seleccionarProtagonista(anterior);
          opciones[anterior].focus();
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     11. INICIALIZACIÓN GLOBAL AL CARGAR EL DOCUMENTO
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    inicializarRespaldoImagenes();
    inicializarProgresoLectura();
    inicializarNavegacion();
    inicializarLineaTiempo();
    inicializarComparador();
    inicializarModuloCancha();
    inicializarSerieAnual();
    inicializarGaleriaProtagonistas();
    inicializarVisualizacionesAltair();
  });

  // Exposición pública ordenada para conectar gráficos o datos en futuras entregas
  window.LA_ROJA_WEBSTORY = {
    cargarVisualizacionAltair: cargarVisualizacionAltair,
    CONFIG_VISUALIZACIONES: CONFIG_VISUALIZACIONES,
    DATOS_AUTORES: DATOS_AUTORES,
  };
})();

window.addEventListener("message",e=>{const f=document.getElementById("modulo-goleadores");if(f&&e.source===f.contentWindow&&e.data?.tipo==="altura-goleadores"&&Number.isFinite(e.data.altura)){f.style.height=Math.min(10000,Math.max(500,e.data.altura+10))+"px";}});
