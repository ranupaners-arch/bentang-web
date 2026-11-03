# BENTANG — Interactive Stories of Indonesia
## Brief konten, desain, motion, aset, dan implementasi untuk coding agent

> **Jenis website:** digital editorial experience / immersive storytelling / atlas budaya dan alam. **Bukan** e-commerce, marketplace, agen perjalanan, atau situs reservasi.
> **Status:** konsep portofolio/demo; BENTANG adalah nama brand contoh. Konten editorial contoh ditulis khusus untuk rancangan ini; klaim budaya/lingkungan yang rinci perlu divalidasi sebelum publikasi produksi.

## 1. Konsep kreatif
**Nama:** BENTANG
**Tagline:** Setiap Tempat Punya Cerita.
**Pernyataan brand:** "BENTANG adalah ruang digital untuk menyusuri alam, budaya, dan cerita Indonesia melalui fotografi, pengetahuan, serta pengalaman visual yang terasa personal."
**Tujuan pengunjung:** menemukan lokasi, membaca kisah, mengeksplorasi peta, melihat galeri, dan mengirim usulan cerita. Tidak ada pembelian, keranjang, harga, checkout, pemesanan tur, atau sistem pembayaran.
**Nada bahasa:** puitis-terukur, informatif, manusiawi, tidak hiperbola. Bahasa utama Indonesia; label navigasi boleh campuran bahasa Inggris yang konsisten.

### Visual system
- Warna: Forest `#172D28`, Sand `#C1A37C`, Ivory `#F4F0E6`, Terracotta `#A4573C`, Ink `#202420`.
- Tipografi: Cormorant Garamond untuk heading display; DM Sans untuk UI, label, dan body.
- Fotografi: cinematic, tekstur alam, aerial top-down, lanskap berkabut, detail budaya, potret lingkungan. Jangan semuanya terlalu saturasi.
- Layout: editorial grid 12 kolom, banyak negative space, foto memenuhi lebar layar pada momen utama, teks editorial berkisar 55–75 karakter per baris.
- Menu: logo BENTANG di kiri, Explore / Stories / Culture / Gallery / Atlas / About di tengah (responsive menu fullscreen), tombol Contact di kanan.
- Footer konsisten: slogan, daftar halaman, alamat email contoh `hello@bentang.example` (placeholder non-operasional), social hanya bila tersedia, kredit foto, legal.

## 2. Sitemap — 12 halaman asli
1. `/` — Home
2. `/explore` — Explore Index
3. `/explore/bromo` — Detail Destination / Bromo
4. `/stories` — Stories Index
5. `/stories/di-balik-kabut-bromo` — Story Detail
6. `/culture` — Culture Index
7. `/culture/tongkonan` — Culture Detail
8. `/gallery` — Photography Gallery
9. `/atlas` — Interactive Atlas
10. `/field-notes` — Field Notes
11. `/about` — About BENTANG
12. `/contact` — Contact & Contribute

## 3. Isi lengkap tiap halaman

### Halaman 01 — HOME `/`
**Tujuan:** pengenalan brand + undangan eksplorasi.
- **Hero fullscreen:** foto aerial Raja Ampat, judul ukuran raksasa: **"Indonesia, lebih dari sekadar pemandangan."** Subcopy: "Dari gunung yang diselimuti kabut hingga pulau-pulau yang terhampar di timur, setiap bentang menyimpan cerita yang layak didengar." CTA: **Mulai Menjelajah** → `/explore`. Label kecil: `SCROLL TO DISCOVER`.
- **Intro manifesto:** Eyebrow `01 / THE IDEA`, heading **"Bukan hanya tempat. Ada kehidupan di dalamnya."** Body: "Bentang alam menyimpan jejak cuaca, kerja manusia, pengetahuan, dan tradisi. BENTANG mengajak kita memperhatikan semuanya lebih dekat."
- **Featured destinations:** 3 kartu besar: **Bromo — Di Antara Pasir dan Kabut**, **Raja Ampat — Kepulauan Berwarna Biru**, **Tegallalang — Pola Hijau yang Hidup**; masing-masing foto, region, teks 1 kalimat, panah ke explore/cerita.
- **Statement break:** pada background Forest: **"Ada cerita yang baru terasa ketika kita melambat."** teks muncul seiring scroll.
- **Culture highlight:** foto Tongkonan; judul **"Ruang, rumah, dan ingatan."** Body: "Arsitektur tradisional tidak hanya membentuk bangunan. Ia juga menyimpan cara masyarakat memahami kebersamaan, ruang, dan identitas." CTA **Jelajahi Budaya**.
- **Featured story:** **"Di Balik Kabut Bromo"** dengan foto portrait dan preview editorial: "Pagi tidak datang sekaligus. Ia muncul perlahan melalui warna, udara, dan gerak manusia yang menunggu cahaya."
- **Final CTA:** **"Ke mana cerita berikutnya membawa kita?"** dua tautan: **Buka Atlas** / **Lihat Galeri**.
**Motion:** hero image slow scale 1.08→1, kinetic title reveal, section text fade/translate, collage photos parallax rendah; jangan menggunakan scrolljacking.

