/* Mini_Training_5_Handling_Content_Errors - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='tr';
const CONTENT = {
  flag:'🇹🇷', dir:'ltr',
  ui:{
    pageTitle:"Mini Eğitim · Dersteki Hatalarla Başa Çıkmak — Kodland Eğitmen Eğitimi",
    logoSub:'Eğitmen Gelişim Departmanı',
    heroEyebrow:"🎯 Mini Eğitim",
    heroTitle:"<span class=\"h-pill\">Hatalara</span> Rağmen Dersi Dengede Tutmak",
    heroIntro:"Bu eğitimi görüyorsunuz, çünkü bir aile hatalarla ve hayal kırıklığıyla dolu geçen bir dersi bildirdi. Bunların çoğu hazırlığa, anlatıma ya da içerikteki gerçek hatalara dayanır — ve hepsi düzeltilebilir.",
    heroWork:"4 kısa modülü tamamlayın. Bir sonraki modülün kilidini açmak için her modül kontrolünde en az %70 almanız gerekir. Toplam süre yaklaşık 25–30 dakikadır.",
    startBtn:"🚀 Eğitimi Başlat",
    pathLabel:'Öğrenme yolunuz',
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
 desc:'Hatalarla dolu bir ders neden kaotik hissettirir — ve bir iade talebi zaten oluşturulduysa hangi kurallar geçerlidir.',
 obj:'Bu durumların çoğunun hazırlığa, anlatıma veya içerik sorunlarına dayandığını — ve hepsinin somut bir çözümü olduğunu — anlamak ve bir iade talebi zaten varsa tam olarak ne yapmanız (ve ne yapmamanız) gerektiğini bilmek.',
 sections:[
  {t:'😤 Bir ders bir hatalar zinciri gibi hissettirdiğinde', html:`
   <div class="card"><p>Hatalarla dolu bir ders — öğrencinin hataları, materyalin hataları ya da anlatım sırasında ortaya çıkanlar — bunlarla başa çıkmak için bir plan yoksa kısa sürede kaotik hissettirebilir. Aileler bunu çabuk fark eder: altta yatan neden birkaç dakikada düzeltilebilecek olsa bile, durum “ders işe yaramıyor” şeklinde algılanır.</p></div>
   ${co('co-idea','💡',`<p><strong>Bunların çoğu önlenebilir.</strong> İyi hazırlanmış bir ders, konuları net bir şekilde anlatmanın bir yolu ve gerçek bir içerik hatasını nasıl bildireceğinizi bilmek, küçük hataların kontrolden çıkmış gibi hissettiren bir derse dönüşmesini önler.</p>`)}
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
  instr:'Son kontrol listesinin kilidini açmak için %70 gerekir.',
  items:[
   {type:'choice', prompt:'Bir öğrenci, dersin örnek kodunda gerçek bir hata fark ediyor. Sınıftaki ilk hamleniz nedir?', opts:['Zaman kazanmak için etkinliği açıklama yapmadan atlamak','Hatayı sakin bir şekilde dile getirip bunu “birlikte çözelim” anına dönüştürmek','Gruba platformun her zaman hatalarla dolu olduğunu söylemek'], correct:1, fb:'Sakin ve iş birliğine dayalı bir tutum, dersin kaotik hissettirmesini önler — ve hatalarla nasıl başa çıkılacağını örnekler.'},
   {type:'sort', prompt:'İçerik hatası mı, teknik sorun mu?', card:'Dersin başlangıç kodundaki bir satırda yazım hatası var ve kimse hiçbir şeyi değiştirmeden hata veriyor.', zones:[{label:'🔧 Teknik sorun → protokolü izleyin', fb:'Tam değil — kodun kendisi herkes için yanlış. Bu bir içerik hatasıdır: sakin bir şekilde etrafından dolaşın ve BO’daki 🐞 simgesiyle bildirin.'},{label:'🐞 İçerik hatası → BO’da bildirin', fb:'Doğru — materyalin kendisi yanlış. Sakin bir şekilde etrafından dolaşın, ardından tüm gruplar için düzeltilmesi amacıyla 🐞 simgesiyle bildirin.'}], correctZone:1},
   {type:'sort', prompt:'İçerik hatası mı, teknik sorun mu?', card:'Bir öğrencinin ekranı ders sırasında sürekli donuyor ve sesi sürekli kesiliyor.', zones:[{label:'🔧 Teknik sorun → protokolü izleyin', fb:'Doğru — hızlı bir çözüm deneyin, grubun çalışmaya devam etmesini sağlayın ve tekrar ederse iletişim kurun, kayıt altına alın ve üst kademeye iletin.'},{label:'🐞 İçerik hatası → BO’da bildirin', fb:'Tam değil — materyalde bir sorun yok. Donan bir ekran ve kesilen ses tekniktir: protokolü izleyin.'}], correctZone:0},
   {type:'choice', prompt:'BO’da bir içerik hatasını nereden bildirirsiniz?', opts:['Öğrencinin ailesine gönderilen bir mesajla','Grubun Kontrol sekmesinden','Kurs kaydının içinde, ders satırındaki 🐞 simgesiyle'], correct:2, fb:'Her ders satırındaki 🐞 simgesi içerik kalitesi anketini açar — materyalin düzeltilmesini sağlayan da budur.'},
   {type:'choice', prompt:'Aynı teknik sorun üst üste ikinci derste de yaşanıyor. Ne değişir?', opts:['Aynı gün Müşteri Hizmetleri’nde bir destek talebi (ticket) açarsınız','Hiçbir şey — kendiniz çözmeye çalışmaya devam edersiniz','Bunun bir örüntü olduğundan emin olmak için bir ders daha beklersiniz'], correct:0, fb:'Tekrarlanması, konuyu Müşteri Hizmetleri’ne iletme zamanının geldiği anlamına gelir — veliye de birinin kendisiyle iletişime geçeceğini bildirin.'}
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
     'Bir öğrenciye teknik bir sorunda yardım ederken grubun geri kalanına üzerinde çalışacakları bir şey veriyorum; böylece kimse beklemek zorunda kalmıyor'
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
