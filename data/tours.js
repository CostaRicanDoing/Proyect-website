// =============================================
// TOURS DATA - SINGLE SOURCE OF TRUTH
// All tour information in one place
// =============================================

const TOURS_DATA = {
    // La Fortuna Tours
    'atv-fortuna': {
        id: 'atv-fortuna',
        region: 'la-fortuna',
        title: { es: 'ATV Tour', en: 'ATV Tour' },
        image: 'images/atv-to-the-volcano-nueva.webp',
        badge: { es: 'Aventura', en: 'Adventure' },
        badgeClass: '',
        description: {
            es: 'Recorre senderos de montana y cruza rios a bordo de un ATV. Una experiencia llena de adrenalina con vistas al Volcan Arenal.',
            en: 'Ride through mountain trails and cross rivers aboard an ATV. An adrenaline-filled experience with views of Arenal Volcano.'
        },
        shortDescription: {
            es: 'Recorre senderos de montana y cruza rios a bordo de un ATV. Una experiencia llena de adrenalina con vistas al Volcan Arenal.',
            en: 'Ride through mountain trails and cross rivers aboard an ATV. An adrenaline-filled experience with views of Arenal Volcano.'
        },
        price: 130,
        priceDisplay: { es: 'Desde $130', en: 'From $130' },
        priceType: 'per-person',
        details: [
            { icon: 'fa-mountain', text: { es: 'Visita al Volcan Arenal', en: 'Arenal Volcano visit' } }
        ],
        includes: {
            es: ['Guia bilingue', 'Equipo de seguridad (casco, gafas)', 'Agua embotellada', 'Transporte desde tu hotel'],
            en: ['Bilingual guide', 'Safety equipment (helmet, goggles)', 'Bottled water', 'Transportation from your hotel']
        },
        bring: {
            es: ['Ropa comoda que se pueda ensuciar', 'Zapatos cerrados', 'Cambio de ropa', 'Protector solar', 'Repelente de insectos'],
            en: ['Comfortable clothes that can get dirty', 'Closed-toe shoes', 'Change of clothes', 'Sunscreen', 'Insect repellent']
        },
        info: {
            es: ['Duracion: 3 horas', 'Edad minima: 6 anos', 'Peso maximo: 250 lbs', 'No requiere experiencia previa'],
            en: ['Duration: 3 hours', 'Minimum age: 6 years', 'Maximum weight: 250 lbs', 'No prior experience required']
        }
    },
    'canyoning': {
        id: 'canyoning',
        region: 'la-fortuna',
        title: { es: 'Canyoning / Barranquismo', en: 'Canyoning' },
        image: 'images/canyoning-nueva.webp',
        badge: { es: 'Extremo', en: 'Extreme' },
        badgeClass: '',
        description: {
            es: 'Vive una experiencia de barranquismo inolvidable en plena selva tropical. Desciende por impresionantes cascadas, recorre canones naturales y disfruta de tirolesas mientras te adentras en el corazon del bosque lluvioso. Ideal para principiantes y expertos.',
            en: 'Live an unforgettable canyoning experience in the tropical rainforest. Descend through impressive waterfalls, explore natural canyons and enjoy ziplines as you venture into the heart of the rainforest. Ideal for beginners and experts.'
        },
        shortDescription: {
            es: 'Vive una experiencia de barranquismo inolvidable en plena selva tropical. Desciende por cascadas, recorre canones naturales y disfruta de tirolesas. Ideal para principiantes y expertos.',
            en: 'Live an unforgettable canyoning experience in the tropical rainforest. Descend through waterfalls, explore natural canyons and enjoy ziplines. Ideal for beginners and experts.'
        },
        price: 105,
        priceDisplay: { es: '$105', en: '$105' },
        priceType: 'per-person',
        details: [
            { icon: 'fa-mountain', text: { es: '5 rappels', en: '5 rappels' } },
            { icon: 'fa-utensils', text: { es: 'Almuerzo incluido', en: 'Lunch included' } }
        ],
        includes: {
            es: ['Almuerzo (Casado a elegir: pollo, carne, vegano o vegetariano)', '2 cables de canopy de 150m y 400m', '5 rappels de 20, 25, 30, 35 y 60 metros', 'Equipo completo', 'Guias certificados', 'Transporte Fortuna y alrededores'],
            en: ['Lunch (Casado choice: chicken, beef, vegan or vegetarian)', '2 canopy cables of 150m and 400m', '5 rappels of 20, 25, 30, 35 and 60 meters', 'Complete equipment', 'Certified guides', 'Transportation Fortuna and surroundings']
        },
        bring: {
            es: ['Camisa manga larga (proteccion contra cuerdas)', 'Pantalones comodos', 'Zapatos de agua o sandalias tipo Chaco', 'Toalla pequena', 'Ropa de cambio', 'Bolsa impermeable pequena (para camara o telefono)'],
            en: ['Long sleeve shirt (rope protection)', 'Comfortable pants', 'Water shoes or Chaco-type sandals', 'Small towel', 'Change of clothes', 'Small waterproof bag (for camera or phone)']
        },
        info: {
            es: ['Horarios: 7:00am - 10:00am - 1:00pm', 'Duracion: 4 horas aprox.', 'Edad minima: 5 anos', 'No usar bloqueador ni repelente en el rostro (puede irritar los ojos en el agua)', 'Lockers disponibles para sus pertenencias', 'Todo articulo que lleve al tour es bajo su propia responsabilidad'],
            en: ['Schedules: 7:00am - 10:00am - 1:00pm', 'Duration: 4 hours approx.', 'Minimum age: 5 years', 'Do not use sunscreen or repellent on face (may irritate eyes in water)', 'Lockers available for your belongings', 'Any item you bring to the tour is at your own responsibility']
        }
    },
    'zipline-fortuna': {
        id: 'zipline-fortuna',
        region: 'la-fortuna',
        title: { es: 'Zipline', en: 'Zipline' },
        image: 'images/zipline-la-fortuna-nueva.webp',
        badge: { es: 'Popular', en: 'Popular' },
        badgeClass: '',
        description: {
            es: 'Vuela sobre el dosel del bosque tropical con vistas panoramicas del volcan. Multiples cables para una experiencia completa.',
            en: 'Fly over the tropical forest canopy with panoramic views of the volcano. Multiple cables for a complete experience.'
        },
        shortDescription: {
            es: 'Vuela sobre el dosel del bosque tropical con vistas panoramicas del volcan. Multiples cables para una experiencia completa.',
            en: 'Fly over the tropical forest canopy with panoramic views of the volcano. Multiple cables for a complete experience.'
        },
        price: 85,
        priceDisplay: { es: '$85', en: '$85' },
        priceType: 'per-person',
        details: [
            { icon: 'fa-wind', text: { es: '10 cables', en: '10 cables' } }
        ],
        includes: {
            es: ['Guia profesional', 'Equipo de seguridad completo', '10 cables de tirolesa', 'Transporte'],
            en: ['Professional guide', 'Complete safety equipment', '10 zipline cables', 'Transportation']
        },
        bring: {
            es: ['Ropa comoda', 'Zapatos cerrados', 'Protector solar', 'Camara con correa de seguridad'],
            en: ['Comfortable clothes', 'Closed-toe shoes', 'Sunscreen', 'Camera with safety strap']
        },
        info: {
            es: ['Duracion: Maximo 2 horas', '10 cables', 'Edad minima: 4 anos', 'Peso maximo: 275 lbs'],
            en: ['Duration: Maximum 2 hours', '10 cables', 'Minimum age: 4 years', 'Maximum weight: 275 lbs']
        }
    },
    'rafting': {
        id: 'rafting',
        region: 'la-fortuna',
        title: { es: 'Rafting de Aventura', en: 'Adventure Rafting' },
        image: 'images/rafting-class-lll-nueva.webp',
        badge: { es: 'Clase II-III', en: 'Class II-III' },
        badgeClass: '',
        description: {
            es: 'Vive la emocion del rafting navegando por rios rodeados de selva tropical y paisajes espectaculares cerca de Arenal y La Fortuna. Rapidos clase II-III ideales para principiantes y nivel intermedio. Podras observar aves, monos y vida silvestre durante el recorrido.',
            en: 'Experience the thrill of rafting through rivers surrounded by tropical jungle and spectacular landscapes near Arenal and La Fortuna. Class II-III rapids ideal for beginners and intermediate level. You can observe birds, monkeys and wildlife along the way.'
        },
        shortDescription: {
            es: 'Vive la emocion del rafting navegando por rios rodeados de selva tropical cerca de Arenal. Ideal para principiantes y nivel intermedio. Observa aves, monos y vida silvestre.',
            en: 'Experience the thrill of rafting through rivers surrounded by tropical jungle near Arenal. Ideal for beginners and intermediate level. Observe birds, monkeys and wildlife.'
        },
        price: 78,
        priceDisplay: { es: '$78', en: '$78' },
        priceType: 'per-person',
        details: [
            { icon: 'fa-water', text: { es: 'Rapidos Clase II-III', en: 'Class II-III Rapids' } },
            { icon: 'fa-utensils', text: { es: 'Almuerzo incluido', en: 'Lunch included' } }
        ],
        includes: {
            es: ['Guia certificado', 'Equipo completo de rafting', 'Frutas y hidratacion', 'Almuerzo', 'Transporte'],
            en: ['Certified guide', 'Complete rafting equipment', 'Fruits and hydration', 'Lunch', 'Transportation']
        },
        bring: {
            es: ['Camisa manga larga (para proteccion solar)', 'Shorts o pantalones comodos', 'Zapatos de agua o sandalias tipo Chaco', 'Toalla pequena', 'Ropa de cambio', 'Bolsa impermeable pequena (para camara o telefono)'],
            en: ['Long sleeve shirt (for sun protection)', 'Shorts or comfortable pants', 'Water shoes or Chaco-type sandals', 'Small towel', 'Change of clothes', 'Small waterproof bag (for camera or phone)']
        },
        info: {
            es: ['Horario: 10:00am', 'Duracion: 4 horas y media aprox. (con transporte)', 'Rapidos Clase II-III', 'Edad minima: 6 anos', 'Todo articulo que lleve al tour es bajo su propia responsabilidad'],
            en: ['Schedule: 10:00am', 'Duration: 4.5 hours approx. (with transportation)', 'Class II-III rapids', 'Minimum age: 6 years', 'Any item you bring to the tour is at your own responsibility']
        }
    },
    'cabalgata': {
        id: 'cabalgata',
        region: 'la-fortuna',
        title: { es: 'Cabalgata a la Catarata', en: 'Horseback Ride to Waterfall' },
        image: 'images/horse-back-riding-waterfall-nueva.webp',
        badge: { es: 'Naturaleza', en: 'Nature' },
        badgeClass: '',
        description: {
            es: 'Paseo a caballo por senderos naturales hasta la impresionante Catarata La Fortuna. Ideal para conectar con la naturaleza.',
            en: 'Horseback ride through natural trails to the impressive La Fortuna Waterfall. Ideal for connecting with nature.'
        },
        shortDescription: {
            es: 'Paseo a caballo por senderos naturales hasta la impresionante Catarata La Fortuna. Ideal para conectar con la naturaleza.',
            en: 'Horseback ride through natural trails to the impressive La Fortuna Waterfall. Ideal for connecting with nature.'
        },
        price: 80,
        priceDisplay: { es: '$80', en: '$80' },
        priceType: 'per-person',
        details: [
            { icon: 'fa-water', text: { es: 'Visita a la Catarata La Fortuna', en: 'La Fortuna Waterfall visit' } }
        ],
        includes: {
            es: ['Caballo docil y bien entrenado', 'Guia experto', 'Entrada a la catarata', 'Casco de seguridad'],
            en: ['Gentle, well-trained horse', 'Expert guide', 'Waterfall entrance fee', 'Safety helmet']
        },
        bring: {
            es: ['Pantalon largo', 'Zapatos cerrados', 'Traje de bano (para la catarata)', 'Protector solar', 'Camara'],
            en: ['Long pants', 'Closed-toe shoes', 'Swimsuit (for the waterfall)', 'Sunscreen', 'Camera']
        },
        info: {
            es: ['Duracion: 3 horas', 'No requiere experiencia', 'Peso maximo: 220 lbs', 'Ideal para familias'],
            en: ['Duration: 3 hours', 'No experience required', 'Maximum weight: 220 lbs', 'Ideal for families']
        }
    },
    'rio-celeste': {
        id: 'rio-celeste',
        region: 'la-fortuna',
        title: { es: 'Rio Celeste', en: 'Rio Celeste' },
        image: 'images/rio-celeste-nueva.webp',
        badge: { es: 'Naturaleza', en: 'Nature' },
        badgeClass: 'badge-nature',
        description: {
            es: 'Visita el famoso rio de color turquesa en el Parque Nacional Volcan Tenorio. Un fenomeno natural unico causado por minerales volcanicos que le dan al rio su caracteristico color celeste.',
            en: 'Visit the famous turquoise-colored river in Tenorio Volcano National Park. A unique natural phenomenon caused by volcanic minerals that give the river its characteristic sky-blue color.'
        },
        shortDescription: {
            es: 'Visita el famoso rio de color turquesa en el Parque Nacional Volcan Tenorio. Un fenomeno natural unico causado por minerales volcanicos.',
            en: 'Visit the famous turquoise-colored river in Tenorio Volcano National Park. A unique natural phenomenon caused by volcanic minerals.'
        },
        price: 120,
        priceDisplay: { es: '$120', en: '$120' },
        priceType: 'per-person',
        details: [
            { icon: 'fa-water', text: { es: 'Catarata y rio celeste', en: 'Waterfall and turquoise river' } }
        ],
        includes: {
            es: ['Transporte desde La Fortuna', 'Guia naturalista bilingue', 'Entrada al Parque Nacional Volcan Tenorio', 'Desayuno y almuerzo', 'Agua y snacks'],
            en: ['Transportation from La Fortuna', 'Bilingual naturalist guide', 'Tenorio Volcano National Park entrance fee', 'Breakfast and lunch', 'Water and snacks']
        },
        bring: {
            es: ['Zapatos de senderismo (obligatorio)', 'Ropa comoda y ligera', 'Impermeable o poncho', 'Protector solar biodegradable', 'Repelente de insectos', 'Camara', 'Traje de bano (para areas permitidas)'],
            en: ['Hiking shoes (required)', 'Comfortable, light clothing', 'Rain jacket or poncho', 'Biodegradable sunscreen', 'Insect repellent', 'Camera', 'Swimsuit (for permitted areas)']
        },
        info: {
            es: ['Duracion: Dia completo (8-10 horas)', 'Caminata de 6 km (ida y vuelta)', 'Dificultad: Moderada', 'Esta prohibido banarse en la catarata principal', 'Senderos pueden estar resbalosos', 'Salida temprano: 6:00 AM'],
            en: ['Duration: Full day (8-10 hours)', '6 km hike (round trip)', 'Difficulty: Moderate', 'Swimming is prohibited at the main waterfall', 'Trails can be slippery', 'Early departure: 6:00 AM']
        }
    },

    // Guanacaste Tours
    'zipline-guanacaste': {
        id: 'zipline-guanacaste',
        region: 'guanacaste',
        title: { es: 'Zipline', en: 'Zipline' },
        image: 'images/zipline-kid-friendly-guanacaste-nueva.webp',
        badge: { es: 'Familiar', en: 'Family' },
        badgeClass: 'badge-family',
        featured: true,
        description: {
            es: 'Circuito de 10 cables disenado para toda la familia. Comienza ascendiendo por una escalera de caracol alrededor de un majestuoso arbol de Guanacaste. El cable mas largo tiene 400 metros. Incluye puente colgante.',
            en: '10-cable circuit designed for the whole family. Starts by ascending a spiral staircase around a majestic Guanacaste tree. The longest cable is 400 meters. Includes hanging bridge.'
        },
        shortDescription: {
            es: 'Circuito de canopy disenado especialmente para familias. Seguro, divertido y con cables adaptados para todas las edades.',
            en: 'Canopy circuit specially designed for families. Safe, fun and with cables adapted for all ages.'
        },
        price: 75,
        priceDisplay: { es: '$75', en: '$75' },
        priceType: 'per-person',
        details: [
            { icon: 'fa-child', text: { es: 'Desde 2 anos', en: 'Ages 2+' } }
        ],
        includes: {
            es: ['10 cables de tirolesa (el mas largo de 400m)', 'Guias bilingues', 'Equipo de seguridad completo', 'Escalera de caracol y puente colgante', 'Agua y toalla fria al finalizar'],
            en: ['10 zipline cables (longest 400m)', 'Bilingual guides', 'Complete safety equipment', 'Spiral staircase and hanging bridge', 'Water and cold towel at the end']
        },
        bring: {
            es: ['Ropa comoda', 'Zapatos cerrados (obligatorio)', 'Protector solar', 'Repelente de insectos'],
            en: ['Comfortable clothes', 'Closed-toe shoes (required)', 'Sunscreen', 'Insect repellent']
        },
        info: {
            es: ['Duracion: aproximadamente 2 horas', 'Edad minima: 2 anos', 'Peso maximo: 300 libras (136 kg)', 'Primera tirolesa a 20 metros de altura', 'Transporte disponible (consultar con 12 horas de anticipacion)'],
            en: ['Duration: approximately 2 hours', 'Minimum age: 2 years', 'Maximum weight: 300 lbs (136 kg)', 'First zipline at 20 meters height', 'Transportation available (check availability 12 hours in advance)']
        }
    },
    'utv': {
        id: 'utv',
        region: 'guanacaste',
        title: { es: 'UTV Tour', en: 'UTV Tour' },
        image: 'images/utv-guanacaste-nueva.jpg',
        badge: { es: 'Aventura', en: 'Adventure' },
        badgeClass: '',
        description: {
            es: 'Conduce un UTV (side-by-side) por senderos privados y caminos rurales de Guanacaste. Explora el bosque tropical seco con vistas espectaculares. Ideal para grupos y familias.',
            en: 'Drive a UTV (side-by-side) through private trails and rural roads of Guanacaste. Explore the dry tropical forest with spectacular views. Ideal for groups and families.'
        },
        shortDescription: {
            es: 'Conduce un vehiculo todo terreno por caminos rurales y visita uno de los pueblos mas antiguos de Guanacaste. Explora los paisajes del bosque tropical seco.',
            en: 'Drive an all-terrain vehicle through rural roads and visit one of the oldest towns in Guanacaste. Explore the dry tropical forest landscapes.'
        },
        price: 365,
        priceDisplay: { es: '$365', en: '$365' },
        priceType: 'fixed',
        details: [
            { icon: 'fa-landmark', text: { es: 'Pueblo historico', en: 'Historic town' } }
        ],
        includes: {
            es: ['UTV para 5 pasajeros', 'Guia bilingue certificado', 'Equipo de seguridad (casco, gafas)', 'Recorrido por senderos privados', 'Agua', 'Seguro de accidentes'],
            en: ['UTV for 5 passengers', 'Certified bilingual guide', 'Safety equipment (helmet, goggles)', 'Private trail tour', 'Water', 'Accident insurance']
        },
        bring: {
            es: ['Ropa comoda que se pueda ensuciar', 'Zapatos cerrados (obligatorio)', 'Panuelo o buff para el polvo', 'Protector solar', 'Cambio de ropa'],
            en: ['Comfortable clothes that can get dirty', 'Closed-toe shoes (required)', 'Bandana or buff for dust', 'Sunscreen', 'Change of clothes']
        },
        info: {
            es: ['Duracion: aproximadamente 2 horas', 'Licencia de conducir requerida para manejar', 'Capacidad: 5 personas por UTV', 'Precio varia segun numero de participantes', 'Transporte disponible (consultar disponibilidad)'],
            en: ['Duration: approximately 2 hours', 'Driver\'s license required to drive', 'Capacity: 5 people per UTV', 'Price varies by number of participants', 'Transportation available (check availability)']
        }
    },
    'cuadraciclo': {
        id: 'cuadraciclo',
        region: 'guanacaste',
        title: { es: 'Cuadraciclo', en: 'ATV' },
        image: 'images/atv-guanacaste-nueva.jpg',
        badge: { es: 'Aventura', en: 'Adventure' },
        badgeClass: '',
        description: {
            es: 'Aventura en cuadraciclo (ATV) por senderos privados. Recorre el bosque tropical seco de Guanacaste con adrenalina pura. Disponible en modalidad individual o doble.',
            en: 'ATV adventure through private trails. Ride through the dry tropical forest of Guanacaste with pure adrenaline. Available in single or double mode.'
        },
        shortDescription: {
            es: 'Explora los paisajes del bosque tropical seco de Guanacaste en cuadraciclo. Atraviesa fincas, rios y visita uno de los pueblos mas antiguos de la region.',
            en: 'Explore the dry tropical forest landscapes of Guanacaste by ATV. Cross farms, rivers and visit one of the oldest towns in the region.'
        },
        price: 95,
        priceDisplay: { es: '$95', en: '$95' },
        priceType: 'per-person',
        details: [
            { icon: 'fa-tree', text: { es: 'Bosque tropical seco', en: 'Dry tropical forest' } }
        ],
        includes: {
            es: ['Cuadraciclo individual o doble', 'Guia bilingue certificado', 'Equipo de seguridad (casco, gafas)', 'Recorrido por senderos privados', 'Agua', 'Seguro de accidentes'],
            en: ['Single or double ATV', 'Certified bilingual guide', 'Safety equipment (helmet, goggles)', 'Private trail tour', 'Water', 'Accident insurance']
        },
        bring: {
            es: ['Ropa comoda que se pueda ensuciar', 'Zapatos cerrados (obligatorio)', 'Panuelo o buff para el polvo', 'Protector solar', 'Cambio de ropa'],
            en: ['Comfortable clothes that can get dirty', 'Closed-toe shoes (required)', 'Bandana or buff for dust', 'Sunscreen', 'Change of clothes']
        },
        info: {
            es: ['Duracion: aproximadamente 2 horas', 'Licencia de conducir requerida para manejar', 'Capacidad: 1-2 personas por cuadraciclo', 'Precio varia segun numero de participantes', 'Transporte disponible (consultar disponibilidad)'],
            en: ['Duration: approximately 2 hours', 'Driver\'s license required to drive', 'Capacity: 1-2 people per ATV', 'Price varies by number of participants', 'Transportation available (check availability)']
        }
    },
    'cascada': {
        id: 'cascada',
        region: 'guanacaste',
        title: { es: 'Cascada La Leona', en: 'La Leona Waterfall' },
        image: 'images/la-leona-waterfall-nueva.webp',
        badge: { es: 'Temporada Seca', en: 'Dry Season' },
        badgeClass: 'badge-nature',
        description: {
            es: 'Caminata por el bosque tropical hasta la espectacular Cascada La Leona. Banate en sus aguas cristalinas y disfruta del entorno natural.',
            en: 'Hike through the tropical forest to the spectacular La Leona Waterfall. Swim in its crystal clear waters and enjoy the natural surroundings.'
        },
        shortDescription: {
            es: 'Caminata por el bosque tropical hasta la espectacular Cascada La Leona. Banate en sus aguas cristalinas y disfruta del entorno natural.',
            en: 'Hike through the tropical forest to the spectacular La Leona Waterfall. Swim in its crystal clear waters and enjoy the natural surroundings.'
        },
        price: 0,
        priceDisplay: { es: 'Consultar precio', en: 'Ask for price' },
        priceType: 'consult',
        details: [
            { icon: 'fa-calendar-alt', text: { es: 'Solo 2 ene - 15 ago', en: 'Only Jan 2 - Aug 15' } }
        ],
        includes: {
            es: ['Guia naturalista', 'Entrada al area protegida', 'Frutas tropicales', 'Agua'],
            en: ['Naturalist guide', 'Protected area entrance', 'Tropical fruits', 'Water']
        },
        bring: {
            es: ['Zapatos de senderismo', 'Traje de bano', 'Toalla', 'Camara resistente al agua', 'Protector solar biodegradable'],
            en: ['Hiking shoes', 'Swimsuit', 'Towel', 'Waterproof camera', 'Biodegradable sunscreen']
        },
        info: {
            es: ['Duracion: 3 a 5 horas', 'Disponible solo del 2 de enero al 15 de agosto', 'Condicion fisica moderada', 'Caminata de dificultad media'],
            en: ['Duration: 3 to 5 hours', 'Available only January 2 to August 15', 'Moderate physical condition', 'Medium difficulty hike']
        }
    }
};

