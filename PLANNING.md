# 🗺️ GestureFlow — Project Planning & Roadmap

> Platform edukasi bahasa isyarat berbasis AI yang viral, interaktif, dan berdampak sosial.
> **Dibangun oleh Kelompok 2 | WGTIK — Semester 4**

---

## 📌 Visi & Misi

**Visi:**
Menjadi platform pembelajaran bahasa isyarat berbasis AI yang paling mudah diakses dan paling menyenangkan di Indonesia.

**Misi:**
- Memanfaatkan AI (MediaPipe) untuk mendeteksi bahasa isyarat secara real-time di browser tanpa instalasi apapun.
- Menghadirkan pengalaman belajar yang gamifikatif dan viral bagi pengguna Gen Z.
- Mendukung penelitian AI bahasa isyarat Indonesia melalui pengumpulan dataset tangan terbuka.

---

## ✅ STATUS FITUR SAAT INI

### 🟢 Sudah Selesai (Done)

| Fitur | Deskripsi | Lokasi |
|:---|:---|:---|
| **Landing Page** | Halaman marketing modern dengan CTA, feature highlights, dan navigasi | `landing.html` |
| **Routing Auto-Redirect** | `index.html` di root otomatis mengarahkan ke `landing.html` | `index.html` |
| **Gesture Mode** | Deteksi 6 gestur dasar real-time (Halo, OK, Peace, Fist, dll.) | `pages/app.html` |
| **Alphabet A–Z** | Latihan 26 huruf ASL + Hold Stability Timer + panduan foto asli | `pages/app.html` |
| **Number 0–9** | Latihan 10 angka + Hold Stability Timer + panduan foto asli | `pages/app.html` |
| **A–Z Dataset Download** | Auto-snapshot saat jawaban benar, ekspor sebagai JPEG | `pages/app.html` |
| **0–9 Dataset Download** | Auto-snapshot saat jawaban benar, ekspor sebagai JPEG | `pages/app.html` |
| **Panduan Visual Foto Asli** | Panduan referensi A–Z & 0–9 kini menggunakan foto tangan asli | `public/assets/img/` |
| **Fallback SVG Panduan** | Jika foto belum ada, sistem fallback ke SVG secara otomatis | `pages/app.html` |
| **AI Photobooth 2.0** | Photobooth real-time dengan AI skeleton overlay | `pages/app.html` |
| **5 Bingkai Lama** | Classic Polaroid, BamBear, Sakubox Grunge, Koran, Cyberpunk | `pages/app.html` |
| **4 Bingkai Premium Baru** | Retro Polaroid 1970, Arcade Neon, Manga Speedlines, Flow Neon | `pages/app.html` |
| **8 Filter Kamera** | Normal, Cerah, Gelap, B&W, Cyan, Amber, Vaporwave, Lofi | `pages/app.html` |
| **AI Gesture Shutter ✌️** | Peace Sign 1.5 detik → auto jepret foto | `pages/app.html` |
| **Floating AR Stickers** | ❤️✨💖🌟 melayang mengikuti koordinat jari secara real-time | `pages/app.html` |
| **Boomerang GIF Export** | Rekam 2 detik → ekspor sebagai animated GIF (forward+reverse) | `pages/app.html` |
| **Neo-Glassmorphism UI** | Dark mode dengan efek backdrop blur dan neon glow | `pages/app.html` |
| **Watermark Template Unik** | Setiap template punya teks/stempel dekorasi unik di foto hasil | `pages/app.html` |
| **Game & Kuis** | Mode game interaktif dengan pertanyaan gesture | `pages/app.html` |
| **Teks → Gesture** | Konversi kalimat teks menjadi urutan gesture visual | `pages/app.html` |
| **Dashboard Progres** | Grafik progres belajar, XP, level, dan achievement | `pages/app.html` |
| **Gamifikasi (XP & Level)** | Sistem reward poin XP, naik level, dan streak harian | `pages/app.html` |
| **PWA Support** | Install sebagai app, support offline via Service Worker | `manifest.json`, `sw.js` |
| **Text-to-Speech** | Pengucapan otomatis gesture yang terdeteksi (Bahasa Indonesia) | `pages/app.html` |
| **Photobooth History** | Riwayat foto tersimpan di localStorage browser | `pages/app.html` |

---

## 🟡 Dalam Pertimbangan / Ide Phase Selanjutnya

### Phase 3 — AI Upgrade & Social Features

| Fitur | Prioritas | Estimasi Kesulitan | Deskripsi |
|:---|:---|:---|:---|
| **Background AI Swap** | 🔥 Tinggi | ⚙️ Sedang | Ganti background kamera secara real-time menggunakan MediaPipe Selfie Segmentation |
| **Sticker Bombing Mode** | 🔥 Tinggi | 🟢 Mudah | Tombol satu klik: hamburkan 20+ stiker estetik secara acak ke atas foto hasil |
| **Share to IG Story API** | 🔥 Tinggi | ⚙️ Sedang | Format foto menjadi 9:16 dan trigger Web Share API untuk langsung dibagikan ke Instagram/WhatsApp |
| **Multi-Bingkai Kolase** | 🟡 Sedang | ⚙️ Sedang | Gabungkan 2 atau 4 foto dari sesi berbeda menjadi satu kolase estetik |
| **Leaderboard Mingguan** | 🟡 Sedang | 🔴 Sulit | Papan skor global berbasis Firebase atau Supabase untuk kompetisi XP antar pengguna |

