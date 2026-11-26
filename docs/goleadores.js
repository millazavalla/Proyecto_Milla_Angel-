
    const goleadores = [
      { nombre: "Alexis Sánchez", oficiales: 30, amistosos: 21 },
      { nombre: "Eduardo Vargas", oficiales: 29, amistosos: 16 },
      { nombre: "Marcelo Salas", oficiales: 22, amistosos: 15 },
      { nombre: "Iván Zamorano", oficiales: 23, amistosos: 11 },
      { nombre: "Carlos Caszely", oficiales: 15, amistosos: 14 },
      { nombre: "Leonel Sánchez", oficiales: 16, amistosos: 8 },
      { nombre: "Jorge Aravena", oficiales: 12, amistosos: 10 },
      { nombre: "Arturo Vidal", oficiales: 24, amistosos: 10 },
      { nombre: "Humberto Suazo", oficiales: 15, amistosos: 6 }
    ].map(g => ({ ...g, total: g.oficiales + g.amistosos }));

    let filtroActual = "total";
    let ordenDesc = true;
    const maxTotal = Math.max(...goleadores.map(g => g.total));

    const barsContainer = document.getElementById("bars-container");
    const tableBody = document.getElementById("table-body");
    const statusText = document.getElementById("status-text");

    function getValor(g) {
      if (filtroActual === "oficiales") return g.oficiales;
      if (filtroActual === "amistosos") return g.amistosos;
      return g.total;
    }

    function render() {
      const lista = [...goleadores].sort((a, b) =>
        ordenDesc ? getValor(b) - getValor(a) : getValor(a) - getValor(b)
      );

      barsContainer.innerHTML = lista.map(g => {
        const wOf = filtroActual === "amistosos" ? 0 : (g.oficiales / maxTotal) * 100;
        const wAm = filtroActual === "oficiales" ? 0 : (g.amistosos / maxTotal) * 100;
        return `
          <div class="bar-row" role="listitem">
            <span class="player-name">${g.nombre}</span>
            <div class="bar-track" title="${g.nombre}: ${g.oficiales} oficiales, ${g.amistosos} amistosos">
              <div class="bar-seg-oficial" style="width:${wOf}%"></div>
              <div class="bar-seg-amistoso" style="width:${wAm}%"></div>
            </div>
            <span class="bar-value">${getValor(g)}</span>
          </div>
        `;
      }).join("");

      tableBody.innerHTML = lista.map(g => `
        <tr>
          <td>${g.nombre}</td>
          <td class="num">${g.oficiales}</td>
          <td class="num">${g.amistosos}</td>
          <td class="num"><strong>${g.total}</strong></td>
        </tr>
      `).join("");

      const etiquetas = {
        total: "Goles oficiales + Goles en amistosos (Total de goles)",
        oficiales: "Solo goles oficiales",
        amistosos: "Solo goles en amistosos"
      };
      statusText.innerHTML = `Mostrando: <strong>${etiquetas[filtroActual]}</strong> · Orden: <strong>${ordenDesc ? "Mayor a menor" : "Menor a mayor"}</strong>`;
    }

    document.querySelectorAll(".seg-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".seg-btn").forEach(b => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");
        filtroActual = btn.dataset.filter;
        render();
      });
    });

    document.getElementById("btn-sort").addEventListener("click", (e) => {
      ordenDesc = !ordenDesc;
      e.target.textContent = ordenDesc ? "Ordenar: Mayor a menor" : "Ordenar: Menor a mayor";
      render();
    });

    document.getElementById("btn-toggle-view").addEventListener("click", (e) => {
      const chartView = document.getElementById("chart-view");
      const tableView = document.getElementById("table-view");
      const mostrandoTabla = !tableView.hidden;
      tableView.hidden = mostrandoTabla;
      chartView.hidden = !mostrandoTabla;
      e.target.textContent = mostrandoTabla ? "Ver tabla accesible" : "Ver gráfico de barras";
      e.target.setAttribute("aria-expanded", String(!mostrandoTabla));
    });

    const fichasPodio = [
      {
        titulo: "Fotografía 01 — Alexis Sánchez",
        registro: "51 goles totales (30 oficiales · 21 amistosos)",
        contexto: "2006 – Presente · Máximo artillero histórico",
        logros: "Bicampeón de América (2015, 2016)"
      },
      {
        titulo: "Fotografía 02 — Eduardo Vargas",
        registro: "45 goles totales (29 oficiales · 16 amistosos)",
        contexto: "2009 – Presente · Goleador histórico en Copa América",
        logros: "Bicampeón de América (2015, 2016) y Botín de Oro"
      },
      {
        titulo: "Fotografía 03 — Marcelo Salas",
        registro: "37 goles totales (22 oficiales · 15 amistosos)",
        contexto: "1994 – 2007 · Referente histórico de Francia 1998",
        logros: "4 goles en la Copa Mundial de la FIFA 1998"
      }
    ];

    document.querySelectorAll(".photo-slot-card").forEach(card => {
      card.addEventListener("click", () => {
        document.querySelectorAll(".photo-slot-card").forEach(c => {
          c.classList.remove("is-active");
          c.setAttribute("aria-pressed", "false");
        });
        card.classList.add("is-active");
        card.setAttribute("aria-pressed", "true");
        const f = fichasPodio[Number(card.dataset.slot)];
        document.getElementById("slot-det-title").textContent = f.titulo;
        document.getElementById("slot-det-player").textContent = f.registro;
        document.getElementById("slot-det-context").textContent = f.contexto;
        document.getElementById("slot-det-credit").textContent = f.logros;
      });
    });

    render();
  
function informarAltura(){parent.postMessage({tipo:"altura-goleadores",altura:Math.ceil(document.querySelector("main").getBoundingClientRect().height)},"*");}
new ResizeObserver(informarAltura).observe(document.body); window.addEventListener("load",informarAltura);
