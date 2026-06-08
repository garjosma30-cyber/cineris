/* ============================================================================
   ARCHIVO DE LORE  —  Aquí vive TODO el contenido de tu mundo.
   ----------------------------------------------------------------------------
   Para añadir o cambiar lore solo se edita ESTE archivo. La web se actualiza
   sola al recargar.

   Estructura rápida:
     WORLD     -> nombre del sistema, lema, introducción y cita de portada.
     SECTIONS  -> cada MUNDO del sistema (aparece en la barra lateral).
                  Cada mundo tiene "entries" (fichas: descripción, facción,
                  lugares, personajes...).
     TIMELINE  -> la cronología (eras con eventos).

   En los textos largos ("body") se puede usar formato sencillo:
     ## Subtítulo      ### Sub-subtítulo
     **negrita**   *cursiva*
     - elemento de lista
     > Cita o frase destacada
     ---  (separador)     [texto](https://...)  (enlace)
   ========================================================================== */

window.WORLD = {
  name: "SISTEMA CINERIS",
  subtitle: "Crónicas de un sistema perdido en el Maelstrom",
  intro: `El **Sistema Cineris** nació como una promesa: un **puerto franco**
fundado por un **Rogue Trader** en los confines del espacio, lejos de toda
amenaza, lejos del **Maelstrom**.

El tiempo y las mareas de la disformidad traicionaron esa promesa. Hoy Cineris
yace **completamente sumergido en el Maelstrom**, atrapado entre tormentas de
disformidad que lo aíslan del resto de la galaxia.

Sus planetas **no son mundos demonio** —no todavía—, pero el sistema guarda un
secreto que ni sus propios habitantes conocen: *su estrella no es solo una
estrella.*

Esta es la crónica de Cineris: de sus mundos, de quienes los dominan y de lo que
se oculta a plena luz.`,
  quote: {
    text: "Nos fundaron lejos de toda tormenta. La tormenta vino a buscarnos.",
    source: "Dicho de las ciudades colmena de Cineris"
  }
};

/* ──────────────────────────────────────────────────────────────────────────
   MUNDOS DEL SISTEMA  (cada uno aparece en la barra lateral)
   ────────────────────────────────────────────────────────────────────────── */
