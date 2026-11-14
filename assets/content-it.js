/* Mini_Training_5_Handling_Content_Errors - Italian content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='it';
const CONTENT = {
  flag:'🇮🇹', dir:'ltr',
  ui:{
    heroCard1:"<b>Al tuo ritmo.</b> I tuoi progressi vengono salvati in questo browser.",
    heroCard2:"<b>Pratica inclusa.</b> Ogni modulo si chiude con una breve verifica.",
    pbLabel:'moduli completati',
    tapOpen:'Tocca per aprire',
    tapFlip:'Tocca per girare',
    lblSee:'Cosa vedi',
    lblDo:'Cosa fai',
    lblSay:'Cosa puoi dire',
    lblReport:'Dove segnalarlo',
    lblAvoid:'Da evitare',
    lblTip:'Consiglio',
    stepOf:'Passo {i} di {n}',
    next:'Avanti',
    pageTitle:"Mini-Training · Gestire gli errori in classe — Formazione Tutor Kodland",
    logoSub:'Dipartimento Sviluppo Tutor',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Tenere salda la lezione anche davanti agli <span class=\"h-pill\">errori</span>",
    heroIntro:"Stai vedendo questo perché una famiglia ha inviato una richiesta di rimborso molto negativa: una lezione che è sembrata piena di errori, un problema con il servizio dell’azienda o molta rabbia senza una causa chiara. Qui ti mostreremo cosa spetta a te risolvere, cosa segnalare al Servizio Clienti e come gestire la situazione con calma.",
    heroWork:"Completa 6 brevi moduli. Per sbloccare il modulo successivo, devi ottenere almeno il 70% nella verifica di ciascun modulo. Durata totale: circa 40–45 minuti.",
    startBtn:"🚀 Inizia la formazione",
    pathLabel:'Il tuo percorso di apprendimento',
    devTitle:'Dev: sblocca tutti i moduli per la revisione',
    backToPath:'Torna al percorso',
    modulesPassed:'{done} / {total} moduli superati',
    moduleN:'Modulo {n}',
    of:'di',
    locked:'🔒 Bloccato',
    passedBadge:'✅ Superato · {pct}%',
    reviewedBadge:'✅ Rivisto',
    startBadge:'▶ Inizia',
    reviewBadge:'▶ Rivedi',
    objective:'Obiettivo',
    startCheck:'▶ Inizia la verifica del modulo',
    finishBtn:'▶ Concludi il mini-training',
    doneBack:'✓ Fatto — torna al percorso',
    ixBadge:'📋 Verifica del modulo — 70% per sbloccare il modulo successivo',
    ixItemBadge:'📋 Verifica del modulo — domanda {i} di {n}',
    scoreSoFar:'Punteggio finora: {c} / {t}',
    continue:'Continua →',
    sortWrong:'Non proprio — la risposta giusta è “{label}”.',
    resPassed:'Modulo superato!',
    resFailed:'Non ci sei ancora',
    resUnlocked:"Hai sbloccato il modulo successivo.",
    resDone:"Hai completato questo mini-training.",
    resNeed:'Ti serve il 70% per sbloccare il modulo successivo. Rileggi la sezione qui sopra e riprova la verifica.',
    resContinue:'Continua il percorso di apprendimento',
    resFinish:'Continua',
    resBack:'Torna al percorso',
    resReview:'Rivedi questo modulo',
    doneEyebrow:'Mini-Training completato',
    doneTitle:'🎉 Congratulazioni!',
    doneP1:"🎉 <strong>Congratulazioni! Hai completato questo mini-training.</strong>",
    doneP2:"Qui hai finito! Torna alla pagina della formazione nell’LMS da cui hai aperto questo mini-training per chiudere l’attività.",
    doneP3:"👉 <strong>Se nell’LMS, subito sotto la formazione, compare una verifica o un test, assicurati di completarlo e di ottenere il punteggio minimo richiesto</strong> — altrimenti l’attività potrebbe risultare incompleta.",
    doneP4:'In bocca al lupo! ❤️',
    doneP5:'',
    devUnlockAlert:'Modalità dev: ora tutti i moduli sono sbloccati per la revisione.',
    devOn:'🔓 Modalità dev ATTIVA — tutti i moduli sbloccati',
    devOff:'🔒 Modalità dev DISATTIVATA — progressi cancellati',
    devBadge:'🔓 MODALITÀ DEV',
    doLabel:'✅ Da fare',
    avoidLabel:'🚫 Da evitare',
    noticeLabel:'Nota:',
    cvSee:'Cosa vedi:',
    cvDo:'Cosa fai:',
    dtExample:'Esempio da una lezione reale',
    dtNext:'Avanti:',
    dtDone:"✅ Ecco tutte e quattro le aree. Ora classifica ciò che vedi.",
    tlVideoTitle:'{label} — un esempio da una lezione reale',
    tlVideoMeta:'Guarda come si presenta questa fase in una lezione reale'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduzione', emoji:'🧩', color:'var(--coral)',
 title:'Perché sei qui',
 desc:'Perché una lezione piena di errori sembra caotica, cos’altro c’è di solito dietro una famiglia molto negativa e le regole che valgono quando è già arrivata una richiesta di rimborso.',
 obj:'Comprendere le principali cause dietro una famiglia molto negativa (errori nella lezione, problemi operativi, problemi legati alla lezione o al tutor e genitori molto arrabbiati) e sapere esattamente cosa fare (e cosa non fare) quando esiste già una richiesta di rimborso.',
 sections:[
  {t:'😤 Quando una lezione sembra una serie di errori', html:`
   <div class="card"><p>Una lezione piena di errori — dello studente, del materiale o che spuntano a metà spiegazione — può diventare caotica in fretta se non hai un piano per gestirli. Le famiglie se ne accorgono subito: lo percepiscono come “la lezione non funziona”, anche quando la causa si risolve in pochi minuti.</p></div>
   ${co('co-idea','💡',`<p><strong>Quasi sempre si può prevenire.</strong> Una lezione ben preparata, un modo chiaro di spiegare e sapere come segnalare un vero errore nei contenuti evitano che i piccoli sbagli trasformino la lezione in qualcosa di fuori controllo.</p>`)}
  `},
  {t:'🧭 Una famiglia molto negativa: cosa c’è di solito dietro', html:`
   <div class="card"><p>Gli errori nella lezione sono solo una parte del quadro. Quando una famiglia è molto negativa, la causa è spesso fuori dalla lezione, e devi comunque sapere cosa farne:</p></div>
   ${iconGrid([
     {ic:'🐞', html:`<strong>Una lezione che è sembrata piena di errori</strong>: preparazione, spiegazioni, contenuti o problemi tecnici. <em>Moduli 1 e 2.</em>`},
     {ic:'🏢', html:`<strong>Problemi dell’azienda e operativi</strong>: fatturazione, rate, saldi, cambi di gruppo, ritardi di avvio, supporto che non risponde, promesse delle vendite, la licenza di Minecraft. <em>Modulo 3.</em>`},
     {ic:'🧑‍🏫', html:`<strong>La lezione o il tutor</strong>: ritmo, spiegazioni, un gruppo caotico, una lezione saltata, connessione, bisogni speciali, troppi cambi di tutor. <em>Modulo 3.</em>`},
     {ic:'🌋', html:`<strong>Un genitore molto arrabbiato o minaccioso</strong>, a volte senza una causa chiara. <em>Modulo 4.</em>`}
   ])}
   ${co('co-ok','✅',`<p><strong>Cosa spetta a te in ogni caso:</strong> sistemare ciò che riguarda la tua lezione, segnalare il resto al Servizio Clienti lo stesso giorno e restare calmo e rispettoso, qualunque sia il tono della famiglia.</p>`)}
  `},
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   <div class="card"><p>Tutto quello che hai letto sopra serve ad accorgertene in tempo. Ma potresti aprire questa formazione perché una famiglia ha <strong>già</strong> chiesto un rimborso. Le regole qui sotto valgono qualunque sia il motivo: leggile per prime, poi usa il resto della formazione per capire cosa ha portato fin qui e cosa puoi ancora fare a lezione.</p></div>
   ${co('co-idea','💡',`<p><strong>La richiesta viene creata dal Client Service, non da te</strong> — quella parte non dipende da te. Ma tutto ciò che succede a lezione da questo momento in poi è ancora nelle tue mani, e non è poco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Non dire nulla sulla richiesta</strong> — né allo studente né alla famiglia — a meno che il Client Service non ti chieda esplicitamente di comunicare qualcosa di preciso. Ora il tuo compito è la lezione, non quella conversazione.</p>`)}
  `},
  {t:'🎯 La prossima lezione è il tuo tentativo di recupero', html:`
   <div class="card"><p>Potresti non avere altre occasioni per cambiare le cose. Considera la prossima lezione con questo studente come il momento decisivo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dagli un vero spazio da protagonista.</strong> Non una domanda di circostanza, ma un momento autentico in cui si senta visto e ce la faccia.`},
     {ic:'🏆', html:`<strong>Prevedi un successo rapido e ben visibile.</strong> Deve uscire dalla lezione sentendosi capace, non indietro.`},
     {ic:'👀', html:`<strong>Attenzione specifica</strong> — fallo sentire notato per qualcosa di concreto, non con lodi generiche.`},
     {ic:'🤐', html:`<strong>Nessun accenno alla richiesta</strong> — anche se è lo studente a tirarla fuori, cambia argomento con gentilezza e continua a insegnare.`}
   ])}
  `},
  {t:'📮 Avvisa subito e conosci l’unica frase sicura', html:`
   <div class="card"><p>Puoi scoprire che esiste una richiesta dai commenti del Client Service nel profilo dello studente in BO: non c’è un sistema automatico che ti avvisa. Una volta che lo sai, quello che hai visto nelle tue lezioni è un’informazione che il Client Service non può avere in nessun altro modo.</p></div>
   ${numlist([
     'Lascia un commento in BO il giorno stesso riportando esattamente ciò che hai visto — date e dettagli, non impressioni',
     'Riporta le parole esatte della famiglia, testuali, se le hai',
     'Coinvolgi il tuo Team Leader il giorno stesso',
     'Non confermare mai che un rimborso è stato approvato e non parlare mai di cifre'
   ])}
   ${co('co-ok','✅',`<p><strong>La frase che puoi dire sempre senza rischi:</strong> <em>“Il Client Service vi aiuterà con questo.”</em> Lì finisce la tua parte della conversazione: da quel momento se ne occupa il Client Service.</p>`)}
  `},
  {t:'🌱 Continua anche dopo', html:`
   <div class="card"><p>Che la richiesta venga ritirata, che lo studente resti nel tuo gruppo o che passi a un altro tutor o formato, continua a dedicargli un’attenzione in più per le lezioni successive. Un recupero che regge per una sola lezione e poi torna piano piano alla normalità spesso non regge affatto.</p></div>
  `}
 ]
},
{id:'manual', numLabel:'Modulo 1', emoji:'📘', color:'var(--coral)',
 title:'Usare il manuale e spiegare bene',
 desc:'Cosa ti offre già il manuale, perché studiarlo il giorno prima previene la maggior parte dei problemi e le due strategie didattiche — modelling e scaffolding — che aiutano un concetto ad arrivare subito.',
 obj:'Usare in modo efficace gli obiettivi e le frasi suggerite del manuale, sapere a chi chiedere aiuto prima di una lezione e applicare modelling e scaffolding per spiegare i nuovi concetti in modo più chiaro.',
 sections:[
  {t:'📘 Cosa ti offre già il manuale', html:`
   <div class="card"><p>Ogni manuale si apre con gli obiettivi della lezione e i risultati attesi: è lì che devi concentrare la tua attenzione, non solo sulla sequenza dei passaggi. Contiene anche frasi suggerite per spiegare ogni concetto, scritte da persone che hanno riflettuto con cura su come introdurlo.</p></div>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image1.png" alt="Un manuale di lezione con gli obiettivi e i risultati didattici della lezione"><figcaption>📌 All’inizio di ogni manuale trovi gli obiettivi di apprendimento della lezione e ciò che gli studenti dovrebbero raggiungere o imparare entro la fine.</figcaption></figure>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image2.png" alt="Una pagina del manuale di lezione con una frase suggerita per il tutor"><figcaption>💬 Se non sai bene come gestire un passaggio, introdurre un argomento o un’attività, o anche spiegarlo, il manuale include frasi guida che possono aiutarti a capire come dirlo.</figcaption></figure>
  `},
  {t:'⏳ Il giorno prima, non l’ora prima', html:`
   ${co('co-idea','💡',`<p><strong>Studia la lezione e provala il giorno prima</strong> — non un’ora prima e nemmeno mezz’ora prima. Quel margine ti dà il tempo di accorgerti se un codice non funziona più, di materiale che non si carica o di un’attività che nemmeno tu hai ancora capito fino in fondo.</p>`)}
   ${co('co-star','⭐',`<p>Se trovi una lacuna, chiedi a un mentor, al tuo Team Leader o agli altri tutor nel canale Slack del tuo corso. Chiedere aiuto lì, il giorno prima, è proprio ciò che evita che i problemi si presentino dal vivo, davanti allo studente.</p>`)}
  `},
  {t:'🧑‍🏫 Cosa aiuta davvero a trasmettere un concetto', html:`
   <div class="card"><p>Il modo in cui spieghi qualcosa conta quanto spiegarlo correttamente. Un concetto introdotto con chiarezza fin dalla prima volta previene la maggior parte degli errori dovuti alla confusione.</p></div>
  `},
  {t:'🎬 Modelling: mostralo prima che ci provino', html:`
   <div class="card"><p><strong>Modelling</strong> significa mostrare tu per primo la tecnica, sul tuo schermo, prima che lo studente ci provi. Mentre lo fai, ragiona ad alta voce: spesso il ragionamento vale più del risultato.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Modelling, passo dopo passo</div><div class="vslot-meta">Esempio da una lezione reale</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1IgaGbg64ClvTs1DgnOXMhp_IPFtgCGfM/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">In questo video vedrai come il tutor spiega il compito passo dopo passo, con istruzioni brevi e semplici.</div></div>
  `},
  {t:'🪜 Scaffolding: un supporto che si riduce gradualmente', html:`
   <div class="card"><p><strong>Scaffolding</strong> significa dare più supporto all’inizio di un nuovo concetto — un modello da seguire, passaggi guidati, lavorare insieme allo studente — e poi ridurlo di proposito man mano che prende sicurezza, finché non riesce a farlo in autonomia.</p></div>
   ${co('co-idea','💡',`<p>L’errore da evitare è l’opposto: un supporto totale per sempre (lo studente non diventa mai autonomo) oppure nessun supporto fin dall’inizio (incontra errori che non ha gli strumenti per risolvere e la lezione comincia a sembrare caotica).</p>`)}
  `}
 ],
 ix:{
  title:'Usare il manuale e spiegare bene — verifica del modulo',
  instr:'70% per sbloccare il modulo successivo.',
  items:[
   {type:'choice', prompt:'Su cosa dovresti concentrarti per prima cosa quando apri il manuale di una nuova lezione?', opts:['Solo sui passaggi esatti, in ordine','Sui compiti per la volta successiva','Sugli obiettivi e sui risultati attesi'], correct:2, fb:'Gli obiettivi ti dicono a cosa serve davvero la lezione: i passaggi sono solo un modo per arrivarci.'},
   {type:'choice', prompt:'Quando dovresti studiare e provare una lezione?', opts:['Il giorno prima, non l’ora prima','Subito prima della lezione, così è fresca','Solo se è un argomento che non hai mai insegnato'], correct:0, fb:'Un giorno intero di margine ti dà il tempo di sistemare davvero qualsiasi problema trovi.'},
   {type:'choice', prompt:'Cosa significa “modelling” in una lezione?', opts:['Mostrare un esempio finito, senza spiegare come è stato fatto','Mostrare tu stesso la tecnica, ragionando ad alta voce, prima che lo studente ci provi','Far provare prima lo studente e poi correggerlo'], correct:1, fb:'Modelling significa mostrarlo per primo — compreso il tuo ragionamento — prima che ci provino loro.'},
   {type:'sort', prompt:'Questo scaffolding è fatto bene?', card:'Settimana 1: dai allo studente un modello da seguire e passaggi guidati. Settimana 3: gli dai solo l’obiettivo e lo lasci costruire da solo.', zones:[{label:'✅ Sì — questo è scaffolding', fb:'Esatto — il supporto all’inizio è alto e viene ridotto di proposito man mano che lo studente diventa autonomo.'},{label:'❌ No — il supporto dovrebbe restare uguale', fb:'Non proprio — mantenere sempre un supporto totale impedisce allo studente di diventare autonomo. Il punto è proprio ridurlo gradualmente.'}], correctZone:0}
  ]
 }
},
{id:'contenterrors', numLabel:'Modulo 2', emoji:'🐞', color:'var(--coral)',
 title:'Errori nei contenuti e problemi tecnici',
 desc:'Cosa fare quando è il materiale stesso a essere sbagliato o quando la tecnologia si blocca: come mantenere la calma in classe, segnalarlo correttamente in BO e risolvere il problema senza perdere il resto del gruppo.',
 obj:'Gestire un vero errore di contenuto o di traduzione senza che faccia deragliare la lezione, sapere esattamente come segnalarlo in BO e applicare ai guasti tecnici la logica risolvi in fretta / comunica / documenta / segnala.',
 sections:[
  {t:'🐞 A volte il problema è il materiale', html:`
   <div class="card"><p>A volte una lezione diventa caotica non per colpa dello studente, ma per un vero errore nel contenuto o nella sua traduzione: un pezzo di codice che non funziona, un’istruzione che non corrisponde allo strumento, un termine tradotto male. Ecco le situazioni più comuni e come potresti reagire:</p></div>
   ${iconGrid([
     {ic:'🐛', html:`<strong>Uno studente nota che qualcosa è tradotto male o scritto in modo errato.</strong> Cosa fare: dillo ad alta voce, con naturalezza, e trasformalo in qualcosa da risolvere insieme invece che in qualcosa che è andato storto. Esempio: <em>“Ottima osservazione! Sembra che in questa riga ci sia un errore di battitura: vediamo insieme cosa dovrebbe esserci scritto.”</em>`},
     {ic:'💻', html:`<strong>Uno studente si accorge che il codice non funziona per un errore di scrittura o di battitura.</strong> Esempio: <em>“Bravissimo, qualcuno ha trovato l’errore nascosto! Volevo proprio vedere se qualcuno se ne sarebbe accorto.”</em>`},
     {ic:'🖼️', html:`<strong>Alcune immagini mancano o non si caricano.</strong> Esempio: <em>“Probabilmente è solo un problema della piattaforma, non preoccuparti: ho qui le slide, così puoi vederle lo stesso.”</em> Oppure: <em>“Tranquilli, sono cose che capitano, e da programmatori vi succederà spesso: per ora guardate il mio schermo.”</em>`}
   ])}
  `},
  {t:'💛 Reagire agli errori con calma', html:`
   <div class="card"><p>Un errore nei contenuti è un piccolo momento che può andare in due direzioni: un intoppo passeggero che la classe nota appena, oppure una crepa nella fiducia dello studente in sé stesso. A decidere quale delle due non è l’errore in sé, ma come reagisci nei primi secondi. Dirlo ad alta voce, senza imbarazzo e senza dare colpe, fa capire agli studenti che gli errori sono una parte normale e prevista dell’imparare a programmare, e mostra proprio l’atteggiamento che vuoi che abbiano con i loro bug: accorgersene, restare curiosi, sistemarlo, andare avanti.</p></div>
   ${co('co-ok','✅',`<p><strong>Dì così:</strong> <em>“Bella osservazione, è un errore del materiale, non tuo: troviamo insieme un modo per aggirarlo.”</em> Sposta l’attenzione sulla ricerca di una soluzione come squadra e vai avanti.</p>`)}
   ${co('co-danger','⛔',`<p><strong>Evita:</strong> di fare dell’errore un dramma, di dare la colpa alla piattaforma ad alta voce in un modo che mina la fiducia nel corso, o di dedicarci così tanto tempo da penalizzare il resto della lezione.</p>`)}
  `},
  {t:'🖥️ Trovare il materiale — e segnalare gli errori — in BO', html:`
   <div class="card"><p>Il manuale e la presentazione di ogni lezione si trovano in BackOffice (BO), collegati alla scheda esatta del corso da cui insegni. Nello stesso punto segnali un errore nei contenuti, con l’icona 🐞 sulla riga della lezione. La simulazione qui sotto ti guida passo dopo passo.</p></div>
   ${co('co-danger','🚨',`<p><strong>Controlla sempre che l’ID del corso che apri corrisponda a quello a cui sono iscritti i tuoi studenti.</strong> In BO ci sono corsi simili uno accanto all’altro: insegnare da quello sbagliato può rendere una lezione caotica in pochi secondi.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Materiale del corso ed errori nei contenuti</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Materiale del corso ed errori nei contenuti" loading="lazy"></iframe></div></div>
   ${co('co-star','⭐',`<p>Segnalare un errore non sistema solo la tua lezione: lo sistema per tutti i gruppi che useranno lo stesso materiale dopo di te.</p>`)}
  `},
  {t:'🔧 Quando il problema è tecnico: il protocollo', html:`
   <div class="card"><p>A volte la serie di errori in una lezione è di natura tecnica: uno schermo bloccato, uno strumento che non si carica, una connessione che continua a cadere. I problemi tecnici sono normali e possono capitare sia ai tutor sia agli studenti: l’importante è che non degenerino.</p></div>
   ${co('co-idea','💡',`<p><strong>La regola d’oro.</strong> Se non riesci a risolverlo da solo entro <strong>10 minuti</strong>, smetti di provarci in silenzio. <strong>Comunica → documenta → segnala.</strong> Un genitore che sa cosa sta succedendo si fida di te. Un genitore che non lo sa, disdice.</p>`)}
   ${stepFlow([
     {ic:'⏱️', label:'Prima volta in una lezione: prova a risolverlo per massimo 10 minuti'},
     {ic:'👩‍💼', label:'Ancora non funziona? Avvisa il tuo Team Leader il giorno stesso: deciderà lui come recuperare la lezione'},
     {ic:'💬', label:'Scrivi al genitore entro 30 minuti, con calore: hai segnalato il problema al tuo team'},
     {ic:'🎫', label:'Seconda lezione di fila? Apri un ticket al Client Service il giorno stesso'},
     {ic:'✅', label:'Una volta risolto: avvisa il genitore e chiudi la questione'}
   ])}
  `},
  {t:'🧑‍💻 Evitare problemi tecnici dalla tua parte', html:`
   <div class="card"><p>Un problema tecnico del tutor può bloccare una lezione tanto quanto quello di uno studente. La maggior parte si può individuare prima ancora che la lezione inizi.</p></div>
   ${iconGrid([
    {ic:'🔌', html:`<strong>Fai una prova 30 minuti prima.</strong> Controlla connessione internet, videocamera e microfono prima di ogni lezione. Se noti un problema, avvisa il tuo Team Leader.`},
    {ic:'📷', html:`<strong>Cerca alternative.</strong> Se spegnere la videocamera migliora la connessione, fallo.`},
    {ic:'🎙️', html:`<strong>Tieni un microfono di riserva.</strong> Se le cuffie non funzionano, prova un’altra soluzione, come l’audio integrato del computer, e attiva sempre la riduzione del rumore di fondo in Classroom.`},
    {ic:'📶', html:`<strong>Controlla i driver e verifica se hai una VPN attiva</strong>: le VPN tendono a rallentare la connessione.`},
    {ic:'🧊', html:`<strong>Lavori con uno strumento pesante come Blender?</strong> Nelle prime lezioni il corso include una guida su come configurarlo per avere prestazioni migliori.`},
    {ic:'💻', html:`<strong>Libera la RAM prima della lezione.</strong> Google Chrome offre la migliore esperienza con Classroom, ma tende anche a usare molta RAM: chiudi le schede e i programmi che non ti servono in quel momento.`},
    {ic:'👂', html:`<strong>Verifica dal vivo.</strong> Prima che la lezione inizi, chiedi agli studenti se ti vedono e ti sentono bene: così individui subito eventuali problemi tecnici.`}
   ])}
  `},
  {t:'🎓 Aiutare gli studenti con i problemi tecnici', html:`
   <div class="card"><p>Spesso i problemi tecnici che gli studenti incontrano a lezione dipendono dal fatto che usano un browser diverso da Google Chrome o dispositivi non adatti al corso, ad esempio quando provano a seguire la lezione da tablet, cellulare o iPad. Per questo è importante che tu conosca i requisiti minimi, così puoi aiutarli.</p></div>
   ${doavoid(
    ["Google Chrome aggiornato — l’unico browser pienamente compatibile",
     "Almeno 4 GB di RAM (8 GB per Blender o Unity)",
     "Una connessione stabile, di almeno 10 Mbps — quando possibile, il cavo è meglio del Wi-Fi",
     "Almeno 5 GB di spazio libero — Unity e Blender ne richiedono molto di più"],
    ["Safari — bug noti con la piattaforma Kodland dall’ultimo aggiornamento: pulsanti che non rispondono, schermate che non si caricano, errori all’accesso",
     "Tablet / iPad per corsi come Roblox Studio o Unity — serve un vero computer",
     "Scambiare un problema del Mac per scarso coinvolgimento prima di aver verificato se si tratta semplicemente di Safari"]
   )}
   ${co('co-idea','🍎',`<p>Fai particolare attenzione alla combinazione Mac + Safari. Se uno studente con il Mac non riesce a far funzionare i pulsanti o la schermata non si carica, la soluzione è quasi sempre: aprire la lezione con Google Chrome. Indirizza le famiglie a google.com/chrome.</p>`)}
  `},
  {t:'⚖️ Senza abbandonare il resto della classe', html:`
   <div class="card"><p>Il vero errore non è solo il problema tecnico in sé, ma un tutor così concentrato sul problema di un singolo studente che il resto del gruppo perde cinque o dieci minuti di lezione.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Datti un limite di tempo.</strong> Prova una soluzione rapida con lo studente interessato (passare a Chrome, aggiornare la pagina, riavviare), poi fai proseguire il gruppo e riprendi con quello studente tra un’attività e l’altra o dopo la lezione.`},
     {ic:'👥', html:`<strong>Dai al gruppo qualcosa da fare</strong> appena inizi a risolvere il problema: non lasciarli a fissare uno schermo fermo.`},
     {ic:'🫂', html:`<strong>Mantieni la calma, anche a voce.</strong> Un tranquillo “a volte succede, troviamo un’alternativa” mantiene la classe serena mentre sistemi le cose.`},
     {ic:'📝', html:`<strong>Lascia traccia.</strong> Se un dispositivo continua a causare lo stesso problema, avvisa la famiglia, lascia un commento in BO e coinvolgi il tuo Team Leader, invece di risolverlo di nuovo a ogni lezione.`}
   ])}
  `}
 ],
 ix:{
  title:'Errori nei contenuti e problemi tecnici — verifica del modulo',
  instr:'Serve il 70% per sbloccare il modulo successivo.',
  items:[
   {type:'choice', prompt:'Uno studente trova un vero bug nel codice di esempio della lezione. Qual è la prima cosa che fai in classe?', opts:['Salti l’attività senza spiegazioni, per risparmiare tempo','Lo dici con calma e lo trasformi in un momento “risolviamolo insieme”','Dici al gruppo che la piattaforma è sempre piena di errori'], correct:1, fb:'Con calma e collaborazione la lezione non diventa caotica — e mostri come si affrontano i bug.'},
   {type:'sort', prompt:'Errore nei contenuti o problema tecnico?', card:'Una riga del codice iniziale della lezione contiene un errore di battitura e genera un errore prima che qualcuno abbia modificato qualcosa.', zones:[{label:'🔧 Problema tecnico → segui il protocollo', fb:'Non proprio — è il codice stesso a essere sbagliato, per tutti. Si tratta di un errore nei contenuti: aggiralo con calma e segnalalo con l’icona 🐞 in BO.'},{label:'🐞 Errore nei contenuti → segnalalo in BO', fb:'Esatto — è il materiale stesso a essere sbagliato. Aggiralo con calma, poi segnalalo con l’icona 🐞 così viene corretto per tutti i gruppi.'}], correctZone:1},
   {type:'sort', prompt:'Errore nei contenuti o problema tecnico?', card:'Lo schermo di uno studente continua a bloccarsi e il suo audio salta di continuo durante la lezione.', zones:[{label:'🔧 Problema tecnico → segui il protocollo', fb:'Esatto — prova una soluzione rapida, fai lavorare il gruppo e, se si ripete, comunica, documenta e segnala.'},{label:'🐞 Errore nei contenuti → segnalalo in BO', fb:'Non proprio — il materiale non ha nessun problema. Uno schermo bloccato e un audio che salta sono problemi tecnici: segui il protocollo.'}], correctZone:0},
   {type:'choice', prompt:'Dove segnali un errore nei contenuti in BO?', opts:['In un messaggio alla famiglia dello studente','Nella scheda Check del gruppo','Con l’icona 🐞 sulla riga della lezione, nella scheda del corso'], correct:2, fb:'L’icona 🐞 su ogni riga della lezione apre il questionario sulla qualità dei contenuti: è così che il materiale viene corretto.'},
   {type:'choice', prompt:'Lo stesso problema tecnico si presenta per la seconda lezione di fila. Cosa cambia?', opts:['Apri un ticket al Client Service il giorno stesso','Niente — continui a provare a risolverlo da solo','Aspetti un’altra lezione per essere sicuro che si ripeta'], correct:0, fb:'Se si ripete, è il momento di segnalarlo al Client Service — e di far sapere al genitore che qualcuno lo ricontatterà.'}
  ]
 }
},
{id:'operations', numLabel:'Modulo 3', emoji:'🏢', color:'var(--coral)',
 title:'Problemi dell’azienda e della lezione: come segnalarli nel modo giusto',
 desc:'Cosa fare quando una famiglia è contrariata per fatturazione, saldi, gruppi, date di inizio, supporto o promesse delle vendite, oppure per la lezione stessa, e come contattare il Servizio Clienti con una segnalazione in BO.',
 obj:'Distinguere ciò che spetta a te risolvere da ciò che spetta a te segnalare, rispondere alle lamentele operative senza spiegare, difendersi né promettere, correggere i problemi di lezione che ti competono e segnalare ogni caso al Servizio Clienti nel BO lo stesso giorno.',
 sections:[
  {t:'🧭 Lo risolvi tu o lo segnali?', html:`
   <div class="card"><p>Una famiglia molto negativa raramente si lamenta di una sola cosa. Spesso la rabbia riguarda l’azienda (un addebito, un saldo, un gruppo cambiato) e tu sei semplicemente la persona che vedono ogni settimana. Prima di rispondere, chiediti di che tipo di problema si tratta:</p></div>
   ${patternCards([
     {ic:'🏢', title:'Azienda e operazioni', desc:'Fatturazione, rate, saldi, gruppi, date di inizio, supporto, ciò che hanno promesso le vendite, licenze.', note:'<strong>Non spetta a te risolverlo né spiegarlo.</strong> Riconosci la situazione, segnalalo al Servizio Clienti nel BO e informa il tuo Team Leader.'},
     {ic:'🧑‍🏫', title:'La lezione o il tutor', desc:'Ritmo, spiegazioni, un gruppo caotico, una lezione saltata, connessione, bisogni speciali, cambi di tutor.', note:'<strong>Spetta a te in parte.</strong> Correggi ciò che puoi già dalla lezione successiva e segnalalo.'},
     {ic:'🔧', title:'Tecnico', desc:'Classroom, la piattaforma, gli strumenti del corso, il dispositivo di uno studente.', note:'<strong>Segui il protocollo</strong> del Modulo 2: 10 minuti, poi comunicare, documentare, fare escalation.'}
   ],3)}
  `},
  {t:'🏢 Problemi operativi e dell’azienda: cosa fai e cosa dici', html:`
   <div class="card"><p>Tocca ogni problema. Lo schema è sempre lo stesso: <strong>riconosci, non spiegare, non promettere, segnala lo stesso giorno.</strong> Non hai il quadro completo dei pagamenti, del contratto o della conversazione commerciale di una famiglia, e un’ipotesi in buona fede può trasformarsi in una promessa che l’azienda non può mantenere.</p></div>
   ${symCards([
     {ic:'💳', title:'Fatturazione e rate',
      see:`Un addebito inatteso, una rata di cui la famiglia non era a conoscenza, un pagamento che ritengono già effettuato.`,
      do:`Annota esattamente ciò che dice la famiglia e segnalalo al Servizio Clienti nel BO lo stesso giorno.`,
      say:`<em>«Capisco che questo sia preoccupante. Ho inoltrato la questione al Servizio Clienti, che vi aiuterà.»</em>`,
      rep:`Servizio Clienti (segnalazione in BO) + Team Leader + commento in BO.`,
      avoid:`Spiegare come funzionano i pagamenti o dire se un addebito è corretto.`},
     {ic:'🔄', title:'Ricalcolo dopo il passaggio a Premium o a un altro formato',
      see:`La famiglia è passata a Premium, a lezioni individuali o a un altro formato ed è insoddisfatta del numero di lezioni che ha ora.`,
      do:`Non commentare i numeri. Segnalalo al Servizio Clienti nel BO, con le parole della famiglia.`,
      say:`<em>«Il Servizio Clienti vi aiuterà su questo.»</em>`,
      rep:`Servizio Clienti (segnalazione in BO) + Team Leader + commento in BO.`,
      avoid:`Calcolare le lezioni da solo o dare ragione sul fatto che sia ingiusto.`},
     {ic:'🎟️', title:'Saldo contestato',
      see:`«Dovremmo avere più lezioni.» «È stata scalata una lezione che non c’è stata.»`,
      do:`Controlla la presenza che hai registrato in BO, poi passalo lo stesso giorno al tuo Team Leader e al Servizio Clienti: Operations verifica saldi e scalature.`,
      say:`<em>«Grazie per avermelo detto. L’ho condiviso con il mio team perché venga verificato.»</em>`,
      rep:`Team Leader + Servizio Clienti + commento in BO (Operations / Client Service: @Erika Ietro, @Katarzyna Traczyk).`,
      avoid:`Promettere che le lezioni verranno restituite o dire che il saldo è giusto o sbagliato.`},
     {ic:'👥', title:'Cambi di gruppo o gruppo che si scioglie',
      see:`Il gruppo è stato spostato, unito o chiuso e il bambino ha perso compagni, un tutor o un orario familiare.`,
      do:`Fai in modo che la prima lezione nella nuova situazione sia accogliente. Segnala le preoccupazioni della famiglia al Servizio Clienti nel BO.`,
      say:`<em>«Capisco che il cambiamento non sia facile. L’ho condiviso con il mio team perché vi contatti.»</em>`,
      rep:`Servizio Clienti (segnalazione in BO) + Team Leader + commento in BO.`,
      avoid:`Spiegare perché il gruppo è cambiato o promettere che tornerà il vecchio gruppo.`},
     {ic:'⏳', title:'Ritardi di avvio',
      see:`La famiglia aspetta l’apertura di un gruppo, oppure la data di inizio è cambiata.`,
      do:`Non dare date che non hai. Segnalalo al Servizio Clienti nel BO.`,
      say:`<em>«Capisco che l’attesa sia frustrante. Il Servizio Clienti vi aiuterà con la data di inizio.»</em>`,
      rep:`Servizio Clienti (segnalazione in BO) + Team Leader + commento in BO.`,
      avoid:`Indovinare una data di inizio o dare la colpa a un altro team.`},
     {ic:'📞', title:'«Il supporto non risponde»',
      see:`La famiglia dice che nessuno risponde ai suoi messaggi o alle sue chiamate.`,
      do:`Riconoscilo: quella frustrazione è reale. Segnalalo lo stesso giorno, così il Servizio Clienti sa che la famiglia sta aspettando.`,
      say:`<em>«Mi dispiace che non abbiate ricevuto risposta. L’ho segnalato oggi in modo che il Servizio Clienti vi risponda.»</em>`,
      rep:`Servizio Clienti (segnalazione in BO) + Team Leader + commento in BO.`,
      avoid:`Dire «non rispondono mai» o criticare il team: conferma la peggiore paura della famiglia.`},
     {ic:'🗣️', title:'«Le vendite ci avevano promesso altro»',
      see:`Gruppi più piccoli, un altro corso, un livello, un prezzo o un risultato che «ci era stato promesso».`,
      do:`Annota alla lettera le parole della famiglia e segnalale. Durante la lezione, concentrati su ciò che puoi fare per il bambino.`,
      say:`<em>«Grazie per avermelo detto. L’ho condiviso con il mio team e il Servizio Clienti vi contatterà in merito.»</em>`,
      rep:`Servizio Clienti (segnalazione in BO) + Team Leader + commento in BO.`,
      avoid:`Confermare o smentire ciò che hanno detto le vendite, o fare una nuova promessa per rimediare.`},
     {ic:'🧱', title:'Licenza di Minecraft',
      see:`Domande o lamentele sull’account o sulla licenza di Minecraft, o sul perché il corso funzioni in quel modo.`,
      do:`Aiuta con ciò che rientra nella lezione (l’account richiesto dal corso, la configurazione). Tutto ciò che riguarda la licenza in sé va al Servizio Clienti.`,
      say:`<em>«Il Servizio Clienti vi aiuterà con la questione della licenza.»</em>`,
      rep:`Servizio Clienti (segnalazione in BO) + Team Leader + commento in BO.`,
      avoid:`Commentare i motivi interni, le licenze o le modifiche ai contenuti del corso.`}
   ])}
   ${co('co-ok','✅',`<p><strong>Riconoscere è sempre permesso.</strong> Una risposta breve e cordiale (hai visto, capisci, hai inoltrato) non richiede l’approvazione di nessuno. Spiegazioni, opzioni e tutto ciò che riguarda il denaro aspettano Client Service.</p>`)}
  `},
  {t:'🧑‍🏫 Quando il problema è la lezione', html:`
   <div class="card"><p>Alcune lamentele forti riguardano la lezione stessa. Spettano a te in parte: correggi ciò che puoi già dalla lezione successiva e segnalalo comunque, così il tuo Team Leader e il Servizio Clienti non vengono colti di sorpresa.</p></div>
   <div class="tbl-wrap"><table>
    <tr><th>Cosa dice la famiglia</th><th>Cosa fai</th><th>Cosa segnali</th></tr>
    <tr><td>«Il metodo non è adatto alla sua età»</td><td>Passaggi più brevi, parole che conoscono, più dimostrazioni: adatta la lezione all’età del gruppo</td><td>Commento in BO + Team Leader se la differenza di età nel gruppo è ampia</td></tr>
    <tr><td>«Il tutor va avanti senza spiegare»</td><td>Un’istruzione alla volta e verifica la comprensione prima di proseguire</td><td>Commento in BO con ciò che hai cambiato</td></tr>
    <tr><td>«Il gruppo è caotico»</td><td>Regole di classe dalla lezione 1, turni di parola, gestione calma e ferma</td><td>Commento in BO + famiglia informata degli episodi</td></tr>
    <tr><td>«Il tutor non si è presentato» / «la lezione è stata rimandata»</td><td>Non annullare né spostare mai una lezione di tua iniziativa; informa il tuo Team Leader appena lo sai</td><td>Team Leader lo stesso giorno: decide lui/lei il recupero</td></tr>
    <tr><td>«La connessione continua a cadere»</td><td>Prova la tua configurazione prima di ogni lezione; segui il protocollo tecnico</td><td>Canale Slack del supporto tecnico (#ita-csm-and-tcm) + commento in BO</td></tr>
    <tr><td>«Il tutor non era preparato ai bisogni speciali di mio figlio»</td><td>Routine, ritmo più lento, passaggi più piccoli, altri modi di rispondere; chiedi alla famiglia cosa aiuta</td><td>Commento in BO + Team Leader: tu consigli, lui decide sul formato</td></tr>
    <tr><td>«Troppi cambi di tutor»</td><td>Se subentri, leggi i commenti in BO, presentati e mantieni le routine del gruppo</td><td>Team Leader, perché la famiglia sia avvisata in anticipo dei cambiamenti</td></tr>
   </table></div>
   ${co('co-idea','📚',`<p><strong>Vuoi approfondire?</strong> Ritmo, verifica della comprensione e puntualità sono trattati nel mini-training <em>Lesson Quality</em>; i gruppi caotici in <em>Lesson Organisation</em>; i bisogni speciali in <em>No Interest</em> e <em>Online Format</em>; i problemi di connessione in <em>Technical Issues</em>.</p>`)}
  `},
  {t:'📮 Come contattare il Servizio Clienti e cosa scrivere', html:`
   <div class="card"><p>Contatta il Servizio Clienti tramite BO: una segnalazione nelle <strong>Valutazioni del Tutor</strong> dello studente arriva direttamente a loro. Fallo <strong>lo stesso giorno</strong>: una famiglia che si sente ignorata si innervosisce in fretta.</p></div>
   ${timeline([
     {ic:'📝', label:'Segnala in BO', items:[
       'Profilo dello studente → <strong>Progresso</strong> → <strong>Valutazione del Tutor</strong> → <strong>Valuta lo Studente</strong>.',
       '<strong>Tipo di problema:</strong> il più simile, per esempio <em>«Lo studente vuole abbandonare gli studi/chiede il rimborso»</em>, <em>«Il cliente vuole modificare il programma»</em> oppure <em>«Altro»</em> per fatturazione, saldi, gruppi o promesse delle vendite.',
       'Scegli il gruppo, scrivi il commento con i fatti e le parole della famiglia e conferma.'
     ]},
     {ic:'👩‍💼', label:'Informa il tuo Team Leader', items:[
       'Lo stesso giorno, con un link allo studente in BO. Concorda con lui/lei cosa, nel caso fosse necessario, dirai poi alla famiglia.'
     ]},
     {ic:'🧭', label:'Altri canali quando servono', items:[
       '<strong>Problema tecnico che non riesci a risolvere:</strong> il canale Slack del supporto tecnico, <em>#ita-csm-and-tcm</em>.',
       '<strong>Crediti di lezione, scalature, un orario sbagliato:</strong> il tuo Team Leader + Operations / Client Service (<strong>@Erika Ietro</strong>, <strong>@Katarzyna Traczyk</strong>).'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Come si presenta una segnalazione utile: copia e completa</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Data:</strong> [data] · <strong>Gruppo:</strong> [link BO] · <strong>Studente:</strong> [link BO]<br>
   <strong>Cosa ha segnalato la famiglia:</strong> [es. una rata inattesa; il gruppo è cambiato; «le vendite avevano promesso un gruppo più piccolo»]<br>
   <strong>Parole della famiglia:</strong> [alla lettera]<br>
   <strong>Cosa ho detto:</strong> [es. ho riconosciuto la situazione e detto che il Servizio Clienti aiuterà, senza spiegazioni né promesse]<br>
   <strong>Contesto della lezione:</strong> [presenze, come va lo studente, qualsiasi dato rilevante]<br>
   <strong>Cosa consiglierei di verificare:</strong> [facoltativo: il tuo consiglio, la loro decisione]</p></div>
   <div class="card"><p><strong>Esercitati ora.</strong> Un genitore ha appena scritto: <em>«Ci avete addebitato una rata che non avevamo concordato e il gruppo è cambiato senza che nessuno ce lo dicesse. Rivogliamo i nostri soldi.»</em> Segnalalo in questa replica di BO. Al <strong>passo 4</strong>, scegli il Tipo di problema <strong>«Lo studente vuole abbandonare gli studi/chiede il rimborso»</strong> e scrivi i fatti e le parole della famiglia.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Segnalare un caso al Servizio Clienti</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Segnalare un caso al Servizio Clienti" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Perché funziona:</strong> il Servizio Clienti può risolvere solo ciò che conosce. Una segnalazione completa e neutrale, con le parole della famiglia, gli risparmia una telefonata e fa arrivare prima una risposta alla famiglia.</p>`)}
  `}
 ],
 ix:{
  title:'Lo risolvi o lo segnali — verifica del modulo',
  instr:'Associa ogni caso e scegli la mossa migliore. Serve il 70% per sbloccare il modulo successivo.',
  items:[
   {type:'sort', prompt:'Che tipo di problema è questo?', card:`«Ci è stata addebitata una rata che non abbiamo mai concordato.»`, zones:[{label:'🏢 Azienda e operazioni', fb:'Esatto! Riconoscilo, non spiegare il pagamento e segnalalo al Servizio Clienti nel BO lo stesso giorno.'},{label:'🧑‍🏫 La lezione o il tutor', fb:'Non proprio. Qui nulla riguarda la lezione. La fatturazione va a Client Service.'},{label:'🔧 Tecnico', fb:'Non proprio. È una questione di fatturazione, non un guasto della piattaforma.'}], correctZone:0},
   {type:'sort', prompt:'Che tipo di problema è questo?', card:`«Il tutor va troppo veloce per mio figlio di 7 anni e non controlla se ha capito.»`, zones:[{label:'🏢 Azienda e operazioni', fb:'Non proprio. Questo riguarda il modo in cui si svolge la lezione. Una parte spetta a te correggerla.'},{label:'🧑‍🏫 La lezione o il tutor', fb:'Esatto! Rallenta i passaggi, verifica la comprensione dalla lezione successiva e lascia un commento in BO con ciò che hai cambiato.'},{label:'🔧 Tecnico', fb:'Non proprio. Non si è guastato nulla dal punto di vista tecnico; è il ritmo della lezione.'}], correctZone:1},
   {type:'choice', prompt:`Un genitore dice: «Dopo il passaggio a Premium ci restano solo 19 lezioni: è una truffa.» Cosa rispondi?`, opts:[`«Il ricalcolo funziona così: le lezioni Premium costano di più.»`,`«Capisco che sia frustrante. Ho inoltrato la questione al Servizio Clienti, che vi aiuterà.»`,`«Ha ragione, non sembra giusto. Chiederò che vi restituiscano le lezioni.»`], correct:1, fb:`Riconosci senza spiegare, dare ragione né promettere. Il ricalcolo lo spiega il Servizio Clienti: poi segnalalo nel BO e informa il tuo Team Leader.`},
   {type:'choice', prompt:`Qual è la segnalazione in BO più utile per una famiglia contrariata da un cambio di gruppo?`, opts:[`«Genitore arrabbiato di nuovo. Problema di gruppo.»`,`«12/11, gruppo [link BO]. La madre ha scritto: 'Hanno spostato mio figlio in un altro gruppo senza dircelo e ora non vuole venire.' Ho riconosciuto la situazione e detto che il Servizio Clienti la contatterà. Ha partecipato a tutte e 6 le lezioni e sta andando bene.»`,`«La famiglia si lamenta di tutto, pensateci voi.»`], correct:1, fb:`Fatti, parole della famiglia, cosa hai detto e contesto della lezione. Neutra e completa, così il Servizio Clienti può agire senza chiamarti prima.`},
   {type:'sort', prompt:'Va bene o da evitare?', card:`Un genitore chiede quando partirà il nuovo gruppo. Rispondi: «Probabilmente tra due settimane.»`, zones:[{label:'✅ Va bene', fb:'Non proprio: una data ipotizzata diventa una promessa. Se non si verifica, la famiglia perde di nuovo fiducia.'},{label:'🚫 Da evitare', fb:'Esatto! Non dare date che non hai. Il Servizio Clienti vi aiuterà con la data di inizio; segnalalo in BO.'}], correctZone:1}
  ]
 }
},
{id:'angry', numLabel:'Modulo 4', emoji:'🌋', color:'var(--coral)',
 title:'Genitori molto arrabbiati o minacciosi',
 desc:'Cosa fare quando un genitore è furioso, minaccia o insulta, a volte senza una causa chiara: restare calmo, mantenere limiti e rispetto, documentare e indirizzarlo al Servizio Clienti.',
 obj:'Restare equilibrato davanti a un genitore molto arrabbiato, riconoscere senza discutere né promettere, porre limiti con calma quando il rispetto viene meno, indirizzare la famiglia al Servizio Clienti e documentare il caso in BO lo stesso giorno.',
 sections:[
  {t:'🌋 Quando la rabbia è più grande del problema', html:`
   <div class="card"><p>A volte un genitore arriva furioso e non riesci a trovare il motivo: le lezioni sono andate bene, non è successo nulla di evidente. La rabbia può nascere da una lunga catena di cose che non hai mai visto: un addebito, una chiamata a cui nessuno ha risposto, una brutta settimana. Sei semplicemente la persona che riescono a raggiungere.</p></div>
   ${iconGrid([
     {ic:'🚫', html:`<strong>Non è tuo compito vincere la discussione</strong>, né dimostrare che la famiglia ha torto.`},
     {ic:'🙅', html:`<strong>Non è tuo compito assorbire insulti</strong> o minacce.`},
     {ic:'✅', html:`<strong>È tuo compito</strong> restare calmo e rispettoso, mantenere i limiti, documentare ciò che è successo e passarlo al Servizio Clienti.`}
   ])}
  `},
  {t:'🧘 Prima regola te stesso', html:`
   <div class="card"><p>La rabbia è contagiosa, e lo è anche la calma. Prima di rispondere, prenditi cura del tuo stato: è il primo strumento che hai.</p></div>
   ${iconGrid([
     {ic:'🌬️', html:`<strong>Respira prima di rispondere.</strong> Una pausa di un secondo ti impedisce di rispondere d’impulso.`},
     {ic:'🔉', html:`<strong>Abbassa la voce e rallenta</strong> in una chiamata. Per iscritto, usa frasi brevi e neutre.`},
     {ic:'⏱️', html:`<strong>Messaggio scritto?</strong> Riconoscilo lo stesso giorno, ma prenditi qualche minuto prima di scrivere e non rispondere mai con rabbia.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Non sei solo.</strong> Informa presto il tuo Team Leader: non devi gestire da solo un genitore minaccioso.`}
   ])}
  `},
  {t:'🪜 Cosa fare, passo dopo passo', html:`
   ${stepper([
     {ic:'🤝', title:'Riconosci il sentimento', html:`<p>Fai capire che li hai ascoltati, senza essere d’accordo con le accuse.</p><p><em>«Vedo che siete molto arrabbiati e voglio assicurarmi che questo arrivi alle persone giuste.»</em></p>`},
     {ic:'❓', title:'Se la causa non è chiara, chiedi una volta sola', html:`<p>Una domanda aperta: non indovinare e non fare un interrogatorio.</p><p><em>«Potreste raccontarmi cosa è successo, così da poterlo riferire con precisione?»</em></p>`},
     {ic:'🧊', title:'Non discutere, non difenderti, non promettere', html:`<p>Non correggere la loro versione, non dare la colpa ad altri team o alla piattaforma e non offrire nulla per calmarli.</p>`},
     {ic:'📞', title:'Indirizzali al Servizio Clienti', html:`<p>È lì che ci sono le risposte e le opzioni.</p><p><em>«Il Servizio Clienti vi aiuterà con questo: ho già inoltrato il vostro messaggio.»</em></p>`},
     {ic:'📝', title:'Documenta lo stesso giorno', html:`<p>Segnalalo in BO con le parole esatte del genitore, comprese eventuali minacce, e informa il tuo Team Leader lo stesso giorno.</p>`}
   ])}
  `},
  {t:'🛑 Limiti e rispetto', html:`
   <div class="card"><p>Il rispetto vale in entrambe le direzioni. Tu resti rispettoso qualunque cosa accada, e puoi porre un limite con calma quando la conversazione smette di essere rispettosa.</p></div>
   ${co('co-ok','🗣️',`<p><strong>Un limite che puoi esprimere:</strong> <em>«Voglio aiutarvi e continuerò volentieri quando potremo parlare con rispetto. Ho inoltrato il vostro messaggio al Servizio Clienti, che vi contatterà.»</em> In una chiamata, puoi concluderla con garbo dopo averlo detto.</p>`)}
   ${doavoid(
     ['Mantieni un tono calmo e neutro, anche davanti agli insulti','Ignora il contenuto di una minaccia (un avvocato, recensioni, social media) e segnalala invece parola per parola','Continua a trattare il bambino con calore: il bambino non è mai responsabile della rabbia del genitore','Se un genitore interrompe la lezione, sii breve: <em>«Mi assicurerò che il vostro messaggio arrivi al nostro team dopo la lezione»</em>, poi continua per gli studenti'],
     ['Rispondere a tono, con sarcasmo o insulti','Discutere in una chat di gruppo davanti ad altre famiglie','Promettere un rimborso, un risarcimento o un cambiamento per calmarli','Parlare del conflitto davanti agli studenti']
   )}
   ${co('co-danger','🚨',`<p><strong>Minacce, insulti o molestie vanno sempre segnalati</strong>: in BO, con le parole esatte, e al tuo Team Leader lo stesso giorno. Non decidi da solo se continuare a parlare con quella famiglia.</p>`)}
  `},
  {t:'💬 Esercitati', html:`
   ${chatMock({
     name:'Genitore', sub:'online', avatar:'😠', time:'21:15',
     msgs:[`È una TRUFFA. Niente funziona, nessuno risponde e mio figlio non ha imparato nulla. Se domani non riavrò TUTTI i miei soldi, mi rivolgo a un avvocato e parlerò di voi dappertutto.`],
     title:'Come rispondi?',
     text:'È tardi, il messaggio è aggressivo e non c’è una causa chiara: le tue lezioni sono andate bene. Tocca ogni risposta per vedere cosa succede.',
     opts:[
      {t:`«Non siamo una truffa. Suo figlio ha partecipato a tutte le lezioni e sta andando bene: controlli prima di accusarci.»`, ok:false, fb:`Difenderti trasforma tutto in una discussione e fa arrabbiare ancora di più il genitore. Anche se è vero, non è tuo compito dimostrare che ha torto.`},
      {t:`«Mi dispiace che si senta così e voglio assicurarmi che il suo messaggio arrivi alle persone giuste. L’ho inoltrato al Servizio Clienti, che la aiuterà. Continuerò a dare il meglio per [studente] nelle nostre lezioni.»`, ok:true, fb:`Calma, rispettosa e chiara: riconosci il sentimento, non discuti l’accusa, non rispondi alla minaccia e indirizzi al Servizio Clienti. Poi segnalalo in BO con le parole esatte e informa il tuo Team Leader.`},
      {t:`«La prego, non lo faccia! Mi assicurerò che abbia indietro i suoi soldi.»`, ok:false, fb:`Un rimborso non spetta a te prometterlo. Se non accade esattamente come hai detto, il messaggio successivo sarà ancora più arrabbiato.`},
      {t:`Lascio perdere: rispondere peggiorerebbe solo le cose.`, reply:`<i>(nessuna risposta…)</i>`, ok:false, fb:`Il silenzio conferma che «nessuno risponde». Riconosci lo stesso giorno, in modo breve e calmo, e segnalalo.`}
     ]
   })}
  `}
 ],
 ix:{
  title:'Genitori molto arrabbiati — verifica del modulo',
  instr:'Scegli la mossa migliore o associa ogni risposta. Serve il 70% per sbloccare la checklist finale.',
  items:[
   {type:'choice', prompt:`Un genitore telefona gridando che «questa scuola è un disastro», ma non capisci cosa sia successo. Cosa fai per prima cosa?`, opts:[`Spieghi tutto ciò che è andato bene nelle lezioni`,`Abbassi la voce, riconosci quanto è arrabbiato e chiedi una volta sola: «Potrebbe raccontarmi cosa è successo, così da poterlo riferire con precisione?»`,`Riattacchi: non devi ascoltare tutto questo`], correct:1, fb:`Regola te stesso, riconosci il sentimento e fai una sola domanda aperta. Poi indirizzalo al Servizio Clienti e documenta.`},
   {type:'sort', prompt:'Tesoro o spazzatura? È una buona risposta?', card:`«Voglio aiutarla e continuerò volentieri quando potremo parlare con rispetto. Ho inoltrato il suo messaggio al Servizio Clienti.»`, zones:[{label:'💎 Tesoro', fb:'Esatto! Un limite calmo che mantiene il rispetto e rimanda al Servizio Clienti.'},{label:'🗑️ Spazzatura', fb:'Non proprio. È un limite rispettoso, esattamente ciò che puoi dire quando una conversazione smette di essere rispettosa.'}], correctZone:0},
   {type:'choice', prompt:`Un genitore minaccia di pubblicare recensioni negative se non ottiene un rimborso. Cosa fai con la minaccia?`, opts:[`Rispondi che le recensioni non cambieranno nulla`,`Prometti di chiedere il rimborso perché non le pubblichi`,`Non rispondi alla minaccia: la segnali in BO parola per parola e informi il tuo Team Leader lo stesso giorno`], correct:2, fb:`Non si negozia con una minaccia né si discute con essa. La si documenta con esattezza e si lascia che se ne occupino il tuo Team Leader e il Servizio Clienti.`},
   {type:'sort', prompt:'Tesoro o spazzatura? È una buona risposta?', card:`Nella chat di gruppo, davanti ad altre famiglie: «Suo figlio è quello che non fa mai attenzione, quindi non dia la colpa a me.»`, zones:[{label:'💎 Tesoro', fb:'Non proprio: dà la colpa al bambino, discute in pubblico e fa salire il conflitto.'},{label:'🗑️ Spazzatura', fb:'Esatto! Non discutere mai in una chat di gruppo né dare la colpa al bambino. Riconosci brevemente e porta il caso al Servizio Clienti e al tuo Team Leader.'}], correctZone:1}
  ]
 }
},
{id:'checklist', numLabel:'Checklist finale', emoji:'✅', color:'var(--coral)',
 title:'Checklist finale',
 desc:'Qui niente quiz: solo i punti essenziali di questo mini-training, prima di chiuderlo.',
 obj:'Rivedi la checklist qui sotto. Questo modulo non ha punteggio: leggilo e poi concludi il mini-training.',
 sections:[
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   ${numlist([
     'Ho lasciato un commento in BO il giorno stesso in cui ho saputo della richiesta e ho coinvolto il mio Team Leader',
     'La lezione successiva con questo studente è stata un vero tentativo di recupero: un vero spazio da protagonista, un successo visibile, attenzione specifica, nessun accenno alla richiesta',
     'Non ho mai confermato un’approvazione né parlato di cifre: ho usato l’unica frase sicura e ho lasciato il resto al Client Service'
   ])}
  `},  {t:'🌱 In ogni lezione', html:`
   ${numlist([
     'Studio e provo ogni lezione il giorno prima, partendo dagli obiettivi e dai risultati attesi indicati nel manuale',
     'Uso le frasi suggerite dal manuale per spiegare i nuovi concetti e, prima della lezione, chiedo al mio mentor, al Team Leader o nel canale Slack se ho dei dubbi',
     'Faccio prima modelling: mostro io per primo sul mio schermo e ragiono ad alta voce prima che gli studenti ci provino',
     'Faccio scaffolding: tanto supporto all’inizio (un modello da seguire, passaggi guidati), meno man mano che lo studente diventa autonomo',
     'Quando il materiale contiene un errore, lo dico con calma e lo trasformo in qualcosa da risolvere insieme',
     'Faccio capire ad alta voce che sbagliare è normale, così gli studenti li vedono come una parte normale dell’imparare a programmare, non come qualcosa di cui vergognarsi',
     'Non faccio mai di un errore un dramma, non do la colpa alla piattaforma davanti agli studenti e non lascio che occupi tutto il resto della lezione',
     'Segnalo ogni errore nei contenuti con l’icona 🐞 in BO e controllo che l’ID del corso corrisponda al gruppo dei miei studenti',
     'Provo connessione, videocamera e microfono 30 minuti prima della lezione e chiudo le schede e i programmi che non mi servono',
     'Mi assicuro che gli studenti usino Google Chrome e un dispositivo adatto: niente Safari e niente tablet per corsi come Roblox Studio o Unity',
     'Per i problemi tecnici: massimo 10 minuti per risolverli, poi comunico, documento e segnalo — e apro un ticket al Client Service se succede per due lezioni di fila',
     'Mentre aiuto uno studente con un problema tecnico, do al resto del gruppo qualcosa su cui lavorare, così nessuno resta ad aspettare',
     'Di fronte a fatturazione, rate, ricalcoli, saldi, cambi di gruppo, ritardi di avvio, supporto o promesse delle vendite e licenza di Minecraft, riconosco la situazione: non spiego, non mi difendo e non prometto.',
     'Segnalo questi casi al Servizio Clienti nel BO lo stesso giorno (Valutazioni del Tutor → Valuta lo Studente), con le parole della famiglia, e informo il mio Team Leader.',
     'Uso il canale giusto: il canale Slack del supporto tecnico (#ita-csm-and-tcm) per i problemi tecnici, il mio Team Leader e Operations per crediti e scalature.',
     'Quando il problema è la lezione (ritmo, spiegazioni, un gruppo caotico, una lezione saltata, bisogni speciali, cambi di tutor), correggo la mia parte dalla lezione successiva e lo segnalo comunque.',
     'Con un genitore molto arrabbiato o minaccioso, regolo me stesso, riconosco il sentimento, chiedo una volta sola se la causa non è chiara e lo indirizzo al Servizio Clienti.',
     'Mantengo il rispetto e pongo limiti con calma; non discuto mai, non rispondo a tono né prometto nulla per calmare un genitore.',
     'Segnalo minacce e insulti parola per parola in BO e informo il mio Team Leader lo stesso giorno, e continuo a trattare il bambino con calore.'
   ])}
  `},  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Il mini-training è finito.</strong> Quando sei pronto, continua — poi completa il DST nell’LMS per chiudere l’attività.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
