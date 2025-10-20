/**
 * Content Renderer
 * Renders HTML components from JSON content files
 */

class ContentRenderer {
    constructor() {
        this.content = {};
    }

    // Load content from JSON file
    async loadContent(fileName) {
        try {
            const response = await fetch(`content/${fileName}-content.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.content[fileName] = await response.json();
            return this.content[fileName];
        } catch (error) {
            console.error(`Error loading ${fileName} content:`, error);
            return null;
        }
    }

    // Render hero section
    renderHero(data) {
        const aboutTab = data.tabs.about;
        const processTab = data.tabs.process;

        return `
<section id="home" class="hero">
    <div class="hero-container">
        <div class="hero-content">
            <div class="hero-badge">
                <i class="fas ${data.badge.icon}"></i>
                <span>${data.badge.text}</span>
            </div>
            <h1 class="hero-title">
                ${data.title.normal}<span class="highlight">${data.title.highlight}</span><br>
                ${data.title.subtitle}
            </h1>
            <p class="hero-subtitle">${data.subtitle}</p>
            <p class="hero-description">
                ${data.description}
            </p>

            <!-- Tabs: Über mich / Wie ich arbeite -->
            <div class="hero-tabs">
                <div class="tab-buttons">
                    <button class="tab-btn active" data-tab="about">
                        <i class="fas ${aboutTab.tabIcon}"></i>
                        <span>${aboutTab.tabTitle}</span>
                    </button>
                    <button class="tab-btn" data-tab="process">
                        <i class="fas ${processTab.tabIcon}"></i>
                        <span>${processTab.tabTitle}</span>
                    </button>
                </div>

                <div class="tab-content">
                    <!-- Tab: Über mich -->
                    <div class="tab-panel active" id="tab-about">
                        <p class="tab-intro">
                            ${aboutTab.intro}
                        </p>
                        <p>
                            ${aboutTab.mainText}
                        </p>

                        <!-- Accordion: Wer bin ich? -->
                        <button class="mini-accordion-toggle">
                            <span>${aboutTab.accordionTitle}</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="mini-accordion-content">
                            ${aboutTab.expandedContent.paragraphs.map(p => `<p>${p}</p>`).join('')}

                            <h4>${aboutTab.expandedContent.factsTitle}</h4>
                            <ul class="facts-list">
                                ${aboutTab.expandedContent.facts.map(fact => `
                                    <li><strong>${fact.title}</strong> ${fact.text}</li>
                                `).join('')}
                            </ul>
                        </div>

                        <div class="tab-highlights">
                            ${aboutTab.highlights.map(h => `
                                <span class="tag"><i class="fas ${h.icon}"></i> ${h.text}</span>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Tab: Wie ich arbeite -->
                    <div class="tab-panel" id="tab-process">
                        <p class="tab-intro">
                            ${processTab.intro}
                        </p>
                        <div class="process-steps">
                            ${processTab.steps.map(step => `
                                <div class="process-step">
                                    <div class="step-number">${step.number}</div>
                                    <div class="step-content">
                                        <h4>${step.title}</h4>
                                        <p>${step.text}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Audio Sample -->
            <div class="audio-sample">
                <h4><i class="fas ${data.audioSample.icon}"></i> ${data.audioSample.title}</h4>
                <audio controls>
                    <source src="${data.audioSample.audioFile}" type="audio/mpeg">
                    ${data.audioSample.fallbackText}
                </audio>
            </div>

            <!-- Path Selection -->
            <div class="path-selection">
                <h3>${data.pathSelection.title}</h3>
                <div class="path-buttons">
                    ${data.pathSelection.paths.map(path => `
                        <a href="#services-${path.type}" class="path-btn ${path.type}-path">
                            <i class="fas ${path.icon}"></i>
                            <span>${path.title}</span>
                            <p>${path.subtitle}</p>
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="hero-image">
            <img src="assets/images/marion-hero.jpg" alt="Marion Zwoch - Freie Rednerin" class="hero-img">
        </div>
    </div>
</section>
        `;
    }

    // Render memorial services section
    renderMemorialServices(data) {
        return `
<section id="services-memorial" class="services memorial-section">
    <div class="container">
        <h2 class="section-title">${data.intro.title}</h2>
        <p class="section-subtitle">${data.intro.subtitle}</p>

        <div class="intro-text">
            ${data.intro.paragraphs.map(p => `<p>${p}</p>`).join('')}
        </div>

        <div class="services-grid">
            ${data.services.map(service => this.renderMemorialCard(service)).join('')}
        </div>

        <div class="cta-section">
            <h3>${data.cta.title}</h3>
            <p>${data.cta.subtitle}</p>
            <a href="#contact" class="btn btn-primary">
                <i class="fas ${data.cta.buttonIcon}"></i>
                ${data.cta.buttonText}
            </a>
            <p class="phone-cta"><i class="fas fa-phone"></i> ${data.cta.phone}</p>
        </div>
    </div>
</section>
        `;
    }

    // Render memorial service card
    renderMemorialCard(service) {
        let html = `
        <div class="service-card memorial-theme">
            <div class="service-icon">
                <i class="fas ${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
        `;

        if (service.price) {
            html += `<p class="service-price">${service.price}</p>`;
        }

        html += `
            <button class="accordion-toggle">
                <span>${service.toggleText}</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="accordion-content">
        `;

        if (service.content.intro) {
            if (Array.isArray(service.content.intro)) {
                html += service.content.intro.map(p => `<p>${p}</p>`).join('');
            } else {
                html += `<p>${service.content.intro}</p>`;
            }
        }

        if (service.content.approach) {
            html += `
                <h4>${service.content.approach.title}</h4>
                <ul>
                    ${service.content.approach.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
        }

        if (service.content.promise) {
            html += `<p>${service.content.promise}</p>`;
        }

        if (service.content.included) {
            html += `
                <h4>${service.content.included.title}</h4>
                <ul>
                    ${service.content.included.items.map(item => `
                        <li><i class="fas fa-check"></i> ${item}</li>
                    `).join('')}
                </ul>
            `;

            if (service.content.priceNote) {
                html += `<p class="price-note">${service.content.priceNote}</p>`;
            }
        }

        if (service.content.sections) {
            service.content.sections.forEach(section => {
                html += `<h4>${section.title}</h4>`;
                if (section.text) {
                    html += `<p>${section.text}</p>`;
                }
                if (section.items) {
                    html += `<ul>`;
                    section.items.forEach(item => {
                        html += `<li>${item}</li>`;
                    });
                    html += `</ul>`;
                }
            });
        }

        if (service.content.values) {
            html += `<div class="values-grid">`;
            service.content.values.forEach(value => {
                html += `
                    <div class="value-item">
                        <i class="fas ${value.icon}"></i>
                        <h5>${value.title}</h5>
                        <p>${value.text}</p>
                    </div>
                `;
            });
            html += `</div>`;

            if (service.content.closing) {
                html += `<p class="closing-text">${service.content.closing}</p>`;
            }
        }

        html += `
            </div>
        </div>
        `;

        return html;
    }

    // Render wedding services section
    renderWeddingServices(data) {
        return `
<section id="services-wedding" class="services wedding-section">
    <div class="container">
        <h2 class="section-title">${data.intro.title}</h2>
        <p class="section-subtitle">${data.intro.subtitle}</p>

        <div class="intro-text">
            ${data.intro.paragraphs.map(p => `<p>${p}</p>`).join('')}
        </div>

        <div class="services-grid">
            ${data.services.map(service => this.renderServiceCard(service)).join('')}
        </div>

        <div class="cta-section">
            <h3>${data.cta.title}</h3>
            <p>${data.cta.subtitle}</p>
            <a href="#contact" class="btn btn-primary">
                <i class="fas ${data.cta.buttonIcon}"></i>
                ${data.cta.buttonText}
            </a>
        </div>
    </div>
</section>
        `;
    }

    // Render individual service card
    renderServiceCard(service) {
        let html = `
        <div class="service-card wedding-theme">
            <div class="service-icon">
                <i class="fas ${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
        `;

        if (service.price) {
            html += `<p class="service-price">${service.price}</p>`;
        }

        html += `
            <button class="accordion-toggle">
                <span>${service.toggleText}</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="accordion-content">
        `;

        // Render service content based on type
        if (service.content.intro) {
            if (Array.isArray(service.content.intro)) {
                html += service.content.intro.map(p => `<p>${p}</p>`).join('');
            } else {
                html += `<p>${service.content.intro}</p>`;
            }
        }

        if (service.content.included) {
            html += `
                <h4>${service.content.included.title}</h4>
                <ul>
                    ${service.content.included.items.map(item => `
                        <li><i class="fas fa-check"></i> ${item}</li>
                    `).join('')}
                </ul>
            `;

            if (service.content.priceNote) {
                html += `<p class="price-note">${service.content.priceNote}</p>`;
            }
        }

        if (service.content.timeline) {
            html += `
                <h4>${service.content.heading}</h4>
                <div class="timeline">
                    ${service.content.timeline.map(step => `
                        <div class="timeline-item">
                            <div class="timeline-marker">${step.number}</div>
                            <div class="timeline-content">
                                <h5>${step.title}</h5>
                                <p>${step.text}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        if (service.content.sections) {
            service.content.sections.forEach(section => {
                html += `<h4>${section.title}</h4>`;
                if (section.text) {
                    html += `<p>${section.text}</p>`;
                }
                if (section.items) {
                    html += `<ul>`;
                    section.items.forEach(item => {
                        if (typeof item === 'string') {
                            html += `<li>${item}</li>`;
                        } else if (item.icon) {
                            html += `<li><i class="fas ${item.icon}"></i> ${item.text}</li>`;
                        }
                    });
                    html += `</ul>`;
                }
            });
        }

        if (service.content.options) {
            html += `
                <h4>${service.content.options.title}</h4>
                <ul>
                    ${service.content.options.items.map(item => `
                        <li><i class="fas ${item.icon}"></i> ${item.text}</li>
                    `).join('')}
                </ul>
            `;
        }

        if (service.content.styles) {
            html += `
                <h4>${service.content.styles.title}</h4>
                <ul>
                    ${service.content.styles.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
        }

        if (service.content.closing) {
            html += `<p>${service.content.closing}</p>`;
        }

        html += `
            </div>
        </div>
        `;

        return html;
    }
}

// Create global instance
window.contentRenderer = new ContentRenderer();