### Halaman 02 — EXPLORE `/explore`
**Tujuan:** eksplorasi lokasi berdasarkan kategori, bukan katalog produk.
- **Hero:** judul **"Jelajahi tempat, temukan perspektif."** Intro: "Setiap tempat menyimpan lapisan: geografi, kehidupan, dan cerita. Temukan pintu masuk yang paling menarik bagimu."
- **Filter tabs fungsional:** All / Gunung / Pulau & Laut / Lanskap Hijau / Warisan Budaya.
- **Search:** placeholder **"Cari tempat atau wilayah..."**; harus memfilter hasil client-side.
- **Destination grid:** 8 kartu dengan title + lokasi + kategori + sinopsis: Bromo (Jawa Timur, Gunung; "Bentang vulkanik, pasir, dan perubahan cahaya"), Raja Ampat (Papua Barat Daya, Pulau & Laut; "Pulau-pulau karst di tengah warna biru"), Tegallalang (Bali, Lanskap Hijau; "Terasering yang membentuk pola kehidupan"), Borobudur (Jawa Tengah, Warisan Budaya; "Batu, relief, dan ruang perenungan"), Kawah Ijen (Jawa Timur, Gunung; "Warna dan tekstur pada lanskap vulkanik"), Sumba (Nusa Tenggara Timur, Lanskap & Budaya; "Ruang terbuka dan bentuk rumah tradisional"), Kepulauan Komodo (Nusa Tenggara Timur, Pulau & Laut; "Bukit kering bertemu pesisir berwarna biru"), Toraja (Sulawesi Selatan, Warisan Budaya; "Arsitektur yang menyimpan cerita komunitas").
- **Editorial block:** heading **"Peta hanyalah awal."** Body: "Lokasi memberitahu kita ke mana harus melihat. Kisah membantu kita memahami apa yang sedang kita lihat."
- **CTA:** **Lihat Atlas Interaktif**.
**Interaksi:** filter dan pencarian nyata, chips active, hover image reveal, result count, empty-state dengan reset filter. Untuk detail selain Bromo, dapat arahkan ke teaser eksplorasi yang relevan, bukan broken link.

