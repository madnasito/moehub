const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home', {
        anio: new Date().getFullYear(),
        title: 'Moehub',
        background: "batman-x-cyberpunk-4k-tv.jpg",
        titulo: "PRECISION EN CRITERIO"
    })
})

app.get('/beyond-the-boundary', (req, res) => {
    res.render('serie', {
        title: 'Beyond the Boundary',
        anio: new Date().getFullYear(),
        background: "acb61ce778da74d85dfa98d2a0e39d5a.jpg",
        titulo: "Beyond the Boundary",
        text1: "KYOUKAI NO KANATA (o también conocida en español como Más allá del horizonte) este anime es uno de los más reconocido por mayoría en la comunidad otaku por el diseño de la protagonista en cumplir con el término Meganekko (Chica con Gafas) pero no nos vayamos a la terminología sino más bien centrémonos en la historia. La historia trata acerca de que nuestro protagonista Kanbara Akihito descubre a una de sus compañeras, Kuriyama Mirai, a punto de saltar desde la azotea de la escuela. Después de que Akihito intente convencerla, Mirai le apuñala con una espada hecha de su propia sangre, pero se sorprende al comprobar que Akihito no es sino un híbrido de humano y 'yomu', una raza de criaturas sobrenaturales. Tras saber que Mirai es una Guerrera del Mundo Espiritual y la última sobreviviente de su clan, las vidas de ambos se entrelazan para siempre.",
        text2: "La trama en que se basa este anime es simple, es una guerra en el Mundo Espiritual entre los ''yomu'' y los guerreros espirituales que son humanos con habilidades que se ocultan entre la sociedad y aquí es donde entra la protagonista Mirai que tras su pasado triste y traumático (y un tanto cliché) decide terminar con su vida hasta que es interrumpida por Akihito que para sorpresa de este la chica intenta matarlo hasta que descubre la habilidad de Akihito que no le permite morir, desde este punto su historia se entrelaza en varias aventuras contra los yomu ya que estos seres son capaz de influenciar en la mente humana y toma de decisiones (algo así como los Ayakashi del anime Noragami) pero esto no quiere decir que todos los yomus sean criaturas malvadas, de hecho hay yomus que gracias a sus poderes pueden cambiar su apariencia y esconderse entre los humanos, estos solo quieren llevar una vida pacífica, este es un tema recurrente en toda la serie, al avanzar la historia nuestros protagonistas se enfrentan a diferentes tipos de yomus en compañía de los hermanos Nase (Mitsuki y Hiromi) que son también guerreros espirituales y una que otras veces siendo orientados por yomus infiltrados (Ayaka y Ai Shindo), al avanzar de la historia podemos presenciar de entretenidas batallas, historias dramáticas acerca del pasado de varios personajes que puede que nos saquen una que otra lágrima (en especial el final del anime... ok, esto no cuenta como spoiler o sí?), varias escenas cómicas para darle un buen balance y no podía faltar el toque que lleva toda fantasía oscura que son escenas sangrientas y no me refiero a la habilidad de la protagonista que es crear una espada de sangre, aunque la historia es diferente a la novela de la que fue adaptada aun así sigue una secuencia bastante aceptable y entretenida, no daré detalles acerca de la diferencia entre el anime y la novela para no hacer tan extensa esta reseña, pero en resumen es una historia que vale la pena darle una oportunidad, después de todo es una de las joyas del estudio que se encargó de la animación y adaptación (Kyoto Animation) y uno de los animes más destacables durante la temporada otoño 2013",
        text3: "Hablemos de la Animación, el estudio encargado como mencioné anteriormente es Kyoto Animation, estudio destacado por su excelente animación, claro el estudio no siempre es fiel adaptando sus animes a su obra original pero esto hace que la historia sea más entretenida y mejor por así decirlo, a diferencia de otros estudios (Pierrot), a decir verdad, la animación en las batallas es muy buena, de hecho, todo el anime tiene una excelente animación y más aún las películas, algo que se puedo destacar es que el anime no presenta ningún episodio con caída de animación, el balance de los colores con las transiciones es épicamente hermoso y más aún por la característico diseño ''Moe'' que el estudio emplea en todos los personajes de sus animes, el anime cuenta con una temporada de 12 capítulos, una OVA, varios especiales y mini-teatros y para cerrar la historia, dos películas, siendo la primera un recopilatorio de todo el anime agregando una escena al final y la segunda continuación de esta y finalizando la historia. Acerca de la banda sonora, el encargado del soundtrack es Hikaru Nanase, el Opening titulado ''Kyoukai no Kanata'' es interpretado por Minori Chihara y el Ending ''Daisy'' por STEREO DIVE FOUNDATION, tanto el opening y ending de la serie son muy buenos, el opening le da un toque épico al inicial cada episodio y el ending no da una sensación de tristeza y profundidad acerca de los personajes.",
        amazon: "https://amzn.to/385y6xo"
    })
})

