# Mystic Sanctuary Deployment Guide

Your site is ready for deployment! Here are the best free hosting options:

## Option 1: Vercel (Recommended - Easiest)
**Free domain**: `your-app-name.vercel.app`

1. Go to https://vercel.com and sign up with GitHub
2. Click "Add New Project"
3. Import your GitHub repository (or upload the `mystic-sanctuary` folder)
4. Vercel will auto-detect React and configure everything
5. Click "Deploy"
6. Your site will be live in ~2 minutes!

## Option 2: Netlify
**Free domain**: `your-app-name.netlify.app`

1. Go to https://www.netlify.com and sign up
2. Drag and drop the `build` folder to the deployment area
   OR connect your GitHub repo
3. Site deploys automatically
4. Get your free `.netlify.app` domain

## Option 3: GitHub Pages
**Free domain**: `yourusername.github.io/mystic-sanctuary`

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/mystic-sanctuary",
   "scripts": {
     ...
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`
4. Go to repo Settings > Pages > Select gh-pages branch

## Option 4: Surge.sh
**Free domain**: `your-chosen-name.surge.sh`

1. Install surge: `npm install -g surge`
2. Run: `cd build && surge`
3. Choose your domain name
4. Site is live immediately!

## Setting Up Ads (Adsterra)

1. Sign up at https://publishers.adsterra.com
2. Add your site URL (once deployed)
3. Get your ad codes
4. Replace `YOUR_ADSTERRA_KEY_HERE` in HomePage.tsx with your actual key
5. Redeploy your site

## Important Notes

- All these services are 100% FREE
- You get HTTPS/SSL certificates automatically
- Custom domains can be added later if desired
- The site works without any backend/database
- All data is stored locally in the user's browser

## Quick Deploy Commands

```bash
# Build the production version
npm run build

# Test locally before deploying
npm install -g serve
serve -s build
# Visit http://localhost:3000

# Deploy to Vercel (if CLI installed)
vercel --prod

# Deploy to Netlify (if CLI installed)
netlify deploy --prod --dir=build
```

## After Deployment

1. Test all features on the live site
2. Add your Adsterra ad codes
3. Share your mystical sanctuary with the world!

Your site is ready to go live - no account system needed, completely free hosting!