### Halaman 03 — DESTINATION DETAIL `/explore/bromo`
**Tujuan:** contoh halaman destinasi premium dan sticky storytelling.
- **Hero fullscreen:** foto Bromo; supertitle `EAST JAVA / VOLCANIC LANDSCAPE`, heading **"Bromo. Antara bumi dan langit."** Deskripsi: "Sebuah perjalanan visual melintasi pasir, kaldera, dan pagi yang perlahan menjadi terang."
- **Meta strip:** `Lokasi: Jawa Timur` / `Tema: Bentang Vulkanik` / `Format: Kisah Visual` / `Estimasi baca: 4 menit` (estimasi editorial).
- **Sticky scroll 2 kolom:** kiri foto Bromo sticky `position: sticky; top: 96px` dalam wrapper; kanan empat chapter: (1) **Cahaya Pertama** — "Kabut membentuk garis halus di antara lereng dan cakrawala." (2) **Lautan Pasir** — "Permukaan yang tampak sunyi sesungguhnya menyimpan perubahan warna dan tekstur." (3) **Lanskap yang Hidup** — "Bentuk gunung dan ruang terbuka mengingatkan bahwa alam terus bergerak." (4) **Orang dan Tempat** — "Cara kita mendatangi sebuah tempat seharusnya juga memuat rasa hormat pada lingkungannya."
- **Full-bleed interlude:** foto dengan caption **"Pagi, dilihat dari sisi lain."**
- **Photo chapters:** 3 foto detail landscape, masing-masing caption yang jelas; gallery dapat dibuka lightbox.
- **Further reading:** kartu cerita **Di Balik Kabut Bromo**.
- **Related exploration:** 2 card Raja Ampat / Kawah Ijen (tanpa mengklaim dekat secara geografis).
**Motion:** sticky image container dan teks chapter kanan scroll natural; foto kiri boleh crossfade saat chapter aktif, dengan fallback satu foto. Sticky berakhir saat section parent habis. `prefers-reduced-motion` mematikan transisi nonesensial.

### Halaman 04 — STORIES `/stories`
**Tujuan:** indeks majalah digital.
- **Hero editorial:** heading **"Cerita yang membuat tempat terasa dekat."** Body: "Catatan tentang ruang, manusia, cahaya, dan hal-hal kecil yang kerap terlewat saat kita sekadar lewat."
- **Featured article:** foto Bromo besar, badge `FEATURED STORY`, judul **"Di Balik Kabut Bromo"**, dek: "Membaca bentang yang berubah seiring datangnya cahaya." CTA **Baca Cerita**.
- **Story cards:** **"Laut yang Memecah Warna"** (Raja Ampat, perjalanan visual), **"Garis-Garis Hijau Tegallalang"** (Bali, lanskap), **"Batu yang Menyimpan Waktu"** (Borobudur, sejarah visual), **"Rumah dan Ruang di Toraja"** (budaya), **"Jejak Motif dari Sumba"** (tekstur dan kriya), **"Warna Kawah Ijen"** (alam).
- **Category tabs:** Semua / Lanskap / Budaya / Fotografi / Catatan.
- **Closing:** **"Masih ada banyak hal yang belum sempat diceritakan."** CTA **Kirim Ide Cerita** → Contact.
**Interaksi:** filter dinamis, featured card sticky minor hanya di desktop, pagination/load more untuk daftar yang cukup.

### Halaman 05 — STORY DETAIL `/stories/di-balik-kabut-bromo`
**Tujuan:** long-form editorial reading experience.
- **Cover:** label `FIELD STORY 001`, h1 **"Di Balik Kabut Bromo"**, dek **"Tentang pagi yang tak pernah datang dengan cara yang sama."** Cover Bromo.
- **Editorial metadata:** `Wilayah: Jawa Timur` / `Kategori: Lanskap` / `Waktu baca: ±4 menit`; tanpa penulis atau tanggal fiktif yang disajikan sebagai fakta.
- **Opening paragraph:** "Sebelum matahari membentuk bayangan yang tegas, lanskap terasa seperti rangkaian lapisan. Di kejauhan, gunung menjadi siluet. Di bawahnya, kabut menghapus batas antara tanah dan udara."
- **Subheading 1: Sebelum Cahaya Penuh.** Paragraf: "Saat warna masih dingin, bentuk paling sederhana justru menjadi paling jelas: garis lereng, hamparan pasir, dan ruang yang terbuka. Lanskap tampak berbeda bahkan ketika posisi kita hampir tidak berubah."
- **Pull quote:** **"Beberapa tempat tidak meminta kita bergerak lebih cepat. Mereka justru mengajak kita memperhatikan."**
- **Subheading 2: Bentuk yang Terus Berganti.** Paragraf: "Perubahan cahaya memberi kesan bahwa pemandangan yang sama adalah cerita yang baru. Kontras menguat, kabut tersibak, dan detail yang tersembunyi mulai terlihat."
- **Subheading 3: Melihat dengan Tanggung Jawab.** Paragraf: "Mengagumi keindahan sebaiknya berjalan beriringan dengan sikap menjaga. Kehadiran pengunjung, sebaik apa pun niatnya, tetap meninggalkan dampak."
- **Conclusion:** "Di Bromo, pagi bukan hanya soal matahari terbit. Ia adalah cara yang pelan untuk mengenali sebuah tempat, dan mungkin juga cara baru untuk melihat perjalanan itu sendiri."
- **Related stories:** Raja Ampat dan Kawah Ijen, cards menuju `/stories` atau halaman yang tersedia.
**Interaksi:** progress bar membaca, sticky share/bookmark (bookmark local demo only), TOC anchor; image full width berbeda proporsi.

