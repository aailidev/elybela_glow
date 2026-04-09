import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { WHATSAPP_URL } from '../constants/services';

const LANGUAGES = [
  { code: 'es', label: 'ES' },
  { code: 'ca', label: 'CA' },
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'ro', label: 'RO' },
];

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Navbar() {
  const { t, i18n } = useTranslation();

  // Inicializa de forma síncrona para evitar el flash en el primer render
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 80
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  // Scroll listener — fiable en todos los navegadores y dispositivos
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    // Aplicar estado inmediatamente por si la página carga ya scrolleada
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cierra dropdown de idioma al hacer click fuera
  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Cierra menú móvil al girar el dispositivo
  useEffect(() => {
    const handler = () => setMenuOpen(false);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
    setMenuOpen(false);
  };

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  const navLinks = [
    { href: '#inicio',    label: t('nav.home') },
    { href: '#servicios', label: t('nav.services') },
    { href: '#nosotras',  label: t('nav.about') },
    { href: '#contacto',  label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-ebony/96 backdrop-blur-md shadow-lg shadow-black/30 border-b border-gold/10'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      {/* ── Barra principal */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">

        {/* Logo */}
        <a href="#inicio" className="flex-shrink-0" aria-label="Elybela Glow — inicio">
          <div className={`flex items-center rounded-xl px-2.5 py-1 transition-all duration-200 ${
            scrolled ? 'bg-cream' : 'bg-ebony/65 backdrop-blur-sm'
          }`}>
            <img
              src="/logo.png"
              alt="Elybela Glow"
              className="h-9 sm:h-12 w-auto block"
            />
          </div>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-body text-sm font-medium tracking-wide text-cream/80 hover:text-gold transition-colors duration-200"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Derecha: idioma + CTA */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          {/* Selector de idioma */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              aria-label="Seleccionar idioma"
              aria-expanded={langOpen}
              className="flex items-center gap-1.5 font-body text-sm font-medium px-3 py-1.5 rounded-full border border-cream/25 text-cream/75 hover:border-gold hover:text-gold transition-all duration-200"
            >
              {currentLang.label}
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-ebony border border-gold/20 rounded-xl shadow-xl shadow-black/40 py-1 min-w-[110px] z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm font-body transition-colors duration-150 ${
                      i18n.language === lang.code
                        ? 'text-gold bg-gold/10'
                        : 'text-cream/70 hover:text-gold hover:bg-gold/5'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Botón WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reservar cita por WhatsApp"
            className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-ebony font-body text-sm font-bold px-4 py-2 rounded-full shadow-md transition-all duration-200 whitespace-nowrap"
          >
            <WhatsAppIcon />
            {t('nav.cta')}
          </a>
        </div>

        {/* Hamburger móvil — pill oscura garantiza visibilidad sobre cualquier fondo */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          className={`md:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] text-cream flex-shrink-0 rounded-xl transition-all duration-200 ${
            scrolled ? '' : 'bg-ebony/60 backdrop-blur-sm'
          }`}
        >
          <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* ── Menú móvil */}
      <div
        className={`md:hidden bg-ebony/98 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-4">
          {/* Links */}
          <ul className="flex flex-col divide-y divide-gold/10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center font-body text-cream/75 text-base py-3.5 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Idiomas */}
          <div className="flex flex-wrap gap-2 pt-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-3 py-1.5 rounded-full border text-xs font-body transition-all duration-200 ${
                  i18n.language === lang.code
                    ? 'border-gold text-gold bg-gold/10'
                    : 'border-gold/20 text-cream/55 hover:border-gold/40 hover:text-cream'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* CTA WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-ebony font-body font-bold text-sm py-3.5 rounded-full transition-colors duration-200 mt-1"
          >
            <WhatsAppIcon />
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </header>
  );
}
