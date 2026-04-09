// ─── i18n must be imported before any component that uses useTranslation ───
import './i18n/index.js';

import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Marquee      from './components/Marquee';
import About        from './components/About';
import Services     from './components/Services';
import Testimonials from './components/Testimonials';
import CtaReserva   from './components/CtaReserva';
import Footer       from './components/Footer';

// JSON-LD LocalBusiness structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Elybela Glow',
  description:
    'Centro de belleza y bienestar en Platja d\'Aro. Masajes relajantes, maderoterapia y tratamientos de pestañas.',
  url: 'https://www.elybelaglow.com',
  telephone: '+34602623556',
  email: 'elybela@elybelaglow.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "Carrer Mossèn Cinto Verdaguer, 11",
    addressLocality: "Platja d'Aro",
    postalCode: '17250',
    addressRegion: 'Girona',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.8165,
    longitude: 3.0677,
  },
  openingHours: 'Mo-Sa 09:00-20:00',
  priceRange: '€€',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tratamientos Elybela Glow',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Masaje Relajante'     }, price: '40', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maderoterapia'         }, price: '50', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lifting de Pestañas'   }, price: '40', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lifting de Cejas'      }, price: '40', priceCurrency: 'EUR' },
    ],
  },
};

// hreflang pairs
const hreflangLinks = [
  { hreflang: 'es',        href: 'https://www.elybelaglow.com/' },
  { hreflang: 'ca',        href: 'https://www.elybelaglow.com/?lang=ca' },
  { hreflang: 'fr',        href: 'https://www.elybelaglow.com/?lang=fr' },
  { hreflang: 'en',        href: 'https://www.elybelaglow.com/?lang=en' },
  { hreflang: 'de',        href: 'https://www.elybelaglow.com/?lang=de' },
  { hreflang: 'ro',        href: 'https://www.elybelaglow.com/?lang=ro' },
  { hreflang: 'x-default', href: 'https://www.elybelaglow.com/' },
];

function SeoHead() {
  const { t, i18n } = useTranslation();

  return (
    <Helmet>
      {/* ── Primary meta */}
      <html lang={i18n.language} />
      <title>{t('seo.title')}</title>
      <meta name="description"        content={t('seo.description')} />
      <meta name="keywords"           content="masajes platja d'aro, centro belleza costa brava, maderoterapia girona, lifting pestañas platja d'aro, spa platja d'aro, wellness costa brava, masaje relajante girona" />
      <link rel="canonical"           href="https://www.elybelaglow.com" />

      {/* ── Open Graph */}
      <meta property="og:title"       content="Elybela Glow | Tu Oasis de Belleza en Platja d'Aro" />
      <meta property="og:description" content="Masajes, maderoterapia y tratamientos de pestañas en Platja d'Aro. Reserva tu momento de bienestar." />
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content="https://www.elybelaglow.com" />
      <meta property="og:image"       content="/og-image.jpg" />
      <meta property="og:locale"      content="es_ES" />

      {/* ── Twitter card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content="Elybela Glow | Platja d'Aro" />
      <meta name="twitter:description" content="Centro de belleza y bienestar en la Costa Brava." />
      <meta name="twitter:image"       content="/og-image.jpg" />

      {/* ── hreflang */}
      {hreflangLinks.map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hreflang={hreflang} href={href} />
      ))}

      {/* ── JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <SeoHead />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Testimonials />
        <CtaReserva />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