### Halaman 06 — CULTURE `/culture`
**Tujuan:** pengantar warisan budaya tanpa eksotifikasi.
- **Hero:** foto rumah tradisional Toraja. Judul **"Warisan yang terus hidup."** Subcopy: "Budaya tidak berhenti di masa lalu. Ia hadir dalam rumah, kain, cara berkumpul, dan pengetahuan yang diteruskan."
- **Focus topics:** **Arsitektur** / **Kain & Pola** / **Ruang Komunal** / **Ritme Kehidupan**; masing-masing 2–3 kalimat dan foto.
- **Featured:** Tongkonan — heading **"Rumah yang menyimpan hubungan."** Body: "Bentuk atapnya mudah dikenali. Namun, untuk memahami Tongkonan, kita perlu melihat hubungan antara ruang, keluarga, dan tradisi." CTA **Baca Kisah Tongkonan**.
- **Editorial pair:** motif kain Sumba dengan judul **"Motif sebagai bahasa visual."** Catatan bahwa interpretasi motif spesifik harus diverifikasi dari sumber budaya setempat.
- **Closing manifesto:** **"Belajar budaya berarti mendengar, bukan hanya melihat."**
**Interaksi:** visual split sticky, reveal text, horizontal drag cards dengan kontrol keyboard.

### Halaman 07 — CULTURE DETAIL `/culture/tongkonan`
**Tujuan:** halaman khusus arsitektur tradisional Toraja.
- **Hero:** foto rumah Toraja. Eyebrow `ARCHITECTURE / SOUTH SULAWESI`, judul **"Tongkonan: Rumah, Identitas, Ingatan."**
- **Intro:** "Tongkonan bukan sekadar bentuk rumah dengan atap yang khas. Ia menjadi pintu masuk untuk memahami hubungan antara ruang dan kehidupan sosial dalam budaya Toraja."
- **Chapter 1 / Bentuk:** foto arsitektur, subhead **"Ketika bentuk menjadi penanda."** Copy: "Siluet atap Tongkonan memberi karakter yang kuat pada lanskap permukiman. Detail fisiknya dapat dibaca sebagai hasil pengetahuan bangunan yang berkembang dalam konteks lokal."
- **Chapter 2 / Ruang:** **"Lebih dari ruang tinggal."** Copy: "Memahami rumah tradisional memerlukan perhatian pada fungsi sosial, ingatan keluarga, serta relasinya dengan lingkungan sekitar."
- **Chapter 3 / Menjaga:** **"Memandang dengan hormat."** Copy: "Fotografi dapat memperkenalkan arsitektur. Namun penjelasan budaya tetap perlu bersandar pada sumber yang akurat dan suara masyarakat pemilik tradisi."
- **Image comparison:** detail atap / rumah pada lanskap.
- **Related:** `Culture Index`, `Gallery`, dan `Stories`.
**Catatan editorial:** uraian ini adalah copy pengantar, bukan kajian antropologi final; verifikasi terminologi sebelum produksi.
**Motion:** sticky photo left dan narasi right bergantian, seperti referensi scroll video, tapi disesuaikan editorial.

