# Portfolio Website Implementation Plan

## Goal Description
Build a modern, interactive portfolio website for a Computer Engineering student (Hussain Jr) using Next.js, React, Three.js, TailwindCSS, and Framer Motion. The site will feature a dark theme with a neon/cyber aesthetic and include multiple 3D interactive elements, meeting university assignment requirements while looking highly professional.

## Setup and Architecture
- **Framework**: Next.js App Router (`src/app`)
- **Styling**: TailwindCSS with global `globals.css` configuration for dark/neon themes
- **Dependencies**:
  - `three`, `@react-three/fiber`, `@react-three/drei` (3D rendering)
  - `framer-motion` (UI animations and page transitions)
  - `lucide-react` (Icons)
  - `clsx`, `tailwind-merge` (Class utilities)

## Proposed Changes

### Configuration
#### [NEW] `tailwind.config.ts`
Add custom colors (neon blue/purple), glowing drop-shadows, and animation utilities.
#### [NEW] `src/app/globals.css`
Base styles, neon text shadows, futuristic scrollbars, and dark theme definitions.

### 3D Components
#### [NEW] `src/components/canvas/Scene.tsx`
Global Three.js canvas setup.
#### [NEW] `src/components/canvas/Earth.tsx`
Rotating high-tech 3D earth model for the Home page.
#### [NEW] `src/components/canvas/Particles.tsx`
Floating 3D particles system background for the About page.
#### [NEW] `src/components/canvas/Cube.tsx`
Interactive 3D rotating cube.
#### [NEW] `src/components/canvas/Grid.tsx`
Animated cyber-grid background for universal depth.

### UI Components
#### [NEW] `src/components/ui/Navbar.tsx`
Sticky navigation bar with glowing links (About, Resume, Projects, Essays, Contact).
#### [NEW] `src/components/ui/ProjectCard.tsx`
Framer motion powered card with 3D hover tilt effects for project displays.
#### [NEW] `src/components/ui/PageTransition.tsx`
Wrapper for smooth Framer Motion route transitions.

### Pages
#### [NEW] `src/app/page.tsx` (Home)
Animated hero section, rotating Earth, Title/Subtitle.
#### [NEW] `src/app/about/page.tsx`
Professional and natural bio on engineering, AI, and security interests over 3D particles.
#### [NEW] `src/app/resume/page.tsx`
Clean layout categorizing Education, Skills, and Experience.
#### [NEW] `src/app/projects/page.tsx`
Grid of four detailed engineering/software projects using `ProjectCard`.
#### [NEW] `src/app/essays/page.tsx`
List of placeholder essays (Ethics, 2320, 4940).
#### [NEW] `src/app/contact/page.tsx`
Email/GitHub/LinkedIn links with an animated grid background.

## Verification Plan

### Automated Tests
- Run `npm run build` to verify production build success.
- Run `npm run lint` to ensure zero ESLint/TypeScript errors.

### Manual Verification
- Start the dev server (`npm run dev`) and navigate through all routes.
- Verify 3D components render without WebGL errors in the console.
- Confirm animations (Framer Motion) trigger smoothly on scroll and page load.
- Validate the neon/dark theme aesthetic against the user's requirements.
