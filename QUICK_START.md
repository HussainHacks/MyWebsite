# 🚀 QUICK START GUIDE - Cyberpunk Portfolio

## Launch Your Site

```bash
# Navigate to website directory
cd C:\Users\ahmed\OneDrive\Desktop\Claude-Code\claw-code-main\Website

# Development mode (with hot reload)
npm run dev
# Visit: http://localhost:3000

# Build for production
npm run build

# Start production build
npm start
```

---

## 🎨 Component Quick Reference

### Import All Components
```tsx
import MatrixBackground from "@/components/ui/MatrixBackground";
import GlitchText from "@/components/ui/GlitchText";
import CyberpunkDashboard from "@/components/ui/CyberpunkDashboard";
import SatelliteFeed from "@/components/ui/SatelliteFeed";
import Terminal from "@/components/ui/Terminal";
import CyberGrid from "@/components/ui/CyberGrid";
```

### Use in Pages
```tsx
<MatrixBackground />                    {/* Add scrolling matrix */}

<GlitchText 
  text="TITLE" 
  className="text-6xl"
/>                                      {/* Glitchy title */}

<CyberpunkDashboard 
  title="SYSTEM STATUS"
  data={[
    { label: 'KEY1', value: 'VAL1' },
    { label: 'KEY2', value: 'VAL2' }
  ]}
/>                                      {/* Terminal dashboard */}

<SatelliteFeed />                       {/* Live satellite data */}

<Terminal 
  commands={['INIT', 'READY']}
/>                                      {/* Command interface */}

<CyberGrid />                           {/* Grid background */}
```

---

## 🎨 CSS Classes

### Text Effects
```html
<span class="matrix-text">Green glow text</span>
<span class="accent-red">Red warning</span>
<span class="accent-cyan">Cyan highlight</span>
<span class="text-glitch">Glitchy text</span>
<span class="pulse-glow">Pulsing glow</span>
```

### Borders
```html
<div class="border-glow-green">Green border</div>
<div class="border-glow-red">Red border</div>
<div class="border-glow-cyan">Cyan border</div>
```

---

## 🎬 Animation Classes

| Class | Effect |
|-------|--------|
| `.matrix-fall` | Falling animation |
| `.pulse-glow` | Glow pulsing |
| `.text-glitch` | Text glitch RGB |
| `.crt-monitor` | CRT flicker |
| `.glitch` | Full glitch |

---

## 🔧 Customization

### Change Colors
Edit `src/app/globals.css`:
```css
:root {
  --matrix-green: #0f0;        /* Primary green */
  --accent-red: #ff0033;       /* Red accent */
  --accent-cyan: #00ffff;      /* Cyan accent */
}
```

### Adjust Animations
Find animation durations in `globals.css` and modify:
- `matrix-fall`: 8s (falling speed)
- `pulse-glow`: 2s (pulse rhythm)
- `glitch-1/2`: 2.5s (glitch speed)

---

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Upload .next folder to hosting
```

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 📞 Troubleshooting

### Build fails?
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Animations laggy?
- Check GPU acceleration in browser
- Reduce opacity values in components
- Close other browser tabs

---

## 🎓 File Locations

```
Website/
├── src/
│   ├── app/
│   │   ├── globals.css         ← Edit colors/animations here
│   │   ├── layout.tsx
│   │   └── page.tsx            ← Home page
│   └── components/ui/
│       ├── MatrixBackground.tsx
│       ├── GlitchText.tsx
│       ├── CyberpunkDashboard.tsx
│       ├── SatelliteFeed.tsx
│       ├── Terminal.tsx
│       └── CyberGrid.tsx
├── package.json
└── tailwind.config.ts
```

---

## ⚡ Performance Tips

- Matrix background is GPU-optimized
- All animations use CSS (not JS)
- Components use React hooks efficiently
- Build size: ~336KB (acceptable)

---

## 📚 Documentation Links

- **Full Guide**: `CYBERPUNK_DESIGN.md`
- **Build Report**: `REDESIGN_REPORT.md`
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## 🎮 Pro Tips

1. **Add to other pages**: Copy import statements to any page
2. **Customize data**: Pass different props to Dashboard/SatelliteFeed
3. **Add more components**: Create new ones in `src/components/ui/`
4. **Dark mode**: Already configured globally
5. **Mobile responsive**: Use Tailwind responsive classes (sm:, md:, lg:)

---

**You're all set! 🚀 Launch your cyberpunk portfolio now!**

For issues or questions, check the documentation files in the Website directory.
