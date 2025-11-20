# Deployment Guide

## Pre-Deployment Checklist

- [ ] Add logo image to `public/logo.png`
- [ ] Test all pages in both English and Arabic
- [ ] Verify responsive design on mobile, tablet, and desktop
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Verify all product data is correct

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Deployment Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and configure everything
5. Deploy!

**Custom Domain**: Add your domain in Vercel dashboard

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### Option 3: Traditional Hosting

1. Build the project: `npm run build`
2. Upload contents of `dist/` folder to your web server
3. Configure web server to serve `index.html` for all routes (for client-side routing)

**Apache `.htaccess` example:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx config example:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Environment Setup

If you need environment variables (e.g., for form submission API):

1. Create `.env` file:
```env
VITE_API_URL=https://your-api-endpoint.com
VITE_CONTACT_EMAIL=info@royalharvest.com
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Performance Optimization

The app is already optimized with:
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Optimized images (use WebP format when possible)
- ✅ Minified CSS and JS
- ✅ Tree-shaking

## SEO Recommendations

1. **Meta Tags**: Update `index.html` with specific meta tags
2. **Sitemap**: Generate a sitemap.xml
3. **robots.txt**: Add to `public/` folder
4. **Analytics**: Add Google Analytics or similar

## Contact Form Integration

The contact form currently simulates submission. To make it functional:

1. **Option A**: Use a form service like Formspree, Basin, or Web3Forms
2. **Option B**: Create a backend API endpoint
3. **Option C**: Use serverless functions (Vercel Functions, Netlify Functions)

Example with Formspree:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  });
};
```

## SSL Certificate

Most modern hosting platforms (Vercel, Netlify) provide free SSL certificates automatically.

## Custom Domain

After deployment:
1. Add domain in hosting platform dashboard
2. Update DNS records with your domain provider
3. Wait for DNS propagation (up to 48 hours)

## Monitoring

Recommended monitoring tools:
- Google Analytics for traffic
- Sentry for error tracking
- Vercel Analytics or Netlify Analytics for performance

## Support

For issues or questions:
- Check the README.md for development setup
- Review component documentation in code comments
- Contact: [Your contact information]

