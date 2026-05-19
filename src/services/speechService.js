/**
 * Speech Synthesis Service - GestureFlow
 * Handle semua text-to-speech functionality
 */

export class SpeechSynthesisService {
    constructor() {
        this.synth = window.speechSynthesis;
        this.isSpeaking = false;
        this.isPaused = false;
        this.currentUtterance = null;
        this.rate = 1;
        this.volume = 1;
        this.pitch = 1;
        this.voice = null;
        this.lang = 'id-ID';
        
        this.initializeVoices();
    }

    /**
     * Initialize available voices
     */
    initializeVoices() {
        if (this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = () => {
                this.voices = this.synth.getVoices();
                this.selectBestVoice();
            };
        }
        this.voices = this.synth.getVoices();
        this.selectBestVoice();
    }

    /**
     * Select best voice for Indonesian
     */
    selectBestVoice() {
        const indonesianVoices = this.voices.filter(voice => 
            voice.lang.startsWith('id') || voice.lang.startsWith('id-ID')
        );
        
        if (indonesianVoices.length > 0) {
            this.voice = indonesianVoices[0];
        } else {
            // Fallback ke voice yang tersedia
            this.voice = this.voices.find(v => v.default) || this.voices[0];
        }
    }

    /**
     * Speak text
     */
    speak(text, options = {}) {
        return new Promise((resolve, reject) => {
            try {
                // Cancel any ongoing speech
                this.synth.cancel();

                const utterance = new SpeechSynthesisUtterance(text);
                
                // Apply options
                utterance.voice = options.voice || this.voice;
                utterance.rate = options.rate || this.rate;
                utterance.pitch = options.pitch || this.pitch;
                utterance.volume = options.volume || this.volume;
                utterance.lang = options.lang || this.lang;

                // Events
                utterance.onstart = () => {
                    this.isSpeaking = true;
                    this.isPaused = false;
                    this.currentUtterance = utterance;
                };

                utterance.onend = () => {
                    this.isSpeaking = false;
                    this.isPaused = false;
                    this.currentUtterance = null;
                    resolve();
                };

                utterance.onerror = (error) => {
                    this.isSpeaking = false;
                    this.isPaused = false;
                    reject(new Error(`Speech error: ${error.error}`));
                };

                utterance.onpause = () => {
                    this.isPaused = true;
                };

                utterance.onresume = () => {
                    this.isPaused = false;
                };

                this.synth.speak(utterance);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Stop speaking
     */
    stop() {
        this.synth.cancel();
        this.isSpeaking = false;
        this.isPaused = false;
        this.currentUtterance = null;
    }

    /**
     * Pause speaking
     */
    pause() {
        if (this.isSpeaking && !this.isPaused) {
            this.synth.pause();
            this.isPaused = true;
        }
    }

    /**
     * Resume speaking
     */
    resume() {
        if (this.isSpeaking && this.isPaused) {
            this.synth.resume();
            this.isPaused = false;
        }
    }

    /**
     * Set speech rate (0.1 - 10)
     */
    setRate(rate) {
        this.rate = Math.max(0.1, Math.min(10, rate));
    }

    /**
     * Set speech volume (0 - 1)
     */
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
    }

    /**
     * Set speech pitch (0 - 2)
     */
    setPitch(pitch) {
        this.pitch = Math.max(0, Math.min(2, pitch));
    }

    /**
     * Get available voices
     */
    getVoices() {
        return this.synth.getVoices();
    }

    /**
     * Get Indonesian voices
     */
    getIndonesianVoices() {
        return this.voices.filter(voice => voice.lang.startsWith('id'));
    }
}

/**
 * Speech Recognition Service - GestureFlow
 * Handle speech-to-text functionality
 */
export class SpeechRecognitionService {
    constructor() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.isListening = false;
        this.transcript = '';
        this.isFinal = false;
        this.lang = 'id-ID';
        
        this.setupRecognition();
    }

    /**
     * Setup recognition events
     */
    setupRecognition() {
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.language = this.lang;

        this.recognition.onstart = () => {
            this.isListening = true;
            this.transcript = '';
        };

        this.recognition.onresult = (event) => {
            this.transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                this.transcript += transcript;
            }
            this.isFinal = event.results[event.results.length - 1].isFinal;
        };

        this.recognition.onend = () => {
            this.isListening = false;
        };

        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
        };
    }

    /**
     * Start listening
     */
    start() {
        if (!this.isListening) {
            this.transcript = '';
            this.recognition.start();
        }
    }

    /**
     * Stop listening
     */
    stop() {
        if (this.isListening) {
            this.recognition.stop();
        }
    }

    /**
     * Abort listening
     */
    abort() {
        this.recognition.abort();
        this.isListening = false;
    }

    /**
     * Set language
     */
    setLanguage(lang) {
        this.lang = lang;
        this.recognition.language = lang;
    }

    /**
     * Get transcript
     */
    getTranscript() {
        return this.transcript;
    }
}

export default {
    SpeechSynthesisService,
    SpeechRecognitionService
};
