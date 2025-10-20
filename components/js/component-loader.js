/**
 * Component Loader
 * Loads HTML components dynamically
 */

async function loadComponent(componentPath, targetId, contentFile = null) {
    try {
        // If content file is specified, use JSON-based rendering
        if (contentFile) {
            const data = await window.contentRenderer.loadContent(contentFile);
            if (!data) {
                throw new Error(`Failed to load content: ${contentFile}`);
            }

            const target = document.getElementById(targetId);
            if (!target) {
                throw new Error(`Target element not found: ${targetId}`);
            }

            // Render based on component type
            let html = '';
            if (contentFile === 'hero') {
                html = window.contentRenderer.renderHero(data);
            } else if (contentFile === 'wedding') {
                html = window.contentRenderer.renderWeddingServices(data);
            } else if (contentFile === 'memorial') {
                html = window.contentRenderer.renderMemorialServices(data);
            }

            target.innerHTML = html;
            return true;
        }

        // Traditional HTML loading
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        const target = document.getElementById(targetId);
        if (target) {
            target.innerHTML = html;
            return true;
        }
        return false;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
        return false;
    }
}

async function loadAllComponents() {
    const components = [
        { path: 'components/html/navigation.html', target: 'nav-component' },
        { path: null, target: 'hero-component', contentFile: 'hero' }, // JSON-based
        { path: 'components/html/about.html', target: 'about-component' },
        { path: null, target: 'services-wedding-component', contentFile: 'wedding' }, // JSON-based
        { path: null, target: 'services-memorial-component', contentFile: 'memorial' }, // JSON-based
        { path: 'components/html/instagram-feed.html', target: 'instagram-component' },
        { path: 'components/html/contact.html', target: 'contact-component' },
        { path: 'components/html/footer.html', target: 'footer-component' }
    ];

    // Load all components in parallel
    const loadPromises = components.map(comp =>
        loadComponent(comp.path, comp.target, comp.contentFile)
    );

    await Promise.all(loadPromises);

    // Initialize scripts after all components are loaded
    initializeApp();
}

function initializeApp() {
    // Re-run initialization scripts after components are loaded
    if (typeof initNavigation === 'function') initNavigation();
    if (typeof initTabs === 'function') initTabs();
    if (typeof initAccordion === 'function') initAccordion();
    if (typeof initPathSelection === 'function') initPathSelection();
    if (typeof initContactForm === 'function') initContactForm();
    if (typeof initScrollAnimations === 'function') initScrollAnimations();
}

// Load components when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllComponents);
} else {
    loadAllComponents();
}
