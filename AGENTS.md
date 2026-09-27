# AGENTS.md - SIDRA Engineering & Construction Platform

## Project Overview

A corporate website for SIDRA Engineering & Construction Company built with Next.js (App Router), Tailwind CSS, and `next-intl`[cite: 26]. The site mirrors the structural flow of the reference design (hero split banner, fast features grid, 3-column services, step-by-step workflow, project grid, quote inquiry form, client badges, and dark footer)[cite: 19, 20, 21, 22, 23, 24, 25].

## Core Guidelines & Constraints

1. **Bilingual Requirement (i18n):**
   - Default Locale: `en` (English - LTR)
   - Secondary Locale: `ar` (Arabic - RTL)
   - All text must reside in `messages/en.json` and `messages/ar.json`. Do not hardcode strings inside TSX files.

2. **Theming:**
   - Default Theme: Light Mode (`next-themes`).
   - Dark mode toggle with persisted preference.

3. **Color Palette (Derived from SIDRA Logo):**
   - Primary Industrial Accent: `#D97706` / `#E58A1F` (amber-600 / construction orange)[cite: 26]
   - Steel Charcoal (Dark sections/Headers): `#121721` / `#1E293B`
   - Chrome / Slate: `#64748B` / `#94A3B8`
   - Light Background: `#F8FAFC` / `#FFFFFF`

4. **Typography & Responsiveness:**
   - English: Sans-serif (Inter / Geist).
   - Arabic: Cairo or IBM Plex Sans Arabic.
   - Fully fluid layout adapted for mobile viewports (stacking grids) and desktop viewports (multi-column layouts)[cite: 19, 20, 21, 22, 23, 24, 25].
