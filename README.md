# Devlyfi Portfolio Website

A modern, performant portfolio website built with Next.js 14+, TypeScript, TailwindCSS, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 16.0.2 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS v4 with custom brand color (#0354C4)
- **UI Components**: shadcn/ui (customized)
- **Animations**: GSAP (GreenSock Animation Platform)
- **Form Handling**: React Hook Form with Zod validation
- **Package Manager**: npm

## Project Structure

```
devlyfi-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── layout/            # Header, Footer, Navigation
│   │   ├── home/              # Home page components
│   │   ├── shared/            # Reusable components
│   │   └── animations/        # GSAP animation utilities
│   ├── lib/
│   │   ├── data/              # Centralized data (dummy.ts)
│   │   ├── types.ts           # TypeScript type definitions
│   │   └── utils.ts           # Utility functions
│   └── styles/
│       └── globals.css        # Global styles and Tailwind config
├── public/
│   └── images/                # Static images
└── components.json            # shadcn/ui configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Features

- ✅ Next.js 14+ with App Router
- ✅ TypeScript with strict mode
- ✅ TailwindCSS v4 with custom brand color (#0354C4)
- ✅ shadcn/ui components (customized)
- ✅ GSAP for professional animations
- ✅ React Hook Form + Zod for form validation
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized
- ✅ Performance optimized

## Custom Brand Color

The primary brand color (#0354C4) is configured throughout the application:
- CSS variables in `src/styles/globals.css`
- Used for primary buttons, links, and accents
- Consistent across light and dark modes

## Next Steps

1. Populate `src/lib/data/dummy.ts` with actual content
2. Create page components (About, Services, Works, Blog)
3. Implement GSAP animations
4. Add shadcn/ui components as needed
5. Build out the contact form with API route

## License

Private - All rights reserved
# devlyfi-portfolio
