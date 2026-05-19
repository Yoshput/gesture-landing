# 🤟 Gestur Bahasa Isyarat (Sign Language Gesture Recognition)

Aplikasi pembelajaran interaktif untuk mengenali dan mempractik **Bahasa Isyarat Indonesia** menggunakan teknologi **MediaPipe Hands** dan **Web Speech API** dalam waktu real-time.

**Kelompok 2 Project** - Hand Gesture Recognition for Indonesian Sign Language Education

---

## 🎯 Fitur Utama

### 1. **Gesture Recognition Mode** (6 Gestur)
Deteksi gerakan tangan dasar untuk komunikasi sehari-hari:
- 🖐️ **All Open** → "Hai"
- 👌 **OK** → "Nama saya"
- ☝️ **Pointing Index** → "Saya"
- 🤙 **Pointing Pinky** → "Halo"
- ✌️ **Peace** → "Terima kasih"
- 🤘 **Metal** → "Senang bertemu denganmu"

### 2. **Alphabet Detection Mode** (A-Z, 0-9)
Belajar dan practik semua huruf alphabet dan angka:
- **26 Huruf**: A-Z dengan gesture unik untuk setiap huruf
- **10 Angka**: 0-9 dengan gesture angka
- **Learn Mode**: Tutorial interaktif cara membuat setiap gesture
- **Practice Mode**: Latihan dengan statistik real-time

### 3. **Real-Time Statistics Dashboard**
Tracking progress pembelajaran dengan:
- 📊 Total deteksi dan akurasi
- 🎯 Daftar achievement badges (7 total)
- 📈 Statistik per gesture
- ⏱️ Session time tracking

### 4. **User Experience**
- 📱 **Responsive Design**: Bekerja di desktop & mobile
- 🎨 **Modern UI**: Tema blue-green yang profesional
- 🔊 **Text-to-Speech**: Pengucapan dalam Bahasa Indonesia
- ⏱️ **Real-time Sync**: Data tersimpan otomatis via localStorage
- 📱 **Dual Hand Support**: Deteksi 2 tangan simultan

---

## 📦 Teknologi

| Komponen | Teknologi |
|----------|-----------|
| **Gesture Detection** | MediaPipe Hands (v0.3) |
| **Web Camera** | HTML5 Camera API |
| **Text-to-Speech** | Web Speech API (Bahasa Indonesia) |
| **Frontend** | HTML5 + CSS3 + Vanilla JavaScript |
| **Persistence** | localStorage (JSON) |
| **Deployment** | GitHub Pages (Static) |

---

## 🚀 Quick Start

