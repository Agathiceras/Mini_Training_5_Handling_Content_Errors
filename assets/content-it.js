/* Mini_Training_5_Handling_Content_Errors - Italian content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='it';
const CONTENT = {
  flag:'🇮🇹', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Gestire gli errori in classe — Formazione Tutor Kodland",
    logoSub:'Dipartimento Sviluppo Tutor',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Tenere salda la lezione anche davanti agli <span class=\"h-pill\">errori</span>",
    heroIntro:"Stai vedendo questa pagina perché una famiglia ha segnalato una lezione che le è sembrata piena di errori e di frustrazione. Nella maggior parte dei casi la causa sta nella preparazione, nella spiegazione o in veri errori nei contenuti — tutte cose che si possono sistemare.",
    heroWork:"Completa 4 brevi moduli. Per sbloccare il modulo successivo, ogni verifica richiede almeno il 70%. In tutto, circa 25–30 minuti.",
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
 desc:'Perché una lezione piena di errori sembra caotica — e le regole da seguire quando è già arrivata una richiesta di rimborso.',
 obj:'Capire che la maggior parte di questi casi nasce da problemi di preparazione, di spiegazione o di contenuto — tutti con una soluzione concreta — e sapere esattamente cosa fare (e cosa non fare) quando esiste già una richiesta di rimborso.',
 sections:[
  {t:'😤 Quando una lezione sembra una serie di errori', html:`
   <div class="card"><p>Una lezione piena di errori — dello studente, del materiale o che spuntano a metà spiegazione — può diventare caotica in fretta se non hai un piano per gestirli. Le famiglie se ne accorgono subito: lo percepiscono come “la lezione non funziona”, anche quando la causa si risolve in pochi minuti.</p></div>
   ${co('co-idea','💡',`<p><strong>Quasi sempre si può prevenire.</strong> Una lezione ben preparata, un modo chiaro di spiegare e sapere come segnalare un vero errore nei contenuti evitano che i piccoli sbagli trasformino la lezione in qualcosa di fuori controllo.</p>`)}
  `},
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   <div class="card"><p>Tutto quello che hai letto sopra serve ad accorgersene in tempo. Ma potresti aprire questa formazione perché una famiglia ha <strong>già</strong> chiesto un rimborso. Le regole qui sotto valgono qualunque sia il motivo: leggile per prime, poi usa il resto della formazione per capire cosa ha portato fin qui e cosa puoi ancora fare a lezione.</p></div>
   ${co('co-idea','💡',`<p><strong>La richiesta viene creata dal Client Service, non da te</strong> — quella parte non dipende da te. Ma tutto ciò che succede a lezione da questo momento in poi è ancora nelle tue mani, e non è poco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Non dire nulla sulla richiesta</strong> — né allo studente né alla famiglia — a meno che il Client Service non ti chieda esplicitamente di comunicare qualcosa di preciso. Ora il tuo compito è la lezione, non quella conversazione.</p>`)}
  `},
  {t:'🎯 La prossima lezione è il tuo tentativo di recupero', html:`
   <div class="card"><p>Potresti non avere altre occasioni per cambiare le cose. Considera la prossima lezione con questo studente come il momento decisivo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dagli un vero spazio.</strong> Non una domanda di circostanza, ma un momento autentico in cui si sente visto e ce la fa.`},
     {ic:'🏆', html:`<strong>Prevedi un successo presto e ben visibile.</strong> Deve uscire dalla lezione sentendosi capace, non indietro.`},
     {ic:'👀', html:`<strong>Attenzione specifica</strong> — fallo sentire notato per qualcosa di concreto, non con lodi generiche.`},
     {ic:'🤐', html:`<strong>Nessun accenno alla richiesta</strong> — anche se è lo studente a tirarla fuori, cambia argomento con gentilezza e continua a insegnare.`}
   ])}
  `},
  {t:'📮 Avvisa subito e conosci l’unica frase sicura', html:`
   <div class="card"><p>Puoi scoprire che esiste una richiesta dai commenti del Client Service nel profilo dello studente in BO: non c’è un sistema automatico che ti avvisa. Una volta che lo sai, quello che hai visto nelle tue lezioni è un’informazione che il Client Service non può avere in nessun altro modo.</p></div>
   ${numlist([
     'Lascia un commento in BO il giorno stesso con esattamente ciò che hai visto — date e dettagli, non impressioni',
     'Riporta le parole esatte della famiglia, testuali, se le hai',
     'Coinvolgi il tuo Team Leader il giorno stesso',
     'Non confermare mai che un rimborso è stato approvato e non parlare mai di cifre'
   ])}
   ${co('co-ok','✅',`<p><strong>La frase che puoi dire sempre senza rischi:</strong> <em>“Il Client Service la aiuterà con questo.”</em> Lì finisce la tua parte della conversazione: da quel momento se ne occupa il Client Service.</p>`)}
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
   ${co('co-idea','💡',`<p><strong>Studia la lezione e provala il giorno prima</strong> — non un’ora prima e nemmeno mezz’ora prima. Quel margine ti dà il tempo reale di accorgerti di codice che non funziona più, di materiale che non si carica o di un’attività che nemmeno tu hai ancora capito fino in fondo.</p>`)}
   ${co('co-star','⭐',`<p>Se trovi una lacuna, chiedi a un mentor, al tuo Team Leader o agli altri tutor nel canale Slack del tuo corso. Chiedere aiuto lì, il giorno prima, è proprio ciò che evita che i problemi si presentino dal vivo, davanti allo studente.</p>`)}
  `},
  {t:'🧑‍🏫 Cosa aiuta davvero un concetto ad arrivare', html:`
   <div class="card"><p>Il modo in cui spieghi qualcosa conta quanto spiegarlo correttamente. Un concetto introdotto con chiarezza fin dalla prima volta previene la maggior parte degli errori dovuti alla confusione.</p></div>
  `},
  {t:'🎬 Modelling: mostralo prima che ci provino', html:`
   <div class="card"><p><strong>Modelling</strong> significa mostrare tu stesso la tecnica, sul tuo schermo, prima che lo studente ci provi. Mentre lo fai, ragiona ad alta voce: spesso il ragionamento vale più del risultato.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Modelling, passo dopo passo</div><div class="vslot-meta">Esempio da una lezione reale</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1IgaGbg64ClvTs1DgnOXMhp_IPFtgCGfM/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">In questo video vedrai come il tutor spiega il compito passo dopo passo, con istruzioni brevi e semplici.</div></div>
  `},
  {t:'🪜 Scaffolding: un supporto che si riduce gradualmente', html:`
   <div class="card"><p><strong>Scaffolding</strong> significa dare più supporto all’inizio di un nuovo concetto — un modello da seguire, passaggi guidati, lavorare insieme allo studente — e poi ridurlo di proposito man mano che prende sicurezza, finché non lo fa in autonomia.</p></div>
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
   ${co('co-ok','✅',`<p><strong>Di’ così:</strong> <em>“Bella osservazione, è un errore del materiale, non tuo: troviamo insieme un modo per aggirarlo.”</em> Sposta l’attenzione sulla ricerca di una soluzione come squadra e vai avanti.</p>`)}
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
  instr:'70% per sbloccare la checklist finale.',
  items:[
   {type:'choice', prompt:'Uno studente trova un vero bug nel codice di esempio della lezione. Qual è la prima cosa che fai in classe?', opts:['Salti l’attività senza spiegazioni, per risparmiare tempo','Lo dici con calma e lo trasformi in un momento “risolviamolo insieme”','Dici al gruppo che la piattaforma è sempre piena di errori'], correct:1, fb:'Con calma e collaborazione la lezione non diventa caotica — e mostri come si affrontano i bug.'},
   {type:'sort', prompt:'Errore nei contenuti o problema tecnico?', card:'Una riga del codice iniziale della lezione contiene un errore di battitura e genera un errore prima che qualcuno abbia modificato qualcosa.', zones:[{label:'🔧 Problema tecnico → segui il protocollo', fb:'Non proprio — è il codice stesso a essere sbagliato, per tutti. Si tratta di un errore nei contenuti: aggiralo con calma e segnalalo con l’icona 🐞 in BO.'},{label:'🐞 Errore nei contenuti → segnalalo in BO', fb:'Esatto — è il materiale stesso a essere sbagliato. Aggiralo con calma, poi segnalalo con l’icona 🐞 così viene corretto per tutti i gruppi.'}], correctZone:1},
   {type:'sort', prompt:'Errore nei contenuti o problema tecnico?', card:'Lo schermo di uno studente continua a bloccarsi e il suo audio salta di continuo durante la lezione.', zones:[{label:'🔧 Problema tecnico → segui il protocollo', fb:'Esatto — prova una soluzione rapida, fai lavorare il gruppo e, se si ripete, comunica, documenta e segnala.'},{label:'🐞 Errore nei contenuti → segnalalo in BO', fb:'Non proprio — il materiale non ha nessun problema. Uno schermo bloccato e un audio che salta sono problemi tecnici: segui il protocollo.'}], correctZone:0},
   {type:'choice', prompt:'Dove segnali un errore nei contenuti in BO?', opts:['In un messaggio alla famiglia dello studente','Nella scheda Check del gruppo','Con l’icona 🐞 sulla riga della lezione, nella scheda del corso'], correct:2, fb:'L’icona 🐞 su ogni riga della lezione apre il questionario sulla qualità dei contenuti: è così che il materiale viene corretto.'},
   {type:'choice', prompt:'Lo stesso problema tecnico si presenta per la seconda lezione di fila. Cosa cambia?', opts:['Apri un ticket al Client Service il giorno stesso','Niente — continui a provare a risolverlo da solo','Aspetti un’altra lezione per essere sicuro che si ripeta'], correct:0, fb:'Se si ripete, è il momento di segnalarlo al Client Service — e di far sapere al genitore che qualcuno lo ricontatterà.'}
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
     'La lezione successiva con questo studente è stata un vero tentativo di recupero: un vero spazio, un successo visibile, attenzione specifica, nessun accenno alla richiesta',
     'Non ho mai confermato un’approvazione né parlato di cifre: ho usato l’unica frase sicura e ho lasciato il resto al Client Service'
   ])}
  `},  {t:'🌱 In ogni lezione', html:`
   ${numlist([
     'Studio e provo ogni lezione il giorno prima, partendo dagli obiettivi e dai risultati attesi indicati nel manuale',
     'Uso le frasi suggerite dal manuale per spiegare i nuovi concetti e, prima della lezione, chiedo al mio mentor, al Team Leader o nel canale Slack se ho dei dubbi',
     'Faccio prima modelling: mostro sul mio schermo e ragiono ad alta voce prima che gli studenti ci provino',
     'Faccio scaffolding: tanto supporto all’inizio (un modello da seguire, passaggi guidati), meno man mano che lo studente diventa autonomo',
     'Quando il materiale contiene un errore, lo dico con calma e lo trasformo in qualcosa da risolvere insieme',
     'Normalizzo gli errori ad alta voce, così gli studenti li vedono come una parte normale dell’imparare a programmare, non come qualcosa di cui vergognarsi',
     'Non faccio mai di un errore un dramma, non do la colpa alla piattaforma davanti agli studenti e non lascio che si mangi il resto della lezione',
     'Segnalo ogni errore nei contenuti con l’icona 🐞 in BO e controllo che l’ID del corso corrisponda al gruppo dei miei studenti',
     'Provo connessione, videocamera e microfono 30 minuti prima della lezione e chiudo le schede e i programmi che non mi servono',
     'Mi assicuro che gli studenti usino Google Chrome e un dispositivo adatto: niente Safari e niente tablet per corsi come Roblox Studio o Unity',
     'Per i problemi tecnici: massimo 10 minuti per risolverli, poi comunico, documento e segnalo — e apro un ticket al Client Service se succede per due lezioni di fila',
     'Mentre aiuto uno studente con un problema tecnico, do al resto del gruppo qualcosa su cui lavorare, così nessuno resta ad aspettare'
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
