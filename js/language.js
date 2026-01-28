// =============================================
// LANGUAGE SWITCHING MODULE
// =============================================

const LanguageModule = {
    currentLang: 'es',

    init: function() {
        this.currentLang = localStorage.getItem('language') || 'es';
        this.setLanguage(this.currentLang);
        this.bindEvents();
    },

    bindEvents: function() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.setLanguage(lang);
                localStorage.setItem('language', lang);
            });
        });
    },

    setLanguage: function(lang) {
        this.currentLang = lang;
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
    },

    getCurrentLang: function() {
        return this.currentLang;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageModule;
}
