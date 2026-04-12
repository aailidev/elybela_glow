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
    image: '/Facial Massage.webp',
    alt: 'Masaje facial en Elybela Glow, Platja d\'Aro',
  },
  {
    key: 'maderoterapia',
    price: '50 €',
    duration: '+1h',
    image: '/Maderoterapia.webp',
    alt: 'Maderoterapia corporal en Elybela Glow, Platja d\'Aro',
  },
  {
    key: 'wellnessManos',
    price: '25 €',
    duration: '+30 min',
    image: '/Wellness Manos.webp',
    alt: 'Masaje wellness de manos en Elybela Glow',
  },
  {
    key: 'wellnessPies',
    price: '25 €',
    duration: '+30 min',
    image: '/Wellness Pies.webp',
    alt: 'Masaje wellness de pies en Elybela Glow',
  },
  {
    key: 'descontracturante',
    price: '45 €',
    duration: '+1h',
    image: 'DeepTissueMassage.webp',
    alt: 'Masaje descontracturante en Elybela Glow, Platja d\'Aro',
  },
  {
    key: 'pestanasPostizas',
    price: '40 €',
    duration: '+1h 55min',
    image: '/LashExtensions.webp',
    alt: 'Pestañas postizas profesionales en Elybela Glow',
  },
  {
    key: 'liftingPestanas',
    price: '40 €',
    duration: '+1h',
    image: '/Lifting de Pestañas.webp',
    alt: 'Lifting de pestañas natural en Elybela Glow',
  },
  {
    key: 'liftingCejas',
    price: '40 €',
    duration: '+1h',
    image: '/Lifting de Cejas.webp',
    alt: 'Lifting de cejas en Elybela Glow, Platja d\'Aro',
  },
];

export default services;
