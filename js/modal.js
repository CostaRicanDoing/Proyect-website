// =============================================
// TOUR MODAL MODULE
// =============================================

const ModalModule = {
    init: function() {
        const modal = document.getElementById('tour-modal');
        const closeBtn = document.getElementById('modal-close');
        const tourCards = document.querySelectorAll('.tour-card[data-tour-id]');

        if (!modal) return;

        // Open modal when clicking on tour card
        tourCards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                // Don't open modal if clicking on the reserve button
                if (e.target.closest('.btn')) return;

                const tourId = card.dataset.tourId;
                this.openModal(tourId);
            });
        });

        // Close modal
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeModal();
            }
        });

        // Reserve button in modal
        const reserveBtn = document.getElementById('modal-reserve-btn');
        if (reserveBtn) {
            reserveBtn.addEventListener('click', () => {
                const modalTitle = document.getElementById('modal-title');
                if (modalTitle) {
                    const tourName = modalTitle.textContent;
                    // Find the matching tour ID from TOURS_DATA
                    for (const [tourId, data] of Object.entries(TOURS_DATA)) {
                        if (data.title.es === tourName || data.title.en === tourName) {
                            setTimeout(() => {
                                const tourSelect = document.getElementById('tour');
                                if (tourSelect) {
                                    for (let i = 0; i < tourSelect.options.length; i++) {
                                        if (tourSelect.options[i].value === tourId) {
                                            tourSelect.selectedIndex = i;
                                            tourSelect.value = tourId;
                                            tourSelect.dispatchEvent(new Event('change', { bubbles: true }));
                                            break;
                                        }
                                    }
                                }
                            }, 150);
                            break;
                        }
                    }
                }
                this.closeModal();
            });
        }
    },

    openModal: function(tourId) {
        const modal = document.getElementById('tour-modal');
        const tour = TOURS_DATA[tourId];
        const lang = localStorage.getItem('language') || 'es';

        if (!tour) return;

        // Populate modal with tour data
        document.getElementById('modal-image').src = tour.image;
        document.getElementById('modal-image').alt = tour.title[lang];
        document.getElementById('modal-badge').textContent = tour.badge[lang];
        document.getElementById('modal-title').textContent = tour.title[lang];
        document.getElementById('modal-description').textContent = tour.description[lang];
        document.getElementById('modal-price').textContent = tour.priceDisplay[lang];

        // Populate lists
        this.populateList('modal-includes', tour.includes[lang]);
        this.populateList('modal-bring', tour.bring[lang]);
        this.populateList('modal-info', tour.info[lang]);

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    closeModal: function() {
        const modal = document.getElementById('tour-modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    },

    populateList: function(elementId, items) {
        const list = document.getElementById(elementId);
        if (!list) return;

        list.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check"></i> ${item}`;
            list.appendChild(li);
        });
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModalModule;
}
