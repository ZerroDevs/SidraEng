# SIDRA Engineering & Construction

**SIDRA Engineering & Construction Company (شركة سدرة للهندسة والمقاولات)** is a modern, responsive, and bilingual corporate web platform built to showcase civil construction, infrastructure works, and project management services.

The platform provides a premium and industrial aesthetic tailored for construction companies, featuring dark/light modes, seamless English/Arabic localization with automatic LTR/RTL support, and high-performance interactive interfaces.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first, CSS Variables)
- **Internationalization:** `next-intl`
- **Theming:** `next-themes` (Dark / Light mode)
- **Icons:** `lucide-react`
- **Animations:** Tailwind CSS transitions & transforms

## ✨ Key Features

- **Bilingual & Bidirectional (i18n):** Native support for English (LTR) and Arabic (RTL). Text direction and layout seamlessly adapt based on the selected language.
- **Dynamic Theming:** Built-in Light and Dark themes, defaulting to a crisp corporate light mode with an optional deep steel charcoal dark mode.
- **Responsive Architecture:** Fully fluid layout adapting beautifully to mobile, tablet, and desktop viewports.
- **High-Impact Sections:**
  - **Hero:** Split layout with bold typography, brand-accented backdrops, and interactive CTA.
  - **Highlights:** Quick preview cards emphasizing Quality, Equipment, and Safety (HSE).
  - **Core Services:** Distinctly elevated cards detailing Civil Construction, Road & Infrastructure, and Project Management.
  - **Execution Methodology:** Step-by-step interactive workflow.
  - **Projects Showcase:** Responsive grid galleries for construction works.
  - **Cost Estimation & Inquiry:** Integrated contact and quote request form with accessible validation.

## 🎨 Brand Guidelines & Color Palette

- **Industrial Orange / Amber (Primary):**
  - Light mode: `#D97706` / `#E58A1F`
  - Dark mode: `#F59E0B`
- **Steel Charcoal / Navy (Neutral & Structure):**
  - Dark background / panels: `#0F172A` / `#111827` / `#161F30`
- **Typography:**
  - English (LTR): `GeistSans` or `Inter`
  - Arabic (RTL): `Cairo` or `IBM Plex Sans Arabic`

## 📂 Directory Structure

```text
SidraEng/
├── messages/               # i18n Translation dictionaries
│   ├── en.json             # English translations
│   └── ar.json             # Arabic translations
├── public/                 # Static assets (images, icons)
├── src/
│   ├── app/
│   │   └── [locale]/       # Localized pages (home, about, services, etc.)
│   ├── components/         # Reusable UI components
│   ├── i18n/               # next-intl configuration & routing
│   └── lib/                # Utilities and helpers
├── middleware.ts           # Intercepts requests for locale handling
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Getting Started

First, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser. The default locale is English (`/en`). You can switch to Arabic by navigating to `/ar` or using the built-in language switcher.

## 🌍 Translation Workflow (next-intl)

All textual content is strictly extracted from `messages/en.json` and `messages/ar.json`.
Do not hardcode display strings directly into `.tsx` files.

1. Add your new key-value pair to `messages/en.json`.
2. Provide the corresponding translation with the exact same key structure in `messages/ar.json`.
3. Use the `useTranslations` hook in your components:

```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('MyNamespace');
  return <h1>{t('title')}</h1>;
}
```

## 📄 License

This project is proprietary and confidential. Unauthorized copying, modifying, merging, publishing, distributing, or use of this source code is strictly prohibited.
