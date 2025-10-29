# Tailwind CSS v4 Configuration

## What Changed

Tailwind CSS v4 has moved to a new CSS-first configuration approach. Here's what was updated:

### 1. PostCSS Plugin
**Old (v3):**
```js
plugins: {
  tailwindcss: {},
  autoprefixer: {},
}
```

**New (v4):**
```js
plugins: {
  '@tailwindcss/postcss': {},
  autoprefixer: {},
}
```

### 2. CSS Configuration
Instead of `tailwind.config.js`, Tailwind v4 uses CSS custom properties:

**src/index.css:**
```css
@import "tailwindcss";

@theme {
  --color-navy: #1e3a5f;
  --color-gold: #b8964f;
  --color-cream: #f5f1e8;
  /* etc. */
}
```

### 3. What Was Fixed

- ✅ Installed `@tailwindcss/postcss` package
- ✅ Updated `postcss.config.js` to use new plugin
- ✅ Converted `tailwind.config.js` to CSS-based configuration
- ✅ Moved custom colors to `@theme` directive in CSS
- ✅ Removed old `tailwind.config.js` file

### 4. Custom Colors Available

You can now use these custom colors in your Tailwind classes:
- `navy`, `navy-dark`, `navy-light`
- `gold`, `gold-dark`, `gold-light`
- `cream`, `cream-dark`, `cream-light`

Example:
```html
<div class="bg-navy text-gold border-cream">...</div>
```

## Benefits of v4

- 🚀 Faster build times
- 📦 Smaller bundle size
- 🎨 CSS-native configuration
- ⚡ Better performance

Your website is now using the latest Tailwind CSS v4!

