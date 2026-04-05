# AEY Studio Website

Static bilingual portfolio website built for GitHub Pages.

## Included
- Arabic + English toggle
- Dark mode + light mode
- Fully responsive for desktop, tablet, and mobile
- Contact form wired to `formsubmit.co`
- WhatsApp button
- Internal project detail page system using `project.html?slug=...`

## Deploy to GitHub Pages
1. Create a new repository on GitHub.
2. Upload all files in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save. Your site will publish in a minute or two.

## Edit personal info
Main personal content is in:
- `index.html`
- `js/main.js`

## Add real projects
Open `js/projects.js` and duplicate one project object.
Edit:
- `slug`
- `category`
- `title`
- `summary`
- `services`
- `timeline`
- `role`
- `challenge`
- `solution`
- `outcome`

Each project card will automatically appear on the home page and open in:
- `project.html?slug=your-project-slug`

## Contact form note
The form uses `formsubmit.co`. On the first submission, the service may ask you to confirm the email address.

## Assets
- `assets/logo-dark.png`
- `assets/logo-light.png`
- `assets/portrait.jpg`
