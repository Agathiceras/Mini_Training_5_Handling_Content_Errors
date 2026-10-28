/* Mini_Training_5_Handling_Content_Errors - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pl';
const CONTENT = {
  flag:'🇵🇱', dir:'ltr',
  ui:{
    pageTitle:"Miniszkolenie · Radzenie sobie z błędami na zajęciach — szkolenie nauczycieli Kodland",
    logoSub:'Dział Rozwoju Nauczycieli',
    heroEyebrow:"🎯 Miniszkolenie",
    heroTitle:"Jak utrzymać spokojną lekcję mimo <span class=\"h-pill\">błędów</span>",
    heroIntro:"Widzisz to szkolenie, ponieważ rodzina zgłosiła lekcję, która wydawała się pełna błędów i frustracji. Większość takich sytuacji wynika z przygotowania, sposobu wyjaśniania lub faktycznych błędów w treści — i wszystko to da się naprawić.",
    heroWork:"Przejdź przez 4 krótkie moduły. Aby odblokować kolejny, w sprawdzianie każdego modułu potrzebujesz co najmniej 70%. Całość zajmie około 25–30 minut.",
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
    doneP2:"To już wszystko! Wróć na stronę szkolenia w LMS, z której trafiasz do tego miniszkolenia, aby zamknąć zadanie.",
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
 desc:'Dlaczego lekcja pełna błędów wydaje się chaotyczna — i jakie zasady obowiązują, gdy wniosek o zwrot już wpłynął.',
 obj:'Zrozum, że większość takich przypadków wynika z przygotowania, sposobu wyjaśniania lub problemów z treścią — a każdy z nich ma konkretne rozwiązanie — i co dokładnie robić (a czego nie robić), gdy wniosek o zwrot już istnieje.',
 sections:[
  {t:'😤 Gdy lekcja wydaje się ciągiem błędów', html:`
   <div class="card"><p>Lekcja pełna błędów — ucznia, materiału albo takich, które pojawiają się w trakcie wyjaśniania — może szybko wydawać się chaotyczna, jeśli nie ma planu, jak sobie z nimi radzić. Rodziny szybko to zauważają: odbierają to jako „zajęcia nie działają”, nawet jeśli przyczynę da się usunąć w kilka minut.</p></div>
   ${co('co-idea','💡',`<p><strong>Większości z tego da się zapobiec.</strong> Dobrze przygotowana lekcja, jasny sposób wyjaśniania i wiedza, jak zgłosić faktyczny błąd w treści, sprawiają, że drobne pomyłki nie zamieniają się w lekcję, która wymyka się spod kontroli.</p>`)}
  `},
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   <div class="card"><p>Wszystko powyżej dotyczy wczesnego wychwytywania problemu. Możliwe jednak, że otwierasz to szkolenie, bo rodzina <strong>już</strong> poprosiła o zwrot pieniędzy. Poniższe zasady obowiązują bez względu na powód — przeczytaj je najpierw, a potem wykorzystaj resztę szkolenia, aby zrozumieć, co do tego doprowadziło i co wciąż możesz zrobić na lekcji.</p></div>
   ${co('co-idea','💡',`<p><strong>Sam wniosek tworzy Dział Obsługi Klienta, nie ty</strong> — na tę część nie masz wpływu. Do ciebie wciąż należy wszystko, co od teraz dzieje się na lekcji, a to naprawdę sporo.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Nie mów nic o samym wniosku</strong> — ani dziecku, ani rodzinie — chyba że Dział Obsługi Klienta wyraźnie poprosi cię o przekazanie czegoś konkretnego. Twoim zadaniem jest teraz lekcja, a nie ta rozmowa.</p>`)}
  `},
  {t:'🎯 Następna lekcja to twoja szansa na ratunek', html:`
   <div class="card"><p>Możesz nie mieć okazji, by zmienić cokolwiek innego. Potraktuj najbliższą lekcję z tym dzieckiem jako moment, który o wszystkim zdecyduje.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Daj dziecku prawdziwą okazję do działania.</strong> Nie pytanie dla zasady — tylko autentyczny moment, w którym zostaje zauważone i odnosi sukces.`},
     {ic:'🏆', html:`<strong>Zaplanuj wczesny, widoczny sukces.</strong> Dziecko powinno wyjść z lekcji z poczuciem, że daje radę, a nie że zostaje w tyle.`},
     {ic:'👀', html:`<strong>Konkretna uwaga</strong> — niech dziecko poczuje, że zauważasz coś konkretnego, a nie chwalisz ogólnikowo.`},
     {ic:'🤐', html:`<strong>Ani słowa o wniosku</strong> — nawet jeśli dziecko samo o nim wspomni, ciepło zmień temat i ucz dalej.`}
   ])}
  `},
  {t:'📮 Zgłaszaj szybko i znaj jedno bezpieczne zdanie', html:`
   <div class="card"><p>O tym, że wniosek istnieje, możesz dowiedzieć się z komentarzy Działu Obsługi Klienta w profilu dziecka w BO — nie ma automatycznego systemu, który by cię o tym powiadomił. Gdy już wiesz, to, co widzisz na swoich lekcjach, jest informacją, której Dział Obsługi Klienta nie zdobędzie w żaden inny sposób.</p></div>
   ${numlist([
     'Tego samego dnia zostaw komentarz w BO z dokładnym opisem tego, co widzisz — daty i konkrety, a nie wrażenia',
     'Jeśli je znasz, zacytuj dosłownie słowa rodziny',
     'Tego samego dnia poinformuj swojego lidera zespołu',
     'Nigdy nie potwierdzaj, że zwrot został zatwierdzony, i nie rozmawiaj o żadnych kwotach'
   ])}
   ${co('co-ok','✅',`<p><strong>Zdanie, które zawsze jest bezpieczne:</strong> <em>„Dział Obsługi Klienta pomoże w tej sprawie.”</em> Na tym kończy się twoja część rozmowy — dalej przejmuje ją Dział Obsługi Klienta.</p>`)}
  `},
  {t:'🌱 Nie odpuszczaj później', html:`
   <div class="card"><p>Niezależnie od tego, czy wniosek zostanie wycofany, dziecko zostanie w twojej grupie, czy przejdzie do innego nauczyciela lub formatu — przez kilka kolejnych lekcji poświęcaj mu szczególną uwagę. Ratunek, który trzyma się przez jedną lekcję, a potem wszystko po cichu wraca do normy, często w ogóle się nie udaje.</p></div>
  `}
 ]
},
{id:'manual', numLabel:'Moduł 1', emoji:'📘', color:'var(--coral)',
 title:'Korzystanie z przewodnika lekcji i dobre wyjaśnianie',
 desc:'Co już daje ci przewodnik lekcji, dlaczego przestudiowanie go dzień wcześniej zapobiega większości problemów, oraz dwa ruchy dydaktyczne — modelowanie i rusztowanie — dzięki którym pojęcie trafia do ucznia za pierwszym razem.',
 obj:'Skutecznie korzystaj z celów i sugerowanych sformułowań w przewodniku lekcji, wiedz, gdzie szukać pomocy przed lekcją, i stosuj modelowanie oraz rusztowanie, by jaśniej wyjaśniać nowe pojęcia.',
 sections:[
  {t:'📘 Co już daje ci przewodnik lekcji', html:`
   <div class="card"><p>Każdy przewodnik lekcji zaczyna się od celów lekcji i oczekiwanych efektów — to na nich skup uwagę, a nie tylko na sekwencji kroków. Zawiera też sugerowane sformułowania do wyjaśniania każdego pojęcia, napisane przez osoby, które starannie przemyślały, jak je wprowadzić.</p></div>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image1.png" alt="Przewodnik lekcji z celami lekcji i efektami edukacyjnymi"><figcaption>📌 Na początku każdego przewodnika lekcji znajdziesz cele nauki oraz to, co uczniowie mają osiągnąć lub czego się nauczyć do końca lekcji.</figcaption></figure>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image2.png" alt="Strona przewodnika lekcji z sugerowanym zdaniem dla nauczyciela"><figcaption>💬 Jeśli nie masz pewności, jak przeprowadzić przejście, wprowadzić temat lub zadanie albo nawet je wyjaśnić, przewodnik lekcji zawiera podpowiedzi, które pomogą ci zastanowić się, jak to powiedzieć.</figcaption></figure>
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
   {type:'sort', prompt:'Czy to dobrze zastosowane rusztowanie?', card:'Tydzień 1: dajesz uczniowi szablon i prowadzone kroki. Tydzień 3: podajesz tylko cel i pozwalasz mu zbudować całość samodzielnie.', zones:[{label:'✅ Tak — to jest rusztowanie', fb:'Zgadza się — wsparcie zaczyna się wysoko i jest celowo wycofywane, gdy uczeń staje się samodzielny.'},{label:'❌ Nie — wsparcie powinno pozostać takie samo', fb:'Nie do końca — utrzymywanie pełnego wsparcia bez końca nie pozwala uczniowi stać się samodzielnym. Chodzi właśnie o stopniowe wycofywanie.'}], correctZone:0}
  ]
 }
},
{id:'contenterrors', numLabel:'Moduł 2', emoji:'🐞', color:'var(--coral)',
 title:'Błędy w treści i problemy techniczne',
 desc:'Co robić, gdy błędny jest sam materiał lub zawodzi technika: jak zachować spokój w klasie, poprawnie zgłosić błąd w BO i rozwiązywać problemy, nie tracąc reszty grupy.',
 obj:'Radź sobie z faktycznym błędem w treści lub tłumaczeniu tak, by nie wykoleił lekcji, wiedz dokładnie, jak zgłosić go w BO, i stosuj przy awariach technicznych logikę „napraw szybko / komunikuj / dokumentuj / eskaluj”.',
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
   ${co('co-ok','✅',`<p><strong>Mów:</strong> <em>„Dobre oko, to wina materiału, a nie twoja — obejdźmy to razem.”</em> Skieruj uwagę na wspólne szukanie rozwiązania i idźcie dalej.</p>`)}
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
  instr:'70%, aby odblokować końcową listę kontrolną.',
  items:[
   {type:'choice', prompt:'Uczeń zauważa faktyczny błąd w przykładowym kodzie z lekcji. Jaki jest twój pierwszy ruch na zajęciach?', opts:['Bez wyjaśnienia pominąć zadanie, żeby oszczędzić czas','Spokojnie nazwać błąd i zamienić to w moment „rozwiążmy to razem”','Powiedzieć grupie, że platforma jest zawsze pełna błędów'], correct:1, fb:'Spokój i współpraca sprawiają, że lekcja nie wydaje się chaotyczna — i pokazują, jak radzić sobie z błędami.'},
   {type:'sort', prompt:'Błąd w treści czy problem techniczny?', card:'W kodzie startowym lekcji jest literówka, która powoduje błąd, zanim ktokolwiek cokolwiek zmieni.', zones:[{label:'🔧 Problem techniczny → postępuj według procedury', fb:'Nie do końca — błędny jest sam kod, u wszystkich. To błąd w treści: spokojnie go obejdź i zgłoś ikoną 🐞 w BO.'},{label:'🐞 Błąd w treści → zgłoś go w BO', fb:'Zgadza się — błędny jest sam materiał. Spokojnie to obejdź, a potem zgłoś ikoną 🐞, żeby błąd został poprawiony dla każdej grupy.'}], correctZone:1},
   {type:'sort', prompt:'Błąd w treści czy problem techniczny?', card:'Ekran ucznia ciągle się zawiesza, a dźwięk co chwilę zanika w trakcie lekcji.', zones:[{label:'🔧 Problem techniczny → postępuj według procedury', fb:'Zgadza się — spróbuj szybkiej naprawy, utrzymaj pracę grupy, a jeśli problem się powtarza: komunikuj, dokumentuj i eskaluj.'},{label:'🐞 Błąd w treści → zgłoś go w BO', fb:'Nie do końca — z materiałem wszystko w porządku. Zawieszony ekran i zanikający dźwięk to problemy techniczne: postępuj według procedury.'}], correctZone:0},
   {type:'choice', prompt:'Gdzie w BO zgłaszasz błąd w treści?', opts:['W wiadomości do rodziny ucznia','W zakładce Sprawdź danej grupy','Ikoną 🐞 w wierszu lekcji, w karcie kursu'], correct:2, fb:'Ikona 🐞 w każdym wierszu lekcji otwiera ankietę jakości treści — to dzięki niej materiał zostaje poprawiony.'},
   {type:'choice', prompt:'Ten sam problem techniczny pojawia się drugą lekcję z rzędu. Co się zmienia?', opts:['Tego samego dnia otwierasz zgłoszenie w Dziale Obsługi Klienta','Nic — dalej próbujesz naprawić to samodzielnie','Czekasz jeszcze jedną lekcję, żeby mieć pewność, że to powtarzający się problem'], correct:0, fb:'Powtórka oznacza, że czas przekazać sprawę do Działu Obsługi Klienta — i dać rodzicowi znać, że ktoś się z nim skontaktuje.'}
  ]
 }
},
{id:'checklist', numLabel:'Lista kontrolna', emoji:'✅', color:'var(--coral)',
 title:'Końcowa lista kontrolna',
 desc:'Tu nie ma quizu — tylko najważniejsze punkty tego miniszkolenia, zanim je zamkniesz.',
 obj:'Przejrzyj poniższą listę kontrolną. Ten moduł nie jest oceniany — przeczytaj go, a potem ukończ miniszkolenie.',
 sections:[
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   ${numlist([
     'Tego samego dnia, w którym dowiaduję się o wniosku, zostawiam komentarz w BO i informuję lidera zespołu',
     'Moja następna lekcja z tym uczniem to prawdziwa próba ratunku — prawdziwa okazja do działania, widoczny sukces, konkretna uwaga, ani słowa o wniosku',
     'Nigdy nie potwierdzam zatwierdzenia zwrotu i nie rozmawiam o kwotach — używam jednego bezpiecznego zdania, a resztę zostawiam Działowi Obsługi Klienta'
   ])}
  `},  {t:'🌱 Na każdej lekcji', html:`
   ${numlist([
     'Każdą lekcję studiuję i przećwiczam dzień wcześniej, zaczynając od celów i oczekiwanych efektów w przewodniku lekcji',
     'Korzystam z sugerowanych sformułowań z przewodnika lekcji, by wyjaśniać nowe pojęcia, a o każdą lukę pytam przed lekcją mentora, lidera zespołu lub na kanale na Slacku',
     'Najpierw modeluję: demonstruję na swoim ekranie i myślę na głos, zanim uczniowie spróbują',
     'Stosuję rusztowanie: dużo wsparcia na początku (szablon, prowadzone kroki), mniej w miarę jak uczeń staje się samodzielny',
     'Gdy w materiale jest błąd, spokojnie go nazywam i zamieniam w coś, co rozwiązujemy razem',
     'Normalizuję błędy na głos, żeby uczniowie widzieli w nich normalną część nauki programowania — a nie powód do wstydu',
     'Nigdy nie robię z błędu wielkiej sprawy, nie obwiniam platformy przy uczniach i nie pozwalam, by błąd zabrał resztę lekcji',
     'Każdy błąd w treści zgłaszam ikoną 🐞 w BO i sprawdzam, czy ID kursu zgadza się z grupą moich uczniów',
     'Testuję połączenie, kamerę i mikrofon 30 minut przed zajęciami i zamykam niepotrzebne karty i programy',
     'Dbam o to, by uczniowie korzystali z Google Chrome i odpowiedniego urządzenia — nie z Safari i nie z tabletów na kursach takich jak Roblox Studio czy Unity',
     'Przy problemach technicznych: do 10 minut na naprawę, potem komunikuję, dokumentuję i eskaluję — a jeśli problem powtarza się dwie lekcje z rzędu, otwieram zgłoszenie w Dziale Obsługi Klienta',
     'Gdy pomagam jednemu uczniowi z problemem technicznym, daję reszcie grupy zadanie, żeby nikt nie czekał bezczynnie'
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
