import { useState } from 'react';
import QRCustomizer from './QRCustomizer';
import QRPreview from './QRPreview';
import { DEFAULT_CONFIG } from '../constants';
import '../styles/QRGenerator.css';

const QRGenerator = () => {
    const [text, setText] = useState(DEFAULT_CONFIG.text);
    const [size, setSize] = useState(DEFAULT_CONFIG.size);
    const [fgColor, setFgColor] = useState(DEFAULT_CONFIG.fgColor);
    const [bgColor, setBgColor] = useState(DEFAULT_CONFIG.bgColor);
    const [errorCorrectionLevel, setErrorCorrectionLevel] = useState(
        DEFAULT_CONFIG.errorCorrectionLevel
    );

    // Logo state
    const [logoImage, setLogoImage] = useState(DEFAULT_CONFIG.logoImage);
    const [logoEnabled, setLogoEnabled] = useState(DEFAULT_CONFIG.logoEnabled);
    const [logoSize, setLogoSize] = useState(DEFAULT_CONFIG.logoSize);

    // Styling state
    const [dotStyle, setDotStyle] = useState(DEFAULT_CONFIG.dotStyle);
    const [cornerSquareStyle, setCornerSquareStyle] = useState(DEFAULT_CONFIG.cornerSquareStyle);
    const [cornerDotStyle, setCornerDotStyle] = useState(DEFAULT_CONFIG.cornerDotStyle);

    // Gradient state
    const [gradientEnabled, setGradientEnabled] = useState(DEFAULT_CONFIG.gradientEnabled);
    const [gradientType, setGradientType] = useState(DEFAULT_CONFIG.gradientType);
    const [gradientColorStart, setGradientColorStart] = useState(DEFAULT_CONFIG.gradientColorStart);
    const [gradientColorEnd, setGradientColorEnd] = useState(DEFAULT_CONFIG.gradientColorEnd);

    return (
        <div className="qr-generator-container">
            <div className="generator-grid">
                <QRCustomizer
                    text={text}
                    setText={setText}
                    size={size}
                    setSize={setSize}
                    fgColor={fgColor}
                    setFgColor={setFgColor}
                    bgColor={bgColor}
                    setBgColor={setBgColor}
                    errorCorrectionLevel={errorCorrectionLevel}
                    setErrorCorrectionLevel={setErrorCorrectionLevel}
                    logoImage={logoImage}
                    setLogoImage={setLogoImage}
                    logoEnabled={logoEnabled}
                    setLogoEnabled={setLogoEnabled}
                    logoSize={logoSize}
                    setLogoSize={setLogoSize}
                    dotStyle={dotStyle}
                    setDotStyle={setDotStyle}
                    cornerSquareStyle={cornerSquareStyle}
                    setCornerSquareStyle={setCornerSquareStyle}
                    cornerDotStyle={cornerDotStyle}
                    setCornerDotStyle={setCornerDotStyle}
                    gradientEnabled={gradientEnabled}
                    setGradientEnabled={setGradientEnabled}
                    gradientType={gradientType}
                    setGradientType={setGradientType}
                    gradientColorStart={gradientColorStart}
                    setGradientColorStart={setGradientColorStart}
                    gradientColorEnd={gradientColorEnd}
                    setGradientColorEnd={setGradientColorEnd}
                />

                <QRPreview
                    text={text}
                    size={size}
                    fgColor={fgColor}
                    bgColor={bgColor}
                    errorCorrectionLevel={errorCorrectionLevel}
                    logoImage={logoImage}
                    logoEnabled={logoEnabled}
                    logoSize={logoSize}
                    dotStyle={dotStyle}
                    cornerSquareStyle={cornerSquareStyle}
                    cornerDotStyle={cornerDotStyle}
                    gradientEnabled={gradientEnabled}
                    gradientType={gradientType}
                    gradientColorStart={gradientColorStart}
                    gradientColorEnd={gradientColorEnd}
                />
            </div>
        </div>
    );
};

export default QRGenerator;
