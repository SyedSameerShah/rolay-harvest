# 🚀 Quick Start Guide - royal Harvest Website

## Step 1: Add Your Logo ⚠️ IMPORTANT

Your beautiful royal Harvest logo (the one with the crown, wheat, and navy/gold colors) needs to be saved:

1. **Save the logo image you provided in our chat**
2. **Name it**: `logo.png`
3. **Place it in**: `public/logo.png`

```
royal-harvest/
├── public/
│   └── logo.png  ← Put your logo here!
```

## Step 2: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (React, Tailwind, Framer Motion, etc.)

## Step 3: Start Development Server

```bash
npm run dev
```

The site will open at: **http://localhost:5173**

## Step 4: Test the Website

### Test in English:
1. Open http://localhost:5173
2. Navigate through all pages
3. Test the contact form
4. Check all product categories

### Test in Arabic:
1. Click the language switcher (top right)
2. Verify RTL layout works
3. Check all translations
4. Test navigation

## What You'll See

### Home Page (Single-page with sections):
- ✅ Animated hero with your logo
- ✅ About royal Harvest section
- ✅ Products overview (4 categories)
- ✅ Why choose us section
- ✅ Contact form

### Product Pages:
1. **Slushes** - `/products/slushes`
   - 30+ flavors
   - Search functionality
   
2. **Concentrated** - `/products/concentrated`
   - Milkshakes, hot chocolate, etc.
   
3. **Ready-to-Use** - `/products/ready-to-use`
   - Bases and mixes
   
4. **Ice Cream** - `/products/ice-cream`
   - Soft serve and gelato

## Common Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  navy: '#1e3a5f',    // Your primary color
  gold: '#b8964f',    // Your accent color
  cream: '#f5f1e8',   // Your background
}
```

### Update Content
- **Products**: Edit JSON files in `src/data/`
- **Translations**: Edit `src/i18n/en.json` and `src/i18n/ar.json`
- **Styles**: Use Tailwind classes in components

### Add More Products
1. Open the appropriate JSON file in `src/data/`
2. Add a new product object following the existing structure:
```json
{
  "id": "unique-id",
  "nameEn": "Product Name",
  "nameAr": "اسم المنتج",
  "descriptionEn": "Description...",
  "descriptionAr": "وصف...",
  "featuresEn": ["Feature 1", "Feature 2"],
  "featuresAr": ["ميزة 1", "ميزة 2"]
}
```

## Features Overview

### ✨ Animations
- Smooth page transitions
- Scroll-triggered fade-ins
- Hover effects on cards
- Parallax backgrounds

### 🌍 Languages
- Full English support
- Full Arabic support with RTL
- Easy language switching
- Persistent preference

### 📱 Responsive
- Mobile-first design
- Works on all screen sizes
- Touch-friendly navigation
- Optimized images

### 🎨 Design
- Matches your logo's aesthetic
- Navy and gold color scheme
- Professional typography
- Modern, clean layout

## Troubleshooting

### Logo not showing?
- ✅ Check file name is exactly `logo.png`
- ✅ Check it's in the `public/` folder
- ✅ Refresh the browser (Ctrl+F5)

### Styles not loading?
```bash
# Clear cache and restart
rm -rf node_modules
npm install
npm run dev
```

### Port already in use?
Vite will automatically use another port (5174, 5175, etc.)

## Next Steps

1. ✅ Add logo
2. ✅ Test in both languages
3. ✅ Customize content if needed
4. ✅ Build for production: `npm run build`
5. ✅ Deploy (see DEPLOYMENT.md)

## Need Help?

- 📖 Check **README.md** for detailed documentation
- 🚀 See **DEPLOYMENT.md** for hosting instructions
- 📋 See **PROJECT_SUMMARY.md** for complete feature list
- 📝 All code is commented for easy understanding

## Ready to Deploy?

Once you're happy with everything:

```bash
npm run build
```

Then follow the deployment guide in `DEPLOYMENT.md` to put your site live!

---

**Enjoy your new website! 🎉**

The royal Harvest website is ready to showcase your premium Italian ice cream products to the UAE market! 🍦🇦🇪

