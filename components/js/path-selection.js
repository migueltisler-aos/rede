/**
 * Path Selection Module
 * Handles wedding/memorial theme switching
 */

function selectPath(pathType) {
    const body = document.body;

    // Remove existing theme classes
    body.classList.remove('wedding-theme', 'memorial-theme');

    // Add new theme class
    if (pathType === 'wedding') {
        body.classList.add('wedding-theme');

        // Scroll to wedding services section
        setTimeout(() => {
            const servicesSection = document.getElementById('services-wedding');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);

    } else if (pathType === 'memorial') {
        body.classList.add('memorial-theme');

        // Scroll to memorial services section
        setTimeout(() => {
            const servicesSection = document.getElementById('services-memorial');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    }
}
