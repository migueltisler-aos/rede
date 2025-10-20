/**
 * Path Selection Module
 * Handles wedding/memorial theme switching
 */

function initPathSelection() {
    // Listen to path selection clicks
    document.addEventListener('click', function(e) {
        const pathBtn = e.target.closest('.path-btn');
        if (!pathBtn) return;

        // Determine path type from classes
        const isWedding = pathBtn.classList.contains('wedding-path');
        const isMemorial = pathBtn.classList.contains('memorial-path');

        if (isWedding || isMemorial) {
            const body = document.body;

            // Remove existing theme classes
            body.classList.remove('wedding-theme', 'memorial-theme');

            // Add new theme class
            if (isWedding) {
                body.classList.add('wedding-theme');
            } else if (isMemorial) {
                body.classList.add('memorial-theme');
            }

            // Let the default anchor behavior handle scrolling
            // The href="#services-wedding" or href="#services-memorial" will work automatically
        }
    });
}

// Legacy function for backward compatibility
function selectPath(pathType) {
    const body = document.body;
    body.classList.remove('wedding-theme', 'memorial-theme');

    if (pathType === 'wedding') {
        body.classList.add('wedding-theme');
    } else if (pathType === 'memorial') {
        body.classList.add('memorial-theme');
    }
}
