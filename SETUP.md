# 📖 GestureFlow - Panduan Pengembangan & Setup

## Daftar Isi
1. [Pengenalan](#pengenalan)
2. [Struktur Proyek](#struktur-proyek)
3. [Setup Lokal](#setup-lokal)
4. [Arsitektur](#arsitektur)
5. [Panduan Pengembangan](#panduan-pengembangan)
6. [Fitur & Implementasi](#fitur--implementasi)
7. [Deploy](#deploy)

---

## Pengenalan

**GestureFlow** adalah aplikasi gesture recognition modern berbasis AI untuk membantu komunikasi dan pembelajaran bahasa isyarat Indonesia. Dibangun dengan:

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: TailwindCSS
- **AI/ML**: MediaPipe Hands, TensorFlow.js (ready)
- **Persistence**: localStorage, IndexedDB
- **PWA**: Service Worker, Manifest.json
- **Data Viz**: Chart.js

### Fitur Utama
- 🎯 Real-time gesture detection
- 🔄 Gesture ↔ Text translation
- 🔊 Text-to-speech synthesis
- 📚 Interactive learning mode
- 📊 Advanced analytics dashboard
- 🎖️ Gamification (achievements, XP, levels)
- 📱 Fully responsive
- 🌐 PWA (installable, offline-ready)

---

## Struktur Proyek

```
gesture-landing/
├── landing.html              # Landing page
├── app.html                  # Main application
├── manifest.json             # PWA manifest
├── sw.js                     # Service worker
├── README.md                 # Project documentation
├── SETUP.md                  # Setup guide (this file)
│
├── src/
│   ├── components/
│   │   └── uiComponents.js   # Reusable UI components
│   │
│   ├── services/
│   │   ├── speechService.js       # Text-to-speech & speech recognition
│   │   ├── gestureService.js      # Gesture detection & classification
│   │   └── storageService.js      # Data persistence
│   │
│   ├── utils/
│   │   └── helpers.js        # Utility functions
│   │
│   ├── data/
│   │   ├── gestureLibrary.js # Gesture definitions
│   │   └── achievements.js   # Achievement definitions
│   │
│   ├── models/
│   │   └── (ready for TensorFlow models)
│   │
│   └── styles/
│       └── (ready for custom CSS)
│
└── public/
    └── (ready for static assets)
```

---

## Setup Lokal

### Prasyarat
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Text editor atau IDE (VS Code recommended)
- Server lokal (untuk development)

### Langkah-Langkah

#### 1. Clone Repository
```bash
git clone https://github.com/tokiooferius/gesture-landing.git
cd gesture-landing
```

#### 2. Jalankan Local Server

**Opsi A: Menggunakan Python**
```bash
python -m http.server 8000
# Buka http://localhost:8000
```

**Opsi B: Menggunakan Node.js**
```bash
npm install -g http-server
http-server
# Buka http://localhost:8080
```

**Opsi C: VS Code Live Server**
- Install "Live Server" extension
- Right-click `landing.html` → "Open with Live Server"

#### 3. Buka di Browser
- Landing page: `http://localhost:8000/landing.html`
- Main app: `http://localhost:8000/app.html`

---

## Arsitektur

### Layering Architecture

```
┌─────────────────────────────────────┐
│      UI Components Layer            │
│  (Buttons, Cards, Modals, etc)      │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│     Application Logic Layer         │
│  (Mode switching, State management) │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│      Services Layer                 │
│  (Speech, Gesture, Storage)         │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│      Data & Utils Layer             │
│  (Helpers, Data, Models)            │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│      Browser APIs                   │
│  (WebRTC, Speech API, MediaPipe)    │
└─────────────────────────────────────┘
```

### Data Flow

```
User Interaction
    ↓
UI Component (app.html)
    ↓
Application Logic (Mode Manager)
    ↓
Services (Gesture/Speech/Storage)
    ↓
Browser APIs (WebRTC, Speech, LocalStorage)
    ↓
Data Storage & Processing
    ↓
Update UI with Results
```

---

## Panduan Pengembangan

### Menambah Mode Baru

1. **Tambah HTML Container** di `app.html`:
```html
<div id="newMode" class="space-y-6 hidden">
    <!-- Mode content -->
</div>
```

2. **Tambah Mode Button**:
```html
<button class="mode-btn" data-mode="newmode">New Mode</button>
```

3. **Implement Mode Handler** di script:
```javascript
function initializeNewMode() {
    // Your implementation
}

document.querySelector('[data-mode="newmode"]').addEventListener('click', () => {
    switchMode('newmode');
    initializeNewMode();
});
```

### Menambah UI Component

1. **Buat Component** di `src/components/uiComponents.js`:
```javascript
export function createCustomComponent(options = {}) {
    const element = document.createElement('div');
    // Implementation
    return element;
}
```

2. **Gunakan di app**:
```javascript
import { createCustomComponent } from './src/components/uiComponents.js';

const component = createCustomComponent({ /* options */ });
document.querySelector('#container').appendChild(component);
```

### Menambah Service Baru

1. **Buat Service** di `src/services/newService.js`:
```javascript
export class NewService {
    constructor() {
        // Initialize
    }
    
    async initialize() {
        // Setup
    }
    
    async doSomething() {
        // Implementation
    }
}
```

2. **Gunakan di app**:
```javascript
import { NewService } from './src/services/newService.js';

const service = new NewService();
await service.initialize();
```

### State Management

State aplikasi disimpan di `appState` object:
```javascript
let appState = {
    currentMode: 'gesture',
    isDetecting: false,
    frameCount: 0,
    currentGesture: null,
    sentenceBuffer: [],
    recentDetections: [],
    detectionHistory: []
};
```

Update state kapan saja:
```javascript
appState.currentGesture = gesture;
appState.sentenceBuffer.push(word);
```

---

## Fitur & Implementasi

### 1. Gesture Detection
- **File**: `src/services/gestureService.js`
- **Uses**: MediaPipe Hands
- **Features**: Real-time detection, confidence scoring, gesture smoothing

### 2. Text-to-Speech
- **File**: `src/services/speechService.js`
- **Uses**: Web Speech API
- **Features**: Rate/pitch/volume control, voice selection

### 3. Storage & Data
- **File**: `src/services/storageService.js`
- **Uses**: localStorage
- **Features**: Stats tracking, history, export/import, data sync

### 4. UI Components
- **File**: `src/components/uiComponents.js`
- **Components**: Button, Card, Modal, Toast, ProgressBar, Badge, etc.

### 5. Gesture Library
- **File**: `src/data/gestureLibrary.js`
- **Contains**: 35+ gesture definitions with translations

### 6. Achievements
- **File**: `src/data/achievements.js`
- **Contains**: 12 achievement types with conditions

---

## Deploy

### Deploy ke GitHub Pages

1. **Setup GitHub Repository**
```bash
git remote set-url origin https://github.com/USERNAME/gesture-landing.git
git branch -M main
git push -u origin main
```

2. **Enable GitHub Pages**
- Go to Repository Settings
- Go to Pages
- Select "Deploy from a branch"
- Select `main` branch
- Save

3. **Access Live Site**
```
https://USERNAME.github.io/gesture-landing/
```

### Deploy ke Vercel (Recommended)

1. **Connect Repository**
```bash
npm i -g vercel
vercel
```

2. **Configure**
- Select project
- Accept defaults
- Deploy

### Deploy ke Netlify

1. **Connect GitHub**
- Go to netlify.com
- Click "New site from Git"
- Select repository
- Deploy

---

## Performance Tips

### Optimization
```javascript
// Debounce heavy operations
const debouncedDetection = AnimationUtils.debounce(detection, 300);

// Throttle frequent events
const throttledUpdate = AnimationUtils.throttle(update, 100);

// Use requestAnimationFrame
requestAnimationFrame(() => {
    // Smooth animations
});

// Cache expensive calculations
const memoizedGesture = gesture || cachedGesture;
```

### Browser DevTools
- **Performance**: Analyze FPS and frame time
- **Network**: Check asset loading
- **Storage**: Monitor localStorage usage
- **Service Worker**: Verify offline caching

---

## Debugging

### Console Logging
```javascript
console.log('✓ Service initialized');
console.error('✗ Error occurred');
console.warn('⚠ Warning');
console.time('operation');
// ... code
console.timeEnd('operation');
```

### Service Worker Debugging
```javascript
// In browser console:
navigator.serviceWorker.getRegistrations()
    .then(regs => console.log('Service Workers:', regs));

// Check cache:
caches.keys().then(names => console.log('Caches:', names));
```

### Storage Debugging
```javascript
// View localStorage:
console.log(localStorage);

// Export data:
const data = JSON.stringify(localStorage);
```

---

## Troubleshooting

### Camera tidak berfungsi
- [ ] Izinkan akses kamera di browser
- [ ] Periksa browser support (Chrome, Firefox, Edge)
- [ ] Cek HTTPS (required untuk getUserMedia)
- [ ] Restart browser

### Gesture tidak terdeteksi
- [ ] Periksa pencahayaan
- [ ] Tangan dalam view video
- [ ] Adjust detection threshold di settings
- [ ] Cek confidence score

### Speech tidak jalan
- [ ] Enable Web Speech API di browser
- [ ] Periksa volume sistem
- [ ] Pilih voice yang tersedia
- [ ] Test di https://webrtc.github.io/samples/

### PWA tidak install
- [ ] HTTPS required
- [ ] manifest.json valid
- [ ] Service worker registered
- [ ] Icons accessible

---

## Kontribusi

Untuk berkontribusi:

1. Fork repository
2. Buat feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## License

Proyek ini dibuat untuk keperluan pendidikan dan aksesibilitas. 
Open source dan gratis untuk semua.

---

## Resources

- [MediaPipe Hands Documentation](https://google.github.io/mediapipe/solutions/hands)
- [Web Speech API](https://w3c.github.io/speech-api/)
- [TensorFlow.js](https://www.tensorflow.org/js)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [TailwindCSS](https://tailwindcss.com)

---

**Happy coding! 🚀**

Untuk pertanyaan atau issues, buat di GitHub Issues.
