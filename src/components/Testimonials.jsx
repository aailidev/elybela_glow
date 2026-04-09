import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BOOKSY_URL } from '../constants/services';

gsap.registerPlugin(ScrollTrigger);

// Google Maps review link — abre directamente el formulario de reseña
const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/search/?api=1&query=Elybela+Glow+Platja+d'Aro";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const BooksyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4 text-gold/40 group-hover:text-gold transition-colors duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const platforms = [
  {
    id: 'google',
    href: GOOGLE_REVIEW_URL,
    icon: <GoogleIcon />,
    name: 'Google',
    cta: 'Dejar reseña en Google',
    desc: 'Comparte tu experiencia en Google Maps y ayuda a otras personas a encontrarnos.',
  },
  {
    id: 'booksy',
    href: BOOKSY_URL,
    icon: <BooksyIcon />,
    name: 'Booksy',
    cta: 'Valorar en Booksy',
    desc: 'Si reservaste a través de Booksy, puedes valorar el tratamiento directamente allí.',
  },
];

const values = [
  { num: '100%', label: 'Productos naturales' },
  { num: '9',    label: 'Tratamientos' },
  { num: '5★',   label: 'Es nuestro objetivo' },
];

export default function Testimonials() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('.reveal-item'),
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0,
          stagger: 0.1, duration: 0.9, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 75%' },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-ebony py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header */}
        <div className="reveal-item flex items-center gap-5 mb-6">
          <div className="gold-divider w-14 flex-shrink-0" />
          <p className="font-body text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            {t('testimonials.label', 'Reseñas')}
          </p>
        </div>

        <h2
          className="reveal-item font-display font-light text-cream leading-[0.92] mb-5 max-w-2xl"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
        >
          Sé de las primeras en compartir tu experiencia
        </h2>

        <p className="reveal-item font-body text-cream/45 text-base leading-relaxed max-w-lg mb-14">
          Acabamos de abrir. Cada visita nos importa y nos encantaría saber qué te pareció. Tu opinión nos ayuda a seguir mejorando.
        </p>

        {/* ── Platform CTA cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {platforms.map((p) => (
            <a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.cta}
              className="reveal-item group flex items-center gap-5 border border-gold/15 hover:border-gold/45 rounded-2xl p-7 transition-all duration-400 hover:bg-white/[0.03]"
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/18 transition-colors duration-300">
                {p.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="font-display text-lg text-cream font-light mb-0.5">{p.cta}</p>
                <p className="font-body text-sm text-cream/38 leading-snug">{p.desc}</p>
              </div>

              <ArrowIcon />
            </a>
          ))}
        </div>

        {/* ── Value strip */}
        <div className="reveal-item flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-0 pt-10 border-t border-gold/10">
          {values.map((v, i) => (
            <div key={i} className={`flex-1 ${i > 0 ? 'sm:pl-10 sm:border-l sm:border-gold/10' : ''}`}>
              <p className="font-display text-3xl text-gold font-light leading-none mb-1">{v.num}</p>
              <p className="font-body text-xs text-cream/30 uppercase tracking-widest">{v.label}</p>
            </div>
          ))}
          <div className="hidden sm:flex items-center gap-1 pl-10 border-l border-gold/10">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
        </div>

      </div>
    </section>
  );
}
