import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHATSAPP_URL } from '../constants/services';

gsap.registerPlugin(ScrollTrigger);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Hero() {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const bgRef   = useRef(null);
  const imgRef  = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg   = bgRef.current;
    const img  = imgRef.current;
    if (!hero || !bg) return;

    const reveals = hero.querySelectorAll('.hero-reveal');

    const ctx = gsap.context(() => {
      if (img) {
        gsap.fromTo(img, { scale: 1.1 }, { scale: 1, duration: 2.2, ease: 'power2.out' });
      }
      gsap.fromTo(
        reveals,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 1.2, ease: 'power3.out', delay: 0.4 }
      );
      gsap.to(bg, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* ── Full-bleed image */}
      <div ref={bgRef} className="absolute inset-0">
        <img
          ref={imgRef}
          src="/HeroImage.webp"
          alt="Tratamiento facial de lujo en Elybela Glow, centro de belleza en Platja d'Aro"
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
          fetchpriority="high"
          decoding="async"
        />
        {/* Gradiente inferior — legibilidad del texto */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #0D0D0D 0%, rgba(13,13,13,0.70) 40%, rgba(13,13,13,0.25) 70%, rgba(13,13,13,0.10) 100%)' }}
          aria-hidden="true"
        />
        {/* Gradiente superior — siempre oscuro para el navbar */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.65) 0%, rgba(13,13,13,0.20) 20%, transparent 40%)' }}
          aria-hidden="true"
        />
        {/* Lateral izquierdo */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, rgba(13,13,13,0.45) 0%, transparent 50%)' }}
          aria-hidden="true"
        />
        {/* Tinte dorado atmosférico */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 55% at 65% 50%, rgba(201,168,76,0.10) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
      </div>

      {/* ── Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pb-16 sm:pb-20 lg:pb-28 pt-24 sm:pt-32 lg:pt-40">

        {/* Location badge */}
        <div className="hero-reveal mb-5 sm:mb-7">
          <span className="relative inline-flex items-center gap-2 font-body text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-gold/90 border border-gold/35 rounded-full px-4 py-1.5 overflow-hidden">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" aria-hidden="true" />
            Platja d&apos;Aro · Costa Brava
            <span className="animate-badge-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-reveal font-display font-light text-cream leading-[0.9] mb-8 sm:mb-10 lg:mb-12"
          style={{ fontSize: 'clamp(2.6rem, 9vw, 9rem)' }}
        >
          {t('hero.headline')}
        </h1>

        {/* Bottom row */}
        <div className="hero-reveal flex flex-col lg:flex-row items-start lg:items-end gap-6 lg:gap-14">
          <div className="hidden lg:block w-px h-20 bg-gradient-to-b from-gold/55 to-transparent flex-shrink-0" aria-hidden="true" />
          <p className="font-body text-cream/55 text-sm sm:text-base leading-relaxed max-w-sm">
            {t('hero.subheadline')}
          </p>
          <div className="flex flex-col xs:flex-row sm:flex-row gap-3 lg:ml-auto w-full sm:w-auto">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar cita por WhatsApp en Elybela Glow"
              className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-ebony font-body font-bold text-sm tracking-wide px-6 py-3.5 sm:px-8 sm:py-4 rounded-full shadow-lg shadow-gold/30 hover:shadow-gold/55 transition-all duration-300"
            >
              <WhatsAppIcon />
              {t('hero.ctaPrimary')}
            </a>
            <a
              href="#servicios"
              aria-label="Ver todos los servicios de Elybela Glow"
              className="flex items-center justify-center font-body font-semibold text-sm tracking-wide px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border border-cream/30 text-cream hover:border-gold hover:text-gold transition-all duration-300"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator desktop */}
      <div className="hidden lg:flex absolute bottom-10 right-12 flex-col items-center gap-3" aria-hidden="true">
        <div className="h-16 w-px bg-gradient-to-b from-transparent to-gold/45" />
        <span className="font-body text-[9px] tracking-[0.35em] uppercase text-cream/30">Scroll</span>
      </div>

      {/* Scroll indicator mobile */}
      <div className="lg:hidden absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1" aria-hidden="true">
        <div className="animate-bounce-slow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="rgba(201,168,76,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
