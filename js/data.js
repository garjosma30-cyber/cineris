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
  intro: `El **Sistema Cineris** nació como una promesa mucho antes que el Imperio:
un **puerto franco** donde **toda raza** comerciaba, en el filo de la galaxia, lejos
de toda amenaza, lejos del **Maelstrom**. El **Rogue Trader Sir Lok II** no lo fundó
—lo **redescubrió**, siguiendo un extraño mensaje astropático que llegó a su nave con
la ruta exacta.

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

Y esas cavernas no son solo del Sur: una red de [galerías volcánicas](#/cineris/cavernas-volcanicas)
—ruinas antiquísimas que parecen naturales— horada el planeta entero.

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

## El atentado y el sarcófago
Rondaba los **setenta años** cuando un **asesino imperial** estuvo a un aliento de
borrarlo de la galaxia. Sobrevivió; su carne, no. Desde aquel día vive
**confinado en una armadura-sarcófago**, mausoleo andante del que ya no sale. De
esa herida nació su **obsesión por los implantes**: donde la carne traiciona, que
reine el hierro.

## La condena de carne
Su castigo predilecto no es la muerte, sino el **servidor** (*servitor*). Pero el
Lok prohíbe que **atomicen la consciencia** del penado: ordena conservarla
intacta. Así el condenado **sigue dentro**, despierto, mientras su propio cuerpo
ejecuta rutinas que él no ha elegido. Ve sus manos obedecer a través de sus
nervios sin que un solo gesto sea suyo: una eternidad de espectador, preso en la
cárcel de su propia carne.

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

## El hierro recuerda
Lo que el resto del sistema ignora, ellos lo saben bien: **Cineris ya fue suya**. En
la era de la Gran Cruzada, cuando el hierro aún era leal, sus antepasados labraron
en esta roca una fortaleza y la hundieron en la piedra hasta hacerla parecer obra de
la naturaleza. Las [cavernas](#/cineris/cavernas-volcanicas) que horadan el planeta
son su herencia.

Por eso vinieron. No fue solo el azar del Maelstrom quien los trajo a Cineris, sino
la **memoria**: regresar al primer muro que alzó su Legión y reclamarlo —una deuda
de hierro que diez mil años no han borrado.

## El búnker de los cuatro durmientes
En una **caverna olvidada**, en las galerías más hondas —allí donde la roca se
acerca al **núcleo maldito** de Cineris—, el hierro halló lo que la piedra llevaba
diez mil años guardando. No fue un descenso fácil: para llegar, la Gran Compañía
tuvo que abrirse paso a través de **incontables criaturas inmundas**, cosas sin
nombre nacidas de la oscuridad y del susurro del Maelstrom, que defendían el camino
como si algo allá abajo mereciera ser defendido.

Al final del túnel los esperaba un **búnker antiquísimo**, sellado desde la era de
la **Gran Cruzada**: un sagrario de adamantio labrado por las mismas manos leales
que horadaron el planeta. Y dentro, intactos, **cuatro antiguos marines en
estasis** —hermanos de un tiempo en que el hierro aún servía al Emperador—,
dormidos a la espera de una orden que nunca llegó.

> Cuatro durmientes bajo el mundo. ¿A quién jurarán cuando abran los ojos: al Trono
> que un día sirvieron, o al hierro que hoy reina en Cineris?
>
> *(Aún no sé quiénes son los Cuatro Durmientes ni qué custodian — cuéntamelo y lo
> detallo.)*

A su mando está el **Herrero Disforme**, su Maestre de Forja. *(La Gran Compañía
aún no tiene nombre en la crónica — dímelo y lo añado.)*`,
        related: [
          { to: "cineris/cinturon-asteroides", label: "El Cinturón de Asteroides" },
          { to: "cineris/cavernas-volcanicas", label: "Las Cavernas Volcánicas" },
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
        id: "melito",
        title: "Espaciopuerto Melito",
        icon: "gem",
        epithet: "El bazar inmundo de la capital · Colmena Mélida",
        tags: ["Localización", "Capital", "Colmena Mélida", "Mercado", "Xenos"],
        quote: {
          text: "Que atraque quien pague. No pregunto de qué mundo vienes ni de qué especie eres: pregunto cuánto diezmas. En Melito, el oro no tiene raza.",
          source: "Edicto del Gran Señor de los Lok"
        },
        body: `En el corazón de la **capital** de Cineris, encaramado a la **Colmena
Mélida**, se abre **Melito**: el **espaciopuerto** del planeta y la única boca por
la que el sistema respira hacia la galaxia... y la única por la que la galaxia se
cuela en Cineris.

## Un mercado en decadencia
Lo que fue muelle de carga no tardó en pudrirse en algo mayor. Hoy Melito es un
**mercado abundante y corrupto** abrazado a la colmena: un bazar sin ley donde se
compra y se vende cualquier cosa que deje diezmo. Bajo la tolerancia corsaria del
Lok —que no pregunta de dónde vienes mientras pagues—, el puerto prospera en plena
**decadencia**: licores, reliquias robadas, carne, secretos y armas cambian de
manos al amparo del hierro.

## El zoco de las rarezas inmundas
Por sus pasarelas se arrastra una fauna que ningún mundo imperial toleraría:
**ogretes** brutales alquilados como músculo, **mutantes** de mil deformidades,
**zoats** que regatean en lenguas que nadie más habla, **hombres bestia** de pezuña
y cuerno, y hasta **squats** llegados de quién sabe qué refugio del Maelstrom. Xenos
y abhumanos que en cualquier otro puerto arderían en la pira, aquí **comercian a
plena luz**.

## La costumbre más vieja del puerto
Que esto se permita no es capricho del Lok: es la **tradición más antigua de
Cineris**, más vieja que el propio Imperio. Antes del hierro, una
[civilización alienígena](#/cineris/tirania-xenos) hizo del sistema un **mercado
total**, abierto a toda raza. Aquel pueblo se extinguió, pero su costumbre
**sobrevivió a sus amos**: cada poder que ha pisado Cineris —incluso los Iron
Warriors en su caída— ha terminado por consentir el viejo trato. En Melito, el
comercio pesa más que la fe.

## La puerta que nadie vigila del todo
Tanta mezcla tiene su precio. Entre tanto rostro extraño **nadie destaca**, y por
esa misma grieta se cuela lo que el hierro querría dejar fuera: contrabando, espías,
herejes... y, quizá, [algún pasajero que no dice su nombre](#/cineris/inquisidor-tibus).

> En Melito todo se vende. Hasta el silencio. Sobre todo el silencio.`,
        related: [
          { to: "cineris/tirania-xenos", label: "La Tiranía Xenos" },
          { to: "cineris/inquisidor-tibus", label: "El Inquisidor Lok" },
          { to: "cineris/rebelion", label: "La Rebelión en Ciernes" }
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
        id: "cavernas-volcanicas",
        title: "Las Cavernas Volcánicas",
        icon: "claw",
        epithet: "Ruinas antiquísimas que horadan el planeta entero",
        tags: ["Localización", "Ruinas", "Misterio", "El Sur"],
        quote: {
          text: "Mis sondas no tocan fondo. El planeta está hueco, y lo que lo vació no fue el fuego: fue una mano, hace mucho, con un plan que no alcanzo a leer.",
          source: "Sir Lok II · Diario de a bordo, Tomo III"
        },
        body: `Cineris está **horadado de cavernas**. No solo el Sur: bajo cada
estepa, bajo cada colmena, una red de **galerías volcánicas** se hunde en la roca,
y nadie ha hallado su fondo.

## ¿Naturales? No todas
A primera vista parecen obra del fuego y del tiempo. Pero **algunas no engañan**:
muros demasiado rectos, bóvedas demasiado iguales, salas que recuerdan a un
**antiguo reino-fortaleza** labrado en la piedra viva. Alguien las construyó —y se
esmeró en que pareciesen naturales.

## El primer hierro
Quien sabe leer una fortaleza reconoce la mano: bastiones angulares, corredores
trazados para matar, una **geometría de asedio** que solo domina quien ha hecho de
la fortificación una **fe**. Es obra de **maestros del hierro** de la era de la
**Gran Cruzada** —diez mil años atrás, cuando ese hierro aún servía al Emperador—.

Pocos atan los cabos, y ninguno en voz alta: que **Cineris fue suya antes de ser
de nadie**, y que los actuales amos de hierro del sistema han vuelto, sin saberlo o
sin decirlo, a pisar los muros que **levantaron sus padres leales**.

## Tesoros y escaramuzas
Sus entrañas rebosan **recursos**: minerales, reliquias y máquinas dormidas;
**naturales, artificiales... y antinaturales**. Por ellos se libra una guerra menuda
y sin tregua —tribus, bandas y héroes del yermo se adentran a saquear—, y muy pocos
de los que bajan demasiado vuelven a contar lo que vieron.`,
        related: [
          { to: "cineris/rebelion", label: "La Rebelión en Ciernes" },
          { to: "cineris/inquisidor-tibus", label: "El Inquisidor Lok" },
          { to: "cineris/tribus-estepas", label: "Las Tribus de las Estepas" }
        ]
      },
      {
        id: "tribus-estepas",
        title: "Tribus de las Estepas",
        icon: "skull",
        epithet: "Bandas del yermo · peaje de carne y dioses extraños",
        tags: ["Facción", "Tribus", "Estepas", "Cultos", "El Yermo"],
        quote: {
          text: "Que las tribus cobren su peaje y degüellen a quien quieran en sus llanuras. Mientras la caravana siga llegando a mis colmenas, sus dioses no son asunto mío.",
          source: "Edicto del Gran Señor de los Lok"
        },
        body: `Más allá de las colmenas, las **estepas** de Cineris no conocen más ley
que la del más fuerte. Enormes franjas del yermo están en manos de **bandas y
tribus** que las gobiernan a su antojo —territorios en **constante cambio** que
mudan de dueño con las estaciones—.

## El peaje de carne
La mayoría exige un tributo para cruzar sus llanuras: la **entrega de algunos de
los viajeros** que pretenden pasar. Su destino suele ser el **sacrificio ritual**
a dioses extraños, así que no sorprende ver a las caravanas avanzar con **jaulas
de esclavos** reservados para el pago.

## Señores del yermo
Entre los **cientos** de bandas que se reparten las estepas, tres nombres se
repiten en boca de los caravaneros: los **sorbetuétanos de Teriator**, los
**despellejacráneos de Lupel** y los **redentores del águila bicéfala**.

> Cien banderas, cien dioses, un solo yermo. Mañana serán otras cien.`,
        related: [
          { to: "cineris/cavernas-volcanicas", label: "Las Cavernas Volcánicas" },
          { to: "cineris/rebelion", label: "La Rebelión en Ciernes" },
          { to: "cineris/denitios", label: "Los Denitios" }
        ],
        childrenLabel: "Bandas y tribus",
        children: [
          {
            id: "sorbetuetanos-teriator",
            title: "Sorbetuétanos de Teriator",
            icon: "skull",
            epithet: "Banda de las estepas",
            tags: ["Tribu", "Estepas", "El Yermo"],
            quote: {
              text: "Otra bandera en el polvo, otro dios con hambre. Pagadles su carne y seguid camino.",
              source: "Sir Lok III · Diario de a bordo, Tomo IV"
            },
            body: `Una de las bandas que imponen su ley en las estepas de Cineris,
cobrando en carne el paso por sus llanuras.

*(Su historia, sus ritos y la figura de Teriator aún no están en la crónica —
cuéntamelos y los detallo.)*`,
            related: [
              { to: "cineris/tribus-estepas", label: "Las Tribus de las Estepas" }
            ]
          },
          {
            id: "despellejacraneos-lupel",
            title: "Despellejacráneos de Lupel",
            icon: "skull",
            epithet: "Banda de las estepas",
            tags: ["Tribu", "Estepas", "El Yermo"],
            quote: {
              text: "Dicen que desuellan el cráneo del que cae. Que recen como gusten: a mí solo me debe llegar el tributo.",
              source: "Edicto del Gran Señor de los Lok"
            },
            body: `Banda del yermo conocida por la marca atroz que da nombre a su
estandarte. Como tantas otras, exige su diezmo de carne a quien cruza su feudo.

*(Su historia, sus ritos y la figura de Lupel aún no están en la crónica —
cuéntamelos y los detallo.)*`,
            related: [
              { to: "cineris/tribus-estepas", label: "Las Tribus de las Estepas" }
            ]
          },
          {
            id: "redentores-aguila",
            title: "Redentores del Águila Bicéfala",
            icon: "chaosstar",
            epithet: "El culto que llama a su dios con agonía",
            tags: ["Tribu", "Culto", "Estepas", "Herejía", "El Yermo"],
            quote: {
              text: "Aúllan a un dios alado para que cambie el mundo. Que aúllen: el único cambio que verán es el de amo, y su amo soy yo.",
              source: "Edicto del Gran Señor de los Lok"
            },
            body: `De entre todas las tribus de las estepas, ninguna inquieta tanto
como los **redentores del águila bicéfala**.

## La plegaria agónica
Pretenden **invocar a su dios** mediante **mensajes agónicos astrato-telepáticos**:
plegarias arrancadas del dolor de sus víctimas y proyectadas a través del vacío.
Cada sacrificio es, para ellos, una llamada.

## El cambio perpetuo
Creen que, cuando su dios acuda al fin, **extenderá sus alas sobre el planeta** y
desatará un **cambio perpetuo** —una transformación sin retorno de Cineris entero—.

> Rezan con la voz de los que mueren, esperando que el cielo les conteste con un
> batir de alas.`,
            related: [
              { to: "cineris/tribus-estepas", label: "Las Tribus de las Estepas" }
            ]
          }
        ]
      },
      {
        id: "denitios",
        title: "Los Denitios",
        icon: "home",
        epithet: "Las grutas del bioalimento · feudo de la casta de Notle",
        tags: ["Localización", "Bioalimento", "Casta sacerdotal", "Notle", "Cavernas"],
        quote: {
          text: "Que los Denitios recen a su Notle cuanto quieran. Mientras la gruta siga pariendo alimento para mis colmenas, su dios y yo nos llevaremos de maravilla.",
          source: "Edicto del Gran Señor de los Lok"
        },
        body: `Una de las mayores **fábricas de bioalimento** del planeta no está en
la superficie, sino bajo ella: una **gruta colosal** llamada los **Denitios**.

## Millones en la oscuridad
Allí, varios **millones de recolecultores** podan sin descanso las extrañas plantas
que tapizan la roca —en realidad, distintas **cepas de hongos** que prosperan en la
oscuridad—. De esa cosecha sin fin se alimentan las colmenas del sistema.

## La casta de Notle
Sobre esa muchedumbre obrera reina una **casta dirigente y sacerdotal** que vigila
la producción mientras reza al **dios de la vida, Notle**. Sus señores patrullan las
bóvedas a lomos de **corceles alados**: **buitres de la lejana Terra** que escupen su
característico **aliento ácido**.

## Castas y gremios
Los Denitios son una rareza social en Cineris. Aquí pervive el viejo **sistema de
castas**, mientras que el resto de las ciudades del planeta lo ha sustituido por un
**sistema moderno de clases y gremios**. Bajo tierra se reza y se obedece; en la
superficie se compra, se vende y se asciende.

> El hambre de las colmenas se sacia en lo hondo, podando hongos a la sombra de un
> dios alado.`,
        related: [
          { to: "cineris", label: "Planeta Cineris" },
          { to: "cineris/tribus-estepas", label: "Las Tribus de las Estepas" }
        ]
      },
      {
        id: "tirania-xenos",
        title: "La Tiranía Xenos",
        icon: "claw",
        epithet: "La civilización alienígena que precedió al hierro · extinta",
        tags: ["Historia", "Xenos", "Extinta", "Comercio", "Gran Cruzada"],
        quote: {
          text: "Bajo el polvo de Cineris hallé los huesos de un imperio que no era humano. Vendían de todo, a todos. Por eso el hierro los borró... y por eso el sistema sigue oliendo a su mercado.",
          source: "Sir Lok II · Diario de a bordo, Tomo III"
        },
        body: `Mucho antes de que el Imperio conociera estas estrellas, Cineris ya tenía
amos: una **civilización xenos** —hoy **extinta**— que gobernaba el sistema y lo había
convertido en lo que sigue siendo en su esencia: un **puerto comerciante** abierto a
toda raza.

## El mercado total
Bajo aquella tiranía, Cineris fue un **mercado sin límites**. Sus muelles acogían a
cuanta especie surcaba el vacío; se traficaba con todo, sin credo ni bandera, en un
comercio total que no preguntaba de dónde venía la mercancía ni quién la traía. De ese
tiempo nace la **costumbre más vieja del sistema**, la que aún late en
[Melito](#/cineris/melito).

## La ofrenda mal interpretada
Cuando, en plena **Gran Cruzada**, los [Iron Warriors](#/cineris/iron-warriors)
alcanzaron el sistema y fueron descubiertos, los xenos hicieron lo único que sabían
hacer ante un recién llegado: una **ofrenda**, un gesto de su comercio total, una mano
tendida en forma de tributo. La **IV Legión la leyó como afrenta** —o quiso leerla
así—. La respuesta del hierro fue el **exterminio**.

## Unos pocos años, un imperio borrado
En apenas unos años, los Iron Warriors **tomaron el sistema entero** y apagaron para
siempre a la civilización que lo regía. Pero no pudieron matar su legado: la tradición
del puerto **sobrevivió a sus dueños**. Hoy, diez mil años después, esa costumbre
extinta sigue gobernando Cineris desde la tumba —cada vez que un xeno regatea en Melito,
la tiranía vuelve a respirar.

> Los borraron del sistema, pero no de su forma de comerciar. Algunos imperios no
> mueren: solo cambian de manos su mercado.

*(Esta civilización aún no tiene nombre ni forma en la crónica — dime cómo eran y los
detallo.)*`,
        related: [
          { to: "cineris/melito", label: "El Espaciopuerto Melito" },
          { to: "cineris/iron-warriors", label: "Los Iron Warriors" }
        ]
      },
      {
        id: "inquisidor-tibus",
        title: "Inquisidor Tibus Magnus Araneo Lok",
        icon: "eye",
        epithet: "El Lok que sirve al Trono · oculto en la capital",
        tags: ["Personaje", "Imperio", "Inquisición", "Dinastía Lok", "Secreto"],
        quote: {
          text: "Ningún enemigo del Trono puede alcanzarme aquí. El Maelstrom es mi muralla, y tras ella soy intocable.",
          source: "Soflama del Gran Señor de los Lok"
        },
        body: `Lo que el Gran Señor no sabe es que el Imperio **ya ha cruzado su
muralla**. Una nave comerciante atracó en la capital de Cineris y, entre su carga,
camuflado, viajaba un **inquisidor**: **Tibus Magnus Araneo Lok**.

## Sangre de la dinastía
Su apellido no es casualidad. Tibus lleva la **sangre y el nombre de los Lok** —la
dinastía perdida que el hechicero del Caos dice encarnar—. Donde el Gran Señor
**reclama** el linaje, el inquisidor lo **porta de verdad**: el último Lok fiel al
Trono, regresado al feudo de su sangre para arrancarlo de manos del impostor.

## El cazador en la sombra
Viaja sin séquito visible, confundido entre mercaderes y estibadores. Observa las
colmenas, los cultos, el tributo y a los IV; anota cada herejía y mide cada fuerza.
No ha venido a juzgar a un hombre, sino a **pesar un sistema entero** —y a decidir
si Cineris se purga, se vuelve... o se quema.

> Dos Lok en un mismo mundo: uno en su trono de hierro, otro entre la multitud. Solo
> uno sabe que el otro existe.`,
        related: [
          { to: "cineris/gran-senor-lok", label: "El Gran Señor de los Lok" }
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
      name: "El Puerto de los Xenos",
      caption: "tiempos ignotos · antes del Imperio",
      events: [
        { date: "Tiempos ignotos", title: "El puerto que precede al Imperio", text: "Mucho antes de que el Hombre alcanzara estas estrellas, una civilización xenos —hoy extinta— gobierna Cineris y abre sus muelles a toda raza: un mercado total donde se trafica con cuanto la galaxia puede ofrecer, sin credo ni bandera.", tags: ["Xenos", "Comercio"], link: "cineris/tirania-xenos" }
      ]
    },
    {
      name: "La Conquista de Hierro",
      caption: "~M30 – M31 · la Gran Cruzada",
      events: [
        { date: "~M30", title: "Llega la IV Legión", text: "En plena Gran Cruzada, los Iron Warriors alcanzan Cineris y chocan con la tiranía xenos que lo gobierna. Al ser descubiertos, los alienígenas les hacen una ofrenda —un gesto de su comercio total— que la IV Legión interpreta como afrenta. La respuesta es el exterminio.", tags: ["Iron Warriors", "Xenos"], link: "cineris/tirania-xenos" },
        { date: "~M30", title: "El sistema cae bajo el hierro", text: "En apenas unos años, los Iron Warriors toman el sistema entero y apagan a la civilización que lo regía. Labran fortalezas en la piedra viva de Cineris y las hunden hasta hacerlas parecer obra de la naturaleza.", tags: ["Iron Warriors"], link: "cineris/cavernas-volcanicas" },
        { date: "~M30 – M31", title: "Unas décadas de hierro leal", text: "Mientras el hierro aún sirve al Emperador, los Iron Warriors gobiernan Cineris durante unas décadas. Luego el mando pasa a los Puños Imperiales, cuya administración del díscolo puerto resulta tosca e imperfecta.", tags: ["Iron Warriors", "Imperio"] }
      ]
    },
    {
      name: "La Herejía y el Abandono",
      caption: "~M31 · la caída de Horus",
      events: [
        { date: "~M31", title: "La Herejía torna el hierro", text: "Cuando estalla la Herejía de Horus, los Iron Warriors caen con su primarca. El sistema vuelve a manos del hierro —ya traidor— y, con él, se reabre el comercio con los alienígenas: la vieja tradición xenos del puerto renace bajo bandera del Caos.", tags: ["Iron Warriors", "Caos"] },
        { date: "~014.M31", title: "Abandonado a la muerte de Horus", text: "Con la muerte de Horus y el fin de la Herejía, los Iron Warriors abandonan Cineris. El sistema queda desierto, dejado a la deriva y poblado solo por criaturas extrañas durante milenios.", tags: ["Iron Warriors", "Maelstrom"] }
      ]
    },
    {
      name: "El Redescubrimiento",
      caption: "~M37 · el Libre Mercader Lok",
      events: [
        { date: "~001.M37", title: "Sir Lok II redescubre Cineris", text: "El linaje de los Lok llevaba generaciones persiguiendo el rumor de un sistema perdido. Un extraño mensaje astropático llega por fin a la nave del Rogue Trader Sir Lok II con la ruta exacta. Lo redescubre desierto, lo asienta sin derecho legal a gobernarlo y empieza a pagar tributo al Imperio.", tags: ["Dinastía Lok"], link: "cineris" },
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
        { date: "~002.M41", title: "El hierro regresa", text: "Tras la campaña del hechicero, los Iron Warriors regresan al sistema que ya conquistaron en la Gran Cruzada. Juntos arrebatan Cineris a los Puños Imperiales y los expulsan tras una guerra brutal: el hierro vuelve a su primer muro.", tags: ["Iron Warriors", "Imperio"], link: "cineris/iron-warriors" },
        { date: "desde M41", title: "Un contraataque imposible", text: "El Maelstrom niega al Imperio toda ruta segura: ningún contraataque de envergadura ha logrado reconquistar Cineris.", tags: ["Imperio", "Maelstrom"] }
      ]
    },
    {
      name: "El Dominio Oculto",
      caption: "M41 – M42 · el presente",
      events: [
        { date: "001.M42", title: "El gobierno del Gran Señor de los Lok", text: "El Gran Señor de los Lok gobierna el sistema a través de los IV, sus consejeros secretos. Trajo la cultura del Maelstrom: cultos y vicios proliferan libres mientras las tres colmenas paguen su tributo.", tags: ["Dinastía Lok"], link: "cineris/gran-senor-lok" },
        { date: "M41", title: "El atentado del asesino imperial", text: "Un asesino del Imperio estuvo a un aliento de matar al Gran Señor de los Lok. Sobrevivió, pero su carne quedó deshecha: desde entonces gobierna confinado en una armadura-sarcófago, obsesionado con los implantes y aficionado a condenar a sus reos a una eternidad de consciencia presa en cuerpo de servidor.", tags: ["Imperio", "Dinastía Lok"], link: "cineris/gran-senor-lok" },
        { date: "M41 (secreto)", title: "El fuego en el corazón de la estrella", text: "En lo más profundo de D31, el Mechanicus Oscuro obra en una base que nadie llega a sospechar.", tags: ["Mechanicus Oscuro"], link: "estrella-d31/mechanicus-oscuro" },
        { date: "M41 (secreto)", title: "Se abre el Túnel Hybri", text: "Bajo la estrella, una garganta de disformidad conecta Cineris con los mundos caballero del Caos de Hybri.", tags: ["Hybri", "Maelstrom"], link: "hybri" },
        { date: "001.M42", title: "La rebelión que se gesta", text: "En las colmenas crece un culto que se dice leal al antiguo Emperador, pero cuyos ritos esotéricos convocan a los demonios.", tags: ["Rebelión"], link: "cineris/rebelion" },
        { date: "001.M42", title: "Guerra por las cavernas volcánicas", text: "Por las estepas y los páramos se arremolinan tribus y bandas —demonistas y leales por igual—, y de entre ellas surgen guías y héroes. Sus escaramuzas se adentran en las cavernas volcánicas que horadan el planeta entero, para arrancarles sus tesoros: recursos naturales, artificiales... y antinaturales.", tags: ["Rebelión"], link: "cineris/cavernas-volcanicas" },
        { date: "001.M42 (secreto)", title: "Un inquisidor en la capital", text: "Una nave comerciante atraca en la capital. En sus bodegas, camuflado entre la mercancía, viaja un inquisidor: Tibus Magnus Araneo Lok —que lleva la sangre y el nombre de la dinastía que el hechicero dice encarnar—. Nadie en Cineris sospecha aún que el Imperio ha puesto un pie en el sistema.", tags: ["Imperio", "Dinastía Lok"], link: "cineris" }
      ]
    }
  ]
};
