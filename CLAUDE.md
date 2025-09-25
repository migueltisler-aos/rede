# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "Geschichten-Atelier" by Marion Zwoch, a professional freelance speaker (IHK certified) for ceremonies and special occasions. The website is built with vanilla HTML, CSS, and JavaScript - no frameworks or build tools required.

## Development Commands

### Local Development Server
```bash
# Start local server on port 8000 (preferred method)
npx http-server -p 8000

# Alternative with Node.js built-in server
node -e "const http=require('http');const fs=require('fs');const path=require('path');const server=http.createServer((req,res)=>{let filePath='.'+req.url;if(filePath==='./')filePath='./index.html';const extname=path.extname(filePath);const mimeTypes={'.html':'text/html','.css':'text/css','.js':'text/javascript','.jpg':'image/jpeg','.png':'image/png'};const contentType=mimeTypes[extname]||'application/octet-stream';fs.readFile(filePath,(error,content)=>{if(error){res.writeHead(404);res.end('File not found');}else{res.writeHead(200,{'Content-Type':contentType});res.end(content);}});});server.listen(8000,()=>console.log('Server running at http://localhost:8000'));"

# Alternative with Python
python -m http.server 8000
```

Access the website at: **http://localhost:8000**

## Architecture & File Structure

```
geschichten-atelier-website/
├── index.html              # Single-page application with all sections
├── assets/
│   ├── css/
│   │   └── style.css       # All styles (responsive, mobile-first)
│   ├── js/
│   │   └── script.js       # Interactive functionality (vanilla JS)
│   ├── images/             # Website images
│   └── audio/              # Audio files (e.g., hoerprobe.mp3)
├── package.json            # Only contains http-server dev dependency
└── README.md               # Comprehensive project documentation
```

## Technical Details

- **Pure Static**: No build process, frameworks, or compilation needed
- **Single Page**: All content in `index.html` with anchor-based navigation
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Vanilla JavaScript**: No external JS dependencies
- **External Assets**: Google Fonts (Inter, Playfair Display) and Font Awesome icons via CDN

## Key Sections in index.html

1. **Navigation**: Fixed navbar with mobile hamburger menu
2. **Hero**: Main landing section with call-to-action
3. **About** (#about): Personal story and qualifications
4. **Services** (#services): Detailed service descriptions
5. **Pricing** (#pricing): Transparent pricing structure
6. **Testimonials** (#testimonials): Customer reviews
7. **Gallery** (#gallery): Ceremony photo showcase
8. **Contact** (#contact): Contact form and information

## Styling Architecture (assets/css/style.css)

- **Reset & Base**: Global styles and typography setup
- **Component-based**: Each section has dedicated styles
- **Responsive**: Mobile-first breakpoints (320px, 768px, 1200px)
- **Design System**: Consistent color palette with gradients (#667eea → #764ba2)
- **Typography**: Inter for body text, Playfair Display for headings

## JavaScript Functionality (assets/js/script.js)

- Mobile navigation toggle
- Smooth scrolling for anchor links
- Active navigation highlighting
- Contact form validation and submission
- Intersection Observer for scroll animations
- Gallery lightbox functionality

## Development Notes

- **Images**: Current images are placeholders - replace with real photos for production
- **Contact Form**: Currently frontend-only - needs backend integration for production
- **Content**: All German language content for Berlin/Brandenburg market
- **Performance**: Already optimized for fast loading with minimal dependencies