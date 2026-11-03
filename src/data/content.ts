export type Destination = { name: string; region: string; category: string; summary: string; href: string; asset: string; alt: string };
export const destinations: Destination[] = [
  { name:'Bromo', region:'Jawa Timur', category:'Gunung', summary:'Bentang vulkanik, pasir, dan perubahan cahaya.', href:'/explore/bromo', asset:'bromo', alt:'Gunung dan lanskap vulkanik Bromo' },
  { name:'Raja Ampat', region:'Papua Barat Daya', category:'Pulau & Laut', summary:'Pulau-pulau karst di tengah warna biru.', href:'/atlas#raja-ampat', asset:'raja', alt:'Pulau karst di perairan Raja Ampat' },
  { name:'Tegallalang', region:'Bali', category:'Lanskap Hijau', summary:'Terasering yang membentuk pola kehidupan.', href:'/atlas#tegallalang', asset:'tegallalang', alt:'Pola terasering hijau di Tegallalang' },
  { name:'Borobudur', region:'Jawa Tengah', category:'Warisan Budaya', summary:'Batu, relief, dan ruang perenungan.', href:'/atlas#borobudur', asset:'borobudur', alt:'Stupa batu di Borobudur' },
  { name:'Kawah Ijen', region:'Jawa Timur', category:'Gunung', summary:'Warna dan tekstur pada lanskap vulkanik.', href:'/atlas#kawah-ijen', asset:'ijen', alt:'Kawah vulkanik Ijen' },
  { name:'Sumba', region:'Nusa Tenggara Timur', category:'Lanskap & Budaya', summary:'Ruang terbuka dan bentuk rumah tradisional.', href:'/atlas#sumba', asset:'sumba', alt:'Rumah tradisional di Sumba Barat Daya' },
  { name:'Kepulauan Komodo', region:'Nusa Tenggara Timur', category:'Pulau & Laut', summary:'Bukit kering bertemu pesisir berwarna biru.', href:'/atlas#kepulauan-komodo', asset:'komodo', alt:'Pulau dan pesisir Kepulauan Komodo' },
  { name:'Toraja', region:'Sulawesi Selatan', category:'Warisan Budaya', summary:'Arsitektur yang menyimpan cerita komunitas.', href:'/culture/tongkonan', asset:'toraja', alt:'Arsitektur tradisional Toraja' }
];
export const images: Record<string,string> = {
  raja:'https://images.unsplash.com/photo-1650445332429-75ceee3f3226?auto=format&fit=crop&w=2200&q=82',
  bromo:'https://images.unsplash.com/photo-1666887799869-4fbeda25d17f?auto=format&fit=crop&w=2200&q=82',
  tegallalang:'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1600&q=82',
  borobudur:'https://images.unsplash.com/photo-1780748711983-75cb96f1bf76?auto=format&fit=crop&w=1600&q=82',
  ijen:'https://images.unsplash.com/photo-1786289630267-df76c9398e62?auto=format&fit=crop&w=1600&q=82',
  sumba:'https://images.unsplash.com/photo-1749369903735-9bfccc56454f?auto=format&fit=crop&w=1600&q=82',
  komodo:'https://images.unsplash.com/photo-1747930016274-881667e26d65?auto=format&fit=crop&w=1600&q=82',
  toraja:'https://images.unsplash.com/photo-1582426007790-f5a2e2392dd3?auto=format&fit=crop&w=1600&q=82',
  textile:'https://images.unsplash.com/photo-1749367288413-994ae375d2f6?auto=format&fit=crop&w=1600&q=82',
  rajaAlt:'https://images.unsplash.com/photo-1745917784557-a93bf209232c?auto=format&fit=crop&w=1600&q=82',
  rajaGallery:'https://images.unsplash.com/photo-1675377668920-86545643d25c?auto=format&fit=crop&w=1600&q=82',
  bromoAlt:'https://images.unsplash.com/photo-1781813377841-a3a25348ed17?auto=format&fit=crop&w=1600&q=82',
  farmer:'https://images.unsplash.com/photo-1746106400271-9e268cfc7cf4?auto=format&fit=crop&w=1600&q=82',
  borobudurAlt:'https://images.unsplash.com/photo-1780748549579-c22a0ff53982?auto=format&fit=crop&w=1600&q=82',
  torajaPerson:'https://images.unsplash.com/photo-1736081152693-b22860ce530e?auto=format&fit=crop&w=1600&q=82',
  komodoDragon:'https://images.unsplash.com/photo-1767986857017-0b1f95af57b1?auto=format&fit=crop&w=1600&q=82'
};
export const credits: Record<string,string> = {
  raja:'Johnny Africa', bromo:'Arya Krisdyantara', tegallalang:'Niklas Weiss', borobudur:'Rowan Heuvel',
  ijen:'Rowan Heuvel', sumba:'Fadhil Abhimantra', komodo:'Fajar Al Hadi', toraja:'Heru Haryanto', textile:'Fadhil Abhimantra',
  rajaAlt:'Erick Morales Oyola', rajaGallery:'Bart ter Haar', bromoAlt:'Rowan Heuvel', farmer:'Matthew Stephenson',
  borobudurAlt:'Rowan Heuvel', torajaPerson:'Fadhil Abhimantra', komodoDragon:'Pascal van de Vendel'
};
export const chaptersBromo = [
  ['Cahaya Pertama','Kabut membentuk garis halus di antara lereng dan cakrawala. Sebelum warna menjadi tegas, jarak terasa seperti ruang yang masih bisa berubah.'],
  ['Lautan Pasir','Permukaan yang tampak sunyi sesungguhnya menyimpan perubahan warna dan tekstur. Setiap lapisan cahaya membuka detail yang berbeda.'],
  ['Lanskap yang Hidup','Bentuk gunung dan ruang terbuka mengingatkan bahwa alam terus bergerak. Pemandangan bukan latar yang diam, melainkan proses yang terus berlangsung.'],
  ['Orang dan Tempat','Cara kita mendatangi sebuah tempat seharusnya juga memuat rasa hormat pada lingkungannya. Melihat dengan saksama berarti menyadari jejak yang kita tinggalkan.']
];
export const chaptersTongkonan = [
  ['Ketika bentuk menjadi penanda','Siluet atap Tongkonan memberi karakter yang kuat pada lanskap permukiman. Detail fisiknya dapat dibaca sebagai hasil pengetahuan bangunan yang berkembang dalam konteks lokal.'],
  ['Lebih dari ruang tinggal','Memahami rumah tradisional memerlukan perhatian pada fungsi sosial, ingatan keluarga, serta relasinya dengan lingkungan sekitar.'],
  ['Memandang dengan hormat','Fotografi dapat memperkenalkan arsitektur. Namun penjelasan budaya tetap perlu bersandar pada sumber yang akurat dan suara masyarakat pemilik tradisi.']
];
export const stories = [
  {title:'Di Balik Kabut Bromo',category:'Lanskap',region:'Jawa Timur',href:'/stories/di-balik-kabut-bromo',asset:'bromo',copy:'Membaca bentang yang berubah seiring datangnya cahaya.'},
  {title:'Laut yang Memecah Warna',category:'Fotografi',region:'Raja Ampat',href:'/atlas#raja-ampat',asset:'raja',copy:'Pulau-pulau kecil membentuk ritme di atas air.'},
  {title:'Garis-Garis Hijau Tegallalang',category:'Lanskap',region:'Bali',href:'/atlas#tegallalang',asset:'tegallalang',copy:'Terasering mempertemukan bentuk alam dan kerja manusia.'},
  {title:'Batu yang Menyimpan Waktu',category:'Budaya',region:'Jawa Tengah',href:'/atlas#borobudur',asset:'borobudur',copy:'Sebuah catatan visual tentang batu dan ruang.'},
  {title:'Rumah dan Ruang di Toraja',category:'Budaya',region:'Sulawesi Selatan',href:'/culture/tongkonan',asset:'toraja',copy:'Melihat arsitektur melalui hubungan dan konteks.'},
  {title:'Jejak Motif dari Sumba',category:'Catatan',region:'Nusa Tenggara Timur',href:'/atlas#sumba',asset:'textile',copy:'Kain membawa bahasa visual yang perlu dipahami lewat konteksnya.'},
  {title:'Warna Kawah Ijen',category:'Lanskap',region:'Jawa Timur',href:'/atlas#kawah-ijen',asset:'ijen',copy:'Warna dan tekstur menata ulang cara kita melihat gunung.'}
];
export const notes = [
  ['Cahaya yang Berubah','Pagi tidak selalu memberi warna yang sama. Perubahan kecil menggeser cara sebuah lanskap terbaca.','Nature'],
  ['Jeda di Antara Langkah','Kadang ruang yang paling berkesan justru ditemukan saat kita berhenti.','Reflection'],
  ['Garis Air','Pesisir selalu memperlihatkan pertemuan: warna laut, tekstur pantai, dan ritme angin.','Nature'],
  ['Pola di Tanah','Terasering memperlihatkan bagaimana bentang dapat dibentuk oleh kerja manusia.','Culture'],
  ['Rumah dan Arah Pulang','Sebuah bangunan bisa menjadi bagian dari ingatan bersama.','Culture'],
  ['Warna yang Tertinggal','Kain membawa bahasa visual yang perlu dipahami lewat konteksnya.','Culture'],
  ['Kabut Sebagai Bingkai','Ketika jarak tak terlihat jelas, detail paling dekat mendapat ruang lebih besar.','Nature'],
  ['Melihat dengan Hormat','Tidak semua yang bisa difoto harus dipublikasikan tanpa pertimbangan.','Reflection']
];
