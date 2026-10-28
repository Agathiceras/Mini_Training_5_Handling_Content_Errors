/* Mini_Training_5_Handling_Content_Errors - Spanish content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='es';
const CONTENT = {
  flag:'🇪🇸', dir:'ltr',
  ui:{
    pageTitle:"Mini-entrenamiento · Manejar errores en clase — Capacitación de tutores de Kodland",
    logoSub:'Departamento de Desarrollo de Tutores',
    heroEyebrow:"🎯 Mini-entrenamiento",
    heroTitle:"Mantener la clase estable ante los <span class=\"h-pill\">errores</span>",
    heroIntro:"Estás viendo esto porque una familia reportó una clase que se sintió llena de errores y frustración. La mayor parte de esto se debe a la preparación, a la forma de explicar o a errores reales del contenido — y todo tiene solución.",
    heroWork:"Completa 4 módulos cortos. Cada comprobación de módulo requiere un 70 % o más para desbloquear el siguiente. En total, unos 25–30 minutos.",
    startBtn:"🚀 Comenzar el entrenamiento",
    pathLabel:'Tu ruta de aprendizaje',
    devTitle:'Dev: desbloquear todos los módulos para revisión',
    backToPath:'Volver a la ruta',
    modulesPassed:'{done} / {total} módulos aprobados',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprobado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Comenzar',
    reviewBadge:'▶ Repasar',
    objective:'Objetivo',
    startCheck:'▶ Comenzar la comprobación del módulo',
    finishBtn:'▶ Finalizar el mini-entrenamiento',
    doneBack:'✓ Listo — volver a la ruta',
    ixBadge:'📋 Comprobación del módulo — 70 % para desbloquear el siguiente módulo',
    ixItemBadge:'📋 Comprobación del módulo — pregunta {i} de {n}',
    scoreSoFar:'Puntuación hasta ahora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'No exactamente — la respuesta correcta es «{label}».',
    resPassed:'¡Módulo aprobado!',
    resFailed:'Todavía no lo logras',
    resUnlocked:"Has desbloqueado el siguiente módulo.",
    resDone:"Has completado este mini-entrenamiento.",
    resNeed:'Necesitas un 70 % para desbloquear el siguiente módulo. Repasa la sección anterior y vuelve a intentar la comprobación.',
    resContinue:'Continuar a la ruta de aprendizaje',
    resFinish:'Continuar',
    resBack:'Volver a la ruta',
    resReview:'Repasar este módulo',
    doneEyebrow:'Mini-entrenamiento completado',
    doneTitle:'🎉 ¡Felicidades!',
    doneP1:"🎉 <strong>¡Felicidades! Has completado este mini-entrenamiento.</strong>",
    doneP2:"¡Ya terminaste aquí! Por favor, vuelve a la página de capacitación del LMS desde la que accediste a este mini-entrenamiento para cerrar la tarea.",
    doneP3:"👉 <strong>Si debajo de la capacitación en el LMS aparece una comprobación o evaluación, asegúrate de completarla y obtener una puntuación aprobatoria</strong> — de lo contrario, la tarea podría quedar incompleta.",
    doneP4:'¡Mucho éxito! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo Dev: todos los módulos están ahora desbloqueados para revisión.',
    devOn:'🔓 Modo Dev activado — todos los módulos desbloqueados',
    devOff:'🔒 Modo Dev desactivado — progreso borrado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Haz',
    avoidLabel:'🚫 Evita',
    noticeLabel:'Ten en cuenta:',
    cvSee:'Lo que ves:',
    cvDo:'Lo que haces:',
    dtExample:'Ejemplo de una clase real',
    dtNext:'Siguiente:',
    dtDone:"✅ Eso es todo sobre las cuatro áreas. Ahora, clasifica lo que ves.",
    tlVideoTitle:'{label} — un ejemplo de una clase real',
    tlVideoMeta:'Mira cómo se ve esta fase en una clase real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introducción', emoji:'🧩', color:'var(--coral)',
 title:'Por qué estás aquí',
 desc:'Por qué una clase llena de errores se siente caótica — y las reglas que se aplican cuando ya ha llegado una solicitud de reembolso.',
 obj:'Entender que la mayoría de estos casos se deben a la preparación, a la forma de explicar o a problemas del contenido — todos con una solución concreta — y qué hacer (y qué no hacer) exactamente cuando ya existe una solicitud de reembolso.',
 sections:[
  {t:'😤 Cuando una clase se siente como una cadena de errores', html:`
   <div class="card"><p>Una clase llena de errores — los del estudiante, los del material o los que aparecen en plena explicación — puede volverse caótica rápidamente si no hay un plan para manejarlos. Las familias lo notan enseguida: lo perciben como «la clase no funciona», aunque la causa de fondo se pueda resolver en minutos.</p></div>
   ${co('co-idea','💡',`<p><strong>La mayor parte de esto se puede prevenir.</strong> Una clase bien preparada, una forma clara de explicar y saber cómo reportar un error real del contenido evitan que los pequeños errores conviertan la clase en algo fuera de control.</p>`)}
  `},
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   <div class="card"><p>Todo lo anterior trata de detectarlo pronto. Pero puede que estés abriendo este entrenamiento porque una familia <strong>ya</strong> ha pedido un reembolso. Las reglas de abajo se aplican sea cual sea el motivo — léelas primero y usa el resto del entrenamiento para entender qué llevó hasta aquí y qué puedes seguir haciendo en la clase.</p></div>
   ${co('co-idea','💡',`<p><strong>La solicitud la crea Servicio al Cliente, no tú</strong> — esa parte no está en tus manos. Lo que sigue siendo tuyo es todo lo que sucede en la clase a partir de ahora, y no es poco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>No digas nada sobre la solicitud en sí</strong> — ni al niño ni a la familia — a menos que Servicio al Cliente te pida expresamente decir algo concreto. Tu trabajo ahora es la clase, no la conversación.</p>`)}
  `},
  {t:'🎯 Tu próxima clase es el intento de recuperación', html:`
   <div class="card"><p>Puede que no tengas la oportunidad de cambiar nada más. Trata la próxima clase con este niño como el momento que lo decide todo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dale un turno de verdad.</strong> No una pregunta sin sentido, sino un momento genuino en el que se sienta visto y tenga éxito.`},
     {ic:'🏆', html:`<strong>Prepara un logro temprano y visible.</strong> Debe salir de la clase sintiéndose capaz, no rezagado.`},
     {ic:'👀', html:`<strong>Atención específica</strong> — haz que se sienta notado por algo concreto, no elogiado de forma genérica.`},
     {ic:'🤐', html:`<strong>Ni una palabra sobre la solicitud</strong> — incluso si el niño la menciona, redirige con calidez y sigue enseñando.`}
   ])}
  `},
  {t:'📮 Avisa rápido y conoce la única frase segura', html:`
   <div class="card"><p>Puedes enterarte de que existe una solicitud por los comentarios de Servicio al Cliente en el perfil del niño en BO — no hay ningún sistema automático que te avise. Una vez que lo sepas, lo que has visto en tus clases es información que Servicio al Cliente no tiene de ninguna otra forma.</p></div>
   ${numlist([
     'Deja un comentario en BO ese mismo día con exactamente lo que has visto — fechas y datos concretos, no impresiones',
     'Incluye las palabras exactas de la familia, textualmente, si las tienes',
     'Avisa a tu Team Leader ese mismo día',
     'Nunca confirmes que un reembolso ha sido aprobado ni hables de ninguna cantidad'
   ])}
   ${co('co-ok','✅',`<p><strong>El mensaje que siempre es seguro decir:</strong> <em>«Servicio al Cliente le ayudará con esto.»</em> Ahí termina tu parte de la conversación — Servicio al Cliente se encarga a partir de ese punto.</p>`)}
  `},
  {t:'🌱 Mantén el esfuerzo después', html:`
   <div class="card"><p>Tanto si la solicitud se retira, como si el niño sigue en tu grupo o pasa a otro tutor o a otro formato, sigue dándole un cuidado extra durante las siguientes clases. Una recuperación que se sostiene una clase y luego vuelve en silencio a la normalidad, muchas veces no se sostiene en absoluto.</p></div>
  `}
 ]
},
{id:'manual', numLabel:'Módulo 1', emoji:'📘', color:'var(--coral)',
 title:'Usar el manual y explicar bien',
 desc:'Lo que el manual ya te da, por qué estudiarlo el día antes evita la mayoría de los problemas y los dos recursos de enseñanza — el modelado y el andamiaje — que ayudan a que un concepto se entienda a la primera.',
 obj:'Usar bien los objetivos y las frases sugeridas del manual, saber dónde pedir ayuda antes de una clase y aplicar el modelado y el andamiaje para explicar los conceptos nuevos con más claridad.',
 sections:[
  {t:'📘 Lo que el manual ya te da', html:`
   <div class="card"><p>Todos los manuales empiezan con los objetivos de la clase y los resultados esperados — ahí es donde debes poner tu atención, no solo en la secuencia de pasos. También incluyen frases sugeridas para explicar cada concepto, escritas por personas que han pensado con cuidado cómo presentarlo.</p></div>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image1.png" alt="Un manual de clase con los objetivos de la clase y los resultados educativos"><figcaption>📌 Al principio de cada manual encontrarás los objetivos de aprendizaje de la clase, y lo que se espera que los estudiantes logren o aprendan al terminarla.</figcaption></figure>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image2.png" alt="Una página del manual de clase con una frase sugerida para el tutor"><figcaption>💬 Si no tienes claro cómo manejar una transición, presentar un tema o una actividad, o incluso explicarlo, el manual incluye frases guía que te pueden ayudar a pensar cómo decirlo.</figcaption></figure>
  `},
  {t:'⏳ El día antes, no una hora antes', html:`
   ${co('co-idea','💡',`<p><strong>Estudia y practica la clase el día antes</strong> — no una hora antes, ni treinta minutos antes. Ese margen te da tiempo real para darte cuenta de: código que ya no funciona, material que no carga o una actividad que todavía no terminas de entender tú mismo.</p>`)}
   ${co('co-star','⭐',`<p>Si encuentras una laguna, pregunta a un mentor, a tu Team Leader o a otros tutores en el canal de Slack de tu curso. Conseguir ayuda ahí, el día antes, es exactamente lo que evita que los problemas aparezcan en directo, delante del estudiante.</p>`)}
  `},
  {t:'🧑‍🏫 Lo que realmente ayuda a que un concepto se entienda', html:`
   <div class="card"><p>Cómo explicas algo importa tanto como explicarlo correctamente. Un concepto presentado con claridad a la primera evita la mayoría de los errores por confusión que vienen después.</p></div>
  `},
  {t:'🎬 Modelado: muéstralo antes de que lo intenten', html:`
   <div class="card"><p>El <strong>modelado</strong> consiste en demostrar tú mismo la técnica, en tu propia pantalla, antes de que el estudiante la intente. Explica en voz alta lo que vas pensando mientras lo haces — el razonamiento suele ser más valioso que el resultado.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Modelado, paso a paso</div><div class="vslot-meta">Ejemplo de una clase real</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1IgaGbg64ClvTs1DgnOXMhp_IPFtgCGfM/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">En este vídeo verás cómo el tutor explica la tarea paso a paso, con instrucciones cortas y sencillas.</div></div>
  `},
  {t:'🪜 Andamiaje: un apoyo que se va retirando poco a poco', html:`
   <div class="card"><p>El <strong>andamiaje</strong> consiste en dar más apoyo al comienzo de un concepto nuevo — una plantilla, pasos guiados, trabajar a su lado — y retirar ese apoyo a propósito a medida que el estudiante gana soltura, hasta que lo hace de forma independiente.</p></div>
   ${co('co-idea','💡',`<p>Los errores que hay que evitar son los extremos: apoyo total para siempre (nunca desarrolla autonomía) o ningún apoyo desde el principio (se topa con errores que no tiene herramientas para resolver, y la clase empieza a sentirse caótica).</p>`)}
  `}
 ],
 ix:{
  title:'Usar el manual y explicar bien — comprobación del módulo',
  instr:'70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'choice', prompt:'¿En qué deberías fijarte primero al abrir el manual de una clase nueva?', opts:['Solo en los pasos exactos, en orden','En la tarea para la próxima vez','En los objetivos y los resultados esperados'], correct:2, fb:'Los objetivos te dicen para qué es realmente la clase — los pasos son solo una forma de llegar ahí.'},
   {type:'choice', prompt:'¿Cuándo deberías estudiar y practicar una clase?', opts:['El día antes, no una hora antes','Justo antes de la clase, para tenerlo fresco','Solo si es un tema que nunca has enseñado'], correct:0, fb:'Un día completo de margen te da tiempo para corregir de verdad cualquier cosa que encuentres.'},
   {type:'choice', prompt:'¿Qué significa «modelado» en una clase?', opts:['Mostrar un ejemplo terminado, sin explicar cómo se hizo','Demostrar tú mismo la técnica, pensando en voz alta, antes de que el estudiante la intente','Dejar que el estudiante lo intente primero y luego corregirlo'], correct:1, fb:'Modelar es mostrarlo primero — incluido tu propio razonamiento — antes de que lo intenten.'},
   {type:'sort', prompt:'¿Este andamiaje está bien hecho?', card:'Semana 1: le das al estudiante una plantilla y pasos guiados. Semana 3: solo le das el objetivo y dejas que lo construya por su cuenta.', zones:[{label:'✅ Sí — eso es andamiaje', fb:'Correcto — el apoyo empieza alto y se retira a propósito a medida que el estudiante gana autonomía.'},{label:'❌ No — el apoyo debería mantenerse igual', fb:'No exactamente — mantener el apoyo total para siempre impide que el estudiante desarrolle autonomía. Retirarlo poco a poco es justamente la idea.'}], correctZone:0}
  ]
 }
},
{id:'contenterrors', numLabel:'Módulo 2', emoji:'🐞', color:'var(--coral)',
 title:'Errores de contenido y problemas técnicos',
 desc:'Qué hacer cuando el propio material está mal o falla la tecnología: cómo mantener la calma en el aula, reportarlo correctamente en BO y resolver el problema sin perder al resto del grupo.',
 obj:'Manejar un error real de contenido o de traducción sin que descarrile la clase, saber exactamente cómo reportarlo en BO y aplicar la lógica de resolver rápido / comunicar / documentar / escalar a los fallos técnicos.',
 sections:[
  {t:'🐞 A veces el problema es el material', html:`
   <div class="card"><p>A veces una clase se vuelve caótica no por el estudiante, sino por un error real del contenido o de su traducción — un fragmento de código roto, una instrucción que no coincide con la herramienta, un término mal traducido. Estas son las situaciones más comunes, y cómo podrías responder:</p></div>
   ${iconGrid([
     {ic:'🐛', html:`<strong>Un estudiante nota que algo está mal traducido o mal escrito.</strong> Qué hacer: dilo en voz alta, con naturalidad, y conviértelo en algo que resuelven juntos en lugar de algo que salió mal. Ejemplo: <em>«¡Bien visto! Parece que esta línea tiene un error de escritura; descubramos juntos qué debería decir.»</em>`},
     {ic:'💻', html:`<strong>Un estudiante se da cuenta de que el código no funciona por un error de escritura.</strong> Ejemplo: <em>«¡Muy bien! Parece que alguien encontró el error escondido. Quería ver si alguien lo notaba.»</em>`},
     {ic:'🖼️', html:`<strong>Algunas imágenes no aparecen o no cargan.</strong> Ejemplo: <em>«Seguramente es solo un fallo de la plataforma, no te preocupes — tengo aquí las diapositivas para que las puedas ver igual.»</em> O bien: <em>«Tranquilos, estas cosas pasan, y como programadores se lo van a encontrar muchas veces — por ahora, miren mi pantalla.»</em>`}
   ])}
  `},
  {t:'💛 Responder a los errores con calma', html:`
   <div class="card"><p>Un error de contenido es un momento pequeño que puede ir en dos direcciones: un tropiezo pasajero que la clase apenas nota, o una grieta en la confianza de un estudiante. Lo que decide cuál de los dos será no es el error en sí — es cómo reaccionas en los primeros segundos. Nombrarlo en voz alta, sin vergüenza ni culpa, les dice a los estudiantes que los errores son una parte normal y esperada de aprender a programar, y les muestra exactamente la actitud que quieres que tengan ante sus propios errores: notarlo, mantener la curiosidad, corregirlo y seguir adelante.</p></div>
   ${co('co-ok','✅',`<p><strong>Sí di:</strong> <em>«¡Bien visto! Eso es cosa del material, no tuya — vamos a buscarle la vuelta juntos.»</em> Lleva la atención a encontrar una solución en equipo, y sigue avanzando.</p>`)}
   ${co('co-danger','⛔',`<p><strong>Evita:</strong> darle demasiada importancia al error, culpar a la plataforma en voz alta de una forma que mine la confianza en el curso o dedicarle tanto tiempo que el resto de la clase se resienta.</p>`)}
  `},
  {t:'🖥️ Encontrar el material — y reportar errores — en BO', html:`
   <div class="card"><p>El manual y la presentación de cada clase están dentro de BackOffice (BO), vinculados a la ficha exacta del curso que impartes. En ese mismo lugar es donde reportas un error de contenido, con el icono 🐞 en la fila de la clase. La simulación de abajo te guía paso a paso.</p></div>
   ${co('co-danger','🚨',`<p><strong>Comprueba siempre que el ID del curso que abres coincide con el del curso en el que están inscritos tus estudiantes.</strong> En BO hay cursos parecidos uno al lado del otro — enseñar con el equivocado puede convertir una clase en un caos en segundos.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Material del curso y errores de contenido</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Material del curso y errores de contenido" loading="lazy"></iframe></div></div>
   ${co('co-star','⭐',`<p>Reportar un error no solo arregla tu clase — la arregla para todos los grupos que vienen después del tuyo con el mismo material.</p>`)}
  `},
  {t:'🔧 Cuando el problema es técnico: el protocolo', html:`
   <div class="card"><p>A veces la cadena de errores de una clase es técnica: una pantalla congelada, una herramienta que no carga, una conexión que se cae una y otra vez. Los problemas técnicos son normales y les pueden pasar tanto a los tutores como a los estudiantes — lo importante es que no se agraven.</p></div>
   ${co('co-idea','💡',`<p><strong>La regla de oro.</strong> Si no puedes resolverlo tú mismo en <strong>10 minutos</strong>, deja de intentarlo en silencio. <strong>Comunica → documenta → escala.</strong> Un padre que sabe lo que está pasando confía en ti. Uno que no lo sabe, cancela.</p>`)}
   ${stepFlow([
     {ic:'⏱️', label:'Primera vez en una clase: intenta resolverlo durante un máximo de 10 minutos'},
     {ic:'👩‍💼', label:'¿Sigue sin funcionar? Avisa a tu Team Leader ese mismo día — decidirá una opción de recuperación'},
     {ic:'💬', label:'Escribe a los padres en menos de 30 minutos, con calidez: ya lo comunicaste a tu equipo'},
     {ic:'🎫', label:'¿Segunda clase seguida? Abre un ticket con Servicio al Cliente ese mismo día'},
     {ic:'✅', label:'Cuando se resuelva: avisa a los padres y cierra el tema'}
   ])}
  `},
  {t:'🧑‍💻 Evitar problemas técnicos por tu parte', html:`
   <div class="card"><p>Un problema técnico del tutor puede frenar una clase igual que el de un estudiante. La mayoría se pueden detectar antes incluso de que empiece la clase.</p></div>
   ${iconGrid([
     {ic:'🔌', html:`<strong>Haz pruebas 30 minutos antes.</strong> Revisa tu conexión a internet, tu cámara y tu micrófono antes de cada clase. Si notas un problema, avisa a tu Team Leader.`},
     {ic:'📷', html:`<strong>Busca alternativas.</strong> Si apagar la cámara mejora tu conexión, hazlo.`},
     {ic:'🎙️', html:`<strong>Ten un micrófono de respaldo.</strong> Si tus auriculares no funcionan, prueba otra opción, como el audio integrado de tu computadora, y activa siempre la reducción de ruido de fondo en Classroom.`},
     {ic:'📶', html:`<strong>Revisa tus controladores, y si tienes una VPN activa</strong> — las VPN suelen ralentizar la conexión.`},
     {ic:'🧊', html:`<strong>¿Trabajas con una herramienta pesada como Blender?</strong> El curso incluye en las primeras clases una guía para configurarla y que rinda mejor.`},
     {ic:'💻', html:`<strong>Libera memoria RAM antes de clase.</strong> Google Chrome ofrece la mejor experiencia con Classroom, pero también suele consumir mucha RAM — cierra las pestañas y los programas que no necesites en ese momento.`},
     {ic:'👂', html:`<strong>Compruébalo en directo.</strong> Antes de empezar la clase, confirma con tus estudiantes que te ven y te oyen bien — así detectas los problemas técnicos a tiempo.`}
   ])}
  `},
  {t:'🎓 Ayudar a los estudiantes con problemas técnicos', html:`
   <div class="card"><p>Muchas veces, los problemas técnicos que tienen los estudiantes en clase se deben a que usan un navegador distinto de Google Chrome o un dispositivo inadecuado para el curso, como intentar seguir la clase en una tableta, un celular o un iPad. Por eso es importante que conozcas los requisitos mínimos para poder ayudarlos.</p></div>
   ${doavoid(
     ["Google Chrome, actualizado — el único navegador totalmente compatible",
      "Al menos 4 GB de RAM (8 GB para Blender o Unity)",
      "Una conexión estable, mínimo 10 Mbps — siempre que se pueda, una conexión por cable es mejor que el wifi",
      "Al menos 5 GB de almacenamiento libre — Unity y Blender necesitan bastante más"],
     ["Safari — tiene errores conocidos con la plataforma de Kodland desde la última actualización: botones que no responden, pantallas que no cargan, errores al entrar",
      "Tabletas / iPads para cursos como Roblox Studio o Unity — necesitan una computadora de verdad",
      "Dar por hecho que un problema en una Mac es desinterés antes de comprobar si simplemente es Safari"]
   )}
   ${co('co-idea','🍎',`<p>Presta especial atención a la combinación Mac + Safari. Si a un estudiante con Mac no le responden los botones o la pantalla no carga, la solución casi siempre es: abrir la clase en Google Chrome. Indica a las familias google.com/chrome.</p>`)}
  `},
  {t:'⚖️ Sin abandonar al resto de la clase', html:`
   <div class="card"><p>El fallo no es solo el problema técnico en sí — es un tutor tan concentrado en el problema de un estudiante que el resto del grupo pierde cinco o diez minutos de clase.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Ponle un límite de tiempo.</strong> Haz un intento rápido de solución con el estudiante afectado (cambiar a Chrome, recargar, reiniciar), luego avanza con el grupo y retoma el caso con ese estudiante entre actividades o después de clase.`},
     {ic:'👥', html:`<strong>Dale al grupo algo que hacer</strong> en cuanto empieces a resolver el problema — no los dejes mirando una pantalla quieta.`},
     {ic:'🫂', html:`<strong>Mantén la calma, en voz alta.</strong> Un tranquilo «esto pasa a veces, vamos a buscarle la vuelta» mantiene el aula en calma mientras lo resuelves.`},
     {ic:'📝', html:`<strong>Deja constancia.</strong> Si un dispositivo causa una y otra vez el mismo problema, avisa a la familia, deja un comentario en BO e informa a tu Team Leader — en lugar de volver a resolverlo en cada clase.`}
   ])}
  `}
 ],
 ix:{
  title:'Errores de contenido y problemas técnicos — comprobación del módulo',
  instr:'70 % para desbloquear la lista de verificación final.',
  items:[
   {type:'choice', prompt:'Un estudiante detecta un error real en el código de ejemplo de la clase. ¿Cuál es tu primera acción en el aula?', opts:['Saltarte la actividad sin explicación, para ahorrar tiempo','Nombrarlo con calma y convertirlo en un momento de «vamos a resolverlo juntos»','Decirle al grupo que la plataforma siempre está llena de errores'], correct:1, fb:'Mantener la calma y colaborar evita que la clase se sienta caótica — y muestra cómo enfrentarse a los errores.'},
   {type:'sort', prompt:'¿Error de contenido o problema técnico?', card:'Una línea del código inicial de la clase tiene una errata y da un error antes de que nadie haya cambiado nada.', zones:[{label:'🔧 Problema técnico → sigue el protocolo', fb:'No exactamente — el código en sí está mal, para todos. Eso es un error de contenido: búscale la vuelta con calma y repórtalo con el icono 🐞 en BO.'},{label:'🐞 Error de contenido → repórtalo en BO', fb:'Correcto — el propio material está mal. Búscale la vuelta con calma y después repórtalo con el icono 🐞 para que se corrija para todos los grupos.'}], correctZone:1},
   {type:'sort', prompt:'¿Error de contenido o problema técnico?', card:'La pantalla de un estudiante se congela una y otra vez y su audio se corta en plena clase.', zones:[{label:'🔧 Problema técnico → sigue el protocolo', fb:'Correcto — intenta una solución rápida, mantén al grupo trabajando y comunica, documenta y escala si se repite.'},{label:'🐞 Error de contenido → repórtalo en BO', fb:'No exactamente — al material no le pasa nada. Una pantalla congelada y un audio que se corta son problemas técnicos: sigue el protocolo.'}], correctZone:0},
   {type:'choice', prompt:'¿Dónde reportas un error de contenido en BO?', opts:['En un mensaje a la familia del estudiante','En la pestaña Revisar del grupo','Con el icono 🐞 en la fila de la clase, dentro de la ficha del curso'], correct:2, fb:'El icono 🐞 de cada fila de clase abre la encuesta de calidad del contenido — eso es lo que hace que se corrija el material.'},
   {type:'choice', prompt:'El mismo problema técnico ocurre por segunda clase seguida. ¿Qué cambia?', opts:['Abrir un ticket con Servicio al Cliente ese mismo día','Nada — sigue intentando resolverlo tú mismo','Esperar una clase más para asegurarte de que es un patrón'], correct:0, fb:'Si se repite, es momento de escalarlo a Servicio al Cliente — y de avisar a los padres de que alguien se pondrá en contacto con ellos.'}
  ]
 }
},
{id:'checklist', numLabel:'Lista de verificación final', emoji:'✅', color:'var(--coral)',
 title:'Lista de verificación final',
 desc:'Aquí no hay examen — solo lo esencial de este mini-entrenamiento, antes de cerrarlo.',
 obj:'Repasa la lista de verificación de abajo. Este módulo no se califica — léela y luego finaliza el mini-entrenamiento.',
 sections:[
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   ${numlist([
     'Dejé un comentario en BO el mismo día en que supe de la solicitud y avisé a mi Team Leader',
     'Mi siguiente clase con este estudiante fue un intento real de recuperación — un turno de verdad, un logro visible, atención específica, ni una palabra sobre la solicitud',
     'Nunca confirmé una aprobación ni hablé de ninguna cantidad — usé la única frase segura y dejé el resto a Servicio al Cliente'
   ])}
  `}, {t:'🌱 En cada clase', html:`
   ${numlist([
     'Estudio y practico cada clase el día antes, empezando por los objetivos y los resultados esperados del manual',
     'Uso las frases sugeridas del manual para explicar conceptos nuevos, y consulto a mi mentor, a mi Team Leader o el canal de Slack cualquier laguna antes de la clase',
     'Modelo primero: lo demuestro en mi propia pantalla y pienso en voz alta antes de que los estudiantes lo intenten',
     'Aplico el andamiaje: mucho apoyo al principio (una plantilla, pasos guiados) y menos a medida que el estudiante gana autonomía',
     'Cuando el material tiene un error, lo nombro con calma y lo convierto en algo que resolvemos juntos',
     'Normalizo los errores en voz alta, para que los estudiantes los vean como una parte normal de aprender a programar — no como algo que da vergüenza',
     'Nunca le doy demasiada importancia a un error, ni culpo a la plataforma delante de los estudiantes, ni dejo que se coma el resto de la clase',
     'Reporto cada error de contenido con el icono 🐞 en BO, y compruebo que el ID del curso coincide con el grupo de mis estudiantes',
     'Pruebo mi conexión, mi cámara y mi micrófono 30 minutos antes de la clase, y cierro las pestañas y los programas que no necesito',
     'Me aseguro de que los estudiantes usen Google Chrome y un dispositivo adecuado — no Safari, y nada de tabletas para cursos como Roblox Studio o Unity',
     'Ante problemas técnicos: hasta 10 minutos para resolverlo, después comunico, documento y escalo — y abro un ticket con Servicio al Cliente si ocurre dos clases seguidas',
     'Mientras ayudo a un estudiante con un problema técnico, le doy al resto del grupo algo en lo que trabajar, para que nadie se quede esperando'
   ])}
  `}, {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Eso es todo el mini-entrenamiento.</strong> Cuando estés listo, continúa — y luego completa el DST en el LMS para cerrar la tarea.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
