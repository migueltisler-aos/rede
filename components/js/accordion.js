/**
 * Accordion Module
 * Handles expandable service details
 * Uses event delegation to work with dynamically loaded content
 */

function initAccordion() {
    // Use event delegation on document for dynamically loaded accordions
    document.addEventListener('click', function(e) {
        // Check if click is on accordion toggle
        const accordionToggle = e.target.closest('.accordion-toggle');
        const miniToggle = e.target.closest('.mini-accordion-toggle');

        // Handle regular accordions
        if (accordionToggle) {
            e.preventDefault();
            const content = accordionToggle.nextElementSibling;
            const isActive = content && content.classList.contains('active');

            // Close all accordions in the same section
            const section = accordionToggle.closest('.services');
            if (section) {
                section.querySelectorAll('.accordion-content').forEach(item => {
                    item.classList.remove('active');
                });
                section.querySelectorAll('.accordion-toggle').forEach(item => {
                    item.classList.remove('active');
                });
            }

            // Toggle clicked accordion
            if (!isActive && content) {
                content.classList.add('active');
                accordionToggle.classList.add('active');
            }
        }

        // Handle mini accordions
        if (miniToggle) {
            e.preventDefault();
            const content = miniToggle.nextElementSibling;
            const isActive = content && content.classList.contains('active');

            // Toggle current accordion
            if (isActive) {
                content.classList.remove('active');
                miniToggle.classList.remove('active');
            } else if (content) {
                content.classList.add('active');
                miniToggle.classList.add('active');
            }
        }
    });
}
