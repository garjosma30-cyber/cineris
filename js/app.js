/* ============================================================================
   SISTEMA CINERIS — Motor de la web (sin dependencias).
   Lee js/data.js (árbol NAV) y lo renderiza. Para añadir lore se edita
   js/data.js, no este archivo.
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
    planet: '<circle cx="12" cy="12" r="6.4"/><ellipse cx="12" cy="12" rx="10" ry="3.4" transform="rotate(-22 12 12)"/>',
    sun:    '<circle cx="12" cy="12" r="4.3"/><path d="M12 2.6v2.6M12 18.8v2.6M2.6 12h2.6M18.8 12h2.6M5.1 5.1l1.85 1.85M17.05 17.05 18.9 18.9M18.9 5.1l-1.85 1.85M6.95 17.05 5.1 18.9"/>',
    shield: '<path d="M12 3.2l7 2.6v4.7c0 5-3 7.8-7 9.3-4-1.5-7-4.3-7-9.3V5.8z"/><path d="M9.5 12l1.8 1.8 3.4-3.6"/>',
    swords: '<path d="M6.6 6.6 17 17"/><path d="M17.4 6.6 7 17"/><path d="M4 5h3v3"/><path d="M20 5h-3v3"/><path d="M4 19h3v-3"/><path d="M20 19h-3v-3"/>',
    gem:    '<path d="M6 4h12l3 5-9 11L3 9z"/><path d="M3 9h18M9 4 6 9l6 11 6-11-3-5"/>',
    cog:    '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    portal: '<path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 7a5 5 0 1 0 5 5"/><circle cx="12" cy="12" r="1.6"/>',
    chaosstar: '<path d="M12 2.5v19M2.5 12h19M5.4 5.4l13.2 13.2M18.6 5.4 5.4 18.6"/>',
    person: '<circle cx="12" cy="8" r="3.6"/><path d="M5.4 20a6.6 6.6 0 0 1 13.2 0"/>',
    book:   '<path d="M5 4h10.5a2 2 0 0 1 2 2v13.5H7a2 2 0 0 1-2-2z"/><path d="M5 4a2 2 0 0 0-2 2v12"/><path d="M8.5 8.5h6M8.5 12h6"/>',
    claw:   '<path d="M6 3.5c1.1 4 1.1 8.5 0 12.5"/><path d="M11 3c1.1 4.5 1.1 9.5 0 13.5"/><path d="M16 4c1.1 4 1.1 8.2 0 11.5"/><path d="M4 17c3.2 3 12.8 3 16 0"/>',
    banner: '<path d="M7 3v18"/><path d="M7 4h11l-2.5 3.5L18 11H7z"/>',
    helm:   '<circle cx="12" cy="8" r="3.6"/><path d="M5.4 20a6.6 6.6 0 0 1 13.2 0"/>',
    skull:  '<path d="M12 3a8 8 0 0 0-8 8c0 3 1.6 4.8 3 6v3h3v-2h4v2h3v-3c1.4-1.2 3-3 3-6a8 8 0 0 0-8-8z"/><circle cx="9" cy="11.5" r="1.3"/><circle cx="15" cy="11.5" r="1.3"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    back:   '<path d="M15 5l-7 7 7 7"/>',
    link:   '<path d="M10 13.8a3.8 3.8 0 0 0 5.4 0l2.8-2.8a3.8 3.8 0 1 0-5.4-5.4l-1.4 1.4"/><path d="M13.6 10.2a3.8 3.8 0 0 0-5.4 0l-2.8 2.8a3.8 3.8 0 1 0 5.4 5.4l1.4-1.4"/>'
  };
  function icon(name, big) { return svg(ICON[name] || ICON.book, big); }

  /* ------------------------------------------------------------- utilidades */
  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
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
  function excerpt(src, n) { var t = plain(src); return t.length > n ? t.slice(0, n - 1).trim() + "…" : t; }

  /* ------------------------------------------------------------- datos */
  var WORLD = window.WORLD || { name: "Mi Mundo", subtitle: "", intro: "", quote: null };
  var NAV = window.NAV || [];
  var TIMELINE = window.TIMELINE || null;

  function walk(nodes, trail, cb) {
    (nodes || []).forEach(function (n) { var t = trail.concat([n]); cb(n, t); if (n.children) walk(n.children, t, cb); });
  }
  function pathOf(trail) { return trail.map(function (n) { return n.id; }).join("/"); }
  function findByPath(segs) {
    var nodes = NAV, node = null, trail = [];
    for (var i = 0; i < segs.length; i++) {
      node = null;
      for (var j = 0; j < nodes.length; j++) { if (nodes[j].id === segs[i]) { node = nodes[j]; break; } }
      if (!node) return null;
      trail.push(node); nodes = node.children || [];
    }
    return node ? { node: node, trail: trail } : null;
  }

  /* ------------------------------------------------------- componentes HTML */
  function tagsHtml(tags, clickable) {
    if (!tags || !tags.length) return "";
    return '<div class="tags">' + tags.map(function (t) {
      return clickable ? '<a class="tag click" href="#/buscar/' + enc(t) + '">' + esc(t) + "</a>"
                       : '<span class="tag">' + esc(t) + "</span>";
    }).join("") + "</div>";
  }
  function rule() { return '<div class="rule"><span class="diamond"></span></div>'; }
  function crumb(parts) {
    return '<div class="crumb">' + parts.map(function (p, i) {
      var sep = i ? '<span class="sep">/</span>' : "";
      return sep + (p[1] ? '<a href="' + p[1] + '">' + esc(p[0]) + "</a>" : "<span>" + esc(p[0]) + "</span>");
    }).join("") + "</div>";
  }
  function emptyBlock(msg, extra) {
    return '<div class="empty">' + icon("skull") + '<div class="big">' + esc(msg) + "</div>" + (extra || "") + "</div>";
  }
  function cardsOf(list, parentPath) {
    return '<div class="card-grid">' + list.map(function (c) {
      var cp = parentPath + "/" + c.id;
      var thumb = c.image
        ? '<div class="thumb"><img src="' + esc(c.image) + '" alt="' + esc(c.title) + '" loading="lazy"></div>'
        : '<div class="thumb"><span class="ph">' + icon(c.icon || "book") + "</span></div>";
      return '<a class="card" href="#/' + cp + '">' + thumb +
        '<div class="body"><div class="c-title">' + esc(c.title) + "</div>" +
        (c.epithet ? '<div class="c-epithet">' + esc(c.epithet) + "</div>" : "") +
        '<div class="c-excerpt">' + esc(excerpt(c.body, 150)) + "</div>" +
        tagsHtml(c.tags, false) + "</div></a>";
    }).join("") + "</div>";
  }
  function subHead(txt) { return '<div class="section-head sub"><h2>' + esc(txt) + "</h2></div>"; }

  /* --------------------------------------------------------------- vistas */
  function viewHome() {
    var q = WORLD.quote;
    var cards = NAV.map(function (n) {
      var cc = (n.children || []).length;
      return '<a class="home-card" href="#/' + n.id + '">' + icon(n.icon) +
        '<div><div class="hc-title">' + esc(n.title) + '</div>' +
        '<div class="hc-count">' + (cc ? cc + (cc === 1 ? " apartado" : " apartados") : "Mundo") + "</div></div></a>";
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
          '<div><div class="hc-title">' + esc(TIMELINE.title) + '</div><div class="hc-count">Línea temporal</div></div></a>' : "") +
      "</div></div>";
  }

  function viewNode(node, trail) {
    var path = pathOf(trail);
    var parent = trail.slice(0, -1);
    var crumbs = [["Inicio", "#/"]], acc = [];
    trail.forEach(function (n, i) { acc.push(n.id); crumbs.push([n.title, i < trail.length - 1 ? "#/" + acc.join("/") : null]); });

    var fig = node.image ? '<div class="e-figure"><img src="' + esc(node.image) + '" alt="' + esc(node.title) + '"></div>' : "";
    var pq = node.quote ? '<div class="pull-quote"><div class="q">«' + esc(node.quote.text) + '»</div>' +
      (node.quote.source ? '<div class="src">' + esc(node.quote.source) + "</div>" : "") + "</div>" : "";
    var bodyHtml = node.body ? '<div class="prose">' + md(node.body) + "</div>" : "";

    var childrenHtml = "";
    if (node.kind === "batallas") {
      var list = node.children || [];
      childrenHtml = rule() + (list.length
        ? subHead("Partidas registradas") + cardsOf(list, path)
        : emptyBlock("Aún no hay batallas registradas.",
            '<p class="empty-note">Cuando juegues una partida, cuéntamela (fecha, ejércitos, resultado y cómo fue) y la añadiré aquí con su propia ficha.</p>'));
    } else if (node.children && node.children.length) {
      childrenHtml = rule() + (node.childrenLabel ? subHead(node.childrenLabel) : "") + cardsOf(node.children, path);
    }

    var related = "";
    if (node.related && node.related.length) {
      related = '<div class="related"><div class="r-label">Relacionado</div><div class="r-links">' +
        node.related.map(function (r) {
          return '<a class="r-chip" href="#/' + esc(r.to) + '">' + icon("link") + esc(r.label || r.to) + "</a>";
        }).join("") + "</div></div>";
    }

    return '<div class="view">' + crumb(crumbs) + '<div class="entry">' +
      (parent.length ? '<a class="back-link" href="#/' + pathOf(parent) + '">' + icon("back") + "Volver a " + esc(parent[parent.length - 1].title) + "</a>" : "") +
      fig +
      "<h1>" + esc(node.title) + "</h1>" +
      (node.epithet ? '<div class="e-epithet">' + esc(node.epithet) + "</div>" : "") +
      (node.tags && node.tags.length ? '<div class="e-tags">' + tagsHtml(node.tags, true) + "</div>" : "") +
      pq + bodyHtml + childrenHtml + related +
    "</div></div>";
  }

  function viewTimeline() {
    if (!TIMELINE || !TIMELINE.eras) return viewNotFound();
    var romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
    var eras = TIMELINE.eras.map(function (era, idx) {
      var events = (era.events || []).map(function (ev) {
        return '<div class="event">' + (ev.date ? '<div class="ev-date">' + esc(ev.date) + "</div>" : "") +
          '<div class="ev-title">' + esc(ev.title) + "</div>" +
          (ev.text ? '<div class="ev-text">' + esc(ev.text) + "</div>" : "") + "</div>";
      }).join("");
      return '<div class="era"><div class="era-head"><span class="numeral">' + (romans[idx] || idx + 1) + "</span>" +
        "<h2>" + esc(era.name) + "</h2>" + (era.caption ? '<span class="caption">' + esc(era.caption) + "</span>" : "") + "</div>" + events + "</div>";
    }).join("");
    return '<div class="view">' + crumb([["Inicio", "#/"], [TIMELINE.title, null]]) +
      '<div class="section-head"><h1><span class="icon-badge">' + icon("hourglass") + "</span>" + esc(TIMELINE.title) + "</h1>" +
      (TIMELINE.blurb ? '<div class="blurb">' + esc(TIMELINE.blurb) + "</div>" : "") + "</div>" +
      '<div class="timeline">' + eras + "</div></div>";
  }

  function viewSearch(query) {
    var q = (query || "").toLowerCase().trim();
    var results = [];
    if (q) {
      walk(NAV, [], function (node, t) {
        var hay = [node.title, node.epithet, (node.tags || []).join(" "), plain(node.body)].join(" ").toLowerCase();
        if (hay.indexOf(q) !== -1) results.push({ node: node, trail: t });
      });
    }
    var body;
    if (!q) body = emptyBlock("Escribe algo para buscar en todo el archivo.");
    else if (!results.length) body = emptyBlock("Sin resultados para «" + query + "».");
    else body = '<div class="results-info">' + results.length + (results.length === 1 ? " resultado" : " resultados") +
      " para «" + esc(query) + "»</div>" +
      results.map(function (r) {
        var where = r.trail.slice(0, -1).map(function (n) { return n.title; }).join(" › ") || "Sistema";
        return '<a class="result-row" href="#/' + pathOf(r.trail) + '">' + icon(r.node.icon || "book") +
          '<div><div class="r-title">' + esc(r.node.title) + "</div>" +
          '<div class="r-where">' + esc(where) + "</div>" +
          '<div class="r-excerpt">' + esc(excerpt(r.node.body, 160)) + "</div></div></a>";
      }).join("");
    return '<div class="view">' + crumb([["Inicio", "#/"], ["Búsqueda", null]]) +
      '<div class="section-head"><h1><span class="icon-badge">' + icon("search") + "</span>Búsqueda</h1></div>" + body + "</div>";
  }

  function viewNotFound() {
    return '<div class="view">' + emptyBlock("Esta página se ha perdido en la ceniza.") +
      '<div style="text-align:center"><a class="r-chip" href="#/">' + icon("home") + "Volver al inicio</a></div></div>";
  }

  /* ----------------------------------------------------------- navegación */
  function buildNav() {
    var html = '<div class="nav-group-label">Navegación</div>' +
      navLink("$home", "#/", icon("home"), "Inicio", null, false) +
      (TIMELINE ? navLink("$cronologia", "#/cronologia", icon("hourglass"), TIMELINE.title, null, false) : "") +
      '<div class="nav-sep"></div><div class="nav-group-label">Mundos</div>';
    NAV.forEach(function (top) {
      html += navLink(top.id, "#/" + top.id, icon(top.icon), top.title, null, false);
      (top.children || []).forEach(function (ch) {
        var count = ch.kind === "batallas" ? (ch.children || []).length : null;
        html += navLink(top.id + "/" + ch.id, "#/" + top.id + "/" + ch.id, icon(ch.icon || top.icon), ch.title, count, true);
      });
    });
    el("nav").innerHTML = html;
  }
  function navLink(key, href, ico, label, count, sub) {
    return '<a class="nav-link' + (sub ? " sub" : "") + '" data-key="' + esc(key) + '" href="' + href + '">' +
      ico + "<span>" + esc(label) + "</span>" + (count != null ? '<span class="count">' + count + "</span>" : "") + "</a>";
  }
  function clearActive() { [].forEach.call(document.querySelectorAll(".nav-link"), function (l) { l.classList.remove("active"); }); }
  function setActiveExact(key) {
    clearActive();
    [].forEach.call(document.querySelectorAll(".nav-link"), function (l) { if (l.getAttribute("data-key") === key) l.classList.add("active"); });
  }
  function setActivePath(path) {
    clearActive();
    var segs = path.split("/").filter(Boolean);
    while (segs.length) {
      var key = segs.join("/"), done = false;
      [].forEach.call(document.querySelectorAll(".nav-link"), function (l) { if (!done && l.getAttribute("data-key") === key) { l.classList.add("active"); done = true; } });
      if (done) return;
      segs.pop();
    }
  }

  /* --------------------------------------------------------------- router */
  function render(html, scroll) { el("app").innerHTML = html; if (scroll !== false) window.scrollTo(0, 0); closeNav(); }
  function router() {
    var hash = location.hash.replace(/^#/, "");
    var segs = hash.split("/").filter(Boolean);
    var title = WORLD.name;
    if (segs.length === 0) { render(viewHome()); setActiveExact("$home"); }
    else if (segs[0] === "cronologia") { render(viewTimeline()); setActiveExact("$cronologia"); title = (TIMELINE ? TIMELINE.title + " · " : "") + WORLD.name; }
    else if (segs[0] === "buscar") {
      var q = segs[1] ? decodeURIComponent(segs.slice(1).join("/")) : "";
      render(viewSearch(q), false); clearActive();
      if (el("searchInput") && document.activeElement !== el("searchInput")) el("searchInput").value = q;
      title = "Búsqueda · " + WORLD.name;
    } else {
      var found = findByPath(segs);
      if (!found) { render(viewNotFound()); clearActive(); }
      else { render(viewNode(found.node, found.trail)); setActivePath(pathOf(found.trail)); title = found.node.title + " · " + WORLD.name; }
    }
    document.title = title;
  }

  /* ------------------------------------------------------ menú móvil + buscar */
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
    el("menuBtn").addEventListener("click", function () { document.body.classList.toggle("nav-open"); });
    el("scrim").addEventListener("click", closeNav);
  }

  /* ----------------------------------------------------------------- init */
  function start() {
    if (!window.NAV) {
      el("app").innerHTML = '<div class="view"><div class="empty"><div class="big">No se ha podido cargar el contenido (js/data.js).</div></div></div>';
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
