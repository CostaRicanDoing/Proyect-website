// =============================================
// UTILITY FUNCTIONS
// =============================================

const Utils = {
    // Show notification to user
    showNotification: function(message) {
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

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    },

    // Get current language
    getCurrentLang: function() {
        return localStorage.getItem('language') || 'es';
    },

    // Store data for PayPal and reservation
    storeReservationData: function(data) {
        window.reservationData = data;
    },

    getReservationData: function() {
        return window.reservationData || null;
    },

    storePayPalAmount: function(amount) {
        window.paypalAmount = amount;
    },

    getPayPalAmount: function() {
        return window.paypalAmount || 0;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
