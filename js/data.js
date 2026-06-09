/* ============================================================================
   ARCHIVO DE LORE  —  Aquí vive TODO el contenido de tu mundo.
   ----------------------------------------------------------------------------
   Para añadir o cambiar lore solo se edita ESTE archivo. La web se actualiza
   sola al recargar.

   MODELO EN ÁRBOL:
     WORLD     -> nombre del sistema, lema, introducción y cita de portada.
     NAV       -> árbol de la barra lateral. Cada nodo puede tener:
                    id, title, icon, epithet, tags, quote, image, body
                    children: [ ...más nodos ]   (sub-pestañas)
                    kind: "batallas"             (página-registro de partidas)
                    related: [ { to:"ruta/de/ids", label:"..." } ]
     TIMELINE  -> la cronología (eras con eventos).

   Las RUTAS son el camino de ids: p.ej. el nodo "iron-warriors" dentro de
   "cineris" vive en  #/cineris/iron-warriors

   Formato de texto en "body":
     ## Subtítulo   ### Sub-subtítulo   **negrita**  *cursiva*
     - lista        > cita        ---  (separador)   [texto](url)

   Iconos disponibles: planet, sun, shield, swords, gem, cog, portal,
     chaosstar, person, book, claw, banner, helm, hourglass, skull, home.
   ========================================================================== */

window.WORLD = {
  name: "SISTEMA CINERIS",
  subtitle: "Crónicas de un sistema perdido en el Maelstrom",
  image: "assets/portada.png",
  intro: `El **Sistema Cineris** nació como una promesa: un **puerto franco**
fundado por el **Rogue Trader Sir Lok II** en los confines del espacio, lejos de
toda amenaza, lejos del **Maelstrom**.

El tiempo y las mareas de la disformidad traicionaron esa promesa. Hoy Cineris
yace **completamente sumergido en el Maelstrom**, aislado entre tormentas de
disformidad.

Sus planetas **no son mundos demonio** —no todavía—, pero el sistema guarda más
de un secreto: una estrella que no es solo una estrella, y un **túnel de
disformidad** que conduce a mundos malditos.

Hace mil años, Cineris fue **bastión de los Puños Imperiales**. Hoy sus
fortalezas son ruinas: los **Iron Warriors** los expulsaron, y desde entonces el
**Maelstrom** niega al Imperio toda ruta segura para el contraataque. El sistema
está solo, y en manos del hierro.

Esta es la crónica de Cineris: de sus mundos, de quienes los dominan y de lo que
se oculta a plena luz.`,
  quote: {
    text: "Nos fundaron lejos de toda tormenta. La tormenta vino a buscarnos.",
    source: "Dicho de las ciudades colmena de Cineris"
  }
};

/* ──────────────────────────────────────────────────────────────────────────
   NAV — árbol de la barra lateral (los MUNDOS y sus sub-pestañas)
   ────────────────────────────────────────────────────────────────────────── */
