/**
 * Achievements Data - GestureFlow
 * Contains all achievement definitions
 */

export const ACHIEVEMENTS = {
    'first_step': {
        id: 'first_step',
        name: '🎯 First Step',
        description: 'Mulai belajar gesture',
        requirement: 'Lakukan 1 deteksi pertama',
        xpReward: 10,
        condition: (stats) => stats.totalDetections >= 1
    },
    'starter': {
        id: 'starter',
        name: '🔟 Starter',
        description: 'Pemula yang antusias',
        requirement: 'Lakukan 10 deteksi',
        xpReward: 25,
        condition: (stats) => stats.totalDetections >= 10
    },
    'practitioner': {
        id: 'practitioner',
        name: '50️⃣ Practitioner',
        description: 'Sudah terlatih dengan baik',
        requirement: 'Lakukan 50 deteksi',
        xpReward: 50,
        condition: (stats) => stats.totalDetections >= 50
    },
    'master': {
        id: 'master',
        name: '💯 Master',
        description: 'Ahli dalam gesture recognition',
        requirement: 'Lakukan 100 deteksi',
        xpReward: 100,
        condition: (stats) => stats.totalDetections >= 100
    },
    'perfectionist': {
        id: 'perfectionist',
        name: '⭐ Perfectionist',
        description: 'Akurasi sempurna',
        requirement: 'Capai 100% akurasi',
        xpReward: 150,
        condition: (stats) => stats.accuracy >= 100
    },
    'learning_curve': {
        id: 'learning_curve',
        name: '5️⃣ Learning Curve',
        description: 'Belajar berbagai jenis gesture',
        requirement: 'Kuasai 5+ tipe gesture berbeda',
        xpReward: 75,
        condition: (stats) => Object.keys(stats.gestureProgress).length >= 5
    },
    'alphabet_master': {
        id: 'alphabet_master',
        name: '🎖️ Alphabet Master',
        description: 'Menguasai semua huruf',
        requirement: 'Pelajari 26+ gesture berbeda',
        xpReward: 200,
        condition: (stats) => Object.keys(stats.gestureProgress).length >= 26
    },
    'speed_demon': {
        id: 'speed_demon',
        name: '⚡ Speed Demon',
        description: 'Deteksi super cepat',
        requirement: 'Lakukan 50 deteksi dalam 5 menit',
        xpReward: 60,
        condition: (stats) => false // Requires real-time tracking
    },
    'streak_warrior': {
        id: 'streak_warrior',
        name: '🔥 Streak Warrior',
        description: 'Streak 7 hari berturut-turut',
        requirement: 'Belajar 7 hari tanpa henti',
        xpReward: 100,
        condition: (stats) => stats.streak >= 7
    },
    'quiz_champion': {
        id: 'quiz_champion',
        name: '🏆 Quiz Champion',
        description: 'Juara kuis',
        requirement: 'Menang 10 kuis',
        xpReward: 80,
        condition: (stats) => stats.quizWins >= 10
    },
    'night_owl': {
        id: 'night_owl',
        name: '🌙 Night Owl',
        description: 'Belajar di malam hari',
        requirement: 'Belajar selama 1 jam di malam hari',
        xpReward: 30,
        condition: (stats) => false // Requires time tracking
    },
    'accessibility_advocate': {
        id: 'accessibility_advocate',
        name: '♿ Accessibility Advocate',
        description: 'Dukung aksesibilitas',
        requirement: 'Gunakan accessibility features',
        xpReward: 50,
        condition: (stats) => stats.accessibilityUsed === true
    }
};

/**
 * Get achievement by ID
 */
export function getAchievement(id) {
    return ACHIEVEMENTS[id] || null;
}

/**
 * Get all achievements
 */
export function getAllAchievements() {
    return ACHIEVEMENTS;
}

/**
 * Check achievement eligibility
 */
export function checkAchievements(stats) {
    const eligible = [];
    Object.values(ACHIEVEMENTS).forEach(achievement => {
        if (!stats.achievements.includes(achievement.id) && achievement.condition(stats)) {
            eligible.push(achievement.id);
        }
    });
    return eligible;
}

export default {
    ACHIEVEMENTS,
    getAchievement,
    getAllAchievements,
    checkAchievements
};
