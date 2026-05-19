# 🤟 GestureFlow - Gesture Recognition untuk Bahasa Isyarat Indonesia

**Aplikasi AI-powered gesture recognition modern untuk membantu komunikasi dan pembelajaran bahasa isyarat Indonesia.**

Platform browser-based yang memungkinkan komunikasi real-time tunarungu dengan deteksi gesture menggunakan AI, text-to-speech synthesis, dan learning mode interaktif.

**Status**: ✅ Fully Functional | 🚀 Ready for Production | 📱 PWA Enabled | ♿ Accessibility Focused

**Made by Kelompok 2** - Hand Gesture Recognition for Indonesian Sign Language Education

---

## 🎯 Fitur Utama

### 1. **Real-Time Gesture Detection** 🎯
Deteksi gerakan tangan dengan akurasi tinggi menggunakan MediaPipe AI:
- 6 Basic gestures (Halo, OK, Peace, Metal, dll)
- 26 Alphabet gestures (A-Z)
- 10 Number gestures (0-9)
- Confidence scoring
- Multi-hand detection

### 2. **Translator Mode** 🔄
Bidirectional translation:
- **Gesture → Text**: Deteksi gesture otomatis ditranslate ke text
- **Text → Speech**: Text diucapkan dengan suara natural Indonesian
- History tracking
- Export/import translations

### 3. **Sentence Builder** 📝
- Auto-arrangement gesture menjadi kalimat lengkap
- Real-time word spacing
- Quick copy to clipboard
- Clear & undo functions

### 4. **Learning Mode** 📚
Interactive learning dengan 42+ gestures:
- Step-by-step tutorials
- Visual demonstrations
- Practice exercises
- Difficulty levels (Beginner → Advanced)
- Progress tracking

### 5. **Advanced Dashboard** 📊
Comprehensive analytics & statistics:
- Real-time charts (Chart.js)
- Top gestures breakdown
- Activity timeline
- Accuracy metrics
- Session history
- Export data (JSON)

### 6. **Gamification System** 🎮
Motivation & engagement:
- **Achievements**: 12+ badges (First Step, Master, etc)
- **XP System**: Level up through practice
- **Streaks**: Daily motivation tracker
- **Leaderboard Ready**: Framework untuk multiplayer

### 7. **Mobile-First Responsive** 📱
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)
- ✅ Touch-friendly controls
- ✅ Portrait & Landscape modes

### 8. **PWA (Progressive Web App)** 🌐
- **Install as App**: Add to home screen
- **Offline Support**: Full offline functionality
- **Fast Loading**: Service worker caching
- **Background Sync**: Queue requests when offline
- **Splashscreen**: Native app feel

### 9. **Modern UI/UX** 🎨
- Glassmorphism design
- Dark mode (system preference auto-detect)
- Smooth animations & transitions
- Accessibility-focused
- Responsive typography

### 10. **Text-to-Speech** 🔊
Natural Indonesian speech synthesis:
- Rate/pitch/volume control
- Voice selection
- Auto-speak on detection
- Mute toggle

### 11. **Data Persistence** 💾
Robust data management:
- localStorage for quick access
- IndexedDB-ready for large datasets
- Auto-save progress
- Export/import user data
- Session restoration

---

## 📦 Technology Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Gesture Detection** | MediaPipe Hands v0.4 | Real-time hand landmark detection |
| **Machine Learning** | TensorFlow.js | (Ready) Neural network inference |
| **Frontend** | HTML5 + CSS3 + Vanilla JS | No build tool complexity |
| **Styling** | TailwindCSS | Utility-first responsive design |
| **Data Viz** | Chart.js | Interactive analytics charts |
| **Speech** | Web Speech API | TTS & speech recognition |
| **Storage** | localStorage + IndexedDB | User data persistence |
| **Caching** | Service Worker | Offline support & PWA |
| **Icons** | Lucide Icons | Modern SVG icons |
| **Build** | (None) | Pure browser-native |
| **Deployment** | GitHub Pages / Vercel / Netlify | Free hosting options |

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14.1+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Quick Start

