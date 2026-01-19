// =============================================
// COSTA RICAN DOING - ADVENTURE TOURS
// JavaScript Functionality
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Hide preloader after 2 seconds
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 2000);
    }

    // Initialize language
    let currentLang = localStorage.getItem('language') || 'es';
    setLanguage(currentLang);

    // Language Toggle
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            const icon = this.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Header behavior: expand/compact on scroll (like Sky Adventures)
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let ticking = false;
    const scrollThreshold = 80; // When to start compacting header

    // Initialize header state based on initial scroll position
    if (window.scrollY > scrollThreshold) {
        header.classList.add('header-scrolled');
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const currentScrollY = window.scrollY;

                // Compact/expand header based on scroll position
                // Header always stays visible (like Sky Adventures)
                if (currentScrollY > scrollThreshold) {
                    // Scrolled down - show expanded/scrolled header style
                    header.classList.add('header-scrolled');
                } else {
                    // At top of page - show compact header style
                    header.classList.remove('header-scrolled');
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Price Calculator
    const tourSelect = document.getElementById('tour');
    const peopleInput = document.getElementById('people');
    const priceSummary = document.getElementById('price-summary');
    const tourNameDisplay = document.getElementById('tour-name-display');
    const peopleCount = document.getElementById('people-count');
    const totalPrice = document.getElementById('total-price');

    let currentTotal = 0;
    let currentTourName = '';

    function updatePriceCalculator() {
        if (!tourSelect || !peopleInput) return;

        const selectedOption = tourSelect.options[tourSelect.selectedIndex];
        const price = parseFloat(selectedOption.dataset.price) || 0;
        const priceType = selectedOption.dataset.priceType || 'per-person';
        const people = parseInt(peopleInput.value) || 1;
        currentTourName = selectedOption.text.split(' - ')[0];

        if (price > 0) {
            if (priceType === 'fixed') {
                // Fixed price (like UTV)
                currentTotal = price;
            } else {
                // Per person price
                currentTotal = price * people;
            }

            tourNameDisplay.textContent = currentTourName;
            peopleCount.textContent = people;
            totalPrice.textContent = '$' + currentTotal;
            priceSummary.style.display = 'block';
        } else {
            priceSummary.style.display = 'none';
            currentTotal = 0;
        }
    }

    if (tourSelect) {
        tourSelect.addEventListener('change', updatePriceCalculator);
    }
    if (peopleInput) {
        peopleInput.addEventListener('input', updatePriceCalculator);
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            const lang = localStorage.getItem('language') || 'es';

            // Check if tour has a price
            if (currentTotal === 0) {
                // No price - redirect to WhatsApp for consultation
                let message = '';
                if (lang === 'es') {
                    message = `Hola! Me gustaria consultar sobre una reserva:\n\n`;
                    message += `Nombre: ${data.name}\n`;
                    message += `Email: ${data.email}\n`;
                    if (data.phone) message += `Telefono: ${data.phone}\n`;
                    message += `Tour: ${currentTourName || data.tour}\n`;
                    if (data.date) message += `Fecha: ${data.date}\n`;
                    if (data.people) message += `Personas: ${data.people}\n`;
                    if (data.message) message += `Mensaje: ${data.message}\n`;
                } else {
                    message = `Hello! I would like to inquire about a reservation:\n\n`;
                    message += `Name: ${data.name}\n`;
                    message += `Email: ${data.email}\n`;
                    if (data.phone) message += `Phone: ${data.phone}\n`;
                    message += `Tour: ${currentTourName || data.tour}\n`;
                    if (data.date) message += `Date: ${data.date}\n`;
                    if (data.people) message += `People: ${data.people}\n`;
                    if (data.message) message += `Message: ${data.message}\n`;
                }
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/50688952387?text=${encodedMessage}`, '_blank');
                showNotification(lang === 'es' ? 'Redirigiendo a WhatsApp...' : 'Redirecting to WhatsApp...');
                return;
            }

            // Show confirmation with payment details
            const confirmation = document.getElementById('reservation-confirmation');
            document.getElementById('confirm-tour-name').textContent = currentTourName;
            document.getElementById('confirm-date').textContent = data.date || (lang === 'es' ? 'Por confirmar' : 'To be confirmed');
            document.getElementById('confirm-people').textContent = data.people;
            document.getElementById('confirm-total').textContent = '$' + currentTotal;

            // Store PayPal amount for button click
            window.paypalAmount = currentTotal;

            // Store reservation data for potential WhatsApp notification
            window.reservationData = {
                name: data.name,
                email: data.email,
                phone: data.phone,
                tour: currentTourName,
                date: data.date,
                people: data.people,
                total: currentTotal,
                message: data.message
            };

            // Hide form, show confirmation
            contactForm.style.display = 'none';
            confirmation.style.display = 'block';

            showNotification(lang === 'es' ? 'Revisa los detalles y procede al pago' : 'Review details and proceed to payment');
        });
    }

    // New reservation button (to show form again)
    const newReservationBtn = document.getElementById('new-reservation-btn');
    if (newReservationBtn) {
        newReservationBtn.addEventListener('click', function() {
            const confirmation = document.getElementById('reservation-confirmation');
            const contactForm = document.getElementById('contact-form');
            if (confirmation && contactForm) {
                confirmation.style.display = 'none';
                contactForm.style.display = 'grid';
            }
        });
    }

    // PayPal button click handler
    const paypalBtn = document.getElementById('paypal-pay-btn');
    if (paypalBtn) {
        paypalBtn.addEventListener('click', function() {
            if (window.paypalAmount && window.paypalAmount > 0) {
                const paypalUrl = `https://www.paypal.me/mbonillamontero/${window.paypalAmount}`;
                window.open(paypalUrl, '_blank');
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.tour-card, .feature, .about-content').forEach(el => {
        observer.observe(el);
    });

    // Set minimum date for date input (48 hours / 2 days from now)
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const minDate = new Date();
        minDate.setDate(minDate.getDate() + 2); // Add 2 days (48 hours)
        dateInput.setAttribute('min', minDate.toISOString().split('T')[0]);
        dateInput.setAttribute('required', 'true');
    }

    // Initialize Tour Carousels
    initCarousels();
});