### Halaman 08 — GALLERY `/gallery`
**Tujuan:** eksplorasi visual-first yang artistik.
- **Hero pendek:** **"Melihat lebih lama."** Intro: "Foto-foto yang mengajak kita memperhatikan bentuk, cahaya, dan warna alam serta budaya Indonesia."
- **Filter:** All / Mountain / Ocean / Culture / Details.
- **Masonry gallery:** minimal 12 item bersumber dari bank aset: Raja Ampat aerial 1–3, Bromo dawn 1–3, Tegallalang 1–2, Borobudur 1–2, Tongkonan, kain Sumba, pantai Sumba, Ijen.
- **Card overlay:** judul singkat + nama tempat + kredit fotografer. Klik membuka **fullscreen lightbox**, previous/next, ESC menutup, tombol close, dan teks alt yang sesuai.
- **End statement:** **"Kadang satu gambar adalah awal dari pertanyaan yang lebih besar."** CTA Explore.
**Motion:** masonry reveal stagger halus (jangan delay besar), hover scale max 1.04, backdrop blur ringan.

### Halaman 09 — ATLAS `/atlas`
**Tujuan:** peta sebagai alat eksplorasi, bukan peta wisata atau navigasi jalan.
- **Hero:** **"Indonesia dalam titik-titik cerita."** Subcopy: "Pilih wilayah, temukan tempat, lalu ikuti cerita yang berawal di sana."
- **Interactive map:** pusat Indonesia, marker konten untuk Bromo, Raja Ampat, Tegallalang, Borobudur, Ijen, Sumba, Komodo, Toraja. **Hanya marker yang diverifikasi koordinatnya**. Label region harus benar; gunakan sumber geospasial yang sah.
- **Sidebar:** daftar lokasi, kategori, foto thumbnail, deskripsi 1 kalimat; klik item menyoroti marker dan membuka mini preview.
- **Toggle:** Map / List agar mobile tetap nyaman.
- **Fallback:** bila peta gagal dimuat, tampilkan daftar lokasi yang sepenuhnya dapat digunakan.
- **Info note:** "Atlas ini dibuat untuk eksplorasi editorial, bukan panduan navigasi langsung atau petunjuk keselamatan perjalanan."
**Interaksi:** zoom/pan map, filter category, keyboard map fallback, hover card sync.

### Halaman 10 — FIELD NOTES `/field-notes`
**Tujuan:** catatan pendek observasional.
- **Hero:** **"Catatan kecil dari perjalanan yang besar."** Body: "Tidak semua cerita membutuhkan halaman panjang. Sebagian cukup menjadi pengingat untuk memperhatikan."
- **Grid notes** 8 micro-essays:
  1. **Cahaya yang Berubah** — "Pagi tidak selalu memberi warna yang sama. Perubahan kecil menggeser cara sebuah lanskap terbaca."
  2. **Jeda di Antara Langkah** — "Kadang ruang yang paling berkesan justru ditemukan saat kita berhenti."
  3. **Garis Air** — "Pesisir selalu memperlihatkan pertemuan: warna laut, tekstur pantai, dan ritme angin."
  4. **Pola di Tanah** — "Terasering memperlihatkan bagaimana bentang dapat dibentuk oleh kerja manusia."
  5. **Rumah dan Arah Pulang** — "Sebuah bangunan bisa menjadi bagian dari ingatan bersama."
  6. **Warna yang Tertinggal** — "Kain membawa bahasa visual yang perlu dipahami lewat konteksnya."
  7. **Kabut Sebagai Bingkai** — "Ketika jarak tak terlihat jelas, detail paling dekat mendapat ruang lebih besar."
  8. **Melihat dengan Hormat** — "Tidak semua yang bisa difoto harus dipublikasikan tanpa pertimbangan."
- **Featured note:** sticky editorial card **"Mengapa kita merekam perjalanan?"**
- **End CTA:** **Temukan Cerita Panjang** → Stories.
**Interaksi:** tag filters (Nature / Culture / Reflection), accordion untuk membuka note panjang, URL hash per note opsional.

