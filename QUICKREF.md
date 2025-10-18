# Cloud Jumpserver - Quick Reference

## 🎯 Terminal Commands Cheat Sheet

### Cloud Information
```bash
aws              # Amazon Web Services info
azure            # Microsoft Azure info
gcp              # Google Cloud Platform info
alibaba          # Alibaba Cloud info
oracle           # Oracle Cloud info
ibm              # IBM Cloud info
list-clouds      # List all providers
```

### Comparison & Analysis
```bash
compare aws azure          # Compare two providers
pricing compute            # View pricing for service type
regions aws                # Show regions for provider
```

### Network Tools
```bash
whois example.com          # WHOIS lookup
ping google.com            # Ping/latency test
dns example.com            # DNS record lookup
cidr 10.0.0.0/24          # CIDR calculator
ip 8.8.8.8                 # IP block information
```

### System Commands
```bash
help             # Show all commands
clear / cls      # Clear terminal screen
echo <text>      # Echo text to terminal
date             # Show current date/time
pwd              # Print working directory
ls               # List available tools
about            # About the platform
```

## 🎨 Keyboard Shortcuts

- `Ctrl/Cmd + K` - Focus terminal input
- `↑` / `↓` - Navigate command history
- `Escape` - Close modal dialogs
- `Enter` - Execute command

## 📊 Cloud Providers Supported

| Provider | Regions | Services | Free Tier |
|----------|---------|----------|-----------|
| AWS | 32 | 200+ | ✅ Yes |
| Azure | 60+ | 200+ | ✅ Yes |
| GCP | 40+ | 100+ | ✅ Yes |
| Alibaba | 27 | 200+ | ⚠️ Limited |
| Oracle | 44 | 100+ | ✅ Yes |
| IBM | 8+ | 170+ | ✅ Yes |

## 🛠️ Tool Categories

### Network Tools
- **WHOIS Lookup** - Domain registration info
- **DNS Lookup** - DNS records (A, AAAA, MX, NS, TXT)
- **Ping Test** - Latency and connectivity
- **CIDR Calculator** - Subnet calculations
- **IP Block Info** - IP information and geolocation
- **Subnet Calculator** - Network segmentation

### Cloud Tools
- **Pricing Comparison** - Cost analysis across providers
- **Region Information** - Global datacenter locations
- **Provider Comparison** - Feature-by-feature analysis
- **Service Mapping** - Equivalent services across clouds

## 💰 Pricing Categories

- **Compute** - Virtual machines and instances
- **Storage** - Object storage, block storage, file storage
- **Database** - Managed database services
- **Network** - Data transfer and networking

## 🌍 Major Cloud Regions

### AWS Regions
- us-east-1 (N. Virginia)
- us-west-2 (Oregon)
- eu-west-1 (Ireland)
- ap-southeast-1 (Singapore)

### Azure Regions
- eastus (Virginia)
- westeurope (Netherlands)
- southeastasia (Singapore)
- uksouth (London)

### GCP Regions
- us-central1 (Iowa)
- europe-west1 (Belgium)
- asia-southeast1 (Singapore)
- asia-northeast1 (Tokyo)

## 🔧 Customization Tips

### Change Theme Colors
Edit `styles.css` CSS variables:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00cc99;
}
```

### Add New Command
Edit `terminal.js`:
```javascript
this.commands = {
    'mycommand': this.myCommandHandler.bind(this)
};
```

### Add Cloud Provider
Edit `cloud-data.js`:
```javascript
cloudProviders.newprovider = {
    name: 'New Provider',
    regions: [...],
    services: [...]
};
```

## 📱 Mobile Support

- ✅ Fully responsive design
- ✅ Touch-friendly interface
- ✅ Mobile-optimized terminal
- ✅ Adaptive layouts

## 🔗 API Integration Ideas

### Free APIs
- IP Geolocation: ipapi.co, ip-api.com
- DNS Lookup: Google DNS API
- WHOIS: WhoisXML API (free tier)

### Paid APIs
- AWS Price List API
- Azure Pricing API
- Cloud status APIs

## 📈 Performance Tips

- Use browser caching
- Minimize API calls
- Implement lazy loading
- Optimize images (if added)
- Use CDN for static assets

## 🎓 Learning Resources

### Cloud Certifications
- AWS Certified Solutions Architect
- Azure Administrator Associate
- Google Cloud Associate Engineer

### Documentation
- cloud.google.com/docs
- docs.aws.amazon.com
- docs.microsoft.com/azure

### Communities
- r/aws, r/azure, r/googlecloud
- Cloud Native Computing Foundation
- DevOps Stack Exchange

## 🚀 Deployment Checklist

- [ ] Update GitHub repository name
- [ ] Enable GitHub Pages
- [ ] Test on multiple browsers
- [ ] Verify mobile responsiveness
- [ ] Update README with your info
- [ ] Add custom domain (optional)
- [ ] Set up analytics (optional)
- [ ] Share with team

## ⚠️ Common Issues & Solutions

**Issue**: Terminal not responding
**Solution**: Refresh page, check browser console

**Issue**: Pricing data outdated
**Solution**: Update cloud-data.js with current prices

**Issue**: GitHub Pages not deploying
**Solution**: Check Actions tab, enable Pages in settings

**Issue**: Modal not closing
**Solution**: Click X button or press Escape

## 📞 Support & Community

- GitHub Issues: Report bugs
- Pull Requests: Contribute code
- Discussions: Ask questions
- Star: Show your support

---

**Quick Start**: Open terminal → Type `help` → Explore!

**Pro Tip**: Use `compare aws azure` to see detailed provider comparison

**Remember**: This is a learning and reference tool. Always verify pricing and features on official provider websites before making decisions.
