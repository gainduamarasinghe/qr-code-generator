import { toPng } from 'html-to-image';

/**
 * Download QR code as PNG image
 * @param {HTMLElement} element - The QR code container element
 * @param {string} filename - The filename for the download
 * @returns {Promise<boolean>} - Success status
 */
export const downloadAsPNG = async (element, filename = 'qrcode') => {
    try {
        const dataUrl = await toPng(element, {
            quality: 1.0,
            pixelRatio: 2, // Higher quality for retina displays
        });

        const link = document.createElement('a');
        link.download = `${filename}-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();

        return true;
    } catch (error) {
        console.error('Error downloading PNG:', error);
        return false;
    }
};

/**
 * Download QR code as SVG image
 * @param {HTMLElement} element - The QR code container element
 * @param {string} filename - The filename for the download
 * @returns {boolean} - Success status
 */
export const downloadAsSVG = (element, filename = 'qrcode') => {
    try {
        const svg = element.querySelector('svg');
        if (!svg) {
            console.error('SVG element not found');
            return false;
        }

        const svgData = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const svgUrl = URL.createObjectURL(svgBlob);

        const link = document.createElement('a');
        link.download = `${filename}-${Date.now()}.svg`;
        link.href = svgUrl;
        link.click();

        URL.revokeObjectURL(svgUrl);
        return true;
    } catch (error) {
        console.error('Error downloading SVG:', error);
        return false;
    }
};
