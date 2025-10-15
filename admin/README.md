# Content-Management System - Anleitung

Liebe Marion,

mit diesem System können Sie alle Texte Ihrer Website selbst bearbeiten und aktualisieren - ganz ohne Programmierkenntnisse!

## 🚀 So funktioniert's

### Variante 1: Visueller Editor (Empfohlen für Anfänger)

1. **Öffnen Sie den Content-Editor:**
   - Navigieren Sie zu: `D:\story\rede\admin\content-editor.html`
   - Doppelklick auf die Datei - sie öffnet sich in Ihrem Browser

2. **Seite auswählen:**
   - Links sehen Sie alle bearbeitbaren Seiten
   - Klicken Sie auf eine Seite (z.B. "Startseite" oder "Hochzeiten")

3. **Texte bearbeiten:**
   - Rechts erscheinen alle Textfelder der ausgewählten Seite
   - Klicken Sie in ein Feld und ändern Sie den Text nach Ihren Wünschen
   - Sie können auch HTML-Tags wie `<strong>fett</strong>` oder `<em>kursiv</em>` verwenden

4. **Speichern:**
   - Klicken Sie unten auf "Speichern"
   - Eine JSON-Datei wird heruntergeladen
   - Speichern Sie diese Datei im Ordner `D:\story\rede\content\`
   - **Wichtig:** Überschreiben Sie die alte Datei mit dem gleichen Namen!

5. **Fertig!**
   - Aktualisieren Sie Ihre Website im Browser (F5)
   - Die neuen Texte erscheinen sofort

### Variante 2: Direkte JSON-Bearbeitung (Für Fortgeschrittene)

Wenn Sie sich sicher fühlen, können Sie die JSON-Dateien auch direkt bearbeiten:

1. **Öffnen Sie die Content-Datei:**
   - Öffnen Sie den Ordner `D:\story\rede\content\`
   - Wählen Sie die Datei aus, die Sie bearbeiten möchten:
     - `hero-content.json` → Startseite
     - `wedding-content.json` → Hochzeitsseite
     - `memorial-content.json` → Trauerseite (kommt noch)

2. **Bearbeiten mit Editor:**
   - Öffnen Sie die Datei mit einem Text-Editor
   - **Empfehlung:** Verwenden Sie [Visual Studio Code](https://code.visualstudio.com/) (kostenlos)
   - Alternativ: Windows Notepad (Rechtsklick → "Bearbeiten")

3. **Text ändern:**
   ```json
   "title": "Alter Text"
   ```
   wird zu:
   ```json
   "title": "Neuer Text"
   ```

4. **Wichtige Regeln:**
   - Ändern Sie nur die Texte zwischen den `"` Anführungszeichen
   - Behalten Sie alle `{`, `}`, `[`, `]`, `:` und `,` Zeichen bei
   - Verwenden Sie `\"` wenn Sie Anführungszeichen im Text brauchen
   - Speichern Sie die Datei nach der Bearbeitung

5. **Überprüfen:**
   - Aktualisieren Sie Ihre Website (F5)
   - Falls etwas nicht funktioniert, haben Sie vermutlich ein Komma oder Anführungszeichen vergessen

## 📁 Datei-Übersicht

```
D:\story\rede\
├── content/                          ← Hier liegen alle Texte
│   ├── hero-content.json            ← Startseite mit Tabs
│   ├── wedding-content.json         ← Hochzeitsseite
│   ├── memorial-content.json        ← Trauerseite
│   └── contact-content.json         ← Kontaktseite
│
├── admin/                            ← Content-Management Tools
│   ├── content-editor.html          ← Visueller Editor (öffnen im Browser)
│   ├── content-editor.js            ← Technik (nicht anfassen)
│   └── README.md                    ← Diese Anleitung
│
├── components/                       ← Website-Komponenten
│   ├── html/                        ← Alte HTML-Dateien (werden nicht mehr verwendet)
│   └── js/
│       ├── content-renderer.js      ← Lädt JSON und macht daraus HTML
│       └── component-loader.js      ← Lädt alle Komponenten
│
└── index.html                        ← Haupt-Website
```

## ✏️ Häufige Bearbeitungen

### Preise ändern

**Datei:** `wedding-content.json`

Suchen Sie nach:
```json
"price": "ab 980,- Euro"
```

Ändern Sie zu:
```json
"price": "ab 1050,- Euro"
```

### Neue Fakten über sich hinzufügen

**Datei:** `hero-content.json`

Suchen Sie nach `"facts"` und fügen Sie hinzu:
```json
{
  "title": "Neuer Fakt",
  "text": "Beschreibung des neuen Fakts"
}
```

**Wichtig:** Vergessen Sie nicht das Komma vor dem neuen Eintrag!

### Intro-Text ändern

**Datei:** `hero-content.json` oder `wedding-content.json`

Suchen Sie nach `"intro"` oder `"description"` und ändern Sie den Text.

## 🛟 Hilfe & Fehlerbehebung

### Die Website zeigt nichts an

1. Öffnen Sie die Browser-Konsole (F12)
2. Schauen Sie nach Fehlermeldungen (rot markiert)
3. Meist: Ein Komma oder Anführungszeichen fehlt
4. Lösung: Setzen Sie die Datei zurück und versuchen Sie es nochmal

### JSON-Datei ist kaputt

1. Gehen Sie zu [jsonlint.com](https://jsonlint.com/)
2. Kopieren Sie Ihren JSON-Text hinein
3. Klicken Sie auf "Validate JSON"
4. Die Website zeigt Ihnen, wo der Fehler ist

### Sicherheitskopie erstellen

**Bevor Sie große Änderungen machen:**

1. Kopieren Sie den gesamten `content/` Ordner
2. Benennen Sie die Kopie um in `content-backup-2024-01-15` (mit aktuellem Datum)
3. Jetzt können Sie sicher experimentieren!

## 💡 Tipps

- **Kleine Schritte:** Ändern Sie erstmal nur eine Kleinigkeit und testen Sie
- **Backup:** Machen Sie regelmäßig Sicherheitskopien
- **Browser-Cache:** Manchmal müssen Sie mit Strg+F5 neu laden (hard refresh)
- **HTML im Text:** Sie können `<strong>`, `<em>`, `<br>` für Formatierung nutzen

## 🎨 HTML-Formatierung im Text

Sie können folgende HTML-Tags in Ihren Texten verwenden:

- `<strong>Text</strong>` → **fetter Text**
- `<em>Text</em>` → *kursiver Text*
- `<br>` → Zeilenumbruch
- `<a href="URL">Link-Text</a>` → Link

**Beispiel:**
```json
"text": "Das ist ein <strong>wichtiger</strong> Text mit einem <a href='https://example.com'>Link</a>."
```

## 📞 Support

Falls Sie Hilfe brauchen:

1. Machen Sie einen Screenshot der Fehlermeldung (falls vorhanden)
2. Notieren Sie, welche Datei Sie bearbeitet haben
3. Kontaktieren Sie Ihren Web-Entwickler

## 🎉 Viel Erfolg!

Sie schaffen das! Das Content-Management System ist so gebaut, dass Sie völlig selbstständig arbeiten können.

**Remember:** Im Zweifel immer erst ein Backup machen!

---

*Erstellt: Januar 2025*
*Letzte Aktualisierung: Januar 2025*
