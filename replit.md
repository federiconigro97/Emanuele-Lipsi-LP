# DichiarazioneDiConsumo

## Overview
Italian language landing page for a consulting service related to electrical energy consumption declarations for businesses with installations over 20kW.

## Tech Stack
- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (CDN)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **AI Integration**: Google Gemini API

## Project Structure
```
/
├── components/          # React components
│   ├── About.tsx
│   ├── ContactForm.tsx
│   ├── FAQ.tsx
│   ├── Features.tsx
│   ├── GuideModal.tsx
│   ├── Hero.tsx
│   ├── LeadMagnet.tsx
│   ├── LegalModal.tsx
│   └── StrategyDashboard.tsx
├── services/
│   └── geminiService.ts # Google Gemini AI integration
├── App.tsx              # Main application component
├── index.tsx            # React entry point
├── index.html           # HTML template
├── types.ts             # TypeScript types
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies
```

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build` (outputs to `dist/`)

## Environment Variables
- `GEMINI_API_KEY`: Google Gemini API key for AI features

## Deployment
- Static deployment configured
- Build output: `dist/` directory
