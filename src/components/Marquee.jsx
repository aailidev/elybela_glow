// Horizontal scrolling service strip — between Hero and About

const ITEMS = [
  'Masaje Relajante',
  'Maderoterapia',
  'Lifting de Pestañas',
  'Masaje Facial',
  'Wellness & Cuerpo',
  'Descontracturante',
  'Lifting de Cejas',
  'Pestañas Postizas',
];

const Dot = () => (
  <span className="mx-6 text-ebony/35 select-none" aria-hidden="true">✦</span>
);

export default function Marquee() {
  // Triple to ensure seamless loop at any viewport width
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="bg-gold py-4 overflow-hidden" aria-hidden="true">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {repeated.map((item, i) => (
          <span key={i} className="flex-shrink-0 font-display text-ebony text-sm md:text-base font-medium italic">
            {item}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
