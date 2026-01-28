// =============================================
// FORM HANDLING MODULE
// =============================================

const FormModule = {
    currentTotal: 0,
    currentTourName: '',

    init: function() {
        this.initPriceCalculator();
        this.initContactForm();
        this.initPayPalButton();
        this.initNewReservationButton();
        this.initReserveButtons();
        this.initDateInput();
    },

    // Price Calculator
    initPriceCalculator: function() {
        const tourSelect = document.getElementById('tour');
        const peopleInput = document.getElementById('people');

        if (tourSelect) {
            tourSelect.addEventListener('change', () => this.updatePriceCalculator());
        }
        if (peopleInput) {
            peopleInput.addEventListener('input', () => this.updatePriceCalculator());
        }
    },

    updatePriceCalculator: function() {
        const tourSelect = document.getElementById('tour');
        const peopleInput = document.getElementById('people');
        const priceSummary = document.getElementById('price-summary');
        const tourNameDisplay = document.getElementById('tour-name-display');
        const peopleCount = document.getElementById('people-count');
        const totalPrice = document.getElementById('total-price');

        if (!tourSelect || !peopleInput) return;

        const selectedOption = tourSelect.options[tourSelect.selectedIndex];
        const price = parseFloat(selectedOption.dataset.price) || 0;
        const priceType = selectedOption.dataset.priceType || 'per-person';
        const people = parseInt(peopleInput.value) || 1;
        this.currentTourName = selectedOption.text.split(' - ')[0];

        if (price > 0) {
            if (priceType === 'fixed') {
                this.currentTotal = price;
            } else {
                this.currentTotal = price * people;
            }

            if (tourNameDisplay) tourNameDisplay.textContent = this.currentTourName;
            if (peopleCount) peopleCount.textContent = people;
            if (totalPrice) totalPrice.textContent = '$' + this.currentTotal;
            if (priceSummary) priceSummary.style.display = 'block';
        } else {
            if (priceSummary) priceSummary.style.display = 'none';
            this.currentTotal = 0;
        }
    },

    // Contact Form Submission
    initContactForm: function() {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            const lang = localStorage.getItem('language') || 'es';

            // Check if tour has a price
            if (this.currentTotal === 0) {
                // No price - redirect to WhatsApp for consultation
                let message = '';
                if (lang === 'es') {
                    message = `Hola! Me gustaria consultar sobre una reserva:\n\n`;
                    message += `Nombre: ${data.name}\n`;
                    message += `Email: ${data.email}\n`;
                    if (data.phone) message += `Telefono: ${data.phone}\n`;
                    message += `Tour: ${this.currentTourName || data.tour}\n`;
                    if (data.date) message += `Fecha: ${data.date}\n`;
                    if (data.people) message += `Personas: ${data.people}\n`;
                    if (data.message) message += `Mensaje: ${data.message}\n`;
                } else {
                    message = `Hello! I would like to inquire about a reservation:\n\n`;
                    message += `Name: ${data.name}\n`;
                    message += `Email: ${data.email}\n`;
                    if (data.phone) message += `Phone: ${data.phone}\n`;
                    message += `Tour: ${this.currentTourName || data.tour}\n`;
                    if (data.date) message += `Date: ${data.date}\n`;
                    if (data.people) message += `People: ${data.people}\n`;
                    if (data.message) message += `Message: ${data.message}\n`;
                }
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/50688952387?text=${encodedMessage}`, '_blank');
                Utils.showNotification(lang === 'es' ? 'Redirigiendo a WhatsApp...' : 'Redirecting to WhatsApp...');
                return;
            }

            // Show confirmation with payment details
            const confirmation = document.getElementById('reservation-confirmation');
            document.getElementById('confirm-tour-name').textContent = this.currentTourName;
            document.getElementById('confirm-date').textContent = data.date || (lang === 'es' ? 'Por confirmar' : 'To be confirmed');
            document.getElementById('confirm-people').textContent = data.people;
            document.getElementById('confirm-total').textContent = '$' + this.currentTotal;

            // Store PayPal amount
            Utils.storePayPalAmount(this.currentTotal);

            // Store reservation data
            Utils.storeReservationData({
                name: data.name,
                email: data.email,
                phone: data.phone,
                tour: this.currentTourName,
                date: data.date,
                people: data.people,
                total: this.currentTotal,
                message: data.message
            });

            // Hide form, show confirmation
            contactForm.style.display = 'none';
            confirmation.style.display = 'block';

            Utils.showNotification(lang === 'es' ? 'Revisa los detalles y procede al pago' : 'Review details and proceed to payment');
        });
    },

    // PayPal button
    initPayPalButton: function() {
        const paypalBtn = document.getElementById('paypal-pay-btn');
        if (!paypalBtn) return;

        paypalBtn.addEventListener('click', function() {
            const amount = Utils.getPayPalAmount();
            if (amount > 0) {
                const paypalUrl = `https://www.paypal.me/mbonillamontero/${amount}`;
                window.open(paypalUrl, '_blank');
            }
        });
    },

    // New reservation button
    initNewReservationButton: function() {
        const newReservationBtn = document.getElementById('new-reservation-btn');
        if (!newReservationBtn) return;

        newReservationBtn.addEventListener('click', function() {
            const confirmation = document.getElementById('reservation-confirmation');
            const contactForm = document.getElementById('contact-form');
            if (confirmation && contactForm) {
                confirmation.style.display = 'none';
                contactForm.style.display = 'grid';
            }
        });
    },

    // Pre-select tour when clicking reserve button on tour card
    initReserveButtons: function() {
        const reserveButtons = document.querySelectorAll('.tour-card .btn-secondary');
        reserveButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const tourCard = this.closest('.tour-card');
                if (tourCard && tourCard.dataset.tourId) {
                    const tourId = tourCard.dataset.tourId;

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
                }
            });
        });
    },

    // Set minimum date for date input (48 hours from now)
    initDateInput: function() {
        const dateInput = document.getElementById('date');
        if (dateInput) {
            const minDate = new Date();
            minDate.setDate(minDate.getDate() + 2);
            dateInput.setAttribute('min', minDate.toISOString().split('T')[0]);
            dateInput.setAttribute('required', 'true');
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormModule;
}
