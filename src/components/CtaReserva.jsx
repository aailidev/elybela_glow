import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHATSAPP_URL, BOOKSY_URL } from '../constants/services';

gsap.registerPlugin(ScrollTrigger);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function CtaReserva() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelector('.cta-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' } }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cta-section relative bg-ebony py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="animate-pulse-glow absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 65% 45% at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[
          { left: '8%',  bot: '20%', size: 2,   delay: 0,   dur: 6  },
          { left: '18%', bot: '35%', size: 1.5, delay: 1.2, dur: 8  },
          { left: '28%', bot: '15%', size: 2.5, delay: 0.4, dur: 5  },
          { left: '42%', bot: '45%', size: 1.5, delay: 2.1, dur: 7  },
          { left: '58%', bot: '25%', size: 2,   delay: 0.8, dur: 9  },
          { left: '70%', bot: '40%', size: 1.5, delay: 1.6, dur: 6  },
          { left: '82%', bot: '18%', size: 2,   delay: 0.3, dur: 7  },
          { left: '90%', bot: '32%', size: 1.5, delay: 2.4, dur: 5  },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold"
            style={{
              width: `${p.size}px`, height: `${p.size}px`,
              left: p.left, bottom: p.bot,
              opacity: 0.35,
              animation: `particle-rise ${p.dur}s ease-in-out infinite ${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="cta-content relative z-10 max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <div className="gold-divider max-w-[50px] mx-auto mb-6 sm:mb-8" />

        <h2
          className="font-display font-light text-cream mb-5 sm:mb-6 leading-[0.92]"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          {t('cta.headline')}
        </h2>
        <p className="font-body text-sm sm:text-base md:text-lg text-cream/55 mb-8 sm:mb-12 max-w-md mx-auto leading-relaxed">
          {t('cta.text')}
        </p>

        {/* CTAs — apilados en móvil, fila en sm+ */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reservar cita en Elybela Glow por WhatsApp"
            className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-ebony font-body font-bold text-sm tracking-wide px-7 py-4 rounded-full shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-all duration-300 active:scale-95"
          >
            <WhatsAppIcon />
            {t('cta.ctaPrimary')}
          </a>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reservar cita en Elybela Glow en Booksy"
            className="flex items-center justify-center gap-2 border border-gold text-gold hover:bg-gold hover:text-ebony font-body font-semibold text-sm tracking-wide px-7 py-4 rounded-full transition-all duration-300 active:scale-95"
          >
            <ExternalIcon />
            {t('cta.ctaSecondary')}
          </a>
        </div>
      </div>
    </section>
  );
}
