import {
    ERROR_CORRECTION_LEVELS,
    QR_SIZES,
    MAX_TEXT_LENGTH,
    DOT_STYLES,
    CORNER_SQUARE_STYLES,
    CORNER_DOT_STYLES,
    GRADIENT_TYPES,
    LOGO_CONFIG,
} from '../constants';
import { validateImageFile, convertImageToDataURL } from '../utils/imageUtils';
import '../styles/QRGenerator.css';

const QRCustomizer = ({
    text,
    setText,
    size,
    setSize,
    fgColor,
    setFgColor,
    bgColor,
    setBgColor,
    errorCorrectionLevel,
    setErrorCorrectionLevel,
    logoImage,
    setLogoImage,
    logoEnabled,
    setLogoEnabled,
    logoSize,
    setLogoSize,
    dotStyle,
    setDotStyle,
    cornerSquareStyle,
    setCornerSquareStyle,
    cornerDotStyle,
    setCornerDotStyle,
    gradientEnabled,
    setGradientEnabled,
    gradientType,
    setGradientType,
    gradientColorStart,
    setGradientColorStart,
    gradientColorEnd,
    setGradientColorEnd,
}) => {
    const handleTextChange = (e) => {
        const value = e.target.value;
        if (value.length <= MAX_TEXT_LENGTH) {
            setText(value);
        }
    };

    const handleLogoUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const validation = validateImageFile(file);
        if (!validation.valid) {
            alert(validation.error);
            e.target.value = '';
            return;
        }

        try {
            const dataURL = await convertImageToDataURL(file);
            setLogoImage(dataURL);
            setLogoEnabled(true);
        } catch (error) {
            alert('Error loading image. Please try again.');
            console.error('Error converting image:', error);
        }
    };

    const handleClearLogo = () => {
        setLogoImage(null);
        setLogoEnabled(false);
        // Reset file input
        const fileInput = document.getElementById('logo-upload');
        if (fileInput) fileInput.value = '';
    };

    return (
        <div className="qr-customizer card animate-slide-up">
            <h3 className="customizer-title">Customize Your QR Code</h3>

            {/* Text Input */}
            <div className="form-group">
                <label htmlFor="qr-text" className="form-label">
                    Text or URL
                    <span className="char-counter">
                        {text.length} / {MAX_TEXT_LENGTH}
                    </span>
                </label>
                <textarea
                    id="qr-text"
                    className="form-input"
                    placeholder="Enter text, URL, or any data..."
                    value={text}
                    onChange={handleTextChange}
                    rows={4}
                />
            </div>

            {/* Size Selector */}
            <div className="form-group">
                <label htmlFor="qr-size" className="form-label">
                    Size
                </label>
                <select
                    id="qr-size"
                    className="form-input"
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                >
                    {QR_SIZES.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Logo Upload Section */}
            <div className="form-section">
                <h4 className="section-title">Logo (Optional)</h4>

                <div className="form-group">
                    <label htmlFor="logo-upload" className="form-label">
                        Upload Logo
                    </label>
                    <input
                        id="logo-upload"
                        type="file"
                        className="form-input file-input"
                        accept="image/png,image/jpeg,image/jpg,image/svg+xml"
                        onChange={handleLogoUpload}
                    />
                    <p className="form-hint">
                        Upload PNG, JPEG, or SVG (max 5MB). Higher error correction levels recommended.
                    </p>
                </div>

                {logoImage && (
                    <>
                        <div className="logo-preview-container">
                            <img src={logoImage} alt="Logo preview" className="logo-preview" />
                            <button
                                type="button"
                                className="btn-clear-logo"
                                onClick={handleClearLogo}
                                title="Remove logo"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="form-group">
                            <label className="toggle-label">
                                <input
                                    type="checkbox"
                                    checked={logoEnabled}
                                    onChange={(e) => setLogoEnabled(e.target.checked)}
                                    className="toggle-input"
                                />
                                <span className="toggle-text">Show logo in QR code</span>
                            </label>
                        </div>

                        {logoEnabled && (
                            <div className="form-group">
                                <label htmlFor="logo-size" className="form-label">
                                    Logo Size: {logoSize}%
                                </label>
                                <input
                                    id="logo-size"
                                    type="range"
                                    className="form-input range-input"
                                    min={LOGO_CONFIG.minSizePercentage}
                                    max={LOGO_CONFIG.maxSizePercentage}
                                    value={logoSize}
                                    onChange={(e) => setLogoSize(Number(e.target.value))}
                                />
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Style Customization Section */}
            <div className="form-section">
                <h4 className="section-title">QR Code Style</h4>

                <div className="form-group">
                    <label htmlFor="dot-style" className="form-label">
                        Dot Style
                    </label>
                    <select
                        id="dot-style"
                        className="form-input"
                        value={dotStyle}
                        onChange={(e) => setDotStyle(e.target.value)}
                    >
                        {DOT_STYLES.map((style) => (
                            <option key={style.value} value={style.value}>
                                {style.label} - {style.description}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="corner-square-style" className="form-label">
                        Corner Square Style
                    </label>
                    <select
                        id="corner-square-style"
                        className="form-input"
                        value={cornerSquareStyle}
                        onChange={(e) => setCornerSquareStyle(e.target.value)}
                    >
                        {CORNER_SQUARE_STYLES.map((style) => (
                            <option key={style.value} value={style.value}>
                                {style.label} - {style.description}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="corner-dot-style" className="form-label">
                        Corner Dot Style
                    </label>
                    <select
                        id="corner-dot-style"
                        className="form-input"
                        value={cornerDotStyle}
                        onChange={(e) => setCornerDotStyle(e.target.value)}
                    >
                        {CORNER_DOT_STYLES.map((style) => (
                            <option key={style.value} value={style.value}>
                                {style.label} - {style.description}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Color Section */}
            <div className="form-section">
                <h4 className="section-title">Colors</h4>

                <div className="form-group">
                    <label className="toggle-label">
                        <input
                            type="checkbox"
                            checked={gradientEnabled}
                            onChange={(e) => setGradientEnabled(e.target.checked)}
                            className="toggle-input"
                        />
                        <span className="toggle-text">Use gradient colors</span>
                    </label>
                </div>

                {gradientEnabled ? (
                    <>
                        <div className="form-group">
                            <label htmlFor="gradient-type" className="form-label">
                                Gradient Type
                            </label>
                            <select
                                id="gradient-type"
                                className="form-input"
                                value={gradientType}
                                onChange={(e) => setGradientType(e.target.value)}
                            >
                                {GRADIENT_TYPES.map((type) => (
                                    <option key={type.value} value={type.value}>
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="gradient-start" className="form-label">
                                    Start Color
                                </label>
                                <div className="color-input-wrapper">
                                    <input
                                        id="gradient-start"
                                        type="color"
                                        className="form-input color-input"
                                        value={gradientColorStart}
                                        onChange={(e) => setGradientColorStart(e.target.value)}
                                    />
                                    <span className="color-value">{gradientColorStart}</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="gradient-end" className="form-label">
                                    End Color
                                </label>
                                <div className="color-input-wrapper">
                                    <input
                                        id="gradient-end"
                                        type="color"
                                        className="form-input color-input"
                                        value={gradientColorEnd}
                                        onChange={(e) => setGradientColorEnd(e.target.value)}
                                    />
                                    <span className="color-value">{gradientColorEnd}</span>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="fg-color" className="form-label">
                                Foreground Color
                            </label>
                            <div className="color-input-wrapper">
                                <input
                                    id="fg-color"
                                    type="color"
                                    className="form-input color-input"
                                    value={fgColor}
                                    onChange={(e) => setFgColor(e.target.value)}
                                />
                                <span className="color-value">{fgColor}</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bg-color" className="form-label">
                                Background Color
                            </label>
                            <div className="color-input-wrapper">
                                <input
                                    id="bg-color"
                                    type="color"
                                    className="form-input color-input"
                                    value={bgColor}
                                    onChange={(e) => setBgColor(e.target.value)}
                                />
                                <span className="color-value">{bgColor}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="bg-color-main" className="form-label">
                        Background Color
                    </label>
                    <div className="color-input-wrapper">
                        <input
                            id="bg-color-main"
                            type="color"
                            className="form-input color-input"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                        />
                        <span className="color-value">{bgColor}</span>
                    </div>
                </div>
            </div>

            {/* Error Correction Level */}
            <div className="form-group">
                <label htmlFor="error-level" className="form-label">
                    Error Correction Level
                </label>
                <select
                    id="error-level"
                    className="form-input"
                    value={errorCorrectionLevel}
                    onChange={(e) => setErrorCorrectionLevel(e.target.value)}
                >
                    {ERROR_CORRECTION_LEVELS.map((level) => (
                        <option key={level.value} value={level.value}>
                            {level.label} - {level.description}
                        </option>
                    ))}
                </select>
                <p className="form-hint">
                    Higher levels allow the QR code to be read even if partially damaged
                    {logoEnabled && ' (recommended when using a logo)'}
                </p>
            </div>
        </div>
    );
};

export default QRCustomizer;
