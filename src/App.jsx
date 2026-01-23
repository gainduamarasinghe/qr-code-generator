import SEO from './components/SEO';
import QRGenerator from './components/QRGenerator';
import './styles/index.css';
import './styles/animations.css';

function App() {
  return (
    <>
      <SEO />

      <div className="app">
        {/* Hero Section */}
        <header className="hero animate-fade-in">
          <div className="container text-center">
            <h1 className="hero-title">
              QR Code Generator
            </h1>
            <p className="hero-description">
              Create beautiful, customizable QR codes instantly. Free, fast, and professional.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <QRGenerator />
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container text-center">
            <p className="footer-text">
              Built with React • Free to use • No registration required
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
