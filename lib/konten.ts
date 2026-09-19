export type Kategori = {
  id: string;
  nama: string;
  emoji: string;
  deskripsi: string;
};

export const KATEGORI: Kategori[] = [
  {
    id: 'berkelanjutan',
    nama: 'Gaya Hidup Berkelanjutan',
    emoji: '♻️',
    deskripsi: 'Zero waste, 6R, pengelolaan sampah, eco enzyme',
  },
  {
    id: 'alam',
    nama: 'Hidup Dekat dengan Alam',
    emoji: '🌿',
    deskripsi: 'Meramban, berkebun, mengenal sumber daya alam',
  },
  {
    id: 'kesiapsiagaan',
    nama: 'Ketahanan & Kesiapsiagaan',
    emoji: '💧',
    deskripsi: 'Ketahanan air, survival, kesiapsiagaan keluarga',
  },
  {
    id: 'rumah-tangga',
    nama: 'Keterampilan Rumah Tangga',
    emoji: '🏡',
    deskripsi: 'DIY, natural care, keterampilan praktis',
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
  },
];

export type Panduan = {
  id: string;
  judul: string;
  kategori: string;
  ringkas: string;
  halaman: string;
};

export const PANDUAN: Panduan[] = [
  {
    id: 'meramban',
    judul: 'Panduan Meramban',
    kategori: 'alam',
    ringkas:
      'Panduan awal mengenali tanaman di sekitar rumah, lengkap dengan etika dan catatan keamanan.',
    halaman: '32 halaman',
  },
  {
    id: 'eco-enzyme',
    judul: 'Panduan Eco Enzyme',
    kategori: 'berkelanjutan',
    ringkas: 'Langkah demi langkah membuat eco enzyme dari sisa dapur, dari rasio sampai panen.',
    halaman: '20 halaman',
  },
  {
    id: 'kompos-rumah',
    judul: 'Panduan Kompos Rumah',
    kategori: 'berkelanjutan',
    ringkas: 'Cara membuat kompos skala rumah tangga tanpa bau dan tanpa lahan luas.',
    halaman: '24 halaman',
  },
  {
    id: 'ketahanan-air',
    judul: 'Panduan Ketahanan Air Keluarga',
    kategori: 'kesiapsiagaan',
    ringkas: 'Checklist dan langkah menyusun rencana air keluarga untuk menghadapi musim kering.',
    halaman: '28 halaman',
  },
];

export type Resource = {
  id: string;
  judul: string;
  kategori: string;
  ringkas: string;
  tipe: string;
};

export const RESOURCES: Resource[] = [
  {
    id: 'jurnal-zero-waste',
    judul: 'Jurnal Zero Waste',
    kategori: 'berkelanjutan',
    ringkas: 'Catat kebiasaanmu tiap hari dan lihat perkembangannya dari minggu ke minggu.',
    tipe: 'Jurnal',
  },
  {
    id: 'audit-air',
    judul: 'Checklist Audit Air',
    kategori: 'kesiapsiagaan',
    ringkas: 'Hitung pemakaian air rumahmu dan temukan titik yang paling bisa dihemat.',
    tipe: 'Checklist',
  },
  {
    id: 'worksheet-kebun',
    judul: 'Worksheet Kebun',
    kategori: 'alam',
    ringkas: 'Rencanakan kebun kecil di rumah: benih, jadwal tanam, dan catatan panen.',
    tipe: 'Worksheet',
  },
  {
    id: 'template-6r',
    judul: 'Template Rencana 6R',
    kategori: 'berkelanjutan',
    ringkas: 'Susun rencana Rethink sampai Rot dengan target yang realistis.',
    tipe: 'Template',
  },
];

export const FOUNDER = {
  nama: 'Dewi',
  kutipan:
    'Aku percaya bahwa belajar tentang keberlanjutan tidak harus selalu dimulai dari teori yang rumit.',
};

export const SOSIAL = {
  instagram: 'https://www.instagram.com/pijakbumilearning/',
  youtube: 'https://www.youtube.com/@pijakbumilearning',
};
