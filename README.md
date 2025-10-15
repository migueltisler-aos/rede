# Geschichten-Atelier Website

Moderne, modulare Website für Marion Zwoch - Freie Rednerin (IHK) für besondere Momente in Berlin und Brandenburg.

## Projektübersicht

Diese Website präsentiert die Dienstleistungen von Marion Zwoch mit Fokus auf:
- **Freie Trauungen** (Hochzeiten & Eheerneuerungen)
- **Trauerfeiern** (würdevolle Abschiedszeremonien)
- **Kinderwillkommensfeste**

## Architektur

Die Website ist **komponentenbasiert** aufgebaut - keine Datei überschreitet 150 Zeilen Code.

### Struktur

```
geschichten-atelier-website/
├── index.html                      # Haupt-HTML (nur 54 Zeilen!)
├── components/
│   ├── html/                       # HTML-Komponenten
│   │   ├── navigation.html         # Navigation & Logo
│   │   ├── hero.html              # Hero mit Path-Selection & Audio
│   │   ├── about.html             # Über-mich-Sektion
│   │   ├── services-wedding.html  # Hochzeit/Eheerneuerung
│   │   ├── services-memorial.html # Trauerfeier/Kinderfest
│   │   ├── instagram-feed.html    # Instagram Integration
│   │   ├── contact.html           # Kontaktformular
│   │   └── footer.html            # Footer mit Links
│   └── js/                        # JavaScript-Module
│       ├── component-loader.js    # Lädt alle Komponenten
│       ├── navigation.js          # Navigation & Scroll
│       ├── path-selection.js      # Theme-Wechsel (Hochzeit/Trauer)
│       ├── accordion.js           # Service-Details
│       ├── contact-form.js        # Formular-Handling
│       └── scroll-animations.js   # Scroll-Animationen
├── assets/
│   ├── css/
│   │   └── style.css              # Alle Styles mit Themes
│   ├── js/
│   │   └── script.js              # (Legacy - nicht mehr verwendet)
│   ├── images/                    # Bilder
│   └── audio/
│       └── hoerprobe.mp3          # Audio-Probe
└── README.md
```

## Features

### 1. Path-basiertes Theme-System
- **Hochzeit-Theme**: Rosa/Rot Farbschema
- **Trauer-Theme**: Blau/Grün Farbschema
- Dynamischer Theme-Wechsel ohne Page-Reload

### 2. Komponenten-System
- Jede Komponente ist unabhängig
- Maximale Wartbarkeit
- Einfaches Hinzufügen neuer Sektionen

### 3. Ehrliche Kommunikation
- **Keine künstliche Verknappung**
- **Keine fake Testimonials**
- Transparente Preisangaben
- Echter Instagram-Feed als Social Proof

### 4. Mobile-First Design
- Vollständig responsive
- Touch-optimierte Navigation
- Schnelle Ladezeiten

## Farbpalette

### Neutral
- `--primary-neutral: #8b7355` (Braun)
- `--text-dark: #2c3e50` (Dunkelgrau)
- `--text-light: #5a6c7d` (Hellgrau)

### Hochzeit (Rosa/Rot)
- `--primary-wedding: #d94e7c`
- `--secondary-wedding: #e6798f`
- `--light-wedding: #f7e1e8`

### Trauerfeier (Blau/Grün)
- `--primary-memorial: #4a7c8c`
- `--secondary-memorial: #6b9da8`
- `--light-memorial: #dce9ec`

## Entwicklung

### Lokaler Server starten

```bash
# Empfohlen: http-server
npx http-server -p 8000

# Alternative: Node.js
node -e "const http=require('http');..."

# Alternative: Python
python -m http.server 8000
```

Dann öffnen: **http://localhost:8000**

### Komponente bearbeiten

1. HTML-Komponente in `components/html/` bearbeiten
2. Seite neu laden - Komponente wird automatisch geladen
3. Keine Build-Schritte notwendig!

### Neue Komponente hinzufügen

1. HTML-Datei in `components/html/` erstellen
2. In `components/js/component-loader.js` registrieren:
   ```javascript
   { path: 'components/html/neue-komponente.html', target: 'neue-komponente' }
   ```
3. Container in `index.html` einfügen:
   ```html
   <div id="neue-komponente"></div>
   ```

## Technologie-Stack

- **HTML5** - Semantisches Markup
- **CSS3** - Grid, Flexbox, Custom Properties
- **Vanilla JavaScript** - Keine Frameworks
- **Google Fonts** - Inter & Playfair Display
- **Font Awesome 6** - Icons

## Kontakt

**Marion Zwoch**
Freie Rednerin (IHK)

- Telefon/WhatsApp: [0178 1873022](tel:+491781873022)
- E-Mail: [info@geschichten-atelier.de](mailto:info@geschichten-atelier.de)
- Instagram: [@geschichtenatelier](https://www.instagram.com/geschichtenatelier/)
- Region: Berlin & Brandenburg

## Prinzipien

✅ **Keine Quickfixes - nur saubere Lösungen**
✅ **Ehrliche Kommunikation - keine künstliche Verknappung**
✅ **Modular - keine Datei > 150 Zeilen**
✅ **Performance - schnelle Ladezeiten**
✅ **Wartbarkeit - verständlicher Code**

---

*Entwickelt mit Claude Code - Fokus auf Klarheit, Wartbarkeit und ehrliche Kommunikation.*
