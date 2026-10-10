# Siddhartha Gudiwada — Portfolio (React + Vite)

A modern, high-performance portfolio website built with React 19, Vite, and custom CSS. Features WebGL aurora shader background, interactive 3D card tilt, animated counter metrics, and responsive mobile navigation.

## Tech Stack
- **Framework:** React 19 + Vite
- **Styling:** CSS variables, responsive layouts, glassmorphism
- **Graphics:** Custom WebGL GLSL simplex noise shader
- **Icons:** FontAwesome 6
- **Typography:** Plus Jakarta Sans, Playfair Display, Caveat

## Project Structure
```
react-portfolio/
├── public/              # Static assets (images, case studies, resume PDF)
│   ├── assets/          # Project screenshots & profile images
│   ├── favicon.svg      # Custom SG monogram favicon
│   ├── img2docx.html    # In-depth case study page
│   ├── resume.html      # Formatted interactive resume
│   └── styles.css       # Shared styles for static pages
├── src/
│   ├── components/      # React section components
│   │   ├── About.jsx
│   │   ├── AuroraCanvas.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MarqueeTicker.jsx
│   │   ├── MobileDrawer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Skills.jsx
│   │   └── Toast.jsx
│   ├── hooks/           # Custom React hooks (useScrollSpy, useAOS)
│   ├── utils/           # Helper utilities (smoothScroll)
│   ├── App.jsx          # Root application component
│   ├── index.css        # Global design system & layout styles
│   └── main.jsx         # Application entry point
├── package.json
└── vite.config.js
```

## Getting Started

### Development Server
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```
