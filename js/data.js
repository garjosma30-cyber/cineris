/* ============================================================================
   ARCHIVO DE LORE  —  Aquí vive TODO el contenido de tu mundo.
   ----------------------------------------------------------------------------
   Para añadir o cambiar lore solo se edita ESTE archivo. La web se actualiza
   sola al recargar.

   MODELO EN ÁRBOL:
     WORLD     -> nombre del sistema, lema, introducción y cita de portada.
     NAV       -> árbol de la barra lateral. Cada nodo puede tener:
                    id, title, icon, epithet, tags, quote, image, body
                    imageContain: true  -> muestra la imagen ENTERA (cuadro)
                    imageCaption: "..." -> pie de foto / placa
                    children: [ ...más nodos ]   (sub-pestañas)
                    kind: "batallas"             (página-registro de partidas)
                    battle: { fecha, lugar, puntos, bandos:[...], resultado }
                              (hoja de batalla de una partida; ver plantilla
                               comentada en la sección Batallas de Cineris)
                    related: [ { to:"ruta/de/ids", label:"..." } ]
     TIMELINE  -> la cronología (eras con eventos, fechas en notación 40k).
                  Cada evento puede llevar tags: ["Facción", ...] (para los
                  filtros) y link: "ruta/de/ids" (enlace a una ficha).

   Convención: la "quote" de cada ficha es su PRESENTACIÓN, y es siempre una
   voz de los Lok: una anotación del diario de un Rogue Trader (Sir Lok II/III/IV)
   o una ley/soflama del actual Gran Señor de los Lok.

   Año actual del setting: 001.M42.

   Iconos: planet, sun, shield, swords, gem, cog, portal, chaosstar, asteroid,
     eye, crown, aquila, person, book, claw, banner, helm, hourglass, skull, home.
   ========================================================================== */

