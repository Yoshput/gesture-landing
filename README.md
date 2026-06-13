# 🤟 GestureFlow - AI Gesture Recognition & Interactive Sign Language Learning

**Aplikasi AI-powered gesture recognition modern untuk membantu komunikasi, pembelajaran bahasa isyarat, serta interaksi visual interaktif yang menyenangkan (Photobooth & Dataset Creator).**

Platform berbasis web (PWA) yang menggunakan **MediaPipe Hands** untuk mendeteksi gerakan tangan secara real-time dengan akurasi tinggi, sintesis suara (text-to-speech), analitik dasbor progres, dan fitur kreatif lainnya.

---

## 🎯 Fitur Utama & Keunggulan

### 1. **AI Gesture Photobooth 2.0 (Gen Z Vibe) 📸**
Fitur photobooth interaktif dan viral yang memanfaatkan deteksi pose tangan AI:
- **AI Shutter Trigger (✌️):** Cukup pose **Peace Sign (✌️)** selama 1.5 detik di depan kamera, sistem akan otomatis menghitung mundur dan menjepret foto.
- **Floating AR Stickers:** Efek stiker melayang dinamis (❤️, 💖, ✨, 🌟) yang langsung mengikuti koordinat jari Anda secara real-time saat pose Peace terdeteksi.
- **4 Template Bingkai Premium:**
  - 🎞️ **Retro Polaroid (1970):** Latar krem hangat analog klasik lengkap dengan stempel tanggal.
  - 🎮 **Arcade Neon (Bambear):** Bingkai game pixel art neon pink dan emas.
  - 💥 **Manga Speedlines:** Efek komik aksi shonen garis kecepatan radial tebal.
  - ⚡ **Flow Neon:** Desain sirkuit futuristik hologram cyan dan ungu.
- **8 Filter Estetik:** Normal, Cerah (☀️), Gelap (🌙), B&W (🎬), Cyan (🌐), Amber (🍂), Vaporwave Vibe (🌸), dan Lofi Grain (☕).
- **🎬 Boomerang GIF Export:** Rekam klip video 2 detik secara instan dan ekspor menjadi GIF animasi bolak-balik (Boomerang) berkualitas tinggi.

### 2. **Interactive A–Z & 0–9 Reference Guides 📖**
Modul latihan alfabet dan angka dengan teknologi termutakhir:
- **Download Dataset Gesture Snapshot:** Mengambil gambar snapshot webcam dari pose benar Anda secara otomatis dan menyimpannya sebagai data gambar JPEG siap pakai untuk dataset riset AI.
- **Panduan Foto Asli (Real Photos):** Mengganti icon tangan vektor lama dengan foto pose tangan asli.
- **Sistem Fallback SVG Dinamis:** Jika foto tertentu belum diambil, sistem akan mendeteksi secara otomatis dan memunculkan visual vektor SVG asli sebagai cadangan tanpa memicu broken image.
- **Deteksi Fleksibel (Relaxed O / 0):** Threshold sensitivitas gesture lingkaran (huruf O & angka 0) telah dioptimalkan agar jauh lebih responsif.

### 3. **Real-Time Gesture Translation & Translator Mode 🔄**
- **Gesture → Text:** Deteksi gesture jari per huruf secara real-time dan merangkainya menjadi kata/kalimat utuh.
- **Text → Speech:** Mengucapkan kata hasil terjemahan menggunakan suara bahasa Indonesia natural.
- **Sentence Builder:** Membantu penataan spasi, edit cepat, serta salin otomatis ke clipboard.

### 4. **Advanced Dashboard & Gamification System 📊🎮**
- **Dasbor Analitik:** Grafik Chart.js real-time untuk melihat metrik akurasi latihan dan riwayat performa Anda.
- **Gamifikasi Edukatif:** Hadiah XP, Level-up, sistem Streak harian, dan 12+ medali/achievement (seperti *First Step*, *Master*, dll).

---

## 📦 Bundel Teknologi

| Komponen | Teknologi | Kegunaan |
|:---|:---|:---|
| **Core UI** | HTML5, CSS3 Vanilla | Struktur antarmuka dan estetika premium |
| **Framework CSS** | Tailwind CSS CDN | Layout responsif, responsivitas mobile-first |
| **AI Engine** | MediaPipe Hands | Pelacakan landmark 21 titik sendi jari tangan secara real-time |
| **Voice Engine** | Web Speech API | Konversi teks hasil deteksi menjadi suara bahasa Indonesia |
| **Export GIF** | `gif.js` | Enkoder dan generator animasi Boomerang GIF di browser |
| **PWA Support** | Service Worker, Manifest.json | Instalasi sebagai aplikasi native & dukungan offline |

---

## 📂 Struktur Project

```text
gesture-landing/
├── index.html                  # Router instan (redirect otomatis ke landing.html)
├── landing.html                # Halaman Landing Page utama
├── manifest.json               # Konfigurasi PWA (Progressive Web App)
├── sw.js                       # Service Worker untuk caching offline
├── pages/
│   └── app.html                # Aplikasi utama (Photobooth, Belajar, Dashboard, dll)
├── public/
│   └── assets/
│       └── img/
│           ├── A-Z/            # Foto referensi asli alfabet (A.jpg - Z.jpg)
│           └── 0-9/            # Foto referensi asli angka (0.jpg - 9.jpg)
└── src/                        # Modul pendukung (jika ada)
```

---

## 🚀 Panduan Hosting di Vercel

Karena project ini menggunakan folder `public/` sebagai direktori assets, ikuti langkah berikut agar tidak terkena error **404: NOT FOUND**:

### Langkah 1: Push ke GitHub Anda
Pastikan Anda telah melakukan push kode terbaru ke repository pribadi Anda:
```bash
git add .
git commit -m "Update photobooth, dataset features, and references"
git push origin main
```

### Langkah 2: Konfigurasi Project di Vercel
1. Masuk ke **Vercel**, klik **New Project**, dan impor repository GitHub Anda.
2. Di halaman konfigurasi, biarkan **Application Preset** diatur ke **`Other`**.
3. Klik untuk memperluas bagian **`Build and Output Settings`**.
4. Cari bagian **Output Directory**, aktifkan tombol **`Override`** di samping kanannya.
5. Isi nilainya dengan **`.`** (hanya satu titik). Ini akan memberi tahu Vercel untuk menyajikan seluruh isi repository (termasuk `landing.html` dan `pages/app.html`) alih-alih hanya folder `public/`.
6. Klik **`Deploy`**.

---

## 📈 Spesifikasi Performa

- **Deteksi Latensi**: ~80ms - 120ms (Sangat responsif di browser modern)
- **Frame Rate**: ~30 FPS (Tergantung spesifikasi kamera & perangkat)
- **Konsumsi Memori**: ~50MB per tab aktif
- **Koneksi Internet**: Hanya diperlukan saat memuat pertama kali (untuk file library MediaPipe CDN)

---

## 👥 Kontribusi

**Kelompok 2 - Pengenalan Gestur Tangan untuk Edukasi Bahasa Isyarat**
*Dibuat dengan ❤️ untuk kemajuan pendidikan bahasa isyarat di Indonesia.*