### Phase 4 — Viral Edition

| Fitur | Prioritas | Estimasi Kesulitan | Deskripsi |
|:---|:---|:---|:---|
| **Mode Duet/Split-Screen** | 🔥 Tinggi | 🔴 Sulit | Dua kamera bersebelahan dalam satu photostrip untuk pose bersama teman |
| **Animated WebM Export** | 🟡 Sedang | 🔴 Sulit | Ekspor video pendek berkualitas HD format WebM alih-alih GIF |
| **Gesture Teks Otomatis** | 🟡 Sedang | ⚙️ Sedang | Saat gesture terdeteksi, teks artinya muncul otomatis sebagai caption di foto |
| **AI Challenge Mode** | 💡 Ide | 🔴 Sulit | Tantangan harian: AI secara acak memilih gesture yang harus ditunjukkan dalam waktu tertentu |
| **Dukungan BISINDO** | 💡 Ide | 🔴 Sangat Sulit | Menambahkan dataset khusus Bahasa Isyarat Indonesia (BISINDO) alih-alih hanya ASL |

---

## 🏗️ Arsitektur Sistem

```
[ Browser Pengguna ]
       │
       ▼
[ index.html ] ──(redirect 0 detik)──► [ landing.html ]
                                               │
                                    (Klik "Mulai Belajar")
                                               │
                                               ▼
                                       [ pages/app.html ] ◄── (Aplikasi Utama)
                                               │
                    ┌──────────────────────────┼──────────────────────────┐
                    │                          │                          │
             [ MediaPipe Hands ]       [ Web Speech API ]         [ Canvas 2D API ]
            (AI Gesture Detection)    (Text-to-Speech)          (Photobooth Render)
                    │                                                     │
                    └──────────────────────────┬──────────────────────────┘
                                               │
                                        [ gif.js CDN ]
                                     (Boomerang GIF Export)
                                               │
                                               ▼
                                      [ User Downloads .gif / .jpg ]
```

---

## 📁 Panduan Struktur File

```
gesture-landing/
├── index.html              # ⚡ Router: Auto-redirect ke landing.html (WAJIB ADA di root)
├── landing.html            # 🏠 Landing Page utama GestureFlow
├── manifest.json           # 📱 Konfigurasi PWA
├── sw.js                   # 🔧 Service Worker (Offline Support)
│
├── pages/
│   ├── app.html            # 🚀 Aplikasi Utama (Semua fitur ada di sini)
│   ├── custom-gesture.html # ✋ Modul gesture kustom
│   ├── dashboard.html      # 📊 Halaman dashboard terpisah
│   └── ...
│
└── public/
    └── assets/
        ├── img/
        │   ├── A-Z/        # 📸 Foto referensi gesture A.jpg hingga Z.jpg
        │   └── 0-9/        # 📸 Foto referensi gesture 0.jpg hingga 9.jpg
        └── ...
```

---

## 🚀 Panduan Deploy ke Vercel (Fix 404)

> **Masalah Umum:** Jika project memiliki folder `public/`, Vercel secara default hanya akan menyajikan isi folder `public/`, sehingga `landing.html` tidak ditemukan.

**Solusi: Ubah Output Directory**

1. Buka project di Vercel Dashboard → **Settings** → **General**.
2. Scroll ke bagian **"Build & Development Settings"**.
3. Pada **"Output Directory"**, klik tombol **`Override`** hingga aktif.
4. Isi nilainya dengan **`.`** (satu titik saja, artinya folder root).
5. Klik **`Save`** lalu **Redeploy**.

---

## 📋 Alur Kerja Git (Untuk Tim)

```bash
# 1. Pastikan remote sudah mengarah ke repository Anda sendiri
git remote set-url origin https://github.com/Yoshput/gesture-landing.git

# 2. Selalu pull sebelum mulai kerja
git pull origin main

# 3. Buat branch baru untuk setiap fitur
git checkout -b feature/nama-fitur-baru

# 4. Setelah selesai, commit dan push
git add .
git commit -m "feat: deskripsi singkat fitur yang ditambahkan"
git push origin feature/nama-fitur-baru

# 5. Buat Pull Request di GitHub, merge ke main
# → Vercel akan otomatis redeploy saat ada push ke branch main
```

---

## 🙌 Kontribusi & Tim

**Kelompok 2 — WGTIK Semester 4**

> *"Teknologi terbaik adalah yang membuat yang tidak terlihat menjadi terdengar."*

---
**Made with ❤️ for Indonesian Sign Language Education**
