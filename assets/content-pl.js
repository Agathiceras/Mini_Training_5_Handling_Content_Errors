/* Mini_Training_5_Handling_Content_Errors - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pl';
const CONTENT = {
  flag:'🇵🇱', dir:'ltr',
  ui:{
    heroCard1:"<b>W swoim tempie.</b> Twój postęp zapisuje się w tej przeglądarce.",
    heroCard2:"<b>Z ćwiczeniem praktycznym.</b> Każdy moduł kończy się krótkim sprawdzianem.",
    pbLabel:'ukończonych modułów',
    tapOpen:'Kliknij, aby otworzyć',
    tapFlip:'Kliknij, aby odwrócić',
    lblSee:'Co widzisz',
    lblDo:'Co robisz',
    lblSay:'Co możesz powiedzieć',
    lblReport:'Gdzie zgłosić',
    lblAvoid:'Unikaj',
    lblTip:'Wskazówka',
    stepOf:'Krok {i} z {n}',
    next:'Dalej',
    pageTitle:"Miniszkolenie · Radzenie sobie z błędami na zajęciach — szkolenie nauczycieli Kodland",
    logoSub:'Dział Rozwoju Nauczycieli',
    heroEyebrow:"🎯 Miniszkolenie",
    heroTitle:"Jak utrzymać spokojną lekcję mimo <span class=\"h-pill\">błędów</span>",
    heroIntro:"Widzisz to, ponieważ rodzina złożyła bardzo negatywny wniosek o zwrot pieniędzy: lekcja, która wydawała się pełna błędów, problem z usługą firmy albo dużo złości bez wyraźnej przyczyny. Pokażemy Ci tutaj, co należy do Ciebie, co zgłosić do Client Service i jak spokojnie sobie z tym poradzić.",
    heroWork:"Ukończ 6 krótkich modułów. Aby odblokować kolejny moduł, musisz uzyskać co najmniej 70% w teście danego modułu. Łączny czas: około 40–45 minut.",
    startBtn:"🚀 Rozpocznij szkolenie",
    pathLabel:'Twoja ścieżka nauki',
    devTitle:'Dev: odblokuj wszystkie moduły do przeglądu',
    backToPath:'Powrót do ścieżki',
    modulesPassed:'Zaliczone moduły: {done} / {total}',
    moduleN:'Moduł {n}',
    of:'z',
    locked:'🔒 Zablokowany',
    passedBadge:'✅ Zaliczony · {pct}%',
    reviewedBadge:'✅ Przejrzany',
    startBadge:'▶ Rozpocznij',
    reviewBadge:'▶ Przejrzyj',
    objective:'Cel',
    startCheck:'▶ Rozpocznij sprawdzian modułu',
    finishBtn:'▶ Ukończ miniszkolenie',
    doneBack:'✓ Gotowe — powrót do ścieżki',
    ixBadge:'📋 Sprawdzian modułu — 70%, aby odblokować kolejny moduł',
    ixItemBadge:'📋 Sprawdzian modułu — pytanie {i} z {n}',
    scoreSoFar:'Dotychczasowy wynik: {c} / {t}',
    continue:'Dalej →',
    sortWrong:'Nie do końca — poprawna odpowiedź to „{label}”.',
    resPassed:'Moduł zaliczony!',
    resFailed:'Jeszcze nie tym razem',
    resUnlocked:"Udało ci się odblokować kolejny moduł.",
    resDone:"Udało ci się ukończyć to miniszkolenie.",
    resNeed:'Aby odblokować kolejny moduł, potrzebujesz 70%. Przejrzyj powyższą część i spróbuj ponownie.',
    resContinue:'Przejdź do ścieżki nauki',
    resFinish:'Dalej',
    resBack:'Powrót do ścieżki',
    resReview:'Przejrzyj ten moduł',
    doneEyebrow:'Miniszkolenie ukończone',
    doneTitle:'🎉 Gratulacje!',
    doneP1:"🎉 <strong>Gratulacje! Udało ci się ukończyć to miniszkolenie.</strong>",
    doneP2:"To już wszystko! Wróć na stronę szkolenia w LMS, która przekierowała cię do tego miniszkolenia, aby zamknąć zadanie.",
    doneP3:"👉 <strong>Jeśli bezpośrednio pod szkoleniem w LMS widnieje sprawdzian lub test, rozwiąż go i uzyskaj wynik zaliczający</strong> — w przeciwnym razie zadanie może pozostać nieukończone.",
    doneP4:'Powodzenia! ❤️',
    doneP5:'',
    devUnlockAlert:'Tryb deweloperski: wszystkie moduły zostały odblokowane do przeglądu.',
    devOn:'🔓 Tryb deweloperski WŁ. — wszystkie moduły odblokowane',
    devOff:'🔒 Tryb deweloperski WYŁ. — postęp wyczyszczony',
    devBadge:'🔓 TRYB DEWELOPERSKI',
    doLabel:'✅ Rób tak',
    avoidLabel:'🚫 Unikaj',
    noticeLabel:'Zwróć uwagę:',
    cvSee:'Co widzisz:',
    cvDo:'Co robisz:',
    dtExample:'Przykład z prawdziwych zajęć',
    dtNext:'Następnie:',
    dtDone:"✅ To już wszystkie cztery obszary. Teraz sklasyfikuj to, co widzisz.",
    tlVideoTitle:'{label} — przykład z prawdziwych zajęć',
    tlVideoMeta:'Zobacz, jak ten etap wygląda na prawdziwej lekcji'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Wprowadzenie', emoji:'🧩', color:'var(--coral)',
 title:'Dlaczego tu jesteś',
 desc:'Dlaczego lekcja pełna błędów wydaje się chaotyczna, co jeszcze zwykle kryje się za bardzo negatywnie nastawioną rodziną oraz zasady obowiązujące, gdy wniosek o zwrot pieniędzy już wpłynął.',
 obj:'Zrozumienie głównych przyczyn bardzo negatywnego nastawienia rodziny (błędy na lekcji, problemy operacyjne, problemy dotyczące lekcji lub tutora oraz bardzo zdenerwowani rodzice) i wiedza, co dokładnie robić (a czego nie robić), gdy wniosek o zwrot pieniędzy już istnieje.',
 sections:[
  {t:'😤 Gdy lekcja wydaje się ciągiem błędów', html:`
   <div class="card"><p>Lekcja pełna błędów — ucznia, materiału albo takich, które pojawiają się w trakcie wyjaśniania — może szybko wydawać się chaotyczna, jeśli nie ma planu, jak sobie z nimi radzić. Rodziny szybko to zauważają: odbierają to jako „zajęcia nie działają”, nawet jeśli przyczynę da się usunąć w kilka minut.</p></div>
   ${co('co-idea','💡',`<p><strong>Większości z tego da się zapobiec.</strong> Dobrze przygotowana lekcja, jasny sposób wyjaśniania i wiedza, jak zgłosić faktyczny błąd w treści, sprawiają, że drobne pomyłki nie zamieniają się w lekcję, która wymyka się spod kontroli.</p>`)}
  `},
  {t:'🧭 Bardzo negatywnie nastawiona rodzina — co zwykle za tym stoi', html:`
   <div class="card"><p>Błędy na lekcji to tylko część obrazu. Gdy rodzina jest bardzo negatywnie nastawiona, przyczyna często leży w ogóle poza lekcją — a Ty nadal musisz wiedzieć, co z tym zrobić:</p></div>
   ${iconGrid([
     {ic:'🐞', html:`<strong>Lekcja, która wydawała się pełna błędów</strong> — przygotowanie, wyjaśnienia, treść lub problemy techniczne. <em>Moduły 1 i 2.</em>`},
     {ic:'🏢', html:`<strong>Sprawy firmy i operacyjne</strong> — rozliczenia, raty, salda, zmiany grup, opóźnienia w starcie, wsparcie, które nie odpowiada, obietnice sprzedaży, licencja Minecraft. <em>Moduł 3.</em>`},
     {ic:'🧑‍🏫', html:`<strong>Lekcja lub tutor</strong> — tempo, wyjaśnienia, chaotyczna grupa, odwołana lekcja, połączenie, specjalne potrzeby, zbyt wiele zmian tutora. <em>Moduł 3.</em>`},
     {ic:'🌋', html:`<strong>Bardzo zdenerwowany lub grożący rodzic</strong>, czasem bez wyraźnej przyczyny. <em>Moduł 4.</em>`}
   ])}
   ${co('co-ok','✅',`<p><strong>Co należy do Ciebie w każdym przypadku:</strong> poprawić to, co dotyczy Twojej lekcji, resztę zgłosić do Client Service tego samego dnia oraz zachować spokój i szacunek — niezależnie od tonu rodziny.</p>`)}
  `},
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   <div class="card"><p>Wszystko powyżej dotyczy wczesnego wychwytywania problemu. Możliwe jednak, że otwierasz to szkolenie, bo rodzina <strong>już</strong> poprosiła o zwrot pieniędzy. Zasady, które znajdziesz poniżej, obowiązują bez względu na okoliczności — zacznij od ich przeczytania, a potem wykorzystaj resztę szkolenia, aby zrozumieć, co do tego doprowadziło i co wciąż możesz zrobić na swoich lekcjach.</p></div>
   ${co('co-idea','💡',`<p><strong>Sam wniosek tworzy Dział Obsługi Klienta, nie ty</strong> — na tę część nie masz wpływu. Do ciebie wciąż należy wszystko, co od teraz dzieje się na lekcji, a to naprawdę sporo.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Nie mów nic o samym wniosku</strong> — ani dziecku, ani rodzinie — chyba że Dział Obsługi Klienta wyraźnie poprosi cię o przekazanie czegoś konkretnego. Twoim zadaniem jest teraz dostosowanie lekcji, a nie rozmowa z klientami.</p>`)}
  `},
  {t:'🎯 Następna lekcja to twoja szansa na pomoc dziecku', html:`
   <div class="card"><p>Możesz nie mieć okazji, by zmienić cokolwiek innego. Potraktuj najbliższą lekcję z tym dzieckiem jako moment, który o wszystkim zdecyduje.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Daj dziecku prawdziwą okazję do działania.</strong> Nie pytanie dla zasady — stwórz autentyczny moment, w którym zostaje zauważone i odnosi sukces.`},
     {ic:'🏆', html:`<strong>Zaplanuj wczesny, widoczny sukces.</strong> Dziecko powinno wyjść z lekcji z poczuciem, że daje radę, a nie że zostaje w tyle.`},
     {ic:'👀', html:`<strong>Konkretna uwaga</strong> — niech dziecko poczuje, że widzisz, w jego pracy, coś konkretnego, a nie tylko chwalisz ogólnikowo.`},
     {ic:'🤐', html:`<strong>Ani słowa o wniosku</strong> — nawet jeśli dziecko samo o nim wspomni, ciepło zmień temat i ucz dalej.`}
   ])}
  `},
  {t:'📮 Zgłaszaj szybko i znaj jedno bezpieczne zdanie', html:`
   <div class="card"><p>O tym, że wniosek istnieje, możesz dowiedzieć się z komentarzy Działu Obsługi Klienta w profilu dziecka w BO — nie ma automatycznego systemu, który by cię o tym powiadomił. Gdy dowiesz się o sytuacji, pamiętaj, że to, co widzisz na swoich lekcjach, jest dla Działu Obsługi Klienta bardzo ważną informacją, której nie mogą zdobyć w żaden inny sposób.</p></div>
   ${numlist([
     'Tego samego dnia zostaw komentarz w BO z dokładnym opisem swoich obserwacji. Umieść tam daty i konkrety, a nie wrażenia',
     'Jeśli je znasz, zacytuj dosłownie słowa rodziny',
     'Tego samego dnia poinformuj swojego lidera zespołu',
     'Nigdy nie potwierdzaj, że zwrot został zatwierdzony, i nie rozmawiaj o żadnych kwotach'
   ])}
   ${co('co-ok','✅',`<p><strong>Zdanie, które zawsze możesz powiedzieć:</strong> <em>„Dział Obsługi Klienta zajmuje się tą sprawą”.</em> Na tym kończy się twoja część rozmowy — dalej przejmuje ją Dział Obsługi Klienta.</p>`)}
  `},
  {t:'🌱 Nie odpuszczaj później', html:`
   <div class="card"><p>Niezależnie od tego, czy wniosek zostanie wycofany, dziecko zostanie w twojej grupie, czy przejdzie do innego nauczyciela lub formatu — przez kilka kolejnych lekcji poświęcaj mu szczególną uwagę. Pomoc, która jest oferowana przez jedną lekcję, a potem wszystko po cichu wraca do normy, często w ogóle nie daje skutku.</p></div>
  `}
 ]
},
{id:'manual', numLabel:'Moduł 1', emoji:'📘', color:'var(--coral)',
 title:'Korzystanie z przewodnika lekcji i dobre wyjaśnianie',
 desc:'Co już daje ci przewodnik lekcji, dlaczego przestudiowanie go dzień wcześniej zapobiega większości problemów, oraz dwa ruchy dydaktyczne — modelowanie i rusztowanie — dzięki którym pojęcie trafia do ucznia za pierwszym razem.',
 obj:'Nauczenie się skutecznego korzystania z celów i sugerowanych sformułowań w przewodniku lekcji, dowiedzenie się, gdzie szukać pomocy przed lekcją, nauka stosowania modelowania oraz rusztowania, by jaśniej wyjaśniać nowe pojęcia.',
 sections:[
  {t:'📘 Co już daje ci przewodnik lekcji', html:`
   <div class="card"><p>Każdy przewodnik lekcji zaczyna się od celów lekcji i oczekiwanych efektów — to na nich skup uwagę, a nie tylko na sekwencji kroków. Zawiera też sugerowane sformułowania do wyjaśniania każdego pojęcia, napisane przez osoby, które starannie przemyślały, jak je wprowadzić.</p></div>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image1.png" alt="Przewodnik lekcji z celami lekcji i efektami edukacyjnymi"><figcaption>📌 Na początku każdego przewodnika lekcji znajdziesz cele nauki oraz to, co uczniowie mają osiągnąć lub czego się nauczyć do końca lekcji.</figcaption></figure>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image2.png" alt="Strona przewodnika lekcji z sugerowanym zdaniem dla nauczyciela"><figcaption>💬 Jeśli nie masz pewności, jak przejść między tematami, wprowadzić nowe zagadnienia lub zadanie albo nawet je wyjaśnić, przewodnik lekcji zawiera podpowiedzi, które pomogą ci zastanowić się, w jaki sposób to sformułować.</figcaption></figure>
  `},
  {t:'⏳ Dzień wcześniej, a nie godzinę przed', html:`
   ${co('co-idea','💡',`<p><strong>Przestudiuj i przećwicz lekcję dzień wcześniej</strong> — nie godzinę i nie trzydzieści minut przed. Ten zapas daje ci realny czas, by zauważyć kod, który już nie działa, materiał, który się nie wczytuje, albo zadanie, którego jeszcze do końca nie rozumiesz.</p>`)}
   ${co('co-star','⭐',`<p>Jeśli znajdziesz lukę, zapytaj mentora, lidera zespołu lub innych nauczycieli na kanale swojego kursu na Slacku. Uzyskanie tam pomocy dzień wcześniej to dokładnie to, co zapobiega problemom na żywo, przy uczniu.</p>`)}
  `},
  {t:'🧑‍🏫 Co naprawdę pomaga zrozumieć pojęcie', html:`
   <div class="card"><p>To, jak coś wyjaśniasz, ma takie samo znaczenie jak to, czy wyjaśniasz to poprawnie. Pojęcie jasno wprowadzone za pierwszym razem zapobiega większości błędów wynikających z niezrozumienia.</p></div>
  `},
  {t:'🎬 Modelowanie: pokaż, zanim uczniowie spróbują', html:`
   <div class="card"><p><strong>Modelowanie</strong> oznacza samodzielne zademonstrowanie techniki na swoim ekranie, zanim spróbuje uczeń. Gdy to robisz, mów na głos, co myślisz — tok rozumowania jest często cenniejszy niż sam wynik.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Modelowanie krok po kroku</div><div class="vslot-meta">Przykład z prawdziwych zajęć</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1IgaGbg64ClvTs1DgnOXMhp_IPFtgCGfM/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">W tym filmie zobaczysz, jak nauczyciel wyjaśnia zadanie krok po kroku, krótkimi, prostymi instrukcjami.</div></div>
  `},
  {t:'🪜 Rusztowanie: wsparcie, które stopniowo się zmniejsza', html:`
   <div class="card"><p><strong>Rusztowanie</strong> (ang. scaffolding) oznacza udzielanie większego wsparcia na początku nauki nowego pojęcia — szablon, prowadzone kroki, praca ramię w ramię — i celowe wycofywanie tego wsparcia, gdy uczeń czuje się coraz pewniej, aż zacznie radzić sobie samodzielnie.</p></div>
   ${co('co-idea','💡',`<p>Błąd, którego należy unikać, to skrajności: pełne wsparcie bez końca (uczeń nigdy nie staje się samodzielny) albo brak wsparcia od samego początku (uczeń trafia na błędy, których nie ma narzędzi rozwiązać, a lekcja zaczyna wydawać się chaotyczna).</p>`)}
  `}
 ],
 ix:{
  title:'Przewodnik lekcji i dobre wyjaśnianie — sprawdzian modułu',
  instr:'70%, aby odblokować kolejny moduł.',
  items:[
   {type:'choice', prompt:'Na czym skupić się najpierw, otwierając przewodnik nowej lekcji?', opts:['Tylko na dokładnych krokach, po kolei','Na pracy domowej na następny raz','Na celach i oczekiwanych efektach'], correct:2, fb:'Cele mówią ci, po co właściwie jest lekcja — kroki to tylko jeden ze sposobów, by tam dotrzeć.'},
   {type:'choice', prompt:'Kiedy należy przestudiować i przećwiczyć lekcję?', opts:['Dzień wcześniej, a nie godzinę przed','Tuż przed zajęciami, żeby mieć wszystko świeżo w głowie','Tylko jeśli to temat prowadzony po raz pierwszy'], correct:0, fb:'Cały dzień zapasu daje ci czas, by faktycznie naprawić wszystko, co znajdziesz.'},
   {type:'choice', prompt:'Co oznacza „modelowanie” na lekcji?', opts:['Pokazanie gotowego przykładu bez wyjaśniania, jak powstał','Samodzielne zademonstrowanie techniki z myśleniem na głos, zanim spróbuje uczeń','Pozwolenie uczniowi najpierw spróbować, a potem poprawianie go'], correct:1, fb:'Modelowanie to pokazanie najpierw — razem z własnym tokiem rozumowania — zanim uczeń spróbuje.'},
   {type:'sort', prompt:'Czy to dobre zastosowane techniki rusztowania?', card:'Tydzień 1: dajesz uczniowi szablon i prowadzisz go krok po kroku. Tydzień 3: podajesz tylko cel i pozwalasz mu zbudować całość samodzielnie.', zones:[{label:'✅ Tak — to poprawne wykorzystanie tej techniki', fb:'Zgadza się — wsparcie zaczyna się wysoko i jest celowo wycofywane, gdy uczeń staje się samodzielny.'},{label:'❌ Nie — wsparcie powinno pozostać takie samo', fb:'Nie do końca — utrzymywanie pełnego wsparcia bez końca nie pozwala uczniowi stać się samodzielnym. Chodzi właśnie o stopniowe jego zmniejszanie.'}], correctZone:0}
  ]
 }
},
{id:'contenterrors', numLabel:'Moduł 2', emoji:'🐞', color:'var(--coral)',
 title:'Błędy w treści i problemy techniczne',
 desc:'Co robić, gdy błędny jest sam materiał lub zawodzi technika: jak zachować spokój w klasie, poprawnie zgłosić błąd w BO i rozwiązywać problemy, nie tracąc reszty grupy.',
 obj:'Nauczyć radzenia sobie z faktycznym błędem w treści lub tłumaczeniu tak, by nie wykoleiły one lekcji, dowiedzieć się, jak zgłosić takie problemy w BO, i nauczenie się, by podczas awarii technicznych stosować logikę „napraw szybko / komunikuj / dokumentuj / eskaluj”.',
 sections:[
  {t:'🐞 Czasem problemem jest materiał', html:`
   <div class="card"><p>Czasem lekcja staje się chaotyczna nie przez ucznia, ale przez faktyczny błąd w treści lub jej tłumaczeniu — niedziałający fragment kodu, instrukcję niepasującą do narzędzia, źle przetłumaczony termin. Oto najczęstsze sytuacje i przykłady reakcji:</p></div>
   ${iconGrid([
     {ic:'🐛', html:`<strong>Uczeń zauważa błąd w tłumaczeniu lub literówkę.</strong> Ruch: nazwij to na głos, rzeczowo, i zamień w coś, co rozwiązujecie razem, a nie w coś, co poszło nie tak. Przykład: <em>„Dobre oko — wygląda na to, że w tej linijce jest literówka. Zastanówmy się razem, co powinno tu być.”</em>`},
     {ic:'💻', html:`<strong>Uczeń odkrywa, że kod nie działa z powodu literówki.</strong> Przykład: <em>„Świetnie — ktoś złapał ukryty błąd. To był mały test, czy ktoś go zauważy.”</em>`},
     {ic:'🖼️', html:`<strong>Niektóre obrazki się nie wyświetlają lub nie wczytują.</strong> Przykład: <em>„To pewnie chwilowa usterka platformy, nie przejmujcie się — mam tu slajdy, więc i tak je zobaczycie.”</em> Albo: <em>„Spokojnie, takie rzeczy się zdarzają, a jako programiści będziecie się z tym spotykać wiele razy — na razie patrzcie na mój ekran.”</em>`}
   ])}
  `},
  {t:'💛 Spokojna reakcja na błędy', html:`
   <div class="card"><p>Błąd w treści to drobny moment, który może potoczyć się na dwa sposoby: stać się przelotną wpadką, której klasa ledwo zauważy, albo rysą na pewności siebie ucznia. O tym, czym się stanie, nie decyduje sam błąd — tylko to, jak zareagujesz na niego w pierwszych sekundach. Nazwanie go na głos, bez zażenowania i szukania winnych, mówi uczniom, że błędy są normalną, spodziewaną częścią nauki programowania, i pokazuje dokładnie to nastawienie, które chcesz, by przenieśli na własne błędy: zauważ, zachowaj ciekawość, napraw, idź dalej.</p></div>
   ${co('co-ok','✅',`<p><strong>Mów:</strong> <em>„Posiadanie dobrego oka i zauważanie błędów nie jest naszym problemem, tylko materiału. Razem poszukajmy wyjścia z tej sytuacji”.</em> Skieruj uwagę na wspólne szukanie rozwiązania i idźcie dalej.</p>`)}
   ${co('co-danger','⛔',`<p><strong>Unikaj:</strong> robienia z błędu wielkiej sprawy, obwiniania platformy na głos w sposób podważający zaufanie do kursu oraz poświęcania mu tyle czasu, że ucierpi reszta lekcji.</p>`)}
  `},
  {t:'🖥️ Jak znaleźć materiały — i zgłaszać błędy — w BO', html:`
   <div class="card"><p>Przewodnik i prezentacja do każdej lekcji znajdują się w BackOffice (BO), przypisane do dokładnie tej karty kursu, z której uczysz. W tym samym miejscu zgłaszasz błąd w treści — ikoną 🐞 w wierszu lekcji. Poniższa symulacja przeprowadzi cię przez to krok po kroku.</p></div>
   ${co('co-danger','🚨',`<p><strong>Zawsze sprawdzaj, czy ID otwieranego kursu zgadza się z tym, na który są zapisani twoi uczniowie.</strong> W BO obok siebie istnieją podobne kursy — prowadzenie lekcji z niewłaściwego może w kilka sekund wprowadzić chaos.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Materiały kursu i błędy w treści</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Materiały kursu i błędy w treści" loading="lazy"></iframe></div></div>
   ${co('co-star','⭐',`<p>Zgłoszenie błędu nie tylko naprawia twoją lekcję — naprawia ją dla każdej kolejnej grupy, która korzysta z tego samego materiału.</p>`)}
  `},
  {t:'🔧 Gdy problem jest techniczny: procedura', html:`
   <div class="card"><p>Czasem ciąg błędów na lekcji ma podłoże techniczne: zawieszony ekran, narzędzie, które się nie wczytuje, połączenie, które ciągle się zrywa. Problemy techniczne są normalne i mogą przytrafić się zarówno nauczycielom, jak i uczniom — ważne, żeby nie eskalowały.</p></div>
   ${co('co-idea','💡',`<p><strong>Złota zasada.</strong> Jeśli nie możesz rozwiązać problemu samodzielnie w ciągu <strong>10 minut</strong>, przestań próbować w milczeniu. <strong>Komunikuj → dokumentuj → eskaluj.</strong> Rodzic, który wie, co się dzieje, ufa ci. Rodzic, który nie wie — rezygnuje.</p>`)}
   ${stepFlow([
     {ic:'⏱️', label:'Pierwszy raz na lekcji: próbuj naprawić przez maksymalnie 10 minut'},
     {ic:'👩‍💼', label:'Nadal nie działa? Tego samego dnia powiedz liderowi zespołu — to lider zespołu decyduje o formie odrobienia lekcji'},
     {ic:'💬', label:'W ciągu 30 minut napisz ciepłą wiadomość do rodzica: zgłaszasz sprawę swojemu zespołowi'},
     {ic:'🎫', label:'Druga lekcja z rzędu? Tego samego dnia otwórz zgłoszenie (ticket) w Dziale Obsługi Klienta'},
     {ic:'✅', label:'Po rozwiązaniu: poinformuj rodzica i zamknij temat'}
   ])}
  `},
  {t:'🧑‍💻 Jak unikać problemów technicznych po swojej stronie', html:`
   <div class="card"><p>Problem techniczny nauczyciela może zatrzymać lekcję tak samo jak problem ucznia. Większość z nich da się wychwycić, zanim lekcja się zacznie.</p></div>
   ${iconGrid([
    {ic:'🔌', html:`<strong>Testuj 30 minut wcześniej.</strong> Przed każdą lekcją sprawdź połączenie internetowe, kamerę i mikrofon. Jeśli zauważysz problem, daj znać liderowi zespołu.`},
    {ic:'📷', html:`<strong>Szukaj alternatyw.</strong> Jeśli wyłączenie kamery poprawia połączenie, zrób to.`},
    {ic:'🎙️', html:`<strong>Miej zapasowy mikrofon.</strong> Jeśli słuchawki nie działają, spróbuj innej opcji, np. wbudowanego audio komputera, i zawsze włączaj redukcję szumów tła w Klasie Kodland.`},
    {ic:'📶', html:`<strong>Sprawdź sterowniki i to, czy masz włączony VPN</strong> — VPN zwykle spowalnia połączenie.`},
    {ic:'🧊', html:`<strong>Pracujesz z wymagającym narzędziem, takim jak Blender?</strong> Na pierwszych lekcjach kursu jest poradnik, jak je skonfigurować, by działało wydajniej.`},
    {ic:'💻', html:`<strong>Zwolnij RAM przed zajęciami.</strong> Google Chrome zapewnia najlepsze działanie Klasy Kodland, ale zużywa też dużo pamięci RAM — zamknij karty i programy, których w tej chwili nie potrzebujesz.`},
    {ic:'👂', html:`<strong>Potwierdź na żywo.</strong> Przed rozpoczęciem lekcji sprawdź z uczniami, czy dobrze cię widzą i słyszą — dzięki temu wcześnie wychwycisz problemy techniczne.`}
   ])}
  `},
  {t:'🎓 Wsparcie uczniów z problemami technicznymi', html:`
   <div class="card"><p>Problemy techniczne, na które uczniowie trafiają na zajęciach, często wynikają z tego, że korzystają z innej przeglądarki niż Google Chrome albo z urządzeń nieodpowiednich do danego kursu — na przykład próbują uczestniczyć w zajęciach na tablecie, telefonie lub iPadzie. Dlatego ważne jest, żeby znać minimalne wymagania i móc im pomóc.</p></div>
   ${doavoid(
    ["Google Chrome, zaktualizowany — jedyna w pełni kompatybilna przeglądarka",
     "Co najmniej 4 GB RAM (8 GB dla Blendera lub Unity)",
     "Stabilne połączenie, minimum 10 Mb/s — połączenie kablowe jest lepsze niż Wi-Fi, gdy to możliwe",
     "Co najmniej 5 GB wolnego miejsca na dysku — Unity i Blender potrzebują znacznie więcej"],
    ["Safari — znane błędy z platformą Kodland od ostatniej aktualizacji: niereagujące przyciski, niewczytujące się ekrany, błędy przy wejściu",
     "Tablety / iPady na kursach takich jak Roblox Studio czy Unity — potrzebny jest prawdziwy komputer",
     "Zakładanie, że problem na Macu to brak zaangażowania, zanim sprawdzisz, czy to po prostu Safari"]
   )}
   ${co('co-idea','🍎',`<p>Zwracaj szczególną uwagę na połączenie Mac + Safari. Jeśli u ucznia z Makiem przyciski nie reagują albo ekran się nie wczytuje, rozwiązanie prawie zawsze brzmi: otwórz zajęcia w Google Chrome. Kieruj rodziny na google.com/chrome.</p>`)}
  `},
  {t:'⚖️ Bez porzucania reszty klasy', html:`
   <div class="card"><p>Problemem jest nie tylko sama usterka techniczna — ale też nauczyciel tak skupiony na problemie jednego ucznia, że reszta grupy traci pięć czy dziesięć minut lekcji.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Wyznacz limit czasu.</strong> Daj uczniowi, którego to dotyczy, jedną szybką próbę naprawy (przejście na Chrome, odświeżenie, restart), potem poprowadź grupę dalej i wróć do tego ucznia między zadaniami lub po zajęciach.`},
     {ic:'👥', html:`<strong>Daj grupie zadanie</strong> w chwili, gdy zaczynasz rozwiązywać problem — nie zostawiaj uczniów wpatrzonych w nieruchomy ekran.`},
     {ic:'🫂', html:`<strong>Zachowaj spokój — także w głosie.</strong> Spokojne „czasem tak się zdarza, obejdziemy to” utrzymuje spokój w klasie, gdy naprawiasz problem.`},
     {ic:'📝', html:`<strong>Zostaw ślad.</strong> Jeśli jakieś urządzenie ciągle powoduje ten sam problem, poinformuj rodzinę, zostaw komentarz w BO i włącz w sprawę lidera zespołu — zamiast rozwiązywać to od nowa na każdej lekcji.`}
   ])}
  `}
 ],
 ix:{
  title:'Błędy w treści i problemy techniczne — sprawdzian modułu',
  instr:'70%, aby odblokować kolejny moduł.',
  items:[
   {type:'choice', prompt:'Uczeń zauważa faktyczny błąd w przykładowym kodzie z lekcji. Jaka powinna być twoja reakcja?', opts:['Bez wyjaśnienia pominąć zadanie, żeby oszczędzić czas','Spokojnie nazwać błąd i zamienić to w moment „rozwiążmy to razem”','Powiedzieć grupie, że platforma jest zawsze pełna błędów'], correct:1, fb:'Spokój i współpraca sprawiają, że lekcja nie wydaje się chaotyczna — i pokazują, jak radzić sobie z błędami.'},
   {type:'sort', prompt:'Błąd w treści czy problem techniczny?', card:'W kodzie startowym lekcji jest literówka, która powoduje błąd, zanim ktokolwiek cokolwiek zmieni.', zones:[{label:'🔧 Problem techniczny → postępuj według procedury', fb:'Nie do końca — błędny jest sam kod, u wszystkich. To błąd w treści: spokojnie go obejdź i zgłoś ikoną 🐞 w BO.'},{label:'🐞 Błąd w treści → zgłoś go w BO', fb:'Zgadza się — błędny jest sam materiał. Spokojnie to obejdź, a potem zgłoś ikoną 🐞, żeby błąd został poprawiony dla każdej grupy.'}], correctZone:1},
   {type:'sort', prompt:'Błąd w treści czy problem techniczny?', card:'Ekran ucznia ciągle się zawiesza, a dźwięk co chwilę zanika w trakcie lekcji.', zones:[{label:'🔧 Problem techniczny → postępuj według procedury', fb:'Zgadza się — spróbuj szybkiej naprawy, utrzymaj pracę grupy, a jeśli problem się powtarza: komunikuj, dokumentuj i eskaluj.'},{label:'🐞 Błąd w treści → zgłoś go w BO', fb:'Nie do końca — z materiałem wszystko w porządku. Zawieszony ekran i zanikający dźwięk to problemy techniczne: postępuj według procedury.'}], correctZone:0},
   {type:'choice', prompt:'Gdzie w BO zgłaszasz błąd w treści?', opts:['W wiadomości do rodziny ucznia','W zakładce Sprawdź danej grupy','Ikoną 🐞 w wierszu lekcji, w karcie kursu'], correct:2, fb:'Ikona 🐞 w każdym wierszu lekcji otwiera ankietę jakości treści — to dzięki niej materiał zostaje poprawiony.'},
   {type:'choice', prompt:'Ten sam problem techniczny pojawia się drugą lekcję z rzędu. Co się zmienia?', opts:['Tego samego dnia otwierasz zgłoszenie w Dziale Obsługi Klienta','Nic — dalej próbujesz naprawić to samodzielnie','Czekasz jeszcze jedną lekcję, żeby mieć pewność, że to powtarzający się problem'], correct:0, fb:'Powtórka oznacza, że czas przekazać sprawę do Działu Obsługi Klienta — i dać rodzicowi znać, że ktoś się z nim skontaktuje.'}
  ]
 }
},
{id:'operations', numLabel:'Moduł 3', emoji:'🏢', color:'var(--coral)',
 title:'Problemy firmy i lekcji: jak je właściwie zgłaszać',
 desc:'Co robić, gdy rodzina jest niezadowolona z rozliczeń, sald, grup, terminów rozpoczęcia, wsparcia lub obietnic sprzedaży — albo z samej lekcji — oraz jak skontaktować się z Client Service przez zgłoszenie w BO.',
 obj:'Odróżniać to, co masz naprawić, od tego, co masz zgłosić, odpowiadać na skargi operacyjne bez wyjaśniania, bronienia się ani obiecywania, naprawiać problemy lekcji, które leżą po Twojej stronie, i zgłaszać każdy przypadek do Client Service w BO tego samego dnia.',
 sections:[
  {t:'🧭 Do naprawienia przez Ciebie czy do zgłoszenia?', html:`
   <div class="card"><p>Bardzo negatywnie nastawiona rodzina rzadko narzeka na jedną rzecz. Często złość dotyczy firmy — obciążenia, salda, zmienionej grupy — a Ty jesteś po prostu osobą, którą widzą co tydzień. Zanim odpowiesz, zastanów się, jakiego rodzaju jest to problem:</p></div>
   ${patternCards([
     {ic:'🏢', title:'Firma i operacje', desc:'Rozliczenia, raty, salda, grupy, terminy rozpoczęcia, wsparcie, to, co obiecała sprzedaż, licencje.', note:'<strong>Nie do Ciebie należy rozwiązywanie ani wyjaśnianie.</strong> Potwierdź, że rozumiesz, zgłoś do Client Service w BO i poinformuj Team Leadera.'},
     {ic:'🧑‍🏫', title:'Lekcja lub tutor', desc:'Tempo, wyjaśnienia, chaotyczna grupa, odwołana lekcja, połączenie, specjalne potrzeby, zmiany tutora.', note:'<strong>Częściowo należy do Ciebie.</strong> Popraw, co możesz, na następnej lekcji i zgłoś to.'},
     {ic:'🔧', title:'Techniczne', desc:'Classroom, platforma, narzędzia kursu, urządzenie ucznia.', note:'<strong>Postępuj zgodnie z protokołem</strong> z Modułu 2: 10 minut, potem komunikacja, dokumentacja i eskalacja.'}
   ],3)}
  `},
  {t:'🏢 Sprawy operacyjne i firmy — co robisz i co mówisz', html:`
   <div class="card"><p>Kliknij każdą sprawę. Schemat jest zawsze ten sam: <strong>okaż zrozumienie, nie wyjaśniaj, nie obiecuj, zgłoś tego samego dnia.</strong> Nie masz pełnego obrazu płatności, umowy ani rozmowy handlowej danej rodziny — a dobrze zamierzone przypuszczenie może zamienić się w obietnicę, której firma nie dotrzyma.</p></div>
   ${symCards([
     {ic:'💳', title:'Rozliczenia i raty',
      see:`Nieoczekiwane obciążenie, rata, o której rodzina nie wiedziała, płatność, którą ich zdaniem już zrealizowano.`,
      do:`Zapisz dokładnie, co mówi rodzina, i zgłoś to do Client Service w BO tego samego dnia.`,
      say:`<em>«Rozumiem, że to niepokojące. Przekazałem(-am) sprawę do Obsługi Klienta, która Państwu w tym pomoże.»</em>`,
      rep:`Client Service (zgłoszenie w BO) + Team Leader + komentarz w BO.`,
      avoid:`Wyjaśniania, jak działają płatności, lub oceniania, czy obciążenie jest prawidłowe.`},
     {ic:'🔄', title:'Przeliczenie po przejściu na Premium lub inny format',
      see:`Rodzina przeszła na Premium, lekcje indywidualne lub inny format i jest niezadowolona z liczby lekcji, którą ma teraz.`,
      do:`Nie komentuj liczb. Zgłoś to do Client Service w BO, używając słów samej rodziny.`,
      say:`<em>«Obsługa Klienta Państwu w tym pomoże.»</em>`,
      rep:`Client Service (zgłoszenie w BO) + Team Leader + komentarz w BO.`,
      avoid:`Samodzielnego przeliczania lekcji lub przyznawania racji, że to niesprawiedliwe.`},
     {ic:'🎟️', title:'Sporne saldo',
      see:`«Powinniśmy mieć więcej lekcji.» «Odliczono lekcję, która się nie odbyła.»`,
      do:`Sprawdź obecność, którą zaznaczyłeś(-aś) w BO, a potem przekaż sprawę Team Leaderowi i do Client Service tego samego dnia — Operations sprawdza salda i odliczenia.`,
      say:`<em>«Dziękuję, że mi Państwo o tym powiedzieli. Przekazałem(-am) to mojemu zespołowi, aby zostało sprawdzone.»</em>`,
      rep:`Team Leader + Client Service + komentarz w BO (Operations / Client Service: @Erika Ietro, @Katarzyna Traczyk).`,
      avoid:`Obiecywania zwrotu lekcji lub twierdzenia, że saldo jest poprawne albo błędne.`},
     {ic:'👥', title:'Zmiany grup lub grupa, która zostaje rozwiązana',
      see:`Grupa została przeniesiona, połączona lub zamknięta, a dziecko straciło kolegów, tutora lub znany termin.`,
      do:`Zadbaj, by pierwsza lekcja w nowej sytuacji była przyjazna. Zgłoś obawy rodziny do Client Service w BO.`,
      say:`<em>«Rozumiem, że ta zmiana nie jest łatwa. Przekazałem(-am) to mojemu zespołowi, aby skontaktował się z Państwem.»</em>`,
      rep:`Client Service (zgłoszenie w BO) + Team Leader + komentarz w BO.`,
      avoid:`Wyjaśniania, dlaczego grupa się zmieniła, lub obiecywania powrotu starej grupy.`},
     {ic:'⏳', title:'Opóźnienia w starcie',
      see:`Rodzina czeka na otwarcie grupy albo zmienił się termin rozpoczęcia.`,
      do:`Nie podawaj dat, których nie znasz. Zgłoś to do Client Service w BO.`,
      say:`<em>«Rozumiem, że oczekiwanie jest frustrujące. Obsługa Klienta pomoże Państwu w sprawie terminu rozpoczęcia.»</em>`,
      rep:`Client Service (zgłoszenie w BO) + Team Leader + komentarz w BO.`,
      avoid:`Zgadywania terminu rozpoczęcia lub obwiniania innego zespołu.`},
     {ic:'📞', title:'«Wsparcie nie odpowiada»',
      see:`Rodzina mówi, że nikt nie odpowiada na ich wiadomości ani telefony.`,
      do:`Okaż zrozumienie — ta frustracja jest prawdziwa. Zgłoś to tego samego dnia, aby Client Service wiedział, że rodzina czeka.`,
      say:`<em>«Przykro mi, że nie otrzymali Państwo odpowiedzi. Zgłosiłem(-am) to dzisiaj, aby Obsługa Klienta się z Państwem skontaktowała.»</em>`,
      rep:`Client Service (zgłoszenie w BO) + Team Leader + komentarz w BO.`,
      avoid:`Mówienia «oni nigdy nie odpowiadają» lub krytykowania zespołu — to potwierdza największą obawę rodziny.`},
     {ic:'🗣️', title:'«Sprzedaż obiecała nam coś innego»',
      see:`Mniejsze grupy, inny kurs, poziom, cena lub wynik, który «nam obiecano».`,
      do:`Zapisz słowa rodziny dosłownie i zgłoś je. Na lekcji skup się na tym, co możesz zrobić dla dziecka.`,
      say:`<em>«Dziękuję, że mi Państwo o tym powiedzieli. Przekazałem(-am) to mojemu zespołowi, a Obsługa Klienta skontaktuje się z Państwem w tej sprawie.»</em>`,
      rep:`Client Service (zgłoszenie w BO) + Team Leader + komentarz w BO.`,
      avoid:`Potwierdzania lub zaprzeczania temu, co powiedziała sprzedaż, oraz składania nowej obietnicy, by to naprawić.`},
     {ic:'🧱', title:'Licencja Minecraft',
      see:`Pytania lub skargi dotyczące konta albo licencji Minecraft, lub tego, dlaczego kurs działa w taki sposób.`,
      do:`Pomóż w tym, co dotyczy lekcji (konto wymagane przez kurs, konfiguracja). Wszystko, co dotyczy samej licencji, trafia do Client Service.`,
      say:`<em>«Obsługa Klienta pomoże Państwu w sprawie licencji.»</em>`,
      rep:`Client Service (zgłoszenie w BO) + Team Leader + komentarz w BO.`,
      avoid:`Komentowania wewnętrznych powodów, licencji lub zmian w treści kursu.`}
   ])}
   ${co('co-ok','✅',`<p><strong>Okazywanie zrozumienia jest zawsze dozwolone.</strong> Krótka, ciepła odpowiedź — widzę to, rozumiem, przekazałem(-am) dalej — nie wymaga niczyjej zgody. Wyjaśnienia, opcje i wszystko, co dotyczy pieniędzy, czekają na Client Service.</p>`)}
  `},
  {t:'🧑‍🏫 Gdy problemem jest lekcja', html:`
   <div class="card"><p>Niektóre ostre skargi dotyczą samej lekcji. Częściowo należą do Ciebie: popraw, co możesz, już od najbliższej lekcji — i mimo to zgłoś sprawę, aby Team Leader i Client Service nie zostali zaskoczeni.</p></div>
   <div class="tbl-wrap"><table>
    <tr><th>Co mówi rodzina</th><th>Co robisz</th><th>Co zgłaszasz</th></tr>
    <tr><td>«Metoda nie jest odpowiednia dla jego wieku»</td><td>Krótsze kroki, znane dzieciom słowa, więcej pokazywania — dostosuj się do wieku grupy</td><td>Komentarz w BO + Team Leader, jeśli różnica wieku w grupie jest duża</td></tr>
    <tr><td>«Tutor idzie dalej bez wyjaśnienia»</td><td>Jedna instrukcja naraz i sprawdzanie zrozumienia, zanim pójdziesz dalej</td><td>Komentarz w BO z opisem tego, co zmieniono</td></tr>
    <tr><td>«Grupa jest chaotyczna»</td><td>Zasady zajęć od lekcji 1, kolejność zabierania głosu, spokojne i stanowcze prowadzenie</td><td>Komentarz w BO + poinformowanie rodziny o incydentach</td></tr>
    <tr><td>«Tutor się nie pojawił» / «lekcję przełożono»</td><td>Nigdy nie odwołuj ani nie przesuwaj lekcji samodzielnie; poinformuj Team Leadera, gdy tylko się dowiesz</td><td>Team Leader tego samego dnia — to on decyduje o odrobieniu lekcji</td></tr>
    <tr><td>«Połączenie ciągle zawodzi»</td><td>Sprawdzaj swoją konfigurację przed każdą lekcją; postępuj zgodnie z protokołem technicznym</td><td>Bot EU Request from Tutors + komentarz w BO</td></tr>
    <tr><td>«Tutor nie był przygotowany na specjalne potrzeby mojego dziecka»</td><td>Rutyna, wolniejsze tempo, mniejsze kroki, inne sposoby odpowiadania; zapytaj rodzinę, co pomaga</td><td>Komentarz w BO + Team Leader — Ty rekomendujesz, on decyduje o formacie</td></tr>
    <tr><td>«Zbyt wiele zmian tutora»</td><td>Jeśli przejmujesz grupę, przeczytaj komentarze w BO, przedstaw się i zachowaj rutyny grupy</td><td>Team Leader, aby rodzina została z wyprzedzeniem poinformowana o zmianach</td></tr>
   </table></div>
   ${co('co-idea','📚',`<p><strong>Chcesz pogłębić temat?</strong> Tempo, sprawdzanie zrozumienia i punktualność omówiono w mini-szkoleniu <em>Lesson Quality</em>; chaotyczne grupy w <em>Lesson Organisation</em>; specjalne potrzeby w <em>No Interest</em> i <em>Online Format</em>; problemy z połączeniem w <em>Technical Issues</em>.</p>`)}
  `},
  {t:'📮 Jak skontaktować się z Client Service — i co napisać', html:`
   <div class="card"><p>Kontaktujesz się z Client Service przez BO: zgłoszenie w <strong>Tutors' Evaluations</strong> ucznia trafia bezpośrednio do nich. Zrób to <strong>tego samego dnia</strong> — rodzina, która czuje się ignorowana, szybko się zaogni.</p></div>
   ${timeline([
     {ic:'📝', label:'Zgłoś w BO', items:[
       'Profil ucznia → <strong>Progress</strong> → <strong>Tutors\' Evaluations</strong> → <strong>Evaluate The Student</strong>.',
       '<strong>Problem Kind:</strong> najbliższy — na przykład <em>«Student wants to drop the studies/asks for refund»</em>, <em>«Client wants to change the schedule»</em> lub <em>«Other»</em> w przypadku rozliczeń, sald, grup albo obietnic sprzedaży.',
       'Wybierz grupę, napisz komentarz z faktami i słowami samej rodziny, a następnie potwierdź.'
     ]},
     {ic:'👩‍💼', label:'Poinformuj Team Leadera', items:[
       'Tego samego dnia, z linkiem do ucznia w BO. Ustal z nim, co ewentualnie powiesz rodzinie w następnej kolejności.'
     ]},
     {ic:'🧭', label:'Inne kanały, gdy mają zastosowanie', items:[
       '<strong>Problem techniczny, którego nie umiesz rozwiązać:</strong> <em>bot EU Request from Tutors</em> — a w przypadku problemu z konkretnym kursem lub programem: <em>kanał kursu</em>.',
       '<strong>Kredyty lekcji, odliczenia, błędny harmonogram:</strong> Twój Team Leader + Operations / Client Service (<strong>@Erika Ietro</strong>, <strong>@Katarzyna Traczyk</strong>).'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Jak wygląda przydatne zgłoszenie — skopiuj i uzupełnij</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Data:</strong> [data] · <strong>Grupa:</strong> [link do BO] · <strong>Uczeń:</strong> [link do BO]<br>
   <strong>Co zgłosiła rodzina:</strong> [np. nieoczekiwana rata; zmiana grupy; «sprzedaż obiecała mniejszą grupę»]<br>
   <strong>Słowa rodziny:</strong> [dosłownie]<br>
   <strong>Co powiedziałem(-am):</strong> [np. okazałem(-am) zrozumienie i powiedziałem(-am), że Obsługa Klienta pomoże — bez wyjaśnień i obietnic]<br>
   <strong>Kontekst lekcji:</strong> [obecność, jak radzi sobie uczeń, wszystko, co istotne]<br>
   <strong>Co poleciłbym(-abym) sprawdzić:</strong> [opcjonalnie — Twoja rekomendacja, ich decyzja]</p></div>
   <div class="card"><p><strong>Przećwicz to teraz.</strong> Rodzic właśnie napisał: <em>«Obciążyliście nas ratą, na którą się nie zgodziliśmy, a grupa zmieniła się, nikogo o tym nie informując. Chcemy zwrotu pieniędzy.»</em> Zgłoś to w tej replice BO. W <strong>kroku 4</strong> wybierz Problem Kind <strong>«Student wants to drop the studies/asks for refund»</strong> i opisz fakty oraz słowa samej rodziny.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Zgłoś przypadek do Client Service</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Zgłoś przypadek do Client Service" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Dlaczego to działa:</strong> Client Service może naprawić tylko to, o czym wie. Kompletne, neutralne zgłoszenie ze słowami samej rodziny oszczędza im telefon — i sprawia, że rodzina szybciej dostaje odpowiedź.</p>`)}
  `}
 ],
 ix:{
  title:'Naprawić czy zgłosić — test modułu',
  instr:'Przyporządkuj każdy przypadek i wybierz najlepsze działanie. 70%, aby odblokować kolejny moduł.',
  items:[
   {type:'sort', prompt:'Jakiego rodzaju jest to problem?', card:`«Obciążono nas ratą, na którą nigdy się nie zgodziliśmy.»`, zones:[{label:'🏢 Firma i operacje', fb:'Zgadza się! Okaż zrozumienie, nie wyjaśniaj płatności i zgłoś to do Client Service w BO tego samego dnia.'},{label:'🧑‍🏫 Lekcja lub tutor', fb:'Niezupełnie — nic tu nie dotyczy lekcji. Rozliczenia trafiają do Client Service.'},{label:'🔧 Techniczne', fb:'Niezupełnie — to pytanie o rozliczenia, a nie awaria platformy.'}], correctZone:0},
   {type:'sort', prompt:'Jakiego rodzaju jest to problem?', card:`«Tutor idzie za szybko dla mojego 7-latka i nie sprawdza, czy zrozumiał.»`, zones:[{label:'🏢 Firma i operacje', fb:'Niezupełnie — to dotyczy sposobu prowadzenia lekcji. Część z tego należy do Ciebie.'},{label:'🧑‍🏫 Lekcja lub tutor', fb:'Zgadza się! Zwolnij kroki, sprawdzaj zrozumienie od następnej lekcji i zostaw komentarz w BO z opisem tego, co zmieniono.'},{label:'🔧 Techniczne', fb:'Niezupełnie — nic technicznie nie zawiodło; chodzi o tempo lekcji.'}], correctZone:1},
   {type:'choice', prompt:`Rodzic mówi: «Po przejściu na Premium zostało nam tylko 19 lekcji — to oszustwo.» Co odpowiadasz?`, opts:[`«Tak działa przeliczenie — lekcje Premium kosztują więcej.»`,`«Rozumiem, że to frustrujące. Przekazałem(-am) sprawę do Obsługi Klienta, która Państwu w tym pomoże.»`,`«Ma Pan(i) rację, to nie brzmi sprawiedliwie. Poproszę, żeby oddali Państwu lekcje.»`], correct:1, fb:`Okaż zrozumienie bez wyjaśniania, przyznawania racji i obiecywania. Przeliczenie wyjaśnia Client Service — potem zgłoś to w BO i poinformuj Team Leadera.`},
   {type:'choice', prompt:`Które zgłoszenie w BO jest najbardziej przydatne w przypadku rodziny niezadowolonej ze zmiany grupy?`, opts:[`«Rodzic znowu zdenerwowany. Problem z grupą.»`,`«12/11, grupa [link do BO]. Matka napisała: 'Przenieśli mojego syna do innej grupy, nic nam nie mówiąc, a teraz nie chce przychodzić.' Okazałem(-am) zrozumienie i powiedziałem(-am), że Obsługa Klienta się z nią skontaktuje. Uczestniczył we wszystkich 6 lekcjach i radzi sobie dobrze.»`,`«Rodzina narzeka na wszystko, proszę się tym zająć.»`], correct:1, fb:`Fakty, słowa samej rodziny, co powiedziałeś(-aś) i kontekst lekcji. Neutralnie i kompletnie — aby Client Service mógł działać bez dzwonienia do Ciebie.`},
   {type:'sort', prompt:'W porządku czy lepiej unikać?', card:`Rodzic pyta, kiedy ruszy nowa grupa. Odpowiadasz: «Prawdopodobnie za dwa tygodnie.»`, zones:[{label:'✅ W porządku', fb:'Niezupełnie — zgadnięta data staje się obietnicą. Jeśli się nie sprawdzi, rodzina znów traci zaufanie.'},{label:'🚫 Lepiej unikać', fb:'Zgadza się! Nie podawaj dat, których nie znasz. Obsługa Klienta pomoże w sprawie terminu rozpoczęcia; zgłoś to w BO.'}], correctZone:1}
  ]
 }
},
{id:'angry', numLabel:'Moduł 4', emoji:'🌋', color:'var(--coral)',
 title:'Bardzo zdenerwowani lub grożący rodzice',
 desc:'Co robić, gdy rodzic jest wściekły, grozi lub obraża — czasem bez wyraźnej przyczyny: zachować spokój, utrzymać granice i szacunek, udokumentować sprawę i skierować rodzinę do Client Service.',
 obj:'Zachować równowagę wobec bardzo zdenerwowanego rodzica, okazać zrozumienie bez kłótni i obietnic, spokojnie wyznaczać granice, gdy znika szacunek, skierować rodzinę do Client Service i udokumentować sprawę w BO tego samego dnia.',
 sections:[
  {t:'🌋 Gdy złość jest większa niż problem', html:`
   <div class="card"><p>Czasem rodzic przychodzi wściekły, a Ty nie możesz znaleźć przyczyny: lekcje przebiegały dobrze, nic oczywistego się nie wydarzyło. Złość może wynikać z długiego łańcucha spraw, których nigdy nie widziałeś(-aś) — obciążenia, telefonu, na który nikt nie oddzwonił, złego tygodnia. Jesteś po prostu osobą, do której mogą dotrzeć.</p></div>
   ${iconGrid([
     {ic:'🚫', html:`<strong>To nie Twoje zadanie wygrać spór</strong> — ani udowodnić rodzinie, że się myli.`},
     {ic:'🙅', html:`<strong>To nie Twoje zadanie przyjmować obelgi</strong> lub groźby.`},
     {ic:'✅', html:`<strong>Twoim zadaniem jest</strong> zachować spokój i szacunek, utrzymać granice, udokumentować, co się stało, i przekazać sprawę do Client Service.`}
   ])}
  `},
  {t:'🧘 Najpierw uspokój siebie', html:`
   <div class="card"><p>Złość jest zaraźliwa — spokój też. Zanim odpowiesz, zadbaj o swój stan: to pierwsze narzędzie, jakie masz.</p></div>
   ${iconGrid([
     {ic:'🌬️', html:`<strong>Oddychaj, zanim odpowiesz.</strong> Jednosekundowa pauza powstrzymuje impulsywną odpowiedź.`},
     {ic:'🔉', html:`<strong>Obniż głos i zwolnij</strong> podczas rozmowy telefonicznej. W piśmie używaj krótkich, neutralnych zdań.`},
     {ic:'⏱️', html:`<strong>Wiadomość pisemna?</strong> Odpowiedz tego samego dnia — ale poświęć kilka minut, zanim napiszesz, i nigdy nie odpowiadaj w złości.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Nie jesteś sam(-a).</strong> Wcześnie poinformuj Team Leadera — nie musisz radzić sobie z groźnym rodzicem w pojedynkę.`}
   ])}
  `},
  {t:'🪜 Co robić, krok po kroku', html:`
   ${stepper([
     {ic:'🤝', title:'Okaż zrozumienie dla uczuć', html:`<p>Pokaż, że ich wysłuchałeś(-aś), nie zgadzając się z oskarżeniami.</p><p><em>«Widzę, że są Państwo bardzo zdenerwowani, i chcę się upewnić, że to trafi do właściwych osób.»</em></p>`},
     {ic:'❓', title:'Jeśli przyczyna jest niejasna, zapytaj raz', html:`<p>Jedno otwarte pytanie — nie zgaduj i nie przesłuchuj.</p><p><em>«Czy mogliby mi Państwo opowiedzieć, co się stało, abym mógł(-ogła) to dokładnie przekazać?»</em></p>`},
     {ic:'🧊', title:'Nie kłóć się, nie broń się, nie obiecuj', html:`<p>Nie poprawiaj ich wersji, nie obwiniaj innych zespołów ani platformy i nie oferuj niczego, by ich uspokoić.</p>`},
     {ic:'📞', title:'Skieruj ich do Client Service', html:`<p>Tam są odpowiedzi i opcje.</p><p><em>«Obsługa Klienta pomoże Państwu w tej sprawie — już przekazałem(-am) Państwa wiadomość.»</em></p>`},
     {ic:'📝', title:'Udokumentuj to tego samego dnia', html:`<p>Zgłoś w BO z dokładnymi słowami rodzica — w tym ewentualną groźbą — i poinformuj Team Leadera tego samego dnia.</p>`}
   ])}
  `},
  {t:'🛑 Granice i szacunek', html:`
   <div class="card"><p>Szacunek działa w obie strony. Zachowujesz szacunek, cokolwiek się dzieje — i możesz spokojnie wyznaczyć granicę, gdy rozmowa przestaje być pełna szacunku.</p></div>
   ${co('co-ok','🗣️',`<p><strong>Granica, którą możesz wypowiedzieć:</strong> <em>«Chcę Państwu pomóc i chętnie będę kontynuować, gdy będziemy mogli rozmawiać z szacunkiem. Przekazałem(-am) Państwa wiadomość do Obsługi Klienta, która się z Państwem skontaktuje.»</em> Podczas rozmowy telefonicznej możesz uprzejmie ją zakończyć po wypowiedzeniu tych słów.</p>`)}
   ${doavoid(
     ['Zachowaj spokojny, neutralny ton, nawet wobec obelg','Zignoruj treść groźby (prawnik, opinie, media społecznościowe) — zamiast tego zgłoś ją słowo w słowo','Nadal traktuj dziecko ciepło: dziecko nigdy nie odpowiada za złość rodzica','Jeśli rodzic przerywa lekcję, bądź zwięzły(-a): <em>«Dopilnuję, by Państwa wiadomość dotarła do naszego zespołu po lekcji»</em> — i kontynuuj dla uczniów'],
     ['Odpowiadania z agresją, sarkazmu lub obelg','Kłótni na czacie grupowym przy innych rodzinach','Obiecywania zwrotu pieniędzy, rekompensaty lub zmiany, aby ich uspokoić','Rozmawiania o konflikcie przy uczniach']
   )}
   ${co('co-danger','🚨',`<p><strong>Groźby, obelgi lub nękanie zawsze się zgłasza</strong> — w BO, z dokładnymi słowami, oraz Team Leaderowi tego samego dnia. Nie decydujesz sam(-a), czy dalej rozmawiać z tą rodziną.</p>`)}
  `},
  {t:'💬 Przećwicz to', html:`
   ${chatMock({
     name:'Rodzic', sub:'online', avatar:'😠', time:'21:15',
     msgs:[`To OSZUSTWO. Nic nie działa, nikt nie odpowiada, a mój syn niczego się nie nauczył. Jeśli do jutra nie dostanę WSZYSTKICH pieniędzy z powrotem, idę do prawnika i będę o Was pisać wszędzie.`],
     title:'Jak odpowiadasz?',
     text:'Jest późno, wiadomość jest agresywna i nie ma wyraźnej przyczyny — Twoje lekcje przebiegały dobrze. Kliknij każdą odpowiedź, aby zobaczyć, co się stanie.',
     opts:[
      {t:`«Nie jesteśmy oszustwem. Pana syn uczestniczył we wszystkich lekcjach i radzi sobie dobrze — proszę sprawdzić, zanim nas Pan oskarży.»`, ok:false, fb:`Bronienie się zamienia to w kłótnię i jeszcze bardziej denerwuje rodzica. Nawet jeśli to prawda, nie Twoim zadaniem jest udowadniać, że się myli.`},
      {t:`«Przykro mi, że tak się Pan czuje, i chcę się upewnić, że Pana wiadomość trafi do właściwych osób. Przekazałem(-am) ją do Obsługi Klienta, która Panu w tym pomoże. Nadal będę robić wszystko, co w mojej mocy, dla [uczeń] na naszych lekcjach.»`, ok:true, fb:`Spokojnie, z szacunkiem i jasno: okazujesz zrozumienie dla uczuć, nie kłócisz się z oskarżeniem, nie reagujesz na groźbę i kierujesz do Client Service. Potem zgłoś to w BO z dokładnymi słowami i poinformuj Team Leadera.`},
      {t:`«Proszę tego nie robić! Dopilnuję, żeby dostał Pan pieniądze z powrotem.»`, ok:false, fb:`Zwrotu pieniędzy nie możesz obiecywać. Jeśli nie stanie się to dokładnie tak, jak powiedziałeś(-aś), następna wiadomość będzie jeszcze bardziej gniewna.`},
      {t:`Odpuszczam — odpowiedź tylko pogorszy sprawę.`, reply:`<i>(brak odpowiedzi…)</i>`, ok:false, fb:`Milczenie potwierdza, że «nikt nie odpowiada». Okaż zrozumienie tego samego dnia, krótko i spokojnie — i zgłoś sprawę.`}
     ]
   })}
  `}
 ],
 ix:{
  title:'Bardzo zdenerwowani rodzice — test modułu',
  instr:'Wybierz najlepsze działanie lub przyporządkuj każdą odpowiedź. 70%, aby odblokować końcową listę kontrolną.',
  items:[
   {type:'choice', prompt:`Rodzic dzwoni, krzycząc, że «ta szkoła to katastrofa», ale nie wiesz, co się stało. Co robisz najpierw?`, opts:[`Wyjaśniasz wszystko, co poszło dobrze na lekcjach`,`Obniżasz głos, okazujesz zrozumienie dla jego zdenerwowania i pytasz raz: «Czy mógłby mi Pan opowiedzieć, co się stało, abym mógł(-ogła) to dokładnie przekazać?»`,`Rozłączasz się — nie musisz tego słuchać`], correct:1, fb:`Uspokój siebie, okaż zrozumienie dla uczuć i zadaj jedno otwarte pytanie. Potem skieruj do Client Service i udokumentuj.`},
   {type:'sort', prompt:'Skarb czy śmieć? Czy to dobra odpowiedź?', card:`«Chcę Panu pomóc i chętnie będę kontynuować, gdy będziemy mogli rozmawiać z szacunkiem. Przekazałem(-am) Pana wiadomość do Obsługi Klienta.»`, zones:[{label:'💎 Skarb', fb:'Zgadza się! Spokojna granica, która zachowuje szacunek i kieruje do Client Service.'},{label:'🗑️ Śmieć', fb:'Niezupełnie — to granica pełna szacunku, dokładnie to, co możesz powiedzieć, gdy rozmowa przestaje być pełna szacunku.'}], correctZone:0},
   {type:'choice', prompt:`Rodzic grozi opublikowaniem złych opinii, jeśli nie dostanie zwrotu pieniędzy. Co robisz z groźbą?`, opts:[`Odpowiadasz, że opinie niczego nie zmienią`,`Obiecujesz poprosić o zwrot pieniędzy, żeby ich nie publikował`,`Nie reagujesz na nią — zgłaszasz ją w BO słowo w słowo i informujesz Team Leadera tego samego dnia`], correct:2, fb:`Nie negocjuje się z groźbą ani się z nią nie kłóci. Dokumentuje się ją dokładnie i pozwala, by zajęli się nią Team Leader i Client Service.`},
   {type:'sort', prompt:'Skarb czy śmieć? Czy to dobra odpowiedź?', card:`Na czacie grupowym, przy innych rodzinach: «Pana syn to ten, który nigdy nie uważa, więc proszę nie obwiniać mnie.»`, zones:[{label:'💎 Skarb', fb:'Niezupełnie — obwinia dziecko, kłóci się publicznie i zaogni konflikt.'},{label:'🗑️ Śmieć', fb:'Zgadza się! Nigdy nie kłóć się na czacie grupowym ani nie obwiniaj dziecka. Krótko okaż zrozumienie i przekaż sprawę do Client Service i Team Leadera.'}], correctZone:1}
  ]
 }
},
{id:'checklist', numLabel:'Lista kontrolna', emoji:'✅', color:'var(--coral)',
 title:'Końcowa lista kontrolna',
 desc:'Tu nie ma quizu — tylko najważniejsze punkty tego miniszkolenia, zanim je zakończysz.',
 obj:'Zapoznać się z poniższą listę kontrolną. Ten moduł nie jest oceniany — należy go przeczytać, a potem ukończyć miniszkolenie.',
 sections:[
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   ${numlist([
     'Tego samego dnia, w którym dowiaduję się o wniosku, zostawiam komentarz w BO i informuję lidera zespołu',
     'Moja następna lekcja z tym uczniem to prawdziwa próba pomocy — mogę dać uczniowi prawdziwą okazję do działania, pokazać mu jego sukcesy, przekazać konkretną uwagę, jednak ani słowa o wniosku',
     'Nigdy nie potwierdzam zatwierdzenia zwrotu i nie rozmawiam o kwotach — używam jednego bezpiecznego zdania, a resztę zostawiam Działowi Obsługi Klienta'
   ])}
  `},  {t:'🌱 Na każdej lekcji', html:`
   ${numlist([
     'Każdą lekcję studiuję i przećwiczam dzień wcześniej, zaczynając od celów i oczekiwanych efektów w przewodniku lekcji',
     'Korzystam z sugerowanych sformułowań z przewodnika lekcji, by wyjaśniać nowe pojęcia, a o każdą lukę pytam przed lekcją mentora, lidera zespołu lub na kanale na Slacku',
     'Najpierw modeluję: demonstruję na swoim ekranie i myślę na głos, zanim uczniowie spróbują',
     'Stosuję technikę dydaktyczną „rusztowanie”: dużo wsparcia na początku (szablon, prowadzone kroki), mniej, w miarę jak uczeń staje się samodzielny',
     'Gdy w materiale jest błąd, spokojnie go nazywam i zamieniam w coś, co rozwiązujemy razem',
     'Normalizuję błędy na głos, żeby uczniowie widzieli w nich normalną część nauki programowania — a nie powód do wstydu',
     'Nigdy nie robię z błędu wielkiej sprawy, nie obwiniam platformy przy uczniach i nie pozwalam, by błąd zabrał resztę lekcji',
     'Każdy błąd w treści zgłaszam ikoną 🐞 w BO i sprawdzam, czy ID kursu zgadza się z grupą moich uczniów',
     'Testuję połączenie, kamerę i mikrofon 30 minut przed zajęciami i zamykam niepotrzebne karty i programy',
     'Dbam o to, by uczniowie korzystali z Google Chrome i odpowiedniego urządzenia — nie z Safari i nie z tabletów na kursach takich jak Roblox Studio czy Unity',
     'Przy problemach technicznych: do 10 minut na naprawę, potem komunikuję, dokumentuję i eskaluję — a jeśli problem powtarza się dwie lekcje z rzędu, otwieram zgłoszenie w Dziale Obsługi Klienta',
     'Gdy pomagam jednemu uczniowi z problemem technicznym, daję reszcie grupy zadanie, żeby nikt nie czekał bezczynnie',
     'W sprawach rozliczeń, rat, przeliczeń, sald, zmian grup, opóźnień w starcie, wsparcia lub obietnic sprzedaży oraz licencji Minecraft okazuję zrozumienie — nie wyjaśniam, nie bronię się i nie obiecuję.',
     'Zgłaszam te przypadki do Client Service w BO tego samego dnia (Tutors\' Evaluations → Evaluate The Student), ze słowami samej rodziny, i informuję Team Leadera.',
     'Korzystam z właściwego kanału: bot EU Request from Tutors w sprawie problemów technicznych, Team Leader i Operations w sprawie kredytów i odliczeń.',
     'Gdy problemem jest lekcja — tempo, wyjaśnienia, chaotyczna grupa, odwołana lekcja, specjalne potrzeby, zmiany tutora — poprawiam swoją część od następnej lekcji i mimo to zgłaszam sprawę.',
     'Wobec bardzo zdenerwowanego lub grożącego rodzica uspokajam siebie, okazuję zrozumienie dla uczuć, pytam raz, jeśli przyczyna jest niejasna, i kieruję do Client Service.',
     'Zachowuję szacunek i spokojnie wyznaczam granice; nigdy się nie kłócę, nie odpowiadam agresją ani niczego nie obiecuję, by uspokoić rodzica.',
     'Zgłaszam groźby i obelgi słowo w słowo w BO i informuję Team Leadera tego samego dnia — i nadal ciepło traktuję dziecko.'
   ])}
  `},  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>To już całe miniszkolenie.</strong> Kiedy zechcesz, przejdź dalej — a potem wykonaj DST w LMS, aby zamknąć zadanie.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
