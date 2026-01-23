/**
 * Image utility functions for QR code logo handling
 */

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'];

/**
 * Validate uploaded image file
 * @param {File} file - The uploaded file
 * @returns {Object} - { valid: boolean, error: string }
 */
export const validateImageFile = (file) => {
    if (!file) {
        return { valid: false, error: 'No file selected' };
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
        return {
            valid: false,
            error: 'Invalid file type. Please upload PNG, JPEG, or SVG images.',
        };
    }

    if (file.size > MAX_FILE_SIZE) {
        return {
            valid: false,
            error: 'File size exceeds 5MB. Please upload a smaller image.',
        };
    }

    return { valid: true, error: null };
};

/**
 * Convert image file to base64 data URL
 * @param {File} file - The image file
 * @returns {Promise<string>} - Base64 data URL
 */
export const convertImageToDataURL = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            resolve(e.target.result);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
};

/**
 * Calculate optimal logo size based on QR size and error correction level
 * @param {number} qrSize - QR code size in pixels
 * @param {string} errorLevel - Error correction level (L, M, Q, H)
 * @param {number} logoPercentage - Logo size as percentage (10-30)
 * @returns {number} - Calculated logo size in pixels
 */
export const calculateLogoSize = (qrSize, errorLevel, logoPercentage = 20) => {
    // Maximum recommended logo coverage based on error correction level
    const maxCoverage = {
        L: 0.07, // 7% - Low
        M: 0.15, // 15% - Medium
        Q: 0.25, // 25% - Quartile
        H: 0.30, // 30% - High
    };

    const requestedSize = (qrSize * logoPercentage) / 100;
    const maxSize = qrSize * maxCoverage[errorLevel];

    // Return the smaller of requested size and max allowed size
    return Math.min(requestedSize, maxSize);
};

/**
 * Validate logo size doesn't exceed recommended limits
 * @param {number} logoSize - Logo size in pixels
 * @param {number} qrSize - QR code size in pixels
 * @param {string} errorLevel - Error correction level
 * @returns {Object} - { valid: boolean, warning: string }
 */
export const validateLogoSize = (logoSize, qrSize, errorLevel) => {
    const maxCoverage = {
        L: 0.07,
        M: 0.15,
        Q: 0.25,
        H: 0.30,
    };

    const logoPercentage = (logoSize / qrSize) * 100;
    const maxPercentage = maxCoverage[errorLevel] * 100;

    if (logoPercentage > maxPercentage) {
        return {
            valid: false,
            warning: `Logo size (${logoPercentage.toFixed(1)}%) exceeds recommended maximum (${maxPercentage}%) for error correction level ${errorLevel}. QR code may not scan reliably.`,
        };
    }

    return { valid: true, warning: null };
};
