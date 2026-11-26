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
        alt: "[Descripción accesible de la fotografía histórica de la Generación 1990-1997]",
        reservaTitulo: "Fotografía histórica · 1990–1997",
        reservaRuta: "./assets/img/epoca-1990-1997.jpg",
        pieFoto: "Fotografía por incorporar",
        creditoFoto: "Crédito pendiente",
        texto:
          "Contexto histórico de 1990–1997 pendiente de incorporación por el equipo.",
        hitos: [
          "Hitos pendientes de selección por el equipo",
        ],
      },
      "1998-2006": {
        rango: "Período 1998–2006",
        titulo: "Generación Francia 98",
        imagen: "./assets/img/epoca-1998-2006.jpg",
        alt: "[Descripción accesible de la fotografía histórica de la Generación Francia 98]",
        reservaTitulo: "Fotografía histórica · 1998–2006",
        reservaRuta: "./assets/img/epoca-1998-2006.jpg",
        pieFoto: "Fotografía por incorporar",
        creditoFoto: "Crédito pendiente",
        texto:
          "También nos interesa mirar qué ocurrió con generaciones anteriores, especialmente la de los años 90, donde destacaron jugadores como Iván Zamorano y Marcelo Salas y se logró la clasificación al Mundial de Francia 1998.",
        hitos: [
          "Hitos pendientes de selección por el equipo",
        ],
      },
      "2007-2017": {
        rango: "Período 2007–2017",
        titulo: "Generación Dorada",
        imagen: "./assets/img/epoca-2007-2017.jpg",
        alt: "[Descripción accesible de la fotografía histórica de la Generación Dorada]",
        reservaTitulo: "Fotografía histórica · 2007–2017",
        reservaRuta: "./assets/img/epoca-2007-2017.jpg",
        pieFoto: "Fotografía por incorporar",
        creditoFoto: "Crédito pendiente",
        texto:
          "Si bien entendemos que hay razones claras para pensar eso, como que Chile consiguió dos Copas América seguidas en 2015 y 2016, eso tampoco nos dice mucho, ya que ¿fue la mejor selección o solo la que consiguió más títulos importantes?",
        hitos: [
          "Hitos pendientes de selección por el equipo",
        ],
      },
      "2018-2026": {
        rango: "Período 2018–2026",
        titulo: "Post Generación Dorada",
        imagen: "./assets/img/epoca-2018-2026.jpg",
        alt: "[Descripción accesible de la fotografía histórica del período Post Generación Dorada]",
        reservaTitulo: "Fotografía histórica · 2018–2026",
        reservaRuta: "./assets/img/epoca-2018-2026.jpg",
        pieFoto: "Fotografía por incorporar",
        creditoFoto: "Crédito pendiente",
        texto:
          "Con 2007–2017 versus 2018–2026 se puede visualizar si hubo una caída inmediata, gradual o irregular en victorias, goles y diferencia de gol.",
        hitos: [
          "Hitos pendientes de selección por el equipo",
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
      $('meta-fuente').textContent='Base ampliada de Millaray · Entrega 02/03 (pendiente de validación)';
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
    document.querySelectorAll('.zona-tactica').forEach(b=>b.addEventListener('click',()=>{const mapa={victorias:'victorias',ataque:'goles_favor',defensa:'goles_contra',diferencia:'diferencia_goles'};indicador=mapa[b.dataset.zona];$('selector-indicador').value=indicador;render();}));
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
