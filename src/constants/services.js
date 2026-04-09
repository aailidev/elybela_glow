// ─── Services catalogue ───────────────────────────────────────
// Prices and durations are universal (not translated).
// Name/benefits keys map to i18n paths: services.items.<key>.name / .benefits

export const WHATSAPP_URL =
  'https://wa.me/34602623556?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20Elybela%20Glow';

// Genera URL de WhatsApp con el nombre del servicio concreto en el mensaje
export const getServiceWhatsAppURL = (serviceName) => {
  const msg = encodeURIComponent(
    `Hola, me gustaría reservar una cita de ${serviceName} en Elybela Glow`
  );
  return `https://wa.me/34602623556?text=${msg}`;
};

export const BOOKSY_URL =
  'https://booksy.com/es-es/174999_elybela-glow_masajes_49927_platja-d-aro?do=invite&_branch_match_id=1384487851090742734&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVTwr2Dy8tLE70NkyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA8DV14zwAAAA%3D';

const services = [
  {
    key: 'masajeRelajante',
    price: '40 €',
    duration: '+1h',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    alt: 'Masaje relajante en Elybela Glow, Platja d\'Aro',
  },
  {
    key: 'masajeFacial',
    price: '25 €',
    duration: '+30 min',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
    alt: 'Masaje facial en Elybela Glow, Platja d\'Aro',
  },
  {
    key: 'maderoterapia',
    price: '50 €',
    duration: '+1h',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
    alt: 'Maderoterapia corporal en Elybela Glow, Platja d\'Aro',
  },
  {
    key: 'wellnessManos',
    price: '25 €',
    duration: '+30 min',
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80',
    alt: 'Masaje wellness de manos en Elybela Glow',
  },
  {
    key: 'wellnessPies',
    price: '25 €',
    duration: '+30 min',
    image: 'https://images.unsplash.com/photo-1519494026892-476e6e8be01e?w=800&q=80',
    alt: 'Masaje wellness de pies en Elybela Glow',
  },
  {
    key: 'descontracturante',
    price: '45 €',
    duration: '+1h',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    alt: 'Masaje descontracturante en Elybela Glow, Platja d\'Aro',
  },
  {
    key: 'pestanasPostizas',
    price: '40 €',
    duration: '+1h 55min',
    image: 'https://images.unsplash.com/photo-1519235107-af8c8c3d2c4c?w=800&q=80',
    alt: 'Pestañas postizas profesionales en Elybela Glow',
  },
  {
    key: 'liftingPestanas',
    price: '40 €',
    duration: '+1h',
    image: 'https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=800&q=80',
    alt: 'Lifting de pestañas natural en Elybela Glow',
  },
  {
    key: 'liftingCejas',
    price: '40 €',
    duration: '+1h',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80',
    alt: 'Lifting de cejas en Elybela Glow, Platja d\'Aro',
  },
];

export default services;
