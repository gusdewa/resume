# Resume Site

A modern, maintainable resume site built with Vite, React, TypeScript, and Tailwind CSS. Supports multiple resume variants via query parameters with automatic deployment to GitHub Pages.

## 🚀 Live Sites

- **Default Resume**: https://gusdewa.github.io/resume/
- **Alvarez & Marsal Variant**: https://gusdewa.github.io/resume/?for=alvarez-marsal

## 📋 Features

- **Type-Safe Content Management**: TypeScript-based content with complete type safety
- **Multiple Variants**: Support for different resume versions using query parameters
- **Print-Optimized**: Designed for PDF export and professional printing
- **Auto-Deploy**: GitHub Actions CI/CD pipeline for automatic deployment
- **Modern Stack**: Built with latest versions of Vite 6, React 18, TypeScript 5, and Tailwind CSS 4

## 🛠️ Tech Stack

- **Build Tool**: Vite 6.x
- **Framework**: React 18 + TypeScript 5
- **Styling**: Tailwind CSS 4.x with Vite plugin
- **Deployment**: GitHub Pages with GitHub Actions
- **Routing**: Client-side query parameter routing

## 📁 Project Structure

```
resume/
├── .github/workflows/
│   └── deploy.yml                  # GitHub Actions deployment
├── src/
│   ├── content/variants/
│   │   ├── default.ts              # Base resume content
│   │   └── alvarez-marsal.ts       # A&M variant overrides
│   ├── components/Resume/
│   │   ├── Resume.tsx              # Main container
│   │   ├── Header.tsx              # Header section
│   │   ├── Experience.tsx          # Experience list
│   │   ├── Education.tsx           # Education section
│   │   └── Skills.tsx              # Skills section
│   ├── hooks/
│   │   └── useVariant.ts           # Query param router
│   ├── lib/
│   │   └── variants.ts             # Deep merge utility
│   └── types/
│       └── resume.ts               # TypeScript interfaces
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/gusdewa/resume.git
cd resume

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/resume/`

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management

### Updating All Versions

Edit `src/content/variants/default.ts` with your changes. This is the base content that all variants inherit from.

### Updating Specific Variants

Edit the specific variant file (e.g., `src/content/variants/alvarez-marsal.ts`) to override only the fields that differ from the default.

### Adding New Variants

1. Create a new file in `src/content/variants/` (e.g., `new-variant.ts`)
2. Define your variant overrides using the `PartialResumeVariant` type
3. Register the variant in `src/hooks/useVariant.ts` in the `VARIANTS` map
4. Access your variant at `?for=new-variant`

Example:

```typescript
// src/content/variants/new-variant.ts
import type { PartialResumeVariant } from '../../types/resume';

export const newVariant: PartialResumeVariant = {
  metadata: {
    variantName: 'new-variant',
    title: 'Your Name - Resume (New Variant)',
    description: 'Your custom tagline',
  },
  header: {
    title: 'Your custom title',
  },
  // Override other fields as needed
};
```

```typescript
// src/hooks/useVariant.ts
import { newVariant } from '../content/variants/new-variant';

const VARIANTS: Record<string, VariantConfig> = {
  'alvarez-marsal': {
    name: 'Alvarez & Marsal',
    override: alvarezMarsalVariant,
  },
  'new-variant': {
    name: 'New Variant',
    override: newVariant,
  },
};
```

## 🖨️ Printing and PDF Export

The site is optimized for printing and PDF export:

1. Open the resume in your browser
2. Use browser print function (Cmd/Ctrl + P)
3. Configure:
   - Paper size: Letter (8.5" x 11")
   - Margins: Default
   - Scale: 100%
   - Background graphics: Enabled
4. Save as PDF or print

The print styles will automatically:
- Remove shadows and unnecessary decorations
- Optimize spacing and typography
- Ensure colors print correctly
- Prevent awkward page breaks

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

If you need to manually trigger deployment:

```bash
# Commit your changes
git add .
git commit -m "Update resume content"

# Push to main branch
git push origin main
```

The GitHub Actions workflow will automatically:
1. Install dependencies
2. Build the project
3. Deploy to GitHub Pages

## 🔗 URLs

- **Repository**: https://github.com/gusdewa/resume
- **Live Site**: https://gusdewa.github.io/resume/
- **With Variant**: https://gusdewa.github.io/resume/?for=variant-name

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

This is a personal resume site, but feel free to fork it and adapt it for your own use!

## 📧 Contact

Rahadian Dewandono
- Email: gusdewa@gmail.com
- LinkedIn: [linkedin.com/in/rdewa](https://linkedin.com/in/rdewa)
