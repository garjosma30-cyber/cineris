/* ============================================================================
   ARCHIVO DE LORE  —  Aquí vive TODO el contenido de tu mundo.
   ----------------------------------------------------------------------------
   Para añadir o cambiar lore solo se edita ESTE archivo. No hace falta tocar
   nada más. La web se actualiza sola al recargar.

   Estructura rápida:
     WORLD     -> nombre del mundo, lema, introducción y cita de portada.
     SECTIONS  -> lista de secciones (Facciones, Personajes, Mundos...).
                  Cada sección tiene "entries" (las fichas de lore).
     TIMELINE  -> la cronología (eras con eventos).

   En los textos largos ("body") se puede usar formato sencillo:
     ## Subtítulo          -> título de apartado
     ### Sub-subtítulo
     **negrita**   *cursiva*
     - elemento de lista
     > Cita o frase destacada
     ---                    -> separador
     [texto](https://...)   -> enlace

   ⚠ El contenido de abajo es de EJEMPLO (un mundo inventado para que veas
     cómo queda). Reemplázalo con tu lore o pásamelo y lo monto yo.
   ========================================================================== */

window.WORLD = {
  name: "SECTOR CINERIS",
  subtitle: "Crónicas de las Marcas de Ceniza",
  intro: `En el borde olvidado de la galaxia, donde la luz de las estrellas llega
muerta y fría, se extiende el **Sector Cineris**: un puñado de mundos sitiados que
se aferran a la civilización mientras la oscuridad cierra el cerco.

Esta es la crónica de sus gentes, sus guerras y sus condenados. *Que ningún
nombre se pierda en la ceniza.*`,
  quote: {
    text: "En la ceniza de las estrellas, sólo la fe perdura.",
    source: "Inscripción sobre las puertas de la Catedral de Cineris Primaris"
  }
};

