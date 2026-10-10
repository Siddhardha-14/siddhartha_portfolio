# Project: Siddhartha Gudiwada — Design Portfolio

## 1. Vision & Identity
A high-converting, modern portfolio showcasing **Siddhartha Gudiwada** as a premier **Product & UI/UX Designer**. The site demonstrates mastery across user research, enterprise design systems (e.g., PeoplePulse HRMS at Infotact Solutions), AI-native application prototyping (Lovable, Cursor, v0, Stitch), and front-end engineering.

## 2. Core Architecture
- **Frontend Core:** Semantic HTML5 + Vanilla CSS3 + Modern Vanilla JavaScript (ES6+)
- **Styling Architecture:** Vanilla CSS variables, responsive typography, glassmorphism, tailored dark/gold luxury theme
- **WebGL Shader Layer:** GLSL simplex noise aurora background running on HTML5 Canvas with fallback for reduced motion
- **Backend / Communication:** Node.js HTTP server (`server.js`) with Resend Mail API (`/api/send`) for recruiter message routing
- **Static & Case Study Engine:** Self-contained case study pages (`img2docx.html`) and downloadable interactive resumes (`resume.html`, `resume.pdf`)

## 3. Guiding Principles & Non-Negotiables
1. **Zero Context Rot:** All project architecture, changes, and backlog decisions must be reflected in `.planning/`.
2. **60fps Fluid Interactions:** Micro-interactions (3D tilt, marquee ribbon, counter easing, scroll-spy) must remain lightweight and performant.
3. **Accessibility First:** High contrast ratios, WCAG-compliant form inputs, responsive layouts from 360px mobile viewports to ultra-wide desktop monitors.
4. **Clean Codebase:** Zero unused variables, zero console errors, zero broken asset links.
