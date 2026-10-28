/* Mini_Training_5_Handling_Content_Errors - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='id';
const CONTENT = {
  flag:'🇮🇩', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Menangani Kesalahan di Kelas — Pelatihan Tutor Kodland",
    logoSub:'Departemen Pengembangan Tutor',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Menjaga Pelajaran Tetap Stabil Saat Ada <span class=\"h-pill\">Kesalahan</span>",
    heroIntro:"Kamu melihat ini karena sebuah keluarga melaporkan pelajaran yang terasa penuh kesalahan dan membuat frustrasi. Sebagian besar hal ini berasal dari persiapan, cara menjelaskan, atau kesalahan materi yang sebenarnya — semuanya bisa diperbaiki.",
    heroWork:"Selesaikan 4 modul singkat. Setiap cek modul butuh nilai 70%+ untuk membuka modul berikutnya. Total sekitar 25–30 menit.",
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
 title:'Mengapa Kamu di Sini',
 desc:'Mengapa pelajaran yang penuh kesalahan terasa kacau — dan aturan yang berlaku jika permintaan refund sudah masuk.',
 obj:'Memahami bahwa sebagian besar kasus ini berasal dari persiapan, cara menjelaskan, atau masalah materi — semuanya punya solusi konkret — dan apa persisnya yang harus (dan tidak boleh) dilakukan jika permintaan refund sudah ada.',
 sections:[
  {t:'😤 Saat pelajaran terasa seperti rangkaian kesalahan', html:`
   <div class="card"><p>Pelajaran yang penuh kesalahan — dari siswa, dari materi, atau yang muncul di tengah penjelasan — bisa cepat terasa kacau jika tidak ada rencana untuk menanganinya. Keluarga cepat menyadarinya: terlihat seperti “kelasnya tidak berjalan baik”, padahal penyebabnya bisa diperbaiki dalam hitungan menit.</p></div>
   ${co('co-idea','💡',`<p><strong>Sebagian besar hal ini bisa dicegah.</strong> Pelajaran yang dipersiapkan dengan baik, cara menjelaskan yang jelas, dan tahu cara melaporkan kesalahan materi yang sebenarnya mencegah kesalahan kecil berubah menjadi pelajaran yang terasa tidak terkendali.</p>`)}
  `},
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   <div class="card"><p>Semua hal di atas adalah tentang menangkap tanda ini sejak dini. Tapi mungkin kamu membuka pelatihan ini karena sebuah keluarga <strong>sudah</strong> mengajukan refund. Aturan di bawah ini berlaku apa pun alasannya — baca dulu, lalu gunakan sisa pelatihan ini untuk memahami apa yang menyebabkannya dan apa yang masih bisa kamu lakukan di kelas.</p></div>
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
   <div class="card"><p>Kamu bisa tahu bahwa ada permintaan refund dari komentar Client Service di profil anak di BO — tidak ada sistem otomatis yang memberitahumu. Begitu kamu tahu, apa yang kamu lihat di pelajaranmu adalah informasi yang tidak bisa didapatkan Client Service dengan cara lain.</p></div>
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
 desc:'Apa yang sudah disediakan panduan untukmu, mengapa mempelajarinya sehari sebelumnya mencegah sebagian besar masalah, dan dua langkah mengajar — modelling dan scaffolding — yang membantu sebuah konsep langsung dipahami sejak pertama kali.',
 obj:'Menggunakan tujuan dan contoh kalimat di panduan secara efektif, tahu ke mana meminta bantuan sebelum pelajaran, dan menerapkan modelling dan scaffolding untuk menjelaskan konsep baru dengan lebih jelas.',
 sections:[
  {t:'📘 Apa yang sudah disediakan panduan untukmu', html:`
   <div class="card"><p>Setiap panduan dibuka dengan tujuan pelajaran dan hasil yang diharapkan — itulah yang perlu kamu perhatikan, bukan hanya urutan langkahnya. Panduan juga berisi contoh kalimat untuk menjelaskan setiap konsep, yang ditulis oleh orang-orang yang sudah memikirkan dengan cermat cara memperkenalkannya.</p></div>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image1.png" alt="Panduan pelajaran yang menampilkan tujuan pelajaran dan hasil pembelajaran"><figcaption>📌 Di awal setiap panduan kamu akan menemukan tujuan pembelajaran dari pelajaran itu, serta apa yang diharapkan dicapai atau dipelajari siswa di akhir pelajaran.</figcaption></figure>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image2.png" alt="Halaman panduan pelajaran dengan contoh kalimat untuk tutor"><figcaption>💬 Jika kamu ragu cara menangani transisi, memperkenalkan topik atau aktivitas, atau bahkan menjelaskannya, panduan menyertakan kalimat panduan yang bisa membantumu memikirkan cara menyampaikannya.</figcaption></figure>
  `},
  {t:'⏳ Sehari sebelumnya, bukan sejam sebelumnya', html:`
   ${co('co-idea','💡',`<p><strong>Pelajari dan latih pelajarannya sehari sebelumnya</strong> — bukan satu jam, dan bukan tiga puluh menit sebelumnya. Jeda itu memberimu waktu yang cukup untuk menyadari: kode yang sudah tidak berfungsi, materi yang tidak mau termuat, atau aktivitas yang belum sepenuhnya kamu pahami sendiri.</p>`)}
   ${co('co-star','⭐',`<p>Jika kamu menemukan kekurangan, tanyakan kepada mentor, Team Leader-mu, atau tutor lain di channel Slack kursusmu. Mendapatkan bantuan di sana, sehari sebelumnya, adalah hal yang mencegah masalah muncul secara langsung, di depan siswa.</p>`)}
  `},
  {t:'🧑‍🏫 Yang benar-benar membantu sebuah konsep dipahami', html:`
   <div class="card"><p>Cara kamu menjelaskan sesuatu sama pentingnya dengan apakah penjelasanmu benar. Konsep yang diperkenalkan dengan jelas sejak pertama kali mencegah sebagian besar kesalahan akibat kebingungan yang muncul setelahnya.</p></div>
  `},
  {t:'🎬 Modelling: tunjukkan sebelum mereka mencoba', html:`
   <div class="card"><p><strong>Modelling</strong> berarti memperagakan tekniknya sendiri, di layarmu, sebelum siswa mencobanya. Ucapkan jalan pikiranmu dengan lantang sambil melakukannya — cara berpikirnya sering kali lebih berharga daripada hasilnya.</p></div>
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
  title:'Menggunakan Panduan & Menjelaskan dengan Baik — cek modul',
  instr:'70% untuk membuka modul berikutnya.',
  items:[
   {type:'choice', prompt:'Apa yang perlu kamu perhatikan pertama kali saat membuka panduan pelajaran baru?', opts:['Hanya langkah-langkah persisnya, secara berurutan','PR untuk pertemuan berikutnya','Tujuan dan hasil yang diharapkan'], correct:2, fb:'Tujuan memberi tahumu untuk apa sebenarnya pelajaran itu — langkah-langkahnya hanyalah salah satu cara untuk mencapainya.'},
   {type:'choice', prompt:'Kapan sebaiknya kamu mempelajari dan melatih sebuah pelajaran?', opts:['Sehari sebelumnya, bukan sejam sebelumnya','Tepat sebelum kelas, supaya masih segar','Hanya jika itu topik yang belum pernah kamu ajarkan'], correct:0, fb:'Jeda satu hari penuh memberimu waktu untuk benar-benar memperbaiki apa pun yang kamu temukan.'},
   {type:'choice', prompt:'Apa arti “modelling” dalam sebuah pelajaran?', opts:['Menunjukkan contoh yang sudah jadi, tanpa menjelaskan cara membuatnya','Memperagakan tekniknya sendiri, sambil mengucapkan jalan pikiranmu, sebelum siswa mencobanya','Membiarkan siswa mencoba dulu, lalu mengoreksinya'], correct:1, fb:'Modelling berarti menunjukkannya terlebih dahulu — termasuk cara berpikirmu — sebelum mereka mencobanya.'},
   {type:'sort', prompt:'Apakah scaffolding ini dilakukan dengan benar?', card:'Minggu 1: kamu memberi siswa template dan langkah-langkah terpandu. Minggu 3: kamu hanya memberi tujuannya, dan membiarkannya membuatnya sendiri.', zones:[{label:'✅ Ya — itulah scaffolding', fb:'Benar — dukungan dimulai dengan banyak dan dikurangi dengan sengaja seiring siswa menjadi lebih mandiri.'},{label:'❌ Tidak — dukungannya harus tetap sama', fb:'Belum tepat — memberi dukungan penuh selamanya menghambat siswa membangun kemandirian. Mengurangi secara bertahap justru intinya.'}], correctZone:0}
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
     {ic:'💻', html:`<strong>Seorang siswa menyadari kodenya tidak jalan karena ada salah tulis/salah ketik.</strong> Contoh: <em>“Keren — sepertinya ada yang menemukan kesalahan tersembunyinya. Aku memang ingin lihat apakah ada yang menyadarinya.”</em>`},
     {ic:'🖼️', html:`<strong>Beberapa gambar tampak hilang atau tidak mau termuat.</strong> Contoh: <em>“Itu mungkin cuma gangguan di platform, nggak usah khawatir — aku punya slide-nya di sini jadi kamu tetap bisa melihatnya.”</em> Atau: <em>“Nggak apa-apa, hal seperti ini memang terjadi, dan kalian akan sering mengalaminya sebagai programmer — untuk sekarang, lihat layarku dulu ya.”</em>`}
   ])}
  `},
  {t:'💛 Menanggapi Kesalahan dengan Tenang', html:`
   <div class="card"><p>Kesalahan materi adalah momen kecil yang bisa berakhir dengan dua cara: gangguan sesaat yang hampir tidak disadari kelas, atau retakan pada rasa percaya diri siswa. Yang menentukan bukan kesalahannya sendiri — tapi bagaimana kamu bereaksi dalam beberapa detik pertama. Menyebutkannya dengan lantang, tanpa rasa malu atau menyalahkan, memberi tahu siswa bahwa kesalahan adalah bagian yang wajar dan biasa dalam belajar coding, sekaligus mencontohkan pola pikir yang kamu ingin mereka bawa saat menghadapi bug mereka sendiri: sadari, tetap penasaran, perbaiki, lanjutkan.</p></div>
   ${co('co-ok','✅',`<p><strong>Katakan:</strong> <em>“Jeli banget, itu kesalahan di materinya, bukan kamu — yuk kita cari jalan keluarnya bareng.”</em> Alihkan perhatian untuk mencari solusi sebagai tim, dan terus lanjutkan.</p>`)}
   ${co('co-danger','⛔',`<p><strong>Hindari:</strong> membesar-besarkan kesalahannya, menyalahkan platform secara terang-terangan sehingga mengurangi kepercayaan pada kursus, atau menghabiskan terlalu lama waktu untuk itu sampai sisa pelajaran terganggu.</p>`)}
  `},
  {t:'🖥️ Menemukan materi — dan melaporkan kesalahan — di BO', html:`
   <div class="card"><p>Panduan dan presentasi setiap pelajaran ada di dalam BackOffice (BO), terlampir pada data kursus yang persis kamu ajarkan. Di tempat yang sama kamu melaporkan kesalahan materi, lewat ikon 🐞 di baris pelajaran. Simulasi di bawah ini akan memandumu langkah demi langkah.</p></div>
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
    {ic:'👂', html:`<strong>Pastikan secara langsung.</strong> Sebelum pelajaran dimulai, tanyakan kepada siswamu apakah mereka bisa melihat dan mendengarmu dengan baik — dengan begitu kamu bisa menangkap masalah teknis sejak awal.`}
   ])}
  `},
  {t:'🎓 Membantu siswa yang mengalami masalah teknis', html:`
   <div class="card"><p>Sering kali, masalah teknis yang dialami siswa di kelas terjadi karena mereka menggunakan browser selain Google Chrome atau perangkat yang tidak sesuai untuk kursusnya, misalnya mencoba mengikuti kelas lewat tablet, ponsel, atau iPad. Karena itu, penting bagimu untuk mengetahui persyaratan minimumnya supaya bisa membantu mereka.</p></div>
   ${doavoid(
    ["Google Chrome versi terbaru — satu-satunya browser yang sepenuhnya kompatibel",
     "RAM minimal 4 GB (8 GB untuk Blender atau Unity)",
     "Koneksi yang stabil, minimal 10 Mbps — koneksi kabel lebih baik daripada Wi-Fi jika memungkinkan",
     "Ruang penyimpanan kosong minimal 5 GB — Unity dan Blender membutuhkan jauh lebih banyak"],
    ["Safari — ada bug yang sudah diketahui dengan platform Kodland sejak pembaruan terakhir: tombol yang tidak merespons, layar yang tidak termuat, error saat masuk",
     "Tablet / iPad untuk kursus seperti Roblox Studio atau Unity — kursus ini membutuhkan komputer sungguhan",
     "Menganggap masalah di Mac sebagai hilangnya minat sebelum memeriksa apakah penyebabnya hanya Safari"]
   )}
   ${co('co-idea','🍎',`<p>Perhatikan khusus kombinasi Mac + Safari. Jika siswa pengguna Mac tidak bisa menekan tombol atau layarnya tidak termuat, solusinya hampir selalu: buka kelasnya di Google Chrome. Arahkan keluarga ke google.com/chrome.</p>`)}
  `},
  {t:'⚖️ Tanpa mengabaikan anggota kelas lainnya', html:`
   <div class="card"><p>Kegagalannya bukan hanya pada masalah teknisnya — tapi tutor yang terlalu fokus pada masalah satu siswa sampai anggota grup lainnya kehilangan lima atau sepuluh menit pelajaran.</p></div>
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
  instr:'70% untuk membuka checklist akhir.',
  items:[
   {type:'choice', prompt:'Seorang siswa menemukan bug yang sebenarnya di contoh kode pelajaran. Apa langkah pertamamu di kelas?', opts:['Melewatkan aktivitasnya tanpa penjelasan, untuk menghemat waktu','Menyebutkannya dengan tenang dan menjadikannya momen “yuk kita selesaikan bareng”','Memberi tahu grup bahwa platformnya memang selalu penuh kesalahan'], correct:1, fb:'Tenang dan kolaboratif mencegah pelajaran terasa kacau — sekaligus mencontohkan cara menghadapi bug.'},
   {type:'sort', prompt:'Kesalahan materi atau masalah teknis?', card:'Satu baris di kode awal pelajaran ada salah ketik dan memunculkan error bahkan sebelum ada yang mengubah apa pun.', zones:[{label:'🔧 Masalah teknis → ikuti protokolnya', fb:'Belum tepat — kodenya sendiri yang salah, untuk semua orang. Itu kesalahan materi: cari jalan keluarnya dengan tenang dan laporkan lewat ikon 🐞 di BO.'},{label:'🐞 Kesalahan materi → laporkan di BO', fb:'Benar — materinya sendiri yang salah. Cari jalan keluarnya dengan tenang, lalu laporkan lewat ikon 🐞 supaya diperbaiki untuk semua grup.'}], correctZone:1},
   {type:'sort', prompt:'Kesalahan materi atau masalah teknis?', card:'Layar seorang siswa terus membeku dan audionya terus terputus di tengah pelajaran.', zones:[{label:'🔧 Masalah teknis → ikuti protokolnya', fb:'Benar — coba perbaikan cepat, jaga grup tetap bekerja, lalu komunikasikan, dokumentasikan, dan eskalasikan jika terulang.'},{label:'🐞 Kesalahan materi → laporkan di BO', fb:'Belum tepat — tidak ada yang salah dengan materinya. Layar yang membeku dan audio yang terputus adalah masalah teknis: ikuti protokolnya.'}], correctZone:0},
   {type:'choice', prompt:'Di mana kamu melaporkan kesalahan materi di BO?', opts:['Lewat pesan kepada keluarga siswa','Di tab Periksa milik grup','Lewat ikon 🐞 di baris pelajaran, di dalam data kursus'], correct:2, fb:'Ikon 🐞 di setiap baris pelajaran membuka survei kualitas materi — itulah yang membuat materinya diperbaiki.'},
   {type:'choice', prompt:'Masalah teknis yang sama terjadi untuk kedua kalinya berturut-turut. Apa yang berubah?', opts:['Buat tiket Client Service di hari yang sama','Tidak ada — terus coba memperbaikinya sendiri','Tunggu satu pelajaran lagi untuk memastikan itu sebuah pola'], correct:0, fb:'Masalah yang berulang berarti sudah waktunya mengeskalasikan ke Client Service — dan memberi tahu orang tua bahwa akan ada yang menindaklanjuti.'}
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
     'Saya memastikan siswa menggunakan Google Chrome dan perangkat yang sesuai — bukan Safari, dan tidak menggunakan tablet untuk kursus seperti Roblox Studio atau Unity',
     'Untuk masalah teknis: maksimal 10 menit untuk memperbaiki, lalu komunikasikan, dokumentasikan, dan eskalasikan — dan buat tiket Client Service jika terjadi dua pelajaran berturut-turut',
     'Saat saya membantu satu siswa dengan masalah teknis, saya memberi anggota grup lainnya sesuatu untuk dikerjakan, supaya tidak ada yang menunggu'
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