app.get('/inou-battle-wa-nichijou-kei-no-naka-de', (req, res) => {
    res.render('serie', {
        title: 'Inou Battle Wa Nichijou-Kei no Naka De',
        anio: new Date().getFullYear(),
        background: "inoubattlewanichijoukeinonakade-1604322193826-665.jpg",
        titulo: "Inou Battle Wa Nichijou-Kei no Naka De",
        text1: "Inou Battle wa Nichijou-kei no Naka de (o también conocido en español ¿Cuándo las batallas sobrenaturales se convirtieron en algo común?) este anime emitido entre octubre-diciembre es uno de los animes más cliché que he visto, y en esta reseña manejaré algunos puntos los cuales te harán identificar y evitar este tipo de animes al buscar una buena historia por ver.",
        text2: "Empecemos por la historia, la historia es simple, un día nuestro protagonistas (Jurai, Tomoyo, Hatoko, Sayumi y Chifuyu) cumpliendo diariamente las actividades del Club de Literatura de la Escuela Secundaria Senko, de alguna manera desarrollan superpoderes, ¿cómo? pues nadie lo sabe, a partir de aquí los poderes se vuelven parte de su vida cotidiana y también deben luchar contra otras personas con poderes similares (punto clave y desperdiciado que manejaré luego), al avanzar la historia vemos a nuestros protagonistas que en vez de cumplir con las actividades del club están batallando en otro mundo, por ahora, todo está bien, el detalles es que esto abarca literalmente la mayoría de los capítulos de animes, y seguro se estarán preguntando ''pero este no es el sentido de la serie'', pues sí, pero siempre y cuando aporte a la historia y desarrollo de los personajes cosa que no logra cumplir este anime, la historia tiene demasiado huecos argumentales, tanto en el origen de los superpoderes como en el trasfondo de nuestros protagonistas, de hecho en toda la serie solo se pudo desarrollar un personaje el cuál no aportaba absolutamente nada a la historia, y de hecho creo que el término ''desarrollar'' se queda corto, otro punto clave es el romance, como podemos apreciar en la imagen, está más que claro que se trata de un harem y el romance es un punto importante, pues este punto no está mal desarrollado pero pudo mejorar, pero es entendible ya que el anime solo abarca una parte de las novelas ligeras de las cual fue adaptada y de hecho la novela tampoco es muy buena que digamos, razón por la cual esta historia se pierde en infinitas obras, bueno, siguiendo con la historia al llegar en los últimos capítulos y pensar el típico final del anime, pues la historia se vuelve un tanto seria pero se queda en ese término, ya que (esto no cuenta como spoiler... de hecho si es spoiler) aparece una nueva organización de personas con superpoderes que son los nuevos enemigos del protagonista y al decir nuevo, así es, el villano de la historia pasar por desapercibido en toda la serie, dejando esto de lado, al ver este giro que toma la historia nos coloca a pensar que se pondrá interesante toda la historia pero es imposible que esto pase en tan solo 2 capítulos, simplemente estos aparecen, buscan manera de cumplir su objetivo, fallan y luego desaparecen, al final de la historia nuestros protagonistas siguen con su vida, fin de la historia, de hecho si quisiera buscar un punto a favor en este anime diría que es la comedia, es buena pero solo hasta ese punto.",
        text3: "Con respecto al estudio que se encargó de la animación es el estudio TRIGGER, y con esto digo que a este estudio se le da mal las adaptaciones ya que este tiene muchos animes buenos pero originales, de hecho este animes fue su primera adaptación de una novela ligera, y para ser su primera vez supongo que está bien porque en sí a pesar que el animes es malo también es entretenido, en ningún momento aburre, con respecto a la animación, es decente a comparación a otros animes de este tipo y puede que en ciertos episodios haya caído esta se mantiene. El elenco de los seiyuus que le dan voces a los personajes hicieron un trabajo fenomenal y estos también se encargaron del opening y ending (como humor la única batalla épica fue la del opening).",
        amazon: "https://amzn.to/3l2M8TO"
    })
})

