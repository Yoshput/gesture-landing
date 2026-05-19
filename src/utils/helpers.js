/**
 * Utility Functions - GestureFlow
 * Helper functions untuk berbagai keperluan aplikasi
 */

// ============ STORAGE UTILS ============
export const StorageManager = {
    /**
     * Save data to localStorage with compression
     */
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },

    /**
     * Get data from localStorage
     */
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Storage error:', e);
            return defaultValue;
        }
    },

    /**
     * Remove item from localStorage
     */
    remove(key) {
        localStorage.removeItem(key);
    },

    /**
     * Clear all localStorage
     */
    clear() {
        localStorage.clear();
    }
};

// ============ ANIMATION UTILS ============
export const AnimationUtils = {
    /**
     * Debounce function untuk performance
     */
    debounce(func, delay = 300) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    },

    /**
     * Throttle function untuk frequent events
     */
    throttle(func, limit = 100) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Smooth scroll animation
     */
    smoothScroll(target, duration = 500) {
        const element = typeof target === 'string' ? document.querySelector(target) : target;
        if (!element) return;

        const start = window.scrollY;
        const end = element.offsetTop;
        const distance = end - start;
        let current = 0;

        const timer = setInterval(() => {
            current += distance / (duration / 16);
            if (
                (distance > 0 && current >= distance) ||
                (distance < 0 && current <= distance)
            ) {
                window.scrollTo(0, end);
                clearInterval(timer);
            } else {
                window.scrollTo(0, start + current);
            }
        }, 16);
    }
};

// ============ GESTURE UTILS ============
export const GestureUtils = {
    /**
     * Calculate distance between two points
     */
    distance(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.sqrt(dx * dx + dy * dy);
    },

    /**
     * Calculate angle between two points
     */
    angle(p1, p2) {
        return Math.atan2(p2.y - p1.y, p2.x - p1.x);
    },

    /**
     * Check if hand is open (all fingers extended)
     */
    isHandOpen(landmarks) {
        if (!landmarks || landmarks.length < 21) return false;
        // Simplified: check if all finger tips are above palm
        return landmarks[4].y < landmarks[2].y && // Thumb
               landmarks[8].y < landmarks[6].y && // Index
               landmarks[12].y < landmarks[10].y && // Middle
               landmarks[16].y < landmarks[14].y && // Ring
               landmarks[20].y < landmarks[18].y; // Pinky
    },

    /**
     * Check if hand is closed (fist)
     */
    isHandClosed(landmarks) {
        if (!landmarks || landmarks.length < 21) return false;
        return !this.isHandOpen(landmarks);
    },

    /**
     * Normalize landmarks to 0-1 range
     */
    normalizeLandmarks(landmarks) {
        if (!landmarks || landmarks.length === 0) return [];
        
        const xs = landmarks.map(l => l.x);
        const ys = landmarks.map(l => l.y);
        
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);
        
        const rangeX = maxX - minX;
        const rangeY = maxY - minY;
        
        return landmarks.map(l => ({
            x: rangeX > 0 ? (l.x - minX) / rangeX : 0.5,
            y: rangeY > 0 ? (l.y - minY) / rangeY : 0.5,
            z: l.z || 0
        }));
    }
};

// ============ NUMBER & STRING UTILS ============
export const StringUtils = {
    /**
     * Capitalize first letter
     */
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    /**
     * Slugify string
     */
    slugify(str) {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_]+/g, '-')
            .replace(/^-+|-+$/g, '');
    },

    /**
     * Format time HH:MM:SS
     */
    formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    },

    /**
     * Format number with separators
     */
    formatNumber(num) {
        return num.toLocaleString('id-ID');
    }
};

// ============ DOM UTILS ============
export const DOMUtils = {
    /**
     * Create element with attributes
     */
    createElement(tag, attrs = {}, classes = []) {
        const el = document.createElement(tag);
        Object.entries(attrs).forEach(([key, value]) => {
            if (key === 'text') {
                el.textContent = value;
            } else {
                el.setAttribute(key, value);
            }
        });
        el.classList.add(...classes);
        return el;
    },

    /**
     * Show toast notification
     */
    showToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        const bgColor = {
            success: 'bg-green-500',
            error: 'bg-red-500',
            warning: 'bg-yellow-500',
            info: 'bg-blue-500'
        }[type] || 'bg-blue-500';

        toast.className = `fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg animate-fadeIn`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, duration);
    },

    /**
     * Toggle fullscreen
     */
    toggleFullscreen(element) {
        if (!document.fullscreenElement) {
            element.requestFullscreen().catch(err => {
                console.error(`Error: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }
};

// ============ TIME UTILS ============
export const TimeUtils = {
    /**
     * Get current timestamp
     */
    now() {
        return Date.now();
    },

    /**
     * Format date to readable string
     */
    formatDate(date) {
        return new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    },

    /**
     * Get time difference in minutes
     */
    getTimeDifferenceMinutes(start, end) {
        return Math.floor((end - start) / 60000);
    }
};

// ============ MATH UTILS ============
export const MathUtils = {
    /**
     * Clamp value between min and max
     */
    clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    },

    /**
     * Map value from one range to another
     */
    map(value, min1, max1, min2, max2) {
        return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
    },

    /**
     * Get random number between min and max
     */
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Calculate average
     */
    average(numbers) {
        return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    }
};

// ============ VALIDATION UTILS ============
export const ValidationUtils = {
    /**
     * Validate if browser supports getUserMedia
     */
    supportsCameraAPI() {
        return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    },

    /**
     * Validate if browser supports Web Speech API
     */
    supportsSpeechAPI() {
        return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    },

    /**
     * Validate if browser supports speech synthesis
     */
    supportsSpeechSynthesis() {
        return !!window.speechSynthesis;
    },

    /**
     * Validate if browser supports fullscreen
     */
    supportsFullscreen() {
        return !!(document.fullscreenEnabled || document.mozFullScreenEnabled || 
                  document.webkitFullscreenEnabled || document.msFullscreenEnabled);
    }
};

// ============ DEVICE UTILS ============
export const DeviceUtils = {
    /**
     * Check if device is mobile
     */
    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    /**
     * Check if device is tablet
     */
    isTablet() {
        return /iPad|Android/.test(navigator.userAgent);
    },

    /**
     * Get device orientation
     */
    getOrientation() {
        return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    },

    /**
     * Vibrate device
     */
    vibrate(pattern = 100) {
        if (navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    }
};

export default {
    StorageManager,
    AnimationUtils,
    GestureUtils,
    StringUtils,
    DOMUtils,
    TimeUtils,
    MathUtils,
    ValidationUtils,
    DeviceUtils
};
