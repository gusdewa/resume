# Resume Site

A modern, maintainable resume site built with Vite, React, TypeScript, and Tailwind CSS. Supports multiple resume variants via query parameters with automatic deployment to GitHub Pages.

## 🚀 Live Sites

- **Default Resume**: https://gusdewa.github.io/resume/
- **Alvarez & Marsal Variant**: https://gusdewa.github.io/resume/?for=a8f3c2d1-9e4b-4a7c-8d1f-2e5b6c7a8d9e

> **Note**: Variants use UUID-based routing for privacy. The UUID in the URL makes it less obvious which specific variant is being viewed. Legacy URLs like `?for=alvarez-marsal` are still supported for backwards compatibility.

## 📋 Features

- **Client-Side PDF Generation**: Download PDF button with optimized PDF layout using html2pdf.js
- **Type-Safe Content Management**: TypeScript-based content with complete type safety
- **Multiple Variants**: Support for different resume versions using UUID-based query parameters
- **Privacy-First Routing**: UUID-based URLs make it less obvious which variant is being viewed
- **Print-Optimized**: Designed for professional printing and PDF export
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
3. Generate a UUID for your variant (use any UUID generator)
4. Register the variant in `src/lib/variantMapping.ts` in the `VARIANT_CONFIGS` array
5. Access your variant at `?for=your-uuid`

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
// src/lib/variantMapping.ts
import { newVariant } from '../content/variants/new-variant';

export const VARIANT_CONFIGS: VariantConfig[] = [
  {
    id: 'a8f3c2d1-9e4b-4a7c-8d1f-2e5b6c7a8d9e', // Existing variant
    name: 'Alvarez & Marsal',
    override: alvarezMarsalVariant,
    legacyIds: ['alvarez-marsal'],
  },
  {
    id: 'f1e2d3c4-b5a6-4978-8869-7a6b5c4d3e2f', // Generate a new UUID
    name: 'New Variant',
    override: newVariant,
    legacyIds: ['new-variant'], // Optional: support legacy URLs
  },
];
```

**UUID Privacy**: Using UUIDs in URLs makes it less obvious which specific variant is being viewed. When someone receives a link like `?for=f1e2d3c4-b5a6-4978-8869-7a6b5c4d3e2f`, they won't immediately know it's the "New Variant" version.

## 📥 Downloading PDF

### One-Click PDF Download (Recommended)

The site includes a floating "Download PDF" button in the bottom-right corner:

1. Open your resume variant in the browser
2. Click the **"Download PDF"** button
3. Wait a few seconds while the PDF is generated
4. The PDF will automatically download to your device

Features of the generated PDF:
- Optimized layout specifically for PDF viewing
- Professional letter size (8.5" x 11")
- High-quality rendering (2x scale)
- Proper page breaks to avoid splitting sections awkwardly
- Automatic filename based on variant (e.g., `alvarez-marsal-resume.pdf`)

### Alternative: Browser Print

You can also use the browser's native print function:

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
- **UUID Variant**: https://gusdewa.github.io/resume/?for=uuid-here
- **Legacy Support**: https://gusdewa.github.io/resume/?for=variant-name (still works for backwards compatibility)

## 🔒 Privacy & Sharing

The site uses UUID-based routing for variants to provide privacy:

- **Default behavior**: Share URLs with UUIDs (e.g., `?for=a8f3c2d1-9e4b-4a7c-8d1f-2e5b6c7a8d9e`)
- **Benefit**: Recipients can't immediately tell which variant they're viewing
- **Legacy support**: Old URLs with readable names (e.g., `?for=alvarez-marsal`) still work
- **Recommendation**: When sharing with specific companies, use the UUID format

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

This is a personal resume site, but feel free to fork it and adapt it for your own use!

## 📧 Contact

Rahadian Dewandono
- Email: gusdewa@gmail.com
- LinkedIn: [linkedin.com/in/rdewa](https://linkedin.com/in/rdewa)