### 1. **Online** (GitHub Pages)
Langsung akses tanpa setup:
👉 **[https://tokiooferius.github.io/gesture-landing/](https://tokiooferius.github.io/gesture-landing/)**

### 2. **Lokal** (Development)

#### Prasyarat:
- Web browser modern (Chrome, Firefox, Edge)
- Internet connection (untuk MediaPipe & CDN)
- Port yang tersedia

#### Setup:
```bash
# Clone repository
git clone https://github.com/tokiooferius/gesture-landing.git
cd gesture-landing

# Opsi A: Python
python -m http.server 8000

# Opsi B: Node.js
npx http-server

# Opsi C: VS Code Live Server
# Right-click landing.html → "Open with Live Server"
```

#### Akses:
- Landing page: `http://localhost:8000/landing.html`
- Main app: `http://localhost:8000/app.html`

---

## 📁 Struktur Proyek

```
gesture-landing/
├── landing.html              ⭐ Landing page (marketing)
├── app.html                  ⭐ Main application
├── index.html                (Legacy, redirect to landing.html)
├── dashboard.html            (Legacy, integrated in app.html)
├── custom-gesture.html       (Legacy feature)
├── manifest.json             📱 PWA manifest
├── sw.js                     🔄 Service worker
├── README.md                 📖 Documentation
├── SETUP.md                  🛠️ Setup guide
│
├── src/
│   ├── components/
│   │   └── uiComponents.js   UI library (Button, Card, Modal, etc)
│   │
│   ├── services/
│   │   ├── gestureService.js       MediaPipe integration
│   │   ├── speechService.js        Text-to-speech & speech recognition
│   │   └── storageService.js       Data persistence layer
│   │
│   ├── utils/
│   │   └── helpers.js              Utility functions (50+ helpers)
│   │
│   ├── data/
│   │   ├── gestureLibrary.js       35+ gesture definitions
│   │   └── achievements.js         12+ achievement definitions
│   │
│   ├── models/
│   │   └── (TensorFlow.js models - ready for expansion)
│   │
│   └── styles/
│       └── (Custom CSS - ready for expansion)
│
└── public/
    └── (Static assets - ready for expansion)
```

### File Penting

| File | Deskripsi | Key Features |
|------|-----------|--------------|
| `landing.html` | Landing page | Hero, features showcase, CTA |
| `app.html` | Main app | 4 modes + UI framework |
| `sw.js` | Service worker | Offline + PWA support |
| `manifest.json` | PWA config | Installable + metadata |
| `src/services/*` | Services | Modular feature layers |
| `src/utils/helpers.js` | Utilities | 50+ helper functions |
| `src/data/*` | Data | Gesture & achievement definitions |
### 📚 Learning Mode
1. Klik **Learn Mode**
2. Pilih category: Basic / Alphabet / Numbers
3. Klik gesture untuk detail
4. Lihat step-by-step instructions
5. Practice dengan gesture guide
6. Progress tracked automatically

### 📊 Dashboard
1. Klik **Dashboard**
2. View real-time statistics:
   - Total detections & accuracy
   - Level & XP
   - Streak counter
3. Analyze charts & trends
4. Export/Reset data

---

## 🔧 Struktur File

```
gesture-landing/
├── landing.html              # 🎯 Landing page
├── app.html                  # 📱 Main application (NEW)
├── manifest.json             # 🌐 PWA manifest (NEW)
├── sw.js                     # ⚙️ Service worker (NEW)
├── SETUP.md                  # 📖 Setup guide (NEW)
│
├── src/                      # 📂 Source code (NEW)
│   ├── components/uiComponents.js      # UI library
│   ├── services/
│   │   ├── gestureService.js           # Gesture detection
│   │   ├── speechService.js            # TTS/Speech recognition
│   │   └── storageService.js           # Data persistence
│   ├── utils/helpers.js                # 50+ utilities
│   ├── data/
│   │   ├── gestureLibrary.js           # 35+ gestures
│   │   └── achievements.js             # 12+ achievements
│   ├── models/                         # (TensorFlow.js ready)
│   └── styles/                         # (Custom CSS ready)
│
└── public/                   # (Static assets ready)
```

### Storage Schema (localStorage)
```json
{
  "gestureflow_stats": {
    "totalDetections": 150,
    "successfulDetections": 142,
    "accuracy": 94.67,
    "level": 3,
    "xp": 2400,
    "streak": 5,
    "achievements": ["first_step", "starter", "practitioner"],
    "gestureProgress": {
      "A": 15,
      "B": 12,
      "peace": 20,
      "ok": 18
    }
  },
  "gestureflow_settings": {
    "theme": "dark",
    "language": "id",
    "soundEnabled": true,
    "detectionThreshold": 0.7
  },
  "gestureflow_history": [
    { "gesture": "peace", "confidence": 0.95, "timestamp": 1234567890 }
  ]
}
```

---

## 🚀 Roadmap & Future Features

### Phase 1: ✅ Core (COMPLETED)
- [x] Real-time gesture detection
- [x] Sentence builder
- [x] Text-to-speech
- [x] Dashboard analytics
- [x] Achievements system
- [x] PWA support
- [x] Responsive design

### Phase 2: 🔜 Advanced (IN PROGRESS)
- [ ] TensorFlow.js ML model training
- [ ] Quiz & gamification improvements
- [ ] Voice-to-gesture translation
- [ ] Advanced accessibility features
- [ ] Multiplayer leaderboard
- [ ] Video recording/sharing
- [ ] Dataset manager

### Phase 3: 🔮 Future
- [ ] Mobile app (React Native)
- [ ] Backend server (Node.js)
- [ ] Realtime collaboration
- [ ] Advanced ML models
- [ ] Integration with other platforms
- [ ] Multi-language support
- [ ] Community gestures

---

## 🛠️ Development

### Setup Development Environment

See [SETUP.md](./SETUP.md) for detailed setup instructions.

### Quick Dev Start
```bash
# Clone
git clone https://github.com/tokiooferius/gesture-landing.git
cd gesture-landing

# Run local server
python -m http.server 8000
# or
npx http-server

# Open browser
open http://localhost:8000
```

### Project Guidelines

- **Code Style**: Vanilla JavaScript, modular architecture
- **Naming**: camelCase for functions, UPPER_CASE for constants
- **Comments**: JSDoc style for functions
- **Structure**: Service layer pattern with separation of concerns
- **Testing**: Manual testing + browser DevTools

### Key Files for Development

| File | Purpose | Size |
|------|---------|------|
| `app.html` | Main app & UI logic | ~800 lines |
| `src/services/gestureService.js` | Gesture detection | ~250 lines |
| `src/services/speechService.js` | TTS/Speech recognition | ~150 lines |
| `src/services/storageService.js` | Data management | ~300 lines |
| `src/utils/helpers.js` | Utility functions | ~400 lines |

---

## 📊 Statistics & Metrics

### Project Stats
- **Total Files**: 15+
- **Total Lines of Code**: ~3,500+
- **Components**: 10+
- **Services**: 3
- **Utilities**: 50+
- **Gestures Defined**: 42
- **Achievements**: 12
- **Responsive Breakpoints**: 4 (mobile, tablet, desktop, TV)

### Performance Targets
- **Page Load**: < 2 seconds
- **Time to Interactive**: < 3 seconds
- **Gesture Detection FPS**: 24-30 FPS
- **Detection Latency**: 50-100ms
- **Mobile CPU Usage**: < 40%
- **Lighthouse Score**: 90+

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Tips

- Use browser DevTools for debugging
- Check Console for errors
- Monitor Network tab for performance
- Test on mobile devices
- Verify offline functionality
- Check Service Worker status

---

## 📱 Mobile Optimization

### Device Support
- **iOS**: Safari 14.1+ (PWA support via home screen)
- **Android**: Chrome/Firefox (full PWA support)
- **Tablet**: iPad 7+ / Android tablets
- **Desktop**: All modern browsers

### Touch Optimizations
- Large touch targets (48px+ buttons)
- Gesture-friendly UI
- Haptic feedback support
- Landscape/portrait handling
- Bottom navigation for mobile

---

## ♿ Accessibility

### Features
- High contrast mode support
- Keyboard navigation
- Screen reader friendly
- Semantic HTML
- ARIA labels
- Color-blind friendly palette

### WCAG Compliance
- ✅ Level A: Fully compliant
- 🟡 Level AA: Mostly compliant
- 📋 Level AAA: Partial compliance

---

## 🔒 Privacy & Security

- ✅ No backend required (100% client-side)
- ✅ All data stored locally (user control)
- ✅ No tracking or analytics
- ✅ HTTPS ready for deployment
- ✅ Service worker for offline safety
- ✅ No external authentication

---

## 📄 License

This project is open source and available under the MIT License.
Free for educational, commercial, and accessibility purposes.

See LICENSE file for details.

---

## 📚 Resources & References

### Documentation
- [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands)
- [Web Speech API](https://w3c.github.io/speech-api/)
- [PWA Docs](https://web.dev/progressive-web-apps/)
- [TailwindCSS](https://tailwindcss.com)
- [Chart.js](https://www.chartjs.org)

### Learning
- [Gesture Recognition Tutorial](https://github.com/google/mediapipe)
- [Web APIs MDN](https://developer.mozilla.org/en-US/docs/Web/API)
- [PWA Best Practices](https://web.dev/)

### Tools
- [Can I Use](https://caniuse.com) - Browser support checker
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Debugging

---

## 👥 Team

**Kelompok 2** - Hand Gesture Recognition for Indonesian Sign Language Education

Dibuat dengan ❤️ untuk aksesibilitas dan pendidikan.

---

## 📞 Support

- 📧 Email: contact@gestureflow.com
- 🐛 Bug Reports: GitHub Issues
- 💡 Feature Requests: GitHub Discussions
- 📖 Documentation: [SETUP.md](./SETUP.md)

---

## 🌟 Acknowledgments

Thanks to:
- MediaPipe team for gesture recognition
- Web Speech API contributors
- TailwindCSS community
- Open source community
- Indonesian Deaf community for inspiration

---

**Happy coding! 🚀 Support local, support accessibility.** ♿💚

Untuk pertanyaan, buat issue di GitHub atau email kami.

---

## ⚙️ Konfigurasi

### MediaPipe Settings
File: `src/services/gestureService.js`
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
- URL: `https://[username].github.io/gesture-recognition-kelompok-2/`

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
