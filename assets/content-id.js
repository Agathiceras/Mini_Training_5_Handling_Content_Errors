/* Mini_Training_5_Handling_Content_Errors - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='id';
const CONTENT = {
  flag:'🇮🇩', dir:'ltr',
  ui:{
    heroCard1:"<b>Sesuai kecepatanmu.</b> Progresmu tersimpan di browser ini.",
    heroCard2:"<b>Termasuk latihan.</b> Setiap modul diakhiri dengan pengecekan singkat.",
    pbLabel:'modul selesai',
    tapOpen:'Ketuk untuk membuka',
    tapFlip:'Ketuk untuk membalik',
    lblSee:'Yang kamu lihat',
    lblDo:'Yang kamu lakukan',
    lblSay:'Yang bisa kamu katakan',
    lblReport:'Ke mana melapor',
    lblAvoid:'Hindari',
    lblTip:'Tips',
    stepOf:'Langkah {i} dari {n}',
    next:'Berikutnya',
    pageTitle:"Mini-Training · Menangani Kesalahan di Kelas — Pelatihan Tutor Kodland",
    logoSub:'Departemen Pengembangan Tutor',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Menjaga Pelajaran Tetap Stabil Saat Ada <span class=\"h-pill\">Kesalahan</span>",
    heroIntro:"Anda melihat ini karena sebuah keluarga mengajukan permintaan pengembalian dana yang sangat negatif: kelas yang terasa penuh kesalahan, masalah dengan layanan perusahaan, atau banyak kemarahan tanpa penyebab yang jelas. Di sini, kami akan menunjukkan apa yang menjadi tanggung jawab Anda untuk diperbaiki, apa yang harus dilaporkan ke Client Service, dan bagaimana menanganinya dengan tenang.",
    heroWork:"Selesaikan 6 modul singkat. Setiap evaluasi modul membutuhkan nilai minimal 70% untuk membuka modul berikutnya. Total durasi sekitar 40–45 menit.",
    startBtn:"🚀 Mulai Pelatihan",
    pathLabel:'Jalur belajarmu',
    devTitle:'Dev: buka semua modul untuk ditinjau',
    backToPath:'Kembali ke jalur',
    modulesPassed:'{done} / {total} modul lulus',
    moduleN:'Modul {n}',
    of:'dari',
    locked:'🔒 Terkunci',
    passedBadge:'✅ Lulus · {pct}%',
    reviewedBadge:'✅ Sudah ditinjau',
    startBadge:'▶ Mulai',
    reviewBadge:'▶ Tinjau',
    objective:'Tujuan',
    startCheck:'▶ Mulai cek modul',
    finishBtn:'▶ Selesaikan mini-training',
    doneBack:'✓ Selesai — kembali ke jalur',
    ixBadge:'📋 Cek modul — 70% untuk membuka modul berikutnya',
    ixItemBadge:'📋 Cek modul — soal {i} dari {n}',
    scoreSoFar:'Skor sementara: {c} / {t}',
    continue:'Lanjut →',
    sortWrong:'Belum tepat — jawaban yang benar adalah “{label}”.',
    resPassed:'Modul lulus!',
    resFailed:'Belum berhasil',
    resUnlocked:"Kamu sudah membuka modul berikutnya.",
    resDone:"Kamu sudah menyelesaikan mini-training ini.",
    resNeed:'Kamu butuh 70% untuk membuka modul berikutnya. Tinjau lagi bagian di atas, lalu coba cek ini sekali lagi.',
    resContinue:'Lanjut ke jalur belajar',
    resFinish:'Lanjut',
    resBack:'Kembali ke jalur',
    resReview:'Tinjau modul ini',
    doneEyebrow:'Mini-Training Selesai',
    doneTitle:'🎉 Selamat!',
    doneP1:"🎉 <strong>Selamat! Kamu sudah menyelesaikan mini-training ini.</strong>",
    doneP2:"Semuanya sudah selesai di sini! Silakan kembali ke halaman pelatihan di LMS tempat kamu membuka mini-training ini untuk menuntaskan tugasnya.",
    doneP3:"👉 <strong>Jika ada cek atau penilaian yang tercantum tepat di bawah pelatihan ini di LMS, pastikan kamu menyelesaikannya dan mencapai nilai kelulusan</strong> — jika tidak, tugasnya bisa tetap tercatat belum selesai.",
    doneP4:'Semoga sukses! ❤️',
    doneP5:'',
    devUnlockAlert:'Mode dev: semua modul sekarang terbuka untuk ditinjau.',
    devOn:'🔓 Mode dev AKTIF — semua modul terbuka',
    devOff:'🔒 Mode dev NONAKTIF — progres dihapus',
    devBadge:'🔓 MODE DEV',
    doLabel:'✅ Lakukan',
    avoidLabel:'🚫 Hindari',
    noticeLabel:'Perhatikan:',
    cvSee:'Yang kamu lihat:',
    cvDo:'Yang kamu lakukan:',
    dtExample:'Contoh dari kelas sungguhan',
    dtNext:'Berikutnya:',
    dtDone:"✅ Itu dia keempat area. Selanjutnya, klasifikasikan apa yang kamu lihat.",
    tlVideoTitle:'{label} — contoh dari kelas sungguhan',
    tlVideoMeta:'Tonton seperti apa fase ini dalam pelajaran sungguhan'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Pendahuluan', emoji:'🧩', color:'var(--coral)',
 title:'Kenapa Penting Memahaminya',
 desc:'Mengapa kelas yang penuh kesalahan terasa kacau, apa lagi yang biasanya ada di balik keluarga yang sangat negatif, dan aturan yang berlaku setelah permintaan pengembalian dana masuk.',
 obj:'Memahami penyebab utama di balik keluarga yang sangat negatif (kesalahan di dalam kelas, masalah operasional, masalah kelas atau tutor, dan orang tua yang sangat marah) serta mengetahui dengan tepat apa yang harus dilakukan (dan tidak boleh dilakukan) setelah permintaan pengembalian dana sudah ada.',
 sections:[
  {t:'😤 Saat pelajaran terasa seperti rangkaian kesalahan', html:`
   <div class="card"><p>Pelajaran yang penuh kesalahan — dari siswa, dari materi, atau yang muncul di tengah penjelasan — bisa cepat terasa kacau jika tidak ada rencana untuk menanganinya. Keluarga cepat menyadarinya: terlihat seperti “kelasnya tidak berjalan baik”, padahal penyebabnya bisa diperbaiki dalam hitungan menit.</p></div>
   ${co('co-idea','💡',`<p><strong>Sebagian besar hal ini bisa dicegah.</strong> Persiapan yang matang, penjelasan yang jelas, dan tahu cara melaporkan kesalahan materi bisa mencegah kesalahan kecil membuat pelajaran terasa tidak terkendali.</p>`)}
  `},
  {t:'🧭 Keluarga yang sangat negatif — apa yang biasanya ada di baliknya', html:`
   <div class="card"><p>Kesalahan di dalam kelas hanyalah sebagian dari gambaran. Ketika sebuah keluarga sangat negatif, penyebabnya sering kali berada di luar kelas sama sekali — dan Anda tetap perlu tahu apa yang harus dilakukan:</p></div>
   ${iconGrid([
     {ic:'🐞', html:`<strong>Kelas yang terasa penuh kesalahan</strong> — persiapan, penjelasan, materi, atau masalah teknis. <em>Modul 1 dan 2.</em>`},
     {ic:'🏢', html:`<strong>Masalah perusahaan dan operasional</strong> — penagihan, cicilan, saldo, perubahan grup, keterlambatan mulai, dukungan yang tidak menjawab, janji dari tim penjualan, lisensi Minecraft. <em>Modul 3.</em>`},
     {ic:'🧑‍🏫', html:`<strong>Kelas atau tutor</strong> — tempo, penjelasan, grup yang kacau, kelas yang terlewat, koneksi, kebutuhan khusus, terlalu sering berganti tutor. <em>Modul 3.</em>`},
     {ic:'🌋', html:`<strong>Orang tua yang sangat marah atau mengancam</strong>, terkadang tanpa penyebab yang jelas. <em>Modul 4.</em>`}
   ])}
   ${co('co-ok','✅',`<p><strong>Yang menjadi tanggung jawab Anda dalam setiap kasus:</strong> memperbaiki apa yang ada di kelas Anda, melaporkan sisanya ke Client Service di hari yang sama, dan tetap tenang serta sopan — apa pun nada keluarga.</p>`)}
  `},
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   <div class="card"><p>Semua hal di atas adalah cara menyadari tanda ini sejak dini. Tapi mungkin kamu membuka pelatihan ini karena ada keluarga yang <strong>sudah</strong> mengajukan refund. Aturan di bawah ini berlaku apa pun alasannya. Baca dulu, lalu gunakan materi selanjutnya di pelatihan ini untuk memahami apa yang menyebabkannya dan apa yang masih bisa kamu lakukan di kelas.</p></div>
   ${co('co-idea','💡',`<p><strong>Permintaannya sendiri dibuat oleh Client Service, bukan oleh kamu</strong> — bagian itu bukan wewenangmu. Yang masih menjadi bagianmu adalah semua yang terjadi di kelas mulai sekarang, dan itu bukan hal kecil.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Jangan membicarakan permintaan refund itu sama sekali</strong> — tidak kepada anak, tidak kepada keluarga — kecuali Client Service secara jelas memintamu menyampaikan sesuatu yang spesifik. Tugasmu sekarang adalah pelajarannya, bukan percakapan itu.</p>`)}
  `},
  {t:'🎯 Pelajaran berikutnya adalah kesempatan untuk mempertahankannya', html:`
   <div class="card"><p>Mungkin kamu tidak punya kesempatan untuk mengubah hal lain. Perlakukan pelajaran berikutnya dengan anak ini sebagai momen penentu.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Beri dia giliran yang sungguhan.</strong> Bukan pertanyaan basa-basi — tapi momen nyata saat dia diperhatikan dan berhasil.`},
     {ic:'🏆', html:`<strong>Ciptakan keberhasilan yang cepat dan terlihat.</strong> Dia harus meninggalkan kelas dengan perasaan mampu, bukan tertinggal.`},
     {ic:'👀', html:`<strong>Perhatian yang spesifik</strong> — buat dia merasa diperhatikan karena sesuatu yang konkret, bukan sekadar dipuji secara umum.`},
     {ic:'🤐', html:`<strong>Jangan menyinggung permintaan refund</strong> — bahkan jika anak itu yang membahasnya, alihkan dengan hangat dan lanjutkan mengajar.`}
   ])}
  `},
  {t:'📮 Laporkan dengan cepat, dan ingat satu kalimat yang aman', html:`
   <div class="card"><p>Aturan emasnya. Jika kamu tidak bisa memperbaikinya sendiri dalam 10 menit, jangan terus mencoba diam-diam. Komunikasikan → dokumentasikan → eskalasikan. Orang tua yang tahu apa yang terjadi akan percaya padamu. Orang tua yang tidak diberi tahu bisa saja memutuskan berhenti.</p></div>
   ${numlist([
     'Tinggalkan komentar di BO pada hari yang sama berisi persis apa yang kamu lihat — tanggal dan detail, bukan kesan',
     'Sertakan kata-kata keluarga itu sendiri, apa adanya, jika kamu punya',
     'Libatkan Team Leader-mu pada hari yang sama',
     'Jangan pernah mengonfirmasi bahwa refund sudah disetujui, atau membahas nominal apa pun'
   ])}
   ${co('co-ok','✅',`<p><strong>Kalimat yang selalu aman untuk diucapkan:</strong> <em>“Tim Customer Service akan membantu Anda terkait hal ini.”</em> Di situlah bagianmu dalam percakapan berakhir — Client Service yang akan melanjutkannya.</p>`)}
  `},
  {t:'🌱 Pertahankan setelahnya', html:`
   <div class="card"><p>Entah permintaannya dibatalkan, anak itu tetap di grupmu, atau pindah ke tutor atau format lain, tetap berikan perhatian ekstra selama beberapa pelajaran berikutnya. Upaya mempertahankan yang hanya bertahan satu pelajaran lalu diam-diam kembali seperti biasa sering kali tidak berhasil sama sekali.</p></div>
  `}
 ]
},
{id:'manual', numLabel:'Modul 1', emoji:'📘', color:'var(--coral)',
 title:'Menggunakan Panduan, dan Menjelaskannya dengan Baik',
 desc:'Apa saja yang sudah disediakan panduan untukmu, mengapa mempelajarinya sehari sebelumnya bisa mencegah sebagian besar masalah, dan dua teknik mengajar — modelling dan scaffolding — yang membantu siswa langsung memahami konsep baru.',
 obj:'Menggunakan tujuan dan contoh kalimat di panduan secara efektif, tahu ke mana meminta bantuan sebelum pelajaran, dan menerapkan modelling dan scaffolding untuk menjelaskan konsep baru dengan lebih jelas.',
 sections:[
  {t:'📘 Apa yang sudah disediakan panduan untukmu', html:`
   <div class="card"><p>Setiap panduan dibuka dengan tujuan pelajaran dan hasil yang diharapkan — itulah yang perlu kamu perhatikan, bukan hanya urutan langkahnya. Panduan juga berisi contoh kalimat untuk menjelaskan setiap konsep, yang ditulis oleh orang-orang yang sudah memikirkan dengan cermat cara memperkenalkannya.</p></div>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image1.png" alt="Panduan pelajaran yang menampilkan tujuan pelajaran dan hasil pembelajaran"><figcaption>📌 Di awal setiap panduan kamu akan menemukan tujuan pembelajaran dari pelajaran itu, serta apa yang diharapkan dicapai atau dipelajari siswa di akhir pelajaran.</figcaption></figure>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image2.png" alt="Halaman panduan pelajaran dengan contoh kalimat untuk tutor"><figcaption>💬 Jika kamu ragu cara melakukan transisi, memperkenalkan topik atau aktivitas, atau menjelaskannya, panduan menyediakan contoh kalimat yang bisa kamu gunakan.</figcaption></figure>
  `},
  {t:'⏳ Sehari sebelumnya, bukan sejam sebelumnya', html:`
   ${co('co-idea','💡',`<p><strong>Pelajari dan latih pelajarannya sehari sebelumnya</strong> — bukan satu jam, dan bukan tiga puluh menit sebelumnya. Jeda itu memberimu waktu yang cukup untuk menyadari: kode yang sudah tidak berfungsi, materi yang tidak mau termuat, atau aktivitas yang belum sepenuhnya kamu pahami sendiri.</p>`)}
   ${co('co-star','⭐',`<p>Jika kamu menemukan kekurangan, tanyakan kepada mentor, Team Leader-mu, atau tutor lain di channel Slack kursusmu. Dengan meminta bantuan sehari sebelumnya, masalah tidak akan muncul di tengah kelas, di depan siswa.</p>`)}
  `},
  {t:'🧑‍🏫 Yang benar-benar membantu sebuah konsep dipahami', html:`
   <div class="card"><p>Cara kamu menjelaskan sama pentingnya dengan isi penjelasanmu. Konsep yang dijelaskan dengan jelas sejak awal bisa mencegah banyak kesalahan karena siswa bingung di kemudian hari.</p></div>
  `},
  {t:'🎬 Modelling: tunjukkan sebelum mereka mencoba', html:`
   <div class="card"><p><strong>Modelling</strong> berarti memperagakan tekniknya sendiri di layarmu sebelum siswa mencobanya. Jelaskan apa yang kamu pikirkan sambil mengerjakannya — cara berpikirnya sering kali lebih berharga daripada hasilnya.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Modelling, langkah demi langkah</div><div class="vslot-meta">Contoh dari kelas sungguhan</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1IgaGbg64ClvTs1DgnOXMhp_IPFtgCGfM/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">Dalam video ini, kamu akan melihat bagaimana tutor menjelaskan tugasnya langkah demi langkah, dengan instruksi yang singkat dan sederhana.</div></div>
  `},
  {t:'🪜 Scaffolding: dukungan yang dikurangi secara bertahap', html:`
   <div class="card"><p><strong>Scaffolding</strong> berarti memberikan lebih banyak dukungan di awal sebuah konsep baru — template, langkah-langkah terpandu, bekerja bersama mereka — lalu dengan sengaja mengurangi dukungan itu seiring mereka semakin nyaman, sampai mereka bisa melakukannya sendiri.</p></div>
   ${co('co-idea','💡',`<p>Kesalahan yang perlu dihindari adalah kebalikannya: dukungan penuh selamanya (mereka tidak pernah membangun kemandirian) atau tanpa dukungan sama sekali sejak awal (mereka menemui error yang belum bisa mereka selesaikan, dan pelajaran mulai terasa kacau).</p>`)}
  `}
 ],
 ix:{
  title:'Menggunakan Panduan dan Menjelaskan dengan Baik — cek modul',
  instr:'70% untuk membuka modul berikutnya.',
  items:[
   {type:'choice', prompt:'Apa yang perlu kamu perhatikan pertama kali saat membuka panduan pelajaran baru?', opts:['Hanya langkah-langkah persisnya, secara berurutan','PR untuk pertemuan berikutnya','Tujuan dan hasil yang diharapkan'], correct:2, fb:'Tujuan memberi tahumu untuk apa sebenarnya pelajaran itu — langkah-langkahnya hanyalah salah satu cara untuk mencapainya.'},
   {type:'choice', prompt:'Kapan sebaiknya kamu mempelajari dan melatih sebuah pelajaran?', opts:['Sehari sebelumnya, bukan sejam sebelumnya','Tepat sebelum kelas, supaya masih segar','Hanya jika itu topik yang belum pernah kamu ajarkan'], correct:0, fb:'Jeda satu hari penuh memberimu waktu untuk benar-benar memperbaiki apa pun yang kamu temukan.'},
   {type:'choice', prompt:'Apa arti “modelling” dalam sebuah pelajaran?', opts:['Menunjukkan contoh yang sudah jadi, tanpa menjelaskan cara membuatnya','Memperagakan tekniknya sendiri, sambil mengucapkan jalan pikiranmu, sebelum siswa mencobanya','Membiarkan siswa mencoba dulu, lalu mengoreksinya'], correct:1, fb:'Modelling berarti menunjukkannya terlebih dahulu — termasuk cara berpikirmu — sebelum mereka mencobanya.'},
   {type:'sort', prompt:'Apakah scaffolding ini dilakukan dengan benar?', card:'Minggu 1: kamu memberi siswa template dan langkah-langkah terpandu. Minggu 3: kamu hanya memberi tahu tujuannya dan membiarkan siswa mengerjakannya sendiri.', zones:[{label:'✅ Ya — itulah scaffolding', fb:'Benar — dukungan dimulai dengan banyak dan dikurangi dengan sengaja seiring siswa menjadi lebih mandiri.'},{label:'❌ Tidak — dukungannya harus tetap sama', fb:'Belum tepat — memberi dukungan penuh selamanya menghambat siswa membangun kemandirian. Mengurangi secara bertahap justru intinya.'}], correctZone:0}
  ]
 }
},
{id:'contenterrors', numLabel:'Modul 2', emoji:'🐞', color:'var(--coral)',
 title:'Kesalahan Materi dan Masalah Teknis',
 desc:'Apa yang harus dilakukan saat materinya sendiri salah atau teknologinya bermasalah: cara menjaga kelas tetap tenang, melaporkannya dengan benar di BO, dan menangani masalah tanpa mengabaikan anggota grup lainnya.',
 obj:'Menangani kesalahan materi atau terjemahan yang sebenarnya tanpa membuat pelajaran berantakan, tahu persis cara melaporkannya di BO, dan menerapkan logika perbaiki cepat / komunikasikan / dokumentasikan / eskalasikan untuk masalah teknis.',
 sections:[
  {t:'🐞 Terkadang materinya yang bermasalah', html:`
   <div class="card"><p>Terkadang pelajaran menjadi kacau bukan karena siswanya, tapi karena ada kesalahan yang sebenarnya di materi atau terjemahannya — potongan kode yang rusak, instruksi yang tidak sesuai dengan alatnya, istilah yang salah terjemah. Berikut situasi-situasi yang paling umum, dan cara kamu bisa menanggapinya:</p></div>
   ${iconGrid([
     {ic:'🐛', html:`<strong>Seorang siswa menyadari ada yang salah terjemah atau salah ketik.</strong> Langkahnya: sebutkan dengan lugas, dan jadikan sesuatu yang diselesaikan bersama, bukan sesuatu yang salah. Contoh: <em>“Jeli banget — sepertinya baris ini ada salah ketiknya, yuk kita cari tahu bareng seharusnya tulisannya apa.”</em>`},
     {ic:'💻', html:`<strong>Seorang siswa menyadari kodenya tidak berjalan karena ada salah tulis/salah ketik.</strong> Contoh: <em>“Keren, kamu menemukan kesalahan tersembunyinya! Saya memang ingin lihat apakah ada yang menyadarinya.”</em>`},
     {ic:'🖼️', html:`<strong>Beberapa gambar tidak muncul atau tidak mau termuat.</strong> Contoh: <em>“Sepertinya ada gangguan di platform, tidak perlu khawatir — saya punya slide-nya, jadi kamu tetap bisa melihatnya di layar saya.”</em> Atau: <em>“Tidak apa-apa, hal seperti ini memang biasa terjadi, dan nanti sebagai programmer kalian akan sering mengalaminya. Untuk sekarang, lihat layar saya dulu, ya.”</em>`}
   ])}
  `},
  {t:'Menanggapi kesalahan dengan tenang', html:`
   <div class="card"><p>Kesalahan materi adalah momen kecil yang bisa berakhir dengan dua cara: gangguan sesaat yang hampir tidak disadari kelas, atau sesuatu yang menggoyahkan rasa percaya diri siswa. Yang menentukan bukan kesalahannya — tapi bagaimana kamu bereaksi dalam beberapa detik pertama. Menyampaikannya secara terbuka, tanpa rasa malu atau menyalahkan, menunjukkan kepada siswa bahwa kesalahan adalah hal yang wajar dalam belajar coding, sekaligus mencontohkan cara yang kamu ingin mereka lakukan saat menghadapi bug sendiri: sadari, tetap penasaran, perbaiki, lanjutkan.</p></div>
   ${co('co-ok','✅',`<p><strong>Katakan:</strong> <em>“Jeli banget, itu kesalahan di materinya, bukan kamu — yuk kita cari jalan keluarnya bareng.”</em> Alihkan perhatian untuk mencari solusi sebagai tim, dan terus lanjutkan.</p>`)}
   ${co('co-danger','⛔',`<p><strong>Hindari:</strong> membesar-besarkan kesalahannya, menyalahkan platform secara terang-terangan sehingga siswa kurang percaya pada kursusnya, atau menghabiskan terlalu banyak waktu untuk membahasnya sampai sisa pelajaran terganggu.</p>`)}
  `},
  {t:'🖥️ Menemukan materi — dan melaporkan kesalahan — di BO', html:`
   <div class="card"><p>Panduan dan presentasi setiap pelajaran ada di dalam BackOffice (BO), terlampir di data kursus yang sedang kamu ajarkan. Di tempat yang sama, kamu juga bisa melaporkan kesalahan materi lewat ikon 🐞 di baris pelajaran. Simulasi di bawah ini akan memandumu langkah demi langkah.</p></div>
   ${co('co-danger','🚨',`<p><strong>Selalu pastikan ID kursus yang kamu buka sama dengan kursus yang diikuti siswamu.</strong> Kursus-kursus yang mirip ada berdampingan di BO — mengajar dari kursus yang salah bisa membuat pelajaran kacau dalam hitungan detik.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Materi kursus &amp; kesalahan materi</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Materi kursus dan kesalahan materi" loading="lazy"></iframe></div></div>
   ${co('co-star','⭐',`<p>Melaporkan kesalahan tidak hanya memperbaiki pelajaranmu — tapi juga memperbaikinya untuk setiap grup yang menggunakan materi yang sama setelah grupmu.</p>`)}
  `},
  {t:'🔧 Saat masalahnya teknis: protokolnya', html:`
   <div class="card"><p>Terkadang rangkaian kesalahan dalam pelajaran bersifat teknis: layar yang membeku, alat yang tidak mau termuat, koneksi yang terus terputus. Masalah teknis itu wajar dan bisa terjadi pada tutor maupun siswa — yang penting adalah masalahnya tidak semakin parah.</p></div>
   ${co('co-idea','💡',`<p><strong>Aturan emasnya.</strong> Jika kamu tidak bisa memperbaikinya sendiri dalam <strong>10 menit</strong>, berhentilah mencoba diam-diam. <strong>Komunikasikan → dokumentasikan → eskalasikan.</strong> Orang tua yang tahu apa yang terjadi akan percaya padamu. Orang tua yang tidak tahu akan membatalkan.</p>`)}
   ${stepFlow([
     {ic:'⏱️', label:'Pertama kali dalam sebuah pelajaran: coba perbaiki maksimal 10 menit'},
     {ic:'👩‍💼', label:'Masih bermasalah? Beri tahu Team Leader-mu di hari yang sama — mereka yang memutuskan opsi pengganti'},
     {ic:'💬', label:'Kirim pesan ke orang tua dalam 30 menit, dengan hangat: kamu sudah melaporkannya ke timmu'},
     {ic:'🎫', label:'Pelajaran kedua berturut-turut? Buat tiket Client Service di hari yang sama'},
     {ic:'✅', label:'Setelah selesai: beri tahu orang tua dan tuntaskan komunikasinya'}
   ])}
  `},
  {t:'🧑‍💻 Mencegah masalah teknis dari sisimu', html:`
   <div class="card"><p>Masalah teknis pada tutor bisa menghambat pelajaran sama seperti masalah teknis pada siswa. Sebagian besar bisa ditemukan bahkan sebelum pelajaran dimulai.</p></div>
   ${iconGrid([
    {ic:'🔌', html:`<strong>Tes 30 menit sebelumnya.</strong> Cek koneksi internet, kamera, dan mikrofonmu sebelum setiap pelajaran. Jika kamu menemukan masalah, beri tahu Team Leader-mu.`},
    {ic:'📷', html:`<strong>Cari alternatif.</strong> Jika mematikan kamera membuat koneksimu lebih baik, lakukan itu.`},
    {ic:'🎙️', html:`<strong>Siapkan mikrofon cadangan.</strong> Jika headset-mu tidak berfungsi, coba opsi lain, misalnya audio bawaan komputermu, dan selalu aktifkan peredam suara latar di Classroom.`},
    {ic:'📶', html:`<strong>Cek driver-mu, dan apakah ada VPN yang aktif</strong> — VPN cenderung memperlambat koneksimu.`},
    {ic:'🧊', html:`<strong>Menggunakan alat yang berat seperti Blender?</strong> Kursusnya menyertakan panduan di beberapa pelajaran pertama tentang cara mengaturnya agar performanya lebih baik.`},
    {ic:'💻', html:`<strong>Kosongkan RAM sebelum kelas.</strong> Google Chrome memberikan pengalaman terbaik dengan Classroom, tapi juga cenderung memakai banyak RAM — tutup tab dan program yang sedang tidak kamu perlukan.`},
    {ic:'👂', html:`<strong>Tanyakan langsung ke siswa.</strong> Sebelum pelajaran dimulai, tanyakan kepada siswamu apakah mereka bisa melihat dan mendengarmu dengan baik — dengan begitu kamu bisa menyadari masalah teknis sejak awal.`}
   ])}
  `},
  {t:'🎓 Membantu siswa yang mengalami masalah teknis', html:`
   <div class="card"><p>Sering kali, masalah teknis yang dialami siswa di kelas terjadi karena mereka menggunakan browser selain Google Chrome atau perangkat yang tidak sesuai untuk kursusnya, misalnya mencoba mengikuti kelas lewat tablet, ponsel, atau iPad. Karena itu, penting bagimu untuk mengetahui persyaratan minimumnya supaya bisa membantu mereka.</p></div>
   ${doavoid(
    ["Google Chrome versi terbaru — satu-satunya browser yang sepenuhnya kompatibel",
     "RAM minimal 4 GB (8 GB untuk Blender)",
     "Koneksi yang stabil, minimal 10 Mbps — koneksi kabel lebih baik daripada Wi-Fi jika memungkinkan",
     "Ruang penyimpanan kosong minimal 5 GB — Blender membutuhkan jauh lebih banyak"],
    ["Safari — ada bug yang sudah diketahui dengan platform Kodland sejak pembaruan terakhir: tombol yang tidak merespons, layar yang tidak termuat, error saat masuk",
     "Tablet / iPad untuk kursus seperti Roblox Studio — kursus ini membutuhkan komputer sungguhan",
     "Menganggap masalah di Mac sebagai hilangnya minat sebelum memeriksa apakah penyebabnya hanya Safari"]
   )}
   ${co('co-idea','🍎',`<p>Perhatikan khususnya kombinasi Mac + Safari. Jika siswa pengguna Mac tidak bisa menekan tombol atau layarnya tidak termuat, solusinya hampir selalu: buka kelasnya di Google Chrome. Arahkan keluarga ke google.com/chrome.</p>`)}
  `},
  {t:'⚖️ Tanpa mengabaikan anggota kelas lainnya', html:`
   <div class="card"><p>Masalahnya bukan hanya gangguan teknisnya — tapi juga saat tutor terlalu fokus pada masalah satu siswa sampai siswa lainnya kehilangan lima atau sepuluh menit pelajaran.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Tetapkan batas waktu.</strong> Beri siswa yang bermasalah satu percobaan perbaikan cepat (ganti ke Chrome, muat ulang, mulai ulang), lalu lanjutkan pelajaran grup dan tindak lanjuti siswa itu di antara aktivitas atau setelah kelas.`},
     {ic:'👥', html:`<strong>Beri grup sesuatu untuk dikerjakan</strong> begitu kamu mulai menangani masalahnya — jangan biarkan mereka hanya menatap layar yang diam.`},
     {ic:'🫂', html:`<strong>Tetap tenang, dan terdengar tenang.</strong> Kalimat tenang seperti “ini kadang terjadi, yuk kita cari jalan keluarnya” menjaga suasana kelas tetap stabil selagi kamu memperbaikinya.`},
     {ic:'📝', html:`<strong>Tinggalkan jejak.</strong> Jika sebuah perangkat terus menyebabkan masalah yang sama, beri tahu keluarga, tinggalkan komentar di BO, dan libatkan Team Leader-mu — alih-alih menyelesaikannya lagi di setiap pelajaran.`}
   ])}
  `}
 ],
 ix:{
  title:'Kesalahan Materi & Masalah Teknis — cek modul',
  instr:'Nilai 70% untuk membuka modul berikutnya.',
  items:[
   {type:'choice', prompt:'Seorang siswa menemukan bug yang sebenarnya di contoh kode pelajaran. Apa langkah pertamamu di kelas?', opts:['Melewatkan aktivitasnya tanpa penjelasan, untuk menghemat waktu','Menyebutkannya dengan tenang dan menjadikannya momen “yuk kita selesaikan bareng”','Memberi tahu grup bahwa platformnya memang selalu penuh kesalahan'], correct:1, fb:'Tenang dan kolaboratif mencegah pelajaran terasa kacau — sekaligus mencontohkan cara menghadapi bug.'},
   {type:'sort', prompt:'Kesalahan materi atau masalah teknis?', card:'Satu baris di kode awal pelajaran ada salah ketik dan memunculkan error bahkan sebelum ada yang mengubah apa pun.', zones:[{label:'🔧 Masalah teknis → ikuti protokolnya', fb:'Belum tepat — kodenya sendiri yang salah, untuk semua orang. Itu kesalahan materi: cari jalan keluarnya dengan tenang dan laporkan lewat ikon 🐞 di BO.'},{label:'🐞 Kesalahan materi → laporkan di BO', fb:'Benar — materinya sendiri yang salah. Cari jalan keluarnya dengan tenang, lalu laporkan lewat ikon 🐞 supaya diperbaiki untuk semua grup.'}], correctZone:1},
   {type:'sort', prompt:'Kesalahan materi atau masalah teknis?', card:'Layar seorang siswa terus membeku dan audionya terus terputus di tengah pelajaran.', zones:[{label:'🔧 Masalah teknis → ikuti protokolnya', fb:'Benar — coba perbaikan cepat, jaga grup tetap bekerja, lalu komunikasikan, dokumentasikan, dan eskalasikan jika terulang.'},{label:'🐞 Kesalahan materi → laporkan di BO', fb:'Belum tepat — tidak ada yang salah dengan materinya. Layar yang membeku dan audio yang terputus adalah masalah teknis: ikuti protokolnya.'}], correctZone:0},
   {type:'choice', prompt:'Di mana kamu melaporkan kesalahan materi di BO?', opts:['Lewat pesan kepada keluarga siswa','Di tab Periksa milik grup','Lewat ikon 🐞 di baris pelajaran, di dalam data kursus'], correct:2, fb:'Ikon 🐞 di setiap baris pelajaran membuka survei kualitas materi — itulah yang membuat materinya diperbaiki.'},
   {type:'choice', prompt:'Masalah teknis yang sama terjadi untuk kedua kalinya berturut-turut. Apa yang berubah?', opts:['Buat tiket Client Service di hari yang sama','Tidak ada — terus coba memperbaikinya sendiri','Tunggu satu pelajaran lagi untuk memastikan itu sebuah pola'], correct:0, fb:'Masalah yang berulang berarti sudah waktunya mengeskalasikan ke Client Service — dan memberi tahu orang tua bahwa akan ada yang menindaklanjuti.'}
  ]
 }
},
{id:'operations', numLabel:'Modul 3', emoji:'🏢', color:'var(--coral)',
 title:'Masalah Perusahaan dan Kelas: Laporkan dengan Cara yang Tepat',
 desc:'Apa yang harus dilakukan ketika keluarga kesal karena penagihan, saldo, grup, tanggal mulai, dukungan, atau janji tim penjualan — atau karena kelas itu sendiri — dan cara menghubungi Client Service dengan laporan di BO.',
 obj:'Membedakan mana yang harus Anda perbaiki dan mana yang harus Anda laporkan, menanggapi keluhan operasional tanpa menjelaskan, membela diri, atau berjanji, memperbaiki masalah kelas yang menjadi tanggung jawab Anda, dan melaporkan setiap kasus ke Client Service di BO pada hari yang sama.',
 sections:[
  {t:'🧭 Anda perbaiki, atau Anda laporkan?', html:`
   <div class="card"><p>Keluarga yang sangat negatif jarang mengeluh tentang satu hal saja. Sering kali kemarahan itu ditujukan pada perusahaan — sebuah tagihan, saldo, atau grup yang berubah — dan Anda hanyalah orang yang mereka temui setiap minggu. Sebelum menjawab, tanyakan pada diri Anda jenis masalah apa ini:</p></div>
   ${patternCards([
     {ic:'🏢', title:'Perusahaan dan operasional', desc:'Penagihan, cicilan, saldo, grup, tanggal mulai, dukungan, apa yang dijanjikan tim penjualan, lisensi.', note:'<strong>Bukan tugas Anda untuk menyelesaikan atau menjelaskannya.</strong> Akui, laporkan ke Client Service di BO, dan beri tahu Team Leader Anda.'},
     {ic:'🧑‍🏫', title:'Kelas atau tutor', desc:'Tempo, penjelasan, grup yang kacau, kelas yang terlewat, koneksi, kebutuhan khusus, pergantian tutor.', note:'<strong>Sebagian menjadi tanggung jawab Anda.</strong> Perbaiki yang bisa Anda perbaiki di kelas berikutnya, dan laporkan.'},
     {ic:'🔧', title:'Teknis', desc:'Classroom, platform, alat kursus, perangkat siswa.', note:'<strong>Ikuti protokol</strong> di Modul 2: 10 menit, lalu komunikasikan, dokumentasikan, dan eskalasikan.'}
   ],3)}
  `},
  {t:'🏢 Masalah operasional dan perusahaan — apa yang Anda lakukan, dan apa yang Anda katakan', html:`
   <div class="card"><p>Ketuk setiap masalah. Polanya selalu sama: <strong>akui, jangan menjelaskan, jangan berjanji, laporkan di hari yang sama.</strong> Anda tidak memiliki gambaran lengkap tentang pembayaran, kontrak, atau percakapan penjualan sebuah keluarga — dan tebakan yang bermaksud baik bisa berubah menjadi janji yang tidak dapat dipenuhi perusahaan.</p></div>
   ${symCards([
     {ic:'💳', title:'Penagihan dan cicilan',
      see:`Tagihan yang tidak terduga, cicilan yang tidak diketahui keluarga, pembayaran yang menurut mereka sudah dilakukan.`,
      do:`Catat persis apa yang dikatakan keluarga, dan laporkan ke Client Service di BO pada hari yang sama.`,
      say:`<em>«Saya mengerti hal ini mengkhawatirkan. Saya sudah meneruskannya ke Layanan Pelanggan, yang akan membantu Anda.»</em>`,
      rep:`Client Service (laporan BO) + Team Leader + komentar BO.`,
      avoid:`Menjelaskan cara kerja pembayaran, atau mengatakan apakah sebuah tagihan sudah benar.`},
     {ic:'🔄', title:'Perhitungan ulang setelah beralih ke Premium atau format lain',
      see:`Keluarga beralih ke Premium, kelas individual, atau format lain dan tidak puas dengan jumlah kelas yang mereka miliki sekarang.`,
      do:`Jangan mengomentari angkanya. Laporkan ke Client Service di BO, dengan kata-kata keluarga itu sendiri.`,
      say:`<em>«Layanan Pelanggan akan membantu Anda.»</em>`,
      rep:`Client Service (laporan BO) + Team Leader + komentar BO.`,
      avoid:`Menghitung sendiri jumlah kelas, atau menyetujui bahwa hal itu tidak adil.`},
     {ic:'🎟️', title:'Saldo yang dipersoalkan',
      see:`«Seharusnya kami punya lebih banyak kelas.» «Kelas yang tidak berlangsung dipotong dari saldo.»`,
      do:`Periksa kehadiran yang Anda catat di BO, lalu teruskan ke Team Leader dan Client Service pada hari yang sama — Operations yang meninjau saldo dan pemotongan.`,
      say:`<em>«Terima kasih sudah memberi tahu saya. Saya sudah membagikannya kepada tim saya agar diperiksa.»</em>`,
      rep:`Team Leader + Client Service + komentar BO (Operations: @Diah Sukmawati).`,
      avoid:`Menjanjikan pengembalian kelas, atau mengatakan saldo itu benar atau salah.`},
     {ic:'👥', title:'Perubahan grup atau grup yang dibubarkan',
      see:`Grup dipindahkan, digabung, atau ditutup, dan anak kehilangan teman sekelas, tutor, atau jadwal yang sudah dikenalnya.`,
      do:`Buat kelas pertama dalam situasi baru terasa hangat. Laporkan kekhawatiran keluarga ke Client Service di BO.`,
      say:`<em>«Saya mengerti perubahan ini tidak mudah. Saya sudah membagikannya kepada tim saya agar mereka menghubungi Anda.»</em>`,
      rep:`Client Service (laporan BO) + Team Leader + komentar BO.`,
      avoid:`Menjelaskan mengapa grup berubah, atau menjanjikan grup lama akan kembali.`},
     {ic:'⏳', title:'Keterlambatan mulai',
      see:`Keluarga sudah menunggu pembukaan grup, atau tanggal mulai berubah.`,
      do:`Jangan memberikan tanggal yang tidak Anda miliki. Laporkan ke Client Service di BO.`,
      say:`<em>«Saya mengerti menunggu itu membuat frustrasi. Layanan Pelanggan akan membantu Anda soal tanggal mulai.»</em>`,
      rep:`Client Service (laporan BO) + Team Leader + komentar BO.`,
      avoid:`Menebak tanggal mulai, atau menyalahkan tim lain.`},
     {ic:'📞', title:'«Dukungan tidak menjawab»',
      see:`Keluarga mengatakan tidak ada yang membalas pesan atau panggilan mereka.`,
      do:`Akui — rasa frustrasi itu nyata. Laporkan di hari yang sama, agar Client Service tahu bahwa keluarga sedang menunggu.`,
      say:`<em>«Mohon maaf Anda belum mendapat jawaban. Saya sudah melaporkannya hari ini agar Layanan Pelanggan menghubungi Anda kembali.»</em>`,
      rep:`Client Service (laporan BO) + Team Leader + komentar BO.`,
      avoid:`Mengatakan «mereka tidak pernah menjawab» atau mengkritik tim — itu justru menegaskan ketakutan terbesar keluarga.`},
     {ic:'🗣️', title:'«Tim penjualan menjanjikan hal lain kepada kami»',
      see:`Grup yang lebih kecil, kursus yang berbeda, sebuah level, harga, atau hasil yang «dijanjikan kepada kami».`,
      do:`Tulis kata-kata keluarga secara persis dan laporkan. Di kelas, fokuslah pada apa yang bisa Anda lakukan untuk anak.`,
      say:`<em>«Terima kasih sudah memberi tahu saya. Saya sudah membagikannya kepada tim saya, dan Layanan Pelanggan akan menghubungi Anda mengenai hal ini.»</em>`,
      rep:`Client Service (laporan BO) + Team Leader + komentar BO.`,
      avoid:`Membenarkan atau menyangkal apa yang dikatakan tim penjualan, atau membuat janji baru untuk memperbaikinya.`},
     {ic:'🧱', title:'Lisensi Minecraft',
      see:`Pertanyaan atau keluhan tentang akun atau lisensi Minecraft, atau mengapa kursus berjalan seperti itu.`,
      do:`Bantu dengan hal yang ada di dalam kelas (akun yang dibutuhkan kursus, pengaturannya). Segala hal tentang lisensi itu sendiri diteruskan ke Client Service.`,
      say:`<em>«Layanan Pelanggan akan membantu Anda terkait pertanyaan lisensi.»</em>`,
      rep:`Client Service (laporan BO) + Team Leader + komentar BO.`,
      avoid:`Mengomentari alasan internal, lisensi, atau perubahan pada isi kursus.`}
   ])}
   ${co('co-ok','✅',`<p><strong>Mengakui selalu diperbolehkan.</strong> Balasan singkat yang hangat — Anda sudah melihatnya, memahaminya, dan meneruskannya — tidak memerlukan persetujuan siapa pun. Penjelasan, pilihan, dan segala hal tentang uang menunggu Client Service.</p>`)}
  `},
  {t:'🧑‍🏫 Ketika masalahnya ada di kelas', html:`
   <div class="card"><p>Beberapa keluhan keras ditujukan pada kelas itu sendiri. Ini sebagian menjadi tanggung jawab Anda: perbaiki yang bisa Anda perbaiki mulai kelas berikutnya — dan tetap laporkan, agar Team Leader dan Client Service tidak terkejut.</p></div>
   <div class="tbl-wrap"><table>
    <tr><th>Apa yang dikatakan keluarga</th><th>Apa yang Anda lakukan</th><th>Apa yang Anda laporkan</th></tr>
    <tr><td>«Metodenya tidak cocok untuk usianya»</td><td>Langkah lebih pendek, kata-kata yang mereka kenal, lebih banyak peragaan — sesuaikan dengan usia grup</td><td>Komentar BO + Team Leader jika selisih usia dalam grup besar</td></tr>
    <tr><td>«Tutor melanjutkan tanpa menjelaskan»</td><td>Satu instruksi dalam satu waktu, dan periksa pemahaman sebelum melanjutkan</td><td>Komentar BO tentang apa yang Anda ubah</td></tr>
    <tr><td>«Grupnya kacau»</td><td>Aturan kelas sejak kelas 1, giliran berbicara, pengelolaan yang tenang dan tegas</td><td>Komentar BO + keluarga diberi tahu tentang insiden</td></tr>
    <tr><td>«Tutor tidak hadir» / «kelas ditunda»</td><td>Jangan pernah membatalkan atau memindahkan kelas sendiri; beri tahu Team Leader begitu Anda tahu</td><td>Team Leader di hari yang sama — merekalah yang memutuskan kelas pengganti</td></tr>
    <tr><td>«Koneksinya terus bermasalah»</td><td>Uji pengaturan Anda sebelum setiap kelas; ikuti protokol teknis</td><td>Team Leader Anda (dia yang mengeskalasikannya ke dukungan teknis) + komentar BO</td></tr>
    <tr><td>«Tutor tidak siap menghadapi kebutuhan khusus anak saya»</td><td>Rutinitas, tempo lebih lambat, langkah lebih kecil, cara lain untuk menjawab; tanyakan kepada keluarga apa yang membantu</td><td>Komentar BO + Team Leader — Anda merekomendasikan, mereka memutuskan format</td></tr>
    <tr><td>«Terlalu sering berganti tutor»</td><td>Jika Anda mengambil alih, baca komentar BO, perkenalkan diri, dan pertahankan rutinitas grup</td><td>Team Leader, agar keluarga mengetahui perubahan sebelumnya</td></tr>
   </table></div>
   ${co('co-idea','📚',`<p><strong>Ingin mendalami lebih jauh?</strong> Tempo, pemeriksaan pemahaman, dan ketepatan waktu dibahas dalam mini-pelatihan <em>Lesson Quality</em>; grup yang kacau di <em>Lesson Organisation</em>; kebutuhan khusus di <em>No Interest</em> dan <em>Online Format</em>; masalah koneksi di <em>Technical Issues</em>.</p>`)}
  `},
  {t:'📮 Cara menghubungi Client Service — dan apa yang ditulis', html:`
   <div class="card"><p>Anda menghubungi Client Service melalui BO: laporan di <strong>Tutors’ Evaluations</strong> milik siswa langsung sampai kepada mereka. Lakukan <strong>di hari yang sama</strong> — keluarga yang merasa diabaikan cepat meningkat emosinya.</p></div>
   ${timeline([
     {ic:'📝', label:'Laporkan di BO', items:[
       'Profil siswa → <strong>Progress</strong> → <strong>Tutors’ Evaluations</strong> → <strong>Evaluate The Student</strong>.',
       '<strong>Problem Kind:</strong> yang paling mendekati — misalnya <em>«Student wants to drop the studies/asks for refund»</em>, <em>«Client wants to change the schedule»</em>, atau <em>«Other»</em> untuk penagihan, saldo, grup, atau janji tim penjualan.',
       'Pilih grup, tulis komentar berisi fakta dan kata-kata keluarga itu sendiri, lalu konfirmasi.'
     ]},
     {ic:'👩‍💼', label:'Beri tahu Team Leader Anda', items:[
       'Di hari yang sama, dengan tautan siswa di BO. Sepakati dengannya apa yang akan Anda sampaikan selanjutnya kepada keluarga, jika ada.'
     ]},
     {ic:'🧭', label:'Kanal lain bila diperlukan', items:[
       '<strong>Masalah teknis yang tidak dapat Anda selesaikan:</strong> kirim pesan langsung ke <em>Team Leader</em> Anda — dia yang mengeskalasikannya ke <em>dukungan teknis</em>.',
       '<strong>Kredit kelas, pemotongan, jadwal yang salah:</strong> Team Leader Anda + Operations (<strong>@Diah Sukmawati</strong>).'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Seperti apa laporan yang berguna — salin dan lengkapi</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Tanggal:</strong> [tanggal] · <strong>Grup:</strong> [tautan BO] · <strong>Siswa:</strong> [tautan BO]<br>
   <strong>Yang disampaikan keluarga:</strong> [mis. cicilan yang tidak mereka duga; grup berubah; «tim penjualan menjanjikan grup yang lebih kecil»]<br>
   <strong>Kata-kata keluarga:</strong> [persis]<br>
   <strong>Yang saya katakan:</strong> [mis. saya mengakui dan mengatakan bahwa Layanan Pelanggan akan membantu — tanpa penjelasan atau janji]<br>
   <strong>Konteks kelas:</strong> [kehadiran, perkembangan siswa, hal lain yang relevan]<br>
   <strong>Yang saya sarankan untuk diperiksa:</strong> [opsional — rekomendasi Anda, keputusan mereka]</p></div>
   <div class="card"><p><strong>Latih sekarang.</strong> Seorang orang tua baru saja menulis: <em>«Anda menagih cicilan yang tidak kami setujui, dan grup berubah tanpa ada yang memberi tahu kami. Kami ingin uang kami kembali.»</em> Laporkan di replika BO ini. Pada <strong>langkah 4</strong>, pilih Problem Kind <strong>«Student wants to drop the studies/asks for refund»</strong> dan tulis fakta serta kata-kata keluarga itu sendiri.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Laporkan kasus ke Client Service</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Laporkan kasus ke Client Service" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Mengapa ini berhasil:</strong> Client Service hanya dapat memperbaiki apa yang mereka ketahui. Laporan yang lengkap dan netral dengan kata-kata keluarga itu sendiri menghemat satu panggilan telepon bagi mereka — dan membuat keluarga mendapat jawaban lebih cepat.</p>`)}
  `}
 ],
 ix:{
  title:'Perbaiki atau laporkan — evaluasi modul',
  instr:'Kelompokkan setiap kasus dan pilih langkah terbaik. Nilai 70% untuk membuka modul berikutnya.',
  items:[
   {type:'sort', prompt:'Jenis masalah apa ini?', card:`«Kami ditagih cicilan yang tidak pernah kami setujui.»`, zones:[{label:'🏢 Perusahaan dan operasional', fb:'Benar — akui, jangan jelaskan pembayarannya, dan laporkan ke Client Service di BO pada hari yang sama.'},{label:'🧑‍🏫 Kelas atau tutor', fb:'Belum tepat — tidak ada yang berkaitan dengan kelas di sini. Penagihan diteruskan ke Client Service.'},{label:'🔧 Teknis', fb:'Belum tepat — ini pertanyaan penagihan, bukan kegagalan platform.'}], correctZone:0},
   {type:'sort', prompt:'Jenis masalah apa ini?', card:`«Tutornya terlalu cepat untuk anak saya yang berusia 7 tahun dan tidak memeriksa apakah dia paham.»`, zones:[{label:'🏢 Perusahaan dan operasional', fb:'Belum tepat — ini tentang cara kelas diajarkan. Sebagian menjadi tanggung jawab Anda untuk diperbaiki.'},{label:'🧑‍🏫 Kelas atau tutor', fb:'Benar — perlambat langkah-langkahnya, periksa pemahaman mulai kelas berikutnya, dan tinggalkan komentar di BO tentang apa yang Anda ubah.'},{label:'🔧 Teknis', fb:'Belum tepat — tidak ada yang gagal secara teknis; ini soal tempo kelas.'}], correctZone:1},
   {type:'choice', prompt:`Seorang orang tua berkata: «Setelah beralih ke Premium, kami hanya punya 19 kelas tersisa — ini penipuan.» Apa jawaban Anda?`, opts:[`«Begitulah cara kerja perhitungan ulang — kelas Premium lebih mahal.»`,`«Saya mengerti ini membuat frustrasi. Saya sudah meneruskannya ke Layanan Pelanggan, yang akan membantu Anda.»`,`«Anda benar, itu terdengar tidak adil. Saya akan meminta mereka mengembalikan kelas Anda.»`], correct:1, fb:`Akui tanpa menjelaskan, menyetujui, atau berjanji. Perhitungan ulang adalah hal yang dijelaskan oleh Client Service — lalu laporkan di BO dan beri tahu Team Leader Anda.`},
   {type:'choice', prompt:`Laporan BO mana yang paling berguna untuk keluarga yang kesal karena perubahan grup?`, opts:[`«Orang tua marah lagi. Masalah grup.»`,`«12/11, grup [tautan BO]. Sang ibu menulis: ‘Mereka memindahkan anak saya ke grup lain tanpa memberi tahu kami, dan sekarang dia tidak mau datang.’ Saya mengakui hal itu dan mengatakan bahwa Layanan Pelanggan akan menghubunginya. Dia hadir di semua 6 kelas dan berkembang dengan baik.»`,`«Keluarga ini mengeluh tentang segalanya, tolong tangani.»`], correct:1, fb:`Fakta, kata-kata keluarga itu sendiri, apa yang Anda katakan, dan konteks kelas. Netral dan lengkap — agar Client Service dapat bertindak tanpa menelepon Anda terlebih dahulu.`},
   {type:'sort', prompt:'Boleh, atau sebaiknya dihindari?', card:`Seorang orang tua bertanya kapan grup baru akan dimulai. Anda menjawab: «Mungkin dalam dua minggu.»`, zones:[{label:'✅ Boleh', fb:'Belum tepat — tanggal tebakan menjadi janji. Jika tidak terjadi, keluarga kehilangan kepercayaan lagi.'},{label:'🚫 Hindari', fb:'Benar — jangan memberikan tanggal yang tidak Anda miliki. Layanan Pelanggan akan membantu soal tanggal mulai; laporkan di BO.'}], correctZone:1}
  ]
 }
},
{id:'angry', numLabel:'Modul 4', emoji:'🌋', color:'var(--coral)',
 title:'Orang Tua yang Sangat Marah atau Mengancam',
 desc:'Apa yang harus dilakukan ketika orang tua sangat marah, mengancam, atau menghina — terkadang tanpa penyebab yang jelas: tetap tenang, jaga batasan dan rasa hormat, dokumentasikan, dan arahkan mereka ke Client Service.',
 obj:'Tetap terkendali menghadapi orang tua yang sangat marah, mengakui tanpa berdebat atau berjanji, menetapkan batasan dengan tenang ketika rasa hormat hilang, mengarahkan keluarga ke Client Service, dan mendokumentasikan kasus di BO pada hari yang sama.',
 sections:[
  {t:'🌋 Ketika kemarahan lebih besar daripada masalahnya', html:`
   <div class="card"><p>Terkadang orang tua datang dengan marah dan Anda tidak dapat menemukan alasannya: kelas berjalan baik, tidak ada kejadian yang jelas. Kemarahan itu bisa berasal dari rangkaian panjang hal-hal yang tidak pernah Anda lihat — sebuah tagihan, telepon yang tidak dibalas, minggu yang buruk. Anda hanyalah orang yang bisa mereka jangkau.</p></div>
   ${iconGrid([
     {ic:'🚫', html:`<strong>Bukan tugas Anda memenangkan perdebatan</strong> — atau membuktikan bahwa keluarga itu salah.`},
     {ic:'🙅', html:`<strong>Bukan tugas Anda menyerap hinaan</strong> atau ancaman.`},
     {ic:'✅', html:`<strong>Tugas Anda adalah</strong> tetap tenang dan sopan, menjaga batasan, mendokumentasikan apa yang terjadi, dan meneruskannya ke Client Service.`}
   ])}
  `},
  {t:'🧘 Atur diri Anda terlebih dahulu', html:`
   <div class="card"><p>Kemarahan itu menular — begitu pula ketenangan. Sebelum menjawab, perhatikan kondisi Anda sendiri: itulah alat pertama yang Anda miliki.</p></div>
   ${iconGrid([
     {ic:'🌬️', html:`<strong>Bernapaslah sebelum menjawab.</strong> Jeda satu detik mencegah Anda membalas secara impulsif.`},
     {ic:'🔉', html:`<strong>Rendahkan suara dan bicaralah lebih pelan</strong> saat menelepon. Secara tertulis, buat kalimat singkat dan netral.`},
     {ic:'⏱️', html:`<strong>Pesan tertulis?</strong> Akui di hari yang sama — tetapi luangkan beberapa menit sebelum menulis, dan jangan pernah membalas dalam keadaan marah.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Anda tidak sendirian.</strong> Beri tahu Team Leader Anda sejak dini — Anda tidak harus menangani orang tua yang mengancam sendirian.`}
   ])}
  `},
  {t:'🪜 Apa yang harus dilakukan, langkah demi langkah', html:`
   ${stepper([
     {ic:'🤝', title:'Akui perasaannya', html:`<p>Tunjukkan bahwa Anda sudah mendengarkan, tanpa menyetujui tuduhannya.</p><p><em>«Saya melihat Anda sangat kesal, dan saya ingin memastikan hal ini sampai kepada orang yang tepat.»</em></p>`},
     {ic:'❓', title:'Jika penyebabnya tidak jelas, tanyakan satu kali', html:`<p>Satu pertanyaan terbuka — jangan menebak dan jangan menginterogasi.</p><p><em>«Bisakah Anda menceritakan apa yang terjadi, agar saya bisa menyampaikannya dengan akurat?»</em></p>`},
     {ic:'🧊', title:'Jangan berdebat, membela diri, atau berjanji', html:`<p>Jangan mengoreksi versi mereka, jangan menyalahkan tim lain atau platform, dan jangan menawarkan apa pun untuk menenangkan mereka.</p>`},
     {ic:'📞', title:'Arahkan mereka ke Client Service', html:`<p>Di situlah jawaban dan pilihan tersedia.</p><p><em>«Layanan Pelanggan akan membantu Anda — saya sudah meneruskan pesan Anda.»</em></p>`},
     {ic:'📝', title:'Dokumentasikan di hari yang sama', html:`<p>Laporkan di BO dengan kata-kata persis dari orang tua — termasuk ancaman apa pun — dan beri tahu Team Leader Anda di hari yang sama.</p>`}
   ])}
  `},
  {t:'🛑 Batasan dan rasa hormat', html:`
   <div class="card"><p>Rasa hormat berlaku dua arah. Anda tetap sopan apa pun yang terjadi — dan Anda dapat menetapkan batasan dengan tenang ketika percakapan tidak lagi saling menghormati.</p></div>
   ${co('co-ok','🗣️',`<p><strong>Batasan yang bisa Anda sampaikan:</strong> <em>«Saya ingin membantu Anda, dan saya akan senang melanjutkan ketika kita dapat berbicara dengan saling menghormati. Saya sudah meneruskan pesan Anda ke Layanan Pelanggan, yang akan menghubungi Anda.»</em> Dalam panggilan telepon, Anda dapat mengakhirinya dengan sopan setelah mengatakan ini.</p>`)}
   ${doavoid(
     ['Pertahankan nada yang tenang dan netral, bahkan ketika dihina','Abaikan isi ancaman (pengacara, ulasan, media sosial) — laporkan kata demi kata','Tetap perlakukan anak dengan hangat: anak tidak pernah bertanggung jawab atas kemarahan orang tuanya','Jika orang tua menyela kelas, singkat saja: <em>«Saya akan memastikan pesan Anda sampai ke tim kami setelah kelas»</em> — lalu lanjutkan untuk para siswa'],
     ['Membalas dengan kasar, sarkasme, atau hinaan','Berdebat di obrolan grup di depan keluarga lain','Menjanjikan pengembalian dana, kompensasi, atau perubahan untuk menenangkan mereka','Membicarakan konflik di depan para siswa']
   )}
   ${co('co-danger','🚨',`<p><strong>Ancaman, hinaan, atau pelecehan selalu dilaporkan</strong> — di BO, dengan kata-kata persis, dan kepada Team Leader Anda di hari yang sama. Anda tidak memutuskan sendiri apakah akan terus berbicara dengan keluarga itu.</p>`)}
  `},
  {t:'💬 Latih sekarang', html:`
   ${chatMock({
     name:'Orang tua', sub:'online', avatar:'😠', time:'21:15',
     msgs:[`Ini PENIPUAN. Tidak ada yang berjalan, tidak ada yang menjawab, dan anak saya tidak belajar apa-apa. Kalau besok saya tidak mendapatkan SEMUA uang saya kembali, saya akan pergi ke pengacara dan membicarakan kalian di mana-mana.`],
     title:'Bagaimana Anda menjawab?',
     text:'Sudah larut, pesannya agresif dan tidak ada penyebab yang jelas — kelas Anda berjalan baik. Ketuk setiap balasan untuk melihat apa yang terjadi.',
     opts:[
      {t:`«Kami bukan penipuan. Anak Anda hadir di semua kelas dan berkembang dengan baik — mohon periksa dulu sebelum menuduh kami.»`, ok:false, fb:`Membela diri mengubahnya menjadi perdebatan dan membuat orang tua semakin marah. Meskipun benar, bukan tugas Anda untuk membuktikan bahwa mereka salah.`},
      {t:`«Saya menyesal Anda merasa seperti ini, dan saya ingin memastikan pesan Anda sampai kepada orang yang tepat. Saya sudah meneruskannya ke Layanan Pelanggan, yang akan membantu Anda. Saya akan terus melakukan yang terbaik untuk [siswa] di kelas kami.»`, ok:true, fb:`Tenang, sopan, dan jelas: Anda mengakui perasaannya, tidak berdebat soal tuduhan, tidak menanggapi ancaman, dan mengarahkan ke Client Service. Lalu laporkan di BO dengan kata-kata persis dan beri tahu Team Leader Anda.`},
      {t:`«Mohon jangan lakukan itu! Saya akan memastikan Anda mendapatkan uang Anda kembali.»`, ok:false, fb:`Pengembalian dana bukan sesuatu yang dapat Anda janjikan. Jika tidak terjadi persis seperti yang Anda katakan, pesan berikutnya akan jauh lebih marah.`},
      {t:`Saya biarkan saja — menjawab hanya akan memperburuk keadaan.`, reply:`<i>(tidak ada balasan…)</i>`, ok:false, fb:`Diam menegaskan bahwa «tidak ada yang menjawab». Akui di hari yang sama, dengan singkat dan tenang — dan laporkan.`}
     ]
   })}
  `}
 ],
 ix:{
  title:'Orang tua yang sangat marah — evaluasi modul',
  instr:'Pilih langkah terbaik atau kelompokkan setiap balasan. Nilai 70% untuk membuka daftar periksa akhir.',
  items:[
   {type:'choice', prompt:`Seorang orang tua menelepon sambil berteriak bahwa «sekolah ini bencana», tetapi Anda tidak bisa memahami apa yang terjadi. Apa yang Anda lakukan pertama kali?`, opts:[`Menjelaskan semua hal yang berjalan baik di kelas`,`Merendahkan suara, mengakui betapa kesalnya mereka, dan bertanya satu kali: «Bisakah Anda menceritakan apa yang terjadi, agar saya bisa menyampaikannya dengan akurat?»`,`Menutup telepon — Anda tidak harus mendengarkan ini`], correct:1, fb:`Atur diri Anda, akui perasaannya, dan ajukan satu pertanyaan terbuka. Lalu arahkan mereka ke Client Service dan dokumentasikan.`},
   {type:'sort', prompt:'Harta karun atau sampah? Apakah ini balasan yang baik?', card:`«Saya ingin membantu Anda, dan saya akan senang melanjutkan ketika kita dapat berbicara dengan saling menghormati. Saya sudah meneruskan pesan Anda ke Layanan Pelanggan.»`, zones:[{label:'💎 Harta karun', fb:'Benar — batasan yang tenang yang menjaga rasa hormat dan mengarahkan ke Client Service.'},{label:'🗑️ Sampah', fb:'Belum tepat — ini adalah batasan yang sopan, persis yang bisa Anda katakan ketika percakapan tidak lagi saling menghormati.'}], correctZone:0},
   {type:'choice', prompt:`Seorang orang tua mengancam akan memposting ulasan buruk jika tidak mendapat pengembalian dana. Apa yang Anda lakukan terhadap ancaman itu?`, opts:[`Membalas bahwa ulasan tidak akan mengubah apa pun`,`Berjanji akan meminta pengembalian dana agar mereka tidak memposting`,`Tidak menanggapinya — laporkan di BO kata demi kata dan beri tahu Team Leader Anda di hari yang sama`], correct:2, fb:`Anda tidak bernegosiasi dengan ancaman atau berdebat dengannya. Anda mendokumentasikannya dengan tepat dan membiarkan Team Leader serta Client Service yang menanganinya.`},
   {type:'sort', prompt:'Harta karun atau sampah? Apakah ini balasan yang baik?', card:`Di obrolan grup, di depan keluarga lain: «Anak Anda yang tidak pernah memperhatikan, jadi jangan salahkan saya.»`, zones:[{label:'💎 Harta karun', fb:'Belum tepat — ini menyalahkan anak, berdebat di depan umum, dan memperburuk konflik.'},{label:'🗑️ Sampah', fb:'Benar — jangan pernah berdebat di obrolan grup atau menyalahkan anak. Akui dengan singkat, lalu bawa ke Client Service dan Team Leader Anda.'}], correctZone:1}
  ]
 }
},
{id:'checklist', numLabel:'Checklist Akhir', emoji:'✅', color:'var(--coral)',
 title:'Checklist Akhir',
 desc:'Tidak ada kuis di sini — hanya hal-hal penting dari mini-training ini, sebelum kamu menutupnya.',
 obj:'Tinjau checklist di bawah ini. Modul ini tidak dinilai — baca, lalu selesaikan mini-training-nya.',
 sections:[
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   ${numlist([
     'Saya meninggalkan komentar di BO di hari yang sama saat saya mengetahui permintaan itu, dan melibatkan Team Leader saya',
     'Pelajaran berikutnya dengan siswa ini adalah upaya nyata untuk mempertahankannya — giliran yang sungguhan, keberhasilan yang terlihat, perhatian yang spesifik, tanpa menyinggung permintaan refund',
     'Saya tidak pernah mengonfirmasi persetujuan atau membahas nominal — saya menggunakan satu kalimat yang aman dan menyerahkan sisanya kepada Client Service'
   ])}
  `},  {t:'🌱 Di setiap pelajaran', html:`
   ${numlist([
     'Saya mempelajari dan melatih setiap pelajaran sehari sebelumnya, dimulai dari tujuan dan hasil yang diharapkan di panduan',
     'Saya menggunakan contoh kalimat di panduan untuk menjelaskan konsep baru, dan saya bertanya kepada mentor, Team Leader, atau channel Slack tentang kekurangan apa pun sebelum pelajaran',
     'Saya mencontohkan dulu: saya memperagakan di layar saya sendiri dan mengucapkan jalan pikiran saya sebelum siswa mencobanya',
     'Saya menerapkan scaffolding: banyak dukungan di awal (template, langkah-langkah terpandu), lalu berkurang seiring siswa menjadi lebih mandiri',
     'Saat ada kesalahan di materi, saya menyebutkannya dengan tenang dan menjadikannya sesuatu yang kami selesaikan bersama',
     'Saya menunjukkan bahwa kesalahan itu wajar, supaya siswa melihat error sebagai bagian normal dari belajar coding — bukan sesuatu yang memalukan',
     'Saya tidak pernah membesar-besarkan kesalahan, menyalahkan platform di depan siswa, atau membiarkannya menghabiskan sisa pelajaran',
     'Saya melaporkan setiap kesalahan materi lewat ikon 🐞 di BO, dan memastikan ID kursusnya sesuai dengan grup siswa saya',
     'Saya mengetes koneksi, kamera, dan mikrofon saya 30 menit sebelum kelas, dan menutup tab serta program yang tidak saya perlukan',
     'Saya memastikan siswa menggunakan Google Chrome dan perangkat yang sesuai — bukan Safari, dan tidak menggunakan tablet untuk kursus seperti Roblox Studio',
     'Untuk masalah teknis: maksimal 10 menit untuk memperbaiki, lalu komunikasikan, dokumentasikan, dan eskalasikan — dan buat tiket Client Service jika terjadi dua pelajaran berturut-turut',
     'Saat saya membantu satu siswa dengan masalah teknis, saya memberi anggota grup lainnya sesuatu untuk dikerjakan, supaya tidak ada yang menunggu',
     'Untuk penagihan, cicilan, perhitungan ulang, saldo, perubahan grup, keterlambatan mulai, dukungan, atau janji tim penjualan dan lisensi Minecraft, saya mengakui — saya tidak menjelaskan, membela diri, atau berjanji',
     'Saya melaporkan kasus-kasus tersebut ke Client Service di BO pada hari yang sama (Tutors’ Evaluations → Evaluate The Student), dengan kata-kata keluarga itu sendiri, dan saya memberi tahu Team Leader saya',
     'Saya menggunakan kanal yang tepat: Team Leader saya untuk masalah teknis (dia yang mengeskalasikannya ke dukungan teknis), Team Leader saya dan Operations untuk kredit dan pemotongan',
     'Ketika masalahnya ada di kelas — tempo, penjelasan, grup yang kacau, kelas yang terlewat, kebutuhan khusus, pergantian tutor — saya memperbaiki bagian saya mulai kelas berikutnya dan tetap melaporkannya',
     'Dengan orang tua yang sangat marah atau mengancam, saya mengatur diri sendiri, mengakui perasaannya, bertanya satu kali jika penyebabnya tidak jelas, dan mengarahkan mereka ke Client Service',
     'Saya menjaga rasa hormat dan menetapkan batasan dengan tenang; saya tidak pernah berdebat, membalas dengan kasar, atau menjanjikan apa pun untuk menenangkan orang tua',
     'Saya melaporkan ancaman dan hinaan kata demi kata di BO dan memberi tahu Team Leader saya di hari yang sama — dan saya tetap memperlakukan anak dengan hangat'
   ])}
  `},  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Itulah keseluruhan mini-training ini.</strong> Jika sudah siap, lanjutkan — lalu selesaikan DST di LMS untuk menuntaskan tugasnya.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
