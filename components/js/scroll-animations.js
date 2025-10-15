/**
 * Scroll Animations Module
 * Handles reveal-on-scroll animations
 */

function revealOnScroll() {
    const reveals = document.querySelectorAll('.service-card, .contact-item, .about-container');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .contact-item, .about-container');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load
}