app.get('/one-week-friends', (req, res) => {
    res.render('serie', {
        title: "One Week Friends",
        anio: new Date().getFullYear(),
        background: "thumb-1920-648205.png",
        titulo: "One Week Friends",
        text1: "Isshuukan Friends (en inglés One Week Friends o también conocido en español como Amigos de una semana) es una serie de manga y posteriormente gracias a su popularidad llegó a tener una adaptación animada que es lo que vamos a tocar en esta reseña. Empecemos por la historia, la historia empieza con nuestro protagonista Hase Yuki, que tienen por objetivo en convertirse en amigo de su compañera de clase Fujimiya Kaori, al pedirle que sean amigos, esta lo rechaza gentilmente, el detalle es que nuestro protagonista no sabe de lo que padece Kaori, ella no puede mantener sus recuerdos ya sean buenos o malos por más de una semana, pero a pesar de esto Yuki hace todo lo posible y al pasar cada semana le pide que sea su amiga, ya que el encuentra algo especial en ella (¿qué podría ser?).",
        text2: "Esta es una de las historias no diría tan dramáticas pero si, con el drama que conlleva toda la serie puede que nos saque una que otra lágrima (en mi caso lloré por una semana), la adaptación animada es excelente, a pesar que cambiaron uno que otro detalles a diferencia del manga, pues esto no afectó la historia de hecho se puede sumar como un punto a favor para hacer que la historia llegue aún más profundo al espectador, claro al decir todo esto, se imaginarán una historia triste, pero en realidad no lo es, sino que esta es una de las historias que en tan poco pero bien adaptados capítulos hace llegar directo al corazón, ya que esta es una de las historias que nos enseña el valor de la amistad y cuán importante es esta para el desarrollo tanto emocional como social, y como hay tan solo un paso para llegar de la amistad al amor, y tocando esto, el amor es algo que se pudo desarrollar mucho mejor en la serie pero al ver lo que se pudo adaptar del manga está excelente, ya luego se tendrá la oportunidad de leer el manga, ya que con el final de la serie, nos deja no con mal sabor de boca, sino satisfechos pero con necesidad de más, pero regresando a la historia, el desarrollo de los personajes principales fue excelente, faltó un poco de desarrollo con algunos otros personajes pero en sí, está muy bien, no es una historia que aburra, de hecho cada capítulos nos mantendrá atento.",
        text3: "Con respecto a la animación, es sencillamente excelente y hermosa, y lo mejor de todo, es estable, en ningún capitulo se puede apreciar un bajón de esta más bien el ambiente, el buen uso de los colores, y la fusión de esta con el ost, no da una sensación de relajación, créeme con tan solo 12 capítulos y algunos especiales es más que suficiente para que este anime transmita el mensaje que quiere dirigir. El estudio que se encargó de la animación es Brain's Base, este es un estudio que en todas su obras mantiene su animación, la encargada del soundtrack es Nobuko Toda la cual hizo un excelente trabajo, con respecto al elenco de las voces de nuestro personajes estos hicieron un excelente trabajo en especial la voz de nuestra protagonista que la hace Sora Amamiya conocida por interpretar a Touka en Tokyo Ghoul, Elizabeth en Nanatsu no Taizai y Aqua en KonoSuba y ser parte del grupo TrySail, el opening de la serie titulado ''Niji no Kakera'' por Natsumi Kon, es sencillamente perfecto y le da un buen toque a la serie de igual manera el ending ''Kanade'' interpretado por Sora Amamiya.",
        amazon: "https://amzn.to/3el86Pn"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Quienes somos',
        anio: new Date().getFullYear(),
        text1: 'Somos estudiantes del IUPLL encargados del desarrollo y promoción de esta página web, la cual consiste en la critica y reseña de series y peliculas ademas de facilitarle de manera sencilla en donde conseguirla'
    })
})

app.get('/cartelera', (req, res) => {
    res.render('cartelera', {
        title: "Cartelera",
        añio: new Date().getFullYear(),
        background: 'thegooddoctorlogo2.jpg',
        titulo: "Proximamente"
    })
})

app.listen(port, () => {
    console.log('Escuchando el puerto', port);
})