window.WORLD = {
  name: "SISTEMA CINERIS",
  subtitle: "Crónicas de un sistema perdido en el Maelstrom",
  image: "assets/portada.jpg",
  intro: `El **Sistema Cineris** nació como una promesa: un **puerto franco**
fundado por el **Rogue Trader Sir Lok II** en el filo de la galaxia, lejos de
toda amenaza, lejos del **Maelstrom**.

La disformidad traicionó esa promesa. Hoy Cineris yace **engullido por el
Maelstrom**, solo entre tormentas que ninguna nave cruza.

Sus planetas **no son mundos demonio** —no todavía—. Pero el sistema guarda más
de un secreto: una estrella que no es solo una estrella, y un **túnel de
disformidad** que desemboca en mundos malditos.

Hace mil años, Cineris fue **bastión de los Puños Imperiales**. Sus fortalezas
son hoy ruinas: los **Iron Warriors** los expulsaron, y el Maelstrom niega al
Imperio toda ruta de regreso. El sistema está solo, y en manos del hierro.

Esta es su crónica: la de sus mundos, la de sus amos, y la de lo que se oculta
a plena luz.`,
  quote: {
    text: "Anoto estas coordenadas con mano temblorosa: he hallado el sistema que mi linaje persiguió. Que nadie más conozca jamás esta ruta.",
    source: "Sir Lok II · Diario de a bordo, Tomo I"
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
    image: "assets/cineris.jpg",
    epithet: "Mundo principal del sistema",
    tags: ["Mundo principal", "Puerto franco", "Ciudades colmena"],
    quote: {
      text: "Un mundo de estepas sin fin y cielos de ceniza. Pobre en belleza, rico en hombres y en metal. Servirá.",
      source: "Sir Lok II · Diario de a bordo, Tomo II"
    },
    body: `Visto desde la órbita, **Cineris** aún conserva la silueta de lo que
fue: un **puerto franco** en el filo de la galaxia. Su superficie cuenta otra
historia.

## Estepas y colmenas
**Estepas asoladas** hasta el horizonte, erizadas de **ciudades colmena**. Tres
grandes colmenas dominan el planeta, y las tres **pagan tributo** al
[Gran Señor de los Lok](#/cineris/gran-senor-lok) que gobierna el sistema.

## El Sur prohibido
El hemisferio **sur** parece tierra muerta de la que nadie habla. Pero bajo sus
páramos, en un laberinto de **cavernas**, se ocultan **poblaciones enteras** de
número incalculable: **mutantes y degenerados** en su mayoría... y entre ellos,
dicen, un **culto de exconvictos** de la era de los Puños Imperiales que aún
reza al Emperador.

## Cantera de carne y hierro
Cineris alimenta sin descanso la maquinaria de guerra de los **Iron Warriors**:
reclutas, metal y tributo. Pero bajo el yugo, en lo más hondo de las colmenas,
**algo se gesta**: una [rebelión en ciernes](#/cineris/rebelion).`,
    childrenLabel: "En este mundo",
    children: [
      {
        id: "gran-senor-lok",
        title: "El Gran Señor de los Lok",
        icon: "crown",
        image: "assets/gran-senor-lok.jpg",
        imageContain: true,
        imageCaption: "«El Gran Señor de los Lok» · 801.M41",
        epithet: "Gobernante de Cineris",
        tags: ["Facción", "Gobernante", "Hechicero del Caos", "Dinastía Lok"],
        quote: {
          text: "Yo soy el principio y el regreso de esta dinastía. Cineris fue de los Lok, es de los Lok, y de los Lok será mientras el Maelstrom ruja.",
          source: "Primera Soflama del Gran Señor de los Lok"
        },
        body: `El **Gran Señor de los Lok** es el amo de Cineris. No es un Astartes:
es un **hechicero del Caos** surgido del Maelstrom que se reclama heredero de la
perdida dinastía Lok. "Gran Señor de los Lok" suena más a **título** que a nombre
—y bien podría haber sido toda una sucesión de ellos.

## El gobierno de los IV
Gobierna a través de **los IV**: un círculo de **consejeros oscuros y secretos**,
**parodia siniestra de los Altos Señores de Terra**. Tras su trono se adivina la
mano de los Iron Warriors, la IV Legión.

## La cultura del Maelstrom
Bajo su ley, los **cultos proliferan o se extinguen** sin que nadie mueva un dedo,
mientras **paguen su tributo**. De esa tolerancia corsaria germinan, por igual, la
riqueza y la herejía.

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
        image: "assets/marius-rubigo.jpg",
        imageContain: true,
        imageCaption: "Dominus Marius Rubīgō, Filius Ferri",
        epithet: "Los amos de hierro de Cineris",
        tags: ["Facción", "Marines del Caos", "Iron Warriors"],
        quote: {
          text: "Dad al hierro su tributo de carne y dejadle hacer la guerra. Mientras el muro aguante, no preguntéis qué se esconde tras él.",
          source: "Ley del Gran Señor de los Lok"
        },
        body: `Una **Gran Compañía de Iron Warriors** ha echado raíces en el sistema
Cineris y lo gobierna como su feudo.

## Reclutamiento y guerra
Las estepas y las colmenas alimentan su maquinaria: carne para los reclutadores,
metal para las forjas, guerra sin fin.

## Una fortaleza en las sombras
Su **puerto** está a la vista, en el cinturón de asteroides. Su **base principal,
no**: nadie —dentro o fuera del sistema— sabe dónde se ocultan en verdad los
señores de Cineris.

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
            image: "assets/herrero-disforme.jpg",
            epithet: "Maestre de Forja de los Iron Warriors de Cineris",
            tags: ["Personaje", "Iron Warriors", "Maestre de Forja"],
            quote: {
              text: "Mi Maestre de Forja no duerme, no perdona y no falla. Temedle como me temeríais a mí.",
              source: "Edicto del Gran Señor de los Lok"
            },
            body: `Nadie recuerda —o nadie osa pronunciar— su verdadero nombre. En
Cineris se le conoce como el **Herrero Disforme**: el **Maestre de Forja** que
gobierna a los Iron Warriors del sistema.

## Fundido con la máquina
Sepultado en una **armadura de Exterminador** con las franjas de peligro de su
Legión, dejó de ser solo un hombre hace mucho. De su espalda brotan **servo-brazos
y mecadendritas**; su rostro es una **máscara mortuoria** de acero con un único
ojo carmesí.

## El señor de hierro
Empuña un **martillo de asedio** que derriba murallas, y carga cadenas y cráneos
como trofeos. Bajo su mando, Cineris es a la vez fortaleza y cantera de guerra.`,
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
        image: "assets/cinturon-asteroides.jpg",
        epithet: "El puerto de los amos de hierro",
        tags: ["Localización", "Puerto", "Iron Warriors"],
        quote: {
          text: "Hemos fortificado las rocas. Ahora ninguna nave entra en Cineris sin nuestro permiso, ni sale sin nuestro diezmo.",
          source: "Sir Lok III · Diario de a bordo, Tomo IV"
        },
        body: `Entre las rocas que orbitan Cineris, los Iron Warriors han forjado su
**puerto**: un archipiélago de **fortalezas** alzadas sobre asteroides, unidas
por **cadenas colosales** y erizadas de cañones.

## El rostro visible del poder
Aquí atracan las naves de guerra, se amontona el botín y fluye el diezmo del
sistema. Nada entra ni sale sin que los amos de hierro lo permitan.

## Lo que el puerto oculta
Por imponente que parezca, esto es solo lo que los Iron Warriors **dejan ver**.
Su verdadera fortaleza permanece en secreto, lejos de estas rocas.

> Cadenas para unir mundos. Cañones para recordarte de quién son.`,
        related: [
          { to: "cineris/iron-warriors", label: "Los Iron Warriors" }
        ]
      },
      {
        id: "rebelion",
        title: "Rebelión en Ciernes",
        icon: "eye",
        image: "assets/nomadas-desierto.jpg",
        imageContain: true,
        epithet: "Disidencia contra el régimen del Lok",
        tags: ["Facción", "Rebelión", "El Sur", "Colmenas"],
        quote: {
          text: "Que recen a quien quieran en sus agujeros. El día que dejen de pagar tributo, dejarán de respirar.",
          source: "Edicto del Gran Señor de los Lok"
        },
        body: `Bajo el yugo del Gran Señor de los Lok crece la disidencia. Sus
seguidores vagan por los páramos y las cavernas como **nómadas del desierto**:
enmascarados contra el aire muerto, harapientos, armados con rifles remendados.

## La Máscara
En el Sur, la máscara no es un disfraz: es ley de supervivencia... y bandera.
Todo paria la viste, y bajo ella **todos son uno**: el recaudador no distingue,
el delator no señala, y la bala que busca a un rebelde **nunca sabe a cuál ha
matado**.

## Una sola cara, dos almas
Porque bajo esas máscaras conviven **dos rebeliones** que se odian tanto como
odian al Lok: una aún **leal al Emperador**, otra entregada a los **demonios**.
Comparten agua, túneles y enemigo —y la certeza de que, el día que caigan las
máscaras, habrá **una guerra debajo de la guerra**.`,
        childrenLabel: "Las dos rebeliones",
        children: [
          {
            id: "habitantes-cavernas",
            title: "Los Habitantes de las Cavernas",
            icon: "aquila",
            epithet: "Los Penitentes del Muro · exconvictos leales al Emperador",
            tags: ["Rebelión", "Leales", "El Sur", "Penitentes del Muro"],
            quote: {
              text: "Bajo el Sur se pudren unos fieles de un dios muerto. Dejadlos pudrirse: su fe no da de comer ni paga tributo.",
              source: "Soflama del Gran Señor de los Lok"
            },
            body: `En las **cavernas** del Sur pervive un pueblo descendiente de los
**penados** de la era de los Puños Imperiales: presos, exiliados, y las mil
generaciones que nacieron de ellos. Se llaman a sí mismos **los Penitentes del
Muro**.

## La condena como fe
Sus antepasados fueron encarcelados por los Puños... y de sus carceleros heredaron
la fe. Hoy cumplen una condena que nadie recuerda haber dictado: cada generación
nace presa y muere fiel, convencida de que su cautiverio es **penitencia por la
caída del sistema** —y de que el perdón llegará el día que el Imperio regrese.

## El Alcaide y la Última Piedra
Los guía el **Alcaide**, un título que pasa de padres a hijos desde el último
carcelero imperial. Custodia las **llaves de una prisión cuyos muros ya no
existen** y la **Última Piedra**: un sillar de la fortaleza caída de los Puños,
ante el que se jura en silencio. Son toscos, supersticiosos y desconfiados —pero
su fe es de hierro, y saben esperar.

> Rezan a oscuras para que nadie vea sus lágrimas. Y afilan a oscuras para que
> nadie cuente sus cuchillos.`,
            related: [
              { to: "cineris/rebelion/cultistas-demoniacos", label: "Los Cultistas Demoníacos" }
            ]
          },
          {
            id: "cultistas-demoniacos",
            title: "Los Cultistas Demoníacos",
            icon: "chaosstar",
            epithet: "El Credo Hueco · el culto que convoca demonios",
            tags: ["Rebelión", "Caos", "Demonios", "Herejía", "Credo Hueco"],
            quote: {
              text: "Convocad lo que oséis convocar. Pero recordad: en Cineris, el único demonio con trono soy yo.",
              source: "Edicto del Gran Señor de los Lok"
            },
            body: `En lo más hondo de las colmenas y los páramos se esconde un culto
que se proclama leal al antiguo Emperador. Sus fieles lo llaman la verdadera fe.
Los demonios lo llaman **el Credo Hueco**.

## La plegaria torcida
Rezan las viejas letanías imperiales... pero generaciones de aislamiento y de
susurros del Maelstrom las han **torcido palabra a palabra**. Hoy sus salmos están
huecos, y **otra cosa** anida dentro: cada plegaria es una puerta, y cada puerta
se abre.

## Santos de ceniza
Sus ritos **convocan demonios** que acuden vestidos de santos y de mártires,
coronados de una luz falsa. Los fieles ven ángeles del Emperador; el resto del
Sur ve abominaciones. Y como se camuflan entre los parias del desierto,
indistinguibles de los leales de verdad, **nadie sabe cuántos son** —ni quién
reza a qué.`,
            related: [
              { to: "cineris/rebelion/habitantes-cavernas", label: "Los Habitantes de las Cavernas" }
            ]
          }
        ]
      },
      {
        id: "batallas",
        title: "Batallas",
        icon: "swords",
        kind: "batallas",
        epithet: "Crónica de partidas — Frente de Cineris",
        quote: {
          text: "Que cada batalla quede grabada. Quiero que los siglos sepan, sin lugar a duda, a quién pertenecía Cineris.",
          source: "Soflama del Gran Señor de los Lok"
        },
        body: `Aquí se inmortaliza cada **partida jugada** en el frente de Cineris:
asedios, incursiones y guerras por el dominio del sistema.`,
        children: [
          /* ← cada partida que juegues se añade aquí. PLANTILLA:
          {
            id: "asedio-colmena-1",
            title: "Asedio de la Colmena Primus",
            icon: "swords",
            epithet: "Primera sangre en las estepas",
            battle: {
              fecha: "012.M42",
              lugar: "Colmena Primus, Cineris",
              puntos: "2000 pts",
              bandos: ["Iron Warriors — jose", "Puños Imperiales — rival"],
              resultado: "Victoria de los Iron Warriors"
            },
            body: `Crónica de la partida: qué pasó, momentos épicos, bajas...`
          },
          */
        ]
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
    quote: {
      text: "La estrella del sistema arde pálida y constante. La catalogo como D31. Un sol sin más misterio que su silencio.",
      source: "Sir Lok II · Diario de a bordo, Tomo II"
    },
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
        image: "assets/mechanicus-oscuro.jpg",
        epithet: "La herejía en el corazón del sol",
        tags: ["Facción", "Mechanicus Oscuro", "Secreto"],
        quote: {
          text: "Hay luces en mi estrella que yo no encendí. Algún día sabré quién mora en ese fuego... o él sabrá de mí.",
          source: "Anotación del Gran Señor de los Lok"
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
    image: "assets/tunel-hybri.jpg",
    epithet: "Más allá del Túnel Hybri",
    tags: ["Sistema", "Disformidad", "Caballeros del Caos"],
    quote: {
      text: "El túnel bajo la estrella es mi puerta trasera al infierno. Por él llegué; por él llamo a mis perros cuando los necesito.",
      source: "Soflama del Gran Señor de los Lok"
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
        quote: {
          text: "La Primera Casa se cree dueña de las demás. Dejad que lo crea: un perro orgulloso muerde más fuerte.",
          source: "Edicto del Gran Señor de los Lok"
        },
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
        quote: {
          text: "La Segunda Casa es una marea de hierro. No se cuentan sus andadores; se cuentan los mundos que dejan en ceniza.",
          source: "Edicto del Gran Señor de los Lok"
        },
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
        quote: {
          text: "A la Cuarta Casa no se la llama: se la suelta. Y luego se reza por haber apuntado en la dirección correcta.",
          source: "Edicto del Gran Señor de los Lok"
        },
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
        quote: {
          text: "Las guerras de Hybri son mi teatro predilecto. Tomad asiento, y tomad nota.",
          source: "Soflama del Gran Señor de los Lok"
        },
        body: `Aquí se inmortaliza cada **partida jugada** en los mundos de Hybri:
las guerras de los Caballeros del Caos, sus alianzas rotas y sus venganzas.`,
        children: []   /* ← cada partida que juegues se añade aquí */
      }
    ]
  }

];

/* ──────────────────────────── CRONOLOGÍA ──────────────────────────────
   Fechas en notación imperial 40k (año.Milenio). Año actual: 001.M42. */
window.TIMELINE = {
  id: "cronologia",
  title: "Cronología",
  blurb: "La historia del sistema Cineris, era a era. (Año actual: 001.M42)",
  image: "assets/fondo-cronologia.jpg",
  eras: [
    {
      name: "La Fundación",
      caption: "~M37 · el Libre Mercader Lok",
      events: [
        { date: "~001.M37", title: "Sir Lok II reclama Cineris", text: "Con las cartas de ruta que heredó para hallar el sistema, el Rogue Trader Sir Lok II lo asienta sin derecho legal a gobernarlo y empieza a pagar tributo al Imperio.", tags: ["Dinastía Lok"], link: "cineris" },
        { date: "M37", title: "Cimientos corsarios", text: "Bajo los Lok, Cineris crece a la sombra de la ley: un asentamiento próspero levantado sobre estructuras piratescas que perdurarán milenios.", tags: ["Dinastía Lok"] }
      ]
    },
    {
      name: "La Mácula de los Lok",
      caption: "~M38 · el heredero traidor",
      events: [
        { date: "~001.M38", title: "El tercer heredero, traitor xenos", text: "El tercer heredero de la dinastía Lok es declarado traidor y xenos. La mancha de la herejía cae sobre todo el sistema.", tags: ["Dinastía Lok"] },
        { date: "~015.M38", title: "Llegan los Puños Imperiales", text: "Para purgar la mácula, el Imperio envía un capítulo sucesor de los Puños Imperiales, que toma el control de Cineris.", tags: ["Imperio"] },
        { date: "~020.M38", title: "La dinastía Lok huye al Maelstrom", text: "Perseguidos, los Lok huyen al corazón del Maelstrom. No hallan allí grandes glorias: su dinastía se pierde y se desvanece durante milenios.", tags: ["Dinastía Lok", "Maelstrom"] }
      ]
    },
    {
      name: "El Yugo del Puño",
      caption: "M38 – M41 · tres milenios imperiales",
      events: [
        { date: "M38 – M41", title: "Pocos marines, larga vigilia", text: "Un puñado de Puños Imperiales sucesores conserva el sistema durante tres milenios, guarneciendo sus fortalezas.", tags: ["Imperio"] },
        { date: "M39", title: "Las viejas estructuras se consolidan", text: "Pese a la vigilancia imperial, las redes piratescas de los Lok arraigan y se consolidan en las ciudades colmena.", tags: ["Dinastía Lok"] }
      ]
    },
    {
      name: "La Inmersión y la Caída",
      caption: "~M41 · el retorno de los Lok",
      events: [
        { date: "~001.M41", title: "El Maelstrom engulle el sistema", text: "Las corrientes de la disformidad crecen hasta tragarse a Cineris. El sistema queda aislado, sin refuerzos, olvidado por la galaxia.", tags: ["Maelstrom"] },
        { date: "~001.M41", title: "Reaparece el Gran Señor de los Lok", text: "Del Maelstrom emerge un hechicero del Caos que se proclama Gran Señor de los Lok y reclama el gobierno del sistema. Su campaña dura apenas unos meses.", tags: ["Dinastía Lok"], link: "cineris/gran-senor-lok" },
        { date: "~002.M41", title: "Llega el hierro", text: "Tras la campaña del hechicero llegan los Iron Warriors. Juntos arrebatan Cineris a los Puños Imperiales y los expulsan tras una guerra brutal.", tags: ["Iron Warriors", "Imperio"], link: "cineris/iron-warriors" },
        { date: "desde M41", title: "Un contraataque imposible", text: "El Maelstrom niega al Imperio toda ruta segura: ningún contraataque de envergadura ha logrado reconquistar Cineris.", tags: ["Imperio", "Maelstrom"] }
      ]
    },
    {
      name: "El Dominio Oculto",
      caption: "M41 – M42 · el presente",
      events: [
        { date: "001.M42", title: "El gobierno del Gran Señor de los Lok", text: "El Gran Señor de los Lok gobierna el sistema a través de los IV, sus consejeros secretos. Trajo la cultura del Maelstrom: cultos y vicios proliferan libres mientras las tres colmenas paguen su tributo.", tags: ["Dinastía Lok"], link: "cineris/gran-senor-lok" },
        { date: "M41 (secreto)", title: "El fuego en el corazón de la estrella", text: "En lo más profundo de D31, el Mechanicus Oscuro obra en una base que nadie llega a sospechar.", tags: ["Mechanicus Oscuro"], link: "estrella-d31/mechanicus-oscuro" },
        { date: "M41 (secreto)", title: "Se abre el Túnel Hybri", text: "Bajo la estrella, una garganta de disformidad conecta Cineris con los mundos caballero del Caos de Hybri.", tags: ["Hybri", "Maelstrom"], link: "hybri" },
        { date: "001.M42", title: "La rebelión que se gesta", text: "En las colmenas crece un culto que se dice leal al antiguo Emperador, pero cuyos ritos esotéricos convocan a los demonios.", tags: ["Rebelión"], link: "cineris/rebelion" }
      ]
    }
  ]
};
