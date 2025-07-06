# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page for Wander Japan, a short-form video platform showcasing hidden gems and authentic experiences in Japan for foreign travelers. The project is built with vanilla HTML, CSS (via Tailwind CDN), and JavaScript, deployed to GitHub Pages.

## Development Commands

### Local Development
```bash
# Install dependencies (if any)
npm install

# Start local development server
npm run dev
```

### Environment Setup
- Set `GEMINI_API_KEY` in `.env.local` for API integration (mentioned in README but not actively used in current implementation)
- Node.js is required for development

## Project Architecture

### Core Files
- `index.html` - Main landing page with complete structure
- `index.js` - Client-side JavaScript for dynamic content and interactions
- `package.json` - Minimal project configuration (ES modules)
- `metadata.json` - Project metadata for platform integration

### Key Components

#### Static Layout (`index.html`)
- Hero section with video background and call-to-action
- Features section explaining the platform value
- Dynamic experiences grid (populated by JavaScript)
- Social media integration and footer

#### Dynamic Content (`index.js`)
- Header scroll effects (transparent to solid background transition)
- Experience categories grid (10 predefined categories with emojis and external links)
- "How It Works" steps (3-step process: Watch, Save, Go)
- Copyright year auto-update

#### External Dependencies
- Tailwind CSS via CDN (`https://cdn.tailwindcss.com`)
- Google Fonts (Inter family)
- External video platform links (`wanderjapan.co`)

### Data Structure
- Experience categories: Array of objects with name, icon (emoji), and URL
- Steps: Array of objects with title, description, and SVG icons
- All external links point to `wanderjapan.co` domain

## Deployment

The project uses GitHub Actions for automatic deployment to GitHub Pages:
- Triggered on pushes to `main` branch
- No build process required (static files)
- Node.js 18 environment for consistency
- Direct file upload to GitHub Pages

## Development Notes

### Styling Approach
- Tailwind CSS classes for all styling
- Custom font (Inter) loaded from Google Fonts
- Responsive design with mobile-first approach
- Color scheme: stone/gray palette with red accents

### JavaScript Patterns
- DOM manipulation after `DOMContentLoaded`
- Event listeners for scroll effects
- Dynamic content injection via `innerHTML`
- External link handling with proper security attributes

### Content Management
- All content is hardcoded in JavaScript arrays
- Social media links are embedded throughout the page
- Experience categories link to external platform (`wanderjapan.co/vibes/`)

## File Structure
```
├── index.html          # Main landing page
├── index.js            # Client-side functionality
├── package.json        # Project configuration
├── metadata.json       # Platform metadata
├── README.md          # Setup instructions
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages deployment
```