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
                if (currentScrollY > scrollThreshold) {
                    // Scrolled down - compact header
                    header.classList.add('header-scrolled');

                    // Optional: hide header when scrolling down fast, show when scrolling up
                    if (currentScrollY > lastScrollY + 10 && currentScrollY > 200) {
                        // Scrolling down fast - hide header
                        header.classList.add('header-hidden');
                    } else if (currentScrollY < lastScrollY - 5) {
                        // Scrolling up - show header
                        header.classList.remove('header-hidden');
                    }
                } else {
                    // At top of page - expand header and always show
                    header.classList.remove('header-scrolled');
                    header.classList.remove('header-hidden');
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

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Create WhatsApp message
            const lang = localStorage.getItem('language') || 'es';
            let message = '';

            if (lang === 'es') {
                message = `Hola! Me gustaria hacer una reserva:\n\n`;
                message += `Nombre: ${data.name}\n`;
                message += `Email: ${data.email}\n`;
                if (data.phone) message += `Telefono: ${data.phone}\n`;
                if (data.tour) message += `Tour: ${data.tour}\n`;
                if (data.date) message += `Fecha: ${data.date}\n`;
                if (data.people) message += `Personas: ${data.people}\n`;
                if (data.message) message += `Mensaje: ${data.message}\n`;
            } else {
                message = `Hello! I would like to make a reservation:\n\n`;
                message += `Name: ${data.name}\n`;
                message += `Email: ${data.email}\n`;
                if (data.phone) message += `Phone: ${data.phone}\n`;
                if (data.tour) message += `Tour: ${data.tour}\n`;
                if (data.date) message += `Date: ${data.date}\n`;
                if (data.people) message += `People: ${data.people}\n`;
                if (data.message) message += `Message: ${data.message}\n`;
            }

            // Encode message and open WhatsApp
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/50688952387?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');

            // Show success message
            showNotification(lang === 'es' ? 'Redirigiendo a WhatsApp...' : 'Redirecting to WhatsApp...');

            // Reset form
            this.reset();
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

    // Set minimum date for date input
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
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

