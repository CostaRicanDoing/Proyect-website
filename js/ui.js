// =============================================
// UI INTERACTIONS MODULE
// =============================================

const UIModule = {
    init: function() {
        this.initPreloader();
        this.initImageProtection();
        this.initMobileMenu();
        this.initHeaderScroll();
        this.initSmoothScroll();
        this.initIntersectionObserver();
        this.initCarousels();
    },

    // Hide preloader after load
    initPreloader: function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 2000);
        }
    },

    // Image protection - prevent downloading
    initImageProtection: function() {
        // Disable right-click on images
        document.addEventListener('contextmenu', function(e) {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        });

        // Disable drag on images
        document.addEventListener('dragstart', function(e) {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        });

        // Disable keyboard shortcuts for saving images
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                return false;
            }
        });
    },

    // Mobile menu toggle
    initMobileMenu: function() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('.nav');

        if (mobileMenuBtn && nav) {
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
        }
    },

    // Header scroll behavior
    initHeaderScroll: function() {
        const header = document.querySelector('.header');
        if (!header) return;

        const scrollThreshold = 80;

        // Initialize header state based on initial scroll position
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-scrolled');
        }

        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const currentScrollY = window.scrollY;

                    if (currentScrollY > scrollThreshold) {
                        header.classList.add('header-scrolled');
                    } else {
                        header.classList.remove('header-scrolled');
                    }

                    ticking = false;
                });
                ticking = true;
            }
        });
    },

    // Smooth scroll for anchor links
    initSmoothScroll: function() {
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
    },

    // Intersection Observer for animations
    initIntersectionObserver: function() {
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
    },

    // Carousel functionality
    initCarousels: function() {
        const carousels = document.querySelectorAll('.tour-carousel');

        carousels.forEach(carousel => {
            const slides = carousel.querySelectorAll('.carousel-slide');
            const dots = carousel.querySelectorAll('.dot');
            const prevBtn = carousel.querySelector('.carousel-prev');
            const nextBtn = carousel.querySelector('.carousel-next');
            let currentSlide = 0;
            let autoPlayInterval;

            function showSlide(index) {
                if (index >= slides.length) index = 0;
                if (index < 0) index = slides.length - 1;
                currentSlide = index;

                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                });

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

            carousel.addEventListener('mouseenter', stopAutoPlay);
            carousel.addEventListener('mouseleave', startAutoPlay);

            startAutoPlay();
        });
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UIModule;
}
