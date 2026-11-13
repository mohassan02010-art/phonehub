# Phone Hub — Smartphone Discovery, Comparison & Finder Website

Phone Hub is a modern responsive web application for discovering, filtering, comparing, and matching smartphones based on user budget and hardware priorities.

## Architecture Overview

- **Frontend (`src/client/`)**: React + TypeScript + React Router with a bespoke responsive design system (`src/client/styles/global.css`) and dynamic SVG hardware illustrations (`src/client/components/PhoneIllustration.tsx`).
- **Backend API (`src/server/app.ts`, `src/server/index.ts`)**: Express REST API serving catalog search/filtering, phone details, batch lookups, the Phone Finder matching engine, and optional Gemini AI advisor endpoints.
- **Replaceable Data-Access Layer (`src/server/repositories/phoneRepository.ts`)**: Defines the `PhoneRepository` interface and `TemporarySamplePhoneRepository` implementation backed by clearly labeled temporary sample data (`src/server/repositories/temporarySampleData.ts`). No database is connected yet; swapping in PostgreSQL, SQLite, or MongoDB requires only implementing `PhoneRepository`.
- **Backend-Only Optional Gemini Integration (`src/server/services/geminiService.ts`)**: Reads `GEMINI_API_KEY` exclusively from server environment variables. If `GEMINI_API_KEY` is omitted or unavailable, all features (Catalog, Comparison, Phone Finder, and Advisor briefs) remain 100% functional using the built-in deterministic analysis engine.

## Getting Started

```bash
cd phone-hub-web
npm install
npm run dev
```

To enable optional Gemini AI assistance:
1. Copy `.env.example` to `.env`
2. Set `GEMINI_API_KEY=your_key_here`
3. Restart the server
