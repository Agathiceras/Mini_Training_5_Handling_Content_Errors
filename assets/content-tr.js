/* Mini_Training_5_Handling_Content_Errors - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='tr';
const CONTENT = {
  flag:'🇹🇷', dir:'ltr',
  ui:{
    heroCard1:"<b>Kendi hızınızda.</b> İlerlemeniz bu tarayıcıda kaydedilir.",
    heroCard2:"<b>Uygulama dahil.</b> Her modül kısa bir kontrolle biter.",
    pbLabel:'modül tamamlandı',
    tapOpen:'Açmak için dokunun',
    tapFlip:'Çevirmek için dokunun',
    lblSee:'Gördüğünüz',
    lblDo:'Yapmanız gereken',
    lblSay:'Söyleyebileceğiniz',
    lblReport:'Nereye bildirilir',
    lblAvoid:'Kaçının',
    lblTip:'İpucu',
    stepOf:'Adım {i} / {n}',
    next:'İleri',
    pageTitle:"Mini Eğitim · Dersteki Hatalarla Başa Çıkmak — Kodland Eğitmen Eğitimi",
    logoSub:'Eğitmen Gelişim Departmanı',
    heroEyebrow:"🎯 Mini Eğitim",
    heroTitle:"<span class=\"h-pill\">Hatalara</span> Rağmen Dersi Dengede Tutmak",
    heroIntro:"Bunu görüyorsunuz çünkü bir aile çok olumsuz bir iade talebinde bulundu: hatalarla dolu gibi hissettiren bir ders, şirketin hizmetiyle ilgili bir sorun veya net bir nedeni olmayan yoğun bir öfke. Burada size nelerin sizin sorumluluğunuzda olduğunu, nelerin Müşteri Hizmetlerine bildirilmesi gerektiğini ve bu durumu sakin bir şekilde nasıl yöneteceğinizi göstereceğiz.",
    heroWork:"6 kısa modülü tamamlayın. Bir sonraki modülün kilidini açmak için her modül değerlendirmesinden en az %70 almanız gerekir. Toplam süre yaklaşık 40–45 dakikadır.",
    startBtn:"🚀 Eğitimi Başlat",
    pathLabel:'Öğrenme Yolunuz',
    devTitle:'Geliştirici: inceleme için tüm modüllerin kilidini aç',
    backToPath:'Öğrenme yoluna dön',
    modulesPassed:'{done} / {total} modül tamamlandı',
    moduleN:'Modül {n}',
    of:'/',
    locked:'🔒 Kilitli',
    passedBadge:'✅ Geçildi · %{pct}',
    reviewedBadge:'✅ İncelendi',
    startBadge:'▶ Başla',
    reviewBadge:'▶ İncele',
    objective:'Hedef',
    startCheck:'▶ Modül kontrolüne başla',
    finishBtn:'▶ Mini eğitimi bitir',
    doneBack:'✓ Tamamlandı — öğrenme yoluna dön',
    ixBadge:'📋 Modül kontrolü — sonraki modülün kilidini açmak için %70',
    ixItemBadge:'📋 Modül kontrolü — soru {i} / {n}',
    scoreSoFar:'Şu ana kadarki puan: {c} / {t}',
    continue:'Devam →',
    sortWrong:'Tam değil — doğru cevap “{label}”.',
    resPassed:'Modülü geçtiniz!',
    resFailed:'Henüz tam olmadı',
    resUnlocked:"Sonraki modülün kilidini açtınız.",
    resDone:"Bu mini eğitimi tamamladınız.",
    resNeed:'Sonraki modülün kilidini açmak için %70 almanız gerekiyor. Yukarıdaki bölümü yeniden gözden geçirin ve kontrolü tekrar deneyin.',
    resContinue:'Öğrenme yoluna devam et',
    resFinish:'Devam et',
    resBack:'Öğrenme yoluna dön',
    resReview:'Bu modülü incele',
    doneEyebrow:'Mini Eğitim Tamamlandı',
    doneTitle:'🎉 Tebrikler!',
    doneP1:"🎉 <strong>Tebrikler! Bu mini eğitimi tamamladınız.</strong>",
    doneP2:"Burada işiniz bitti! Ödevi kapatmak için lütfen bu mini eğitime eriştiğiniz LMS eğitim sayfasına geri dönün.",
    doneP3:"👉 <strong>LMS’de eğitimin hemen altında bir kontrol veya değerlendirme varsa, onu da tamamladığınızdan ve geçer puan aldığınızdan emin olun</strong> — aksi hâlde ödev tamamlanmamış olarak kalabilir.",
    doneP4:'Bol şans! ❤️',
    doneP5:'',
    devUnlockAlert:'Geliştirici modu: tüm modüllerin kilidi inceleme için açıldı.',
    devOn:'🔓 Geliştirici modu AÇIK — tüm modüllerin kilidi açık',
    devOff:'🔒 Geliştirici modu KAPALI — ilerleme sıfırlandı',
    devBadge:'🔓 GELİŞTİRİCİ MODU',
    doLabel:'✅ Yapın',
    avoidLabel:'🚫 Kaçının',
    noticeLabel:'Dikkat:',
    cvSee:'Gördüğünüz:',
    cvDo:'Yapmanız gereken:',
    dtExample:'Gerçek bir dersten örnek',
    dtNext:'Sonraki:',
    dtDone:"✅ Dört alanın hepsini gördünüz. Şimdi gördüklerinizi sınıflandırın.",
    tlVideoTitle:'{label} — gerçek bir ders örneği',
    tlVideoMeta:'Bu aşamanın gerçek bir derste nasıl göründüğünü izleyin'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Giriş', emoji:'🧩', color:'var(--coral)',
 title:'Neden Buradasınız',
 desc:'Hatalarla dolu bir dersin neden kaotik hissettirdiği, çok olumsuz bir ailenin arkasında genellikle başka nelerin bulunduğu ve iade talebi geldikten sonra geçerli olan kurallar.',
 obj:'Çok olumsuz bir ailenin arkasındaki başlıca nedenleri (dersteki hatalar, operasyonel sorunlar, ders veya eğitmenle ilgili sorunlar ve çok öfkeli veliler) anlamak ve bir iade talebi zaten mevcutken tam olarak ne yapmanız (ve ne yapmamanız) gerektiğini bilmek.',
 sections:[
  {t:'😤 Bir ders bir hatalar zinciri gibi hissettirdiğinde', html:`
   <div class="card"><p>Hatalarla dolu bir ders — öğrencinin hataları, materyalin hataları ya da anlatım sırasında ortaya çıkanlar — bunlarla başa çıkmak için bir plan yoksa kısa sürede kaotik hissettirebilir. Aileler bunu çabuk fark eder: altta yatan neden birkaç dakikada düzeltilebilecek olsa bile, durum “ders işe yaramıyor” şeklinde algılanır.</p></div>
   ${co('co-idea','💡',`<p><strong>Bunların çoğu önlenebilir.</strong> İyi hazırlanmış bir ders, konuları net bir şekilde anlatmanın bir yolu ve gerçek bir içerik hatasını nasıl bildireceğinizi bilmek, küçük hataların kontrolden çıkmış gibi hissettiren bir derse dönüşmesini önler.</p>`)}
  `},
  {t:'🧭 Çok olumsuz bir aile — arkasında genellikle ne vardır', html:`
   <div class="card"><p>Dersteki hatalar tablonun yalnızca bir parçasıdır. Bir aile çok olumsuz olduğunda, neden çoğu zaman dersin tamamen dışındadır — ve yine de bununla ne yapacağınızı bilmeniz gerekir:</p></div>
   ${iconGrid([
     {ic:'🐞', html:`<strong>Hatalarla dolu gibi hissettiren bir ders</strong> — hazırlık, açıklamalar, içerik veya teknik sorunlar. <em>Modül 1 ve 2.</em>`},
     {ic:'🏢', html:`<strong>Şirket ve operasyonel sorunlar</strong> — faturalandırma, taksitler, bakiyeler, grup değişiklikleri, başlangıç gecikmeleri, yanıt vermeyen destek, satış ekibinin vaatleri, Minecraft lisansı. <em>Modül 3.</em>`},
     {ic:'🧑‍🏫', html:`<strong>Ders veya eğitmen</strong> — tempo, açıklamalar, kaotik bir grup, kaçırılan bir ders, bağlantı, özel ihtiyaçlar, çok fazla eğitmen değişikliği. <em>Modül 3.</em>`},
     {ic:'🌋', html:`<strong>Çok öfkeli veya tehdit eden bir veli</strong>, bazen net bir neden olmadan. <em>Modül 4.</em>`}
   ])}
   ${co('co-ok','✅',`<p><strong>Her durumda sizin sorumluluğunuzda olan:</strong> dersinizdeki sorunları düzeltmek, geri kalanını aynı gün Müşteri Hizmetlerine bildirmek ve ailenin tonu ne olursa olsun sakin ve saygılı kalmak.</p>`)}
  `},
  {t:'🛟 Bir iade talebi zaten varsa', html:`
   <div class="card"><p>Yukarıdakilerin hepsi bu durumu erkenden yakalamakla ilgili. Ancak bu eğitimi, bir aile <strong>zaten</strong> iade talep ettiği için açıyor olabilirsiniz. Aşağıdaki kurallar, sebep ne olursa olsun geçerlidir — önce bunları okuyun, ardından bu noktaya nasıl gelindiğini ve derste hâlâ neler yapabileceğinizi anlamak için eğitimin geri kalanından yararlanın.</p></div>
   ${co('co-idea','💡',`<p><strong>Talebin kendisini siz değil, Müşteri Hizmetleri oluşturur</strong> — o kısım sizin kontrolünüzde değil. Sizin elinizde olan, bundan sonra derste yaşanacak her şeydir ve bu hiç de az değildir.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Talebin kendisi hakkında hiçbir şey söylemeyin</strong> — ne çocuğa ne de aileye — Müşteri Hizmetleri sizden açıkça belirli bir şey söylemenizi istemedikçe. Şu anki göreviniz bu konuşma değil, derstir.</p>`)}
  `},
  {t:'🎯 Bir sonraki dersiniz, öğrenciyi kazanma fırsatınızdır', html:`
   <div class="card"><p>Başka hiçbir şeyi değiştirme şansınız olmayabilir. Bu çocukla yapacağınız bir sonraki dersi, sonucu belirleyecek an olarak görün.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Ona gerçek bir söz hakkı verin.</strong> Anlamsız bir soru değil — görüldüğü ve başardığı gerçek bir an.`},
     {ic:'🏆', html:`<strong>Erken ve görünür bir başarı planlayın.</strong> Dersten geride kalmış hissederek değil, başarabildiğini hissederek ayrılmalı.`},
     {ic:'👀', html:`<strong>Ona özel ilgi gösterin</strong> — genel geçer bir övgü yerine, somut bir şey için fark edildiğini hissettirin.`},
     {ic:'🤐', html:`<strong>Talepten hiç bahsetmeyin</strong> — çocuk konuyu kendisi açsa bile sıcak bir şekilde konuyu değiştirin ve derse devam edin.`}
   ])}
  `},
  {t:'📮 Hızlıca bildirin ve güvenli tek cümleyi bilin', html:`
   <div class="card"><p>Bir talep olduğunu, BO’da çocuğun profilindeki Müşteri Hizmetleri yorumlarından öğrenebilirsiniz — sizi bilgilendiren otomatik bir sistem yoktur. Bunu öğrendiğiniz andan itibaren, derslerinizde gördükleriniz Müşteri Hizmetleri’nin başka hiçbir yoldan edinemeyeceği bilgilerdir.</p></div>
   ${numlist([
     'Aynı gün BO’da tam olarak ne gördüğünüzü anlatan bir yorum bırakın — izlenimler değil, tarihler ve somut ayrıntılar',
     'Varsa, ailenin kendi sözlerini kelimesi kelimesine ekleyin',
     'Aynı gün Takım Liderinizi de bilgilendirin',
     'Bir iadenin onaylandığını asla teyit etmeyin ve herhangi bir tutar konuşmayın'
   ])}
   ${co('co-ok','✅',`<p><strong>Her zaman güvenle söyleyebileceğiniz cümle:</strong> <em>“Müşteri Hizmetleri bu konuda size yardımcı olacak.”</em> Konuşmadaki rolünüz burada biter — gerisini Müşteri Hizmetleri devralır.</p>`)}
  `},
  {t:'🌱 Sonrasında da özen göstermeye devam edin', html:`
   <div class="card"><p>Talep geri çekilse de, çocuk grubunuzda kalsa da ya da başka bir eğitmene veya formata geçse de, sonraki birkaç derste ona ekstra özen göstermeye devam edin. Bir ders boyunca işe yarayıp sonra sessizce eski hâline dönen bir kurtarma girişimi, çoğu zaman hiç işe yaramamış demektir.</p></div>
  `}
 ]
},
{id:'manual', numLabel:'Modül 1', emoji:'📘', color:'var(--coral)',
 title:'Kılavuzu Kullanmak ve İyi Anlatmak',
 desc:'Kılavuzun size zaten neler sunduğu, onu bir gün önce çalışmanın neden sorunların çoğunu önlediği ve bir kavramın ilk seferde anlaşılmasına yardımcı olan iki öğretim tekniği: modelleme ve iskele kurma.',
 obj:'Kılavuzdaki hedefleri ve önerilen ifadeleri etkili bir şekilde kullanmak, dersten önce nereden yardım alacağınızı bilmek ve yeni kavramları daha net anlatmak için modelleme ve iskele kurma tekniklerini uygulamak.',
 sections:[
  {t:'📘 Kılavuzun size zaten sundukları', html:`
   <div class="card"><p>Her kılavuz, dersin hedefleri ve beklenen kazanımlarıyla başlar — dikkatinizi yalnızca adımların sırasına değil, buna odaklamalısınız. Ayrıca kılavuz, her kavramı açıklamak için önerilen ifadeler içerir; bunlar, o kavramın nasıl tanıtılacağı üzerine dikkatle düşünmüş kişiler tarafından yazılmıştır.</p></div>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image1.png" alt="Dersin hedeflerini ve eğitsel kazanımlarını gösteren bir ders kılavuzu"><figcaption>📌 Her kılavuzun başında dersin öğrenme hedeflerini ve öğrencilerin dersin sonunda neyi başarmaları veya öğrenmeleri beklendiğini bulursunuz.</figcaption></figure>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image2.png" alt="Eğitmen için önerilen bir ifadenin yer aldığı ders kılavuzu sayfası"><figcaption>💬 Bir geçişi nasıl yapacağınızdan, bir konuyu veya etkinliği nasıl tanıtacağınızdan ya da hatta nasıl açıklayacağınızdan emin değilseniz, kılavuzda bunu nasıl söyleyebileceğinizi düşünmenize yardımcı olacak yönlendirici ifadeler bulunur.</figcaption></figure>
  `},
  {t:'⏳ Bir saat önce değil, bir gün önce', html:`
   ${co('co-idea','💡',`<p><strong>Dersi bir gün önce çalışın ve prova edin</strong> — bir saat ya da otuz dakika önce değil. Bu süre, gerçekten fark etmeniz için size zaman tanır: artık çalışmayan bir kodu, yüklenmeyen bir materyali ya da sizin de henüz tam olarak anlamadığınız bir etkinliği.</p>`)}
   ${co('co-star','⭐',`<p>Bir eksik bulursanız bir mentora, Takım Liderinize ya da kursunuzun Slack kanalındaki diğer eğitmenlere sorun. Yardımı orada, bir gün önceden almak, sorunların öğrencinin önünde canlı olarak ortaya çıkmasını tam olarak engelleyen şeydir.</p>`)}
  `},
  {t:'🧑‍🏫 Bir kavramın gerçekten anlaşılmasına ne yardımcı olur', html:`
   <div class="card"><p>Bir şeyi nasıl anlattığınız, onu doğru anlatıp anlatmadığınız kadar önemlidir. İlk seferde net bir şekilde tanıtılan bir kavram, ardından gelen ve kafa karışıklığından kaynaklanan hataların çoğunu önler.</p></div>
  `},
  {t:'🎬 Modelleme: denemelerinden önce gösterin', html:`
   <div class="card"><p><strong>Modelleme</strong>, öğrenci denemeden önce tekniği kendi ekranınızda bizzat göstermek demektir. Bunu yaparken düşüncelerinizi yüksek sesle paylaşın — akıl yürütme süreci çoğu zaman sonuçtan daha değerlidir.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Adım adım modelleme</div><div class="vslot-meta">Gerçek bir dersten örnek</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1IgaGbg64ClvTs1DgnOXMhp_IPFtgCGfM/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">Bu videoda eğitmenin görevi kısa ve basit talimatlarla adım adım nasıl açıkladığını göreceksiniz.</div></div>
  `},
  {t:'🪜 İskele kurma: kademeli olarak azalan destek', html:`
   <div class="card"><p><strong>İskele kurma</strong> (scaffolding), yeni bir kavramın başında daha fazla destek vermek — bir şablon, yönlendirilmiş adımlar, onlarla birlikte çalışmak — ve öğrenci rahatladıkça bu desteği bilinçli olarak, tamamen bağımsız çalışana kadar azaltmak demektir.</p></div>
   ${co('co-idea','💡',`<p>Kaçınılması gereken hata bunun tam tersidir: sonsuza kadar tam destek (öğrenci asla bağımsızlık kazanmaz) ya da en baştan hiç destek vermemek (öğrenci çözmek için gerekli araçlara sahip olmadığı hatalarla karşılaşır ve ders kaotik hissettirmeye başlar).</p>`)}
  `}
 ],
 ix:{
  title:'Kılavuzu Kullanmak ve İyi Anlatmak — modül kontrolü',
  instr:'Sonraki modülün kilidini açmak için %70 gerekir.',
  items:[
   {type:'choice', prompt:'Yeni bir dersin kılavuzunu açtığınızda ilk olarak neye odaklanmalısınız?', opts:['Yalnızca sırasıyla tam adımlara','Bir sonraki dersin ev ödevine','Hedeflere ve beklenen kazanımlara'], correct:2, fb:'Hedefler, dersin gerçekte ne için olduğunu söyler — adımlar ise oraya ulaşmanın yollarından yalnızca biridir.'},
   {type:'choice', prompt:'Bir dersi ne zaman çalışmalı ve prova etmelisiniz?', opts:['Bir saat önce değil, bir gün önce','Dersten hemen önce, böylece aklınızda taze kalır','Yalnızca daha önce hiç anlatmadığınız bir konuysa'], correct:0, fb:'Bir günlük süre, bulduğunuz her şeyi gerçekten düzeltmeniz için size zaman tanır.'},
   {type:'choice', prompt:'Bir derste “modelleme” ne anlama gelir?', opts:['Nasıl yapıldığını açıklamadan, tamamlanmış bir örnek göstermek','Öğrenci denemeden önce tekniği bizzat göstermek ve düşüncelerinizi yüksek sesle paylaşmak','Önce öğrencinin denemesine izin verip sonra onu düzeltmek'], correct:1, fb:'Modelleme, öğrenci denemeden önce — kendi akıl yürütmeniz de dahil — önce sizin göstermenizdir.'},
   {type:'sort', prompt:'Bu iskele kurma doğru yapılmış mı?', card:'1. hafta: öğrenciye bir şablon ve yönlendirilmiş adımlar veriyorsunuz. 3. hafta: yalnızca hedefi veriyor ve onu kendi başına yapmasına izin veriyorsunuz.', zones:[{label:'✅ Evet — bu iskele kurmadır', fb:'Doğru — destek yüksek başlar ve öğrenci bağımsızlık kazandıkça bilinçli olarak azaltılır.'},{label:'❌ Hayır — destek aynı kalmalı', fb:'Tam değil — tam desteği sonsuza kadar sürdürmek öğrencinin bağımsızlık kazanmasını engeller. Asıl amaç onu kademeli olarak azaltmaktır.'}], correctZone:0}
  ]
 }
},
{id:'contenterrors', numLabel:'Modül 2', emoji:'🐞', color:'var(--coral)',
 title:'İçerik Hataları ve Teknik Sorunlar',
 desc:'Materyalin kendisi yanlış olduğunda ya da teknik bir arıza yaşandığında ne yapmalı: sınıfı nasıl sakin tutacağınız, durumu BO’da nasıl doğru bildireceğiniz ve grubun geri kalanını kaybetmeden sorunu nasıl gidereceğiniz.',
 obj:'Gerçek bir içerik veya çeviri hatasını dersi rayından çıkarmadan ele almak, bunu BO’da tam olarak nasıl bildireceğinizi bilmek ve teknik arızalara hızlı çöz / iletişim kur / kayıt altına al / üst kademeye ilet mantığını uygulamak.',
 sections:[
  {t:'🐞 Bazen sorun materyalin kendisidir', html:`
   <div class="card"><p>Bazen bir ders öğrenci yüzünden değil, içerikteki ya da çevirisindeki gerçek bir hata yüzünden kaotikleşir — bozuk bir kod parçası, araçla uyuşmayan bir talimat, yanlış çevrilmiş bir terim. İşte en yaygın durumlar ve bunlara nasıl karşılık verebileceğiniz:</p></div>
   ${iconGrid([
     {ic:'🐛', html:`<strong>Bir öğrenci bir şeyin yanlış çevrildiğini veya yanlış yazıldığını fark ediyor.</strong> Hamle: durumu soğukkanlılıkla, yüksek sesle dile getirin ve bunu ters giden bir şey yerine birlikte çözdüğünüz bir şeye dönüştürün. Örnek: <em>“Çok iyi yakaladın — görünüşe göre bu satırda bir yazım hatası var, ne yazması gerektiğini birlikte bulalım.”</em>`},
     {ic:'💻', html:`<strong>Bir öğrenci, kodun bir yazım hatası yüzünden çalışmadığını fark ediyor.</strong> Örnek: <em>“Harika — görünüşe göre biri gizli hatayı yakaladı. Fark eden olacak mı diye merak ediyordum.”</em>`},
     {ic:'🖼️', html:`<strong>Bazı görseller eksik görünüyor veya yüklenmiyor.</strong> Örnek: <em>“Bu muhtemelen platformdaki küçük bir aksaklık, hiç dert etme — slaytlar bende var, yine de görebilirsin.”</em> Ya da: <em>“Sorun değil, böyle şeyler olur ve programcı olarak bunlarla çok karşılaşacaksın — şimdilik benim ekranımı izle.”</em>`}
   ])}
  `},
  {t:'💛 Hatalara Sakin Bir Şekilde Karşılık Vermek', html:`
   <div class="card"><p>Bir içerik hatası iki şekilde sonuçlanabilecek küçük bir andır: ya sınıfın neredeyse fark etmediği geçici bir aksaklık olur ya da bir öğrencinin özgüveninde bir çatlak. Hangisi olacağını belirleyen hatanın kendisi değil — ilk birkaç saniyede ona nasıl tepki verdiğinizdir. Hatayı utanmadan ya da kimseyi suçlamadan yüksek sesle dile getirmek, öğrencilere hataların kodlama öğrenmenin normal ve beklenen bir parçası olduğunu söyler ve onların kendi hatalarına yaklaşmasını istediğiniz zihniyeti tam olarak örnekler: fark et, meraklı kal, düzelt, devam et.</p></div>
   ${co('co-ok','✅',`<p><strong>Şunu söyleyin:</strong> <em>“Güzel yakaladın, bu senin değil, materyalin hatası — birlikte bir çözüm bulalım.”</em> Dikkati ekip olarak bir çözüm bulmaya yönlendirin ve derse devam edin.</p>`)}
   ${co('co-danger','⛔',`<p><strong>Kaçının:</strong> hatayı büyütmekten, kursa olan güveni sarsacak şekilde platformu yüksek sesle suçlamaktan ya da dersin geri kalanının zarar göreceği kadar uzun süre onunla uğraşmaktan.</p>`)}
  `},
  {t:'🖥️ BO’da materyali bulmak — ve hataları bildirmek', html:`
   <div class="card"><p>Her dersin kılavuzu ve sunumu, BackOffice (BO) içinde, tam olarak ders anlattığınız kurs kaydına bağlı olarak bulunur. Bir içerik hatasını da aynı yerden, ders satırındaki 🐞 simgesiyle bildirirsiniz. Aşağıdaki simülasyon bunu size adım adım gösterir.</p></div>
   ${co('co-danger','🚨',`<p><strong>Açtığınız kurs ID’sinin öğrencilerinizin kayıtlı olduğu kursla eşleştiğini her zaman kontrol edin.</strong> BO’da birbirine benzeyen kurslar yan yana bulunur — yanlış kurstan ders anlatmak, bir dersi saniyeler içinde kaosa sürükleyebilir.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Kurs materyali ve içerik hataları</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Kurs materyali ve içerik hataları" loading="lazy"></iframe></div></div>
   ${co('co-star','⭐',`<p>Bir hatayı bildirmek yalnızca sizin dersinizi düzeltmez — aynı materyali kullanan ve sizden sonra gelen her grup için de düzeltir.</p>`)}
  `},
  {t:'🔧 Sorun teknik olduğunda: protokol', html:`
   <div class="card"><p>Bazen bir dersteki hatalar zinciri tekniktir: donan bir ekran, yüklenmeyen bir araç, sürekli kopan bir bağlantı. Teknik sorunlar normaldir ve hem eğitmenlerin hem de öğrencilerin başına gelebilir — önemli olan, büyümelerine izin vermemektir.</p></div>
   ${co('co-idea','💡',`<p><strong>Altın kural.</strong> Sorunu <strong>10 dakika</strong> içinde kendiniz çözemiyorsanız, sessizce uğraşmayı bırakın. <strong>İletişim kurun → kayıt altına alın → üst kademeye iletin.</strong> Neler olduğunu bilen bir veli size güvenir. Bilmeyen bir veli ise iptal eder.</p>`)}
   ${stepFlow([
     {ic:'⏱️', label:'Bir derste ilk kez: en fazla 10 dakika boyunca çözmeye çalışın'},
     {ic:'👩‍💼', label:'Hâlâ çözülmedi mi? Aynı gün Takım Liderinize haber verin — telafi seçeneğine o karar verir'},
     {ic:'💬', label:'30 dakika içinde veliye sıcak bir dille mesaj gönderin: durumu ekibinize bildirdiniz'},
     {ic:'🎫', label:'Üst üste ikinci ders mi? Aynı gün Müşteri Hizmetleri’nde bir destek talebi (ticket) açın'},
     {ic:'✅', label:'Sorun çözüldüğünde: veliye haber verin ve süreci kapatın'}
   ])}
  `},
  {t:'🧑‍💻 Kendi tarafınızdaki teknik sorunları önlemek', html:`
   <div class="card"><p>Bir eğitmenin teknik sorunu, bir öğrencininki kadar dersi aksatabilir. Bunların çoğu ders başlamadan önce yakalanabilir.</p></div>
   ${iconGrid([
    {ic:'🔌', html:`<strong>30 dakika önceden test edin.</strong> Her dersten önce internet bağlantınızı, kameranızı ve mikrofonunuzu kontrol edin. Bir sorun fark ederseniz Takım Liderinize haber verin.`},
    {ic:'📷', html:`<strong>Alternatif arayın.</strong> Kameranızı kapatmak bağlantınızı iyileştiriyorsa, bunu yapın.`},
    {ic:'🎙️', html:`<strong>Yedek bir mikrofonunuz olsun.</strong> Kulaklığınız çalışmıyorsa bilgisayarınızın dahili sesi gibi başka bir seçeneği deneyin ve Classroom’da arka plan gürültüsü azaltmayı her zaman açın.`},
    {ic:'📶', html:`<strong>Sürücülerinizi ve VPN’in açık olup olmadığını kontrol edin</strong> — VPN’ler bağlantınızı yavaşlatma eğilimindedir.`},
    {ic:'🧊', html:`<strong>Blender gibi çok kaynak tüketen bir araçla mı çalışıyorsunuz?</strong> Kurs, ilk derslerde daha iyi performans için nasıl yapılandırılacağını anlatan bir kılavuz içerir.`},
    {ic:'💻', html:`<strong>Dersten önce RAM’i boşaltın.</strong> Google Chrome, Classroom ile en iyi deneyimi sunar ama çok fazla RAM kullanma eğilimindedir de — şu an ihtiyacınız olmayan sekmeleri ve programları kapatın.`},
    {ic:'👂', html:`<strong>Canlı olarak teyit edin.</strong> Ders başlamadan önce öğrencilerinizle sizi düzgün görüp duyup duymadıklarını kontrol edin — böylece teknik sorunları erkenden yakalarsınız.`}
   ])}
  `},
  {t:'🎓 Teknik sorun yaşayan öğrencilere destek olmak', html:`
   <div class="card"><p>Öğrencilerin derste karşılaştığı teknik sorunlar çoğu zaman Google Chrome dışında bir tarayıcı kullanmalarından ya da kurs için uygun olmayan cihazlar kullanmalarından kaynaklanır — örneğin dersi tablet, cep telefonu veya iPad üzerinden izlemeye çalışmak gibi. Bu yüzden onlara yardımcı olabilmeniz için minimum gereksinimleri bilmeniz önemlidir.</p></div>
   ${doavoid(
    ["Güncel Google Chrome — tam uyumlu tek tarayıcı",
     "En az 4 GB RAM (Blender veya Unity için 8 GB)",
     "En az 10 Mbps hızında stabil bir bağlantı — mümkünse kablolu bağlantı Wi-Fi’dan daha iyidir",
     "En az 5 GB boş depolama alanı — Unity ve Blender çok daha fazlasına ihtiyaç duyar"],
    ["Safari — son güncellemeden bu yana Kodland platformunda bilinen hatalar var: yanıt vermeyen düğmeler, yüklenmeyen ekranlar, girişte hatalar",
     "Roblox Studio veya Unity gibi kurslar için tablet / iPad — bu kurslar gerçek bir bilgisayar gerektirir",
     "Sadece Safari’den kaynaklanıp kaynaklanmadığını kontrol etmeden bir Mac sorununu ilgi kaybı sanmak"]
   )}
   ${co('co-idea','🍎',`<p>Özellikle Mac + Safari kombinasyonuna dikkat edin. Mac kullanan bir öğrencinin düğmeleri yanıt vermiyorsa veya ekranı yüklenmiyorsa, çözüm neredeyse her zaman aynıdır: dersi Google Chrome’da açmak. Aileleri google.com/chrome adresine yönlendirin.</p>`)}
  `},
  {t:'⚖️ Sınıfın geri kalanını bırakmadan', html:`
   <div class="card"><p>Asıl hata yalnızca teknik sorunun kendisi değildir — eğitmenin bir öğrencinin sorununa o kadar odaklanması ki grubun geri kalanının beş ya da on dakikalık dersi kaybetmesidir.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Bir süre sınırı belirleyin.</strong> Sorun yaşayan öğrenci için hızlı bir çözüm deneyin (Chrome’a geçmek, sayfayı yenilemek, yeniden başlatmak), ardından grupla devam edin ve o öğrenciyle etkinlik aralarında ya da dersten sonra ilgilenin.`},
     {ic:'👥', html:`<strong>Gruba yapacak bir şey verin</strong> — sorunu çözmeye başladığınız anda; onları donuk bir ekrana bakar hâlde bırakmayın.`},
     {ic:'🫂', html:`<strong>Sesinizle sakin kalın.</strong> Sakin bir “bu bazen olur, bir yolunu bulalım”, siz sorunu çözerken sınıfı dengede tutar.`},
     {ic:'📝', html:`<strong>Bir iz bırakın.</strong> Bir cihaz sürekli aynı soruna yol açıyorsa, her derste yeniden çözmek yerine aileye haber verin, BO’da bir yorum bırakın ve Takım Liderinizi bilgilendirin.`}
   ])}
  `}
 ],
 ix:{
  title:'İçerik Hataları ve Teknik Sorunlar — modül kontrolü',
  instr:'Bir sonraki modülün kilidini açmak için %70.',
  items:[
   {type:'choice', prompt:'Bir öğrenci, dersin örnek kodunda gerçek bir hata fark ediyor. Sınıftaki ilk hamleniz nedir?', opts:['Zaman kazanmak için etkinliği açıklama yapmadan atlamak','Hatayı sakin bir şekilde dile getirip bunu “birlikte çözelim” anına dönüştürmek','Gruba platformun her zaman hatalarla dolu olduğunu söylemek'], correct:1, fb:'Sakin ve iş birliğine dayalı bir tutum, dersin kaotik hissettirmesini önler — ve hatalarla nasıl başa çıkılacağını örnekler.'},
   {type:'sort', prompt:'İçerik hatası mı, teknik sorun mu?', card:'Dersin başlangıç kodundaki bir satırda yazım hatası var ve kimse hiçbir şeyi değiştirmeden hata veriyor.', zones:[{label:'🔧 Teknik sorun → protokolü izleyin', fb:'Tam değil — kodun kendisi herkes için yanlış. Bu bir içerik hatasıdır: sakin bir şekilde etrafından dolaşın ve BO’daki 🐞 simgesiyle bildirin.'},{label:'🐞 İçerik hatası → BO’da bildirin', fb:'Doğru — materyalin kendisi yanlış. Sakin bir şekilde etrafından dolaşın, ardından tüm gruplar için düzeltilmesi amacıyla 🐞 simgesiyle bildirin.'}], correctZone:1},
   {type:'sort', prompt:'İçerik hatası mı, teknik sorun mu?', card:'Bir öğrencinin ekranı ders sırasında sürekli donuyor ve sesi sürekli kesiliyor.', zones:[{label:'🔧 Teknik sorun → protokolü izleyin', fb:'Doğru — hızlı bir çözüm deneyin, grubun çalışmaya devam etmesini sağlayın ve tekrar ederse iletişim kurun, kayıt altına alın ve üst kademeye iletin.'},{label:'🐞 İçerik hatası → BO’da bildirin', fb:'Tam değil — materyalde bir sorun yok. Donan bir ekran ve kesilen ses tekniktir: protokolü izleyin.'}], correctZone:0},
   {type:'choice', prompt:'BO’da bir içerik hatasını nereden bildirirsiniz?', opts:['Öğrencinin ailesine gönderilen bir mesajla','Grubun Kontrol sekmesinden','Kurs kaydının içinde, ders satırındaki 🐞 simgesiyle'], correct:2, fb:'Her ders satırındaki 🐞 simgesi içerik kalitesi anketini açar — materyalin düzeltilmesini sağlayan da budur.'},
   {type:'choice', prompt:'Aynı teknik sorun üst üste ikinci derste de yaşanıyor. Ne değişir?', opts:['Aynı gün Müşteri Hizmetleri’nde bir destek talebi (ticket) açarsınız','Hiçbir şey — kendiniz çözmeye çalışmaya devam edersiniz','Bunun bir örüntü olduğundan emin olmak için bir ders daha beklersiniz'], correct:0, fb:'Tekrarlanması, konuyu Müşteri Hizmetleri’ne iletme zamanının geldiği anlamına gelir — veliye de birinin kendisiyle iletişime geçeceğini bildirin.'}
  ]
 }
},
{id:'operations', numLabel:'Modül 3', emoji:'🏢', color:'var(--coral)',
 title:'Şirket ve Ders Sorunları: Bunları Doğru Şekilde Bildirin',
 desc:'Bir aile faturalandırma, bakiyeler, gruplar, başlangıç tarihleri, destek veya satış ekibinin vaatleri nedeniyle — ya da dersin kendisi nedeniyle — üzgün olduğunda ne yapılacağı ve BO’da bir raporla Müşteri Hizmetlerine nasıl ulaşılacağı.',
 obj:'Neyi düzeltmenin, neyi bildirmenin size düştüğünü ayırt etmek, operasyonel şikâyetlere açıklama yapmadan, savunmaya geçmeden ve söz vermeden yanıt vermek, sizin sorumluluğunuzdaki ders sorunlarını düzeltmek ve her vakayı aynı gün BO’da Müşteri Hizmetlerine bildirmek.',
 sections:[
  {t:'🧭 Sizin mi düzeltmelisiniz, yoksa bildirmeniz mi gerekir?', html:`
   <div class="card"><p>Çok olumsuz bir aile nadiren tek bir şeyden şikâyet eder. Öfke çoğu zaman şirketle ilgilidir — bir ücret, bir bakiye, değişen bir grup — ve siz sadece her hafta gördükleri kişisiniz. Yanıt vermeden önce, bunun ne tür bir sorun olduğunu kendinize sorun:</p></div>
   ${patternCards([
     {ic:'🏢', title:'Şirket ve operasyonlar', desc:'Faturalandırma, taksitler, bakiyeler, gruplar, başlangıç tarihleri, destek, satış ekibinin vaat ettikleri, lisanslar.', note:'<strong>Çözmek veya açıklamak size düşmez.</strong> Durumu kabul edin, BO’da Müşteri Hizmetlerine bildirin ve Takım Liderinize haber verin.'},
     {ic:'🧑‍🏫', title:'Ders veya eğitmen', desc:'Tempo, açıklamalar, kaotik bir grup, kaçırılan bir ders, bağlantı, özel ihtiyaçlar, eğitmen değişiklikleri.', note:'<strong>Kısmen sizin sorumluluğunuzda.</strong> Yapabildiğinizi bir sonraki derste düzeltin ve bildirin.'},
     {ic:'🔧', title:'Teknik', desc:'Classroom, platform, kurs araçları, öğrencinin cihazı.', note:'<strong>Modül 2’deki protokolü izleyin:</strong> 10 dakika, ardından iletişim kurun, belgeleyin, üst makama iletin.'}
   ],3)}
  `},
  {t:'🏢 Operasyonel ve şirket sorunları — ne yaparsınız, ne söylersiniz', html:`
   <div class="card"><p>Her sorunun üzerine dokunun. Örüntü her zaman aynıdır: <strong>durumu kabul edin, açıklamayın, söz vermeyin, aynı gün bildirin.</strong> Bir ailenin ödemelerine, sözleşmesine veya satış görüşmesine dair tam bir resme sahip değilsiniz — ve iyi niyetli bir tahmin, şirketin yerine getiremeyeceği bir vaade dönüşebilir.</p></div>
   ${symCards([
     {ic:'💳', title:'Faturalandırma ve taksitler',
      see:`Beklenmedik bir ücret, ailenin haberdar olmadığı bir taksit, zaten yapıldığını düşündükleri bir ödeme.`,
      do:`Ailenin söylediklerini aynen not edin ve aynı gün BO’da Müşteri Hizmetlerine bildirin.`,
      say:`<em>«Bunun endişe verici olduğunu anlıyorum. Konuyu Müşteri Hizmetleri’ne ilettim, bu konuda size yardımcı olacaklar.»</em>`,
      rep:`Müşteri Hizmetleri (BO raporu) + Takım Lideri + BO yorumu.`,
      avoid:`Ödemelerin nasıl işlediğini açıklamaktan veya bir ücretin doğru olup olmadığını söylemekten.`},
     {ic:'🔄', title:'Premium’a veya başka bir formata geçişten sonra yeniden hesaplama',
      see:`Aile Premium’a, bireysel derslere veya başka bir formata geçti ve şu anda sahip oldukları ders sayısından memnun değil.`,
      do:`Rakamlar hakkında yorum yapmayın. Ailenin kendi sözleriyle BO’da Müşteri Hizmetlerine bildirin.`,
      say:`<em>«Müşteri Hizmetleri bu konuda size yardımcı olacak.»</em>`,
      rep:`Müşteri Hizmetleri (BO raporu) + Takım Lideri + BO yorumu.`,
      avoid:`Dersleri kendiniz hesaplamaktan veya bunun haksızlık olduğuna katılmaktan.`},
     {ic:'🎟️', title:'Tartışmalı bakiye',
      see:`«Daha fazla dersimiz olmalı.» «Yapılmayan bir ders düşüldü.»`,
      do:`BO’da işaretlediğiniz katılımı kontrol edin, ardından aynı gün Takım Liderinize ve Müşteri Hizmetlerine iletin — bakiyeleri ve düşümleri Operasyon inceler.`,
      say:`<em>«Bana bildirdiğiniz için teşekkürler. Kontrol edilmesi için ekibimle paylaştım.»</em>`,
      rep:`Takım Lideri + Müşteri Hizmetleri + BO yorumu (Operasyon: @İlke Aslı Aslan · Müşteri Hizmetleri: @Batuhan Oruç).`,
      avoid:`Derslerin iade edileceğine söz vermekten veya bakiyenin doğru ya da yanlış olduğunu söylemekten.`},
     {ic:'👥', title:'Grup değişiklikleri veya dağılan bir grup',
      see:`Grup taşındı, birleştirildi veya kapatıldı ve çocuk sınıf arkadaşlarını, bir eğitmeni veya alıştığı bir saati kaybetti.`,
      do:`Yeni durumdaki ilk dersi sıcak ve karşılayıcı hale getirin. Ailenin endişelerini BO’da Müşteri Hizmetlerine bildirin.`,
      say:`<em>«Değişikliğin kolay olmadığını anlıyorum. Sizinle iletişime geçmeleri için ekibimle paylaştım.»</em>`,
      rep:`Müşteri Hizmetleri (BO raporu) + Takım Lideri + BO yorumu.`,
      avoid:`Grubun neden değiştiğini açıklamaktan veya eski grubun geri geleceğine söz vermekten.`},
     {ic:'⏳', title:'Başlangıç gecikmeleri',
      see:`Aile bir grubun açılmasını bekliyor veya başlangıç tarihi değişti.`,
      do:`Elinizde olmayan tarihleri vermeyin. BO’da Müşteri Hizmetlerine bildirin.`,
      say:`<em>«Beklemenin sinir bozucu olduğunu anlıyorum. Müşteri Hizmetleri başlangıç tarihi konusunda size yardımcı olacak.»</em>`,
      rep:`Müşteri Hizmetleri (BO raporu) + Takım Lideri + BO yorumu.`,
      avoid:`Başlangıç tarihini tahmin etmekten veya başka bir ekibi suçlamaktan.`},
     {ic:'📞', title:'«Destek yanıt vermiyor»',
      see:`Aile, mesajlarına veya aramalarına kimsenin yanıt vermediğini söylüyor.`,
      do:`Durumu kabul edin — bu hayal kırıklığı gerçek. Müşteri Hizmetleri ailenin beklediğini bilsin diye aynı gün bildirin.`,
      say:`<em>«Yanıt alamadığınız için üzgünüm. Müşteri Hizmetleri size dönüş yapsın diye bugün bildirdim.»</em>`,
      rep:`Müşteri Hizmetleri (BO raporu) + Takım Lideri + BO yorumu.`,
      avoid:`«Asla yanıt vermiyorlar» demekten veya ekibi eleştirmekten — bu, ailenin en büyük korkusunu doğrular.`},
     {ic:'🗣️', title:'«Satış ekibi bize başka bir şey vaat etmişti»',
      see:`Daha küçük gruplar, farklı bir kurs, bir seviye, bir fiyat veya «bize vaat edilen» bir sonuç.`,
      do:`Ailenin sözlerini kelimesi kelimesine yazın ve bildirin. Derste, çocuk için yapabileceklerinize odaklanın.`,
      say:`<em>«Bana bildirdiğiniz için teşekkürler. Ekibimle paylaştım ve Müşteri Hizmetleri bu konuda sizinle iletişime geçecek.»</em>`,
      rep:`Müşteri Hizmetleri (BO raporu) + Takım Lideri + BO yorumu.`,
      avoid:`Satış ekibinin söylediklerini doğrulamaktan veya yalanlamaktan ya da bunu düzeltmek için yeni bir söz vermekten.`},
     {ic:'🧱', title:'Minecraft lisansı',
      see:`Minecraft hesabı veya lisansıyla ilgili ya da kursun neden böyle işlediğine dair sorular veya şikâyetler.`,
      do:`Derste yer alan konularda yardımcı olun (kursun gerektirdiği hesap, kurulum). Lisansın kendisiyle ilgili her şey Müşteri Hizmetlerine gider.`,
      say:`<em>«Müşteri Hizmetleri lisans konusunda size yardımcı olacak.»</em>`,
      rep:`Müşteri Hizmetleri (BO raporu) + Takım Lideri + BO yorumu.`,
      avoid:`Dahili nedenler, lisanslar veya kurs içeriğindeki değişiklikler hakkında yorum yapmaktan.`}
   ])}
   ${co('co-ok','✅',`<p><strong>Durumu kabul etmek her zaman serbesttir.</strong> Kısa, sıcak bir yanıt — gördünüz, anlıyorsunuz, ilettiniz — kimsenin onayına ihtiyaç duymaz. Açıklamalar, seçenekler ve para ile ilgili her şey Müşteri Hizmetlerini bekler.</p>`)}
  `},
  {t:'🧑‍🏫 Sorun ders olduğunda', html:`
   <div class="card"><p>Bazı sert şikâyetler dersin kendisiyle ilgilidir. Bunlar kısmen sizin sorumluluğunuzdadır: yapabildiğinizi hemen bir sonraki dersten itibaren düzeltin — ve yine de bildirin, böylece Takım Lideriniz ve Müşteri Hizmetleri sürprizle karşılaşmaz.</p></div>
   <div class="tbl-wrap"><table>
    <tr><th>Ailenin söylediği</th><th>Yapmanız gereken</th><th>Bildirmeniz gereken</th></tr>
    <tr><td>«Yöntem yaşına uygun değil»</td><td>Daha kısa adımlar, bildikleri kelimeler, daha fazla gösterme — grubun yaşına uyum sağlayın</td><td>BO yorumu + gruptaki yaş farkı büyükse Takım Lideri</td></tr>
    <tr><td>«Eğitmen açıklamadan ilerliyor»</td><td>Her seferinde tek yönerge ve ilerlemeden önce anlaşıldığını kontrol edin</td><td>Neyi değiştirdiğinizi içeren BO yorumu</td></tr>
    <tr><td>«Grup kaotik»</td><td>İlk dersten itibaren sınıf kuralları, konuşma sıraları, sakin ve kararlı yönetim</td><td>BO yorumu + olaylar hakkında bilgilendirilen aile</td></tr>
    <tr><td>«Eğitmen gelmedi» / «ders ertelendi»</td><td>Bir dersi asla kendi başınıza iptal etmeyin veya taşımayın; öğrenir öğrenmez Takım Liderinize haber verin</td><td>Aynı gün Takım Lideri — telafiye o karar verir</td></tr>
    <tr><td>«Bağlantı sürekli kopuyor»</td><td>Her dersten önce kurulumunuzu test edin; teknik protokolü izleyin</td><td>Takım Lideriniz → Slack kanalı #menap-teaching-and-techsupport + BO yorumu</td></tr>
    <tr><td>«Eğitmen çocuğumun özel ihtiyaçlarına hazır değildi»</td><td>Rutin, daha yavaş tempo, daha küçük adımlar, yanıt vermenin diğer yolları; aileye neyin yardımcı olduğunu sorun</td><td>BO yorumu + Takım Lideri — siz önerirsiniz, format konusunda o karar verir</td></tr>
    <tr><td>«Çok fazla eğitmen değişikliği»</td><td>Devralırsanız BO yorumlarını okuyun, kendinizi tanıtın ve grubun rutinlerini koruyun</td><td>Takım Lideri, böylece aile değişiklikleri önceden öğrenir</td></tr>
   </table></div>
   ${co('co-idea','📚',`<p><strong>Daha derine inmek ister misiniz?</strong> Tempo, anlaşılıp anlaşılmadığını kontrol etme ve dakiklik <em>Ders Kalite</em> mini eğitiminde; kaotik gruplar <em>Ders Organizasyonunda</em>; özel ihtiyaçlar <em>İlgisi yok</em> ve <em>Online Format’ta</em>; bağlantı sorunları <em>Teknik Sorunlarda</em> ele alınır.</p>`)}
  `},
  {t:'📮 Müşteri Hizmetlerine nasıl ulaşılır — ve ne yazılır', html:`
   <div class="card"><p>Müşteri Hizmetlerine BO üzerinden ulaşırsınız: öğrencinin <strong>Öğretmen Değerlendirmeleri</strong> bölümündeki bir rapor doğrudan onlara ulaşır. Bunu <strong>aynı gün</strong> yapın — kendini yok sayılmış hisseden bir aile hızla tırmanır.</p></div>
   ${timeline([
     {ic:'📝', label:'BO’da bildirin', items:[
       'Öğrenci profili → <strong>İlerleme</strong> → <strong>Öğretmen Değerlendirmeleri</strong> → <strong>Öğrenciyi Değerlendir</strong>.',
       '<strong>Problem Türü:</strong> en yakın olan — örneğin <em>«Öğrenci eğitimini bırakmak istiyor/para iadesi talep ediyor»</em>, <em>«Müşteri programı değiştirmek istiyor»</em> veya faturalandırma, bakiyeler, gruplar ya da satış vaatleri için <em>«Diğer»</em>.',
       'Grubu seçin, olguları ve ailenin kendi sözlerini içeren yorumu yazın ve onaylayın.'
     ]},
     {ic:'👩‍💼', label:'Takım Liderinize haber verin', items:[
       'Aynı gün, BO’daki öğrencinin bağlantısıyla birlikte. Aileye bundan sonra ne söyleyeceğinizi (söyleyecekseniz) onunla kararlaştırın.'
     ]},
     {ic:'🧭', label:'Uygun olduğunda diğer kanallar', items:[
       '<strong>Çözemediğiniz teknik sorun:</strong> Takım Lideriniz → nöbetteki TSM için <em>#menap-teaching-and-techsupport</em> Slack kanalı · Teknik destek: <em>@Gözde Garcia</em>.',
       '<strong>Ders kredileri, düşümler, yanlış bir program:</strong> Takım Lideriniz + Operasyon (<strong>@İlke Aslı Aslan</strong>) · Müşteri Hizmetleri: @Batuhan Oruç.'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Yararlı bir rapor nasıl görünür — kopyalayın ve tamamlayın</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Tarih:</strong> [tarih] · <strong>Grup:</strong> [BO bağlantısı] · <strong>Öğrenci:</strong> [BO bağlantısı]<br>
   <strong>Ailenin dile getirdiği:</strong> [örn. beklemedikleri bir taksit; grup değişti; «satış ekibi daha küçük bir grup vaat etti»]<br>
   <strong>Ailenin sözleri:</strong> [kelimesi kelimesine]<br>
   <strong>Söylediğim:</strong> [örn. durumu kabul ettim ve Müşteri Hizmetleri’nin yardımcı olacağını söyledim — açıklama veya söz yok]<br>
   <strong>Ders bağlamı:</strong> [katılım, öğrencinin durumu, ilgili her şey]<br>
   <strong>Kontrol edilmesini önereceğim:</strong> [isteğe bağlı — sizin öneriniz, onların kararı]</p></div>
   <div class="card"><p><strong>Şimdi uygulayın.</strong> Bir veli az önce şunu yazdı: <em>«Kabul etmediğimiz bir taksit çektiniz ve kimse bize haber vermeden grup değişti. Paramızı geri istiyoruz.»</em> Bunu BO’nun bu kopyasında bildirin. <strong>4. adımda</strong> <strong>«Student wants to drop the studies/asks for refund»</strong> Problem Türünü seçin ve olguları ile ailenin kendi sözlerini yazın.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Müşteri Hizmetlerine bir vaka bildirin</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Müşteri Hizmetlerine bir vaka bildirin" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Neden işe yarar:</strong> Müşteri Hizmetleri yalnızca bildiği şeyi düzeltebilir. Ailenin kendi sözlerini içeren eksiksiz ve tarafsız bir rapor onlara bir telefon görüşmesi kazandırır — ve aileye daha çabuk yanıt ulaşmasını sağlar.</p>`)}
  `}
 ],
 ix:{
  title:'Düzelt mi, bildir mi — modül değerlendirmesi',
  instr:'Her vakayı eşleştirin ve en iyi hamleyi seçin. Bir sonraki modülün kilidini açmak için %70.',
  items:[
   {type:'sort', prompt:'Bu ne tür bir sorun?', card:`«Hiç kabul etmediğimiz bir taksit çekildi.»`, zones:[{label:'🏢 Şirket ve operasyonlar', fb:'Doğru — durumu kabul edin, ödemeyi açıklamayın ve aynı gün BO’da Müşteri Hizmetlerine bildirin.'},{label:'🧑‍🏫 Ders veya eğitmen', fb:'Tam olarak değil — burada hiçbir şey dersle ilgili değil. Faturalandırma Müşteri Hizmetlerine gider.'},{label:'🔧 Teknik', fb:'Tam olarak değil — bu bir faturalandırma sorusu, platform arızası değil.'}], correctZone:0},
   {type:'sort', prompt:'Bu ne tür bir sorun?', card:`«Eğitmen 7 yaşındaki oğlum için çok hızlı gidiyor ve anlayıp anlamadığını kontrol etmiyor.»`, zones:[{label:'🏢 Şirket ve operasyonlar', fb:'Tam olarak değil — bu, dersin nasıl verildiğiyle ilgili. Bir kısmını düzeltmek size düşüyor.'},{label:'🧑‍🏫 Ders veya eğitmen', fb:'Doğru — adımları yavaşlatın, bir sonraki dersten itibaren anlaşılıp anlaşılmadığını kontrol edin ve neyi değiştirdiğinizi içeren bir BO yorumu bırakın.'},{label:'🔧 Teknik', fb:'Tam olarak değil — teknik olarak hiçbir şey arızalanmadı; sorun dersin temposu.'}], correctZone:1},
   {type:'choice', prompt:`Bir veli şöyle diyor: «Premium’a geçtikten sonra yalnızca 19 dersimiz kaldı — bu dolandırıcılık.» Ne yanıt verirsiniz?`, opts:[`«Yeniden hesaplama böyle işliyor — Premium dersler daha pahalı.»`,`«Bunun sinir bozucu olduğunu anlıyorum. Konuyu Müşteri Hizmetleri’ne ilettim, bu konuda size yardımcı olacaklar.»`,`«Haklısınız, bu adil görünmüyor. Derslerinizi geri vermelerini isteyeceğim.»`], correct:1, fb:`Açıklamadan, hak vermeden ve söz vermeden durumu kabul edin. Yeniden hesaplamayı açıklamak Müşteri Hizmetlerinin işidir — ardından BO’da bildirin ve Takım Liderinize haber verin.`},
   {type:'choice', prompt:`Grup değişikliğinden üzgün bir aile için en yararlı BO raporu hangisidir?`, opts:[`«Veli yine kızgın. Grup sorunu.»`,`«12/11, grup [BO bağlantısı]. Anne şunu yazdı: ‘Bize söylemeden oğlumu başka bir gruba taşıdılar ve şimdi gelmek istemiyor.’ Durumu kabul ettim ve Müşteri Hizmetleri’nin onunla iletişime geçeceğini söyledim. 6 dersin hepsine katıldı ve iyi gidiyor.»`,`«Aile her şeyden şikâyet ediyor, lütfen ilgilenin.»`], correct:1, fb:`Olgular, ailenin kendi sözleri, söyledikleriniz ve ders bağlamı. Tarafsız ve eksiksiz — böylece Müşteri Hizmetleri sizi önce aramadan harekete geçebilir.`},
   {type:'sort', prompt:'Sorun değil mi, yoksa kaçınmalı mı?', card:`Bir veli yeni grubun ne zaman başlayacağını soruyor. Şöyle yanıt veriyorsunuz: «Muhtemelen iki hafta sonra.»`, zones:[{label:'✅ Sorun değil', fb:'Tam olarak değil — tahmin edilen bir tarih vaade dönüşür. Gerçekleşmezse aile güvenini yeniden kaybeder.'},{label:'🚫 Kaçının', fb:'Doğru — elinizde olmayan tarihleri vermeyin. Müşteri Hizmetleri başlangıç tarihi konusunda yardımcı olacak; BO’da bildirin.'}], correctZone:1}
  ]
 }
},
{id:'angry', numLabel:'Modül 4', emoji:'🌋', color:'var(--coral)',
 title:'Çok Öfkeli veya Tehdit Eden Veliler',
 desc:'Bir veli öfkeli, tehditkâr veya hakaret edici olduğunda — bazen net bir neden olmadan — ne yapılacağı: sakin kalmak, sınırları ve saygıyı korumak, belgelemek ve onları Müşteri Hizmetlerine yönlendirmek.',
 obj:'Çok öfkeli bir veli karşısında dengede kalmak, tartışmadan ve söz vermeden durumu kabul etmek, saygı kaybolduğunda sakin sınırlar koymak, aileyi Müşteri Hizmetlerine yönlendirmek ve vakayı aynı gün BO’da belgelemek.',
 sections:[
  {t:'🌋 Öfke sorundan daha büyük olduğunda', html:`
   <div class="card"><p>Bazen bir veli öfkeyle gelir ve nedenini bulamazsınız: dersler iyi geçti, belirgin bir şey olmadı. Öfke, sizin hiç görmediğiniz uzun bir olaylar zincirinden kaynaklanıyor olabilir — bir ücret, kimsenin geri dönmediği bir arama, kötü bir hafta. Siz sadece ulaşabildikleri kişisiniz.</p></div>
   ${iconGrid([
     {ic:'🚫', html:`<strong>Tartışmayı kazanmak</strong> — ya da ailenin haksız olduğunu kanıtlamak — sizin işiniz değil.`},
     {ic:'🙅', html:`<strong>Hakaretleri veya tehditleri sineye çekmek</strong> sizin işiniz değil.`},
     {ic:'✅', html:`Sakin ve saygılı kalmak, sınırları korumak, olanı belgelemek ve Müşteri Hizmetlerine iletmek <strong>sizin işinizdir</strong>.`}
   ])}
  `},
  {t:'🧘 Önce kendinizi düzenleyin', html:`
   <div class="card"><p>Öfke bulaşıcıdır — sakinlik de öyle. Yanıt vermeden önce kendi durumunuza dikkat edin: sahip olduğunuz ilk araç budur.</p></div>
   ${iconGrid([
     {ic:'🌬️', html:`<strong>Yanıt vermeden önce nefes alın.</strong> Bir saniyelik duraklama, dürtüsel yanıt vermenizi engeller.`},
     {ic:'🔉', html:`<strong>Bir görüşmede sesinizi alçaltın ve yavaşlayın.</strong> Yazılı olarak cümlelerinizi kısa ve tarafsız tutun.`},
     {ic:'⏱️', html:`<strong>Yazılı bir mesaj mı?</strong> Aynı gün yanıt verin — ancak yazmadan önce birkaç dakika bekleyin ve asla öfkeyle yanıt vermeyin.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Yalnız değilsiniz.</strong> Takım Liderinize erkenden haber verin — tehdit eden bir veliyle tek başınıza ilgilenmek zorunda değilsiniz.`}
   ])}
  `},
  {t:'🪜 Ne yapılmalı, adım adım', html:`
   ${stepper([
     {ic:'🤝', title:'Duyguyu kabul edin', html:`<p>Suçlamalara katılmadan onları duyduğunuzu gösterin.</p><p><em>«Çok üzgün olduğunuzu görüyorum ve bunun doğru kişilere ulaşmasını sağlamak istiyorum.»</em></p>`},
     {ic:'❓', title:'Neden belli değilse, bir kez sorun', html:`<p>Tek bir açık soru — tahmin yürütmeyin, sorguya çekmeyin.</p><p><em>«Doğru aktarabilmem için neler olduğunu anlatabilir misiniz?»</em></p>`},
     {ic:'🧊', title:'Tartışmayın, savunmaya geçmeyin, söz vermeyin', html:`<p>Onların anlattığını düzeltmeyin, diğer ekipleri veya platformu suçlamayın ve onları yatıştırmak için hiçbir şey önermeyin.</p>`},
     {ic:'📞', title:'Onları Müşteri Hizmetlerine yönlendirin', html:`<p>Cevaplar ve seçenekler orada.</p><p><em>«Müşteri Hizmetleri bu konuda size yardımcı olacak — mesajınızı zaten ilettim.»</em></p>`},
     {ic:'📝', title:'Aynı gün belgeleyin', html:`<p>Velinin tam sözlerini — varsa tehdit dahil — BO’da bildirin ve aynı gün Takım Liderinize haber verin.</p>`}
   ])}
  `},
  {t:'🛑 Sınırlar ve saygı', html:`
   <div class="card"><p>Saygı iki yönlüdür. Ne olursa olsun saygılı kalırsınız — ve konuşma saygılı olmaktan çıktığında sakin bir şekilde sınır koyabilirsiniz.</p></div>
   ${co('co-ok','🗣️',`<p><strong>Söyleyebileceğiniz bir sınır:</strong> <em>«Size yardımcı olmak istiyorum ve saygılı konuşabildiğimizde devam etmekten memnuniyet duyarım. Mesajınızı Müşteri Hizmetleri’ne ilettim, sizinle iletişime geçecekler.»</em> Bir aramada, bunu söyledikten sonra nezaketle sonlandırabilirsiniz.</p>`)}
   ${doavoid(
     ['Hakaretler karşısında bile sakin, tarafsız bir ton koruyun','Bir tehdidin içeriğini (avukat, yorumlar, sosyal medya) görmezden gelin — onun yerine kelimesi kelimesine bildirin','Çocuğa sıcak davranmaya devam edin: çocuk asla velinin öfkesinden sorumlu değildir','Bir veli dersi keserse kısa tutun: <em>«Mesajınızın dersten sonra ekibimize ulaşmasını sağlayacağım»</em> — ardından öğrenciler için devam edin'],
     ['Karşılık vermekten, alaydan veya hakaretten','Diğer ailelerin önünde grup sohbetinde tartışmaktan','Yatıştırmak için iade, tazminat veya değişiklik sözü vermekten','Çatışmayı öğrencilerin önünde konuşmaktan']
   )}
   ${co('co-danger','🚨',`<p><strong>Tehditler, hakaretler veya taciz her zaman BO’da, tam sözlerle ve aynı gün Takım Liderinize bildirilir.</strong> O aileyle konuşmaya devam edip etmeyeceğinize tek başınıza karar vermezsiniz.</p>`)}
  `},
  {t:'💬 Uygulayın', html:`
   ${chatMock({
     name:'Veli', sub:'çevrimiçi', avatar:'😠', time:'21:15',
     msgs:[`Bu bir DOLANDIRICILIK. Hiçbir şey çalışmıyor, kimse yanıt vermiyor ve oğlum hiçbir şey öğrenmedi. Yarına kadar TÜM paramı geri alamazsam bir avukata gideceğim ve sizin hakkınızda her yerde yazacağım.`],
     title:'Nasıl yanıt verirsiniz?',
     text:'Geç oldu, mesaj saldırgan ve net bir neden yok — dersleriniz iyi geçti. Ne olacağını görmek için her yanıta dokunun.',
     opts:[
      {t:`«Biz dolandırıcı değiliz. Oğlunuz tüm derslere katıldı ve iyi gidiyor — lütfen bizi suçlamadan önce kontrol edin.»`, ok:false, fb:`Kendinizi savunmak bunu bir tartışmaya dönüştürür ve veliyi daha da öfkelendirir. Doğru olsa bile, onun haksız olduğunu kanıtlamak sizin işiniz değil.`},
      {t:`«Böyle hissettiğiniz için üzgünüm ve mesajınızın doğru kişilere ulaşmasını sağlamak istiyorum. Konuyu Müşteri Hizmetleri’ne ilettim, bu konuda size yardımcı olacaklar. Derslerimizde [öğrenci] için elimden gelenin en iyisini yapmaya devam edeceğim.»`, ok:true, fb:`Sakin, saygılı ve net: duyguyu kabul ediyorsunuz, suçlamayla tartışmıyorsunuz, tehdide karşılık vermiyorsunuz ve Müşteri Hizmetlerine yönlendiriyorsunuz. Ardından tam sözlerle BO’da bildirin ve Takım Liderinize haber verin.`},
      {t:`«Lütfen bunu yapmayın! Paranızı geri almanızı sağlayacağım.»`, ok:false, fb:`İade, sizin söz verebileceğiniz bir şey değildir. Tam olarak söylediğiniz gibi olmazsa, bir sonraki mesaj daha da öfkeli olacaktır.`},
      {t:`Bırakıyorum — yanıt vermek sadece durumu kötüleştirir.`, reply:`<i>(yanıt yok…)</i>`, ok:false, fb:`Sessizlik, «kimse yanıt vermiyor» düşüncesini doğrular. Aynı gün, kısaca ve sakince kabul edin — ve bildirin.`}
     ]
   })}
  `}
 ],
 ix:{
  title:'Çok öfkeli veliler — modül değerlendirmesi',
  instr:'En iyi hamleyi seçin veya her yanıtı eşleştirin. Son kontrol listesinin kilidini açmak için %70.',
  items:[
   {type:'choice', prompt:`Bir veli «bu okul bir felaket» diye bağırarak arıyor, ancak ne olduğunu anlayamıyorsunuz. İlk olarak ne yaparsınız?`, opts:[`Derslerde iyi giden her şeyi açıklarsınız`,`Sesinizi alçaltır, ne kadar üzgün olduğunu kabul eder ve bir kez sorarsınız: «Doğru aktarabilmem için neler olduğunu anlatabilir misiniz?»`,`Telefonu kapatırsınız — bunu dinlemek zorunda değilsiniz`], correct:1, fb:`Kendinizi düzenleyin, duyguyu kabul edin ve tek bir açık soru sorun. Ardından onları Müşteri Hizmetlerine yönlendirin ve belgeleyin.`},
   {type:'sort', prompt:'Hazine mi, çöp mü? Bu iyi bir yanıt mı?', card:`«Size yardımcı olmak istiyorum ve saygılı konuşabildiğimizde devam etmekten memnuniyet duyarım. Mesajınızı Müşteri Hizmetleri’ne ilettim.»`, zones:[{label:'💎 Hazine', fb:'Doğru — saygıyı koruyan ve Müşteri Hizmetlerine yönlendiren sakin bir sınır.'},{label:'🗑️ Çöp', fb:'Tam olarak değil — bu saygılı bir sınırdır, tam da bir konuşma saygılı olmaktan çıktığında söyleyebileceğiniz şeydir.'}], correctZone:0},
   {type:'choice', prompt:`Bir veli iade alamazsa kötü yorumlar yayınlamakla tehdit ediyor. Tehdide ne yaparsınız?`, opts:[`Yorumların hiçbir şeyi değiştirmeyeceğini söylersiniz`,`Yayınlamasın diye iadeyi isteyeceğinize söz verirsiniz`,`Ona yanıt vermezsiniz — BO’da kelimesi kelimesine bildirir ve aynı gün Takım Liderinize haber verirsiniz`], correct:2, fb:`Bir tehditle pazarlık etmezsiniz ve onunla tartışmazsınız. Onu tam olarak belgeler ve Takım Lideriniz ve Müşteri Hizmetlerinin ilgilenmesine izin verirsiniz.`},
   {type:'sort', prompt:'Hazine mi, çöp mü? Bu iyi bir yanıt mı?', card:`Diğer ailelerin önünde, grup sohbetinde: «Dikkat etmeyen sizin oğlunuz, o yüzden beni suçlamayın.»`, zones:[{label:'💎 Hazine', fb:'Tam olarak değil — çocuğu suçluyor, herkesin önünde tartışıyor ve çatışmayı tırmandırıyor.'},{label:'🗑️ Çöp', fb:'Doğru — grup sohbetinde asla tartışmayın veya çocuğu suçlamayın. Kısaca durumu kabul edin, Müşteri Hizmetlerine ve Takım Liderinize taşıyın.'}], correctZone:1}
  ]
 }
},
{id:'checklist', numLabel:'Son Kontrol Listesi', emoji:'✅', color:'var(--coral)',
 title:'Son Kontrol Listesi',
 desc:'Burada test yok — mini eğitimi kapatmadan önce temel noktaların bir özeti.',
 obj:'Aşağıdaki kontrol listesini gözden geçirin. Bu modül notlandırılmaz — okuyun, ardından mini eğitimi bitirin.',
 sections:[
  {t:'🛟 Bir iade talebi zaten varsa', html:`
   ${numlist([
     'Talebi öğrendiğim gün BO’da bir yorum bıraktım ve Takım Liderimi bilgilendirdim',
     'Bu öğrenciyle yaptığım bir sonraki ders gerçek bir kazanma girişimiydi — gerçek bir söz hakkı, görünür bir başarı, özel ilgi ve talepten hiç bahsetmeden',
     'Onayı asla teyit etmedim ve herhangi bir tutar konuşmadım — güvenli tek cümleyi kullandım ve gerisini Müşteri Hizmetleri’ne bıraktım'
   ])}
  `},  {t:'🌱 Her derste', html:`
   ${numlist([
     'Her dersi bir gün önce, kılavuzdaki hedeflerden ve beklenen kazanımlardan başlayarak çalışıyor ve prova ediyorum',
     'Yeni kavramları açıklamak için kılavuzdaki önerilen ifadeleri kullanıyor ve dersten önce fark ettiğim her eksik için mentoruma, Takım Liderime veya Slack kanalına soruyorum',
     'Önce modelliyorum: öğrenciler denemeden önce kendi ekranımda gösteriyor ve düşüncelerimi yüksek sesle paylaşıyorum',
     'İskele kuruyorum: başta çok destek (bir şablon, yönlendirilmiş adımlar), öğrenci bağımsızlık kazandıkça daha az destek',
     'Materyalde bir hata olduğunda bunu sakin bir şekilde dile getiriyor ve birlikte çözdüğümüz bir şeye dönüştürüyorum',
     'Hataları yüksek sesle olağan karşılıyorum; böylece öğrenciler hataları utanılacak bir şey olarak değil, kodlama öğrenmenin normal bir parçası olarak görüyor',
     'Bir hatayı asla büyütmüyor, öğrencilerin önünde platformu suçlamıyor ya da dersin geri kalanını yemesine izin vermiyorum',
     'Her içerik hatasını BO’daki 🐞 simgesiyle bildiriyor ve kurs ID’sinin öğrencilerimin grubuyla eşleştiğini kontrol ediyorum',
     'Bağlantımı, kameramı ve mikrofonumu dersten 30 dakika önce test ediyor ve ihtiyacım olmayan sekmeleri ve programları kapatıyorum',
     'Öğrencilerin Google Chrome ve uygun bir cihaz kullandığından emin oluyorum — Safari değil; Roblox Studio veya Unity gibi kurslar için tablet de değil',
     'Teknik sorunlarda: çözmek için en fazla 10 dakika, ardından iletişim kur, kayıt altına al ve üst kademeye ilet — iki ders üst üste yaşanırsa Müşteri Hizmetleri’nde bir destek talebi',
     'Bir öğrenciye teknik bir sorunda yardım ederken grubun geri kalanına üzerinde çalışacakları bir şey veriyorum; böylece kimse beklemek zorunda kalmıyor',
     'Faturalandırma, taksitler, yeniden hesaplamalar, bakiyeler, grup değişiklikleri, başlangıç gecikmeleri, destek veya satış vaatleri ve Minecraft lisansı konularında durumu kabul ediyorum — açıklamıyorum, savunmaya geçmiyorum ve söz vermiyorum',
     'Bu vakaları aynı gün BO’da (Öğretmen Değerlendirmeleri → Öğrenciyi Değerlendir) ailenin kendi sözleriyle Müşteri Hizmetlerine bildiriyorum ve Takım Liderime haber veriyorum',
     'Doğru kanalı kullanıyorum: teknik sorunlar için Takım Liderim → #menap-teaching-and-techsupport Slack kanalı, krediler ve düşümler için Takım Liderim ve Operasyon',
     'Sorun ders olduğunda — tempo, açıklamalar, kaotik bir grup, kaçırılan bir ders, özel ihtiyaçlar, eğitmen değişiklikleri — payıma düşeni bir sonraki dersten itibaren düzeltiyorum ve yine de bildiriyorum',
     'Çok öfkeli veya tehdit eden bir veliyle kendimi düzenliyorum, duyguyu kabul ediyorum, neden net değilse bir kez soruyorum ve onları Müşteri Hizmetlerine yönlendiriyorum',
     'Saygıyı koruyorum ve sakin sınırlar koyuyorum; asla tartışmam, karşılık vermem veya bir veliyi yatıştırmak için hiçbir şey vaat etmem',
     'Tehditleri ve hakaretleri BO’da kelimesi kelimesine bildiriyorum ve aynı gün Takım Liderime haber veriyorum — ve çocuğa sıcak davranmaya devam ediyorum'
   ])}
  `},  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Mini eğitimin tamamı bu kadar.</strong> Hazır olduğunuzda devam edin — ardından ödevi kapatmak için LMS’deki DST’yi tamamlayın.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
