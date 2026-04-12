// ─── i18n must be imported before any component that uses useTranslation ───
import './i18n/index.js';

import { lazy, Suspense } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

// Above-the-fold — load immediately
import Navbar from './components/Navbar';
import Hero   from './components/Hero';

// Below-the-fold — lazy-load to reduce initial bundle & unblock FCP/LCP
const Marquee      = lazy(() => import('./components/Marquee'));
const About        = lazy(() => import('./components/About'));
const Services     = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CtaReserva   = lazy(() => import('./components/CtaReserva'));
const Footer       = lazy(() => import('./components/Footer'));

// JSON-LD LocalBusiness structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['BeautySalon', 'HealthAndBeautyBusiness'],
  name: 'Elybela Glow',
  alternateName: ['Elybela Glow Platja d\'Aro', 'Elybela Glow Playa de Aro'],
  description:
    'Centro de masajes y belleza en Platja d\'Aro (Playa de Aro), Costa Brava. Masajes relajantes, maderoterapia y tratamientos de pestañas.',
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
  areaServed: [
    { '@type': 'City', name: "Platja d'Aro" },
    { '@type': 'City', name: 'Playa de Aro' },
    { '@type': 'AdministrativeArea', name: 'Costa Brava' },
    { '@type': 'AdministrativeArea', name: 'Girona' },
  ],
  openingHours: 'Mo-Sa 09:00-20:00',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tratamientos Elybela Glow',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Masaje Relajante Playa de Aro'   }, price: '40', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Masaje Facial'                   }, price: '40', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Masaje Descontracturante'         }, price: '40', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maderoterapia'                    }, price: '50', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lifting de Pestañas'              }, price: '40', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lifting de Cejas'                 }, price: '40', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wellness Manos'                   }, price: '30', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wellness Pies'                    }, price: '30', priceCurrency: 'EUR' },
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
      <meta name="keywords"           content="masaje playa de aro, masajes playa de aro, masaje platja d'aro, masajes platja d'aro, centro masajes playa de aro, spa playa de aro, spa platja d'aro, masaje relajante playa de aro, maderoterapia platja d'aro, maderoterapia playa de aro, lifting pestañas platja d'aro, centro belleza playa de aro, centro belleza platja d'aro, wellness costa brava, masaje costa brava, girona masajes" />
      <link rel="canonical"           href="https://www.elybelaglow.com" />

      {/* ── Open Graph */}
      <meta property="og:title"       content="Masaje Playa de Aro | Elybela Glow – Centro de Belleza y Bienestar" />
      <meta property="og:description" content="Centro de masajes en Platja d'Aro (Playa de Aro), Costa Brava. Masajes relajantes, maderoterapia y tratamientos de pestañas. Reserva tu momento de bienestar." />
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
        {/* Lazy sections — load after the hero is painted */}
        <Suspense fallback={null}>
          <Marquee />
          <About />
          <Services />
          <Testimonials />
          <CtaReserva />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </HelmetProvider>
  );
}
