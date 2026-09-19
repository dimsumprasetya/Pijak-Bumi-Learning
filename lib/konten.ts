export type Kategori = {
  id: string;
  nama: string;
  emoji: string;
  deskripsi: string;
  gambar: string;
  gambarAlt: string;
};

export const KATEGORI: Kategori[] = [
  {
    id: 'berkelanjutan',
    nama: 'Gaya Hidup Berkelanjutan',
    emoji: '♻️',
    deskripsi: 'Zero waste, 6R, pengelolaan sampah, eco enzyme',
    gambar: '/images/kategori-berkelanjutan.jpg',
    gambarAlt: 'Tas belanja dan toples kaca tanpa plastik sekali pakai',
  },
  {
    id: 'alam',
    nama: 'Hidup Dekat dengan Alam',
    emoji: '🌿',
    deskripsi: 'Meramban, berkebun, mengenal sumber daya alam',
    gambar: '/images/kategori-alam.jpg',
    gambarAlt: 'Keranjang anyaman di tengah hutan berlumut',
  },
  {
    id: 'kesiapsiagaan',
    nama: 'Ketahanan & Kesiapsiagaan',
    emoji: '💧',
    deskripsi: 'Ketahanan air, survival, kesiapsiagaan keluarga',
    gambar: '/images/kategori-kesiapsiagaan.jpg',
    gambarAlt: 'Tandon penampungan air di atas rumah',
  },
  {
    id: 'rumah-tangga',
    nama: 'Keterampilan Rumah Tangga',
    emoji: '🏡',
    deskripsi: 'DIY, natural care, keterampilan praktis',
    gambar: '/images/kategori-rumah.jpg',
    gambarAlt: 'Keranjang anyaman alami di dalam rumah',
  },
];

export type Kelas = {
  id: string;
  judul: string;
  kategori: string;
  ringkas: string;
  level: 'Pemula' | 'Menengah' | 'Lanjutan';
  format: string;
  durasi: string;
  materi: string[];
  untukSiapa: string;
  gambar: string;
  gambarAlt: string;
};

export const KELAS: Kelas[] = [
  {
    id: 'zero-waste',
    judul: 'Kelas Zero Waste',
    kategori: 'berkelanjutan',
    ringkas:
      'Panduan praktis memulai gaya hidup minim sampah dari rumah, tanpa harus langsung sempurna.',
    level: 'Pemula',
    format: 'Kelas online + pendampingan',
    durasi: '4 sesi',
    materi: [
      'Memahami alur sampah rumah tangga',
      'Prinsip 6R dan cara menerapkannya',
      'Memilah sampah tanpa bikin ribet',
      'Menyusun rencana zero waste pribadi',
    ],
    untukSiapa: 'Untuk kamu yang ingin mulai mengurangi sampah tapi bingung dari mana.',
    gambar: '/images/kelas-zero-waste.jpg',
    gambarAlt: 'Toples kaca berisi bahan makanan curah di dapur',
  },
  {
    id: 'ketahanan-air',
    judul: 'Kelas Ketahanan Air',
    kategori: 'kesiapsiagaan',
    ringkas:
      'Membangun ketahanan air keluarga lewat langkah sederhana yang bisa diterapkan di rumah.',
    level: 'Menengah',
    format: 'Kelas online + live session',
    durasi: '5 sesi',
    materi: [
      'Mengenali risiko krisis air di sekitar kita',
      'Audit penggunaan air di rumah',
      'Cara hemat air sehari-hari',
      'Pemanfaatan greywater',
      'Menyusun rencana ketahanan air keluarga',
    ],
    untukSiapa: 'Untuk keluarga yang ingin lebih siap menghadapi musim kering dan krisis air.',
    gambar: '/images/kelas-ketahanan-air.jpg',
    gambarAlt: 'Keran air yang mengalir di rumah',
  },
  {
    id: 'meramban',
    judul: 'Kelas Meramban',
    kategori: 'alam',
    ringkas:
      'Belajar mengenali tanaman di sekitar rumah dan apa saja yang bisa dimanfaatkan dengan aman.',
    level: 'Pemula',
    format: 'Kelas online + praktik lapangan',
    durasi: '3 sesi',
    materi: [
      'Dasar-dasar meramban dan etikanya',
      'Mengenali tanaman yang aman dan berbahaya',
      'Praktik meramban di lingkungan sekitar',
    ],
    untukSiapa: 'Untuk kamu yang penasaran dengan tanaman di sekitar dan ingin belajar memanfaatkannya.',
    gambar: '/images/kelas-meramban.jpg',
    gambarAlt: 'Tangan memegang dedaunan segar hasil meramban',
  },
  {
    id: 'eco-enzyme',
    judul: 'Kelas Eco Enzyme',
    kategori: 'berkelanjutan',
    ringkas: 'Mengubah sisa dapur jadi cairan serbaguna untuk rumah dan kebun.',
    level: 'Pemula',
    format: 'Kelas online',
    durasi: '2 sesi',
    materi: [
      'Apa itu eco enzyme dan manfaatnya',
      'Rasio bahan dan cara fermentasi yang benar',
      'Pemanfaatan untuk pembersih rumah dan kebun',
    ],
    untukSiapa: 'Untuk kamu yang ingin mengurangi sampah organik dapur jadi sesuatu yang berguna.',
    gambar: '/images/kelas-eco-enzyme.jpg',
    gambarAlt: 'Toples fermentasi sisa buah dan sayur',
  },
];

