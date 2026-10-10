# Requirements & Traceability Matrix

## Status Definitions
- `[COMPLETED]` — Built, verified in browser, and linter-checked.
- `[IN_PROGRESS]` — Currently being implemented or tested.
- `[PLANNED]` — In backlog for upcoming phases.

---

## Functional Requirements

| ID | Title | Description | Status |
| :--- | :--- | :--- | :--- |
| **REQ-01** | Projects Category Filter | Allow users to filter showcase items by *All*, *UI/UX Case Studies*, *AI-Native*, and *Wearables/IoT* without page reload. | `[COMPLETED]` |
| **REQ-02** | 3D Hero Portrait Tilt | Cursor-tracked perspective tilt on hero portrait with fine-pointer detection and smooth spring reset. | `[COMPLETED]` |
| **REQ-03** | WebGL Aurora Background | Custom simplex noise fragment shader on canvas with automatic pausing when scrolled out of view and reduced-motion fallback. | `[COMPLETED]` |
| **REQ-04** | Floating Pill Scroll-Spy Navbar | Dynamic active link highlighting based on viewport intersection with header offset correction. | `[COMPLETED]` |
| **REQ-05** | Mobile Slide-in Drawer | Accessible slide-out navigation for viewports under 768px with backdrop click and Escape key dismissal. | `[COMPLETED]` |
| **REQ-06** | Animated Stat Counters | Smooth ease-out counter animations triggered on intersection for project totals and graduation metrics. | `[COMPLETED]` |
| **REQ-07** | Contact & Recruiter Dispatch | Full contact form with validation, Resend API endpoint (`/api/send`), 1-click clipboard copy, and fallback `mailto:`. | `[COMPLETED]` |
| **REQ-08** | In-Browser Case Studies | Case study pages (e.g. `img2docx.html`) styled and linked cleanly from the React app. | `[COMPLETED]` |
| **REQ-09** | Resume Distribution | Multi-channel resume access via interactive HTML (`resume.html`) and direct PDF download (`resume.pdf`). | `[COMPLETED]` |
| **REQ-10** | Production Performance | Production build passing in under 1 second with 0 linter warnings or errors. | `[COMPLETED]` |
| **REQ-14** | Interactive Design Thinking Process | 4-phase Double Diamond interactive stepper (Discover, Define, Design, Deliver) with dynamic cards, tools chips, outcomes, and state transitions. | `[COMPLETED]` |
| **REQ-15** | Adobe Illustrator Skill & Original Logo | Official Adobe Illustrator vector badge (`#330000` background + `#ff9a00` 'Ai' letterforms) integrated into Skills bento grid with micro-interactions. | `[COMPLETED]` |
| **REQ-16** | Authentic Brand Logos for All Tools | Dedicated vector SVG brand marks for all tools (Figma, Framer, Lovable, Cursor, Stitch, v0, Antigravity, n8n, Make, Opal, SQL, HTML/CSS, Power BI, Jira, Notion, Slack, VS Code, Miro). | `[COMPLETED]` |

---

## Enhancement Backlog (v1.1)

| ID | Title | Description | Status |
| :--- | :--- | :--- | :--- |
| **REQ-11** | Dark/Light Mode Toggle | Optional theme toggle preserving current dark luxury palette as default. | `[PLANNED]` |
| **REQ-12** | Project Modal Previews | Quick modal overlay to preview interactive case study slides without leaving the main page. | `[PLANNED]` |
| **REQ-13** | Automated E2E Test Suite | Playwright automated smoke tests for critical user journeys (nav, form, links). | `[PLANNED]` |
