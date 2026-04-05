# AEY Studio GitHub Pages Package

## Files
- `index.html` → home page
- `project.html` → internal project page
- `styles.css` → full styling
- `js/projects.js` → add/edit project cards here
- `js/main.js` → theme, language, menu, animations
- `assets/logo-dynamic.svg` → dynamic SVG logo (changes color with theme)
- `assets/portrait.webp` → optimized hero image
- `assets/favicon.png` → static favicon

## Add a new project
Open `js/projects.js` and duplicate one object inside `window.AEY_PROJECTS`.

## GitHub Pages
1. Upload all files to a repo.
2. Go to Settings → Pages.
3. Deploy from `main` branch and `/root`.
4. Save.

## Notes
- Theme toggle is Apple-style.
- Logo is SVG and changes color automatically between dark and light.
- Favicon stays fixed as requested.
- No external font dependency for better speed.
