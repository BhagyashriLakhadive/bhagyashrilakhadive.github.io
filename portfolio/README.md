# Bhagyashri Lakhadive — Portfolio

> Data Science Analyst · Financial Analytics · GenAI Development  
> Live at: **[your-vercel-url].vercel.app**

---

## Project Structure

```
portfolio/
├── index.html      # Main HTML — all sections, semantic markup
├── style.css       # All styles — CSS variables, layout, animations
├── script.js       # Custom cursor, scroll-reveal, active nav, form handler
├── avatar.png      # Profile photo (replace with your real photo — 3:4 ratio)
├── favicon.ico     # Browser tab icon (32×32 + 16×16)
└── README.md       # This file
```

---

## Tech Stack

| Layer       | Choice                                      |
|-------------|---------------------------------------------|
| Markup      | HTML5 — semantic, accessible                |
| Styling     | Vanilla CSS — CSS custom properties, Grid   |
| Scripts     | Vanilla JS — no frameworks, no build step   |
| Fonts       | Cormorant Garamond · DM Mono · Outfit       |
| Icons       | Font Awesome 6.4 (CDN)                      |
| Hosting     | Vercel (free tier)                          |

---

## Customisation Checklist

Before going live, update these in `index.html`:

- [ ] Replace `avatar.png` with your real photo (recommended: 400×533 px, JPG or PNG)
- [ ] Update GitHub links → your actual repo URLs for each project
- [ ] Add a LinkedIn URL if it changes
- [ ] Update the email address if needed
- [ ] Add new projects by duplicating a `.project-card` block

To change the accent colour, edit `--accent` in `style.css`:
```css
:root {
  --accent: #00d4ff;   /* change this */
  --accent2: #8b5cf6;  /* and this */
}
```

---

## Local Development

No build tools required. Just open in a browser:

```bash
# Option 1 — open directly
open index.html

# Option 2 — with VS Code Live Server
# Install the "Live Server" extension, right-click index.html → Open with Live Server

# Option 3 — with Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Deploying to Vercel

### Method A — Vercel CLI (recommended)

```bash
# 1. Install Vercel CLI (requires Node.js)
npm install -g vercel

# 2. Navigate to the portfolio folder
cd portfolio

# 3. Deploy
vercel

# Follow the prompts:
#   Set up and deploy? → Y
#   Which scope? → your account
#   Link to existing project? → N
#   Project name? → bhagyashri-portfolio (or any name)
#   Which directory is your code? → ./   (current folder)
#   Want to override settings? → N

# 4. Production deploy
vercel --prod
```

### Method B — GitHub + Vercel Dashboard (zero CLI)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the GitHub repo
4. Framework Preset → **Other**
5. Root Directory → leave blank (or `./`)
6. Click **Deploy**

### Method C — Drag & Drop (fastest, no GitHub needed)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Scroll to **"Or drag and drop your project"**
3. Drag the entire `portfolio/` folder into the upload zone
4. Vercel deploys instantly and gives you a live URL

---

## Common Deployment Failures & Fixes

| Symptom | Cause | Fix |
|---------|-------|-----|
| Blank page, no styles | `style.css` path wrong or missing | Ensure `style.css` is in the same folder as `index.html` |
| 404 on all pages | Root directory set incorrectly | In Vercel → Project Settings → Root Directory → set to `/` or leave blank |
| Favicon not showing | Browser cache | Hard refresh: Ctrl+Shift+R / Cmd+Shift+R |
| Avatar shows broken image | `avatar.png` not uploaded | Replace with your real photo and re-deploy |
| Form does nothing on click | JS blocked or file missing | Check `script.js` is in the same folder; check browser console for errors |
| Fonts not loading | Ad blocker or Google Fonts blocked | Fonts are CDN — they load in production; test in incognito mode |
| Deploy stuck at "Building" | Vercel treating it as a framework project | Set Framework Preset → **Other** in project settings |
| `vercel` command not found | Node / npm not installed | Install Node.js from [nodejs.org](https://nodejs.org), then `npm i -g vercel` |

---

## Performance Tips

- Compress `avatar.png` with [squoosh.app](https://squoosh.app) before deploying (target: < 150 KB)
- All external resources (Google Fonts, Font Awesome) are loaded via CDN — no extra config needed
- Vercel auto-applies gzip compression and serves from edge CDN globally

---

## Contact

**Bhagyashri Lakhadive**  
📧 bhagyashrilakhadive@gmail.com  
🔗 [linkedin.com/in/bhagyashri-lakhadive](https://www.linkedin.com/in/bhagyashri-lakhadive)  
💻 [github.com/BhagyashriLakhadive](https://github.com/BhagyashriLakhadive)

---

*© 2026 Bhagyashri Lakhadive · Pune, India*