### Halaman 11 — ABOUT `/about`
**Tujuan:** memperjelas proyek editorial tanpa klaim organisasi fiktif.
- **Hero:** **"Mengikuti garis yang dibentuk alam dan manusia."**
- **Our Idea:** "BENTANG berawal dari satu gagasan sederhana: tempat akan terasa lebih bermakna ketika kita tidak hanya melihat pemandangannya, tetapi juga mempelajari cerita di baliknya."
- **Approach 3 pillars:** **Lihat** — fotografi untuk memunculkan rasa ingin tahu; **Dengar** — menempatkan konteks budaya sebagai bagian dari cerita; **Pelajari** — menelusuri sumber dan memperbarui pengetahuan secara bertanggung jawab.
- **Visual statement:** **"Cerita terbaik tidak selalu yang paling keras. Terkadang yang paling dekat justru yang paling tinggal."**
- **Editorial principles:** konteks dan akurasi, penghormatan kepada masyarakat setempat, transparansi kredit visual, tidak mempromosikan aktivitas berisiko tanpa panduan ahli.
- **Disclosure:** "Situs ini merupakan konsep demonstrasi website editorial interaktif. Foto milik masing-masing kreator berdasarkan lisensi yang berlaku."
- **CTA:** **Bagikan Ide Cerita**.
**Interaksi:** editorial layout, image wipe, timeline concept minimal tanpa sejarah perusahaan fiktif.

### Halaman 12 — CONTACT `/contact`
**Tujuan:** mengumpulkan ide dan kolaborasi secara tertib.
- **Hero:** **"Ada cerita yang ingin kamu bagikan?"** Intro: "Kamu bisa mengusulkan tempat, budaya, atau sudut pandang yang layak mendapatkan ruang."
- **Form**: Nama lengkap (required), email (required), kategori topik (Cerita / Foto / Koreksi Informasi / Kolaborasi), judul usulan, pesan (required), checkbox persetujuan dihubungi, tombol **Kirim Pesan**.
- **Sidebar:** heading **"Sebuah cerita bisa dimulai dari percakapan."** Copy: "Tuliskan konteks sebanyak yang diperlukan, sertakan sumber jika mengusulkan informasi faktual."
- **FAQ 3 item:** **Apakah bisa mengusulkan lokasi?** Ya, jelaskan alasan dan konteksnya. **Apakah boleh mengirim foto?** Hanya foto yang kamu miliki hak penggunaannya; unggah melalui jalur resmi bila tersedia. **Apakah semua cerita pasti diterbitkan?** Tidak; usulan perlu ditinjau dan diverifikasi.
- **Success state:** hanya tampil setelah submit berhasil ke backend yang benar-benar aktif. Jika demo tanpa backend, tampilkan label eksplisit **"Form demo — belum mengirim data"** dan jangan menyatakan pesan terkirim.
**Interaksi:** client+server validation, proper focus, clear errors, accessible success state bila backend tersedia.

## 4. Asset library terkurasi — tautan sumber foto spesifik
Semua sumber di bawah adalah halaman foto **Unsplash gratis** yang ditemukan untuk konsep BENTANG. Unduh file asli dari halaman foto, simpan lokal, ubah nama, catat fotografer dan tautan, konversi ke WebP/AVIF; jangan menggunakan screenshot Pinterest sebagai aset produksi.

