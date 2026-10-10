# Project Roadmap

## Phase 1: Architecture & React Conversion `[COMPLETED]`
- [x] Scaffold Vite + React 19 environment inside `react-portfolio`
- [x] Port HTML markup into modular components (`Hero`, `Services`, `About`, `Skills`, `Projects`, `Experience`, `Certifications`, `Contact`, `Footer`)
- [x] Configure global CSS design tokens and layout styling
- [x] Port client hooks: `useScrollSpy`, `useAOS`, `smoothScroll`

## Phase 2: Micro-Interactions & Visual Verification `[COMPLETED]`
- [x] Implement WebGL GLSL shader in `AuroraCanvas.jsx` with proper cleanup
- [x] Implement cursor tracking 3D tilt on portrait in `Hero.jsx`
- [x] Configure rotating badge with SVG text path
- [x] Implement scroll-triggered easing counters in `About.jsx`
- [x] Build category filtering state in `Projects.jsx`

## Phase 3: Codebase Hygiene & Cleanup `[COMPLETED]`
- [x] Run `oxlint` and eliminate all warnings and unused variables
- [x] Remove unused template assets (e.g. boilerplate `icons.svg`)
- [x] Create branded SG monogram SVG favicon
- [x] Synchronize static case study files and resumes in `react-portfolio/public`
- [x] Update project documentation in `README.md` and `.gitignore`

## Phase 4: Full-Stack Integration & GSD System `[COMPLETED]`
- [x] Establish Get Shit Done (GSD) spec system in `.planning/`
- [x] Define `PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `STATE.md`, and `config.json`
- [x] Create Antigravity IDE `AGENTS.md` and workspace GSD skill
- [x] Verify API proxy between Vite dev server and Node.js Resend backend
- [x] Build interactive Double Diamond "How I Design" Process section (`DesignProcess.jsx`) with 4-phase stepper and responsive cards

## Phase 5: Production Deployment & Polish `[COMPLETED]`
- [x] Configure root monorepo scripts for seamless single-command execution (`dev`, `build`, `lint`, `preview`, `server`, `start`)
- [x] Configure production deployment pipeline (`vercel.json` targeting `react-portfolio/dist`)
- [x] Audit workspace, remove unwanted temporary files (`illustrator.svg`), and verify 0 linter/build errors across all 22 source files

## Phase 6: Vanilla HTML/CSS/JS Restoration & Enhancement `[COMPLETED]`
- [x] Converted full React application back into root semantic HTML5 (`index.html`), vanilla CSS3 (`styles.css`), and JavaScript (`script.js`)
- [x] Ported interactive Double Diamond "How I Design" process section into accessible vanilla DOM controller with 4-phase stepper and responsive cards
- [x] Integrated all 20 authentic high-resolution vector SVG brand logos and Adobe Illustrator card into HTML bento grid
- [x] Restored Node.js static & Resend API server (`server.js`) with clean URLs and direct root hosting
- [x] Configured `vercel.json` with static zero-build deployment (`outputDirectory: "."`)
- [x] Tested with browser subagent across all sections with 0 console errors and 0 warnings