export type Panduan = {
  id: string;
  judul: string;
  kategori: string;
  ringkas: string;
  halaman: string;
  gambar: string;
  gambarAlt: string;
};

export const PANDUAN: Panduan[] = [
  {
    id: 'meramban',
    judul: 'Panduan Meramban',
    kategori: 'alam',
    ringkas:
      'Panduan awal mengenali tanaman di sekitar rumah, lengkap dengan etika dan catatan keamanan.',
    halaman: '32 halaman',
    gambar: '/images/panduan-meramban.jpg',
    gambarAlt: 'Tanaman herbal kering dan lumpang kayu di atas meja',
  },
  {
    id: 'eco-enzyme',
    judul: 'Panduan Eco Enzyme',
    kategori: 'berkelanjutan',
    ringkas: 'Langkah demi langkah membuat eco enzyme dari sisa dapur, dari rasio sampai panen.',
    halaman: '20 halaman',
    gambar: '/images/panduan-eco-enzyme.jpg',
    gambarAlt: 'Toples kaca berisi cairan alami buatan rumah',
  },
  {
    id: 'kompos-rumah',
    judul: 'Panduan Kompos Rumah',
    kategori: 'berkelanjutan',
    ringkas: 'Cara membuat kompos skala rumah tangga tanpa bau dan tanpa lahan luas.',
    halaman: '24 halaman',
    gambar: '/images/panduan-kompos.jpg',
    gambarAlt: 'Tumpukan bahan organik untuk kompos',
  },
  {
    id: 'ketahanan-air',
    judul: 'Panduan Ketahanan Air Keluarga',
    kategori: 'kesiapsiagaan',
    ringkas: 'Checklist dan langkah menyusun rencana air keluarga untuk menghadapi musim kering.',
    halaman: '28 halaman',
    gambar: '/images/panduan-ketahanan-air.jpg',
    gambarAlt: 'Penampungan air di area rumah',
  },
];

export type Resource = {
  id: string;
  judul: string;
  kategori: string;
  ringkas: string;
  tipe: string;
  gambar: string;
  gambarAlt: string;
};

export const RESOURCES: Resource[] = [
  {
    id: 'jurnal-zero-waste',
    judul: 'Jurnal Zero Waste',
    kategori: 'berkelanjutan',
    ringkas: 'Catat kebiasaanmu tiap hari dan lihat perkembangannya dari minggu ke minggu.',
    tipe: 'Jurnal',
    gambar: '/images/res-jurnal.jpg',
    gambarAlt: 'Seseorang menulis di jurnal di samping cangkir teh',
  },
  {
    id: 'audit-air',
    judul: 'Checklist Audit Air',
    kategori: 'kesiapsiagaan',
    ringkas: 'Hitung pemakaian air rumahmu dan temukan titik yang paling bisa dihemat.',
    tipe: 'Checklist',
    gambar: '/images/res-audit-air.jpg',
    gambarAlt: 'Alat ukur pada sistem perpipaan air',
  },
  {
    id: 'worksheet-kebun',
    judul: 'Worksheet Kebun',
    kategori: 'alam',
    ringkas: 'Rencanakan kebun kecil di rumah: benih, jadwal tanam, dan catatan panen.',
    tipe: 'Worksheet',
    gambar: '/images/res-kebun.jpg',
    gambarAlt: 'Kebun sayur dengan bedengan tanaman',
  },
  {
    id: 'template-6r',
    judul: 'Template Rencana 6R',
    kategori: 'berkelanjutan',
    ringkas: 'Susun rencana Rethink sampai Rot dengan target yang realistis.',
    tipe: 'Template',
    gambar: '/images/res-template.jpg',
    gambarAlt: 'Meja kerja dengan buku catatan dan alat tulis',
  },
];

/** Foto untuk halaman depan */
export const FOTO = {
  hero: '/images/hero.jpg',
  heroAlt: 'Tangan menanam bibit di tanah perkebunan',
  kenapa: '/images/kenapa.jpg',
  kenapaAlt: 'Tanaman hijau yang tumbuh subur',
  produkKelas: '/images/produk-kelas.jpg',
  produkKelasAlt: 'Peserta mengikuti kegiatan kelas bersama',
  produkPanduan: '/images/produk-panduan.jpg',
  produkPanduanAlt: 'Buku panduan terbuka di alam',
  produkResources: '/images/produk-resources.jpg',
  produkResourcesAlt: 'Buku catatan dan pensil untuk belajar',
  founder: '/images/founder.jpg',
  founderAlt: 'Tangan memegang tanah dan tunas tanaman',
  komunitas: '/images/komunitas.jpg',
  komunitasAlt: 'Kegiatan belajar bersama di luar ruangan',
  cta: '/images/cta.jpg',
  ctaAlt: 'Kaki bertelanjang di atas rumput hijau',
  cerita1: '/images/cerita-1.jpg',
  cerita1Alt: 'Dua orang belajar berkebun bersama',
  cerita2: '/images/cerita-2.jpg',
  cerita2Alt: 'Kegiatan kelas kerajinan bersama',
};

export const FOUNDER = {
  nama: 'Dewi',
  kutipan:
    'Aku percaya bahwa belajar tentang keberlanjutan tidak harus selalu dimulai dari teori yang rumit.',
};

export const SOSIAL = {
  instagram: 'https://www.instagram.com/pijakbumilearning/',
  youtube: 'https://www.youtube.com/@pijakbumilearning',
};
