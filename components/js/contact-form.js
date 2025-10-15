/**
 * Contact Form Module
 * Handles form submission
 */

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // TODO: Send to backend/email service
            // For now, show success message
            alert('Vielen Dank für Ihre Nachricht! Ich melde mich in Kürze bei Ihnen.');

            // Reset form
            contactForm.reset();
        });
    }
}
