import type { Locale } from '@/types'

export const translations = {
  en: {
    common: {
      bookNow: 'Book Now',
      viewTours: 'View Tours',
      seeAllTours: 'See All Tours',
      exploreAllTours: 'Explore All Tours',
      viewAllTours: 'View All Tours',
      browseMoreTours: 'Browse More Tours',
      viewOurTours: 'View Our Tours',
      contactUs: 'Contact Us',
      learnAboutUs: 'Learn About Us',
      backToHome: 'Back to Home',
      person: 'person',
      perPerson: '/ person',
      featured: 'Featured',
      max: 'Max',
    },
    nav: {
      tours: 'Tours',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
      toggleLanguage: 'Toggle language',
      toggleMenu: 'Toggle menu',
    },
    home: {
      badge: "Costa Rica's #1 Adventure Tours",
      heroTitle1: 'Adventure Starts',
      heroTitle2: 'Here',
      heroSubtitle:
        'ATV rides, ziplines, white water rafting & more — experience the wild heart of Costa Rica with local experts.',
      trust: {
        safety: 'Safety First',
        safetySub: 'Certified guides',
        rated: '5-Star Rated',
        ratedSub: '500+ reviews',
        flexible: 'Flexible Booking',
        flexibleSub: 'Free cancellation',
        local: 'Local Experts',
        localSub: '10+ years exp.',
      },
      featuredTitle: 'Featured Adventures',
      featuredSubtitle: 'From volcanic ATV rides to canopy ziplines — pick your thrill level.',
      whyUs: 'Why Choose Us',
      whyTitle1: 'Local guides,',
      whyTitle2: 'unforgettable adventures',
      whyBody:
        "We're a local Costa Rican adventure company based in La Fortuna. Our bilingual guides know every trail, waterfall, and jungle path — and are obsessed with making your experience safe, fun, and unforgettable.",
      whyList: [
        'Family-owned & locally operated',
        'Bilingual guides (English & Spanish)',
        'Small group tours for a personal experience',
        'All safety equipment included',
        'Flexible scheduling & free cancellation',
      ],
      ctaTitle: 'Ready for your adventure?',
      ctaSubtitle: 'Book directly with us and get the best price — no booking fees, no middlemen.',
    },
    tours: {
      title: 'Our Adventures',
      subtitle:
        'Choose from ATV, zipline, rafting, waterfall hikes and more — all with certified local guides.',
      categories: {
        all: 'All Tours',
        atv: 'ATV',
        zipline: 'Zipline',
        rafting: 'Rafting',
        waterfall: 'Waterfall',
        combo: 'Combos',
      },
      metaTitle: 'Adventure Tours in Costa Rica',
      metaDescription:
        'Browse all our Costa Rica adventure tours: ATV, zipline, rafting, waterfall hikes and combo packages. Book direct with local experts in La Fortuna.',
    },
    tour: {
      allTours: 'All Tours',
      maxPeople: (n: number) => `Max ${n} people`,
      about: 'About This Tour',
      highlights: 'Highlights',
      included: "What's Included",
      notIncluded: 'Not Included',
      meetingPoint: 'Meeting Point',
      difficulty: {
        Easy: 'Easy',
        Moderate: 'Moderate',
        Challenging: 'Challenging',
      },
    },
    blog: {
      title: 'Travel Blog',
      subtitle: 'Tips, guides, and stories from the jungles of Costa Rica.',
      metaTitle: 'Blog — Costa Rica Adventure Travel Tips',
      metaDescription:
        'Travel tips, destination guides, and adventure insights for visiting Costa Rica. La Fortuna, Arenal, ATV, zipline, and more.',
      blogImagePlaceholder: '[ Blog Image ]',
      blogPostImagePlaceholder: '[Blog post image]',
      backToBlog: 'Blog',
      extraParagraph:
        "Costa Rica offers incredible biodiversity, stunning natural landscapes, and world-class adventure activities. Whether you're a first-time visitor or a repeat traveler, there's always something new to discover in this beautiful country.",
      ctaTitle: 'Ready to experience Costa Rica?',
      ctaSubtitle: 'Book one of our adventure tours and create your own story.',
    },
    about: {
      metaTitle: 'About Us — Costa Rican Doing',
      metaDescription:
        'Meet the team behind Costa Rican Doing. We are local adventure experts based in La Fortuna, Costa Rica, dedicated to delivering unforgettable tours.',
      title: 'About Us',
      subtitle:
        "We are local adventurers, guides, and nature lovers — and we want to share Costa Rica's magic with you.",
      storyTag: 'Our Story',
      storyTitle: 'Born in La Fortuna',
      storyP1:
        "Costa Rican Doing was founded by a family of adventure enthusiasts who grew up in the shadow of Arenal Volcano. We know every trail, waterfall, and river crossing in the region — because we've explored them all ourselves.",
      storyP2:
        'Our mission is simple: give every visitor the authentic, thrilling, and safe adventure experience that Costa Rica is famous for. We operate small groups, use professional equipment, and our bilingual guides are trained to make every moment special.',
      storyP3:
        "When you book with us, you're booking with people who truly love what they do — and love showing visitors the real Costa Rica.",
      teamPhotoPlaceholder: '[ Team Photo ]',
      valuesTitle: 'Our Values',
      values: [
        {
          title: 'Safety',
          desc: 'Your safety is non-negotiable. All equipment is inspected daily and our guides are certified.',
        },
        {
          title: 'Passion',
          desc: 'We love adventure and it shows. We put our heart into every tour we run.',
        },
        {
          title: 'Sustainability',
          desc: 'We respect and protect the nature that makes Costa Rica so special.',
        },
        {
          title: 'Community',
          desc: 'We hire and support local guides, drivers, and businesses.',
        },
      ],
      ctaTitle: 'Come adventure with us',
      ctaSubtitle: 'Browse our tours and find your perfect Costa Rica adventure.',
    },
    contact: {
      metaTitle: 'Contact Us — Costa Rican Doing',
      metaDescription:
        'Get in touch with Costa Rican Doing. We are based in La Fortuna, Costa Rica and ready to help you plan your adventure.',
      title: 'Contact Us',
      subtitle: "Have questions? We're happy to help you plan the perfect Costa Rica adventure.",
      getInTouch: 'Get In Touch',
      location: 'Location',
      locationValue: 'La Fortuna, Alajuela, Costa Rica',
      phone: 'Phone / WhatsApp',
      email: 'Email',
      hours: 'Office Hours',
      hoursValue: 'Mon – Sun: 7:00 AM – 6:00 PM (CST)',
      mapPlaceholder: '[ Google Maps embed — La Fortuna, Costa Rica ]',
      sendMessage: 'Send Us a Message',
    },
    bookingConfirmation: {
      metaTitle: 'Booking Confirmation — Costa Rican Doing',
      metaDescription: 'Your booking request has been received. We will confirm within 24 hours.',
      title: 'Booking Received!',
      subtitle: 'Thank you for choosing Costa Rican Doing.',
      body1: "We've received your booking request and will contact you within",
      body24h: '24 hours',
      body2: 'via email or WhatsApp to confirm the details and arrange payment.',
      nextTitle: 'What happens next?',
      steps: [
        'Our team reviews your booking request',
        'We contact you via WhatsApp or email to confirm availability',
        'You receive a confirmation with meeting point details',
        'Adventure time! 🌿',
      ],
    },
    terms: {
      metaTitle: 'Terms & Conditions — Costa Rican Doing',
      metaDescription: 'Terms and conditions for booking adventure tours with Costa Rican Doing.',
      title: 'Terms & Conditions',
      lastUpdated: 'Last updated: January 2025',
      sections: [
        {
          heading: '1. Booking & Reservations',
          body: 'All bookings are subject to availability and are confirmed only upon receipt of a confirmation email or WhatsApp message from Costa Rican Doing. Booking requests submitted through our website do not constitute a confirmed reservation.',
        },
        {
          heading: '2. Payments',
          body: 'Payment details will be provided upon confirmation. We accept cash (USD or CRC), credit cards, and bank transfers. Full payment or a deposit may be required at time of confirmation depending on the tour.',
        },
      ],
      cancellationHeading: '3. Cancellation Policy',
      cancellationItems: [
        { bold: '72+ hours before tour:', rest: 'Full refund' },
        { bold: '24–72 hours before tour:', rest: '50% refund' },
        { bold: 'Less than 24 hours:', rest: 'No refund' },
        { bold: 'No-show:', rest: 'No refund' },
      ],
      cancellationFooter:
        'Costa Rican Doing reserves the right to cancel tours due to unsafe weather or road conditions. In such cases, a full refund or rescheduling option will be offered.',
      healthHeading: '4. Health & Safety Requirements',
      healthBody:
        'Participants must be in adequate physical condition for their chosen activity. Minimum age requirements apply per tour. Participants with medical conditions should consult their doctor before booking. Costa Rican Doing reserves the right to refuse participation if safety is at risk.',
      liabilityHeading: '5. Liability Waiver',
      liabilityBody:
        'Adventure activities carry inherent risks. By participating, guests acknowledge these risks and agree that Costa Rican Doing shall not be liable for injuries, accidents, or losses arising from participation in our tours, except in cases of gross negligence.',
      photoHeading: '6. Photography & Media',
      photoBody:
        'Costa Rican Doing may take photos or videos during tours for marketing purposes. By participating, guests grant permission for use of such media unless they explicitly opt out in writing before the tour.',
      contactHeading: '7. Contact',
      contactPrefix: 'For questions about these terms, contact us at',
    },
    footer: {
      tagline:
        'Your local adventure experts in Costa Rica. ATV, zipline, rafting and more — unforgettable experiences await.',
      ourTours: 'Our Tours',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow us',
      aboutUs: 'About Us',
      blog: 'Blog',
      contactLink: 'Contact',
      terms: 'Terms & Conditions',
      copyright: 'All rights reserved.',
      tourLinks: {
        atv: 'ATV La Fortuna',
        zipline: 'Zipline La Fortuna',
        rafting: 'White Water Rafting',
        safariFloat: 'Safari Float',
        canyoning: 'Canyoning',
        horseback: 'Horseback Riding',
      },
    },
    notFound: {
      title: 'Page Not Found',
      subtitle: "Sorry, we couldn't find what you were looking for.",
      back: 'Back to Home',
    },
  },
  es: {
    common: {
      bookNow: 'Reservar',
      viewTours: 'Ver Tours',
      seeAllTours: 'Ver Todos los Tours',
      exploreAllTours: 'Explorar Todos los Tours',
      viewAllTours: 'Ver Todos los Tours',
      browseMoreTours: 'Ver Más Tours',
      viewOurTours: 'Ver Nuestros Tours',
      contactUs: 'Contáctanos',
      learnAboutUs: 'Conócenos',
      backToHome: 'Volver al Inicio',
      person: 'persona',
      perPerson: '/ persona',
      featured: 'Destacado',
      max: 'Máx',
    },
    nav: {
      tours: 'Tours',
      blog: 'Blog',
      about: 'Nosotros',
      contact: 'Contacto',
      toggleLanguage: 'Cambiar idioma',
      toggleMenu: 'Abrir menú',
    },
    home: {
      badge: 'Los Tours de Aventura #1 de Costa Rica',
      heroTitle1: 'La Aventura Comienza',
      heroTitle2: 'Aquí',
      heroSubtitle:
        'Paseos en ATV, tirolesas, rafting en aguas bravas y más — vive el corazón salvaje de Costa Rica con expertos locales.',
      trust: {
        safety: 'Seguridad Primero',
        safetySub: 'Guías certificados',
        rated: '5 Estrellas',
        ratedSub: '+500 reseñas',
        flexible: 'Reserva Flexible',
        flexibleSub: 'Cancelación gratis',
        local: 'Expertos Locales',
        localSub: '+10 años exp.',
      },
      featuredTitle: 'Aventuras Destacadas',
      featuredSubtitle:
        'Desde paseos en ATV por el volcán hasta tirolesas en el dosel — elige tu nivel de emoción.',
      whyUs: 'Por Qué Elegirnos',
      whyTitle1: 'Guías locales,',
      whyTitle2: 'aventuras inolvidables',
      whyBody:
        'Somos una empresa local de aventura en Costa Rica con sede en La Fortuna. Nuestros guías bilingües conocen cada sendero, catarata y camino en la jungla — y están obsesionados con que tu experiencia sea segura, divertida e inolvidable.',
      whyList: [
        'Empresa familiar y local',
        'Guías bilingües (inglés y español)',
        'Tours en grupos pequeños para una experiencia personal',
        'Equipo de seguridad incluido',
        'Horarios flexibles y cancelación gratuita',
      ],
      ctaTitle: '¿Listo para tu aventura?',
      ctaSubtitle:
        'Reserva directamente con nosotros y obtén el mejor precio — sin cargos, sin intermediarios.',
    },
    tours: {
      title: 'Nuestras Aventuras',
      subtitle:
        'Elige entre ATV, tirolesa, rafting, caminatas a cataratas y más — todo con guías locales certificados.',
      categories: {
        all: 'Todos los Tours',
        atv: 'ATV',
        zipline: 'Tirolesa',
        rafting: 'Rafting',
        waterfall: 'Catarata',
        combo: 'Combos',
      },
      metaTitle: 'Tours de Aventura en Costa Rica',
      metaDescription:
        'Explora todos nuestros tours de aventura en Costa Rica: ATV, tirolesa, rafting, caminatas a cataratas y paquetes combo. Reserva directo con expertos locales en La Fortuna.',
    },
    tour: {
      allTours: 'Todos los Tours',
      maxPeople: (n: number) => `Máx ${n} personas`,
      about: 'Acerca de Este Tour',
      highlights: 'Aspectos Destacados',
      included: 'Qué Incluye',
      notIncluded: 'No Incluye',
      meetingPoint: 'Punto de Encuentro',
      difficulty: {
        Easy: 'Fácil',
        Moderate: 'Moderado',
        Challenging: 'Desafiante',
      },
    },
    blog: {
      title: 'Blog de Viajes',
      subtitle: 'Consejos, guías e historias de las junglas de Costa Rica.',
      metaTitle: 'Blog — Consejos de Viajes de Aventura en Costa Rica',
      metaDescription:
        'Consejos de viaje, guías de destinos y reflexiones sobre aventuras para visitar Costa Rica. La Fortuna, Arenal, ATV, tirolesa y más.',
      blogImagePlaceholder: '[ Imagen del Blog ]',
      blogPostImagePlaceholder: '[Imagen del artículo]',
      backToBlog: 'Blog',
      extraParagraph:
        'Costa Rica ofrece una biodiversidad increíble, paisajes naturales impresionantes y actividades de aventura de clase mundial. Seas visitante por primera vez o un viajero frecuente, siempre hay algo nuevo por descubrir en este hermoso país.',
      ctaTitle: '¿Listo para vivir Costa Rica?',
      ctaSubtitle: 'Reserva uno de nuestros tours de aventura y crea tu propia historia.',
    },
    about: {
      metaTitle: 'Nosotros — Costa Rican Doing',
      metaDescription:
        'Conoce al equipo detrás de Costa Rican Doing. Somos expertos locales en aventura con sede en La Fortuna, Costa Rica, dedicados a ofrecer tours inolvidables.',
      title: 'Nosotros',
      subtitle:
        'Somos aventureros locales, guías y amantes de la naturaleza — y queremos compartir contigo la magia de Costa Rica.',
      storyTag: 'Nuestra Historia',
      storyTitle: 'Nacidos en La Fortuna',
      storyP1:
        'Costa Rican Doing fue fundada por una familia de entusiastas de la aventura que creció a la sombra del Volcán Arenal. Conocemos cada sendero, catarata y cruce de río de la región — porque los hemos explorado todos.',
      storyP2:
        'Nuestra misión es simple: brindarle a cada visitante la experiencia de aventura auténtica, emocionante y segura por la que Costa Rica es famosa. Operamos en grupos pequeños, usamos equipo profesional y nuestros guías bilingües están entrenados para hacer especial cada momento.',
      storyP3:
        'Cuando reservas con nosotros, reservas con personas que realmente aman lo que hacen — y aman mostrar a los visitantes la verdadera Costa Rica.',
      teamPhotoPlaceholder: '[ Foto del Equipo ]',
      valuesTitle: 'Nuestros Valores',
      values: [
        {
          title: 'Seguridad',
          desc: 'Tu seguridad no es negociable. El equipo se inspecciona a diario y nuestros guías están certificados.',
        },
        {
          title: 'Pasión',
          desc: 'Amamos la aventura y se nota. Ponemos el corazón en cada tour que hacemos.',
        },
        {
          title: 'Sostenibilidad',
          desc: 'Respetamos y protegemos la naturaleza que hace tan especial a Costa Rica.',
        },
        {
          title: 'Comunidad',
          desc: 'Contratamos y apoyamos a guías, conductores y negocios locales.',
        },
      ],
      ctaTitle: 'Vive la aventura con nosotros',
      ctaSubtitle: 'Explora nuestros tours y encuentra tu aventura perfecta en Costa Rica.',
    },
    contact: {
      metaTitle: 'Contáctanos — Costa Rican Doing',
      metaDescription:
        'Ponte en contacto con Costa Rican Doing. Estamos en La Fortuna, Costa Rica, listos para ayudarte a planear tu aventura.',
      title: 'Contáctanos',
      subtitle: '¿Tienes preguntas? Con gusto te ayudamos a planear la aventura perfecta en Costa Rica.',
      getInTouch: 'Ponte en Contacto',
      location: 'Ubicación',
      locationValue: 'La Fortuna, Alajuela, Costa Rica',
      phone: 'Teléfono / WhatsApp',
      email: 'Correo',
      hours: 'Horario de Oficina',
      hoursValue: 'Lun – Dom: 7:00 AM – 6:00 PM (CST)',
      mapPlaceholder: '[ Mapa de Google — La Fortuna, Costa Rica ]',
      sendMessage: 'Envíanos un Mensaje',
    },
    bookingConfirmation: {
      metaTitle: 'Confirmación de Reserva — Costa Rican Doing',
      metaDescription: 'Tu solicitud de reserva fue recibida. Confirmaremos en menos de 24 horas.',
      title: '¡Reserva Recibida!',
      subtitle: 'Gracias por elegir Costa Rican Doing.',
      body1: 'Recibimos tu solicitud de reserva y te contactaremos en menos de',
      body24h: '24 horas',
      body2: 'por correo o WhatsApp para confirmar detalles y coordinar el pago.',
      nextTitle: '¿Qué sigue?',
      steps: [
        'Nuestro equipo revisa tu solicitud de reserva',
        'Te contactamos por WhatsApp o correo para confirmar disponibilidad',
        'Recibes una confirmación con los detalles del punto de encuentro',
        '¡Hora de la aventura! 🌿',
      ],
    },
    terms: {
      metaTitle: 'Términos y Condiciones — Costa Rican Doing',
      metaDescription: 'Términos y condiciones para reservar tours de aventura con Costa Rican Doing.',
      title: 'Términos y Condiciones',
      lastUpdated: 'Última actualización: Enero 2025',
      sections: [
        {
          heading: '1. Reservas',
          body: 'Todas las reservas están sujetas a disponibilidad y se confirman únicamente al recibir un correo o mensaje de WhatsApp de Costa Rican Doing. Las solicitudes enviadas por nuestro sitio no constituyen una reserva confirmada.',
        },
        {
          heading: '2. Pagos',
          body: 'Los detalles de pago se brindan al confirmar la reserva. Aceptamos efectivo (USD o CRC), tarjetas de crédito y transferencias bancarias. Se puede requerir pago total o un depósito al confirmar, dependiendo del tour.',
        },
      ],
      cancellationHeading: '3. Política de Cancelación',
      cancellationItems: [
        { bold: '72+ horas antes del tour:', rest: 'Reembolso total' },
        { bold: '24–72 horas antes del tour:', rest: '50% de reembolso' },
        { bold: 'Menos de 24 horas:', rest: 'Sin reembolso' },
        { bold: 'No presentarse:', rest: 'Sin reembolso' },
      ],
      cancellationFooter:
        'Costa Rican Doing se reserva el derecho de cancelar tours por condiciones climáticas o de ruta inseguras. En tales casos, se ofrecerá reembolso total o reprogramación.',
      healthHeading: '4. Requisitos de Salud y Seguridad',
      healthBody:
        'Los participantes deben estar en condiciones físicas adecuadas para la actividad elegida. Se aplican edades mínimas por tour. Personas con condiciones médicas deben consultar a su médico antes de reservar. Costa Rican Doing se reserva el derecho de rechazar la participación si la seguridad está en riesgo.',
      liabilityHeading: '5. Exención de Responsabilidad',
      liabilityBody:
        'Las actividades de aventura conllevan riesgos inherentes. Al participar, los huéspedes reconocen estos riesgos y aceptan que Costa Rican Doing no será responsable de lesiones, accidentes o pérdidas derivadas de la participación en nuestros tours, salvo en casos de negligencia grave.',
      photoHeading: '6. Fotografía y Medios',
      photoBody:
        'Costa Rican Doing puede tomar fotos o videos durante los tours con fines de marketing. Al participar, los huéspedes otorgan permiso para el uso de dicho material, salvo que expresen lo contrario por escrito antes del tour.',
      contactHeading: '7. Contacto',
      contactPrefix: 'Para preguntas sobre estos términos, escríbenos a',
    },
    footer: {
      tagline:
        'Tus expertos locales de aventura en Costa Rica. ATV, tirolesa, rafting y más — experiencias inolvidables te esperan.',
      ourTours: 'Nuestros Tours',
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      followUs: 'Síguenos',
      aboutUs: 'Nosotros',
      blog: 'Blog',
      contactLink: 'Contacto',
      terms: 'Términos y Condiciones',
      copyright: 'Todos los derechos reservados.',
      tourLinks: {
        atv: 'ATV La Fortuna',
        zipline: 'Tirolesa La Fortuna',
        rafting: 'Rafting en Aguas Bravas',
        safariFloat: 'Safari Float',
        canyoning: 'Canyoning',
        horseback: 'Cabalgata',
      },
    },
    notFound: {
      title: 'Página No Encontrada',
      subtitle: 'Lo sentimos, no pudimos encontrar lo que buscabas.',
      back: 'Volver al Inicio',
    },
  },
} as const

export type TranslationShape = typeof translations['en']

export function getTranslations(locale: Locale): TranslationShape {
  return (translations[locale] ?? translations.en) as TranslationShape
}

export const locales: Locale[] = ['en', 'es']

export function isValidLocale(value: string): value is Locale {
  return value === 'en' || value === 'es'
}