// Helper functions to work with tour data
const ToursAPI = {
    // Get all tours
    getAll: function() {
        return Object.values(TOURS_DATA);
    },

    // Get tour by ID
    getById: function(id) {
        return TOURS_DATA[id] || null;
    },

    // Get tours by region
    getByRegion: function(region) {
        return Object.values(TOURS_DATA).filter(tour => tour.region === region);
    },

    // Get La Fortuna tours
    getLaFortunaTours: function() {
        return this.getByRegion('la-fortuna');
    },

    // Get Guanacaste tours
    getGuanacasteTours: function() {
        return this.getByRegion('guanacaste');
    },

    // Get tour price
    getPrice: function(id) {
        const tour = this.getById(id);
        return tour ? tour.price : 0;
    },

    // Get price type (per-person, fixed, consult)
    getPriceType: function(id) {
        const tour = this.getById(id);
        return tour ? tour.priceType : 'per-person';
    },

    // Calculate total price
    calculateTotal: function(id, people) {
        const tour = this.getById(id);
        if (!tour) return 0;

        if (tour.priceType === 'fixed') {
            return tour.price;
        } else if (tour.priceType === 'consult') {
            return 0;
        }
        return tour.price * people;
    },

    // Get tour select options for form (generates HTML)
    getSelectOptionsHTML: function(lang = 'es') {
        let html = `<option value="" data-price="0" data-es="Selecciona un tour" data-en="Select a tour">${lang === 'es' ? 'Selecciona un tour' : 'Select a tour'}</option>`;

        // La Fortuna group
        html += '<optgroup label="La Fortuna">';
        this.getLaFortunaTours().forEach(tour => {
            const priceText = tour.price > 0 ? ` - $${tour.price}` : ' - Consultar';
            const priceTypeAttr = tour.priceType === 'fixed' ? ' data-price-type="fixed"' : '';
            html += `<option value="${tour.id}" data-price="${tour.price}"${priceTypeAttr}>${tour.title[lang]}${priceText}</option>`;
        });
        html += '</optgroup>';

        // Guanacaste group
        html += '<optgroup label="Guanacaste">';
        this.getGuanacasteTours().forEach(tour => {
            const priceText = tour.price > 0 ? ` - $${tour.price}` : ' - Consultar';
            const priceTypeAttr = tour.priceType === 'fixed' ? ' data-price-type="fixed"' : '';
            const extraInfo = tour.priceType === 'fixed' ? ' (por vehiculo)' : '';
            html += `<option value="${tour.id}" data-price="${tour.price}"${priceTypeAttr}>${tour.title[lang]}${priceText}${extraInfo}</option>`;
        });
        html += '</optgroup>';

        return html;
    }
};

// Export for use in other modules (if using ES modules in future)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TOURS_DATA, ToursAPI };
}
