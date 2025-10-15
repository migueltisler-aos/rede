/**
 * Content Editor JavaScript
 * Allows Marion to edit content visually
 */

let currentFile = 'hero';
let contentData = {};

// Initialize editor
async function init() {
    setupFileNavigation();
    await loadContent(currentFile);
}

// Setup file navigation
function setupFileNavigation() {
    const fileItems = document.querySelectorAll('.file-item');
    fileItems.forEach(item => {
        item.addEventListener('click', async () => {
            // Update active state
            fileItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Load content
            const file = item.dataset.file;
            currentFile = file;
            await loadContent(file);
        });
    });
}

// Load content from JSON file
async function loadContent(file) {
    try {
        const response = await fetch(`../content/${file}-content.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        contentData = await response.json();
        renderEditor();
    } catch (error) {
        console.error('Error loading content:', error);
        document.getElementById('editorPanel').innerHTML = `
            <div class="info-box" style="border-color: #f44336; background: #ffebee; color: #c62828;">
                <i class="fas fa-exclamation-triangle"></i>
                Fehler beim Laden der Datei. Bitte stellen Sie sicher, dass die Datei existiert.
            </div>
        `;
    }
}

// Render memorial content editor
function renderMemorialEditor() {
    let html = `
        <div class="editor-section">
            <h3><i class="fas fa-dove"></i> Trauerfeiern - Intro</h3>

            <div class="form-group">
                <label>Titel</label>
                <input type="text" data-path="intro.title" value="${contentData.intro.title}">
            </div>

            <div class="form-group">
                <label>Untertitel</label>
                <input type="text" data-path="intro.subtitle" value="${contentData.intro.subtitle}">
            </div>

            <h4>Intro-Absätze</h4>
            ${contentData.intro.paragraphs.map((p, i) => `
                <div class="form-group">
                    <label>Absatz ${i + 1}</label>
                    <textarea data-path="intro.paragraphs.${i}">${p}</textarea>
                </div>
            `).join('')}
        </div>

        ${contentData.services.map((service, serviceIndex) => `
            <div class="editor-section">
                <h3><i class="fas ${service.icon}"></i> ${service.title}</h3>

                <div class="form-group">
                    <label>Titel</label>
                    <input type="text" data-path="services.${serviceIndex}.title" value="${service.title}">
                </div>

                ${service.price ? `
                    <div class="form-group">
                        <label>Preis</label>
                        <input type="text" data-path="services.${serviceIndex}.price" value="${service.price}">
                    </div>
                ` : ''}

                ${service.content.intro ? `
                    <h4>Intro-Texte</h4>
                    ${service.content.intro.map((text, i) => `
                        <div class="form-group">
                            <label>Intro ${i + 1}</label>
                            <textarea data-path="services.${serviceIndex}.content.intro.${i}">${text}</textarea>
                        </div>
                    `).join('')}
                ` : ''}
            </div>
        `).join('')}

        <div class="editor-section">
            <h3><i class="fas fa-phone"></i> Call-to-Action</h3>

            <div class="form-group">
                <label>Titel</label>
                <input type="text" data-path="cta.title" value="${contentData.cta.title}">
            </div>

            <div class="form-group">
                <label>Untertitel</label>
                <input type="text" data-path="cta.subtitle" value="${contentData.cta.subtitle}">
            </div>

            <div class="form-group">
                <label>Button-Text</label>
                <input type="text" data-path="cta.buttonText" value="${contentData.cta.buttonText}">
            </div>

            <div class="form-group">
                <label>Telefonnummer</label>
                <input type="text" data-path="cta.phone" value="${contentData.cta.phone}">
            </div>
        </div>
    `;

    return html;
}

// Render editor based on content structure
function renderEditor() {
    const panel = document.getElementById('editorPanel');
    let html = '';

    if (currentFile === 'hero') {
        html = renderHeroEditor();
    } else if (currentFile === 'wedding') {
        html = renderWeddingEditor();
    } else if (currentFile === 'memorial') {
        html = renderMemorialEditor();
    }

    html += `
        <div class="button-group">
            <button class="btn btn-primary" onclick="saveContent()">
                <i class="fas fa-save"></i>
                Speichern
            </button>
            <button class="btn btn-secondary" onclick="loadContent(currentFile)">
                <i class="fas fa-undo"></i>
                Zurücksetzen
            </button>
        </div>
    `;

    panel.innerHTML = html;
    attachInputListeners();
}

// Render hero content editor
function renderHeroEditor() {
    let html = `
        <div class="editor-section">
            <h3><i class="fas fa-home"></i> Startseite Kopfbereich</h3>

            <div class="form-group">
                <label>Titel (normaler Teil)</label>
                <input type="text" data-path="title.normal" value="${contentData.title.normal}">
            </div>

            <div class="form-group">
                <label>Titel (hervorgehobener Teil)</label>
                <input type="text" data-path="title.highlight" value="${contentData.title.highlight}">
            </div>

            <div class="form-group">
                <label>Untertitel</label>
                <input type="text" data-path="title.subtitle" value="${contentData.title.subtitle}">
            </div>

            <div class="form-group">
                <label>Beschreibung</label>
                <textarea data-path="description">${contentData.description}</textarea>
            </div>
        </div>

        <div class="editor-section">
            <h3><i class="fas fa-user"></i> Tab: Über mich</h3>

            <div class="form-group">
                <label>Intro-Text</label>
                <textarea data-path="tabs.about.intro">${contentData.tabs.about.intro}</textarea>
            </div>

            <div class="form-group">
                <label>Haupttext</label>
                <textarea data-path="tabs.about.mainText">${contentData.tabs.about.mainText}</textarea>
            </div>

            <h4>Erweiterte Informationen</h4>
            ${contentData.tabs.about.expandedContent.paragraphs.map((p, i) => `
                <div class="form-group">
                    <label>Absatz ${i + 1}</label>
                    <textarea data-path="tabs.about.expandedContent.paragraphs.${i}">${p}</textarea>
                </div>
            `).join('')}

            <h4>Fakten über mich</h4>
            ${contentData.tabs.about.expandedContent.facts.map((fact, i) => `
                <div class="array-item">
                    <div class="form-group">
                        <label>Titel</label>
                        <input type="text" data-path="tabs.about.expandedContent.facts.${i}.title" value="${fact.title}">
                    </div>
                    <div class="form-group">
                        <label>Text</label>
                        <textarea data-path="tabs.about.expandedContent.facts.${i}.text">${fact.text}</textarea>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="editor-section">
            <h3><i class="fas fa-handshake"></i> Tab: Wie ich arbeite</h3>

            <div class="form-group">
                <label>Intro-Text</label>
                <textarea data-path="tabs.process.intro">${contentData.tabs.process.intro}</textarea>
            </div>

            <h4>Prozess-Schritte</h4>
            ${contentData.tabs.process.steps.map((step, i) => `
                <div class="array-item">
                    <div class="form-group">
                        <label>Schritt ${step.number}: Titel</label>
                        <input type="text" data-path="tabs.process.steps.${i}.title" value="${step.title}">
                    </div>
                    <div class="form-group">
                        <label>Beschreibung</label>
                        <textarea data-path="tabs.process.steps.${i}.text">${step.text}</textarea>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="editor-section">
            <h3><i class="fas fa-route"></i> Anlass-Auswahl</h3>

            <div class="form-group">
                <label>Titel der Sektion</label>
                <input type="text" data-path="pathSelection.title" value="${contentData.pathSelection.title}">
            </div>
        </div>
    `;

    return html;
}

// Render wedding content editor
function renderWeddingEditor() {
    let html = `
        <div class="editor-section">
            <h3><i class="fas fa-heart"></i> Hochzeiten - Intro</h3>

            <div class="form-group">
                <label>Titel</label>
                <input type="text" data-path="intro.title" value="${contentData.intro.title}">
            </div>

            <div class="form-group">
                <label>Untertitel</label>
                <input type="text" data-path="intro.subtitle" value="${contentData.intro.subtitle}">
            </div>

            <h4>Intro-Absätze</h4>
            ${contentData.intro.paragraphs.map((p, i) => `
                <div class="form-group">
                    <label>Absatz ${i + 1}</label>
                    <textarea data-path="intro.paragraphs.${i}">${p}</textarea>
                </div>
            `).join('')}
        </div>

        ${contentData.services.map((service, serviceIndex) => `
            <div class="editor-section">
                <h3><i class="fas ${service.icon}"></i> ${service.title}</h3>

                <div class="form-group">
                    <label>Titel</label>
                    <input type="text" data-path="services.${serviceIndex}.title" value="${service.title}">
                </div>

                ${service.price ? `
                    <div class="form-group">
                        <label>Preis</label>
                        <input type="text" data-path="services.${serviceIndex}.price" value="${service.price}">
                    </div>
                ` : ''}

                ${renderServiceContent(service, serviceIndex)}
            </div>
        `).join('')}

        <div class="editor-section">
            <h3><i class="fas fa-phone"></i> Call-to-Action</h3>

            <div class="form-group">
                <label>Titel</label>
                <input type="text" data-path="cta.title" value="${contentData.cta.title}">
            </div>

            <div class="form-group">
                <label>Untertitel</label>
                <input type="text" data-path="cta.subtitle" value="${contentData.cta.subtitle}">
            </div>

            <div class="form-group">
                <label>Button-Text</label>
                <input type="text" data-path="cta.buttonText" value="${contentData.cta.buttonText}">
            </div>
        </div>
    `;

    return html;
}

// Render service-specific content
function renderServiceContent(service, serviceIndex) {
    const content = service.content;
    let html = '';

    // Handle intro paragraphs
    if (content.intro && Array.isArray(content.intro)) {
        html += `<h4>Intro-Texte</h4>`;
        content.intro.forEach((text, i) => {
            html += `
                <div class="form-group">
                    <label>Intro ${i + 1}</label>
                    <textarea data-path="services.${serviceIndex}.content.intro.${i}">${text}</textarea>
                </div>
            `;
        });
    }

    // Handle included items
    if (content.included) {
        html += `
            <h4>Leistungen</h4>
            <div class="form-group">
                <label>Titel</label>
                <input type="text" data-path="services.${serviceIndex}.content.included.title" value="${content.included.title}">
            </div>
        `;
        content.included.items.forEach((item, i) => {
            html += `
                <div class="form-group">
                    <label>Leistung ${i + 1}</label>
                    <input type="text" data-path="services.${serviceIndex}.content.included.items.${i}" value="${item}">
                </div>
            `;
        });
    }

    // Handle timeline
    if (content.timeline) {
        html += `<h4>Prozess-Schritte</h4>`;
        content.timeline.forEach((step, i) => {
            html += `
                <div class="array-item">
                    <div class="form-group">
                        <label>Schritt ${step.number}: Titel</label>
                        <input type="text" data-path="services.${serviceIndex}.content.timeline.${i}.title" value="${step.title}">
                    </div>
                    <div class="form-group">
                        <label>Beschreibung</label>
                        <textarea data-path="services.${serviceIndex}.content.timeline.${i}.text">${step.text}</textarea>
                    </div>
                </div>
            `;
        });
    }

    return html;
}

// Attach input listeners to update contentData
function attachInputListeners() {
    const inputs = document.querySelectorAll('input[data-path], textarea[data-path]');
    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const path = e.target.dataset.path;
            const value = e.target.value;
            setNestedProperty(contentData, path, value);
        });
    });
}

// Set nested property by path
function setNestedProperty(obj, path, value) {
    const keys = path.split('.');
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
            current[keys[i]] = {};
        }
        current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = value;
}

// Save content
async function saveContent() {
    try {
        // In production, this would send to a backend API
        // For now, we'll download as JSON file
        const dataStr = JSON.stringify(contentData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `${currentFile}-content.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        showSuccessMessage();
    } catch (error) {
        console.error('Error saving content:', error);
        alert('Fehler beim Speichern. Bitte versuchen Sie es erneut.');
    }
}

// Show success message
function showSuccessMessage() {
    const msg = document.getElementById('successMessage');
    msg.classList.add('show');
    setTimeout(() => {
        msg.classList.remove('show');
    }, 3000);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
