import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import services, { getServiceWhatsAppURL } from '../constants/services';

gsap.registerPlugin(ScrollTrigger);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

function ServiceCard({ service }) {
  const { t } = useTranslation();
  const name        = t(`services.items.${service.key}.name`);
  const benefits    = t(`services.items.${service.key}.benefits`, { returnObjects: true });
  const whatsappUrl = getServiceWhatsAppURL(name);

  return (
    <article className="service-card group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-dark-brown/25 transition-shadow duration-500">
      {/* Full-height image — altura adaptada por breakpoint */}
      <div className="relative h-[260px] sm:h-[320px] lg:h-[400px]">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.96) 0%, rgba(13,13,13,0.45) 50%, rgba(13,13,13,0.06) 100%)' }}
          aria-hidden="true"
        />

        {/* Price badge */}
        <div className="absolute top-3 right-3 bg-gold text-ebony font-body font-bold text-xs px-3 py-1.5 rounded-full shadow-lg shadow-black/30">
          {service.price}
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          {/* Duration */}
          <p className="flex items-center gap-2 font-body text-gold/65 text-[10px] sm:text-[11px] tracking-widest uppercase mb-1.5 sm:mb-2">
            <span className="w-4 h-px bg-gold/50 inline-block" aria-hidden="true" />
            {service.duration}
          </p>

          {/* Name */}
          <h3 className="font-display text-xl sm:text-2xl text-cream font-light leading-tight mb-2 sm:mb-3">
            {name}
          </h3>

          {/* Benefits — 2 items, ocultos en móvil muy pequeño */}
          {Array.isArray(benefits) && (
            <ul className="hidden xs:flex flex-col gap-1 mb-4 sm:mb-5">
              {benefits.slice(0, 2).map((benefit, i) => (
                <li key={i} className="font-body text-xs sm:text-sm text-cream/55 flex items-start gap-2">
                  <span className="text-gold/60 mt-0.5 text-xs flex-shrink-0" aria-hidden="true">✦</span>
                  {benefit}
                </li>
              ))}
            </ul>
          )}

          {/* Book button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Reservar ${name} en Elybela Glow por WhatsApp`}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-ebony font-body font-bold text-xs tracking-wide px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-md shadow-black/30 transition-all duration-200 active:scale-95"
          >
            <WhatsAppIcon />
            {t('services.bookBtn')}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('.service-card');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          stagger: 0.08, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 75%' },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="services-section bg-cream py-16 sm:py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-4 sm:mb-6">
          <div className="gold-divider w-10 sm:w-14 flex-shrink-0" />
          <p className="font-body text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Tratamientos
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4 mb-8 sm:mb-14">
          <h2
            className="font-display font-light text-dark-brown leading-[0.92] max-w-xl"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
          >
            {t('services.title')}
          </h2>
          <p className="font-body text-sm text-dark-brown/45 max-w-xs leading-relaxed md:text-right">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.key} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
