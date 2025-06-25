/**
 * GiochilandiaSound - Simple Sound Effect Player
 * Author: Giochilandia
 * License: Custom
 */

const GiochilandiaSound = {
    /**
     * Plays a sound from a given file path.
     * @param {string} src - The path to the audio file.
     */
    play(src) {
        if (typeof src !== 'string' || src.trim() === '') {
            console.error('[GiochilandiaSound] Invalid audio source.');
            return;
        }

        const audio = new Audio(src);
        audio.play().catch(err => {
            console.error('[GiochilandiaSound] Failed to play sound:', err);
        });
    }
};

// Example usage:
// GiochilandiaSound.play('assets/sounds/click.mp3');
// Assicurati che il file esista e il browser lo consenta.

module.exports = GiochilandiaSound;