| Kode | Fungsi | Foto & sumber |
|---|---|---|
| A01 | Home hero, Raja Ampat | https://unsplash.com/photos/an-aerial-view-of-an-island-in-the-middle-of-the-ocean-5IXlq_ZeaP4 |
| A02 | Raja Ampat alternate | https://unsplash.com/photos/islands-and-turquoise-waters-create-a-stunning-landscape-odfWue8fwuE |
| A03 | Raja Ampat gallery | https://unsplash.com/photos/a-group-of-small-islands-in-the-middle-of-a-body-of-water-E0edlaFT6jY |
| A04 | Bromo hero | https://unsplash.com/photos/a-body-of-water-with-trees-and-mountains-in-the-background-with-mount-bromo-in-the-background-NntexxyJC0Y |
| A05 | Bromo alternate | https://unsplash.com/photos/mount-bromo-with-clouds-around-it-verlQNDfi0Y |
| A06 | Bromo details | https://unsplash.com/photos/mount-bromo-volcano-with-smoke-plume-5ZsI-rFsoHU |
| A07 | Tegallalang terraces | https://unsplash.com/photos/rice-terraces-in-tegelalang-bali--2WlTWZLnRc |
| A08 | Tegallalang human story | https://unsplash.com/photos/a-farmer-works-in-a-lush-green-rice-field-D4gTA7MFv7g |
| A09 | Borobudur architecture | https://unsplash.com/photos/ancient-borobudur-temple-complex-with-numerous-stone-stupas-at-dawn-lKWq6lKSWCs |
| A10 | Borobudur alternate | https://unsplash.com/photos/borobudur-temple-stupas-at-dawn-with-misty-mountains-hLryfyTDgGs |
| A11 | Tongkonan architecture | https://unsplash.com/photos/brown-wooden-house-surrounded-by-green-trees-under-blue-sky-during-daytime-9uJbHTrhe8U |
| A12 | Toraja portrait/documentary | https://unsplash.com/photos/a-woman-sitting-at-a-table-working-on-a-piece-of-cloth-Fg6chVOWT4k |
| A13 | Motif Sumba | https://unsplash.com/photos/two-fabrics-with-intricate-colorful-patterns-ou-nMhH7kFI |
| A14 | Rumah Sumba | https://unsplash.com/photos/traditional-indonesian-homes-with-unique-high-roofs-UxFbrW-nyKM |
| A15 | Pantai Sumba | https://unsplash.com/photos/palm-trees-frame-a-beach-and-ocean-view-N38BCz8EY1I |
| A16 | Kepulauan Komodo | https://unsplash.com/photos/beautiful-tropical-island-scene-with-clear-blue-water-8d_IfsG98b4 |
| A17 | Komodo wildlife | https://unsplash.com/photos/a-komodo-dragon-rests-on-the-ground-4yPZXZAETlU |
| A18 | Kawah Ijen | https://unsplash.com/photos/turquoise-volcanic-crater-lake-b7aps-nFuaE |
| A19 | Danau Kelimutu (future collection) | https://unsplash.com/photos/turquoise-lake-in-volcanic-crater-at-sunrise-QRaljBMjdPs |

**Aset tambahan / eksplorasi:**
- Unsplash: https://unsplash.com/s/photos/raja-ampat ; https://unsplash.com/s/photos/ijen-crater
- Pexels: https://www.pexels.com/search/indonesia%20nature/ dan https://www.pexels.com/search/indonesia%20culture/
- Wikimedia Commons: https://commons.wikimedia.org/wiki/Main_Page — khusus material dokumenter, cek lisensi tiap file dan atribusi yang disyaratkan.
- Pinterest moodboard (referensi gaya, bukan aset produksi): https://www.pinterest.com/search/pins/?q=editorial%20travel%20website%20design ; https://www.pinterest.com/search/pins/?q=immersive%20storytelling%20web%20design
- Latar tekstur/kertas: buat sendiri melalui CSS grain atau ilustrasi original, tidak perlu ambil karya berhak cipta.

**Catatan lisensi:** Unsplash License umumnya mengizinkan pemakaian gratis komersial, tanpa kewajiban atribusi (kredit dianjurkan). Pexels serupa berdasarkan Pexels License. Wikimedia Commons bergantung pada lisensi per file (CC BY / CC BY-SA / domain publik). Jangan mengasumsikan Pinterest sebagai sumber gambar bebas hak pakai. Hindari foto Unsplash+ berbayar bila anggaran nol.
- Unsplash https://unsplash.com/license
- Pexels https://www.pexels.com/license/
- Wikimedia https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia

