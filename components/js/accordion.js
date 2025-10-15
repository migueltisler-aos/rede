/**
 * Accordion Module
 * Handles expandable service details
 */

function initAccordion() {
    // Regular accordions
    const accordionToggles = document.querySelectorAll('.accordion-toggle');

    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = content.classList.contains('active');

            // Close all accordions in the same section
            const section = this.closest('.services');
            if (section) {
                section.querySelectorAll('.accordion-content').forEach(item => {
                    item.classList.remove('active');
                });
                section.querySelectorAll('.accordion-toggle').forEach(item => {
                    item.classList.remove('active');
                });
            }

            // Toggle clicked accordion
            if (!isActive) {
                content.classList.add('active');
                this.classList.add('active');
            }
        });
    });

    // Mini accordions (for hero section)
    const miniToggles = document.querySelectorAll('.mini-accordion-toggle');

    miniToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = content.classList.contains('active');

            // Toggle current accordion
            if (isActive) {
                content.classList.remove('active');
                this.classList.remove('active');
            } else {
                content.classList.add('active');
                this.classList.add('active');
            }
        });
    });
}