window.SECTIONS = [
  /* ───────────────────────────── FACCIONES ───────────────────────────── */
  {
    id: "facciones",
    title: "Facciones",
    icon: "banner",
    blurb: "Los poderes que se disputan las cenizas del sector.",
    layout: "grid",
    entries: [
      {
        id: "legion-cineraria",
        title: "La Legión Cineraria",
        epithet: "Guardianes de las Marcas",
        tags: ["Militar", "Leales", "Humanos"],
        quote: {
          text: "No retrocedemos. La ceniza ya cubrió cuanto dejamos atrás.",
          source: "Juramento de reclutamiento de la Legión"
        },
        body: `La **Legión Cineraria** es el muro humano que mantiene unido al sector.
Forjada a partir de los regimientos supervivientes de la Larga Noche, es tan
disciplinada como fatalista.

## Doctrina
Sus soldados creen que ya están muertos y que cada día de lucha es una deuda
pagada a los caídos. Esta certeza los vuelve terriblemente difíciles de quebrar.

- **Color de guerra:** gris ceniza y oro viejo.
- **Símbolo:** una llama negra sobre fondo pálido.
- **Sede:** la Ciudadela de Cineris Primaris.

> "Mientras un solo cinerario respire, el sector no ha caído."`,
        related: [
          { section: "personajes", entry: "varan-thessaly", label: "Lord-Comandante Varan Thessaly" },
          { section: "mundos", entry: "cineris-primaris", label: "Cineris Primaris" }
        ]
      },
      {
        id: "conclave-de-hierro",
        title: "El Cónclave de Hierro",
        epithet: "Sacerdotes de la Máquina",
        tags: ["Tecnología", "Aliados", "Misterio"],
        body: `Custodios del conocimiento técnico del sector, el **Cónclave de Hierro**
mantiene en marcha los reactores, las naves y las armas que permiten a Cineris
resistir. Su lealtad es real, pero sus motivos son insondables.

## Los Tecnoadeptos
Pocos han visto el rostro de un adepto bajo la capucha. Hablan en un dialecto
ritual de máquinas y consideran sagrado todo aquello que funciona.

*Se rumorea que guardan secretos anteriores a la Larga Noche.*`,
        related: [
          { section: "personajes", entry: "ozric-9", label: "Magos Prime Ozric-9" }
        ]
      },
      {
        id: "mano-carmesi",
        title: "La Mano Carmesí",
        epithet: "El enemigo interior",
        tags: ["Hereje", "Hostil", "Culto"],
        body: `No todos los enemigos vienen del vacío. La **Mano Carmesí** es un culto
clandestino que promete salvación a cambio de traición. Crece en los suburbios
de los mundos-colmena, donde la desesperación es más espesa que el humo.

> "Ellos os prometieron supervivencia. Nosotros os prometemos algo mejor."`,
      }
    ]
  },

  /* ───────────────────────────── PERSONAJES ──────────────────────────── */
  {
    id: "personajes",
    title: "Personajes",
    icon: "helm",
    blurb: "Héroes, villanos y figuras que mueven los hilos del sector.",
    layout: "grid",
    entries: [
      {
        id: "varan-thessaly",
        title: "Varan Thessaly",
        epithet: "Lord-Comandante de la Legión Cineraria",
        tags: ["Leal", "Líder", "Humano"],
        quote: {
          text: "He enterrado a tres generaciones de mis soldados. Enterraré a esta también, si con ello el sector amanece.",
          source: "Varan Thessaly, ante el Consejo de Guerra"
        },
        body: `Anciano, marcado por mil batallas y sostenido más por la voluntad que por
la carne, **Varan Thessaly** ha comandado la Legión durante cuarenta años.

## El precio del mando
Su rostro es un mapa de cicatrices y su mirada, la de quien ha visto caer mundos
enteros. Es venerado por sus tropas y temido por sus enemigos, pero por las
noches le pesan los nombres de todos a los que envió a morir.`,
        related: [
          { section: "facciones", entry: "legion-cineraria", label: "La Legión Cineraria" }
        ]
      },
      {
        id: "ozric-9",
        title: "Ozric-9",
        epithet: "Magos Prime del Cónclave de Hierro",
        tags: ["Aliado", "Tecnología", "Enigma"],
        body: `Más máquina que hombre, **Ozric-9** dirige el Cónclave de Hierro desde las
profundidades de la Forja de Cineris. Habla poco y calcula siempre.

*Nadie sabe cuántos siglos lleva vivo, ni cuánto de él sigue siendo humano.*`,
      }
    ]
  },

  /* ────────────────────────────── MUNDOS ─────────────────────────────── */
  {
    id: "mundos",
    title: "Mundos",
    icon: "planet",
    blurb: "Planetas, estaciones y lugares del sector.",
    layout: "grid",
    entries: [
      {
        id: "cineris-primaris",
        title: "Cineris Primaris",
        epithet: "El Corazón del Sector",
        tags: ["Mundo-colmena", "Capital", "Leal"],
        body: `El mundo capital y última gran fortaleza humana del sector. Sus
ciudades-colmena se elevan como montañas de acero entre cielos de ceniza
perpetua.

## La Ciudadela
En su centro se alza la Ciudadela, sede de la Legión Cineraria, una mole de
murallas que jamás ha sido tomada.

- **Población:** miles de millones.
- **Clima:** cielos cubiertos, lluvia de ceniza.
- **Defensa:** la Legión Cineraria al completo.`,
      },
      {
        id: "mundo-tumba-khaad",
        title: "Mundo-Tumba Khaad",
        epithet: "El planeta que despertó",
        tags: ["Hostil", "Xenos", "Prohibido"],
        body: `Un mundo muerto y silencioso durante milenios... hasta que dejó de estarlo.
De sus profundidades emergen los **Devoradores Pálidos**, y nada de lo que entra
en Khaad regresa.

> Designación oficial: *Cuarentena absoluta. Acercarse es muerte.*`,
        related: [
          { section: "bestiario", entry: "devorador-palido", label: "Devorador Pálido" }
        ]
      }
    ]
  },

  /* ──────────────────────────── CONFLICTOS ───────────────────────────── */
  {
    id: "conflictos",
    title: "Conflictos",
    icon: "swords",
    blurb: "Las guerras y campañas que han forjado el sector.",
    layout: "grid",
    entries: [
      {
        id: "asedio-de-cineris",
        title: "El Asedio de Cineris",
        epithet: "Cuando la noche llamó a las puertas",
        tags: ["Campaña", "Defensa", "En curso"],
        body: `La mayor prueba de la Legión Cineraria: el cerco de los Devoradores
Pálidos sobre el mundo capital. Durante meses, oleada tras oleada se estrelló
contra la Ciudadela.

## Resultado
La línea aguantó, pero a un coste atroz. El asedio no ha terminado: solo ha
hecho una pausa.`,
        related: [
          { section: "facciones", entry: "legion-cineraria", label: "La Legión Cineraria" }
        ]
      }
    ]
  },

  /* ──────────────────────────── RELIQUIAS ────────────────────────────── */
  {
    id: "reliquias",
    title: "Reliquias",
    icon: "relic",
    blurb: "Artefactos, armas y objetos de poder.",
    layout: "grid",
    entries: [
      {
        id: "espada-de-ceniza",
        title: "La Espada de Ceniza",
        epithet: "El filo de los Lord-Comandantes",
        tags: ["Arma", "Reliquia", "Legión"],
        body: `Forjada con metal recuperado del primer mundo perdido, la **Espada de
Ceniza** pasa de Lord-Comandante a Lord-Comandante. Dicen que nunca se ha
enfriado del todo desde que se templó.

*Quien la porta, carga también con la memoria de todos los que cayeron.*`,
      }
    ]
  },

  /* ──────────────────────────── BESTIARIO ────────────────────────────── */
  {
    id: "bestiario",
    title: "Bestiario",
    icon: "claw",
    blurb: "Criaturas, xenos y horrores del vacío.",
    layout: "grid",
    entries: [
      {
        id: "devorador-palido",
        title: "Devorador Pálido",
        epithet: "El terror que sale de Khaad",
        tags: ["Xenos", "Hostil", "Enjambre"],
        body: `Criaturas sin ojos, de piel blanca como hueso, que se mueven en enjambres
silenciosos. Devoran todo a su paso: metal, carne y luz.

## Comportamiento
Atacan en oleadas coordinadas, como guiados por una sola mente. No conocen el
miedo ni la retirada.

> "Rezad para no oírlos jamás. Cuando los oís, ya es tarde."`,
        related: [
          { section: "mundos", entry: "mundo-tumba-khaad", label: "Mundo-Tumba Khaad" }
        ]
      }
    ]
  },

  /* ──────────────────────────── GLOSARIO ─────────────────────────────── */
  {
    id: "glosario",
    title: "Glosario",
    icon: "book",
    blurb: "Términos, jerga y conceptos del mundo.",
    layout: "grid",
    entries: [
      {
        id: "larga-noche",
        title: "La Larga Noche",
        epithet: "Término histórico",
        tags: ["Historia"],
        body: `Periodo de oscuridad y aislamiento en el que el sector quedó incomunicado
y al borde de la extinción. Marca el "antes" y el "después" de toda la historia
de Cineris.`,
      }
    ]
  }
];

