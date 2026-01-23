// QR Code Generator Constants

export const ERROR_CORRECTION_LEVELS = [
    { value: 'L', label: 'Low (7%)', description: 'Good for clean environments' },
    { value: 'M', label: 'Medium (15%)', description: 'Balanced option (recommended)' },
    { value: 'Q', label: 'Quartile (25%)', description: 'Good for outdoor use' },
    { value: 'H', label: 'High (30%)', description: 'Best for damaged surfaces' },
];

export const QR_SIZES = [
    { value: 128, label: 'Small (128px)' },
    { value: 256, label: 'Medium (256px)' },
    { value: 384, label: 'Large (384px)' },
    { value: 512, label: 'Extra Large (512px)' },
];



export const COLOR_PRESETS = {
    classic: { fg: '#000000', bg: '#ffffff' },
    modern: { fg: '#1a1a2e', bg: '#f0f0f0' },
    vibrant: { fg: '#6366f1', bg: '#fef3c7' },
    dark: { fg: '#ffffff', bg: '#1a1a2e' },
    ocean: { fg: '#0891b2', bg: '#ecfeff' },
    sunset: { fg: '#dc2626', bg: '#fef2f2' },
};

export const MAX_TEXT_LENGTH = 2000;

// QR Code Dot Styles
export const DOT_STYLES = [
    { value: 'square', label: 'Square', description: 'Classic square dots' },
    { value: 'rounded', label: 'Rounded', description: 'Rounded square dots' },
    { value: 'dots', label: 'Dots', description: 'Circular dots' },
    { value: 'classy', label: 'Classy', description: 'Elegant rounded style' },
    { value: 'classy-rounded', label: 'Classy Rounded', description: 'Extra elegant style' },
    { value: 'extra-rounded', label: 'Extra Rounded', description: 'Very rounded squares' },
];

// QR Code Corner Square Styles
export const CORNER_SQUARE_STYLES = [
    { value: 'square', label: 'Square', description: 'Square corners' },
    { value: 'dot', label: 'Dot', description: 'Circular corners' },
    { value: 'extra-rounded', label: 'Extra Rounded', description: 'Rounded corners' },
];

// QR Code Corner Dot Styles
export const CORNER_DOT_STYLES = [
    { value: 'square', label: 'Square', description: 'Square center dot' },
    { value: 'dot', label: 'Dot', description: 'Circular center dot' },
];

// Logo Configuration
export const LOGO_CONFIG = {
    maxSizePercentage: 30,
    minSizePercentage: 10,
    defaultSizePercentage: 20,
    hideBackgroundDots: true,
    imageSize: 0.4, // 40% of QR code size
    margin: 5,
};

// Gradient Types
export const GRADIENT_TYPES = [
    { value: 'linear', label: 'Linear', description: 'Linear gradient' },
    { value: 'radial', label: 'Radial', description: 'Radial gradient' },
];

export const DEFAULT_CONFIG = {
    text: '',
    size: 256,
    fgColor: '#1a1a2e',
    bgColor: '#ffffff',
    errorCorrectionLevel: 'M',
    // New styling properties
    dotStyle: 'square',
    cornerSquareStyle: 'square',
    cornerDotStyle: 'square',
    gradientEnabled: false,
    gradientType: 'linear',
    gradientColorStart: '#1a1a2e',
    gradientColorEnd: '#6366f1',
    // Logo properties
    logoEnabled: false,
    logoImage: null,
    logoSize: LOGO_CONFIG.defaultSizePercentage,
};
