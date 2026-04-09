import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillarsData = [
  { tKey: 'exclusive', label: '01' },
  { tKey: 'natural',   label: '02' },
  { tKey: 'personal',  label: '03' },
];

export default function About() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const stat500Ref = useRef(null);
  const stat9Ref   = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const pillars   = el.querySelectorAll('.pillar');
    const textBlock = el.querySelector('.about-text-block');
    const photo     = el.querySelector('.about-photo');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textBlock,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%' } }
      );
      gsap.fromTo(
        photo,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 1.1, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 75%' } }
      );
      gsap.fromTo(
        pillars,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 55%' } }
      );

      // Counters
      const c500 = { val: 0 };
      gsap.to(c500, {
        val: 500, duration: 2.2, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 75%', once: true },
        onUpdate: () => {
          if (stat500Ref.current) stat500Ref.current.textContent = `+${Math.round(c500.val)}`;
        },
      });
      const c9 = { val: 0 };
      gsap.to(c9, {
        val: 9, duration: 1.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 75%', once: true },
        onUpdate: () => {
          if (stat9Ref.current) stat9Ref.current.textContent = Math.round(c9.val).toString();
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="nosotras"
      ref={sectionRef}
      className="about-section bg-sand py-16 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        {/* ── Editorial header */}
        <div className="flex items-center gap-4 mb-4 sm:mb-6">
          <div className="gold-divider w-10 sm:w-14 flex-shrink-0" />
          <p className="font-body text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Elybela Glow
          </p>
        </div>
        <h2
          className="font-display font-light text-dark-brown leading-[0.92] mb-10 sm:mb-16 max-w-2xl"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)' }}
        >
          {t('about.title')}
        </h2>

        {/* ── Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center mb-12 sm:mb-20">

          {/* Left */}
          <div className="about-text-block">
            <p className="font-display text-lg sm:text-xl md:text-2xl font-light italic text-dark-brown/60 leading-relaxed mb-8 sm:mb-10 pl-5 sm:pl-6 border-l-2 border-gold/40">
              {t('about.text')}
            </p>

            {/* Stats — 3 columnas, fuente adaptada */}
            <div className="grid grid-cols-3 gap-0">
              <div className="pr-4 sm:pr-8">
                <p ref={stat500Ref} className="font-display text-3xl sm:text-4xl lg:text-5xl text-gold font-light tabular-nums leading-none">
                  +0
                </p>
                <p className="font-body text-[10px] sm:text-xs text-dark-brown/40 uppercase tracking-widest mt-1 sm:mt-2 leading-tight">
                  Clientas felices
                </p>
              </div>
              <div className="px-4 sm:px-8 border-x border-gold/20">
                <p ref={stat9Ref} className="font-display text-3xl sm:text-4xl lg:text-5xl text-gold font-light tabular-nums leading-none">
                  0
                </p>
                <p className="font-body text-[10px] sm:text-xs text-dark-brown/40 uppercase tracking-widest mt-1 sm:mt-2 leading-tight">
                  Tratamientos
                </p>
              </div>
              <div className="pl-4 sm:pl-8">
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-gold font-light leading-none">5★</p>
                <p className="font-body text-[10px] sm:text-xs text-dark-brown/40 uppercase tracking-widest mt-1 sm:mt-2 leading-tight">
                  Valoración media
                </p>
              </div>
            </div>
          </div>

          {/* Right — photo */}
          <div className="about-photo relative">
            <div
              className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 w-full h-full border border-gold/25 rounded-2xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-dark-brown/12">
              <img
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=900&q=80"
                alt="Interior del centro de belleza Elybela Glow en Platja d'Aro"
                loading="lazy"
                className="w-full h-[240px] sm:h-[340px] lg:h-[460px] object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.07) 0%, transparent 55%)' }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* ── Three pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gold/15 border border-gold/15 rounded-2xl overflow-hidden">
          {pillarsData.map(({ tKey, label }) => (
            <div
              key={tKey}
              className="pillar group flex flex-col bg-cream/40 hover:bg-cream/80 p-6 sm:p-8 transition-colors duration-300"
            >
              <span className="font-display text-5xl sm:text-6xl font-light text-gold/18 mb-4 sm:mb-5 leading-none group-hover:text-gold/35 transition-colors duration-300">
                {label}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-medium text-dark-brown mb-2">
                {t(`about.pillars.${tKey}.title`)}
              </h3>
              <p className="font-body text-sm text-dark-brown/55 leading-relaxed">
                {t(`about.pillars.${tKey}.desc`)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
