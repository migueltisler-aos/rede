# Komponenten-Übersicht

Alle Komponenten sind modular und unter 150 Zeilen Code.

## HTML-Komponenten (`components/html/`)

### navigation.html (21 Zeilen)
- Responsive Navigation mit Mobile-Toggle
- Logo und Untertitel
- Links zu allen Hauptsektionen

### hero.html (75 Zeilen)
- Hero-Sektion mit Vorstellung
- IHK-Badge
- Path-Selection Buttons (Hochzeit/Trauer)
- Audio-Player für Hörprobe

### about.html (49 Zeilen)
- Über-mich-Sektion
- Persönliche Vorstellung von Marion
- Highlights (IHK, Region, Persönlichkeit)
- Bild

### services-wedding.html (74 Zeilen)
- Freie Trauung (ab 980€)
- Eheerneuerung (ab 980€)
- Akkordeon-Details mit Features
- Preisangaben transparent

### services-memorial.html (78 Zeilen)
- Trauerfeier (380€)
- Kinderwillkommensfest (ab 450€)
- Würdevolle Ansprache
- Detaillierte Leistungsbeschreibung

### instagram-feed.html (39 Zeilen)
- Instagram-Integration
- Link zu @geschichtenatelier
- Placeholder für Feed
- Social Proof statt fake Testimonials

### contact.html (68 Zeilen)
- Kontaktformular
- Telefon (0178 1873022) mit WhatsApp
- E-Mail
- Instagram-Link
- Service-Auswahl

### footer.html (43 Zeilen)
- Kontaktinformationen
- Social Media Links
- Netzwerk-Links (RedeKunstWerk, etc.)
- Datenschutz/Impressum

## JavaScript-Module (`components/js/`)

### component-loader.js (45 Zeilen)
**Zweck**: Lädt alle HTML-Komponenten dynamisch

**Funktionen**:
- `loadComponent(path, target)` - Lädt einzelne Komponente
- `loadAllComponents()` - Lädt alle parallel
- `initializeApp()` - Initialisiert nach Laden

### navigation.js (72 Zeilen)
**Zweck**: Navigation und Scroll-Verhalten

**Features**:
- Mobile Menu Toggle
- Smooth Scrolling zu Sektionen
- Active Link Highlighting
- Close on outside click

### path-selection.js (31 Zeilen)
**Zweck**: Theme-Wechsel zwischen Hochzeit und Trauer

**Funktionen**:
- `selectPath(pathType)` - Wechselt Theme
- Scrollt zur passenden Services-Sektion
- Body-Class Management

### accordion.js (29 Zeilen)
**Zweck**: Expandierbare Service-Details

**Features**:
- Toggle Accordion Content
- Close other accordions in same section
- Smooth Animation

### contact-form.js (20 Zeilen)
**Zweck**: Kontaktformular-Handling

**Features**:
- Form Submit Handler
- TODO: Backend-Integration
- Success Message
- Form Reset

### scroll-animations.js (28 Zeilen)
**Zweck**: Reveal-on-Scroll Animationen

**Features**:
- Fade-in beim Scrollen
- Element Visibility Detection
- Performance-optimiert

## CSS-Organisation

Das CSS ist in einem einzigen File (`assets/css/style.css`) aber logisch strukturiert:

1. **Reset & Base** (Zeilen 1-18)
2. **Theme Colors** (Zeilen 20-53)
3. **Typography** (Zeilen 46-68)
4. **Buttons** (Zeilen 70-105)
5. **Navigation** (Zeilen 107-173)
6. **Hero Section** (Zeilen 175-248)
7. **Path Selection** (Zeilen 250-319)
8. **About Section** (Zeilen 321-377)
9. **Services** (Zeilen 379-513)
10. **Contact** (Zeilen 515-607)
11. **Footer** (Zeilen 609-646)
12. **Responsive** (Zeilen 648-777)
13. **Audio/Instagram/Themes** (Zeilen 779-1000)

## Wartung

### Komponente bearbeiten
1. Öffne entsprechende Datei in `components/html/` oder `components/js/`
2. Bearbeite (max. 150 Zeilen!)
3. Speichern & Browser neu laden

### Neue Komponente hinzufügen
1. Erstelle HTML in `components/html/neue-komponente.html`
2. Registriere in `component-loader.js`:
   ```javascript
   { path: 'components/html/neue-komponente.html', target: 'neue-component' }
   ```
3. Container in `index.html` einfügen:
   ```html
   <div id="neue-component"></div>
   ```

### Styles anpassen
- **Theme-Farben**: Zeilen 20-41 in `style.css`
- **Komponenten-Styles**: Suche nach Komponenten-Namen im CSS
- **Responsive**: Media Queries ab Zeile 648

## Best Practices

✅ **Keine Datei > 150 Zeilen**
✅ **Semantisches HTML**
✅ **Klare Funktionsnamen**
✅ **Kommentare für komplexe Logik**
✅ **Mobile-first CSS**

---

*Modulares System für maximale Wartbarkeit und Klarheit*