// Carousel functionality
function initCarousels() {
    const carousels = document.querySelectorAll('.tour-carousel');

    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.dot');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        let currentSlide = 0;
        let autoPlayInterval;

        function showSlide(index) {
            // Handle wrap-around
            if (index >= slides.length) index = 0;
            if (index < 0) index = slides.length - 1;
            currentSlide = index;

            // Update slides
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });

            // Update dots
            dots.forEach((dot, i) => {
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
            autoPlayInterval = setInterval(nextSlide, 4000);
        }

        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }

        // Event listeners
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                prevSlide();
                stopAutoPlay();
                startAutoPlay();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                nextSlide();
                stopAutoPlay();
                startAutoPlay();
            });
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                showSlide(i);
                stopAutoPlay();
                startAutoPlay();
            });
        });

        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);

        // Start auto-play
        startAutoPlay();
    });
}

// Language switching function
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-es][data-en]');

    elements.forEach(el => {
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
    langButtons.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update document language
    document.documentElement.lang = lang;

    // Update page title
    if (lang === 'es') {
        document.title = 'Costa Rican Doing - Tours de Aventura en Costa Rica';
    } else {
        document.title = 'Costa Rican Doing - Adventure Tours in Costa Rica';
    }
}

// Notification function
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: #7CB518;
        color: #000;
        padding: 15px 25px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 20px rgba(124, 181, 24, 0.4);
    `;

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}


// =============================================
// TOUR DETAILS MODAL
// =============================================

// Tour data with details (you can edit this easily)
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
        title: { es: 'Canyoning', en: 'Canyoning' },
        image: 'images/canyoning-nueva.webp',
        badge: { es: 'Extremo', en: 'Extreme' },
        description: {
            es: 'Desciende por cascadas naturales haciendo rapel. Siente la emoción de bajar por paredes de roca con el agua cayendo a tu alrededor.',
            en: 'Descend through natural waterfalls by rappelling. Feel the thrill of going down rock walls with water falling around you.'
        },
        price: { es: '$110', en: '$110' },
        includes: {
            es: ['Guía certificado', 'Equipo completo de rapel', 'Almuerzo', 'Transporte', 'Fotos del tour'],
            en: ['Certified guide', 'Complete rappelling equipment', 'Lunch', 'Transportation', 'Tour photos']
        },
        bring: {
            es: ['Traje de baño', 'Zapatos de agua o tenis viejos', 'Toalla', 'Cambio de ropa seca', 'Protector solar biodegradable'],
            en: ['Swimsuit', 'Water shoes or old sneakers', 'Towel', 'Dry change of clothes', 'Biodegradable sunscreen']
        },
        info: {
            es: ['Duración: 3 horas', '4 cascadas', 'Edad mínima: 8 años', 'Condición física moderada requerida'],
            en: ['Duration: 3 hours', '4 waterfalls', 'Minimum age: 8 years', 'Moderate physical condition required']
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
        title: { es: 'Rafting Clase III', en: 'Class III Rafting' },
        image: 'images/rafting-class-lll-nueva.webp',
        badge: { es: 'Clase III', en: 'Class III' },
        description: {
            es: 'Navega los rápidos del Río Balsa. Aguas bravas perfectas para aventureros con o sin experiencia previa.',
            en: 'Navigate the rapids of the Balsa River. White waters perfect for adventurers with or without previous experience.'
        },
        price: { es: '$95', en: '$95' },
        includes: {
            es: ['Guía certificado en primeros auxilios', 'Equipo completo de rafting', 'Frutas y hidratación', 'Almuerzo', 'Transporte'],
            en: ['First aid certified guide', 'Complete rafting equipment', 'Fruits and hydration', 'Lunch', 'Transportation']
        },
        bring: {
            es: ['Traje de baño', 'Zapatos que se puedan mojar', 'Cambio de ropa', 'Protector solar biodegradable', 'Toalla'],
            en: ['Swimsuit', 'Shoes that can get wet', 'Change of clothes', 'Biodegradable sunscreen', 'Towel']
        },
        info: {
            es: ['Duración: Medio día', 'Rápidos Clase II-III', 'Edad mínima: 10 años', 'Saber nadar es recomendado'],
            en: ['Duration: Half day', 'Class II-III rapids', 'Minimum age: 10 years', 'Swimming ability recommended']
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

// Initialize modal functionality
function initTourModal() {
    const modal = document.getElementById('tour-modal');
    const closeBtn = document.getElementById('modal-close');
    const tourCards = document.querySelectorAll('.tour-card[data-tour-id]');

    if (!modal) return;

    // Open modal when clicking on tour card
    tourCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            // Don't open modal if clicking on the reserve button
            if (e.target.closest('.btn')) return;
            
            const tourId = this.dataset.tourId;
            openTourModal(tourId);
        });
    });

    // Close modal
    closeBtn.addEventListener('click', closeTourModal);
    
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

    // Reserve button closes modal and scrolls to contact
    const reserveBtn = document.getElementById('modal-reserve-btn');
    if (reserveBtn) {
        reserveBtn.addEventListener('click', function() {
            closeTourModal();
        });
    }
}

function openTourModal(tourId) {
    const modal = document.getElementById('tour-modal');
    const tour = tourData[tourId];
    const lang = localStorage.getItem('language') || 'es';

    if (!tour) return;

    // Populate modal with tour data
    document.getElementById('modal-image').src = tour.image;
    document.getElementById('modal-image').alt = tour.title[lang];
    document.getElementById('modal-badge').textContent = tour.badge[lang];
    document.getElementById('modal-title').textContent = tour.title[lang];
    document.getElementById('modal-description').textContent = tour.description[lang];
    document.getElementById('modal-price').textContent = tour.price[lang];

    // Populate lists
    populateList('modal-includes', tour.includes[lang]);
    populateList('modal-bring', tour.bring[lang]);
    populateList('modal-info', tour.info[lang]);

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTourModal() {
    const modal = document.getElementById('tour-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function populateList(elementId, items) {
    const list = document.getElementById(elementId);
    list.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check"></i> ${item}`;
        list.appendChild(li);
    });
}

// Initialize modal on page load
document.addEventListener('DOMContentLoaded', function() {
    initTourModal();
});