### 1. **Online** (GitHub Pages)
Buka langsung di browser: [https://github.com/[username]/gesture-recognition-kelompok-2](https://github.com)

### 2. **Lokal** (Development)

#### Requirements:
- Web browser dengan Camera support (Chrome, Firefox, Edge)
- Internet connection (untuk MediaPipe CDN)
- Port yang tersedia

#### Setup:
```bash
# 1. Clone atau download repository
cd gesture-landing

# 2. Buka dengan Live Server
# Option A: Gunakan VS Code Live Server Extension
#   → Right-click index.html → "Open with Live Server"

# Option B: Gunakan Python
python -m http.server 8000

# Option C: Gunakan Node.js
npx http-server

# 3. Akses di browser
http://localhost:5500 (Live Server)
# atau
http://localhost:8000 (Python)
```

---

## 📖 Cara Menggunakan

### Mode 1: Gesture Recognition
1. Klik tombol "🔄 Mode Gesture"
2. Klik "▶ Mulai Kamera"
3. Tunjukkan salah satu dari 6 gesture
4. Sistem akan mendeteksi dan mengucapkan hasilnya
5. Klik "⏹ Matikan Kamera" untuk berhenti

### Mode 2: Alphabet Learning
1. Klik tombol "📚 Mode Alphabet"
2. Pilih "▶ Mulai Kamera"
3. **Learn Mode** (default):
   - Klik salah satu huruf/angka
   - Lihat instruksi cara membuat gesture
   - Coba posisikan tangan sesuai contoh
4. **Practice Mode**:
   - Klik tombol "🎯 Mode Latihan"
   - Sistem akan memberi target gesture
   - Tunjukkan gesture dengan akurat
   - Lihat statistik real-time
5. Klik "⏹ Matikan Kamera" untuk berhenti

### Dashboard
1. Klik tombol "📊 Dashboard" di header
2. Lihat statistik pembelajaran:
   - Total deteksi
   - Akurasi rata-rata
   - Waktu belajar
   - Achievement badges
   - Progress per gesture
3. Klik "🔄 Reset" untuk mulai dari awal

---

## 🎖️ Achievement Badges

Dapatkan badges dengan mencapai target:

| Badge | Target | Syarat |
|-------|--------|--------|
| 🎯 First Step | Mulai belajar | 1+ deteksi |
| 🔟 Starter | Pemula | 10+ deteksi |
| 50️⃣ Practitioner | Terlatih | 50+ deteksi |
| 💯 Master | Ahli | 100+ deteksi |
| ⭐ Perfectionist | Sempurna | 100% akurasi |
| 5️⃣ Learning Curve | Variasi | 5+ tipe gesture |
| 🎖️ Alphabet Master | Lengkap | 26+ gesture berbeda |

---

## 📊 Deteksi Gesture

### Gesture Mode (6 gestur)
```
OK (👌)              → Jempol + Telunjuk menyentuh
Peace (✌️)           → Telunjuk + Jari tengah membuka V
Metal (🤘)           → Jari tengah + Kelingking terbuka
All Open (🖐️)       → Semua jari terbuka
Pointing Index (☝️) → Hanya telunjuk
Pointing Pinky (🤙) → Hanya kelingking
```

### Alphabet Mode (A-Z)
Setiap huruf memiliki gesture unik:
- **A**: Tangan tertutup, jempol terbuka
- **B**: Semua jari terbuka
- **C**: Jari membentuk C
- **D**: Hanya telunjuk
- **E**: Semua jari spread
- ... dan seterusnya hingga **Z**

---

## 🔧 Struktur File

```
gesture-landing/
├── index.html          # Aplikasi utama (1800+ lines)
├── dashboard.html      # Statistics dashboard
├── README.md           # Dokumentasi (file ini)
├── .gitignore         # Git ignore rules
└── (storage via localStorage)
```

### Storage Schema (localStorage)
```json
{
  "gestureStats": {
    "totalDetections": 45,
    "successfulDetections": 42,
    "sessionTime": 1200,
    "gestureProgress": {
      "A": 5,
      "B": 3,
      "OK": 10,
      ...
    },
    "achievements": ["first_step", "starter"]
  }
}
```

---

## ⚙️ Konfigurasi

### MediaPipe Settings
File: `index.html` (JavaScript)
```javascript
// Gesture Mode
gestureHands.setOptions({
    maxNumHands: 1,
    modelComplexity: 0,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});

// Alphabet Mode
alphabetHands.setOptions({
    maxNumHands: 2,        // Dual hand support
    modelComplexity: 0,    // Fast mode
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});
```

### Web Speech Settings
```javascript
utterance.lang = 'id-ID';     // Bahasa Indonesia
utterance.rate = 0.9;         // Kecepatan normal
utterance.pitch = 1.0;        // Pitch default
utterance.volume = 1.0;       // Volume penuh
```

---

## 📱 Compatibility

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome | ✅ | ✅ |
| Firefox | ✅ | ✅ |
| Safari | ⚠️ | ⚠️ |
| Edge | ✅ | ✅ |

**Note**: Safari memiliki limited Camera API support. Gunakan Chrome/Firefox untuk best experience.

---

## 🐛 Troubleshooting

### "Kamera tidak bisa diakses"
- ✅ Izinkan akses camera saat diminta browser
- ✅ Pastikan kamera tidak digunakan aplikasi lain
- ✅ Buka hanya satu tab aplikasi ini
- ✅ Reload halaman jika perlu

### "Gesture tidak terdeteksi"
- ✅ Pastikan tangan dalam frame (video area)
- ✅ Pencahayaan cukup terang
- ✅ Posisikan tangan sesuai instruksi
- ✅ Ubah jarak tangan dari kamera (40-60cm ideal)

### "Dashboard tidak update"
- ✅ Buka kedua tab: index.html dan dashboard.html
- ✅ Tunggu 2 detik untuk sync otomatis
- ✅ Reload halaman dashboard
- ✅ Clear localStorage (reset data)

### "Text-to-Speech tidak bekerja"
- ✅ Pastikan volume browser tidak mute
- ✅ Cek settings bahasa browser → set ke Indonesia
- ✅ Gunakan browser yang mendukung (Chrome/Firefox)

---

## 📈 Performance

- **Detection Latency**: ~100ms (real-time)
- **Frame Rate**: 30 FPS (WebRTC)
- **Memory**: ~50MB per tab
- **Network**: Hanya saat loading (CDN MediaPipe)

---

## 🚢 Deployment ke GitHub Pages

### Step 1: Buat Repository
```bash
# Di GitHub: Create new repository "gesture-recognition-kelompok-2"
```

### Step 2: Setup Lokal
```bash
cd gesture-landing
git init
git add .
git commit -m "Initial commit: Gesture Recognition App"
git branch -M main
git remote add origin https://github.com/[username]/gesture-recognition-kelompok-2.git
git push -u origin main
```

### Step 3: Enable Pages
- Buka repository di GitHub
- Settings → Pages
- Source: main branch
- Save

### Step 4: Akses
- URL: `[https://[tokiooferius].github.io/gesture-recognition-kelompok-2/`](https://tokiooferius.github.io/gesture-landing/)

---

## 👥 Kontribusi & Tim

**Kelompok 2**
- Anggota 1
- Anggota 2
- Anggota 3

---

## 📝 Lisensi

Project ini dibuat untuk keperluan pendidikan Bahasa Isyarat.

---

## 🎓 Referensi

- [MediaPipe Hands Documentation](https://google.github.io/mediapipe/solutions/hands)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [HTML5 Camera API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)

---

## 📞 Support

Jika ada pertanyaan atau issue:
1. Buka [Issues](https://github.com) di GitHub
2. Jelaskan masalah dengan screenshot/video
3. Sertakan: Browser, OS, Steps untuk reproduce

---

**Made with ❤️ for Indonesian Sign Language Education**
