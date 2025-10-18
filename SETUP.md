# Cloud Jumpserver - Quick Setup Guide

## 🚀 Quick Start (5 minutes)

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com and sign up

2. **Create a new repository**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it: `cloud-jumpserver` (or any name you prefer)
   - Make it Public
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push your code to GitHub**
   ```bash
   cd /Users/anil.durmus/cloud-jumpserver
   git remote add origin https://github.com/YOUR-USERNAME/cloud-jumpserver.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings"
   - Click "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - Wait 2-3 minutes for deployment

5. **Access your site**
   - Your site will be available at: `https://YOUR-USERNAME.github.io/cloud-jumpserver`

### Option 2: Local Testing

Run locally using Python (built-in):
```bash
cd /Users/anil.durmus/cloud-jumpserver
python3 -m http.server 8000
```

Then open: http://localhost:8000

Or using Node.js:
```bash
npx http-server
```

### Option 3: Deploy to Other Platforms

#### Netlify
1. Sign up at https://netlify.com
2. Drag and drop the `cloud-jumpserver` folder
3. Your site is live!

#### Vercel
1. Sign up at https://vercel.com
2. Import your GitHub repository
3. Deploy with one click

#### Cloudflare Pages
1. Sign up at https://pages.cloudflare.com
2. Connect your GitHub repository
3. Deploy automatically

## 📝 Customization

### Change Colors
Edit `styles.css` lines 1-13:
```css
:root {
    --primary-color: #0066cc;     /* Change this */
    --secondary-color: #00cc99;   /* And this */
    /* ... */
}
```

### Add Your Information
Edit `README.md` and replace:
- `@yourusername` with your GitHub username
- `your.email@example.com` with your email

### Add Cloud Providers
Edit `cloud-data.js` and add to the `cloudProviders` object

## 🔧 Troubleshooting

### Site not loading?
- Check GitHub Actions status (repository > Actions tab)
- Ensure GitHub Pages is enabled in settings
- Wait a few minutes after enabling

### Terminal not working?
- Open browser console (F12) to check for errors
- Ensure JavaScript is enabled
- Try a different browser

### Styling issues?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check if CSS file is loading (Network tab in DevTools)

## 🎓 Next Steps

1. **Customize the content**
   - Add your own cloud provider data
   - Update pricing information
   - Add custom terminal commands

2. **Integrate APIs**
   - Add real WHOIS API
   - Integrate cloud pricing APIs
   - Add live status monitoring

3. **Share with others**
   - Share the URL with your team
   - Contribute improvements
   - Star the repository

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [HTML/CSS/JavaScript Tutorials](https://developer.mozilla.org/)
- [Cloud Provider APIs](https://aws.amazon.com/api-gateway/)

## 💡 Tips

- Use Ctrl+K (or Cmd+K on Mac) to focus the terminal
- Type `help` in terminal to see all commands
- All tools work offline (except API-dependent features)
- The site is fully responsive - works on mobile too!

## 🆘 Need Help?

- Open an issue on GitHub
- Check the CONTRIBUTING.md file
- Review the README.md for detailed documentation

---

**Congratulations!** 🎉 You now have your own Cloud Jumpserver platform!
