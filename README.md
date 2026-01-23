# QR Code Generator

A professional, SEO-friendly QR code generator built with React and JavaScript. Create beautiful, customizable QR codes instantly with a modern, premium UI.

## Features

- 🎨 **Customizable Design**: Adjust colors, sizes, and error correction levels
- 📥 **Multiple Export Formats**: Download as PNG or SVG
- 🚀 **Real-time Generation**: QR codes update instantly as you type
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- 🎯 **SEO Optimized**: Comprehensive meta tags and structured data
- ✨ **Premium UI**: Modern design with glassmorphism and smooth animations
- 🆓 **Free to Use**: No registration or payment required

## Technology Stack

- **Framework**: React 19 with Vite
- **QR Library**: qrcode.react
- **SEO**: react-helmet-async
- **Styling**: Vanilla CSS with modern design system
- **Export**: html-to-image for PNG, native SVG export

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd QR-generator

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
QR-generator/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── QRGenerator.jsx       # Main QR generator component
│   │   ├── QRCustomizer.jsx      # Customization controls
│   │   ├── QRPreview.jsx         # QR code display and download
│   │   └── SEO.jsx               # SEO meta tags component
│   ├── styles/
│   │   ├── index.css             # Design system & global styles
│   │   ├── QRGenerator.css       # Generator component styles
│   │   └── animations.css        # Reusable animations
│   ├── utils/
│   │   └── downloadQR.js         # Download utility functions
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Application entry point
│   └── constants.js              # App constants
├── index.html
├── package.json
└── vite.config.js
```

## Usage

1. Enter text, URL, or any data in the text area
2. Customize the QR code:
   - Choose size (128px - 512px)
   - Select foreground and background colors
   - Set error correction level (L, M, Q, H)
3. Download your QR code as PNG or SVG

## Error Correction Levels

- **L (Low)**: 7% error correction - Good for clean environments
- **M (Medium)**: 15% error correction - Balanced option (recommended)
- **Q (Quartile)**: 25% error correction - Good for outdoor use
- **H (High)**: 30% error correction - Best for damaged surfaces

## SEO Features

- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card tags
- Structured data (JSON-LD)
- Semantic HTML5 structure
- Sitemap and robots.txt

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
