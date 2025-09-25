# Geschichten-Atelier Website

Eine moderne, responsive Website für Marion Zwoch - Freie Rednerin (IHK) für besondere Momente.

## 🌟 Features

- **Moderne Design**: Zeitgemäßes, responsives Design mit sanften Animationen
- **Mobile-First**: Optimiert für alle Geräte (Smartphone, Tablet, Desktop)
- **Schnelle Ladezeiten**: Optimierte Performance und Assets
- **SEO-Optimiert**: Suchmaschinenfreundliche Struktur
- **Kontaktformular**: Mit Validierung und Benutzerfeedback
- **Interaktive Elemente**: Smooth Scrolling, Hover-Effekte, Parallax

## 🚀 Live Demo

Die Website läuft auf: **http://localhost:8000**

## 📁 Projektstruktur

```
geschichten-atelier-website/
├── index.html              # Hauptseite
├── assets/
│   ├── css/
│   │   └── style.css       # Styles und Responsive Design
│   ├── js/
│   │   └── script.js       # Interaktive Funktionen
│   └── images/             # Bilder und Medien
│       ├── ceremony-1.jpg  # Zeremonie-Bilder
│       ├── ceremony-2.jpg
│       ├── ceremony-3.jpg
│       ├── ceremony-4.jpg
│       ├── marion-hero.jpg # Marion's Profilbilder
│       └── marion-about.jpg
└── README.md               # Diese Datei
```

## 🎨 Design-Highlights

### Farbpalette
- **Primär**: Lineare Gradienten (#667eea → #764ba2)
- **Akzente**: Warme Blautöne und sanfte Grautöne
- **Hintergründe**: Sanfte Farbverläufe für moderne Optik

### Typografie
- **Hauptfont**: Inter (saubere, moderne Sans-Serif)
- **Überschriften**: Playfair Display (elegante Serif)

### Sektionen
1. **Hero-Bereich**: Emotionale Begrüßung mit USPs
2. **Über mich**: Persönliche Geschichte und Qualifikationen
3. **Leistungen**: Detaillierte Service-Beschreibungen
4. **Preise**: Transparente Preisgestaltung
5. **Referenzen**: Echte Kundenbewertungen
6. **Galerie**: Eindrucksvolle Zeremonie-Bilder
7. **Kontakt**: Formular und Kontaktdaten

## 🛠 Technische Details

- **HTML5**: Semantische Struktur
- **CSS3**: Moderne Features (Grid, Flexbox, Animationen)
- **Vanilla JavaScript**: Keine Abhängigkeiten
- **Responsive Design**: Mobile-First Ansatz
- **Barrierefreiheit**: WCAG-konforme Elemente

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 USPs (Unique Selling Points)

- ✅ Unbegrenztes Vorgespräch
- ✅ Komplette Prozessbegleitung
- ✅ 100% Preis-zurück-Garantie
- ✅ IHK-zertifizierte Rednerin
- ✅ 24-Stunden Rückmeldegarantie

## 🚀 Deployment

### Lokaler Server (Entwicklung)
```bash
# Node.js Server (läuft bereits)
node -e "const http=require('http');const fs=require('fs');const path=require('path');const server=http.createServer((req,res)=>{let filePath='.'+req.url;if(filePath==='./')filePath='./index.html';const extname=path.extname(filePath);const mimeTypes={'.html':'text/html','.css':'text/css','.js':'text/javascript','.jpg':'image/jpeg','.png':'image/png'};const contentType=mimeTypes[extname]||'application/octet-stream';fs.readFile(filePath,(error,content)=>{if(error){res.writeHead(404);res.end('File not found');}else{res.writeHead(200,{'Content-Type':contentType});res.end(content);}});});server.listen(8000,()=>console.log('Server running at http://localhost:8000'));"

# Alternative mit Python
python -m http.server 8000

# Alternative mit npm
npx http-server -p 8000
```

### Produktion
Für das Live-System:
1. Bilder durch echte Fotos ersetzen
2. Kontaktformular-Backend integrieren
3. Domain und Hosting einrichten
4. SSL-Zertifikat hinzufügen
5. Analytics implementieren

## 📞 Kontaktinformationen

**Marion Zwoch**  
Freie Rednerin (IHK)  
Berlin & Brandenburg  

📧 info@geschichten-atelier.de  
📱 +49 (0) 123 456 789  

## 🔄 Updates und Wartung

- **Bilder**: Platzhalter in `/assets/images/` durch echte Fotos ersetzen
- **Texte**: Inhalte in `index.html` anpassen
- **Styling**: CSS in `/assets/css/style.css` modifizieren
- **Funktionen**: JavaScript in `/assets/js/script.js` erweitern

## 📈 Performance-Optimierung

- Bilder komprimieren und optimieren
- CSS und JavaScript minimieren
- CDN für Fonts und Bibliotheken nutzen
- Lazy Loading für Bilder implementieren

---

*Erstellt mit ❤️ für Marion Zwoch und ihr wundervolles Geschichten-Atelier*
