import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = 'QR Code Generator - Free Online QR Code Maker',
    description = 'Create custom QR codes instantly with our free online QR code generator. Customize colors, sizes, and download as PNG or SVG. Professional, fast, and easy to use.',
    keywords = 'QR code generator, QR code maker, free QR code, custom QR code, QR code creator, generate QR code, online QR code',
    author = 'QR Generator',
    url = window.location.href,
    image = '/og-image.png',
}) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="QR Code Generator" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Theme Color */}
            <meta name="theme-color" content="#6366f1" />
        </Helmet>
    );
};

export default SEO;
