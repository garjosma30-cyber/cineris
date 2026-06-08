/* ============================================================================
   SECTOR CINERIS — Motor de la web (sin dependencias).
   Lee el contenido de js/data.js y lo renderiza. No hace falta tocar esto
   para añadir lore: eso se hace en js/data.js.
   ========================================================================== */
(function () {
  "use strict";

  /* ----------------------------------------------------------- iconos SVG */
  function svg(inner, big) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="' + (big ? 1.3 : 1.5) + '" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>';
  }
  var ICON = {
    aquila:
      '<path d="M12 4.4c.85 0 1.5.7 1.5 1.55S12.85 7.5 12 7.5s-1.5-.7-1.5-1.55S11.15 4.4 12 4.4z"/>' +
      '<path d="M12 7.6c2.6 2 5.7 2.5 9.2 1.9-2.6 1.2-4.2 2.9-4.5 5.1C14.9 13 13.5 12.7 12 12.7s-2.9.3-4.7 1.9C7 12.4 5.4 10.7 2.8 9.5 6.3 10.1 9.4 9.6 12 7.6z"/>' +
      '<path d="M12 12.7v6.9M9.4 16l2.6 3.6L14.6 16"/>',
    home:   '<path d="M4 11l8-7 8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>',
    hourglass: '<path d="M6.5 4h11M6.5 20h11"/><path d="M7 4c0 4.5 3.2 5.4 5 8 1.8-2.6 5-3.5 5-8"/><path d="M7 20c0-4.5 3.2-5.4 5-8 1.8 2.6 5 3.5 5 8"/>',
    shield: '<path d="M12 3.2l7 2.6v4.7c0 5-3 7.8-7 9.3-4-1.5-7-4.3-7-9.3V5.8z"/><path d="M9.5 12l1.8 1.8 3.4-3.6"/>',
    person: '<circle cx="12" cy="8" r="3.6"/><path d="M5.4 20a6.6 6.6 0 0 1 13.2 0"/>',
    planet: '<circle cx="12" cy="12" r="6.4"/><ellipse cx="12" cy="12" rx="10" ry="3.4" transform="rotate(-22 12 12)"/>',
    sun:    '<circle cx="12" cy="12" r="4.3"/><path d="M12 2.6v2.6M12 18.8v2.6M2.6 12h2.6M18.8 12h2.6M5.1 5.1l1.85 1.85M17.05 17.05 18.9 18.9M18.9 5.1l-1.85 1.85M6.95 17.05 5.1 18.9"/>',
    swords: '<path d="M6.6 6.6 17 17"/><path d="M17.4 6.6 7 17"/><path d="M4 5h3v3"/><path d="M20 5h-3v3"/><path d="M4 19h3v-3"/><path d="M20 19h-3v-3"/>',
    gem:    '<path d="M6 4h12l3 5-9 11L3 9z"/><path d="M3 9h18M9 4 6 9l6 11 6-11-3-5"/>',
    claw:   '<path d="M6 3.5c1.1 4 1.1 8.5 0 12.5"/><path d="M11 3c1.1 4.5 1.1 9.5 0 13.5"/><path d="M16 4c1.1 4 1.1 8.2 0 11.5"/><path d="M4 17c3.2 3 12.8 3 16 0"/>',
    book:   '<path d="M5 4h10.5a2 2 0 0 1 2 2v13.5H7a2 2 0 0 1-2-2z"/><path d="M5 4a2 2 0 0 0-2 2v12"/><path d="M8.5 8.5h6M8.5 12h6"/>',
    skull:  '<path d="M12 3a8 8 0 0 0-8 8c0 3 1.6 4.8 3 6v3h3v-2h4v2h3v-3c1.4-1.2 3-3 3-6a8 8 0 0 0-8-8z"/><circle cx="9" cy="11.5" r="1.3"/><circle cx="15" cy="11.5" r="1.3"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    menu:   '<path d="M4 7h16M4 12h16M4 17h16"/>',
    back:   '<path d="M15 5l-7 7 7 7"/>',
    link:   '<path d="M10 13.8a3.8 3.8 0 0 0 5.4 0l2.8-2.8a3.8 3.8 0 1 0-5.4-5.4l-1.4 1.4"/><path d="M13.6 10.2a3.8 3.8 0 0 0-5.4 0l-2.8 2.8a3.8 3.8 0 1 0 5.4 5.4l1.4-1.4"/>'
  };
  function icon(name, big) { return svg(ICON[name] || ICON.book, big); }

  /* ------------------------------------------------------------- utilidades */
  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function enc(s) { return encodeURIComponent(s); }

  /* mini-formateador de texto (subconjunto de Markdown) */
  function inline(s) {
    s = esc(s);
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (_, txt, url) {
      var ok = /^(https?:|mailto:|#|\/)/i.test(url) ? url : "#";
      var ext = /^https?:/i.test(ok);
      return '<a href="' + esc(ok) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + txt + "</a>";
    });
    return s;
  }
  function md(src) {
    var lines = String(src || "").replace(/\r\n/g, "\n").split("\n");
    var out = "", i = 0, para = [];
    function flush() { if (para.length) { out += "<p>" + inline(para.join(" ").trim()) + "</p>"; para = []; } }
    while (i < lines.length) {
      var t = lines[i].trim();
      if (t === "") { flush(); i++; continue; }
      if (t === "---") { flush(); out += "<hr>"; i++; continue; }
      if (t.indexOf("### ") === 0) { flush(); out += "<h3>" + inline(t.slice(4)) + "</h3>"; i++; continue; }
      if (t.indexOf("## ") === 0) { flush(); out += "<h2>" + inline(t.slice(3)) + "</h2>"; i++; continue; }
      if (t.charAt(0) === ">") {
        flush(); var bq = [];
        while (i < lines.length && lines[i].trim().charAt(0) === ">") { bq.push(lines[i].trim().replace(/^>\s?/, "")); i++; }
        out += "<blockquote>" + inline(bq.join(" ")) + "</blockquote>"; continue;
      }
      if (/^[-*]\s+/.test(t)) {
        flush(); var items = [];
        while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) { items.push("<li>" + inline(lines[i].trim().replace(/^[-*]\s+/, "")) + "</li>"); i++; }
        out += "<ul>" + items.join("") + "</ul>"; continue;
      }
      para.push(t); i++;
    }
    flush();
    return out;
  }
  function plain(src) {
    return String(src || "").replace(/\r\n/g, "\n")
      .replace(/^\s{0,3}#+\s+/gm, "").replace(/^\s*>\s?/gm, "")
      .replace(/^\s*[-*]\s+/gm, "").replace(/---/g, " ")
      .replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\s+/g, " ").trim();
  }
  function excerpt(src, n) {
    var t = plain(src);
    return t.length > n ? t.slice(0, n - 1).trim() + "…" : t;
  }

  /* ------------------------------------------------------------- datos */
  var WORLD = window.WORLD || { name: "Mi Mundo", subtitle: "", intro: "", quote: null };
  var SECTIONS = window.SECTIONS || [];
  var TIMELINE = window.TIMELINE || null;

  function getSection(id) { for (var i = 0; i < SECTIONS.length; i++) if (SECTIONS[i].id === id) return SECTIONS[i]; return null; }
  function getEntry(sec, eid) { if (!sec || !sec.entries) return null; for (var i = 0; i < sec.entries.length; i++) if (sec.entries[i].id === eid) return sec.entries[i]; return null; }

  /* ------------------------------------------------------- componentes HTML */
  function tagsHtml(tags, clickable) {
    if (!tags || !tags.length) return "";
    return '<div class="tags">' + tags.map(function (t) {
      return clickable
        ? '<a class="tag click" href="#/buscar/' + enc(t) + '">' + esc(t) + "</a>"
        : '<span class="tag">' + esc(t) + "</span>";
    }).join("") + "</div>";
  }
  function rule() { return '<div class="rule"><span class="diamond"></span></div>'; }
  function cardThumb(entry, sec) {
    if (entry.image) return '<div class="thumb"><img src="' + esc(entry.image) + '" alt="' + esc(entry.title) + '" loading="lazy"></div>';
    return '<div class="thumb"><span class="ph">' + icon(sec.icon) + "</span></div>";
  }

  /* --------------------------------------------------------------- vistas */
  function viewHome() {
    var q = WORLD.quote;
    var cards = SECTIONS.map(function (s) {
      var n = (s.entries || []).length;
      return '<a class="home-card" href="#/s/' + s.id + '">' + icon(s.icon) +
        '<div><div class="hc-title">' + esc(s.title) + '</div>' +
        '<div class="hc-count">' + n + (n === 1 ? " entrada" : " entradas") + "</div></div></a>";
    }).join("");

    return '<div class="view">' +
      '<div class="hero">' +
        '<div class="aquila-big">' + icon("aquila", true) + "</div>" +
        "<h1>" + esc(WORLD.name) + "</h1>" +
        (WORLD.subtitle ? '<div class="subtitle">' + esc(WORLD.subtitle) + "</div>" : "") +
        (WORLD.intro ? '<div class="intro prose">' + md(WORLD.intro) + "</div>" : "") +
      "</div>" +
      (q ? '<div class="banner-quote"><div class="q">«' + esc(q.text) + '»</div>' +
           (q.source ? '<div class="src">' + esc(q.source) + "</div>" : "") + "</div>" : rule()) +
      '<div class="home-grid">' + cards +
        (TIMELINE ? '<a class="home-card" href="#/cronologia">' + icon("hourglass") +
          '<div><div class="hc-title">' + esc(TIMELINE.title) + '</div>' +
          '<div class="hc-count">Línea temporal</div></div></a>' : "") +
      "</div>" +
    "</div>";
  }

  function viewSection(sec) {
    var grid = (sec.entries && sec.entries.length)
      ? '<div class="card-grid">' + sec.entries.map(function (e) {
          return '<a class="card" href="#/s/' + sec.id + "/" + e.id + '">' +
            cardThumb(e, sec) +
            '<div class="body">' +
              '<div class="c-title">' + esc(e.title) + "</div>" +
              (e.epithet ? '<div class="c-epithet">' + esc(e.epithet) + "</div>" : "") +
              '<div class="c-excerpt">' + esc(excerpt(e.body, 150)) + "</div>" +
              tagsHtml(e.tags, false) +
            "</div></a>";
        }).join("") + "</div>"
      : emptyBlock("Aún no hay entradas en esta sección.");

    return '<div class="view">' +
      crumb([["Inicio", "#/"], [sec.title, null]]) +
      '<div class="section-head"><h1><span class="icon-badge">' + icon(sec.icon) + "</span>" + esc(sec.title) + "</h1>" +
      (sec.blurb ? '<div class="blurb">' + esc(sec.blurb) + "</div>" : "") + "</div>" +
      grid +
    "</div>";
  }

  function viewEntry(sec, e) {
    var related = "";
    if (e.related && e.related.length) {
      related = '<div class="related"><div class="r-label">Relacionado</div><div class="r-links">' +
        e.related.map(function (r) {
          return '<a class="r-chip" href="#/s/' + r.section + "/" + r.entry + '">' + icon("link") + esc(r.label || r.entry) + "</a>";
        }).join("") + "</div></div>";
    }
    var fig = e.image ? '<div class="e-figure"><img src="' + esc(e.image) + '" alt="' + esc(e.title) + '"></div>' : "";
    var pq = e.quote ? '<div class="pull-quote"><div class="q">«' + esc(e.quote.text) + '»</div>' +
      (e.quote.source ? '<div class="src">' + esc(e.quote.source) + "</div>" : "") + "</div>" : "";

    return '<div class="view"><div class="entry">' +
      '<a class="back-link" href="#/s/' + sec.id + '">' + icon("back") + "Volver a " + esc(sec.title) + "</a>" +
      fig +
      "<h1>" + esc(e.title) + "</h1>" +
      (e.epithet ? '<div class="e-epithet">' + esc(e.epithet) + "</div>" : "") +
      (e.tags && e.tags.length ? '<div class="e-tags">' + tagsHtml(e.tags, true) + "</div>" : "") +
      pq +
      '<div class="prose">' + md(e.body) + "</div>" +
      related +
    "</div></div>";
  }

  function viewTimeline() {
    if (!TIMELINE || !TIMELINE.eras) return viewNotFound();
    var romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
    var eras = TIMELINE.eras.map(function (era, idx) {
      var events = (era.events || []).map(function (ev) {
        return '<div class="event">' +
          (ev.date ? '<div class="ev-date">' + esc(ev.date) + "</div>" : "") +
          '<div class="ev-title">' + esc(ev.title) + "</div>" +
          (ev.text ? '<div class="ev-text">' + esc(ev.text) + "</div>" : "") +
        "</div>";
      }).join("");
      return '<div class="era">' +
        '<div class="era-head"><span class="numeral">' + (romans[idx] || idx + 1) + "</span>" +
        "<h2>" + esc(era.name) + "</h2>" +
        (era.caption ? '<span class="caption">' + esc(era.caption) + "</span>" : "") + "</div>" +
        events + "</div>";
    }).join("");

    return '<div class="view">' +
      crumb([["Inicio", "#/"], [TIMELINE.title, null]]) +
      '<div class="section-head"><h1><span class="icon-badge">' + icon("hourglass") + "</span>" + esc(TIMELINE.title) + "</h1>" +
      (TIMELINE.blurb ? '<div class="blurb">' + esc(TIMELINE.blurb) + "</div>" : "") + "</div>" +
      '<div class="timeline">' + eras + "</div>" +
    "</div>";
  }

  function viewSearch(query) {
    var q = (query || "").toLowerCase().trim();
    var results = [];
    if (q) {
      SECTIONS.forEach(function (s) {
        (s.entries || []).forEach(function (e) {
          var hay = [e.title, e.epithet, (e.tags || []).join(" "), plain(e.body)].join(" ").toLowerCase();
          if (hay.indexOf(q) !== -1) results.push({ s: s, e: e });
        });
      });
    }
    var body;
    if (!q) {
      body = emptyBlock("Escribe algo para buscar en todo el archivo.");
    } else if (!results.length) {
      body = emptyBlock('Sin resultados para «' + esc(query) + '».');
    } else {
      body = '<div class="results-info">' + results.length + (results.length === 1 ? " resultado" : " resultados") +
        " para «" + esc(query) + "»</div>" +
        results.map(function (r) {
          return '<a class="result-row" href="#/s/' + r.s.id + "/" + r.e.id + '">' + icon(r.s.icon) +
            "<div><div class=\"r-title\">" + esc(r.e.title) + "</div>" +
            '<div class="r-where">' + esc(r.s.title) + (r.e.epithet ? " · " + esc(r.e.epithet) : "") + "</div>" +
            '<div class="r-excerpt">' + esc(excerpt(r.e.body, 160)) + "</div></div></a>";
        }).join("");
    }
    return '<div class="view">' +
      crumb([["Inicio", "#/"], ["Búsqueda", null]]) +
      '<div class="section-head"><h1><span class="icon-badge">' + icon("search") + "</span>Búsqueda</h1></div>" +
      body + "</div>";
  }

  function viewNotFound() {
    return '<div class="view">' + emptyBlock("Esta página se ha perdido en la ceniza.") +
      '<div style="text-align:center"><a class="r-chip" href="#/">' + icon("home") + "Volver al inicio</a></div></div>";
  }

  function emptyBlock(msg) {
    return '<div class="empty">' + icon("skull") + '<div class="big">' + esc(msg) + "</div></div>";
  }
  function crumb(parts) {
    return '<div class="crumb">' + parts.map(function (p, i) {
      var sep = i ? '<span class="sep">/</span>' : "";
      return sep + (p[1] ? '<a href="' + p[1] + '">' + esc(p[0]) + "</a>" : "<span>" + esc(p[0]) + "</span>");
    }).join("") + "</div>";
  }

  /* ----------------------------------------------------------- navegación */
  function buildNav() {
    var html =
      '<div class="nav-group-label">Navegación</div>' +
      navLink("home", "#/", icon("home"), "Inicio") +
      (TIMELINE ? navLink("cronologia", "#/cronologia", icon("hourglass"), TIMELINE.title) : "") +
      '<div class="nav-sep"></div>' +
      '<div class="nav-group-label">Mundos</div>' +
      SECTIONS.map(function (s) {
        var n = (s.entries || []).length;
        return navLink("s:" + s.id, "#/s/" + s.id, icon(s.icon), s.title, n);
      }).join("");
    el("nav").innerHTML = html;
  }
  function navLink(key, href, ico, label, count) {
    return '<a class="nav-link" data-key="' + key + '" href="' + href + '">' + ico +
      "<span>" + esc(label) + "</span>" +
      (count != null ? '<span class="count">' + count + "</span>" : "") + "</a>";
  }
  function setActive(key) {
    var links = document.querySelectorAll(".nav-link");
    for (var i = 0; i < links.length; i++) links[i].classList.toggle("active", links[i].getAttribute("data-key") === key);
  }

  /* --------------------------------------------------------------- router */
  function render(html, scroll) {
    el("app").innerHTML = html;
    if (scroll !== false) window.scrollTo(0, 0);
    closeNav();
  }
  function router() {
    var hash = location.hash.replace(/^#/, "");
    var parts = hash.split("/").filter(Boolean);
    var title = WORLD.name;

    if (parts.length === 0) {
      render(viewHome()); setActive("home");
    } else if (parts[0] === "cronologia") {
      render(viewTimeline()); setActive("cronologia");
      title = TIMELINE ? TIMELINE.title + " · " + WORLD.name : WORLD.name;
    } else if (parts[0] === "buscar") {
      var q = parts[1] ? decodeURIComponent(parts.slice(1).join("/")) : "";
      render(viewSearch(q), false); setActive("");
      if (el("searchInput") && document.activeElement !== el("searchInput")) el("searchInput").value = q;
      title = "Búsqueda · " + WORLD.name;
    } else if (parts[0] === "s" && parts[1]) {
      var sec = getSection(parts[1]);
      if (!sec) { render(viewNotFound()); setActive(""); }
      else if (parts[2]) {
        var e = getEntry(sec, parts[2]);
        if (!e) { render(viewNotFound()); }
        else { render(viewEntry(sec, e)); title = e.title + " · " + WORLD.name; }
        setActive("s:" + sec.id);
      } else {
        render(viewSection(sec)); setActive("s:" + sec.id);
        title = sec.title + " · " + WORLD.name;
      }
    } else {
      render(viewNotFound()); setActive("");
    }
    document.title = title;
  }

  /* ------------------------------------------------------ menú móvil + buscar */
  function openNav() { document.body.classList.add("nav-open"); }
  function closeNav() { document.body.classList.remove("nav-open"); }

  function initChrome() {
    el("brandName").textContent = WORLD.name;
    el("brandSub").textContent = WORLD.subtitle || "";
    document.title = WORLD.name;

    var input = el("searchInput");
    input.addEventListener("input", function () {
      var v = input.value.trim();
      var target = v ? "#/buscar/" + enc(v) : "#/";
      if (location.hash !== target) history.replaceState(null, "", target);
      router();
    });
    input.addEventListener("keydown", function (ev) { if (ev.key === "Escape") { input.value = ""; location.hash = "#/"; input.blur(); } });

    el("menuBtn").addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
    el("scrim").addEventListener("click", closeNav);
  }

  /* ----------------------------------------------------------------- init */
  function start() {
    if (!window.SECTIONS) {
      el("app").innerHTML = '<div class="view"><div class="empty">' +
        '<div class="big">No se ha podido cargar el contenido (js/data.js).</div></div></div>';
      return;
    }
    initChrome();
    buildNav();
    window.addEventListener("hashchange", router);
    router();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
