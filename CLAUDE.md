# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 15.5.5 application bootstrapped with `create-next-app`, using:
- React 19.1.0
- TypeScript (strict mode enabled)
- Tailwind CSS v4
- Turbopack for faster builds
- App Router architecture

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start
```

Dev server runs at http://localhost:3000

## Architecture

### App Router Structure
- Uses Next.js App Router (app directory)
- `app/layout.tsx` - Root layout with Geist font configuration
- `app/page.tsx` - Home page component
- `app/globals.css` - Global Tailwind styles

### TypeScript Configuration
- Path alias `@/*` maps to project root
- Strict mode enabled
- Target: ES2017

### Fonts
- Geist Sans and Geist Mono loaded via `next/font/google`
- CSS variables: `--font-geist-sans`, `--font-geist-mono`

## Key Notes

- All build and dev commands use `--turbopack` flag for enhanced performance
- No test suite currently configured
- No linting configured in package.json