window.NAV = [

  /* ═══════════════════ 1 · PLANETA CINERIS ═══════════════════ */
  {
    id: "cineris",
    title: "Planeta Cineris",
    icon: "planet",
    image: "assets/cineris.png",
    epithet: "Mundo principal del sistema",
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
**ciudades colmena**. **Tres grandes colmenas** dominan el planeta, y las tres
**pagan tributo** al [Gran Señor de los Lok](#/cineris/gran-senor-lok) que gobierna
el sistema.

## El Sur prohibido
Todo el hemisferio **sur** parece una tierra muerta y deshabitada de la que nadie
habla. Pero bajo sus páramos, en un laberinto de **cavernas**, se ocultan
**poblaciones enteras** de número incalculable.

La mayoría son **mutantes y degenerados**. Aun así, se rumorea que entre ellos
pervive un **culto de exconvictos** —penados desde los tiempos del dominio de los
Puños Imperiales— que todavía se mantiene **leal al Emperador**.

## Cantera de carne y hierro
Cineris es el principal punto de **reclutamiento y abastecimiento** de los Iron
Warriors. Pero bajo su yugo, en lo más hondo de las colmenas, **algo se gesta**:
una [rebelión en ciernes](#/cineris/rebelion).`,
    childrenLabel: "En este mundo",
    children: [
      {
        id: "gran-senor-lok",
        title: "El Gran Señor de los Lok",
        icon: "crown",
        image: "assets/gran-senor-lok.png",
        imageContain: true,
        imageCaption: "«El Gran Señor de los Lok» · 801.M41",
        epithet: "Gobernante de Cineris",
        tags: ["Facción", "Gobernante", "Hechicero del Caos", "Dinastía Lok"],
        quote: {
          text: "Los Lok siempre regresan. Y esta vez, hemos traído el Maelstrom con nosotros.",
          source: "El Gran Señor de los Lok"
        },
        body: `El **Gran Señor de los Lok** es el amo y gobernante de Cineris. No es un
Marine, sino un **hechicero del Caos** surgido del Maelstrom, que se reclama heredero
de la perdida dinastía Lok —aunque "Gran Señor de los Lok" suena más a **título** que
a nombre, y bien podría tratarse de toda una sucesión de ellos.

## El gobierno de los IV
Gobierna a través de **los IV**: un círculo de **consejeros oscuros y secretos**, una
**parodia siniestra de los Altos Señores de Terra**. Tras su trono se adivina la mano
de los Iron Warriors, la IV Legión.

## La cultura del Maelstrom
Ha traído al sistema la **cultura del Maelstrom**: deja que los **cultos proliferen**
—o que se extingan— sin reparo alguno, siempre y cuando **paguen su tributo**. Bajo
esa tolerancia corsaria germinan por igual la riqueza y la herejía.

*(El Gran Señor de los Lok y los IV aún no tienen nombres propios — dímelos y los
añado.)*`,
        related: [
          { to: "cineris/iron-warriors", label: "Los Iron Warriors" },
          { to: "cineris/rebelion", label: "La Rebelión en Ciernes" }
        ]
      },
      {
        id: "iron-warriors",
        title: "Iron Warriors",
        icon: "shield",
        image: "assets/marius-rubigo.png",
        imageContain: true,
        imageCaption: "Dominus Marius Rubīgō, Filius Ferri",
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
Mantienen su **puerto** a la vista, en el cinturón de asteroides, pero su **base
principal es un secreto** celosamente guardado. Pocos —dentro o fuera del
sistema— saben dónde se ocultan en verdad los señores de Cineris.

> Para el resto de la galaxia, Cineris es un mundo olvidado del Maelstrom. Esa es
> exactamente la idea.

A su mando está el **Herrero Disforme**, su Maestre de Forja. *(La Gran Compañía
aún no tiene nombre en la crónica — dímelo y lo añado.)*`,
        related: [
          { to: "cineris/cinturon-asteroides", label: "El Cinturón de Asteroides" },
          { to: "cineris/batallas", label: "Batallas en Cineris" }
        ],
        childrenLabel: "Señores de hierro",
        children: [
          {
            id: "herrero-disforme",
            title: "Herrero Disforme",
            icon: "skull",
            image: "assets/herrero-disforme.png",
            epithet: "Maestre de Forja de los Iron Warriors de Cineris",
            tags: ["Personaje", "Iron Warriors", "Maestre de Forja"],
            quote: {
              text: "Cada cadena que forjo es una promesa. Cada promesa, una condena.",
              source: "El Herrero Disforme"
            },
            body: `Nadie recuerda —o nadie se atreve a pronunciar— su verdadero nombre.
En Cineris solo se le conoce como el **Herrero Disforme**: el **Maestre de Forja**
que gobierna a los Iron Warriors del sistema.

## Fundido con la máquina
Encerrado en una **armadura de Exterminador** marcada con las franjas de peligro de
su Legión, hace tiempo que dejó de ser solo un hombre. De su espalda brotan
**servo-brazos y mecadendritas**, y su rostro es una **máscara mortuoria** de acero
presidida por un único ojo carmesí.

## El señor de hierro
Empuña un **martillo de asedio** capaz de derribar murallas y carga cadenas y
cráneos como trofeos. Bajo su mando, Cineris es a un tiempo fortaleza y cantera de
guerra.`,
            related: [
              { to: "cineris/iron-warriors", label: "Los Iron Warriors" }
            ]
          }
        ]
      },
      {
        id: "cinturon-asteroides",
        title: "Cinturón de Asteroides",
        icon: "asteroid",
        image: "assets/cinturon-asteroides.png",
        epithet: "El puerto de los amos de hierro",
        tags: ["Localización", "Puerto", "Iron Warriors"],
        quote: {
          text: "Cada roca, una fortaleza. Cada cadena, una advertencia.",
          source: "Dicho entre los tripulantes del puerto"
        },
        body: `Entre las rocas que orbitan Cineris, los Iron Warriors han forjado su
**puerto**: un archipiélago de **fortalezas** alzadas sobre asteroides, unidas
por **cadenas colosales** y erizadas de cañones.

## El rostro visible del poder
Aquí atracan las naves de guerra, se acumula el botín y fluye el abastecimiento
del sistema. Baluartes de hierro con franjas de peligro vigilan cada aproximación:
nada entra ni sale sin que los amos de Cineris lo permitan.

## Lo que el puerto oculta
Por imponente que parezca, esto es solo lo que los Iron Warriors **dejan ver**.
Su verdadera fortaleza —la base principal— permanece en secreto, lejos de estas
rocas.

> Cadenas para unir mundos. Cañones para recordarte de quién son.`,
        related: [
          { to: "cineris/iron-warriors", label: "Los Iron Warriors" }
        ]
      },
      {
        id: "rebelion",
        title: "Rebelión en Ciernes",
        icon: "eye",
        epithet: "Los leales al antiguo Emperador",
        tags: ["Facción", "Culto", "Rebelión", "Demonios"],
        quote: {
          text: "Juran lealtad a un trono que el sistema olvidó hace mil años. Y para honrarlo, abren puertas que jamás debieron abrirse.",
          source: "Informe de un capataz de colmena"
        },
        body: `En lo más hondo de las tres ciudades colmena se gesta una **rebelión**
contra el yugo de los Iron Warriors.

## Fe y herejía
Sus miembros se proclaman **leales al antiguo Emperador**, nostálgicos del Imperio
que un día gobernó Cineris. Pero su culto ha derivado en algo **extraño y
esotérico**: ritos prohibidos, símbolos imposibles y, en lo más profundo, la
**convocación de demonios**.

## Una amenaza en ciernes
Todavía son pocos y se esconden, pero crecen. Ni los Iron Warriors ni el Mechanicus
Oscuro sospechan aún hasta dónde llega el veneno que anida en las colmenas.

*(Este culto aún no tiene nombre en la crónica — dímelo y lo añado.)*`,
        related: [
          { to: "cineris/iron-warriors", label: "Los Iron Warriors" }
        ]
      },
      {
        id: "nomadas-desierto",
        title: "Los Nómadas del Desierto",
        icon: "tent",
        image: "assets/nomadas-desierto.png",
        imageContain: true,
        epithet: "Moradores de los páramos del Sur",
        tags: ["Facción", "El Sur", "Nómadas", "Parias"],
        quote: {
          text: "El desierto no perdona a los blandos. Por eso seguimos aquí cuando todo lo demás ha muerto.",
          source: "Dicho de los Nómadas del Desierto"
        },
        body: `Allí donde el **Sur** parece muerto, ellos caminan. Los **Nómadas del
Desierto** son los pueblos errantes de los páramos de Cineris: tribus harapientas
que cruzan las dunas de ceniza y se refugian en las cavernas.

## Hijos del aire muerto
Cubren sus rostros con **máscaras y respiradores** —el aire de los páramos mata a
quien lo respira sin filtro— y se envuelven en sudarios y chatarra. Portan rifles
remendados, cadenas y **estandartes deshilachados**.

## ¿Amigos o enemigos?
Errantes y desconfiados, recorren un mundo que los olvidó. Su lealtad es un enigma.

*(¿Quiénes son para ti: los mutantes y degenerados de las cavernas, el culto de
exconvictos leal al Emperador, o un pueblo aparte? Cuéntamelo y afino su historia.)*`,
        related: [
          { to: "cineris/rebelion", label: "La Rebelión en Ciernes" }
        ]
      },
      {
        id: "batallas",
        title: "Batallas",
        icon: "swords",
        kind: "batallas",
        epithet: "Crónica de partidas — Frente de Cineris",
        body: `Aquí se inmortaliza cada **partida jugada** en el frente de Cineris:
asedios, incursiones y guerras por el dominio del sistema.`,
        children: []   /* ← cada partida que juegues se añade aquí */
      }
    ]
  },

  /* ═══════════════════════ 2 · ESTRELLA D31 ════════════════════════════ */
  {
    id: "estrella-d31",
    title: "Estrella D31",
    icon: "sun",
    epithet: "El sol de Cineris",
    tags: ["Estrella", "Sistema Cineris", "Secreto"],
    body: `Catalogada como **D31**, es la estrella en torno a la cual gira todo el
sistema Cineris. Para los millones que pueblan las colmenas no es más que el sol
pálido que asoma sobre las estepas.

Pero D31 guarda **dos secretos**. En su seno arde una herejía oculta. Y bajo
ella se abre el **Túnel Hybri**, una garganta de disformidad que lleva a los
mundos malditos de [Hybri](#/hybri).`,
    childrenLabel: "Lo que oculta la estrella",
    children: [
      {
        id: "mechanicus-oscuro",
        title: "Mechanicus Oscuro",
        icon: "cog",
        image: "assets/mechanicus-oscuro.png",
        epithet: "La herejía en el corazón del sol",
        tags: ["Facción", "Mechanicus Oscuro", "Secreto"],
        quote: {
          text: "La carne es débil. El fuego de una estrella, eterno.",
          source: "Axioma del Mechanicus Oscurus"
        },
        body: `Lo que **nadie sabe** —ni los señores de hierro de Cineris, ni los
enjambres de las colmenas— es que la estrella **D31** no es solo una estrella.

## La forja oculta
En su seno, el **Mechanicus Oscuro** (*Mechanicus Oscurus*) ha establecido una
**base**. A plena luz, a la vista de todo el sistema y aun así invisible, los
tecnoherejes obran sus designios sin que nadie sospeche su existencia.

> "Levantaron su templo en el único lugar donde nadie osaría mirar: dentro del
> sol."`
      }
    ]
  },

  /* ═══════════════════════ 3 · SISTEMA HYBRI ═══════════════════════════ */
  {
    id: "hybri",
    title: "Sistema Hybri",
    icon: "portal",
    image: "assets/tunel-hybri.png",
    epithet: "Más allá del Túnel Hybri",
    tags: ["Sistema", "Disformidad", "Caballeros del Caos"],
    quote: {
      text: "El túnel no se cruza dos veces con la misma fe.",
      source: "Advertencia grabada a la entrada del Túnel Hybri"
    },
    body: `Bajo la estrella **D31**, oculta donde nadie mira, se abre la boca del
**Túnel Hybri**: una garganta de pura **disformidad** que atraviesa la realidad y
desemboca en un racimo de mundos malditos.

## Los mundos caballero del Caos
Al otro lado aguardan los mundos de **Hybri**: feudos de **Casas Caballero**
entregadas al Caos, donde colosales andadores de guerra braman entre la ceniza y
el fuego.

## Lucha y alianza eternas
Son tres —**Hybri 1**, **Hybri 2** y **Hybri 4**— enzarzados en una **eterna
lucha y alianza**: hoy hermanos de sangre, mañana enemigos a muerte, en un ciclo
que no termina jamás.

*(De Hybri 3, la crónica aún calla. Cuéntame su historia cuando quieras.)*`,
    childrenLabel: "Mundos del sistema Hybri",
    children: [
      {
        id: "hybri-1",
        title: "Hybri 1",
        icon: "chaosstar",
        epithet: "Mundo caballero del Caos",
        tags: ["Mundo Caballero", "Caos"],
        body: `El primero de los mundos al otro lado del túnel. Su Casa Caballero se
reclama la **más antigua** de Hybri, y con ello, dueña por derecho del resto.

*Cuéntame el nombre de su Casa, su señor y su historia, y lo detallo.*`
      },
      {
        id: "hybri-2",
        title: "Hybri 2",
        icon: "chaosstar",
        epithet: "Mundo caballero del Caos",
        tags: ["Mundo Caballero", "Caos"],
        body: `El segundo mundo de Hybri, cuya Casa presume de ser la **más numerosa**:
una marea de andadores que ningún rival iguala en número.

*Cuéntame el nombre de su Casa, su señor y su historia, y lo detallo.*`
      },
      {
        id: "hybri-4",
        title: "Hybri 4",
        icon: "chaosstar",
        epithet: "Mundo caballero del Caos",
        tags: ["Mundo Caballero", "Caos"],
        body: `El cuarto mundo de Hybri, hogar de la Casa **más temida**: crueles incluso
para los cánones del Caos, sus alianzas nunca duran y su rencor no se olvida.

*Cuéntame el nombre de su Casa, su señor y su historia, y lo detallo.*`
      },
      {
        id: "batallas",
        title: "Batallas",
        icon: "swords",
        kind: "batallas",
        epithet: "Crónica de partidas — Mundos de Hybri",
        body: `Aquí se inmortaliza cada **partida jugada** en los mundos de Hybri:
las guerras de los Caballeros del Caos, sus alianzas rotas y sus venganzas.`,
        children: []   /* ← cada partida que juegues se añade aquí */
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
  image: "assets/fondo-cronologia.png",
  eras: [
    {
      name: "La Fundación",
      caption: "Hace 5000 años — el Libre Mercader Lok",
      events: [
        { date: "Hace 5000 años", title: "Sir Lok II reclama Cineris", text: "Con las cartas de ruta que heredó para hallar el sistema, el Rogue Trader Sir Lok II lo asienta sin derecho legal a gobernarlo y empieza a pagar tributo al Imperio." },
        { date: "La dinastía Lok", title: "Cimientos corsarios", text: "Bajo los Lok, Cineris crece a la sombra de la ley: un asentamiento próspero levantado sobre estructuras piratescas que perdurarán milenios." }
      ]
    },
    {
      name: "La Mácula de los Lok",
      caption: "Hace 4000 años — el heredero traidor",
      events: [
        { date: "Hace 4000 años", title: "El tercer heredero, traitor xenos", text: "El tercer heredero de la dinastía Lok es declarado traidor y xenos. La mancha de la herejía cae sobre todo el sistema." },
        { date: "La respuesta del Imperio", title: "Llegan los Puños Imperiales", text: "Para purgar la mácula, el Imperio envía un capítulo sucesor de los Puños Imperiales, que toma el control de Cineris." },
        { date: "El exilio", title: "La dinastía Lok huye al Maelstrom", text: "Perseguidos, los Lok huyen al corazón del Maelstrom. No hallan allí grandes glorias: su dinastía se pierde y se desvanece durante milenios." }
      ]
    },
    {
      name: "El Yugo del Puño",
      caption: "Tres milenios bajo los Puños Imperiales",
      events: [
        { date: "Durante 3000 años", title: "Pocos marines, larga vigilia", text: "Un puñado de Puños Imperiales sucesores conserva el sistema durante tres milenios, guarneciendo sus fortalezas." },
        { date: "La herencia Lok", title: "Las viejas estructuras se consolidan", text: "Pese a la vigilancia imperial, las redes piratescas de los Lok arraigan y se consolidan en las ciudades colmena." }
      ]
    },
    {
      name: "La Inmersión y la Caída",
      caption: "Hace ~1000 años — el retorno de los Lok",
      events: [
        { date: "La Deriva", title: "El Maelstrom engulle el sistema", text: "Las corrientes de la disformidad crecen hasta tragarse a Cineris. El sistema queda aislado, sin refuerzos, olvidado por la galaxia." },
        { date: "El retorno", title: "Reaparece el Gran Señor de los Lok", text: "Del Maelstrom emerge un hechicero del Caos que se proclama Gran Señor de los Lok y reclama el gobierno del sistema. Su campaña dura apenas unos meses." },
        { date: "La Caída", title: "Llega el hierro", text: "Tras la campaña del hechicero llegan los Iron Warriors. Juntos arrebatan Cineris a los Puños Imperiales y los expulsan tras una guerra brutal." },
        { date: "Desde entonces", title: "Un contraataque imposible", text: "El Maelstrom niega al Imperio toda ruta segura: ningún contraataque de envergadura ha logrado reconquistar Cineris." }
      ]
    },
    {
      name: "El Dominio Oculto",
      caption: "El presente",
      events: [
        { date: "Hoy", title: "El gobierno del Gran Señor de los Lok", text: "El Gran Señor de los Lok gobierna el sistema a través de los IV, sus consejeros secretos. Trajo la cultura del Maelstrom: cultos y vicios proliferan libres mientras las tres colmenas paguen su tributo." },
        { date: "Secreto", title: "El fuego en el corazón de la estrella", text: "En lo más profundo de D31, el Mechanicus Oscuro obra en una base que nadie llega a sospechar." },
        { date: "Secreto", title: "Se abre el Túnel Hybri", text: "Bajo la estrella, una garganta de disformidad conecta Cineris con los mundos caballero del Caos de Hybri." },
        { date: "En ciernes", title: "La rebelión que se gesta", text: "En las colmenas crece un culto que se dice leal al antiguo Emperador, pero cuyos ritos esotéricos convocan a los demonios." }
      ]
    }
  ]
};