window.SECTIONS = [

  /* ═══════════════════ 1 · PLANETA PRINCIPAL CINERIS ═══════════════════ */
  {
    id: "cineris",
    title: "Planeta Cineris",
    icon: "planet",
    blurb: "Mundo principal del sistema — feudo y cantera de los Iron Warriors.",
    layout: "grid",
    entries: [
      {
        id: "mundo-cineris",
        title: "El Mundo de Cineris",
        epithet: "Puerto franco de estepas asoladas",
        tags: ["Mundo principal", "Puerto franco", "Ciudades colmena"],
        quote: {
          text: "Cineris da hijos y da hierro. Eso es cuanto se le pide.",
          source: "Proverbio de capataz de colmena"
        },
        body: `Visto desde la órbita, **Cineris** aún conserva la silueta de lo que un
día fue: un **puerto independiente**, un punto de paso libre en el filo de la
galaxia. Pero su superficie cuenta otra historia.

## Estepas y colmenas
Sus vastas **estepas asoladas** se extienden hasta el horizonte, erizadas de
**ciudades colmena** que se alzan como montañas de acero y óxido. En ellas se
hacina una población incontable.

## El Sur prohibido
Todo el hemisferio **sur es inhabitable**: una tierra muerta donde nadie pone el
pie y de la que nadie habla.

## Cantera de carne y hierro
Por encima de todo, Cineris es el principal punto de **reclutamiento y
abastecimiento** de los Iron Warriors que dominan el sistema. Sus colmenas
entregan reclutas; sus estepas, recursos.`,
        related: [
          { section: "cineris", entry: "iron-warriors", label: "Los Iron Warriors" },
          { section: "cineris", entry: "cinturon-asteroides", label: "El Cinturón de Asteroides" }
        ]
      },
      {
        id: "iron-warriors",
        title: "Los Iron Warriors",
        epithet: "Los amos de hierro de Cineris",
        tags: ["Facción", "Marines del Caos", "Iron Warriors"],
        quote: {
          text: "El hierro no perdona. Nosotros tampoco.",
          source: "Lema de los amos de Cineris"
        },
        body: `Una **Gran Compañía de Iron Warriors** ha echado raíces en el sistema
Cineris y lo gobierna como su feudo particular.

## Reclutamiento y guerra
Del planeta extraen reclutas y suministros sin descanso: las estepas y las
colmenas de Cineris alimentan su incansable maquinaria de guerra.

## Una fortaleza en las sombras
Mantienen un **puerto a la vista**, en el cinturón de asteroides del sistema,
pero su **base principal es un secreto** celosamente guardado. Pocos —dentro o
fuera del sistema— saben dónde se ocultan en verdad los señores de Cineris.

> Para el resto de la galaxia, Cineris es un mundo olvidado del Maelstrom. Esa
> es exactamente la idea.`,
        related: [
          { section: "cineris", entry: "cinturon-asteroides", label: "El Cinturón de Asteroides" },
          { section: "cineris", entry: "mundo-cineris", label: "El Mundo de Cineris" }
        ]
      },
      {
        id: "cinturon-asteroides",
        title: "El Cinturón de Asteroides",
        epithet: "El puerto de los amos de hierro",
        tags: ["Localización", "Puerto", "Iron Warriors"],
        body: `Orbitando el sistema, un **cinturón de asteroides** alberga el **puerto**
de los Iron Warriors: el rostro visible de su poder, donde atracan sus naves y
fluye todo su abastecimiento.

Es cuanto el sistema **puede ver** de ellos. Su verdadera fortaleza —la base
principal— permanece oculta en otra parte, lejos de ojos curiosos.`,
        related: [
          { section: "cineris", entry: "iron-warriors", label: "Los Iron Warriors" }
        ]
      }
    ]
  },

  /* ═══════════════════════ 2 · ESTRELLA D31 ════════════════════════════ */
  {
    id: "estrella-d31",
    title: "Estrella D31",
    icon: "sun",
    blurb: "La estrella del sistema — y la herejía que arde en su núcleo.",
    layout: "grid",
    entries: [
      {
        id: "estrella",
        title: "La Estrella D31",
        epithet: "El sol de Cineris",
        tags: ["Estrella", "Sistema Cineris"],
        body: `Catalogada como **D31**, es la estrella en torno a la cual gira todo el
sistema Cineris. Para los millones que pueblan las colmenas no es más que el sol
pálido que asoma sobre las estepas, día tras día.

No tienen motivo para pensar otra cosa. Y en esa ignorancia descansa el secreto
mejor guardado del sistema.`,
        related: [
          { section: "estrella-d31", entry: "mechanicus-oscuro", label: "El Mechanicus Oscuro" }
        ]
      },
      {
        id: "mechanicus-oscuro",
        title: "El Mechanicus Oscuro",
        epithet: "La herejía en el corazón del sol",
        tags: ["Facción", "Mechanicus Oscuro", "Secreto"],
        quote: {
          text: "La carne es débil. El fuego de una estrella, eterno.",
          source: "Axioma del Mechanicus Oscurus"
        },
        body: `Lo que **nadie sabe** —ni los señores de hierro de Cineris, ni los
enjambres de las colmenas, ni nave alguna que cruce el sistema— es que la
estrella **D31** no es solo una estrella.

## La forja oculta
En su seno, el **Mechanicus Oscuro** (*Mechanicus Oscurus*) ha establecido una
**base**. A plena luz, a la vista de todo el sistema y aun así invisible, los
tecnoherejes obran sus designios sin que nadie sospeche su existencia.

> "Levantaron su templo en el único lugar donde nadie osaría mirar: dentro del
> sol."`,
        related: [
          { section: "estrella-d31", entry: "estrella", label: "La Estrella D31" }
        ]
      }
    ]
  }

];

/* ──────────────────────────── CRONOLOGÍA ──────────────────────────────
   Reconstruida con lo que me has contado. Dame fechas/eventos y la amplío. */
window.TIMELINE = {
  id: "cronologia",
  title: "Cronología",
  blurb: "La historia del sistema Cineris, era a era.",
  eras: [
    {
      name: "La Fundación",
      caption: "La promesa de un puerto franco",
      events: [
        { date: "Tiempos de la fundación", title: "Un Rogue Trader funda Cineris", text: "Un Libre Mercader establece el sistema como puerto independiente, lejos del Maelstrom: próspero, libre y bien comunicado." },
        { date: "Auge", title: "El puerto franco", text: "Cineris florece como punto de paso. Sus estepas se cubren de ciudades colmena y su población se dispara." }
      ]
    },
    {
      name: "La Inmersión",
      caption: "El Maelstrom lo reclama",
      events: [
        { date: "La Deriva", title: "El Maelstrom engulle el sistema", text: "Las corrientes de la disformidad crecen hasta tragarse a Cineris por completo. El sistema queda aislado, rodeado de tormentas, olvidado por la galaxia." }
      ]
    },
    {
      name: "El Dominio Oculto",
      caption: "El presente",
      events: [
        { date: "Era reciente", title: "Los Iron Warriors se asientan", text: "Una Gran Compañía de Iron Warriors hace de Cineris su coto de reclutamiento y abastecimiento. Levantan un puerto en el cinturón de asteroides; su verdadera base permanece en secreto." },
        { date: "Secreto", title: "El fuego en el corazón de la estrella", text: "En lo más profundo de D31, el Mechanicus Oscuro instala una base que nadie, ni siquiera los señores de Cineris, llega a sospechar." }
      ]
    }
  ]
};
