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
    asteroid: '<path d="M8.5 4.2l4.5-1.2 5 2.6 1.4 4.8-1.8 5-4.6 3.2-5.6-1L3.5 13l1-6z"/><circle cx="10" cy="10.5" r="1.2"/><circle cx="14.6" cy="14" r=".9"/>',
    eye:    '<path d="M2.2 12S6 5 12 5s9.8 7 9.8 7-3.8 7-9.8 7S2.2 12 2.2 12z"/><circle cx="12" cy="12" r="3"/>',
    crown:  '<path d="M4 18.5h16M4.5 18.5l-1.6-9.5 5.1 4.2L12 5.5l4 7.7 5.1-4.2-1.6 9.5"/>',
    tent:   '<path d="M12 4 3 19h18L12 4z"/><path d="M9.5 19 12 13l2.5 6"/>',
    person: '<circle cx="12" cy="8" r="3.6"/><path d="M5.4 20a6.6 6.6 0 0 1 13.2 0"/>',
    book:   '<path d="M5 4h10.5a2 2 0 0 1 2 2v13.5H7a2 2 0 0 1-2-2z"/><path d="M5 4a2 2 0 0 0-2 2v12"/><path d="M8.5 8.5h6M8.5 12h6"/>',
    claw:   '<path d="M6 3.5c1.1 4 1.1 8.5 0 12.5"/><path d="M11 3c1.1 4.5 1.1 9.5 0 13.5"/><path d="M16 4c1.1 4 1.1 8.2 0 11.5"/><path d="M4 17c3.2 3 12.8 3 16 0"/>',
    banner: '<path d="M7 3v18"/><path d="M7 4h11l-2.5 3.5L18 11H7z"/>',
    helm:   '<circle cx="12" cy="8" r="3.6"/><path d="M5.4 20a6.6 6.6 0 0 1 13.2 0"/>',
    skull:  '<path d="M12 3a8 8 0 0 0-8 8c0 3 1.6 4.8 3 6v3h3v-2h4v2h3v-3c1.4-1.2 3-3 3-6a8 8 0 0 0-8-8z"/><circle cx="9" cy="11.5" r="1.3"/><circle cx="15" cy="11.5" r="1.3"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    back:   '<path d="M15 5l-7 7 7 7"/>',
    forward:'<path d="M9 5l7 7-7 7"/>',
    print:  '<path d="M6 9V3h12v6"/><path d="M6 18H4.5A1.5 1.5 0 0 1 3 16.5v-6A1.5 1.5 0 0 1 4.5 9h15A1.5 1.5 0 0 1 21 10.5v6a1.5 1.5 0 0 1-1.5 1.5H18"/><path d="M6 14h12v7H6z"/>',
    dice:   '<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.2"/><circle cx="15" cy="9" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="9" cy="15" r="1.2"/><circle cx="15" cy="15" r="1.2"/>',
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

  /* normalización sin tildes (mapa 1:1 de índices para poder resaltar) */
  function nmap(s) {
    var out = "", i, c;
    s = String(s == null ? "" : s);
    for (i = 0; i < s.length; i++) {
      c = s.charAt(i).toLowerCase();
      if (c.normalize) c = c.normalize("NFD").replace(/[̀-ͯ]/g, "");
      out += c.charAt(0) || "";
    }
    return out;
  }
  /* resalta todas las apariciones de qn (ya normalizado) dentro de text */
  function hiText(text, qn) {
    text = String(text == null ? "" : text);
    if (!qn) return esc(text);
    var m = nmap(text), out = "", i = 0, idx;
    while ((idx = m.indexOf(qn, i)) !== -1) {
      out += esc(text.slice(i, idx)) + "<mark>" + esc(text.slice(idx, idx + qn.length)) + "</mark>";
      i = idx + qn.length;
    }
    return out + esc(text.slice(i));
  }
  /* extracto centrado en la primera coincidencia, con resaltado */
  function snippet(body, qn, n) {
    var t = plain(body), m = nmap(t), idx = qn ? m.indexOf(qn) : -1;
    if (idx === -1) return esc(excerpt(body, n));
    var start = Math.max(0, idx - Math.floor((n - qn.length) / 2));
    var end = Math.min(t.length, start + n);
    return (start > 0 ? "…" : "") + hiText(t.slice(start, end), qn) + (end < t.length ? "…" : "");
  }

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
  /* orden de lectura de todas las fichas (para "anterior / siguiente") */
  var ORDER = [];
  walk(NAV, [], function (n, t) { ORDER.push(pathOf(t)); });

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
        ? '<div class="thumb"><img src="' + esc(c.image) + '" alt="' + esc(c.title) + '" loading="lazy" decoding="async"></div>'
        : '<div class="thumb"><span class="ph">' + icon(c.icon || "book") + "</span></div>";
      return '<a class="card" href="#/' + cp + '">' + thumb +
        '<div class="body"><div class="c-title">' + esc(c.title) + "</div>" +
        (c.battle && c.battle.fecha ? '<div class="c-date">' + esc(c.battle.fecha) + (c.battle.resultado ? " · " + esc(c.battle.resultado) : "") + "</div>" : "") +
        (c.epithet ? '<div class="c-epithet">' + esc(c.epithet) + "</div>" : "") +
        '<div class="c-excerpt">' + esc(excerpt(c.body, 150)) + "</div>" +
        tagsHtml(c.tags, false) + "</div></a>";
    }).join("") + "</div>";
  }
  function subHead(txt) { return '<div class="section-head sub"><h2>' + esc(txt) + "</h2></div>"; }
  function printBtn() {
    return '<button class="print-btn" type="button" title="Imprimir o guardar en PDF">' + icon("print") + "Imprimir</button>";
  }

  /* hoja de batalla (ficha de partida): node.battle = { fecha, lugar, puntos,
     bandos: ["Ejército — jugador", ...], resultado } */
  function battleSheet(b) {
    if (!b) return "";
    function row(label, val) {
      return val ? '<div class="bs-row"><span class="bs-label">' + label + '</span><span class="bs-val">' + esc(val) + "</span></div>" : "";
    }
    var bandos = (b.bandos && b.bandos.length)
      ? '<div class="bs-row"><span class="bs-label">Bandos</span><span class="bs-val">' +
          b.bandos.map(function (x) { return esc(x); }).join('<span class="bs-vs"> · contra · </span>') + "</span></div>"
      : "";
    return '<div class="battle-sheet">' +
      '<div class="bs-head">' + icon("swords") + "Parte de batalla</div>" +
      row("Fecha", b.fecha) + row("Lugar", b.lugar) + row("Puntos", b.puntos) + bandos +
      (b.resultado ? '<div class="bs-row result"><span class="bs-label">Resultado</span><span class="bs-val">' + esc(b.resultado) + "</span></div>" : "") +
    "</div>";
  }

  /* ------------------------------------------------- carta estelar (mapa) */
  function starMap() {
    return '' +
    '<div class="starmap-wrap">' +
      '<div class="section-head sub"><h2>Carta Estelar del Sistema</h2></div>' +
      '<div class="sm-hint">Pulsa sobre un cuerpo celeste para abrir su ficha del archivo.</div>' +
      '<div class="starmap">' +
      '<svg viewBox="0 0 900 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa del sistema Cineris">' +
        '<defs>' +
          '<radialGradient id="sm-sun" cx="50%" cy="50%" r="50%">' +
            '<stop offset="0%" stop-color="#f3e3a0"/><stop offset="38%" stop-color="#c9a227"/>' +
            '<stop offset="75%" stop-color="#6b5a22"/><stop offset="100%" stop-color="#6b5a22" stop-opacity="0"/>' +
          '</radialGradient>' +
          '<radialGradient id="sm-warp" cx="50%" cy="50%" r="50%">' +
            '<stop offset="0%" stop-color="#a82c2c"/><stop offset="55%" stop-color="#7c1414"/>' +
            '<stop offset="100%" stop-color="#7c1414" stop-opacity="0"/>' +
          '</radialGradient>' +
        '</defs>' +
        /* — el Maelstrom: marco de tormenta — */
        '<g class="sm-maelstrom">' +
          '<rect x="8" y="8" width="884" height="454" rx="6"/>' +
          '<path d="M30 80 Q 110 30 200 58" /><path d="M870 120 Q 800 60 700 50"/>' +
          '<path d="M40 400 Q 120 448 230 430"/><path d="M860 380 Q 790 440 670 425"/>' +
          '<text class="m-label storm" x="450" y="36" text-anchor="middle">· EL MAELSTROM ·</text>' +
        '</g>' +
        /* — órbita de Cineris — */
        '<ellipse class="sm-orbit" cx="300" cy="225" rx="310" ry="140"/>' +
        /* — cinturón de asteroides — */
        '<a href="#/cineris/cinturon-asteroides" aria-label="Cinturón de Asteroides">' +
          '<g class="sm-belt"><title>Cinturón de Asteroides — el puerto de los amos de hierro</title>' +
            '<path class="sm-hit-stroke" d="M 640 70 A 380 185 0 0 1 700 350"/>' +
            '<path class="sm-belt-arc" d="M 640 70 A 380 185 0 0 1 700 350"/>' +
            '<path class="rock" d="M652 96l9-3 7 5 0 8-8 5-9-4z"/>' +
            '<path class="rock" d="M684 150l8-2 6 5-1 7-8 3-6-5z"/>' +
            '<path class="rock" d="M702 215l9-3 6 6-2 7-9 3-5-6z"/>' +
            '<path class="rock" d="M697 282l8-2 6 5-1 7-9 2-5-5z"/>' +
            '<path class="rock" d="M676 332l8-3 7 5-1 8-9 3-6-6z"/>' +
            '<text class="m-label" x="760" y="200" text-anchor="middle">CINTURÓN DE</text>' +
            '<text class="m-label" x="760" y="216" text-anchor="middle">ASTEROIDES</text>' +
          '</g>' +
        '</a>' +
        /* — estrella D31 — */
        '<a href="#/estrella-d31" aria-label="Estrella D31">' +
          '<g class="sm-star"><title>Estrella D31 — el sol de Cineris (y lo que oculta)</title>' +
            '<circle class="sm-hit" cx="300" cy="225" r="92"/>' +
            '<circle class="m-glow" cx="300" cy="225" r="84" fill="url(#sm-sun)" opacity=".5"/>' +
            '<circle class="sun-core" cx="300" cy="225" r="40"/>' +
            '<g class="sun-secret" opacity=".55">' +
              '<circle cx="300" cy="225" r="11" fill="none"/>' +
              '<path d="M300 209v6M300 235v6M284 225h6M310 225h6M289 214l4 4M307 232l4 4M311 214l-4 4M293 232l-4 4"/>' +
            '</g>' +
            '<text class="m-label big" x="300" y="146" text-anchor="middle">ESTRELLA D31</text>' +
          '</g>' +
        '</a>' +
        /* — planeta Cineris — */
        '<a href="#/cineris" aria-label="Planeta Cineris">' +
          '<g class="sm-planet"><title>Planeta Cineris — mundo principal del sistema</title>' +
            '<circle class="sm-hit" cx="555" cy="118" r="54"/>' +
            '<circle class="m-glow halo" cx="555" cy="118" r="40" opacity="0"/>' +
            '<circle class="pl-core" cx="555" cy="118" r="26"/>' +
            '<path class="pl-detail" d="M535 110q10-7 24-5m-28 16q14 8 34 2m-22 9q8 3 16 0"/>' +
            '<circle class="hive" cx="548" cy="108" r="2.2"/><circle class="hive" cx="562" cy="115" r="2.2"/><circle class="hive" cx="551" cy="124" r="2.2"/>' +
            '<text class="m-label big" x="555" y="70" text-anchor="middle">PLANETA CINERIS</text>' +
          '</g>' +
        '</a>' +
        /* — túnel Hybri — */
        '<path class="sm-link" d="M300 268 Q 300 320 332 352"/>' +
        '<a href="#/hybri" aria-label="Túnel Hybri">' +
          '<g class="sm-portal"><title>Túnel Hybri — la garganta de disformidad bajo la estrella</title>' +
            '<circle class="sm-hit" cx="350" cy="370" r="54"/>' +
            '<circle class="m-glow" cx="350" cy="370" r="46" fill="url(#sm-warp)" opacity=".35"/>' +
            '<circle class="vortex v1" cx="350" cy="370" r="24"/>' +
            '<circle class="vortex v2" cx="350" cy="370" r="15"/>' +
            '<circle class="vortex v3" cx="350" cy="370" r="6"/>' +
            '<text class="m-label big warp" x="350" y="436" text-anchor="middle">TÚNEL HYBRI</text>' +
          '</g>' +
        '</a>' +
        /* — mundos de Hybri — */
        '<path class="sm-link warp" d="M376 372 Q 440 380 470 386"/>' +
        '<g class="sm-hybri">' +
          '<a href="#/hybri/hybri-1" aria-label="Hybri 1"><g><title>Hybri 1 — la Casa más antigua</title>' +
            '<circle class="sm-hit" cx="505" cy="372" r="28"/>' +
            '<circle class="hy" cx="505" cy="372" r="11"/><path class="hy-mark" d="M505 365v14M498 372h14M500 367l10 10M510 367l-10 10"/>' +
            '<text class="m-label warp" x="505" y="349" text-anchor="middle">HYBRI 1</text></g></a>' +
          '<a href="#/hybri/hybri-2" aria-label="Hybri 2"><g><title>Hybri 2 — la Casa más numerosa</title>' +
            '<circle class="sm-hit" cx="565" cy="400" r="28"/>' +
            '<circle class="hy" cx="565" cy="400" r="11"/><path class="hy-mark" d="M565 393v14M558 400h14M560 395l10 10M570 395l-10 10"/>' +
            '<text class="m-label warp" x="565" y="432" text-anchor="middle">HYBRI 2</text></g></a>' +
          '<a href="#/hybri/hybri-4" aria-label="Hybri 4"><g><title>Hybri 4 — la Casa más temida</title>' +
            '<circle class="sm-hit" cx="628" cy="370" r="28"/>' +
            '<circle class="hy" cx="628" cy="370" r="11"/><path class="hy-mark" d="M628 363v14M621 370h14M623 365l10 10M633 365l-10 10"/>' +
            '<text class="m-label warp" x="628" y="347" text-anchor="middle">HYBRI 4</text></g></a>' +
        '</g>' +
      '</svg></div></div>';
  }

  /* --------------------------------------------------------------- vistas */
  function viewHome() {
    var q = WORLD.quote;
    var cards = NAV.map(function (n) {
      var cc = (n.children || []).length;
      return '<a class="home-card" href="#/' + n.id + '">' + icon(n.icon) +
        '<div><div class="hc-title">' + esc(n.title) + '</div>' +
        '<div class="hc-count">' + (cc ? cc + (cc === 1 ? " apartado" : " apartados") : "Mundo") + "</div></div></a>";
    }).join("");
    var heroTop = WORLD.image
      ? '<div class="home-hero-img"><img src="' + esc(WORLD.image) + '" alt="' + esc(WORLD.name) + '" fetchpriority="high" decoding="async">' +
          '<div class="hhi-titles"><div class="aquila-sm">' + icon("aquila", true) + "</div>" +
          "<h1>" + esc(WORLD.name) + "</h1>" +
          (WORLD.subtitle ? '<div class="subtitle">' + esc(WORLD.subtitle) + "</div>" : "") +
          "</div></div>" +
          (WORLD.intro ? '<div class="hero hero-intro"><div class="intro prose">' + md(WORLD.intro) + "</div></div>" : "")
      : '<div class="hero">' +
          '<div class="aquila-big">' + icon("aquila", true) + "</div>" +
          "<h1>" + esc(WORLD.name) + "</h1>" +
          (WORLD.subtitle ? '<div class="subtitle">' + esc(WORLD.subtitle) + "</div>" : "") +
          (WORLD.intro ? '<div class="intro prose">' + md(WORLD.intro) + "</div>" : "") +
        "</div>";
    return '<div class="view">' + heroTop +
      (q ? '<div class="banner-quote"><div class="q">«' + esc(q.text) + '»</div>' +
           (q.source ? '<div class="src">' + esc(q.source) + "</div>" : "") + "</div>" : rule()) +
      starMap() +
      rule() +
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

    var fig = "", banner = "";
    if (node.image && node.imageContain) {
      fig = '<figure class="e-figure contain"><div class="e-frame"><img src="' + esc(node.image) + '" alt="' + esc(node.title) + '" decoding="async"></div>' +
              (node.imageCaption ? "<figcaption>" + esc(node.imageCaption) + "</figcaption>" : "") +
            "</figure>";
    } else if (node.image) {
      banner = '<div class="entry-banner"><img src="' + esc(node.image) + '" alt="' + esc(node.title) + '" fetchpriority="high" decoding="async"></div>' +
               (node.imageCaption ? '<div class="entry-cap">' + esc(node.imageCaption) + "</div>" : "");
    }
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

    /* apariciones de esta ficha en la cronología */
    var hits = [];
    if (TIMELINE && TIMELINE.eras) {
      TIMELINE.eras.forEach(function (era) {
        (era.events || []).forEach(function (ev) { if (ev.link === path) hits.push({ era: era, ev: ev }); });
      });
    }
    var inTimeline = hits.length
      ? '<div class="tl-hits"><div class="th-label">En la cronología</div>' +
        hits.map(function (h) {
          return '<a class="tl-hit" href="#/cronologia">' +
            (h.ev.date ? '<span class="th-date">' + esc(h.ev.date) + "</span>" : "") +
            '<span class="th-title">' + esc(h.ev.title) + "</span>" +
            '<span class="th-era">' + esc(h.era.name) + "</span></a>";
        }).join("") + "</div>"
      : "";

    /* hojear el archivo: ficha anterior / siguiente */
    var idx = ORDER.indexOf(path);
    function pgLink(p, dir) {
      var f = findByPath(p.split("/"));
      if (!f) return "";
      return '<a class="pg ' + dir + '" href="#/' + p + '">' +
        '<span class="pg-label">' + (dir === "prev" ? icon("back") + "<span>Anterior</span>" : "<span>Siguiente</span>" + icon("forward")) + "</span>" +
        '<span class="pg-title">' + esc(f.node.title) + "</span></a>";
    }
    var prevP = idx > 0 ? ORDER[idx - 1] : null;
    var nextP = idx !== -1 && idx < ORDER.length - 1 ? ORDER[idx + 1] : null;
    var pager = (prevP || nextP)
      ? '<nav class="pager">' + (prevP ? pgLink(prevP, "prev") : "") + (nextP ? pgLink(nextP, "next") : "") + "</nav>"
      : "";

    return '<div class="view">' + printBtn() + crumb(crumbs) + banner + '<div class="entry">' +
      (parent.length ? '<a class="back-link" href="#/' + pathOf(parent) + '">' + icon("back") + "Volver a " + esc(parent[parent.length - 1].title) + "</a>" : "") +
      fig +
      "<h1>" + esc(node.title) + "</h1>" +
      (node.epithet ? '<div class="e-epithet">' + esc(node.epithet) + "</div>" : "") +
      (node.tags && node.tags.length ? '<div class="e-tags">' + tagsHtml(node.tags, true) + "</div>" : "") +
      pq + battleSheet(node.battle) + bodyHtml + childrenHtml + related + inTimeline + pager +
    "</div></div>";
  }

  var TL_FILTER = "";
  function viewTimeline() {
    if (!TIMELINE || !TIMELINE.eras) return viewNotFound();
    var romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

    /* recopilar todas las facciones presentes en los eventos */
    var allTags = [];
    TIMELINE.eras.forEach(function (era) {
      (era.events || []).forEach(function (ev) {
        (ev.tags || []).forEach(function (t) { if (allTags.indexOf(t) === -1) allTags.push(t); });
      });
    });
    allTags.sort();
    var filters = allTags.length
      ? '<div class="tl-filters"><span class="tl-flabel">Filtrar:</span>' +
        '<button class="tl-chip' + (TL_FILTER ? "" : " active") + '" data-tag="">Todo</button>' +
        allTags.map(function (t) {
          return '<button class="tl-chip' + (TL_FILTER === t ? " active" : "") + '" data-tag="' + esc(t) + '">' + esc(t) + "</button>";
        }).join("") + "</div>"
      : "";

    var shown = 0;
    var eras = TIMELINE.eras.map(function (era, idx) {
      var evs = (era.events || []).filter(function (ev) {
        return !TL_FILTER || (ev.tags || []).indexOf(TL_FILTER) !== -1;
      });
      if (!evs.length) return "";
      shown += evs.length;
      var events = evs.map(function (ev) {
        var title = ev.link
          ? '<a class="ev-link" href="#/' + esc(ev.link) + '">' + esc(ev.title) + "</a>"
          : esc(ev.title);
        var evTags = (ev.tags || []).length
          ? '<div class="ev-tags">' + ev.tags.map(function (t) {
              return '<button class="tl-chip mini" data-tag="' + esc(t) + '">' + esc(t) + "</button>";
            }).join("") + "</div>"
          : "";
        return '<div class="event">' + (ev.date ? '<div class="ev-date">' + esc(ev.date) + "</div>" : "") +
          '<div class="ev-title">' + title + "</div>" +
          (ev.text ? '<div class="ev-text">' + esc(ev.text) + "</div>" : "") + evTags + "</div>";
      }).join("");
      return '<div class="era"><div class="era-head"><span class="numeral">' + (romans[idx] || idx + 1) + "</span>" +
        "<h2>" + esc(era.name) + "</h2>" + (era.caption ? '<span class="caption">' + esc(era.caption) + "</span>" : "") + "</div>" + events + "</div>";
    }).join("");

    var bodyTl = shown
      ? '<div class="timeline">' + eras + "</div>"
      : emptyBlock("Ningún evento registrado para «" + TL_FILTER + "».");
    var bg = TIMELINE.image ? '<div class="timeline-bg"><img src="' + esc(TIMELINE.image) + '" alt="" loading="lazy" decoding="async"></div>' : "";
    return bg + '<div class="view timeline-view">' + printBtn() + crumb([["Inicio", "#/"], [TIMELINE.title, null]]) +
      '<div class="section-head"><h1><span class="icon-badge">' + icon("hourglass") + "</span>" + esc(TIMELINE.title) + "</h1>" +
      (TIMELINE.blurb ? '<div class="blurb">' + esc(TIMELINE.blurb) + "</div>" : "") + "</div>" +
      filters + bodyTl + "</div>";
  }

  function viewSearch(query) {
    var qn = nmap((query || "").trim());
    var results = [];
    if (qn) {
      walk(NAV, [], function (node, t) {
        var score = 0;
        if (nmap(node.title).indexOf(qn) !== -1) score += 8;
        if (nmap(node.epithet || "").indexOf(qn) !== -1) score += 4;
        if (nmap((node.tags || []).join(" ")).indexOf(qn) !== -1) score += 4;
        if (node.quote && nmap(node.quote.text).indexOf(qn) !== -1) score += 2;
        if (nmap(plain(node.body)).indexOf(qn) !== -1) score += 1;
        if (score) results.push({ node: node, trail: t, score: score });
      });
      results.sort(function (a, b) { return b.score - a.score; });
    }
    var body;
    if (!qn) body = emptyBlock("Escribe algo para buscar en todo el archivo.");
    else if (!results.length) body = emptyBlock("Sin resultados para «" + query + "».");
    else body = '<div class="results-info">' + results.length + (results.length === 1 ? " resultado" : " resultados") +
      " para «" + esc(query) + "»</div>" +
      results.map(function (r) {
        var where = r.trail.slice(0, -1).map(function (n) { return n.title; }).join(" › ") || "Sistema";
        var tagHits = (r.node.tags || []).filter(function (t) { return nmap(t).indexOf(qn) !== -1; });
        return '<a class="result-row" href="#/' + pathOf(r.trail) + '">' + icon(r.node.icon || "book") +
          '<div><div class="r-title">' + hiText(r.node.title, qn) + "</div>" +
          '<div class="r-where">' + esc(where) + "</div>" +
          '<div class="r-excerpt">' + snippet(r.node.body, qn, 170) + "</div>" +
          (tagHits.length ? '<div class="tags">' + tagHits.map(function (t) {
            return '<span class="tag">' + hiText(t, qn) + "</span>";
          }).join("") + "</div>" : "") +
          "</div></a>";
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
      navLink("$azar", "#/azar", icon("dice"), "Página perdida", null, false) +
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
    /* al salir de la búsqueda, recoger el buscador desplegado (móvil) */
    if (segs[0] !== "buscar") document.body.classList.remove("search-open");
    if (segs.length === 0) { render(viewHome()); setActiveExact("$home"); }
    else if (segs[0] === "cronologia") { render(viewTimeline()); setActiveExact("$cronologia"); title = (TIMELINE ? TIMELINE.title + " · " : "") + WORLD.name; }
    else if (segs[0] === "azar") {
      /* página perdida: ficha aleatoria del archivo */
      var pool = [];
      walk(NAV, [], function (node, t) { if (node.body) pool.push(pathOf(t)); });
      if (pool.length) location.replace("#/" + pool[Math.floor(Math.random() * pool.length)]);
      else location.replace("#/");
      return;
    }
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
    input.addEventListener("keydown", function (ev) { if (ev.key === "Escape") { input.value = ""; location.hash = "#/"; input.blur(); document.body.classList.remove("search-open"); } });
    var sBtn = el("searchBtn");
    if (sBtn) sBtn.addEventListener("click", function () {
      var open = document.body.classList.toggle("search-open");
      if (open) input.focus();
    });
    el("menuBtn").addEventListener("click", function () { document.body.classList.toggle("nav-open"); });
    el("scrim").addEventListener("click", closeNav);
    /* botón imprimir (delegación) */
    document.addEventListener("click", function (ev) {
      var p = ev.target && ev.target.closest ? ev.target.closest(".print-btn") : null;
      if (p) window.print();
    });
    /* filtros de la cronología (delegación) */
    document.addEventListener("click", function (ev) {
      var b = ev.target && ev.target.closest ? ev.target.closest(".tl-chip") : null;
      if (!b) return;
      var t = b.getAttribute("data-tag") || "";
      TL_FILTER = (TL_FILTER === t) ? "" : t;
      render(viewTimeline(), false);
      setActiveExact("$cronologia");
    });
  }

  /* ------------------------------------------- tooltips de enlaces internos */
  function initTooltips() {
    if (!window.matchMedia || !window.matchMedia("(hover: hover)").matches) return;
    if (!Element.prototype.closest) return;
    var tip = document.createElement("div");
    tip.className = "lore-tip";
    tip.setAttribute("aria-hidden", "true");
    document.body.appendChild(tip);

    function linkOf(ev) {
      var a = ev.target && ev.target.closest ? ev.target.closest('a[href^="#/"]') : null;
      if (!a || !a.closest("#app")) return null;
      if (a.closest(".card, .home-card, .result-row, .crumb, .starmap, .back-link")) return null;
      var path = decodeURIComponent(a.getAttribute("href").slice(2));
      var segs = path.split("/").filter(Boolean);
      if (!segs.length || segs[0] === "buscar" || segs[0] === "cronologia" || segs[0] === "azar") return null;
      var found = findByPath(segs);
      return found ? { a: a, node: found.node } : null;
    }
    function show(a, n) {
      var media = n.image
        ? '<div class="lt-img"><img src="' + esc(n.image) + '" alt="" loading="lazy" decoding="async"></div>'
        : '<div class="lt-ico">' + icon(n.icon || "book") + "</div>";
      tip.innerHTML = media +
        '<div class="lt-body"><div class="lt-title">' + esc(n.title) + "</div>" +
        (n.epithet ? '<div class="lt-epithet">' + esc(n.epithet) + "</div>" : "") +
        '<div class="lt-excerpt">' + esc(excerpt(n.body, 130)) + "</div></div>";
      tip.classList.add("show");
      var r = a.getBoundingClientRect();
      var w = tip.offsetWidth, h = tip.offsetHeight;
      var left = Math.max(10, Math.min(r.left, window.innerWidth - w - 10));
      var top = r.bottom + 10;
      if (top + h > window.innerHeight - 10) top = r.top - h - 10;
      tip.style.left = left + "px";
      tip.style.top = Math.max(10, top) + "px";
    }
    function hide() { tip.classList.remove("show"); }
    document.addEventListener("mouseover", function (ev) {
      var hit = linkOf(ev);
      if (hit) show(hit.a, hit.node);
    });
    document.addEventListener("mouseout", function (ev) {
      if (linkOf(ev)) hide();
    });
    window.addEventListener("hashchange", hide);
    window.addEventListener("scroll", hide, { passive: true });
  }

  /* ------------------------------------ visor de imágenes (pantalla completa) */
  function initLightbox() {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = '<img alt=""><div class="lb-cap"></div><div class="lb-hint">Pulsa en cualquier sitio para cerrar</div>';
    document.body.appendChild(lb);
    var img = lb.querySelector("img"), cap = lb.querySelector(".lb-cap");
    document.addEventListener("click", function (ev) {
      if (lb.classList.contains("show")) { lb.classList.remove("show"); return; }
      var t = ev.target;
      if (!t || t.tagName !== "IMG" || !t.closest) return;
      var wrap = t.closest(".entry-banner, .e-figure");
      if (!wrap) return;
      img.src = t.src; img.alt = t.alt || "";
      var fc = wrap.querySelector("figcaption") || document.querySelector(".entry-cap");
      cap.textContent = (fc ? fc.textContent : "") || t.alt || "";
      lb.classList.add("show");
    });
    document.addEventListener("keydown", function (ev) { if (ev.key === "Escape") lb.classList.remove("show"); });
  }

  /* ----------------------------------------------------------------- init */
  function start() {
    if (!window.NAV) {
      el("app").innerHTML = '<div class="view"><div class="empty"><div class="big">No se ha podido cargar el contenido (js/data.js).</div></div></div>';
      return;
    }
    initChrome();
    buildNav();
    initTooltips();
    initLightbox();
    window.addEventListener("hashchange", router);
    router();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