/* ──────────────────────────── CRONOLOGÍA ──────────────────────────────
   Cada "era" agrupa una lista de eventos. Útil para la historia del mundo. */
window.TIMELINE = {
  id: "cronologia",
  title: "Cronología",
  blurb: "La historia del sector, era a era.",
  eras: [
    {
      name: "La Era Dorada",
      caption: "Antes de la caída",
      events: [
        { date: "Tiempos antiguos", title: "Fundación de Cineris", text: "El sector florece como colonia próspera, conectada al resto de la galaxia." },
        { date: "Apogeo", title: "Las Mil Ciudades", text: "Cineris Primaris se convierte en un faro de civilización en las Marcas." }
      ]
    },
    {
      name: "La Larga Noche",
      caption: "El sector cae en tinieblas",
      events: [
        { date: "El Silencio", title: "Se corta el contacto", text: "Las rutas se cierran. El sector queda aislado y comienzan los siglos oscuros." },
        { date: "La Gran Hambruna", title: "Mundos perdidos", text: "Uno tras otro, los planetas exteriores caen. Nace la Legión Cineraria de los supervivientes." }
      ]
    },
    {
      name: "La Era de Ceniza",
      caption: "El presente",
      events: [
        { date: "Hace 40 años", title: "Varan toma el mando", text: "Varan Thessaly es nombrado Lord-Comandante de la Legión." },
        { date: "Hoy", title: "El Asedio de Cineris", text: "Los Devoradores Pálidos despiertan en Khaad y marchan sobre el mundo capital." }
      ]
    }
  ]
};
