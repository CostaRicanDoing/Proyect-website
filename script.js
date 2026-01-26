// =============================================
// COSTA RICAN DOING - ADVENTURE TOURS
// JavaScript Functionality
// =============================================

// IIFE to encapsulate all code and avoid global namespace pollution
(function() {
    'use strict';

    // =============================================
    // PRIVATE STATE - Not accessible from outside
    // =============================================
    let currentTotal = 0;
    let currentTourName = '';
    let carouselIntervals = []; // Track intervals for cleanup

    // =============================================
    // CONSTANTS
    // =============================================
    const PRELOADER_DELAY = 2000;
    const SCROLL_THRESHOLD = 80;
    const CAROUSEL_INTERVAL = 4000;
    const NOTIFICATION_DURATION = 3000;
    const WHATSAPP_NUMBER = '50688952387';
    const PAYPAL_USER = 'mbonillamontero';

    // =============================================
    // UTILITY FUNCTIONS
    // =============================================

    /**
     * Safely get an element by ID with null check
     * @param {string} id - Element ID
     * @returns {HTMLElement|null}
     */
    function getElement(id) {
        return document.getElementById(id);
    }

    /**
     * Safely query selector with null check
     * @param {string} selector - CSS selector
     * @param {HTMLElement} parent - Parent element (optional)
     * @returns {HTMLElement|null}
     */
    function querySelector(selector, parent = document) {
        try {
            return parent.querySelector(selector);
        } catch (e) {
            console.warn('Selector error:', selector, e);
            return null;
        }
    }

    /**
     * Sanitize text to prevent XSS
     * @param {string} text - Text to sanitize
     * @returns {string}
     */
    function sanitizeText(text) {
        if (typeof text !== 'string') return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Validate email format
     * @param {string} email - Email to validate
     * @returns {boolean}
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Validate positive number within range
     * @param {number} value - Value to validate
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @returns {boolean}
     */
    function isValidNumber(value, min, max) {
        const num = parseInt(value, 10);
        return !isNaN(num) && num >= min && num <= max;
    }

    // =============================================
    // TOUR DATA
    // =============================================
    const tourData = {
        'atv-fortuna': {
            title: { es: 'ATV Tour', en: 'ATV Tour' },
            image: 'images/atv-to-the-volcano-nueva.webp',
            badge: { es: 'Aventura', en: 'Adventure' },
            description: {
                es: 'Recorre senderos de montaña y cruza ríos a bordo de un ATV. Una experiencia llena de adrenalina con vistas al Volcán Arenal.',
                en: 'Ride through mountain trails and cross rivers aboard an ATV. An adrenaline-filled experience with views of Arenal Volcano.'
            },
            price: { es: 'Desde $130', en: 'From $130' },
            includes: {
                es: ['Guía bilingüe', 'Equipo de seguridad (casco, gafas)', 'Agua embotellada', 'Transporte desde tu hotel'],
                en: ['Bilingual guide', 'Safety equipment (helmet, goggles)', 'Bottled water', 'Transportation from your hotel']
            },
            bring: {
                es: ['Ropa cómoda que se pueda ensuciar', 'Zapatos cerrados', 'Cambio de ropa', 'Protector solar', 'Repelente de insectos'],
                en: ['Comfortable clothes that can get dirty', 'Closed-toe shoes', 'Change of clothes', 'Sunscreen', 'Insect repellent']
            },
            info: {
                es: ['Duración: 3 horas', 'Edad mínima: 6 años', 'Peso máximo: 250 lbs', 'No requiere experiencia previa'],
                en: ['Duration: 3 hours', 'Minimum age: 6 years', 'Maximum weight: 250 lbs', 'No prior experience required']
            }
        },
        'canyoning': {
            title: { es: 'Canyoning / Barranquismo', en: 'Canyoning' },
            image: 'images/canyoning-nueva.webp',
            badge: { es: 'Extremo', en: 'Extreme' },
            description: {
                es: 'Vive una experiencia de barranquismo inolvidable en plena selva tropical. Desciende por impresionantes cascadas, recorre cañones naturales y disfruta de tirolesas mientras te adentras en el corazón del bosque lluvioso. Ideal para principiantes y expertos.',
                en: 'Live an unforgettable canyoning experience in the tropical rainforest. Descend through impressive waterfalls, explore natural canyons and enjoy ziplines as you venture into the heart of the rainforest. Ideal for beginners and experts.'
            },
            price: { es: '$105', en: '$105' },
            includes: {
                es: ['Almuerzo (Casado a elegir: pollo, carne, vegano o vegetariano)', '2 cables de canopy de 150m y 400m', '5 rappels de 20, 25, 30, 35 y 60 metros', 'Equipo completo', 'Guías certificados', 'Transporte Fortuna y alrededores'],
                en: ['Lunch (Casado choice: chicken, beef, vegan or vegetarian)', '2 canopy cables of 150m and 400m', '5 rappels of 20, 25, 30, 35 and 60 meters', 'Complete equipment', 'Certified guides', 'Transportation Fortuna and surroundings']
            },
            bring: {
                es: ['Camisa manga larga (protección contra cuerdas)', 'Pantalones cómodos', 'Zapatos de agua o sandalias tipo Chaco', 'Toalla pequeña', 'Ropa de cambio', 'Bolsa impermeable pequeña (para cámara o teléfono)'],
                en: ['Long sleeve shirt (rope protection)', 'Comfortable pants', 'Water shoes or Chaco-type sandals', 'Small towel', 'Change of clothes', 'Small waterproof bag (for camera or phone)']
            },
            info: {
                es: ['Horarios: 7:00am – 10:00am – 1:00pm', 'Duración: 4 horas aprox.', 'Edad mínima: 5 años', 'No usar bloqueador ni repelente en el rostro (puede irritar los ojos en el agua)', 'Lockers disponibles para sus pertenencias', 'Todo artículo que lleve al tour es bajo su propia responsabilidad'],
                en: ['Schedules: 7:00am – 10:00am – 1:00pm', 'Duration: 4 hours approx.', 'Minimum age: 5 years', 'Do not use sunscreen or repellent on face (may irritate eyes in water)', 'Lockers available for your belongings', 'Any item you bring to the tour is at your own responsibility']
            }
        },
        'zipline-fortuna': {
            title: { es: 'Zipline', en: 'Zipline' },
            image: 'images/zipline-la-fortuna-nueva.webp',
            badge: { es: 'Popular', en: 'Popular' },
            description: {
                es: 'Vuela sobre el dosel del bosque tropical con vistas panorámicas del volcán. Múltiples cables para una experiencia completa.',
                en: 'Fly over the tropical forest canopy with panoramic views of the volcano. Multiple cables for a complete experience.'
            },
            price: { es: '$85', en: '$85' },
            includes: {
                es: ['Guía profesional', 'Equipo de seguridad completo', '10 cables de tirolesa', 'Transporte'],
                en: ['Professional guide', 'Complete safety equipment', '10 zipline cables', 'Transportation']
            },
            bring: {
                es: ['Ropa cómoda', 'Zapatos cerrados', 'Protector solar', 'Cámara con correa de seguridad'],
                en: ['Comfortable clothes', 'Closed-toe shoes', 'Sunscreen', 'Camera with safety strap']
            },
            info: {
                es: ['Duración: Máximo 2 horas', '10 cables', 'Edad mínima: 4 años', 'Peso máximo: 275 lbs'],
                en: ['Duration: Maximum 2 hours', '10 cables', 'Minimum age: 4 years', 'Maximum weight: 275 lbs']
            }
        },
        'rafting': {
            title: { es: 'Rafting de Aventura', en: 'Adventure Rafting' },
            image: 'images/rafting-class-lll-nueva.webp',
            badge: { es: 'Clase II-III', en: 'Class II-III' },
            description: {
                es: 'Vive la emoción del rafting navegando por ríos rodeados de selva tropical y paisajes espectaculares cerca de Arenal y La Fortuna. Rápidos clase II-III ideales para principiantes y nivel intermedio. Podrás observar aves, monos y vida silvestre durante el recorrido.',
                en: 'Experience the thrill of rafting through rivers surrounded by tropical jungle and spectacular landscapes near Arenal and La Fortuna. Class II-III rapids ideal for beginners and intermediate level. You can observe birds, monkeys and wildlife along the way.'
            },
            price: { es: '$78', en: '$78' },
            includes: {
                es: ['Guía certificado', 'Equipo completo de rafting', 'Frutas y hidratación', 'Almuerzo', 'Transporte'],
                en: ['Certified guide', 'Complete rafting equipment', 'Fruits and hydration', 'Lunch', 'Transportation']
            },
            bring: {
                es: ['Camisa manga larga (para protección solar)', 'Shorts o pantalones cómodos', 'Zapatos de agua o sandalias tipo Chaco', 'Toalla pequeña', 'Ropa de cambio', 'Bolsa impermeable pequeña (para cámara o teléfono)'],
                en: ['Long sleeve shirt (for sun protection)', 'Shorts or comfortable pants', 'Water shoes or Chaco-type sandals', 'Small towel', 'Change of clothes', 'Small waterproof bag (for camera or phone)']
            },
            info: {
                es: ['Horario: 10:00am', 'Duración: 4 horas y media aprox. (con transporte)', 'Rápidos Clase II-III', 'Edad mínima: 6 años', 'Todo artículo que lleve al tour es bajo su propia responsabilidad'],
                en: ['Schedule: 10:00am', 'Duration: 4.5 hours approx. (with transportation)', 'Class II-III rapids', 'Minimum age: 6 years', 'Any item you bring to the tour is at your own responsibility']
            }
        },
        'cabalgata': {
            title: { es: 'Cabalgata a la Catarata', en: 'Horseback Ride to Waterfall' },
            image: 'images/horse-back-riding-waterfall-nueva.webp',
            badge: { es: 'Naturaleza', en: 'Nature' },
            description: {
                es: 'Paseo a caballo por senderos naturales hasta la impresionante Catarata La Fortuna. Ideal para conectar con la naturaleza.',
                en: 'Horseback ride through natural trails to the impressive La Fortuna Waterfall. Ideal for connecting with nature.'
            },
            price: { es: '$80', en: '$80' },
            includes: {
                es: ['Caballo dócil y bien entrenado', 'Guía experto', 'Entrada a la catarata', 'Casco de seguridad'],
                en: ['Gentle, well-trained horse', 'Expert guide', 'Waterfall entrance fee', 'Safety helmet']
            },
            bring: {
                es: ['Pantalón largo', 'Zapatos cerrados', 'Traje de baño (para la catarata)', 'Protector solar', 'Cámara'],
                en: ['Long pants', 'Closed-toe shoes', 'Swimsuit (for the waterfall)', 'Sunscreen', 'Camera']
            },
            info: {
                es: ['Duración: 3 horas', 'No requiere experiencia', 'Peso máximo: 220 lbs', 'Ideal para familias'],
                en: ['Duration: 3 hours', 'No experience required', 'Maximum weight: 220 lbs', 'Ideal for families']
            }
        },
        'rio-celeste': {
            title: { es: 'Río Celeste', en: 'Río Celeste' },
            image: 'images/rio-celeste-nueva.webp',
            badge: { es: 'Naturaleza', en: 'Nature' },
            description: {
                es: 'Visita el famoso río de color turquesa en el Parque Nacional Volcán Tenorio. Un fenómeno natural único causado por minerales volcánicos que le dan al río su característico color celeste.',
                en: 'Visit the famous turquoise-colored river in Tenorio Volcano National Park. A unique natural phenomenon caused by volcanic minerals that give the river its characteristic sky-blue color.'
            },
            price: { es: '$120', en: '$120' },
            includes: {
                es: ['Transporte desde La Fortuna', 'Guía naturalista bilingüe', 'Entrada al Parque Nacional Volcán Tenorio', 'Desayuno y almuerzo', 'Agua y snacks'],
                en: ['Transportation from La Fortuna', 'Bilingual naturalist guide', 'Tenorio Volcano National Park entrance fee', 'Breakfast and lunch', 'Water and snacks']
            },
            bring: {
                es: ['Zapatos de senderismo (obligatorio)', 'Ropa cómoda y ligera', 'Impermeable o poncho', 'Protector solar biodegradable', 'Repelente de insectos', 'Cámara', 'Traje de baño (para áreas permitidas)'],
                en: ['Hiking shoes (required)', 'Comfortable, light clothing', 'Rain jacket or poncho', 'Biodegradable sunscreen', 'Insect repellent', 'Camera', 'Swimsuit (for permitted areas)']
            },
            info: {
                es: ['Duración: Día completo (8-10 horas)', 'Caminata de 6 km (ida y vuelta)', 'Dificultad: Moderada', 'Está prohibido bañarse en la catarata principal', 'Senderos pueden estar resbalosos', 'Salida temprano: 6:00 AM'],
                en: ['Duration: Full day (8-10 hours)', '6 km hike (round trip)', 'Difficulty: Moderate', 'Swimming is prohibited at the main waterfall', 'Trails can be slippery', 'Early departure: 6:00 AM']
            }
        },
        'zipline-guanacaste': {
            title: { es: 'Zipline', en: 'Zipline' },
            image: 'images/zipline-kid-friendly-guanacaste-nueva.webp',
            badge: { es: 'Familiar', en: 'Family' },
            description: {
                es: 'Circuito de 10 cables diseñado para toda la familia. Comienza ascendiendo por una escalera de caracol alrededor de un majestuoso árbol de Guanacaste. El cable más largo tiene 400 metros. Incluye puente colgante.',
                en: '10-cable circuit designed for the whole family. Starts by ascending a spiral staircase around a majestic Guanacaste tree. The longest cable is 400 meters. Includes hanging bridge.'
            },
            price: { es: '$75', en: '$75' },
            includes: {
                es: ['10 cables de tirolesa (el más largo de 400m)', 'Guías bilingües', 'Equipo de seguridad completo', 'Escalera de caracol y puente colgante', 'Agua y toalla fría al finalizar'],
                en: ['10 zipline cables (longest 400m)', 'Bilingual guides', 'Complete safety equipment', 'Spiral staircase and hanging bridge', 'Water and cold towel at the end']
            },
            bring: {
                es: ['Ropa cómoda', 'Zapatos cerrados (obligatorio)', 'Protector solar', 'Repelente de insectos'],
                en: ['Comfortable clothes', 'Closed-toe shoes (required)', 'Sunscreen', 'Insect repellent']
            },
            info: {
                es: ['Duración: aproximadamente 2 horas', 'Edad mínima: 2 años', 'Peso máximo: 300 libras (136 kg)', 'Primera tirolesa a 20 metros de altura', 'Transporte disponible (consultar con 12 horas de anticipación)'],
                en: ['Duration: approximately 2 hours', 'Minimum age: 2 years', 'Maximum weight: 300 lbs (136 kg)', 'First zipline at 20 meters height', 'Transportation available (check availability 12 hours in advance)']
            }
        },
        'utv': {
            title: { es: 'UTV Tour', en: 'UTV Tour' },
            image: 'images/utv-guanacaste-nueva.jpg',
            badge: { es: 'Aventura', en: 'Adventure' },
            description: {
                es: 'Conduce un UTV (side-by-side) por senderos privados y caminos rurales de Guanacaste. Explora el bosque tropical seco con vistas espectaculares. Ideal para grupos y familias.',
                en: 'Drive a UTV (side-by-side) through private trails and rural roads of Guanacaste. Explore the dry tropical forest with spectacular views. Ideal for groups and families.'
            },
            price: { es: 'Desde $365', en: 'From $365' },
            includes: {
                es: ['UTV para 5 pasajeros', 'Guía bilingüe certificado', 'Equipo de seguridad (casco, gafas)', 'Recorrido por senderos privados', 'Agua', 'Seguro de accidentes'],
                en: ['UTV for 5 passengers', 'Certified bilingual guide', 'Safety equipment (helmet, goggles)', 'Private trail tour', 'Water', 'Accident insurance']
            },
            bring: {
                es: ['Ropa cómoda que se pueda ensuciar', 'Zapatos cerrados (obligatorio)', 'Pañuelo o buff para el polvo', 'Protector solar', 'Cambio de ropa'],
                en: ['Comfortable clothes that can get dirty', 'Closed-toe shoes (required)', 'Bandana or buff for dust', 'Sunscreen', 'Change of clothes']
            },
            info: {
                es: ['Duración: aproximadamente 2 horas', 'Licencia de conducir requerida para manejar', 'Capacidad: 5 personas por UTV', 'Precio varía según número de participantes', 'Transporte disponible (consultar disponibilidad)'],
                en: ['Duration: approximately 2 hours', 'Driver\'s license required to drive', 'Capacity: 5 people per UTV', 'Price varies by number of participants', 'Transportation available (check availability)']
            }
        },
        'cuadraciclo': {
            title: { es: 'Cuadraciclo', en: 'ATV' },
            image: 'images/atv-guanacaste-nueva.jpg',
            badge: { es: 'Aventura', en: 'Adventure' },
            description: {
                es: 'Aventura en cuadraciclo (ATV) por senderos privados. Recorre el bosque tropical seco de Guanacaste con adrenalina pura. Disponible en modalidad individual o doble.',
                en: 'ATV adventure through private trails. Ride through the dry tropical forest of Guanacaste with pure adrenaline. Available in single or double mode.'
            },
            price: { es: 'Desde $95', en: 'From $95' },
            includes: {
                es: ['Cuadraciclo individual o doble', 'Guía bilingüe certificado', 'Equipo de seguridad (casco, gafas)', 'Recorrido por senderos privados', 'Agua', 'Seguro de accidentes'],
                en: ['Single or double ATV', 'Certified bilingual guide', 'Safety equipment (helmet, goggles)', 'Private trail tour', 'Water', 'Accident insurance']
            },
            bring: {
                es: ['Ropa cómoda que se pueda ensuciar', 'Zapatos cerrados (obligatorio)', 'Pañuelo o buff para el polvo', 'Protector solar', 'Cambio de ropa'],
                en: ['Comfortable clothes that can get dirty', 'Closed-toe shoes (required)', 'Bandana or buff for dust', 'Sunscreen', 'Change of clothes']
            },
            info: {
                es: ['Duración: aproximadamente 2 horas', 'Licencia de conducir requerida para manejar', 'Capacidad: 1-2 personas por cuadraciclo', 'Precio varía según número de participantes', 'Transporte disponible (consultar disponibilidad)'],
                en: ['Duration: approximately 2 hours', 'Driver\'s license required to drive', 'Capacity: 1-2 people per ATV', 'Price varies by number of participants', 'Transportation available (check availability)']
            }
        },
        'cascada': {
            title: { es: 'Cascada La Leona', en: 'La Leona Waterfall' },
            image: 'images/la-leona-waterfall-nueva.webp',
            badge: { es: 'Temporada Seca', en: 'Dry Season' },
            description: {
                es: 'Caminata por el bosque tropical hasta la espectacular Cascada La Leona. Báñate en sus aguas cristalinas y disfruta del entorno natural.',
                en: 'Hike through the tropical forest to the spectacular La Leona Waterfall. Swim in its crystal clear waters and enjoy the natural surroundings.'
            },
            price: { es: 'Consultar precio', en: 'Ask for price' },
            includes: {
                es: ['Guía naturalista', 'Entrada al área protegida', 'Frutas tropicales', 'Agua'],
                en: ['Naturalist guide', 'Protected area entrance', 'Tropical fruits', 'Water']
            },
            bring: {
                es: ['Zapatos de senderismo', 'Traje de baño', 'Toalla', 'Cámara resistente al agua', 'Protector solar biodegradable'],
                en: ['Hiking shoes', 'Swimsuit', 'Towel', 'Waterproof camera', 'Biodegradable sunscreen']
            },
            info: {
                es: ['Duración: 3 a 5 horas', 'Disponible solo del 2 de enero al 15 de agosto', 'Condición física moderada', 'Caminata de dificultad media'],
                en: ['Duration: 3 to 5 hours', 'Available only January 2 to August 15', 'Moderate physical condition', 'Medium difficulty hike']
            }
        }
    };

    // =============================================
    // PRELOADER
    // =============================================
    function initPreloader() {
        const preloader = getElement('preloader');
        if (preloader) {
            setTimeout(function() {
                preloader.classList.add('hidden');
            }, PRELOADER_DELAY);
        }
    }

    // =============================================
    // IMAGE PROTECTION
    // =============================================
    function initImageProtection() {
        // Disable right-click on images
        document.addEventListener('contextmenu', function(e) {
            if (e.target && e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        });

        // Disable drag on images
        document.addEventListener('dragstart', function(e) {
            if (e.target && e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        });

        // Disable keyboard shortcuts for saving
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                return false;
            }
        });
    }

    // =============================================
    // LANGUAGE SYSTEM
    // =============================================
    function getCurrentLanguage() {
        try {
            return localStorage.getItem('language') || 'es';
        } catch (e) {
            return 'es';
        }
    }

    function setLanguage(lang) {
        try {
            const elements = document.querySelectorAll('[data-es][data-en]');

            elements.forEach(function(el) {
                const text = el.dataset[lang];
                if (text) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = text;
                    } else {
                        el.textContent = text;
                    }
                }
            });

            // Update active button state
            const langButtons = document.querySelectorAll('.lang-btn');
            langButtons.forEach(function(btn) {
                btn.classList.toggle('active', btn.dataset.lang === lang);
            });

            // Update document language
            document.documentElement.lang = lang;

            // Update page title
            document.title = lang === 'es'
                ? 'Costa Rican Doing - Tours de Aventura en Costa Rica'
                : 'Costa Rican Doing - Adventure Tours in Costa Rica';

            localStorage.setItem('language', lang);
        } catch (e) {
            console.warn('Error setting language:', e);
        }
    }

    function initLanguageToggle() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                const lang = this.dataset.lang;
                if (lang) {
                    setLanguage(lang);
                }
            });
        });

        // Initialize with saved language
        setLanguage(getCurrentLanguage());
    }

    // =============================================
    // MOBILE MENU
    // =============================================
    function initMobileMenu() {
        const mobileMenuBtn = querySelector('.mobile-menu-btn');
        const nav = querySelector('.nav');

        if (!mobileMenuBtn || !nav) return;

        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                const isActive = nav.classList.contains('active');
                icon.classList.toggle('fa-bars', !isActive);
                icon.classList.toggle('fa-times', isActive);
            }
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-list a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // =============================================
    // HEADER SCROLL BEHAVIOR
    // =============================================
    function initHeaderScroll() {
        const header = querySelector('.header');
        if (!header) return;

        let ticking = false;

        // Initialize header state
        if (window.scrollY > SCROLL_THRESHOLD) {
            header.classList.add('header-scrolled');
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const currentScrollY = window.scrollY;
                    header.classList.toggle('header-scrolled', currentScrollY > SCROLL_THRESHOLD);
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // =============================================
    // SMOOTH SCROLL
    // =============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (!href || href === '#') return;

                e.preventDefault();
                const target = querySelector(href);
                if (target) {
                    const header = querySelector('.header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // =============================================
    // PRICE CALCULATOR
    // =============================================
    function initPriceCalculator() {
        const tourSelect = getElement('tour');
        const peopleInput = getElement('people');
        const priceSummary = getElement('price-summary');
        const tourNameDisplay = getElement('tour-name-display');
        const peopleCount = getElement('people-count');
        const totalPrice = getElement('total-price');

        if (!tourSelect || !peopleInput) return;

        function updatePriceCalculator() {
            try {
                const selectedOption = tourSelect.options[tourSelect.selectedIndex];
                if (!selectedOption) return;

                const price = parseFloat(selectedOption.dataset.price) || 0;
                const priceType = selectedOption.dataset.priceType || 'per-person';
                const people = Math.max(1, Math.min(20, parseInt(peopleInput.value, 10) || 1));
                currentTourName = (selectedOption.text || '').split(' - ')[0];

                if (price > 0) {
                    currentTotal = priceType === 'fixed' ? price : price * people;

                    if (tourNameDisplay) tourNameDisplay.textContent = currentTourName;
                    if (peopleCount) peopleCount.textContent = people;
                    if (totalPrice) totalPrice.textContent = '$' + currentTotal;
                    if (priceSummary) priceSummary.style.display = 'block';
                } else {
                    if (priceSummary) priceSummary.style.display = 'none';
                    currentTotal = 0;
                }
            } catch (e) {
                console.warn('Error updating price calculator:', e);
            }
        }

        tourSelect.addEventListener('change', updatePriceCalculator);
        peopleInput.addEventListener('input', updatePriceCalculator);
    }

    // =============================================
    // CONTACT FORM
    // =============================================
    function initContactForm() {
        const contactForm = getElement('contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            try {
                const formData = new FormData(this);
                const data = Object.fromEntries(formData);
                const lang = getCurrentLanguage();

                // Validate email
                if (data.email && !isValidEmail(data.email)) {
                    showNotification(lang === 'es' ? 'Por favor ingresa un email válido' : 'Please enter a valid email');
                    return;
                }

                // Validate number of people
                if (!isValidNumber(data.people, 1, 20)) {
                    showNotification(lang === 'es' ? 'Número de personas debe ser entre 1 y 20' : 'Number of people must be between 1 and 20');
                    return;
                }

                if (currentTotal === 0) {
                    // No price - redirect to WhatsApp for consultation
                    const message = buildWhatsAppMessage(data, lang);
                    const encodedMessage = encodeURIComponent(message);
                    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodedMessage, '_blank');
                    showNotification(lang === 'es' ? 'Redirigiendo a WhatsApp...' : 'Redirecting to WhatsApp...');
                    return;
                }

                // Show confirmation with payment details
                const confirmation = getElement('reservation-confirmation');
                const confirmTourName = getElement('confirm-tour-name');
                const confirmDate = getElement('confirm-date');
                const confirmPeople = getElement('confirm-people');
                const confirmTotal = getElement('confirm-total');

                if (confirmTourName) confirmTourName.textContent = currentTourName;
                if (confirmDate) confirmDate.textContent = data.date || (lang === 'es' ? 'Por confirmar' : 'To be confirmed');
                if (confirmPeople) confirmPeople.textContent = data.people;
                if (confirmTotal) confirmTotal.textContent = '$' + currentTotal;

                // Store data for PayPal (using closure instead of window)
                initPayPalButton(currentTotal);

                // Hide form, show confirmation
                contactForm.style.display = 'none';
                if (confirmation) confirmation.style.display = 'block';

                showNotification(lang === 'es' ? 'Revisa los detalles y procede al pago' : 'Review details and proceed to payment');
            } catch (e) {
                console.warn('Error processing form:', e);
                showNotification(getCurrentLanguage() === 'es' ? 'Error al procesar el formulario' : 'Error processing form');
            }
        });

        // New reservation button
        const newReservationBtn = getElement('new-reservation-btn');
        if (newReservationBtn) {
            newReservationBtn.addEventListener('click', function() {
                const confirmation = getElement('reservation-confirmation');
                if (confirmation && contactForm) {
                    confirmation.style.display = 'none';
                    contactForm.style.display = 'grid';
                }
            });
        }
    }

    function buildWhatsAppMessage(data, lang) {
        let message = '';
        if (lang === 'es') {
            message = 'Hola! Me gustaria consultar sobre una reserva:\n\n';
            message += 'Nombre: ' + (data.name || '') + '\n';
            message += 'Email: ' + (data.email || '') + '\n';
            if (data.phone) message += 'Telefono: ' + data.phone + '\n';
            message += 'Tour: ' + (currentTourName || data.tour || '') + '\n';
            if (data.date) message += 'Fecha: ' + data.date + '\n';
            if (data.people) message += 'Personas: ' + data.people + '\n';
            if (data.message) message += 'Mensaje: ' + data.message + '\n';
        } else {
            message = 'Hello! I would like to inquire about a reservation:\n\n';
            message += 'Name: ' + (data.name || '') + '\n';
            message += 'Email: ' + (data.email || '') + '\n';
            if (data.phone) message += 'Phone: ' + data.phone + '\n';
            message += 'Tour: ' + (currentTourName || data.tour || '') + '\n';
            if (data.date) message += 'Date: ' + data.date + '\n';
            if (data.people) message += 'People: ' + data.people + '\n';
            if (data.message) message += 'Message: ' + data.message + '\n';
        }
        return message;
    }

    function initPayPalButton(amount) {
        const paypalBtn = getElement('paypal-pay-btn');
        if (!paypalBtn) return;

        // Remove old listeners by cloning
        const newBtn = paypalBtn.cloneNode(true);
        paypalBtn.parentNode.replaceChild(newBtn, paypalBtn);

        newBtn.addEventListener('click', function() {
            if (amount && amount > 0) {
                const paypalUrl = 'https://www.paypal.me/' + PAYPAL_USER + '/' + amount;
                window.open(paypalUrl, '_blank');
            }
        });
    }

    // =============================================
    // TOUR CARD BUTTONS
    // =============================================
    function initTourCardButtons() {
        const reserveButtons = document.querySelectorAll('.tour-card .btn-secondary');

        reserveButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                const tourCard = this.closest('.tour-card');
                if (tourCard && tourCard.dataset.tourId) {
                    const tourId = tourCard.dataset.tourId;

                    setTimeout(function() {
                        selectTourInForm(tourId);
                    }, 150);
                }
            });
        });
    }

    /**
     * Helper function to select a tour in the form dropdown
     * @param {string} tourId - Tour ID to select
     */
    function selectTourInForm(tourId) {
        const tourSelect = getElement('tour');
        if (!tourSelect) return;

        // Use direct value assignment instead of loop
        tourSelect.value = tourId;
        tourSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // =============================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // =============================================
    function initAnimationObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries, obs) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Unobserve after animation to prevent memory leak
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.tour-card, .feature, .about-content').forEach(function(el) {
            observer.observe(el);
        });
    }

    // =============================================
    // DATE INPUT SETUP
    // =============================================
    function initDateInput() {
        const dateInput = getElement('date');
        if (!dateInput) return;

        const minDate = new Date();
        minDate.setDate(minDate.getDate() + 2); // 48 hours from now
        dateInput.min = minDate.toISOString().split('T')[0];
        dateInput.required = true;
    }

    // =============================================
    // CAROUSEL
    // =============================================
    function initCarousels() {
        const carousels = document.querySelectorAll('.tour-carousel');

        carousels.forEach(function(carousel) {
            const slides = carousel.querySelectorAll('.carousel-slide');
            const dots = carousel.querySelectorAll('.dot');
            const prevBtn = carousel.querySelector('.carousel-prev');
            const nextBtn = carousel.querySelector('.carousel-next');

            if (slides.length === 0) return;

            let currentSlide = 0;
            let autoPlayInterval;

            function showSlide(index) {
                if (index >= slides.length) index = 0;
                if (index < 0) index = slides.length - 1;
                currentSlide = index;

                slides.forEach(function(slide, i) {
                    slide.classList.toggle('active', i === index);
                });

                dots.forEach(function(dot, i) {
                    dot.classList.toggle('active', i === index);
                });
            }

            function nextSlide() {
                showSlide(currentSlide + 1);
            }

            function prevSlide() {
                showSlide(currentSlide - 1);
            }

            function startAutoPlay() {
                stopAutoPlay();
                autoPlayInterval = setInterval(nextSlide, CAROUSEL_INTERVAL);
                carouselIntervals.push(autoPlayInterval);
            }

            function stopAutoPlay() {
                if (autoPlayInterval) {
                    clearInterval(autoPlayInterval);
                    const idx = carouselIntervals.indexOf(autoPlayInterval);
                    if (idx > -1) carouselIntervals.splice(idx, 1);
                }
            }

            if (prevBtn) {
                prevBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    prevSlide();
                    startAutoPlay();
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    nextSlide();
                    startAutoPlay();
                });
            }

            dots.forEach(function(dot, i) {
                dot.addEventListener('click', function(e) {
                    e.stopPropagation();
                    showSlide(i);
                    startAutoPlay();
                });
            });

            carousel.addEventListener('mouseenter', stopAutoPlay);
            carousel.addEventListener('mouseleave', startAutoPlay);

            startAutoPlay();
        });
    }

    // =============================================
    // NOTIFICATION SYSTEM
    // =============================================
    function showNotification(message) {
        try {
            // Remove existing notification
            const existingNotification = querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }

            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            notification.setAttribute('role', 'alert');
            notification.setAttribute('aria-live', 'polite');

            document.body.appendChild(notification);

            // Remove notification after delay
            setTimeout(function() {
                notification.classList.add('notification-exit');
                setTimeout(function() {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }, NOTIFICATION_DURATION);
        } catch (e) {
            console.warn('Error showing notification:', e);
        }
    }

    // =============================================
    // TOUR MODAL
    // =============================================
    function initTourModal() {
        const modal = getElement('tour-modal');
        const closeBtn = getElement('modal-close');
        const tourCards = document.querySelectorAll('.tour-card[data-tour-id]');

        if (!modal) return;

        // Open modal when clicking on tour card
        tourCards.forEach(function(card) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function(e) {
                if (e.target.closest('.btn')) return;

                const tourId = this.dataset.tourId;
                if (tourId) {
                    openTourModal(tourId);
                }
            });
        });

        // Close modal
        if (closeBtn) {
            closeBtn.addEventListener('click', closeTourModal);
        }

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeTourModal();
            }
        });

        // Close with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeTourModal();
            }
        });

        // Reserve button
        const reserveBtn = getElement('modal-reserve-btn');
        if (reserveBtn) {
            reserveBtn.addEventListener('click', function() {
                const modalTitle = getElement('modal-title');
                if (modalTitle) {
                    const tourName = modalTitle.textContent;
                    for (var tourId in tourData) {
                        if (tourData.hasOwnProperty(tourId)) {
                            var data = tourData[tourId];
                            if (data.title.es === tourName || data.title.en === tourName) {
                                setTimeout(function() {
                                    selectTourInForm(tourId);
                                }, 150);
                                break;
                            }
                        }
                    }
                }
                closeTourModal();
            });
        }
    }

    function openTourModal(tourId) {
        const modal = getElement('tour-modal');
        const tour = tourData[tourId];
        const lang = getCurrentLanguage();

        if (!tour || !modal) return;

        try {
            // Populate modal with tour data (using textContent for security)
            const modalImage = getElement('modal-image');
            const modalBadge = getElement('modal-badge');
            const modalTitle = getElement('modal-title');
            const modalDescription = getElement('modal-description');
            const modalPrice = getElement('modal-price');

            if (modalImage) {
                modalImage.src = tour.image;
                modalImage.alt = tour.title[lang];
            }
            if (modalBadge) modalBadge.textContent = tour.badge[lang];
            if (modalTitle) modalTitle.textContent = tour.title[lang];
            if (modalDescription) modalDescription.textContent = tour.description[lang];
            if (modalPrice) modalPrice.textContent = tour.price[lang];

            // Populate lists (XSS-safe)
            populateListSafe('modal-includes', tour.includes[lang]);
            populateListSafe('modal-bring', tour.bring[lang]);
            populateListSafe('modal-info', tour.info[lang]);

            // Show modal with accessibility
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';

            // Focus management for accessibility
            const closeBtn = getElement('modal-close');
            if (closeBtn) closeBtn.focus();
        } catch (e) {
            console.warn('Error opening modal:', e);
        }
    }

    function closeTourModal() {
        const modal = getElement('tour-modal');
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    /**
     * Populate a list element safely without XSS vulnerability
     * @param {string} elementId - ID of the UL element
     * @param {Array} items - Array of strings to populate
     */
    function populateListSafe(elementId, items) {
        const list = getElement(elementId);
        if (!list || !Array.isArray(items)) return;

        // Clear existing content
        list.textContent = '';

        items.forEach(function(item) {
            const li = document.createElement('li');

            // Create icon element
            const icon = document.createElement('i');
            icon.className = 'fas fa-check';
            icon.setAttribute('aria-hidden', 'true');

            // Create text node (safe - no HTML injection)
            const textNode = document.createTextNode(' ' + item);

            li.appendChild(icon);
            li.appendChild(textNode);
            list.appendChild(li);
        });
    }

    // =============================================
    // CLEANUP ON PAGE UNLOAD
    // =============================================
    function initCleanup() {
        window.addEventListener('beforeunload', function() {
            // Clear all carousel intervals
            carouselIntervals.forEach(function(interval) {
                clearInterval(interval);
            });
            carouselIntervals = [];
        });
    }

    // =============================================
    // INITIALIZE ALL MODULES
    // =============================================
    function init() {
        try {
            initPreloader();
            initImageProtection();
            initLanguageToggle();
            initMobileMenu();
            initHeaderScroll();
            initSmoothScroll();
            initPriceCalculator();
            initContactForm();
            initTourCardButtons();
            initAnimationObserver();
            initDateInput();
            initCarousels();
            initTourModal();
            initCleanup();
        } catch (e) {
            console.error('Error initializing application:', e);
        }
    }

    // Single DOMContentLoaded listener
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