## 5. Motion design & interaksi — spesifikasi global
1. **Intro halaman:** opacity + y reveal 0.6–0.9s, easing ease-out; judul split lines; tidak menjalankan animasi masuk terus berulang.
2. **Sticky storytelling:** khusus detail Bromo dan Tongkonan; gambar kiri sticky, teks kanan bergerak scroll; sticky berhenti tepat di akhir parent. Mobile berubah menjadi stacked chapters tanpa sticky paksa.
3. **Image reveal:** clip-path mask sederhana atau scaling 1.06→1; jangan animate ukuran layout dan menyebabkan CLS.
4. **Micro-interactions:** underline nav halus, image pan max 3%, icon arrow translate 4px, pointer focus visible.
5. **Gallery lightbox:** modal accessible, keyboard Escape/left/right, focus trap, restoration of focus.
6. **Page transition:** hanya jika routing dan performa aman. Jangan menghalangi back navigation.
7. **Reduced motion:** hormati `prefers-reduced-motion`; matikan parallax/smooth scroll custom.
8. **Performance:** gambar lazy load kecuali hero, responsive sizes, WebP/AVIF, priority image utama, font optimized, motion GPU-friendly, jangan heavy 3D kecuali benar-benar perlu.

## 6. Arsitektur implementasi (untuk agent)
- Bila proyek sudah ada, ikuti stack dan struktur saat ini. Untuk proyek baru direkomendasikan Next.js App Router + TypeScript + Tailwind CSS; GSAP ScrollTrigger hanya untuk scene yang benar-benar memerlukannya; Framer Motion/Motion untuk micro-interaction opsional; Leaflet atau MapLibre untuk atlas bila integrasi peta benar-benar dijalankan.
- Konten data-driven: `src/data/destinations.ts`, `stories.ts`, `culture.ts`, `notes.ts`, `assets.ts`; komponen reusable `EditorialHero`, `SectionHeading`, `StickyStory`, `DestinationCard`, `PhotoGallery`, `ArticleRenderer`, `AtlasMap`, `SiteNav`, `Footer`.
- Semua 12 route harus bisa dibuka langsung dan setelah refresh (tidak 404).
- Bila konten card belum punya detail route, arahkan ke halaman indeks/anchor yang valid. Tidak boleh membuat tombol palsu.
- Data peta harus terverifikasi (jangan mengarang koordinat dari nama tempat); fallback list berfungsi.
- Form kontak harus diberi penanda demo bila tidak ada backend.
- `metadata` title/description dan OpenGraph per halaman; sitemap/robots.
- Kontras WCAG, alt text akurat, keyboard navigation, mobile responsive pada 360, 768, 1024, 1440 px.
- Footer berisi kredit aset fotografer dan sumber. Hindari konten lorem ipsum, metrik fiktif, testimonial palsu, logo mitra yang tidak nyata.

## 7. Definition of done
- 12 halaman dengan konten sesuai brief, navigasi dan mobile menu bekerja.
- Home sinematik, Explore dengan filter+search, Bromo/Tongkonan sticky-scrolling, Stories article dengan reading progress, Gallery lightbox, Atlas map/list, Contact form validasi.
- Bank aset lokal tersedia (atau list sumber untuk download manual) beserta manifest lisensi/kredit; tidak ada broken image atau hotlink rapuh.
- Mobile/desktop rapi, tidak ada horizontal overflow, animasi nyaman, layout tidak melompat.
- Tidak ada harga, keranjang, checkout, pembayaran, pesanan, katalog barang, atau promosi paket wisata.

## 8. PROMPT RINGKAS siap tempel ke coding agent
"Bangun website editorial interaktif BENTANG sesuai brief Markdown ini secara menyeluruh. Ini BUKAN e-commerce, booking, atau portal jualan. Kerjakan 12 route nyata, buat copy dan section sesuai dokumen tanpa placeholder generik. Pakai sistem visual Forest/Sand/Ivory/Terracotta, Cormorant Garamond + DM Sans, banyak fotografi Indonesia. Cari, unduh, kompres, dan kreditkan aset dari URL foto Unsplash yang dicantumkan; jangan ambil gambar dari Pinterest tanpa izin. Implementasikan hero sinematik, scroll-linked sticky di Bromo dan Tongkonan, filter dan search Explore/Stories, gallery lightbox accessible, Atlas map/list fallback, dan Contact form transparan bila masih demo. Responsive, optimized, SEO, accessible. Jangan mengubah tujuan website menjadi e-commerce. Pastikan semua interaksi berfungsi dan seluruh route lolos pemeriksaan."
