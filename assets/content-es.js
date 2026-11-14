/* Mini_Training_5_Handling_Content_Errors - Spanish content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='es';
const CONTENT = {
  flag:'🇪🇸', dir:'ltr',
  ui:{
    heroCard1:"<b>A tu ritmo.</b> Tu progreso se guarda en este navegador.",
    heroCard2:"<b>Práctica incluida.</b> Cada módulo termina con una comprobación breve.",
    pbLabel:'módulos completados',
    tapOpen:'Toca para abrir',
    tapFlip:'Toca para girar',
    lblSee:'Lo que ves',
    lblDo:'Lo que haces',
    lblSay:'Lo que puedes decir',
    lblReport:'Dónde reportar',
    lblAvoid:'Evita',
    lblTip:'Consejo',
    stepOf:'Paso {i} de {n}',
    next:'Siguiente',
    pageTitle:"Mini-entrenamiento · Manejar errores en clase — Capacitación de tutores de Kodland",
    logoSub:'Departamento de Desarrollo de Tutores',
    heroEyebrow:"🎯 Mini-entrenamiento",
    heroTitle:"Mantener la clase estable ante los <span class=\"h-pill\">errores</span>",
    heroIntro:"Estás viendo esto porque una familia presentó una solicitud de reembolso muy negativa: una clase que pareció llena de errores, un problema con el servicio de la empresa o mucho enojo sin una causa clara. Aquí te mostraremos qué te corresponde resolver, qué debes reportar a Client Service y cómo manejarlo con calma.",
    heroWork:"Completa 6 módulos cortos. Necesitas obtener al menos un 70 % en la evaluación de cada módulo para desbloquear el siguiente. Duración total aproximada: 40–45 minutos.",
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
 desc:'Por qué una clase llena de errores se siente caótica, qué más suele haber detrás de una familia muy molesta y las reglas que se aplican una vez que ya llegó una solicitud de reembolso.',
 obj:'Comprender las principales causas detrás de una familia muy molesta (errores en la clase, problemas operativos, problemas con la clase o el tutor y padres muy enojados) y saber exactamente qué hacer (y qué no hacer) cuando ya existe una solicitud de reembolso.',
 sections:[
  {t:'😤 Cuando una clase se siente como una cadena de errores', html:`
   <div class="card"><p>Una clase llena de errores — los del estudiante, los del material o los que aparecen en plena explicación — puede volverse caótica rápidamente si no hay un plan para manejarlos. Las familias lo notan enseguida: lo perciben como «la clase no funciona», aunque la causa de fondo se pueda resolver en minutos.</p></div>
   ${co('co-idea','💡',`<p><strong>La mayor parte de esto se puede prevenir.</strong> Una clase bien preparada, una forma clara de explicar y saber cómo reportar un error real del contenido evitan que los pequeños errores conviertan la clase en algo fuera de control.</p>`)}
  `},
  {t:'🧭 Una familia muy molesta: qué suele haber detrás', html:`
   <div class="card"><p>Los errores en la clase son solo una parte del panorama. Cuando una familia está muy molesta, la causa suele estar fuera de la clase, y aun así necesitas saber qué hacer con ella:</p></div>
   ${iconGrid([
     {ic:'🐞', html:`<strong>Una clase que pareció llena de errores</strong>: preparación, explicaciones, contenido o problemas técnicos. <em>Módulos 1 y 2.</em>`},
     {ic:'🏢', html:`<strong>Problemas de la empresa y operativos</strong>: facturación, pagos en cuotas, saldos, cambios de grupo, retrasos en el inicio, soporte que no responde, promesas de ventas, la licencia de Minecraft. <em>Módulo 3.</em>`},
     {ic:'🧑‍🏫', html:`<strong>La clase o el tutor</strong>: ritmo, explicaciones, un grupo caótico, una clase perdida, conexión, necesidades especiales, demasiados cambios de tutor. <em>Módulo 3.</em>`},
     {ic:'🌋', html:`<strong>Un padre muy enojado o amenazante</strong>, a veces sin una causa clara. <em>Módulo 4.</em>`}
   ])}
   ${co('co-ok','✅',`<p><strong>Lo que te corresponde en todos los casos:</strong> resolver lo que esté en tu clase, reportar el resto a Client Service el mismo día y mantener la calma y el respeto, sin importar el tono de la familia.</p>`)}
  `},
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   <div class="card"><p>Todo lo anterior trata de detectarlo pronto. Pero puede que estés abriendo este entrenamiento porque una familia <strong>ya</strong> ha pedido un reembolso. Las reglas de abajo se aplican sea cual sea el motivo — léelas primero y usa el resto del entrenamiento para entender qué te llevó hasta aquí y qué puedes seguir haciendo en la clase.</p></div>
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
   ${co('co-idea','💡',`<p>Los errores que hay que evitar son los extremos: apoyo total para siempre (nunca desarrolla autonomía) o ningún apoyo desde el principio (el estudiante se topa con errores que no sabe resolver, y la clase empieza a sentirse caótica).</p>`)}
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
   ${co('co-ok','✅',`<p><strong>Sí di:</strong> <em>«¡Bien visto! Eso es cosa del material, no tuya — vamos a buscarle una solución juntos.»</em> Lleva la atención a encontrar una solución en equipo, y sigue avanzando.</p>`)}
   ${co('co-danger','⛔',`<p><strong>Evita:</strong> darle demasiada importancia al error, culpar a la plataforma en voz alta de una forma que mine la confianza en el curso o dedicarle tanto tiempo que el resto de la clase se vea afectada.</p>`)}
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
  instr:'Necesitas un 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'choice', prompt:'Un estudiante detecta un error real en el código de ejemplo de la clase. ¿Cuál es tu primera acción en el aula?', opts:['Saltarte la actividad sin explicación, para ahorrar tiempo','Nombrarlo con calma y convertirlo en un momento de «vamos a resolverlo juntos»','Decirle al grupo que la plataforma siempre está llena de errores'], correct:1, fb:'Mantener la calma y colaborar evita que la clase se sienta caótica — y muestra cómo enfrentarse a los errores.'},
   {type:'sort', prompt:'¿Error de contenido o problema técnico?', card:'Una línea del código inicial de la clase tiene una errata y da un error antes de que nadie haya cambiado nada.', zones:[{label:'🔧 Problema técnico → sigue el protocolo', fb:'No exactamente — el código en sí está mal, para todos. Eso es un error de contenido: búscale la vuelta con calma y repórtalo con el icono 🐞 en BO.'},{label:'🐞 Error de contenido → repórtalo en BO', fb:'Correcto — el propio material está mal. Búscale la vuelta con calma y después repórtalo con el icono 🐞 para que se corrija para todos los grupos.'}], correctZone:1},
   {type:'sort', prompt:'¿Error de contenido o problema técnico?', card:'La pantalla de un estudiante se congela una y otra vez y su audio se corta en plena clase.', zones:[{label:'🔧 Problema técnico → sigue el protocolo', fb:'Correcto — intenta una solución rápida, mantén al grupo trabajando y comunica, documenta y escala si se repite.'},{label:'🐞 Error de contenido → repórtalo en BO', fb:'No exactamente — al material no le pasa nada. Una pantalla congelada y un audio que se corta son problemas técnicos: sigue el protocolo.'}], correctZone:0},
   {type:'choice', prompt:'¿Dónde reportas un error de contenido en BO?', opts:['En un mensaje a la familia del estudiante','En la pestaña Revisar del grupo','Con el icono 🐞 en la fila de la clase, dentro de la ficha del curso'], correct:2, fb:'El icono 🐞 de cada fila de clase abre la encuesta de calidad del contenido — eso es lo que hace que se corrija el material.'},
   {type:'choice', prompt:'El mismo problema técnico ocurre por segunda clase seguida. ¿Qué cambia?', opts:['Abrir un ticket con Servicio al Cliente ese mismo día','Nada — sigue intentando resolverlo tú mismo','Esperar una clase más para asegurarte de que es un patrón'], correct:0, fb:'Si se repite, es momento de escalarlo a Servicio al Cliente — y de avisar a los padres de que alguien se pondrá en contacto con ellos.'}
  ]
 }
},
{id:'operations', numLabel:'Módulo 3', emoji:'🏢', color:'var(--coral)',
 title:'Problemas de la empresa y de la clase: cómo reportarlos correctamente',
 desc:'Qué hacer cuando una familia está molesta por la facturación, los saldos, los grupos, las fechas de inicio, el soporte o las promesas de ventas, o por la clase misma, y cómo comunicarte con Client Service mediante un reporte en BO.',
 obj:'Distinguir qué te corresponde resolver y qué te corresponde reportar, responder a las quejas operativas sin explicar, defender ni prometer, corregir los problemas de la clase que te corresponden y reportar cada caso a Client Service en BO el mismo día.',
 sections:[
  {t:'🧭 ¿Lo resuelves tú o lo reportas?', html:`
   <div class="card"><p>Una familia muy molesta rara vez se queja de una sola cosa. Con frecuencia, el enojo tiene que ver con la empresa (un cobro, un saldo, un grupo que cambió) y tú simplemente eres la persona a quien ven cada semana. Antes de responder, pregúntate de qué tipo de problema se trata:</p></div>
   ${patternCards([
     {ic:'🏢', title:'Empresa y operaciones', desc:'Facturación, pagos en cuotas, saldos, grupos, fechas de inicio, soporte, lo que prometió ventas, licencias.', note:'<strong>No te corresponde resolverlo ni explicarlo.</strong> Reconoce la situación, repórtala a Client Service en BO e informa a tu Team Leader.'},
     {ic:'🧑‍🏫', title:'La clase o el tutor', desc:'Ritmo, explicaciones, un grupo caótico, una clase perdida, conexión, necesidades especiales, cambios de tutor.', note:'<strong>Te corresponde en parte.</strong> Corrige lo que puedas en la siguiente clase y repórtalo.'},
     {ic:'🔧', title:'Técnico', desc:'Classroom, la plataforma, las herramientas del curso, el dispositivo de un estudiante.', note:'<strong>Sigue el protocolo</strong> del Módulo 2: 10 minutos y luego comunicar, documentar y escalar.'}
   ],3)}
  `},
  {t:'🏢 Problemas operativos y de la empresa: qué haces y qué dices', html:`
   <div class="card"><p>Toca cada situación. El patrón siempre es el mismo: <strong>reconoce, no expliques, no prometas y reporta el mismo día.</strong> No tienes el panorama completo de los pagos, el contrato o la conversación de ventas de una familia, y una suposición bienintencionada puede convertirse en una promesa que la empresa no puede cumplir.</p></div>
   ${symCards([
     {ic:'💳', title:'Facturación y pagos en cuotas',
      see:`Un cobro inesperado, una cuota de la que la familia no sabía, un pago que creen que ya se hizo.`,
      do:`Anota exactamente lo que dice la familia y repórtalo a Client Service en BO el mismo día.`,
      say:`<em>«Entiendo que esto les preocupe. Lo he pasado al equipo de Atención al Cliente, que los ayudará con este tema».</em>`,
      rep:`Client Service (reporte en BO) + Team Leader + comentario en BO.`,
      avoid:`Explicar cómo funcionan los pagos o decir si un cobro es correcto.`},
     {ic:'🔄', title:'Recálculo tras el cambio a Premium u otro formato',
      see:`La familia pasó a Premium, a clases individuales o a otro formato y no está conforme con la cantidad de clases que tiene ahora.`,
      do:`No comentes las cifras. Repórtalo a Client Service en BO, con las palabras de la propia familia.`,
      say:`<em>«El equipo de Atención al Cliente los ayudará con este tema».</em>`,
      rep:`Client Service (reporte en BO) + Team Leader + comentario en BO.`,
      avoid:`Calcular las clases por tu cuenta o darles la razón en que es injusto.`},
     {ic:'🎟️', title:'Saldo en disputa',
      see:`«Deberíamos tener más clases». «Se descontó una clase que no se dio».`,
      do:`Revisa la asistencia que registraste en BO y luego pásalo a tu Team Leader y a Client Service el mismo día: Operations revisa los saldos y los descuentos.`,
      say:`<em>«Gracias por avisarme. Lo compartí con mi equipo para que lo revisen».</em>`,
      rep:`Team Leader + Client Service + comentario en BO (Operations: @David Marte, @Anna Hernandez).`,
      avoid:`Prometer que se devolverán clases o decir que el saldo es correcto o incorrecto.`},
     {ic:'👥', title:'Cambios de grupo o grupo que se disuelve',
      see:`El grupo se movió, se fusionó o se cerró, y el niño perdió compañeros, un tutor o un horario conocido.`,
      do:`Haz que la primera clase en la nueva situación sea acogedora. Reporta las inquietudes de la familia a Client Service en BO.`,
      say:`<em>«Entiendo que el cambio no es fácil. Lo compartí con mi equipo para que se pongan en contacto con ustedes».</em>`,
      rep:`Client Service (reporte en BO) + Team Leader + comentario en BO.`,
      avoid:`Explicar por qué cambió el grupo o prometer que volverá el grupo anterior.`},
     {ic:'⏳', title:'Retrasos en el inicio',
      see:`La familia lleva tiempo esperando que se abra un grupo, o la fecha de inicio cambió.`,
      do:`No des fechas que no tengas. Repórtalo a Client Service en BO.`,
      say:`<em>«Entiendo que la espera es frustrante. El equipo de Atención al Cliente los ayudará con la fecha de inicio».</em>`,
      rep:`Client Service (reporte en BO) + Team Leader + comentario en BO.`,
      avoid:`Adivinar una fecha de inicio o culpar a otro equipo.`},
     {ic:'📞', title:'«El soporte no responde»',
      see:`La familia dice que nadie responde a sus mensajes o llamadas.`,
      do:`Reconócelo: esa frustración es real. Repórtalo el mismo día para que Client Service sepa que la familia está esperando.`,
      say:`<em>«Lamento que no hayan recibido respuesta. Lo reporté hoy para que el equipo de Atención al Cliente se comunique con ustedes».</em>`,
      rep:`Client Service (reporte en BO) + Team Leader + comentario en BO.`,
      avoid:`Decir «nunca responden» o criticar al equipo: confirma el peor temor de la familia.`},
     {ic:'🗣️', title:'«Ventas nos prometió otra cosa»',
      see:`Grupos más pequeños, otro curso, un nivel, un precio o un resultado que «nos prometieron».`,
      do:`Anota textualmente las palabras de la familia y repórtalas. En la clase, concéntrate en lo que puedes hacer por el niño.`,
      say:`<em>«Gracias por avisarme. Lo compartí con mi equipo y el equipo de Atención al Cliente se pondrá en contacto con ustedes al respecto».</em>`,
      rep:`Client Service (reporte en BO) + Team Leader + comentario en BO.`,
      avoid:`Confirmar o negar lo que dijo ventas, o hacer una nueva promesa para solucionarlo.`},
     {ic:'🧱', title:'Licencia de Minecraft',
      see:`Preguntas o quejas sobre la cuenta o la licencia de Minecraft, o sobre por qué el curso funciona como funciona.`,
      do:`Ayuda con lo que esté en la clase (la cuenta que requiere el curso, la configuración). Todo lo relacionado con la licencia en sí se envía a Client Service.`,
      say:`<em>«El equipo de Atención al Cliente los ayudará con la consulta sobre la licencia».</em>`,
      rep:`Client Service (reporte en BO) + Team Leader + comentario en BO.`,
      avoid:`Comentar los motivos internos, las licencias o los cambios en el contenido del curso.`}
   ])}
   ${co('co-ok','✅',`<p><strong>Reconocer siempre está permitido.</strong> Una respuesta breve y cálida (lo viste, lo entiendes, lo pasaste) no necesita la aprobación de nadie. Las explicaciones, las opciones y todo lo relacionado con dinero esperan a Client Service.</p>`)}
  `},
  {t:'🧑‍🏫 Cuando el problema es la clase', html:`
   <div class="card"><p>Algunas quejas fuertes se refieren a la clase misma. Te corresponden en parte: corrige lo que puedas desde la siguiente clase y repórtalo de todos modos, para que tu Team Leader y Client Service no se lleven una sorpresa.</p></div>
   <div class="tbl-wrap"><table>
    <tr><th>Lo que dice la familia</th><th>Lo que haces</th><th>Lo que reportas</th></tr>
    <tr><td>«El método no es adecuado para su edad»</td><td>Pasos más cortos, palabras que conozcan, más demostraciones: adapta la clase a la edad del grupo</td><td>Comentario en BO + Team Leader si la diferencia de edad en el grupo es grande</td></tr>
    <tr><td>«El tutor avanza sin explicar»</td><td>Una instrucción a la vez y comprueba la comprensión antes de avanzar</td><td>Comentario en BO con lo que cambiaste</td></tr>
    <tr><td>«El grupo es caótico»</td><td>Reglas de clase desde la clase 1, turnos para hablar, manejo del grupo con calma y firmeza</td><td>Comentario en BO + informar a la familia de los incidentes</td></tr>
    <tr><td>«El tutor no se presentó» / «la clase se pospuso»</td><td>Nunca canceles ni muevas una clase por tu cuenta; informa a tu Team Leader en cuanto lo sepas</td><td>Team Leader el mismo día: él decide cómo se repone</td></tr>
    <tr><td>«La conexión falla constantemente»</td><td>Prueba tu equipo antes de cada clase; sigue el protocolo técnico</td><td>El canal de ayuda para tutores + comentario en BO</td></tr>
    <tr><td>«El tutor no estaba preparado para las necesidades especiales de mi hijo»</td><td>Rutina, ritmo más lento, pasos más pequeños, otras formas de responder; pregunta a la familia qué ayuda</td><td>Comentario en BO + Team Leader: tú recomiendas, ellos deciden sobre el formato</td></tr>
    <tr><td>«Demasiados cambios de tutor»</td><td>Si asumes un grupo, lee los comentarios en BO, preséntate y mantén las rutinas del grupo</td><td>Team Leader, para que la familia se entere de los cambios con anticipación</td></tr>
   </table></div>
   ${co('co-idea','📚',`<p><strong>¿Quieres profundizar?</strong> El ritmo, la comprobación de la comprensión y la puntualidad se tratan en el mini-entrenamiento <em>Lesson Quality</em>; los grupos caóticos, en <em>Lesson Organisation</em>; las necesidades especiales, en <em>No Interest</em> y <em>Online Format</em>; los problemas de conexión, en <em>Technical Issues</em>.</p>`)}
  `},
  {t:'📮 Cómo comunicarte con Client Service y qué escribir', html:`
   <div class="card"><p>Te comunicas con Client Service a través de BO: un reporte en las <strong>Tutors' Evaluations</strong> del estudiante les llega directamente. Hazlo <strong>el mismo día</strong>: una familia que se siente ignorada escala rápidamente.</p></div>
   ${timeline([
     {ic:'📝', label:'Repórtalo en BO', items:[
       'Perfil del estudiante → <strong>Progress</strong> → <strong>Tutors\' Evaluations</strong> → <strong>Evaluate The Student</strong>.',
       '<strong>Problem Kind:</strong> el más cercano; por ejemplo, <em>«Student wants to drop the studies/asks for refund»</em>, <em>«Client wants to change the schedule»</em> u <em>«Other»</em> para facturación, saldos, grupos o promesas de ventas.',
       'Elige el grupo, escribe el comentario con los hechos y las palabras de la propia familia, y confirma.'
     ]},
     {ic:'👩‍💼', label:'Informa a tu Team Leader', items:[
       'El mismo día, con un enlace al estudiante en BO. Acuerda con él qué le dirás a la familia a continuación, si es que le dirás algo.'
     ]},
     {ic:'🧭', label:'Otros canales cuando corresponda', items:[
       '<strong>Problema técnico que no puedes resolver:</strong> el <em>canal de ayuda para tutores</em>.',
       '<strong>Créditos de clases, descuentos, un horario incorrecto:</strong> tu Team Leader + Operations (<strong>@David Marte</strong>, <strong>@Anna Hernandez</strong>).'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Cómo es un reporte útil: copia y completa</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Fecha:</strong> [fecha] · <strong>Grupo:</strong> [enlace de BO] · <strong>Estudiante:</strong> [enlace de BO]<br>
   <strong>Lo que planteó la familia:</strong> [p. ej., una cuota que no esperaban; el grupo cambió; «ventas prometió un grupo más pequeño»]<br>
   <strong>Palabras de la familia:</strong> [textuales]<br>
   <strong>Lo que dije:</strong> [p. ej., reconocí la situación y dije que el equipo de Atención al Cliente los ayudaría, sin explicaciones ni promesas]<br>
   <strong>Contexto de la clase:</strong> [asistencia, cómo le va al estudiante, cualquier dato relevante]<br>
   <strong>Lo que recomendaría revisar:</strong> [opcional: tu recomendación, su decisión]</p></div>
   <div class="card"><p><strong>Practícalo ahora.</strong> Un padre acaba de escribir: <em>«Nos cobraron una cuota que no acordamos y el grupo cambió sin que nadie nos avisara. Queremos que nos devuelvan el dinero».</em> Repórtalo en esta réplica de BO. En el <strong>paso 4</strong>, elige el Problem Kind <strong>«Student wants to drop the studies/asks for refund»</strong> y escribe los hechos y las palabras de la propia familia.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Reportar un caso a Client Service</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Reportar un caso a Client Service" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Por qué funciona:</strong> Client Service solo puede resolver lo que conoce. Un reporte completo y neutral, con las palabras de la propia familia, les ahorra una llamada y hace que la familia reciba una respuesta más pronto.</p>`)}
  `}
 ],
 ix:{
  title:'¿Lo resuelves o lo reportas? — evaluación del módulo',
  instr:'Clasifica cada caso y elige la mejor acción. Necesitas un 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'sort', prompt:'¿Qué tipo de problema es este?', card:`«Nos cobraron una cuota que nunca aceptamos».`, zones:[{label:'🏢 Empresa y operaciones', fb:'¡Correcto! Reconócelo, no expliques el pago y repórtalo a Client Service en BO el mismo día.'},{label:'🧑‍🏫 La clase o el tutor', fb:'No exactamente. Nada de esto tiene que ver con la clase. La facturación se envía a Client Service.'},{label:'🔧 Técnico', fb:'No exactamente. Es una consulta de facturación, no una falla de la plataforma.'}], correctZone:0},
   {type:'sort', prompt:'¿Qué tipo de problema es este?', card:`«El tutor va demasiado rápido para mi hijo de 7 años y no comprueba si entendió».`, zones:[{label:'🏢 Empresa y operaciones', fb:'No exactamente. Esto tiene que ver con cómo se imparte la clase. Parte te corresponde resolverla.'},{label:'🧑‍🏫 La clase o el tutor', fb:'¡Correcto! Reduce el ritmo de los pasos, comprueba la comprensión desde la siguiente clase y deja un comentario en BO con lo que cambiaste.'},{label:'🔧 Técnico', fb:'No exactamente. No falló nada a nivel técnico; es el ritmo de la clase.'}], correctZone:1},
   {type:'choice', prompt:`Un padre dice: «Después de pasar a Premium nos quedan solo 19 clases: eso es una estafa». ¿Qué respondes?`, opts:[`«Así funciona el recálculo: las clases Premium cuestan más».`,`«Entiendo que esto es frustrante. Lo he pasado al equipo de Atención al Cliente, que los ayudará con este tema».`,`«Tiene razón, no suena justo. Les pediré que les devuelvan sus clases».`], correct:1, fb:`Reconoce sin explicar, dar la razón ni prometer. El recálculo lo explica Client Service; después repórtalo en BO e informa a tu Team Leader.`},
   {type:'choice', prompt:`¿Cuál es el reporte en BO más útil para una familia molesta por un cambio de grupo?`, opts:[`«Padre enojado otra vez. Problema de grupo».`,`«12/11, grupo [enlace de BO]. La madre escribió: 'Cambiaron a mi hijo a otro grupo sin avisarnos y ahora no quiere venir'. Lo reconocí y dije que el equipo de Atención al Cliente se pondrá en contacto con ella. Asistió a las 6 clases y le va bien».`,`«La familia se queja de todo, por favor encárguense».`], correct:1, fb:`Hechos, las palabras de la propia familia, lo que dijiste y el contexto de la clase. Neutral y completo, para que Client Service pueda actuar sin llamarte primero.`},
   {type:'sort', prompt:'¿Está bien o debes evitarlo?', card:`Un padre pregunta cuándo empezará el nuevo grupo. Respondes: «Probablemente en dos semanas».`, zones:[{label:'✅ Está bien', fb:'No exactamente. Una fecha supuesta se convierte en una promesa. Si no se cumple, la familia vuelve a perder la confianza.'},{label:'🚫 Evítalo', fb:'¡Correcto! No des fechas que no tengas. El equipo de Atención al Cliente los ayudará con la fecha de inicio; repórtalo en BO.'}], correctZone:1}
  ]
 }
},
{id:'angry', numLabel:'Módulo 4', emoji:'🌋', color:'var(--coral)',
 title:'Padres muy enojados o amenazantes',
 desc:'Qué hacer cuando un padre está furioso, amenaza o insulta, a veces sin una causa clara: mantener la calma, conservar los límites y el respeto, documentarlo y remitirlo a Client Service.',
 obj:'Mantener la serenidad ante un padre muy enojado, reconocer sin discutir ni prometer, establecer límites con calma cuando se pierde el respeto, remitir a la familia a Client Service y documentar el caso en BO el mismo día.',
 sections:[
  {t:'🌋 Cuando el enojo es mayor que el problema', html:`
   <div class="card"><p>A veces un padre llega furioso y no encuentras el motivo: las clases salieron bien y no ocurrió nada evidente. El enojo puede venir de una larga cadena de cosas que nunca viste: un cobro, una llamada que nadie devolvió, una mala semana. Tú simplemente eres la persona a quien puede alcanzar.</p></div>
   ${iconGrid([
     {ic:'🚫', html:`<strong>No es tu trabajo ganar la discusión</strong> ni demostrar que la familia está equivocada.`},
     {ic:'🙅', html:`<strong>No es tu trabajo absorber insultos</strong> ni amenazas.`},
     {ic:'✅', html:`<strong>Sí es tu trabajo</strong> mantener la calma y el respeto, conservar los límites, documentar lo ocurrido y pasárselo a Client Service.`}
   ])}
  `},
  {t:'🧘 Primero, regula tu propio estado', html:`
   <div class="card"><p>El enojo es contagioso, y la calma también. Antes de responder, cuida tu propio estado: es la primera herramienta que tienes.</p></div>
   ${iconGrid([
     {ic:'🌬️', html:`<strong>Respira antes de responder.</strong> Una pausa de un segundo evita que respondas por impulso.`},
     {ic:'🔉', html:`<strong>Baja la voz y habla más despacio</strong> en una llamada. Por escrito, usa frases cortas y neutrales.`},
     {ic:'⏱️', html:`<strong>¿Mensaje escrito?</strong> Respóndelo el mismo día, pero tómate unos minutos antes de escribir y nunca respondas con enojo.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>No estás solo.</strong> Informa pronto a tu Team Leader: no tienes que manejar a un padre amenazante por tu cuenta.`}
   ])}
  `},
  {t:'🪜 Qué hacer, paso a paso', html:`
   ${stepper([
     {ic:'🤝', title:'Reconoce el sentimiento', html:`<p>Demuestra que lo escuchaste, sin estar de acuerdo con las acusaciones.</p><p><em>«Veo que están muy molestos y quiero asegurarme de que esto llegue a las personas adecuadas».</em></p>`},
     {ic:'❓', title:'Si la causa no está clara, pregunta una sola vez', html:`<p>Una pregunta abierta: no adivines ni interrogues.</p><p><em>«¿Podrían contarme qué ocurrió para que pueda transmitirlo con precisión?»</em></p>`},
     {ic:'🧊', title:'No discutas, no te defiendas, no prometas', html:`<p>No corrijas su versión, no culpes a otros equipos ni a la plataforma, y no ofrezcas nada para calmarlos.</p>`},
     {ic:'📞', title:'Remítelos a Client Service', html:`<p>Allí están las respuestas y las opciones.</p><p><em>«El equipo de Atención al Cliente los ayudará con este tema; ya les pasé su mensaje».</em></p>`},
     {ic:'📝', title:'Docúmentalo el mismo día', html:`<p>Repórtalo en BO con las palabras exactas del padre, incluida cualquier amenaza, e informa a tu Team Leader el mismo día.</p>`}
   ])}
  `},
  {t:'🛑 Límites y respeto', html:`
   <div class="card"><p>El respeto funciona en ambas direcciones. Tú te mantienes respetuoso pase lo que pase, y puedes establecer un límite con calma cuando la conversación deja de ser respetuosa.</p></div>
   ${co('co-ok','🗣️',`<p><strong>Un límite que puedes expresar:</strong> <em>«Quiero ayudarlos y con gusto continuaré cuando podamos hablar con respeto. Pasé su mensaje al equipo de Atención al Cliente, que se pondrá en contacto con ustedes».</em> En una llamada, puedes terminarla con cortesía después de decir esto.</p>`)}
   ${doavoid(
     ['Mantén un tono calmado y neutral, incluso ante los insultos.','Ignora el contenido de una amenaza (un abogado, reseñas, redes sociales) y repórtala palabra por palabra.','Sigue tratando al niño con calidez: el niño nunca es responsable del enojo de su padre o madre.','Si un padre interrumpe la clase, sé breve: <em>«Me aseguraré de que su mensaje llegue a nuestro equipo después de la clase»</em>; luego continúa con los estudiantes.'],
     ['Responder con agresividad, sarcasmo o insultos.','Discutir en un chat grupal frente a otras familias.','Prometer un reembolso, una compensación o un cambio para calmarlos.','Hablar del conflicto frente a los estudiantes.']
   )}
   ${co('co-danger','🚨',`<p><strong>Las amenazas, los insultos o el acoso siempre se reportan</strong>: en BO, con las palabras exactas, y a tu Team Leader el mismo día. No decides por tu cuenta si sigues hablando con esa familia.</p>`)}
  `},
  {t:'💬 Practícalo', html:`
   ${chatMock({
     name:'Padre', sub:'en línea', avatar:'😠', time:'21:15',
     msgs:[`Esto es una ESTAFA. Nada funciona, nadie responde y mi hijo no ha aprendido nada. Si mañana no me devuelven TODO mi dinero, iré con un abogado y los denunciaré en todas partes.`],
     title:'¿Cómo respondes?',
     text:'Es tarde, el mensaje es agresivo y no hay una causa clara: tus clases han salido bien. Toca cada respuesta para ver qué sucede.',
     opts:[
      {t:`«No somos una estafa. Su hijo ha asistido a todas las clases y le va bien; por favor, verifiquen antes de acusarnos».`, ok:false, fb:`Defenderte lo convierte en una discusión y enoja más al padre. Aunque sea cierto, no te corresponde demostrar que está equivocado.`},
      {t:`«Lamento que se sientan así y quiero asegurarme de que su mensaje llegue a las personas adecuadas. Lo he pasado al equipo de Atención al Cliente, que los ayudará con este tema. Seguiré dando lo mejor de mí por [estudiante] en nuestras clases».`, ok:true, fb:`Tranquila, respetuosa y clara: reconoces el sentimiento, no discutes la acusación, no respondes a la amenaza y los remites a Client Service. Luego repórtalo en BO con las palabras exactas e informa a tu Team Leader.`},
      {t:`«¡Por favor, no hagan eso! Me aseguraré de que les devuelvan su dinero».`, ok:false, fb:`Un reembolso no te corresponde prometerlo. Si no ocurre exactamente como dijiste, el siguiente mensaje será aún más enojado.`},
      {t:`Lo dejo así: responder solo empeorará las cosas.`, reply:`<i>(sin respuesta…)</i>`, ok:false, fb:`El silencio confirma que «nadie responde». Reconócelo el mismo día, de manera breve y tranquila, y repórtalo.`}
     ]
   })}
  `}
 ],
 ix:{
  title:'Padres muy enojados — evaluación del módulo',
  instr:'Elige la mejor acción o clasifica cada respuesta. Necesitas un 70 % para desbloquear la lista de verificación final.',
  items:[
   {type:'choice', prompt:`Un padre llama gritando que «esta escuela es un desastre», pero no puedes saber qué ocurrió. ¿Qué haces primero?`, opts:[`Explicar todo lo que ha salido bien en las clases`,`Bajar la voz, reconocer lo molesto que está y preguntar una sola vez: «¿Podría contarme qué ocurrió para que pueda transmitirlo con precisión?»`,`Colgar: no tienes que escuchar esto`], correct:1, fb:`Regula tu propio estado, reconoce el sentimiento y haz una sola pregunta abierta. Luego remítelo a Client Service y documéntalo.`},
   {type:'sort', prompt:'¿Tesoro o basura? ¿Es una buena respuesta?', card:`«Quiero ayudarlo y con gusto continuaré cuando podamos hablar con respeto. Pasé su mensaje al equipo de Atención al Cliente».`, zones:[{label:'💎 Tesoro', fb:'¡Correcto! Un límite tranquilo que conserva el respeto y remite a Client Service.'},{label:'🗑️ Basura', fb:'No exactamente. Es un límite respetuoso, justo lo que puedes decir cuando una conversación deja de ser respetuosa.'}], correctZone:0},
   {type:'choice', prompt:`Un padre amenaza con publicar malas reseñas si no recibe un reembolso. ¿Qué haces con la amenaza?`, opts:[`Responder que las reseñas no cambiarán nada`,`Prometer pedir el reembolso para que no las publique`,`No responder a la amenaza: repórtala en BO palabra por palabra e informa a tu Team Leader el mismo día`], correct:2, fb:`No negocias con una amenaza ni discutes con ella. La documentas exactamente y dejas que tu Team Leader y Client Service se encarguen.`},
   {type:'sort', prompt:'¿Tesoro o basura? ¿Es una buena respuesta?', card:`En el chat grupal, frente a otras familias: «Su hijo es quien nunca presta atención, así que no me culpen a mí».`, zones:[{label:'💎 Tesoro', fb:'No exactamente. Culpa al niño, discute en público y escala el conflicto.'},{label:'🗑️ Basura', fb:'¡Correcto! Nunca discutas en un chat grupal ni culpes al niño. Reconoce brevemente y pásalo a Client Service y a tu Team Leader.'}], correctZone:1}
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
     'Mientras ayudo a un estudiante con un problema técnico, le doy al resto del grupo algo en lo que trabajar, para que nadie se quede esperando',
     'Ante facturación, pagos en cuotas, recálculos, saldos, cambios de grupo, retrasos en el inicio, soporte o promesas de ventas y la licencia de Minecraft, reconozco la situación: no explico, no me defiendo ni prometo.',
     'Reporto esos casos a Client Service en BO el mismo día (Tutors\' Evaluations → Evaluate The Student), con las palabras de la propia familia, e informo a mi Team Leader.',
     'Uso el canal correcto: el canal de ayuda para tutores para problemas técnicos; mi Team Leader y Operations para créditos y descuentos.',
     'Cuando el problema es la clase (ritmo, explicaciones, un grupo caótico, una clase perdida, necesidades especiales, cambios de tutor), corrijo mi parte desde la siguiente clase y de todos modos lo reporto.',
     'Con un padre muy enojado o amenazante, regulo mi propio estado, reconozco el sentimiento, pregunto una sola vez si la causa no está clara y lo remito a Client Service.',
     'Mantengo el respeto y establezco límites con calma; nunca discuto, respondo con agresividad ni prometo nada para calmar a un padre.',
     'Reporto las amenazas y los insultos palabra por palabra en BO e informo a mi Team Leader el mismo día, y sigo tratando al niño con calidez.'
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
