# Rolay Harvest - Premium Italian Ice Cream in UAE

A modern, bilingual (English/Arabic) web application for Rolay Harvest, the exclusive distributor of BCD Ice Cream products in the UAE.

## Features

- ✨ **Modern & Animated UI** - Built with Framer Motion for smooth animations
- 🌍 **Bilingual Support** - Full English and Arabic language support with RTL
- 📱 **Fully Responsive** - Optimized for all devices
- 🎨 **Premium Design** - Matching the Rolay Harvest brand aesthetic
- 🍦 **Product Showcase** - 4 product categories with detailed information
- 📧 **Contact Form** - Business inquiry form with validation

## Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool for fast development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **react-i18next** - Internationalization

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. **IMPORTANT: Add Logo**
   - Place the Rolay Harvest logo image as `public/logo.png`
   - The logo should be in PNG format with a transparent background
   - Recommended size: 300x300px or similar aspect ratio

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Footer with links
│   ├── LanguageSwitcher.jsx
│   ├── ProductCard.jsx
│   └── ContactForm.jsx
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   └── products/       # Product category pages
│       ├── Slushes.jsx
│       ├── Concentrated.jsx
│       ├── ReadyToUse.jsx
│       └── IceCream.jsx
├── data/               # Product data (JSON)
│   ├── slushes.json
│   ├── concentrated.json
│   ├── ready-to-use.json
│   └── ice-cream.json
├── i18n/               # Translations
│   ├── config.js
│   ├── en.json
│   └── ar.json
└── App.jsx             # Main app component
```

## Product Categories

1. **Slushes & Granita** - 30+ flavors of refreshing slush preparations
2. **Concentrated Preparations** - Milkshakes, hot chocolate, and beverage concentrates
3. **Ready-to-Use** - Professional gelato bases ready for immediate use
4. **Ice Cream & Soft Serve** - Authentic Italian gelato and soft serve products

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- **Navy**: #1e3a5f (Primary dark)
- **Gold**: #b8964f (Accent color)
- **Cream**: #f5f1e8 (Background)

### Translations

To add or modify translations, edit:
- `src/i18n/en.json` for English
- `src/i18n/ar.json` for Arabic

### Product Data

To add or update products, edit the JSON files in `src/data/`:
- Each product has English and Arabic names and descriptions
- Products support features, flavors, and other custom fields

## Contact Information

**Rolay Harvest Foodstuff Traders FZE**
- Location: Dubai, United Arab Emirates
- Partner: BCD Ice Cream (https://bcdicecream.com/)
- Since: Exclusive partnership since 1982

## License

© 2024 Rolay Harvest Foodstuff Traders FZE. All rights reserved.
