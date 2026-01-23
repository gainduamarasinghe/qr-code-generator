import { useRef, useState, useEffect } from 'react';
import QRCodeStyling from 'qr-code-styling';
import '../styles/QRGenerator.css';

const QRPreview = ({
    text,
    size,
    fgColor,
    bgColor,
    errorCorrectionLevel,
    logoImage,
    logoEnabled,
    logoSize,
    dotStyle,
    cornerSquareStyle,
    cornerDotStyle,
    gradientEnabled,
    gradientType,
    gradientColorStart,
    gradientColorEnd,
}) => {
    const qrRef = useRef(null);
    const qrCodeRef = useRef(null);
    const [downloading, setDownloading] = useState(false);
    const [downloadSuccess, setDownloadSuccess] = useState(false);

    useEffect(() => {
        if (!text) {
            // Clear QR code if no text
            if (qrRef.current) {
                qrRef.current.innerHTML = '';
            }
            return;
        }

        // Configure QR code options
        const qrOptions = {
            width: size,
            height: size,
            data: text,
            margin: 10,
            qrOptions: {
                typeNumber: 0,
                mode: 'Byte',
                errorCorrectionLevel: errorCorrectionLevel,
            },
            dotsOptions: {
                color: gradientEnabled ? undefined : fgColor,
                type: dotStyle,
                gradient: gradientEnabled
                    ? {
                        type: gradientType,
                        rotation: 0,
                        colorStops: [
                            { offset: 0, color: gradientColorStart },
                            { offset: 1, color: gradientColorEnd },
                        ],
                    }
                    : undefined,
            },
            backgroundOptions: {
                color: bgColor,
            },
            cornersSquareOptions: {
                color: gradientEnabled ? gradientColorStart : fgColor,
                type: cornerSquareStyle,
            },
            cornersDotOptions: {
                color: gradientEnabled ? gradientColorEnd : fgColor,
                type: cornerDotStyle,
            },
            imageOptions: {
                hideBackgroundDots: true,
                imageSize: logoSize / 100,
                margin: 5,
                crossOrigin: 'anonymous',
            },
        };

        // Add logo if enabled
        if (logoEnabled && logoImage) {
            qrOptions.image = logoImage;
        }

        // Create or update QR code
        if (!qrCodeRef.current) {
            qrCodeRef.current = new QRCodeStyling(qrOptions);
            if (qrRef.current) {
                qrRef.current.innerHTML = '';
                qrCodeRef.current.append(qrRef.current);
            }
        } else {
            qrCodeRef.current.update(qrOptions);
        }
    }, [
        text,
        size,
        fgColor,
        bgColor,
        errorCorrectionLevel,
        logoImage,
        logoEnabled,
        logoSize,
        dotStyle,
        cornerSquareStyle,
        cornerDotStyle,
        gradientEnabled,
        gradientType,
        gradientColorStart,
        gradientColorEnd,
    ]);

    const handleDownloadPNG = async () => {
        if (!qrCodeRef.current || !text) return;

        setDownloading(true);
        try {
            await qrCodeRef.current.download({
                name: `qrcode-${Date.now()}`,
                extension: 'png',
            });
            setDownloadSuccess(true);
            setTimeout(() => setDownloadSuccess(false), 2000);
        } catch (error) {
            console.error('Error downloading PNG:', error);
            alert('Failed to download PNG. Please try again.');
        } finally {
            setDownloading(false);
        }
    };

    const handleDownloadSVG = async () => {
        if (!qrCodeRef.current || !text) return;

        setDownloading(true);
        try {
            await qrCodeRef.current.download({
                name: `qrcode-${Date.now()}`,
                extension: 'svg',
            });
            setDownloadSuccess(true);
            setTimeout(() => setDownloadSuccess(false), 2000);
        } catch (error) {
            console.error('Error downloading SVG:', error);
            alert('Failed to download SVG. Please try again.');
        } finally {
            setDownloading(false);
        }
    };

    return (
        <div className="qr-preview card animate-slide-up">
            <h3 className="preview-title">Your QR Code</h3>

            <div className="qr-container-wrapper">
                {text ? (
                    <div className="qr-wrapper animate-scale-in" ref={qrRef}></div>
                ) : (
                    <div className="qr-empty">
                        <svg
                            className="empty-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                            />
                        </svg>
                        <p className="empty-text">Enter text to generate QR code</p>
                    </div>
                )}
            </div>

            {text && (
                <div className="download-buttons animate-fade-in">
                    <button
                        className={`btn btn-primary ${downloadSuccess ? 'success-pulse' : ''}`}
                        onClick={handleDownloadPNG}
                        disabled={downloading}
                    >
                        {downloading ? (
                            <>
                                <span className="spinner animate-spin"></span>
                                Downloading...
                            </>
                        ) : downloadSuccess ? (
                            <>
                                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Downloaded!
                            </>
                        ) : (
                            <>
                                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download PNG
                            </>
                        )}
                    </button>

                    <button
                        className="btn btn-secondary"
                        onClick={handleDownloadSVG}
                        disabled={downloading}
                    >
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download SVG
                    </button>
                </div>
            )}
        </div>
    );
};

export default QRPreview;
