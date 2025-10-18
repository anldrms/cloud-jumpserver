# 🚀 Deploy to GitHub Pages - Step by Step

## Prerequisites
- A GitHub account (create one at https://github.com if you don't have one)
- Git installed on your computer
- The cloud-jumpserver folder ready

## Step 1: Create GitHub Repository

1. Go to https://github.com and log in
2. Click the **"+"** button in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `cloud-jumpserver` (or your preferred name)
   - **Description**: "Multi-cloud operations platform with web terminal"
   - **Visibility**: Choose "Public" (required for free GitHub Pages)
   - **DO NOT** check "Initialize this repository with a README"
5. Click **"Create repository"**

## Step 2: Connect Local Repository to GitHub

Open your terminal and run these commands:

```bash
# Navigate to the project folder
cd /Users/anil.durmus/cloud-jumpserver

# Add the remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/cloud-jumpserver.git

# Verify the remote was added
git remote -v

# Push your code to GitHub
git push -u origin main
```

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your GitHub password)
  - Create token at: https://github.com/settings/tokens
  - Select scope: `repo` (full control of private repositories)

## Step 3: Enable GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Click **"Pages"** (left sidebar)
4. Under **"Source"**, select **"GitHub Actions"**
5. The deployment workflow is already configured!
6. Wait 2-3 minutes for the first deployment

### Method 2: Using Branch (Alternative)

1. Go to your repository on GitHub
2. Click **"Settings"** → **"Pages"**
3. Under **"Source"**, select **"Deploy from a branch"**
4. Choose branch: **"main"**
5. Choose folder: **"/ (root)"**
6. Click **"Save"**
7. Wait 2-3 minutes for deployment

## Step 4: Verify Deployment

1. Go back to **Settings** → **Pages**
2. You should see: "Your site is live at `https://YOUR-USERNAME.github.io/cloud-jumpserver/`"
3. Click the URL to visit your site
4. If you see a 404 error, wait a few more minutes and refresh

## Step 5: Check Deployment Status

1. Go to the **"Actions"** tab in your repository
2. You should see a workflow run (green checkmark = success)
3. If it failed (red X), click on it to see error details

## Troubleshooting

### Issue: "remote: Permission denied"
**Solution**: 
- Create a Personal Access Token at https://github.com/settings/tokens
- Use the token as your password when pushing
- Or set up SSH keys: https://docs.github.com/en/authentication

### Issue: "failed to push some refs"
**Solution**:
```bash
git pull origin main --rebase
git push origin main
```

### Issue: 404 Page Not Found
**Solutions**:
1. Wait 5-10 minutes for GitHub Pages to build
2. Check Settings → Pages to ensure it's enabled
3. Verify the repository is Public
4. Check Actions tab for build errors

### Issue: Workflow not running
**Solution**:
1. Go to **Settings** → **Actions** → **General**
2. Under "Workflow permissions", select "Read and write permissions"
3. Click "Save"
4. Re-run the workflow from the Actions tab

### Issue: CSS/JS not loading
**Solution**:
- Ensure all files are in the root directory
- Check browser console for 404 errors
- Verify file paths in index.html are relative (no leading `/`)

## Step 6: Update Your Site

To make changes after initial deployment:

```bash
# Make your changes to files
# Then commit and push

git add .
git commit -m "Description of your changes"
git push origin main
```

GitHub Pages will automatically rebuild and deploy your changes!

## Step 7: Custom Domain (Optional)

To use a custom domain like `jumpserver.yourdomain.com`:

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Add a CNAME file to your repository:
   ```bash
   echo "jumpserver.yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```
3. In your domain registrar's DNS settings:
   - Add a CNAME record pointing to `YOUR-USERNAME.github.io`
4. In GitHub Settings → Pages, enter your custom domain
5. Enable "Enforce HTTPS" (recommended)
6. Wait for DNS propagation (can take up to 48 hours)

## Step 8: Share Your Site

Your site is now live! Share it with:

```
🌐 Live Site: https://YOUR-USERNAME.github.io/cloud-jumpserver/
📦 Source Code: https://github.com/YOUR-USERNAME/cloud-jumpserver
```

### Add a Badge to Your README

Add this to your README.md:
```markdown
[![GitHub Pages](https://img.shields.io/badge/demo-online-green.svg)](https://YOUR-USERNAME.github.io/cloud-jumpserver/)
[![GitHub](https://img.shields.io/github/license/YOUR-USERNAME/cloud-jumpserver)](LICENSE)
```

## Monitoring Your Site

### GitHub Actions
- Check the **Actions** tab to see deployment history
- Each push triggers a new deployment
- View logs to debug issues

### Analytics (Optional)
Add Google Analytics:
1. Get tracking ID from analytics.google.com
2. Add to index.html before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## Security Best Practices

✅ **DO:**
- Keep repository public for free GitHub Pages
- Use HTTPS (automatic with GitHub Pages)
- Keep dependencies updated
- Add security headers (if using custom server)

❌ **DON'T:**
- Commit API keys or secrets
- Include sensitive data
- Store credentials in code
- Use HTTP for API calls

## Next Steps

1. ✅ **Customize content** - Update provider data, pricing
2. ✅ **Add your info** - Update README with your details
3. ✅ **Test thoroughly** - Check on different devices/browsers
4. ✅ **Share** - Tell your team/community
5. ✅ **Contribute** - Submit improvements back to original project
6. ✅ **Star the repo** - Show your support! ⭐

## Need Help?

- 📖 [GitHub Pages Documentation](https://docs.github.com/pages)
- 💬 [GitHub Community Forum](https://github.community)
- 🐛 [Report Issues](https://github.com/YOUR-USERNAME/cloud-jumpserver/issues)
- 📧 [Contact Support](https://support.github.com)

---

**Congratulations!** 🎉 Your Cloud Jumpserver is now live on GitHub Pages!

**URL**: `https://YOUR-USERNAME.github.io/cloud-jumpserver/`

**Remember**: Replace `YOUR-USERNAME` with your actual GitHub username in all commands and URLs.

---

## Quick Command Reference

```bash
# First time setup
git remote add origin https://github.com/YOUR-USERNAME/cloud-jumpserver.git
git push -u origin main

# Update your site
git add .
git commit -m "Your changes"
git push

# View deployment logs
# Go to: https://github.com/YOUR-USERNAME/cloud-jumpserver/actions

# Check site status
# Go to: https://YOUR-USERNAME.github.io/cloud-jumpserver/
```

🚀 Happy Deploying!
