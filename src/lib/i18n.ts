export type Lang = "en" | "fr" | "ar" | "es";

export const languages: { code: Lang; name: string; flag: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", name: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "ar", name: "العربية", flag: "🇲🇦", dir: "rtl" },
  { code: "es", name: "Español", flag: "🇪🇸", dir: "ltr" },
];

const translations = {
  en: {
    nav: { home: "Home", hotels: "Hotels", about: "About", contact: "Contact" },
    hero: {
      headline: "Experience Luxury Like Never Before",
      subtitle: "Discover world-class hotels handpicked for unforgettable stays.",
    },
    search: { destination: "Destination", checkin: "Check-in", checkout: "Check-out", guests: "Guests", search: "Search", whereTo: "Where to?", selectDate: "Select date", howMany: "How many?" },
    stats: { hotels: "Hotels", countries: "Countries", guests: "Happy Guests", rating: "Rating" },
    featured: { title: "Featured Hotels", subtitle: "Handpicked luxury properties from around the world.", bookNow: "Book Now" },
    howItWorks: {
      title: "How It Works",
      subtitle: "Three simple steps to your dream getaway.",
      steps: [
        { title: "Search Destination", desc: "Browse our curated collection of premium hotels worldwide." },
        { title: "Choose Your Hotel", desc: "Compare amenities, reviews, and prices to find your perfect match." },
        { title: "Confirm & Enjoy", desc: "Book instantly and receive confirmation. Your journey begins." },
      ],
    },
    luxury: {
      title: "The Luxury Experience",
      subtitle: "Every detail crafted for excellence.",
      features: ["24/7 Concierge Service", "Michelin-Star Dining", "Spa & Wellness", "Private Transfers", "Exclusive Member Perks", "Best Price Guarantee"],
    },
    testimonials: {
      title: "What Our Guests Say",
      subtitle: "Real experiences from travelers worldwide.",
    },
    newsletter: { title: "Unlock Exclusive Hotel Deals", subtitle: "Subscribe for members-only rates and early access to premium properties.", placeholder: "Your email address", subscribe: "Subscribe" },
    footer: { rights: "All rights reserved.", home: "Home", hotels: "Hotels", about: "About", contact: "Contact", privacy: "Privacy", terms: "Terms" },
    modal: { title: "Confirm Your Booking", name: "Name", email: "Email", phone: "Phone", confirm: "Confirm Booking", success: "Booking Confirmed!", successDesc: "A confirmation has been sent to your email." },
  },
  fr: {
    nav: { home: "Accueil", hotels: "Hôtels", about: "À Propos", contact: "Contact" },
    hero: {
      headline: "Vivez le Luxe Comme Jamais Auparavant",
      subtitle: "Découvrez des hôtels d'exception sélectionnés pour des séjours inoubliables.",
    },
    search: { destination: "Destination", checkin: "Arrivée", checkout: "Départ", guests: "Voyageurs", search: "Rechercher", whereTo: "Où aller?", selectDate: "Choisir une date", howMany: "Combien?" },
    stats: { hotels: "Hôtels", countries: "Pays", guests: "Clients Satisfaits", rating: "Note" },
    featured: { title: "Hôtels en Vedette", subtitle: "Propriétés de luxe triées sur le volet du monde entier.", bookNow: "Réserver" },
    howItWorks: {
      title: "Comment Ça Marche",
      subtitle: "Trois étapes simples pour votre escapade de rêve.",
      steps: [
        { title: "Cherchez une Destination", desc: "Parcourez notre collection d'hôtels premium dans le monde entier." },
        { title: "Choisissez votre Hôtel", desc: "Comparez les équipements, avis et prix pour trouver votre idéal." },
        { title: "Confirmez & Profitez", desc: "Réservez instantanément et recevez votre confirmation." },
      ],
    },
    luxury: {
      title: "L'Expérience de Luxe",
      subtitle: "Chaque détail conçu pour l'excellence.",
      features: ["Conciergerie 24/7", "Restaurant Étoilé", "Spa & Bien-être", "Transferts Privés", "Avantages Membres", "Garantie Meilleur Prix"],
    },
    testimonials: {
      title: "Ce que Disent nos Clients",
      subtitle: "Expériences réelles de voyageurs du monde entier.",
    },
    newsletter: { title: "Débloquez des Offres Exclusives", subtitle: "Abonnez-vous pour des tarifs réservés aux membres.", placeholder: "Votre adresse email", subscribe: "S'abonner" },
    footer: { rights: "Tous droits réservés.", home: "Accueil", hotels: "Hôtels", about: "À Propos", contact: "Contact", privacy: "Confidentialité", terms: "Conditions" },
    modal: { title: "Confirmer Votre Réservation", name: "Nom", email: "Email", phone: "Téléphone", confirm: "Confirmer la Réservation", success: "Réservation Confirmée!", successDesc: "Une confirmation a été envoyée à votre email." },
  },
  ar: {
    nav: { home: "الرئيسية", hotels: "الفنادق", about: "حول", contact: "اتصل" },
    hero: {
      headline: "اكتشف الفخامة كما لم تعشها من قبل",
      subtitle: "اكتشف فنادق عالمية منتقاة بعناية لإقامة لا تُنسى.",
    },
    search: { destination: "الوجهة", checkin: "تسجيل الدخول", checkout: "تسجيل الخروج", guests: "الضيوف", search: "بحث", whereTo: "إلى أين؟", selectDate: "اختر تاريخ", howMany: "كم عدد؟" },
    stats: { hotels: "فندق", countries: "دولة", guests: "ضيف سعيد", rating: "التقييم" },
    featured: { title: "الفنادق المميزة", subtitle: "فنادق فاخرة مختارة بعناية من جميع أنحاء العالم.", bookNow: "احجز الآن" },
    howItWorks: {
      title: "كيف يعمل",
      subtitle: "ثلاث خطوات بسيطة لعطلتك المثالية.",
      steps: [
        { title: "ابحث عن وجهتك", desc: "تصفح مجموعتنا المنتقاة من الفنادق الفاخرة حول العالم." },
        { title: "اختر فندقك", desc: "قارن المرافق والتقييمات والأسعار للعثور على الأنسب لك." },
        { title: "أكد وتمتع", desc: "احجز فوراً واحصل على التأكيد. رحلتك تبدأ الآن." },
      ],
    },
    luxury: {
      title: "تجربة الفخامة",
      subtitle: "كل تفصيل صُمم للتميز.",
      features: ["خدمة كونسيرج ٢٤/٧", "مطعم حائز على نجمة ميشلان", "سبا وعافية", "نقل خاص", "امتيازات الأعضاء", "ضمان أفضل سعر"],
    },
    testimonials: {
      title: "ماذا يقول ضيوفنا",
      subtitle: "تجارب حقيقية من مسافرين حول العالم.",
    },
    newsletter: { title: "احصل على عروض فندقية حصرية", subtitle: "اشترك للحصول على أسعار حصرية للأعضاء.", placeholder: "بريدك الإلكتروني", subscribe: "اشترك" },
    footer: { rights: "جميع الحقوق محفوظة.", home: "الرئيسية", hotels: "الفنادق", about: "حول", contact: "اتصل", privacy: "الخصوصية", terms: "الشروط" },
    modal: { title: "تأكيد حجزك", name: "الاسم", email: "البريد الإلكتروني", phone: "الهاتف", confirm: "تأكيد الحجز", success: "تم تأكيد الحجز!", successDesc: "تم إرسال التأكيد إلى بريدك الإلكتروني." },
  },
  es: {
    nav: { home: "Inicio", hotels: "Hoteles", about: "Acerca", contact: "Contacto" },
    hero: {
      headline: "Vive el Lujo Como Nunca Antes",
      subtitle: "Descubre hoteles de clase mundial seleccionados para estadías inolvidables.",
    },
    search: { destination: "Destino", checkin: "Entrada", checkout: "Salida", guests: "Huéspedes", search: "Buscar", whereTo: "¿A dónde?", selectDate: "Elegir fecha", howMany: "¿Cuántos?" },
    stats: { hotels: "Hoteles", countries: "Países", guests: "Huéspedes Felices", rating: "Calificación" },
    featured: { title: "Hoteles Destacados", subtitle: "Propiedades de lujo seleccionadas de todo el mundo.", bookNow: "Reservar" },
    howItWorks: {
      title: "Cómo Funciona",
      subtitle: "Tres pasos simples para tu escapada soñada.",
      steps: [
        { title: "Busca un Destino", desc: "Explora nuestra colección curada de hoteles premium en todo el mundo." },
        { title: "Elige tu Hotel", desc: "Compara amenidades, reseñas y precios para encontrar tu opción ideal." },
        { title: "Confirma y Disfruta", desc: "Reserva al instante y recibe tu confirmación. Tu viaje comienza." },
      ],
    },
    luxury: {
      title: "La Experiencia de Lujo",
      subtitle: "Cada detalle diseñado para la excelencia.",
      features: ["Conserjería 24/7", "Restaurante Estrella Michelin", "Spa y Bienestar", "Traslados Privados", "Beneficios Exclusivos", "Garantía Mejor Precio"],
    },
    testimonials: {
      title: "Lo que Dicen Nuestros Huéspedes",
      subtitle: "Experiencias reales de viajeros de todo el mundo.",
    },
    newsletter: { title: "Desbloquea Ofertas Exclusivas de Hoteles", subtitle: "Suscríbete para tarifas exclusivas para miembros.", placeholder: "Tu correo electrónico", subscribe: "Suscribirse" },
    footer: { rights: "Todos los derechos reservados.", home: "Inicio", hotels: "Hoteles", about: "Acerca", contact: "Contacto", privacy: "Privacidad", terms: "Términos" },
    modal: { title: "Confirmar tu Reserva", name: "Nombre", email: "Correo", phone: "Teléfono", confirm: "Confirmar Reserva", success: "¡Reserva Confirmada!", successDesc: "Se ha enviado una confirmación a tu correo." },
  },
} as const;

export type Translations = {
  nav: { home: string; hotels: string; about: string; contact: string };
  hero: { headline: string; subtitle: string };
  search: { destination: string; checkin: string; checkout: string; guests: string; search: string; whereTo: string; selectDate: string; howMany: string };
  stats: { hotels: string; countries: string; guests: string; rating: string };
  featured: { title: string; subtitle: string; bookNow: string };
  howItWorks: { title: string; subtitle: string; steps: { title: string; desc: string }[] };
  luxury: { title: string; subtitle: string; features: string[] };
  testimonials: { title: string; subtitle: string };
  newsletter: { title: string; subtitle: string; placeholder: string; subscribe: string };
  footer: { rights: string; home: string; hotels: string; about: string; contact: string; privacy: string; terms: string };
  modal: { title: string; name: string; email: string; phone: string; confirm: string; success: string; successDesc: string };
};

export function getTranslations(lang: Lang): Translations {
  const t = translations[lang];
  return JSON.parse(JSON.stringify(t));
}
